-- UE5 Learning Hub v3.7.0
-- Multi-teacher invite system. Unique, one-use, revocable teacher codes.

create table if not exists public.teacher_invites (
  id uuid primary key default gen_random_uuid(),
  code_hash text not null unique,
  code_hint text not null,
  label text not null default '',
  created_by uuid not null references public.profiles(id) on delete cascade,
  expires_at timestamptz not null default (now() + interval '7 days'),
  used_by uuid references public.profiles(id) on delete set null,
  used_at timestamptz,
  revoked_at timestamptz,
  created_at timestamptz not null default now(),
  constraint teacher_invites_label_check check (char_length(label) <= 120)
);

create index if not exists teacher_invites_created_by_idx
  on public.teacher_invites(created_by, created_at desc);

alter table public.teacher_invites enable row level security;

drop policy if exists "teacher reads own invites" on public.teacher_invites;
create policy "teacher reads own invites"
on public.teacher_invites
for select
to authenticated
using (
  created_by = (select auth.uid())
  and (select private.is_teacher())
);

create or replace function public.create_teacher_invite(p_label text default '', p_days integer default 7)
returns table(invite_id uuid, invite_code text, invite_hint text, expires_at timestamptz)
language plpgsql
security definer
set search_path = pg_catalog, public, extensions
as $$
declare
  v_user uuid := auth.uid();
  v_code text;
  v_norm text;
  v_hash text;
  v_id uuid;
  v_exp timestamptz;
  v_days integer := greatest(1, least(coalesce(p_days,7), 30));
begin
  if v_user is null or not private.is_teacher() then
    raise exception 'Teacher access required.';
  end if;

  v_code := 'TEACH-' || upper(encode(extensions.gen_random_bytes(12),'hex'));
  v_norm := upper(regexp_replace(v_code,'[^A-Za-z0-9]','','g'));
  v_hash := encode(extensions.digest(v_norm,'sha256'),'hex');
  v_exp := now() + make_interval(days => v_days);

  insert into public.teacher_invites(code_hash,code_hint,label,created_by,expires_at)
  values(v_hash,right(v_norm,6),left(btrim(coalesce(p_label,'')),120),v_user,v_exp)
  returning id into v_id;

  return query select v_id,v_code,right(v_norm,6),v_exp;
end;
$$;

create or replace function public.validate_teacher_invite(p_code text)
returns table(invite_label text, expires_at timestamptz)
language sql
stable
security definer
set search_path = pg_catalog, public, extensions
as $$
  select ti.label, ti.expires_at
  from public.teacher_invites ti
  where ti.code_hash = encode(extensions.digest(upper(regexp_replace(coalesce(p_code,''),'[^A-Za-z0-9]','','g')),'sha256'),'hex')
    and ti.revoked_at is null
    and ti.used_at is null
    and ti.expires_at > now()
  limit 1
$$;

create or replace function public.claim_teacher_invite(p_code text)
returns boolean
language plpgsql
security definer
set search_path = pg_catalog, public, extensions
as $$
declare
  v_user uuid := auth.uid();
  v_invite public.teacher_invites%rowtype;
  v_hash text;
begin
  if v_user is null then
    raise exception 'Sign in before claiming a teacher invite.';
  end if;

  v_hash := encode(extensions.digest(upper(regexp_replace(coalesce(p_code,''),'[^A-Za-z0-9]','','g')),'sha256'),'hex');

  select * into v_invite
  from public.teacher_invites
  where code_hash=v_hash
    and revoked_at is null
    and used_at is null
    and expires_at > now()
  for update;

  if v_invite.id is null then
    raise exception 'Teacher invite is invalid, expired, revoked or already used.';
  end if;

  update public.profiles set role='teacher' where id=v_user;
  if not found then
    raise exception 'Your Learning Hub profile is not ready yet. Sign in again and retry.';
  end if;

  update public.teacher_invites
  set used_by=v_user,used_at=now()
  where id=v_invite.id;

  insert into public.notifications(user_id,kind,title,body,link)
  values(v_invite.created_by,'system','Teacher invite claimed',
    case when btrim(v_invite.label)<>'' then v_invite.label || ' has claimed a teacher invite.'
         else 'A colleague has claimed your teacher invite.' end,
    '#/teacher');

  insert into public.notifications(user_id,kind,title,body,link)
  values(v_user,'system','Teacher access active','Your Learning Hub account now has Teacher access.','#/teacher');

  return true;
end;
$$;

create or replace function public.revoke_teacher_invite(p_invite_id uuid)
returns boolean
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  v_user uuid := auth.uid();
begin
  if v_user is null or not private.is_teacher() then
    raise exception 'Teacher access required.';
  end if;

  update public.teacher_invites
  set revoked_at=now()
  where id=p_invite_id
    and created_by=v_user
    and used_at is null
    and revoked_at is null;

  return found;
end;
$$;

revoke all on function public.create_teacher_invite(text,integer) from public;
revoke all on function public.validate_teacher_invite(text) from public;
revoke all on function public.claim_teacher_invite(text) from public;
revoke all on function public.revoke_teacher_invite(uuid) from public;

grant execute on function public.create_teacher_invite(text,integer) to authenticated;
grant execute on function public.validate_teacher_invite(text) to anon, authenticated;
grant execute on function public.claim_teacher_invite(text) to authenticated;
grant execute on function public.revoke_teacher_invite(uuid) to authenticated;

-- V3.6 one-time teacher bootstrap
create table if not exists private.teacher_bootstrap (
  id smallint primary key default 1 check (id=1),
  token_hash text not null,
  used_at timestamptz,
  used_by uuid references public.profiles(id) on delete set null
);

insert into private.teacher_bootstrap(id,token_hash)
values (1,'ff477e5858456a0dbb0257e7f5ddfaa4d2b98fad111f1b8c7b28df6894b2d62b')
on conflict(id) do nothing;

revoke all on private.teacher_bootstrap from public, anon, authenticated;

create or replace function private.validate_teacher_bootstrap(p_code text)
returns boolean
language sql stable security definer
set search_path=pg_catalog, public, private, extensions
as $$
  select exists(
    select 1 from private.teacher_bootstrap b
    where b.id=1 and b.used_at is null
      and b.token_hash=encode(extensions.digest(upper(regexp_replace(coalesce(p_code,''),'[^A-Za-z0-9]','','g')),'sha256'),'hex')
      and not exists(select 1 from public.profiles p where p.role='teacher')
  )
$$;
revoke all on function private.validate_teacher_bootstrap(text) from public;
grant execute on function private.validate_teacher_bootstrap(text) to anon, authenticated;

create or replace function public.validate_teacher_bootstrap(p_code text)
returns boolean language sql stable security invoker
set search_path=pg_catalog, private
as $$ select private.validate_teacher_bootstrap(p_code) $$;
revoke all on function public.validate_teacher_bootstrap(text) from public;
grant execute on function public.validate_teacher_bootstrap(text) to anon, authenticated;

create or replace function private.claim_teacher_bootstrap(p_code text)
returns boolean
language plpgsql security definer
set search_path=pg_catalog, public, private, extensions
as $$
declare v_user uuid:=auth.uid(); v_ok boolean:=false;
begin
  if v_user is null then raise exception 'Sign in before claiming teacher setup.'; end if;
  select exists(
    select 1 from private.teacher_bootstrap b
    where b.id=1 and b.used_at is null
      and b.token_hash=encode(extensions.digest(upper(regexp_replace(coalesce(p_code,''),'[^A-Za-z0-9]','','g')),'sha256'),'hex')
      and not exists(select 1 from public.profiles p where p.role='teacher')
  ) into v_ok;
  if not v_ok then raise exception 'Teacher setup code is invalid, already used, or a teacher already exists.'; end if;
  update public.profiles set role='teacher' where id=v_user;
  update private.teacher_bootstrap set used_at=now(),used_by=v_user where id=1 and used_at is null;
  return true;
end $$;
revoke all on function private.claim_teacher_bootstrap(text) from public, anon;
grant execute on function private.claim_teacher_bootstrap(text) to authenticated;

create or replace function public.claim_teacher_bootstrap(p_code text)
returns boolean language sql security invoker
set search_path=pg_catalog, private
as $$ select private.claim_teacher_bootstrap(p_code) $$;
revoke all on function public.claim_teacher_bootstrap(text) from public, anon;
grant execute on function public.claim_teacher_bootstrap(text) to authenticated;

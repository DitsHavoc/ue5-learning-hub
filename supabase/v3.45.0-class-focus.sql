-- v3.45.0 Student Journey — Class Focus
-- Already applied to Supabase project zuqjrxcdgevutyyzsmni on 2026-09-08.
-- Included in the release package as the authoritative schema record.

create table if not exists public.class_focus_items (
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null references public.classes(id) on delete cascade,
  title text not null,
  note text not null default '',
  href text not null,
  focus_kind text not null default 'custom',
  starts_at timestamptz not null default now(),
  ends_at timestamptz,
  created_by uuid not null references public.profiles(id) on delete restrict,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint class_focus_title_len check (char_length(btrim(title)) between 1 and 160),
  constraint class_focus_note_len check (char_length(note) <= 500),
  constraint class_focus_href_len check (char_length(href) between 1 and 500),
  constraint class_focus_kind_valid check (focus_kind in ('guided_path','unreal','theory','design','modeling','sculpt','tutorial','revision','reference','custom')),
  constraint class_focus_dates_valid check (ends_at is null or ends_at > starts_at)
);

create index if not exists class_focus_items_class_start_idx
  on public.class_focus_items(class_id, starts_at desc, created_at desc);

alter table public.class_focus_items enable row level security;
revoke all on table public.class_focus_items from anon, authenticated;

create or replace function public.get_my_class_focus()
returns table(
  class_id uuid,
  class_name text,
  focus_id uuid,
  title text,
  note text,
  href text,
  focus_kind text,
  starts_at timestamptz,
  ends_at timestamptz,
  is_active boolean,
  previous_id uuid,
  previous_title text,
  previous_href text,
  previous_ended_at timestamptz
)
language sql
stable
security definer
set search_path to 'pg_catalog','public','private'
as $function$
  with accessible as (
    select c.id, c.name
    from public.classes c
    where c.archived=false
      and (private.is_class_member(c.id) or private.teacher_has_class_access(c.id))
  )
  select
    a.id,
    a.name,
    case when cur.active then cur.id end as focus_id,
    case when cur.active then cur.title end as title,
    case when cur.active then cur.note end as note,
    case when cur.active then cur.href end as href,
    case when cur.active then cur.focus_kind end as focus_kind,
    case when cur.active then cur.starts_at end as starts_at,
    case when cur.active then cur.ends_at end as ends_at,
    coalesce(cur.active,false) as is_active,
    case when cur.active then prev.id else cur.id end as previous_id,
    case when cur.active then prev.title else cur.title end as previous_title,
    case when cur.active then prev.href else cur.href end as previous_href,
    case when cur.active then coalesce(prev.ends_at, cur.starts_at) else cur.ends_at end as previous_ended_at
  from accessible a
  left join lateral (
    select f.*, (f.ends_at is null or f.ends_at > now()) as active
    from public.class_focus_items f
    where f.class_id=a.id and f.starts_at <= now()
    order by f.starts_at desc, f.created_at desc
    limit 1
  ) cur on true
  left join lateral (
    select f.*
    from public.class_focus_items f
    where f.class_id=a.id
      and cur.id is not null
      and (f.starts_at < cur.starts_at or (f.starts_at=cur.starts_at and f.created_at < cur.created_at))
    order by f.starts_at desc, f.created_at desc
    limit 1
  ) prev on true
  order by a.name;
$function$;

create or replace function public.get_class_focus_schedule(p_class_id uuid)
returns table(
  id uuid,
  class_id uuid,
  title text,
  note text,
  href text,
  focus_kind text,
  starts_at timestamptz,
  ends_at timestamptz,
  created_at timestamptz,
  updated_at timestamptz
)
language plpgsql
stable
security definer
set search_path to 'pg_catalog','public','private'
as $function$
begin
  if not private.teacher_has_class_access(p_class_id) then
    raise exception 'Teacher access required';
  end if;
  return query
    select f.id,f.class_id,f.title,f.note,f.href,f.focus_kind,f.starts_at,f.ends_at,f.created_at,f.updated_at
    from public.class_focus_items f
    where f.class_id=p_class_id
      and (f.ends_at is null or f.ends_at > now() - interval '30 days')
    order by f.starts_at desc, f.created_at desc
    limit 50;
end
$function$;

create or replace function public.save_class_focus_item(
  p_class_id uuid,
  p_title text,
  p_href text,
  p_note text default '',
  p_focus_kind text default 'custom',
  p_starts_at timestamptz default null,
  p_ends_at timestamptz default null,
  p_item_id uuid default null
)
returns table(
  id uuid,
  class_id uuid,
  title text,
  note text,
  href text,
  focus_kind text,
  starts_at timestamptz,
  ends_at timestamptz,
  updated_at timestamptz
)
language plpgsql
security definer
set search_path to 'pg_catalog','public','private'
as $function$
declare
  v_title text := btrim(coalesce(p_title,''));
  v_note text := btrim(coalesce(p_note,''));
  v_href text := btrim(coalesce(p_href,''));
  v_kind text := coalesce(nullif(btrim(p_focus_kind),''),'custom');
  v_start timestamptz := coalesce(p_starts_at,now());
  v_id uuid;
begin
  if not private.teacher_has_class_access(p_class_id) then
    raise exception 'Teacher access required';
  end if;
  if char_length(v_title) < 1 or char_length(v_title) > 160 then raise exception 'Focus title must be 1 to 160 characters'; end if;
  if char_length(v_note) > 500 then raise exception 'Focus note must be 500 characters or fewer'; end if;
  if char_length(v_href) < 1 or char_length(v_href) > 500 then raise exception 'Choose a Hub link'; end if;
  if not (v_href like '#/%' or v_href in ('blueprint-checks.html','cheatsheet.html')) then raise exception 'Class Focus must point to an internal Hub page'; end if;
  if v_kind not in ('guided_path','unreal','theory','design','modeling','sculpt','tutorial','revision','reference','custom') then raise exception 'Invalid focus type'; end if;
  if p_ends_at is not null and p_ends_at <= v_start then raise exception 'End time must be after start time'; end if;

  if p_item_id is null then
    insert into public.class_focus_items(class_id,title,note,href,focus_kind,starts_at,ends_at,created_by)
    values(p_class_id,v_title,v_note,v_href,v_kind,v_start,p_ends_at,auth.uid())
    returning class_focus_items.id into v_id;
  else
    update public.class_focus_items f
      set title=v_title,note=v_note,href=v_href,focus_kind=v_kind,starts_at=v_start,ends_at=p_ends_at,updated_at=now()
      where f.id=p_item_id and f.class_id=p_class_id;
    if not found then raise exception 'Class Focus item not found'; end if;
    v_id:=p_item_id;
  end if;

  return query
    select f.id,f.class_id,f.title,f.note,f.href,f.focus_kind,f.starts_at,f.ends_at,f.updated_at
    from public.class_focus_items f where f.id=v_id;
end
$function$;

create or replace function public.delete_class_focus_item(p_item_id uuid)
returns boolean
language plpgsql
security definer
set search_path to 'pg_catalog','public','private'
as $function$
declare
  v_class_id uuid;
begin
  select f.class_id into v_class_id from public.class_focus_items f where f.id=p_item_id;
  if v_class_id is null then return false; end if;
  if not private.teacher_has_class_access(v_class_id) then raise exception 'Teacher access required'; end if;
  delete from public.class_focus_items where id=p_item_id;
  return true;
end
$function$;

revoke all on function public.get_my_class_focus() from public;
revoke all on function public.get_class_focus_schedule(uuid) from public;
revoke all on function public.save_class_focus_item(uuid,text,text,text,text,timestamptz,timestamptz,uuid) from public;
revoke all on function public.delete_class_focus_item(uuid) from public;
grant execute on function public.get_my_class_focus() to authenticated;
grant execute on function public.get_class_focus_schedule(uuid) to authenticated;
grant execute on function public.save_class_focus_item(uuid,text,text,text,text,timestamptz,timestamptz,uuid) to authenticated;
grant execute on function public.delete_class_focus_item(uuid) to authenticated;

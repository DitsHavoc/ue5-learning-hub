-- UE5 Learning Hub v3.6
-- Independent email/password authentication + class-code joining.
-- Safe additive migration for the existing V3.3+ schema.

alter table public.classes
  add column if not exists join_code text,
  add column if not exists join_enabled boolean not null default true;

update public.classes
set join_code = upper(substr(replace(gen_random_uuid()::text,'-',''),1,10))
where join_code is null or btrim(join_code) = '';

alter table public.classes
  alter column join_code set default upper(substr(replace(gen_random_uuid()::text,'-',''),1,10)),
  alter column join_code set not null;

do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname='classes_join_code_format_check'
      and conrelid='public.classes'::regclass
  ) then
    alter table public.classes
      add constraint classes_join_code_format_check
      check (join_code ~ '^[A-Z0-9]{8,16}$');
  end if;
end $$;

create unique index if not exists classes_join_code_upper_unique_idx
  on public.classes (upper(join_code));

create or replace function public.validate_class_join_code(p_code text)
returns table(class_name text, academic_year text)
language sql
stable
security definer
set search_path = pg_catalog, public
as $$
  select c.name, c.academic_year
  from public.classes c
  where c.join_enabled = true
    and c.archived = false
    and upper(c.join_code) = upper(regexp_replace(coalesce(p_code,''),'[^A-Za-z0-9]','','g'))
  limit 1
$$;

revoke all on function public.validate_class_join_code(text) from public;
grant execute on function public.validate_class_join_code(text) to anon, authenticated;

create or replace function public.join_class_by_code(p_code text)
returns table(class_id uuid, class_name text, academic_year text)
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  v_user uuid := auth.uid();
  v_class public.classes%rowtype;
  v_rows integer := 0;
begin
  if v_user is null then
    raise exception 'Sign in before joining a class.';
  end if;

  select *
  into v_class
  from public.classes c
  where c.join_enabled = true
    and c.archived = false
    and upper(c.join_code) = upper(regexp_replace(coalesce(p_code,''),'[^A-Za-z0-9]','','g'))
  limit 1;

  if v_class.id is null then
    raise exception 'That class code is invalid or no longer accepting joins.';
  end if;

  insert into public.class_members(class_id,user_id)
  values(v_class.id,v_user)
  on conflict(class_id,user_id) do nothing;

  get diagnostics v_rows = row_count;

  if v_rows > 0 then
    insert into public.notifications(user_id,kind,title,body,link)
    values(
      v_user,
      'class',
      'Joined ' || v_class.name,
      case when coalesce(v_class.academic_year,'') <> ''
        then 'You joined ' || v_class.name || ' (' || v_class.academic_year || ').'
        else 'You joined ' || v_class.name || '.'
      end,
      '#/progress'
    );
  end if;

  return query
    select v_class.id, v_class.name, v_class.academic_year;
end;
$$;

revoke all on function public.join_class_by_code(text) from public;
revoke all on function public.join_class_by_code(text) from anon;
grant execute on function public.join_class_by_code(text) to authenticated;

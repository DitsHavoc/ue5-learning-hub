-- UE5 Learning Hub v3.6.3
-- Fix circular RLS dependency between classes and class_members.

create or replace function private.is_class_member(p_class_id uuid)
returns boolean
language sql
stable
security definer
set search_path = pg_catalog, public
as $$
  select exists(
    select 1
    from public.class_members cm
    where cm.class_id = p_class_id
      and cm.user_id = (select auth.uid())
  );
$$;

create or replace function private.owns_class(p_class_id uuid)
returns boolean
language sql
stable
security definer
set search_path = pg_catalog, public
as $$
  select
    (select private.is_teacher())
    and exists(
      select 1
      from public.classes c
      where c.id = p_class_id
        and c.teacher_id = (select auth.uid())
    );
$$;

revoke all on function private.is_class_member(uuid) from public;
revoke all on function private.owns_class(uuid) from public;
grant usage on schema private to authenticated;
grant execute on function private.is_class_member(uuid) to authenticated;
grant execute on function private.owns_class(uuid) to authenticated;

drop policy if exists "classes readable by teacher or member" on public.classes;
create policy "classes readable by teacher or member"
on public.classes
for select
to authenticated
using (
  teacher_id = (select auth.uid())
  or (select private.is_class_member(id))
);

drop policy if exists "memberships readable by student or teacher" on public.class_members;
create policy "memberships readable by student or teacher"
on public.class_members
for select
to authenticated
using (
  user_id = (select auth.uid())
  or (select private.owns_class(class_id))
);

drop policy if exists "teacher inserts memberships" on public.class_members;
create policy "teacher inserts memberships"
on public.class_members
for insert
to authenticated
with check ((select private.owns_class(class_id)));

drop policy if exists "teacher deletes memberships" on public.class_members;
create policy "teacher deletes memberships"
on public.class_members
for delete
to authenticated
using ((select private.owns_class(class_id)));

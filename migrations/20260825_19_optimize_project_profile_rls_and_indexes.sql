-- V3.15 performance cleanup: merge teammate profile visibility into the existing scoped profile read policy.
drop policy if exists "project teammates read profiles" on public.profiles;
drop policy if exists "profiles scoped read" on public.profiles;
create policy "profiles scoped read" on public.profiles for select to authenticated
using (
  id=(select auth.uid())
  or (role='teacher' and (select auth.uid()) is not null)
  or (select private.teacher_can_access_student(id))
  or (select private.shares_project_with(id))
);
create index if not exists project_milestones_created_by_idx on public.project_milestones(created_by);

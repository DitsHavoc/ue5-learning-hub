drop policy if exists "projects member or class teacher read" on public.projects;
drop policy if exists "projects owner member or class teacher read" on public.projects;
create policy "projects owner member or class teacher read" on public.projects for select to authenticated using (owner_id=(select auth.uid()) or (select private.project_is_member(id,(select auth.uid()))) or (select private.teacher_can_access_project(id)));

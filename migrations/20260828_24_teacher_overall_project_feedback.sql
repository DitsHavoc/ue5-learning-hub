-- v3.34.6 — teacher overall project feedback
-- Project-level comments use update_id = null. Keep milestone comments scoped to update_id.

drop policy if exists "teachers add overall project feedback" on public.project_comments;
create policy "teachers add overall project feedback"
on public.project_comments for insert to authenticated
with check (
  author_id=(select auth.uid())
  and update_id is null
  and (select private.teacher_can_access_project(project_id))
  and exists(
    select 1 from public.projects p
    where p.id=project_id and p.status in ('active','complete')
  )
);

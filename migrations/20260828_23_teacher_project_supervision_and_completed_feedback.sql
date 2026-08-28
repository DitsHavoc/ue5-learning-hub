-- v3.34.5 — teacher project supervision and completed-project feedback

create or replace function public.reopen_project(p_project_id uuid)
returns table(project_id uuid, status text)
language plpgsql
security definer
set search_path='pg_catalog','public','private'
as $$
declare
  v_user uuid := auth.uid();
  v_status text;
begin
  if v_user is null then
    raise exception 'Sign in first.';
  end if;

  if not ((select private.project_is_owner(p_project_id,v_user))
          or (select private.teacher_can_access_project(p_project_id))) then
    raise exception 'Project Lead or class teacher access required.';
  end if;

  select p.status into v_status
  from public.projects p
  where p.id=p_project_id;

  if v_status is null then
    raise exception 'Project not found.';
  end if;

  if v_status='archived' then
    raise exception 'Archived projects cannot be reopened here.';
  end if;

  if v_status<>'active' then
    update public.projects p
    set status='active',updated_at=now()
    where p.id=p_project_id;
  end if;

  return query
    select p.id,p.status
    from public.projects p
    where p.id=p_project_id;
end;
$$;

revoke all on function public.reopen_project(uuid) from public, anon;
grant execute on function public.reopen_project(uuid) to authenticated, service_role;

drop policy if exists "members or class teachers add project comments" on public.project_comments;
drop policy if exists "active members or class teachers add project comments" on public.project_comments;
create policy "members active or teachers review project comments"
on public.project_comments for insert to authenticated
with check (
  author_id=(select auth.uid())
  and update_id is not null
  and (
    ((select private.project_is_member(project_id,(select auth.uid())))
      and (select private.project_is_active(project_id)))
    or
    ((select private.teacher_can_access_project(project_id))
      and exists(
        select 1 from public.projects p
        where p.id=project_id and p.status in ('active','complete')
      ))
  )
);

drop policy if exists "authors update own project comments" on public.project_comments;
drop policy if exists "active authors update own project comments" on public.project_comments;
create policy "authors update own project comments while reviewable"
on public.project_comments for update to authenticated
using (
  author_id=(select auth.uid())
  and (
    (select private.project_is_active(project_id))
    or (
      (select private.teacher_can_access_project(project_id))
      and exists(
        select 1 from public.projects p
        where p.id=project_id and p.status='complete'
      )
    )
  )
)
with check (
  author_id=(select auth.uid())
  and (
    (select private.project_is_active(project_id))
    or (
      (select private.teacher_can_access_project(project_id))
      and exists(
        select 1 from public.projects p
        where p.id=project_id and p.status='complete'
      )
    )
  )
);

drop policy if exists "authors delete own project comments" on public.project_comments;
drop policy if exists "active authors delete own project comments" on public.project_comments;
create policy "authors delete own project comments while reviewable"
on public.project_comments for delete to authenticated
using (
  author_id=(select auth.uid())
  and (
    (select private.project_is_active(project_id))
    or (
      (select private.teacher_can_access_project(project_id))
      and exists(
        select 1 from public.projects p
        where p.id=project_id and p.status='complete'
      )
    )
  )
);

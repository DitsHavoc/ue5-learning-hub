-- v3.34.8 — teacher-published projects only
-- Students may no longer insert arbitrary working projects directly.
-- New student projects must be created from a published class template through
-- start_project_from_template(), which validates class membership and work mode.

-- Remove the broad direct INSERT route for student accounts.
drop policy if exists "students create owned projects" on public.projects;
drop policy if exists "users create owned projects" on public.projects;

-- The template starter now runs with definer privileges so it can create the
-- controlled project copy even though direct INSERT has no authenticated policy.
-- Every student-facing rule is explicitly rechecked inside the function.
create or replace function public.start_project_from_template(p_template_id uuid,p_project_type text)
returns table(project_id uuid,project_title text,join_code text)
language plpgsql
security definer
set search_path='pg_catalog','public','private'
as $$
declare
  t public.project_templates%rowtype;
  new_project public.projects%rowtype;
  uid uuid := (select auth.uid());
begin
  if uid is null then raise exception 'Sign in first'; end if;
  if not (select private.user_is_student(uid)) then
    raise exception 'Only student accounts can start project copies';
  end if;

  select * into t
  from public.project_templates
  where id=p_template_id and status='published';

  if t.id is null then raise exception 'That project template is not available'; end if;
  if not (select private.is_class_member(t.class_id)) then
    raise exception 'You are not a member of this class';
  end if;

  if p_project_type not in ('solo','group') then raise exception 'Choose individual or group'; end if;
  if t.work_mode='individual' and p_project_type<>'solo' then
    raise exception 'This project is individual work';
  end if;
  if t.work_mode='group' and p_project_type<>'group' then
    raise exception 'This project is group work';
  end if;

  if exists(
    select 1
    from public.projects p
    join public.project_members pm on pm.project_id=p.id
    where p.template_id=t.id and pm.user_id=uid
  ) then
    raise exception 'You already have a project for this template';
  end if;

  insert into public.projects(
    owner_id,title,project_type,project_kind,description,class_id,assessment_unit,status,template_id
  ) values (
    uid,t.title,p_project_type,t.project_kind,t.brief,t.class_id,t.assessment_unit,'active',t.id
  ) returning * into new_project;

  insert into public.project_milestones(project_id,title,description,status,sort_order,created_by)
  select new_project.id,m.title,m.description,'not_started',m.sort_order,uid
  from public.project_template_milestones m
  where m.template_id=t.id
  order by m.sort_order,m.created_at;

  return query select new_project.id,new_project.title,new_project.join_code;
end;
$$;

revoke all on function public.start_project_from_template(uuid,text) from public, anon;
grant execute on function public.start_project_from_template(uuid,text) to authenticated;

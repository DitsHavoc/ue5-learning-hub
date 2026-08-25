-- V3.15 hardening: keep privileged group-code logic private and expose SECURITY INVOKER wrappers.
create or replace function private.join_project_by_code_impl(p_code text)
returns table(project_id uuid, project_title text)
language plpgsql security definer
set search_path='pg_catalog','public'
as $$
declare p public.projects%rowtype;
begin
  if (select auth.uid()) is null then raise exception 'Sign in first'; end if;
  if not (select private.user_is_student((select auth.uid()))) then raise exception 'Only student accounts can join a student group project'; end if;
  select * into p from public.projects where upper(join_code)=upper(btrim(p_code)) and project_type='group' and status<>'archived' limit 1;
  if p.id is null then raise exception 'Project code not found or project is archived'; end if;
  insert into public.project_members(project_id,user_id,role) values(p.id,(select auth.uid()),'member') on conflict do nothing;
  return query select p.id,p.title;
end; $$;
revoke all on function private.join_project_by_code_impl(text) from public, anon;
grant execute on function private.join_project_by_code_impl(text) to authenticated, service_role;
create or replace function public.join_project_by_code(p_code text)
returns table(project_id uuid, project_title text)
language sql security invoker set search_path='pg_catalog','public','private'
as $$ select * from private.join_project_by_code_impl(p_code); $$;
revoke all on function public.join_project_by_code(text) from public, anon;
grant execute on function public.join_project_by_code(text) to authenticated, service_role;

create or replace function private.regenerate_project_join_code_impl(p_project_id uuid)
returns text language plpgsql security definer set search_path='pg_catalog','public'
as $$
declare candidate text;
begin
  if not (select private.project_is_owner(p_project_id,(select auth.uid()))) then raise exception 'Project owner access required'; end if;
  if not exists(select 1 from public.projects where id=p_project_id and project_type='group') then raise exception 'Only group projects have join codes'; end if;
  loop candidate := 'GRP-' || upper(substr(replace(gen_random_uuid()::text,'-',''),1,8)); exit when not exists(select 1 from public.projects p where p.join_code=candidate); end loop;
  update public.projects set join_code=candidate,updated_at=now() where id=p_project_id;
  return candidate;
end; $$;
revoke all on function private.regenerate_project_join_code_impl(uuid) from public, anon;
grant execute on function private.regenerate_project_join_code_impl(uuid) to authenticated, service_role;
create or replace function public.regenerate_project_join_code(p_project_id uuid)
returns text language sql security invoker set search_path='pg_catalog','public','private'
as $$ select private.regenerate_project_join_code_impl(p_project_id); $$;
revoke all on function public.regenerate_project_join_code(uuid) from public, anon;
grant execute on function public.regenerate_project_join_code(uuid) to authenticated, service_role;

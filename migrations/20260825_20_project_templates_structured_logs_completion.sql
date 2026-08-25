-- UE5 Learning Hub v3.16
-- Teacher project templates, structured development logs, image captions,
-- class-safe group joining, milestone permissions, and read-only completion.

-- ---------------------------------------------------------------------------
-- 1. Teacher-created project templates
-- ---------------------------------------------------------------------------
create table if not exists public.project_templates (
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null references public.classes(id) on delete cascade,
  created_by uuid not null references public.profiles(id) on delete cascade,
  title text not null check (char_length(title) between 1 and 160),
  project_kind text not null default 'assignment' check (project_kind in ('assignment','group_project','game_jam','practice','personal','client','other')),
  assessment_unit text not null default '',
  brief text not null default '',
  work_mode text not null default 'either' check (work_mode in ('individual','group','either')),
  status text not null default 'draft' check (status in ('draft','published','archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.project_template_milestones (
  id uuid primary key default gen_random_uuid(),
  template_id uuid not null references public.project_templates(id) on delete cascade,
  title text not null check (char_length(title) between 1 and 160),
  description text not null default '',
  sort_order integer not null default 0,
  created_by uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists project_templates_class_status_idx on public.project_templates(class_id,status,updated_at desc);
create index if not exists project_templates_created_by_idx on public.project_templates(created_by);
create index if not exists project_template_milestones_template_idx on public.project_template_milestones(template_id,sort_order,created_at);
create index if not exists project_template_milestones_created_by_idx on public.project_template_milestones(created_by);

alter table public.projects add column if not exists template_id uuid references public.project_templates(id) on delete set null;
create index if not exists projects_template_idx on public.projects(template_id);

create or replace function private.can_read_project_template(p_template_id uuid)
returns boolean
language sql stable security definer
set search_path='pg_catalog','public'
as $$
  select exists(
    select 1
    from public.project_templates t
    where t.id=p_template_id
      and (
        (select private.teacher_has_class_access(t.class_id))
        or (t.status='published' and (select private.is_class_member(t.class_id)))
      )
  );
$$;

create or replace function private.can_manage_project_template(p_template_id uuid)
returns boolean
language sql stable security definer
set search_path='pg_catalog','public'
as $$
  select exists(
    select 1
    from public.project_templates t
    where t.id=p_template_id
      and (select private.teacher_has_class_access(t.class_id))
  );
$$;

revoke all on function private.can_read_project_template(uuid) from public, anon;
grant execute on function private.can_read_project_template(uuid) to authenticated;
revoke all on function private.can_manage_project_template(uuid) from public, anon;
grant execute on function private.can_manage_project_template(uuid) to authenticated;

alter table public.project_templates enable row level security;
alter table public.project_template_milestones enable row level security;

drop policy if exists "project templates readable by class" on public.project_templates;
create policy "project templates readable by class" on public.project_templates for select to authenticated
using (
  (select private.teacher_has_class_access(class_id))
  or (status='published' and (select private.is_class_member(class_id)))
);

drop policy if exists "class teachers create project templates" on public.project_templates;
create policy "class teachers create project templates" on public.project_templates for insert to authenticated
with check (
  created_by=(select auth.uid())
  and (select private.is_teacher())
  and (select private.teacher_has_class_access(class_id))
);

drop policy if exists "class teachers update project templates" on public.project_templates;
create policy "class teachers update project templates" on public.project_templates for update to authenticated
using ((select private.teacher_has_class_access(class_id)))
with check ((select private.teacher_has_class_access(class_id)));

drop policy if exists "class teachers delete project templates" on public.project_templates;
create policy "class teachers delete project templates" on public.project_templates for delete to authenticated
using ((select private.teacher_has_class_access(class_id)));

drop policy if exists "template milestones readable by class" on public.project_template_milestones;
create policy "template milestones readable by class" on public.project_template_milestones for select to authenticated
using ((select private.can_read_project_template(template_id)));

drop policy if exists "class teachers create template milestones" on public.project_template_milestones;
create policy "class teachers create template milestones" on public.project_template_milestones for insert to authenticated
with check (created_by=(select auth.uid()) and (select private.can_manage_project_template(template_id)));

drop policy if exists "class teachers update template milestones" on public.project_template_milestones;
create policy "class teachers update template milestones" on public.project_template_milestones for update to authenticated
using ((select private.can_manage_project_template(template_id)))
with check ((select private.can_manage_project_template(template_id)));

drop policy if exists "class teachers delete template milestones" on public.project_template_milestones;
create policy "class teachers delete template milestones" on public.project_template_milestones for delete to authenticated
using ((select private.can_manage_project_template(template_id)));

create or replace function private.lock_project_template_identity()
returns trigger
language plpgsql
set search_path='pg_catalog','public'
as $$
begin
  if new.class_id is distinct from old.class_id
     or new.created_by is distinct from old.created_by
     or new.created_at is distinct from old.created_at then
    raise exception 'Template class, creator and creation time are immutable';
  end if;
  new.updated_at=now();
  return new;
end;
$$;

drop trigger if exists project_templates_lock_identity on public.project_templates;
create trigger project_templates_lock_identity before update on public.project_templates
for each row execute function private.lock_project_template_identity();

create or replace function private.lock_template_milestone_identity()
returns trigger
language plpgsql
set search_path='pg_catalog','public'
as $$
begin
  if new.template_id is distinct from old.template_id
     or new.created_by is distinct from old.created_by
     or new.created_at is distinct from old.created_at then
    raise exception 'Template milestone identity is immutable';
  end if;
  new.updated_at=now();
  return new;
end;
$$;

drop trigger if exists project_template_milestones_lock_identity on public.project_template_milestones;
create trigger project_template_milestones_lock_identity before update on public.project_template_milestones
for each row execute function private.lock_template_milestone_identity();

-- Students start a private project copy from a published template.
-- SECURITY INVOKER is intentional: normal table RLS remains in force.
create or replace function public.start_project_from_template(p_template_id uuid,p_project_type text)
returns table(project_id uuid,project_title text,join_code text)
language plpgsql
security invoker
set search_path='pg_catalog','public','private'
as $$
declare
  t public.project_templates%rowtype;
  new_project public.projects%rowtype;
begin
  if (select auth.uid()) is null then raise exception 'Sign in first'; end if;
  if not (select private.user_is_student((select auth.uid()))) then raise exception 'Only student accounts can start project copies'; end if;

  select * into t from public.project_templates where id=p_template_id and status='published';
  if t.id is null then raise exception 'That project template is not available'; end if;

  if not (select private.is_class_member(t.class_id)) then raise exception 'You are not a member of this class'; end if;
  if p_project_type not in ('solo','group') then raise exception 'Choose individual or group'; end if;
  if t.work_mode='individual' and p_project_type<>'solo' then raise exception 'This project is individual work'; end if;
  if t.work_mode='group' and p_project_type<>'group' then raise exception 'This project is group work'; end if;

  if exists(
    select 1 from public.projects p
    join public.project_members pm on pm.project_id=p.id
    where p.template_id=t.id and pm.user_id=(select auth.uid())
  ) then
    raise exception 'You already have a project for this template';
  end if;

  insert into public.projects(owner_id,title,project_type,project_kind,description,class_id,assessment_unit,status,template_id)
  values((select auth.uid()),t.title,p_project_type,t.project_kind,t.brief,t.class_id,t.assessment_unit,'active',t.id)
  returning * into new_project;

  insert into public.project_milestones(project_id,title,description,status,sort_order,created_by)
  select new_project.id,m.title,m.description,'not_started',m.sort_order,(select auth.uid())
  from public.project_template_milestones m
  where m.template_id=t.id
  order by m.sort_order,m.created_at;

  return query select new_project.id,new_project.title,new_project.join_code;
end;
$$;
revoke all on function public.start_project_from_template(uuid,text) from public, anon;
grant execute on function public.start_project_from_template(uuid,text) to authenticated;

-- ---------------------------------------------------------------------------
-- 2. Structured development logs + screenshot captions
-- ---------------------------------------------------------------------------
alter table public.project_updates drop constraint if exists project_updates_body_check;
alter table public.project_updates alter column body set default '';
alter table public.project_updates add column if not exists what_did text not null default '';
alter table public.project_updates add column if not exists why text not null default '';
alter table public.project_updates add column if not exists problems text not null default '';
alter table public.project_updates add column if not exists next_steps text not null default '';

alter table public.project_updates drop constraint if exists project_updates_body_max_check;
alter table public.project_updates add constraint project_updates_body_max_check check (char_length(body)<=5000);
alter table public.project_updates drop constraint if exists project_updates_what_did_max_check;
alter table public.project_updates add constraint project_updates_what_did_max_check check (char_length(what_did)<=4000);
alter table public.project_updates drop constraint if exists project_updates_why_max_check;
alter table public.project_updates add constraint project_updates_why_max_check check (char_length(why)<=3000);
alter table public.project_updates drop constraint if exists project_updates_problems_max_check;
alter table public.project_updates add constraint project_updates_problems_max_check check (char_length(problems)<=3000);
alter table public.project_updates drop constraint if exists project_updates_next_steps_max_check;
alter table public.project_updates add constraint project_updates_next_steps_max_check check (char_length(next_steps)<=3000);

alter table public.project_media add column if not exists caption text not null default '';
alter table public.project_media drop constraint if exists project_media_caption_max_check;
alter table public.project_media add constraint project_media_caption_max_check check (char_length(caption)<=500);

create or replace function private.lock_project_media_identity()
returns trigger
language plpgsql
set search_path='pg_catalog','public'
as $$
begin
  if new.id is distinct from old.id
     or new.project_id is distinct from old.project_id
     or new.update_id is distinct from old.update_id
     or new.uploader_id is distinct from old.uploader_id
     or new.storage_path is distinct from old.storage_path
     or new.original_name is distinct from old.original_name
     or new.mime_type is distinct from old.mime_type
     or new.size_bytes is distinct from old.size_bytes
     or new.created_at is distinct from old.created_at then
    raise exception 'Project media identity is immutable';
  end if;
  return new;
end;
$$;

drop trigger if exists project_media_lock_identity on public.project_media;
create trigger project_media_lock_identity before update on public.project_media
for each row execute function private.lock_project_media_identity();

-- Project uploads are screenshots/images only from v3.16 onward.
update storage.buckets
set public=false,
    file_size_limit=10485760,
    allowed_mime_types=array['image/png','image/jpeg','image/webp']
where id='project-media';

-- ---------------------------------------------------------------------------
-- 3. Read-only completion and project/milestone integrity
-- ---------------------------------------------------------------------------
create or replace function private.project_is_active(p_project_id uuid)
returns boolean
language sql stable security definer
set search_path='pg_catalog','public'
as $$
  select exists(select 1 from public.projects p where p.id=p_project_id and p.status='active');
$$;
revoke all on function private.project_is_active(uuid) from public, anon;
grant execute on function private.project_is_active(uuid) to authenticated;

create or replace function private.guard_project_update()
returns trigger
language plpgsql
set search_path='pg_catalog','public'
as $$
begin
  if new.owner_id is distinct from old.owner_id
     or new.project_type is distinct from old.project_type
     or new.template_id is distinct from old.template_id
     or new.class_id is distinct from old.class_id
     or new.created_at is distinct from old.created_at then
    raise exception 'Project ownership, mode, template, class and creation time are immutable';
  end if;

  if old.status in ('complete','archived') then
    if new.status<>'active'
       or new.title is distinct from old.title
       or new.project_kind is distinct from old.project_kind
       or new.description is distinct from old.description
       or new.assessment_unit is distinct from old.assessment_unit
       or new.due_date is distinct from old.due_date
       or new.join_code is distinct from old.join_code then
      raise exception 'Completed projects are read-only. Reopen the project before editing it.';
    end if;
  end if;

  new.updated_at=now();
  return new;
end;
$$;

drop trigger if exists projects_guard_update on public.projects;
create trigger projects_guard_update before update on public.projects
for each row execute function private.guard_project_update();

create or replace function private.guard_project_milestone_update()
returns trigger
language plpgsql
set search_path='pg_catalog','public'
as $$
declare can_structure boolean;
begin
  if new.project_id is distinct from old.project_id
     or new.created_by is distinct from old.created_by
     or new.created_at is distinct from old.created_at then
    raise exception 'Milestone project, creator and creation time are immutable';
  end if;

  can_structure := (select private.project_is_owner(old.project_id,(select auth.uid())))
                   or (select private.teacher_can_access_project(old.project_id));

  if not can_structure then
    if new.title is distinct from old.title
       or new.description is distinct from old.description
       or new.due_date is distinct from old.due_date
       or new.sort_order is distinct from old.sort_order then
      raise exception 'Team members can only mark a milestone complete or incomplete';
    end if;
    if new.status not in ('not_started','complete') then
      raise exception 'Team members can only mark a milestone complete or incomplete';
    end if;
  end if;

  new.updated_at=now();
  return new;
end;
$$;

drop trigger if exists project_milestones_guard_update on public.project_milestones;
create trigger project_milestones_guard_update before update on public.project_milestones
for each row execute function private.guard_project_milestone_update();

-- Tighten project creation: actual project work belongs to student accounts.
drop policy if exists "users create owned projects" on public.projects;
create policy "students create owned projects" on public.projects for insert to authenticated
with check (
  owner_id=(select auth.uid())
  and (select private.user_is_student((select auth.uid())))
  and (class_id is null or (select private.is_class_member(class_id)))
);

-- Completed projects remain readable but cannot be deleted/edited except for the
-- owner's explicit status change back to Active handled by the project trigger.
drop policy if exists "project owner deletes project" on public.projects;
create policy "active project owner deletes project" on public.projects for delete to authenticated
using ((select private.project_is_owner(id,(select auth.uid()))) and (select private.project_is_active(id)));

-- Membership metadata is editable only while a project is active.
drop policy if exists "members update own role label" on public.project_members;
create policy "active members update own role label" on public.project_members for update to authenticated
using (user_id=(select auth.uid()) and (select private.project_is_active(project_id)))
with check (user_id=(select auth.uid()) and (select private.project_is_active(project_id)));

drop policy if exists "owner removes members or member leaves" on public.project_members;
create policy "active owner removes members or member leaves" on public.project_members for delete to authenticated
using (
  role<>'owner' and (select private.project_is_active(project_id))
  and (user_id=(select auth.uid()) or (select private.project_is_owner(project_id,(select auth.uid()))))
);

-- Milestones: Project Lead + assigned class teachers structure them; all team
-- members can toggle complete/incomplete, with the trigger preventing other edits.
drop policy if exists "project owner creates milestones" on public.project_milestones;
drop policy if exists "project owner updates milestones" on public.project_milestones;
drop policy if exists "project owner deletes milestones" on public.project_milestones;
create policy "lead or teacher creates milestones" on public.project_milestones for insert to authenticated
with check (
  created_by=(select auth.uid())
  and (select private.project_is_active(project_id))
  and ((select private.project_is_owner(project_id,(select auth.uid()))) or (select private.teacher_can_access_project(project_id)))
);
create policy "team lead or teacher updates milestones" on public.project_milestones for update to authenticated
using (
  (select private.project_is_active(project_id))
  and ((select private.project_is_member(project_id,(select auth.uid()))) or (select private.teacher_can_access_project(project_id)))
)
with check (
  (select private.project_is_active(project_id))
  and ((select private.project_is_member(project_id,(select auth.uid()))) or (select private.teacher_can_access_project(project_id)))
);
create policy "lead or teacher deletes milestones" on public.project_milestones for delete to authenticated
using (
  (select private.project_is_active(project_id))
  and ((select private.project_is_owner(project_id,(select auth.uid()))) or (select private.teacher_can_access_project(project_id)))
);

-- Development log is editable by its author only while active.
drop policy if exists "members create own project updates" on public.project_updates;
drop policy if exists "authors update own project updates" on public.project_updates;
drop policy if exists "authors delete own project updates" on public.project_updates;
create policy "active members create own project updates" on public.project_updates for insert to authenticated
with check (
  author_id=(select auth.uid())
  and (select private.project_is_member(project_id,(select auth.uid())))
  and (select private.project_is_active(project_id))
);
create policy "active authors update own project updates" on public.project_updates for update to authenticated
using (author_id=(select auth.uid()) and (select private.project_is_active(project_id)))
with check (author_id=(select auth.uid()) and (select private.project_is_active(project_id)));
create policy "active authors delete own project updates" on public.project_updates for delete to authenticated
using (author_id=(select auth.uid()) and (select private.project_is_active(project_id)));

-- Image metadata/captions are user-owned and active-project only.
drop policy if exists "members add own project media" on public.project_media;
drop policy if exists "uploader deletes own project media" on public.project_media;
drop policy if exists "uploader updates own project media caption" on public.project_media;
create policy "active members add own project media" on public.project_media for insert to authenticated
with check (
  uploader_id=(select auth.uid())
  and (select private.project_is_member(project_id,(select auth.uid())))
  and (select private.project_is_active(project_id))
);
create policy "active uploader updates own project media caption" on public.project_media for update to authenticated
using (uploader_id=(select auth.uid()) and (select private.project_is_active(project_id)))
with check (uploader_id=(select auth.uid()) and (select private.project_is_active(project_id)));
create policy "active uploader deletes own project media" on public.project_media for delete to authenticated
using (uploader_id=(select auth.uid()) and (select private.project_is_active(project_id)));

-- Project comments are the feedback thread on a specific development-log entry.
drop policy if exists "members or class teachers add project comments" on public.project_comments;
drop policy if exists "authors update own project comments" on public.project_comments;
drop policy if exists "authors delete own project comments" on public.project_comments;
create policy "active members or class teachers add project comments" on public.project_comments for insert to authenticated
with check (
  author_id=(select auth.uid())
  and update_id is not null
  and (select private.project_is_active(project_id))
  and ((select private.project_is_member(project_id,(select auth.uid()))) or (select private.teacher_can_access_project(project_id)))
);
create policy "active authors update own project comments" on public.project_comments for update to authenticated
using (author_id=(select auth.uid()) and (select private.project_is_active(project_id)))
with check (author_id=(select auth.uid()) and (select private.project_is_active(project_id)));
create policy "active authors delete own project comments" on public.project_comments for delete to authenticated
using (author_id=(select auth.uid()) and (select private.project_is_active(project_id)));

-- Storage writes are also blocked once the project is complete.
create or replace function private.can_write_project_media_path(p_path text)
returns boolean language sql stable security definer
set search_path='pg_catalog','public'
as $$
  select split_part(p_path,'/',2)=((select auth.uid())::text)
     and (select private.project_is_member((select private.project_id_from_media_path(p_path)),(select auth.uid())))
     and (select private.project_is_active((select private.project_id_from_media_path(p_path))));
$$;
revoke all on function private.can_write_project_media_path(text) from public, anon;
grant execute on function private.can_write_project_media_path(text) to authenticated;

-- ---------------------------------------------------------------------------
-- 4. Class-safe group joining
-- ---------------------------------------------------------------------------
create or replace function private.join_project_by_code_impl(p_code text)
returns table(project_id uuid, project_title text)
language plpgsql security definer
set search_path='pg_catalog','public'
as $$
declare p public.projects%rowtype;
begin
  if (select auth.uid()) is null then raise exception 'Sign in first'; end if;
  if not (select private.user_is_student((select auth.uid()))) then raise exception 'Only student accounts can join a student group project'; end if;

  select * into p from public.projects
  where upper(join_code)=upper(btrim(p_code)) and project_type='group' and status='active'
  limit 1;

  if p.id is null then raise exception 'Project code not found or the project is not active'; end if;
  if p.class_id is not null and not (select private.is_class_member(p.class_id)) then
    raise exception 'This group project is only available to students in its linked class';
  end if;

  if p.template_id is not null and exists(
    select 1
    from public.projects other_p
    join public.project_members other_pm on other_pm.project_id=other_p.id
    where other_p.template_id=p.template_id
      and other_pm.user_id=(select auth.uid())
      and other_p.id<>p.id
  ) then
    raise exception 'You already belong to another group for this class project';
  end if;

  insert into public.project_members(project_id,user_id,role)
  values(p.id,(select auth.uid()),'member') on conflict do nothing;
  return query select p.id,p.title;
end;
$$;
revoke all on function private.join_project_by_code_impl(text) from public, anon, authenticated;
grant execute on function private.join_project_by_code_impl(text) to postgres, service_role;

-- Keep the existing SECURITY INVOKER public wrapper. It deliberately calls the
-- private implementation, whose only public entry point is this constrained RPC.
create or replace function public.join_project_by_code(p_code text)
returns table(project_id uuid, project_title text)
language sql
security invoker
set search_path='pg_catalog','public','private'
as $$ select * from private.join_project_by_code_impl(p_code); $$;
revoke all on function public.join_project_by_code(text) from public, anon;
grant execute on function public.join_project_by_code(text) to authenticated, service_role;

-- The public wrapper needs permission to call the private implementation while
-- preserving the wrapper-only API pattern used by the existing hardening pass.
grant execute on function private.join_project_by_code_impl(text) to authenticated;

-- ---------------------------------------------------------------------------
-- 5. Useful indexes added with the new workflow
-- ---------------------------------------------------------------------------
create index if not exists project_updates_updated_at_idx on public.project_updates(updated_at desc);
create index if not exists project_media_update_caption_idx on public.project_media(update_id,created_at);

-- Regenerating a join code is also a content change, so it is active-project only.
create or replace function private.regenerate_project_join_code_impl(p_project_id uuid)
returns text
language plpgsql security definer
set search_path='pg_catalog','public'
as $$
declare candidate text;
begin
  if not (select private.project_is_owner(p_project_id,(select auth.uid()))) then raise exception 'Project owner access required'; end if;
  if not exists(select 1 from public.projects where id=p_project_id and project_type='group' and status='active') then raise exception 'Only active group projects have join codes'; end if;
  loop
    candidate := 'GRP-' || upper(substr(replace(gen_random_uuid()::text,'-',''),1,8));
    exit when not exists(select 1 from public.projects p where p.join_code=candidate);
  end loop;
  update public.projects set join_code=candidate,updated_at=now() where id=p_project_id;
  return candidate;
end;
$$;
revoke all on function private.regenerate_project_join_code_impl(uuid) from public, anon;
grant execute on function private.regenerate_project_join_code_impl(uuid) to authenticated, service_role;

create or replace function public.regenerate_project_join_code(p_project_id uuid)
returns text
language sql
security invoker
set search_path='pg_catalog','public','private'
as $$ select private.regenerate_project_join_code_impl(p_project_id); $$;
revoke all on function public.regenerate_project_join_code(uuid) from public, anon;
grant execute on function public.regenerate_project_join_code(uuid) to authenticated, service_role;

-- UE5 Learning Hub v3.15: multi-project/group logbooks + request replies

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references public.profiles(id) on delete cascade,
  title text not null check (char_length(title) between 1 and 120),
  project_type text not null default 'solo' check (project_type in ('solo','group')),
  project_kind text not null default 'assignment' check (project_kind in ('assignment','group_project','game_jam','practice','personal','client','other')),
  description text not null default '',
  class_id uuid references public.classes(id) on delete set null,
  assessment_unit text not null default '',
  due_date date,
  status text not null default 'active' check (status in ('active','complete','archived')),
  join_code text unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.project_members (
  project_id uuid not null references public.projects(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  role text not null default 'member' check (role in ('owner','member')),
  role_label text not null default '',
  joined_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key(project_id,user_id)
);

create table if not exists public.project_milestones (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  title text not null check (char_length(title) between 1 and 160),
  description text not null default '',
  status text not null default 'not_started' check (status in ('not_started','in_progress','complete')),
  due_date date,
  sort_order integer not null default 0,
  created_by uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.project_updates (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  author_id uuid not null references public.profiles(id) on delete cascade,
  milestone_id uuid references public.project_milestones(id) on delete set null,
  entry_type text not null default 'progress' check (entry_type in ('progress','testing','problem','decision','reflection','contribution')),
  title text not null default '',
  body text not null check (char_length(body) between 1 and 5000),
  contribution text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.project_media (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  update_id uuid references public.project_updates(id) on delete cascade,
  uploader_id uuid not null references public.profiles(id) on delete cascade,
  storage_path text not null unique,
  original_name text not null,
  mime_type text not null default 'application/octet-stream',
  size_bytes bigint not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.project_comments (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  update_id uuid references public.project_updates(id) on delete cascade,
  author_id uuid not null references public.profiles(id) on delete cascade,
  body text not null check (char_length(body) between 1 and 3000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.request_replies (
  id uuid primary key default gen_random_uuid(),
  request_id uuid not null references public.student_requests(id) on delete cascade,
  author_id uuid not null references public.profiles(id) on delete cascade,
  body text not null check (char_length(body) between 1 and 3000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists projects_owner_idx on public.projects(owner_id);
create index if not exists projects_class_idx on public.projects(class_id);
create index if not exists project_members_user_idx on public.project_members(user_id);
create index if not exists project_milestones_project_idx on public.project_milestones(project_id);
create index if not exists project_updates_project_idx on public.project_updates(project_id,created_at desc);
create index if not exists project_updates_author_idx on public.project_updates(author_id);
create index if not exists project_updates_milestone_idx on public.project_updates(milestone_id);
create index if not exists project_media_project_idx on public.project_media(project_id);
create index if not exists project_media_update_idx on public.project_media(update_id);
create index if not exists project_media_uploader_idx on public.project_media(uploader_id);
create index if not exists project_comments_project_idx on public.project_comments(project_id,created_at);
create index if not exists project_comments_update_idx on public.project_comments(update_id);
create index if not exists project_comments_author_idx on public.project_comments(author_id);
create index if not exists request_replies_request_idx on public.request_replies(request_id,created_at);
create index if not exists request_replies_author_idx on public.request_replies(author_id);

create or replace function private.project_is_member(p_project_id uuid, p_user_id uuid default auth.uid())
returns boolean
language sql stable security definer
set search_path='pg_catalog','public'
as $$
  select p_user_id is not null and exists(
    select 1 from public.project_members pm
    where pm.project_id=p_project_id and pm.user_id=p_user_id
  );
$$;

create or replace function private.project_is_owner(p_project_id uuid, p_user_id uuid default auth.uid())
returns boolean
language sql stable security definer
set search_path='pg_catalog','public'
as $$
  select p_user_id is not null and exists(
    select 1 from public.projects p
    where p.id=p_project_id and p.owner_id=p_user_id
  );
$$;

create or replace function private.teacher_can_access_project(p_project_id uuid)
returns boolean
language sql stable security definer
set search_path='pg_catalog','public'
as $$
  select (select private.is_teacher()) and exists(
    select 1 from public.projects p
    where p.id=p_project_id
      and p.class_id is not null
      and (select private.teacher_has_class_access(p.class_id))
  );
$$;

create or replace function private.shares_project_with(p_other_user uuid)
returns boolean
language sql stable security definer
set search_path='pg_catalog','public'
as $$
  select exists(
    select 1
    from public.project_members mine
    join public.project_members theirs on theirs.project_id=mine.project_id
    where mine.user_id=(select auth.uid()) and theirs.user_id=p_other_user
  );
$$;

revoke all on function private.project_is_member(uuid,uuid) from public, anon;
grant execute on function private.project_is_member(uuid,uuid) to authenticated;
revoke all on function private.project_is_owner(uuid,uuid) from public, anon;
grant execute on function private.project_is_owner(uuid,uuid) to authenticated;
revoke all on function private.teacher_can_access_project(uuid) from public, anon;
grant execute on function private.teacher_can_access_project(uuid) to authenticated;
revoke all on function private.shares_project_with(uuid) from public, anon;
grant execute on function private.shares_project_with(uuid) to authenticated;

create or replace function private.prepare_project_insert()
returns trigger language plpgsql security definer
set search_path='pg_catalog','public'
as $$
declare candidate text;
begin
  new.updated_at=now();
  if new.project_type='solo' then
    new.join_code=null;
  elsif new.join_code is null or btrim(new.join_code)='' then
    loop
      candidate := 'GRP-' || upper(substr(replace(gen_random_uuid()::text,'-',''),1,8));
      exit when not exists(select 1 from public.projects p where p.join_code=candidate);
    end loop;
    new.join_code=candidate;
  end if;
  return new;
end;
$$;

create or replace function private.add_project_owner_membership()
returns trigger language plpgsql security definer
set search_path='pg_catalog','public'
as $$
begin
  insert into public.project_members(project_id,user_id,role)
  values(new.id,new.owner_id,'owner') on conflict do nothing;
  return new;
end;
$$;

drop trigger if exists projects_prepare_insert on public.projects;
create trigger projects_prepare_insert before insert on public.projects
for each row execute function private.prepare_project_insert();

drop trigger if exists projects_add_owner_membership on public.projects;
create trigger projects_add_owner_membership after insert on public.projects
for each row execute function private.add_project_owner_membership();

create or replace function private.lock_project_authorship()
returns trigger language plpgsql
set search_path='pg_catalog','public'
as $$
begin
  if tg_table_name='project_updates' then
    if new.author_id<>old.author_id or new.project_id<>old.project_id or new.created_at<>old.created_at then
      raise exception 'Project update authorship and creation metadata are immutable';
    end if;
  elsif tg_table_name='project_comments' then
    if new.author_id<>old.author_id or new.project_id<>old.project_id or new.created_at<>old.created_at then
      raise exception 'Project comment authorship and creation metadata are immutable';
    end if;
  elsif tg_table_name='project_members' then
    if new.project_id<>old.project_id or new.user_id<>old.user_id or new.role<>old.role or new.joined_at<>old.joined_at then
      raise exception 'Project membership identity and role are immutable';
    end if;
  elsif tg_table_name='request_replies' then
    if new.author_id<>old.author_id or new.request_id<>old.request_id or new.created_at<>old.created_at then
      raise exception 'Request reply authorship and creation metadata are immutable';
    end if;
  end if;
  new.updated_at=now();
  return new;
end;
$$;

drop trigger if exists project_updates_lock_authorship on public.project_updates;
create trigger project_updates_lock_authorship before update on public.project_updates
for each row execute function private.lock_project_authorship();
drop trigger if exists project_comments_lock_authorship on public.project_comments;
create trigger project_comments_lock_authorship before update on public.project_comments
for each row execute function private.lock_project_authorship();
drop trigger if exists project_members_lock_identity on public.project_members;
create trigger project_members_lock_identity before update on public.project_members
for each row execute function private.lock_project_authorship();
drop trigger if exists request_replies_lock_authorship on public.request_replies;
create trigger request_replies_lock_authorship before update on public.request_replies
for each row execute function private.lock_project_authorship();

create or replace function public.join_project_by_code(p_code text)
returns table(project_id uuid, project_title text)
language plpgsql security definer
set search_path='pg_catalog','public'
as $$
declare p public.projects%rowtype;
begin
  if (select auth.uid()) is null then raise exception 'Sign in first'; end if;
  if not (select private.user_is_student((select auth.uid()))) then raise exception 'Only student accounts can join a student group project'; end if;
  select * into p from public.projects
    where upper(join_code)=upper(btrim(p_code)) and project_type='group' and status<>'archived'
    limit 1;
  if p.id is null then raise exception 'Project code not found or project is archived'; end if;
  insert into public.project_members(project_id,user_id,role)
    values(p.id,(select auth.uid()),'member') on conflict do nothing;
  return query select p.id,p.title;
end;
$$;
revoke all on function public.join_project_by_code(text) from public, anon;
grant execute on function public.join_project_by_code(text) to authenticated;

create or replace function public.regenerate_project_join_code(p_project_id uuid)
returns text
language plpgsql security definer
set search_path='pg_catalog','public'
as $$
declare candidate text;
begin
  if not (select private.project_is_owner(p_project_id,(select auth.uid()))) then raise exception 'Project owner access required'; end if;
  if not exists(select 1 from public.projects where id=p_project_id and project_type='group') then raise exception 'Only group projects have join codes'; end if;
  loop
    candidate := 'GRP-' || upper(substr(replace(gen_random_uuid()::text,'-',''),1,8));
    exit when not exists(select 1 from public.projects p where p.join_code=candidate);
  end loop;
  update public.projects set join_code=candidate,updated_at=now() where id=p_project_id;
  return candidate;
end;
$$;
revoke all on function public.regenerate_project_join_code(uuid) from public, anon;
grant execute on function public.regenerate_project_join_code(uuid) to authenticated;

alter table public.projects enable row level security;
alter table public.project_members enable row level security;
alter table public.project_milestones enable row level security;
alter table public.project_updates enable row level security;
alter table public.project_media enable row level security;
alter table public.project_comments enable row level security;
alter table public.request_replies enable row level security;

-- Projects
create policy "projects owner member or class teacher read" on public.projects for select to authenticated
using (owner_id=(select auth.uid()) or (select private.project_is_member(id,(select auth.uid()))) or (select private.teacher_can_access_project(id)));
create policy "users create owned projects" on public.projects for insert to authenticated
with check (owner_id=(select auth.uid()));
create policy "project owner updates project" on public.projects for update to authenticated
using ((select private.project_is_owner(id,(select auth.uid()))))
with check (owner_id=(select auth.uid()));
create policy "project owner deletes project" on public.projects for delete to authenticated
using ((select private.project_is_owner(id,(select auth.uid()))));

-- Members
create policy "project members and class teachers read members" on public.project_members for select to authenticated
using ((select private.project_is_member(project_id,(select auth.uid()))) or (select private.teacher_can_access_project(project_id)));
create policy "members update own role label" on public.project_members for update to authenticated
using (user_id=(select auth.uid())) with check (user_id=(select auth.uid()));
create policy "owner removes members or member leaves" on public.project_members for delete to authenticated
using ((role<>'owner') and ((user_id=(select auth.uid())) or (select private.project_is_owner(project_id,(select auth.uid())))));

-- Milestones: team can read, owner structures project
create policy "project milestones read" on public.project_milestones for select to authenticated
using ((select private.project_is_member(project_id,(select auth.uid()))) or (select private.teacher_can_access_project(project_id)));
create policy "project owner creates milestones" on public.project_milestones for insert to authenticated
with check ((created_by=(select auth.uid())) and (select private.project_is_owner(project_id,(select auth.uid()))));
create policy "project owner updates milestones" on public.project_milestones for update to authenticated
using ((select private.project_is_owner(project_id,(select auth.uid())))) with check ((select private.project_is_owner(project_id,(select auth.uid()))));
create policy "project owner deletes milestones" on public.project_milestones for delete to authenticated
using ((select private.project_is_owner(project_id,(select auth.uid()))));

-- Development log: shared read, personal authorship
create policy "project updates read" on public.project_updates for select to authenticated
using ((select private.project_is_member(project_id,(select auth.uid()))) or (select private.teacher_can_access_project(project_id)));
create policy "members create own project updates" on public.project_updates for insert to authenticated
with check (author_id=(select auth.uid()) and (select private.project_is_member(project_id,(select auth.uid()))));
create policy "authors update own project updates" on public.project_updates for update to authenticated
using (author_id=(select auth.uid())) with check (author_id=(select auth.uid()));
create policy "authors delete own project updates" on public.project_updates for delete to authenticated
using (author_id=(select auth.uid()));

-- Media metadata
create policy "project media read" on public.project_media for select to authenticated
using ((select private.project_is_member(project_id,(select auth.uid()))) or (select private.teacher_can_access_project(project_id)));
create policy "members add own project media" on public.project_media for insert to authenticated
with check (uploader_id=(select auth.uid()) and (select private.project_is_member(project_id,(select auth.uid()))));
create policy "uploader deletes own project media" on public.project_media for delete to authenticated
using (uploader_id=(select auth.uid()));

-- Comments: students + assigned class teachers can discuss
create policy "project comments read" on public.project_comments for select to authenticated
using ((select private.project_is_member(project_id,(select auth.uid()))) or (select private.teacher_can_access_project(project_id)));
create policy "members or class teachers add project comments" on public.project_comments for insert to authenticated
with check (author_id=(select auth.uid()) and ((select private.project_is_member(project_id,(select auth.uid()))) or (select private.teacher_can_access_project(project_id))));
create policy "authors update own project comments" on public.project_comments for update to authenticated
using (author_id=(select auth.uid())) with check (author_id=(select auth.uid()));
create policy "authors delete own project comments" on public.project_comments for delete to authenticated
using (author_id=(select auth.uid()));

-- Feature request teacher replies
create policy "authenticated read request replies" on public.request_replies for select to authenticated using (true);
create policy "teachers add request replies" on public.request_replies for insert to authenticated
with check (author_id=(select auth.uid()) and (select private.is_teacher()));
create policy "teachers update own request replies" on public.request_replies for update to authenticated
using (author_id=(select auth.uid()) and (select private.is_teacher())) with check (author_id=(select auth.uid()) and (select private.is_teacher()));
create policy "teachers delete own request replies" on public.request_replies for delete to authenticated
using (author_id=(select auth.uid()) and (select private.is_teacher()));

-- Let project teammates resolve each other's display names, without exposing unrelated students.
create policy "project teammates read profiles" on public.profiles for select to authenticated
using ((select private.shares_project_with(id)));

-- Private project media bucket
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values('project-media','project-media',false,10485760,array['image/png','image/jpeg','image/webp','application/pdf'])
on conflict(id) do update set public=false,file_size_limit=excluded.file_size_limit,allowed_mime_types=excluded.allowed_mime_types;

create or replace function private.project_id_from_media_path(p_path text)
returns uuid language plpgsql immutable
set search_path='pg_catalog'
as $$
begin
  return split_part(p_path,'/',1)::uuid;
exception when others then return null;
end;
$$;

create or replace function private.can_read_project_media_path(p_path text)
returns boolean language sql stable security definer
set search_path='pg_catalog','public'
as $$
  select (select private.project_is_member((select private.project_id_from_media_path(p_path)),(select auth.uid())))
      or (select private.teacher_can_access_project((select private.project_id_from_media_path(p_path))));
$$;

create or replace function private.can_write_project_media_path(p_path text)
returns boolean language sql stable security definer
set search_path='pg_catalog','public'
as $$
  select split_part(p_path,'/',2)=((select auth.uid())::text)
     and (select private.project_is_member((select private.project_id_from_media_path(p_path)),(select auth.uid())));
$$;
revoke all on function private.project_id_from_media_path(text) from public, anon;
grant execute on function private.project_id_from_media_path(text) to authenticated;
revoke all on function private.can_read_project_media_path(text) from public, anon;
grant execute on function private.can_read_project_media_path(text) to authenticated;
revoke all on function private.can_write_project_media_path(text) from public, anon;
grant execute on function private.can_write_project_media_path(text) to authenticated;

create policy "project media storage read" on storage.objects for select to authenticated
using (bucket_id='project-media' and (select private.can_read_project_media_path(name)));
create policy "project media storage upload" on storage.objects for insert to authenticated
with check (bucket_id='project-media' and (select private.can_write_project_media_path(name)));
create policy "project media storage delete own" on storage.objects for delete to authenticated
using (bucket_id='project-media' and (select private.can_write_project_media_path(name)));

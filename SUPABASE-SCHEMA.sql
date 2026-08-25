
-- UE5 Learning Hub v3.0.0
-- Run this once in the Supabase SQL Editor.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default 'Student',
  role text not null default 'student' check (role in ('student','teacher')),
  created_at timestamptz not null default now()
);

create table if not exists public.lesson_progress (
  user_id uuid not null references public.profiles(id) on delete cascade,
  lesson_id text not null,
  completed boolean not null default false,
  quiz jsonb not null default '{}'::jsonb,
  completed_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (user_id, lesson_id)
);

create table if not exists public.student_projects (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  project_title text not null default 'Signal Lost',
  theme text not null default 'Abandoned research facility',
  pitch text not null default '',
  updated_at timestamptz not null default now()
);

create table if not exists public.project_progress (
  user_id uuid not null references public.profiles(id) on delete cascade,
  mechanic_id text not null,
  status text not null default 'not_started' check (status in ('not_started','building','complete')),
  notes text not null default '',
  updated_at timestamptz not null default now(),
  primary key (user_id, mechanic_id)
);

create table if not exists public.lesson_comments (
  id uuid primary key default gen_random_uuid(),
  lesson_id text not null,
  student_id uuid not null references public.profiles(id) on delete cascade,
  author_id uuid not null references public.profiles(id) on delete cascade,
  body text not null check (char_length(body) between 1 and 2000),
  created_at timestamptz not null default now()
);

create or replace function public.is_teacher()
returns boolean language sql stable security definer set search_path=public
as $$ select exists(select 1 from public.profiles where id=auth.uid() and role='teacher'); $$;

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path=public
as $$
begin
  insert into public.profiles(id,display_name)
  values(new.id,coalesce(
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'name',
    new.raw_user_meta_data->>'display_name',
    split_part(new.email,'@',1),
    'Student'
  ))
  on conflict(id) do nothing;
  insert into public.student_projects(user_id) values(new.id) on conflict(user_id) do nothing;
  return new;
end; $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
for each row execute procedure public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.student_projects enable row level security;
alter table public.project_progress enable row level security;
alter table public.lesson_comments enable row level security;

drop policy if exists "profiles own or teacher read" on public.profiles;
create policy "profiles own or teacher read" on public.profiles
for select using (id=auth.uid() or role='teacher' or public.is_teacher());

drop policy if exists "profiles update own" on public.profiles;
create policy "profiles update own" on public.profiles
for update using (id=auth.uid()) with check (id=auth.uid());

drop policy if exists "lesson progress own or teacher read" on public.lesson_progress;
create policy "lesson progress own or teacher read" on public.lesson_progress
for select using (user_id=auth.uid() or public.is_teacher());

drop policy if exists "lesson progress own insert" on public.lesson_progress;
create policy "lesson progress own insert" on public.lesson_progress
for insert with check (user_id=auth.uid());

drop policy if exists "lesson progress own update" on public.lesson_progress;
create policy "lesson progress own update" on public.lesson_progress
for update using (user_id=auth.uid()) with check (user_id=auth.uid());

drop policy if exists "student project own or teacher read" on public.student_projects;
create policy "student project own or teacher read" on public.student_projects
for select using (user_id=auth.uid() or public.is_teacher());

drop policy if exists "student project own insert" on public.student_projects;
create policy "student project own insert" on public.student_projects
for insert with check (user_id=auth.uid());

drop policy if exists "student project own update" on public.student_projects;
create policy "student project own update" on public.student_projects
for update using (user_id=auth.uid()) with check (user_id=auth.uid());

drop policy if exists "project progress own or teacher read" on public.project_progress;
create policy "project progress own or teacher read" on public.project_progress
for select using (user_id=auth.uid() or public.is_teacher());

drop policy if exists "project progress own insert" on public.project_progress;
create policy "project progress own insert" on public.project_progress
for insert with check (user_id=auth.uid());

drop policy if exists "project progress own update" on public.project_progress;
create policy "project progress own update" on public.project_progress
for update using (user_id=auth.uid()) with check (user_id=auth.uid());

drop policy if exists "comments student or teacher read" on public.lesson_comments;
create policy "comments student or teacher read" on public.lesson_comments
for select using (student_id=auth.uid() or public.is_teacher());

drop policy if exists "students comment for themselves" on public.lesson_comments;
create policy "students comment for themselves" on public.lesson_comments
for insert with check (
  author_id=auth.uid()
  and (
    (student_id=auth.uid())
    or public.is_teacher()
  )
);

-- After your teacher account signs up, promote it once:
-- update public.profiles set role='teacher' where id = '<YOUR USER UUID>';


-- ============================================================
-- Student-driven Requests Board
-- Visible only to authenticated users.
-- Students can submit and vote. Teacher-role users manage status.
-- ============================================================

create table if not exists public.student_requests (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references public.profiles(id) on delete cascade,
  category text not null check (category in ('feature','tutorial','lesson','game_mechanic','bug','other')),
  title text not null check (char_length(title) between 3 and 120),
  body text not null check (char_length(body) between 3 and 2000),
  status text not null default 'new' check (status in ('new','planned','building','shipped','declined')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.request_votes (
  request_id uuid not null references public.student_requests(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (request_id,user_id)
);

alter table public.student_requests enable row level security;
alter table public.request_votes enable row level security;

drop policy if exists "authenticated users read requests" on public.student_requests;
create policy "authenticated users read requests" on public.student_requests
for select to authenticated using (true);

drop policy if exists "students submit own requests" on public.student_requests;
create policy "students submit own requests" on public.student_requests
for insert to authenticated with check (author_id=auth.uid());

drop policy if exists "teachers update requests" on public.student_requests;
create policy "teachers update requests" on public.student_requests
for update to authenticated using (public.is_teacher()) with check (public.is_teacher());

drop policy if exists "teachers delete requests" on public.student_requests;
create policy "teachers delete requests" on public.student_requests
for delete to authenticated using (public.is_teacher());

drop policy if exists "authenticated users read votes" on public.request_votes;
create policy "authenticated users read votes" on public.request_votes
for select to authenticated using (true);

drop policy if exists "users add own vote" on public.request_votes;
create policy "users add own vote" on public.request_votes
for insert to authenticated with check (user_id=auth.uid());

drop policy if exists "users remove own vote" on public.request_votes;
create policy "users remove own vote" on public.request_votes
for delete to authenticated using (user_id=auth.uid());

create index if not exists student_requests_status_idx on public.student_requests(status);
create index if not exists student_requests_created_idx on public.student_requests(created_at desc);
create index if not exists request_votes_request_idx on public.request_votes(request_id);


-- ============================================================
-- Security/performance hardening used by the live backend
-- ============================================================

revoke execute on function public.handle_new_user() from public;
revoke execute on function public.handle_new_user() from anon;
revoke execute on function public.handle_new_user() from authenticated;

create schema if not exists private;

create or replace function private.is_teacher()
returns boolean
language sql
stable
security definer
set search_path=public
as $$ select exists(select 1 from public.profiles where id=(select auth.uid()) and role='teacher'); $$;

grant usage on schema private to authenticated;
grant execute on function private.is_teacher() to authenticated;

drop policy if exists "profiles own or teacher read" on public.profiles;
create policy "profiles own or teacher read" on public.profiles for select using (id=(select auth.uid()) or role='teacher' or (select private.is_teacher()));

drop policy if exists "profiles update own" on public.profiles;
create policy "profiles update own" on public.profiles for update using (id=(select auth.uid())) with check (id=(select auth.uid()));

drop policy if exists "lesson progress own or teacher read" on public.lesson_progress;
create policy "lesson progress own or teacher read" on public.lesson_progress for select using (user_id=(select auth.uid()) or (select private.is_teacher()));

drop policy if exists "lesson progress own insert" on public.lesson_progress;
create policy "lesson progress own insert" on public.lesson_progress for insert with check (user_id=(select auth.uid()));

drop policy if exists "lesson progress own update" on public.lesson_progress;
create policy "lesson progress own update" on public.lesson_progress for update using (user_id=(select auth.uid())) with check (user_id=(select auth.uid()));

drop policy if exists "student project own or teacher read" on public.student_projects;
create policy "student project own or teacher read" on public.student_projects for select using (user_id=(select auth.uid()) or (select private.is_teacher()));

drop policy if exists "student project own insert" on public.student_projects;
create policy "student project own insert" on public.student_projects for insert with check (user_id=(select auth.uid()));

drop policy if exists "student project own update" on public.student_projects;
create policy "student project own update" on public.student_projects for update using (user_id=(select auth.uid())) with check (user_id=(select auth.uid()));

drop policy if exists "project progress own or teacher read" on public.project_progress;
create policy "project progress own or teacher read" on public.project_progress for select using (user_id=(select auth.uid()) or (select private.is_teacher()));

drop policy if exists "project progress own insert" on public.project_progress;
create policy "project progress own insert" on public.project_progress for insert with check (user_id=(select auth.uid()));

drop policy if exists "project progress own update" on public.project_progress;
create policy "project progress own update" on public.project_progress for update using (user_id=(select auth.uid())) with check (user_id=(select auth.uid()));

drop policy if exists "comments student or teacher read" on public.lesson_comments;
create policy "comments student or teacher read" on public.lesson_comments for select using (student_id=(select auth.uid()) or (select private.is_teacher()));

drop policy if exists "students comment for themselves" on public.lesson_comments;
create policy "students comment for themselves" on public.lesson_comments for insert with check (author_id=(select auth.uid()) and (student_id=(select auth.uid()) or (select private.is_teacher())));

drop policy if exists "students submit own requests" on public.student_requests;
create policy "students submit own requests" on public.student_requests for insert to authenticated with check (author_id=(select auth.uid()));

drop policy if exists "teachers update requests" on public.student_requests;
create policy "teachers update requests" on public.student_requests for update to authenticated using ((select private.is_teacher())) with check ((select private.is_teacher()));

drop policy if exists "teachers delete requests" on public.student_requests;
create policy "teachers delete requests" on public.student_requests for delete to authenticated using ((select private.is_teacher()));

drop policy if exists "users add own vote" on public.request_votes;
create policy "users add own vote" on public.request_votes for insert to authenticated with check (user_id=(select auth.uid()));

drop policy if exists "users remove own vote" on public.request_votes;
create policy "users remove own vote" on public.request_votes for delete to authenticated using (user_id=(select auth.uid()));

create index if not exists lesson_comments_author_id_idx on public.lesson_comments(author_id);
create index if not exists lesson_comments_student_id_idx on public.lesson_comments(student_id);
create index if not exists request_votes_user_id_idx on public.request_votes(user_id);
create index if not exists student_requests_author_id_idx on public.student_requests(author_id);

drop function if exists public.is_teacher();


-- ============================================================
-- V3.3 Evidence, teaching groups and notifications
-- ============================================================

create table if not exists public.classes (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references public.profiles(id) on delete cascade,
  name text not null check (char_length(name) between 2 and 100),
  academic_year text not null default '',
  archived boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.class_members (
  class_id uuid not null references public.classes(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  joined_at timestamptz not null default now(),
  primary key (class_id,user_id)
);

create table if not exists public.evidence_submissions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  lesson_id text not null,
  mechanic_id text not null,
  reflection text not null default '' check (char_length(reflection) <= 4000),
  evidence_url text not null default '' check (char_length(evidence_url) <= 1000),
  status text not null default 'draft' check (status in ('draft','submitted','changes_required','approved')),
  teacher_feedback text not null default '' check (char_length(teacher_feedback) <= 4000),
  reviewed_by uuid references public.profiles(id) on delete set null,
  submitted_at timestamptz,
  reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(user_id,mechanic_id)
);

create table if not exists public.submission_files (
  id uuid primary key default gen_random_uuid(),
  submission_id uuid not null references public.evidence_submissions(id) on delete cascade,
  storage_path text not null unique,
  original_name text not null,
  mime_type text not null default '',
  size_bytes bigint not null default 0 check (size_bytes >= 0),
  created_at timestamptz not null default now()
);

create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  kind text not null check (kind in ('feedback','request','class','system')),
  title text not null check (char_length(title) between 1 and 160),
  body text not null default '' check (char_length(body) <= 1200),
  link text not null default '' check (char_length(link) <= 500),
  read_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.classes enable row level security;
alter table public.class_members enable row level security;
alter table public.evidence_submissions enable row level security;
alter table public.submission_files enable row level security;
alter table public.notifications enable row level security;

create policy "teacher manages own classes" on public.classes for all to authenticated
using (teacher_id=(select auth.uid()) and (select private.is_teacher()))
with check (teacher_id=(select auth.uid()) and (select private.is_teacher()));

create policy "members read their classes" on public.classes for select to authenticated
using (exists(select 1 from public.class_members cm where cm.class_id=classes.id and cm.user_id=(select auth.uid())));

create policy "teacher manages memberships" on public.class_members for all to authenticated
using (exists(select 1 from public.classes c where c.id=class_members.class_id and c.teacher_id=(select auth.uid()) and (select private.is_teacher())))
with check (exists(select 1 from public.classes c where c.id=class_members.class_id and c.teacher_id=(select auth.uid()) and (select private.is_teacher())));

create policy "student reads own memberships" on public.class_members for select to authenticated using (user_id=(select auth.uid()));

create policy "students read own submissions" on public.evidence_submissions for select to authenticated using (user_id=(select auth.uid()));
create policy "teachers read submissions" on public.evidence_submissions for select to authenticated using ((select private.is_teacher()));
create policy "students create own submissions" on public.evidence_submissions for insert to authenticated with check (user_id=(select auth.uid()) and status in ('draft','submitted'));
create policy "students update own submissions" on public.evidence_submissions for update to authenticated
using (user_id=(select auth.uid()) and status in ('draft','changes_required'))
with check (user_id=(select auth.uid()) and status in ('draft','submitted'));
create policy "teachers review submissions" on public.evidence_submissions for update to authenticated using ((select private.is_teacher())) with check ((select private.is_teacher()));

create policy "students read own submission file records" on public.submission_files for select to authenticated
using (exists(select 1 from public.evidence_submissions s where s.id=submission_files.submission_id and s.user_id=(select auth.uid())));
create policy "teachers read submission file records" on public.submission_files for select to authenticated using ((select private.is_teacher()));
create policy "students add own submission file records" on public.submission_files for insert to authenticated
with check (exists(select 1 from public.evidence_submissions s where s.id=submission_files.submission_id and s.user_id=(select auth.uid())));
create policy "students delete own submission file records" on public.submission_files for delete to authenticated
using (exists(select 1 from public.evidence_submissions s where s.id=submission_files.submission_id and s.user_id=(select auth.uid())));

create policy "users read own notifications" on public.notifications for select to authenticated using (user_id=(select auth.uid()));
create policy "users mark own notifications" on public.notifications for update to authenticated using (user_id=(select auth.uid())) with check (user_id=(select auth.uid()));
create policy "teachers create notifications" on public.notifications for insert to authenticated with check ((select private.is_teacher()));
create policy "users create own system notifications" on public.notifications for insert to authenticated with check (user_id=(select auth.uid()));

create index if not exists classes_teacher_id_idx on public.classes(teacher_id);
create index if not exists class_members_user_id_idx on public.class_members(user_id);
create index if not exists evidence_submissions_user_id_idx on public.evidence_submissions(user_id);
create index if not exists evidence_submissions_status_idx on public.evidence_submissions(status);
create index if not exists evidence_submissions_reviewed_by_idx on public.evidence_submissions(reviewed_by);
create index if not exists submission_files_submission_id_idx on public.submission_files(submission_id);
create index if not exists notifications_user_id_created_idx on public.notifications(user_id,created_at desc);

insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values ('student-evidence','student-evidence',false,10485760,array['image/png','image/jpeg','image/webp','application/pdf'])
on conflict (id) do update set public=false,file_size_limit=10485760,allowed_mime_types=array['image/png','image/jpeg','image/webp','application/pdf'];

create policy "students upload own evidence" on storage.objects for insert to authenticated
with check (bucket_id='student-evidence' and (storage.foldername(name))[1]=(select auth.uid())::text);
create policy "students read own evidence" on storage.objects for select to authenticated
using (bucket_id='student-evidence' and (storage.foldername(name))[1]=(select auth.uid())::text);
create policy "teachers read evidence" on storage.objects for select to authenticated
using (bucket_id='student-evidence' and (select private.is_teacher()));
create policy "students update own evidence" on storage.objects for update to authenticated
using (bucket_id='student-evidence' and (storage.foldername(name))[1]=(select auth.uid())::text)
with check (bucket_id='student-evidence' and (storage.foldername(name))[1]=(select auth.uid())::text);
create policy "students delete own evidence" on storage.objects for delete to authenticated
using (bucket_id='student-evidence' and (storage.foldername(name))[1]=(select auth.uid())::text);


-- ============================================================
-- V3.3 RLS policy consolidation
-- Keeps the live schema efficient by avoiding duplicate
-- permissive policies for the same role/action.
-- ============================================================

drop policy if exists "teacher manages own classes" on public.classes;
drop policy if exists "members read their classes" on public.classes;
create policy "classes readable by teacher or member" on public.classes for select to authenticated
using (
  teacher_id=(select auth.uid())
  or exists(select 1 from public.class_members cm where cm.class_id=classes.id and cm.user_id=(select auth.uid()))
);
create policy "teacher inserts own classes" on public.classes for insert to authenticated
with check (teacher_id=(select auth.uid()) and (select private.is_teacher()));
create policy "teacher updates own classes" on public.classes for update to authenticated
using (teacher_id=(select auth.uid()) and (select private.is_teacher()))
with check (teacher_id=(select auth.uid()) and (select private.is_teacher()));
create policy "teacher deletes own classes" on public.classes for delete to authenticated
using (teacher_id=(select auth.uid()) and (select private.is_teacher()));

drop policy if exists "teacher manages memberships" on public.class_members;
drop policy if exists "student reads own memberships" on public.class_members;
create policy "memberships readable by student or teacher" on public.class_members for select to authenticated
using (
  user_id=(select auth.uid())
  or exists(select 1 from public.classes c where c.id=class_members.class_id and c.teacher_id=(select auth.uid()) and (select private.is_teacher()))
);
create policy "teacher inserts memberships" on public.class_members for insert to authenticated
with check (exists(select 1 from public.classes c where c.id=class_members.class_id and c.teacher_id=(select auth.uid()) and (select private.is_teacher())));
create policy "teacher deletes memberships" on public.class_members for delete to authenticated
using (exists(select 1 from public.classes c where c.id=class_members.class_id and c.teacher_id=(select auth.uid()) and (select private.is_teacher())));

drop policy if exists "students read own submissions" on public.evidence_submissions;
drop policy if exists "teachers read submissions" on public.evidence_submissions;
create policy "submissions readable by owner or teacher" on public.evidence_submissions for select to authenticated
using (user_id=(select auth.uid()) or (select private.is_teacher()));

drop policy if exists "students update own submissions" on public.evidence_submissions;
drop policy if exists "teachers review submissions" on public.evidence_submissions;
create policy "submissions updated by owner draft or teacher" on public.evidence_submissions for update to authenticated
using (
  (user_id=(select auth.uid()) and status in ('draft','changes_required'))
  or (select private.is_teacher())
)
with check (
  (user_id=(select auth.uid()) and status in ('draft','submitted'))
  or (select private.is_teacher())
);

drop policy if exists "students read own submission file records" on public.submission_files;
drop policy if exists "teachers read submission file records" on public.submission_files;
create policy "submission files readable by owner or teacher" on public.submission_files for select to authenticated
using (
  exists(select 1 from public.evidence_submissions s where s.id=submission_files.submission_id and s.user_id=(select auth.uid()))
  or (select private.is_teacher())
);

drop policy if exists "teachers create notifications" on public.notifications;
drop policy if exists "users create own system notifications" on public.notifications;
create policy "notifications inserted by teacher or owner" on public.notifications for insert to authenticated
with check ((select private.is_teacher()) or user_id=(select auth.uid()));


-- ============================================================
-- V3.6 independent login + class-code registration
-- ============================================================

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


-- UE5 Learning Hub v3.6 security hardening
-- Keep privileged class-code implementation out of the exposed public schema.

create or replace function private.validate_class_join_code(p_code text)
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

revoke all on function private.validate_class_join_code(text) from public;
grant execute on function private.validate_class_join_code(text) to anon, authenticated;

create or replace function public.validate_class_join_code(p_code text)
returns table(class_name text, academic_year text)
language sql
stable
security invoker
set search_path = pg_catalog, private
as $$
  select * from private.validate_class_join_code(p_code)
$$;

revoke all on function public.validate_class_join_code(text) from public;
grant execute on function public.validate_class_join_code(text) to anon, authenticated;

create or replace function private.join_class_by_code(p_code text)
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

  return query select v_class.id, v_class.name, v_class.academic_year;
end;
$$;

revoke all on function private.join_class_by_code(text) from public;
revoke all on function private.join_class_by_code(text) from anon;
grant execute on function private.join_class_by_code(text) to authenticated;

create or replace function public.join_class_by_code(p_code text)
returns table(class_id uuid, class_name text, academic_year text)
language sql
security invoker
set search_path = pg_catalog, private
as $$
  select * from private.join_class_by_code(p_code)
$$;

revoke all on function public.join_class_by_code(text) from public;
revoke all on function public.join_class_by_code(text) from anon;
grant execute on function public.join_class_by_code(text) to authenticated;


-- V3.6: allow the public SECURITY INVOKER validation wrapper to call its private implementation.
-- The private schema is not exposed through PostgREST; only the explicitly granted function is executable.
grant usage on schema private to anon;


-- V3.6 one-time teacher bootstrap
create table if not exists private.teacher_bootstrap (
  id smallint primary key default 1 check (id=1),
  token_hash text not null,
  used_at timestamptz,
  used_by uuid references public.profiles(id) on delete set null
);

insert into private.teacher_bootstrap(id,token_hash)
values (1,'ff477e5858456a0dbb0257e7f5ddfaa4d2b98fad111f1b8c7b28df6894b2d62b')
on conflict(id) do nothing;

revoke all on private.teacher_bootstrap from public, anon, authenticated;

create or replace function private.validate_teacher_bootstrap(p_code text)
returns boolean
language sql stable security definer
set search_path=pg_catalog, public, private, extensions
as $$
  select exists(
    select 1 from private.teacher_bootstrap b
    where b.id=1 and b.used_at is null
      and b.token_hash=encode(extensions.digest(upper(regexp_replace(coalesce(p_code,''),'[^A-Za-z0-9]','','g')),'sha256'),'hex')
      and not exists(select 1 from public.profiles p where p.role='teacher')
  )
$$;
revoke all on function private.validate_teacher_bootstrap(text) from public;
grant execute on function private.validate_teacher_bootstrap(text) to anon, authenticated;

create or replace function public.validate_teacher_bootstrap(p_code text)
returns boolean language sql stable security invoker
set search_path=pg_catalog, private
as $$ select private.validate_teacher_bootstrap(p_code) $$;
revoke all on function public.validate_teacher_bootstrap(text) from public;
grant execute on function public.validate_teacher_bootstrap(text) to anon, authenticated;

create or replace function private.claim_teacher_bootstrap(p_code text)
returns boolean
language plpgsql security definer
set search_path=pg_catalog, public, private, extensions
as $$
declare v_user uuid:=auth.uid(); v_ok boolean:=false;
begin
  if v_user is null then raise exception 'Sign in before claiming teacher setup.'; end if;
  select exists(
    select 1 from private.teacher_bootstrap b
    where b.id=1 and b.used_at is null
      and b.token_hash=encode(extensions.digest(upper(regexp_replace(coalesce(p_code,''),'[^A-Za-z0-9]','','g')),'sha256'),'hex')
      and not exists(select 1 from public.profiles p where p.role='teacher')
  ) into v_ok;
  if not v_ok then raise exception 'Teacher setup code is invalid, already used, or a teacher already exists.'; end if;
  update public.profiles set role='teacher' where id=v_user;
  update private.teacher_bootstrap set used_at=now(),used_by=v_user where id=1 and used_at is null;
  return true;
end $$;
revoke all on function private.claim_teacher_bootstrap(text) from public, anon;
grant execute on function private.claim_teacher_bootstrap(text) to authenticated;

create or replace function public.claim_teacher_bootstrap(p_code text)
returns boolean language sql security invoker
set search_path=pg_catalog, private
as $$ select private.claim_teacher_bootstrap(p_code) $$;
revoke all on function public.claim_teacher_bootstrap(text) from public, anon;
grant execute on function public.claim_teacher_bootstrap(text) to authenticated;

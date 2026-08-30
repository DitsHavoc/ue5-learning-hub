
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
  on conflict on constraint class_members_pkey do nothing;

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
  on conflict on constraint class_members_pkey do nothing;

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


-- ============================================================
-- V3.6.3 class RLS recursion fix
-- ============================================================

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


-- ============================================================
-- V3.7 multi-teacher invites
-- ============================================================

-- UE5 Learning Hub v3.7.0
-- Multi-teacher invite system. Unique, one-use, revocable teacher codes.

create table if not exists public.teacher_invites (
  id uuid primary key default gen_random_uuid(),
  code_hash text not null unique,
  code_hint text not null,
  label text not null default '',
  created_by uuid not null references public.profiles(id) on delete cascade,
  expires_at timestamptz not null default (now() + interval '7 days'),
  used_by uuid references public.profiles(id) on delete set null,
  used_at timestamptz,
  revoked_at timestamptz,
  created_at timestamptz not null default now(),
  constraint teacher_invites_label_check check (char_length(label) <= 120)
);

create index if not exists teacher_invites_created_by_idx
  on public.teacher_invites(created_by, created_at desc);

alter table public.teacher_invites enable row level security;

drop policy if exists "teacher reads own invites" on public.teacher_invites;
create policy "teacher reads own invites"
on public.teacher_invites
for select
to authenticated
using (
  created_by = (select auth.uid())
  and (select private.is_teacher())
);

create or replace function public.create_teacher_invite(p_label text default '', p_days integer default 7)
returns table(invite_id uuid, invite_code text, invite_hint text, expires_at timestamptz)
language plpgsql
security definer
set search_path = pg_catalog, public, extensions
as $$
declare
  v_user uuid := auth.uid();
  v_code text;
  v_norm text;
  v_hash text;
  v_id uuid;
  v_exp timestamptz;
  v_days integer := greatest(1, least(coalesce(p_days,7), 30));
begin
  if v_user is null or not private.is_teacher() then
    raise exception 'Teacher access required.';
  end if;

  v_code := 'TEACH-' || upper(encode(extensions.gen_random_bytes(12),'hex'));
  v_norm := upper(regexp_replace(v_code,'[^A-Za-z0-9]','','g'));
  v_hash := encode(extensions.digest(v_norm,'sha256'),'hex');
  v_exp := now() + make_interval(days => v_days);

  insert into public.teacher_invites(code_hash,code_hint,label,created_by,expires_at)
  values(v_hash,right(v_norm,6),left(btrim(coalesce(p_label,'')),120),v_user,v_exp)
  returning id into v_id;

  return query select v_id,v_code,right(v_norm,6),v_exp;
end;
$$;

create or replace function public.validate_teacher_invite(p_code text)
returns table(invite_label text, expires_at timestamptz)
language sql
stable
security definer
set search_path = pg_catalog, public, extensions
as $$
  select ti.label, ti.expires_at
  from public.teacher_invites ti
  where ti.code_hash = encode(extensions.digest(upper(regexp_replace(coalesce(p_code,''),'[^A-Za-z0-9]','','g')),'sha256'),'hex')
    and ti.revoked_at is null
    and ti.used_at is null
    and ti.expires_at > now()
  limit 1
$$;

create or replace function public.claim_teacher_invite(p_code text)
returns boolean
language plpgsql
security definer
set search_path = pg_catalog, public, extensions
as $$
declare
  v_user uuid := auth.uid();
  v_invite public.teacher_invites%rowtype;
  v_hash text;
begin
  if v_user is null then
    raise exception 'Sign in before claiming a teacher invite.';
  end if;

  v_hash := encode(extensions.digest(upper(regexp_replace(coalesce(p_code,''),'[^A-Za-z0-9]','','g')),'sha256'),'hex');

  select * into v_invite
  from public.teacher_invites
  where code_hash=v_hash
    and revoked_at is null
    and used_at is null
    and expires_at > now()
  for update;

  if v_invite.id is null then
    raise exception 'Teacher invite is invalid, expired, revoked or already used.';
  end if;

  update public.profiles set role='teacher' where id=v_user;
  if not found then
    raise exception 'Your Learning Hub profile is not ready yet. Sign in again and retry.';
  end if;

  update public.teacher_invites
  set used_by=v_user,used_at=now()
  where id=v_invite.id;

  insert into public.notifications(user_id,kind,title,body,link)
  values(v_invite.created_by,'system','Teacher invite claimed',
    case when btrim(v_invite.label)<>'' then v_invite.label || ' has claimed a teacher invite.'
         else 'A colleague has claimed your teacher invite.' end,
    '#/teacher');

  insert into public.notifications(user_id,kind,title,body,link)
  values(v_user,'system','Teacher access active','Your Learning Hub account now has Teacher access.','#/teacher');

  return true;
end;
$$;

create or replace function public.revoke_teacher_invite(p_invite_id uuid)
returns boolean
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  v_user uuid := auth.uid();
begin
  if v_user is null or not private.is_teacher() then
    raise exception 'Teacher access required.';
  end if;

  update public.teacher_invites
  set revoked_at=now()
  where id=p_invite_id
    and created_by=v_user
    and used_at is null
    and revoked_at is null;

  return found;
end;
$$;

revoke all on function public.create_teacher_invite(text,integer) from public;
revoke all on function public.validate_teacher_invite(text) from public;
revoke all on function public.claim_teacher_invite(text) from public;
revoke all on function public.revoke_teacher_invite(uuid) from public;

grant execute on function public.create_teacher_invite(text,integer) to authenticated;
grant execute on function public.validate_teacher_invite(text) to anon, authenticated;
grant execute on function public.claim_teacher_invite(text) to authenticated;
grant execute on function public.revoke_teacher_invite(uuid) to authenticated;


-- ============================================================
-- V3.7 multi-teacher hardening
-- ============================================================

-- UE5 Learning Hub v3.7.0
-- Harden multi-teacher RPCs: privileged implementations live in private schema;
-- public RPCs are thin SECURITY INVOKER wrappers.

create or replace function private.create_teacher_invite(p_label text default '', p_days integer default 7)
returns table(invite_id uuid, invite_code text, invite_hint text, expires_at timestamptz)
language plpgsql
security definer
set search_path = pg_catalog, public, extensions, private
as $$
declare
  v_user uuid := auth.uid();
  v_code text; v_norm text; v_hash text; v_id uuid; v_exp timestamptz;
  v_days integer := greatest(1, least(coalesce(p_days,7), 30));
begin
  if v_user is null or not private.is_teacher() then
    raise exception 'Teacher access required.';
  end if;

  v_code := 'TEACH-' || upper(encode(extensions.gen_random_bytes(12),'hex'));
  v_norm := upper(regexp_replace(v_code,'[^A-Za-z0-9]','','g'));
  v_hash := encode(extensions.digest(v_norm,'sha256'),'hex');
  v_exp := now() + make_interval(days => v_days);

  insert into public.teacher_invites(code_hash,code_hint,label,created_by,expires_at)
  values(v_hash,right(v_norm,6),left(btrim(coalesce(p_label,'')),120),v_user,v_exp)
  returning id into v_id;

  return query select v_id,v_code,right(v_norm,6),v_exp;
end
$$;

create or replace function private.validate_teacher_invite(p_code text)
returns table(invite_label text, expires_at timestamptz)
language sql
stable
security definer
set search_path = pg_catalog, public, extensions
as $$
  select ti.label,ti.expires_at
  from public.teacher_invites ti
  where ti.code_hash=encode(
    extensions.digest(
      upper(regexp_replace(coalesce(p_code,''),'[^A-Za-z0-9]','','g')),
      'sha256'
    ),
    'hex'
  )
  and ti.revoked_at is null
  and ti.used_at is null
  and ti.expires_at>now()
  limit 1
$$;

create or replace function private.claim_teacher_invite(p_code text)
returns boolean
language plpgsql
security definer
set search_path = pg_catalog, public, extensions, private
as $$
declare
  v_user uuid:=auth.uid();
  v_invite public.teacher_invites%rowtype;
  v_hash text;
begin
  if v_user is null then
    raise exception 'Sign in before claiming a teacher invite.';
  end if;

  v_hash:=encode(
    extensions.digest(
      upper(regexp_replace(coalesce(p_code,''),'[^A-Za-z0-9]','','g')),
      'sha256'
    ),
    'hex'
  );

  select *
  into v_invite
  from public.teacher_invites
  where code_hash=v_hash
    and revoked_at is null
    and used_at is null
    and expires_at>now()
  for update;

  if v_invite.id is null then
    raise exception 'Teacher invite is invalid, expired, revoked or already used.';
  end if;

  update public.profiles
  set role='teacher'
  where id=v_user;

  if not found then
    raise exception 'Your Learning Hub profile is not ready yet. Sign in again and retry.';
  end if;

  update public.teacher_invites
  set used_by=v_user,used_at=now()
  where id=v_invite.id;

  insert into public.notifications(user_id,kind,title,body,link)
  values(
    v_invite.created_by,
    'system',
    'Teacher invite claimed',
    case
      when btrim(v_invite.label)<>'' then v_invite.label || ' has claimed a teacher invite.'
      else 'A colleague has claimed your teacher invite.'
    end,
    '#/teacher'
  );

  insert into public.notifications(user_id,kind,title,body,link)
  values(
    v_user,
    'system',
    'Teacher access active',
    'Your Learning Hub account now has Teacher access.',
    '#/teacher'
  );

  return true;
end
$$;

create or replace function private.revoke_teacher_invite(p_invite_id uuid)
returns boolean
language plpgsql
security definer
set search_path = pg_catalog, public, private
as $$
declare
  v_user uuid:=auth.uid();
begin
  if v_user is null or not private.is_teacher() then
    raise exception 'Teacher access required.';
  end if;

  update public.teacher_invites
  set revoked_at=now()
  where id=p_invite_id
    and created_by=v_user
    and used_at is null
    and revoked_at is null;

  return found;
end
$$;

revoke all on function private.create_teacher_invite(text,integer) from public;
revoke all on function private.validate_teacher_invite(text) from public;
revoke all on function private.claim_teacher_invite(text) from public;
revoke all on function private.revoke_teacher_invite(uuid) from public;

grant usage on schema private to anon, authenticated;
grant execute on function private.validate_teacher_invite(text) to anon, authenticated;
grant execute on function private.create_teacher_invite(text,integer) to authenticated;
grant execute on function private.claim_teacher_invite(text) to authenticated;
grant execute on function private.revoke_teacher_invite(uuid) to authenticated;

create or replace function public.create_teacher_invite(p_label text default '', p_days integer default 7)
returns table(invite_id uuid, invite_code text, invite_hint text, expires_at timestamptz)
language sql
set search_path = pg_catalog, private
as $$ select * from private.create_teacher_invite(p_label,p_days) $$;

create or replace function public.validate_teacher_invite(p_code text)
returns table(invite_label text, expires_at timestamptz)
language sql
stable
set search_path = pg_catalog, private
as $$ select * from private.validate_teacher_invite(p_code) $$;

create or replace function public.claim_teacher_invite(p_code text)
returns boolean
language sql
set search_path = pg_catalog, private
as $$ select private.claim_teacher_invite(p_code) $$;

create or replace function public.revoke_teacher_invite(p_invite_id uuid)
returns boolean
language sql
set search_path = pg_catalog, private
as $$ select private.revoke_teacher_invite(p_invite_id) $$;

revoke all on function public.create_teacher_invite(text,integer) from public;
revoke all on function public.validate_teacher_invite(text) from public;
revoke all on function public.claim_teacher_invite(text) from public;
revoke all on function public.revoke_teacher_invite(uuid) from public;

grant execute on function public.validate_teacher_invite(text) to anon, authenticated;
grant execute on function public.create_teacher_invite(text,integer) to authenticated;
grant execute on function public.claim_teacher_invite(text) to authenticated;
grant execute on function public.revoke_teacher_invite(uuid) to authenticated;


-- ============================================================
-- V3.9 CO-TEACHING HARDENING
-- Apply migrations 11, 12 and 13 in order.
-- ============================================================

-- V3.9: co-teaching, class-scoped teacher access, profile role protection,
-- and immutable submitted evidence/storage.

create table if not exists public.class_teachers (
  class_id uuid not null references public.classes(id) on delete cascade,
  teacher_id uuid not null references public.profiles(id) on delete cascade,
  added_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  primary key (class_id, teacher_id)
);
create index if not exists class_teachers_teacher_id_idx on public.class_teachers(teacher_id,class_id);
insert into public.class_teachers(class_id,teacher_id,added_by)
select id,teacher_id,teacher_id from public.classes on conflict (class_id,teacher_id) do nothing;
alter table public.class_teachers enable row level security;

create or replace function private.user_is_teacher(p_user uuid) returns boolean language sql stable security definer set search_path=pg_catalog,public as $$select exists(select 1 from public.profiles where id=p_user and role='teacher')$$;
create or replace function private.teacher_has_class_access(p_class_id uuid) returns boolean language sql stable security definer set search_path=pg_catalog,public as $$select (select private.is_teacher()) and exists(select 1 from public.class_teachers where class_id=p_class_id and teacher_id=(select auth.uid()))$$;
create or replace function private.teacher_can_access_student(p_student uuid) returns boolean language sql stable security definer set search_path=pg_catalog,public as $$select (select private.is_teacher()) and exists(select 1 from public.class_members cm join public.class_teachers ct on ct.class_id=cm.class_id where cm.user_id=p_student and ct.teacher_id=(select auth.uid()))$$;
create or replace function private.teacher_can_access_submission(p_submission uuid) returns boolean language sql stable security definer set search_path=pg_catalog,public as $$select exists(select 1 from public.evidence_submissions s where s.id=p_submission and (select private.teacher_can_access_student(s.user_id)))$$;
create or replace function private.student_can_mutate_submission(p_submission uuid) returns boolean language sql stable security definer set search_path=pg_catalog,public as $$select exists(select 1 from public.evidence_submissions s where s.id=p_submission and s.user_id=(select auth.uid()) and s.status in ('draft','changes_required'))$$;
create or replace function private.student_can_mutate_evidence_path(p_name text) returns boolean language sql stable security definer set search_path=pg_catalog,public as $$select split_part(coalesce(p_name,''),'/',1)=coalesce((select auth.uid())::text,'') and exists(select 1 from public.evidence_submissions s where s.id::text=split_part(coalesce(p_name,''),'/',2) and s.user_id=(select auth.uid()) and s.status in ('draft','changes_required'))$$;
create or replace function private.teacher_can_access_evidence_path(p_name text) returns boolean language sql stable security definer set search_path=pg_catalog,public as $$select exists(select 1 from public.submission_files sf join public.evidence_submissions s on s.id=sf.submission_id where sf.storage_path=p_name and (select private.teacher_can_access_student(s.user_id)))$$;

revoke all on function private.user_is_teacher(uuid),private.teacher_has_class_access(uuid),private.teacher_can_access_student(uuid),private.teacher_can_access_submission(uuid),private.student_can_mutate_submission(uuid),private.student_can_mutate_evidence_path(text),private.teacher_can_access_evidence_path(text) from public;
grant usage on schema private to authenticated;
grant execute on function private.user_is_teacher(uuid),private.teacher_has_class_access(uuid),private.teacher_can_access_student(uuid),private.teacher_can_access_submission(uuid),private.student_can_mutate_submission(uuid),private.student_can_mutate_evidence_path(text),private.teacher_can_access_evidence_path(text) to authenticated;

create or replace function private.add_class_owner_as_teacher() returns trigger language plpgsql security definer set search_path=pg_catalog,public as $$begin insert into public.class_teachers(class_id,teacher_id,added_by) values(new.id,new.teacher_id,new.teacher_id) on conflict do nothing; return new; end$$;
drop trigger if exists trg_add_class_owner_as_teacher on public.classes;
create trigger trg_add_class_owner_as_teacher after insert on public.classes for each row execute function private.add_class_owner_as_teacher();

create or replace function private.protect_class_owner_assignment() returns trigger language plpgsql security definer set search_path=pg_catalog,public as $$declare v_owner uuid; begin select teacher_id into v_owner from public.classes where id=old.class_id; if old.teacher_id=v_owner then raise exception 'The class owner cannot be removed from the teaching team.'; end if; return old; end$$;
drop trigger if exists trg_protect_class_owner_assignment on public.class_teachers;
create trigger trg_protect_class_owner_assignment before delete on public.class_teachers for each row execute function private.protect_class_owner_assignment();

revoke all on public.class_teachers from anon,authenticated; grant select,insert,delete on public.class_teachers to authenticated;

drop policy if exists "classes readable by teacher or member" on public.classes;
create policy "classes readable by assigned teacher or member" on public.classes for select to authenticated using ((select private.teacher_has_class_access(id)) or (select private.is_class_member(id)));
drop policy if exists "teacher inserts own classes" on public.classes;
create policy "teacher inserts owned classes" on public.classes for insert to authenticated with check (teacher_id=(select auth.uid()) and (select private.is_teacher()));
drop policy if exists "teacher updates own classes" on public.classes;
create policy "assigned teachers update classes" on public.classes for update to authenticated using ((select private.teacher_has_class_access(id))) with check ((select private.teacher_has_class_access(id)));
drop policy if exists "teacher deletes own classes" on public.classes;
create policy "class owner deletes class" on public.classes for delete to authenticated using ((select private.owns_class(id)));

drop policy if exists "memberships readable by student or teacher" on public.class_members;
create policy "memberships readable by student or assigned teacher" on public.class_members for select to authenticated using (user_id=(select auth.uid()) or (select private.teacher_has_class_access(class_id)));
drop policy if exists "teacher inserts memberships" on public.class_members;
create policy "assigned teachers insert memberships" on public.class_members for insert to authenticated with check ((select private.teacher_has_class_access(class_id)));
drop policy if exists "teacher deletes memberships" on public.class_members;
create policy "assigned teachers delete memberships" on public.class_members for delete to authenticated using ((select private.teacher_has_class_access(class_id)));
create policy "class teaching team readable by teachers or members" on public.class_teachers for select to authenticated using ((select private.teacher_has_class_access(class_id)) or (select private.is_class_member(class_id)));
create policy "owner adds co teachers" on public.class_teachers for insert to authenticated with check ((select private.owns_class(class_id)) and (select private.user_is_teacher(teacher_id)));
create policy "owner or self removes co teacher" on public.class_teachers for delete to authenticated using ((select private.owns_class(class_id)) or (teacher_id=(select auth.uid()) and (select private.teacher_has_class_access(class_id))));

revoke insert,update,delete on public.profiles from anon,authenticated; revoke select on public.profiles from anon; grant select on public.profiles to authenticated; grant update(display_name) on public.profiles to authenticated;
drop policy if exists "profiles own or teacher read" on public.profiles;
create policy "profiles scoped read" on public.profiles for select to authenticated using (id=(select auth.uid()) or (role='teacher' and (select auth.uid()) is not null) or (select private.teacher_can_access_student(id)));
drop policy if exists "profiles update own" on public.profiles;
create policy "profiles update own display name" on public.profiles for update to authenticated using (id=(select auth.uid())) with check (id=(select auth.uid()));

drop policy if exists "lesson progress own or teacher read" on public.lesson_progress;
create policy "lesson progress own or assigned teacher read" on public.lesson_progress for select to authenticated using (user_id=(select auth.uid()) or (select private.teacher_can_access_student(user_id)));
drop policy if exists "project progress own or teacher read" on public.project_progress;
create policy "project progress own or assigned teacher read" on public.project_progress for select to authenticated using (user_id=(select auth.uid()) or (select private.teacher_can_access_student(user_id)));
drop policy if exists "student project own or teacher read" on public.student_projects;
create policy "student project own or assigned teacher read" on public.student_projects for select to authenticated using (user_id=(select auth.uid()) or (select private.teacher_can_access_student(user_id)));
drop policy if exists "comments student or teacher read" on public.lesson_comments;
create policy "comments student or assigned teacher read" on public.lesson_comments for select to authenticated using (student_id=(select auth.uid()) or (select private.teacher_can_access_student(student_id)));
drop policy if exists "students comment for themselves" on public.lesson_comments;
create policy "comments authored for self or accessible student" on public.lesson_comments for insert to authenticated with check (author_id=(select auth.uid()) and (student_id=(select auth.uid()) or (select private.teacher_can_access_student(student_id))));

drop policy if exists "submissions readable by owner or teacher" on public.evidence_submissions;
create policy "submissions readable by owner or assigned teacher" on public.evidence_submissions for select to authenticated using (user_id=(select auth.uid()) or (select private.teacher_can_access_student(user_id)));
drop policy if exists "submissions updated by owner draft or teacher" on public.evidence_submissions;
create policy "submissions updated by editable owner or assigned teacher" on public.evidence_submissions for update to authenticated using ((user_id=(select auth.uid()) and status in ('draft','changes_required')) or (select private.teacher_can_access_student(user_id))) with check ((user_id=(select auth.uid()) and status in ('draft','submitted')) or (select private.teacher_can_access_student(user_id)));

drop policy if exists "submission files readable by owner or teacher" on public.submission_files;
create policy "submission files readable by owner or assigned teacher" on public.submission_files for select to authenticated using (exists(select 1 from public.evidence_submissions s where s.id=submission_files.submission_id and (s.user_id=(select auth.uid()) or (select private.teacher_can_access_student(s.user_id)))));
drop policy if exists "students add own submission file records" on public.submission_files;
create policy "students add files to editable submissions" on public.submission_files for insert to authenticated with check ((select private.student_can_mutate_submission(submission_id)) and split_part(storage_path,'/',1)=(select auth.uid())::text and split_part(storage_path,'/',2)=submission_id::text);
drop policy if exists "students delete own submission file records" on public.submission_files;
create policy "students delete files from editable submissions" on public.submission_files for delete to authenticated using ((select private.student_can_mutate_submission(submission_id)));

alter table public.submission_files drop constraint if exists submission_files_size_limit_check;
alter table public.submission_files add constraint submission_files_size_limit_check check(size_bytes between 0 and 10485760);
alter table public.submission_files drop constraint if exists submission_files_mime_type_check;
alter table public.submission_files add constraint submission_files_mime_type_check check(mime_type in ('image/png','image/jpeg','image/webp','application/pdf'));

create or replace function private.limit_submission_file_count() returns trigger language plpgsql security definer set search_path=pg_catalog,public as $$begin if (select count(*) from public.submission_files where submission_id=new.submission_id)>=6 then raise exception 'A submission can contain at most 6 uploaded files.'; end if; return new; end$$;
drop trigger if exists trg_limit_submission_file_count on public.submission_files;
create trigger trg_limit_submission_file_count before insert on public.submission_files for each row execute function private.limit_submission_file_count();

drop policy if exists "students upload own evidence" on storage.objects;
create policy "students upload editable evidence" on storage.objects for insert to authenticated with check (bucket_id='student-evidence' and (select private.student_can_mutate_evidence_path(name)));
drop policy if exists "students update own evidence" on storage.objects;
create policy "students update editable evidence" on storage.objects for update to authenticated using (bucket_id='student-evidence' and (select private.student_can_mutate_evidence_path(name))) with check (bucket_id='student-evidence' and (select private.student_can_mutate_evidence_path(name)));
drop policy if exists "students delete own evidence" on storage.objects;
create policy "students delete editable evidence" on storage.objects for delete to authenticated using (bucket_id='student-evidence' and (select private.student_can_mutate_evidence_path(name)));
drop policy if exists "teachers read evidence" on storage.objects;
create policy "assigned teachers read evidence" on storage.objects for select to authenticated using (bucket_id='student-evidence' and (select private.teacher_can_access_evidence_path(name)));

create index if not exists teacher_bootstrap_used_by_idx on private.teacher_bootstrap(used_by) where used_by is not null;
create index if not exists class_teachers_added_by_idx on public.class_teachers(added_by) where added_by is not null;
create index if not exists teacher_invites_used_by_idx on public.teacher_invites(used_by) where used_by is not null;

create or replace function private.user_is_student(p_user uuid) returns boolean language sql stable security definer set search_path=pg_catalog,public as $$select exists(select 1 from public.profiles where id=p_user and role='student')$$;
revoke all on function private.user_is_student(uuid) from public; grant execute on function private.user_is_student(uuid) to authenticated;

create or replace function private.guard_class_update() returns trigger language plpgsql security definer set search_path=pg_catalog,public as $$begin if new.id is distinct from old.id or new.teacher_id is distinct from old.teacher_id or new.created_at is distinct from old.created_at then raise exception 'Class ownership and identity cannot be changed here.'; end if; new.name:=btrim(new.name); new.academic_year:=btrim(coalesce(new.academic_year,'')); return new; end$$;
drop trigger if exists trg_guard_class_update on public.classes;
create trigger trg_guard_class_update before update on public.classes for each row execute function private.guard_class_update();

create or replace function private.normalise_class_teacher_insert() returns trigger language plpgsql security definer set search_path=pg_catalog,public as $$begin if auth.uid() is not null then new.added_by:=auth.uid(); new.created_at:=now(); end if; return new; end$$;
drop trigger if exists trg_normalise_class_teacher_insert on public.class_teachers;
create trigger trg_normalise_class_teacher_insert before insert on public.class_teachers for each row execute function private.normalise_class_teacher_insert();

alter table public.profiles drop constraint if exists profiles_display_name_check;
alter table public.profiles add constraint profiles_display_name_check check(char_length(btrim(display_name)) between 2 and 100);
alter table public.classes drop constraint if exists classes_name_check;
alter table public.classes add constraint classes_name_check check(char_length(btrim(name)) between 2 and 100);
alter table public.classes drop constraint if exists classes_academic_year_check;
alter table public.classes add constraint classes_academic_year_check check(char_length(academic_year)<=40);

drop policy if exists "assigned teachers insert memberships" on public.class_members;
create policy "assigned teachers insert student memberships" on public.class_members for insert to authenticated with check ((select private.teacher_has_class_access(class_id)) and (select private.user_is_student(user_id)));

create or replace function private.guard_evidence_submission_write() returns trigger language plpgsql security definer set search_path=pg_catalog,public as $$
declare v_uid uuid:=auth.uid(); v_teacher boolean:=coalesce(private.is_teacher(),false);
begin
 if v_uid is null then raise exception 'Authentication required.'; end if;
 if tg_op='INSERT' then
   if v_teacher then raise exception 'Teachers cannot create student evidence submissions.'; end if;
   new.user_id:=v_uid; new.teacher_feedback:=''; new.reviewed_by:=null; new.reviewed_at:=null; new.created_at:=now(); new.updated_at:=now();
   if new.status='submitted' then new.submitted_at:=now(); else new.submitted_at:=null; end if; return new;
 end if;
 if v_teacher then
   if new.user_id is distinct from old.user_id or new.lesson_id is distinct from old.lesson_id or new.mechanic_id is distinct from old.mechanic_id or new.reflection is distinct from old.reflection or new.evidence_url is distinct from old.evidence_url or new.submitted_at is distinct from old.submitted_at or new.created_at is distinct from old.created_at then raise exception 'Teachers may review evidence but cannot alter student work.'; end if;
   if new.status not in ('changes_required','approved') then raise exception 'Teacher review status must be Changes Required or Approved.'; end if;
   new.reviewed_by:=v_uid; new.reviewed_at:=now(); new.updated_at:=now(); return new;
 end if;
 if old.user_id<>v_uid then raise exception 'You can only edit your own evidence.'; end if;
 if new.user_id is distinct from old.user_id or new.lesson_id is distinct from old.lesson_id or new.mechanic_id is distinct from old.mechanic_id or new.teacher_feedback is distinct from old.teacher_feedback or new.reviewed_by is distinct from old.reviewed_by or new.reviewed_at is distinct from old.reviewed_at or new.created_at is distinct from old.created_at then raise exception 'Protected evidence fields cannot be changed.'; end if;
 new.updated_at:=now();
 if new.status='submitted' and old.status is distinct from 'submitted' then new.submitted_at:=now(); else new.submitted_at:=old.submitted_at; end if;
 return new;
end$$;
drop trigger if exists trg_guard_evidence_submission_write on public.evidence_submissions;
create trigger trg_guard_evidence_submission_write before insert or update on public.evidence_submissions for each row execute function private.guard_evidence_submission_write();

-- ============================================================================
-- V3.20 News & Industry social layer
-- ============================================================================

create table if not exists public.news_saved (
  user_id uuid not null references public.profiles(id) on delete cascade,
  story_key text not null check (char_length(story_key) between 3 and 80),
  story_url text not null check (char_length(story_url) between 8 and 2500),
  story_title text not null check (char_length(story_title) between 1 and 500),
  story_summary text not null default '' check (char_length(story_summary) <= 1000),
  story_source text not null default '' check (char_length(story_source) <= 160),
  story_image text not null default '' check (char_length(story_image) <= 2500),
  story_category text not null default 'games' check (story_category in ('development','industry','games','trailer','podcast')),
  story_date timestamptz,
  saved_at timestamptz not null default now(),
  primary key (user_id, story_key)
);
create table if not exists public.news_votes (
  user_id uuid not null references public.profiles(id) on delete cascade,
  story_key text not null check (char_length(story_key) between 3 and 80),
  story_url text not null check (char_length(story_url) between 8 and 2500),
  created_at timestamptz not null default now(),
  primary key (user_id, story_key)
);
create table if not exists public.news_comments (
  id uuid primary key default gen_random_uuid(),
  story_key text not null check (char_length(story_key) between 3 and 80),
  story_url text not null check (char_length(story_url) between 8 and 2500),
  story_title text not null default '' check (char_length(story_title) <= 500),
  story_source text not null default '' check (char_length(story_source) <= 160),
  author_id uuid not null references public.profiles(id) on delete cascade,
  body text not null check (char_length(btrim(body)) between 1 and 2000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists news_saved_story_idx on public.news_saved(story_key);
create index if not exists news_votes_story_idx on public.news_votes(story_key);
create index if not exists news_comments_story_created_idx on public.news_comments(story_key,created_at);
alter table public.news_saved enable row level security;
alter table public.news_votes enable row level security;
alter table public.news_comments enable row level security;
drop policy if exists "news saved own read" on public.news_saved;
create policy "news saved own read" on public.news_saved for select to authenticated using (user_id=(select auth.uid()));
drop policy if exists "news saved own insert" on public.news_saved;
create policy "news saved own insert" on public.news_saved for insert to authenticated with check (user_id=(select auth.uid()));
drop policy if exists "news saved own update" on public.news_saved;
create policy "news saved own update" on public.news_saved for update to authenticated using (user_id=(select auth.uid())) with check (user_id=(select auth.uid()));
drop policy if exists "news saved own delete" on public.news_saved;
create policy "news saved own delete" on public.news_saved for delete to authenticated using (user_id=(select auth.uid()));
drop policy if exists "news votes authenticated read" on public.news_votes;
create policy "news votes authenticated read" on public.news_votes for select to authenticated using (true);
drop policy if exists "news votes own insert" on public.news_votes;
create policy "news votes own insert" on public.news_votes for insert to authenticated with check (user_id=(select auth.uid()));
drop policy if exists "news votes own delete" on public.news_votes;
create policy "news votes own delete" on public.news_votes for delete to authenticated using (user_id=(select auth.uid()));
drop policy if exists "news comments authenticated read" on public.news_comments;
create policy "news comments authenticated read" on public.news_comments for select to authenticated using (true);
drop policy if exists "news comments own insert" on public.news_comments;
create policy "news comments own insert" on public.news_comments for insert to authenticated with check (author_id=(select auth.uid()));
drop policy if exists "news comments own update" on public.news_comments;
create policy "news comments own update" on public.news_comments for update to authenticated using (author_id=(select auth.uid())) with check (author_id=(select auth.uid()));
drop policy if exists "news comments author or teacher delete" on public.news_comments;
create policy "news comments author or teacher delete" on public.news_comments for delete to authenticated using (author_id=(select auth.uid()) or (select private.is_teacher()));
create or replace function public.get_news_comments(p_story_key text)
returns table(id uuid,author_id uuid,display_name text,role text,body text,created_at timestamptz,can_delete boolean)
language plpgsql stable security definer set search_path=pg_catalog,public,private as $$
begin
  if auth.uid() is null then raise exception 'Authentication required.'; end if;
  return query select c.id,c.author_id,p.display_name,p.role,c.body,c.created_at,(c.author_id=auth.uid() or private.is_teacher())
  from public.news_comments c join public.profiles p on p.id=c.author_id where c.story_key=p_story_key order by c.created_at asc;
end;$$;
revoke all on function public.get_news_comments(text) from public;
grant execute on function public.get_news_comments(text) to authenticated;

-- ===== v3.36.0 CRITIQUE BOARD + LEARNING XP =====
-- v3.36.0 — class-scoped Critique Board + structured critique XP + Designer source-task XP

create table if not exists public.critique_posts (
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null references public.classes(id) on delete cascade,
  author_id uuid not null references public.profiles(id) on delete cascade,
  area text not null default 'General' check (char_length(area) between 2 and 40),
  title text not null default '' check (char_length(title) <= 120),
  prompt text not null check (char_length(prompt) between 8 and 600),
  storage_path text not null unique,
  original_name text not null default 'critique-image',
  improved_storage_path text null unique,
  improved_name text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint critique_posts_storage_path_scope check (storage_path like class_id::text || '/' || author_id::text || '/%'),
  constraint critique_posts_improved_path_scope check (improved_storage_path is null or improved_storage_path like class_id::text || '/' || author_id::text || '/%')
);

create table if not exists public.critique_feedback (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.critique_posts(id) on delete cascade,
  author_id uuid not null references public.profiles(id) on delete cascade,
  works_well text not null check (char_length(works_well) between 3 and 600),
  clearer text not null check (char_length(clearer) between 3 and 600),
  change_try text not null check (char_length(change_try) between 3 and 600),
  xp_awarded boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(post_id, author_id)
);

create index if not exists critique_posts_class_created_idx on public.critique_posts(class_id, created_at desc);
create index if not exists critique_posts_author_created_idx on public.critique_posts(author_id, created_at desc);
create index if not exists critique_feedback_post_created_idx on public.critique_feedback(post_id, created_at);
create index if not exists critique_feedback_author_created_idx on public.critique_feedback(author_id, created_at desc);

alter table public.critique_posts enable row level security;
alter table public.critique_feedback enable row level security;

create or replace function private.critique_can_access_class(p_class_id uuid)
returns boolean
language sql
stable
security definer
set search_path = pg_catalog, public, private
as $function$
  select (select private.is_class_member(p_class_id)) or (select private.teacher_has_class_access(p_class_id))
$function$;

create or replace function private.critique_can_access_post(p_post_id uuid)
returns boolean
language sql
stable
security definer
set search_path = pg_catalog, public, private
as $function$
  select exists(
    select 1 from public.critique_posts p
    where p.id=p_post_id and private.critique_can_access_class(p.class_id)
  )
$function$;

create or replace function private.critique_post_author(p_post_id uuid)
returns uuid
language sql
stable
security definer
set search_path = pg_catalog, public
as $function$
  select p.author_id from public.critique_posts p where p.id=p_post_id
$function$;

create or replace function private.critique_teacher_can_manage_post(p_post_id uuid)
returns boolean
language sql
stable
security definer
set search_path = pg_catalog, public, private
as $function$
  select exists(
    select 1 from public.critique_posts p
    where p.id=p_post_id and private.teacher_has_class_access(p.class_id)
  )
$function$;

revoke all on function private.critique_can_access_class(uuid) from public;
revoke all on function private.critique_can_access_post(uuid) from public;
revoke all on function private.critique_post_author(uuid) from public;
revoke all on function private.critique_teacher_can_manage_post(uuid) from public;
grant execute on function private.critique_can_access_class(uuid) to authenticated;
grant execute on function private.critique_can_access_post(uuid) to authenticated;
grant execute on function private.critique_post_author(uuid) to authenticated;
grant execute on function private.critique_teacher_can_manage_post(uuid) to authenticated;

drop policy if exists "critique posts class read" on public.critique_posts;
create policy "critique posts class read" on public.critique_posts
for select to authenticated
using ((select private.critique_can_access_class(class_id)));

drop policy if exists "critique posts author insert" on public.critique_posts;
create policy "critique posts author insert" on public.critique_posts
for insert to authenticated
with check (
  author_id=(select auth.uid())
  and (select private.critique_can_access_class(class_id))
);

drop policy if exists "critique posts author or teacher update" on public.critique_posts;
drop policy if exists "critique posts author update" on public.critique_posts;
create policy "critique posts author update" on public.critique_posts
for update to authenticated
using (author_id=(select auth.uid()) and (select private.critique_can_access_class(class_id)))
with check (author_id=(select auth.uid()) and (select private.critique_can_access_class(class_id)));

drop policy if exists "critique posts author or teacher delete" on public.critique_posts;
create policy "critique posts author or teacher delete" on public.critique_posts
for delete to authenticated
using (
  author_id=(select auth.uid())
  or (select private.teacher_has_class_access(class_id))
);

drop policy if exists "critique feedback class read" on public.critique_feedback;
create policy "critique feedback class read" on public.critique_feedback
for select to authenticated
using ((select private.critique_can_access_post(post_id)));

drop policy if exists "critique feedback peer insert" on public.critique_feedback;
create policy "critique feedback peer insert" on public.critique_feedback
for insert to authenticated
with check (
  author_id=(select auth.uid())
  and (select private.critique_can_access_post(post_id))
  and (select private.critique_post_author(post_id)) is distinct from (select auth.uid())
);

drop policy if exists "critique feedback author update" on public.critique_feedback;

drop policy if exists "critique feedback author or teacher delete" on public.critique_feedback;
create policy "critique feedback author or teacher delete" on public.critique_feedback
for delete to authenticated
using (
  author_id=(select auth.uid())
  or (select private.critique_teacher_can_manage_post(post_id))
);

-- Do not inherit the broad Supabase default table privileges. RLS still governs every granted operation.
revoke all on table public.critique_posts from anon, authenticated;
revoke all on table public.critique_feedback from anon, authenticated;
grant select, insert, delete on table public.critique_posts to authenticated;
grant update (improved_storage_path, improved_name, updated_at) on table public.critique_posts to authenticated;
grant select, insert, delete on table public.critique_feedback to authenticated;

-- Private class-scoped image bucket. Paths are class_id/user_id/post_id/filename.
insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values ('critique-media','critique-media',false,8388608,array['image/png','image/jpeg','image/webp']::text[])
on conflict (id) do update set
  public=false,
  file_size_limit=excluded.file_size_limit,
  allowed_mime_types=excluded.allowed_mime_types;

create or replace function private.critique_path_class_id(p_name text)
returns uuid
language plpgsql
immutable
set search_path = pg_catalog
as $function$
begin
  return split_part(coalesce(p_name,''),'/',1)::uuid;
exception when others then
  return null;
end
$function$;

create or replace function private.critique_storage_can_read(p_name text)
returns boolean
language sql
stable
security definer
set search_path = pg_catalog, public, private
as $function$
  select private.critique_can_access_class(private.critique_path_class_id(p_name))
$function$;

create or replace function private.critique_storage_can_write(p_name text)
returns boolean
language sql
stable
security definer
set search_path = pg_catalog, public, private
as $function$
  select
    private.critique_path_class_id(p_name) is not null
    and (
      (
        split_part(coalesce(p_name,''),'/',2)=(select auth.uid())::text
        and private.critique_can_access_class(private.critique_path_class_id(p_name))
      )
      or private.teacher_has_class_access(private.critique_path_class_id(p_name))
    )
$function$;

revoke all on function private.critique_path_class_id(text) from public;
revoke all on function private.critique_storage_can_read(text) from public;
revoke all on function private.critique_storage_can_write(text) from public;
grant execute on function private.critique_path_class_id(text) to authenticated;
grant execute on function private.critique_storage_can_read(text) to authenticated;
grant execute on function private.critique_storage_can_write(text) to authenticated;

drop policy if exists "critique media class read" on storage.objects;
create policy "critique media class read" on storage.objects
for select to authenticated
using (bucket_id='critique-media' and (select private.critique_storage_can_read(name)));

drop policy if exists "critique media class upload" on storage.objects;
create policy "critique media class upload" on storage.objects
for insert to authenticated
with check (bucket_id='critique-media' and (select private.critique_storage_can_write(name)));

drop policy if exists "critique media author or teacher update" on storage.objects;
create policy "critique media author or teacher update" on storage.objects
for update to authenticated
using (bucket_id='critique-media' and (select private.critique_storage_can_write(name)))
with check (bucket_id='critique-media' and (select private.critique_storage_can_write(name)));

drop policy if exists "critique media author or teacher delete" on storage.objects;
create policy "critique media author or teacher delete" on storage.objects
for delete to authenticated
using (bucket_id='critique-media' and (select private.critique_storage_can_write(name)));

-- Award +15 XP for a structured peer critique, capped at 3 rewarded critiques per London day.
-- Students may continue helping after the cap; the feedback is stored but does not award more XP.
create or replace function private.prepare_critique_feedback_xp()
returns trigger
language plpgsql
security definer
set search_path = pg_catalog, public, private
as $function$
declare
  rewarded_today integer := 0;
  post_author uuid;
  student_author boolean := false;
begin
  new.works_well := trim(new.works_well);
  new.clearer := trim(new.clearer);
  new.change_try := trim(new.change_try);
  new.xp_awarded := false;

  select p.author_id into post_author from public.critique_posts p where p.id=new.post_id;
  select exists(select 1 from public.profiles p where p.id=new.author_id and p.role='student') into student_author;

  if student_author
     and post_author is distinct from new.author_id
     and char_length(new.works_well) >= 12
     and char_length(new.clearer) >= 12
     and char_length(new.change_try) >= 12
     and not exists(
       select 1 from public.learning_xp_events e
       where e.user_id=new.author_id and e.source_type='critique_feedback' and e.source_key=new.post_id::text
     )
  then
    -- Serialize reward checks for this student/day so concurrent submissions cannot slip past the daily cap.
    perform pg_advisory_xact_lock(hashtextextended(new.author_id::text || ':' || (now() at time zone 'Europe/London')::date::text,0));

    select count(*)::integer into rewarded_today
    from public.learning_xp_events e
    where e.user_id=new.author_id
      and e.source_type='critique_feedback'
      and (e.created_at at time zone 'Europe/London')::date=(now() at time zone 'Europe/London')::date;

    if rewarded_today < 3 then
      perform private.award_learning_xp(
        new.author_id,
        'critique_feedback',
        new.post_id::text,
        15,
        now(),
        jsonb_build_object('post_id',new.post_id,'label','Structured peer critique')
      );
      new.xp_awarded := true;
    end if;
  end if;

  return new;
end
$function$;

drop trigger if exists critique_feedback_prepare_xp on public.critique_feedback;
create trigger critique_feedback_prepare_xp
before insert on public.critique_feedback
for each row execute function private.prepare_critique_feedback_xp();

create or replace function private.notify_critique_feedback()
returns trigger
language plpgsql
security definer
set search_path = pg_catalog, public
as $function$
declare
  owner_id uuid;
  reviewer_name text;
begin
  select p.author_id into owner_id from public.critique_posts p where p.id=new.post_id;
  if owner_id is null or owner_id=new.author_id then return new; end if;
  select p.display_name into reviewer_name from public.profiles p where p.id=new.author_id;
  insert into public.notifications(user_id,kind,title,body,link)
  values(
    owner_id,
    'feedback',
    'New peer critique',
    left(coalesce(reviewer_name,'A classmate') || ' left structured feedback on your Critique Board post.',1200),
    '#/critique'
  );
  return new;
end
$function$;

drop trigger if exists critique_feedback_notify_owner on public.critique_feedback;
create trigger critique_feedback_notify_owner
after insert on public.critique_feedback
for each row execute function private.notify_critique_feedback();

-- Industry videos/articles are self-declared completion tasks worth +20 XP.
create or replace function private.award_lesson_progress_xp()
returns trigger
language plpgsql
security definer
set search_path = pg_catalog, public, private
as $function$
declare
  points integer;
begin
  if new.completed = true and (tg_op = 'INSERT' or old.completed is distinct from true) then
    points := case
      when new.lesson_id like 'designsource:%' then 20
      else private.learning_xp_for_id(new.lesson_id)
    end;
    perform private.award_learning_xp(
      new.user_id,
      'learning_complete',
      new.lesson_id,
      points,
      coalesce(new.completed_at,new.updated_at,now()),
      jsonb_build_object('lesson_id',new.lesson_id)
    );
  end if;
  return new;
end
$function$;

-- Feed RPC keeps classmates' profile rows private while returning only the names needed by the board.
create or replace function public.get_critique_feed(p_class_id uuid)
returns table(
  id uuid,
  class_id uuid,
  author_id uuid,
  author_name text,
  author_role text,
  area text,
  title text,
  prompt text,
  storage_path text,
  original_name text,
  improved_storage_path text,
  improved_name text,
  created_at timestamptz,
  updated_at timestamptz,
  feedback jsonb
)
language plpgsql
security definer
set search_path = pg_catalog, public, private
as $function$
begin
  if (select auth.uid()) is null then raise exception 'Sign in first'; end if;
  if not private.critique_can_access_class(p_class_id) then raise exception 'You do not have access to this class Critique Board'; end if;

  return query
  select
    p.id,p.class_id,p.author_id,coalesce(a.display_name,'Student'),a.role,p.area,p.title,p.prompt,
    p.storage_path,p.original_name,p.improved_storage_path,p.improved_name,p.created_at,p.updated_at,
    coalesce((
      select jsonb_agg(jsonb_build_object(
        'id',f.id,
        'author_id',f.author_id,
        'author_name',coalesce(fp.display_name,'Student'),
        'author_role',fp.role,
        'works_well',f.works_well,
        'clearer',f.clearer,
        'change_try',f.change_try,
        'xp_awarded',f.xp_awarded,
        'created_at',f.created_at
      ) order by f.created_at)
      from public.critique_feedback f
      left join public.profiles fp on fp.id=f.author_id
      where f.post_id=p.id
    ),'[]'::jsonb) as feedback
  from public.critique_posts p
  left join public.profiles a on a.id=p.author_id
  where p.class_id=p_class_id
  order by p.created_at desc;
end
$function$;

create or replace function public.get_critique_attention_count()
returns integer
language sql
security definer
set search_path = pg_catalog, public, private
as $function$
  select coalesce(count(*),0)::integer
  from public.critique_posts p
  where p.author_id is distinct from (select auth.uid())
    and private.critique_can_access_class(p.class_id)
    and (select count(*) from public.critique_feedback f where f.post_id=p.id) < 2
    and not exists(select 1 from public.critique_feedback mine where mine.post_id=p.id and mine.author_id=(select auth.uid()))
$function$;

create or replace function public.get_my_critique_reward_count_today()
returns integer
language sql
stable
security definer
set search_path = pg_catalog, public
as $function$
  select coalesce(count(*),0)::integer
  from public.learning_xp_events e
  where e.user_id=(select auth.uid())
    and e.source_type='critique_feedback'
    and (e.created_at at time zone 'Europe/London')::date=(now() at time zone 'Europe/London')::date
$function$;

revoke all on function public.get_critique_feed(uuid) from public;
revoke all on function public.get_critique_attention_count() from public;
revoke all on function public.get_my_critique_reward_count_today() from public;
revoke execute on function public.get_critique_feed(uuid) from anon;
revoke execute on function public.get_critique_attention_count() from anon;
revoke execute on function public.get_my_critique_reward_count_today() from anon;
grant execute on function public.get_critique_feed(uuid) to authenticated;
grant execute on function public.get_critique_attention_count() to authenticated;
grant execute on function public.get_my_critique_reward_count_today() to authenticated;

-- v3.36.0 follow-up: Supabase default privileges explicitly grant anon EXECUTE on public functions.
revoke execute on function public.get_critique_feed(uuid) from anon;
revoke execute on function public.get_critique_attention_count() from anon;
revoke execute on function public.get_my_critique_reward_count_today() from anon;

-- v3.36.0 follow-up: enforce the same meaningful-feedback floor server-side as the UI.
alter table public.critique_feedback drop constraint if exists critique_feedback_works_well_check;
alter table public.critique_feedback drop constraint if exists critique_feedback_clearer_check;
alter table public.critique_feedback drop constraint if exists critique_feedback_change_try_check;
alter table public.critique_feedback add constraint critique_feedback_works_well_check check (char_length(works_well) between 12 and 600);
alter table public.critique_feedback add constraint critique_feedback_clearer_check check (char_length(clearer) between 12 and 600);
alter table public.critique_feedback add constraint critique_feedback_change_try_check check (char_length(change_try) between 12 and 600);


-- ============================================================================
-- v3.39.3 — legacy project screenshot thumbnail helper (migration 33)
-- Historical migration retained in the deploy-all schema. The INSERT policy is
-- intentionally removed by the Teams-first retirement block immediately after.
-- ============================================================================
create or replace function private.can_write_project_thumbnail_path(p_path text)
returns boolean
language sql
stable
security definer
set search_path = pg_catalog, public, private, storage
as $$
  select
    right(coalesce(p_path,''),11) = '.thumb.webp'
    and (
      (
        split_part(coalesce(p_path,''),'/',2) = (select auth.uid())::text
        and (select private.project_is_member((select private.project_id_from_media_path(p_path)),(select auth.uid())))
      )
      or (select private.teacher_can_access_project((select private.project_id_from_media_path(p_path))))
    )
    and exists(
      select 1
      from storage.objects o
      where o.bucket_id = 'project-media'
        and o.name = left(p_path, greatest(length(p_path)-11,0))
    );
$$;
revoke all on function private.can_write_project_thumbnail_path(text) from public, anon;
grant execute on function private.can_write_project_thumbnail_path(text) to authenticated;
drop policy if exists "project media legacy thumbnail upload" on storage.objects;
create policy "project media legacy thumbnail upload" on storage.objects
for insert to authenticated
with check (
  bucket_id='project-media'
  and (select private.can_write_project_thumbnail_path(name))
);

-- ============================================================================
-- v3.39.3 — Teams-first retirement of duplicate Projects/evidence writes
-- Historical data remains readable under existing SELECT policies.
-- ============================================================================
drop policy if exists "students create own submissions" on public.evidence_submissions;
drop policy if exists "submissions updated by editable owner or assigned teacher" on public.evidence_submissions;
drop policy if exists "students add files to editable submissions" on public.submission_files;
drop policy if exists "students delete files from editable submissions" on public.submission_files;

drop policy if exists "project owner updates project" on public.projects;
drop policy if exists "active project owner deletes project" on public.projects;
drop policy if exists "class teachers create project templates" on public.project_templates;
drop policy if exists "class teachers update project templates" on public.project_templates;
drop policy if exists "class teachers delete project templates" on public.project_templates;
drop policy if exists "active owner removes members or member leaves" on public.project_members;
drop policy if exists "active members update own role label" on public.project_members;
drop policy if exists "lead or teacher creates milestones" on public.project_milestones;
drop policy if exists "team lead or teacher updates milestones" on public.project_milestones;
drop policy if exists "lead or teacher deletes milestones" on public.project_milestones;
drop policy if exists "active members create own project updates" on public.project_updates;
drop policy if exists "active authors update own project updates" on public.project_updates;
drop policy if exists "active authors delete own project updates" on public.project_updates;
drop policy if exists "active members add own project media" on public.project_media;
drop policy if exists "active uploader updates own project media caption" on public.project_media;
drop policy if exists "active uploader deletes own project media" on public.project_media;
drop policy if exists "members active or teachers review project comments" on public.project_comments;
drop policy if exists "teachers add overall project feedback" on public.project_comments;
drop policy if exists "authors update own project comments while reviewable" on public.project_comments;
drop policy if exists "authors delete own project comments while reviewable" on public.project_comments;

drop policy if exists "project media storage upload" on storage.objects;
drop policy if exists "project media legacy thumbnail upload" on storage.objects;
drop policy if exists "project media storage delete own" on storage.objects;
drop policy if exists "students upload editable evidence" on storage.objects;
drop policy if exists "students update editable evidence" on storage.objects;
drop policy if exists "students delete editable evidence" on storage.objects;

revoke execute on function public.join_project_by_code(text) from public, anon, authenticated;
revoke execute on function public.regenerate_project_join_code(uuid) from public, anon, authenticated;
revoke execute on function public.reopen_project(uuid) from public, anon, authenticated;
revoke execute on function public.start_project_from_template(uuid,text) from public, anon, authenticated;

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

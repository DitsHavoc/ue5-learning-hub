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

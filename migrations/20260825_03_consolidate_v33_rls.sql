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

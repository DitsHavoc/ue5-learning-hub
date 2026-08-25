-- Lock evidence while it is waiting for teacher review.
drop policy if exists "students update own submissions" on public.evidence_submissions;
create policy "students update own submissions" on public.evidence_submissions
for update to authenticated
using (user_id=(select auth.uid()) and status in ('draft','changes_required'))
with check (user_id=(select auth.uid()) and status in ('draft','submitted'));

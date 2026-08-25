# UE5 Learning Hub v3.9.0 — Hardened Co-Teaching

V3.9 is a reliability/security release rather than a feature-sprawl release.

## Co-teaching

A class has one permanent **owner** plus zero or more **co-teachers**.

- Owner and co-teachers can view the shared class, students, progress, evidence and private lesson comments.
- Owner and co-teachers can rename/archive the class, manage the join code, and manage students.
- Only the owner can add/remove other co-teachers.
- A co-teacher can leave the teaching team.
- Only the owner can permanently delete the class.
- Existing classes are automatically backfilled with their existing teacher as owner.

## Privacy model

Teacher access is **class scoped**. A Teacher role no longer grants site-wide access to every student's work.

A teacher can read a student profile/progress/project/evidence/comment only when the student belongs to a class that teacher owns or co-teaches.

## Security hardening

- Authenticated users have no UPDATE privilege on `profiles.role`; students cannot promote themselves to Teacher through a crafted API call.
- Class ownership is immutable through normal class updates.
- Class membership only accepts Student profiles.
- Submitted/Approved evidence is immutable to students at both database-record and Storage-object layers.
- Needs Changes unlocks the student's evidence again.
- Teachers may review evidence but cannot rewrite the student's reflection/link/content fields.
- Student evidence upload metadata is capped to the same MIME types / 10 MB limits as Storage.
- Maximum six uploaded files per submission is also enforced in the database.
- Evidence timestamps and reviewer identity are server-controlled.
- Storage remains private and teacher signed-file access is class scoped.

## Live validation performed

- Existing four classes preserved and owner assignments backfilled.
- Unassigned teacher sees zero unrelated student profiles.
- Temporary co-teacher test saw exactly the assigned class and not another class.
- Co-teacher successfully edited a shared class but could not delete it.
- Authenticated role can update `profiles.display_name` but cannot update `profiles.role`.
- Attempted forged teacher feedback on student evidence was stripped server-side.
- Supabase security advisor reports no RLS/function warning from this hardening pass.

The remaining Supabase security warning is the project-level **Leaked Password Protection Disabled** Auth setting.

## Migrations

Already applied to the current live Supabase project:

- `20260825_11_co_teaching_scoped_access_and_evidence_hardening.sql`
- `20260825_12_add_remaining_foreign_key_indexes.sql`
- `20260825_13_tighten_class_and_evidence_integrity.sql`

Do not rerun them on the existing live project.

Microsoft SSO remains optional and disabled.

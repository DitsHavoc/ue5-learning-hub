# UE5 Learning Hub v3.12.0 — Hardened Co-Teaching

V3.12 is a reliability/security release rather than a feature-sprawl release.

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


## V3.12 — Visual Accuracy Pass

- Integrated five current classroom UE screenshots:
  - Editor
  - Events / execution
  - Branches
  - Functions
  - Data Table
- Current classroom captures appear before concept diagrams.
- Old UE5.0 book screenshots were removed as primary visuals where a current owned screenshot is now available.
- Every lesson now includes one or more **Official Unreal Engine 5.8 reference** links.
- SaveGame uses Epic's current Save/Load documentation as its accuracy reference; no forced local screenshot is required.
- Epic documentation artwork is **not copied into the package**. Students open the current official documentation in a new tab.
- Existing concept diagrams remain clearly labelled as concept diagrams, not exact Unreal UI.

No database migration is required for V3.12.


## V3.12 visual flow pass
- moved key lesson images much higher in the Learn section so they sit near the explanation text
- added secondary close-up screenshots for Editor, Events, Branches, Functions and Data Tables
- preserved official UE5.8 links and concept diagrams underneath the real screenshots


## V3.12 practical exercise pass
Every lesson now has three original practical checkpoints embedded in the Learn flow: TRY IT NOW, TEST IT IN PLAY, and MAKE IT YOURS. These emulate the supplied book's explain/build/test rhythm without copying its exercises. The existing full Guided Build remains as the consolidation walkthrough.

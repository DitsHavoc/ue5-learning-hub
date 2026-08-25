# UE5 Learning Hub v3.15.0 — Learning, Projects & Revision

V3.15 is the learning-first workspace release: multi-project/group project logbooks, scored revision quizzes, feature-request conversations, readability improvements and the existing security/co-teaching foundation.

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


## V3.15 — Visual Accuracy Pass

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
- Selected official Epic documentation images are integrated as teaching references, with source links and the site disclaimer; classroom-owned screenshots remain preferred where available.
- Existing concept diagrams remain clearly labelled as concept diagrams, not exact Unreal UI.

The visual layer itself needs no database migration; Projects and request replies require migrations 14–17.


## V3.15 visual flow pass
- moved key lesson images much higher in the Learn section so they sit near the explanation text
- added secondary close-up screenshots for Editor, Events, Branches, Functions and Data Tables
- preserved official UE5.8 links and concept diagrams underneath the real screenshots


## V3.15 practical exercise pass
Every lesson now has three original practical checkpoints embedded in the Learn flow: TRY IT NOW, TEST IT IN PLAY, and MAKE IT YOURS. These emulate the supplied book's explain/build/test rhythm without copying its exercises. The existing full Guided Build remains as the consolidation walkthrough.


## V3.15 — Epic UE5.8 visual integration + lightbox

- Curated current screenshots from Epic's official Unreal Engine 5.8 documentation are placed beside the text they explain.
- Existing current classroom screenshots remain the primary examples where available.
- Generated concept diagrams remain, but are separated and labelled as explanatory diagrams rather than Unreal UI.
- All lesson imagery is clickable/tappable and opens in a large lightbox. Escape, close button and backdrop click close the viewer.
- Every Epic documentation image carries a source link.
- A global Epic Fan Content Policy disclaimer is present in the footer.
- Remote Epic images fail gracefully to a source link if Epic changes an image URL.
- Cache-busting script versions were updated to v3.15.0 to reduce stale Render/browser deployments.


## V3.15 motion media pass
- adds 12 selected official Epic UE5.8 video clips across 10 lessons
- videos are click-to-load to protect performance and bandwidth
- every clip retains a direct link to the source Epic lesson
- existing animated concept SVGs remain in place where they explain a node/system better than a long video
- no database migration required


## V3.15 learning-first workspace overhaul
- Learning paths and revision now sit above project administration in the navigation/dashboard.
- Projects is a new multi-project cloud workspace for solo and group assignment work.
- Group projects use join codes; development-log authorship is immutable and remains individual.
- Project milestones, screenshots/PDFs, team comments, personal contribution views and copyable assessment summaries are included.
- Revision is now a scored multiple-choice quiz system with random and topic modes.
- Feature requests support teacher replies and student notifications.
- Readability pass increases small text, labels, buttons, captions and card copy throughout the UI.
- Hidden Konami Code Easter egg: Up Up Down Down Left Right Left Right B A.
- Requires migrations 14–17 on an existing database.

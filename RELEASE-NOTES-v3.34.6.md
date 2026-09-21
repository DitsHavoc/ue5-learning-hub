# UE5 Learning Hub v3.34.6 — Lighter Milestones & Overall Project Feedback

Teacher review is now deliberately less granular.

- Milestones remain useful progress checkpoints for students, but are no longer presented as separate marking tasks.
- On teacher project views, the milestone list is collapsed behind a compact progress summary.
- Per-evidence teacher feedback is now an optional **Add targeted feedback** control instead of an always-open text box under every milestone entry.
- A new **Overall Project Feedback** section provides one substantial project-level review, up to 8,000 characters.
- Overall feedback is visible to the student/team and can be posted while the project is Active or Complete.
- Students/team members receive a notification when overall teacher feedback is posted.
- Existing milestone feedback, evidence, screenshots, memberships and project status are preserved.

Database migration:
`migrations/20260828_24_teacher_overall_project_feedback.sql`

The migration was applied to the live Supabase project on 28 Aug 2026. It only adds the teacher permission required for project-level feedback; it does not alter tables or existing data.

Builds on v3.34.5.

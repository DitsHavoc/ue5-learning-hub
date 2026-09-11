# UE5 Learning Hub v3.34.5 — Teacher Project Supervision

Teachers assigned to a class now act as supervisory reviewers across every student project in that class without being added as student Project Leads.

- Teachers can leave milestone evidence feedback while a project is **Active** or **Complete**.
- Completed projects still lock student/team editing.
- Teachers see **Reopen Project** on completed class projects.
- Reopening uses a dedicated permission-checked `reopen_project(...)` RPC available to the Project Lead or assigned class teacher.
- Students remain the actual Project Lead/owner, preserving authorship and accountability.
- Completed-project messaging now explains that teacher feedback remains available and that a teacher can reopen the project when changes are needed.

Database migration:
`migrations/20260828_23_teacher_project_supervision_and_completed_feedback.sql`

This migration was applied to the live Supabase project on 28 Aug 2026.

Builds on v3.34.4. No existing project, evidence, media, milestone, membership or feedback data is removed or rewritten.

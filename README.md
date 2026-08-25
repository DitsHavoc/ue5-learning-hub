# UE5 Learning Hub v3.16.0 — Learning First, Projects When Needed

V3.16 keeps the Hub deliberately focused: **UE5 learning is the main product**. Projects sits underneath it as a lightweight development logbook and feedback workspace for assignments, game jams, personal work and group projects. It is not intended to replace the college LMS or formal assessment submission system.

## V3.16 project model

### Teacher project templates
Teachers create a simple project template for a class containing:
- title and brief
- individual / group / student-choice working mode
- optional unit/assessment label
- simple milestones with a title and short description
- Draft or Published visibility

Published templates appear to class members under **Available Projects**. Students deliberately choose **Start Individual** or **Start Group** when the template allows it. A group starter becomes Project Lead and receives a join code for teammates.

Templates do not grade students, set formal deadlines or collect final assessment submissions.

### Student projects
Students can also create their own solo or group projects. A project contains:
- team roster and optional role labels
- milestones
- chronological development log
- multiple screenshots per entry, each with its own caption
- contextual teacher/team comments beneath the exact log entry
- **My Contributions**, showing only the signed-in student's authored entries and screenshots

Development-log prompts are optional but encouraged:
1. What I did
2. Why I did it
3. Problems / changes
4. Next steps

Students may edit their own old entries and delete them after a confirmation warning. Original creation time remains visible and edited entries are marked as edited.

### Group accountability
Shared project does **not** mean shared authorship.
- every log entry has an immutable author and creation time
- teammates cannot edit another student's log entries
- screenshots retain their uploader
- normal teammates can mark milestones complete/incomplete but cannot rewrite milestone structure
- Project Lead and assigned teachers can create/edit milestone structure
- teammates and assigned teachers can reply to individual development-log entries
- project discussion is private to the project team and assigned class teachers

For class-linked projects, join codes only accept students who belong to that class. A student cannot join a second project copy from the same teacher template.

### Complete / reopen
The Project Lead can mark a project **Complete**. Completed projects become read-only at the database-policy layer. The Project Lead can later **Reopen** the project and editing resumes.

## Revision quizzes
Revision is now a proper scored quiz builder:
- choose **10 / 20 / 30** questions
- Random Mixed quiz from the whole course
- Focused quiz from one lesson, an entire learning path or any combination of lessons
- single-answer and multi-select questions supported
- score at the end
- answer review with correct answer, feedback and link back to the lesson
- recent scores stored on the current browser

If a focused topic contains fewer questions than the chosen quiz length, the Hub uses all available questions and tells the student.

## Learning content and visuals retained
V3.16 retains the existing gold-standard lesson flow, practical exercises, current UE screenshots, curated Epic UE5.8 documentation visuals, click-to-enlarge lightbox, selected official Epic motion-media embeds, glossary, homework, challenges, evidence workflow and optional Signal Lost practice spine.

The hidden Konami Code Easter egg remains: **Up Up Down Down Left Right Left Right B A**.

## Readability
The final readability floor now prioritises classroom reading over compact dashboard styling:
- instructional paragraphs at 16 px with increased line height
- larger form labels and controls
- larger navigation text and metadata
- fewer tiny all-caps labels
- mobile controls remain at least 16 px where appropriate

## Feature Requests
Teachers can reply directly to feature requests. Replies appear beneath the request and notify the student who submitted it.

## Database changes
The current live Supabase project already has the V3.16 migration applied. Do **not** rerun production migrations there.

For another installation, the relevant incremental project migrations are:
- `20260825_14_projects_group_logbooks_request_replies.sql`
- `20260825_15_fix_project_member_updated_at.sql`
- `20260825_16_grant_project_rls_helpers.sql`
- `20260825_17_allow_project_owner_returning.sql`
- `20260825_18_wrap_project_rpcs_with_invokers.sql`
- `20260825_19_optimize_project_profile_rls_and_indexes.sql`
- `20260825_20_project_templates_structured_logs_completion.sql`

See `DATABASE-MIGRATIONS.md` and `SECURITY-HARDENING.md` for details.

## Validation completed for V3.16
A rollback-only authenticated-role database test verified:
- teacher can create/publish a class template
- student can start a published group template
- template milestones copy into the student's project
- a teammate can join by code
- teammate can mark milestone complete/incomplete
- teammate cannot rewrite milestone structure
- teammate cannot edit another student's authored log
- teammate can add their own log and reply to another entry
- Project Lead can complete and reopen the project
- Complete blocks project mutation; Reopen restores it
- assigned teacher can edit milestone structure and comment
- a student outside the linked class cannot use the group join code

Supabase's security advisor reports no new V3.16 RLS/function warning. The remaining project-level warning is **Leaked Password Protection Disabled** in Auth settings.

Microsoft SSO remains optional and disabled.

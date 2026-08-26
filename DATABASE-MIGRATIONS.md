# Database migration history

The live Supabase project is upgraded incrementally. Production data is not rebuilt or wiped when features are added.


## V3.19

No database migration is required. V3.19 is a Designer Studio content/teaching-quality release; new recipe and Studio Build completion continues to use the existing progress ID scheme.

## Current production sequence

The project currently contains these migration generations:

1. initial course platform schema and helper hardening
2. evidence, classes and notifications
3. independent email auth, class codes and teacher bootstrap
4. multi-teacher invites
5. co-teaching, class-scoped access and evidence hardening
6. V3.15 multi-project/group logbooks and feature-request replies
7. V3.16 teacher project templates, structured logs, image captions and completion locking

The package's `migrations/` directory contains the incremental SQL used after the initial schema.

## V3.16

File:
`migrations/20260825_20_project_templates_structured_logs_completion.sql`

Adds:
- `project_templates`
- `project_template_milestones`
- `projects.template_id`
- structured log fields: `what_did`, `why`, `problems`, `next_steps`
- screenshot captions on `project_media`
- screenshot-only project storage MIME policy
- `start_project_from_template(...)`
- class-safe group joining
- one-project-copy-per-template safeguards
- Project Lead / teacher milestone structure permissions
- normal teammate milestone completion permission
- active-project-only log/media/comment mutation
- Complete → read-only and Project Lead Reopen behaviour

This migration is already applied to the current live Supabase project. Do not rerun it there.

## V3.15 project migrations

- `20260825_14_projects_group_logbooks_request_replies.sql`
- `20260825_15_fix_project_member_updated_at.sql`
- `20260825_16_grant_project_rls_helpers.sql`
- `20260825_17_allow_project_owner_returning.sql`
- `20260825_18_wrap_project_rpcs_with_invokers.sql`
- `20260825_19_optimize_project_profile_rls_and_indexes.sql`

These create the shared project/member/log/media/comment model, preserve individual authorship, provide request replies, harden project RPCs and consolidate teammate profile visibility.

## Earlier migrations

- `20260825_01_add_evidence_classes_notifications.sql`
- `20260825_02_lock_submitted_evidence.sql`
- `20260825_03_consolidate_v33_rls.sql`
- `20260825_04_independent_email_auth_class_codes.sql`
- `20260825_05_harden_class_code_rpc.sql`
- `20260825_06_allow_anon_class_code_wrapper.sql`
- `20260825_07_teacher_bootstrap.sql`
- `20260825_08_fix_class_policy_recursion.sql`
- `20260825_09_multi_teacher_invites.sql`
- `20260825_10_harden_multi_teacher_invites.sql`
- `20260825_11_co_teaching_scoped_access_and_evidence_hardening.sql`
- `20260825_12_add_remaining_foreign_key_indexes.sql`
- `20260825_13_tighten_class_and_evidence_integrity.sql`

For a new installation, apply the base schema first and then the incremental migrations in numeric order. For an existing installation, only apply migrations that have not already been recorded in that project's migration history.


## V3.17

No database migration is required. Quick Tutorial completion is stored as `lesson_progress.lesson_id = tutorial:<tutorial-id>` and Chapter Build completion as `chapter:<path-id>`. The existing `(user_id, lesson_id)` progress key and class-scoped teacher access continue to apply.

## V3.20 News & Industry

File:
`migrations/20260826_21_news_industry_social.sql`

Adds the signed-in social layer for the new News & Industry area:
- Read Later / saved stories
- story upvotes
- story comments
- teacher/author comment deletion
- `get_news_comments(...)` for safe display-name/role lookup without opening profile visibility globally

The live news feed itself is read from public RSS feeds in the browser and does not require database ingestion. This migration was applied to the current live Supabase project on 26 Aug 2026, so do **not** rerun it there. For another installation, apply it once before testing saves, votes or comments.

# Database migration history

## V3.35.4 Designer Resource Bridge Cleanup

No database migration is required. v3.35.4 removes one redundant Designer Studio landing-page presentation block and its unused CSS only. The Resource Library route/content, Designer Studio modules, Studio Build IDs and all student progress/completion IDs are unchanged.

## V3.35.3 Designer Landing Cleanup

No database migration is required. v3.35.3 removes two redundant Designer Studio landing-page panels and unused client-side roulette presentation data only. Module challenges, Resource Library content, Designer Studio Build IDs and all student progress/completion IDs are unchanged.

## V3.35.2 Game Diversity + Resource Library

No database migration is required. v3.35.2 changes Designer Studio case-study/reference content and adds a client-side Resource Library route only. Existing lesson, tutorial, Designer Studio Build and progress IDs are unchanged.

## V3.35.1 Designer Deep Dives + Scroll Restore

No database migration is required. v3.35.1 changes Designer Studio content/presentation and client-side navigation scroll restoration only. Existing lesson, tutorial, Designer Studio Build and progress IDs are unchanged.

The live Supabase project is upgraded incrementally. Production data is not rebuilt or wiped when features are added.

## V3.35.0 Designer Studio Rebuild

No database migration is required. v3.35.0 is a content, reference-imagery and learning-flow rebuild. Existing Designer Quick Tutorial IDs and Studio Build completion IDs are preserved. Hidden Black Box briefs derive their visibility from the existing Studio Build completion state and do not add new persistence.


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


## V3.34.3 class join ambiguity fix

File:
`migrations/20260828_22_fix_join_class_ambiguous_conflict.sql`

Fixes the student class-join RPC failing with PostgreSQL `column reference "class_id" is ambiguous`. The function now targets the existing `class_members_pkey` constraint explicitly for duplicate-safe joins.

This migration was applied to the live Supabase project on 28 Aug 2026. For another installation, apply it once after the earlier migrations.

## V3.34.5 teacher project supervision

File:
`migrations/20260828_23_teacher_project_supervision_and_completed_feedback.sql`

Assigned class teachers are supervisory reviewers for every student project in their classes without being inserted as student Project Leads. Teachers may:
- leave teacher feedback on milestone evidence while a project is Active or Complete
- reopen a completed class project when the student needs to respond or continue working
- continue to structure milestones while a project is Active

Student/team editing remains locked while the project is Complete. Normal teammates still cannot add discussion comments until the project is reopened.

This migration was applied to the live Supabase project on 28 Aug 2026.

## V3.34.6 overall project feedback

File:
`migrations/20260828_24_teacher_overall_project_feedback.sql`

Adds a separate teacher-only permission for project-level feedback (`project_comments.update_id IS NULL`) on Active or Complete projects in classes the teacher supervises. Milestone feedback remains attached to a specific evidence entry.

The UI uses project-level comments for the larger **Overall Project Feedback** review and keeps milestone comments optional/targeted. This migration was applied to the live Supabase project on 28 Aug 2026.

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

## V3.34.7 project evidence documents and external links

File:
`migrations/20260828_25_project_evidence_documents_and_links.sql`

Adds two non-null text fields to `project_updates`:
- `external_url`
- `external_label`

These provide one optional larger-work/share link per milestone evidence entry without adding another project relation or changing existing evidence records.

The migration also widens the private `project-media` storage bucket to accept:
- PNG, JPG/JPEG, WebP
- PDF
- DOC / DOCX
- PPT / PPTX
- XLS / XLSX

The existing 10 MB file-size limit remains unchanged. Larger builds, videos and source projects should be stored in OneDrive/Google Drive/SharePoint or equivalent and submitted through the share-link field instead.

This migration was applied to the live Supabase project on 28 Aug 2026.

## V3.34.8 teacher-published projects only

File:
`migrations/20260828_26_lock_student_project_creation.sql`

Removes the broad student `INSERT` policy on `projects`, so students cannot create arbitrary personal, assignment, practice or game-jam projects outside the teacher workflow.

New student working projects are created only through the existing `start_project_from_template(...)` RPC. The RPC now uses `SECURITY DEFINER` and explicitly verifies:
- the caller is a signed-in student
- the template is published
- the student belongs to the template's class
- the requested Individual / Group mode is allowed by the template
- the student has not already started that template

Joining an existing authorised group project by project code remains available. Existing student-created projects are not deleted or altered.

## V3.34.9 class XP leaderboards

File:
`migrations/20260828_27_class_xp_leaderboards.sql`

Adds a class-scoped, server-side XP leaderboard system:
- `classes.leaderboard_enabled` teacher control
- private `learning_xp_events` ledger with unique activity keys to prevent XP farming
- automatic awards from learning completions, milestone evidence, milestone completion and project completion
- one 5 XP daily activity bonus
- automatic historical backfill from existing real progress
- `get_my_xp_summary()` for the signed-in student's player card
- `get_class_leaderboard(...)` for weekly/all-time class rankings and streaks
- `set_class_leaderboard_enabled(...)` for teachers

Leaderboard access is restricted to students in that class and teachers with access to that class. Assessment grades are not part of the scoring model.

This migration was applied to the live Supabase project on 28 Aug 2026.


## V3.34.10 UE5 tutorial visual alignment

No database migration is required. This release changes tutorial/design data and image-source mappings only. Supabase schema, policies, functions, leaderboard logic and project systems are unchanged.

## V3.34.11 UE5 visual source completion

No database migration is required. This release changes tutorial/design visual mappings and audit/capture documentation only. Supabase schema, RLS policies, RPCs, leaderboard logic, classes, projects, evidence and production permissions are unchanged.

## V3.34.12 deep official source mining

No database migration is required. This release changes UE tutorial visual mappings, cache/version metadata and capture/source-audit documentation only. Supabase schema, RLS policies, RPCs, XP/leaderboard logic, classes, projects, evidence and production permissions are unchanged.

## V3.34.13 exact trace source alignment

No database migration is required. This release changes UE tutorial visual mappings, recipe step alignment, cache/version metadata and capture/source-audit documentation only. Supabase schema, RLS policies, RPCs, XP/leaderboard logic, classes, projects, evidence and production permissions are unchanged.

## V3.34.14 UE5.6–5.8 official source expansion

No database migration is required. This release changes UE tutorial/building-block visual mappings, accepted visual-source policy, cache/version metadata and capture/source-audit documentation only. Supabase schema, RLS policies, RPCs, XP/leaderboard logic, classes, projects, evidence and production permissions are unchanged.

## V3.34.15 Quick Tutorials search hotfix

No database migration is required. This release restores client-side Quick Tutorials search/filter metadata and updates cache/version metadata only. Supabase schema, RLS policies, RPCs, XP/leaderboard logic, classes, projects, evidence and production permissions are unchanged.

## v3.34.16 — Official Blueprint Snippet Bank

No database migration is required. The Snippet Bank is static curriculum/source metadata (`data/snippet-data.js`) and client-side rendering only.

## v3.34.17 — Blueprint Snippet Bank Deep Expansion

No database migration required. This release changes static Snippet Bank data, rendering/search metadata and documentation only.
## v3.34.18 — Snippet Well Exhaustion Pass

No database migration required. This release changes static Snippet Bank data, client-side wording/version metadata and source-audit documentation only.

## v3.34.19 — Site-wide Search Repair

No database migration required. This release changes client-side search/index rendering and cache/version metadata only. Supabase schema, RLS policies, RPCs, XP/leaderboard logic, classes, projects and evidence are unchanged.

## v3.34.20 — Unreal Learning Consolidation

No database migration required. This release changes static tutorial/snippet curriculum metadata and client-side navigation/rendering only. Existing tutorial IDs and completion records are preserved. Supabase schema, RLS policies, RPCs, XP/leaderboard logic, classes, projects and evidence are unchanged.


## v3.34.21 — Embedded Page Search Repair

No database migration is required. This release changes client-side embedded search event handling and UI feedback only. Supabase schema, RLS, RPCs, classes, projects, evidence, XP and permissions are unchanged.


## v3.34.22 — Official Tutorial Imagery Exhaustion Pass

No database migration is required. This release changes static UE learning/design/building-block visual mappings, local image assets, cache/version metadata and imagery-audit documentation only. Supabase schema, RLS, RPCs, classes, projects, evidence, XP and permissions are unchanged.

## v3.36.0 — Critique Board + Learning XP

Files:
- `migrations/20260829_28_critique_board_and_learning_xp.sql`
- `migrations/20260829_29_critique_rpc_anon_hardening.sql`
- `migrations/20260829_30_critique_feedback_quality_floor.sql`

Adds the formative class Critique Board without changing project/assignment submission workflows:
- `critique_posts` and `critique_feedback` with class-scoped RLS
- private `critique-media` bucket, 8 MB, PNG/JPEG/WebP only
- screenshot paths constrained to `class_id/user_id/post_id/...`
- class-authorised signed-image access and author/teacher cleanup policies
- `get_critique_feed(...)`, actionable attention count and the signed-in student's daily critique-reward count
- structured peer-critique XP: 15 points, one reward per post/student, maximum 3 rewards per Europe/London day, concurrent-cap protection
- feedback notifications to the post author
- `designsource:*` lesson-progress completions worth 20 XP while preserving all previous XP mappings
- explicit anon EXECUTE removal on the three new SECURITY DEFINER RPCs after Supabase's default function grants were detected by the security advisor
- server-side 12-character minimum on each structured critique field, matching the client-side meaningful-feedback floor

All three migrations were applied to the live UE5 Learning Hub Supabase project on 29 Aug 2026. The new authenticated RPC warnings reported by Supabase are expected because those RPCs are deliberately callable by signed-in users and perform their own class/auth checks; the follow-up hardening removed the corresponding anonymous-access warnings.



## v3.37.0 — 3D Modelling Studio Rebuild

No database migration is required. This release changes static modelling curriculum/reference data, 3D Modelling Studio rendering, styling, cache/version metadata and release/QA documentation only. Existing modelling lesson/build/fix IDs are preserved, so existing `lesson_progress` completion rows and XP mappings remain valid. Critique Board integration uses the already-deployed v3.36.0 Critique Board; Supabase schema, RLS policies, RPCs, classes, projects, evidence and permissions are unchanged.

## v3.37.1 — Topology Step Mockups

No database migration required. This release changes only the 3D Modelling Studio presentation/data and adds local instructional SVGs. Existing progress/completion IDs are unchanged.

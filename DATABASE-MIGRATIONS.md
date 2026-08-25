# Database migration history

The live Supabase project is updated incrementally. Existing student data is not rebuilt or wiped when new features are added.

Current applied migration history:

1. `initial_course_platform_schema`
2. `restrict_helper_function_execution`
3. `create_private_teacher_helper`
4. `use_private_teacher_helper`
5. `remove_public_teacher_helper`
6. `optimize_rls_and_foreign_keys`
7. `add_evidence_classes_notifications`
8. `lock_submitted_evidence_for_review`
9. `consolidate_v33_rls_policies`

## V3.3 feature migrations included here

- `20260825_01_add_evidence_classes_notifications.sql`
- `20260825_02_lock_submitted_evidence.sql`
- `20260825_03_consolidate_v33_rls.sql`

For future releases, add another numbered migration rather than editing or deleting old production data.

The full `SUPABASE-SCHEMA.sql` remains useful for a brand-new installation. The `migrations/` folder shows the incremental upgrade route for an existing installation.

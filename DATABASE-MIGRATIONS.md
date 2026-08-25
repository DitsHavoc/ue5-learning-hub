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


## V3.6 — independent_email_auth_class_codes

File:
`migrations/20260825_04_independent_email_auth_class_codes.sql`

Adds:
- `classes.join_code`
- `classes.join_enabled`
- unique class-code index
- `validate_class_join_code(text)` for pre-registration code checks
- `join_class_by_code(text)` for authenticated self-join

This is additive. Do not wipe or rebuild the production database.


## V3.6 security hardening — harden_class_code_rpc

File:
`migrations/20260825_05_harden_class_code_rpc.sql`

Moves privileged class-code logic into the non-exposed `private` schema and leaves `SECURITY INVOKER` wrappers in `public`. This keeps the site RPC-compatible without leaving exposed SECURITY DEFINER functions.


## V3.6 — allow_anon_class_code_wrapper

File:
`migrations/20260825_06_allow_anon_class_code_wrapper.sql`

Grants the anonymous role schema usage needed by the safe public validation wrapper. The private schema itself is not exposed through the site API.


## V3.6 — teacher_bootstrap

File: `migrations/20260825_07_teacher_bootstrap.sql`

Adds a one-time, server-side hashed bootstrap token so the first teacher can self-create an account without Microsoft SSO or a pre-existing class code.

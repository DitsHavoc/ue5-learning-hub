# UE5 Learning Hub v3.34.3 — Student Class Join Database Fix

## Fixed
- Fixed the live `join_class_by_code(...)` RPC failing with `column reference "class_id" is ambiguous`.
- Replaced the ambiguous `ON CONFLICT(class_id,user_id)` target with `ON CONFLICT ON CONSTRAINT class_members_pkey`.
- Updated the packaged canonical Supabase schema so fresh installs contain the corrected function.
- Added migration `20260828_22_fix_join_class_ambiguous_conflict.sql`.

## Production repair
- The migration was applied directly to the live UE5 Learning Hub Supabase project.
- An authenticated idempotent class-join test returned the expected Level 4 Games class successfully.
- One student account stranded by the bug was recovered into its saved class.

## Scope
- No table changes.
- No RLS changes.
- No frontend workflow changes.
- v3.34.2 Classes Quick Access and v3.34.1 confirmation/class-code recovery remain intact.

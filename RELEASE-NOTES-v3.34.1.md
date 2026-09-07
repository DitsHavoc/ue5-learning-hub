# UE5 Learning Hub v3.34.1 — Student Class Join Recovery Fix

## Fixed
- Student email-confirmation signups now recover the original class code from Supabase Auth user metadata when the temporary browser `localStorage` value is unavailable.
- Confirmed student accounts that previously existed without a `class_members` row can therefore enrol automatically on their next authenticated Hub session.
- The existing `join_class_by_code` RPC remains the single source of truth for validation and membership creation; it is already idempotent, so recovery is safe to retry.

## Production repair performed
- Ran a one-time general backfill for student accounts whose saved signup metadata contained a currently valid, enabled class code.
- This repaired the reported confirmed student account that had been created successfully but was missing from its class roster.

## Scope
- No database schema change.
- No RLS change.
- No teacher-dashboard layout change.
- No changes to v3.34 imagery/content work.
- v3.33.1 News Refresh fix remains intact.

# v3.39.5 — Student Roster Controls

Teacher class pages now include clear student management controls.

- Move a student directly from one active teaching class to another.
- Remove a student from a class with a clear confirmation.
- Moving/removing a student preserves their Learning Hub account, XP and completed learning.
- No database schema migration is required; the feature uses the existing secured `class_members` permissions.
- The v3.39.4 Network Quiet changes remain intact.
- Includes the homepage card centring and corrected Noclip YouTube link hotfix.

This deliberately does **not** delete Supabase Auth accounts. Full account deletion is an administrator-level action and should not be exposed through the normal browser teacher UI.

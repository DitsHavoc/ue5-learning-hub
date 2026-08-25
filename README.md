# UE5 Learning Hub v3.7.0 — Multi-Teacher

## V3.7 — Teacher Team

Existing teachers can now invite additional staff without sharing the original bootstrap code.

### Teacher flow
1. Open Teacher Dashboard.
2. In **Teacher team**, enter an optional colleague/role label.
3. Choose an expiry (1–30 days).
4. Generate a unique teacher invite.
5. Copy the full code immediately.
6. The invite can be revoked until it is used.

The database stores only a hash of the full invite code. After generation the dashboard retains only the last six-character hint/status; the full code is not recoverable from the database.

### Invited colleague flow
**Create account → I have a teacher invite**

They enter:
- name
- email
- unique teacher invite
- password

If email confirmation is enabled, the invite is stored locally and automatically claimed after the colleague confirms the email and signs in.

A signed-in normal account can also enter a Teacher invite from its account panel to promote that account.

### Security
Teacher invites are:
- generated with random bytes
- stored hashed
- unique
- one-use
- expiring
- revocable
- created only by authenticated Teacher accounts

The original first-teacher bootstrap remains only for a brand-new installation. It is not the mechanism for additional teachers.

## Database
Migrations:
- `migrations/20260825_09_multi_teacher_invites.sql`
- `migrations/20260825_10_harden_multi_teacher_invites.sql`

Both migrations have already been applied to the current live Supabase project.

The public teacher-invite RPCs are SECURITY INVOKER wrappers; privileged implementations live in the private schema.

Microsoft SSO remains optional and disabled.


Supabase security advisor after V3.7: no new teacher-invite/RLS security lints. The only remaining warning is the optional Auth leaked-password-protection setting.

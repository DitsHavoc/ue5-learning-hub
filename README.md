# UE5 Learning Hub v3.6.2 — Teacher Login Hotfix

## V3.6 — Independent Login

V3.6 removes Microsoft approval as a dependency for student cloud accounts.

### Students
A one-time first-teacher bootstrap route is also included so the platform can be set up without Microsoft or manual database account creation.

Students can now:
- continue as a full **Guest** with browser-local progress
- create a **Learning Hub email/password account**
- enter a teacher-issued **class code** during registration
- sign in on another device and sync learning/project progress
- submit evidence and receive feedback
- use Requests, notifications and class-backed features
- reset a forgotten password by email
- join another class later using a class code

### Teachers
Each class now has:
- a unique join code
- copy-code control
- pause/enable joins
- regenerate-code control
- existing manual Add Student controls remain available

### Microsoft
Microsoft Entra SSO remains in the codebase but is **optional and disabled**.
If college approval arrives later, it can be enabled alongside Learning Hub accounts.

### Database
V3.6 includes four small additive migrations:

- `20260825_04_independent_email_auth_class_codes.sql`
- `20260825_05_harden_class_code_rpc.sql`
- `20260825_06_allow_anon_class_code_wrapper.sql`
- `20260825_07_teacher_bootstrap.sql`

They are already applied to the current Supabase project. The split keeps the live migration history accurate and leaves the final RPC design with zero Supabase security-advisor lints.

The older V3.5 frontend remains compatible while a V3.6 deployment is being rolled out.

### Important production email note
Email confirmation and password recovery depend on Supabase Auth email delivery.
For a real cohort, configure a suitable SMTP provider in Supabase rather than relying on the small built-in testing allowance.

## Visible version
`UE5 HUB v3.6.2 • GUEST + CLOUD` when not signed in.

## V3.6.2 hotfix

Fixes first-teacher account creation:
- teacher setup codes are no longer truncated to the shorter student class-code length
- teacher form errors are displayed inside the modal
- the form explicitly validates name, email, setup code and both password fields
- the submit button visibly shows `Checking setup code…`
- pending teacher bootstrap completion is no longer called twice
- an existing confirmed session can complete a pending teacher bootstrap on page load

No database migration is required for this hotfix.

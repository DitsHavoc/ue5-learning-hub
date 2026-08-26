# V3.6 note

Microsoft SSO is now OPTIONAL. Native Learning Hub accounts are the primary independent login route. See `ACCOUNT-SETUP.md`.

# Microsoft SSO approval stage

The Supabase backend has already been created and the database/security schema has been deployed.

**Do not enable Microsoft / Entra yet.** V3.6 ships with `microsoftEnabled: false` deliberately.

Once college approval is received, complete the Entra/provider steps below and then change `microsoftEnabled` to `true` in `data/supabase-config.js`.

# Microsoft SSO + Supabase setup — UE5 Learning Hub v3.18.0

The site works in **LOCAL** mode before this is connected. Once configured, the main account button becomes the college Microsoft sign-in and enables cloud progress, private lesson feedback, the teacher dashboard and the Requests Board.

## A. Supabase project

Create one Supabase project in an appropriate UK/EU region.

Run:

`SUPABASE-SCHEMA.sql`

Then put the Supabase **Project URL** and **publishable key** into:

`data/supabase-config.js`

Never put a `service_role` key in this public Render/GitHub site.

## B. Microsoft Entra app registration

Ask college IT / an Entra administrator to create an app registration called something like:

`UE5 Learning Hub`

Recommended account type:

**Accounts in this organisational directory only (single tenant).**

Record:

- Application (client) ID
- Directory (tenant) ID

Create a client secret for the Supabase Azure provider configuration.

### Redirect URI

In Microsoft Entra, add a **Web** redirect URI using the Supabase Auth callback:

`https://<YOUR-SUPABASE-PROJECT-REF>.supabase.co/auth/v1/callback`

This is the callback Microsoft sends back to Supabase after authentication.

## C. Configure Azure/Microsoft in Supabase

Supabase Dashboard → Authentication → Providers → Azure (Microsoft)

Enable the provider and add:

- Azure Client ID
- Azure Client Secret
- Azure Tenant URL:

`https://login.microsoftonline.com/<COLLEGE-TENANT-ID>`

Using the tenant-specific URL keeps the authentication flow limited to that Entra tenant.

The website uses:

- provider: `azure`
- scope: `email`

It does **not** request Outlook mailbox, OneDrive or Teams-file access.

## D. Supabase URL configuration

Authentication → URL Configuration

Site URL:

`https://ue5-learning-hub.onrender.com`

Allow the same URL as a redirect target.

## E. Teacher role

Sign into the Learning Hub once using the teacher Microsoft account.

Then promote that profile in Supabase:

```sql
update public.profiles
set role='teacher'
where id='<TEACHER USER UUID>';
```

Teacher-role users can see the teacher dashboard, reply to private lesson comments, and manage Requests Board statuses.

## Requests Board

Authenticated college users can:

- submit Feature requests
- request Tutorials
- request Lessons / topics
- suggest Game mechanics
- report Bugs
- submit Other ideas
- vote once per request

Teachers can move requests through:

`New → Planned → Building → Shipped`

or mark them `Not planned`.

The board is not readable by anonymous public visitors.

## Data/privacy notes

The Learning Hub stores learning progress and user-generated course feedback in Supabase. Before production rollout, follow your college's normal data-protection / retention process.

The SSO design uses Microsoft for authentication only; it does not give the Learning Hub access to a user's Microsoft mailbox or files.

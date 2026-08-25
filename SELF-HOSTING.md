# Hosting options — UE5 Learning Hub v3.7.0

The Learning Hub frontend is plain static HTML/CSS/JavaScript. It is not tied to Render.

## Option 1 — Render frontend + Supabase cloud

Current easiest setup.

Render serves the static website.
Supabase provides authentication/database when enabled.

## Option 2 — College-hosted frontend + Supabase cloud

The college can host the same folder on:

- Microsoft IIS
- Apache
- nginx
- another internal/static web server

No build command is required. Serve the repository root as static files.

The Supabase backend can remain in eu-west-2.

When Microsoft SSO is approved, update Supabase Auth URL settings to include the final college-hosted Learning Hub URL.

## Option 3 — Fully self-hosted stack

Possible, but significantly more operational work.

The frontend is already portable.
Supabase itself can be self-hosted separately, but that means the organisation becomes responsible for database hosting, Auth services, backups, updates, secrets and monitoring.

For a college rollout, hosting the frontend internally while retaining managed Supabase is the much simpler middle ground unless IT specifically requires all student progress data on college infrastructure.

## Current V3.6 state

- Supabase project: created
- region: eu-west-2
- schema: deployed
- Row Level Security: enabled
- security advisor: clean
- Microsoft SSO: deliberately DISABLED pending approval
- public frontend key: publishable key only
- local lesson/project progress: still works without sign-in

Moving the frontend later does not require rebuilding the lesson content.

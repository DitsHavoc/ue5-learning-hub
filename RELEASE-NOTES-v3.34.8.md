# UE5 Learning Hub v3.34.8 — Teacher-Published Projects Only

## Student project creation locked down

Students can no longer create arbitrary projects from the Projects page.

The student Projects page now contains:
- **Available Projects** — projects published by their teacher
- **Your Projects** — projects they have already started or joined
- **Join a Group Project** — join an authorised teacher-published group project using the Project Lead's code

The old **Create or join something else / New project** form has been removed.

## Database enforcement

This is enforced server-side as well as in the UI. The broad student `INSERT` policy on `public.projects` is removed, so an old cached page or a direct API request cannot create an unsanctioned project.

`start_project_from_template(...)` remains the only supported student project-creation route. It validates the published template, class membership, allowed work mode and duplicate-start rule before creating the working project copy and milestones.

Existing projects are preserved unchanged.

## Files changed / added

- `app.js`
- `backend.js`
- `index.html`
- `DATABASE-MIGRATIONS.md`
- `migrations/20260828_26_lock_student_project_creation.sql`
- `RELEASE-NOTES-v3.34.8.md`

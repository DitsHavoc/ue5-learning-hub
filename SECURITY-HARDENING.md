# V3.16 Security Hardening

## Core access model

Teacher access remains **class scoped**. A Teacher role is not a site-wide superuser over unrelated students.

Project visibility is limited to:
- project members
- assigned teachers for the linked class

Teacher templates are visible to:
- assigned teachers while Draft/Published
- students in the linked class only when Published

## Project authorship

A shared group project does not permit shared authorship.
- project-log `author_id`, project identity and original creation time are immutable
- project-comment authorship is immutable
- project-member identity and owner/member role are immutable through normal member editing
- screenshot uploader/storage identity is immutable
- students can edit/delete only their own active-project log entries
- teammates cannot alter another student's development evidence

## Group membership

- group join codes are accepted only while the project is Active
- class-linked group codes only accept students who belong to that class
- a student cannot join/start another copy of the same teacher template
- only Student profiles can join student group projects

## Milestones

While a project is Active:
- Project Lead and assigned class teachers can create/edit/delete milestone structure
- normal members can mark milestones Complete/Incomplete only
- normal members cannot rename or rewrite milestones

## Completed projects

When the Project Lead marks a project Complete, mutation policies block:
- log creation/edit/delete
- project screenshot metadata mutation/upload/delete
- new comments/replies
- milestone mutation
- member role changes/removal

The Project Lead may change Complete back to Active to reopen the project.

## Project media

The private `project-media` bucket accepts only:
- PNG
- JPEG
- WebP

Maximum object size remains 10 MB. Project media is served by short-lived signed URLs and read access follows project membership/class-teacher access.

## Evidence subsystem

The separate lesson-evidence workflow retains its stronger submission states:
- Draft → student editable
- Submitted → locked pending teacher review
- Changes Required → unlocked for revision
- Approved → locked

## Validation

Rollback-only tests using authenticated-role contexts verified Project Lead, normal teammate, assigned teacher and outside-class behaviour. The V3.16 group/template/read-only transaction and class-safe join transaction both passed.

Supabase security advisor after the migration reports only the existing **Leaked Password Protection Disabled** Auth warning. No new project RLS or SECURITY DEFINER warning remains.

Remediation for the remaining Auth warning:
https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection

# V3.13 Security Hardening

## Permission matrix

| Action | Student | Co-teacher | Class owner | Unassigned teacher |
|---|---:|---:|---:|---:|
| Read own work | Yes | — | — | — |
| Read class student work | No | Yes | Yes | No |
| Review class evidence | No | Yes | Yes | No |
| Rename/archive class | No | Yes | Yes | No |
| Manage class students | No | Yes | Yes | No |
| Manage join code | No | Yes | Yes | No |
| Add/remove co-teachers | No | No | Yes | No |
| Leave teaching team | — | Yes | No | — |
| Permanently delete class | No | No | Yes | No |
| Change own account role | No | No | No | No |

## Evidence state rules

`Draft` → student can edit/upload/delete files.

`Submitted` → student content and uploaded objects are locked; assigned teacher can review.

`Changes Required` → student content/files unlock for revision.

`Approved` → student content/files remain locked.

## Remaining rollout item

Enable Supabase Auth leaked-password protection before broad rollout if the project's plan/settings support it.

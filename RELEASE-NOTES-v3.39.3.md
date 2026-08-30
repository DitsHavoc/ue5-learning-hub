# UE5 Learning Hub v3.39.3 — Teams-First Lean Hub + Egress Pass

## Why
The Hub had grown a capable collaborative Project/evidence system, but Microsoft Teams already owns the formal project workflow at college. Keeping both created duplicate hand-in locations and encouraged large student screenshots/files to be stored and repeatedly served from Supabase. v3.39.3 makes the product boundary explicit and reduces bandwidth before wider classroom rollout.

## Student experience
- Projects is removed from live navigation and the Home destination cards.
- Old `#/projects` and `#/my-game` bookmarks show a short Teams-first notice rather than loading project data.
- Core lessons no longer offer a Hub evidence-upload form. **Keep proof for Teams** tells students exactly what screenshot/result/reflection to capture, but stores nothing in the Hub.
- My Progress is now purely learning progress, practice, XP, badges, class and feedback.
- Critique Board remains the informal class feedback space and is not an assignment submission system.

## Teacher experience
- Teacher Dashboard and class detail no longer fetch or display collaborative Projects or formal evidence-review queues.
- Class learning completion, practical progress, lesson comments/questions, student requests, co-teachers and Critique Board remain available.
- Project briefs, deadlines, formal submissions and assessed feedback stay in Microsoft Teams.

## Egress reduction
- Active screenshot uploads use client-side image resizing/compression and WebP output where appropriate.
- A small thumbnail is uploaded beside active screenshot content so feeds/cards do not need the full image.
- Cloud preview images use lazy loading; full images are fetched only when opened.
- Several cloud reads were narrowed and redundant progress/session calls reduced.
- Google Drive remains the host for the 14 Max videos; they are not copied into Supabase.

## Database / preservation
Two v3.39.3 migrations exist because the product decision changed during the bandwidth pass:
1. `20260830_33_project_media_thumbnail_backfill.sql` enabled a safe legacy thumbnail backfill while Project galleries were still active.
2. `20260830_34_retire_projects_and_evidence_writes.sql` then retires Project/formal-evidence writes entirely.

Migration 34 keeps historical SELECT access for recovery/export but removes client INSERT/UPDATE/DELETE policies for Projects, templates, members, milestones, updates, project media/comments, formal evidence submissions/files and their Storage upload paths. Old project mutation RPCs are revoked. Critique Board Storage write policies are unchanged.

**No historical student Project/evidence data or stored files are deleted by this release.**

## Preserved
- Core Unreal curriculum and completion IDs
- Designer Studio IDs/content
- 3D Foundations, 3D Modelling, Build X/Fix Clinic IDs
- Max video completions
- Sculpt
- Revision, Glossary, Challenges, Homework
- Classes and leaderboards
- Critique Board
- Lesson comments/student requests/notifications
- Signal Lost optional practice tracker (`project_progress`), which is learning practice rather than the retired collaborative Projects system

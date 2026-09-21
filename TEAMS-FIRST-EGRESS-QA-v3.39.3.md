# v3.39.3 — Teams-First / Egress QA

## Product boundary
- **Hub:** teaching, tutorials, practical builds, revision, critique, progress, XP and informal feedback.
- **Microsoft Teams:** project briefs, deadlines, formal submissions and assessed feedback.
- Collaborative Hub Projects and formal lesson-evidence hand-in are removed from live navigation and route hydration.
- Legacy `#/projects` / `#/my-game` URLs show a Teams-first notice and do not load project records.
- Signal Lost optional practice tracking is retained.
- Critique Board is retained.

## Student / teacher flow checks
- No Projects link remains in `index.html` navigation.
- Home/dashboard contains no Projects route/card.
- Core lessons render **Keep proof for Teams** rather than a Hub upload form.
- Lesson route hydration loads private lesson comments only; it does not load formal evidence submissions.
- My Progress does not fetch formal evidence submissions.
- `teacherOverview()` does not fetch `evidence_submissions`, `submission_files` or the collaborative `projects` table.
- Teacher/class copy directs formal project work to Microsoft Teams.

## Data preservation / live Supabase
- No historical Project/evidence rows or files were deleted.
- Live `project-media` remains **60 objects / ~126 MB** after retirement, preserved for recovery/export.
- Migration `retire_projects_and_evidence_writes` was applied successfully on 30 Aug 2026.
- Post-migration policy audit shows the only remaining non-SELECT Storage policies in the audited project/evidence area are the three **Critique Board** media policies (class upload, author/teacher update, author/teacher delete).
- Old project mutation RPC execution is revoked for normal public/anon/authenticated clients.

## Egress controls
- Active screenshot workflows use client-side image optimisation/WebP where appropriate.
- Active screenshot content has small thumbnail support.
- Cloud image previews use lazy loading and full-size images only when opened.
- Several cloud reads are narrowed and redundant sync/session work reduced.
- The 14 Max course videos remain hosted on Google Drive, not Supabase.

## Static QA
- **15/15 JavaScript files:** `node --check` pass.
- **136 static local asset/data references:** 0 missing.
- **26 literal internal route segments:** 0 unhandled by the router.
- Curriculum data JS is byte-identical to v3.39.2: no teaching/completion IDs changed during this infrastructure/product-boundary pass.
- Preserved content counts: 20 Core lessons, 47 Building Blocks, 47 Quick Tutorials, 6 Chapter Builds, 8 Designer modules, 12 Modelling lessons, 8 Build X, 6 Fix Clinics, 6 Foundations chapters, 12 Model Doctor questions, 14 Max videos and 6 Sculpt practices.
- No `.bak`, `.orig` or project-retirement scratch files are included in the release tree.

## Browser check
A Chromium headless launch was attempted against a local HTTP server. It timed out before producing DOM output because the container Chromium process cannot connect to its DBus environment. Therefore **no browser visual test is claimed**.

## Packaging
- FULL archive: 357 files; reproduction check **0 missing / 0 extra / 0 different**.
- MINIMAL archive over v3.39.2: 15 changed/added files; overlay reproduction check **0 missing / 0 extra / 0 different**.

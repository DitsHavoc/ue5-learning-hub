# Current release — v3.34.22

The remaining Unreal imagery queue has been re-audited against the actual current Epic Designer/Artist/tutorial pages rather than requiring bespoke screenshots for every Hub-specific value. Current first-party UE5.8 workflow imagery is now reused more aggressively across Core Lessons, Programming recipes, Building Blocks and Designer Studio, while exact classroom values remain in the written steps. The previous **76 teacher-capture** figure is retired: **0 new teacher screenshots are required before launch**. The supplied Maps & Modes screenshot is retained as an authentic classroom location reference. No database migration is required.

# UE5 Learning Hub v3.32.2 — Class Detail Workspace

## Current release — v3.32.2

Teachers can now open a specific class from the Teacher Dashboard and inspect that class's students and learning-content progress. The view shows exact completed Building Blocks, Core Lessons, Quick Tutorials, 3D/Sculpt content and class-wide completion counts without adding a new assignment/LMS layer. No database migration is required.

See `RELEASE-NOTES-v3.32.2.md` for this release. The Unreal learning-path architecture remains documented in `UNREAL-LEARNING-PATH-v3.32.1.md`.

## V3.20 — the Hub becomes a portal

The root page is now a proper landing page built around four clear destinations: **Programming, Design, Projects, and News & Industry**. Programming has its own hub page rather than making the root page carry the entire course, while the existing Designer Studio and Projects areas remain intact.

The new **News & Industry** area pulls current headlines from a curated set of public RSS feeds and groups them into Development, Industry, Games, Trailers & Reveals, and Podcasts. A 20-minute browser cache keeps the page quick and avoids hammering source feeds. Full articles remain on the original publisher sites.

Signed-in students can **Save for Later**, **upvote**, and **comment** on stories. Saved story metadata is retained so Read Later still works after an item has disappeared from the live feed. Teachers and comment authors can remove comments.

### V3.20 database migration

The V3.20 News & Industry migration (`migrations/20260826_21_news_industry_social.sql`) was applied to the current live Supabase project on 26 Aug 2026. Do **not** rerun it there. For another installation, apply it once before testing News saves, votes or comments. The live RSS feed itself works without the migration.

### V3.20 live sources

- Unreal Engine
- Game Developer
- GamesIndustry.biz
- PC Gamer
- Eurogamer
- Rock Paper Shotgun
- Game Developer Podcast

The frontend uses the public rss2json conversion endpoint because the Hub is deployed as a static site and many publisher RSS feeds do not expose browser CORS headers directly. If that service is temporarily unavailable, the rest of the Hub continues to work and News shows a retry state.

## Previous Designer Studio release retained

## v3.19.2 — design knowledge / production-quality pass

V3.19 keeps the eight Designer Studio disciplines introduced in V3.18 but makes them substantially deeper. The focus is no longer just “here are some design recipes”: each discipline now teaches transferable design thinking, professional workflow habits, module-specific critique questions and a current UE5.8 engine check before students move into practical tutorials.

This pass is informed by the college-licensed **Unreal Engine 5 Best Practices** (Tyson Butler-Boschma, Packt, 2025). The Hub paraphrases concepts and rebuilds them into original classroom teaching material, while **selected figure/page crops are embedded inline for licensed educational use** where they materially improve the explanation. Because the book is based on UE5.4, engine-specific guidance is cross-checked against current Epic UE5.8 documentation.

### What changed in V3.19.2

- **8 Designer disciplines**, each now includes **3 Design Thinking deep dives** with a short applied exercise: 24 new theory/application cards in total.
- Every discipline now includes **Production Habits**, a **UE5.8 Reality Check**, a licensed-reference note and **five discipline-specific critique questions**.
- **16 new Designer Quick Tutorials**, taking Designer Studio from 32 to **48 practical recipes** and the full shared Quick Tutorial library from 78 to **94**.
- New topics include decision-point design, spatial pacing, five-prop story vignettes, hero assets, Shader Complexity/material cost, translucency/overdraw, a Lumen mood pass, time-of-day contrast, PCG-safe routes, weather readability, cinematic lens language, adaptive cutscenes, off-screen audio storytelling, procedural wind with MetaSound, evidence-based profiling and project hygiene.
- Existing **8 Studio Builds** are upgraded with an extra professional review/test step and additional evidence requirement tied to the discipline.
- **18 selected book visuals** are now embedded locally and placed in dedicated “Licensed Book Visuals” sections so they reinforce the teaching without being mixed indiscriminately with game reference art or current Epic screenshots.
- Key Quick Tutorials also receive book figures where a visual directly clarifies the technique, including fog, Lumen, set dressing, UVs/materials, Sequencer/audio and profiling.
- Book figures are compressed to WebP for fast classroom loading and retain the existing click-to-enlarge viewer.
- No database migration is required; all completion tracking continues to reuse the existing progress system.

### Design philosophy strengthened in this pass

The Designer Studio now repeatedly reinforces a few professional ideas: functional layout before decoration; guidance without excessive hand-holding; environmental story through meaningful placement; modularity balanced by distinctive hero assets; artistic lighting with an explicit performance budget; procedural tools under authored design control; cinematics built as reusable sequences; audio as spatial/story information; and optimisation as **profile → diagnose → change → re-profile**, not a last-minute quality massacre.

## Validation completed for V3.19.2

- JavaScript syntax checks pass for app/backend/course/tutorial/design/project/config data.
- 20 core lessons retained.
- 94 merged Quick Tutorials validated with unique IDs and complete DO THIS / WHY / TEST steps.
- Designer Studio validates at 8 disciplines, 48 recipe references, 24 Design Thinking cards and 8 Studio Builds.
- Every Designer discipline has 6 recipes, 3 deep-dive cards, production habits, 5 critique questions and a current-engine reference.
- 64 local asset references checked with zero missing files.
- production and local-test HTML cache/version references are all v3.19.2.
- CSS brace balance and ZIP source integrity checks pass.
- no database migration is required.

## V3.18 Designer Studio foundation retained

The original V3.18 wing remains intact: Level Design Foundations; Environment Art & Set Dressing; Materials & Surfaces; Lighting & Atmosphere; Landscape, Terrain & Foliage; Sequencer & Cutscenes; Audio & Sound Design; Polish, Optimisation & Presentation. Game/engine references, Studio Builds, global search integration, free-resource links and the Silent Hill-style Fog tutorial are all retained.


V3.17 is the major practical-learning pass. The 20 core lessons remain the teaching spine, but students now have a searchable **Quick Tutorials** recipe library for common UE5 mechanics and six unlockable **Chapter Builds** that combine chapter skills into small playable outcomes. Projects remains the lighter assignment/group-work layer beneath learning.

## V3.17 learning expansion

- **47 Quick Tutorials** across Movement, Interaction, Combat, Player Systems, UI, World Systems, AI, Data/Save and Polish.
- **240 DO THIS / WHY / TEST checkpoints** across the tutorial library.
- **6 Chapter Builds**, one after each learning path; the build unlocks when every lesson in that path is complete.
- Tutorial and Chapter Build completion works locally and cloud-syncs through the existing `lesson_progress` table using `tutorial:<id>` and `chapter:<path>` IDs. No database migration is required.
- Global search now finds tutorials as well as lessons/glossary terms.
- The dashboard keeps learning first and surfaces an unlocked Chapter Build before project administration.
- **Make Silent Hill-style Fog** includes official Silent Hill 2 reference screenshots from Konami plus current Unreal fog reference imagery from Epic, all clickable to enlarge and linked to their source pages.

### Quick Tutorial teaching pattern

Each recipe uses the same small classroom-friendly structure:

**What we are making → visual reference where useful → DO THIS → WHY → TEST/CHECK → common mistakes → Make it yours → definition of done.**

These tutorials are intended as short recipes students can keep open beside Unreal while prototyping or completing assignment work. They do not replace the deeper concept lessons.

### Chapter Builds

1. **Unreal Foundations — The Locked Room**
2. **Blueprint Core — Power Failure**
3. **Framework & Communication — Emergency Override**
4. **Gameplay Systems — Escape the Facility**
5. **Data, AI & Animation — Avoid the Security Drone**
6. **Professional Practice — Blueprint Rescue: Fix This Game**


## Validation completed for V3.17

- JavaScript syntax checks pass for app/backend/course/project/tutorial/config data.
- 47 unique tutorial IDs and 6 Chapter Builds validated.
- 240 tutorial steps use complete DO THIS / WHY / TEST-CHECK fields.
- all tutorial category, lesson-reference and Chapter Build related-tutorial links resolve.
- 64 local asset references checked with zero missing files.
- both production and local-test HTML load the V3.17 tutorial data and cache versions.
- no Supabase migration is required for this learning-content release.

## V3.16 project model (retained)

V3.16 keeps the Hub deliberately focused: **UE5 learning is the main product**. Projects sits underneath it as a lightweight development logbook and feedback workspace for assignments, game jams, personal work and group projects. It is not intended to replace the college LMS or formal assessment submission system.

### Teacher project templates
Teachers create a simple project template for a class containing:
- title and brief
- individual / group / student-choice working mode
- optional unit/assessment label
- simple milestones with a title and short description
- Draft or Published visibility

Published templates appear to class members under **Available Projects**. Students deliberately choose **Start Individual** or **Start Group** when the template allows it. A group starter becomes Project Lead and receives a join code for teammates.

Templates do not grade students, set formal deadlines or collect final assessment submissions.

### Student projects
Students can also create their own solo or group projects. A project contains:
- team roster and optional role labels
- milestones
- chronological development log
- multiple screenshots per entry, each with its own caption
- contextual teacher/team comments beneath the exact log entry
- **My Contributions**, showing only the signed-in student's authored entries and screenshots

Development-log prompts are optional but encouraged:
1. What I did
2. Why I did it
3. Problems / changes
4. Next steps

Students may edit their own old entries and delete them after a confirmation warning. Original creation time remains visible and edited entries are marked as edited.

### Group accountability
Shared project does **not** mean shared authorship.
- every log entry has an immutable author and creation time
- teammates cannot edit another student's log entries
- screenshots retain their uploader
- normal teammates can mark milestones complete/incomplete but cannot rewrite milestone structure
- Project Lead and assigned teachers can create/edit milestone structure
- teammates and assigned teachers can reply to individual development-log entries
- project discussion is private to the project team and assigned class teachers

For class-linked projects, join codes only accept students who belong to that class. A student cannot join a second project copy from the same teacher template.

### Complete / reopen
The Project Lead can mark a project **Complete**. Completed projects lock student/team editing at the database-policy layer. Assigned class teachers remain supervisory reviewers: they can still leave feedback on completed milestone evidence, and either the Project Lead or an assigned class teacher can **Reopen** the project when more student work is needed.

## Revision quizzes
Revision is now a proper scored quiz builder:
- choose **10 / 20 / 30** questions
- Random Mixed quiz from the whole course
- Focused quiz from one lesson, an entire learning path or any combination of lessons
- single-answer and multi-select questions supported
- score at the end
- answer review with correct answer, feedback and link back to the lesson
- recent scores stored on the current browser

If a focused topic contains fewer questions than the chosen quiz length, the Hub uses all available questions and tells the student.

## Learning content and visuals retained
V3.16 retains the existing gold-standard lesson flow, practical exercises, current UE screenshots, curated Epic UE5.8 documentation visuals, click-to-enlarge lightbox, selected official Epic motion-media embeds, glossary, homework, challenges, evidence workflow and optional Signal Lost practice spine.

The hidden Konami Code Easter egg remains: **Up Up Down Down Left Right Left Right B A**.

## Readability
The final readability floor now prioritises classroom reading over compact dashboard styling:
- instructional paragraphs at 16 px with increased line height
- larger form labels and controls
- larger navigation text and metadata
- fewer tiny all-caps labels
- mobile controls remain at least 16 px where appropriate

## Feature Requests
Teachers can reply directly to feature requests. Replies appear beneath the request and notify the student who submitted it.

## Database changes
The current live Supabase project already has the V3.16 migration applied. Do **not** rerun production migrations there.

For another installation, the relevant incremental project migrations are:
- `20260825_14_projects_group_logbooks_request_replies.sql`
- `20260825_15_fix_project_member_updated_at.sql`
- `20260825_16_grant_project_rls_helpers.sql`
- `20260825_17_allow_project_owner_returning.sql`
- `20260825_18_wrap_project_rpcs_with_invokers.sql`
- `20260825_19_optimize_project_profile_rls_and_indexes.sql`
- `20260825_20_project_templates_structured_logs_completion.sql`

See `DATABASE-MIGRATIONS.md` and `SECURITY-HARDENING.md` for details.

## Validation completed for V3.16
A rollback-only authenticated-role database test verified:
- teacher can create/publish a class template
- student can start a published group template
- template milestones copy into the student's project
- a teammate can join by code
- teammate can mark milestone complete/incomplete
- teammate cannot rewrite milestone structure
- teammate cannot edit another student's authored log
- teammate can add their own log and reply to another entry
- Project Lead can complete and reopen the project
- Complete blocks project mutation; Reopen restores it
- assigned teacher can edit milestone structure and comment
- a student outside the linked class cannot use the group join code

Supabase's security advisor reports no new V3.16 RLS/function warning. The remaining project-level warning is **Leaked Password Protection Disabled** in Auth settings.

Microsoft SSO remains optional and disabled.

## v3.24.0 — Gold Instruction Pass

This release completes the prescriptive teaching pass: all 20 core guided lessons, all 47 Programming Quick Tutorials, all 47 Designer Studio recipes and all eight Studio Builds now support richer instruction. See `RELEASE-NOTES-v3.24.0.md` and `CHANGELOG.md`.

### v3.34.17: Blueprint Snippet Bank Deep Expansion

The official Epic clipboard bank now exposes 31 targeted paste assists from 10 unique UE5.8 source pages. Large Epic tutorials are indexed by the actual mechanic being pasted rather than represented by one oversized source card, and Level Editor / viewport pastes are labelled separately from Blueprint graph pastes.

### v3.34.16: Blueprint Snippet Bank

Unreal Learning now includes a curated **Blueprint Snippet Bank**. It points students at pasteable Blueprint clipboard blocks on official Epic documentation, tells them which graph/viewport to paste into, and records the small reconnections Epic still expects. The Hub intentionally does not mirror the raw clipboard payloads.

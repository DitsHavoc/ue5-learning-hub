# Current release — v3.42.2

**Designer Practical Clarity.** Audits/refines all 47 native Designer Studio Quick Tutorials (268 practical steps) as controlled beginner exercises with concrete dimensions, object counts, starter values, exact test conditions and visible success checks. Design recipes now render as design tests rather than generic “small working mechanic” pages. The shared Silent Hill fog practical is also verified against the prescriptive standard. IDs and XP remain unchanged. See `RELEASE-NOTES-v3.42.2.md` and `DESIGN-PRACTICAL-INSTRUCTION-QA-v3.42.2.md`.

## Previous release — v3.42.1

**Hub Rivalry.** Makes the homepage leaderboard Hub-wide instead of silently selecting one class. Students in active leaderboard-enabled classes are ranked once across the whole Hub, while the full Leaderboard page keeps class filters. See `RELEASE-NOTES-v3.42.1.md` and `HUB-RIVALRY-QA-v3.42.1.md`.

## Previous release — v3.42.0

**Teacher Command Centre.** Expands teacher progress tracking across Unreal, Theory, Designer Studio, 3D/Sculpt and Guided Path checkpoints, adds new pathway badges and brings the weekly leaderboard onto the homepage.

## Previous release — v3.41.3

**Theory Case Study Parity.** Brings all 24 unique theory game case studies up to the same deeper analysis/source/video standard, including click-to-load Watch It In Action material where useful.

## Previous release — v3.41.2

**Theory Case Study Diversity Pass.** Rebuilt the 24 Game Design Theory case studies so every lesson uses a different game, including OMORI and Jet Set Radio, while preserving lesson IDs, XP and progress.

## Previous release — v3.41.1

**Guided Paths teaching pass.** Keeps three genuinely cross-Hub outcome routes: Build a Playable Level, Create a Gameplay Mechanic, and Digital Game → Tabletop. Removes the duplicate 3D path, adds real Level Design study/research, makes Unreal mechanic choices prerequisite-aware, and makes practical tabletop/playtest stages count toward pathway completion. Path checkpoints sync through existing `lesson_progress` without XP, new tables, SQL migrations or an extra routine read. See `RELEASE-NOTES-v3.41.1.md` and `GUIDED-PATHS-QA-v3.41.1.md`.

## Previous release — v3.41.0

**Guided Paths prototype.** Introduced four optional outcome-based paths and Theory → practical cross-links. v3.41.1 keeps the underlying pathway engine but corrects the teaching sequence, removes the duplicate 3D route and makes meaningful practical checkpoints count.

## Previous release — v3.40.0

**Game Design Theory.** Adds a first-class 24-lesson Game Design Theory hub across design foundations, player decisions, systems/balance, player experience, space/world and design process. It includes a classroom Board Game Lab, real-game examples, professional/original further reading, practical tasks, scenario quizzes, Revision integration and one-time +25 XP completion. It is built directly on v3.39.4 Network Quiet + the homepage/Noclip hotfix, preserving the traffic/caching work and Teams-first boundary. See `RELEASE-NOTES-v3.40.0.md` and `GAME-DESIGN-THEORY-QA-v3.40.0.md`.

### Preserved baseline

v3.39.4 **Network Quiet** remains underneath this release: duplicate/in-flight reads are cached and deduplicated; News social state uses compact RPC data; teacher overview uses compact progress summaries; retired project/evidence media reads remain disabled; Critique signed URLs are reused; and active image uploads retain long-lived immutable caching.

## Previous release — v3.39.3

**Teams-First Lean Hub + Egress Pass.** The duplicate Hub Projects/formal evidence-submission workflow is retired from live student and teacher navigation. Microsoft Teams is the single home for project briefs, deadlines, formal submissions and assessed feedback; the Hub keeps learning, practical builds, revision, Critique Board, classes, progress, XP and lesson feedback. Historical Project/evidence data is preserved read-only rather than deleted. Screenshot uploads that remain in active Hub features are client-optimised and thumbnailed to reduce Supabase egress. See `RELEASE-NOTES-v3.39.3.md` and `TEAMS-FIRST-EGRESS-QA-v3.39.3.md`.

## Previous release — v3.39.2

**Editorial Correction Pass.** The Hub copy was audited for student clarity without rewriting content that was already working. Environment Art & Set Dressing and Materials & Surfaces now use six discipline-specific primary case studies backed by developer/GDC/interview evidence; generic development-history copy has been removed from live student pages; Core Unreal deep-dive headings and project/assessment wording have been cleaned up. No IDs, XP rules or database schema changed. See `RELEASE-NOTES-v3.39.2.md` and `EDITORIAL-CORRECTION-QA-v3.39.2.md`.

## Previous release — v3.39.1

**Designer Evidence Pass.** All 24 primary LOOK case studies name a specific game-design factor, explain the concrete shipped-game decision, turn the student task into analysis of that exact decision, and link to a developer interview, GDC talk, studio article or strong games-media feature rather than a store page. No completion IDs, XP rules or database schema changed. See `RELEASE-NOTES-v3.39.1.md` and `DESIGNER-CASE-STUDY-QA-v3.39.1.md`.

## Previous release — v3.39.0

**Study Tools Refresh.** Revision, Glossary, Challenge Board and Homework now reflect the whole Hub rather than the older Unreal-only structure. Revision has 98 mixed Unreal / Designer / 3D questions; the Glossary has 97 filtered terms; the Challenge Board has 58 cross-discipline transfer tasks; and Homework has 56 grouped independent-study activities with Teams-ready copying. Teams remains the formal assignment/submission/grade space. Four milestone badges were added for Module 0, the Max video series, industry deep dives and Designer Studio completion. No XP, completion IDs or database schema changed. See `RELEASE-NOTES-v3.39.0.md` and `STUDY-TOOLS-QA-v3.39.0.md`.

## Previous release — v3.38.2

**Module 0 visual teaching pass.** Every theory section now pairs its explanation with an image that directly demonstrates that exact idea: real stills from the teacher-made Max videos, approved single-stage modelling viewport images, and the strongest UV/collision/LOD figures from the supplied theory deck. The old Workspace interface-map diagram is removed from teaching and replaced with the real Max workspace from the Interface Basics video. No completion IDs or XP rules change. See `RELEASE-NOTES-v3.38.2.md` and `3D-MODELLING-FOUNDATIONS-VISUAL-QA-v3.38.2.md`.

## Previous release — v3.38.1

**Dits’ 3ds Max Video Series.** The 14 teacher-made Google Drive videos are now a structured companion course inside the 3D Modelling Studio. Students can open `#/modeling/videos`, watch each video inside the Hub, complete a named Max follow-along task and claim **+20 XP** once per video. Relevant videos also appear directly inside the matching 3ds Max lesson. Video completion syncs to cloud progress and appears in teacher class-progress views. The original Drive files remain external; they are not copied into the Hub ZIP. See `RELEASE-NOTES-v3.38.1.md` and `3D-MODELLING-VIDEO-SERIES-QA-v3.38.1.md`.

## Previous release — v3.38.0

**Game-Ready 3D Foundations.** The old Modeller Mindset/photo-collage block is replaced by a required six-chapter Module 0 with applied theory, a five-question quiz after every chapter, 20 XP per first pass, and a 12-question **Model Doctor** final worth 100 XP. Students may preview/practise Build X at any time, but new Build X completion unlocks after the final pass. Theory is rebuilt from the college 3D Modelling Theory deck and modernised around current game-art decisions. Existing 3D Modelling lesson/Build/Fix IDs are preserved. See `RELEASE-NOTES-v3.38.0.md` and `3D-MODELLING-FOUNDATIONS-QA-v3.38.0.md`.

## Previous release — v3.37.4

**Tyre workflow correction.** Build X → Simple Game Tyre now uses a cleaner game-art workflow: restrained Torus body, tyre-profile shaping, one master tread tile, straight Array, 360° Bend, then fit/clean. Six one-stage Max-style viewport images replace the earlier tyre visuals. Rejected webpage/tutorial-UI generations are not packaged.

## Previous release — v3.36.0
**Critique Board + Learning XP.** Signed-in students now have a private class studio wall at `#/critique` for screenshot-based work-in-progress critique. Posts stay class-scoped, classmates answer three structured prompts, under-reviewed work is surfaced first, authors can add an improved **After** image, and teachers can moderate. Meaningful peer critique awards **15 XP for the first three rewarded critiques per Europe/London day**; students can keep helping after the cap. Designer Studio's 24 industry videos/articles now have a self-declared **Watched/read + did the task** completion worth **20 XP** each. These source completions also appear in teacher class-progress views. Teams remains the formal assignment/submission/grade space; Critique Board is intentionally formative. The live Supabase migrations were applied on 29 Aug 2026. See `RELEASE-NOTES-v3.36.0.md` and `CRITIQUE-BOARD-QA-v3.36.0.md`.

## Previous release — v3.35.4
Designer Studio landing-page trim removed the large **Resource Library bridge** beneath “Seven moves. No waffle.” The standalone `#/resources` area and all 18 curated resources remain untouched. See `RELEASE-NOTES-v3.35.4.md`.

## Previous release — v3.35.3
Designer Studio landing-page cleanup removed the redundant **Design Roulette** panel and the **3D Modelling Studio** detour panel. Module-level constraint challenges remain exactly where they are useful, while 3D Modelling is still available through its dedicated navigation. See `RELEASE-NOTES-v3.35.3.md`.

## Previous release — v3.35.2
Designer Studio expanded to 24 different primary game case studies and promoted its buried links into the dedicated 18-source Resource Library. See `RELEASE-NOTES-v3.35.2.md`.

## Previous release — v3.35.1
Designer Studio added a **HEAR THE DESIGNERS** stage with 24 curated industry deep dives and 8 click-to-load videos. Internal browser Back navigation also gained route scroll restoration. See `RELEASE-NOTES-v3.35.1.md` and `DESIGNER-STUDIO-DEEP-DIVES-v3.35.1.md`.

## Previous release — v3.35.0
Designer Studio has been rebuilt around an explicit **LOOK → STEAL THE PRINCIPLE → RESEARCH → BUILD → BREAK + TEST → IMPROVE** learning loop. The eight disciplines and all 47 Designer-owned recipes are retained, but students now work through **24 real-game case studies, 16 field-research missions, 24 constraint challenges, Design Roulette, clearer Studio Builds and 8 hidden Black Box briefs** that unlock after the existing Studio Build completion. All 47 Designer-owned recipes now carry at least one useful design-target reference where appropriate. No database migration is required and existing completion IDs are preserved. See `RELEASE-NOTES-v3.35.0.md` and `DESIGNER-STUDIO-REVAMP-v3.35.0.md`.

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

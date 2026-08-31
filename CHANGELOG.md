## v3.42.1 — Hub Rivalry — 31 Aug 2026

- Homepage `Who is making moves?` is now Hub-wide rather than silently choosing one class.
- Added `Everyone` to the full Leaderboard view while retaining class-specific filters and per-class pause controls.
- Students are deduplicated across classes; teachers never rank.
- Only active, leaderboard-enabled classes feed the Hub-wide board.
- Added one compact cached `get_hub_leaderboard` RPC so the homepage does not fan out across class leaderboards.

## v3.42.0 — Teacher Command Centre — 31 Aug 2026
- Rebuilt the Teacher dashboard around a class-by-class Learning Pulse covering Unreal, Theory, Designer Studio, 3D/Sculpt, Guided Path checkpoints and recent activity.
- Added a class-detail snapshot with all three Guided Path percentages, weekly XP, streak and last activity per student.
- Added Guided Path checkpoint rows to class content tracking without awarding XP.
- Expanded My Progress to show Building Blocks, Designer Studio, Guided Paths, Max videos and Build X activity.
- Added Level Architect, Mechanic Maker and Tabletop Translator badges for completing the three Guided Paths.
- Added a compact top-three weekly class leaderboard to the signed-in homepage; full ranking remains on the Leaderboard page and respects the teacher pause switch.
- Fixed the live XP map: Game Design Theory is +25 XP and Designer industry-source tasks are +20 XP. Existing mis-awarded Theory events are corrected by migration.
- Replaced the Network Quiet teacher progress summary RPC with a current compact summary covering every tracked learning area plus last activity.

## v3.41.3 — Theory Case Study Parity + Watch It In Action — 31 Aug 2026

- Gives all 24 Theory lessons a bespoke case-study breakdown with three game-specific design observations and one designer question.
- Adds a purpose-picked WATCH IT IN ACTION block to all 24 lessons.
- Uses 15 click-to-load YouTube sources and 9 official/developer/professional media-page links; no player, thumbnail or autoplay request occurs on lesson open.
- Raises every lesson to at least three written professional/developer/official sources in addition to its watch resource.
- Keeps OMORI on Environmental Storytelling and Jet Set Radio on Game Feel & Feedback, with the same parity standard applied to every other game.
- Preserves all lesson IDs, quizzes, tasks, XP, progress, Revision and Guided Path references.
- No database migration, new table, new XP event type or routine Supabase read.

## v3.41.2 — Theory Case Study Diversity Pass — 31 Aug 2026

- Replaces repeated Theory case studies with 24 distinct games across the 24 lessons.
- Adds OMORI to Environmental Storytelling and Jet Set Radio to Game Feel & Feedback.
- Expands professional/developer/official Theory sources to 71 cards, including more interviews, GDC talks, videos, research and official material.
- Shows the case-study game on every Theory card.
- Preserves all Theory lesson IDs, quizzes, tasks, XP, progress, Guided Path references and Revision integration.
- No database migration or new routine network call.

## v3.41.1 — Guided Paths Teaching Pass — 31 Aug 2026

- Reduced Guided Paths to three cross-Hub outcomes; removed the duplicate 3D Prop route and surfaced the existing 3D course instead.
- Build a Playable Level now includes one real professional source task plus a Level Design field-research checkpoint before the practical sequence.
- Create a Gameplay Mechanic now adapts prerequisites to the chosen mechanic: Interaction adds Traces; Checkpoint adds Framework; Health/Score remain lean.
- Gameplay playtesting is now a required pathway checkpoint with an evidence-based revision.
- Digital Game → Tabletop now requires the Board Game Lab, a whole-team played-the-game check, Prototype V1, a real playtest and Prototype V2.
- Added synced, zero-XP pathway checkpoints using existing `lesson_progress` (`completed=false`, `completed_at` as the marker); no SQL migration and no extra routine read.
- Existing Theory → practical cross-links retained and the `Scope & Constraints` 3D link now points to the existing 3D Modelling Studio.

## v3.41.0 — Guided Paths — 31 Aug 2026

- Added four optional outcome-based Guided Paths through existing Theory, Unreal, Designer and 3D content.
- Paths derive progress from existing completion IDs; prior work counts automatically and no duplicate XP is awarded.
- Added choice stages, grouped stages and untracked optional classroom/playtest activities without hard-locking the site.
- Added Theory → practical “Put this into practice” bridges where a strong existing Hub application exists.
- Added Guided Paths to navigation, home and global search.
- Preserved the existing Unreal course rather than duplicating it as another pathway.
- No database migration, new tables or routine cloud reads.

## v3.39.4 — Network Quiet — 30 Aug 2026

## v3.40.0 — Game Design Theory (31 Aug 2026)

- Added a first-class Game Design Theory hub with 24 lessons across six paths.
- Added Board Game Lab: students play and analyse a physical game before designing their own adaptation.
- Added real-game examples, professional/original further reading, classroom tasks and scenario quizzes.
- Added Theory to global search, Revision Quizzes, My Progress and teacher class-detail progress.
- Added +25 XP one-time Theory completions via existing lesson_progress / learning_xp_events architecture.
- Added Design Analyst and Systems Thinker badges.
- Preserved v3.39.4 Network Quiet read/cache behaviour; no new tables or routine cloud reads.

- Audited all Supabase reads/writes, timers, Storage access and signed-URL generation across the Hub.
- Removed legacy `project_progress` / `student_projects` boot reads now that Projects are Teams-first.
- Added short-lived, user-scoped read caching and in-flight deduplication for routine cloud data.
- Replaced News vote/comment row downloads with one compact aggregate RPC per story set.
- Teacher dashboard now consumes compact category totals; class detail fetches only the selected class scope.
- Reuses Critique signed URLs and gives immutable uploaded images long browser-cache lifetimes.
- Retired Project/evidence Storage reads are blocked so stale clients cannot continue serving archived large screenshots.
- No learning content, IDs, XP values, badges or Teams-first workflow changed.

## v3.39.3 — Teams-First Lean Hub + Egress Pass — 30 Aug 2026
- Retired collaborative Hub Projects and formal lesson-evidence submission/review from live student and teacher navigation; Microsoft Teams is now the single place for project briefs, deadlines, formal submissions and assessed feedback.
- Replaced lesson evidence uploads with a lightweight **Keep proof for Teams** checklist so practical lessons still tell students exactly what to capture without storing another copy in the Hub.
- Kept Critique Board, classes, learning progress, XP/badges, lesson comments, student requests, revision, Designer, Unreal, Modelling and Sculpt intact.
- Legacy `#/projects` / `#/my-game` bookmarks now land on a Teams-first notice instead of fetching project records.
- Reduced Supabase egress for active screenshot features with client-side WebP optimisation, thumbnails, lazy loading and tighter cloud reads.
- Preserved all historical Project/evidence rows and files read-only; no student work was deleted.
- Applied migrations `project_media_thumbnail_backfill` and `retire_projects_and_evidence_writes`; the latter removes all client Project/formal-evidence mutation policies and old project RPC execution while leaving Critique Board media writable.

## v3.39.2 — Editorial Correction Pass
- Corrected Environment Art and Materials primary case studies to teach the actual discipline.
- Replaced generic/development-history copy with direct student-facing instructions.
- Cleaned project/assessment wording and Unreal deep-dive headings.
- No database change.
## v3.39.1 — Designer Evidence Pass — 29 Aug 2026
- Rewrote all 24 primary Designer Studio LOOK case studies around a named, game-specific design factor rather than generic observations.
- Replaced the generic “Three examples. Three different design jobs.” section heading with a discipline-specific comparison naming the three games and the design question being studied.
- Reworked every case card into: DESIGN FACTOR → WHAT THE GAME ACTUALLY DOES → DESIGN PRINCIPLE → STUDENT TASK → EVIDENCE SOURCE.
- Replaced all primary case-study store/source links with interviews, developer articles, GDC talks, studio breakdowns or strong games-media features.
- Added source type and “why this source matters” context so students know what evidence to hunt for before opening a link.
- Kept the 24-game diversity rule: 24 primary LOOK slots still use 24 different games.
- No XP, completion-ID, route or database changes.

## v3.39.0 — Study Tools Refresh — 29 Aug 2026
- Rebuilt Revision Quizzes as a cross-Hub bank: 44 existing Unreal + 30 Module 0 + 24 Designer scenario questions = 98 total.
- Expanded Glossary from 41 Unreal terms to 97 searchable Unreal / Design / 3D terms with area filters.
- Expanded Challenge Board from 20 Unreal challenges to 58 across Unreal, Designer Studio, Build X and Sculpt.
- Expanded Homework to 56 grouped independent-study tasks across Unreal, Designer field research, 3D Foundations and the 14 Max videos.
- Kept Copy for Teams and explicitly kept formal assignment/submission/grade workflow in Teams.
- Added Study tools navigation grouping and `data/study-data.js`.
- Added four milestone badges: Game-Ready Foundations, Max Apprentice, Industry Eye and Design Thinker.
- No XP changes, completion-ID changes or database migration.

## v3.38.2 — Module 0 Visual Teaching Pass — 29 Aug 2026
- Rebuilt all six Module 0 chapters around section-level images that directly support the adjacent theory.
- Added 23 purposeful visual placements across 19 theory sections.
- Added real stills from the teacher-made Max videos for Workspace, Vertex, Edge, Polygon, Primitive Parameters, Array and Materials.
- Reused the approved Crate, Barrel, Tyre and Panel single-viewport visuals for topology, density, pivots, UV checker and modular decisions.
- Reused the strongest supplied theory-deck UV, collision, LOD and specialist-mesh figures where they precisely match the text.
- Added explicit `LOOK AT THE IMAGE` prompts so imagery is part of the learning task rather than decoration.
- Rewrote Module 0 copy to be more concrete, visual and game-asset decision-led while preserving every quiz and completion ID.
- Removed the old drawn interface-map image from `Know the Workspace Before You Model` and the Primitives / Precision lesson; both now use authentic course-video frames.
- No database migration.

## v3.38.1 — 3ds Max Companion Video Series — 29 Aug 2026
- Added a dedicated `#/modeling/videos` course containing all 14 teacher-made Google Drive videos in their original 0–13 order.
- Grouped the series into Start in Max, Editable Poly Core, Modifiers & Repetition, and Mini Builds & Materials.
- Added lazy click-to-load Google Drive preview embeds; videos are not copied into the Hub package.
- Mapped each video to the relevant Modelling Studio lesson(s), where compact companion cards now appear beside the written guide.
- Every video has a **WATCH FOR** prompt and a **DO IT IN MAX** follow-along task so completion means practice, not passive playback.
- Added one-time `modelvideo:*` completions worth +20 XP each (280 XP across the series), cloud sync, student progress, teacher class progress and global search.
- Added migration `20260829_32_model_video_xp.sql`; applied live as `model_video_xp` and verified at 20 XP without changing existing theory or Build X values.
- Google Drive source files were detected as private at integration time; sharing must be changed before student browsers can play them.

## v3.38.0 — Game-Ready 3D Foundations — 29 Aug 2026
- Replaced the old 3D Modelling `Modeller Mindset` / photo-collage landing block with a purpose-built Module 0 progress/learning panel.
- Added 6 sequential theory chapters: Read the Mesh; Work in 3D Space; Spend Geometry Wisely; Transforms & Pivots; UVs & PBR Materials; Make It Game Ready.
- Added a 5-question scenario quiz after every chapter; 80% passes, awards +20 XP once and unlocks the next chapter.
- Added `Model Doctor`, a 12-question mixed final; 80% passes, awards +100 XP once and unlocks new Build X completion.
- Build X remains previewable/practisable before the gate; existing Build X completions are preserved and teachers can bypass the gate.
- Rebuilt the theory from the college 3D Modelling Theory deck and modernised older topology/material wording into current game-art decisions.
- Added theory/final progress to local/cloud sync, global search, student progress and teacher class-progress views.
- Added migration `20260829_31_model_foundations_xp.sql`; applied live as `model_foundations_xp` on 29 Aug 2026.
- Existing 12 Modelling lesson IDs, 8 Build X IDs and 6 Fix Clinic IDs are unchanged.

## v3.37.4 — Tyre Workflow Correction — 29 Aug 2026
- Rebuilt Simple Game Tyre around a cleaner production workflow: low-density Torus body → shape cross-section → one tread master → Array straight strip → Bend 360° → fit/clean.
- Replaced the four earlier tyre visuals with six single close-up Max-style viewport stages.
- Removed the old direct face-extrusion tread teaching from the tyre recipe.
- Small grooves, siping and lettering are explicitly texture/normal-map work unless silhouette demands geometry.
- Existing Build X ID `build-tyre` is preserved. No database migration.

## v3.37.3 — Single Viewport Stage Checkpoint — 29 Aug 2026

- Crate, Barrel and Tyre use individual close-up Max-style stage visuals.
- Crate/Barrel old combined roadmap images removed from their pre-step topology blocks.
- Failed generated webpage/tutorial UI images excluded.
- No IDs or database changes.

## v3.37.2 — Split Viewport Step Visuals — 29 Aug 2026

- Replaced the three prototype Build X topology infographic sequences with the approved Max-style low-poly modelling renders.
- Added full workflow roadmaps for Crate, Barrel / Canister and Sci-fi Wall Panel.
- Split those workflow renders into isolated per-step images and placed them directly inside the matching modelling steps.
- Crate now explicitly separates **main cuts** from **panel shaping**, giving students an earlier low-density stage before support loops/chamfers.
- Kept UV/export support visuals where the viewport progression stops being the right teaching image.
- Removed the colour-coded diagram legend language from these three pages; guidance now focuses on shaded + Edged Faces, form changes and justified geometry.
- Preserved all 12 modelling lesson IDs, 8 Build X IDs and 6 Fix This Model IDs.
- No database migration.

## v3.37.1 — Topology Step Mockups — 29 Aug 2026

- Prototyped full visual topology teaching on Crate, Barrel / Canister and Sci-fi Wall Panel.
- Added 18 original step diagrams showing where edges/support loops/chamfers/seams/pivots should be and where extra geometry should not be added.
- Added READ THE MESH topology maps and explicit edge-purpose rules.
- No IDs or database schema changed.

## v3.37.0 — 3D Modelling Studio Rebuild — 29 Aug 2026

- Rebuilt 3D Modelling Studio around **REFERENCE → PLAN → BLOCK → MODEL → INSPECT → GAME READY → CRITIQUE** rather than a button-first Max course.
- Preserved all 12 modelling lesson IDs, all 8 Build X IDs and all 6 Fix This Model IDs so existing student progress remains valid.
- Added a visual modelling manifesto, seven-stage asset loop and stronger production-first landing page.
- Every lesson now begins with **LOOK • THINK • PLAN**: a big modelling question, three observation prompts, three planning prompts and an explicit judgement decision before Max opens.
- Surfaced a useful reference image in every core lesson, including selected user-supplied book figures for interface, topology, subdivision and UV judgement.
- Kept the actual Max teaching highly explicit: where to click, what to do, what should be true before continuing, why the step exists and what to inspect if the result differs.
- Rebuilt all 8 Build X tasks as mini production briefs with role/context, real-world reference boards, planning questions, step-by-step checkpoints, a required design variation and production quality gates.
- Guidance still fades from the fully guided crate through to the independent Hero Prop.
- Added 6 professional artist/workflow studies, including 3ds Max, Substance and Unreal environment/prop production breakdowns.
- Connected lessons/builds to the class Critique Board with focused modelling critique questions and a before/after improvement loop.
- Retained the bad-model clinics for poly bombs, boolean abuse, bad UVs, pivots, one-mesh rooms and destructive smoothing.
- Current vendor references remain Autodesk 3ds Max, Adobe Substance 3D Painter and Epic UE5.8. Unreal FBX guidance remains aligned to Epic's current FBX 2020.2 pipeline documentation.
- No Supabase/database migration.

## v3.36.0 — Critique Board + Learning XP — 29 Aug 2026

- Added a dedicated class-scoped **Critique Board** at `#/critique` plus a persistent sidebar entry with an actionable “needs feedback” count.
- Students can post PNG/JPG/WebP screenshots with a focused design question, then add an improved **After** image without turning the Hub into an assignment hand-in system.
- Peer responses use three structured prompts: **What works?**, **What could be clearer?**, and **One change I’d try…**.
- Added **Give me something to critique** random routing that prioritises posts with the fewest responses and skips work the current student has already reviewed.
- Added teacher moderation for posts and feedback while keeping boards private to classes the signed-in account can access.
- Added **+15 XP** for meaningful structured student critique, capped server-side at the first three rewarded critiques per Europe/London day. Further critique remains available without XP.
- Added **+20 XP** self-declared completion for all 24 Designer Studio industry source tasks after the student has watched/read the source and done its attached task.
- Added Designer industry-source completion to teacher class-progress views.
- Added a private `critique-media` Supabase Storage bucket (8 MB; PNG/JPEG/WebP) with class/author path policies.
- Added `critique_posts`, `critique_feedback`, class-scoped feed/count RPCs, feedback notification trigger and server-side XP anti-farming logic.
- Applied live migrations `critique_board_and_learning_xp`, `critique_rpc_anon_hardening` and `critique_feedback_quality_floor` on 29 Aug 2026.
- No existing completion IDs, projects, assignment workflows or Teams usage were replaced.

## v3.35.4 — Designer Resource Bridge Cleanup — 29 Aug 2026

- Removed the large **Free Assets • Sound • Professional Reference** bridge from the Designer Studio landing page beneath “Seven moves. No waffle.”
- The dedicated `#/resources` Resource Library, its 18 curated resources, sidebar link, Home landing card and site-wide search results are unchanged.
- Removed CSS used only by the deleted Designer bridge.
- Corrected two pre-existing Quick Tutorial breadcrumb links from the invalid `#/Dashboard` route to the real Dashboard route `#/`.
- Designer Studio now flows directly from the seven-move learning loop into the eight discipline cards.
- No database migration and no progress/completion IDs changed.

## v3.35.3 — Designer Landing Cleanup — 29 Aug 2026

- Removed the redundant **Design Roulette** block from the Designer Studio landing page; the 24 module-level constraint challenges remain inside their relevant disciplines.
- Removed the **Need to build the asset as well?** 3D Modelling bridge from the Designer landing page; 3D Modelling remains available through its own navigation and Resource Library handoff.
- Removed the now-unused global roulette data, click handler and landing-only CSS.
- Designer Studio now flows directly from its learning loop / Resource Library into the eight discipline cards.
- No database migration and no progress/completion IDs changed.

## v3.35.2 — Game Diversity + Resource Library — 29 Aug 2026

- Expanded Designer Studio's 24 LOOK case-study placements from 7 repeated titles to **24 distinct games**, with no repeat game in the top case-study layer.
- Added Portal 2, Viewfinder, Dishonored 2, Firewatch, Stray, The Long Dark, Teardown, The Talos Principle 2, LIMBO, Little Nightmares II, Subnautica, Jusant, Journey, What Remains of Edith Finch, Psychonauts 2, Outer Wilds, No Man's Sky, Hi-Fi RUSH, Ratchet & Clank: Rift Apart and Ori and the Will of the Wisps while retaining the strongest existing examples in one primary discipline each.
- Promoted the buried Designer resource strip into a dedicated **Resource Library** route with a sidebar entry, Home landing card and prominent Designer Studio bridge.
- Expanded the resource collection to 18 curated sources across assets, audio, game study, professional reference and engine/college reference.
- Added ambientCG, Kenney, Quaternius, Sonniss #GameAudioGDC, noclip.website, Interface In Game, The Level Design Book, Noclip Documentaries, GDC Vault, Game Developer Postmortems and Game Accessibility Guidelines.
- Added visible licence/reference labels and best-use guidance to resource cards; explicitly distinguished CC0, provider/listing terms and reference-only use.
- Site-wide search now routes resource results to `#/resources`.
- No database migration and no progress/completion IDs changed.

## v3.35.1 — Designer Deep Dives + Scroll Restore — 29 Aug 2026

- Fixed internal browser Back navigation so returning to a previous Hub route restores that route's saved scroll position rather than jumping to the top.
- Added a **HEAR THE DESIGNERS** stage to the Designer Studio learning loop.
- Added 24 curated industry deep dives across the 8 Designer disciplines: one click-to-load video plus two talks/interviews/articles per discipline.
- Added Noclip, GDC, developer/publisher and specialist postmortem sources, each with **WHY THIS MATTERS**, **WATCH / READ FOR**, and **DO SOMETHING WITH IT** prompts.
- YouTube videos load only after a student clicks Watch and use privacy-enhanced `youtube-nocookie.com` embeds; every item retains an original-source link.
- No database migration and no completion/progress IDs changed.

## v3.35.0 — Designer Studio Rebuild — 29 Aug 2026
- Rebuilt Designer Studio around **LOOK → STEAL THE PRINCIPLE → RESEARCH → BUILD → BREAK + TEST → IMPROVE** rather than treating UE5 recipes as the curriculum.
- Retained all 8 Designer disciplines and all 47 Designer-owned Quick Tutorials with their existing IDs/completion state; Lighting also continues to reuse the shared Silent Hill fog recipe.
- Added 24 source-linked real-game case studies, 16 field research missions and 24 constraint challenges.
- Added a cross-discipline Design Roulette using all 24 constraint challenges.
- Added 8 hidden Black Box briefs which reveal after the existing Studio Build for that discipline is completed.
- Rewrote 53 Studio Build phase instructions to require specific design decisions, observation and testing; removed the generic “use the relevant Unreal editor panel” wording.
- Ensured all 47 Designer-owned recipes have at least one useful game/design target reference; the shared Silent Hill fog recipe retains its existing references.
- Added stronger developer/professional reference material from shipped games, developer breakdowns and The Level Design Book while keeping Epic documentation as the technical UE source of truth.
- Added no AI imagery and no new teacher-capture requirement.
- No database migration.

## v3.34.22 — Official Tutorial Imagery Exhaustion Pass — 29 Aug 2026

- Re-audited the former 76-image teacher capture queue against current UE5.6–5.8 Epic tutorial pages rather than exact-value screenshot matching.
- Retired the 76 required-capture figure: **0 new teacher screenshots are required before launch**; exact classroom captures are now optional polish gathered naturally during teaching.
- Integrated the supplied classroom Maps & Modes screenshot as a truthful Game Instance Class location reference; the Hub text still instructs students to select `GI_Learning`.
- Added more current Epic Designer 03/08 imagery to door, Timeline and AI teaching.
- Added current Artist 03/04 visuals to Material Instance and wet-surface recipes.
- Added current Epic Post Process, Landscape, Foliage, Sequencer gameplay-trigger, MetaSound wind, Static Mesh/LOD, Gameplay Tags and Reference Viewer references to the relevant practical teaching.
- Reused authentic existing classroom Data Table captures while keeping the Hub's exact item values in text.
- Added v3.34.22 capture/Design Studio imagery audit documents.
- No Supabase/database migration.

## v3.34.21 — Embedded Page Search Repair — 29 Aug 2026

- Fixed embedded page search behaviour in Quick Tutorials and Epic Paste Assists.
- Embedded search fields now respond to live input, the browser search event, change/composition completion and explicit Enter/Search-key submission.
- Quick Tutorials now hides the unchanged Featured section while a query/category filter is active, so filtered results are immediately visible.
- Added multi-word token matching to Epic Paste Assists and Glossary searches.
- Added clear zero-result states for Quick Tutorials, Epic Paste Assists and Glossary.
- News search now uses the same robust embedded-search event handling.
- Added `enterkeyhint="search"` for mobile keyboards.
- Top-bar global search remains unchanged from v3.34.19.
- No Supabase/database migration.

## v3.34.20 — Unreal Learning Consolidation — 29 Aug 2026
- Consolidated 47 equal top-level Programming Quick Tutorials into 26 recipe families while preserving all 47 practical builds and their existing IDs/completion state.
- Moved Smooth Timeline Door, persistent checkpoint saving and Struct/Data Table builds into their matching Core Lessons instead of duplicating the same teaching as separate top-level recipes.
- Added recipe-family pages that keep related outcomes together and surface relevant Epic paste assists.
- Mapped all 39 Epic paste assists into 15 relevant Core Lessons and added contextual lesson-level paste-assist sections.
- Demoted the standalone Snippet Bank into the Reference area and renamed the surface to Epic Paste Assists; the assists now appear where students actually learn/use them.
- Quick Tutorial search now searches family content while site-wide search still indexes every individual practical build.
- No database migration; teacher capture count remains 76.

## v3.34.19 — Site-wide Search Repair — 29 Aug 2026
- Replaced the brittle site-wide search with one global client-side content index across lessons, tutorials, snippets, design, modelling, sculpting, Building Blocks and glossary content.
- Added ranked multi-word matching and deeper step/instruction indexing.
- No database migration.

## v3.34.18 — Snippet Well Exhaustion Pass

- Expanded the Snippet Bank from 31 to 39 targeted paste assists across 12 unique official Epic UE5.8 documentation pages.
- Added a complete Anim Blueprint state-update assist plus Idle/Run/Jump transition-rule assists from Epic's current Adding Character Animation tutorial.
- Added Epic's pasteable EnergyCheck macro as a reusable energy/stamina gate and bridged it to Sprint, Dash and Double Jump.
- Added an Animation filter category and widened Snippet Bank search wording.
- Cleaned four stale `foundations-build` pseudo-links from earlier level-paste cards so every remaining Quick Tutorial bridge points to a real tutorial ID.
- Completed a 5.6–5.8 first-party exhaustion pass; remaining hits were C++/API snippets, prose/screenshots, duplicates or community-authored material rather than useful Blueprint clipboard graphs.
- Teacher capture count remains 76. No Supabase changes.

## v3.34.17 — Blueprint Snippet Bank Deep Expansion

- Expanded the Snippet Bank from 9 broad source cards to 31 targeted paste assists from 10 unique official Epic UE5.8 pages.
- Split multi-snippet Epic tutorials into searchable mechanic-level assists for keys, doors, HUD, switches, platforms, traps, enemies, win states and spawning.
- Added 4 explicitly labelled Level Editor / viewport paste assists alongside 27 Blueprint graph assists.
- Added source-section and paste-mode metadata to Snippet Bank search/cards and corrected count wording from sources to paste assists.
- Raw Epic clipboard payloads remain on Epic; the Hub stores instructions, prerequisites, reconnection notes and official links only.
- Teacher capture count remains 76. No Supabase changes.

# Changelog

## v3.34.15 — Quick Tutorials Search Hotfix — 29 Aug 2026
- Restored Quick Tutorials live search and category filtering by restoring the card metadata consumed by the existing filter handler.
- Search now matches tutorial title, summary, uses/tags, category and difficulty.
- Bumped the `app.js` cache key so deployed browsers receive the hotfix instead of retaining an older cached application script.
- No tutorial content, capture counts, Supabase schema or permissions changed.
- No database migration.

## v3.34.14 — UE5.6–5.8 Official Source Expansion — 29 Aug 2026
- Widened acceptable official Epic imagery to UE5.6, UE5.7 and UE5.8 when the shown workflow/UI remains materially accurate; UE5.8 remains the technical source of truth.
- Added Epic's exact Break Hit Result visual to the Niagara impact recipe and removed 1 bespoke teacher capture.
- Added Epic's Niagara Editor UI reference to the Niagara Systems Building Block and narrowed its remaining teacher capture to only the Hub-specific spawn graph.
- Added Epic's Make Transform → Spawn Actor visual to the Spawn and Destroy Actors recipe while retaining the custom owner-transform capture.
- Corrected Stack O Bot to an accepted UE5.6 Epic sample-capture source and re-audited the wider official source pool without counting topic overlap as an image replacement.
- Reduced genuine teacher screenshot groups from 77 to 76: 8 Core, 49 Programming, 5 Building Block recognition and 14 Design Studio technical captures.
- No database migration.

## v3.34.13 — Exact Trace Source Alignment — 29 Aug 2026
- Added exact current Epic UE5.8 visuals for Line Trace forward-vector maths, Break Hit Result / Hit Actor flow and Branch decisions.
- Split the interaction and hitscan Line Trace recipes so each operation has the correct adjacent visual.
- Removed 3 bespoke teacher-capture groups: 1 Core and 2 Programming / Quick Tutorial captures.
- Reduced genuine teacher screenshot groups from 80 to 77: 8 Core, 50 Programming, 5 Building Block recognition and 14 Design Studio technical captures.
- Re-audited Content Examples, First Hour, Lyra, Game Animation Sample and Stack O Bot without falsely counting topic overlap as an exact screenshot replacement.
- No database migration.

## v3.34.12 — Deep Official Source Mining — 29 Aug 2026
- Continued the strict official Epic UE5.8 source-mining pass before requesting bespoke classroom screenshots.
- Added exact official visuals for placed Instance Editable Blueprint values, Blueprint Interface implementation, collision sizing/object comparison, Animation Blueprint Speed/Is Falling, Launch Character and Data Assets.
- Removed additional teacher captures where existing current Epic visuals already teach the repeated operation and the Hub text carries the exact names/values.
- Reduced genuine teacher screenshot groups from 90 to 80: 9 Core, 52 Programming, 5 Building Block recognition and 14 Design Studio technical captures.
- This is 131 fewer teacher screenshots than the original 211-capture audit.
- Added refreshed v3.34.12 capture, Design Studio plan and deep-source audit documents.
- No database migration.

## v3.34.11 — UE5 Visual Source Completion — 29 Aug 2026
- Expanded the current Epic UE5.8 visual-source pass across Core Lessons, Programming Quick Tutorials and Design Studio.
- Reused exact official editor visuals for standard repeatable actions instead of requiring bespoke classroom screenshots.
- Kept custom Blueprint graphs and exact Hub-specific values/configurations on the teacher-capture list.
- Reclassified proof/test steps as image-free where a screenshot adds no teaching value.
- Reclassified Design Studio judgement/outcome tasks to reference/before-after/diagram visuals rather than Unreal UI captures.
- Reduced genuine teacher screenshot groups from 211 to 90: 17 Core, 53 Programming, 6 Building Block recognition and 14 Design Studio technical captures.
- Current data contains 316 official Epic visual placements using 138 unique Epic-hosted image URLs across 54 official source pages.
- Added refreshed v3.34.11 classroom-capture, Design Studio visual-plan and source-audit documents.
- No database migration.

## v3.34.10 — UE5 Tutorial Visual Alignment — 29 Aug 2026
- Added exact official Epic UE5.8 screenshots directly to numbered Core Lesson and Programming Quick Tutorial steps where the image genuinely demonstrates that action.
- Reworked Sprint around Epic's current UE5.8 Enhanced Input example and added exact UMG anchor, Apply Damage, Spawn Actor, Destroy Actor and Play Sound at Location visuals.
- Reused verified existing Epic visuals for overlap events, Timelines, AI navigation/perception, Data Tables, spawning, camera shake, fog and other matching workflows.
- Added official Material Instance, Landscape and fog/editor images to matching Design Studio practical steps.
- Removed 80 misleading repeated book-reference images from Design Studio numbered steps and added 5 exact official step visuals; licensed book figures remain in genuine reference/inspiration contexts.
- Added an online-source audit plus refreshed Core/Programming/Building Block and Design Studio classroom-capture lists.
- Current data contains 142 step-level official Epic visual placements using 81 unique Epic-hosted image URLs across 34 documentation pages.
- Left proof/test/reflection steps image-free when a screenshot would not improve instruction.
- No database migration.
## v3.34.9 — Class XP Leaderboards — 28 Aug 2026
- Added class-only weekly and all-time XP leaderboards with Top 10, personal position, level and streak.
- Added teacher per-class pause/enable control.
- Added server-side non-farmable XP events, historical backfill and a 5 XP daily activity bonus.
- Added project milestone evidence, milestone completion and project completion rewards.
- Kept grades and assessment marks completely out of leaderboard scoring.
- Synced cloud XP back into the existing student player card so personal and class XP agree.
- Added Sculpt Playground to local-to-cloud migration/restoration.
- Database migration: `20260828_27_class_xp_leaderboards.sql`.

## v3.32.2 — Class Detail Workspace — 27 Aug 2026
- Added **Open class →** to every active class in the Teacher Dashboard.
- Added a class-specific teacher route with roster, per-student progress and exact completed-content lists.
- Added class-wide progress rows for Building Blocks, Core Lessons, Quick Tutorials, 3D Modelling, Sculpt and Chapter Builds.
- Kept the existing class-management, evidence and co-teaching systems unchanged.
- No database migration.

## v3.32.1 — Unreal Path Audit & Link Accuracy Pass — 27 Aug 2026
- Replaced fuzzy tutorial-to-Building-Block guessing with explicit mappings for all 47 Programming Quick Tutorials.
- Expanded Building Blocks from 39 to 47 while keeping only 13 Core concepts.
- Added Character Movement, Timelines/Lerp, Damage, Camera, Audio, Niagara, Fog/Post Process and AI Perception blocks.
- Tightened Building Block proof exercises to use clearer editor paths and exact first-build values.
- Fixed misleading automatic matches such as Set Game Paused → Sets and Play Sound → Compile/Save/Play.
- No database migration.

## v3.32.0 — Unreal Learning Path Redesign — 26 Aug 2026
- Added 39 searchable Unreal Building Blocks with 13 Core concepts shown first.
- Redesigned the Unreal learning flow as Building Blocks → Core Systems → Quick Tutorials → Challenges / Projects.
- Added just-in-time Building Block links to Programming Quick Tutorials and relevant Core Lessons.
- Simplified the sidebar by removing six simultaneous Programming-path links while preserving the deeper paths inside Unreal Learning.
- Added local/cloud Building Block completion using the existing lesson-progress table; no migration required.
- Expanded glossary coverage for IA, IMC, Class References, Enums, Data Tables, Static/Skeletal Meshes, AnimBP, Blackboard, Behaviour Tree and Material Instances.
- Verified high-risk terminology/workflows against current Epic UE5.8 documentation.


## v3.31.0 — Straight-Through Guide Pass — 26 Aug 2026
- Removed visible starter-value / asset / variable prep strips from practical guides.
- Practical teaching now starts at Step 1 and introduces every required item in sequence.
- Simplified step presentation to: Go to → Do this → Why → Check → optional recovery.
- Replaced positional support-step mapping with content matching and a confidence threshold to stop unrelated explanations attaching to exact steps.
- Kept known-working values and scaffold fade from the prescriptive pass.

## v3.30.0 — Single Clear Guide Pass — 26 Aug 2026

- Replaced the recipe + duplicate walkthrough pattern with one authoritative practical guide.
- Main steps now combine exact first-build action, checkpoint, expected result, reason and recovery where available.
- Applied to all 20 UE core lessons, 47 Programming Quick Tutorials, 12 Max lessons and 8 Build X projects.
- Tightened remaining vague first-build measurements/settings across UE and Max.
- Kept independent Chapter Builds deliberately less prescriptive so scaffolded skills still progress toward judgement.
- Added `INSTRUCTION-AUTHORING-STANDARD.md` to prevent future content regression.
- No database migration required.

## v3.29.0 — Prescriptive Instruction Pass — 26 Aug 2026

### Teaching hierarchy
- Practical pages now lead with an **Exact First Build** instead of burying the student under explanation.
- Known-working teaching values are shown before the steps.
- The default flow is now **Copy → Test → Understand → Change**.
- Why / troubleshooting / deeper reference material is still available, but collapsed behind the practical route.

### Unreal Engine
- Added exact first-build recipes and working values to all **20 core UE lessons**.
- Added exact first-build recipes and working values to all **47 Programming Quick Tutorials**.
- Core lesson order changed to **Goal → Build Exactly → Check → Understand**.
- Blueprint guides now specify names, data types, default values, trace distances, timeline durations, speeds, health/damage values and test conditions where appropriate.

### 3ds Max
- Added exact modelling routes and measurements to all **12 modelling lessons**.
- Added exact first-build measurements to all **8 Build X projects**.
- Early Max tasks now specify dimensions, segment counts, Inset/Extrude/Chamfer values, grid sizes, modular measurements and explicit stop checks.
- Interface/book/reference material moved behind the first practical route so it supports the task instead of obscuring it.

### Database
- No migration required.

## v3.28.0 — 3ds Max Teaching Quality Pass — 26 Aug 2026

### Changed
- Re-audited the full 12-lesson 3D Modelling Studio using the uploaded *Autodesk 3ds Max 2023 Bible* as a curriculum/task reference.
- Grouped modelling into four visible learning stages.
- Added per-lesson **TOOLS YOU MAY USE TODAY** and **LEAVE THESE ALONE FOR NOW** guardrails.
- Strengthened workspace, transforms, snapping, Editable Poly, edge control, topology and modular scaffolds.
- Added a three-box snapping drill, Ring/Loop drill, segment-budget comparison and plank-strip mini build.
- Replaced Simple Desk / Workstation Build X with **Simple Game Tyre**.
- Added visible Build X support fading from full guidance to independent outcome brief.
- Expanded the current-version 3ds Max interface capture checklist to 45 high-value captures.
- Kept legacy Scanline/material workflows out of the game-production route.

### Copyright handling
- The 2023 Bible is All Rights Reserved; used for curriculum/task analysis only. No screenshots/pages from it are reproduced in the Hub.

### Database
- No migration required.

## v3.27.0 — 3ds Max Book Reference Quality Pass — 26 Aug 2026

### Added
- Five carefully selected local reference figures extracted from the supplied *Essential Guide to 3ds Max for All Levels*.
- Book-backed teaching notes in the Workspace, Edge Control, Modifier Stack, Topology, UV and Material Handoff lessons.
- A dedicated visual treatment that labels book figures as concept/reference material rather than current UI click guides.
- `3DS-MAX-BOOK-VISUAL-PASS.md` documenting what was used, what was deliberately rejected, and why.

### Changed
- Removed the redundant third-party interface hotlink from Lesson 1; the local book overview now handles broad orientation while current Autodesk Help remains authoritative for exact UI.
- Modelling philosophy now explicitly separates stable modelling principles from version-sensitive interface guidance.
- Cache/version references updated to v3.27.0.

### Database
- No migration required.

## v3.26.2 — Account Avatar Alignment Hotfix — 26 Aug 2026
- Fixed top account avatar symbol centring.
- No database migration required.


## v3.26.1 — UI Hotfix — 26 Aug 2026

- Fixed sidebar click interception caused by the visible-site logo replacement.
- Kept the purple supplied mark as favicon/browser identity only.
- Added 3D Modelling Studio and Sculpt Playground directly to Home.
- Widened and simplified the sidebar.
- Re-aligned the Avatar Studio account popup.
- No database migration required.

## v3.26.0 — Sculpt Playground — 26 Aug 2026

- Added embedded SculptGL practice area with six scaffolded digital-clay exercises.
- Added explicit form-versus-topology teaching bridge into 3ds Max.
- Added Sculpt Playground completion, XP, search integration and Digital Clay badge.
- Added sidebar and 3D Modelling Studio entry points.
- No database migration required.

## v3.25.0 — 3D Modelling Studio — 26 Aug 2026

### Added
- Dedicated 3D Modelling Studio for Autodesk 3ds Max game-asset workflows.
- 12 slow scaffolded lessons from interface safety through UVs and UE5 export.
- 8 deep Build X projects with prerequisite lessons, phased microsteps, hard checkpoints and proof requirements.
- 6 Fix This Model repair clinics.
- Original interface/topology/modifier/UV/pipeline concept diagrams clearly labelled as non-UI diagrams.
- Current Autodesk + Epic reference cards and a current-college-interface capture list.
- 3D modelling search, progress, XP and three badges.

### Changed
- Designer Studio now bridges directly into 3D Modelling Studio.
- Design card on Home signals the 3D modelling route without adding a fifth giant portal card.
- Cache/version references updated to v3.25.0.

### Database
- No migration required.

## v3.24.0 — Player Card + Badge Cabinet — 26 Aug 2026

### Added
- Cleaner Home session area: one **Next Mission** card plus one compact **Player Card**.
- XP level ring and automatic rank title presentation.
- Badge rarity tiers: Common, Uncommon, Rare, Epic and Legendary.
- Badge Cabinet on My Progress.
- Students can pin an unlocked badge to their player card.
- Next-badge progress shown beside the current learning mission.
- Bigger badge-unlock toast when a local learning milestone is reached.

### Changed
- Removed the extra Home “Today’s learner route” card to reduce dashboard density.
- Home hero copy shortened and the supplied purple brand mark is used as a subtle identity element.
- Player/profile information is more game-like without adding streaks or meaningless reward mechanics.
- News cache namespace updated to `ue5hub:v324:news-cache`.

### Database
- No migration required. Avatar and pinned-badge preferences remain lightweight browser-side personalisation.

## v3.23.0 — Fun Profile + Favicon + Lesson Flow Polish — 26 Aug 2026

### Added
- Browser favicon and app icons using the supplied purple mark.
- Local Avatar Studio so students can choose a simple profile icon and colour theme.
- Dashboard profile card with rank title, recent badges and quick progress links.
- Dashboard “Today’s learner route” card to reinforce the core learning flow.
- Lesson flow callout and grouped lesson navigation: Do these first / Extend / When stuck / Submit.
- `site.webmanifest` for cleaner installable/browser identity support.

### Changed
- Account button now uses the chosen avatar mark instead of a plain dot.
- Sign-in/account modal now surfaces avatar choices and recent badges.
- Sidebar brand uses the supplied mark for a stronger visual identity.
- News cache namespace updated to `ue5hub:v323:news-cache`.
- Cache/version strings updated to v3.23.0.

### Database
- No migration required.

## v3.22.0 — Gold Instruction Pass — 26 Aug 2026

### Added
- Prescriptive walkthrough structure across every Programming Quick Tutorial and every Designer Studio recipe.
- `WHERE TO CLICK / WHERE TO WORK`, expected-result, proof and troubleshooting prompts.
- Step-level instructional visuals where a genuinely relevant local visual exists.
- Detailed production-style phases for all eight Designer Studio Builds.
- `RELEASE-NOTES-v3.22.0.md` for deployment/release handoff.

### Changed
- All 47 Programming Quick Tutorials now use the richer walkthrough format.
- All 47 Designer Studio recipes now use the richer walkthrough format.
- All 20 core lesson guided builds remain on the richer format introduced in v3.21.
- Designer Studio Builds now explain where to work and how to prove each phase instead of presenting a short phase sentence only.
- Landing-page `Choose a path` heading reduced on desktop and mobile.
- Tutorial cards show **Detailed walkthrough** when the richer format is available.
- Cache/version strings updated to v3.22.0.

### Removed / corrected
- Removed generic lesson-image fallback from Quick Tutorials when no tutorial-specific visual is supplied.
- Avoided inserting unrelated imagery simply to fill space.

### Database
- No migration required.

## v3.34.16 — Official Blueprint Snippet Bank

- Added a dedicated Blueprint Snippet Bank with 9 curated official Epic UE5.8 paste sources.
- Added search/category filtering and global-search integration.
- Added per-tutorial Epic Clipboard Assist cards where a Quick Tutorial overlaps an official snippet source.
- Added sidebar and Unreal Learning / Quick Tutorials entry points.
- Raw Epic clipboard payloads are deliberately not mirrored; students copy directly from Epic and paste into Unreal.
- Teacher capture audit remains 76; snippet availability is treated as workload reduction, not a fake capture elimination.
- No database changes.

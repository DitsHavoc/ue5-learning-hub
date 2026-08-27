# Changelog


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

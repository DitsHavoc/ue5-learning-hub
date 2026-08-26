# Changelog

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

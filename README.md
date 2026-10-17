# UE5 Learning Hub

Current content-architecture release: **v3.62.0**

A student-facing learning hub for Unreal Engine, Blueprint programming, Unreal C++, game design, 3D modelling and games-industry learning.

## The content rule

> **One canonical place to learn an idea. Everything else should apply it, practise it, assess it or reference it.**

Before adding content, read:

- `CONTENT_ARCHITECTURE.md` — where new material belongs.
- `CONTENT_AUDIT.md` — what was reviewed, merged, retired or deliberately kept separate.

## Student structure

The student navigation is intentionally small:

- **Paths** — follow a deliberate sequence.
- **Learn** — understand a subject or transferable concept.
- **Build** — make a practical outcome.
- **Study** — homework, revision and fast support.
- **Level 4** — specialist portfolio-style outcomes.

## Canonical learning areas

| Subject | Canonical home |
|---|---|
| Unreal / Blueprint concepts | Core Unreal Lessons |
| Blueprint cumulative programming | Blueprint Programmer Path |
| Unreal C++ | Standalone C++ Programmer Path |
| Game design principles | Game Design Theory |
| Level/environment/material/light/audio/cinematic design | Designer Studio |
| 3D judgement | 3D Foundations |
| 3ds Max tool skills | 3D Modelling lessons |
| Industry / careers | Industry & Careers |

## Supporting content

These are useful, but they are **not parallel courses**:

- Building Blocks — short definitions/reminders.
- Quick Tutorials — one concrete practical outcome.
- Master Guides — longer end-to-end workflows.
- 3ds Max videos — follow-along support.
- Build X / Level 4 — application and evidence.
- Fix This Model — diagnosis/repair.
- Homework / Revision — retrieval and checking.
- Epic Paste Assists / Glossary / Resources — reference.

## v3.62.0 consolidation

This release:

- makes global search understand **LEARN / PATH / BUILD / FULL WORKFLOW / STUDY / SUPPORT**;
- validates internal search destinations before showing them;
- deduplicates same-destination search results;
- merges the separate **Unreal Designer** destination into **Designer Studio**;
- retires **Sculpt Playground** from the student curriculum while preserving legacy-route compatibility;
- keeps the nine Blueprint Foundations labs inside their Guided Path rather than surfacing them as nine extra Quick Tutorials;
- points Landscape and Sequencer Master Guides back to canonical Designer Studio disciplines;
- makes Homework explicitly retrieval/application rather than another source of teaching;
- clarifies the 3D ladder: Foundations → Max lessons → support videos → Build X → repair;
- removes legacy version/progress-gamification chrome from the student UI;
- fixes the old text-corruption remnants created during the gamification cleanup.

## Adding something new

Use this order:

1. **New transferable idea?** Add/deepen the canonical Learn area.
2. **One small thing to make?** Quick Tutorial.
3. **Multi-stage cumulative sequence?** Path.
4. **Long start-to-finish technical workflow?** Master Guide.
5. **Portfolio/assessment-style outcome?** Level 4 / Build brief.
6. **Definition, video, snippet or repair aid?** Support.
7. **Homework/revision?** Point it back to something that already exists.

If an existing page already teaches the idea well, **link to it rather than rewriting it**.

## Core files

- `app.js` — rendering, routing and global search.
- `data/course-data.js` — Unreal Core Lessons.
- `data/building-block-data.js` — short Unreal support.
- `data/tutorial-data.js` — practical tutorial families.
- `data/design-data.js` — Designer Studio.
- `data/theory-data.js` — Game Design Theory.
- `data/modeling-foundations-data.js` — 3D judgement/foundations.
- `data/modeling-data.js` — 3ds Max lessons, Build X and repair.
- `data/programmer-skill-mission.js` — Blueprint Programmer Path.
- `data/cpp-skill-missions.js` — Unreal C++ Path.
- `data/level4-specialist-projects.js` — Level 4 briefs.
- `data/content-architecture.js` — runtime content-role metadata.

## Compatibility

Some retired data/rendering code remains temporarily so old bookmarks and saved progress do not fail. Retired areas should not be used as homes for new content.

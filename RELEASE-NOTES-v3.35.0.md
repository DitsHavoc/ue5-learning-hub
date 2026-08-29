# v3.35.0 — Designer Studio Rebuild

## Designer Studio is now a design course, not a gallery of UE5 recipes

v3.35.0 keeps the eight established Designer Studio disciplines, but rebuilds how students learn through them. The aim is to move from vague advice such as “make the scene readable” toward a repeatable design process built around observation, research, constrained practice, testing and revision.

The new student loop is:

**LOOK → STEAL THE PRINCIPLE → RESEARCH → BUILD → BREAK + TEST → IMPROVE**

The existing Studio Build then acts as the larger application task. Completing it reveals a hidden **Black Box brief** that removes a crutch or introduces a constraint, forcing the student to prove that the design decision still works.

## What changed

- Retained all **8 Designer disciplines** and their existing completion identities.
- Retained all **47 Designer-owned Quick Tutorials**, plus the existing shared Silent Hill fog recipe used by Lighting.
- Added **24 real-game case studies** — three per discipline — using source-linked reference imagery from real shipped games and developer/publisher sources.
- Added **16 field research missions** — two per discipline — designed to make students collect, compare and annotate examples themselves rather than only read the Hub.
- Added **24 constraint challenges** — three per discipline — plus a cross-discipline **Design Roulette** on the Designer Studio landing page.
- Added **8 hidden Black Box briefs**, one per discipline. They remain locked until that discipline's existing Studio Build is completed.
- Rewrote **53 Studio Build phase instructions** to state the actual design decision, observation or test students must perform. The old generic “use the relevant Unreal panel” style of instruction is gone.
- Every one of the **47 Designer-owned recipes now has at least one game/design target reference** where an outcome reference is useful.
- Added professional/developer reading links throughout the modules so students can move from the Hub into stronger real-world breakdowns.

## Real-game reference pool

The case-study pool deliberately uses different games to demonstrate different jobs rather than repeatedly using a single “good looking” screenshot. Examples include:

- **CONTROL** — spatial hierarchy, brutalist scale, material/lighting language.
- **INSIDE** — silhouette, value structure, restraint and player guidance.
- **Death Stranding** — terrain readability, landmarks, traversal and scale.
- **Dead Space** — environmental storytelling, diegetic information, tension and audio.
- **Alan Wake 2** — lighting, composition, atmosphere and cinematic framing.
- **Horizon Forbidden West** — traversal readability, environmental puzzle design, world art and authored procedural detail.
- **Elden Ring** — landmark hierarchy, long-distance composition and exploration pull.

References remain source-linked. They are used as design targets and analysis material, not as Unreal UI instructions.

## Module structure

Each discipline now follows the same classroom-friendly sequence:

1. **Real Game Case Studies** — three examples with a specific design lens, what to notice, what principle to steal and a two-minute analysis task.
2. **Field Research** — two short research missions with a defined evidence output.
3. **Transferable Principles** — the existing deeper design knowledge, now placed after observation/research so it answers something the student has already noticed.
4. **Professional Breakdown Resources** — developer and level-design reading selected for that discipline.
5. **UE5 Recipes** — practical implementation tools, kept as tools rather than treated as the whole design course.
6. **Constraint Challenge Deck** — three short challenges that force a design decision rather than encourage decoration.
7. **Studio Build** — the larger existing practical task, rewritten with clearer phases and tests.
8. **Black Box Brief** — hidden until the Studio Build is complete, then used as the transfer/improvement task.

## Completion and database behaviour

No database migration is required.

The rebuild deliberately preserves existing recipe IDs and Studio Build IDs, so current completion data remains valid. Black Box visibility is derived from the existing Studio Build completion state; it does not add a new database table or progress type.

## Imagery policy

Designer Studio is allowed a broader visual reference pool than the technical Unreal Learning area. Real-game screenshots and developer/publisher imagery are used where the learning goal is composition, pacing, readability, storytelling, terrain, lighting, cinematic language, sound intent or polish. Epic imagery remains the source for current Unreal UI/workflow instructions.

No AI-generated imagery was added.

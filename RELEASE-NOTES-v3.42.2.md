# UE5 Learning Hub v3.42.2 — Designer Practical Clarity

## Why this release exists
The Designer Studio theory, real-game analysis and professional references were strong, but too many practical Quick Tutorials still read like compressed design prompts. A beginner could understand the principle and still not know what to physically build, where to work, what values to start with or how to tell whether the exercise had succeeded.

v3.42.2 fixes the practical layer without removing the theory.

## Scope
- Audited all **47 native Designer Studio Quick Tutorials**.
- Rebuilt/refined all **268 native practical steps** to the same beginner-facing instruction standard.
- Verified all **48 practical cards** exposed by the eight Designer Studio modules resolve correctly: 47 native Designer recipes plus the shared **Make Silent Hill-style Fog** Quick Tutorial, which already uses the detailed prescriptive recipe format and starter values.
- Preserved all tutorial IDs, module IDs, completion keys, XP behaviour and Guided Path references.

## New practical standard
Designer recipes now teach a controlled first version before asking for judgement or originality. A step must tell the learner:

- **WHERE TO WORK** — the editor/viewport/panel or test position.
- **DO THIS** — the concrete action and a known-good starter value when one is useful.
- **YOU SHOULD SEE** — the observable result before continuing.
- **WHY** — the transferable design reason for the step.
- **TEST / CHECK** — a repeatable proof that the design works from the relevant player/diagnostic view.
- **IF STUCK** — recovery advice specific to that step.

After the controlled build, **Make It Yours** deliberately fades the scaffold and asks the student to change a design decision.

## Areas covered
### Level Design Foundations
Greyboxing, player scale/metrics, focal points, route readability, decision points and spatial pacing now use measurable blockouts, fixed starting dimensions and silent player tests.

### Environment Art & Set Dressing
Set dressing, prop clusters, decals, modular kits, environmental storytelling and hero assets now specify object counts, grouping logic, working distances, before/after checks and readability tests.

### Materials & Surfaces
PBR basics, Material Instances, wet surfaces, emissive screens, material-cost checks and translucency tests now use controlled comparison meshes, named parameters, known starting values and diagnostic checks.

### Lighting & Atmosphere
Three-point room lighting, horror lighting, Post Process work, Lumen mood passes and time-of-day contrast now begin from a readable baseline and require matched before/after/player-view tests. The shared Silent Hill fog tutorial retains its detailed starter-value recipe.

### Landscape, Terrain & Foliage
Landscape creation, playable terrain, material layers, foliage paths, PCG route protection and weather readability now make route width, player/camera testing and exclusion/readability checks explicit.

### Sequencer & Cutscenes
First shots, camera cuts, reveal shots, triggered sequences, lens language and adaptive cutscenes now give concrete frame ranges, shot roles, test timings and handoff/failure checks.

### Audio & Sound Design
Ambient beds, attenuation, randomised cues, reverb, off-screen storytelling and MetaSound wind now provide specific starting levels/radii/ranges and listening positions instead of vague “adjust until it works” instructions.

### Polish, Optimisation & Presentation
Scene polish, performance view modes, LOD/Nanite decisions, portfolio framing, profile→fix→retest and project hygiene now require repeatable before/after evidence and one isolated change at a time.

## Three key rewrites
**Make a Route Read Without Arrows** now builds a controlled 600 cm approach into two 300 cm openings, deliberately creates ambiguity, establishes the real route through visible depth/continuity/landmark cues, closes the false route honestly and runs a silent route test.

**Design a Clear Decision Point** now constructs a three-way choice with fixed route roles: progression, optional reward and visibly blocked route. Students test interpretation, change the weakest cue and re-test.

**Create Pacing with Space** now builds a measurable compression → delayed reveal → release sequence using a 300 cm × 280 cm × 750 cm corridor and a 1200 × 1000 cm room with a 550 cm ceiling, then compares it against a deliberately weakened version.

## UI correction
Designer recipes no longer introduce every task as **“A small working mechanic.”** They render as **DESIGN TESTS** and use **Design → Test → Revise** language, while programming Quick Tutorials keep their mechanic-focused wording.

## Compatibility / tracking
- No Designer tutorial ID was renamed.
- No module ID changed.
- No progress/completion key changed.
- No XP value changed.
- Guided Paths still resolve to the same tutorial IDs.
- `backend.js` and every migration are unchanged.
- **No Supabase migration is required.**

## QA
Final automated/static QA passed **2,695 assertions**, including:
- 47 native Designer tutorials / 268 native steps.
- all required step fields present.
- 48/48 Designer module practical-card references resolving.
- the shared Silent Hill fog practical retaining its prescriptive starter recipe.
- tutorial IDs/order preserved against v3.42.1.
- Designer module definitions unchanged.
- Guided Path tutorial references resolving, including Route Readability, Decision Point and Spatial Pacing.
- only the intended eight release files differing from v3.42.1.
- syntax checks for `app.js`, `backend.js` and all 15 data JS files.
- v3.42.2 cache/version references present.

A container browser smoke test was attempted, but local/file navigation is blocked by the environment administrator policy, so this release does **not** claim a visual browser test. Perform the short live spot-check after Render redeploys.

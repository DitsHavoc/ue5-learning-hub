# Mini-Project Mayhem — teacher launch notes
**Second-year Games Development** · **Monday 2 to Friday 13 November 2026** · **Pairs: programmer + artist/designer**

## Purpose
Turn one existing UE5 Mini-Project into a complete 2–5 minute original game. This is a low-pressure two-week studio challenge, not a large assessed production brief. Use the student-facing site route **Build → Mini-Projects → Mini-Project Mayhem** (`#/mini-projects/jam`).

## Launch session (around 100 minutes)
- 0–10 min — explain challenge, four starting tutorials, rules, awards.
- 10–20 min — form pairs and decide who will programme and who will lead art/design.
- 20–30 min — pick a foundation and agree a one-sentence game idea.
- 30–80 min — programmer begins the guided build; artist/designer sketches the visual direction and prepares the first asset/UI concept. At least one exported test asset should be transferred through Teams.
- 80–95 min — pairs show one thing that works and state the gameplay extension they will attempt.
- 95–100 min — back up the Unreal project and agree next-session tasks.

## Teacher checkpoints
- **Friday 6 November:** original mechanic functional; new gameplay idea demonstrated, possibly with placeholders; one custom art/design asset ready.
- **Thursday 12 November:** end-to-end playable loop, clear objective, assets integrated; test another pair's project and prioritise bug fixes.
- **Friday 13 November:** 2–5 minute demo, before/after comparison, peer voting and informal awards.

## Revised game loops (v3.65.1 — Unreal Engine 5.8)
The original Mini-Projects are foundations, not finished games. Do **not** require every pair to complete all four tutorials or every optional upgrade. After completing one tutorial, follow the **Essential** steps in its own upgrade route before attempting Creative tasks.

- **Balloon Popper:** score → random five-target respawning → 60-second timer/HUD → final score and Play Again → optional random danger targets.
- **Bowling:** pin-scoring → root mesh and ball reset between three throws, preserving fallen pins and score → live HUD/bonus pin → optional Q/E power control. The earlier 45-second limit has been removed from the main bowling route.
- **Clicker:** manual shop → live balance → Granny automation → Granny training → optional lifetime milestone and Farms. Use **one** GameMode production timer and keep spendable balance separate from lifetime earnings.
- **Loops & Spawning:** five clickable targets → waves of 5, 6, 7, 8, 9 targets → overall 90-second race/HUD/replay → optional random spawn volume.

Each new upgrade stage contains precise Blueprint nodes/actions, a designer task, a concrete test and troubleshooting. The text guides do **not** replace or edit the original illustrated source tutorials.

### Practical scope
Aim for a working original tutorial and **two or three Essential upgrades** before final polish. Fast students can progress further; a small complete game is better than every optional system half-built. Students use separate PCs, share exported art through Teams, and the programmer owns the live Unreal project.

**Testing note:** GitHub browser/content checks validate the website and route structure, **not** the actual UE5 Blueprint logic. Exercise the tutorials in the college engine before treating their code paths as instructor-verified.

## Suggested project extensions
- Balloon Popper → timer, combo/streak, hazards or moving balloons.
- Loops & Spawning → waves, survival pressure, patterned hazards or spawn variations.
- Bowling → rounds, scoring, obstacles or moving targets.
- Clicker → upgrades, limited-time goals, score targets or a small shop.

## Non-negotiables
Complete a starter tutorial first. One environment, one core mechanic, one meaningful gameplay extension, an original visual identity, a clear goal and finish state. Reskins alone do not satisfy the extension.

## Workflow (avoid Unreal collaboration headaches)
**Only the programmer edits the live Unreal project.** Keep it locally, not in a Teams-sync directory. Artist/designer works on a separate PC using 3ds Max / Photoshop / Substance Painter, exports FBX and PNG/TGA to a shared Teams folder; programmer imports or reimports into Unreal. Back up after each session to approved college storage. Artists also lead level readability, UI design and playtesting, rather than serving as asset factories.

## Showcase and evidence
One playable Windows build (or reliable in-editor demo where packaging is blocked), an original student asset/UI, and brief before/after evidence. One short team handover: roles, what changed, one possible improvement. Collect formal files in Teams, not in the Learning Hub.

## Awards
Best Gameplay · Best Visual Design · Most Original · Players’ Choice.

## Site placement / QA
Canonical owner: **Build → Mini-Projects**, reusing its four source tutorials (no copied guided stages, no extra main navigation tab). Audience: second-year students who can follow a starter UE5 tutorial; next learning step: refine the chosen Mini-Project and test a complete gameplay loop. Search phrase: `Mini-Project Mayhem`. Browser QA: desktop and mobile routes, all four tutorial links and no horizontal overflow. No modifications to existing completion keys or stage IDs.

## Student-usability pass (v3.66.0)
The 16 original illustrated Mini-Project tutorials and their saved-progress IDs remain untouched. Each optional upgrade now opens with the exact state that should already work, and expands complex Blueprint operations into smaller steps with immediate checks. Common mistakes are visible in the final test troubleshooting section. Upgrades reuse the **original** names: Bowling `IA_Bowl` and `Bowl` custom event; Clicker `BP_ClickerGameMode`.

Suggested classroom method: before each upgrade, students run the prior project, back it up, and check the prerequisite. Then they follow one Blueprint action and verify the stated check before continuing. For Balloon Popper, prove five spawns before removing old placed balloons. For Bowling, confirm pin scoring and Model root/aiming before introducing reset. For Clicker, disconnect the old +1 nodes to avoid doubled scores; test one Granny with Print String before designing its UI. For Loops, copy the working spawn graph, then replace BeginPlay only after the new StartWave function works.

The website regression suite checks rendered pages, routes, original stage progress and expanded content. **UE5.8 Blueprint execution is still not tested in the actual editor.**

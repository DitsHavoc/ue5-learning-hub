# Mini-Project Mayhem — teacher launch notes
**Second-year Games Development** · **Monday 2 to Friday 13 November 2026** · **Pairs or solo: programmer + artist/designer roles**

## Purpose
Turn one existing UE5 Mini-Project into a short, replayable original game (or a repeatable Clicker progression loop). The final showcase demo lasts 2–5 minutes. This is a low-pressure two-week studio challenge, not a large assessed production brief. Use the student-facing site route **Build → Mini-Projects → Mini-Project Mayhem** (`#/mini-projects/jam`).

## Launch session (100 minutes) — research BEFORE making
- 0–10 min — explain the jam, four Mini-Project starters, pair/solo roles and the two-week scope. Both students open **Build → Mini-Projects → Mini-Project Mayhem → Artist & Game Designer Track**.
- 10–30 min — **together**, research two similar games by playing or watching examples. Note the controls, repeatable loop, progress, feedback and relevant visual choices. Save names/links.
- 30–55 min — **together**, break the game into systems, UI and assets. Mark Essential versus Optional. Show the worked Clicker example: click → points → shop → automatic income; distinguish programmer logic from designer graphics.
- 55–75 min — agree a provisional starter (or shortlist two), one manageable gameplay improvement, Must Have/Could Add/Not Now features and ONE labelled screen sketch. No polished art or backstory.
- 75–100 min — split into programmer (first three build actions) and designer (up to three visuals/UI items) checklists. Rejoin for a five-minute handover and save the plan in Teams. The game theme can remain undecided.

**Session 1 outcome:** a two-game comparison, essentials breakdown, labelled screen sketch and role handover. The programmer does not need to rush into Unreal before the plan is useful. A solo student researches one example and prepares smaller combined checklists.

**Session 2:** the designer follows Mission 2 (two visual styles, one transparent PNG icon or simple FBX test asset, compare readability and export). The programmer begins the original Mini-Project tutorial and progresses towards the first Essential upgrade. Only **after** they have seen the working mechanic should the pair settle on a one-sentence concept in Mission 3. No student should spend the first two lessons inventing a giant story or polishing assets that may be thrown away.

## Teacher checkpoints
- **Friday 6 November:** original mechanic functional; new gameplay idea demonstrated, possibly with placeholders; one custom art/design asset ready.
- **Thursday 12 November:** end-to-end playable loop, clear objective, assets integrated; test another pair's project and prioritise bug fixes.
- **Friday 13 November:** 2–5 minute demo, before/after comparison, peer voting and informal awards.

## Revised game loops (v3.65.1 — Unreal Engine 5.8)
The original Mini-Projects are foundations, not finished games. Do **not** require every pair to complete all four tutorials or every optional upgrade. After completing one tutorial, follow the **Essential** steps in its own upgrade route before attempting Creative tasks.

- **Balloon Popper:** score → random five-target respawning → 60-second timer/HUD → final score and Play Again → optional random danger targets.
- **Bowling:** pin-scoring → root mesh and ball reset between three throws, preserving fallen pins and score → live HUD/bonus pin → optional Q/E power control. The earlier 45-second limit has been removed from the main bowling route.
- **Clicker:** manual shop → live balance → Granny automation → Granny training → optional lifetime milestone and Farms. Use **one** GameMode production timer and keep spendable balance separate from lifetime earnings.
- **Loops & Spawning:** five clickable targets → waves of 5, 6, 7, 8, 9 targets → overall 90-second race/HUD/replay → optional safe random offsets in each grid cell.

Each new upgrade stage contains precise Blueprint nodes/actions, a designer task, a concrete test and troubleshooting. The text guides do **not** replace or edit the original illustrated source tutorials.

### Practical scope
Aim for a working original tutorial and **two or three Essential upgrades by the prototype checkpoint**, then finish the clearly marked **Minimum Playable Game** milestone during Week 2 (all three essentials for Bowling, Clicker and Loops; the four essentials through Play Again for Balloon Popper). Fast students can progress further; a small complete game is better than optional systems half-built. Students use separate PCs, share exported art through Teams, and the programmer owns the live Unreal project.

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

## Final student walk-through corrections (v3.66.1)
The **original Mini-Projects remain unchanged**. Critical alignment: the original ClickerGameUI main ClickerButton uses `Assign On Clicked` **inside `BP_ClickerGameMode`**, where its score event already calls `ClickerUI.SetScoreText`. The upgrades now retain that event, replace the old +1 with `AddClick`, and only then replace `SetScoreText` with the widget's `RefreshShop` function. Only NEW shop buttons use widget-local `OnClicked`. This avoids doubled click handlers.

In Bowling, the source `Bowl` event uses `Add Force` on `Model`, with **X=200000 and Accel Change enabled**. The optional power upgrade now uses `Strength` as the X component of a `Make Vector` connected to `Add Force`. It keeps the original 200000 value until adjustable power is connected so a half-completed upgrade never disables the throw. In Loops, create `Cam_TargetRush` and use `Set View Target with Blend` from `BP_LoopsPlayerController`; this keeps clicking targets in a fixed, visible scene.

Student instruction check: complete the original tutorial, verify the prerequisite on the upgrade page, change and test one connection at a time, and retain the last working project backup. Site tests do not compile the exercises in Unreal Engine 5.8.

## Individual Clicker learner review (v3.66.2)
This is an extension-only edit. The original three Clicker Mini-Project stages, notes, assets and completion history are unchanged. Stage 1 retains the original main-button event in `BP_ClickerGameMode`, Stage 2 replaces the old UI update with one `RefreshShop` function and explicit `Format Text` labels, and Stage 3 teaches the new Granny purchase and labels before the passive-income timer. This removes an impossible test (checking passive Granny income before any Granny could be purchased).

UE5.8 guidance: `GetProductionPerSecond` must have the **Pure** option ticked and an Integer output named `Production`; `GainPoints` increases both spendable `Score` and `TotalEarned`. Test with one Granny and a temporary `Print String`; it should rise 1/sec. Use one production timer in GameMode and a separate 0.25-second HUD refresh in the Widget. Do not create a timer per Granny. Testing optional lifetime milestones at a low value must restore both the 500-point target and the banner text. All upgrade stages retain the minimum-playable milestone after Granny automation.

## Individual Bowling learner review (v3.66.3)
Only the follow-on Bowling upgrade guide has changed. The original five illustrated Bowling stages, screenshots, files and completion progress remain untouched.

- Verify the ACTUAL number of BP_BowlingPin actors in BowlingLevel before assigning GoalPins. Test Model Get Up Vector · world Z ≈ 1 while a pin is upright; make sure Counted prevents Event Tick awarding repeated points.
- Use the original BowlingInputs / IA_Bowl and BP_BowlingPlayerController.BowlingBall object reference, not new duplicate input or Actor objects.
- The bowling ball Model must be the Actor root for the demonstrated UE5.8 Set Simulate Physics → Set Actor Transform → Set Simulate Physics reset chain. The ResetBall event itself is not yet testable until FinishThrow calls it.
- After IA_Bowl Started, the controller uses a guard for RoundFinished, IsBallInMotion and ThrowsUsed<MaxThrows. Delay(4.0) after the Bowl call triggers a CALL to FinishThrow. Check two resets with at least one pin remaining. If ALL pins tip early, it correctly ends immediately, so restart to test repeated throws.
- UMG HUD Text binding functions must wire white execution Entry → Cast → Return; Format Text retains "Score:", "Pins down:" and "Throws left:" labels. The result display uses one Custom Event RefreshBowlingResult bound to a 0.25-second UMG timer, and keyboard R reloads the level.
- The optional shot-power upgrade still uses the ORIGINAL Bowl Add Force(X=200000) on Model with Accel Change ticked, and uses Q/E inside BowlingInputs.

Browser and content validation verify the website routes and instruction structure. They do not physically compile or playtest the Blueprint instructions in UE5.8.

## Individual Balloon Popper student review (v3.66.4)
Only the Balloon Popper **upgrade** guide changed. Original five illustrated Balloon Popper stages, assets, routes and saved progress remain untouched.

- Start in the exact original folder **Content/Balloon Popper** and map **Balloon Popper Level**, with the original BP_Balloon PopScale growth logic. Call BP_BalloonGameMode.AwardPoints(+1) only when the original pop Branch is True and BEFORE Destroy Actor.
- Make one BP_BalloonSpawner with an unrotated, non-colliding SpawnArea box. Its function uses Random Point in Bounding Box (Center + Half Size) to Spawn Actor from Class. Place exactly ONE spawner in the map, prove five new balloons appear, THEN delete the original hand-placed balloons. Each pop requests one replacement before destroying itself.
- In BP_BalloonGameMode use a single 1-second countdown timer, RoundEnded gate for AwardPoints, and block future BP_Balloon.On Actor Clicked actions when the timer reaches zero. WBP_BalloonHUD uses Score and Time bindings with **Format Text** labels, root Canvas **Not Hit-Testable (Self Only)** and a BP_BalloonPlayerController using **Game and UI** input so ordinary balloons and later ReplayButton remain clickable.
- For the results, reuse the one WBP_BalloonHUD, use a single 0.25-second widget timer calling RefreshRoundScreen, show a final Score and button that reopens the CURRENT level. Temporarily set SecondsLeft=5 for tests, then restore 60.
- The original M_Balloon is already **red**, so the optional M_DangerBalloon must be a distinct **purple/blue** (prefer a warning symbol/texture too); its mesh is named **BalloonModel**. Danger AwardPoints(-2) uses the same clamp and single replacement path as normal balloons.
- Browser/content checks validate instructional structure and routes, **not** physical Blueprint compilation in UE5.8.

## Individual Loops & Spawning student review (v3.66.5)
This final individual walkthrough changes only the upgrade routes. The original three illustrated Loops tutorials, `BP_Box` source, screenshots, and progress IDs remain untouched.

- **Stage 1:** The original `BP_Box` tower is physics-enabled. Keep it unchanged, make a separate stationary `BP_ClickTarget` with Simulate Physics **unchecked**, use the existing `BP_LoopsGameMode` `For Loop` but swap Spawn Actor Class, then add mouse events, `BP_LoopsPlayerController`, and a placed `Cam_TargetRush`. In this first step `TargetsLeft` is the remaining-target counter; `TargetsHit` comes next.
- **Stage 2:** Copy the original working spawn graph into `StartWave` before disconnecting old BeginPlay. Use local `CurrentWaveCount=4+WaveNumber`; `For Loop` lasts `CurrentWaveCount-1`, so waves have 5/6/7/8/9 targets. Grid maths: Column=(Index%3)-1, Row=Integer Divide(Index,3), X=200, Y=Column*180, Z=150+Row*130. For a temporary nine-target camera check, set `WaveNumber=5` then **restore 1**. Replace the stage-1 immediate-win path with `FinalWave` decision. The `HitTarget` function calls `ScheduleNextWave`, a Custom Event in GameMode Event Graph which uses one `Set Timer by Event` Time 0.75, Looping **false**, bound to `AdvanceWave`.
- **Stage 3:** One full-run `TickRush` countdown timer (90 seconds), not one timer per wave. `AdvanceWave` must guard `NOT Finished` to avoid spawning after timeout. `WBP_TargetRushHUD` displays four formatted, labelled values: Wave, Targets, Time and Hits, without intercepting 3D clicks; one widget result-refresh event distinguishes win and timeout. In the same original Player Controller, enable `IMC_TargetRush`, map R to reload the current level, and preserve the fixed camera. Briefly test a 5-second failure, then **restore 90** and clear all 35 targets to prove a successful run.
- **Stage 4 (optional):** New players no longer need to invent a second unrestricted spawn-area Actor. Keep one target per existing grid cell; use small independent `Random Float in Range` offsets in Y (±20) and Z (±10). That adds replay variety without overlapping 100cm default cubes. If art targets grow larger, retune spacing and reframe the camera.

The three original Loops tutorials and images were NOT edited. Website CI verifies content, routes and interaction, not Unreal Editor Blueprint graph compilation or gameplay physics.

## Final across-all-four learning flow review (v3.66.6)
The four source Mini-Project tutorials and their images/steps/progress keys are unchanged. All four upgrade paths were reviewed individually and then together against the two-week jam brief. The intended deliverable is a complete short round or repeatable progression loop, not necessarily a 2–5-minute fixed-length game; **2–5 minutes is the planned showcase demo time**, and a 60/90-second round is valid.

**Minimum playable milestones**
- **Clicker:** after Granny stage — original click, shop, visible balance, buy Grannies, 1/sec automation.
- **Bowling:** after HUD/polish — score counted pins, three throws with ball-only reset, final result and R restart.
- **Balloon Popper:** after Results stage (not only Timer) — +1 scoring, five replacement balloons, 60-second HUD, frozen result and clickable Play Again. Treat the earlier Timer stage as the *working timed prototype*, not a finished replayable game.
- **Loops:** after Race stage — five waves (5+6+7+8+9=35), timer, visible counters, win/timeout and R restart.

**Danger balloon simplification:** In `SpawnOneBalloon`, a pure `Random Float in Range (0..1) <= 0.2` Boolean drives **Select** with False=`BP_Balloon`, True=`BP_DangerBalloon`, and its Class output feeds the original SINGLE `Spawn Actor From Class`. No `SelectedBalloonClass` variable, merged branch exec pins, or duplicate Spawn Actor nodes. Quick deterministic test: threshold 1.0 (all danger), -1.0 (all normal), then restore 0.2. The original red material is not itself a danger identifier.

**Five-minute teacher smoke-check at the start of the practical**
1. Clicker: main button still scores once; the 10-point manual upgrade increases click power; buy one 15-point Granny and verify +1/sec with no extra clicks.
2. Bowling: upright pin does not score; a knocked pin adds one point only once; first ball resets without resetting the pins; R reloads the level.
3. Balloon Popper: pop one target, score adds one, exactly five remain; let a short 5-second test expire; final score and Play Again work.
4. Loops: five stationary clickable targets spawn; clearing wave 1 starts one wave of six; a 5-second test ends with no new wave; R reloads.
Restore all debug defaults, especially 60-second and 90-second clocks, before students use the project. These are *recommended real-editor tests*, not tests executed by website CI.

All site checks validate route/rendered content consistency, not actual Unreal Engine 5.8 Blueprint compilation or the resulting physics.

## Full parallel Artist & Game Designer Track (v3.66.7)
Canonical student route: **Build → Mini-Projects → Mini-Project Mayhem → Artist & Game Designer Track** (`#/mini-projects/jam/designer`). Each of the 19 upgrade pages links directly to a project-specific focused route, such as `#/mini-projects/jam/designer/clicker`. It is a single track belonging to the jam, NOT a new top-level navigation category and not another copy of the source mini-projects.

The designer has six studio missions. Sessions **1–2 do not require a chosen concept**: (1) both roles research two similar games, break down essential systems/assets, sketch one labelled game screen and make next-step checklists; (2) the designer builds two contrasting looks, exports one usable transparent PNG/FBX test asset and compares with classmates. In the third mission, once the programmer's original game/first upgrade is demonstrated, choose a feasible direction and limit the initial art list to three items. Then create/revise one integrated original asset; make readable HUD and visual-feedback work; own player testing, fixes and the final showcase explanation. Each mission names software/location, exact actions, a visible check, evidence, a short Teams handover and a lighter solo alternative.

Every game also has a four-step **specific kit**:
- **Clicker:** themed main-click object (PNG), shop/Granny graphics, readable costs and passive production. Do not duplicate `ClickerGameUI`.
- **Balloon Popper:** distinct balloon symbol/texture, score/time/play-again layout, readability and optionally danger contrast. Protect target click traces.
- **Bowling:** one original ball/bonus-pin material, readable Score/Pins/Throws and level contrast. Protect ball/pin physics.
- **Loops:** readable target mesh/face, HUD with Wave/Targets/Time/Hits and safe visible target grid. Preserve `BP_ClickTarget` click collision.

**Handover convention:** in Teams create `Designer Pack/01_Research`, `02_Concepts`, `03_Exports`, `04_Testing`. Export PNG/TGA and optional FBX; keep PSD/MAX originals. The programmer owns local Unreal, imports a COPY and tests, sending a screenshot or specific feedback. Designer revises one priority issue before creating optional decorative content. Do not let both students edit a synced `.uproject`.

**Solo scaling:** the solo student does one observation/thumbnail, one original simple graphic/material, and one playtest fix; they still complete the programmer's minimum playable game. They are not expected to match the asset quantity of two people.

**Teacher quality gates:** ask for two real game examples, an Essential/Optional breakdown, a labelled screen sketch and shared role handover at the end of Session 1, rather than a final theme; a test export + comparative feedback in Session 2; one chosen screen mock-up and first asset handover after the starter works; one integrated screenshot by Week 1/early Week 2; a fresh-player test and a before/after image before showcase. Artwork is credited and demonstrably student-created, and results are stored in Teams, not tracked by the site.

Only the new jam/designer content, rendering, validation, browser tests, notes and version strings should change; the original source lessons and all existing 19 programmer upgrade stage contents/IDs and progress keys remain untouched.

## Session 1 shared research revision (1 November 2026)
Both programmer and designer now research and break down similar games before starting their specialist work. This changes only the first designer mission and the jam launch guidance; missions 2–6, all four designer kits, the 19 upgrade stages and the 16 original Mini-Project tutorials remain unchanged. A final theme is still not required in the first two sessions.

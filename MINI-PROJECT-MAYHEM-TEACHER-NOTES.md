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
- **Loops & Spawning:** five clickable targets → waves of 5, 6, 7, 8, 9 targets → overall 90-second race/HUD/replay → optional safe random offsets in each grid cell.

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

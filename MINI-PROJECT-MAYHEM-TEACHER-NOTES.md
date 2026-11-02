# Mini-Project Mayhem — teacher launch notes
**Second-year Games Development** · **Monday 2 to Friday 13 November 2026** · **Pairs or solo: programmer + artist/designer roles**

## Purpose
Turn one existing UE5 Mini-Project into a short, replayable original game (or a repeatable Clicker progression loop). The final showcase demo lasts 2–5 minutes. This is a low-pressure two-week studio challenge, not a large assessed production brief. Use the student-facing site route **Build → Mini-Projects → Mini-Project Mayhem** (`#/mini-projects/jam`).

## Launch session (100 minutes) — research BEFORE making
- 0–10 min — explain the jam, four Mini-Project starters, pair/solo roles and the two-week scope. Both students open **Build → Mini-Projects → Mini-Project Mayhem** and begin shared research.
- 10–30 min — **together**, research two similar games by playing or watching examples. Note the controls, repeatable loop, progress, feedback and relevant visual choices. Save names/links.
- 30–55 min — **together**, break the game into systems, UI and assets. Mark Essential versus Optional. Show the worked Clicker example: click → points → shop → automatic income; distinguish programmer logic from designer graphics.
- 55–75 min — agree a provisional starter (or shortlist two), one manageable gameplay improvement, Must Have/Could Add/Not Now features and ONE labelled screen sketch. No polished art or backstory.
- 75–100 min — split into programmer (first three build actions) and designer (up to three visuals/UI items) checklists. Rejoin for a five-minute handover and save the plan in Teams. The game theme can remain undecided.

**Session 1 outcome:** a two-game comparison, essentials breakdown, labelled screen sketch and role handover. The programmer does not need to rush into Unreal before the plan is useful. A solo student researches one example and prepares smaller combined checklists.

**Session 2:** the programmer starts the original Mini-Project tutorial and progresses towards the first Essential upgrade. You can give the artist/designer a short class task to explore styles, create an original icon or model, or test the UI. The pair should choose a final game idea once the working mechanic is clear. Avoid a giant story or polished assets that may be discarded.

## Teacher checkpoints
- **Friday 6 November:** original mechanic functional; new gameplay idea demonstrated, possibly with placeholders; one custom art/design asset ready.
- **Thursday 12 November:** end-to-end playable loop, clear objective, assets integrated; test another pair's project and prioritise bug fixes.
- **Friday 13 November:** 2–5 minute demo, before/after comparison, peer voting and informal awards.

## Revised game loops (v3.65.1 — Unreal Engine 5.8)
The original Mini-Projects are foundations, not finished games. Do **not** require every pair to complete all four tutorials or every optional upgrade. After completing one tutorial, follow the **Essential** steps in its own upgrade route before attempting Creative tasks.

- **Balloon Popper:** score → random five-target respawning → 60-second timer/HUD → final score and Play Again → optional random danger targets.
- **Bowling:** pin-scoring → root mesh and ball reset between three throws, preserving fallen pins and score → live HUD/bonus pin → optional Q/E power control. The earlier 45-second limit has been removed from the main bowling route.
- **Clicker:** manual shop → live balance → Granny automation → Granny training → optional lifetime milestone and Farms. Use **one** GameMode production timer and keep spendable balance separate from lifetime earnings.
- **Loops & Spawning → Rising Defence:** fixed-camera mouse blaster uses Convert Mouse Location To World Space → Line Trace By Channel → BP_RisingBlock. Random free-lane spawns every 1.5s; blocks grow upwards and lose if any reaches the visible 450cm red line. Survive 60 seconds with Hits HUD and R restart. Optional fast red threats and visual polish.

Each new upgrade stage contains precise Blueprint nodes/actions, a designer task, a concrete test and troubleshooting. The text guides do **not** replace or edit the original illustrated source tutorials.

### Practical scope
Aim for a working original tutorial and **two or three Essential upgrades by the prototype checkpoint**, then finish the clearly marked **Minimum Playable Game** milestone during Week 2 (all three essentials for Bowling, Clicker and Loops; the four essentials through Play Again for Balloon Popper). Fast students can progress further; a small complete game is better than optional systems half-built. Students use separate PCs, share exported art through Teams, and the programmer owns the live Unreal project.

**Testing note:** GitHub browser/content checks validate the website and route structure, **not** the actual UE5 Blueprint logic. Exercise the tutorials in the college engine before treating their code paths as instructor-verified.

## Suggested project extensions
- Balloon Popper → timer, combo/streak, hazards or moving balloons.
- Loops & Spawning → Rising Defence: random growing threats, gun raycast, danger-height fail state and 60-second victory; optional fast red threats or themed sci-fi turret/anti-virus defence.
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

Suggested classroom method: before each upgrade, students run the prior project, back it up, and check the prerequisite. Then they follow one Blueprint action and verify the stated check before continuing. For Balloon Popper, prove five spawns before removing old placed balloons. For Bowling, confirm pin scoring and Model root/aiming before introducing reset. For Clicker, disconnect the old +1 nodes to avoid doubled scores; test one Granny with Print String before designing its UI. For Loops, verify IA_RisingFire → Line Trace By Channel hits and removes a cube BEFORE introducing random rising targets; replace the old For Loop exec only when SpawnOneBlock is ready.

The website regression suite checks rendered pages, routes, original stage progress and expanded content. **UE5.8 Blueprint execution is still not tested in the actual editor.**

## Final student walk-through corrections (v3.66.1)
The **original Mini-Projects remain unchanged**. Critical alignment: the original ClickerGameUI main ClickerButton uses `Assign On Clicked` **inside `BP_ClickerGameMode`**, where its score event already calls `ClickerUI.SetScoreText`. The upgrades now retain that event, replace the old +1 with `AddClick`, and only then replace `SetScoreText` with the widget's `RefreshShop` function. Only NEW shop buttons use widget-local `OnClicked`. This avoids doubled click handlers.

In Bowling, the source `Bowl` event uses `Add Force` on `Model`, with **X=200000 and Accel Change enabled**. The optional power upgrade now uses `Strength` as the X component of a `Make Vector` connected to `Add Force`. It keeps the original 200000 value until adjustable power is connected so a half-completed upgrade never disables the throw. In Loops, create `Cam_RisingDefence` and use `Set View Target with Blend` from `BP_LoopsPlayerController`; line-trace shooting uses the same fixed view and mouse position.

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

## Final across-all-four learning flow review (v3.66.6)
The four source Mini-Project tutorials and their images/steps/progress keys are unchanged. All four upgrade paths were reviewed individually and then together against the two-week jam brief. The intended deliverable is a complete short round or repeatable progression loop, not necessarily a 2–5-minute fixed-length game; **2–5 minutes is the planned showcase demo time**, and a 60/90-second round is valid.

**Minimum playable milestones**
- **Clicker:** after Granny stage — original click, shop, visible balance, buy Grannies, 1/sec automation.
- **Bowling:** after HUD/polish — score counted pins, three throws with ball-only reset, final result and R restart.
- **Balloon Popper:** after Results stage (not only Timer) — +1 scoring, five replacement balloons, 60-second HUD, frozen result and clickable Play Again. Treat the earlier Timer stage as the *working timed prototype*, not a finished replayable game.
- **Loops:** after Rising Defence Survival stage — random rising blocks, line-trace blaster, 60-second win, breach-height loss, HUD and R restart.

**Danger balloon simplification:** In `SpawnOneBalloon`, a pure `Random Float in Range (0..1) <= 0.2` Boolean drives **Select** with False=`BP_Balloon`, True=`BP_DangerBalloon`, and its Class output feeds the original SINGLE `Spawn Actor From Class`. No `SelectedBalloonClass` variable, merged branch exec pins, or duplicate Spawn Actor nodes. Quick deterministic test: threshold 1.0 (all danger), -1.0 (all normal), then restore 0.2. The original red material is not itself a danger identifier.

**Five-minute teacher smoke-check at the start of the practical**
1. Clicker: main button still scores once; the 10-point manual upgrade increases click power; buy one 15-point Granny and verify +1/sec with no extra clicks.
2. Bowling: upright pin does not score; a knocked pin adds one point only once; first ball resets without resetting the pins; R reloads the level.
3. Balloon Popper: pop one target, score adds one, exactly five remain; let a short 5-second test expire; final score and Play Again work.
4. Loops: five blocks can be hit by the line-trace blaster, then random rising targets can be shot; one reaches the red bar to lose; a 5-second survival test wins; R reloads.
Restore all debug defaults, especially 60-second and 90-second clocks, before students use the project. These are *recommended real-editor tests*, not tests executed by website CI.

All site checks validate route/rendered content consistency, not actual Unreal Engine 5.8 Blueprint compilation or the resulting physics.

## Artist / designer work (teacher directed — 1 November 2026)
The separate Artist & Game Designer Track, its six missions, four art kits, and the per-upgrade parallel designer checklists have been removed from the student Learning Hub. Give designers instructions directly in class; keep the programmer's 19 guided upgrades and the original 16 tutorials intact.

Session 1 remains joint research and planning (similar games, mechanics/assets, a small screen sketch and role split). From Session 2, set manageable design work that is useful for the actual working game, such as one game asset, an understandable HUD and quick peer testing. Pairs share exports through Teams; the programmer alone edits the live Unreal project. Solo students do fewer assets and prioritise a working gameplay loop.


## 2 November 2026 — Rising Defence supersedes earlier Target Rush upgrades
The older 5-wave, ActorOnClicked Target Rush extension is replaced by a different **Rising Defence** progression. This is not a harmless cosmetic edit: students already using the old upgrade guide should BACK UP their UE5 project and deliberately start the new path from the beginning; the new progress IDs avoid accidentally showing old stages as complete. The original three Loops illustrated tutorials, source screenshot references and original BP_Box remain unchanged. The programmer's new work has three Essential stages (line-trace gun → random five-lane anchored growth + height failure → 60-second victory, HUD and restart) plus two optional stages (fast red blocks and feedback/polish). Other three Mini-Projects unchanged.

**First help-desk check:** IA_RisingFire Started must print PEW before debugging the shot. Then confirm Convert Mouse Location To World Space returns true and Line Trace By Channel hits BP_RisingBlock's Visibility-blocking BlockMesh. Stage 2 uses a FreeLanes Integer Array with Remove Index on spawn and Add Unique when shot, so targets never grow inside one another. Each block's mesh Scale Z=CurrentHeight/100 and relative Location Z=CurrentHeight/2, keeping it rooted at Z=0. Stage 3's single 60-second timer and one repeating spawn timer live in GameMode; one UI refresh timer lives in the HUD. Lose when any CurrentHeight reaches 450; win by surviving 60 seconds. The red line has NoCollision so it cannot intercept the shot.

**Scope:** for a two-week jam, the three Essential stages are the finished game. Artwork and fast-threat variants are not prerequisites. Site CI can only validate instruction structure and webpage UI, not actual Blueprint execution in Unreal Engine 5.8; an in-editor classroom smoke test remains necessary.

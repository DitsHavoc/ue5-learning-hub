# Minesweeper — complete-game teacher notes

**Platform:** Unreal Engine 5.8, Blueprint project. **Route:** Build → Mini-Projects → Build Minesweeper from scratch. URL `#/mini-projects/complete/minesweeper`.

This is a new **independent 6×6 complete game guide**, not a fifth original Mini-Project or a new Game Jam starter. Do not mark the sixteen original source practical stages complete on its behalf. It has its own progress in `ue5hub:minesweeper:v1`.

## Learning goals
- Understand the difference between a Widget Blueprint asset, a Widget control, a Blueprint Variable, a Function, a Custom Event and an Input/Output pin.
- Create 36 child widgets inside a Uniform Grid, store Widget object references and send a click with an integer index to one Board controller.
- Randomly place six distinct mines **after** the first left click, excluding its index (35 candidate indexes → Shuffle → first six).
- Count all eight neighbouring cells using safe row/column bounds, show numbered clues, right-click flags and a trackpad Flag Mode button.
- Use a pending integer queue for zero-region flood revealing; reveal all 30 safe cells to win; show mines on a loss.
- Run one clock per game, stop it on game over, and rebuild the same Widget on New Game without duplicate UI or timers.

## Stages (compulsory through 8)
1. Project/level and separate Board/Cell Widget assets.
2. Exactly 36 cells created through For Loop 0–35, integer division/modulus coordinates, two mouse buttons and an index Print String.
3. Six distinct random mine placements after first reveal, SafeIndex excluded.
4. IsMineAt (boundary safe), CountAdjacentMines (nested -1..1 loops), CalculateAllClues.
5. Cell visuals, safe reveal and mine-triggered loss.
6. Right-click flags, Flag Mode toggle, counter and preventing flagged reveals.
7. Non-recursive zero clearing with PendingIndexes queue and While Loop; win at 36–MineCount opened safe cells.
8. Clock, all-state NewGame reset, success/loss testing and Windows/in-editor demo.
9. Optional playtesting and UI polish.

## Student-facing structure
Each of the 73 steps has Go to / Do this / Why / Check. Newly introduced named items show their **type, owner and first-creation step**; names which are input pins must not also be created as Variables. Each step includes expandable beginner help from the established Mini-Projects action library. Progress is saved separately from other Mini-Projects.

## High-friction checkpoints
1. **Stage 1:** The Board Widget exists *before* the Cell Widget; BoardRef is a WBP_MineBoard Object Reference and both BoardRef/CellIndex are Expose on Spawn.
2. **Stage 2:** A Cell Widget uses the **OnMouseButtonDown Widget override**, not a Button OnClicked. Its root Border must be Visible and hit-testable. Get Effecting Button decides left/right; Return Handled for those clicks. BoardRef must be passed on each Create Widget call.
3. **Stage 3:** CandidateIndexes excludes the clicked SafeIndex, then Shuffle is called once; selecting the first MineCount candidates guarantees uniqueness. Do not pick six random numbers **with replacement**.
4. **Stage 4:** IsMineAt must return FALSE when either row or column is out of bounds before Array Get. CountAdjacentMines should skip only offset (DR=0,DC=0), using DR !=0 **OR** DC !=0.
5. **Stage 5:** SafeOpened increases only if IsOpen=false and the cell is not a mine or flag. EndGame is a *single* Custom Event used for either ending.
6. **Stage 6:** FlagMode lets students use left-click to flag on trackpads; right-click should always flag. A flagged tile cannot be revealed.
7. **Stage 7:** PendingIndexes **Remove Index 0** is essential on every While Loop Body; otherwise Unreal detects an infinite loop. A zero expands; a numbered tile stops the chain.
8. **Stage 8:** Timer only starts on the first **reveal**, not on flagging. NewGame clears ClockHandle, all Arrays, counters and prior children. Win target is **36 - MineCount** (30 normally), not the number of flags.

## Verification and honesty
Site content checks and desktop/mobile browser regression can verify that all 9 stages, named items, help controls, links and progress rendering exist. They **cannot compile Unreal Engine 5.8 Blueprints or prove all gameplay in editor**. Before prescribing the tutorial to a whole class, work through Stages 1–4 on a college machine and test at least one complete game (loss, win, flag, empty reveal and five restarts). For Windows packaging, an in-editor demo is an acceptable fallback if college PC permissions or installed platform tooling prevent packaging.

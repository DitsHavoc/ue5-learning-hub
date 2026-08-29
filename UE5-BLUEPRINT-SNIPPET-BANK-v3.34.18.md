# UE5 Blueprint Snippet Bank Audit — v3.34.18

## Result

The bank now contains **39 targeted paste assists from 12 unique official Epic UE5.8 documentation pages**:

- **35 Blueprint graph assists**
- **4 Level Editor / viewport paste assists**

The source policy is unchanged: the Hub does not mirror Epic's raw clipboard payloads. Students open the official Epic page, use **Copy Full Snippet**, paste into the named Unreal graph or viewport, then reconnect, compile, test, change and explain the result.

## New source family — Character Animation

Source: `Adding Character Animation in Unreal Engine`

The page contains genuine `Blueprint / context_graph` clipboard data. v3.34.18 indexes the high-value reusable pieces rather than every individual node:

1. complete Animation Blueprint Event Graph for `IsRunning` + `IsFalling` state updates;
2. Idle → Run and Run → Idle transition rules;
3. Idle → JumpStart rule;
4. Run → JumpStart rule;
5. JumpStart → JumpLoop rule using Time Remaining;
6. JumpLoop → JumpEnd landing rule using `NOT IsFalling`;
7. JumpEnd → Idle rule using Time Remaining.

These cards deliberately have no forced Quick Tutorial mapping because they belong to an Animation Blueprint / state-machine workflow rather than the gameplay Blueprint graphs used by the existing movement tutorials.

## New source — Making Macros

Source: `Making Macros in Unreal Engine`

Epic's `EnergyCheck` tutorial exposes Blueprint clipboard data for the macro setup and completed energy gate. The bank indexes this as one reusable assist for energy/stamina-limited actions. It is bridged to the Hub's Sprint, Dash and Double Jump tutorials because the same resource-gate pattern can be adapted to those mechanics after the student understands Epic's Jump example.

## Exhaustion audit

The final search pass explicitly probed current and approved UE5.6–5.8 Epic documentation for pasteable Blueprint material around:

- Enhanced Input and input actions;
- direct communication, casting, interfaces and event dispatchers;
- functions, arrays, structs/data tables and general Blueprint workflows;
- UMG / HUD / pause and widget workflows;
- SaveGame, GameInstance, respawn and checkpoint systems;
- projectiles, weapons, traces and damage;
- AI Move To, AI Perception, Behavior Trees and navigation;
- audio, Niagara, camera and cinematic systems;
- spawning, timers and common gameplay utilities.

No additional first-party source family met the acceptance test. Matches outside the 12 indexed pages were predominantly C++/API snippets, prose/screenshot workflows, duplicate hits, or community-authored snippets. Those remain useful reference material but are not labelled as pasteable Blueprint assists.

### Current acceptance test

A source enters the bank only when all of the following are true:

1. it is first-party Epic documentation;
2. it is UE5.6, 5.7 or 5.8 and still materially accurate;
3. it exposes genuine Unreal Blueprint or level clipboard data, not merely a code sample labelled `Copy Full Snippet`;
4. pasting it materially reduces student build work;
5. the Hub can state where it belongs and what still needs reconnecting without guessing.

Under that rule, the **current well is dry as of 29 Aug 2026**. Re-run the audit when Epic publishes or revises Blueprint-focused tutorials.

## Source pages

Existing Designer Track pages:

1. Designer 01 — Project Setup and Level Blockout
2. Designer 02 — Create a Key
3. Designer 03 — Open Doors with Keys
4. Designer 04 — Player HUD
5. Designer 05 — Puzzles: Switches and Cubes
6. Designer 06 — Puzzles: Moving Platforms
7. Designer 07 — Traps and Damage
8. Designer 08 — Create an Enemy
9. Designer 10 — Complete the Level
10. Designer 11 — Spawn New Cubes

New in v3.34.18:

11. Adding Character Animation
12. Making Macros

## Capture impact

Capture count remains **76**. Clipboard assists reduce reconstruction effort; they do not become screenshot replacements until a finished visual is actually supplied and accepted.

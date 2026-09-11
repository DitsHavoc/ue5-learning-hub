# UE5 Blueprint Snippet Bank Audit — v3.34.16

## Goal

Turn Epic's pasteable Blueprint clipboard examples into a safe, useful student shortcut without mirroring raw snippet payloads inside UE5 Learning Hub.

## Accepted workflow

1. Student opens the official Epic source from the Hub.
2. Student selects **Copy Full Snippet** on Epic's page.
3. Student activates the Blueprint graph or viewport named by the Hub/Epic instructions.
4. Student pastes with Ctrl+V.
5. Student reconnects any function-entry / Sequence / reference pins Epic identifies.
6. Student compiles, tests and explains the graph.

A pasted graph is not treated as evidence of understanding until the student can test, alter and explain it.

## Curated sources in v3.34.16

| Hub card | Official Epic source | Copyable material |
|---|---|---|
| Key Pickup + Reusable Key Setup | Designer 02: Create a Key | 3 Blueprint graph snippets |
| Locked Door + Matching Key Check | Designer 03: Open Doors with Keys | 2 Blueprint graph snippets + optional level blockout paste |
| Player HUD + Key Inventory Display | Designer 04: Player HUD | 2 Blueprint graph snippets |
| Reusable Switch / Pressure Plate Logic | Designer 05: Puzzles — Switches and Cubes | 5 Blueprint graph snippets |
| Moving Platform + Target Point Logic | Designer 06: Puzzles — Moving Platforms | Multiple Blueprint graph snippets + optional viewport puzzle paste |
| Traps, Damage + Elimination UI | Designer 07: Traps and Damage | Blueprint graph snippets + optional room paste |
| Enemy Detection, Chase + Attack Logic | Designer 08: Create an Enemy | 6 Blueprint graph snippets |
| Win Condition + Level Transition | Designer 10: Complete the Level | 1 large Blueprint graph snippet + optional blockout paste |
| Limited Spawner + Cooldown + Cleanup | Designer 11: Bonus — Spawn New Cubes | 1 complete Blueprint graph snippet |

## Official URLs

- https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-02-create-a-key-in-unreal-engine
- https://dev.epicgames.com/documentation/unreal-engine/designer-03-open-doors-with-keys-in-unreal-engine?lang=en-US
- https://dev.epicgames.com/documentation/unreal-engine/designer-04-player-hud-in-unreal-engine?lang=en-US
- https://dev.epicgames.com/documentation/unreal-engine/designer-05-puzzles-switches-and-cubes-in-unreal-engine?lang=en-US
- https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-06-puzzles-moving-platforms-in-unreal-engine
- https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-07-traps-and-damage-in-unreal-engine
- https://dev.epicgames.com/documentation/en-us/unreal-engine/designer-08-create-an-enemy-in-unreal-engine
- https://dev.epicgames.com/documentation/unreal-engine/designer-10-complete-the-level-in-unreal-engine?lang=en-US
- https://dev.epicgames.com/documentation/unreal-engine/designer-11-spawn-new-cubes-mechanic-in-unreal-engine

## Deliberate exclusions

- No raw Epic clipboard payloads are stored in the Hub.
- No community-authored Epic Developer Community snippets are included in this first bank; the first release stays on Epic-authored documentation/tutorial sources.
- The Sprint tutorial is not included as a Snippet Bank item because its current page does not expose the same Copy Full Snippet workflow.
- Viewport `Begin Map` snippets are labelled separately because they paste actors/level content rather than Blueprint graph nodes.

## Capture impact

Teacher capture count stays at **76**. The bank is a workload reduction mechanism: several remaining graphs can now be generated from official source material before taking a clean classroom screenshot, but a paste source is not itself counted as a finished capture.

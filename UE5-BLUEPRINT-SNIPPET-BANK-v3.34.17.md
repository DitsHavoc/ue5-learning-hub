# UE5 Blueprint Snippet Bank Audit — v3.34.17

## Result

The bank now contains **31 targeted paste assists from 10 unique official Epic UE5.8 pages**:

- **27 Blueprint graph assists**
- **4 Level Editor / viewport paste assists**

This is a usability expansion rather than a source-count inflation. Large Epic tutorial pages often expose several independent Blueprint clipboard blocks; v3.34.17 indexes those blocks by the mechanic students are actually looking for.

## Source pages

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

All are current Epic Developer Community Unreal Engine 5.8 documentation pages.

## High-value split-outs

### Interaction
- reusable key-data function
- key Construction Script variant setup
- key pickup event
- door required-key colour setup
- FnHasKey / held-key validation

### HUD & UI
- collected-key HUD update
- create/store/display player HUD
- numeric HP → HUD text function

### World systems
- switch default material
- begin/end overlap switching
- Activate Once
- multi-overlap safety fix
- array/interface interaction list
- platform Construction Script scale
- platform start/target caching
- Timeline + Lerp movement
- platform wait/reverse loop
- limited spawner + cleanup + cooldown

### Damage & AI
- trap overlap damage function
- player AnyDamage / game-over loop
- enemy contact attack
- enemy line-trace + distance detection
- enemy AI Move To flow
- enemy chase controller
- enemy AnyDamage / elimination

### Game flow / level paste
- win condition → win screen → next level
- whole-room / obstacle blockouts where Epic deliberately provides viewport clipboard payloads

## Rules retained

1. Do not mirror Epic's raw clipboard text in the Hub.
2. Link students to the official Epic page.
3. Tell them exactly which graph / viewport receives the paste.
4. Surface prerequisites and any reconnections Epic requires.
5. Require the student to compile, test, change and explain the result.

## Capture impact

Capture count remains **76**. The bank reduces manual graph-building effort; it does not falsely classify a source snippet as an already-finished classroom capture.

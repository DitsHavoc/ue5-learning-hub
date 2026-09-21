# Programmer Guide QA — v3.57.4

## Content checks

- All 3 programmer missions load from `data/programmer-skill-mission.js`.
- All 30 stages are present.
- All 150 build steps contain `doList` instructions.
- No build step contains fewer than 8 numbered actions.
- Total numbered actions: 1,361.
- Mission progression remains sequential.
- Arrays & Maps still leads into Structs & Data Tables, then Functions & Reusable Logic.
- The same Escape Room project is used across all three missions.

## Instruction standard

Each step presents:

1. Where to work.
2. Exact ordered actions.
3. Expected result.
4. Why the step matters.

Programming actions explicitly name relevant Blueprints, variables, Functions, nodes, values and pin connections wherever the student is constructing logic.

## Technical checks

- `programmer-skill-mission.js` parses successfully.
- `app.js` passes JavaScript syntax validation.
- `index.html` cache/version references updated to v3.57.4.
- No database changes.

# Designer Practical Instruction QA — v3.42.2

## QA result
**PASS — 2,695 automated/static assertions**

## Scope
The complete native Designer Studio practical bank was audited against `INSTRUCTION-AUTHORING-STANDARD.md`.

- Designer Studio modules: **8**
- Native Designer Studio Quick Tutorials: **47**
- Native practical steps: **268**
- Module-listed practical cards: **48**
  - 47 native Designer recipes
  - 1 shared Quick Tutorial: `silent-hill-fog`

The shared Silent Hill fog practical was not duplicated into `design-data.js`; it already has a prescriptive starter-value recipe in the shared tutorial bank and was separately verified.

## Beginner-instruction checks
Every one of the 268 native steps was checked for:
- a plain-English step title;
- **WHERE TO WORK** location;
- concrete **DO THIS** instruction;
- **YOU SHOULD SEE** observable result;
- **WHY** explanation;
- separate **TEST / CHECK** proof;
- step-specific **IF STUCK** recovery;
- no TODO/TBC/FIXME/placeholder text;
- unique step titles inside the tutorial.

Every tutorial was also checked for:
- multiple common mistakes;
- at least one **Make It Yours** scaffold-fade task;
- a usable **Definition of Done**;
- `prescriptive: true`.

## Controlled-first pass
The three user-identified problem tutorials were explicitly checked for measurable starter builds:

### `route-readability`
- 600 cm approach;
- two 300 cm openings;
- deliberate initial ambiguity;
- real-route depth/continuity/landmark cues;
- honest false-route closure;
- silent route test.

### `decision-point-test`
- three-way decision;
- main progression route;
- optional reward route;
- visibly blocked route;
- tester interpretation check;
- one-cue revision and re-test.

### `spatial-pacing`
- compression corridor: 300 cm wide × 280 cm high × 750 cm long;
- delayed reveal;
- release room: 1200 × 1000 cm, 550 cm ceiling;
- fixed player movement for comparison;
- deliberately weakened A/B version.

## Cross-Hub reference checks
- 47 Designer tutorial IDs remain unique and in exactly the same order as v3.42.1.
- All eight Designer module definitions are unchanged.
- All 48 module practical references resolve to either the native Designer bank or the shared tutorial bank.
- The only shared external module practical is `silent-hill-fog`.
- `silent-hill-fog` retains `prescriptive: true`, five starter values and a six-step student recipe.
- All Guided Path tutorial references resolve.
- `route-readability`, `decision-point-test` and `spatial-pacing` remain referenced by Guided Paths.

## Tracking / regression checks
- `backend.js` is byte-for-byte unchanged from v3.42.1.
- the migrations directory is unchanged.
- no progress key or tutorial ID changed.
- no XP mapping changed.
- the app change is presentation/instruction rendering only: Designer recipes use DESIGN TEST / Design → Test → Revise / WHERE TO WORK language; programming recipe wording remains available.

## File-diff check
Exactly eight files differ from the v3.42.1 full build:
- `index.html`
- `app.js`
- `data/design-data.js`
- `README.md`
- `CHANGELOG.md`
- `RELEASE-NOTES-v3.42.2.md`
- `DESIGN-PRACTICAL-INSTRUCTION-QA-v3.42.2.md`
- `UPLOAD-INSTRUCTIONS-v3.42.2.txt`

No other runtime file changed.

## Syntax
Passed `node --check` for:
- `app.js`
- `backend.js`
- all **15** files in `data/*.js`

## Browser note
A Chromium/Playwright smoke test was attempted using both local HTTP and `file://` navigation. This environment blocks those navigations with `ERR_BLOCKED_BY_ADMINISTRATOR`, so visual/runtime browser QA cannot be truthfully claimed here.

After deployment, spot-check:
1. `Make a Route Read Without Arrows`
2. `Design a Clear Decision Point`
3. `Create Pacing with Space`
4. one Materials tutorial
5. one Lighting tutorial / Silent Hill fog
6. one Sequencer tutorial
7. one Audio tutorial
8. one normal programming Quick Tutorial to confirm its mechanic wording remains unchanged.

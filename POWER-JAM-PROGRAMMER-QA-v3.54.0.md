# UE5 Learning Hub v3.54.0 — Power Jam Programmer QA

## Result

**PASS — static / data / asset / dependency QA**

Interactive browser QA is not claimed in this build environment. Run the short live click-through after deployment.

## Guide registration

- Tutorial ID: `power-jam-programmer`
- Direct route: `#/tutorial/power-jam-programmer`
- `unrealHome = true`
- `libraryHidden = true`
- Section: `Blueprint Programming • Pair Jam`
- 24 guided stages
- 5 Revision questions
- 27 local classroom image references
- 27 / 27 referenced Power Jam images present

## Syntax

- `app.js` passes `node --check`.
- `data/github-unreal-team-guide.js` passes `node --check`.
- `data/power-jam-programmer-guide.js` passes `node --check`.
- Full JavaScript tree checked with `node --check` during packaging.

## Navigation / search

Confirmed in source:

- Power guide script loads before `app.js`.
- Unreal Learning Master Guides will include the Power Jam guide through `unrealHome` registration.
- Unreal Learning pair-jam card links to both GitHub and Power Jam guides.
- Industry & Careers → People bridge links to both guides.
- GitHub guide's next-step CTA links to the Power Jam Programmer guide.
- Explicit global-search fallback entry exists for `Power Jam Programmer: Maps, Switches & Doors`.
- Dynamic search also indexes registered tutorials at search time from the v3.53.1 hotfix.

## Regression safety

Retained from the canonical v3.53.1 tree:

- GitHub + Unreal Team Workflow and search/surfacing hotfix;
- Landscape Master Guide;
- Sequencer Master Guide;
- Unreal Designer;
- Industry & Careers Reality Check;
- Secret Studio Protocol / `pipeline check`;
- Career quiz hotfix behaviour;
- central Revision and guided Homework paths.

## Data / backend

- No database migration.
- No `backend.js` change.
- Existing tutorial completion is reused.

## Post-deploy click-through

1. Hard refresh.
2. Confirm badge reads **v3.54.0**.
3. Search `power jam`, `PowerStates`, `switch`, or `maps` and open the Power Jam Programmer guide.
4. Open Unreal Learning → Master Guides and confirm the ⚡ guide card appears.
5. Open the guide and confirm the first screenshot shows the Jam folders.
6. Scroll through ActivatePower, HasPower, switch and door stages; click at least one image to confirm zoom/lightbox behaviour.
7. Confirm the final CTA opens the GitHub team workflow.
8. Open Industry & Careers → The People Who Make Games and confirm both pair-jam buttons appear.
9. Open the GitHub guide and confirm its next-step CTA opens the Power Jam Programmer guide.
10. Open Revision → Unreal Master Guides and confirm Power Jam questions can appear.

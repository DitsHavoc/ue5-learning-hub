# GitHub + Unreal Team Workflow QA — v3.53.0

## Result

**PASS — static / syntax / dependency QA**

Interactive browser QA is not claimed in this build environment. Run the short click-through below after deployment.

## Guide registration

- Tutorial ID: `github-unreal-team-workflow`
- `unrealHome = true`
- 18 structured stages
- 5 revision questions
- 14 placed visual references
- 9 unique local PNG assets
- Direct route: `#/tutorial/github-unreal-team-workflow`

## Static checks

- `node --check app.js`: PASS
- `node --check data/github-unreal-team-guide.js`: PASS
- all `data/*.js` syntax checks: PASS
- every local image path referenced by the guide exists: PASS
- runtime-like registration alongside Landscape and Sequencer: PASS
- Master Guides present after registration: 3

## Regression checks

Confirmed still present in the full tree:

- Landscape Master Guide
- Sequencer Master Guide
- Industry & Careers data
- Industry Reality Check
- Secret Studio Protocol
- `pipeline check` instruction
- Unreal Designer v3.52 integration

## Post-deploy click-through

1. Hard refresh.
2. Confirm badge reads **v3.53.0**.
3. Open **Unreal Learning**.
4. Confirm Master Guides now shows three cards including **GitHub + Unreal: Two-Person Team Workflow**.
5. Open the GitHub guide.
6. Confirm the repository / collaborator / clone / commit / push / pull diagrams display and enlarge.
7. Confirm each diagram source link opens an official GitHub Docs page.
8. Open **Industry & Careers → The People Who Make Games**.
9. Confirm the **PUT THE ROLES INTO PRACTICE • TWO-PERSON JAM** bridge opens the GitHub guide.
10. Open Revision → Unreal Master Guides and confirm GitHub team-collaboration questions can be selected.
11. Recheck Industry → The Industry still contains Reality Check and Secret Studio Protocol.

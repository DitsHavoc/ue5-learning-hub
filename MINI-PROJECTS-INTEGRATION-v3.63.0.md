# UE5 Mini-Projects — integration and asset manifest (v3.63.0)

## Canonical student route
**Build → Mini-Projects**. Existing primary nav stays **Paths / Learn / Build / Study / Level 4**. The new series is a practical branch, **not** a competing first-principles course or Quick Tutorial family.

Four outcomes from the user-supplied *Unreal Engine Mini-Projects* course (Daniel Buckley / Zenva, © 2026), which the contributor reports owning rights to reproduce:

| Project | Stage IDs | Source PDF pages |
| --- | --- | --- |
| Balloon Popper | `balloon-1` through `balloon-5` | 3–53; source quiz 54 |
| Loops & Spawning | `loops-1` through `loops-3` | 55–82; source quiz 83 |
| Bowling | `bowling-1` through `bowling-5` | 84–150; source quiz 151 |
| Clicker | `clicker-1` through `clicker-3` | 152–192; source quiz 193 |

Page 194 is the course conclusion and pages 195–201 provide full-source reference. The 16 staged guides incorporate the **complete text notes on the stage pages** with original page labels, plus separate actionable checklists, outcomes, test criteria and troubleshooting. The source PDF's page images/screenshots have **not** been bundled yet and **should not be implied to be present**.

## Learning and progress
- The four project routes are data-driven in `data/mini-projects-data.js`.
- Full PDF text notes are in `data/mini-projects-source-notes.js`; source ranges remain traceable.
- New templates in `app.js` render overview and stage routes, side navigation, breadcrumbs, source notes, Core prerequisite links and local stage checkmarks.
- Completion key: `ue5hub:mini-projects:v1`, isolated from existing course progress; the global reset explicitly clears it.
- The global search includes one entry per project and one per stage.
- Source and stage ownership checks run in `scripts/validate-content-placement.cjs`.
- Desktop/mobile E2E tests run in `scripts/test-mini-projects.cjs`, on each PR and push to main.

## Asset ZIP received and verified — hosting step pending

The user has now uploaded `Assets.zip` twice; both archives are **byte-for-byte identical**, with CRC validation passing. SHA-256: `722fa6ec2012600e342b7426bae6b405fce866513a215490c69c0ed9ebaf0ef5`, size **59,165 bytes**.

Contents:
- `Assets/Balloon Popper/BalloonModel.fbx` (32,416 bytes): **use this in UE5.6+**
- `Assets/Balloon Popper/BalloonModel.obj` (48,338 bytes): older alternative
- `Assets/Bowling/BowlingPin.fbx` (31,788 bytes): actual bowling pin
- **No bowling ball model:** model with Unreal Engine's built-in sphere and apply material. Guide updated.

All four projects and all sixteen stages have working source notes. The site now checks for a hosted asset at `/assets/mini-projects/Assets.zip` using an HTTP HEAD request and **only displays the download button if present**. Until then it tells students to obtain the ZIP through Teams; there are no broken links.

**Not yet hosted on GitHub.** The provided binary ZIP is available in the conversation/container; the GitHub connector here cannot use a local file path for its write action. `assets/mini-projects/README.md` documents the exact upload location and checked file hash, for one remaining binary upload to the PR branch before release.

The owner also approved the PDF's images for reuse. Follow-up work can add a curated, correctly attributed and compressed set of its annotated screenshots so students can see the relevant Unreal Blueprint wiring directly on each stage page rather than relying on separate PDF access.

## Deployment gate
PR #15 is intentionally a **draft** until source assets and rendered browser QA are agreed. The Hub's previous release was not auto-deployed by Render despite configured autoDeploy: after merge, explicitly verify the deployed Render commit against GitHub `main` and check the live route, rather than trusting a green CI badge alone.
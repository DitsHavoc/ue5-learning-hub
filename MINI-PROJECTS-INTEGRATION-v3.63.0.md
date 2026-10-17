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

## Source asset gap before final production rollout
The user has the supplied models but **has not yet uploaded their asset ZIP to this ChatGPT conversation/repository**. The public site should not display non-working download links.

Needed:
- Balloon Popper: supplied `BalloonModel.fbx` (UE5.6+ guidance prefers this instead of the legacy OBJ)
- Bowling: supplied pin/ball models and any matching material or texture dependencies
- Any optional project files, inputs, level examples, sound effects or related materials the user wants students to download

Once received, verify names and contents, put files in an appropriate versioned `assets/mini-projects/` location, add one clearly labelled download to the relevant project page, and test actual HTTP 200 downloads in the production candidate.

The owner also approved the PDF's images for reuse. Follow-up work can add a curated, correctly attributed and compressed set of its annotated screenshots so students can see the relevant Unreal Blueprint wiring directly on each stage page rather than relying on separate PDF access.

## Deployment gate
PR #15 is intentionally a **draft** until source assets and rendered browser QA are agreed. The Hub's previous release was not auto-deployed by Render despite configured autoDeploy: after merge, explicitly verify the deployed Render commit against GitHub `main` and check the live route, rather than trusting a green CI badge alone.
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

Page 194 is the course conclusion and pages 195–201 provide full-source reference. The 16 staged guides incorporate the **complete text notes on the stage pages** with original page labels, plus separate actionable checklists, outcomes, test criteria and troubleshooting. All **320 course illustrations** are included under `assets/mini-projects/images` and mapped to their original source pages and nearby instructional paragraphs. They are loaded on demand when students open the relevant source page.

## Learning and progress
- The four project routes are data-driven in `data/mini-projects-data.js`.
- Full PDF text notes are in `data/mini-projects-source-notes.js`; source ranges remain traceable.
- New templates in `app.js` render overview and stage routes, side navigation, breadcrumbs, source notes, Core prerequisite links and local stage checkmarks.
- Completion key: `ue5hub:mini-projects:v1`, isolated from existing course progress; the global reset explicitly clears it.
- The global search includes one entry per project and one per stage.
- Source and stage ownership checks run in `scripts/validate-content-placement.cjs`.
- Desktop/mobile E2E tests run in `scripts/test-mini-projects.cjs`, on each PR and push to main.

## Source assets and illustrations — integrated

The original archive `assets/mini-projects/Assets.zip` is hosted in this branch (59,165 bytes; SHA-256 `722fa6ec2012600e342b7426bae6b405fce866513a215490c69c0ed9ebaf0ef5`).

Models: `BalloonModel.fbx` (UE5.6+ recommended), legacy `BalloonModel.obj`, and `BowlingPin.fbx`; use the built-in Sphere mesh for the bowling ball.

The 320 source screenshots, across all 16 stages, are stored in `assets/mini-projects/images/`. Their manifest contains each original PDF source-page number and `afterParagraph` insertion point, based on matching the PDF's actual illustration location to its text reading order. In the stage walkthrough, source pages expand individually and illustrations are loaded on demand, linked to full-size versions, and have context-dependent accessible captions. Other tutorials/IDs and primary navigation are untouched.

Browser regression checks all 16 stages at desktop and mobile sizes, figures, real ZIP checksum/download, source walkthroughs, persistence and global search. A 404 download fallback is also exercised.

## Deployment gate
PR #15 is intentionally a **draft** until source assets and rendered browser QA are agreed. The Hub's previous release was not auto-deployed by Render despite configured autoDeploy: after merge, explicitly verify the deployed Render commit against GitHub `main` and check the live route, rather than trusting a green CI badge alone.
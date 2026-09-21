# Hero Prop QA — v3.57.8

## Structural checks
- Level 4 data file parses with Node.
- Main app.js parses with Node.
- Hero Prop project exists at id `3d-hero-prop`.
- 12 guided stages present.
- 172 numbered actions total.
- Minimum actions in any stage: 10.
- 11 brief rules, 6 starter prop examples, 4 game references, 12 definition-of-done items.

## Teaching checks
- The first screen explains what size/complexity is suitable before software work starts.
- Real reference and real dimensions are required before modelling.
- 3ds Max setup includes centimetres, System Units, numbered saves, layers and a bounding-size guide.
- Blockout explicitly bans tertiary detail until proportions read.
- Secondary-form stage separates real manufactured parts and asks students to justify geometry.
- Topology stage checks F4 Edged Faces, open borders, density, shading, chamfers and transforms.
- UV stage has a hard checker quality gate before Painter.
- Painter stage checks import before painting and bakes mesh maps before materials.
- Texturing separates material identity from wear/grunge and requires a written wear cause.
- Unreal stage gives the packed ORM channel wiring: R → AO, G → Roughness, B → Metallic, with sRGB disabled for the packed data map where needed.
- Engine QA checks real scale, pivot, shading, game distance and collision where needed.
- Submission proves reference → blockout → wireframe → UV → material → Unreal result.

## Scope check
- Core route uses one real prop and aims for one 2K texture set unless there is a justified reason to split it.
- Separate high-poly baking / manual LOD / second condition state are optional stretch work, not hidden core requirements.

## Validation limitation
- Static/source validation and ZIP integrity are checked. No browser UI automation was available for this build, so visual browser rendering is not claimed as tested.

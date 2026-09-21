# Instruction QA — v3.30

## Scope checked
- 20 Unreal Engine core lessons
- 47 Programming Quick Tutorials
- 12 3ds Max lessons
- 8 3ds Max Build X projects

## Structural checks passed
- Every item in scope has a first-build recipe and pinned starter values.
- Practical pages now render one authoritative numbered walkthrough rather than recipe + second numbered walkthrough.
- The guide can surface expected result, stop/check, why and recovery information from the existing detailed teaching content on the same step.
- Build X phase notes remain only as a compact purpose/proof map and no longer repeat micro-instructions.
- Hard first-build wording scan found no remaining numeric phrases using `roughly`, `about N`, `around N`, `a little`, `small number`, `small value`, `as needed` or `if needed` in the scoped recipes/values.
- 99 local asset references checked; 0 missing.
- Production JavaScript/data files pass Node syntax checks.

## Specific values tightened in this pass
Examples include:
- AI patrol points: exact 600 cm first-test spacing.
- Collision trigger second test: X150 / Y75 / Z100 extent.
- Projectile Sphere Collision: 8 cm.
- HUD teaching position: top-left anchor, X40 / Y40.
- AI attack Move To Acceptance Radius: 200 cm.
- Silent Hill fog helper Point Light: Intensity 2500 / Radius 500 / Volumetric Scattering 1.0.
- Max precision stack: Vertex Snap explicitly selected.
- UV packing: 8 px padding target at 1024.
- Barrel Chamfer: 1.5 cm / 2 segments.
- Teaching tyre: Connect 2 / Pinch 60 / Slide 0, tread Inset 0.8 cm / Extrude 1.5 cm.
- Wall panel secondary recess: -1.5 cm; Chamfer 1 cm / 2 segments.
- Sci-fi door: opening 120×220 cm, slab 120×20×220 cm, frame 160 cm, hinge 90° or slide 130 cm.

## Deliberate non-prescriptive areas
Independent Chapter Builds, Stretch/Challenge, critique and later application work remain less prescriptive by design. These areas should test transfer and judgement after the learner has already completed controlled first builds.

## Still requires real-software validation
This pass validates structure, wording, data coverage and site assets. It does **not** replace following the tutorials in the exact college UE/3ds Max installations. Real screenshots and student pilot use remain the final evidence for interface-version differences and any step whose behaviour changes between software versions.

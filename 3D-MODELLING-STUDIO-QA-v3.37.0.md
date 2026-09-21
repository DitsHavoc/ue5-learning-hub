# 3D Modelling Studio QA — v3.37.0

## Scope

Full teaching/UX rebuild of the separate 3D Modelling Studio: reference-led planning, explicit 3ds Max execution, Build X production briefs, professional workflow studies, inspection/quality gates, game-ready handoff and Critique Board integration.

## Progress / ID preservation

Compared directly with v3.36.0:

- 12 / 12 modelling lesson IDs are identical.
- 8 / 8 Build X IDs are identical.
- 6 / 6 Fix Clinic IDs are identical.
- all Build X prerequisite lesson IDs resolve.
- no Supabase schema, backend or migration files were changed for this release.

Existing modelling completion/progress IDs therefore remain valid.

## New teaching structure

The landing and detail pages now use the seven-stage loop:

**REFERENCE → PLAN → BLOCK → MODEL → INSPECT → GAME READY → CRITIQUE**

All 12 lessons contain a LOOK / THINK / PLAN layer before the software steps:

- one big modelling question;
- at least three observation prompts;
- at least three planning prompts;
- a required modelling decision;
- at least one purposeful visual reference.

All 12 lessons retain explicit execution guidance. Detailed lesson walkthroughs contain 5–7 major steps, each written around location/action/expected result/check/why/diagnosis rather than vague “add detail” instructions.

## Build X production briefs

All 8 builds now contain the complete production layer:

- role / context / design target / constraint;
- real reference board;
- planning prompts;
- staged modelling instructions;
- mandatory student variation;
- quality gates;
- professional workflow study;
- focused Critique Board question.

Support still fades from the fully guided crate to the independent Hero Prop.

Detailed phase-step counts:

- Crate: 20
- Barrel / Canister: 12
- Tyre: 16
- Wall Panel: 9
- Sci-fi Door: 12
- Pipe Kit: 9
- Modular Room: 12
- Hero Prop: 14

Each build also retains a concise 5–6 action student recipe for quick reference after the detailed walkthrough has been understood.

## Reference / professional layer

- 13 real-object image references are used across the 8 Build X briefs.
- each reference links back to its Wikimedia Commons file page rather than presenting the image as unattributed decoration.
- licence wording is not generalised across Commons files: the crate reference that was checked as CC BY-SA 4.0 is labelled accordingly; other cards use the neutral “Wikimedia Commons reference” label and expose their source page.
- remote-reference image cards have an on-page fallback state if an external image cannot load.
- 6 professional workflow studies are surfaced, including hard-surface prop production, 3ds Max vehicle work, modular environments, a Death Stranding-inspired robot breakdown, prop texturing and a current environment-art workflow.
- selected user-supplied 3ds Max book figures remain supporting teaching visuals only, not current-version click maps.

## Current technical-source check

The rebuilt instructions were checked against current official material:

- Autodesk 3ds Max 2026 documentation for Editable Poly / Chamfer behaviour.
- Adobe Substance 3D Painter Experience League documentation for project creation and mesh-map baking. The previous legacy `helpx.adobe.com/substance-3d-painter/...` URLs are absent.
- Epic UE5.8 FBX Static Mesh Pipeline for FBX 2020.2 and origin-driven exported pivots.

The Unreal handoff now explicitly teaches choosing the useful placement pivot in Max and positioning that intended pivot point at world 0,0,0 for export rather than trying to disguise a bad source pivot after import.

## Static regression checks

Passed:

- JavaScript syntax: 12 / 12 active root/data JS files.
- CSS brace balance: 0.
- direct local image/media references: 89 checked, 0 missing.
- static internal route references: 208 checked; 27 unique route bases; 0 unknown route bases.
- known bad `#/Dashboard` and `#/Critique` route forms are absent.
- v3.37.0 version/cache pins are present for the rebuilt modelling data/app styling path.
- all new model/reference URLs stored in modelling data use HTTPS.
- no obsolete Substance Painter `helpx.adobe.com/substance-3d-painter/...` links remain.

## Database / existing systems

No migration is required for v3.37.0. The release reuses the Critique Board already introduced in v3.36.0 and does not alter auth, classes, rosters, project evidence, XP, leaderboards or other existing cloud systems.

## Browser interaction

A real browser smoke test was attempted with Playwright using the installed Chromium binary against the local v3.37.0 HTTP server. Chromium returned:

`net::ERR_BLOCKED_BY_ADMINISTRATOR`

for the local page. Therefore **browser visual/runtime interaction is not claimed as passed**. The release is verified through the static, content and package checks documented here; final live visual interaction should be confirmed in the normal deployment/browser environment.

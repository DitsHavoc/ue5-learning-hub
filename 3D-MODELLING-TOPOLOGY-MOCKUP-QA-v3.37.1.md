# 3D Modelling Topology Mockup QA — v3.37.1

Date: 29 Aug 2026

## Prototype pages

- `build-crate`
- `build-barrel`
- `build-wall-panel`

## Added teaching layer

- 3 `READ THE MESH` topology overview blocks
- 18 local instructional SVG diagrams
- 6 step visuals per prototype build
- support-loop / silhouette / chamfer / UV / pivot / density callouts
- explicit examples of unnecessary edge density

## Progress compatibility

Compared with v3.37.0:

- 12 / 12 modelling lesson IDs identical
- 8 / 8 Build X IDs identical
- 6 / 6 Fix This Model IDs identical
- no completion/progress key changed
- no database migration required

## Static validation

- `node --check` passed for `app.js`, `backend.js` and every `data/*.js` file.
- `modeling-data.js` parses successfully as the Hub modelling data object.
- All local `src` references in modelling data resolve: 0 missing.
- 18 / 18 topology SVGs present.
- All three prototype builds have 6 recipe steps and exactly 6 matching step visuals.

## Package verification

- FULL ZIP vs working tree: 0 missing / 0 extra / 0 different.
- MINIMAL ZIP applied over v3.37.0 vs working tree: 0 missing / 0 extra / 0 different.

## Browser testing

No successful browser interaction test is claimed in this release. Previous Chromium attempts in the environment have been blocked by administrator policy, so this pass is reported as static/package QA only.

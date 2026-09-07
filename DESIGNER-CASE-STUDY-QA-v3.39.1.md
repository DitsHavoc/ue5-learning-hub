# Designer Case Study QA — v3.39.1

## Required structure
- 8 Designer disciplines.
- 3 primary LOOK case studies per discipline = 24 total.
- 24 unique games retained.
- Each discipline has a specific `lookTitle` and `lookIntro`.
- Each case has: game, image, design factor (`lens`), concrete observation (`notice`), transferable principle (`steal`), applied task, source title, source URL, source type and source rationale.

## Source rules
- Primary case-study evidence link must teach or evidence the design decision.
- Prefer developer/studio/GDC/postmortem sources.
- Established games-media interviews/features are valid where they provide stronger or more accessible evidence.
- Steam/store pages are not valid primary evidence links when a meaningful article/talk/interview exists.
- Current primary case-study Steam/store evidence links: **0 / 24**.

## Regression rules
- Preserve Designer module IDs/routes.
- Preserve primary game mapping unless deliberately changed.
- Preserve tutorial, research, build and completion IDs.
- No XP/database changes for this pass.
- Validate JS syntax, local assets and package reproduction before release.

## Static validation result
- 15 JavaScript files passed `node --check`.
- CSS brace count balanced.
- Runtime local asset paths checked: **0 missing**.
- Internal hash-route literal set unchanged from v3.39.0: **48 → 48; 0 added / 0 removed**.
- Data files changed: **design-data.js only**; all other `data/*.js` files are byte-identical to v3.39.0.
- Designer module IDs unchanged.
- Primary game sequence unchanged.
- Non-case module content is unchanged after excluding the intentional LOOK heading/case-study rewrite.
- 8 modules / 24 cases / 24 unique games.
- 24 / 24 evidence URLs use HTTPS.
- 0 / 24 primary case evidence URLs point to Steam/store pages.

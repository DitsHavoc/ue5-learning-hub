# v3.39.4 Network Quiet — QA

## Audit scope

Reviewed Supabase/API calls, Storage access, signed URLs, News social state, notifications, progress sync, teacher dashboard data, Critique Board and legacy Project traffic across the current Hub.

## Key findings addressed

- Historical Project screenshots were the plausible dominant source of the already-accrued multi-GB egress: roughly 126 MB of old PNGs could reach ~7.5 GB after around 60 aggregate full-set downloads.
- News article/image content itself is external, but News social counters previously downloaded individual vote/comment rows for large story sets.
- Rapid SPA/auth rerenders could trigger repeated notifications, progress, profile, class and Critique reads within seconds.
- Legacy practice-project cloud reads remained in startup code even after the Teams-first Project retirement.

## Static checks

Run before packaging:

- **15/15 JavaScript files:** `node --check` pass.
- **137 actual local asset/data references:** 0 missing.
- Legacy Project cloud boot reads: 0 active calls in `app.js`; only explanatory copy remains.
- Live Supabase: migrations 35 and 36 verified in migration history; migration 37 applied successfully before packaging.
- Curriculum/content files outside the network/release surface are byte-identical to v3.39.3.
- FULL and MINIMAL reproduction checks are recorded after archive creation below.

Browser interaction is not claimed unless a browser test actually completes in the environment.

## Packaging results

- FULL archive: **362 files**; reproduction check **0 differences**.
- MINIMAL archive over v3.39.3: **12 changed/added files**; overlay reproduction check **0 differences**.

# v3.39.2 Editorial Correction QA

## Scope
Surgical student-facing editorial correction only. No feature expansion and no database change.

## Designer corrections
- Environment Art & Set Dressing primary LOOK games: **Dead Space / The Last of Us Part II / Control**.
- Materials & Surfaces primary LOOK games: **Horizon Forbidden West / Cyberpunk 2077 / God of War Ragnarök**.
- All six corrected primary cards identify a specific discipline job, explain a concrete shipped-game decision, give a task that analyses/applies that decision, and link to developer/GDC/interview evidence rather than a store page.
- Materials deep dive `How Supergiant Creates Art & Music for Hades` replaced with Miro Vesterinen's CONTROL environment/material workflow breakdown because it directly teaches tiling materials and procedural variation.
- Total Designer primary LOOK slots remain **24** and still use **24 different games**.

## Student-copy corrections
- 19 repeated `Where do I find/use <lesson>?` Core Unreal headings changed to `Where to find it in Unreal`; the existing Branch heading was already natural and was retained.
- Removed live student-facing patch-history language from Practical Applications, Designer landing, Designer source cards, Quick Tutorials, Epic Paste Assists, Module 0, Challenge Board and Revision.
- Project navigation/eyebrows changed from `Assessment` framing to `Projects & community` / `Projects & progress` where appropriate.
- `Assessment / unit` visible field label changed to `Course / unit`; underlying database field remains unchanged.
- Formal assessment boundary copy is retained where useful: the Hub does not grade or replace the college assessment/submission system.
- Global search placeholder broadened to `Search lessons, builds, design, modelling…`.

## Static QA
- All JavaScript files: `node --check` PASS.
- Designer modules: **8**.
- Primary Designer case studies: **24 / 24 unique games**.
- Corrected primary store-page evidence links: **0**.
- Local media/data references found: **119 unique / 0 missing**.
- Literal internal routes compared with v3.39.1: **0 added / 0 removed**.
- Core lesson IDs: **20 unchanged**.
- Designer module IDs: **8 unchanged**.
- Module 0 chapter IDs: **6 unchanged**.
- Migration SQL set: **32 files, byte-identical to v3.39.1**.
- `SUPABASE-SCHEMA.sql`: byte-identical to v3.39.1.
- No database migration required.

## Browser attempt
A Chromium headless render was attempted against a local HTTP server. Chromium timed out before producing DOM output and logged the same DBus/browser-environment failures seen in earlier releases. Therefore this release does **not** claim a browser visual/runtime pass.

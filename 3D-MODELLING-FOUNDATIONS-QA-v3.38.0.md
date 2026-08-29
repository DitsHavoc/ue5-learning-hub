# 3D Modelling Foundations QA — v3.38.0

## Curriculum

- 6 theory chapters, unique IDs and sequential unlock order.
- 5 questions per chapter; 30 chapter questions total.
- 12-question Model Doctor final.
- 80% pass threshold.
- 20 XP per first chapter pass; 100 XP on first Model Doctor pass.
- Correct-answer indexes validated for every question.
- Theory is decision-led rather than slide replication.

## Progress / gating

- `modeltheory:*` completion IDs use the existing lesson-progress system.
- `modelfoundation:final` records the final pass.
- Build X remains browseable before Module 0 is passed.
- New Build X completion is blocked for students until Model Doctor is passed.
- Existing completed Build X records remain complete.
- Teacher bypass retained.
- Theory/final completion is visible in teacher class progress and student progress.

## Presentation

- Removed the old Modeller Mindset + uneven photo-collage block from the 3D Modelling landing flow.
- Replaced it with a full-width Module 0 launch/progress panel and six-chapter map.
- No rejected generated tutorial-page UI / infographic images are packaged or referenced.
- Module chapters use existing modelling/wireframe visuals plus a purpose-built World/Local coordinate visual.

## Technical

- Main build version: v3.38.0.
- `backend.js` cache query bumped to v3.38.0 because local-to-cloud theory sync changed.
- New static data: `data/modeling-foundations-data.js`.
- New migration: `migrations/20260829_31_model_foundations_xp.sql`.
- Live Supabase migration `model_foundations_xp` applied and verified: chapter 20 XP, final 100 XP, existing Build X 250 XP unchanged.
- No new tables, buckets, RLS policies or assignment workflows.
- Chromium visual smoke test attempted; the container Chromium process hung on environment/DBus errors, so no browser-interaction pass is claimed.

## Static validation results

- JavaScript syntax: 13/13 files pass `node --check`.
- Direct local image/media references checked: 112; missing: 0.
- Literal internal hash links checked: 183; unknown top-level routes: 0.
- Modelling curriculum IDs: 12 lessons / 8 Build X / 6 Fix clinics, all unique; `data/modeling-data.js` is byte-identical to v3.37.4.
- Foundations: 6 unique chapters; each has exactly 5 valid-answer quiz questions; final has 12 valid-answer questions; pass threshold 80%.
- Rejected generated tutorial-UI/infographic files found in release tree: 0.
- HTML cache/version checks: CSS, app and changed backend all load with v3.38.0 cache keys.

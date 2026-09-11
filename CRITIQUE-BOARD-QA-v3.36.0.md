# Critique Board QA — v3.36.0

## Scope
Class-scoped screenshot critique, Before/After improvement, structured peer feedback, daily critique XP, Designer industry-source XP, sidebar routing/counts and teacher progress visibility.

## Live database verification
- `critique_board_and_learning_xp`, `critique_rpc_anon_hardening` and `critique_feedback_quality_floor` applied successfully to the live Supabase project on 29 Aug 2026.
- `critique_posts` and `critique_feedback` have RLS enabled.
- `critique-media` is private, limited to 8 MB and accepts PNG/JPEG/WebP only.
- class-scoped table/storage policies exist for read, authorised write and teacher moderation.
- anonymous table access was removed from the two Critique Board tables; authenticated users receive only the operations required by the UI.
- anonymous EXECUTE was explicitly removed from the three new public SECURITY DEFINER RPCs; only signed-in use remains exposed.
- all three structured feedback fields have a server-side 12–600 character constraint, matching the UI's meaningful-feedback floor.

## Rollback-only authenticated-role QA
Production data was not left behind.

Using two existing students who belong to the same class inside a transaction that was rolled back:
- student A could create a class-scoped critique post.
- student B could submit all three structured feedback fields.
- student B could read the test post through `get_critique_feed(...)`.
- the inserted feedback received `xp_awarded = true` and the signed-in daily reward-count RPC saw the reward.
- all test post/feedback/XP/notification writes were rolled back.

A separate rollback-only `designsource:` lesson completion exercised the new Designer source XP branch. The source completion is worth 20 XP; in the QA transaction the existing first-activity daily bonus also applied, so the aggregate XP total moved by 25 as expected. The test progress row was confirmed absent after rollback.

## Security / performance advisor
- the Critique Board's initial anonymous SECURITY DEFINER warnings were cleared by `20260829_29_critique_rpc_anon_hardening.sql`.
- the advisor still reports authenticated SECURITY DEFINER warnings for the new RPCs. That exposure is intentional: the app must call them while signed in, and each RPC performs explicit authentication/class-access checks while returning only the limited data required by the board.
- no Critique Board missing-RLS-policy warning was introduced.
- the performance advisor currently labels the two new author indexes as unused, which is expected before real Critique Board traffic exists. No new unindexed Critique Board foreign key was reported.
- other advisor entries pre-date v3.36.0 and were not changed as part of this feature.

## Static regression checks
Passed:
- JavaScript syntax: 12 active root/data JS files.
- CSS brace balance.
- 88 direct local image references checked; 0 missing.
- static internal route bases validated; `#/critique` is linked and routed; known bad `#/Dashboard`/`#/Critique` forms are absent.
- v3.36.0 cache/release pins present for CSS, app, backend and Designer data.
- all existing `data/` files are byte-identical to v3.35.4, preserving curriculum IDs/data.
- Designer Studio retained: 8 modules, 24 case studies, 24 unique primary games, 24 deep dives, 8 embedded videos, 24 unique source-task IDs, 24 constraint challenges, 47 Designer-owned recipes / 48 placements and 18 Resource Library items.
- Designer landing cleanup remains in place; removed global roulette / modelling filler was not restored.

## Browser interaction
A real Chromium headless smoke run was attempted against a local HTTP server. Chromium did not return a DOM before the 20-second timeout and logged container/DBus environment errors. Therefore **browser interaction is not claimed as passed** for this build. The static checks and rollback-only live database tests above are the verified QA evidence.

# Theory Case Study Parity QA — v3.41.3

## Automated/static checks

- 24 Theory lessons present.
- 24 unique case-study games present.
- Every lesson has a bespoke case-study introduction.
- Every lesson has exactly three game-specific design observations.
- Every lesson has a designer question.
- Every lesson has a WATCH IT IN ACTION resource with a WATCH FOR prompt and reflection question.
- 15 direct YouTube watch resources use click-to-load privacy-enhanced embeds.
- 9 watch resources open an official/developer/professional media page.
- Every lesson has at least three written sources in addition to the watch resource (75 written source cards total).
- OMORI remains mapped to Environmental Storytelling.
- Jet Set Radio remains mapped to Game Feel & Feedback.
- All 24 lesson IDs are unchanged from v3.41.2.
- Core definitions, key ideas, mistakes, tasks and quizzes are unchanged from v3.41.2.
- Guided Path Theory references resolve to valid lesson IDs.
- `app.js` and `data/theory-data.js` pass Node syntax checks.
- No video iframe or remote YouTube thumbnail is emitted by the lesson renderer before a Play action.
- No SQL migration required.

## Manual live checks after deployment

1. Open `#/theory` and confirm v3.41.3 is shown.
2. Open Jet Set Radio / Game Feel & Feedback and OMORI / Environmental Storytelling.
3. Confirm the case-study breakdown has three specific observations and a designer question.
4. Confirm WATCH IT IN ACTION shows a local placeholder before Play.
5. Press Play on an inline source and confirm the privacy-enhanced YouTube player loads only then.
6. Test a link-only watch source such as Firewatch or A Short Hike.
7. Confirm a previously completed Theory lesson remains complete and does not award XP again.
8. Check a Guided Path that references Theory and confirm its progress is unchanged.

A full visual browser QA is not claimed by the build script; perform the live checks above after Render deploys.

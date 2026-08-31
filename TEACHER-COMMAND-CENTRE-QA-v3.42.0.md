# v3.42.0 Teacher Command Centre — QA

## Tracking coverage

Expected tracked families:

- core Unreal lessons
- Building Blocks
- Quick Tutorials / Designer practicals
- Chapter Builds
- Game Design Theory
- Designer Studio builds
- Designer industry source tasks
- 3D Foundations + Model Doctor
- 3ds Max video series
- 3D Modelling lessons
- Build X
- Fix This Model clinics
- Sculpt Playground
- Guided Path checkpoints (no XP)

## XP expectations

- `theory:*` = 25 XP
- `designsource:*` = 20 XP
- `modeltheory:*` = 20 XP
- `modelvideo:*` = 20 XP
- `pathway:*` = 0 XP
- existing lesson/tutorial/build values unchanged

## UI expectations

Teacher dashboard:
- Learning Pulse appears before class/team administration.
- Active classes are separated and show only their member students.
- Theory, Designer, 3D and pathway checkpoint values are present.
- Last activity is readable without exposing formal assessment data.

Class detail:
- snapshot table includes all three Guided Paths, week XP, streak and last activity.
- exact completion groups remain available.
- Guided Path Checkpoints has its own group and uses `completed_at`, not `completed=true`.

Home:
- signed-out users do not receive a leaderboard request or panel.
- signed-in students only see a class leaderboard when enabled.
- teachers can preview their teaching class leaderboard even when student visibility is paused.
- top three show weekly XP; a student outside the top three sees their own rank.

Badges:
- Level Architect, Mechanic Maker and Tabletop Translator unlock only at 100% path completion.
- path badges add no extra XP.

## Static QA

Run:

```bash
node --check app.js
node --check backend.js
```

Then verify the migration and live RPC definitions before deployment.

## Verified for this build

- `app.js`, `backend.js`, `data/pathway-data.js` and `data/theory-data.js` pass Node syntax checks.
- 64/64 static tracking/UI assertions pass.
- Live XP mapping verified: Theory 25, Designer source 20, Pathway checkpoint 0, Tutorial 25.
- All five existing Theory XP events were repaired from 100 XP to 25 XP.
- Live teacher summary RPC now returns all 15 tracking/activity fields listed above.
- Main Teacher view stays on the compact summary RPC; raw progress rows are fetched only after opening one class.
- Teacher scan rows and class snapshots include Max video and Fix This Model activity as well as the other 3D families.
- The seven current Guided Path practical checkpoints are visible to teachers and remain zero-XP.
- No new database tables were added.

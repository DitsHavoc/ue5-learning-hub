# UE5 Learning Hub v3.34.9 — Class XP Leaderboards

## What changed

- Added a new **🏆 Leaderboard** area for signed-in classes.
- Students can switch between **This week** and **All time** rankings.
- Shows Top 10, XP, level, current streak and the student's own position when outside the Top 10.
- Added class spotlights for **Biggest Progress This Week** and **Current Streak**.
- Teachers can pause or enable the leaderboard per class.
- Grades and assessment marks are deliberately excluded from ranking.

## XP rules

The leaderboard uses a server-side, idempotent XP ledger rather than trusting browser totals.

- Core lessons: existing lesson XP value (100–280 XP)
- Chapter Builds: existing build XP value (250–450 XP)
- Quick Tutorial: 25 XP
- Building Block: 25 XP
- Designer Studio build: 300 XP
- 3D Modelling lesson: 100 XP
- 3D Build X: 250 XP
- Fix This Model: 75 XP
- Sculpt Playground: existing exercise XP value
- First proper milestone evidence for a student/project/milestone: 25 XP
- Project milestone completed: 40 XP for each current project member
- Full project completed: 100 XP for each current project member
- First genuine XP activity of a day: 5 XP daily bonus

The same completion/evidence checkpoint can only award once, so reopening, re-closing or resubmitting cannot farm XP.

## Existing students

The migration backfills XP from existing lesson completions, milestone evidence, completed project milestones and completed projects. Existing work is not edited or deleted.

## Small sync fix

Sculpt Playground cloud completions are now restored into the local student state on sign-in, matching the existing teacher progress view.

## Database

Apply:
`migrations/20260828_27_class_xp_leaderboards.sql`

This migration has already been applied to the live UE5 Learning Hub Supabase project.

# UE5 Learning Hub v3.39.0 — Study Tools Refresh

29 Aug 2026

## Why
Revision Quizzes, Glossary, Challenge Board and Homework were still largely inherited from the older Unreal-only Hub while Designer Studio and 3D Modelling had become much broader. This pass brings the study/reference layer up to the same standard without adding another assignment system.

## Revision Quizzes
- Expanded from 44 Unreal-only questions to **98 questions** across three areas.
- Retains all 44 existing Unreal lesson questions.
- Adds all 30 Module 0 chapter questions from 3D Foundations.
- Adds 24 new scenario-based Designer Studio questions: 3 per discipline across all 8 disciplines.
- Focused revision now lets students select **Unreal Learning**, **Designer Studio**, **3D Foundations**, or individual topics inside those areas.
- Review links return students to the exact supporting lesson/module/chapter.
- Existing recent-score local storage is preserved.

## Glossary
- Expanded from 41 Unreal starter terms to **97 terms**.
- Adds separate **Unreal Engine**, **Game Design** and **3D Modelling** filters.
- Adds core game-art terms including topology, edge loops, quads/tris/n-gons, pivots, UVs, texel density, PBR, LODs, collision hulls and modular kits.
- Adds core design terms including landmarks, sightlines, signposting, affordance, player flow, pacing, hierarchy, set dressing, diegetic/non-diegetic audio, readability and playtesting.
- Global search now indexes the full combined glossary rather than only the old UE list.

## Challenge Board
- Expanded from 20 Unreal transfer challenges to **58 challenges** across the Hub:
  - 20 Unreal transfer challenges
  - 24 Designer Studio constraint challenges
  - 8 Build X variation challenges
  - 6 Sculpt Playground variation challenges
- Adds area filters and search.
- Challenges link back to the supporting content rather than duplicating walkthroughs.

## Homework & Independent Study
- Expanded from 20 Unreal homework tasks to **56 independent-study tasks**:
  - 20 existing Unreal homework tasks
  - 16 Designer field-research missions
  - 6 new 3D Foundations study tasks
  - 14 teacher-made Max video follow-along tasks
- Keeps **Copy for Teams** so teachers can move useful tasks into the college workflow quickly.
- Explicitly states that Teams remains the formal assignment/deadline/submission/grade system.
- Max video tasks reuse the existing video completion/XP system; this board adds no duplicate XP.

## Final badge pass
- Added **Game-Ready Foundations** — pass Module 0 + Model Doctor.
- Added **Max Apprentice** — complete all 14 teacher-made Max videos.
- Added **Industry Eye** — complete at least one industry deep dive in every Designer discipline.
- Added **Design Thinker** — complete all eight Designer Studio builds.
- Badges are derived from existing completion data; no new tables or XP rules are required.

## Navigation / data
- Challenge, Homework and Revision are now grouped under **Study tools** in the sidebar because they cover more than Unreal.
- Added `data/study-data.js` for Designer revision questions, 3D independent study and cross-Hub glossary additions.
- No completion IDs changed.
- No XP values changed.
- Existing badges are preserved; four meaningful pathway badges are added.
- No database migration.

# v3.44.3 — Blueprint Required Checks + Mini Quizzes

This supersedes v3.44.2. GitHub main was still v3.44.1 when this package was built, so v3.44.3 contains the v3.44.2 teaching/cheat-sheet work as well.

## Upload
- `index.html`
- `data/blueprint-foundations-learning.js`
- `cheatsheet.html`
- `cheatsheet.css`
- `blueprint-checks.html`
- `blueprint-checks.css`
- `blueprint-checks.js`

Existing Blueprint screenshot assets from v3.44.1 remain unchanged.

## New: Blueprint Checks
Standalone page linked under **Study tools → Blueprint Checks**.

Every section has:
**A. Required Practical Proof**
then
**B. Quick Knowledge Check**

Sections:
1. Variables & State — 5 questions, pass 4/5
2. Logic & Branching — 5, pass 4/5
3. References — 5, pass 4/5
4. Functions — 5, pass 4/5
5. Arrays & Loops — 5, pass 4/5
6. Enums & State — 5, pass 4/5
7. Structs & Maps — 5, pass 4/5
8. Final Blueprint Foundations — 10, pass 8/10

Questions are scenario-based: choose a type, predict a Branch route, diagnose None references, choose Array/Enum/Struct/Map, identify runtime state, etc.

## Required practical evidence
Students cannot get a green section just by passing the quiz. A section only shows **READY TO MOVE ON** when:
- all required practical proof boxes are ticked
- quiz pass mark is achieved

This is intentionally a classroom self-check, not formal assessment.

## Local progress
Ticks, quiz passes and best score are stored in browser localStorage on that device. No new database tables, no Supabase changes and no XP changes.

## Guided Path
The Blueprint Foundations path now links directly to the matching required check after each practical chunk and finishes with the 10-question final check.

## v3.44.2 included
This package also includes:
- State / Instances / Ownership / Debug Flow lab
- expanded 6-item Code Doctor
- MAKE → BREAK → FIX → EXPLAIN final practical
- dedicated searchable / printable UE5 Cheat Sheet

## Safety
No changes to app.js, backend.js, Supabase, original core data files, roster controls, Prison Cell patch or visual CSS.

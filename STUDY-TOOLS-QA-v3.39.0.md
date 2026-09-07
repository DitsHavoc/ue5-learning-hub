# Study Tools QA — v3.39.0

## Content counts
- Revision bank: **98** questions
  - Unreal: 44 existing
  - 3D Foundations: 30 existing chapter questions
  - Designer Studio: 24 new scenario questions
- Glossary: **97** unique terms
- Challenge Board: **58** challenges
  - Unreal 20
  - Design 24
  - 3D Build X 8
  - Sculpt 6
- Homework / Independent Study: **56** tasks
  - Unreal 20
  - Designer field research 16
  - 3D Foundations 6
  - Max video practice 14

## Badge pass
- Existing badges preserved.
- New derived badges: `foundations-ready`, `max-apprentice`, `industry-eye`, `design-thinker`.
- All use existing synced completion arrays/IDs; no database fields or XP mapping changes.

## Compatibility
- Existing Unreal lesson IDs unchanged.
- Existing Designer module IDs unchanged.
- Existing Module 0 chapter IDs unchanged.
- Existing Build X / Sculpt IDs unchanged.
- Revision recent-score store key unchanged: `ue5hub:v315:revision-results`.
- Existing lesson-page Copy for Teams button remains supported.
- No state schema, XP mapping or Supabase migration required.

## Static validation target
- All JavaScript syntax checked with Node.
- All referenced local assets checked.
- Literal internal top-level routes checked.
- FULL ZIP and MINIMAL-over-v3.38.2 overlay must reproduce the v3.39.0 working tree exactly.
- No browser visual/runtime test should be claimed unless one actually runs.

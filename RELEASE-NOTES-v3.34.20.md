# v3.34.20 — Unreal Learning Consolidation

## What changed

This release reduces duplicate Unreal learning surfaces without deleting practical outcomes.

- Programming Quick Tutorials now present **26 recipe families** instead of 47 equal top-level tutorial cards.
- All **47 practical builds are preserved**.
- **44 builds** live inside the 26 recipe families.
- Three near-duplicate builds are now surfaced from their Core Lesson instead of as competing top-level recipes:
  - Smooth Timeline Door → **Timelines & Lerp**
  - Save a Checkpoint Between Sessions → **SaveGame**
  - Use a Struct and Data Table for Game Content → **Data Structures & Data Tables**
- Family pages keep related outcomes together while retaining the original individual tutorial routes, instructions, completion state and XP behaviour.
- Quick Tutorial search now searches recipe-family titles plus every contained outcome.
- Site-wide search still indexes every individual practical build, including the three lesson applications.

## Epic paste assists

- All **39 official Epic paste assists** now carry Core Lesson mappings.
- Those assists are surfaced inside **15 relevant Unreal Learning lessons** in a collapsed contextual section.
- Recipe families also surface the Epic assists relevant to their contained builds.
- The standalone Snippet Bank remains available, but is now labelled **Epic Paste Assists** and moved into the sidebar's **Reference** section.
- Raw Epic clipboard payloads remain on Epic; the Hub continues to store only source links, context, prerequisites and reconnection guidance.

## Safeguards

- No tutorial build was deleted.
- Existing tutorial IDs and completion records are preserved.
- No Supabase schema, RLS, RPC, class, project, evidence, XP or leaderboard changes.
- Teacher capture count remains **76**.

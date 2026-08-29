# UE5 Learning Hub v3.34.12 — Deep Official Source Mining

**Date:** 29 Aug 2026

## Purpose

Continue the UE5.8 visual-alignment pass by mining deeper official Epic documentation and sample-oriented learning material before asking the teacher to create bespoke classroom screenshots.

## Changes

- Reduced genuine teacher screenshot groups from **90 to 80**.
- Core Lesson captures reduced from **17 to 9**.
- Programming / Quick Tutorial captures reduced from **53 to 52**.
- Building Block recognition captures reduced from **6 to 5**.
- Design Studio technical UE captures remain **14**.
- The original seven Building Block diagrams remain separate and do not require teacher screenshots.

### Newly covered with official Epic UE5.8 visuals

- Blueprint placed-instance / Instance Editable workflow.
- Blueprint Interface implementation through Class Settings and the implementation graph.
- Box Collision sizing and Other Actor object comparison workflow.
- Animation Blueprint movement variables: Speed and Is Falling / in-air state.
- Launch Character node/pin reference for the Dash tutorial.
- Data Assets recognition/reference.

### Captures removed because existing official visuals already teach the repeated operation

The following Core captures are no longer required:

- Blueprint Classes & Instances
- Events & Execution
- Branches
- Functions & Macros
- Interfaces & Event Dispatchers
- Collision & Overlaps
- UMG & Gameplay UI
- Animation Blueprints & State Machines

The following additional captures are no longer required:

- Dash setup / Launch Character
- Building Block: Data Assets

Exact Hub-specific names, values and rules remain in the written instructions and captions. Custom multi-node Blueprint graphs and exact project-specific states remain on the teacher-capture list.

## Database

No database migration is required. Supabase schema, RLS policies, RPCs, XP/leaderboard logic, classes, projects, evidence and teacher supervision are unchanged.

## Validation

Release validation includes JavaScript syntax checks, patch/whitespace checks, ZIP integrity checks and a minimal-overlay reproduction/hash comparison against the full build.

**Browser visual testing is not claimed unless separately completed and recorded.**

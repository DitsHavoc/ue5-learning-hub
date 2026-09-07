# UE5 Learning Hub v3.38.0 — Game-Ready 3D Foundations

Date: 29 Aug 2026

## What changed

The 3D Modelling Studio now opens with **Module 0 — Game-Ready 3D Foundations**, replacing the old Modeller Mindset/photo-collage landing block with a structured learning gate.

The module contains six sequential chapters:

1. Read the Mesh
2. Work in 3D Space
3. Spend Geometry Wisely
4. Transforms & Pivots
5. UVs & PBR Materials
6. Make It Game Ready

Each chapter contains short applied theory, a visual reference and a five-question scenario quiz. Students need **80%** to pass a chapter. Passing awards **20 XP once** and unlocks the next chapter.

After all six chapters, **Model Doctor** unlocks: a 12-question mixed diagnostic quiz covering topology, views, geometry budgets, repetition, pivots, UVs, PBR materials, collision and engine-readiness. Students need 80% to pass. First pass awards **100 XP**.

## Build X gate

Students can still open and practise any Build X brief. New Build X completion is locked until Module 0 and Model Doctor are passed. Existing Build X completions remain valid and are not revoked. Teachers can bypass the gate for classroom support.

## Theory source and modernisation

The module is rebuilt from the college `3D Modelling - Theory.pptx` rather than reproducing the PowerPoint as slides. Existing topics such as polygon structure, coordinate systems, orthographic/perspective views, pivots, UVs, collision, LODs and mesh uses are retained, but phrased as decisions a game artist makes while building.

Older material is modernised where needed: triangles are treated as normal game geometry rather than inherently bad, n-gons are discussed in terms of predictable triangulation/shading, and the old Diffuse/Specular terminology is reframed around a modern PBR material workflow.

## Tracking and teacher visibility

- New completion IDs: `modeltheory:<chapter-id>`
- Final completion ID: `modelfoundation:final`
- Theory completions appear in student progress, class progress, teacher detail and global search.
- Local progress syncs to the existing `lesson_progress` system when a student signs in.
- No assignment/submission workflow was added; Teams remains the formal assignment space.

## XP migration

Migration `20260829_31_model_foundations_xp.sql` updates the existing server-side learning XP mapping only:

- `modeltheory:*` = 20 XP
- `modelfoundation:final` = 100 XP

The migration was applied successfully to the live UE5 Learning Hub Supabase project on 29 Aug 2026 and the values were verified after deployment.

## Compatibility

All existing 3D Modelling lesson, Build X and Fix Clinic IDs remain unchanged. The release does not alter project/evidence/class schemas or Critique Board behaviour.

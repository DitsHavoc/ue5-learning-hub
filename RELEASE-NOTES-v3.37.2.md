# v3.37.2 — Split Viewport Step Visuals

## What changed

The Crate, Barrel / Canister and Sci-fi Wall Panel Build X pages now use the approved **3ds Max-style low-poly viewport progression** as the teaching visual standard.

Each of the three builds now has two layers:

1. **Full roadmap before Step 1** — students can see the complete mesh progression before starting.
2. **One isolated viewport stage inside the relevant step** — the image they need is beside the instruction that creates it, so there is no scrolling back to decode a large composite.

The crate guide was also made more gradual. It now separates the early **main cuts / frame loops** from the later **Inset + Extrude panel shaping** step. The resulting progression is:

`Box → Main cuts → Shape panels → Support loops → restrained final low-poly form → UV → pivot/export`

Barrel uses:

`Low-side cylinder → essential profile loops → barrel shape/bands → clean final bevels → UV seam → Unreal scale proof`

Sci-fi Panel uses:

`Base slab → primary forms → secondary/support geometry → focal detail/final low-poly read → chamfer check → game-distance check`

## Teaching intent

The images are deliberately not presented as exact polygon-count targets. Their job is to teach students to watch the model **grow only when geometry earns its place**, with shaded form and Edged Faces visible together.

## Preservation

- 12 / 12 modelling lesson IDs unchanged.
- 8 / 8 Build X IDs unchanged.
- 6 / 6 Fix This Model IDs unchanged.
- Existing progress IDs preserved.
- No Supabase/database migration.

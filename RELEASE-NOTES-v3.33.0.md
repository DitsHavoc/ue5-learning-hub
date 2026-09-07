# v3.33.0 — Official Epic Imagery Pass

## Goal

Make Unreal imagery trustworthy. A screenshot beside a practical step must show that exact operation or setting; “same general topic” is not enough.

## What changed

- Audited all **20 Unreal core lessons**, **47 Building Blocks** and **47 Programming Quick Tutorials**.
- Rebuilt v3.33 from the genuine v3.32.7 stable chain rather than treating the abandoned v3.33 candidate as a baseline.
- Practical recipe imagery now uses explicit per-step `recipeVisuals` arrays. A `null` entry stays blank and cannot fuzzy-match a nearby support image.
- Removed stale `visual` fields from tutorial/support steps so old fuzzy imagery cannot silently return through a future fallback.
- Added/kept official Epic UE5.8 documentation imagery only where the source image genuinely illustrates the feature/action.
- Kept current classroom Unreal captures in explanatory sections when they accurately show the concept.
- Kept original diagrams for conceptual relationships and clearly labels them as non-UE UI.
- Kept Silent Hill 2 imagery only as a **GAME / DESIGN TARGET** for the fog tutorial, separate from Unreal technical references.
- Removed generic Widget Blueprint imagery from health-bar, score/lives, crosshair, interaction prompt and objective tutorials.
- Removed generic AI Perception, SaveGame and Niagara hero/reference images where they did not show the exact Blueprint/settings being taught.
- Removed the unrelated classroom Data Table rows from the `TrainingSword / HeavySword / Medkit` practical step.
- Removed the unrelated classroom Branch and EventGraph screenshots from practical steps while retaining them as honest concept examples.
- Corrected the Enhanced Input tutorial so the IMC mapping step uses Epic's actual **Input Mapping Context** image rather than the Content Browser asset-creation menu.
- Reduced Building Block direct imagery to the references that pass the stricter match test.
- Existing image lightbox, responsive image sizing and remote-image fallback are retained.

## Final strict-pass numbers

- 20/20 lesson recipes protected by exact indexed visual slots.
- 47/47 Quick Tutorial recipes protected by exact indexed visual slots.
- **24** lesson practical steps have an exact visual.
- **19** Quick Tutorial practical steps have an exact visual.
- **43** exact practical visuals total.
- **13/47** Building Blocks have a direct image; the rest deliberately remain image-free.
- Reused practical images now occur only for the same exact Unreal operation repeated in another lesson/tutorial (for example AI Move To, Line Trace construction, Widget Blueprint creation, Data Table Row Type or Timeline Float Track).
- No licensed book figures are used in the audited Unreal lesson/Building Block/Quick Tutorial technical visual paths.

## Remaining capture work

See `UNREAL-SCREENSHOT-CAPTURE-LIST-v3.33.md`. It contains only cases where our own current classroom screenshot would be more accurate than a generic substitute.

## Database

No Supabase/database migration.

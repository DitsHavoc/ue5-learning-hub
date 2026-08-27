# v3.33.0 — Official Epic Visual Accuracy Pass

## Goal

Make Unreal imagery trustworthy. A visual beside a practical step must explain that exact step; a merely related Blueprint/editor image is no longer good enough.

## What changed

- Audited Unreal core lessons, Building Blocks and all 47 Programming Quick Tutorials.
- Practical recipe visuals are now **explicitly mapped to the exact studentRecipe step** instead of inherited through fuzzy text matching.
- Every Unreal lesson/tutorial recipe now has an explicit visual slot. If there is no exact image, the slot is deliberately empty.
- Added official Epic UE5.8 documentation visuals where they genuinely match the feature/action.
- Kept a small number of current classroom Unreal captures where they are a better exact match.
- Added visual support to 23/47 Building Blocks where an exact useful reference exists.
- Separated **GAME / DESIGN TARGET** imagery from **OFFICIAL UE5.8 REFERENCE** imagery in Quick Tutorials.
- Removed Unreal-side book figures from the practical/reference visual path in this pass.
- Silent Hill fog now treats Silent Hill imagery as the design target and Unreal screenshots as the technical reference.
- Official-source imagery is labelled `OFFICIAL EPIC DOCS` and links back to the source documentation page.
- Existing click-to-enlarge lightbox, responsive image sizing and remote-image fallback remain in place.

## Accuracy policy

1. Exact official Epic visual first.
2. Current classroom capture when the official docs do not show the exact action/settings.
3. Original explanatory diagram for a relationship/concept where a screenshot is not the right teaching tool.
4. Game imagery only for design analysis/reference, never masquerading as an Unreal click instruction.
5. **No image is better than the wrong image.**

## Numbers

- 20/20 Unreal core lesson recipes protected by explicit visual-slot mapping.
- 47/47 Programming Quick Tutorial recipes protected by explicit visual-slot mapping.
- 55 exact practical recipe visuals currently populated: 34 lesson steps + 21 tutorial steps.
- 23/47 Building Blocks have a direct visual reference.
- 28 unique linked source pages across the current Unreal visual reference set.
- 0 missing local image files in the v3.33 visual QA.

## Remaining capture work

See `UNREAL-SCREENSHOT-CAPTURE-LIST-v3.33.md`. This is intentionally a targeted list for exact mechanics/settings that the official docs do not illustrate well enough.

## Database

No Supabase/database migration.

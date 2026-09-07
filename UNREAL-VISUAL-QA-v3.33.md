# Unreal Visual QA — v3.33

## Audit scope

- 20 Unreal core lessons.
- 47 Unreal Building Blocks.
- 47 Programming Quick Tutorials.
- Practical step images, lesson explanatory visuals, official Epic references and Quick Tutorial reference images.

## Pass rules applied

1. Official Epic UE5.8 imagery first **only when the image itself matches the teaching point**.
2. Current classroom UE screenshots second.
3. Original diagrams for concepts/relationships, explicitly presented as diagrams rather than Unreal UI.
4. Game imagery only for design/reference analysis.
5. No visual is preferred to a vaguely related visual.
6. Practical images are mapped by exact recipe index; fuzzy support-step matching is disabled whenever a `recipeVisuals` array exists.
7. Old support-step image metadata has been removed from the audited Unreal lessons/tutorials to stop it reappearing later.

## Static/data checks

- Course version: 3.33.0; 20 lessons.
- Quick Tutorial version: 3.33.0; 47 tutorials.
- Building Block version: 3.33.0; 47 blocks.
- Every lesson `studentRecipe` has an equal-length `recipeVisuals` array.
- Every Quick Tutorial `studentRecipe` has an equal-length `recipeVisuals` array.
- 24 lesson recipe steps contain a direct exact-match visual.
- 19 tutorial recipe steps contain a direct exact-match visual.
- 13 Building Blocks contain a direct visual.
- Generic/partial Building Block visuals were removed rather than padded with a related screenshot.
- Local images referenced by the audited paths exist in the build.
- No `assets/book...` references exist in the audited Unreal technical visual paths.
- Epic-labelled remote images point back to an Epic Developer Community documentation source page.
- Silent Hill images are labelled as design/reference imagery and point to the official KONAMI product page.
- Practical duplicate-image review: remaining duplicates are same-operation reuse, not cross-topic decoration.
- Lightbox markup/action remains in `zoomableImage()` and existing visual sizing rules remain active.

## Specific false matches removed/fixed

- Editor practical step: old “Outliner close-up” did not actually contain the Outliner — removed.
- Events practical step: old classroom image used `Get All Actors of Class`, not the requested Print String chain — removed from the step.
- Branch practical step: old classroom image used an `IsExtracted` Boolean, not `Health <= 0` — removed from the step.
- Collision practical step: generic collision-response image did not show `Trigger + Generate Overlap Events` — removed from the step.
- Data Table practical step: classroom table contained unrelated trait rows — removed from the item-data step.
- Animation practical steps: Epic State Machine examples explain the system but do not show the Hub's `Speed`/`IsInAir` transition rules — kept in explanation, removed from the exact steps.
- Enhanced Input IMC step: corrected from the Content Browser menu to Epic's actual Input Mapping Context image.
- Camera Shake values: Epic's editor image does not show the Hub's exact numeric teaching values — practical image removed; teacher capture requested.
- Generic Widget Blueprint references removed from tutorials where the mechanic was health, score/lives, crosshair, interaction prompt or objective text.
- Generic SaveGame / AI Perception / Niagara references removed when they did not show the exact Blueprint/settings being taught.

## Source-page verification

The Epic source pages used by the pass were checked against current UE5.8 documentation for the relevant topics, including Enhanced Input, Variables, Flow Control, Functions, Components, Collision, Line Traces, Timelines, UMG, Data Tables, Navigation/AI, Animation, Camera Shake, Exponential Height Fog and Volumetric Fog. Remote image files retain the Hub's existing graceful fallback to the linked source page if Epic changes an asset URL.

## Browser QA status

A headless Chromium run was attempted in the build environment but did **not** complete successfully, so **no successful browser visual test is claimed for v3.33**. Static/data/JS/asset/ZIP validation is the release gate here; a short human browser eyeball after deploy is still recommended for remote image loading and final layout.

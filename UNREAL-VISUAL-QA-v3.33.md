# Unreal Visual QA — v3.33

## Pass criteria

- Practical images attach to the exact rendered recipe step, not a nearby/fuzzy-matched support step.
- A missing exact image is allowed and preferred to an inaccurate substitute.
- Game/reference imagery is visually and verbally separated from Unreal technical instruction.
- Official Epic images include source-page attribution/linking.
- Local classroom images resolve from the repository.
- Unreal practical/reference visual paths contain no book-figure assets in this pass.
- Existing responsive sizing and lightbox behaviour remain unchanged.

## Automated/data checks

- Course: 20 lessons, version 3.33.0.
- Programming Quick Tutorials: 47 tutorials, version 3.33.0.
- Building Blocks: 47 blocks, version 3.33.0.
- All 20 lesson `studentRecipe` arrays have equal-length `recipeVisuals` arrays.
- All 47 tutorial `studentRecipe` arrays have equal-length `recipeVisuals` arrays.
- 34 lesson recipe steps currently carry an exact visual.
- 21 tutorial recipe steps currently carry an exact visual.
- 55 exact practical recipe visuals total.
- 23 Building Blocks currently carry a direct visual.
- 8 local classroom visual references checked and present.
- 0 `assets/book...` references in the Unreal visual paths audited by the v3.33 checker.
- 28 unique linked source pages in the current Unreal visual reference set.

## Important implementation fix

The previous practical renderer could obtain a visual by fuzzy-matching the exact `studentRecipe` instruction to a nearby explanatory/support step. That was useful for prose but unsafe for imagery: a semantically related screenshot could appear beside the wrong click/action.

v3.33 passes `recipeVisuals` directly into `renderSingleClearGuide()`. When this direct array exists, the practical renderer uses only the image assigned to that exact recipe index. Every Unreal lesson/tutorial has the array, including `null` entries. This prevents fallback to a merely related support-step image.

## Remote imagery note

The Hub uses source-linked remote Epic documentation images for many official visuals. Source documentation pages were selected from current UE5.8 documentation. The app already has a remote-image failure fallback that links the learner to the source page if an image cannot be loaded.

## Browser QA

Static/data/JavaScript checks are part of the release packaging pass. Automated headless Chromium has historically been unreliable for this project and is **not** treated as a successful visual-browser test unless it actually completes. A quick human eyeball after deploy remains recommended for layout and remote-image loading.

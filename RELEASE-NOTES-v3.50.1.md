# UE5 Learning Hub v3.50.1 — Landscape Guide Home Fix

## Why this patch exists

The Landscape Master Guide is an Unreal Engine workflow tutorial, so its authoritative home is now **Unreal Learning**, not Designer Studio.

## Changed

- Moved `Landscape: From Blank Terrain to Playable Environment` out of the Designer Studio recipe list.
- Added a prominent **Landscape & World Building** entry on the Unreal Learning landing page.
- Kept the same tutorial ID: `landscape-master-guide`.
- Kept all 78 real classroom screenshots and all tutorial content unchanged.
- Kept the guide out of the short **Quick Tutorials** library so a 90–120 minute master guide is not mislabelled as a quick recipe.
- Added a clear Designer Studio → Unreal Learning bridge on **Landscape, Terrain & Foliage**.
- Added a clear end-of-guide link back to Designer Studio for terrain readability, environment design and the Project Nature/Fab art pass.
- Updated global search metadata so the guide is labelled **Unreal Learning • Landscape & World Building**.

## Progress / database

- No database migration.
- No progress reset.
- The tutorial ID is unchanged, so any completion already recorded for `landscape-master-guide` remains valid.

## Runtime files changed from v3.50.0

- `index.html`
- `app.js`
- `data/landscape-master-guide.js`

If updating directly from v3.49.1, also upload the included `assets/tutorials/landscape-master/` folder.

# v3.43.1 — Unreal Screenshot Pass

Built directly on the current v3.43.0 live repository state.

## Upload
Upload/replace:
- `index.html`
- `data/prison-cell-learning.js`
- the whole folder `assets/tutorials/prison-cell/`

## Added classroom screenshots

### Greybox a Playable Room
- Third Person project/template selection

### Cut Openings with Geometry Brushes
- where to find Geometry Brushes
- X/Y/Z Brush Settings
- Additive vs Subtractive dropdown
- Subtractive doorway/cut result
- Brush Editing mode

The screenshots are the teacher's own Unreal captures and are wired directly to the step they explain.

## Image optimisation
The original PNG captures are converted to high-quality WebP for the site. This keeps UI text readable while reducing page/network weight.

## Still worth capturing later
These are optional future improvements, not blockers for Monday:
- selected Cube + Move gizmo + Details → Transform
- simple prison-cell shell
- player/mannequin beside doorway/furniture
- Play-mode view inside the greybox
- ambientCG download/maps
- Unreal PBR material graph
- lighting before/after

## Safety
No app/backend/Supabase/Theory/Guided Path logic has been replaced.
Only the Prison Cell additive data patch, version badge/cache key, and new local screenshot assets are included.

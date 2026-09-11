# v3.44.6 — Prison Cell Unreal Units Pass

Small additive teaching fix for tomorrow's Prison Cell lesson.

## Changed
- Uses Unreal Units first: 1 uu = 1 cm.
- Removes the oversized 4.5 m × 6 m independent starter suggestion.
- New starting cell reference: roughly 300 × 400 uu internal floor space.
- Ceiling reference: roughly 280–300 uu.
- Entrance reference: roughly 100–120 uu wide × 210–230 uu high.
- Bed proxy: roughly 90 × 200 uu.
- Table top: roughly 70–80 uu from the floor.
- Makes clear that all values are starting points, not rules.
- Requires Play-mode testing and deliberate 25–50 uu changes where needed.
- Evidence sentence now records the actual uu change.

## Safety
This does not replace `prison-cell-learning.js`.
It adds one tiny runtime patch after it, so the existing Prison Cell guides/images remain untouched.

## Upload
- `index.html`
- `data/prison-cell-units-fix.js`

All other files in this ZIP are carried forward from v3.44.5 for convenience.

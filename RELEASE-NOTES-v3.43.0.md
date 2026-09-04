# v3.43.0 — Prison Cell Guided Path + Practical Lesson Method

This is an additive teaching-content patch built on the current v3.42.6 site.

## Upload to the repository root
- `index.html`
- `data/prison-cell-learning.js`

No existing large data file needs replacing.

## New Guided Path
**Prison Cell: Greybox → Game-Ready**

The path follows:
PLAN → MAKE → PROVE → LEARN → MAKE → PROVE → materials → mood → 3D replacement → final playtest.

It is designed around live classroom teaching rather than replacing the teacher demonstration.

## Existing guides improved
- **Greybox a Playable Room**
  - works from a fresh Third Person project
  - W/E/R + clean Transform values
  - room shell + simple placeholders
  - explicit prison-cell example
  - Play-mode scale test
  - preserve the clean greybox
- **Check Player Scale & Metrics**
  - now starts inside the student's actual room
  - tests entrance, camera, furniture and movement clearances
  - records useful metrics only after testing
- **Light a Horror Corridor**
  - wording widened so the same method clearly applies to a cell/room/corridor
- **Use Post Process for Mood**
  - wording now reinforces: light first, grade second

## New mini-guides
- **Cut Openings with Geometry Brushes**
  - Additive vs Subtractive
  - grid discipline
  - cut one doorway/window
  - Play-test the result
  - optional advanced Brush Editing (Shift + 7)
- **Use an ambientCG Material in Unreal**
  - choose a useful CC0 surface
  - default classroom choice: 2K
  - identify colour / roughness / DirectX normal
  - import cleanly
  - connect PBR maps correctly
  - check texture scale from player height

## Teaching method established
Practical Guided Paths now explicitly follow:

**PURPOSE → PRINCIPLE → DEMONSTRATION → MAKE → TEST → IMPROVE → EVIDENCE → NEXT SKILL**

Student-facing shorthand:

**LEARN → MAKE → PROVE**

Recurring reflection:
**What did you plan? What did you make? How did you test it? What changed because of the test?**

## Safety
This patch does not replace or modify:
- `app.js`
- `backend.js`
- `styles.css`
- `visual-refresh.css`
- `visual-final.css`
- `data/design-data.js`
- `data/pathway-data.js`
- Theory data
- Supabase configuration
- roster controls

The new JavaScript runs after the existing Design + Guided Path data are loaded and patches them in memory before `app.js` starts. Removing the one script tag and file cleanly removes the feature.

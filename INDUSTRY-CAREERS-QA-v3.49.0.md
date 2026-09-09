# UE5 Learning Hub — Industry & Careers QA
## Release: v3.49.0 — Find Your Place

**Date:** 9 September 2026

## Result

**STATIC / DATA QA PASS.**

No database migration is required. The new feature is additive and preserves the existing course, project and progress IDs.

## Checks completed

### JavaScript syntax
Passed Node syntax checks across **all 27 JavaScript files** in the reconstructed v3.49.0 tree — **0 failures**.

### Career-data integrity
Validated programmatically:
- 7 unique chapter IDs
- 13 unique role IDs
- 4 unique career-story IDs
- 7 unique portfolio-challenge IDs
- 12 work-style reflection questions
- exactly 5 scenario questions per chapter
- every scenario answer index points to a valid option
- every reflection option maps to one of the four intended work-style signals
- every portfolio challenge references valid role IDs
- every included role has at least one mapped portfolio challenge

### Completion logic
Confirmed in code:
- chapter quiz remains locked until its meaningful checkpoint is ready
- 80% pass threshold (**4/5 scenario questions**)
- first pass records chapter completion
- XP is awarded once
- retakes preserve the best score without duplicate XP
- career profile evidence is kept separate from the 24 Game Design Theory lesson count

### Meaningful-evidence gates
Confirmed:
- Industry requires both credits and cluster work
- People requires three role reactions
- You requires work-style reflection, at least one evidenced hard skill, at least one evidenced soft skill and peer feedback
- Career Routes requires a saved prediction plus a personal lesson
- Reality requires role selection, three vacancy snapshots, a RED requirement and biggest gap
- Prove It requires challenge, employer requirement and scope cut
- Career Plan requires 6 / 12 / 24-month goals

### Supabase compatibility
Production schema inspected read-only:
- `lesson_progress.quiz` is JSONB
- primary key is `(user_id, lesson_id)`
- current policies allow own insert/update and teacher read where authorised
- current XP trigger only awards when `completed = true`
- existing XP function awards 25 XP for `theory:%` completion IDs

Therefore the new profile persistence can reuse existing infrastructure without DDL/RLS changes.

### Network Quiet regression check
The first implementation temporarily selected the `quiz` JSON column on every progress row so the career profile would be available. This was tightened before release:
- ordinary student progress rows keep the lean existing column set;
- only `lesson_id = career:profile` fetches `quiz`;
- the teacher class view also fetches career-profile JSON separately from normal progress rows.

This avoids turning the new Level 4 profile into a site-wide progress payload increase.

### Local references / load order
Confirmed:
- new career data script exists
- new career stylesheet exists
- career data loads before `backend.js` and `app.js`
- sidebar route exists once
- career data script exists once
- career stylesheet exists once
- v3.49.0 cache/version references added

### CSS structural check
`industry-careers.css` has balanced braces and is namespaced around the career UI classes.

### External source spot-check
Fresh public checks confirmed the critical current resources used by the pathway, including:
- UK Games Map; Sumo Digital co-development; Guildford Games / Bullfrog; Abertay games courses;
- current Into Games Level Designer and Gameplay Programmer role pages plus practitioner interviews;
- GDC Level Design portfolio talk; Work With Indies;
- all four embedded Noclip YouTube IDs (DMA Design, Hades, The Forgotten City and PLAYERUNKNOWN).

The Gameplay Designer role URL was corrected to Into Games’ current `/careers/role/gameplay-designer-games` route before packaging.

### Minimal-overlay verification
The v3.48.3 baseline was reconstructed from the available baseline + sequential update ZIPs. The v3.49.0 working tree differs only in the intended files before release documentation is added:
- `index.html`
- `app.js`
- `backend.js`
- `industry-careers.css`
- `data/industry-careers-data.js`

The release ZIP is generated from these intended changes plus the release/QA notes.

## Browser testing limitation
A local HTTP server responded successfully, but Chromium/Playwright navigation is blocked in this environment by administrator policy (`ERR_BLOCKED_BY_ADMINISTRATOR`) for both localhost and file URLs. **No claim of browser visual/runtime QA is made.**

This release has therefore been syntax-, data-, route-, persistence- and reference-checked, but should receive the normal quick classroom-browser click-through after deployment, especially:
- student role-interest buttons
- career-profile cloud save
- teacher class career snapshot
- embedded Noclip video cards
- mobile layout

## Known inherited baseline note
The reconstructed historical baseline references `roster-controls.js`, `visual-refresh.css` and `visual-final.css`, which are not contained in the old patch chain used to reconstruct v3.48.3 locally. This is an inherited packaging limitation, not a v3.49.0 change. For that reason the release is supplied as a **minimal overlay for the user's current v3.48.3 deployment**, rather than claiming the reconstructed local tree is a canonical full-build ZIP.

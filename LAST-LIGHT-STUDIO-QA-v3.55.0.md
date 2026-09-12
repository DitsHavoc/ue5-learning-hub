# The Last Light Studio Lesson — QA v3.55.0

## Baseline integrity

The build was created from the actual **v3.54.0 full build** (`UE5-Learning-Hub-v3.54.0-POWER-JAM-PROGRAMMER-FULL.zip`), not from the older v3.51 branch.

A recursive tree comparison against clean v3.54.0 found only the intended runtime changes/additions before release documentation was added:

- `app.js` — changed
- `index.html` — changed
- `data/last-light-studio.js` — added
- `last-light-studio.css` — added

## Critical v3.54.0 preservation hashes

- `data/github-unreal-team-guide.js` — **UNCHANGED** — `99d9f3f1a8753364f7e6dadfa2a0a655a3c8c0156772e2ca311000875fd582a4`
- `data/power-jam-programmer-guide.js` — **UNCHANGED** — `dc86c1e1e16df260b5302edb89b7544c1fe502cb0c00ac181174a0317205bcdf`
- `data/unreal-designer-data.js` — **UNCHANGED** — `9bd8220b613ad8abf3c480af89dc045b479d5658ecd53542cb148835c8d91ac4`
- `data/landscape-master-guide.js` — **UNCHANGED** — `cdd184a11f0b4119c2186c1dea6a34f2589258bc52a549323353302aa1e8a1dc`
- `data/sequencer-master-guide.js` — **UNCHANGED** — `94d5fb6ee7f4ecc7693eb9461d66b742f303011d5ace69aca30074436dcd9184`
- `backend.js` — **UNCHANGED** — `9a0bcbe5369db4f016307aa8ff81c0ba1325e88a950880e68e3593658d788448`
- `roster-controls.js` — **UNCHANGED** — `e0b7700e1da68a6d24dee78980d28ab82b96d92e4998da37e9f3ac9fda5f6434`
- `journey-cleanup.js` — **UNCHANGED** — `f74a9e9948558b4ce3da4b80601180a7cf95b2e42aa40accfa43169b9a8b047a`
- `signup-feedback.js` — **UNCHANGED** — `a3d267cf85948c86ea5610f09a1b5e33ce4fd3b1e23f5900474c39f0fff5ad13`
- `classroom-identity.js` — **UNCHANGED** — `8be85c205385951309d13564efa3b709a84592529b966cde1a3548bb88157703`

This explicitly preserves the GitHub and Jam work the class is already using.

## Content checks

- Environment module exists and receives the `studioLesson` CTA.
- `last-light-studio` tutorial injects successfully into `UE5_DESIGN_DATA`.
- **8 reference images** configured.
- **8 design-theory checks** configured.
- **6 lesson stages** configured.
- **6 resource/recovery cards** configured.
- Landscape Master Guide route retained.
- Sequencer Master Guide route retained.
- GitHub + Unreal Team Workflow route retained.
- Power Jam Programmer route retained.

## Syntax/static checks

- `node --check app.js` — PASS
- `node --check data/last-light-studio.js` — PASS
- Data-injection VM test — PASS
- New lesson is `libraryHidden`, so it does not clutter Quick Tutorials.
- Studio-project route activates **Designer Studio**, not Unreal Designer.
- No database migration included.

## External visual/source check

Reference source pages/visual URLs were checked on 12 September 2026 for Baily/Howth, South Stack, Beachy Head, Dear Esther, Lost Coast and Firewatch. Real-world Creative Commons images retain attribution/source links in the lesson.

## Browser note

No browser visual QA is claimed in this report. The build has static/data/syntax/integrity QA; classroom visual inspection after deployment is still recommended because several reference images are loaded from external source sites.

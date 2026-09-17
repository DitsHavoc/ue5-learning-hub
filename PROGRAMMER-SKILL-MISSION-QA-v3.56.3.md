# UE5 Learning Hub v3.56.3 — Programmer Skill Mission QA

## Baseline
Built as an additive patch for **v3.56.2 LOCAL ONLY**.

The v3.56.2 patch confirms `app.js` remains the v3.55.1 application build, so this update uses that application file as the code baseline and the v3.56.2 `index.html` as the local-mode baseline.

## Files changed / added
- `app.js` — changed
- `index.html` — changed
- `skill-missions.css` — added
- `data/programmer-skill-mission.js` — added

## Static checks
- `node --check app.js` — PASS
- `node --check data/programmer-skill-mission.js` — PASS
- v3.56.3 version badge — PASS
- `LOCAL ONLY` badge preserved — PASS
- new CSS loaded — PASS
- mission data loaded before `app.js` — PASS
- Skill Mission route present — PASS
- stage completion action present — PASS
- Unreal Learning card present — PASS
- mission included in global search — PASS
- static `index.html` duplicate IDs — 0
- mission data contains 10 unique stages — PASS
- every stage contains steps, test criteria and a definition of done — PASS

## Progress behaviour
- Stage 00 is initially available.
- Each next stage requires the previous stage to be marked working.
- Completed stages remain accessible.
- Progress is stored in `localStorage` only.
- Hub Reset Local Progress clears the Skill Mission progress key.

## Scope
No backend, Supabase config, signup, class, leaderboard or other account/cloud files are changed by this patch.

## Browser QA note
No automated full-browser visual QA is claimed. Perform a quick classroom smoke test after overlaying the patch:
1. footer/version badge shows v3.56.3 LOCAL ONLY;
2. Unreal Learning shows Programmer Skill Missions;
3. open Escape Room: Arrays & Maps;
4. complete Stage 00 and confirm Stage 01 unlocks;
5. refresh and confirm progress remains;
6. Reset local progress and confirm Stage 01 locks again.

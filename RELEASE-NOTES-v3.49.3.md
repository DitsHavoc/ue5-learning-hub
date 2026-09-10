# UE5 Learning Hub v3.49.3 — Secret Studio Protocol

**Build date:** 10 September 2026  
**Database migration required:** No

## What changed
Session 1 now ends the Industry chapter with a deliberately silly hidden reading/listening check. Students who reach the bottom are told not to read the instruction aloud, quietly walk to the classroom door when clear, do one slow 360-degree turn, return to their seat, and continue as if nothing happened. If someone asks, the instruction tells them to say **“pipeline check”**.

An accessible alternative tells students who cannot or should not move around the room to give the teacher one silent thumbs-up instead.

## Design intent
- Not graded.
- No XP.
- No button to fake completion.
- Does not gate Chapter 1.
- Appears after the Chapter 1 scenario check, so it tests whether students read to the end of the Session 1 Hub material.
- The Industry Reality Check / Watch Along remains unchanged and is still part of Session 1.

## Files changed
- `index.html` — cache/version bump and visible badge correction.
- `app.js` — Secret Studio Protocol on Industry only.
- `industry-careers.css` — tiny namespaced style block.
- `data/industry-careers-data.js` — data version bump only.
- `LEVEL4-FIND-YOUR-PLACE-LIVE-DELIVERY-MAP.md` — Session 1 note.

## Bandwidth
No Supabase query, storage object, image, polling request or external embed was added.

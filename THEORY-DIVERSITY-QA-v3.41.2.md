# Game Design Theory Diversity QA — v3.41.2

## Automated content checks

- PASS — 24 Theory lessons present.
- PASS — 24 unique primary case-study game labels.
- PASS — OMORI is the Environmental Storytelling case study.
- PASS — Jet Set Radio is the Game Feel & Feedback case study.
- PASS — every lesson has at least two professional/developer/official sources.
- PASS — 71 source cards total.
- PASS — lesson IDs are unchanged from v3.41.1.
- PASS — Guided Path theory references still resolve.
- PASS — Theory data parses and JavaScript syntax checks pass.
- PASS — app.js syntax check passes.
- PASS — no database migration required.

## Teaching review

The new case studies were chosen because the game demonstrates the principle clearly, not merely to maximise variety. Examples include:

- Journey → MDA / intended emotional experience
- Papers, Please → meaningful trade-offs
- XCOM 2 → uncertainty and probability
- Mario Kart 8 Deluxe → balancing / negative feedback
- Jet Set Radio → layered game feel and feedback
- Portal → onboarding through play
- Forza Motorsport → accessible information channels
- Half-Life 2 → affordances
- Firewatch → guidance within exploration
- OMORI → environmental storytelling
- HITMAN → emergent system interaction
- A Short Hike → scope and constraints
- Hades → iterative prototyping mindset
- Left 4 Dead → observation-led playtesting
- Slay the Spire → translating computation to tabletop systems

## Manual browser checks after upload

1. Open `#/theory` and hard refresh once.
2. Confirm footer/version shows **v3.41.2**.
3. Confirm every Theory card displays a `CASE STUDY • ...` chip.
4. Spot-check OMORI and Jet Set Radio lesson images and source links.
5. Spot-check at least one GDC link, one developer interview and one video link.
6. Confirm an already-completed Theory lesson remains completed.
7. Confirm Guided Paths still recognise previously completed Theory steps.

Browser rendering is not claimed as tested in the build environment; perform the short live visual check after upload.

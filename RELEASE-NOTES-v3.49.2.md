# UE5 Learning Hub v3.49.2 — Industry Reality Check

**Build date:** 10 September 2026  
**Baseline:** v3.49.1 Career Quiz Hotfix  
**Database migration:** No

## Purpose

Add a live **Watch Along / Industry Reality Check** to Level 4 Chapter 1 so students commit to their assumptions before the presentation reveals the evidence.

The activity is deliberately **not another graded quiz**. It records the student's first instinct, immediately explains the chosen answer, provides a stronger evidence-based answer where needed, and anchors the reveal in a real games-industry case.

## New student experience

Open **Industry & Careers → The Industry**.

The new section appears after the recovery/key-ideas block and before the longer case studies.

### Seven first-instinct reality checks

1. **Who actually made the game?** — lead developer vs wider co-development / outsourcing network.
2. **Does a bigger team make a better game?** — Hades / Supergiant as the scale counter-example.
3. **Does acquisition by a giant parent make jobs safer?** — Embracer growth and restructuring.
4. **Does shipping a major game prove the studio is financially healthy?** — 38 Studios / Kingdoms of Amalur.
5. **Is money already spent a reason to keep funding a troubled project?** — Skull and Bones and sunk-cost thinking.
6. **What does the Red Dead Redemption 2 “100-hour weeks” headline actually prove?** — source-literacy check using the later clarification and wider reporting.
7. **How large was GoldenEye 007's core team?** — historical scale and specialisation shock.

A student's first answer is intentionally locked once chosen. The point is to capture the original assumption rather than let students silently edit themselves after seeing the reveal.

### Reflection

Students can save one short response explaining which answer surprised them, challenged an assumption, or made them want more evidence. This is added to their existing career-profile JSON and can later feed the Assignment 1 summary.

## Optional live debate — Your Magnum Opus

A two-stage crunch discussion is included beneath the reality checks.

**Stage 1:** Seven years on a game; eight weeks to release; another 10–15 hours a week could make your work exceptional. Would you do it?

**Stage 2:** Add social/organisational pressure: everyone stays late, the lead works until midnight, overtime is called optional, the developer does not own the studio/IP, and saying no may feel risky.

The student's first and second positions are both preserved so the Hub can show whether extra context changed their view. There is no “correct” option. Students can save why their position changed or stayed the same.

## Teacher live Class Pulse

**Classes → open a class** now includes an aggregate **Industry Reality Check** pulse using the career-profile rows already loaded by the class dashboard.

It shows:
- responses per question;
- A/B/C/D distribution and percentages;
- the evidence-based strongest answer;
- no student names in the pulse itself.

This adds **no new Supabase query**. It derives the class distribution from the `career:profile` JSON already fetched by the existing Level 4 career view.

## Bandwidth

No new image assets, video autoplay, storage reads, tables or polling were added.

The update adds only small static JS/CSS/data text and reuses the existing single career-profile JSON row per student. External evidence opens on the original source site.

## Quiz hotfix retained

v3.49.1 behaviour is preserved: chapter scenario checks can be completed before or after the Hub checkpoint. A chapter completes only when both conditions are met.

Two old checkpoint descriptions that still implied “checkpoint first” were corrected.

## Runtime files changed

- `index.html`
- `app.js`
- `industry-careers.css`
- `data/industry-careers-data.js`

`backend.js` and Supabase are unchanged.

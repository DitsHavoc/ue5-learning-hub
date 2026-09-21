# UE5 Learning Hub v3.49.1 — Career Quiz Hotfix

**Date:** 9 September 2026  
**Database migration:** No

## Fix
The Industry & Careers scenario checks were rendered with disabled answers and a disabled submit button until the chapter checkpoint was already complete. On chapters with substantial checkpoint work this made the quiz look broken.

v3.49.1 changes the pathway to a two-part completion rule:

1. The scenario quiz is always usable.
2. The Hub checkpoint is still required for chapter completion and XP.
3. The two requirements can be completed in either order.
4. If the quiz is passed first, the pass is kept locally and the chapter automatically completes when the checkpoint is later saved.
5. If the checkpoint is completed first, passing the quiz completes the chapter immediately as before.

This applies to all seven Industry & Careers chapters and directly fixes the reported behaviour on:
- The Industry
- Careers Are Not Straight Lines
- Reality Check
- Prove It
- My Career Plan

## UX wording
The scenario panel now clearly distinguishes:
- CHECKPOINT REQUIRED
- CHECKPOINT READY
- QUIZ PASSED
- COMPLETE

The quiz no longer silently presents disabled controls.

## Network / database impact
No new table, column, policy or migration is required.

The only cloud write added by the two-way gate occurs when a chapter genuinely transitions to complete after both requirements are satisfied. This uses the existing `lesson_progress` completion path and does not add polling or broader reads.

## Files changed from v3.49.0
- `index.html` — version badge and `app.js` cache-buster only
- `app.js` — career quiz two-way completion fix

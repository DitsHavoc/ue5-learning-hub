# UE5 Learning Hub v3.30.0 — Single Clear Guide Pass

## Why this release exists
v3.29 added known-working values and exact first-build recipes, but some practical pages still contained two competing instruction layers: the new exact recipe followed by the older numbered walkthrough. That could make a page feel richer while making the learner less certain about which instructions were authoritative.

v3.30 removes that ambiguity.

## One authoritative walkthrough
All practical first-build routes now render as a single step sequence. Each step can carry:

- WHERE + DO THIS
- the exact first-build instruction/value
- YOU SHOULD SEE
- STOP + CHECK
- WHY
- IF YOURS DOES NOT MATCH

The old detailed numbered walkthrough is no longer repeated beneath the exact recipe on the same page.

## Unreal Engine
- 20/20 core lessons use the single-guide presentation.
- 47/47 Programming Quick Tutorials use the single-guide presentation.
- Existing detailed explanations are reused as step-level reasons/checkpoints/recovery rather than shown as a second competing tutorial.
- Additional vague first-build wording was tightened, including AI patrol spacing, collision tests, projectile collision radius, HUD placement, AI perception tests, attack acceptance radius, Niagara choice discipline and Silent Hill fog/light starting values.

## 3ds Max
- 12/12 modelling lessons use the single-guide presentation.
- 8/8 Build X projects use the single-guide presentation.
- The duplicate “detailed step explanation” block was removed from modelling lesson flow.
- Build X phase notes remain as a compact purpose/proof map, but no longer repeat a second list of micro-instructions.
- Additional first-build values were tightened for snapping, support loops, UV padding, barrel chamfer, tyre shoulder/tread, wall-panel recess/chamfer and sci-fi door scale/pivot tests.

## Teaching hierarchy
The practical page now prioritises:

**ONE GUIDE → CHECK EACH STEP → UNDERSTAND WHY → CHANGE IT → APPLY INDEPENDENTLY**

Long-form concepts, references, Stretch/Challenge, application tasks and troubleshooting remain available without competing with the immediate build route.

## Deliberate exception: independent application
Chapter Builds and later independent tasks are not converted into paint-by-numbers exercises. They are where the scaffold should begin to fade and students combine skills they already learned through prescriptive tutorials.

## Authoring guardrail
Added `INSTRUCTION-AUTHORING-STANDARD.md` so future tutorials can be checked against the same standard and the Hub does not drift back toward vague or duplicated instructions.

## Database
No database migration required.

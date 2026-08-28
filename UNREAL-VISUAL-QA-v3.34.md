# Unreal Visual QA — v3.34 FINAL

## Scope

Final imagery/text reconciliation audit for the Unreal Learning Hub v3.34.0.

## Data integrity

- Core Lessons: **20**
- Quick Tutorials: **47**
- Building Blocks: **47**
- Lesson recipe slots: **160**
- Tutorial recipe slots: **284**
- Exact lesson practical slots: **24**
- Exact tutorial practical slots: **44**
- Building Blocks with exact visual material: **34/47**
- Attached visual records audited: **250 remote + 7 local**

## Rules enforced

- Blueprint-side Epic material is checked before a classroom capture is requested.
- An image is only attached beside a practical step when it shows the relevant UI/action accurately.
- Similar-but-different graphs remain support/reference material rather than being presented as the student's exact result.
- Compound steps may use a small image gallery rather than forcing one screenshot to represent several actions.
- Game imagery remains reference/mood material, not technical Unreal instruction.
- Existing zoom/lightbox behaviour is preserved.
- No technical Unreal practical visual may point to a licensed-book asset.

## Final capture policy

The capture list is generated from the final reconciled recipes. Test-only, compile-only and reflection steps can remain intentionally image-free. Remaining captures are reserved for bespoke classroom values, graphs or UI states that current Epic imagery does not exactly show.

## Browser test status

A headless Chromium smoke run was attempted during final packaging, but Chromium timed out in this environment with D-Bus/zygote errors and produced no DOM output. **No successful browser visual test is claimed for v3.34.**

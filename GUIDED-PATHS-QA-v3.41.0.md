# Guided Paths QA — v3.41.0

## Static validation completed

- `node --check app.js` — PASS
- `node --check data/pathway-data.js` — PASS
- All 4 pathway IDs are unique.
- All referenced Theory lesson IDs exist.
- All referenced Unreal core-lesson IDs exist.
- All referenced Quick Tutorial / Designer practical IDs exist after the existing runtime Designer tutorial merge.
- All referenced Designer Studio build IDs exist.
- All referenced 3D Foundations chapter IDs exist.
- Model Doctor final reference resolves to the existing Foundation final.
- All referenced 3ds Max lesson IDs exist.
- All referenced Build X IDs exist.
- All Theory `applyLinks` keys resolve to existing Theory lessons.
- All internal Theory application links use existing Hub hash-route format.
- No new Supabase migration is required.
- No new pathway progress table/state was introduced; pathway progress is derived from existing completion state.

## Behaviour rules checked in code

- Normal site routes remain open.
- Guided step status is derived from existing completion helpers.
- Choice step = complete when any one option is complete.
- Grouped stage = complete only when all grouped items are complete.
- Activity step = deliberately untracked and never blocks path completion.
- Guided Paths themselves award no XP.
- Theory application cards do not mark content complete; they only navigate to existing Hub work.

## Browser visual/runtime test

Attempted local Chromium headless rendering against the packaged build on 31 Aug 2026. Chromium hung in the current container and timed out with DBus/environment errors before producing a screenshot. Therefore this release is **not claimed as browser-visual-tested** in this environment.

After GitHub deployment, perform a short live check:

1. Home page shows **Try a Guided Path** without breaking the existing area grid.
2. Sidebar → **Guided Paths** opens `#/pathways`.
3. Open each of the four path cards.
4. Confirm completed existing content displays as complete for a signed-in/student test account.
5. Confirm a choice stage advances after completing any listed choice.
6. Confirm all “Coming up” links still open — there should be no hard locks.
7. Open Player Agency and Game Feel Theory lessons and confirm **Put this into practice** cards appear.
8. Check mobile layout quickly at phone width.
9. Run global search for `playable level`, `tabletop`, and `guided paths`.

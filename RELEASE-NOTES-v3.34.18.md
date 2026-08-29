# UE5 Learning Hub v3.34.18 — Snippet Well Exhaustion Pass

## What changed

- Expanded the official Epic paste-assist bank from **31 to 39 targeted assists**.
- Added **8 new Blueprint graph assists** from two additional current Epic UE5.8 documentation pages:
  - **Adding Character Animation** — a complete Animation Blueprint state-update graph plus granular state-machine transition rules;
  - **Making Macros** — Epic's reusable `EnergyCheck` resource-gate macro for energy/stamina-limited actions.
- Added a dedicated **Animation** category so students can search directly for Anim Blueprint, Idle/Run, jump and landing transitions.
- Updated Snippet Bank search examples and Programming copy to surface animation and stamina/resource logic.
- Quick Tutorials for Sprint, Dash and Double Jump now surface the official Epic EnergyCheck macro as an optional clipboard assist.

## Exhaustion result

The 5.6–5.8 first-party Epic search was continued across Blueprint communication, functions, interfaces, dispatchers, Enhanced Input, UMG, SaveGame, arrays/data, projectiles/weapons, AI/navigation, Niagara, audio, camera and other common classroom systems.

Under the Hub's acceptance rule — **the source must contain genuine Unreal clipboard / `context_graph` data that materially saves Blueprint students work** — the remaining search results collapsed into four groups:

1. already-indexed Puzzle Adventure clipboard material;
2. the new Character Animation and Making Macros material added here;
3. C++ / API `Copy Full Snippet` blocks that are not pasteable Blueprint graphs;
4. screenshots, prose-only workflows or community-authored snippets rather than first-party Epic teaching material.

As of **29 Aug 2026**, that makes the current first-party pasteable Blueprint well effectively exhausted under this standard. Future Epic documentation can of course add new material, but there are no further high-confidence current 5.6–5.8 wins from this pass to add without lowering the quality bar.

## Bank totals

- **39 paste assists**
- **35 Blueprint graph assists**
- **4 Level Editor / viewport paste assists**
- **12 unique official Epic documentation pages**

## Capture impact

The teacher screenshot workload remains **76**. v3.34.18 makes more graphs reconstructable from Epic's clipboard data but does not count a paste source as a finished classroom screenshot.

## Validation

- `app.js` and `data/snippet-data.js` pass `node --check`.
- Snippet IDs are unique.
- All categories resolve.
- All source URLs are official `dev.epicgames.com` documentation pages.
- All related Hub tutorial IDs resolve.
- No Supabase schema or migration changes are required.

- Cleaned four stale `foundations-build` pseudo-links from earlier level-paste cards so every remaining Quick Tutorial bridge points to a real tutorial ID.

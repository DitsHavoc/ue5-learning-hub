# UE5 Learning Hub v3.34.17 — Blueprint Snippet Bank Deep Expansion

## What changed

- Expanded the Blueprint Snippet Bank from **9 broad source cards** to **31 targeted paste assists**.
- The 31 assists are still grounded in only **10 current official Epic UE5.8 documentation pages**; the Hub does not pretend repeated cards are new sources.
- Split large Epic pages into the exact systems students search for, including:
  - key data function, key Construction Script and pickup behaviour;
  - door colour setup and held-key checking;
  - HUD key updates and player widget setup;
  - switch overlap, Activate Once, multi-overlap safety and interaction lists;
  - moving-platform setup, cached endpoints, Timeline/Lerp movement and wait/reverse logic;
  - trap damage, HP HUD updates and the player game-over loop;
  - enemy initialisation, contact damage, line-trace detection, chase control and enemy HP;
  - win/level transition logic;
  - limited cube spawning with cleanup and cooldowns.
- Added **4 official level / viewport paste assists** for Epic blockouts and puzzle layouts, separate from the 27 Blueprint graph assists.
- Cards now show the relevant **Epic section name** and identify whether the clipboard payload belongs in a Blueprint graph or the Level Editor viewport.
- Snippet search now indexes source section and paste mode as well as title, description, tags and prerequisites.
- Quick Tutorial clipboard bridges use the broader wording “Unreal paste assist” so viewport pastes are not incorrectly labelled Blueprint graphs.
- The Snippet Bank header now reports both **paste-assist count** and **unique Epic page count**.

## Source policy

- Raw Epic clipboard payloads are **not mirrored** in the Hub.
- Students open the official Epic page and use **Copy Full Snippet** there.
- Official Epic UE 5.6–5.8 material remains acceptable when the workflow is materially accurate; every new assist in this release uses current UE5.8 documentation.
- A pasted graph is still a starting point: students should run it, alter it and explain it.

## Capture impact

The teacher screenshot workload remains **76**. v3.34.17 reduces the effort required to construct many of those remaining graphs, but does not count a clipboard source as a finished classroom screenshot.

## Validation

- `app.js` passes `node --check`.
- `data/snippet-data.js` passes `node --check` and JSON payload validation.
- All 31 snippet cards reference existing Hub tutorial IDs only.
- All source URLs are official `dev.epicgames.com` pages.
- No Supabase schema or migration changes are required.

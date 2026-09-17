# UE5 Learning Hub v3.56.3 — Programmer Skill Mission

Adds the first **Programmer Skill Mission** to the local-only Hub.

## New
- **Escape Room: Arrays & Maps** — a complete solo Blueprint mini-game.
- 10 sequential stages from project setup to final play-through.
- Student progression is stored in browser localStorage only.
- Each stage contains:
  - what the student is building;
  - why it exists;
  - exact UE5 Blueprint/editor instructions;
  - a stop-and-test gate;
  - common fixes;
  - a clear definition of done.
- Final game includes:
  - Start Menu;
  - Inventory String Array;
  - Battery pickup;
  - Generator / PowerOn state;
  - Key pickup;
  - String → String ItemDescriptions Map;
  - For Each Loop + Map Find inventory readout;
  - locked Exit requiring Power AND Key;
  - Win screen;
  - Play Again / Quit;
  - final full-game test and independent upgrade.

## Hub integration
- Appears in **Unreal Learning → Programmer Skill Missions**.
- Searchable from global Hub search.
- Opens at `#/skill-mission/arrays-maps-escape-room/start`.
- Stages unlock sequentially.
- Completed stages stay revisitable.
- **Reset local progress** also clears Skill Mission progress.

## Preserved
- Local-only mode.
- v3.56.2 homepage/local cleanup.
- Existing Power Jam Programmer.
- Existing GitHub + Unreal guide.
- Last Light.
- Landscape / Sequencer guides.
- Existing local course progress.

No database or Supabase migration is included.

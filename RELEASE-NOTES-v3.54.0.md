# UE5 Learning Hub v3.54.0 — Power Jam Programmer Guide

## What changed

Added a new photographed Unreal Learning Master Guide:

**⚡ Power Jam Programmer: Maps, Switches & Doors**

Direct route:

`#/tutorial/power-jam-programmer`

The guide is designed for complete beginners working as the Programmer in the two-person Power Jam. It starts from the shared Jam folder structure and takes the student through one reusable Blueprint mechanic:

`PowerStates Map → ActivatePower → HasPower → BP_PowerSwitch → BP_PowerDoor → test → reuse → GitHub handover`

## Classroom captures

The guide uses 27 local UE5 classroom captures supplied during the build. They show the actual checkpoints students should compare against, including:

- PowerStates as a Name → Boolean Map;
- POWER_A / POWER_B / POWER_C defaults;
- ActivatePower input and finished Map Add graph;
- HasPower input/output and finished Map Find graph;
- switch Actor setup, overlap collision, Instance Editable PowerID and finished graph;
- placed switch configured as POWER_A and the POWER RESTORED test;
- door Actor setup, RequiredPower, finished HasPower/Branch graph, placed POWER_A instance and NO POWER test.

The guide deliberately does **not** prescribe the Designer's level. The Designer owns Jam_Main and is expected to make the mechanic fun through layout, routes, pacing and playtesting.

## Pair-jam navigation

- Unreal Learning landing now presents the pair-jam sequence as **GitHub first → Power mechanic second**.
- Industry & Careers → **The People Who Make Games** now links to both the GitHub team guide and the Programmer power guide.
- The GitHub Master Guide now hands directly into the Power Jam Programmer guide.
- Site search has an explicit Power Jam fallback entry as well as the normal dynamically indexed tutorial entry.

## Revision

Added five scenario/knowledge questions covering:

- Name → Boolean Maps;
- Map Add overwriting an existing key;
- Instance Editable variables;
- matching PowerID / RequiredPower;
- proving a mechanic is reusable with POWER_B without changing the graph.

## Technical

- Version badge: **v3.54.0**.
- New data file: `data/power-jam-programmer-guide.js`.
- New local asset folder: `assets/power-jam-programmer/`.
- No Supabase migration.
- No `backend.js` change.
- Existing GitHub, Landscape, Sequencer, Industry, Designer and Revision features retained.

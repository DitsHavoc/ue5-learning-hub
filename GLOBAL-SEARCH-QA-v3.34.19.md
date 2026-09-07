# Global Search QA — v3.34.19

## Problem

The previous topbar search maintained separate hard-coded filters for each content collection. It searched only selected headline fields, sliced each collection independently and was fragile as new Hub areas were added.

## Repair

v3.34.19 replaces that code with one startup-built search index and a shared normalisation/ranking pipeline.

Indexed teaching surfaces:

- Unreal Learning core lessons
- Quick Tutorials
- Designer Studio modules and resources
- 3D Modelling Studio lessons, builds and repair clinics
- Sculpt Playground practices
- Building Blocks
- Official Epic Blueprint paste assists
- Glossary

The index recursively includes instructional content while excluding image/source URL payloads that add search noise.

## Static/data QA

Live-equivalent data harness result before static Hub-area entries: **288 indexed destinations**.

Representative query results were confirmed for:

| Query | Representative result |
|---|---|
| door | Door Construction snippet / Timelines & Lerp / Key and Locked Door |
| break hit result | Traces & Hit Results Building Block |
| energy check | Reusable Energy / Stamina Gate Macro |
| silent hill fog | Make Silent Hill-style Fog |
| retopology | Topology Clinic |
| save checkpoint | Save a Checkpoint Between Sessions / SaveGame |
| AI chase | AI core lesson / Move To / Enemy Chase tutorial |
| animation blueprint | Animation Blueprint glossary / core lesson / Building Block |
| niagara impact | Niagara Systems / Niagara Hit Effect |

## Browser-test status

Chromium headless was attempted with networking/Supabase stubbed out. The container Chromium process failed to complete and produced no DOM dump. Do not count this as a browser pass.

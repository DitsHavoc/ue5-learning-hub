# Unreal Learning Path QA — v3.32

## Data
- 39 Building Blocks
- 13 Core
- 24 Common
- 2 Later
- 5 shelves
- 20 existing Core System Lessons preserved
- 47 existing Programming Quick Tutorials preserved

## Relationship checks
- Every `requires` reference points to an existing Building Block.
- All 47 Programming Quick Tutorials map to at least one Building Block.
- Sample mappings checked:
  - Enhanced Input Action → Assets & Naming / Events / IA & IMC
  - Sprint → Blueprint Types / Variables / IA & IMC / Pawn, Character & Controller
  - AI Patrol → NavMesh / AIController & Move To / Blackboard & Behaviour Tree
  - Health Bar → Events / Variables / UMG
  - Line Trace Gun → Transforms / Traces & Hit Results

## Static checks
- Production JS/data syntax: PASS
- CSS braces: PASS
- Local file references: 571 checked / 113 unique / 0 missing
- Local HTTP smoke test: PASS

## Visual check
Automated Chromium visual capture is not claimed. The container's headless Chromium startup continues to hang, so a deployed-browser eyeball remains the reliable visual check.

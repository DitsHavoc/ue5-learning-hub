# UE5 Learning Hub v3.34.14 — UE5.6–5.8 Official Source Expansion Audit

This pass widens the **image-source pool** without weakening the Hub's accuracy rule.

UE5.8 remains the technical source of truth for current instructions and factual checks. Official Epic **UE5.6, UE5.7 and UE5.8 imagery** may now be used when the workflow, node, editor panel and control layout shown remain materially accurate in the current classroom build.

A page being the right version is not enough. An image is counted as a replacement only when the image itself teaches the adjacent step.

## Result

- v3.34.13 genuine teacher captures: **77**
- v3.34.14 genuine teacher captures: **76**
- Reduction this pass: **1**
- Reduction from original audit: **211 → 76** (**135 fewer**, approximately **64.0%** reduction)

Breakdown:

- Core Lessons: **8**
- Programming / Quick Tutorials: **49**
- Building Block recognition captures: **5**
- Design Studio technical UE captures: **14**
- Building Block diagrams: **7**, not teacher captures

## Capture removed in v3.34.14

### Niagara Hit Effect — Impact Point / Impact Normal

**Hub step:** From the trace/projectile Hit Result, get Impact Point and Impact Normal.

**Epic source:** Using a Single Line Trace (Raycast) by Channel — Unreal Engine 5.8  
`https://dev.epicgames.com/documentation/en-us/unreal-engine/using-a-single-line-trace-raycast-by-channel-in-unreal-engine`

Epic's Break Hit Result screenshot visibly exposes the Hit Result outputs needed for this step. The Hub now places that exact official image beside the Niagara recipe instead of asking for a second classroom screenshot of the same node.

**Teacher capture removed:**

- `UE5-tutorial-niagara-impact-setup.png`

`UE5-tutorial-niagara-impact-logic.png` remains because the Hub still needs the exact **Spawn System at Location → chosen Niagara → Location = Impact Point** graph state.

## Teacher-effort reductions that do not falsely change the count

### Niagara Systems Building Block

**Epic source:** Niagara Editor UI Reference — Unreal Engine 5.8  
`https://dev.epicgames.com/documentation/unreal-engine/editor-ui-reference-for-niagara-effects-in-unreal-engine`

The Hub now shows Epic's official Niagara Editor UI reference directly on the Building Block page. It identifies the Preview, Parameters, System Overview and Selection/Stack areas, so the teacher no longer needs to recreate that recognition view.

The remaining `UE5-block-niagara-systems.png` request is narrowed to only the Hub-specific Blueprint proof:

- BeginPlay
- Spawn System at Location
- System Template = `NS_BlockTest`
- Location = Get Actor Location

This is **less capture work**, but it is still one genuine capture group and is therefore not counted as an elimination.

### Spawn and Destroy Actors

**Epic source:** Using Datasmith at Runtime — Unreal Engine 5.8  
`https://dev.epicgames.com/documentation/en-us/unreal-engine/using-datasmith-at-runtime-in-unreal-engine`

Epic provides a real Blueprint screenshot showing **Make Transform feeding Spawn Actor**. The Hub now places this beside the Make Transform recipe step.

The teacher capture remains because the Hub-specific proof still needs the calculated spawn location plus **owner rotation**, not Datasmith's generic/default transform.

## Wider 5.6–5.8 source net

### Stack O Bot — accepted official sample source

**Epic source:** Stack O Bot Sample Game  
`https://dev.epicgames.com/documentation/en-us/unreal-engine/stack-o-bot-sample-game-in-unreal-engine`

The current Epic page explicitly states that the described Stack O Bot sample is built using **Unreal Engine 5.6**. Under the new imagery rule this is now an accepted **EPIC SAMPLE CAPTURE** source when its editor state still matches the current classroom workflow.

This corrects the unnecessarily restrictive v3.34.13 audit note that treated Stack O Bot as research-only because it was not UE5.8.

### Design a Puzzle Adventure — high-value 5.6 sample/tutorial source

Epic's current Design a Puzzle Adventure series covers systems that overlap heavily with the remaining Hub capture list, including keys and locked doors, HUD/UI, moving platforms, traps and damage, enemies, sprint/Enhanced Input and win/game-over states.

Epic documents the sample/tutorial as built for **UE5.6** and usable in 5.6 or later. Where its pages use interactive Blueprint snippets instead of reusable static screenshots, the material is classified as **EPIC SAMPLE CAPTURE**, not falsely counted as an online-image replacement.

### Content Examples

**Epic source:** Content Examples Sample Project  
`https://dev.epicgames.com/documentation/unreal-engine/content-examples-sample-project-for-unreal-engine`

Content Examples remains one of the strongest future sample-capture sources because Epic explicitly encourages users to open, edit and learn from the examples. It covers useful areas including Blueprints, materials, landscapes, physics and Niagara.

### Game Animation Sample

**Epic source:** Game Animation Sample Project  
`https://dev.epicgames.com/documentation/unreal-engine/game-animation-sample-project-in-unreal-engine`

Retained as a high-quality sample-capture source for animation and traversal states. It does not directly eliminate one of the current 76 Hub-specific capture groups in this pass.

## 5.6 / 5.7 pages checked but not falsely promoted

The wider search also found valid 5.6/5.7/current references for Enhanced Input, audio playback, Gameplay Tags, SaveGame, AI Move To, Post Process, Niagara and related APIs.

Several prove that a property/node exists but do **not** provide an exact reusable editor screenshot. Those remain supporting references only.

Examples deliberately **not** counted as eliminated include Crouch setup, AI attack range, SaveGame, Data Tables, Design Studio Post Process and Niagara spawning where the exact Hub graph/state is still missing.

## Rule going forward

For online visual mining, use this order:

1. **Exact official UE5.8 image**
2. **Exact official UE5.7 image** if still materially accurate
3. **Exact official UE5.6 image** if still materially accurate
4. **Epic sample/template capture**
5. **Design/reference image** for design judgement rather than editor operations
6. **Original instructional diagram**
7. **No image required** for proof/reflection where a visual adds no teaching value
8. **Teacher capture required** only for the remaining exact Hub-specific state

The version number broadens the search pool; it never lowers the accuracy threshold.

# 3D Modelling Studio Revamp — v3.37.0

## Teaching problem

The previous course had technically sound coverage but it could still reward a student for following the next Max command without understanding the asset. The revamp therefore separates **art/design decisions** from **software execution**.

## Teaching loop

### 1. REFERENCE
Use real objects and professional work to answer specific visual questions. Do not collect images as decoration. Ask: what are the biggest masses, how is it constructed, what repeats, what changes the silhouette, which detail is better left to texture?

### 2. PLAN
Set purpose, scale, camera distance, likely repeating pieces and geometry-vs-texture decisions before detail.

### 3. BLOCK
Prove silhouette and proportion using the fewest useful forms. If the blockout is wrong, extra polygons will not rescue it.

### 4. MODEL
Use Editable Poly, edge control, chamfers and modifiers deliberately. Students are repeatedly asked what a new edge/segment is buying them.

### 5. INSPECT
Use shaded, Edged Faces, orthographic views, checker textures and clean source versions. Students must diagnose density spikes, pinching, accidental doubles, bad proportions and weak shading before proceeding.

### 6. GAME READY
UV/checker proof, material logic, Substance handoff, pivot/scale, FBX and UE verification. Problems are repaired in the source mesh rather than hidden in downstream software.

### 7. CRITIQUE
Post work-in-progress to the class Critique Board with a focused modelling question, change one thing from the response, then compare before/after.

## What 'step-by-step' means now

A student instruction should answer all of these:

- **Where am I?** Exact panel/tool/sub-object context where practical.
- **What do I do?** One specific action, not 'add detail'.
- **Why?** What modelling problem the action solves.
- **What should I see?** Expected visual/mesh state.
- **What must I check?** A stop condition before continuing.
- **If mine is different?** A likely diagnostic route rather than 'try again'.

## Anti-bad-habit rules retained and strengthened

- no ridiculous segment counts because round things exist;
- no extra loops without a visible/form/shading reason;
- no Boolean-as-default workflow;
- no destructive modifier stack just because the model currently looks OK;
- no UV/texturing pass used to hide broken source geometry;
- no one-mesh modular room;
- no pivot/export fixes done only inside Unreal when Max source is wrong.

## Build progression

The crate teaches careful copying and checks. Barrel and tyre make students justify radial density. Wall panel and door shift toward hard-surface design decisions. Pipe kit and modular room force reusable-system thinking. Hero Prop asks the student to choose the object and explain the modelling strategy independently.

## Source note

Selected user-supplied book figures are used as supporting visual teaching material only. They are not treated as current 3ds Max click maps. Current Autodesk Help remains authoritative for exact Max UI/tool behaviour; Adobe remains authoritative for Substance Painter; Epic UE5.8 remains authoritative for Unreal import/export behaviour.

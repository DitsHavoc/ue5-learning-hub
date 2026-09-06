# v3.44.0 — Blueprint Foundations Lab

Built directly on the current live v3.43.3 repository state.

## Upload
Replace/upload only:
- `index.html`
- `data/blueprint-foundations-learning.js`

## New Guided Path
**Blueprint Foundations: Data → Logic → Systems**

Built for Level 4 students who can follow Blueprint nodes but need to understand why they are choosing particular data types and structures.

Teaching rhythm:
**WATCH / LEARN → MAKE → TEST → CHANGE → EXPLAIN**

## New practical labs
1. Choose the Right Variable Type
   - Boolean
   - Integer
   - Float
   - Text
   - Vector
   - Object Reference
   - Get vs Set

2. Turn Data into Decisions
   - comparisons
   - Branch
   - Select
   - DATA → TEST → DECISION → ACTION

3. Make One Blueprint Control Another
   - Object Reference
   - Instance Editable
   - eyedropper assignment
   - Is Valid
   - two controller instances → two targets

4. Replace Repeated Logic with a Function
   - inputs
   - reusable calculation
   - refactoring
   - Function vs Custom Event judgement

5. Control Many Actors with an Array
   - Array
   - Length
   - Get
   - For Each Loop
   - add a fourth target without graph duplication

6. Use an Enum for Mutually Exclusive States
   - bad multi-Boolean state design
   - E_DoorState
   - Switch on Enum
   - extend with Jammed

7. Organise Related Data with Structs and Maps
   - ST_ItemData
   - Break Struct
   - Name → Integer Map
   - Find
   - Array vs Struct vs Map judgement

8. Build an Access-Control Test System
   - integrates variables, comparison, Branch, Object Reference, Function
   - students choose Array OR Enum for a genuine reason
   - final change + explanation requirement

## Path checkpoints
Students must:
- choose types without relying on Blueprint colours
- diagnose three weak-code designs
- demonstrate the final system
- explain WHY each structure was chosen
- change one requirement and prove the system survives

## Existing learning reused
The pathway deliberately reuses the existing Unreal lessons for Variables, Branches and Functions rather than duplicating those XP-bearing lessons.

The new practical labs also link back to the existing Building Blocks:
- Variables, Types, Get & Set
- Branches, Switches & Select
- Object Reference vs Class Reference
- Functions, Custom Events & Macros
- Arrays, Sets & Maps
- Enums
- Structs

## Images
The guides are fully written and usable now, but a short real-UE screenshot pass will make them much more recovery-friendly for students who missed the live demo. See the capture list supplied with the release.

## Safety
No replacement of:
- app.js
- backend.js
- course-data.js
- building-block-data.js
- tutorial-data.js
- pathway-data.js
- theory-data.js
- Prison Cell patch
- Supabase
- roster controls
- visual CSS

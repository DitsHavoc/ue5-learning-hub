# Blueprint Foundations Lab — Screenshot Capture List

You do NOT need to capture every node. These are the high-value screenshots that stop students getting lost.

## Highest priority — get these first

### 1. Variable type picker
Open `BP_DataLab`.
Show:
- My Blueprint panel
- `+ Variable`
- variable type picker open far enough to show common types

Useful caption:
**Choose the type from what the data means — Boolean for yes/no, Integer for whole counts, Float for decimal values, Text for player-facing words, Vector for 3D values.**

### 2. Variable Details + Instance Editable
Select an Object Reference variable.
Show:
- variable selected in My Blueprint
- Details panel
- variable type
- Instance Editable / eye control

Useful caption:
**Compile after creating the variable. Instance Editable lets each placed Blueprint choose a different target Actor.**

### 3. Get vs Set
One clean graph containing:
- Event BeginPlay
- Get DoorLocked
- Set DoorLocked
- Print String

Useful caption:
**Get reads the current value. Set changes the stored value.**

### 4. DATA → TEST → DECISION → ACTION
Clean graph:
- Get KeysOwned
- Get KeysRequired
- `>=`
- Branch
- True and False Print String

This is probably the single most important programming screenshot.

### 5. Assigned Object Reference in the Level
Select `BP_LabController` in the level.
Show Details with:
- `TargetActor`
- a real `BP_LabTarget` assigned
- eyedropper/dropdown if possible

### 6. Function input
Open `ApplyDamage`.
Show:
- My Blueprint → Functions
- ApplyDamage selected
- Float input `DamageAmount`
- the small function graph

### 7. Array + For Each Loop
Ideally two shots:
- `Targets` variable showing Array container / several assigned entries
- Event Graph: Targets → For Each Loop → Array Element → Set Actor Hidden In Game

### 8. Enum + Switch
Ideally:
- `E_DoorState` asset with Locked / Closed / Opening / Open
- graph with Switch on E_DoorState

## Second priority

### 9. Struct
`ST_ItemData` open showing:
- DisplayName Text
- Value Integer
- Weight Float
- IsQuestItem Boolean

### 10. Map
`AmmoByType` showing:
- Map container
- Name key
- Integer value
- Pistol → 12
- Shotgun → 4

And/or graph:
- Get AmmoByType → Find(Pistol)

### 11. Final clean system
A readable graph showing:
- CanOpenDoor
- Branch
- TargetDoor reference/action

Keep this one tidy and zoomed so students can see the flow.

## What NOT to photograph
- every right-click menu
- every single Print String
- huge whole-screen graphs where nodes are unreadable
- screenshots with five unrelated systems in view

The best guide images answer:
**Where am I? What should this bit look like? What should connect to what?**

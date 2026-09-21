# UE5 Quick Tutorial Consolidation Map — v3.34.20

**Before:** 47 equal top-level Programming Quick Tutorials  
**After:** 26 top-level recipe families + 3 lesson-owned applications  

Rule: **merge duplicate learning, never delete a distinct practical outcome.**

## Recipe families

### Enhanced Input Setup
Create a new Enhanced Input Action and wire it into the player cleanly.

- `enhanced-input-action` — Add a New Enhanced Input Action

### Character Movement Extras
Add sprint, dash, double jump and crouch as focused movement variants.

- `double-jump` — Make a Double Jump
- `sprint` — Add Hold-to-Sprint
- `dash` — Make a Simple Dash
- `crouch` — Add Crouch

### Look-to-Interact System
Trace from the player view, identify an interactable object and show a prompt when it matters.

- `line-trace-interact` — Look at an Object to Interact
- `interaction-prompt` — Show an Interaction Prompt

### Keys & Locked Doors
Pick up a key, store the state and use it to control a locked door.

- `key-pickup` — Make a Key Pickup
- `locked-door` — Make a Key and Locked Door

### Switches & Triggers
Build pressure plates, buttons and levers that activate world logic reliably.

- `pressure-plate` — Make a Pressure Plate
- `button-lever` — Make an Interactable Button or Lever

### Collectables & Counters
Collect objects, increment a count and use the total as game state.

- `collectable` — Make a Collectable Counter

### Player Flashlight
Attach and control a useful player flashlight for exploration and horror prototypes.

- `flashlight` — Make a Flashlight

### Trace Combat
Use traces for instant ranged hits and short-range melee detection.

- `line-trace-gun` — Make a Line Trace Gun
- `melee-trace` — Make a Simple Melee Hit

### Projectile Weapon
Spawn a physical projectile and make it behave like a simple weapon.

- `projectile-gun` — Make a Projectile Weapon

### Health & Damage System
Give players and enemies health, apply damage and add a health pickup.

- `player-health` — Add Player Health and Damage
- `enemy-health` — Give an Enemy Health
- `health-pickup` — Make a Health Pickup

### Ammo & Reload
Track magazine ammo, block empty firing and reload deliberately.

- `ammo-reload` — Add Ammo and Reload

### Respawn & Checkpoints
Handle lives, respawning and in-level checkpoints without duplicating the same state logic.

- `lives-respawn` — Set Up Lives and Respawning
- `checkpoint` — Make a Checkpoint

### Score System
Store score, add to it from gameplay events and expose it to the rest of the game.

- `score-system` — Make a Score System

### Countdown Timer
Create a countdown that updates reliably and triggers an outcome at zero.

- `countdown-timer` — Make a Countdown Timer

### Win & Lose Conditions
Turn game state into a clear success or failure outcome.

- `win-lose-state` — Make Simple Win and Lose Conditions

### Spawning Actors
Spawn, limit and destroy actors, including a simple random spawner pattern.

- `spawn-destroy` — Spawn and Destroy Actors
- `random-spawner` — Make a Simple Random Spawner

### Gameplay HUD
Build the common HUD pieces together: base widget, health, score/lives, objective text and crosshair.

- `basic-hud` — Create a Basic HUD Widget
- `health-bar` — Put Health on the HUD
- `score-lives-hud` — Show Score and Lives on the HUD
- `objective-text` — Make an Objective Display
- `crosshair` — Add a Crosshair

### Pause Menu
Pause gameplay, show a menu and return control cleanly.

- `pause-menu` — Make a Simple Pause Menu

### Moving Platforms & World Motion
Move world geometry smoothly and predictably using reusable motion logic.

- `moving-platform` — Make a Moving Platform

### Damage & Death Zones
Build a trigger volume that damages, kills or resets the player.

- `damage-zone` — Make a Damage / Death Zone

### Enemy AI Progression
Progress from patrol to detection, chase and attack range as one understandable enemy behaviour chain.

- `ai-patrol` — Make an Enemy Patrol Between Points
- `ai-perception` — Detect the Player with AI Perception
- `ai-chase` — Make an Enemy Chase the Player
- `ai-attack-range` — Make an Enemy Attack in Range

### Keep State Between Levels
Use GameInstance for temporary state that must survive a level load.

- `gameinstance-state` — Keep Data Between Level Loads with GameInstance

### Blueprint Sound Feedback
Trigger useful audio feedback from gameplay events.

- `sound-feedback` — Play Sound Feedback from Blueprint

### Niagara Hit Effects
Spawn a Niagara effect at a hit location and orient it from the impact data.

- `niagara-impact` — Spawn a Niagara Hit Effect

### Camera Shake Feedback
Add controlled camera shake to make actions feel stronger without making the game unreadable.

- `camera-shake` — Add Camera Shake to an Action

### Silent Hill-style Fog
Build readable atmospheric fog for horror without simply hiding the whole level.

- `silent-hill-fog` — Make Silent Hill-style Fog

## Applications moved into Core Lessons

- `timeline-door` — **Make a Smooth Timeline Door** → lesson `timelines`
- `save-checkpoint` — **Save a Checkpoint Between Sessions** → lesson `savegame`
- `struct-data-table` — **Use a Struct and Data Table for Game Content** → lesson `data`

## Preservation check

- Recipe-family builds: **44**
- Lesson-owned applications: **3**
- Total practical builds preserved: **47 / 47**
- Existing tutorial routes remain valid.
- Existing completion IDs remain valid.
- Global search continues to index individual outcomes even when they are no longer top-level library cards.

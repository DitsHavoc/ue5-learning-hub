# UE5 Learning Hub v3.34.14 — Design Studio Visual Plan

This pass separates **technical Unreal captures** from **design/reference visuals**. The old list over-counted design judgement as if every concept needed a screenshot of an editor panel.

- Genuine remaining Design Studio classroom capture groups: **14**.
- v3.34.14 widened the accepted official image pool to UE5.6–5.8, but did not remove any of these 14: none of the newly mined visuals proved the exact missing classroom state strongly enough.
- Groups reclassified to design/reference imagery rather than teacher UI captures: **37**.
- Test/compare/proof steps are not counted as teacher captures.
- Design judgement/outcome steps are routed to reference imagery or diagrams rather than pretending there is one correct Unreal UI state.

## Accepted official image versions

- **UE5.8** remains the technical source of truth.
- Official **UE5.7** and **UE5.6** imagery may replace a teacher capture only when the workflow, panel, node and control layout shown remain materially accurate.
- A sample/project can still be an **EPIC SAMPLE CAPTURE** source even when its web page has no reusable static screenshot.
- Version eligibility never overrides visual accuracy.

## Genuine Unreal classroom captures still needed

### Create a Reusable Material Instance

- [ ] **`UE5-design-create-a-reusable-material-instance-A.png`** — Steps **1, 2**
  - **Step 1 — Parameterise colour:** Convert the Base Color value to a Vector Parameter named Tint.
  - **Step 2 — Parameterise roughness:** Create a Scalar Parameter named Roughness with a sensible default.

### Make a Wet Surface

- [ ] **`UE5-design-make-a-wet-surface-A.png`** — Steps **4**
  - **Step 4 — Keep variation:** Use a mask/Lerp if only patches should be wet.

### Use Post Process for Mood

- [ ] **`UE5-design-use-post-process-for-mood-A.png`** — Steps **1**
  - **Step 1 — Create global volume:** Add a Post Process Volume and enable Infinite Extent (Unbound) for a global learning setup.

- [ ] **`UE5-design-use-post-process-for-mood-B.png`** — Steps **2**
  - **Step 2 — Stabilise exposure:** Set manual/controlled exposure appropriate to your project.

### Create Your First Landscape

- [ ] **`UE5-design-create-your-first-landscape-A.png`** — Steps **2, 3**
  - **Step 2 — Choose a modest size:** Create a small learning landscape rather than filling an enormous world.
  - **Step 3 — Create and save:** Create the Landscape and save the level before sculpting.

### Sculpt Playable Terrain

- [ ] **`UE5-design-sculpt-playable-terrain-B.png`** — Steps **3**
  - **Step 3 — Flatten playable zones:** Use Flatten/Smooth around paths, combat spaces and building footprints.

### Paint Landscape Layers

- [ ] **`UE5-design-paint-landscape-layers-A.png`** — Steps **1, 2**
  - **Step 1 — Prepare layered material:** Use a landscape material with named layers such as Grass, Dirt and Rock.
  - **Step 2 — Create Layer Info assets:** Create/save Layer Info for each paint layer as required.

### Dress a Readable Foliage Path

- [ ] **`UE5-design-dress-a-readable-foliage-path-C.png`** — Steps **3**
  - **Step 3 — Add ground layer:** Paint grass/small plants at a density that supports the biome.

### Trigger a Cutscene & Return to Gameplay

- [ ] **`UE5-design-trigger-a-cutscene-and-return-to-gameplay-B.png`** — Steps **4**
  - **Step 4 — Handle player control:** Disable or appropriately limit input/camera if the sequence requires it.

### Check Mesh LOD / Nanite Use

- [ ] **`UE5-design-check-mesh-lod-nanite-use-B.png`** — Steps **2**
  - **Step 2 — Inspect mesh settings:** Open the Static Mesh editor and check Nanite/LOD setup appropriate to that asset/project.

### Check Material Cost with Shader Complexity

- [ ] **`UE5-design-check-material-cost-with-shader-complexity-B.png`** — Steps **3**
  - **Step 3 — Inspect the material:** Open the material and check its Stats/instruction information plus obvious expensive features such as refraction, noise or many texture samples.

### Make a Two-Outcome Adaptive Cutscene

- [ ] **`UE5-design-make-a-two-outcome-adaptive-cutscene-B.png`** — Steps **4**
  - **Step 4 — Branch to the outcome:** At the trigger point, use Blueprint logic to play the appropriate sequence/outcome based on the Boolean.

### Make Simple Procedural Wind with MetaSound

- [ ] **`UE5-design-make-simple-procedural-wind-with-metasound-B.png`** — Steps **2, 3, 4**
  - **Step 2 — Start with a wind layer:** Use a suitable wind Sound Wave/input as the stable base of the sound.
  - **Step 3 — Add subtle variation:** Modulate volume and/or filter/pitch slowly within a restrained range.
  - **Step 4 — Add sparse gust behaviour:** Introduce an occasional stronger gust or secondary layer using timing/random logic.

### Clean a UE Project for Another Developer

- [ ] **`UE5-design-clean-a-ue-project-for-another-developer-A.png`** — Steps **3**
  - **Step 3 — Fix redirectors/dependencies safely:** Use Unreal’s tools to clean redirectors and inspect suspicious dependencies rather than deleting files blindly.

## Design/reference visuals — do not capture as UI instructions

These should eventually use a strong game/environment reference, a before/after comparison, or an original diagram. They are **not** part of the teacher Unreal screenshot workload.

- **Create a Strong Focal Point** — `UE5-design-create-a-strong-focal-point-A.png` (steps 1, 2, 3, 4)
  - **Step 1 — Choose the target:** Pick exactly one thing the player should notice first: exit, machine, tower, enemy route or landmark.
  - **Step 2 — Simplify around it:** Reduce competing props/bright materials around the target.
  - **Step 3 — Frame it:** Use doorways, beams, walls or terrain edges to create lines that point toward the target.
  - **Step 4 — Add restrained contrast:** Use a value, colour or light contrast to strengthen what geometry already communicates.
- **Make a Route Read Without Arrows** — `UE5-design-make-a-route-read-without-arrows-A.png` (steps 1)
  - **Step 1 — Mark the decision point:** Stand where the player must choose and take a screenshot.
- **Make a Route Read Without Arrows** — `UE5-design-make-a-route-read-without-arrows-B.png` (steps 2, 3, 4)
  - **Step 2 — Strengthen the intended route:** Open the silhouette, show more depth, use a light pool or continue a recognisable floor/prop pattern.
  - **Step 3 — Quiet false routes:** Darken, narrow, close or visually terminate routes that are not currently valid.
  - **Step 4 — Add a landmark beyond the route:** Show a distinctive object or shape that the player can move toward.
- **Set Dress a Room: Big → Medium → Small** — `UE5-design-set-dress-a-room-big-medium-small-A.png` (steps 1)
  - **Step 1 — Protect the blockout:** Duplicate/save the clean blockout before dressing.
- **Set Dress a Room: Big → Medium → Small** — `UE5-design-set-dress-a-room-big-medium-small-B.png` (steps 2, 3, 4)
  - **Step 2 — Big forms first:** Place furniture, shelving, machines or major structural pieces.
  - **Step 3 — Medium props second:** Add chairs, boxes, lamps, tools or repeated functional groups.
  - **Step 4 — Small details last:** Add a small number of papers, cables, cups, debris or personal details where story requires them.
- **Set Dress a Room: Big → Medium → Small** — `UE5-design-set-dress-a-room-big-medium-small-C.png` (steps 5)
  - **Step 5 — Delete a pass:** Remove anything blocking movement, silhouettes or the focal point.
- **Build Believable Prop Clusters** — `UE5-design-build-believable-prop-clusters-A.png` (steps 1, 2, 3, 4)
  - **Step 1 — Choose an action:** Decide what happened here: someone repaired equipment, ate lunch, packed boxes or fled.
  - **Step 2 — Place the anchor:** Put the largest object first: desk, machine, crate stack or workbench.
  - **Step 3 — Add supporting objects:** Place only items that support the action and vary rotation/spacing naturally.
  - **Step 4 — Leave breathing room:** Keep empty space around the cluster.
- **Light a Room with Key, Fill & Accent** — `UE5-design-light-a-room-with-key-fill-and-accent-A.png` (steps 1)
  - **Step 1 — Lock exposure:** Add/adjust a Post Process Volume and keep exposure stable while learning.
- **Light a Room with Key, Fill & Accent** — `UE5-design-light-a-room-with-key-fill-and-accent-B.png` (steps 2, 3, 4)
  - **Step 2 — Choose the key:** Place one main motivated light from a window, lamp or ceiling source.
  - **Step 3 — Add gentle fill:** Use skylight/bounce-like supporting light to prevent important areas crushing to black.
  - **Step 4 — Add one accent:** Use a small light to separate a focal prop, doorway or silhouette.
- **Light a Room with Key, Fill & Accent** — `UE5-design-light-a-room-with-key-fill-and-accent-C.png` (steps 5)
  - **Step 5 — Toggle each light:** Switch lights on/off and identify its job.
- **Light a Horror Corridor** — `UE5-design-light-a-horror-corridor-A.png` (steps 1, 2, 3, 4)
  - **Step 1 — Keep the route readable:** Start with enough neutral light to walk the corridor safely.
  - **Step 2 — Remove information selectively:** Darken side spaces/backgrounds while keeping floor edges and key doorframes readable.
  - **Step 3 — Motivate pools of light:** Use ceiling lights, emergency lamps or practical fixtures rather than floating invisible brightness everywhere.
  - **Step 4 — Create one contrast event:** Add a brighter or coloured pool where you want anticipation.
- **Make a Slow Reveal Shot** — `UE5-design-make-a-slow-reveal-shot-A.png` (steps 1, 2, 3, 4, 5)
  - **Step 1 — Hide the subject:** Frame the start so a wall, doorway, foreground prop or darkness obscures part/all of the subject.
  - **Step 2 — Choose the reveal path:** Move laterally/forward so the subject gradually becomes visible.
  - **Step 3 — Key only what matters:** Use as few transform keys as necessary and smooth the motion.
  - **Step 4 — End on composition:** Stop at a frame where the subject and surrounding context read clearly.
  - **Step 5 — Add sound before sight:** Optional: start a sound cue shortly before the visual reveal.
- **Build Layered Ambient Sound** — `UE5-design-build-layered-ambient-sound-A.png` (steps 1, 2, 3)
  - **Step 1 — Choose the bed:** Import/use a subtle loop such as room tone, wind or machinery.
  - **Step 2 — Place in space:** Use Ambient Sound/Audio Component and decide whether the bed is 2D or localised.
  - **Step 3 — Add sparse details:** Place occasional drips, creaks, birds, distant impacts or electrical noises.
- **Do a Five-Pass Scene Polish** — `UE5-design-do-a-five-pass-scene-polish-A.png` (steps 1)
  - **Step 1 — Capture BEFORE:** Take a representative gameplay screenshot before touching anything.
- **Do a Five-Pass Scene Polish** — `UE5-design-do-a-five-pass-scene-polish-B.png` (steps 2, 3, 4, 5, 6)
  - **Step 2 — Pass 1: readability:** Fix route clarity, focal point, collision and anything blocking the player.
  - **Step 3 — Pass 2: scale/composition:** Fix objects that feel wrong-sized, tangencies and awkward empty/crowded areas.
  - **Step 4 — Pass 3: materials/lighting:** Fix inconsistent roughness, exposure, colour and lights without purpose.
  - **Step 5 — Pass 4: story/detail:** Add only details that support use, age, story or focal hierarchy.
  - **Step 6 — Pass 5: delete:** Remove anything redundant, noisy or expensive with little payoff.
- **Take a Strong Portfolio Screenshot** — `UE5-design-take-a-strong-portfolio-screenshot-A.png` (steps 1, 2, 3, 4)
  - **Step 1 — Choose the story shot:** Pick the angle that best communicates the environment's idea, route or mood.
  - **Step 2 — Clean the frame:** Hide editor clutter/UI where appropriate and remove temporary debug actors.
  - **Step 3 — Frame deliberately:** Use foreground/midground/background, focal hierarchy and sensible field of view.
  - **Step 4 — Capture a breakdown too:** Take one technical shot: blockout, lighting-only, material spheres, wireframe or before/after.
- **Take a Strong Portfolio Screenshot** — `UE5-design-take-a-strong-portfolio-screenshot-B.png` (steps 5)
  - **Step 5 — Add concise caption:** Write what you did and what you were responsible for.
- **Design a Clear Decision Point** — `UE5-design-design-a-clear-decision-point-A.png` (steps 1)
  - **Step 1 — Build three choices:** Greybox a junction with one main route, one optional route and one route that is currently unavailable.
- **Design a Clear Decision Point** — `UE5-design-design-a-clear-decision-point-B.png` (steps 2, 3, 4)
  - **Step 2 — Make the main route readable:** Give the primary path more visible depth, a landmark, stronger opening or repeated route language.
  - **Step 3 — Make the optional route tempting:** Use a glimpse of reward, contrasting light or distinctive prop without making it look mandatory.
  - **Step 4 — Make the blocked route honest:** Use geometry, damage, locked architecture or environmental state to communicate why it cannot be used yet.
- **Design a Clear Decision Point** — `UE5-design-design-a-clear-decision-point-C.png` (steps 5)
  - **Step 5 — Observe silently:** Watch another student choose without giving instructions and record where they hesitate.
- **Create Pacing with Space** — `UE5-design-create-pacing-with-space-A.png` (steps 1, 3)
  - **Step 1 — Build a compressed approach:** Create a narrower/lower transition space leading toward a larger room.
  - **Step 3 — Create the release:** Open into a taller/wider space with a longer sightline and a clear focal point.
- **Create Pacing with Space** — `UE5-design-create-pacing-with-space-B.png` (steps 2, 4)
  - **Step 2 — Hide the payoff:** Use a corner, doorway or elevation change so the destination is not fully visible at the start.
  - **Step 4 — Control dwell time:** Place a reason to pause: overlook, objective, landmark or safe area.
- **Tell a Story with Five Props** — `UE5-design-tell-a-story-with-five-props-A.png` (steps 1, 2, 3, 4)
  - **Step 1 — Choose a micro-event:** Pick one simple event: hurried escape, interrupted meal, repair attempt, break-in or recent fight.
  - **Step 2 — Choose five useful props:** Select props that each have a role in the event rather than five decorative objects.
  - **Step 3 — Arrange cause and effect:** Place props so their positions imply sequence: what was used, moved, dropped or damaged.
  - **Step 4 — Add one environmental trace:** Use a decal, light, spill, dust, footprint or damage mark to connect the props to the space.
- **Break Repetition with a Hero Asset** — `UE5-design-break-repetition-with-a-hero-asset-A.png` (steps 1, 2, 3)
  - **Step 1 — Find the repetition:** Walk through a modular area and identify the point where repeated walls/doors/props make spaces blend together.
  - **Step 2 — Choose one unique feature:** Add one distinctive machine, sculpture, damaged wall, tree, sign or architectural shape at that location.
  - **Step 3 — Frame it:** Adjust nearby props, sightlines or lighting so the unique feature is visible from the approach.
- **Break Repetition with a Hero Asset** — `UE5-design-break-repetition-with-a-hero-asset-B.png` (steps 4)
  - **Step 4 — Protect its contrast:** Remove nearby competing clutter or repeated bright objects.
- **Build a Lumen Mood Pass** — `UE5-design-build-a-lumen-mood-pass-A.png` (steps 1)
  - **Step 1 — Lock the viewing conditions:** Choose the gameplay camera/route and set a deliberate exposure approach before balancing lights.
- **Build a Lumen Mood Pass** — `UE5-design-build-a-lumen-mood-pass-B.png` (steps 2, 3, 4, 5)
  - **Step 2 — Establish key information:** Light the route/focal point first with the minimum number of important sources.
  - **Step 3 — Add indirect mood:** Use environment colour, skylight/Lumen bounce and restrained emissive contribution to shape the shadow side.
  - **Step 4 — Layer atmosphere:** Add fog/volumetric response only where it improves depth or information control.
  - **Step 5 — Scalability check:** Compare the scene at a lower Lumen/scalability target and adjust the design if the route or focal point collapses.
- **Design Two Times of Day** — `UE5-design-design-two-times-of-day-A.png` (steps 1, 2, 3, 4)
  - **Step 1 — Save a neutral composition:** Choose one camera angle where the route and landmark already read.
  - **Step 2 — Build the day state:** Use clear directional light, readable ambient fill and restrained fog.
  - **Step 3 — Build the night/dusk state:** Shift light direction/temperature, ambient balance and fog while protecting essential route cues.
  - **Step 4 — Change one gameplay implication:** Decide how visibility affects stealth, threat, exploration or safe areas.
- **Design Two Times of Day** — `UE5-design-design-two-times-of-day-B.png` (steps 5)
  - **Step 5 — Compare silhouettes:** Place the two screenshots side by side and inspect what disappeared/appeared.
- **Protect a Route from Procedural Clutter** — `UE5-design-protect-a-route-from-procedural-clutter-A.png` (steps 1, 4, 5)
  - **Step 1 — Define the authored route:** Mark the playable path and key sightlines before generating/scattering assets.
  - **Step 4 — Hand-author landmarks:** Place important hero trees/rocks/structures manually after procedural coverage.
  - **Step 5 — Regenerate and test:** Change the seed/inputs if available and confirm the route remains safe.
- **Protect a Route from Procedural Clutter** — `UE5-design-protect-a-route-from-procedural-clutter-B.png` (steps 2, 3)
  - **Step 2 — Create placement constraints:** Use slope, height, density, bounds or exclusion logic so assets avoid the route and critical spaces.
  - **Step 3 — Vary density intentionally:** Use denser clusters away from the route and lower density near navigation/focal points.
- **Make Weather Change the Experience** — `UE5-design-make-weather-change-the-experience-A.png` (steps 1, 4, 5)
  - **Step 1 — Choose the information budget:** List what must remain visible during the weather state: route edge, landmark, nearby threats or shelter.
  - **Step 4 — Add one world reaction:** Change foliage motion, puddle/wetness, audio or a gameplay rule.
  - **Step 5 — Performance check:** Test the dense/worst weather view on target quality.
- **Make Weather Change the Experience** — `UE5-design-make-weather-change-the-experience-B.png` (steps 2)
  - **Step 2 — Layer the weather:** Combine sky/light change, fog, particles and sound rather than relying on one extreme effect.
- **Make Weather Change the Experience** — `UE5-design-make-weather-change-the-experience-C.png` (steps 3)
  - **Step 3 — Protect navigation:** Use contrast, practical lights, silhouettes or route materials to keep required cues readable.
- **Use Lens & Framing Intentionally** — `UE5-design-use-lens-and-framing-intentionally-A.png` (steps 1, 2, 3, 4, 5)
  - **Step 1 — Name the emotion/information:** Decide whether the shot should feel intimate, exposed, compressed, powerful or disorienting.
  - **Step 2 — Create a Cine Camera:** Add/choose a Cine Camera Actor in Sequencer and frame the subject.
  - **Step 3 — Compare focal lengths:** Try a wider and longer focal length while repositioning the camera to keep similar subject size.
  - **Step 4 — Choose depth of field deliberately:** Use aperture/focus only if it helps isolate information or mood.
  - **Step 5 — Test in sequence:** Play the shot before/after adjacent cuts.
- **Tell the Player Something Off-Screen** — `UE5-design-tell-the-player-something-off-screen-A.png` (steps 1, 2, 4)
  - **Step 1 — Choose the unseen information:** Decide what the player should infer: machine room ahead, enemy behind door, large open hall, storm outside or safe generator nearby.
  - **Step 2 — Place the source out of sight:** Put the sound behind geometry/around a corner rather than beside the player.
  - **Step 4 — Shape the space:** Add suitable reverb/air absorption/occlusion behaviour if needed.
- **Tell the Player Something Off-Screen** — `UE5-design-tell-the-player-something-off-screen-B.png` (steps 3)
  - **Step 3 — Set useful attenuation:** Use an attenuation asset so volume/spatialisation changes naturally as the listener moves.

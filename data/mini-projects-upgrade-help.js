/* Novice UE5.8 help for Mini-Project upgrades, loaded before app.js. */
window.UE5_MINI_UPGRADE_HELP = {
  "variable": {
    "title": "Create a Blueprint variable",
    "body": "Open the Blueprint named in Go to. In My Blueprint → Variables select +. Rename NewVar to the EXACT name shown, select its type in Details (Integer, Float, Boolean, etc.) and click Compile. Then set its Default Value in Details → Default Value, Compile and Save. A variable is stored data; it is NOT a Function, Event or asset."
  },
  "get-set": {
    "title": "Read (Get) and change (Set) a variable",
    "body": "From My Blueprint → Variables, drag the named variable into the graph. Choose Get to read its current value or Set to change it. To set a value: attach a WHITE execution wire to Set's left arrow, feed the coloured value pin from your calculation, then continue from Set's right WHITE pin. A coloured value wire alone will not make Set run."
  },
  "function": {
    "title": "Create or call a Function",
    "body": "Open the OWNing Blueprint first. In My Blueprint → Functions click + and name the function exactly. The purple Entry node is its starting point; connect its WHITE execution to the first working node. Compile. In another graph, drag that function from My Blueprint and choose Call. A Function and an Actor Blueprint with a similar name are different things."
  },
  "function-input": {
    "title": "Give a Function an input",
    "body": "Open the Function, click its purple Function Entry node and look in Details → Inputs → +. Enter the exact input name and variable type (e.g. Integer) and Compile. This makes a coloured INPUT/OUTPUT PIN on calls to the function; it does NOT create a separate saved variable in the Blueprint's Variables list."
  },
  "function-output": {
    "title": "Make a Function return a value",
    "body": "Open the Function, select its Return Node (or click the Function in My Blueprint) and use Details → Outputs → +. Name the output, choose the correct type and Compile. Connect your calculation to the Return Node's coloured pin. A Return value is not a new stored variable."
  },
  "custom-event": {
    "title": "Create versus call a Custom Event",
    "body": "In the Event Graph right-click EMPTY SPACE → Add Custom Event. Rename the red event node. Attach its WHITE output to the first action. To run it elsewhere, right-click and search its name, then choose the CALL node (not a second Add Custom Event). Put Delay and Timer callbacks in an Event Graph, not a Function."
  },
  "exec": {
    "title": "Connect Blueprint pins correctly",
    "body": "WHITE triangular pins control WHEN nodes run: wire white output to white input in the stated order. COLOURED round pins carry DATA: blue references, green numbers, red booleans, etc. A Branch needs BOTH its WHITE execution input and its red Condition value connected. Pure maths nodes often have no white execution pins; that is normal."
  },
  "branch": {
    "title": "Build an IF check with Branch",
    "body": "Right-click the graph → search Branch. A Branch has a WHITE execution input, a red Boolean Condition and WHITE True/False outputs. To make the condition, drag the named variables in as Get, add comparison nodes (>=, <=, >, NOT, AND), connect their RED result to Condition and continue from the correct WHITE True or False output."
  },
  "math": {
    "title": "Make a calculation rather than typing a formula",
    "body": "Expressions like Score + 1 or (Index-2)*150 are shorthand for NODES. Drag each variable as Get, drag from its coloured pin and search +, -, * or comparison. Type constants into empty value pins. Feed the calculation's result into the target Set variable, Make Vector or Branch Condition pin; the calculation is not a new variable unless the guide explicitly says Create Variable."
  },
  "actor": {
    "title": "Create an Actor Blueprint asset",
    "body": "Open the Content Drawer (Ctrl+Space), navigate to the folder in Go to, right-click empty space → Blueprint Class → Actor. Rename the asset exactly (e.g. BP_RisingBlock) and double-click to edit. Use Components → + Add to create meshes or collision boxes. This name is an ASSET/class, not a variable."
  },
  "component": {
    "title": "Create and rename a Component",
    "body": "Open the Actor Blueprint, select Components → + Add, search Static Mesh or Box Collision and select it. In the Components tree rename the new component (F2 or right-click → Rename). Select it to configure Details such as Collision, Static Mesh and Transform. A component belongs to an Actor Blueprint; it is not automatically a variable you need to add again."
  },
  "spawn": {
    "title": "Find and connect Spawn Actor",
    "body": "In a Blueprint Event Graph or Function right-click → Spawn Actor From Class. Select the Class (the BP_ asset) from its purple Class pin; connect a Make Transform result to Spawn Transform. Connect the WHITE loop body/event output to Spawn Actor's WHITE input. On Spawn Actor expand the arrow for Collision Handling Override if needed. If a new spawn input is missing, Compile the spawned Actor Blueprint after ticking Expose on Spawn for that variable."
  },
  "cast": {
    "title": "Get another Blueprint and Cast",
    "body": "Right-click → Get Game Mode or Get Player Controller, OR drag from a saved Actor reference. Drag from its blue Return Value → search Cast To [the correct BP_ class]. Connect blue Return Value to Cast's Object pin AND a WHITE execution wire to Cast's left input. Continue from Cast Succeeded (WHITE). Drag from As [class] blue pin to read its variables or call functions. Cast Failed means the wrong Blueprint is active or the object was not found."
  },
  "timer": {
    "title": "Create Set Timer by Event correctly",
    "body": "In an EVENT GRAPH add Set Timer by Event. Connect WHITE execution from BeginPlay or the named event; enter Time (seconds) and tick Looping only if the guide says repeat. The RED Event delegate input must point to a Custom Event: drag from it → Create Event → choose that Custom Event. Promote Return Value to a Timer Handle variable ONLY when asked. Do not start a repeating game timer inside the event that it calls."
  },
  "widget": {
    "title": "Create a UI Widget and its named controls",
    "body": "Content Drawer → right-click → User Interface → Widget Blueprint → User Widget. Name it WBP_... and open Designer. Drag Text or Button from Palette into the hierarchy. Select it and rename in Details (or F2); tick Is Variable so Graph can Get that widget. ScoreText is a TEXT WIDGET, not an Integer variable: it displays the GameMode's Score variable."
  },
  "binding": {
    "title": "Connect a widget text binding",
    "body": "In the Widget Designer select the named Text widget → Details → Content → Text → Bind → Create Binding. In the created Function, Entry WHITE → Cast to the owning GameMode/Controller → Return WHITE. Get the numeric variable from the Cast's As pin, use Format Text with a {Value} placeholder and connect the Text output to Return Value. Compile the Widget, then Play to check the displayed number."
  },
  "input": {
    "title": "Create an Enhanced Input action and map a key",
    "body": "In Content Drawer → right-click → Input → Input Action; name IA_... and set Value Type to Digital (Boolean) for a press. Open the existing Input Mapping Context (IMC_... or BowlingInputs) and add a mapping for that action to the specified key. In the PlayerController Event Graph right-click → search IA_... Event, connect its Started WHITE pin to the action. If using a NEW mapping context, add it to the Enhanced Input Local Player Subsystem during BeginPlay; without that the key event will not fire."
  },
  "debug": {
    "title": "Use Print String to find the broken link",
    "body": "Right-click → Print String. Connect its WHITE execution from the step you are testing and type a short message such as CLICK or HIT. Compile, press Play (not Simulate) and watch the screen. No message means the event or previous WHITE execution never ran; a message but no effect means the problem is farther along the chain. Remove the temporary print once that test works."
  },
  "array": {
    "title": "Create an Array and read/remove items",
    "body": "Create a variable in My Blueprint, set its element type (e.g. Integer) and click the small Grid/Array container icon so it becomes an Array, then Compile. To pick an item use Length → Random Integer in Range(0, Length-1) → Get (at index). Save the selected value BEFORE Remove Index. Add Unique puts a value back only if it is not already present. Array elements and local PickIndex are not the same variable."
  },
  "local": {
    "title": "Create a LOCAL variable inside a Function",
    "body": "Open the named Function and find My Blueprint → Local Variables → +. Rename the local variable and choose its type; Compile. Local variables only exist while this Function runs (e.g. PickIndex). They are different from Blueprint-wide Variables such as Score and do not appear in other functions' graphs."
  },
  "trace": {
    "title": "Build a mouse-aimed line trace",
    "body": "The Controller's Fire Input Action Started runs Convert Mouse Location To World Space. Branch on its success, use World Location as Start and World Location + (World Direction * 5000) as End. Feed those vectors into Line Trace By Channel (Visibility); enable Draw Debug For Duration for testing. Branch on its Return Value, Break Hit Result → Hit Actor, Cast to the target Blueprint and run the target's hit event. This is a raycast, not ActorOnClicked."
  },
  "material": {
    "title": "Create and assign a material",
    "body": "In the Content Drawer right-click → Material, give it an M_ name and open it. For a beginner version change Base Color with a Constant3Vector (or pick a simple starter Material), then Save. Open the Actor Blueprint, select its Static Mesh component, and choose that Material in Details → Materials → Element 0. The Material is an ASSET, not a variable."
  },
  "replay": {
    "title": "Restart the map without resetting every variable",
    "body": "In the PlayerController or Widget's button/key event add Get Current Level Name (tick Remove Prefix String) and Open Level (by Name). Connect the returned level name into Open Level → Level Name, and connect WHITE execution from the pressed event into Open Level. Save the level before testing. Reloading the map creates fresh GameMode variables and actors."
  },
  "playtest": {
    "title": "Test one change at a time",
    "body": "Compile the Blueprint, Save, then click Play (not Simulate). Perform exactly the test named in Check. If it fails, Stop and return to the last node you changed; add Print String to prove the white execution reaches that point. Do not build the next upgrade yet. If you temporarily altered a default for testing, restore the stated final value and Save before leaving."
  },
  "level": {
    "title": "Place and adjust a level Actor",
    "body": "Open the named level from Content Drawer. In the Place Actors panel drag the Actor/Camera into the viewport, then select it in World Outliner. Press W for Move, E for Rotate or R for Scale; for exact positions select Details → Transform and type X, Y, Z. To inspect a Camera Actor, select it and check its camera preview, or right-click → Pilot. Save the LEVEL (Ctrl+S), not just the Blueprint."
  },
  "ui-pass": {
    "title": "Stop a HUD blocking world clicks",
    "body": "Open the Widget Blueprint → Designer, select the ROOT Canvas Panel in Hierarchy, then Details → Behavior → Visibility. For display-only HUD choose Not Hit-Testable (Self & All Children), so nothing inside captures mouse clicks. If a Replay Button must be clicked, instead use Not Hit-Testable (Self Only) on the root and set only the non-button decorative elements to Not Hit-Testable (Self & All Children). Compile and test the actual click in Play."
  },
  "physics": {
    "title": "Find the mesh physics settings",
    "body": "Open the Actor Blueprint → Viewport; select the existing Static Mesh component in Components (often named Model). In Details search Simulate Physics, Collision Enabled and Physics → Linear/Angular Velocity. A reset uses a WHITE execution chain of Set Simulate Physics(false) → Set Actor Transform → Set Simulate Physics(true) → clear velocities. Do not create a second mesh when the tutorial already has a Model component."
  },
  "art": {
    "title": "Make and import one simple original asset",
    "body": "Choose ONE useful improvement first: a UI icon, simple mesh, texture or material. Save the editable source file (PSD/MAX) separately. Export PNG with transparency for UI, or FBX for a simple mesh. In Unreal Content Drawer open the game's folder → Import, select the exported file, and Compile/Save the referencing Blueprint. Check it in Play before adding more decoration. This is an ASSET, not a Blueprint Variable."
  },
  "backup": {
    "title": "Make a safe working backup",
    "body": "Stop Play and close Unreal Editor before copying the project folder. Keep the working original safe, then reopen the copy in Unreal and confirm its main level still plays. Avoid editing the same .uproject on two computers or directly inside a Teams-sync folder. Only change the copied project while following upgrades."
  },
  "refresh": {
    "title": "Update the EXISTING UI after a game change",
    "body": "Open the existing Widget Blueprint, and find the ONE RefreshShop / RefreshHUD function already created earlier. To call it after another action, connect the action's WHITE execution output to Call RefreshShop on the saved widget reference (or Self when inside the Widget). Do not duplicate the ClickerButton OnClicked handler or create a second UI widget. Check the display immediately after buying/clicking, and again after restarting the level."
  },
  "event-input": {
    "title": "Add an input to a Custom Event (not a variable)",
    "body": "Open the Actor Blueprint and select the RED Custom Event node (e.g. Bowl), not a Function. In the Details panel find Inputs → +, enter the exact input name and type (Strength, Float), then Compile. The event's caller will now have a coloured Strength value pin. This is an Event INPUT, not a saved Blueprint variable; do NOT create a separate Strength under My Blueprint → Variables."
  }
};

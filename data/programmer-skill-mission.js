window.UE5_SKILL_MISSIONS = {
  "version": "3.57.4",
  "missions": [
    {
      "id": "arrays-maps-escape-room",
      "discipline": "Programmer",
      "icon": "⌘",
      "title": "Escape Room: Arrays & Maps",
      "subtitle": "Build a complete solo Blueprint game from start screen to win screen.",
      "duration": "3–5 hours",
      "difficulty": "Guided solo build",
      "summary": "You are making the entire game yourself. Use an Inventory Array to store collected items and a Map to connect item names to useful descriptions. Then combine those systems with a generator puzzle, locked exit, UI and a proper ending.",
      "skills": [
        "Arrays",
        "Maps",
        "Contains",
        "Remove Item",
        "For Each Loop",
        "Find",
        "Booleans",
        "Branches",
        "Widgets",
        "Game flow"
      ],
      "rules": [
        "Work alone: this is a programmer skill mission, not a team jam.",
        "Basic shapes are enough. Do not lose time hunting for art.",
        "Build one stage, test it, then move on.",
        "If a test fails, fix that stage before adding more systems."
      ],
      "gameFlow": [
        "Start Menu",
        "Explore Room",
        "Collect Battery",
        "Power Generator",
        "Collect Key",
        "Unlock Exit",
        "Escape",
        "Win Screen"
      ],
      "stages": [
        {
          "id": "start",
          "number": 0,
          "title": "Start Here — Build the Room",
          "goal": "Create the project, save the playable level and block out a tiny escape room.",
          "why": "The programming needs a simple space to live in. Keeping the room small stops environment work from stealing time from the code.",
          "steps": [
            {
              "title": "Create the project",
              "where": "Epic Games Launcher → Unreal Engine → Games → Third Person",
              "do": "Create a Blueprint Third Person project named EscapeRoom. Use the normal Third Person template so movement and camera controls already work.",
              "check": "Press Play. You can move, jump and control the camera.",
              "why": "You need a reliable playable character before adding your own systems.",
              "doList": [
                "Open Epic Games Launcher and launch Unreal Engine 5.8.",
                "In the Unreal Project Browser click Games.",
                "Click the Third Person template.",
                "Make sure Blueprint is selected rather than C++.",
                "Name the project EscapeRoom.",
                "Choose where the project will be saved.",
                "Click Create and wait for the editor to open.",
                "Press Play once and confirm you can move, jump and control the camera before changing anything."
              ],
              "see": "Press Play. You can move, jump and control the camera."
            },
            {
              "title": "Save the level with the correct name",
              "where": "File → Save Current Level As",
              "do": "Save the map as LV_EscapeRoom.",
              "check": "The Content Drawer shows LV_EscapeRoom and the level tab uses that name.",
              "why": "The restart button later will reopen this exact level by name.",
              "doList": [
                "In the top-left menu bar click File.",
                "Click Save Current Level As.",
                "In the save window open the Content folder if you are not already inside it.",
                "Click the Name box at the bottom of the save window.",
                "Type LV_EscapeRoom exactly.",
                "Click Save.",
                "Look at the level tab at the top of the viewport and confirm it now says LV_EscapeRoom.",
                "Press Ctrl+Shift+S or click File → Save All so the project is fully saved."
              ],
              "see": "The Content Drawer shows LV_EscapeRoom and the level tab uses that name."
            },
            {
              "title": "Block out one small room",
              "where": "Level Editor → Place Actors → Shapes → Cube",
              "do": "Use cubes for a floor, four walls, one exit door, one generator area and a few simple boxes/shelves. Keep everything in one small room.",
              "check": "The player can walk around the room and cannot walk through the walls.",
              "why": "This is a programming mission. The room only needs to support the puzzle.",
              "doList": [
                "In the Level Editor open Place Actors.",
                "Open Shapes and drag a Cube into the level.",
                "Scale the Cube into a floor large enough for a small puzzle room.",
                "Duplicate cubes to make four walls around the floor.",
                "Add one tall cube where the Exit Door will eventually go.",
                "Add only a few simple cubes for shelves/boxes and leave a clear Generator area.",
                "Press Play and walk around the whole room.",
                "Fix any wall/floor gaps before moving on; the player should not be able to escape the blockout."
              ],
              "see": "The player can walk around the room and cannot walk through the walls."
            },
            {
              "title": "Plan where the puzzle pieces will go",
              "where": "Level viewport",
              "do": "Leave one obvious place for the Generator, one place for the Battery, one place for the Key and one clear Exit Door.",
              "check": "You can point at all four locations before you start coding.",
              "why": "A clear physical layout makes debugging the game logic much easier.",
              "doList": [
                "Stay in LV_EscapeRoom and look at the room from the player start position.",
                "Choose one wall or corner for the Generator.",
                "Leave enough empty floor in front of that spot for the player to walk into a trigger box.",
                "Choose a different visible place for the Battery pickup.",
                "Choose another place for the Key pickup; a shelf or desk height is fine.",
                "Choose one wall for the Exit Door and make sure the player can clearly see it from inside the room.",
                "Move any blocking cubes so the player can walk between Battery → Generator → Key → Exit.",
                "Press Play and walk the route once. Do not add decoration until the route is easy to understand."
              ],
              "see": "You can point at all four locations before you start coding."
            }
          ],
          "test": [
            "Press Play and complete one lap of the room.",
            "Make sure the exit is visible and the player cannot leave yet.",
            "Save All before moving on."
          ],
          "doneWhen": "You have a playable LV_EscapeRoom with a clear exit and obvious spaces for the Battery, Generator and Key.",
          "common": [
            "Do not build several rooms yet.",
            "Do not spend time downloading environment packs.",
            "If the player falls out of the level, make the floor larger or check its collision."
          ]
        },
        {
          "id": "inventory",
          "number": 1,
          "title": "Build the Inventory Array",
          "goal": "Give the player one Array that can store several collected item names.",
          "why": "An Array is ideal for a simple inventory because it stores several values of the same type in one variable.",
          "steps": [
            {
              "title": "Create the Inventory variable",
              "where": "BP_ThirdPersonCharacter → My Blueprint panel",
              "do": "Create a variable named Inventory. Set the type to String, then change the container type from Single to Array. Compile.",
              "check": "Inventory shows the Array/grid container icon and its Default Value is empty.",
              "why": "The Array will hold item names such as Battery and Key.",
              "doList": [
                "Open BP_ThirdPersonCharacter.",
                "In My Blueprint click + Variable.",
                "Rename the new variable Inventory.",
                "With Inventory selected, go to Details → Variable Type.",
                "Choose String.",
                "Click the container icon beside the type and choose Array.",
                "Click Compile.",
                "Check that Inventory shows the Array/grid icon and has no default items."
              ],
              "see": "Inventory shows the Array/grid container icon and its Default Value is empty.",
              "visual": {
                "src": "assets/book/containers.webp",
                "caption": "Reference: Unreal container types. Inventory must be a String Array, not a single String."
              }
            },
            {
              "title": "Temporarily add a Key with the keyboard",
              "where": "BP_ThirdPersonCharacter → Event Graph",
              "do": "Add a K keyboard event. Drag Inventory in as Get → drag from the Array pin → Add. Type Key into the Item input. After Add, Print String: Key added to Inventory.",
              "check": "Play and press K once. The printed message appears.",
              "why": "Testing the Array in isolation proves the container works before pickups are involved.",
              "doList": [
                "Open BP_ThirdPersonCharacter and click the Event Graph tab.",
                "Right-click an empty area of the graph.",
                "Search for K Keyboard Event.",
                "Click the K keyboard event to place it.",
                "Drag Inventory from My Blueprint into the graph and choose Get.",
                "Drag from the blue Inventory Array pin and search for Add.",
                "Choose Add (Array).",
                "Click the Item input on Add and type Key.",
                "Connect K Pressed → Add execution input.",
                "Drag from Add execution output and create Print String.",
                "Set In String to Key added to Inventory.",
                "Click Compile.",
                "Press Play and press K once.",
                "Confirm Key added to Inventory appears on screen."
              ],
              "see": "Play and press K once. The printed message appears."
            },
            {
              "title": "Create an inventory inspection key",
              "where": "BP_ThirdPersonCharacter → Event Graph",
              "do": "Add an I keyboard event. Get Inventory → For Each Loop. Connect Array Element to Print String. Compile.",
              "check": "Play → press K → press I. Key prints on screen.",
              "why": "For Each Loop visits every value currently stored in the Array.",
              "doList": [
                "Right-click empty graph space and add the Keyboard I event.",
                "Drag Inventory into the graph as Get.",
                "Drag from the Inventory Array pin and add For Each Loop.",
                "Connect I → Pressed to For Each Loop.",
                "Drag from Array Element and create Print String.",
                "Connect Loop Body to Print String.",
                "Click Compile.",
                "Play → press K → press I. Key should print on screen."
              ],
              "see": "Play → press K → press I. Key prints on screen."
            },
            {
              "title": "Remove the temporary K test",
              "where": "BP_ThirdPersonCharacter → Event Graph",
              "do": "Delete only the temporary K → Add Key test chain. Keep the I → For Each Loop inspection chain.",
              "check": "Pressing K no longer creates fake items. I is still available for later debugging.",
              "why": "Real game items should now enter the inventory through pickups.",
              "doList": [
                "Stop Play mode with Esc.",
                "Open BP_ThirdPersonCharacter → Event Graph.",
                "Box-select only the K keyboard event, Add node and Key added to Inventory Print String chain.",
                "Press Delete.",
                "Do not delete the I keyboard event or its For Each Loop.",
                "Click Compile and make sure there are no errors.",
                "Click Save.",
                "Press Play and tap K once to confirm it no longer creates a fake Key.",
                "Tap I once; the inspection key should still run."
              ],
              "see": "Pressing K no longer creates fake items. I is still available for later debugging."
            }
          ],
          "flow": [
            "I pressed",
            "Get Inventory",
            "For Each Loop",
            "Array Element",
            "Print String"
          ],
          "test": [
            "Inventory starts empty.",
            "The Array variable is a String Array, not one String.",
            "Your I key loop remains in the character for debugging."
          ],
          "doneWhen": "The player owns an empty String Array called Inventory and you can loop through its contents with I.",
          "common": [
            "Compile after changing a variable container type.",
            "If Add or For Each Loop does not look correct, check that Inventory is an Array.",
            "Do not type several items into the defaults; the game will add them during play."
          ]
        },
        {
          "id": "battery",
          "number": 2,
          "title": "Create the Battery Pickup",
          "goal": "Make a collectable Battery that adds itself to the Inventory Array and then disappears.",
          "why": "This turns the Array from a test into a real gameplay system.",
          "steps": [
            {
              "title": "Create BP_Battery",
              "where": "Content Drawer → right-click → Blueprint Class → Actor",
              "do": "Name the Actor BP_Battery. Open it. Add a Static Mesh component and a Sphere Collision component. A cube is fine for the mesh.",
              "check": "The Components panel contains a mesh and Sphere Collision.",
              "why": "The mesh represents the item; the collision detects the player.",
              "doList": [
                "In the Content Drawer right-click → Blueprint Class → Actor.",
                "Name it BP_Battery and open it.",
                "Click Add Component → Static Mesh.",
                "Choose a simple Cube mesh if you do not want to spend time on art.",
                "Click Add Component → Sphere Collision.",
                "Select Sphere Collision and set Collision Presets to OverlapOnlyPawn if available.",
                "Make sure Generate Overlap Events is enabled.",
                "Resize the Sphere so the player can easily touch the pickup.",
                "Compile and Save."
              ],
              "see": "The Components panel contains a mesh and Sphere Collision."
            },
            {
              "title": "Create the overlap event",
              "where": "BP_Battery → select Sphere Collision → Details → Events",
              "do": "Add On Component Begin Overlap. From Other Actor create Cast To BP_ThirdPersonCharacter.",
              "check": "The white execution wire runs from Begin Overlap into the Cast.",
              "why": "The pickup should only change the inventory of the player character.",
              "doList": [
                "Open BP_Battery and select Sphere Collision in the Components panel.",
                "In the Details panel scroll to Events.",
                "Click + beside On Component Begin Overlap.",
                "In the Event Graph drag from Other Actor.",
                "Search for Cast To BP_ThirdPersonCharacter and place it.",
                "Connect On Component Begin Overlap execution → Cast execution input.",
                "Click Compile.",
                "Check the Cast receives Other Actor from the overlap event before continuing."
              ],
              "see": "The white execution wire runs from Begin Overlap into the Cast."
            },
            {
              "title": "Add Battery to the Array",
              "where": "BP_Battery → Event Graph",
              "do": "From As BP Third Person Character, Get Inventory. Drag from the Array pin → Add. Set Item to Battery.",
              "check": "The Add node is connected to the player's Inventory Array.",
              "why": "Battery is now a real value stored by the player.",
              "doList": [
                "Stay in BP_Battery → Event Graph.",
                "Find the Cast To BP_ThirdPersonCharacter node you made from Other Actor.",
                "Drag from As BP Third Person Character.",
                "Search for Get Inventory and place the getter.",
                "Drag from the blue Inventory Array output pin.",
                "Search for Add and choose Add (Array).",
                "Click the Add Item input and type Battery.",
                "Connect Cast Succeeded execution → Add execution input.",
                "Click Compile.",
                "Check that the Add Target Array pin is fed by the player Inventory, not by a new local array."
              ],
              "see": "The Add node is connected to the player's Inventory Array."
            },
            {
              "title": "Give feedback and remove the pickup",
              "where": "BP_Battery → Event Graph",
              "do": "After Add, Print String: Battery Collected! Then call Destroy Actor with Self as the target.",
              "check": "The execution chain reaches Print String and then Destroy Actor.",
              "why": "The player needs confirmation and the same Battery must not be collected twice.",
              "doList": [
                "In BP_Battery find the Add node that stores Battery.",
                "Drag from the Add execution output.",
                "Search for Print String and place it.",
                "Set In String to Battery Collected!",
                "Drag from the Print String execution output.",
                "Search for Destroy Actor and place it.",
                "Leave Destroy Actor Target as Self.",
                "Click Compile.",
                "Click Save.",
                "Follow the white execution wire with your eyes: Cast → Add → Print String → Destroy Actor."
              ],
              "see": "The execution chain reaches Print String and then Destroy Actor."
            },
            {
              "title": "Place and test it",
              "where": "LV_EscapeRoom",
              "do": "Drag BP_Battery into the room. Put it somewhere easy to reach for the first test.",
              "check": "Play → touch Battery → it disappears → press I → Battery prints.",
              "why": "This proves collision, casting and the Array are working together.",
              "doList": [
                "Return to LV_EscapeRoom.",
                "In the Content Drawer search for BP_Battery.",
                "Drag BP_Battery into the level.",
                "Move it to an obvious reachable place for this first test.",
                "Press Play.",
                "Walk into the Battery.",
                "Confirm Battery Collected! appears.",
                "Confirm the Battery actor disappears.",
                "Press I.",
                "Confirm Battery prints from the Inventory Array.",
                "Stop Play mode and Save All."
              ],
              "see": "Play → touch Battery → it disappears → press I → Battery prints."
            }
          ],
          "flow": [
            "Begin Overlap",
            "Cast to BP_ThirdPersonCharacter",
            "Get Inventory",
            "Add Battery",
            "Print",
            "Destroy Actor"
          ],
          "test": [
            "The Battery disappears once.",
            "Battery is visible when you press I.",
            "Walking over the old location cannot collect it again."
          ],
          "doneWhen": "The player can collect BP_Battery and the word Battery is stored in Inventory.",
          "common": [
            "If the overlap never fires, make sure the Sphere Collision overlaps Pawns.",
            "If Get Inventory is missing, compile BP_ThirdPersonCharacter first.",
            "Destroy the pickup Actor, not the player."
          ]
        },
        {
          "id": "generator",
          "number": 3,
          "title": "Build the Generator Puzzle",
          "goal": "Make a Generator that checks the Inventory for Battery, consumes it and turns the power on.",
          "why": "Arrays become useful when gameplay asks questions about what they contain.",
          "steps": [
            {
              "title": "Create the PowerOn Boolean",
              "where": "BP_ThirdPersonCharacter → My Blueprint",
              "do": "Create a Boolean variable called PowerOn. Leave its default value False. Compile.",
              "check": "PowerOn is False by default.",
              "why": "The player needs one game-state value that remembers whether the Generator has been activated.",
              "doList": [
                "Open BP_ThirdPersonCharacter.",
                "In My Blueprint click + Variable.",
                "Rename the variable PowerOn.",
                "Set Variable Type to Boolean.",
                "Click Compile.",
                "With PowerOn selected, find Default Value in Details.",
                "Leave the checkbox unticked so PowerOn starts False.",
                "Click Save."
              ],
              "see": "PowerOn is False by default."
            },
            {
              "title": "Create BP_Generator",
              "where": "Content Drawer → Blueprint Class → Actor",
              "do": "Create BP_Generator. Add a Static Mesh, Box Collision and Point Light. Turn the Point Light visibility off by default.",
              "check": "The Generator has visible geometry, an overlap area and a light that begins hidden.",
              "why": "The light gives the player visible proof that the state changed.",
              "doList": [
                "Create a new Actor Blueprint named BP_Generator.",
                "Open BP_Generator.",
                "Add a Static Mesh component.",
                "Add a Box Collision component and scale it so the player can walk into the trigger.",
                "Set Box Collision to overlap the Pawn/player and keep Generate Overlap Events enabled.",
                "Add a Point Light component.",
                "Select the Point Light and untick Visible so it starts off.",
                "Compile and Save."
              ],
              "see": "The Generator has visible geometry, an overlap area and a light that begins hidden."
            },
            {
              "title": "Stop a powered Generator running again",
              "where": "BP_Generator → Box Collision → On Component Begin Overlap",
              "do": "Cast Other Actor to BP_ThirdPersonCharacter. Get PowerOn and feed it into a Branch. From True, Print String: Power is already on.",
              "check": "The first Branch asks about PowerOn before checking the inventory.",
              "why": "Without this check the Generator would keep asking for Batteries after it has already been powered.",
              "doList": [
                "Select Box Collision → Details → Events → add On Component Begin Overlap.",
                "Drag from Other Actor and create Cast To BP_ThirdPersonCharacter.",
                "From the Character reference get PowerOn.",
                "Create a Branch.",
                "Connect Cast success to the Branch execution input.",
                "Connect PowerOn to Branch → Condition.",
                "From True create Print String: Power is already on.",
                "Leave False free for the Battery check."
              ],
              "see": "The first Branch asks about PowerOn before checking the inventory."
            },
            {
              "title": "Check for Battery",
              "where": "BP_Generator → False output of the PowerOn Branch",
              "do": "Get Inventory → Contains. Set Item to Battery. Feed the Boolean result into a second Branch.",
              "check": "The second Branch answers: does Inventory contain Battery?",
              "why": "Contains searches the Array and returns True or False.",
              "doList": [
                "Stay in BP_Generator → Event Graph.",
                "Find the first Branch that checks PowerOn.",
                "Use the False execution output from that Branch; this means the Generator is not already powered.",
                "Drag from As BP Third Person Character and get Inventory.",
                "Drag from the blue Inventory Array pin and search for Contains.",
                "Choose Contains (Array).",
                "Set Contains Item to Battery.",
                "Right-click empty graph space and add a Branch.",
                "Connect the first PowerOn Branch False execution → the new Branch execution input.",
                "Connect Contains Return Value → the new Branch Condition.",
                "Click Compile."
              ],
              "see": "The second Branch answers: does Inventory contain Battery?"
            },
            {
              "title": "Handle the missing Battery",
              "where": "BP_Generator → Battery Branch → False",
              "do": "Print String: The generator needs a Battery.",
              "check": "You get a useful message if you visit the Generator first.",
              "why": "The player should understand what the puzzle needs.",
              "doList": [
                "Find the second Branch that checks whether Inventory contains Battery.",
                "Drag from its False execution output.",
                "Search for Print String.",
                "Set In String to The generator needs a Battery.",
                "Click Compile.",
                "Return to LV_EscapeRoom and press Play without collecting the Battery.",
                "Walk into the Generator trigger.",
                "Confirm The generator needs a Battery. appears and the light stays off."
              ],
              "see": "You get a useful message if you visit the Generator first."
            },
            {
              "title": "Consume the Battery and switch power on",
              "where": "BP_Generator → Battery Branch → True",
              "do": "Get Inventory → Remove Item → Battery. Then Set PowerOn to True on the player. Then Set Visibility on the Generator Point Light to True. Print String: Power Restored!",
              "check": "The Battery is removed, PowerOn becomes True and the light appears.",
              "why": "A used Battery should leave the inventory and the game must remember the new powered state.",
              "doList": [
                "From the Battery Branch True output continue the success path.",
                "Get the player's Inventory Array again.",
                "Create Remove Item and set Item to Battery.",
                "After Remove Item, drag from the Character reference and create Set PowerOn.",
                "Tick the new PowerOn value True.",
                "Drag the Point Light component into the graph.",
                "From the Point Light create Set Visibility and tick New Visibility True.",
                "After Set Visibility create Print String: Power Restored!",
                "Compile and Save."
              ],
              "see": "The Battery is removed, PowerOn becomes True and the light appears."
            },
            {
              "title": "Test all three states",
              "where": "LV_EscapeRoom → Play",
              "do": "Test Generator without Battery. Restart. Collect Battery and use Generator. Walk away and return to Generator.",
              "check": "You see: needs Battery → Power Restored → power is already on.",
              "why": "Testing every branch catches logic errors before the exit door depends on this system.",
              "doList": [
                "Return to LV_EscapeRoom and make sure BP_Generator is placed in the room.",
                "Press Play without collecting Battery and walk into the Generator trigger.",
                "Confirm The generator needs a Battery. appears.",
                "Restart the level, collect Battery and walk into the Generator trigger.",
                "Confirm Power Restored! appears and the Point Light turns on.",
                "Press I and confirm Battery has been removed from Inventory.",
                "Walk away and enter the Generator trigger again.",
                "Confirm Power is already on. appears.",
                "Do not continue until all three states work exactly as described."
              ],
              "see": "You see: needs Battery → Power Restored → power is already on."
            }
          ],
          "flow": [
            "Overlap Generator",
            "PowerOn?",
            "If False: Inventory Contains Battery?",
            "Remove Battery",
            "Set PowerOn True",
            "Light On"
          ],
          "test": [
            "Generator refuses to work without Battery.",
            "Battery is removed after use.",
            "PowerOn remains True after walking away.",
            "Generator does not consume another Battery after it is powered."
          ],
          "doneWhen": "The Generator has three sensible states: needs Battery, powers on successfully, and already powered.",
          "common": [
            "If Remove Item does nothing, confirm the stored String is exactly Battery.",
            "Use Set PowerOn on the cast player reference, not a new local variable in BP_Generator.",
            "If the light is always visible, turn Visible off in the component defaults."
          ]
        },
        {
          "id": "key-map",
          "number": 4,
          "title": "Add the Key and Build the Map",
          "goal": "Create a second collectable item and a Map that stores useful information about each item.",
          "why": "The Array answers 'what do I own?' while the Map answers 'what information belongs to this item?'",
          "steps": [
            {
              "title": "Create BP_Key from the working Battery",
              "where": "Content Drawer → BP_Battery → Duplicate",
              "do": "Rename the copy BP_Key. Open it. Change Add Item from Battery to Key. Change the message to Key Collected! Change the mesh/material if you want, but basic art is fine.",
              "check": "Collecting BP_Key adds Key, not Battery.",
              "why": "Duplicating a proven pickup avoids rebuilding identical collision logic.",
              "doList": [
                "In the Content Drawer right-click BP_Battery and choose Duplicate.",
                "Rename the duplicate BP_Key.",
                "Double-click BP_Key to open it.",
                "Find the Array Add node and change Item from Battery to Key.",
                "Find Print String and change the message to Key Collected!",
                "Optionally change the mesh/material/scale so the pickup looks different from Battery.",
                "Click Compile.",
                "Click Save."
              ],
              "see": "Collecting BP_Key adds Key, not Battery."
            },
            {
              "title": "Place the Key",
              "where": "LV_EscapeRoom",
              "do": "Put BP_Key somewhere the player has to look for, such as a shelf, desk or behind a few boxes.",
              "check": "You can still reach it without special movement or extra code.",
              "why": "The game needs a small exploration step without turning this into a level-design project.",
              "doList": [
                "Return to LV_EscapeRoom.",
                "Find BP_Key in the Content Drawer.",
                "Drag BP_Key into the level.",
                "Move it to a shelf, desk or another place the player has to notice.",
                "Keep it reachable with normal walking/jumping; do not require new mechanics.",
                "Press Play and walk to the Key.",
                "Collect it and confirm Key Collected! appears.",
                "Press I and confirm Key appears in the Inventory.",
                "Stop Play mode and Save All."
              ],
              "see": "You can still reach it without special movement or extra code."
            },
            {
              "title": "Create ItemDescriptions",
              "where": "BP_ThirdPersonCharacter → My Blueprint",
              "do": "Create a variable called ItemDescriptions. Set the Key type to String and change the container type to Map. Set the Map Value type to String. Compile.",
              "check": "ItemDescriptions shows a Map container with String → String types.",
              "why": "Each unique item name can now point to one description.",
              "doList": [
                "Open BP_ThirdPersonCharacter.",
                "In My Blueprint click + Variable.",
                "Rename the variable ItemDescriptions.",
                "Set the Map Key type to String.",
                "Click the container icon beside the type and choose Map.",
                "Set the Map Value type to String.",
                "Click Compile.",
                "With ItemDescriptions selected, find Default Value in Details.",
                "Leave the Map empty for now; you will add entries in the next step."
              ],
              "see": "ItemDescriptions shows a Map container with String → String types.",
              "visual": {
                "src": "assets/power-jam-programmer/03-powerstates-map-type.png",
                "caption": "Reference: where the Map container and Key/Value types live. Your Map is String → String rather than Name → Boolean."
              }
            },
            {
              "title": "Add the Map entries",
              "where": "BP_ThirdPersonCharacter → ItemDescriptions → Default Value",
              "do": "Add Battery → A heavy Battery. It might power something. Add Key → A small metal Key. It looks important.",
              "check": "The Map contains two unique keys: Battery and Key.",
              "why": "Maps store key-value pairs, so one item name can retrieve its matching information.",
              "doList": [
                "With ItemDescriptions selected, go to Details → Default Value.",
                "Click + to add the first Map entry.",
                "Set the first Key to Battery.",
                "Set its Value to A heavy Battery. It might power something.",
                "Click + to add the second Map entry.",
                "Set the second Key to Key.",
                "Set its Value to A small metal Key. It looks important.",
                "Click Compile.",
                "Click Save."
              ],
              "see": "The Map contains two unique keys: Battery and Key."
            },
            {
              "title": "Test collecting both items",
              "where": "LV_EscapeRoom → Play",
              "do": "Collect Battery and Key before using the Generator. Press I.",
              "check": "The Inventory Array can hold both Battery and Key at the same time.",
              "why": "You now have multiple values in the Array ready to be matched against the Map.",
              "doList": [
                "Press Play from LV_EscapeRoom.",
                "Collect BP_Battery first.",
                "Collect BP_Key before using the Generator.",
                "Press I.",
                "Confirm Battery prints once.",
                "Confirm Key prints once.",
                "Press I again and make sure the inspection itself does not add or remove anything.",
                "Stop Play mode only after both items are proven to be in the Array."
              ],
              "see": "The Inventory Array can hold both Battery and Key at the same time."
            }
          ],
          "flow": [
            "Inventory Array: Battery, Key",
            "ItemDescriptions Map",
            "Battery → description",
            "Key → description"
          ],
          "test": [
            "BP_Key adds the exact String Key.",
            "ItemDescriptions is a String → String Map.",
            "The Map has unique Battery and Key entries."
          ],
          "doneWhen": "The game has two working pickups and a Map connecting each item name to a description.",
          "common": [
            "A Map key must be unique.",
            "Compile before editing a new Map's Default Values.",
            "Do not confuse the game's Key item with the word 'Key' used for the left side of a Map."
          ]
        },
        {
          "id": "array-map-together",
          "number": 5,
          "title": "Make the Array and Map Work Together",
          "goal": "Upgrade the I key so it loops through owned items and looks up each item's description in the Map.",
          "why": "This is the central programming idea of the mission: use one data structure to drive another.",
          "steps": [
            {
              "title": "Return to the I key loop",
              "where": "BP_ThirdPersonCharacter → Event Graph",
              "do": "Find I → Get Inventory → For Each Loop.",
              "check": "Array Element is available for every stored inventory item.",
              "why": "Array Element gives you the current item name during each loop.",
              "doList": [
                "Open BP_ThirdPersonCharacter.",
                "Click Event Graph.",
                "Use Ctrl+F or visually find the I keyboard event.",
                "Follow the white wire from I Pressed to the For Each Loop.",
                "Confirm the For Each Loop Array input is connected to Get Inventory.",
                "Leave the Array Element pin visible; you will use it as the Map lookup key.",
                "Move the existing Print String aside so you have room to add the Map nodes.",
                "Do not delete the I event or For Each Loop."
              ],
              "see": "Array Element is available for every stored inventory item."
            },
            {
              "title": "Find the matching Map value",
              "where": "Same Event Graph",
              "do": "Get ItemDescriptions. Drag from the Map pin → Find. Connect the For Each Loop Array Element into the Find Key input.",
              "check": "The Map Find node uses the current inventory item as its search key.",
              "why": "Find retrieves the value associated with that Map key.",
              "doList": [
                "Drag ItemDescriptions from My Blueprint into the Event Graph and choose Get.",
                "Drag from the ItemDescriptions Map pin.",
                "Search for Find and choose Find (Map).",
                "Find the For Each Loop Array Element output pin.",
                "Drag from Array Element to the Find Key input.",
                "Check the pin types match: String Array Element → String Map Key.",
                "Leave the Find Value output unconnected for one moment.",
                "Click Compile to catch any type mismatch before continuing."
              ],
              "see": "The Map Find node uses the current inventory item as its search key.",
              "visual": {
                "src": "assets/power-jam-programmer/12-has-power-complete.png",
                "caption": "Reference: Map Find uses a key to retrieve a stored value. Your pin types differ, but the lookup idea is the same."
              }
            },
            {
              "title": "Print the description",
              "where": "Same Event Graph",
              "do": "Connect the value returned by Find to Print String. Keep the Print String execution connected to Loop Body.",
              "check": "Pressing I prints one matching description for each item currently owned.",
              "why": "The loop provides item names; the Map turns those names into useful data.",
              "doList": [
                "Find the existing Print String inside the I key loop.",
                "Disconnect the old Array Element value from Print String In String if it is still connected.",
                "Drag from the Find Value output.",
                "Connect Find Value to Print String In String.",
                "Keep For Each Loop Loop Body → Print String execution connected.",
                "Click Compile.",
                "Press Play and collect Battery and Key.",
                "Press I.",
                "Confirm the two descriptions print instead of only the raw words Battery and Key."
              ],
              "see": "Pressing I prints one matching description for each item currently owned."
            },
            {
              "title": "Prove the Battery really leaves",
              "where": "LV_EscapeRoom → Play",
              "do": "Collect Battery and Key. Press I. Use the Generator. Press I again.",
              "check": "Before Generator: Battery and Key descriptions print. After Generator: only the Key description prints.",
              "why": "This proves Remove Item changes the Array and the Map lookup reacts to the new contents.",
              "doList": [
                "Press Play and collect Battery.",
                "Collect Key as well.",
                "Press I and confirm both descriptions print.",
                "Walk into the Generator trigger and power it.",
                "Confirm Power Restored! appears.",
                "Press I again.",
                "Confirm the Battery description no longer prints.",
                "Confirm the Key description still prints.",
                "If Battery still appears, go back to BP_Generator and check Remove Item is using the same Inventory Array."
              ],
              "see": "Before Generator: Battery and Key descriptions print. After Generator: only the Key description prints."
            }
          ],
          "flow": [
            "Press I",
            "For Each Inventory item",
            "Use item name as Map Key",
            "Find description",
            "Print"
          ],
          "test": [
            "Two owned items produce two descriptions.",
            "Using Battery removes its description from later inventory checks.",
            "Key remains in the Array."
          ],
          "doneWhen": "Your Array supplies the Map key and the Map returns the correct item information.",
          "common": [
            "Connect Print String execution to Loop Body, not Completed.",
            "Connect Array Element to Find's Key input.",
            "If Find fails, compare spelling and capitalisation between the Array String and Map key."
          ]
        },
        {
          "id": "exit-door",
          "number": 6,
          "title": "Build the Locked Exit",
          "goal": "Make the exit open only when PowerOn is True AND the Inventory contains Key.",
          "why": "A complete game needs a win condition that combines the systems you have already built.",
          "steps": [
            {
              "title": "Create BP_ExitDoor",
              "where": "Content Drawer → Blueprint Class → Actor",
              "do": "Create BP_ExitDoor. Add a Static Mesh shaped like a door and a Box Collision in front of it.",
              "check": "The player cannot walk through the closed door.",
              "why": "The door is the physical gate for the final condition.",
              "doList": [
                "Create a new Actor Blueprint named BP_ExitDoor.",
                "Open it and add a Static Mesh component.",
                "Use a Cube and scale it into a door if needed.",
                "Add a Box Collision component in front of the door.",
                "Set Box Collision to overlap the Pawn/player.",
                "Make sure the door mesh blocks the player while closed.",
                "Compile and Save.",
                "Place BP_ExitDoor over the exit opening in LV_EscapeRoom."
              ],
              "see": "The player cannot walk through the closed door."
            },
            {
              "title": "Read both player conditions",
              "where": "BP_ExitDoor → Box Collision → On Component Begin Overlap",
              "do": "Cast Other Actor to BP_ThirdPersonCharacter. From the player get PowerOn. Also Get Inventory → Contains → Key.",
              "check": "You now have two Boolean results: PowerOn and Contains Key.",
              "why": "The exit needs two independent requirements.",
              "doList": [
                "Open BP_ExitDoor → Event Graph.",
                "From Box Collision create On Component Begin Overlap if it is not already there.",
                "Drag from Other Actor and create Cast To BP_ThirdPersonCharacter.",
                "Drag from As BP Third Person Character and get PowerOn.",
                "Drag again from As BP Third Person Character and get Inventory.",
                "Drag from the Inventory Array pin and add Contains (Array).",
                "Set Contains Item to Key.",
                "Leave PowerOn and Contains Return Value visible next to each other for the next step.",
                "Click Compile."
              ],
              "see": "You now have two Boolean results: PowerOn and Contains Key."
            },
            {
              "title": "Combine them with AND",
              "where": "BP_ExitDoor → Event Graph",
              "do": "Create an AND Boolean node. Connect PowerOn to A and Contains Key to B. Connect the AND result to a Branch.",
              "check": "The Branch is True only when both player conditions are True.",
              "why": "AND is the correct logic when every requirement must be satisfied.",
              "doList": [
                "Right-click empty graph space near PowerOn and Contains.",
                "Search for AND Boolean and place the AND node.",
                "Connect PowerOn → AND A.",
                "Connect Contains Return Value → AND B.",
                "Right-click and add a Branch.",
                "Connect the Cast Succeeded execution → Branch execution input.",
                "Connect AND Return Value → Branch Condition.",
                "Click Compile.",
                "Read the graph left to right: player overlaps → Cast → both conditions are combined → Branch decides."
              ],
              "see": "The Branch is True only when both player conditions are True."
            },
            {
              "title": "Handle the locked result",
              "where": "Exit Branch → False",
              "do": "Print String: The exit needs power and the Key.",
              "check": "Going to the exit too early explains why it stays shut.",
              "why": "Clear feedback prevents the player thinking the door is broken.",
              "doList": [
                "Find the Branch that uses the AND result.",
                "Drag from Branch False.",
                "Search for Print String.",
                "Set In String to The exit needs power and the Key.",
                "Click Compile.",
                "Press Play with neither requirement complete.",
                "Walk into the Exit trigger.",
                "Confirm the message appears and the door does not move."
              ],
              "see": "Going to the exit too early explains why it stays shut."
            },
            {
              "title": "Open the door once",
              "where": "Exit Branch → True",
              "do": "Add a Do Once node. After it, Print String: EXIT UNLOCKED! Get Actor Location → add Vector (0, 0, 300) → Set Actor Location.",
              "check": "The first successful overlap moves the door upward 300 units and later overlaps do not keep moving it.",
              "why": "Do Once prevents repeated overlaps from lifting the door again and again.",
              "doList": [
                "From Branch True create Do Once.",
                "From Do Once Completed create Print String: EXIT UNLOCKED!",
                "Add Get Actor Location.",
                "Create Vector + Vector.",
                "Use Get Actor Location as A and set B to X 0, Y 0, Z 300.",
                "Create Set Actor Location.",
                "Connect the added Vector result to New Location.",
                "Connect execution Print String → Set Actor Location.",
                "Compile and Save."
              ],
              "see": "The first successful overlap moves the door upward 300 units and later overlaps do not keep moving it."
            },
            {
              "title": "Test every combination",
              "where": "LV_EscapeRoom → Play / Restart",
              "do": "Test: nothing completed; Key only; power only; then power + Key.",
              "check": "Only the fourth test opens the door.",
              "why": "This proves your Boolean logic instead of only proving the happy path.",
              "doList": [
                "Test 1: start the game with no Battery used and no Key collected; touch the Exit and confirm it stays locked.",
                "Restart the level.",
                "Test 2: collect Key only; touch the Exit and confirm it stays locked.",
                "Restart the level.",
                "Test 3: collect Battery and power the Generator but do not collect Key; touch the Exit and confirm it stays locked.",
                "Restart the level.",
                "Test 4: power the Generator and collect Key.",
                "Touch the Exit and confirm EXIT UNLOCKED! appears.",
                "Confirm the door moves only once.",
                "Do not continue until all four cases behave differently in the correct way."
              ],
              "see": "Only the fourth test opens the door."
            }
          ],
          "flow": [
            "Overlap Exit",
            "PowerOn",
            "Inventory Contains Key",
            "AND",
            "Branch",
            "True → Do Once → Open"
          ],
          "test": [
            "No power + no Key = locked.",
            "Key only = locked.",
            "Power only = locked.",
            "Power + Key = open."
          ],
          "doneWhen": "The exit opens once, and only when both earlier systems have been completed.",
          "common": [
            "Make sure Contains searches for Key, not Battery.",
            "Use AND rather than OR.",
            "If the door moves every time you overlap, put Do Once before the movement."
          ]
        },
        {
          "id": "main-menu",
          "number": 7,
          "title": "Add a Start Screen and Objective",
          "goal": "Give the game a proper beginning instead of dropping the player straight into the room.",
          "why": "A complete game communicates what the player is doing before asking them to solve it.",
          "steps": [
            {
              "title": "Create WBP_MainMenu",
              "where": "Content Drawer → User Interface → Widget Blueprint",
              "do": "Create WBP_MainMenu. Add a title ESCAPE ROOM, instructions Find a Battery, restore the power, find the Key and escape, a START GAME button and a QUIT button.",
              "check": "The widget is readable at normal Play resolution.",
              "why": "The player gets context before the game begins.",
              "doList": [
                "In the Content Drawer right-click → User Interface → Widget Blueprint.",
                "Choose User Widget and name it WBP_MainMenu.",
                "Open WBP_MainMenu → Designer.",
                "Add a large Text widget reading ESCAPE ROOM.",
                "Add instruction text: Find a Battery, restore the power, find the Key and escape.",
                "Add a Button with Text inside it reading START GAME.",
                "Add a second Button with Text reading QUIT.",
                "Place the menu clearly in the centre.",
                "Compile and Save."
              ],
              "see": "The widget is readable at normal Play resolution."
            },
            {
              "title": "Show the menu on BeginPlay",
              "where": "LV_EscapeRoom → Open Level Blueprint",
              "do": "Event BeginPlay → Get Player Controller → Create Widget (WBP_MainMenu, Owning Player = Player Controller) → Add to Viewport. Then Set Input Mode UI Only using the same Player Controller and set Show Mouse Cursor True.",
              "check": "Press Play. The menu appears, the cursor is visible and the character does not move.",
              "why": "UI Only stops gameplay input while the menu is active. Epic's UE5.8 widget guidance uses these Set Input Mode nodes for this exact kind of handoff.",
              "doList": [
                "Return to LV_EscapeRoom.",
                "Click Blueprints in the top toolbar → Open Level Blueprint.",
                "From Event BeginPlay create Get Player Controller.",
                "Create Widget and set Class = WBP_MainMenu.",
                "Connect the Player Controller to Owning Player.",
                "From Create Widget → Return Value call Add to Viewport.",
                "Create Set Input Mode UI Only using the same Player Controller.",
                "From the Player Controller create Set Show Mouse Cursor and tick it True.",
                "Connect the execution chain in that order.",
                "Compile and press Play."
              ],
              "see": "Press Play. The menu appears, the cursor is visible and the character does not move."
            },
            {
              "title": "Create WBP_Objective",
              "where": "Content Drawer → User Interface → Widget Blueprint",
              "do": "Create WBP_Objective. Add small text in a corner: OBJECTIVE: Restore power, find the Key and escape.",
              "check": "The text is readable but does not cover the centre of the screen.",
              "why": "A simple persistent objective keeps the player oriented without adding another complicated system.",
              "doList": [
                "In the Content Drawer right-click empty space.",
                "Choose User Interface → Widget Blueprint.",
                "Choose User Widget if Unreal asks for a parent class.",
                "Name it WBP_Objective.",
                "Open WBP_Objective and stay in Designer.",
                "Drag a Text widget onto the Canvas Panel.",
                "Set the text to OBJECTIVE: Restore power, find the Key and escape.",
                "Anchor the Text to a screen corner so it stays in a sensible place.",
                "Adjust font size/position so it is readable but not huge.",
                "Click Compile and Save."
              ],
              "see": "The text is readable but does not cover the centre of the screen."
            },
            {
              "title": "Make START GAME work",
              "where": "WBP_MainMenu → START GAME → On Clicked",
              "do": "Get Player Controller. Remove From Parent. Create Widget WBP_Objective using that Player Controller → Add to Viewport. Set Input Mode Game Only. Set Show Mouse Cursor False.",
              "check": "Click START GAME. The menu disappears, the objective appears and movement works again.",
              "why": "The game now has a clean transition from menu input to gameplay input.",
              "doList": [
                "Open WBP_MainMenu → Designer.",
                "Select the START GAME button.",
                "In Details → Events click + On Clicked.",
                "In the Graph create Get Player Controller.",
                "Call Remove From Parent on the menu.",
                "Create Widget with Class = WBP_Objective and Owning Player = the Player Controller.",
                "Add WBP_Objective to Viewport.",
                "Set Input Mode Game Only using the Player Controller.",
                "Set Show Mouse Cursor to False.",
                "Compile and test START GAME."
              ],
              "see": "Click START GAME. The menu disappears, the objective appears and movement works again."
            },
            {
              "title": "Make QUIT work",
              "where": "WBP_MainMenu → QUIT → On Clicked",
              "do": "Get Player Controller → Quit Game.",
              "check": "Use Standalone Game if you want to verify quitting without closing the editor preview unexpectedly.",
              "why": "The menu has a complete second action rather than a dead button.",
              "doList": [
                "Open WBP_MainMenu → Graph.",
                "Select the QUIT button in My Blueprint or return to Designer and select it.",
                "In Details → Events click + next to OnClicked.",
                "From OnClicked drag an execution wire and search for Get Player Controller.",
                "From the execution path create Quit Game.",
                "Connect Get Player Controller Return Value → Quit Game Specific Player.",
                "Click Compile and Save.",
                "Use Standalone Game if normal PIE does not visibly close the editor window when you test Quit."
              ],
              "see": "Use Standalone Game if you want to verify quitting without closing the editor preview unexpectedly."
            }
          ],
          "flow": [
            "BeginPlay",
            "Create Main Menu",
            "UI Only + Cursor",
            "Start clicked",
            "Remove Menu",
            "Add Objective",
            "Game Only"
          ],
          "test": [
            "Player begins on a menu.",
            "START GAME returns control to the character.",
            "The objective appears only after starting.",
            "Mouse cursor hides during gameplay."
          ],
          "doneWhen": "Your game has a working title screen, instructions and a clean transition into gameplay.",
          "common": [
            "Use the same Player Controller for Create Widget and Set Input Mode.",
            "If clicks do not work, confirm Show Mouse Cursor is True on the menu.",
            "If the character still moves behind the menu, confirm Set Input Mode UI Only ran on BeginPlay."
          ]
        },
        {
          "id": "win-screen",
          "number": 8,
          "title": "Add the Ending, Restart and Quit",
          "goal": "Detect when the player actually escapes and show a proper end screen.",
          "why": "Opening a door is a mechanic. Reaching a win state is what turns the mechanics into a complete game.",
          "steps": [
            {
              "title": "Create the exit trigger",
              "where": "Content Drawer → Blueprint Class → Actor",
              "do": "Create BP_ExitTrigger with a Box Collision. Place it just behind the exit door where the player cannot reach it while the door is closed.",
              "check": "The trigger sits on the far side of the doorway.",
              "why": "Crossing this volume will be the actual win condition.",
              "doList": [
                "In the Content Drawer right-click → Blueprint Class → Actor.",
                "Name the new Blueprint BP_ExitTrigger and open it.",
                "Click Add Component → Box Collision.",
                "Scale the Box Collision so the player can comfortably walk through it.",
                "Set its collision to overlap the Pawn/player and keep Generate Overlap Events enabled.",
                "Compile and Save BP_ExitTrigger.",
                "Drag BP_ExitTrigger into LV_EscapeRoom.",
                "Place it just behind the closed Exit Door so the player cannot reach it until the door opens.",
                "Press Play and visually check the player cannot touch the trigger from the wrong side."
              ],
              "see": "The trigger sits on the far side of the doorway."
            },
            {
              "title": "Create WBP_Win",
              "where": "Content Drawer → User Interface → Widget Blueprint",
              "do": "Create WBP_Win. Add YOU ESCAPED!, a PLAY AGAIN button and a QUIT button.",
              "check": "The screen clearly looks like the end of the game.",
              "why": "The player needs confirmation that the objective is complete.",
              "doList": [
                "In the Content Drawer right-click → User Interface → Widget Blueprint.",
                "Choose User Widget and name it WBP_Win.",
                "Open WBP_Win → Designer.",
                "Add large Text reading YOU ESCAPED!.",
                "Add a Button with Text inside reading PLAY AGAIN.",
                "Add a second Button with Text inside reading QUIT.",
                "Lay the three elements out clearly in the centre of the screen.",
                "Click Compile and Save."
              ],
              "see": "The screen clearly looks like the end of the game."
            },
            {
              "title": "Show the Win screen",
              "where": "BP_ExitTrigger → Box Collision → On Component Begin Overlap",
              "do": "Cast Other Actor to BP_ThirdPersonCharacter. On success: Get Player Controller → Create Widget WBP_Win → Add to Viewport → Set Input Mode UI Only → Show Mouse Cursor True.",
              "check": "After opening the door and walking through, YOU ESCAPED! appears and gameplay input stops.",
              "why": "The win state should take control away from the running game and hand it to the UI.",
              "doList": [
                "Open BP_ExitTrigger.",
                "Select Box Collision → Details → Events → add On Component Begin Overlap.",
                "Cast Other Actor to BP_ThirdPersonCharacter.",
                "On Cast success create Get Player Controller.",
                "Create Widget with Class = WBP_Win and Owning Player = the Player Controller.",
                "Add the widget to Viewport.",
                "Set Input Mode UI Only.",
                "Set Show Mouse Cursor to True.",
                "Compile and Save."
              ],
              "see": "After opening the door and walking through, YOU ESCAPED! appears and gameplay input stops."
            },
            {
              "title": "Make PLAY AGAIN restart everything",
              "where": "WBP_Win → PLAY AGAIN → On Clicked",
              "do": "Use Open Level (by Name). Level Name = LV_EscapeRoom.",
              "check": "Play Again reloads the map, returns to the Main Menu and resets Inventory, PowerOn, Generator, Key and Door.",
              "why": "Reloading the level gives you a clean restart with very little code.",
              "doList": [
                "Open WBP_Win → Graph.",
                "Select the PLAY AGAIN button and add its OnClicked event.",
                "Drag from OnClicked execution and search for Open Level (by Name).",
                "Set Level Name to LV_EscapeRoom exactly.",
                "Click Compile and Save.",
                "Play the game and reach the Win screen.",
                "Click PLAY AGAIN.",
                "Confirm LV_EscapeRoom reloads and Battery, Key, PowerOn and UI all return to their starting state."
              ],
              "see": "Play Again reloads the map, returns to the Main Menu and resets Inventory, PowerOn, Generator, Key and Door."
            },
            {
              "title": "Make the Win screen QUIT button work",
              "where": "WBP_Win → QUIT → On Clicked",
              "do": "Get Player Controller → Quit Game.",
              "check": "The button is wired and no dead UI remains.",
              "why": "The end screen now gives the player both sensible choices.",
              "doList": [
                "Open WBP_Win → Graph.",
                "Select the QUIT button and add its OnClicked event.",
                "Add Get Player Controller.",
                "Add Quit Game.",
                "Connect OnClicked execution → Quit Game.",
                "Connect Get Player Controller Return Value → Quit Game Specific Player.",
                "Compile and Save.",
                "Test in Standalone Game if the normal editor Play window does not visibly close."
              ],
              "see": "The button is wired and no dead UI remains."
            }
          ],
          "flow": [
            "Walk through open exit",
            "Exit Trigger overlap",
            "Create Win Widget",
            "UI Only + Cursor",
            "Play Again or Quit"
          ],
          "test": [
            "The Win screen cannot be reached while the door is closed.",
            "Crossing the exit shows YOU ESCAPED! once.",
            "Play Again resets the whole puzzle.",
            "Restart returns to the Main Menu."
          ],
          "doneWhen": "The game has a clear ending and can be replayed from a clean state.",
          "common": [
            "Place BP_ExitTrigger behind the physical door, not in front of it.",
            "If Play Again cannot find the map, check the exact spelling LV_EscapeRoom.",
            "If the player keeps moving on the Win screen, run Set Input Mode UI Only."
          ]
        },
        {
          "id": "final-test",
          "number": 9,
          "title": "Final Test — Prove It Is a Complete Game",
          "goal": "Play the project from the title screen to the ending without touching the editor or fixing anything mid-run.",
          "why": "A system is not finished because each Blueprint worked once. The entire player journey has to work in sequence.",
          "steps": [
            {
              "title": "Run the complete player journey",
              "where": "LV_EscapeRoom → Play",
              "do": "Start at the Main Menu. Press Start. Try the exit too early. Try the Generator without Battery. Collect Battery. Power Generator. Collect Key. Press I. Unlock exit. Walk through. Press Play Again.",
              "check": "Every step works without opening a Blueprint or changing a variable while playing.",
              "why": "This is the real acceptance test for the game.",
              "doList": [
                "Press Play and begin at the Main Menu.",
                "Click START GAME.",
                "Go to the Exit first and confirm it stays locked.",
                "Go to the Generator without Battery and confirm the warning.",
                "Collect Battery.",
                "Power the Generator.",
                "Collect Key.",
                "Press I and confirm the Key description appears.",
                "Return to the Exit and unlock it.",
                "Walk through into BP_ExitTrigger.",
                "Confirm the Win screen appears.",
                "Click PLAY AGAIN and confirm the game resets."
              ],
              "see": "Every step works without opening a Blueprint or changing a variable while playing."
            },
            {
              "title": "Check the Array",
              "where": "During the full play-through",
              "do": "Use I before and after powering the Generator.",
              "check": "Battery appears while owned and disappears after being consumed. Key remains until the end.",
              "why": "The Inventory Array should represent the player's current items, not their history.",
              "doList": [
                "Start a fresh play-through.",
                "Collect Battery but do not use the Generator yet.",
                "Press I and confirm Battery appears exactly once.",
                "Collect Key.",
                "Press I and confirm Battery and Key both appear exactly once.",
                "Use the Generator so Battery is consumed.",
                "Press I again.",
                "Confirm Battery has gone but Key remains.",
                "If any item appears twice, inspect the pickup Add nodes and make sure overlap is not firing multiple collection paths."
              ],
              "see": "Battery appears while owned and disappears after being consumed. Key remains until the end."
            },
            {
              "title": "Check the Map",
              "where": "During the full play-through",
              "do": "Use I with Battery and Key collected.",
              "check": "Each owned item retrieves the correct description from ItemDescriptions.",
              "why": "The Map should be doing real work inside the finished game.",
              "doList": [
                "Start or continue a play-through where Battery and Key are both in Inventory.",
                "Press I.",
                "Read the first printed description and confirm it matches the correct item.",
                "Read the second printed description and confirm it matches the other item.",
                "Open BP_ThirdPersonCharacter → ItemDescriptions Default Value.",
                "Temporarily change one description.",
                "Compile, Play and press I to prove the displayed text really comes from the Map.",
                "Restore the original description and Save."
              ],
              "see": "Each owned item retrieves the correct description from ItemDescriptions."
            },
            {
              "title": "Make one independent improvement",
              "where": "Anywhere in your project",
              "do": "Choose ONE: add a Coin and Map description; add pickup/generator/door sounds; replace the Print inventory with a Widget; add another locked door; add a five-minute timer; improve the Generator visual feedback.",
              "check": "Your improvement works and does not break the original escape route.",
              "why": "Changing a working system is stronger evidence of understanding than copying it once.",
              "doList": [
                "Choose ONE improvement only; do not start several at once.",
                "Write the chosen improvement in one sentence before opening a Blueprint.",
                "Identify which existing Blueprint owns the behaviour you need to change.",
                "Duplicate or save a backup before making a risky change.",
                "Build the smallest version of the improvement first.",
                "Compile after each small graph change.",
                "Press Play and test only the new behaviour.",
                "Run the complete Escape Room once more to make sure the improvement did not break the original game.",
                "Save All only after both the new feature and the original game loop work."
              ],
              "see": "Your improvement works and does not break the original escape route."
            }
          ],
          "test": [
            "Main Menu → gameplay works.",
            "Battery → Generator works.",
            "Array Add / Contains / Remove all work.",
            "Map Find works.",
            "Key + Power AND condition opens the exit.",
            "Win screen → Play Again works.",
            "One independent improvement is present."
          ],
          "doneWhen": "You can complete one clean play-through from START GAME to YOU ESCAPED and restart it without touching the editor.",
          "common": [
            "Do not call it finished if you have to manually set PowerOn during the test.",
            "Do not skip the failure cases: try the Generator and Door too early.",
            "Fix bugs first; polish comes after the full game loop works."
          ],
          "challenges": [
            "Add a Coin pickup and a Coin description to ItemDescriptions.",
            "Build a proper inventory Widget instead of Print String.",
            "Add Red Key / Blue Key / Exit Key and several doors.",
            "Create a second Map such as DoorCodes: Office → 2418, Storage → 6731.",
            "Add a five-minute countdown and a GAME OVER screen.",
            "Add sounds and better visual feedback without changing the core logic."
          ]
        }
      ],
      "sequence": 1,
      "guideRule": "Treat every numbered line as one action. Click, add, type or connect exactly what it says, then stop at YOU SHOULD NOW HAVE and prove the result before moving on.",
      "theoryLinks": [
        {
          "label": "Arrays, Sets & Maps — theory",
          "href": "#/block/arrays-sets-maps"
        },
        {
          "label": "Branches & Switches — theory",
          "href": "#/block/branches-switches"
        }
      ]
    },
    {
      "id": "structs-data-tables-item-system",
      "sequence": 2,
      "requiresMission": "arrays-maps-escape-room",
      "discipline": "Programmer",
      "icon": "▦",
      "title": "Stop Hard-Coding: Structs & Data Tables",
      "subtitle": "Upgrade your Escape Room into a data-driven item system without rebuilding the game from scratch.",
      "duration": "3–5 hours",
      "difficulty": "Guided solo refactor",
      "summary": "Your Escape Room works, but item names and descriptions are scattered through Blueprints. Keep the same game and rebuild the item data properly: define ST_ItemData, create DT_ItemData, migrate the inventory to row names, then make one reusable BP_ItemPickup that can become a Coin, Fuse, Wrench or future item just by changing data.",
      "skills": [
        "Structs",
        "Data Tables",
        "Row Names",
        "Get Data Table Row",
        "Break Struct",
        "Name Arrays",
        "Add Unique",
        "Instance Editable",
        "Refactoring",
        "Data-driven design"
      ],
      "rules": [
        "Continue the Escape Room from Mission 1. Do not start a different project.",
        "Keep the old working system until the replacement has passed its test.",
        "Change data first, then migrate one gameplay system at a time.",
        "Do not delete the old Map or String Array until nothing uses them."
      ],
      "gameFlow": [
        "Audit old hard-coding",
        "Create ST_ItemData",
        "Build DT_ItemData",
        "Create InventoryRows",
        "Migrate pickups",
        "Migrate puzzle checks",
        "Build generic pickup",
        "Add item using data only",
        "Remove old system",
        "Full regression test"
      ],
      "stages": [
        {
          "id": "start",
          "number": 0,
          "title": "Start Here — Prove Mission 1 Still Works",
          "goal": "Open the completed Escape Room, test it from start to finish and identify the hard-coded item information you are about to replace.",
          "why": "Refactoring is safer when you begin from a known working version. If the game is already broken, you cannot tell whether Mission 2 caused the problem.",
          "steps": [
            {
              "title": "Open the same Escape Room project",
              "where": "Unreal Engine → your EscapeRoom project from Mission 1",
              "do": "Open LV_EscapeRoom. Use File → Save All before changing anything.",
              "check": "The correct level is open and all Mission 1 Blueprints are present.",
              "why": "Mission 2 improves the existing project instead of creating another disconnected exercise.",
              "doList": [
                "Launch Unreal Engine 5.8.",
                "From Recent Projects double-click EscapeRoom; do not create a new project.",
                "Wait for the editor and shaders to finish loading.",
                "Open the Content Drawer.",
                "Double-click LV_EscapeRoom.",
                "Check the level contains your Battery, Generator, Key and Exit from Mission 1.",
                "Click File → Save All before changing anything.",
                "Press Play once to make sure the project still starts normally."
              ],
              "see": "The correct level is open and all Mission 1 Blueprints are present."
            },
            {
              "title": "Run one clean play-through",
              "where": "LV_EscapeRoom → Play",
              "do": "Start from the Main Menu. Collect Battery → power Generator → collect Key → open Exit → reach Win screen → Play Again.",
              "check": "The complete game works without editing anything during Play.",
              "why": "This gives you a working baseline before the refactor.",
              "doList": [
                "Press Play from LV_EscapeRoom.",
                "Click START GAME on the menu.",
                "Walk into the Generator before collecting Battery and confirm the failure message still appears.",
                "Collect Battery.",
                "Use the Generator and confirm the light/power state changes.",
                "Collect Key.",
                "Walk into the Exit and confirm it opens.",
                "Walk through the Exit Trigger and reach WBP_Win.",
                "Click PLAY AGAIN and confirm the level resets.",
                "Stop Play mode only after the full Mission 1 loop works."
              ],
              "see": "The complete game works without editing anything during Play."
            },
            {
              "title": "Find the old item storage",
              "where": "BP_ThirdPersonCharacter",
              "do": "Locate the old Inventory String Array and ItemDescriptions Map. Also inspect BP_Battery, BP_Key, BP_Generator and BP_ExitDoor for typed words such as Battery, Key and pickup messages.",
              "check": "You can point to at least three places where item information is typed directly into Blueprint logic.",
              "why": "This is the hard-coding problem the new system will solve.",
              "doList": [
                "Open BP_ThirdPersonCharacter.",
                "In My Blueprint find the Inventory String Array.",
                "In My Blueprint find the ItemDescriptions String→String Map.",
                "Open BP_Battery and find the node where the word Battery is typed into Add.",
                "Open BP_Key and find the node where the word Key is typed into Add.",
                "Open BP_Generator and find Contains Battery and Remove Item Battery.",
                "Open BP_ExitDoor and find Contains Key.",
                "Notice how item names/messages are typed into several different graphs.",
                "Do not delete anything yet; this is the old system you are about to replace safely."
              ],
              "see": "You can point to at least three places where item information is typed directly into Blueprint logic."
            },
            {
              "title": "Do not delete anything yet",
              "where": "All Mission 1 Blueprints",
              "do": "Leave Inventory and ItemDescriptions connected. You will build the replacement beside them and remove the old system only after the new one works.",
              "check": "The original game still compiles exactly as before.",
              "why": "Keeping the old path temporarily gives you a safe fallback while migrating.",
              "doList": [
                "Leave BP_ThirdPersonCharacter open.",
                "Do not delete Inventory.",
                "Do not delete ItemDescriptions.",
                "Do not disconnect the existing Battery pickup.",
                "Do not disconnect the existing Key pickup.",
                "Do not change Generator or Exit logic yet.",
                "Click Save All.",
                "You will build the new data-driven system beside the old one, test it, then remove the old system at the end."
              ],
              "see": "The original game still compiles exactly as before."
            }
          ],
          "test": [
            "Mission 1 still completes from Main Menu to Win screen.",
            "Inventory and ItemDescriptions still exist.",
            "You have identified where Battery/Key information is hard-coded."
          ],
          "doneWhen": "You have a known-good Escape Room and understand what data will be moved out of the Blueprint graphs.",
          "common": [
            "If Mission 1 is broken, fix it before continuing.",
            "Do not duplicate the whole project unless your normal class workflow requires a backup; Save All is enough for this mission.",
            "Do not remove ItemDescriptions yet."
          ]
        },
        {
          "id": "struct",
          "number": 1,
          "title": "Create ST_ItemData",
          "goal": "Create one Struct that defines the information every item is allowed to store.",
          "why": "A Struct groups related values into one organised data shape. Every Data Table row will follow this same structure.",
          "steps": [
            {
              "title": "Create a Data folder",
              "where": "Content Drawer → your project content folder",
              "do": "Create a folder named Data and open it.",
              "check": "You have a clean place for the Struct and Data Table.",
              "why": "Keeping data assets together makes the system easier to find and maintain.",
              "doList": [
                "Open the Content Drawer.",
                "Navigate to the project Content root.",
                "Right-click empty space in the folder panel or Content area.",
                "Choose New Folder.",
                "Name the folder Data.",
                "Press Enter.",
                "Double-click the Data folder to open it.",
                "Check the breadcrumb/path now ends in Content/Data."
              ],
              "see": "You have a clean place for the Struct and Data Table."
            },
            {
              "title": "Create the Struct asset",
              "where": "Content Drawer → Add (+) → Blueprints → Structure",
              "do": "Create a User Defined Structure named ST_ItemData and open it.",
              "check": "ST_ItemData opens in the Structure editor.",
              "why": "This asset defines the columns each item row will contain.",
              "doList": [
                "Inside Content/Data right-click empty space.",
                "Use the context-menu search box and type Structure.",
                "Choose Structure / User Defined Structure.",
                "Name the new asset ST_ItemData.",
                "Double-click ST_ItemData to open the Structure editor.",
                "If a default member exists, select it so you can rename or replace it in the next step.",
                "Click Save once before adding fields.",
                "Leave ST_ItemData open."
              ],
              "see": "ST_ItemData opens in the Structure editor."
            },
            {
              "title": "Add DisplayName and Description",
              "where": "ST_ItemData",
              "do": "Add DisplayName of type Text and Description of type Text.",
              "check": "Both fields appear with Text as their type.",
              "why": "The internal row ID can stay code-friendly while player-facing text can be readable.",
              "doList": [
                "In ST_ItemData click + Add Variable / New Variable.",
                "Rename the first field DisplayName.",
                "Set DisplayName type to Text.",
                "Click + Add Variable again.",
                "Rename the second field Description.",
                "Set Description type to Text.",
                "Check both fields use Text, not String or Name.",
                "Click Save.",
                "Confirm the member list now contains DisplayName and Description."
              ],
              "see": "Both fields appear with Text as their type."
            },
            {
              "title": "Add the feedback messages",
              "where": "ST_ItemData",
              "do": "Add PickupMessage of type Text and UseMessage of type Text.",
              "check": "The Struct now has four Text fields.",
              "why": "Pickup/use wording should be content data rather than typed repeatedly into graphs.",
              "doList": [
                "In ST_ItemData click + Add Variable.",
                "Name the new field PickupMessage.",
                "Set PickupMessage type to Text.",
                "Click + Add Variable again.",
                "Name the new field UseMessage.",
                "Set UseMessage type to Text.",
                "Click Save.",
                "Confirm the Struct now has four Text fields in total."
              ],
              "see": "The Struct now has four Text fields."
            },
            {
              "title": "Add gameplay metadata",
              "where": "ST_ItemData",
              "do": "Add IsQuestItem of type Boolean and Value of type Integer. Save the Struct.",
              "check": "ST_ItemData contains exactly DisplayName, Description, PickupMessage, UseMessage, IsQuestItem and Value.",
              "why": "The same row can now hold both player-facing information and simple gameplay metadata.",
              "doList": [
                "In ST_ItemData click + Add Variable.",
                "Name it IsQuestItem.",
                "Set IsQuestItem type to Boolean.",
                "Click + Add Variable again.",
                "Name it Value.",
                "Set Value type to Integer.",
                "Click Save.",
                "Close and reopen ST_ItemData if Unreal shows a stale member list elsewhere.",
                "Confirm the final Struct contains DisplayName, Description, PickupMessage, UseMessage, IsQuestItem and Value."
              ],
              "see": "ST_ItemData contains exactly DisplayName, Description, PickupMessage, UseMessage, IsQuestItem and Value."
            }
          ],
          "flow": [
            "ST_ItemData",
            "DisplayName",
            "Description",
            "PickupMessage",
            "UseMessage",
            "IsQuestItem",
            "Value"
          ],
          "test": [
            "ST_ItemData exists in the Data folder.",
            "All six fields use the correct types.",
            "The Struct saves without errors."
          ],
          "doneWhen": "ST_ItemData is a saved six-field definition for every inventory item.",
          "common": [
            "Use Text for player-facing wording, not String.",
            "IsQuestItem must be Boolean and Value must be Integer.",
            "If later nodes do not update after changing the Struct, Save/Compile affected assets again."
          ]
        },
        {
          "id": "data-table",
          "number": 2,
          "title": "Create DT_ItemData and Your First Rows",
          "goal": "Create a Data Table based on ST_ItemData and fill it with Battery, ExitKey, Coin and Fuse rows.",
          "why": "The Struct defines the shape; the Data Table stores many actual items that use that shape.",
          "steps": [
            {
              "title": "Create DT_ItemData",
              "where": "Content Drawer → Data → Add (+) → Miscellaneous → Data Table",
              "do": "Choose ST_ItemData when Unreal asks for the Row Structure. Name the new asset DT_ItemData and open it.",
              "check": "The table columns match the fields in ST_ItemData.",
              "why": "Every row in this table now follows the same item definition.",
              "doList": [
                "Stay inside Content/Data.",
                "Right-click empty space.",
                "Use the context-menu search box and type Data Table.",
                "Click Data Table.",
                "When Pick Row Structure appears, choose ST_ItemData.",
                "Click OK/Select.",
                "Name the new asset DT_ItemData.",
                "Double-click DT_ItemData to open it.",
                "Confirm the columns match the six fields from ST_ItemData."
              ],
              "see": "The table columns match the fields in ST_ItemData.",
              "visual": {
                "src": "assets/ue5/current/datatable-rows-closeup.webp",
                "caption": "Reference: Data Table rows use the fields defined by your Struct."
              }
            },
            {
              "title": "Add the Battery row",
              "where": "DT_ItemData → Add row",
              "do": "Row Name = Battery. DisplayName = Battery. Description = A heavy battery. It looks powerful enough to run the generator. PickupMessage = Battery collected! UseMessage = The battery powers the generator. IsQuestItem = True. Value = 0.",
              "check": "Battery appears as a row and all six values are filled correctly.",
              "why": "This moves Battery information into one authoritative record.",
              "doList": [
                "Click Add to create a row.",
                "Set Row Name = Battery.",
                "Set DisplayName = Battery.",
                "Set Description = A heavy battery. It looks powerful enough to run the generator.",
                "Set PickupMessage = Battery collected!",
                "Set UseMessage = The battery powers the generator.",
                "Set IsQuestItem = True.",
                "Set Value = 0.",
                "Save."
              ],
              "see": "Battery appears as a row and all six values are filled correctly."
            },
            {
              "title": "Add the ExitKey row",
              "where": "DT_ItemData → Add row",
              "do": "Row Name = ExitKey. DisplayName = Exit Key. Description = A small metal key. It looks like it belongs to the exit door. PickupMessage = Exit Key collected! UseMessage = The key unlocks the exit. IsQuestItem = True. Value = 0.",
              "check": "The internal ID is ExitKey while the player-facing DisplayName is Exit Key.",
              "why": "Row Name can be stable and code-friendly without controlling the text the player sees.",
              "doList": [
                "Add another row.",
                "Set Row Name = ExitKey.",
                "Set DisplayName = Exit Key.",
                "Set Description = A small metal key. It looks like it belongs to the exit door.",
                "Set PickupMessage = Exit Key collected!",
                "Set UseMessage = The key unlocks the exit.",
                "Set IsQuestItem = True.",
                "Set Value = 0.",
                "Save."
              ],
              "see": "The internal ID is ExitKey while the player-facing DisplayName is Exit Key."
            },
            {
              "title": "Add Coin and Fuse rows",
              "where": "DT_ItemData → Add row",
              "do": "Coin: DisplayName Old Coin; Description An old coin. It does not seem useful, but it might be worth something.; PickupMessage Old Coin collected!; UseMessage There is nowhere obvious to use this.; IsQuestItem False; Value 100. Fuse: DisplayName Fuse; Description A replacement electrical fuse.; PickupMessage Fuse collected!; UseMessage This looks like part of an electrical system.; IsQuestItem True; Value 0.",
              "check": "DT_ItemData now has Battery, ExitKey, Coin and Fuse rows.",
              "why": "Multiple rows prove the table is a reusable content store rather than a Battery-only trick.",
              "doList": [
                "In DT_ItemData click Add Row.",
                "Name the new row Coin.",
                "Set DisplayName to Old Coin.",
                "Set Description to An old coin. It does not seem useful, but it might be worth something.",
                "Set PickupMessage to Old Coin collected!",
                "Set UseMessage to There is nowhere obvious to use this.",
                "Leave IsQuestItem False and set Value to 100.",
                "Click Add Row again and name the new row Fuse.",
                "Set Fuse DisplayName to Fuse.",
                "Set Fuse Description to A replacement electrical fuse.",
                "Set Fuse PickupMessage to Fuse collected!",
                "Set Fuse UseMessage to This looks like part of an electrical system.",
                "Set Fuse IsQuestItem True and Value 0.",
                "Click Save."
              ],
              "see": "DT_ItemData now has Battery, ExitKey, Coin and Fuse rows."
            },
            {
              "title": "Save the table",
              "where": "DT_ItemData",
              "do": "Save DT_ItemData and close/reopen it once.",
              "check": "All four rows and their values are still present.",
              "why": "You want to catch an unsaved table before any Blueprint depends on it.",
              "doList": [
                "Click Save in the DT_ItemData toolbar.",
                "Close DT_ItemData.",
                "In Content/Data double-click DT_ItemData again.",
                "Confirm the rows Battery, ExitKey, Coin and Fuse are still present.",
                "Click each row once and check its values appear in the row editor/details area.",
                "Make sure Battery and ExitKey are marked IsQuestItem True.",
                "Make sure Coin Value is 100.",
                "Close DT_ItemData only after the data survived the reopen test."
              ],
              "see": "All four rows and their values are still present."
            }
          ],
          "flow": [
            "ST_ItemData",
            "DT_ItemData",
            "Battery",
            "ExitKey",
            "Coin",
            "Fuse"
          ],
          "test": [
            "DT_ItemData uses ST_ItemData as its row structure.",
            "Exactly four starter rows exist: Battery, ExitKey, Coin, Fuse.",
            "ExitKey is the Row Name but Exit Key is the DisplayName."
          ],
          "doneWhen": "You have one Data Table holding four complete item records.",
          "common": [
            "Choose ST_ItemData when creating the Data Table; do not create a table with the wrong row structure.",
            "Row Names must match exactly later, including spelling.",
            "Do not put spaces in ExitKey Row Name for this mission."
          ]
        },
        {
          "id": "inventory-rows",
          "number": 3,
          "title": "Create InventoryRows and Prove Data Lookup Works",
          "goal": "Create a Name Array for Data Table row IDs and successfully retrieve the Battery record in Blueprint.",
          "why": "The inventory only needs to remember which item rows the player owns. The Data Table can supply the rest of the information when needed.",
          "steps": [
            {
              "title": "Create InventoryRows",
              "where": "BP_ThirdPersonCharacter → My Blueprint",
              "do": "Create a variable named InventoryRows. Type = Name. Change the container type to Array. Compile.",
              "check": "InventoryRows shows a Name pin type and Array container icon.",
              "why": "Names match the Row Name input used by Data Table lookups.",
              "doList": [
                "Open BP_ThirdPersonCharacter.",
                "In My Blueprint click + Variable.",
                "Rename the variable InventoryRows.",
                "Set Variable Type to Name.",
                "Click the container icon and choose Array.",
                "Click Compile.",
                "Check InventoryRows shows the Array/grid icon and has no default entries.",
                "Click Save."
              ],
              "see": "InventoryRows shows a Name pin type and Array container icon."
            },
            {
              "title": "Create a temporary lookup test",
              "where": "BP_ThirdPersonCharacter → Event Graph",
              "do": "Add a temporary T keyboard event. Add Get Data Table Row. Set Data Table = DT_ItemData and Row Name = Battery.",
              "check": "Get Data Table Row exposes Row Found, Row Not Found and an Out Row matching ST_ItemData.",
              "why": "A tiny isolated test proves the table connection before you change real gameplay.",
              "doList": [
                "Open BP_ThirdPersonCharacter → Event Graph.",
                "Right-click empty graph space and search for T Keyboard Event.",
                "Place the T keyboard event.",
                "Right-click and search for Get Data Table Row.",
                "Place Get Data Table Row.",
                "On its Data Table dropdown choose DT_ItemData.",
                "Set Row Name to Battery.",
                "Connect T Pressed → Get Data Table Row execution input.",
                "Do not connect Row Found/Out Row yet; leave them visible for the next step."
              ],
              "see": "Get Data Table Row exposes Row Found, Row Not Found and an Out Row matching ST_ItemData."
            },
            {
              "title": "Read the returned Struct",
              "where": "BP_ThirdPersonCharacter → temporary T test",
              "do": "From Out Row create Break ST_ItemData. From Description, connect to Print String. If Unreal needs a conversion, use the Text-to-String conversion it offers. Connect T execution through Get Data Table Row Row Found to Print String.",
              "check": "The execution path only prints after Row Found.",
              "why": "Break ST_ItemData exposes each field stored in the returned row.",
              "doList": [
                "Find Get Data Table Row in the temporary T test.",
                "Drag from Out Row.",
                "Search for Break ST_ItemData and place it.",
                "Find the Description output on Break ST_ItemData.",
                "Drag from Description and search for Print String.",
                "Accept Unreal's automatic Text→String conversion if it inserts one.",
                "Connect Get Data Table Row Row Found → Print String execution input.",
                "Leave Row Not Found unconnected for this first proof.",
                "Click Compile."
              ],
              "see": "The execution path only prints after Row Found."
            },
            {
              "title": "Run the lookup",
              "where": "LV_EscapeRoom → Play",
              "do": "Press T once.",
              "check": "The screen prints: A heavy battery. It looks powerful enough to run the generator.",
              "why": "This proves Blueprint is reading live item content from DT_ItemData.",
              "doList": [
                "Click Compile in BP_ThirdPersonCharacter.",
                "Return to LV_EscapeRoom.",
                "Press Play.",
                "Press T once.",
                "Read the text printed on screen.",
                "Confirm it matches the Battery Description from DT_ItemData.",
                "Stop Play mode.",
                "If nothing prints, re-open BP_ThirdPersonCharacter and check Row Found is connected to Print String."
              ],
              "see": "The screen prints: A heavy battery. It looks powerful enough to run the generator."
            },
            {
              "title": "Delete only the temporary T test",
              "where": "BP_ThirdPersonCharacter",
              "do": "After the test works, delete the temporary T chain. Keep InventoryRows.",
              "check": "The graph is clean and InventoryRows remains.",
              "why": "Real gameplay will now perform the lookups.",
              "doList": [
                "Stop Play mode.",
                "Open BP_ThirdPersonCharacter → Event Graph.",
                "Box-select the T event, Get Data Table Row, Break ST_ItemData, conversion node and Print String used only for the test.",
                "Press Delete.",
                "Do not delete the InventoryRows variable.",
                "Click Compile.",
                "Click Save.",
                "Confirm no red broken nodes remain."
              ],
              "see": "The graph is clean and InventoryRows remains."
            }
          ],
          "flow": [
            "Row Name: Battery",
            "Get Data Table Row",
            "Row Found",
            "Break ST_ItemData",
            "Description",
            "Print"
          ],
          "test": [
            "InventoryRows is an empty Name Array.",
            "The Battery row can be retrieved with Get Data Table Row.",
            "The Battery Description prints correctly."
          ],
          "doneWhen": "The character can successfully retrieve and read ST_ItemData from DT_ItemData.",
          "common": [
            "Use the Row Found execution output, not Row Not Found.",
            "If Battery is not found, check the exact Row Name in DT_ItemData.",
            "If Break ST_ItemData does not appear, confirm DT_ItemData really uses ST_ItemData."
          ]
        },
        {
          "id": "migrate-pickups",
          "number": 4,
          "title": "Migrate Battery and Exit Key",
          "goal": "Make the original pickups use InventoryRows and pull their pickup messages from the Data Table.",
          "why": "This is the first real migration: game behaviour stays the same, but its content comes from data instead of typed graph text.",
          "steps": [
            {
              "title": "Upgrade BP_Battery inventory storage",
              "where": "BP_Battery → overlap logic",
              "do": "Keep the existing overlap and Cast. From the player, Get InventoryRows → Add Unique. Item = Battery. Leave the old Inventory chain nearby until this new path is tested.",
              "check": "The Battery row ID is added to InventoryRows only once.",
              "why": "Add Unique prevents accidental duplicate ownership of the same row ID.",
              "doList": [
                "Open BP_Battery → Event Graph.",
                "Find On Component Begin Overlap → Cast To BP_ThirdPersonCharacter.",
                "Keep the Cast exactly as it is.",
                "Drag from As BP Third Person Character and search for Get InventoryRows.",
                "Place Get InventoryRows.",
                "Drag from the InventoryRows Array pin and search for Add Unique.",
                "Place Add Unique (Array).",
                "Set Add Unique Item to Battery.",
                "Connect Cast Succeeded execution → Add Unique execution input.",
                "Move the old Inventory/Add chain aside but do not delete it yet.",
                "Click Compile."
              ],
              "see": "The Battery row ID is added to InventoryRows only once."
            },
            {
              "title": "Read the Battery pickup message",
              "where": "BP_Battery → after Add Unique",
              "do": "Add Get Data Table Row: DT_ItemData, Row Name Battery. From Row Found → Break ST_ItemData → PickupMessage → Print String (use Text-to-String conversion if required) → Destroy Actor.",
              "check": "The Print node no longer contains the words Battery collected! typed directly into it.",
              "why": "Changing the table should now change the message without editing BP_Battery.",
              "doList": [
                "In BP_Battery place Get Data Table Row after Add Unique.",
                "Set Data Table to DT_ItemData.",
                "Set Row Name to Battery.",
                "Connect Add Unique execution output → Get Data Table Row execution input.",
                "Drag from Out Row and place Break ST_ItemData.",
                "Drag from PickupMessage and create Print String.",
                "Allow Text→String conversion if Unreal inserts it.",
                "Connect Row Found → Print String execution input.",
                "Connect Print String execution output → Destroy Actor.",
                "Keep Row Not Found separate; do not destroy the pickup if the lookup fails.",
                "Click Compile and Save."
              ],
              "see": "The Print node no longer contains the words Battery collected! typed directly into it."
            },
            {
              "title": "Test Battery before removing old logic",
              "where": "LV_EscapeRoom → Play",
              "do": "Collect Battery. Confirm the message appears. Temporarily inspect InventoryRows if needed with a breakpoint/watch or a simple debug loop.",
              "check": "InventoryRows contains Battery and the pickup disappears.",
              "why": "You migrate one system safely before deleting its previous path.",
              "doList": [
                "Return to LV_EscapeRoom.",
                "Press Play.",
                "Collect the Battery once.",
                "Confirm Battery collected! appears from DT_ItemData.",
                "Stop Play mode.",
                "Open BP_ThirdPersonCharacter and temporarily inspect InventoryRows with a simple I/debug loop if you need proof.",
                "Confirm the Name Battery is stored in InventoryRows.",
                "Only after both storage and message work should you remove the old Battery path."
              ],
              "see": "InventoryRows contains Battery and the pickup disappears."
            },
            {
              "title": "Upgrade BP_Key",
              "where": "BP_Key → overlap logic",
              "do": "Repeat the same pattern using InventoryRows → Add Unique with Item = ExitKey. Get DT_ItemData row ExitKey and print its PickupMessage before Destroy Actor.",
              "check": "Collecting the physical Key prints Exit Key collected! from the table and stores ExitKey in InventoryRows.",
              "why": "The internal row ID and player-facing name are now properly separated.",
              "doList": [
                "Open BP_Key → Event Graph.",
                "Keep On Component Begin Overlap and Cast To BP_ThirdPersonCharacter.",
                "Get InventoryRows from the cast player reference.",
                "From InventoryRows add Add Unique.",
                "Set Add Unique Item to ExitKey exactly; do not type Key.",
                "Add Get Data Table Row and choose DT_ItemData.",
                "Set Row Name to ExitKey.",
                "From Out Row Break ST_ItemData and use PickupMessage for Print String.",
                "Connect Row Found → Print String → Destroy Actor.",
                "Compile and Save.",
                "Play once and confirm Exit Key collected! appears."
              ],
              "see": "Collecting the physical Key prints Exit Key collected! from the table and stores ExitKey in InventoryRows."
            },
            {
              "title": "Prove the message is data-driven",
              "where": "DT_ItemData → Battery row",
              "do": "Temporarily change Battery PickupMessage to Power Cell acquired! Save and Play. Collect Battery, then change it back to Battery collected! after the proof.",
              "check": "The new wording appears without changing BP_Battery.",
              "why": "This is direct evidence that the Blueprint is reading data rather than hard-coded text.",
              "doList": [
                "Open DT_ItemData.",
                "Select the Battery row.",
                "Change PickupMessage from Battery collected! to Power Cell acquired!",
                "Click Save.",
                "Do not open or edit BP_Battery.",
                "Press Play and collect Battery.",
                "Confirm Power Cell acquired! appears.",
                "Stop Play mode, return to DT_ItemData and restore PickupMessage to Battery collected!.",
                "Click Save again."
              ],
              "see": "The new wording appears without changing BP_Battery."
            }
          ],
          "flow": [
            "Overlap",
            "Cast to Player",
            "InventoryRows",
            "Add Unique Row Name",
            "Get DT_ItemData Row",
            "PickupMessage",
            "Print",
            "Destroy"
          ],
          "test": [
            "Battery adds Battery to InventoryRows.",
            "Key adds ExitKey to InventoryRows.",
            "Both pickup messages come from DT_ItemData.",
            "Changing a table message changes the game without graph edits."
          ],
          "doneWhen": "Both original pickups behave exactly as before but their identity/message now comes through the new data system.",
          "common": [
            "Exit Key pickup stores ExitKey, not Key.",
            "Do not connect both old and new inventory paths permanently; once the new test passes, the old pickup add can be disconnected/removed.",
            "If the message does not change after editing the table, Save DT_ItemData before Play."
          ]
        },
        {
          "id": "migrate-puzzle",
          "number": 5,
          "title": "Migrate the Generator, Exit and Inventory Display",
          "goal": "Move the remaining game logic onto InventoryRows and use DT_ItemData to display owned item information.",
          "why": "A refactor is only real when the complete game depends on the new system, not just the pickups.",
          "steps": [
            {
              "title": "Upgrade the Generator check",
              "where": "BP_Generator",
              "do": "Replace the old Inventory Contains Battery check with InventoryRows → Contains → Battery. On success, Remove Item Battery from InventoryRows. Keep the existing PowerOn = True, light and feedback behaviour.",
              "check": "Generator without Battery fails; with Battery succeeds; Battery is removed from InventoryRows.",
              "why": "The puzzle now asks about row IDs rather than old String inventory entries.",
              "doList": [
                "Open BP_Generator → Event Graph.",
                "Find the old Get Inventory → Contains Battery chain.",
                "Keep the surrounding PowerOn Branch and success/failure execution paths.",
                "Drag from As BP Third Person Character and get InventoryRows.",
                "Drag from InventoryRows and add Contains (Array).",
                "Set Contains Item to Battery.",
                "Connect Contains Return Value to the existing Battery Branch Condition.",
                "On the success path get InventoryRows again.",
                "Add Remove Item and set Item to Battery.",
                "Connect the existing success execution through Remove Item before Set PowerOn True.",
                "Delete/disconnect the old String Inventory Contains/Remove nodes only after the new wires are complete.",
                "Compile and Save."
              ],
              "see": "Generator without Battery fails; with Battery succeeds; Battery is removed from InventoryRows."
            },
            {
              "title": "Upgrade the Exit check",
              "where": "BP_ExitDoor",
              "do": "Replace the old Inventory Contains Key check with InventoryRows → Contains → ExitKey. Keep the existing PowerOn AND Key condition and door-opening logic.",
              "check": "Power only = locked; ExitKey only = locked; Power + ExitKey = opens.",
              "why": "The final puzzle gate is now using the new inventory system.",
              "doList": [
                "Open BP_ExitDoor → Event Graph.",
                "Find the old Get Inventory → Contains Key chain.",
                "Keep the Cast, PowerOn getter, AND node, Branch and door movement logic.",
                "From the cast player reference get InventoryRows.",
                "From InventoryRows add Contains (Array).",
                "Set Contains Item to ExitKey.",
                "Connect the new Contains Return Value into the same AND input that the old Key check used.",
                "Delete/disconnect the old String Inventory Contains Key nodes.",
                "Compile and Save.",
                "Do not rename ExitKey back to Key; the Data Table row name is now the inventory ID."
              ],
              "see": "Power only = locked; ExitKey only = locked; Power + ExitKey = opens."
            },
            {
              "title": "Upgrade the I inventory loop",
              "where": "BP_ThirdPersonCharacter → I key debug/display chain",
              "do": "Replace the old Inventory Array with InventoryRows → For Each Loop. For each Array Element, call Get Data Table Row with DT_ItemData and connect Array Element to Row Name.",
              "check": "Each stored row name successfully reaches Row Found.",
              "why": "The array stores only IDs; the Data Table supplies the human-readable information.",
              "doList": [
                "Open BP_ThirdPersonCharacter → Event Graph.",
                "Find the I keyboard event and its old Inventory For Each Loop.",
                "Disconnect the old Inventory Array from the loop.",
                "Drag InventoryRows from My Blueprint into the graph and choose Get.",
                "Connect InventoryRows Array → For Each Loop Array input.",
                "Inside Loop Body add Get Data Table Row.",
                "Set Data Table to DT_ItemData.",
                "Connect For Each Loop Array Element → Get Data Table Row Row Name.",
                "Connect Loop Body execution → Get Data Table Row execution input.",
                "Leave Row Found and Out Row visible for the next step.",
                "Compile."
              ],
              "see": "Each stored row name successfully reaches Row Found."
            },
            {
              "title": "Display real item information",
              "where": "Inside the InventoryRows For Each Loop",
              "do": "Break ST_ItemData. Use Format Text with {Name}: {Description}. Connect DisplayName and Description. Send the formatted result to Print String, converting Text to String if needed.",
              "check": "Owning ExitKey prints something like Exit Key: A small metal key... rather than just ExitKey.",
              "why": "One lookup now gives the inventory all player-facing data it needs.",
              "doList": [
                "Drag from Get Data Table Row Out Row and place Break ST_ItemData.",
                "Right-click and add Format Text.",
                "Set the Format Text pattern to {Name}: {Description}.",
                "Connect Break ST_ItemData DisplayName → Format Text Name.",
                "Connect Break ST_ItemData Description → Format Text Description.",
                "Drag from Format Text Result and create Print String.",
                "Allow a Text→String conversion if Unreal inserts one.",
                "Connect Get Data Table Row Row Found → Print String execution input.",
                "Click Compile.",
                "Play, collect ExitKey, press I and confirm you see Exit Key: followed by its description."
              ],
              "see": "Owning ExitKey prints something like Exit Key: A small metal key... rather than just ExitKey."
            },
            {
              "title": "Regression-test the original puzzle",
              "where": "LV_EscapeRoom → Play",
              "do": "Collect Battery → press I → use Generator → press I → collect Key → press I → open Exit.",
              "check": "Battery disappears from the displayed inventory when consumed; Exit Key remains; the door opens correctly.",
              "why": "This proves the new data path supports the complete Mission 1 loop.",
              "doList": [
                "Return to LV_EscapeRoom and press Play.",
                "Collect Battery.",
                "Press I and confirm Battery appears with its Data Table description.",
                "Use the Generator.",
                "Press I and confirm Battery has disappeared from InventoryRows.",
                "Collect ExitKey.",
                "Press I and confirm Exit Key appears with its description.",
                "Open the Exit and confirm the door still works.",
                "Do not continue until the complete Mission 1 puzzle works through the new data-driven system."
              ],
              "see": "Battery disappears from the displayed inventory when consumed; Exit Key remains; the door opens correctly."
            }
          ],
          "flow": [
            "InventoryRows",
            "Contains / Remove",
            "Puzzle logic",
            "For Each Loop",
            "Get Data Table Row",
            "DisplayName + Description"
          ],
          "test": [
            "Generator uses InventoryRows Battery.",
            "Exit uses InventoryRows ExitKey.",
            "I displays Data Table names/descriptions.",
            "The original escape path still works."
          ],
          "doneWhen": "All existing gameplay checks use InventoryRows and the inventory display reads item details from DT_ItemData.",
          "common": [
            "Use ExitKey in the door check, not the old Key string.",
            "If Battery remains after powering the Generator, Remove Item is probably still connected to the old Array.",
            "If I prints Row Names only, make sure Get Data Table Row and Break ST_ItemData are inside the For Each Loop body."
          ]
        },
        {
          "id": "generic-pickup",
          "number": 6,
          "title": "Build One Reusable BP_ItemPickup",
          "goal": "Create one pickup Blueprint that can represent different items by changing an Instance Editable Row Name.",
          "why": "A data-driven system becomes genuinely useful when new content stops requiring a new near-identical Blueprint class every time.",
          "steps": [
            {
              "title": "Create BP_ItemPickup",
              "where": "Content Drawer → Blueprint Class → Actor",
              "do": "Create BP_ItemPickup. Add a Static Mesh and Sphere Collision.",
              "check": "The Actor has visible geometry and an overlap component.",
              "why": "This will become the reusable pickup class for many item rows.",
              "doList": [
                "Open Content/Data or another sensible gameplay folder.",
                "Right-click → Blueprint Class.",
                "Choose Actor.",
                "Name the new Blueprint BP_ItemPickup.",
                "Double-click BP_ItemPickup.",
                "Click Add Component → Static Mesh.",
                "Choose a simple Cube mesh for now.",
                "Click Add Component → Sphere Collision.",
                "Set Sphere Collision to overlap Pawn/player and keep Generate Overlap Events enabled.",
                "Scale the Sphere so the player can easily touch the pickup.",
                "Compile and Save."
              ],
              "see": "The Actor has visible geometry and an overlap component."
            },
            {
              "title": "Create ItemRow",
              "where": "BP_ItemPickup → My Blueprint",
              "do": "Create variable ItemRow. Type = Name. Enable Instance Editable (open-eye icon / Instance Editable in Details). Compile.",
              "check": "Placed BP_ItemPickup instances expose ItemRow in their Details panel.",
              "why": "Each placed instance can point at a different Data Table row without changing the Blueprint graph.",
              "doList": [
                "In BP_ItemPickup → My Blueprint click + Variable.",
                "Rename the variable ItemRow.",
                "Set Variable Type to Name.",
                "Click Compile so the variable becomes fully available.",
                "With ItemRow selected, enable Instance Editable using the eye icon or Details checkbox.",
                "Compile and Save.",
                "Drag one BP_ItemPickup into LV_EscapeRoom.",
                "Select the placed instance.",
                "In the Details panel confirm ItemRow appears as an editable property."
              ],
              "see": "Placed BP_ItemPickup instances expose ItemRow in their Details panel."
            },
            {
              "title": "Add the selected row to the player",
              "where": "BP_ItemPickup → Sphere Collision → On Component Begin Overlap",
              "do": "Cast Other Actor to BP_ThirdPersonCharacter. Get InventoryRows → Add Unique. Connect ItemRow into the Item input instead of typing a fixed row name.",
              "check": "The Add Unique Item pin is fed by the ItemRow variable.",
              "why": "The same logic can now collect any row name assigned to the placed instance.",
              "doList": [
                "Open BP_ItemPickup and select Sphere Collision.",
                "In Details → Events click + beside On Component Begin Overlap.",
                "Drag from Other Actor and create Cast To BP_ThirdPersonCharacter.",
                "Connect Begin Overlap execution → Cast execution.",
                "Drag from As BP Third Person Character and get InventoryRows.",
                "Drag from InventoryRows Array and add Add Unique.",
                "Drag ItemRow from My Blueprint into the graph as Get.",
                "Connect ItemRow → Add Unique Item.",
                "Connect Cast Succeeded execution → Add Unique execution input.",
                "Click Compile."
              ],
              "see": "The Add Unique Item pin is fed by the ItemRow variable."
            },
            {
              "title": "Read the selected row data",
              "where": "BP_ItemPickup → after Add Unique",
              "do": "Get Data Table Row using DT_ItemData. Connect ItemRow to Row Name. Row Found → Break ST_ItemData → PickupMessage → Print String → Destroy Actor.",
              "check": "No item-specific name or message is typed into this graph.",
              "why": "Both identity and feedback now come from the selected data row.",
              "doList": [
                "After Add Unique place Get Data Table Row.",
                "Set Data Table to DT_ItemData.",
                "Connect ItemRow → Row Name.",
                "Connect Add Unique execution output → Get Data Table Row execution input.",
                "Drag from Out Row and place Break ST_ItemData.",
                "Drag from PickupMessage and create Print String.",
                "Allow Text→String conversion if required.",
                "Connect Row Found → Print String execution input.",
                "From Print String execution output create Destroy Actor.",
                "Leave Destroy Actor Target as Self.",
                "Compile and Save."
              ],
              "see": "No item-specific name or message is typed into this graph."
            },
            {
              "title": "Handle bad data",
              "where": "BP_ItemPickup → Get Data Table Row",
              "do": "From Row Not Found, Print String: ERROR: Item data not found! Do not Destroy Actor on the failure path.",
              "check": "A bad ItemRow gives a clear error and leaves the pickup available to inspect/fix.",
              "why": "Reusable systems need a useful failure state, not silent breakage.",
              "doList": [
                "Find Get Data Table Row in BP_ItemPickup.",
                "Drag from Row Not Found execution output.",
                "Create Print String.",
                "Set In String to ERROR: Item data not found!",
                "Do not connect Destroy Actor after this failure Print String.",
                "Click Compile.",
                "Place a temporary BP_ItemPickup with ItemRow set to a name that is not in DT_ItemData.",
                "Press Play and touch it.",
                "Confirm the error prints and the pickup remains in the level for debugging."
              ],
              "see": "A bad ItemRow gives a clear error and leaves the pickup available to inspect/fix."
            }
          ],
          "flow": [
            "Placed BP_ItemPickup",
            "ItemRow",
            "Add Unique",
            "Get DT_ItemData Row",
            "Row Found → message + destroy",
            "Row Not Found → error"
          ],
          "test": [
            "ItemRow is Instance Editable.",
            "The graph contains no fixed Battery/Key/Coin identity.",
            "Row Found collects and destroys; Row Not Found reports an error."
          ],
          "doneWhen": "One generic pickup Blueprint can collect any valid DT_ItemData row selected on the placed instance.",
          "common": [
            "ItemRow must be Name, not String.",
            "Remember to enable Instance Editable before looking for ItemRow on a placed Actor.",
            "Do not Destroy Actor from Row Not Found or the broken item will vanish before you can debug it."
          ]
        },
        {
          "id": "data-only-items",
          "number": 7,
          "title": "Prove New Items Can Be Mostly Data",
          "goal": "Use BP_ItemPickup to add Coin, Fuse and a brand-new Wrench without creating new item pickup Blueprint classes.",
          "why": "This is the proof that you have moved from one-off hard-coding to reusable code plus editable content data.",
          "steps": [
            {
              "title": "Place a Coin instance",
              "where": "LV_EscapeRoom → drag BP_ItemPickup into the level",
              "do": "Select the placed Actor and set ItemRow = Coin. Use any simple mesh/material that makes it recognisable.",
              "check": "Play → collect it → Old Coin collected! appears → press I → Old Coin and its description appear.",
              "why": "The generic Blueprint is now driven by the Coin row.",
              "doList": [
                "Return to LV_EscapeRoom.",
                "Drag BP_ItemPickup into the level.",
                "Select the placed pickup.",
                "In Details find ItemRow.",
                "Set ItemRow to Coin.",
                "Optionally change the Static Mesh/material/scale on the placed instance so it looks coin-like; do not edit the Blueprint graph.",
                "Press Play and collect it.",
                "Confirm Old Coin collected! appears.",
                "Press I and confirm Old Coin plus its description are displayed."
              ],
              "see": "Play → collect it → Old Coin collected! appears → press I → Old Coin and its description appear."
            },
            {
              "title": "Place a Fuse instance",
              "where": "LV_EscapeRoom → duplicate the placed BP_ItemPickup",
              "do": "Move the duplicate elsewhere and set ItemRow = Fuse. Change its simple mesh/material/scale if useful; do not edit the Blueprint graph.",
              "check": "It prints Fuse collected! and I displays the Fuse description.",
              "why": "A second item proves this is genuinely reusable.",
              "doList": [
                "Stop Play mode.",
                "Select the Coin BP_ItemPickup instance in LV_EscapeRoom.",
                "Duplicate it with Ctrl+W or Alt-drag.",
                "Move the duplicate to a different place.",
                "With the duplicate selected, change ItemRow from Coin to Fuse.",
                "Optionally change its mesh/material/scale on the placed instance only.",
                "Press Play and collect Fuse.",
                "Confirm Fuse collected! appears.",
                "Press I and confirm the Fuse description is read from DT_ItemData."
              ],
              "see": "It prints Fuse collected! and I displays the Fuse description."
            },
            {
              "title": "Create a brand-new Wrench row",
              "where": "DT_ItemData",
              "do": "Add Row Name Wrench. DisplayName = Maintenance Wrench. Description = A heavy wrench left by the maintenance crew. PickupMessage = Maintenance Wrench collected! UseMessage = There is nothing to repair here yet. IsQuestItem = False. Value = 50. Save.",
              "check": "Wrench exists as a complete new row.",
              "why": "You are adding content before writing any new pickup logic.",
              "doList": [
                "Add Row Name Wrench.",
                "DisplayName = Maintenance Wrench.",
                "Description = A heavy wrench left by the maintenance crew.",
                "PickupMessage = Maintenance Wrench collected!",
                "UseMessage = There is nothing to repair here yet.",
                "IsQuestItem = False.",
                "Value = 50.",
                "Save."
              ],
              "see": "Wrench exists as a complete new row."
            },
            {
              "title": "Add the Wrench without coding a new pickup",
              "where": "LV_EscapeRoom",
              "do": "Duplicate BP_ItemPickup again and set ItemRow = Wrench. Do not open the BP_ItemPickup graph.",
              "check": "Play → collect Wrench → correct message appears → I displays Maintenance Wrench and its description.",
              "why": "This proves new item content can be introduced through data and an existing reusable system.",
              "doList": [
                "Return to LV_EscapeRoom.",
                "Select an existing BP_ItemPickup instance.",
                "Duplicate it.",
                "Move the duplicate somewhere new.",
                "Set the duplicate ItemRow to Wrench.",
                "Do not open BP_ItemPickup and do not add any new pickup nodes.",
                "Press Play and collect the Wrench.",
                "Confirm Maintenance Wrench collected! appears.",
                "Press I and confirm the Wrench description appears."
              ],
              "see": "Play → collect Wrench → correct message appears → I displays Maintenance Wrench and its description."
            },
            {
              "title": "Perform the missing-row test",
              "where": "One temporary BP_ItemPickup instance",
              "do": "Set ItemRow = ThisDoesNotExist and Play. Touch it, observe the error, then delete/fix the temporary test instance.",
              "check": "ERROR: Item data not found! appears and the bad pickup does not silently disappear.",
              "why": "You have proved both the success path and the failure path.",
              "doList": [
                "Stop Play mode.",
                "Duplicate a BP_ItemPickup instance temporarily.",
                "Set its ItemRow to ThisDoesNotExist.",
                "Press Play.",
                "Walk into the temporary pickup.",
                "Confirm ERROR: Item data not found! appears.",
                "Confirm the pickup does not disappear.",
                "Stop Play mode.",
                "Delete the temporary bad pickup or change ItemRow back to a valid row.",
                "Save All."
              ],
              "see": "ERROR: Item data not found! appears and the bad pickup does not silently disappear."
            }
          ],
          "flow": [
            "Add/choose table row",
            "Place same BP_ItemPickup",
            "Set ItemRow",
            "Play",
            "Correct row data appears"
          ],
          "test": [
            "Coin works from the generic pickup.",
            "Fuse works from the generic pickup.",
            "Wrench is added without a new pickup Blueprint class.",
            "A missing row produces the planned error."
          ],
          "doneWhen": "At least three different items use BP_ItemPickup and Wrench was added by changing data plus an instance setting, not by writing a new pickup graph.",
          "common": [
            "Save DT_ItemData after adding Wrench.",
            "Type Row Names exactly.",
            "Different meshes are optional; the programming proof is the shared BP_ItemPickup logic."
          ]
        },
        {
          "id": "clean-old-system",
          "number": 8,
          "title": "Remove the Old Hard-Coded System",
          "goal": "Safely delete the original String Inventory and ItemDescriptions Map after proving nothing still depends on them.",
          "why": "A refactor is unfinished if both old and new systems remain active. Duplicate state causes bugs and confuses future work.",
          "steps": [
            {
              "title": "Search for old Inventory use",
              "where": "BP_ThirdPersonCharacter, BP_Battery, BP_Key, BP_Generator, BP_ExitDoor",
              "do": "Inspect each relevant graph. Make sure all live item checks/adds/removes now use InventoryRows rather than the old Inventory String Array.",
              "check": "No gameplay execution path depends on old Inventory.",
              "why": "Deleting a variable while something still uses it will create broken nodes.",
              "doList": [
                "Open BP_ThirdPersonCharacter and search visually/My Blueprint for Inventory.",
                "Open BP_Battery and check no live execution wire writes to the old Inventory String Array.",
                "Open BP_Key and check no live execution wire writes to the old Inventory String Array.",
                "Open BP_Generator and check Contains/Remove use InventoryRows.",
                "Open BP_ExitDoor and check the key condition uses InventoryRows + ExitKey.",
                "Use Find in Blueprints for the variable name Inventory if you are unsure.",
                "Do not delete Inventory until every live gameplay path has moved to InventoryRows.",
                "Compile each changed Blueprint before continuing."
              ],
              "see": "No gameplay execution path depends on old Inventory."
            },
            {
              "title": "Search for ItemDescriptions use",
              "where": "BP_ThirdPersonCharacter and any inventory display logic",
              "do": "Confirm descriptions now come from Get Data Table Row and Break ST_ItemData, not the old Map Find node.",
              "check": "No live graph reads ItemDescriptions.",
              "why": "DT_ItemData has replaced the description Map.",
              "doList": [
                "Open BP_ThirdPersonCharacter.",
                "Find the I inventory display chain.",
                "Confirm it uses Get Data Table Row with DT_ItemData.",
                "Confirm the row is unpacked with Break ST_ItemData.",
                "Search for any remaining ItemDescriptions getter nodes.",
                "Search for any remaining Map Find nodes that read item descriptions.",
                "If one is still on a live execution path, replace it before deleting the Map.",
                "Compile once no live graph needs ItemDescriptions."
              ],
              "see": "No live graph reads ItemDescriptions."
            },
            {
              "title": "Delete ItemDescriptions",
              "where": "BP_ThirdPersonCharacter → My Blueprint",
              "do": "Delete the unused ItemDescriptions variable. Compile and fix any remaining references if Unreal reports them.",
              "check": "The character compiles with no ItemDescriptions variable.",
              "why": "The description data now has one source of truth.",
              "doList": [
                "Open BP_ThirdPersonCharacter → My Blueprint.",
                "Select ItemDescriptions.",
                "Press Delete or right-click → Delete.",
                "Confirm the deletion if Unreal asks.",
                "Click Compile.",
                "If a compiler error points to a broken Map node, undo the deletion and migrate that remaining use first.",
                "When Compile succeeds, click Save.",
                "Confirm ItemDescriptions no longer appears in My Blueprint."
              ],
              "see": "The character compiles with no ItemDescriptions variable."
            },
            {
              "title": "Delete the old Inventory String Array",
              "where": "BP_ThirdPersonCharacter → My Blueprint",
              "do": "Delete the unused Inventory variable. Compile. If anything breaks, undo and migrate that remaining use to InventoryRows first.",
              "check": "The character and dependent Blueprints compile without the old Inventory.",
              "why": "InventoryRows is now the only runtime inventory ID list.",
              "doList": [
                "Open BP_ThirdPersonCharacter → My Blueprint.",
                "Select the old Inventory String Array; make sure you are not selecting InventoryRows.",
                "Press Delete or right-click → Delete.",
                "Confirm the deletion if prompted.",
                "Click Compile.",
                "If any Blueprint reports a broken Inventory reference, undo and migrate that use to InventoryRows first.",
                "Compile again until there are no errors.",
                "Click Save.",
                "Confirm InventoryRows is now the only inventory ID array."
              ],
              "see": "The character and dependent Blueprints compile without the old Inventory."
            },
            {
              "title": "Clean and label the new graphs",
              "where": "Changed Blueprint Event Graphs",
              "do": "Delete disconnected test nodes. Add comment boxes such as ADD ITEM TO INVENTORY, LOOK UP ITEM DATA, CHECK GENERATOR REQUIREMENT, CHECK EXIT REQUIREMENTS and DISPLAY INVENTORY. Save All.",
              "check": "There are no obvious disconnected migration leftovers and each major system is readable.",
              "why": "Readable graphs make the next refactor—Functions—much easier.",
              "doList": [
                "Open each Blueprint you changed.",
                "Delete disconnected temporary keyboard tests and unused old nodes.",
                "Select the nodes that add an item and press C to create a comment box named ADD ITEM TO INVENTORY.",
                "Comment the Data Table lookup area as LOOK UP ITEM DATA.",
                "Comment the Generator requirement area as CHECK GENERATOR REQUIREMENT.",
                "Comment the Exit requirement area as CHECK EXIT REQUIREMENTS.",
                "Comment the I-key display logic as DISPLAY INVENTORY.",
                "Move nodes so white execution wires read left-to-right without unnecessary crossings.",
                "Compile each Blueprint.",
                "Click File → Save All."
              ],
              "see": "There are no obvious disconnected migration leftovers and each major system is readable."
            }
          ],
          "test": [
            "Old Inventory String Array is gone.",
            "ItemDescriptions Map is gone.",
            "All affected Blueprints compile.",
            "InventoryRows + DT_ItemData are the only active item data path."
          ],
          "doneWhen": "The project has one clean item system instead of old and new versions running side-by-side.",
          "common": [
            "If deleting a variable creates errors, Undo and migrate the remaining reference first.",
            "Do not delete PowerOn; that state is not part of the item-data migration.",
            "Do not delete DT_ItemData rows simply because an item is optional."
          ]
        },
        {
          "id": "final-test",
          "number": 9,
          "title": "Final Test — Prove the Game Is Data Driven",
          "goal": "Complete the Escape Room using only the new system and prove you can add or edit content without rewriting item pickup logic.",
          "why": "The mission is complete only when the refactored architecture survives a full player journey and a data-only content change.",
          "steps": [
            {
              "title": "Run the full original game loop",
              "where": "LV_EscapeRoom → Play",
              "do": "Main Menu → Start → try Generator early → collect Battery → press I → power Generator → collect Exit Key → press I → test Exit → escape → Win screen → Play Again.",
              "check": "The complete original game works with the old Inventory/Map deleted.",
              "why": "The refactor must preserve player behaviour.",
              "doList": [
                "Start at the Main Menu.",
                "Click Start.",
                "Try the Generator before collecting Battery.",
                "Collect Battery and press I.",
                "Power the Generator.",
                "Collect ExitKey and press I.",
                "Test the Exit.",
                "Escape and reach the Win screen.",
                "Click Play Again and confirm the project resets."
              ],
              "see": "The complete original game works with the old Inventory/Map deleted."
            },
            {
              "title": "Check optional generic items",
              "where": "During the same play-through",
              "do": "Collect Coin, Fuse and Wrench. Press I after collecting them.",
              "check": "Each item displays the correct DT_ItemData DisplayName and Description.",
              "why": "The generic pickup and table must work beyond the two original quest items.",
              "doList": [
                "Press Play.",
                "Collect the Coin BP_ItemPickup instance.",
                "Collect the Fuse BP_ItemPickup instance.",
                "Collect the Wrench BP_ItemPickup instance.",
                "Press I.",
                "Confirm all three display the correct DisplayName.",
                "Confirm all three display the correct Description.",
                "Confirm none required a new pickup Blueprint or item-specific graph."
              ],
              "see": "Each item displays the correct DT_ItemData DisplayName and Description."
            },
            {
              "title": "Prove the Data Table is authoritative",
              "where": "DT_ItemData → Wrench row",
              "do": "Change Wrench Value from 50 to 75 and slightly alter its Description. Save. Play again and inspect Wrench through I. Do not edit BP_ItemPickup.",
              "check": "The new Description appears immediately from the same pickup Blueprint.",
              "why": "Game content can now change independently of the reusable pickup code.",
              "doList": [
                "Stop Play mode.",
                "Open DT_ItemData and select Wrench.",
                "Change Value from 50 to 75.",
                "Change the Wrench Description by adding a short extra phrase.",
                "Click Save.",
                "Do not edit BP_ItemPickup.",
                "Press Play and collect Wrench.",
                "Press I and confirm the changed Description appears.",
                "If you display Value anywhere, confirm 75 appears there too.",
                "This proves the content change came from DT_ItemData rather than pickup code."
              ],
              "see": "The new Description appears immediately from the same pickup Blueprint."
            },
            {
              "title": "Explain the architecture",
              "where": "Your project / to your teacher or partner",
              "do": "Be able to explain this chain in your own words: ItemRow Name → InventoryRows → DT_ItemData → ST_ItemData → DisplayName/Description/other fields.",
              "check": "You can describe what the Struct does, what the Data Table does and why the Array only stores row IDs.",
              "why": "Understanding the relationship matters more than memorising node names.",
              "doList": [
                "Open BP_ItemPickup and point to ItemRow.",
                "Explain that ItemRow is only the ID/row name.",
                "Open BP_ThirdPersonCharacter and point to InventoryRows.",
                "Explain that InventoryRows stores those IDs, not all item text.",
                "Open DT_ItemData and point to the matching row.",
                "Open ST_ItemData and point to the fields that define each row.",
                "Show Get Data Table Row turning an ItemRow name into ST_ItemData.",
                "Show Break ST_ItemData exposing DisplayName and Description.",
                "Say the full chain aloud: ItemRow Name → InventoryRows → DT_ItemData → ST_ItemData → usable item fields."
              ],
              "see": "You can describe what the Struct does, what the Data Table does and why the Array only stores row IDs."
            },
            {
              "title": "Make one independent data extension",
              "where": "ST_ItemData / DT_ItemData",
              "do": "Choose ONE: add Weight Float; add Icon Texture2D; add Category Name/Text; or add another useful data field. Update at least two rows and display/use the new field somewhere simple.",
              "check": "Your new field is visible in the Struct, table rows and one Blueprint lookup.",
              "why": "Adapting the system independently is stronger evidence than copying the supplied rows.",
              "doList": [
                "Choose ONE new ST_ItemData field: Weight (Float), Icon (Texture2D), Category (Name/Text) or another sensible field.",
                "Open ST_ItemData and click + Add Variable.",
                "Name the field clearly and choose the correct type.",
                "Click Save and allow DT_ItemData to update its columns.",
                "Open DT_ItemData.",
                "Give at least two existing rows different values for the new field.",
                "Save DT_ItemData.",
                "Open one simple display/debug graph and read the new field from Break ST_ItemData.",
                "Print or otherwise show the new value in Play mode.",
                "Run the original Escape Room loop again to make sure the Struct change did not break existing data."
              ],
              "see": "Your new field is visible in the Struct, table rows and one Blueprint lookup."
            }
          ],
          "flow": [
            "Struct defines shape",
            "Data Table stores content",
            "InventoryRows stores IDs",
            "Blueprint looks up row",
            "Reusable systems use returned data"
          ],
          "test": [
            "The whole Escape Room still completes.",
            "Old Inventory and ItemDescriptions are gone.",
            "Coin/Fuse/Wrench use one BP_ItemPickup class.",
            "Editing row data changes the game without editing pickup logic.",
            "One independent data field has been added and used."
          ],
          "doneWhen": "You can complete the game, add/edit item content through DT_ItemData and explain why this is better than hard-coding each item across Blueprint graphs.",
          "common": [
            "Do not call the mission complete if BP_ItemPickup still contains fixed item-specific values.",
            "If a row fails, test the exact Row Name and Row Not Found path before changing unrelated Blueprints.",
            "Keep the game behaviour stable; this mission is an architecture upgrade, not a redesign."
          ],
          "challenges": [
            "Add an Icon Texture2D field to ST_ItemData and prepare each item for a future visual inventory.",
            "Add Weight as Float and calculate the total weight of everything in InventoryRows.",
            "Use Value to calculate the total sell value of optional loot.",
            "Add Category as Name or an Enum later and separate Quest, Valuable and Tool items.",
            "Replace old BP_Battery/BP_Key placed actors with BP_ItemPickup instances once you are confident the generic version is reliable."
          ]
        }
      ],
      "guideRule": "Treat every numbered line as one action. Click, add, type or connect exactly what it says, then stop at YOU SHOULD NOW HAVE and prove the result before moving on.",
      "theoryLinks": [
        {
          "label": "Structs — theory",
          "href": "#/block/structs"
        },
        {
          "label": "Data Tables — theory",
          "href": "#/block/data-tables"
        }
      ]
    },
    {
      "id": "functions-reusable-logic",
      "sequence": 3,
      "requiresMission": "structs-data-tables-item-system",
      "discipline": "Programmer",
      "icon": "ƒ",
      "title": "Stop Repeating Yourself: Functions & Reusable Logic",
      "subtitle": "Refactor the same Escape Room so common jobs are written once, called everywhere and reused to add a new powered Fuse door quickly.",
      "duration": "3–5 hours",
      "difficulty": "Guided solo refactor",
      "summary": "Your data is organised, but the same inventory checks and item lookups are still repeated across the Character, pickups, Generator and Exit. Keep the same game and turn those repeated node chains into Functions with clear inputs and outputs. Then prove the refactor matters by adding a new Maintenance Door that reuses the same logic instead of rebuilding it.",
      "skills": [
        "Functions",
        "Inputs",
        "Outputs",
        "Pure functions",
        "Impure functions",
        "Function calls",
        "Refactoring",
        "Reusable logic",
        "Composition",
        "Debugging"
      ],
      "rules": [
        "Continue the same Escape Room from Missions 1 and 2.",
        "A Function should do one clear job and have a name that explains that job.",
        "Refactor one system at a time and test before deleting the old node chain.",
        "Do not hide broken logic inside a Function. Make the original behaviour work first."
      ],
      "gameFlow": [
        "Audit repeated logic",
        "Create HasItem",
        "Create AddItem / RemoveItem",
        "Create GetItemData",
        "Create PrintInventory",
        "Refactor pickups",
        "Refactor Generator",
        "Create reusable powered-item check",
        "Add Fuse Maintenance Door",
        "Full regression test"
      ],
      "stages": [
        {
          "id": "start",
          "number": 0,
          "title": "Start Here — Find the Repetition",
          "goal": "Prove Mission 2 still works and identify the repeated node chains that should become Functions.",
          "why": "Functions are useful when they solve a real repetition problem. You should see the repeated logic before hiding it behind a reusable Function call.",
          "steps": [
            {
              "title": "Open the same project",
              "where": "Unreal Engine → your EscapeRoom project from Missions 1 and 2",
              "do": "Open LV_EscapeRoom and use File → Save All. Do not create a new project or duplicate the gameplay into another level.",
              "check": "InventoryRows, ST_ItemData, DT_ItemData and BP_ItemPickup all still exist.",
              "why": "Mission 3 is a code-quality refactor of the game you already built.",
              "doList": [
                "Launch Unreal Engine 5.8.",
                "Open the existing EscapeRoom project.",
                "Open LV_EscapeRoom.",
                "Click File → Save All.",
                "Open BP_ThirdPersonCharacter and confirm InventoryRows still exists.",
                "Open Content/Data and confirm ST_ItemData and DT_ItemData still exist.",
                "Do not create a new project or duplicate the level.",
                "Press Play once to confirm the project starts normally."
              ],
              "see": "InventoryRows, ST_ItemData, DT_ItemData and BP_ItemPickup all still exist."
            },
            {
              "title": "Run one clean Mission 2 play-through",
              "where": "LV_EscapeRoom → Play",
              "do": "Main Menu → collect Battery → inspect inventory → power Generator → collect ExitKey → open Exit → reach Win screen. Also collect one generic item such as Coin or Wrench.",
              "check": "The complete game still works before you change any logic.",
              "why": "You need a known-good baseline so new bugs can be traced to this refactor.",
              "doList": [
                "Press Play and click START GAME.",
                "Collect Battery.",
                "Press I and confirm its data-driven description appears.",
                "Power the Generator.",
                "Collect ExitKey.",
                "Collect one generic item such as Coin or Wrench.",
                "Press I and confirm both remaining items display correctly.",
                "Open the Exit and reach the Win screen.",
                "Click PLAY AGAIN and confirm the level resets.",
                "Stop Play mode only when Mission 2 is still fully working."
              ],
              "see": "The complete game still works before you change any logic."
            },
            {
              "title": "Find repeated inventory checks",
              "where": "BP_Generator, BP_ExitDoor and any other item-gated Blueprint",
              "do": "Find each place that gets InventoryRows and then uses Contains. Do not change it yet. Notice that the same job is being rebuilt with a different item name.",
              "check": "You can identify at least two separate Contains checks against InventoryRows.",
              "why": "This repeated question—does the player own this row?—should become one reusable Function.",
              "doList": [
                "Open BP_Generator.",
                "Find the InventoryRows → Contains Battery chain.",
                "Open BP_ExitDoor.",
                "Find the InventoryRows → Contains ExitKey chain.",
                "Compare the two chains side-by-side mentally: the only important difference is the item row name.",
                "Do not delete either chain yet.",
                "Write down the repeated job in plain English: Does the player have this item?",
                "That repeated question will become the HasItem Function."
              ],
              "see": "You can identify at least two separate Contains checks against InventoryRows."
            },
            {
              "title": "Find repeated item-data lookups",
              "where": "BP_ItemPickup and BP_ThirdPersonCharacter inventory display",
              "do": "Locate Get Data Table Row → DT_ItemData → Break ST_ItemData chains. Notice that several graphs know how to fetch item data.",
              "check": "You can point to more than one place that reads DT_ItemData.",
              "why": "The lookup rules should live in one place so future changes are easier.",
              "doList": [
                "Open BP_ItemPickup.",
                "Find Get Data Table Row using DT_ItemData.",
                "Open BP_ThirdPersonCharacter and find the I/PrintInventory-style Data Table lookup chain.",
                "Notice both graphs need to know which Data Table to use.",
                "Notice both graphs unpack ST_ItemData after the lookup.",
                "Do not delete the lookups yet.",
                "Write down the repeated job in plain English: Given an ItemRow, fetch its item data.",
                "That repeated job will become GetItemData."
              ],
              "see": "You can point to more than one place that reads DT_ItemData."
            },
            {
              "title": "Keep the old logic for now",
              "where": "All affected Blueprints",
              "do": "Do not delete any repeated node chain yet. You will replace and test each chain one at a time.",
              "check": "All Blueprints still compile and the game still plays.",
              "why": "Safe refactoring changes structure without changing behaviour.",
              "doList": [
                "Click File → Save All.",
                "Do not delete any Contains nodes yet.",
                "Do not delete any Add Unique or Remove Item nodes yet.",
                "Do not delete any Get Data Table Row nodes yet.",
                "Create and test each Function first.",
                "Replace only one old chain at a time.",
                "Compile and Play-test after each replacement.",
                "If a replacement fails, reconnect the old working chain before moving on."
              ],
              "see": "All Blueprints still compile and the game still plays."
            }
          ],
          "test": [
            "Mission 2 still completes.",
            "You have found repeated InventoryRows Contains logic.",
            "You have found repeated DT_ItemData lookup logic."
          ],
          "doneWhen": "You have a working data-driven game and can name the repeated jobs that Mission 3 will turn into Functions.",
          "common": [
            "Do not start by deleting nodes.",
            "Do not make one giant DoEverything Function.",
            "If Mission 2 is already broken, fix it before continuing."
          ]
        },
        {
          "id": "has-item",
          "number": 1,
          "title": "Create HasItem — Your First Reusable Function",
          "goal": "Create a Pure Function that asks whether InventoryRows contains a requested item row.",
          "why": "The Generator, Exit and future puzzles all ask the same question. One HasItem Function lets every system ask it in the same way.",
          "steps": [
            {
              "title": "Create HasItem",
              "where": "BP_ThirdPersonCharacter → My Blueprint → Functions → +",
              "do": "Create a Function named HasItem. Select the Function and, in Details, add an Input named ItemRow of type Name. Add an Output named Result of type Boolean.",
              "check": "The Function signature accepts one Name and returns one Boolean.",
              "why": "Inputs let callers tell the Function which item to check; the output sends the answer back.",
              "doList": [
                "Open BP_ThirdPersonCharacter.",
                "In My Blueprint click + Function.",
                "Name the function HasItem.",
                "Select HasItem.",
                "In Details → Inputs click + and name it ItemRow.",
                "Set ItemRow type to Name.",
                "In Details → Outputs click + and name it Result.",
                "Set Result type to Boolean.",
                "Compile."
              ],
              "see": "The Function signature accepts one Name and returns one Boolean."
            },
            {
              "title": "Make HasItem Pure",
              "where": "BP_ThirdPersonCharacter → select HasItem → Details",
              "do": "Enable Pure for HasItem.",
              "check": "The HasItem call node uses data pins rather than needing white execution wires.",
              "why": "HasItem only reads InventoryRows and returns an answer. It does not change the game state, so a Pure Function is appropriate.",
              "doList": [
                "In BP_ThirdPersonCharacter → My Blueprint click the HasItem Function once.",
                "Look at the Details panel for the Function.",
                "Find the Pure checkbox under Function settings.",
                "Tick Pure.",
                "Click Compile.",
                "Return to the HasItem graph.",
                "Confirm the Function entry/return now behaves as a value-returning pure Function without white execution pins at call sites.",
                "Do not make Functions Pure if they change variables later."
              ],
              "see": "The HasItem call node uses data pins rather than needing white execution wires."
            },
            {
              "title": "Build the Function logic",
              "where": "HasItem Function graph",
              "do": "Get InventoryRows → Contains. Connect the Function input ItemRow to Contains Item. Connect the Contains Boolean result to the Return Node output Result.",
              "check": "The complete Function is essentially InventoryRows Contains ItemRow → Result.",
              "why": "All inventory membership checks now have one authoritative implementation.",
              "doList": [
                "Open the HasItem Function graph.",
                "Drag InventoryRows from My Blueprint into the graph and choose Get.",
                "Drag from the InventoryRows Array pin and search for Contains.",
                "Place Contains (Array).",
                "Drag from the Function input ItemRow and connect it to Contains Item.",
                "Find the Return Node.",
                "Connect Contains Return Value → Return Node Result.",
                "Click Compile.",
                "Read the Function in one sentence: InventoryRows contains ItemRow → return True/False."
              ],
              "see": "The complete Function is essentially InventoryRows Contains ItemRow → Result.",
              "visual": {
                "src": "assets/ue5/current/function-real.webp",
                "caption": "Reference: a Blueprint Function packages reusable logic behind a named node. Your function is HasItem."
              }
            },
            {
              "title": "Test HasItem before changing the game",
              "where": "BP_ThirdPersonCharacter → Event Graph",
              "do": "Create a temporary H keyboard event → Branch. Use HasItem with ItemRow = Battery as the Branch Condition. True → Print BATTERY FOUND. False → Print NO BATTERY.",
              "check": "Before collecting Battery, H prints NO BATTERY. After collecting Battery, H prints BATTERY FOUND.",
              "why": "Testing the Function independently makes later refactoring safer.",
              "doList": [
                "Return to BP_ThirdPersonCharacter → Event Graph.",
                "Right-click and add H Keyboard Event.",
                "Right-click and add a Branch.",
                "Drag from empty graph space/search and place a HasItem call.",
                "Set HasItem ItemRow to Battery.",
                "Connect H Pressed → Branch execution input.",
                "Connect HasItem Result → Branch Condition.",
                "From Branch True create Print String BATTERY FOUND.",
                "From Branch False create Print String NO BATTERY.",
                "Compile and press Play before collecting Battery; press H and confirm NO BATTERY.",
                "Collect Battery, press H again and confirm BATTERY FOUND."
              ],
              "see": "Before collecting Battery, H prints NO BATTERY. After collecting Battery, H prints BATTERY FOUND."
            },
            {
              "title": "Remove the temporary H test",
              "where": "BP_ThirdPersonCharacter → Event Graph",
              "do": "Delete the temporary H test chain after both results have been proven. Keep the HasItem Function.",
              "check": "No temporary keyboard test remains and HasItem still compiles.",
              "why": "The Function is now ready for real gameplay callers.",
              "doList": [
                "Stop Play mode.",
                "Open BP_ThirdPersonCharacter → Event Graph.",
                "Box-select H Keyboard Event, Branch, HasItem test call and both temporary Print Strings.",
                "Press Delete.",
                "Do not delete the HasItem Function itself.",
                "Click Compile.",
                "Click Save.",
                "Confirm HasItem still appears under Functions in My Blueprint."
              ],
              "see": "No temporary keyboard test remains and HasItem still compiles."
            }
          ],
          "flow": [
            "Caller supplies ItemRow",
            "HasItem",
            "InventoryRows Contains ItemRow",
            "Result True / False"
          ],
          "test": [
            "HasItem(Battery) is False before collection.",
            "HasItem(Battery) is True after collection.",
            "HasItem is Pure and has one Name input plus one Boolean output."
          ],
          "doneWhen": "BP_ThirdPersonCharacter has a tested Pure HasItem(ItemRow) Function that returns whether the requested row is in InventoryRows.",
          "common": [
            "Use Name for ItemRow, not String.",
            "Pure Functions should not Set variables or remove/add inventory items.",
            "If the call node does not update after changing inputs/outputs, Compile BP_ThirdPersonCharacter."
          ]
        },
        {
          "id": "add-remove",
          "number": 2,
          "title": "Create AddItem and RemoveItem",
          "goal": "Move the two common inventory-changing operations into small reusable Functions.",
          "why": "Other Blueprints should not need to know how InventoryRows is implemented. They should ask the player to add or remove an item.",
          "steps": [
            {
              "title": "Create AddItem",
              "where": "BP_ThirdPersonCharacter → My Blueprint → Functions → +",
              "do": "Create Function AddItem. Add Input ItemRow of type Name. Leave Pure OFF because this Function changes InventoryRows.",
              "check": "AddItem has white execution pins when called and one Name input.",
              "why": "Functions that change state are Impure and execute through normal execution wires.",
              "doList": [
                "Open BP_ThirdPersonCharacter.",
                "In My Blueprint → Functions click +.",
                "Name the Function AddItem.",
                "Select the AddItem Function entry node.",
                "In Details → Inputs click +.",
                "Name the input ItemRow.",
                "Set ItemRow type to Name.",
                "Leave Pure unticked because this Function will change InventoryRows.",
                "Click Compile."
              ],
              "see": "AddItem has white execution pins when called and one Name input."
            },
            {
              "title": "Build AddItem",
              "where": "AddItem Function graph",
              "do": "Get InventoryRows → Add Unique. Connect ItemRow to the Item input. Connect the Function execution path through Add Unique to the Return Node.",
              "check": "Calling AddItem with Coin adds Coin once and calling it again does not create a duplicate.",
              "why": "Add Unique keeps the inventory ID list clean while hiding the Array operation from outside Blueprints.",
              "doList": [
                "Open the AddItem Function graph.",
                "Drag InventoryRows from My Blueprint into the graph and choose Get.",
                "Drag from the Array pin and add Add Unique.",
                "Connect Function input ItemRow → Add Unique Item.",
                "Connect Function entry execution → Add Unique execution input.",
                "Connect Add Unique execution output → Return Node.",
                "Click Compile.",
                "Confirm the Function changes the real InventoryRows Array and does not create a local temporary Array."
              ],
              "see": "Calling AddItem with Coin adds Coin once and calling it again does not create a duplicate."
            },
            {
              "title": "Create RemoveItem",
              "where": "BP_ThirdPersonCharacter → My Blueprint → Functions → +",
              "do": "Create Function RemoveItem with Input ItemRow of type Name. Get InventoryRows → Remove Item and connect ItemRow. Leave Pure OFF.",
              "check": "RemoveItem compiles with one Name input and an execution path.",
              "why": "Gameplay systems can consume an item without directly manipulating the Array.",
              "doList": [
                "In BP_ThirdPersonCharacter → My Blueprint → Functions click +.",
                "Name the Function RemoveItem.",
                "Select the Function entry node and add Input ItemRow of type Name.",
                "Leave Pure OFF because RemoveItem changes InventoryRows.",
                "Drag InventoryRows into the Function graph as Get.",
                "From InventoryRows add Remove Item.",
                "Connect Function input ItemRow → Remove Item Item.",
                "Connect Function entry execution → Remove Item → Return Node.",
                "Click Compile and Save."
              ],
              "see": "RemoveItem compiles with one Name input and an execution path."
            },
            {
              "title": "Temporary Add/Remove test",
              "where": "BP_ThirdPersonCharacter → Event Graph",
              "do": "Create a temporary J key → AddItem(Coin) and a temporary R key → RemoveItem(Coin). Use your current I inventory display between presses to inspect the result.",
              "check": "J adds Coin once; pressing J repeatedly does not duplicate it; R removes Coin.",
              "why": "Both state-changing Functions are proven before other Blueprints depend on them.",
              "doList": [
                "Open BP_ThirdPersonCharacter → Event Graph.",
                "Add J Keyboard Event.",
                "Drag from J Pressed and call AddItem.",
                "Set AddItem ItemRow to Coin.",
                "Add R Keyboard Event.",
                "Drag from R Pressed and call RemoveItem.",
                "Set RemoveItem ItemRow to Coin.",
                "Compile and press Play.",
                "Press J, then press I and confirm Coin appears.",
                "Press R, then press I and confirm Coin disappears."
              ],
              "see": "J adds Coin once; pressing J repeatedly does not duplicate it; R removes Coin."
            },
            {
              "title": "Delete the temporary keys",
              "where": "BP_ThirdPersonCharacter → Event Graph",
              "do": "Remove the temporary J and R test chains. Keep AddItem and RemoveItem.",
              "check": "The Event Graph is clean and both Functions remain available.",
              "why": "Test scaffolding should not become part of the finished controls.",
              "doList": [
                "Stop Play mode.",
                "Open BP_ThirdPersonCharacter → Event Graph.",
                "Delete the temporary J → AddItem(Coin) chain.",
                "Delete the temporary R → RemoveItem(Coin) chain.",
                "Keep AddItem and RemoveItem under My Blueprint → Functions.",
                "Click Compile.",
                "Click Save.",
                "Confirm no temporary keyboard tests remain."
              ],
              "see": "The Event Graph is clean and both Functions remain available."
            }
          ],
          "flow": [
            "AddItem(ItemRow) → Add Unique",
            "RemoveItem(ItemRow) → Remove Item"
          ],
          "test": [
            "AddItem does not create duplicate row names.",
            "RemoveItem removes the requested row.",
            "Both Functions are Impure because they change InventoryRows."
          ],
          "doneWhen": "The Character owns tested AddItem(ItemRow) and RemoveItem(ItemRow) Functions and outside systems no longer need to manipulate the Array directly once migrated.",
          "common": [
            "Do not enable Pure on a Function that modifies InventoryRows.",
            "Add Unique is different from Add; use Add Unique here.",
            "If your I display still uses old logic that is fine for this stage; PrintInventory comes later."
          ]
        },
        {
          "id": "get-item-data",
          "number": 3,
          "title": "Create GetItemData",
          "goal": "Create one Function that looks up a row in DT_ItemData and returns both the item Struct and whether the row was found.",
          "why": "Pickups and inventory display currently repeat the same Data Table lookup. Centralising it gives the project one place to handle missing data.",
          "steps": [
            {
              "title": "Create the Function signature",
              "where": "BP_ThirdPersonCharacter → Functions → + → GetItemData",
              "do": "Create Function GetItemData. Input: ItemRow (Name). Outputs: ItemData (ST_ItemData) and Found (Boolean). Leave Pure OFF because Get Data Table Row uses execution paths for Row Found / Row Not Found.",
              "check": "The Function call exposes ItemRow in and ItemData + Found out.",
              "why": "The caller receives both the data and a clear success/failure result.",
              "doList": [
                "In BP_ThirdPersonCharacter → My Blueprint → Functions click +.",
                "Name the Function GetItemData.",
                "Select the Function entry node.",
                "In Details → Inputs click + and name it ItemRow.",
                "Set ItemRow type to Name.",
                "In Details → Outputs click + and name it ItemData.",
                "Set ItemData type to ST_ItemData.",
                "Add a second Output named Found.",
                "Set Found type to Boolean.",
                "Leave Pure OFF because this Function will use Row Found / Row Not Found execution paths.",
                "Click Compile."
              ],
              "see": "The Function call exposes ItemRow in and ItemData + Found out."
            },
            {
              "title": "Read DT_ItemData",
              "where": "GetItemData Function graph",
              "do": "Add Get Data Table Row. Set Data Table = DT_ItemData. Connect ItemRow to Row Name.",
              "check": "The node exposes Row Found, Row Not Found and Out Row of type ST_ItemData.",
              "why": "The Function now owns the knowledge of which table stores item data.",
              "doList": [
                "Open the GetItemData Function graph.",
                "Right-click empty space and search for Get Data Table Row.",
                "Place Get Data Table Row.",
                "Set its Data Table dropdown to DT_ItemData.",
                "Connect Function entry execution → Get Data Table Row execution input.",
                "Connect Function input ItemRow → Row Name.",
                "Move the Return Node aside so both Row Found and Row Not Found paths have room.",
                "Click Compile."
              ],
              "see": "The node exposes Row Found, Row Not Found and Out Row of type ST_ItemData."
            },
            {
              "title": "Return a successful lookup",
              "where": "GetItemData → Row Found",
              "do": "From Row Found add/use a Return Node. Connect Out Row to ItemData and set Found = True on that return path.",
              "check": "A valid row reaches a Return Node with real Struct data and Found True.",
              "why": "Callers can safely use the returned fields when Found is True.",
              "doList": [
                "Find Get Data Table Row → Row Found.",
                "Create or use a Return Node for the success path.",
                "Connect Row Found execution → the success Return Node.",
                "Connect Get Data Table Row Out Row → Return ItemData.",
                "On that Return Node tick/set Found to True.",
                "Leave the failure path separate.",
                "Click Compile.",
                "Confirm the success path returns both the Struct and Found=True."
              ],
              "see": "A valid row reaches a Return Node with real Struct data and Found True."
            },
            {
              "title": "Return a failed lookup",
              "where": "GetItemData → Row Not Found",
              "do": "From Row Not Found, Print String: ERROR: Item data not found. Add Return Node and leave ItemData at its default empty Struct; set Found = False.",
              "check": "An invalid Row Name returns Found False and prints an obvious error.",
              "why": "One failure path is easier to debug than silent errors spread across multiple Blueprints.",
              "doList": [
                "Drag from Get Data Table Row → Row Not Found.",
                "Create Print String.",
                "Set In String to ERROR: Item data not found.",
                "From Print String execution create a second Return Node.",
                "Leave ItemData at its default empty ST_ItemData value.",
                "Set Found to False on this Return Node.",
                "Click Compile.",
                "Check that both Row Found and Row Not Found end at a Return Node."
              ],
              "see": "An invalid Row Name returns Found False and prints an obvious error."
            },
            {
              "title": "Test valid and invalid rows",
              "where": "BP_ThirdPersonCharacter → temporary keyboard tests",
              "do": "Use temporary T to call GetItemData(Battery) and print DisplayName from returned ItemData when Found is True. Then test ThisDoesNotExist and confirm the error path. Delete the temporary test afterwards.",
              "check": "Battery returns valid data; the fake row returns Found False/error.",
              "why": "Both Function exits need proof before you refactor callers.",
              "doList": [
                "Open BP_ThirdPersonCharacter → Event Graph.",
                "Add a temporary T Keyboard Event.",
                "From T Pressed call GetItemData with ItemRow = Battery.",
                "Add a Branch using Found as the Condition.",
                "On True, Break ST_ItemData from ItemData and Print String using DisplayName.",
                "Compile and Play; press T and confirm Battery prints.",
                "Stop Play, change the temporary ItemRow input to ThisDoesNotExist.",
                "Play and press T again.",
                "Confirm ERROR: Item data not found. appears.",
                "Stop Play and delete the temporary T test chain.",
                "Compile and Save."
              ],
              "see": "Battery returns valid data; the fake row returns Found False/error."
            }
          ],
          "flow": [
            "ItemRow",
            "GetItemData",
            "DT_ItemData",
            "Row Found → ItemData + True",
            "Row Not Found → error + False"
          ],
          "test": [
            "Battery returns ST_ItemData and Found True.",
            "An invalid row returns Found False and an error.",
            "Callers no longer need to know the Data Table asset once migrated."
          ],
          "doneWhen": "GetItemData(ItemRow) is the single tested place that reads DT_ItemData and handles missing rows.",
          "common": [
            "Set the Data Table asset to DT_ItemData inside the Function.",
            "Add Return Node is available from the node action menu if you need a return on each execution path.",
            "Do not mark this version Pure; it deliberately uses Row Found / Row Not Found execution paths."
          ]
        },
        {
          "id": "print-inventory",
          "number": 4,
          "title": "Turn the Inventory Display Into PrintInventory",
          "goal": "Move the entire I-key inventory loop into one Function and call that Function from the Event Graph.",
          "why": "The Event Graph should describe what happens—Print Inventory—not contain every implementation detail needed to do it.",
          "steps": [
            {
              "title": "Create PrintInventory",
              "where": "BP_ThirdPersonCharacter → Functions → +",
              "do": "Create an Impure Function named PrintInventory with no inputs or outputs.",
              "check": "The Function can be called with a simple execution node.",
              "why": "This Function performs an action and does not need information from its caller.",
              "doList": [
                "Open BP_ThirdPersonCharacter.",
                "In My Blueprint → Functions click +.",
                "Name the Function PrintInventory.",
                "Do not add any inputs.",
                "Do not add any outputs.",
                "Leave Pure OFF because this Function executes a loop and Print String calls.",
                "Click Compile.",
                "Open the empty PrintInventory Function graph."
              ],
              "see": "The Function can be called with a simple execution node."
            },
            {
              "title": "Move the loop into the Function",
              "where": "PrintInventory Function graph",
              "do": "Get InventoryRows → For Each Loop. For each Array Element, call GetItemData and pass Array Element as ItemRow.",
              "check": "Each owned Row Name flows through your reusable GetItemData Function.",
              "why": "Functions can call other Functions; this is how small reusable jobs combine into a larger behaviour.",
              "doList": [
                "Inside PrintInventory drag InventoryRows into the graph as Get.",
                "Drag from the Array pin and create For Each Loop.",
                "Connect Function entry execution → For Each Loop execution input.",
                "Drag from Array Element and create/call GetItemData.",
                "Connect Array Element → GetItemData ItemRow.",
                "Connect For Each Loop Loop Body → GetItemData execution input.",
                "Leave GetItemData Found and ItemData outputs visible for formatting.",
                "Click Compile."
              ],
              "see": "Each owned Row Name flows through your reusable GetItemData Function."
            },
            {
              "title": "Format each valid item",
              "where": "PrintInventory → GetItemData result",
              "do": "If Found is True, Break ST_ItemData from ItemData. Format Text as {Name}: {Description}, connect DisplayName and Description, then Print String. If Found is False, do not print fake item details.",
              "check": "Valid inventory rows print readable player-facing information.",
              "why": "PrintInventory now reuses the lookup Function rather than rebuilding its Data Table logic.",
              "doList": [
                "After GetItemData add a Branch.",
                "Connect GetItemData execution output → Branch execution input.",
                "Connect GetItemData Found → Branch Condition.",
                "From ItemData create Break ST_ItemData.",
                "On Branch True add Format Text.",
                "Set Format Text to {Name}: {Description}.",
                "Connect DisplayName → Name and Description → Description.",
                "From Format Text Result create Print String; accept Text→String conversion if required.",
                "Connect Branch True execution → Print String.",
                "Leave Branch False without fake item text.",
                "Compile."
              ],
              "see": "Valid inventory rows print readable player-facing information."
            },
            {
              "title": "Replace the old I chain",
              "where": "BP_ThirdPersonCharacter → Event Graph",
              "do": "Keep the I keyboard event, delete the old For Each / Data Table implementation connected to it, and call PrintInventory instead.",
              "check": "The I event now has one meaningful Function call instead of a large node chain.",
              "why": "This is the visible benefit of refactoring: the Event Graph becomes easier to read.",
              "doList": [
                "Return to BP_ThirdPersonCharacter → Event Graph.",
                "Find the I Keyboard Event.",
                "Select the old For Each Loop / Data Table / Break Struct / Print String chain connected after I.",
                "Delete that old implementation but keep the I Keyboard Event.",
                "Drag from I Pressed and search for PrintInventory.",
                "Place the PrintInventory Function call.",
                "Connect I Pressed → PrintInventory.",
                "Click Compile.",
                "Press Play and press I once to confirm the Function now owns the display logic."
              ],
              "see": "The I event now has one meaningful Function call instead of a large node chain."
            },
            {
              "title": "Test several items",
              "where": "LV_EscapeRoom → Play",
              "do": "Collect at least two different items and press I. Consume Battery at the Generator and press I again.",
              "check": "Owned items print correctly and consumed Battery no longer appears.",
              "why": "The Function must match the behaviour of the old implementation.",
              "doList": [
                "Press Play.",
                "Collect Coin.",
                "Collect Wrench.",
                "Press I and confirm both print through PrintInventory.",
                "Collect Battery.",
                "Press I and confirm Battery also appears.",
                "Power the Generator so Battery is removed.",
                "Press I again.",
                "Confirm Coin and Wrench remain but Battery no longer prints."
              ],
              "see": "Owned items print correctly and consumed Battery no longer appears."
            }
          ],
          "flow": [
            "I pressed",
            "PrintInventory",
            "For Each InventoryRows",
            "GetItemData",
            "Format + Print"
          ],
          "test": [
            "I calls PrintInventory only.",
            "Multiple owned items display correctly.",
            "Consumed items disappear from the output."
          ],
          "doneWhen": "The Event Graph uses one PrintInventory call and all inventory-loop implementation lives inside the Function.",
          "common": [
            "Do not create a second InventoryRows variable inside the Function; use the Character's existing variable.",
            "If Found is False, inspect the Row Name rather than bypassing the check.",
            "Delete the old I implementation only after the Function produces the same result."
          ]
        },
        {
          "id": "refactor-pickup",
          "number": 5,
          "title": "Refactor BP_ItemPickup to Use Your Functions",
          "goal": "Replace direct Array and Data Table operations in the generic pickup with Character Function calls.",
          "why": "Outside Blueprints should ask the Character to manage its inventory and item data rather than knowing the internals themselves.",
          "steps": [
            {
              "title": "Keep the player Cast",
              "where": "BP_ItemPickup → overlap logic",
              "do": "Keep On Component Begin Overlap → Cast To BP_ThirdPersonCharacter. You still need a Character reference so you can call the Character's Functions.",
              "check": "The successful Cast output gives As BP Third Person Character.",
              "why": "Mission 4 will improve communication further; for this mission the Cast gives you the object that owns the Functions.",
              "doList": [
                "Open BP_ItemPickup → Event Graph.",
                "Find On Component Begin Overlap.",
                "Keep the Cast To BP_ThirdPersonCharacter connected to Other Actor.",
                "Keep the As BP Third Person Character reference available.",
                "Do not replace the Cast in this mission; the Character owns the Functions you need to call.",
                "Move the old Add Unique and Data Table nodes slightly aside.",
                "Compile before refactoring so you know the starting graph is clean.",
                "Now replace one old section at a time."
              ],
              "see": "The successful Cast output gives As BP Third Person Character."
            },
            {
              "title": "Replace Add Unique with AddItem",
              "where": "BP_ItemPickup → successful Cast path",
              "do": "Delete the direct Get InventoryRows → Add Unique chain. From As BP Third Person Character call AddItem and pass this pickup's ItemRow.",
              "check": "BP_ItemPickup no longer directly changes InventoryRows.",
              "why": "Inventory implementation is now owned by the Character Function.",
              "doList": [
                "In BP_ItemPickup locate Get InventoryRows → Add Unique.",
                "Disconnect the white execution wire from Add Unique.",
                "Drag from As BP Third Person Character and search for AddItem.",
                "Place AddItem.",
                "Drag ItemRow from My Blueprint into the graph as Get.",
                "Connect ItemRow → AddItem ItemRow.",
                "Connect Cast Succeeded execution → AddItem execution input.",
                "Delete the old Get InventoryRows → Add Unique nodes once AddItem is wired.",
                "Compile."
              ],
              "see": "BP_ItemPickup no longer directly changes InventoryRows."
            },
            {
              "title": "Replace direct Data Table lookup",
              "where": "BP_ItemPickup → after AddItem",
              "do": "Delete Get Data Table Row from the pickup. From the Character reference call GetItemData(ItemRow). Branch on Found.",
              "check": "BP_ItemPickup contains no DT_ItemData asset reference.",
              "why": "The Character Function now owns the Data Table lookup and failure handling.",
              "doList": [
                "Find the direct Get Data Table Row node in BP_ItemPickup.",
                "Disconnect it from the live execution path.",
                "Drag from As BP Third Person Character and search for GetItemData.",
                "Place GetItemData after AddItem.",
                "Connect AddItem execution output → GetItemData execution input.",
                "Connect ItemRow → GetItemData ItemRow.",
                "Add a Branch after GetItemData.",
                "Connect GetItemData Found → Branch Condition.",
                "Connect GetItemData execution output → Branch execution input.",
                "Delete the old direct Get Data Table Row node only after the Function call is connected.",
                "Compile."
              ],
              "see": "BP_ItemPickup contains no DT_ItemData asset reference."
            },
            {
              "title": "Use returned item data",
              "where": "BP_ItemPickup → Found True",
              "do": "Break returned ST_ItemData → PickupMessage → Print String → Destroy Actor. On Found False, do not Destroy Actor.",
              "check": "Valid items still show their own message and disappear; invalid rows remain so you can fix them.",
              "why": "The pickup now coordinates behaviour while reusable Functions perform the common jobs.",
              "doList": [
                "Drag from GetItemData ItemData and place Break ST_ItemData.",
                "Drag from PickupMessage and create Print String.",
                "Allow Text→String conversion if required.",
                "Connect Branch True execution → Print String.",
                "From Print String execution create Destroy Actor.",
                "Leave Branch False without Destroy Actor so bad data remains inspectable.",
                "Compile and Save.",
                "Read the final live path: overlap → Cast → AddItem → GetItemData → Found? → message → Destroy."
              ],
              "see": "Valid items still show their own message and disappear; invalid rows remain so you can fix them."
            },
            {
              "title": "Test three rows",
              "where": "LV_EscapeRoom → Play",
              "do": "Collect Coin, Fuse and Wrench generic pickup instances. Press I afterwards.",
              "check": "All three use correct messages/data and the inventory contains no duplicates.",
              "why": "A generic caller is only useful if the Functions work with several different inputs.",
              "doList": [
                "Return to LV_EscapeRoom.",
                "Make sure you have BP_ItemPickup instances set to Coin, Fuse and Wrench.",
                "Press Play.",
                "Collect Coin and confirm the correct message.",
                "Collect Fuse and confirm the correct message.",
                "Collect Wrench and confirm the correct message.",
                "Press I.",
                "Confirm PrintInventory shows all three with their Data Table descriptions.",
                "If one fails, check that placed instance ItemRow exactly matches a DT_ItemData row name."
              ],
              "see": "All three use correct messages/data and the inventory contains no duplicates."
            }
          ],
          "flow": [
            "Overlap",
            "Cast to Character",
            "AddItem(ItemRow)",
            "GetItemData(ItemRow)",
            "Found → message + destroy"
          ],
          "test": [
            "BP_ItemPickup no longer gets InventoryRows directly.",
            "BP_ItemPickup no longer uses Get Data Table Row directly.",
            "Coin/Fuse/Wrench still work."
          ],
          "doneWhen": "BP_ItemPickup is a small caller of Character Functions instead of containing inventory and Data Table implementation details.",
          "common": [
            "Pass the pickup's Instance Editable ItemRow into both Function calls.",
            "Do not Destroy an invalid pickup on the Found False path.",
            "If the Functions cannot be called from the Character reference, Compile BP_ThirdPersonCharacter and confirm the Functions are Public/default access."
          ]
        },
        {
          "id": "refactor-generator",
          "number": 6,
          "title": "Refactor the Generator",
          "goal": "Replace direct Array operations in BP_Generator with HasItem and RemoveItem Function calls.",
          "why": "The Generator cares whether the player owns Battery and whether it should consume it; it does not need to know how the inventory Array works.",
          "steps": [
            {
              "title": "Find the old Battery check",
              "where": "BP_Generator",
              "do": "Locate Get InventoryRows → Contains Battery. Leave the surrounding PowerOn logic in place.",
              "check": "You know exactly which nodes answer whether Battery is owned.",
              "why": "Refactor the smallest repeated chain rather than rewriting the whole Generator.",
              "doList": [
                "Open BP_Generator → Event Graph.",
                "Find the first PowerOn Branch and leave it alone.",
                "Find the later Get InventoryRows → Contains Battery chain.",
                "Find the success path where InventoryRows → Remove Item Battery occurs.",
                "Do not delete either chain yet.",
                "Move them slightly aside so you can wire the Function replacements next to them.",
                "Compile once so the starting graph is known-good.",
                "You will replace the check first, then the removal."
              ],
              "see": "You know exactly which nodes answer whether Battery is owned."
            },
            {
              "title": "Replace Contains with HasItem",
              "where": "BP_Generator → Character reference",
              "do": "Delete the direct InventoryRows Contains chain. Call HasItem with ItemRow = Battery and use its Result as the existing Battery Branch condition.",
              "check": "The Branch still has the same True/False behaviour but no direct Array access.",
              "why": "The Generator now asks the Character a question through a named Function.",
              "doList": [
                "Drag from As BP Third Person Character and search for HasItem.",
                "Place HasItem near the existing Battery Branch.",
                "Set HasItem ItemRow to Battery.",
                "Disconnect old Contains Return Value from the Battery Branch Condition.",
                "Connect HasItem Result → Battery Branch Condition.",
                "Delete the old Get InventoryRows → Contains Battery nodes.",
                "Click Compile.",
                "Check the Branch still has the same True and False execution paths as before."
              ],
              "see": "The Branch still has the same True/False behaviour but no direct Array access."
            },
            {
              "title": "Replace Remove Item with RemoveItem",
              "where": "BP_Generator → Battery success path",
              "do": "Delete direct InventoryRows → Remove Item. Call RemoveItem(Battery) before setting PowerOn True.",
              "check": "BP_Generator contains no direct InventoryRows Get node.",
              "why": "Consumption is also handled by the Character's reusable inventory API.",
              "doList": [
                "Find the success path after the Battery Branch True output.",
                "Disconnect the old InventoryRows → Remove Item Battery node.",
                "Drag from As BP Third Person Character and search for RemoveItem.",
                "Place RemoveItem.",
                "Set RemoveItem ItemRow to Battery.",
                "Connect Battery Branch True execution → RemoveItem execution input.",
                "Connect RemoveItem execution output → the existing Set PowerOn True path.",
                "Delete the old direct Remove Item nodes.",
                "Compile and Save."
              ],
              "see": "BP_Generator contains no direct InventoryRows Get node."
            },
            {
              "title": "Keep Generator-specific behaviour local",
              "where": "BP_Generator",
              "do": "Keep Set PowerOn True, Generator light visibility, sound/feedback and any Generator-specific visual logic in BP_Generator.",
              "check": "Only common inventory logic moved into Functions; Generator-specific behaviour remains readable here.",
              "why": "A good Function refactor does not move every node just because it can.",
              "doList": [
                "Stay in BP_Generator.",
                "Keep Set PowerOn True after RemoveItem.",
                "Keep the Point Light Set Visibility call in BP_Generator.",
                "Keep Power Restored! feedback in BP_Generator.",
                "Keep any Generator sound, animation or Niagara you added in BP_Generator.",
                "Do not move those visual/audio behaviours into HasItem or RemoveItem.",
                "Compile and Save.",
                "The Character Functions should manage inventory/state helpers; the Generator should still manage Generator behaviour."
              ],
              "see": "Only common inventory logic moved into Functions; Generator-specific behaviour remains readable here."
            },
            {
              "title": "Test all Generator states",
              "where": "LV_EscapeRoom → Play",
              "do": "Try Generator without Battery → collect Battery → power Generator → press I → return to Generator again.",
              "check": "Missing-Battery message works; Battery is consumed; Power remains on; repeated use is handled as before.",
              "why": "Refactoring must preserve gameplay behaviour.",
              "doList": [
                "Press Play without collecting Battery.",
                "Touch the Generator and confirm The generator needs a Battery. appears.",
                "Collect Battery.",
                "Press I and confirm Battery appears.",
                "Touch the Generator and confirm Power Restored! appears.",
                "Press I and confirm Battery has been removed.",
                "Touch the Generator again.",
                "Confirm Power is already on. appears.",
                "If any state is wrong, inspect the Function call inputs before changing Generator visuals."
              ],
              "see": "Missing-Battery message works; Battery is consumed; Power remains on; repeated use is handled as before."
            }
          ],
          "flow": [
            "Generator overlaps player",
            "HasItem(Battery)",
            "True → RemoveItem(Battery)",
            "PowerOn = True",
            "Generator feedback"
          ],
          "test": [
            "Generator fails without Battery.",
            "Generator succeeds with Battery.",
            "Battery is removed through RemoveItem.",
            "BP_Generator no longer reads InventoryRows directly."
          ],
          "doneWhen": "BP_Generator uses named Character Functions for inventory work while retaining its own Generator-specific state and feedback.",
          "common": [
            "Do not move PowerOn into HasItem; HasItem should only answer the inventory question.",
            "Do not remove the existing already-powered guard.",
            "If Battery is not consumed, check the RemoveItem input is exactly Battery."
          ]
        },
        {
          "id": "powered-item-function",
          "number": 7,
          "title": "Create CanUsePoweredItem and Refactor the Exit",
          "goal": "Create a reusable Function that combines PowerOn with HasItem(RequiredItem), then use it for the Exit Door.",
          "why": "A Function becomes much more reusable when an input changes what it checks. One RequiredItem input can support the Exit Key, Fuse or future powered tools.",
          "steps": [
            {
              "title": "Create CanUsePoweredItem",
              "where": "BP_ThirdPersonCharacter → Functions → +",
              "do": "Create Function CanUsePoweredItem. Input = RequiredItem (Name). Output = Result (Boolean). Enable Pure.",
              "check": "The Function accepts any item Row Name and returns True/False without execution pins.",
              "why": "This is a read-only condition check, so Pure is suitable.",
              "doList": [
                "Open BP_ThirdPersonCharacter.",
                "In My Blueprint → Functions click +.",
                "Name the Function CanUsePoweredItem.",
                "Select the Function entry node.",
                "Add Input RequiredItem of type Name.",
                "Add Output Result of type Boolean.",
                "Select the Function and tick Pure in Details.",
                "Click Compile.",
                "Open the CanUsePoweredItem Function graph."
              ],
              "see": "The Function accepts any item Row Name and returns True/False without execution pins."
            },
            {
              "title": "Compose existing logic",
              "where": "CanUsePoweredItem Function graph",
              "do": "Get PowerOn. Call HasItem and pass RequiredItem. Feed PowerOn and HasItem Result into Boolean AND. Connect AND result to the Return Node Result.",
              "check": "The Function returns True only when power is on AND the requested item is owned.",
              "why": "A Function can reuse another Function instead of rebuilding its internals.",
              "doList": [
                "Open the CanUsePoweredItem Function graph.",
                "Drag PowerOn from My Blueprint into the graph as Get.",
                "Place a HasItem Function call.",
                "Connect Function input RequiredItem → HasItem ItemRow.",
                "Right-click and add AND Boolean.",
                "Connect PowerOn → AND A.",
                "Connect HasItem Result → AND B.",
                "Connect AND Return Value → Return Node Result.",
                "Click Compile."
              ],
              "see": "The Function returns True only when power is on AND the requested item is owned."
            },
            {
              "title": "Refactor the Exit Door",
              "where": "BP_ExitDoor",
              "do": "Keep the Cast to BP_ThirdPersonCharacter. Delete the direct Get PowerOn + InventoryRows Contains ExitKey + AND chain. Call CanUsePoweredItem with RequiredItem = ExitKey and use Result for the existing Branch.",
              "check": "The exit decision is now represented by one clearly named Function call.",
              "why": "The door says what it needs without knowing how the Character stores inventory.",
              "doList": [
                "Open BP_ExitDoor → Event Graph.",
                "Keep On Component Begin Overlap and Cast To BP_ThirdPersonCharacter.",
                "Find the old Get PowerOn + InventoryRows Contains ExitKey + AND chain.",
                "Drag from As BP Third Person Character and call CanUsePoweredItem.",
                "Set RequiredItem to ExitKey.",
                "Disconnect the old AND result from the existing Branch Condition.",
                "Connect CanUsePoweredItem Result → Branch Condition.",
                "Delete the old direct PowerOn/Contains/AND condition nodes only after the Function call works.",
                "Keep the Branch True/False door behaviour unchanged.",
                "Compile and Save."
              ],
              "see": "The exit decision is now represented by one clearly named Function call."
            },
            {
              "title": "Keep door movement in the door",
              "where": "BP_ExitDoor → True path",
              "do": "Keep EXIT UNLOCKED feedback and door movement/animation in BP_ExitDoor. Do not move door visuals into the Character Function.",
              "check": "CanUsePoweredItem only answers the condition; the Door still owns Door behaviour.",
              "why": "Reusable condition logic and object-specific behaviour have different responsibilities.",
              "doList": [
                "Stay in BP_ExitDoor.",
                "Keep the False path message The exit needs power and the Key.",
                "Keep Do Once on the successful door-opening path.",
                "Keep EXIT UNLOCKED! feedback in BP_ExitDoor.",
                "Keep Get Actor Location / Set Actor Location or your door animation in BP_ExitDoor.",
                "Do not move mesh movement into BP_ThirdPersonCharacter.",
                "Compile and Save.",
                "CanUsePoweredItem should answer only True/False; BP_ExitDoor should still decide how the door behaves."
              ],
              "see": "CanUsePoweredItem only answers the condition; the Door still owns Door behaviour."
            },
            {
              "title": "Retest four Exit states",
              "where": "LV_EscapeRoom → Play / restart between cases",
              "do": "Test no power/no key; key only; power only; power + ExitKey.",
              "check": "Only power + ExitKey opens the Exit, exactly as before.",
              "why": "The new reusable Function must reproduce the original AND condition perfectly.",
              "doList": [
                "Test 1: no power and no ExitKey; Exit must stay locked.",
                "Restart the level.",
                "Test 2: collect ExitKey only; Exit must stay locked.",
                "Restart the level.",
                "Test 3: power the Generator but do not collect ExitKey; Exit must stay locked.",
                "Restart the level.",
                "Test 4: power the Generator and collect ExitKey.",
                "Touch the Exit and confirm it opens.",
                "Confirm the Function refactor has not changed the original four-state behaviour."
              ],
              "see": "Only power + ExitKey opens the Exit, exactly as before."
            }
          ],
          "flow": [
            "RequiredItem",
            "HasItem(RequiredItem)",
            "PowerOn",
            "AND",
            "Result"
          ],
          "test": [
            "CanUsePoweredItem is Pure.",
            "It calls HasItem rather than reading InventoryRows itself.",
            "Exit passes ExitKey and only opens with both requirements."
          ],
          "doneWhen": "The Exit Door uses one reusable CanUsePoweredItem(ExitKey) condition instead of rebuilding power + inventory logic.",
          "common": [
            "RequiredItem must feed HasItem; do not hard-code ExitKey inside the reusable Function.",
            "Keep the Function Pure because it should not consume the item or open a door.",
            "The Exit Door should still own its movement/animation."
          ]
        },
        {
          "id": "maintenance-door",
          "number": 8,
          "title": "Proof Build — Add a Fuse Maintenance Door",
          "goal": "Add a new powered puzzle gate using the reusable Functions instead of copying the Exit Door's old node chains.",
          "why": "The real test of refactoring is whether the next feature becomes faster and simpler to build.",
          "steps": [
            {
              "title": "Make sure Fuse can be collected",
              "where": "LV_EscapeRoom + BP_ItemPickup",
              "do": "Place or keep a BP_ItemPickup instance with ItemRow = Fuse. Test collecting it and press I to confirm Fuse appears.",
              "check": "Fuse is a valid DT_ItemData row and enters InventoryRows through AddItem.",
              "why": "The new gate needs an existing data-driven item to require.",
              "doList": [
                "Return to LV_EscapeRoom.",
                "Find or place a BP_ItemPickup instance.",
                "Select it and set ItemRow to Fuse.",
                "Press Play.",
                "Collect the Fuse.",
                "Confirm Fuse collected! appears.",
                "Press I.",
                "Confirm Fuse appears through PrintInventory.",
                "Stop Play mode."
              ],
              "see": "Fuse is a valid DT_ItemData row and enters InventoryRows through AddItem."
            },
            {
              "title": "Create BP_MaintenanceDoor",
              "where": "Content Drawer → Blueprint Class → Actor",
              "do": "Create BP_MaintenanceDoor. Add a Static Mesh and Box Collision. A stretched cube is enough for the door.",
              "check": "The Actor can be placed as a second blocked doorway/alcove in LV_EscapeRoom.",
              "why": "This is a new feature built after the refactor, so you can compare the amount of code required.",
              "doList": [
                "In the Content Drawer right-click → Blueprint Class → Actor.",
                "Name the new Blueprint BP_MaintenanceDoor.",
                "Open it.",
                "Click Add Component → Static Mesh.",
                "Choose a Cube and scale it into a simple door.",
                "Click Add Component → Box Collision.",
                "Move/scale Box Collision so the player overlaps it in front of the door.",
                "Set collision to overlap the Pawn/player and keep Generate Overlap Events enabled.",
                "Compile and Save.",
                "Place BP_MaintenanceDoor in a second doorway or alcove in LV_EscapeRoom."
              ],
              "see": "The Actor can be placed as a second blocked doorway/alcove in LV_EscapeRoom."
            },
            {
              "title": "Check the reusable condition",
              "where": "BP_MaintenanceDoor → Box Collision → On Component Begin Overlap",
              "do": "Cast Other Actor to BP_ThirdPersonCharacter. Call CanUsePoweredItem with RequiredItem = Fuse. Feed Result to a Branch.",
              "check": "The new door does not Get InventoryRows, Contains Fuse or build its own PowerOn AND chain.",
              "why": "One Function call replaces the repeated condition implementation.",
              "doList": [
                "Open BP_MaintenanceDoor and select Box Collision.",
                "In Details → Events click + beside On Component Begin Overlap.",
                "Drag from Other Actor and create Cast To BP_ThirdPersonCharacter.",
                "Connect Begin Overlap execution → Cast.",
                "Drag from As BP Third Person Character and call CanUsePoweredItem.",
                "Set RequiredItem to Fuse.",
                "Add a Branch.",
                "Connect Cast Succeeded execution → Branch execution input.",
                "Connect CanUsePoweredItem Result → Branch Condition.",
                "Click Compile."
              ],
              "see": "The new door does not Get InventoryRows, Contains Fuse or build its own PowerOn AND chain."
            },
            {
              "title": "Handle the locked path",
              "where": "BP_MaintenanceDoor → Branch False",
              "do": "Print String: Maintenance access needs power and a Fuse.",
              "check": "Visiting too early gives a useful message and the door stays closed.",
              "why": "The player needs feedback without exposing technical implementation details.",
              "doList": [
                "Find the Branch in BP_MaintenanceDoor.",
                "Drag from Branch False.",
                "Create Print String.",
                "Set In String to Maintenance access needs power and a Fuse.",
                "Compile.",
                "Press Play without power/Fuse.",
                "Touch the Maintenance Door trigger.",
                "Confirm the message appears and the door does not move."
              ],
              "see": "Visiting too early gives a useful message and the door stays closed."
            },
            {
              "title": "Consume Fuse and open the door",
              "where": "BP_MaintenanceDoor → Branch True",
              "do": "Call RemoveItem(Fuse) on the Character. Print String: Maintenance door unlocked! Move the door upward or rotate it using the same simple method you used for the Exit.",
              "check": "With PowerOn + Fuse, Fuse is removed and the Maintenance Door opens.",
              "why": "The new puzzle reuses both the condition Function and inventory mutation Function.",
              "doList": [
                "Find Branch True in BP_MaintenanceDoor.",
                "Drag from As BP Third Person Character and call RemoveItem.",
                "Set RemoveItem ItemRow to Fuse.",
                "Connect Branch True execution → RemoveItem.",
                "After RemoveItem create Print String Maintenance door unlocked!",
                "Get the door Actor Location or use your existing simple door movement method.",
                "Move the door upward or rotate it clear of the doorway.",
                "Connect the success execution path through the movement node.",
                "Compile and Save.",
                "Do not add direct InventoryRows Remove Item nodes; the door must use RemoveItem(Fuse)."
              ],
              "see": "With PowerOn + Fuse, Fuse is removed and the Maintenance Door opens."
            },
            {
              "title": "Prove the new feature is independent",
              "where": "LV_EscapeRoom → Play",
              "do": "Test Maintenance Door with: neither requirement; Fuse only; power only; power + Fuse. Then check that the main Exit still needs ExitKey and still works.",
              "check": "Maintenance Door and Exit use different RequiredItem values but share the same reusable Functions.",
              "why": "Parameterised Functions should support different gameplay objects without being rewritten.",
              "doList": [
                "Test Maintenance Door with no power and no Fuse; it must stay locked.",
                "Restart and collect Fuse only; it must stay locked.",
                "Restart and power the Generator only; it must stay locked.",
                "Restart, power the Generator and collect Fuse.",
                "Open the Maintenance Door and confirm Fuse is consumed.",
                "Press I and confirm Fuse is gone.",
                "Collect ExitKey.",
                "Go to the main Exit and confirm it still requires ExitKey and power.",
                "The two doors should share CanUsePoweredItem but pass different RequiredItem names."
              ],
              "see": "Maintenance Door and Exit use different RequiredItem values but share the same reusable Functions."
            }
          ],
          "flow": [
            "Maintenance Door overlap",
            "CanUsePoweredItem(Fuse)",
            "False → locked message",
            "True → RemoveItem(Fuse)",
            "Open Maintenance Door"
          ],
          "test": [
            "Fuse-only does not open the door.",
            "Power-only does not open the door.",
            "Power + Fuse opens it and consumes Fuse.",
            "Main Exit still requires ExitKey."
          ],
          "doneWhen": "A brand-new powered Fuse gate works using the existing HasItem / RemoveItem / CanUsePoweredItem Functions with no copied Array condition chain.",
          "common": [
            "Pass Fuse into RequiredItem; do not edit CanUsePoweredItem to mention Fuse.",
            "Do not accidentally consume ExitKey when opening the Maintenance Door.",
            "Keep this second area small—the proof is code reuse, not level size."
          ]
        },
        {
          "id": "final-test",
          "number": 9,
          "title": "Final Test — Prove the Refactor Made the Game Better",
          "goal": "Complete the whole game, confirm the old repeated implementations are gone and independently create one useful Function of your own.",
          "why": "A Function refactor is successful when behaviour is preserved, repeated implementation is reduced and the code becomes easier to extend.",
          "steps": [
            {
              "title": "Run the complete game from the Main Menu",
              "where": "LV_EscapeRoom → Play",
              "do": "Start normally. Try gates early. Collect Battery → power Generator → collect Fuse → open Maintenance Door → collect ExitKey → open Exit → Win screen → Play Again.",
              "check": "Every old feature and the new Maintenance Door work in one clean play-through.",
              "why": "The final architecture must support the complete player journey.",
              "doList": [
                "Press Play and start from WBP_MainMenu.",
                "Try the Generator, Exit and Maintenance Door too early and confirm all failure feedback works.",
                "Collect Battery.",
                "Power the Generator.",
                "Collect Fuse.",
                "Open the Maintenance Door and confirm Fuse is consumed.",
                "Collect ExitKey.",
                "Open the main Exit.",
                "Walk through the Exit Trigger and reach WBP_Win.",
                "Click PLAY AGAIN and confirm the whole level resets.",
                "Do not mark the mission complete until one full uninterrupted run succeeds."
              ],
              "see": "Every old feature and the new Maintenance Door work in one clean play-through."
            },
            {
              "title": "Audit direct InventoryRows manipulation",
              "where": "BP_ItemPickup, BP_Generator, BP_ExitDoor, BP_MaintenanceDoor",
              "do": "Search visually for direct Get InventoryRows nodes. The reusable gameplay actors should now call Character Functions instead. InventoryRows itself can still be used inside the Character Functions that own the system.",
              "check": "Common external actors no longer manipulate the Array directly.",
              "why": "The Character now owns its inventory implementation behind a small reusable Function API.",
              "doList": [
                "Open BP_ItemPickup and search visually for Get InventoryRows; the live pickup path should call AddItem instead.",
                "Open BP_Generator; the live path should call HasItem(Battery) and RemoveItem(Battery).",
                "Open BP_ExitDoor; the live condition should call CanUsePoweredItem(ExitKey).",
                "Open BP_MaintenanceDoor; the live condition should call CanUsePoweredItem(Fuse) and RemoveItem(Fuse).",
                "Use Find in Blueprints for InventoryRows if you want a wider check.",
                "Direct InventoryRows use is acceptable inside BP_ThirdPersonCharacter Functions that own the inventory implementation.",
                "Delete disconnected old direct-manipulation nodes from external gameplay actors.",
                "Compile every affected Blueprint."
              ],
              "see": "Common external actors no longer manipulate the Array directly."
            },
            {
              "title": "Audit direct Data Table lookups",
              "where": "BP_ItemPickup and ordinary gameplay Actors",
              "do": "Confirm common callers use GetItemData rather than each carrying their own Get Data Table Row DT_ItemData chain. Keep the table lookup inside GetItemData.",
              "check": "There is one clear authoritative item lookup Function.",
              "why": "Changing item-data lookup behaviour later now requires one edit instead of several.",
              "doList": [
                "Open BP_ItemPickup.",
                "Confirm the live pickup path calls GetItemData rather than Get Data Table Row directly.",
                "Open BP_ThirdPersonCharacter → PrintInventory.",
                "Confirm it calls GetItemData for each row.",
                "Use Find in Blueprints for Get Data Table Row.",
                "Keep the authoritative DT_ItemData lookup inside GetItemData.",
                "Remove disconnected duplicate lookup chains from ordinary gameplay actors.",
                "Compile and Save All."
              ],
              "see": "There is one clear authoritative item lookup Function."
            },
            {
              "title": "Clean and name your Function library",
              "where": "BP_ThirdPersonCharacter → My Blueprint → Functions",
              "do": "Confirm you have HasItem, AddItem, RemoveItem, GetItemData, PrintInventory and CanUsePoweredItem. Add useful Tooltips/Categories in Details if your version/workflow allows. Delete temporary keyboard test chains and disconnected old implementations. Compile and Save All.",
              "check": "The Function list reads like a small, understandable inventory/game-state API.",
              "why": "Naming and organisation are part of maintainable programming.",
              "doList": [
                "Open BP_ThirdPersonCharacter → My Blueprint → Functions.",
                "Confirm HasItem exists.",
                "Confirm AddItem exists.",
                "Confirm RemoveItem exists.",
                "Confirm GetItemData exists.",
                "Confirm PrintInventory exists.",
                "Confirm CanUsePoweredItem exists.",
                "Select each Function and add a short Tooltip/Category in Details if available in your editor layout.",
                "Delete any temporary H/J/R/T keyboard test chains from Event Graph.",
                "Delete disconnected old implementations.",
                "Click Compile and then File → Save All."
              ],
              "see": "The Function list reads like a small, understandable inventory/game-state API."
            },
            {
              "title": "Create one Function independently",
              "where": "BP_ThirdPersonCharacter",
              "do": "Create ONE extra useful Function without copying this guide node-for-node. Recommended: GetTotalInventoryValue → loop InventoryRows → GetItemData → add each ItemData.Value → return total Integer. Alternative: HasQuestItem, GetInventoryCount or another sensible read-only helper.",
              "check": "Your Function has a clear name, appropriate inputs/outputs, works in Play and is Pure only if it does not change state.",
              "why": "Independent adaptation proves you understand what a Function is for rather than only following supplied recipes.",
              "doList": [
                "Create a new Function in BP_ThirdPersonCharacter named GetTotalInventoryValue.",
                "Add an Integer output named TotalValue.",
                "Create a local Integer variable or accumulator named RunningTotal and start it at 0.",
                "Get InventoryRows and connect it to a For Each Loop.",
                "For each Array Element call GetItemData using the row name.",
                "Branch on GetItemData Found.",
                "On True, Break ST_ItemData and read Value.",
                "Add Value to RunningTotal and set RunningTotal to the new amount.",
                "From For Each Loop Completed, return RunningTotal through TotalValue.",
                "Compile.",
                "Temporarily call GetTotalInventoryValue from a keyboard event and Print String the result.",
                "Collect Coin/Wrench and prove the total changes.",
                "Remove the temporary keyboard test after the Function works."
              ],
              "see": "Your Function has a clear name, appropriate inputs/outputs, works in Play and is Pure only if it does not change state."
            },
            {
              "title": "Explain the before and after",
              "where": "Your project / teacher check",
              "do": "Be able to explain one real example: BEFORE the Generator got InventoryRows and searched it itself; AFTER it calls HasItem(Battery). Then explain why that makes future changes safer.",
              "check": "You can describe the benefit in terms of reuse, readability and one place to change logic.",
              "why": "The goal is not fewer nodes for its own sake; it is better organisation of responsibilities.",
              "doList": [
                "Open BP_Generator and point to the HasItem(Battery) call.",
                "Explain that BEFORE the Generator knew about InventoryRows and Contains.",
                "Explain that AFTER the Generator asks one named question: HasItem(Battery).",
                "Open BP_ItemPickup and point to AddItem and GetItemData.",
                "Explain that the pickup no longer knows how the Array or Data Table lookup is implemented.",
                "Describe the benefit as reuse: several actors call the same Functions.",
                "Describe the benefit as readability: the Function names state the intention.",
                "Describe the benefit as maintenance: changing inventory implementation later requires fewer edits.",
                "Be ready to show one Function graph and one simplified caller graph to your teacher."
              ],
              "see": "You can describe the benefit in terms of reuse, readability and one place to change logic."
            }
          ],
          "flow": [
            "Repeated node chains",
            "Small named Functions",
            "Functions call Functions",
            "Gameplay Actors call reusable API",
            "New features take less code"
          ],
          "test": [
            "Full Escape Room + Maintenance Door works.",
            "Common external actors no longer directly manipulate InventoryRows.",
            "Item lookup is centralised through GetItemData.",
            "Temporary test nodes are removed.",
            "One independent Function has been created and proven."
          ],
          "doneWhen": "The game behaves correctly, repeated logic has been replaced by clear Function calls, and you can extend the Function set independently.",
          "common": [
            "Do not make every Function Pure—only read-only calculations should be Pure.",
            "Do not move object-specific visuals/animations into generic Character Functions.",
            "If a refactor changes behaviour, compare against the working pre-refactor path and fix it before polishing."
          ],
          "challenges": [
            "Build GetTotalInventoryValue and display the total value of Coin/Wrench/other loot.",
            "Add an output to AddItem that reports whether the item was newly added, then let pickups react differently to duplicates.",
            "Create a Function Category such as Inventory for all inventory helpers so the Character stays organised.",
            "Add a RequiredItem Name variable to BP_MaintenanceDoor so the same door class can require Fuse, Wrench or another tool.",
            "Compare a Function and a Macro using Epic's current guidance, then explain why HasItem belongs as a Function in this project."
          ]
        }
      ],
      "guideRule": "Treat every numbered line as one action. Click, add, type or connect exactly what it says, then stop at YOU SHOULD NOW HAVE and prove the result before moving on.",
      "theoryLinks": [
        {
          "label": "Functions, Custom Events & Macros — theory",
          "href": "#/block/functions-events-macros"
        }
      ]
    }
  ]
};

window.UE5_SKILL_MISSIONS = {
  "version": "3.57.1",
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
              "why": "You need a reliable playable character before adding your own systems."
            },
            {
              "title": "Save the level with the correct name",
              "where": "File → Save Current Level As",
              "do": "Save the map as LV_EscapeRoom.",
              "check": "The Content Drawer shows LV_EscapeRoom and the level tab uses that name.",
              "why": "The restart button later will reopen this exact level by name."
            },
            {
              "title": "Block out one small room",
              "where": "Level Editor → Place Actors → Shapes → Cube",
              "do": "Use cubes for a floor, four walls, one exit door, one generator area and a few simple boxes/shelves. Keep everything in one small room.",
              "check": "The player can walk around the room and cannot walk through the walls.",
              "why": "This is a programming mission. The room only needs to support the puzzle."
            },
            {
              "title": "Plan where the puzzle pieces will go",
              "where": "Level viewport",
              "do": "Leave one obvious place for the Generator, one place for the Battery, one place for the Key and one clear Exit Door.",
              "check": "You can point at all four locations before you start coding.",
              "why": "A clear physical layout makes debugging the game logic much easier."
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
              "why": "The Array will hold item names such as Battery and Key."
            },
            {
              "title": "Temporarily add a Key with the keyboard",
              "where": "BP_ThirdPersonCharacter → Event Graph",
              "do": "Add a K keyboard event. Drag Inventory in as Get → drag from the Array pin → Add. Type Key into the Item input. After Add, Print String: Key added to Inventory.",
              "check": "Play and press K once. The printed message appears.",
              "why": "Testing the Array in isolation proves the container works before pickups are involved."
            },
            {
              "title": "Create an inventory inspection key",
              "where": "BP_ThirdPersonCharacter → Event Graph",
              "do": "Add an I keyboard event. Get Inventory → For Each Loop. Connect Array Element to Print String. Compile.",
              "check": "Play → press K → press I. Key prints on screen.",
              "why": "For Each Loop visits every value currently stored in the Array."
            },
            {
              "title": "Remove the temporary K test",
              "where": "BP_ThirdPersonCharacter → Event Graph",
              "do": "Delete only the temporary K → Add Key test chain. Keep the I → For Each Loop inspection chain.",
              "check": "Pressing K no longer creates fake items. I is still available for later debugging.",
              "why": "Real game items should now enter the inventory through pickups."
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
              "why": "The mesh represents the item; the collision detects the player."
            },
            {
              "title": "Create the overlap event",
              "where": "BP_Battery → select Sphere Collision → Details → Events",
              "do": "Add On Component Begin Overlap. From Other Actor create Cast To BP_ThirdPersonCharacter.",
              "check": "The white execution wire runs from Begin Overlap into the Cast.",
              "why": "The pickup should only change the inventory of the player character."
            },
            {
              "title": "Add Battery to the Array",
              "where": "BP_Battery → Event Graph",
              "do": "From As BP Third Person Character, Get Inventory. Drag from the Array pin → Add. Set Item to Battery.",
              "check": "The Add node is connected to the player's Inventory Array.",
              "why": "Battery is now a real value stored by the player."
            },
            {
              "title": "Give feedback and remove the pickup",
              "where": "BP_Battery → Event Graph",
              "do": "After Add, Print String: Battery Collected! Then call Destroy Actor with Self as the target.",
              "check": "The execution chain reaches Print String and then Destroy Actor.",
              "why": "The player needs confirmation and the same Battery must not be collected twice."
            },
            {
              "title": "Place and test it",
              "where": "LV_EscapeRoom",
              "do": "Drag BP_Battery into the room. Put it somewhere easy to reach for the first test.",
              "check": "Play → touch Battery → it disappears → press I → Battery prints.",
              "why": "This proves collision, casting and the Array are working together."
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
              "why": "The player needs one game-state value that remembers whether the Generator has been activated."
            },
            {
              "title": "Create BP_Generator",
              "where": "Content Drawer → Blueprint Class → Actor",
              "do": "Create BP_Generator. Add a Static Mesh, Box Collision and Point Light. Turn the Point Light visibility off by default.",
              "check": "The Generator has visible geometry, an overlap area and a light that begins hidden.",
              "why": "The light gives the player visible proof that the state changed."
            },
            {
              "title": "Stop a powered Generator running again",
              "where": "BP_Generator → Box Collision → On Component Begin Overlap",
              "do": "Cast Other Actor to BP_ThirdPersonCharacter. Get PowerOn and feed it into a Branch. From True, Print String: Power is already on.",
              "check": "The first Branch asks about PowerOn before checking the inventory.",
              "why": "Without this check the Generator would keep asking for Batteries after it has already been powered."
            },
            {
              "title": "Check for Battery",
              "where": "BP_Generator → False output of the PowerOn Branch",
              "do": "Get Inventory → Contains. Set Item to Battery. Feed the Boolean result into a second Branch.",
              "check": "The second Branch answers: does Inventory contain Battery?",
              "why": "Contains searches the Array and returns True or False."
            },
            {
              "title": "Handle the missing Battery",
              "where": "BP_Generator → Battery Branch → False",
              "do": "Print String: The generator needs a Battery.",
              "check": "You get a useful message if you visit the Generator first.",
              "why": "The player should understand what the puzzle needs."
            },
            {
              "title": "Consume the Battery and switch power on",
              "where": "BP_Generator → Battery Branch → True",
              "do": "Get Inventory → Remove Item → Battery. Then Set PowerOn to True on the player. Then Set Visibility on the Generator Point Light to True. Print String: Power Restored!",
              "check": "The Battery is removed, PowerOn becomes True and the light appears.",
              "why": "A used Battery should leave the inventory and the game must remember the new powered state."
            },
            {
              "title": "Test all three states",
              "where": "LV_EscapeRoom → Play",
              "do": "Test Generator without Battery. Restart. Collect Battery and use Generator. Walk away and return to Generator.",
              "check": "You see: needs Battery → Power Restored → power is already on.",
              "why": "Testing every branch catches logic errors before the exit door depends on this system."
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
              "why": "Duplicating a proven pickup avoids rebuilding identical collision logic."
            },
            {
              "title": "Place the Key",
              "where": "LV_EscapeRoom",
              "do": "Put BP_Key somewhere the player has to look for, such as a shelf, desk or behind a few boxes.",
              "check": "You can still reach it without special movement or extra code.",
              "why": "The game needs a small exploration step without turning this into a level-design project."
            },
            {
              "title": "Create ItemDescriptions",
              "where": "BP_ThirdPersonCharacter → My Blueprint",
              "do": "Create a variable called ItemDescriptions. Set the Key type to String and change the container type to Map. Set the Map Value type to String. Compile.",
              "check": "ItemDescriptions shows a Map container with String → String types.",
              "why": "Each unique item name can now point to one description."
            },
            {
              "title": "Add the Map entries",
              "where": "BP_ThirdPersonCharacter → ItemDescriptions → Default Value",
              "do": "Add Battery → A heavy Battery. It might power something. Add Key → A small metal Key. It looks important.",
              "check": "The Map contains two unique keys: Battery and Key.",
              "why": "Maps store key-value pairs, so one item name can retrieve its matching information."
            },
            {
              "title": "Test collecting both items",
              "where": "LV_EscapeRoom → Play",
              "do": "Collect Battery and Key before using the Generator. Press I.",
              "check": "The Inventory Array can hold both Battery and Key at the same time.",
              "why": "You now have multiple values in the Array ready to be matched against the Map."
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
              "why": "Array Element gives you the current item name during each loop."
            },
            {
              "title": "Find the matching Map value",
              "where": "Same Event Graph",
              "do": "Get ItemDescriptions. Drag from the Map pin → Find. Connect the For Each Loop Array Element into the Find Key input.",
              "check": "The Map Find node uses the current inventory item as its search key.",
              "why": "Find retrieves the value associated with that Map key."
            },
            {
              "title": "Print the description",
              "where": "Same Event Graph",
              "do": "Connect the value returned by Find to Print String. Keep the Print String execution connected to Loop Body.",
              "check": "Pressing I prints one matching description for each item currently owned.",
              "why": "The loop provides item names; the Map turns those names into useful data."
            },
            {
              "title": "Prove the Battery really leaves",
              "where": "LV_EscapeRoom → Play",
              "do": "Collect Battery and Key. Press I. Use the Generator. Press I again.",
              "check": "Before Generator: Battery and Key descriptions print. After Generator: only the Key description prints.",
              "why": "This proves Remove Item changes the Array and the Map lookup reacts to the new contents."
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
              "why": "The door is the physical gate for the final condition."
            },
            {
              "title": "Read both player conditions",
              "where": "BP_ExitDoor → Box Collision → On Component Begin Overlap",
              "do": "Cast Other Actor to BP_ThirdPersonCharacter. From the player get PowerOn. Also Get Inventory → Contains → Key.",
              "check": "You now have two Boolean results: PowerOn and Contains Key.",
              "why": "The exit needs two independent requirements."
            },
            {
              "title": "Combine them with AND",
              "where": "BP_ExitDoor → Event Graph",
              "do": "Create an AND Boolean node. Connect PowerOn to A and Contains Key to B. Connect the AND result to a Branch.",
              "check": "The Branch is True only when both player conditions are True.",
              "why": "AND is the correct logic when every requirement must be satisfied."
            },
            {
              "title": "Handle the locked result",
              "where": "Exit Branch → False",
              "do": "Print String: The exit needs power and the Key.",
              "check": "Going to the exit too early explains why it stays shut.",
              "why": "Clear feedback prevents the player thinking the door is broken."
            },
            {
              "title": "Open the door once",
              "where": "Exit Branch → True",
              "do": "Add a Do Once node. After it, Print String: EXIT UNLOCKED! Get Actor Location → add Vector (0, 0, 300) → Set Actor Location.",
              "check": "The first successful overlap moves the door upward 300 units and later overlaps do not keep moving it.",
              "why": "Do Once prevents repeated overlaps from lifting the door again and again."
            },
            {
              "title": "Test every combination",
              "where": "LV_EscapeRoom → Play / Restart",
              "do": "Test: nothing completed; Key only; power only; then power + Key.",
              "check": "Only the fourth test opens the door.",
              "why": "This proves your Boolean logic instead of only proving the happy path."
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
              "why": "The player gets context before the game begins."
            },
            {
              "title": "Show the menu on BeginPlay",
              "where": "LV_EscapeRoom → Open Level Blueprint",
              "do": "Event BeginPlay → Get Player Controller → Create Widget (WBP_MainMenu, Owning Player = Player Controller) → Add to Viewport. Then Set Input Mode UI Only using the same Player Controller and set Show Mouse Cursor True.",
              "check": "Press Play. The menu appears, the cursor is visible and the character does not move.",
              "why": "UI Only stops gameplay input while the menu is active. Epic's UE5.8 widget guidance uses these Set Input Mode nodes for this exact kind of handoff."
            },
            {
              "title": "Create WBP_Objective",
              "where": "Content Drawer → User Interface → Widget Blueprint",
              "do": "Create WBP_Objective. Add small text in a corner: OBJECTIVE: Restore power, find the Key and escape.",
              "check": "The text is readable but does not cover the centre of the screen.",
              "why": "A simple persistent objective keeps the player oriented without adding another complicated system."
            },
            {
              "title": "Make START GAME work",
              "where": "WBP_MainMenu → START GAME → On Clicked",
              "do": "Get Player Controller. Remove From Parent. Create Widget WBP_Objective using that Player Controller → Add to Viewport. Set Input Mode Game Only. Set Show Mouse Cursor False.",
              "check": "Click START GAME. The menu disappears, the objective appears and movement works again.",
              "why": "The game now has a clean transition from menu input to gameplay input."
            },
            {
              "title": "Make QUIT work",
              "where": "WBP_MainMenu → QUIT → On Clicked",
              "do": "Get Player Controller → Quit Game.",
              "check": "Use Standalone Game if you want to verify quitting without closing the editor preview unexpectedly.",
              "why": "The menu has a complete second action rather than a dead button."
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
              "why": "Crossing this volume will be the actual win condition."
            },
            {
              "title": "Create WBP_Win",
              "where": "Content Drawer → User Interface → Widget Blueprint",
              "do": "Create WBP_Win. Add YOU ESCAPED!, a PLAY AGAIN button and a QUIT button.",
              "check": "The screen clearly looks like the end of the game.",
              "why": "The player needs confirmation that the objective is complete."
            },
            {
              "title": "Show the Win screen",
              "where": "BP_ExitTrigger → Box Collision → On Component Begin Overlap",
              "do": "Cast Other Actor to BP_ThirdPersonCharacter. On success: Get Player Controller → Create Widget WBP_Win → Add to Viewport → Set Input Mode UI Only → Show Mouse Cursor True.",
              "check": "After opening the door and walking through, YOU ESCAPED! appears and gameplay input stops.",
              "why": "The win state should take control away from the running game and hand it to the UI."
            },
            {
              "title": "Make PLAY AGAIN restart everything",
              "where": "WBP_Win → PLAY AGAIN → On Clicked",
              "do": "Use Open Level (by Name). Level Name = LV_EscapeRoom.",
              "check": "Play Again reloads the map, returns to the Main Menu and resets Inventory, PowerOn, Generator, Key and Door.",
              "why": "Reloading the level gives you a clean restart with very little code."
            },
            {
              "title": "Make the Win screen QUIT button work",
              "where": "WBP_Win → QUIT → On Clicked",
              "do": "Get Player Controller → Quit Game.",
              "check": "The button is wired and no dead UI remains.",
              "why": "The end screen now gives the player both sensible choices."
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
              "why": "This is the real acceptance test for the game."
            },
            {
              "title": "Check the Array",
              "where": "During the full play-through",
              "do": "Use I before and after powering the Generator.",
              "check": "Battery appears while owned and disappears after being consumed. Key remains until the end.",
              "why": "The Inventory Array should represent the player's current items, not their history."
            },
            {
              "title": "Check the Map",
              "where": "During the full play-through",
              "do": "Use I with Battery and Key collected.",
              "check": "Each owned item retrieves the correct description from ItemDescriptions.",
              "why": "The Map should be doing real work inside the finished game."
            },
            {
              "title": "Make one independent improvement",
              "where": "Anywhere in your project",
              "do": "Choose ONE: add a Coin and Map description; add pickup/generator/door sounds; replace the Print inventory with a Widget; add another locked door; add a five-minute timer; improve the Generator visual feedback.",
              "check": "Your improvement works and does not break the original escape route.",
              "why": "Changing a working system is stronger evidence of understanding than copying it once."
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
      "sequence": 1
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
              "why": "Mission 2 improves the existing project instead of creating another disconnected exercise."
            },
            {
              "title": "Run one clean play-through",
              "where": "LV_EscapeRoom → Play",
              "do": "Start from the Main Menu. Collect Battery → power Generator → collect Key → open Exit → reach Win screen → Play Again.",
              "check": "The complete game works without editing anything during Play.",
              "why": "This gives you a working baseline before the refactor."
            },
            {
              "title": "Find the old item storage",
              "where": "BP_ThirdPersonCharacter",
              "do": "Locate the old Inventory String Array and ItemDescriptions Map. Also inspect BP_Battery, BP_Key, BP_Generator and BP_ExitDoor for typed words such as Battery, Key and pickup messages.",
              "check": "You can point to at least three places where item information is typed directly into Blueprint logic.",
              "why": "This is the hard-coding problem the new system will solve."
            },
            {
              "title": "Do not delete anything yet",
              "where": "All Mission 1 Blueprints",
              "do": "Leave Inventory and ItemDescriptions connected. You will build the replacement beside them and remove the old system only after the new one works.",
              "check": "The original game still compiles exactly as before.",
              "why": "Keeping the old path temporarily gives you a safe fallback while migrating."
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
              "why": "Keeping data assets together makes the system easier to find and maintain."
            },
            {
              "title": "Create the Struct asset",
              "where": "Content Drawer → Add (+) → Blueprints → Structure",
              "do": "Create a User Defined Structure named ST_ItemData and open it.",
              "check": "ST_ItemData opens in the Structure editor.",
              "why": "This asset defines the columns each item row will contain."
            },
            {
              "title": "Add DisplayName and Description",
              "where": "ST_ItemData",
              "do": "Add DisplayName of type Text and Description of type Text.",
              "check": "Both fields appear with Text as their type.",
              "why": "The internal row ID can stay code-friendly while player-facing text can be readable."
            },
            {
              "title": "Add the feedback messages",
              "where": "ST_ItemData",
              "do": "Add PickupMessage of type Text and UseMessage of type Text.",
              "check": "The Struct now has four Text fields.",
              "why": "Pickup/use wording should be content data rather than typed repeatedly into graphs."
            },
            {
              "title": "Add gameplay metadata",
              "where": "ST_ItemData",
              "do": "Add IsQuestItem of type Boolean and Value of type Integer. Save the Struct.",
              "check": "ST_ItemData contains exactly DisplayName, Description, PickupMessage, UseMessage, IsQuestItem and Value.",
              "why": "The same row can now hold both player-facing information and simple gameplay metadata."
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
              "why": "Every row in this table now follows the same item definition."
            },
            {
              "title": "Add the Battery row",
              "where": "DT_ItemData → Add row",
              "do": "Row Name = Battery. DisplayName = Battery. Description = A heavy battery. It looks powerful enough to run the generator. PickupMessage = Battery collected! UseMessage = The battery powers the generator. IsQuestItem = True. Value = 0.",
              "check": "Battery appears as a row and all six values are filled correctly.",
              "why": "This moves Battery information into one authoritative record."
            },
            {
              "title": "Add the ExitKey row",
              "where": "DT_ItemData → Add row",
              "do": "Row Name = ExitKey. DisplayName = Exit Key. Description = A small metal key. It looks like it belongs to the exit door. PickupMessage = Exit Key collected! UseMessage = The key unlocks the exit. IsQuestItem = True. Value = 0.",
              "check": "The internal ID is ExitKey while the player-facing DisplayName is Exit Key.",
              "why": "Row Name can be stable and code-friendly without controlling the text the player sees."
            },
            {
              "title": "Add Coin and Fuse rows",
              "where": "DT_ItemData → Add row",
              "do": "Coin: DisplayName Old Coin; Description An old coin. It does not seem useful, but it might be worth something.; PickupMessage Old Coin collected!; UseMessage There is nowhere obvious to use this.; IsQuestItem False; Value 100. Fuse: DisplayName Fuse; Description A replacement electrical fuse.; PickupMessage Fuse collected!; UseMessage This looks like part of an electrical system.; IsQuestItem True; Value 0.",
              "check": "DT_ItemData now has Battery, ExitKey, Coin and Fuse rows.",
              "why": "Multiple rows prove the table is a reusable content store rather than a Battery-only trick."
            },
            {
              "title": "Save the table",
              "where": "DT_ItemData",
              "do": "Save DT_ItemData and close/reopen it once.",
              "check": "All four rows and their values are still present.",
              "why": "You want to catch an unsaved table before any Blueprint depends on it."
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
              "why": "Names match the Row Name input used by Data Table lookups."
            },
            {
              "title": "Create a temporary lookup test",
              "where": "BP_ThirdPersonCharacter → Event Graph",
              "do": "Add a temporary T keyboard event. Add Get Data Table Row. Set Data Table = DT_ItemData and Row Name = Battery.",
              "check": "Get Data Table Row exposes Row Found, Row Not Found and an Out Row matching ST_ItemData.",
              "why": "A tiny isolated test proves the table connection before you change real gameplay."
            },
            {
              "title": "Read the returned Struct",
              "where": "BP_ThirdPersonCharacter → temporary T test",
              "do": "From Out Row create Break ST_ItemData. From Description, connect to Print String. If Unreal needs a conversion, use the Text-to-String conversion it offers. Connect T execution through Get Data Table Row Row Found to Print String.",
              "check": "The execution path only prints after Row Found.",
              "why": "Break ST_ItemData exposes each field stored in the returned row."
            },
            {
              "title": "Run the lookup",
              "where": "LV_EscapeRoom → Play",
              "do": "Press T once.",
              "check": "The screen prints: A heavy battery. It looks powerful enough to run the generator.",
              "why": "This proves Blueprint is reading live item content from DT_ItemData."
            },
            {
              "title": "Delete only the temporary T test",
              "where": "BP_ThirdPersonCharacter",
              "do": "After the test works, delete the temporary T chain. Keep InventoryRows.",
              "check": "The graph is clean and InventoryRows remains.",
              "why": "Real gameplay will now perform the lookups."
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
              "why": "Add Unique prevents accidental duplicate ownership of the same row ID."
            },
            {
              "title": "Read the Battery pickup message",
              "where": "BP_Battery → after Add Unique",
              "do": "Add Get Data Table Row: DT_ItemData, Row Name Battery. From Row Found → Break ST_ItemData → PickupMessage → Print String (use Text-to-String conversion if required) → Destroy Actor.",
              "check": "The Print node no longer contains the words Battery collected! typed directly into it.",
              "why": "Changing the table should now change the message without editing BP_Battery."
            },
            {
              "title": "Test Battery before removing old logic",
              "where": "LV_EscapeRoom → Play",
              "do": "Collect Battery. Confirm the message appears. Temporarily inspect InventoryRows if needed with a breakpoint/watch or a simple debug loop.",
              "check": "InventoryRows contains Battery and the pickup disappears.",
              "why": "You migrate one system safely before deleting its previous path."
            },
            {
              "title": "Upgrade BP_Key",
              "where": "BP_Key → overlap logic",
              "do": "Repeat the same pattern using InventoryRows → Add Unique with Item = ExitKey. Get DT_ItemData row ExitKey and print its PickupMessage before Destroy Actor.",
              "check": "Collecting the physical Key prints Exit Key collected! from the table and stores ExitKey in InventoryRows.",
              "why": "The internal row ID and player-facing name are now properly separated."
            },
            {
              "title": "Prove the message is data-driven",
              "where": "DT_ItemData → Battery row",
              "do": "Temporarily change Battery PickupMessage to Power Cell acquired! Save and Play. Collect Battery, then change it back to Battery collected! after the proof.",
              "check": "The new wording appears without changing BP_Battery.",
              "why": "This is direct evidence that the Blueprint is reading data rather than hard-coded text."
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
              "why": "The puzzle now asks about row IDs rather than old String inventory entries."
            },
            {
              "title": "Upgrade the Exit check",
              "where": "BP_ExitDoor",
              "do": "Replace the old Inventory Contains Key check with InventoryRows → Contains → ExitKey. Keep the existing PowerOn AND Key condition and door-opening logic.",
              "check": "Power only = locked; ExitKey only = locked; Power + ExitKey = opens.",
              "why": "The final puzzle gate is now using the new inventory system."
            },
            {
              "title": "Upgrade the I inventory loop",
              "where": "BP_ThirdPersonCharacter → I key debug/display chain",
              "do": "Replace the old Inventory Array with InventoryRows → For Each Loop. For each Array Element, call Get Data Table Row with DT_ItemData and connect Array Element to Row Name.",
              "check": "Each stored row name successfully reaches Row Found.",
              "why": "The array stores only IDs; the Data Table supplies the human-readable information."
            },
            {
              "title": "Display real item information",
              "where": "Inside the InventoryRows For Each Loop",
              "do": "Break ST_ItemData. Use Format Text with {Name}: {Description}. Connect DisplayName and Description. Send the formatted result to Print String, converting Text to String if needed.",
              "check": "Owning ExitKey prints something like Exit Key: A small metal key... rather than just ExitKey.",
              "why": "One lookup now gives the inventory all player-facing data it needs."
            },
            {
              "title": "Regression-test the original puzzle",
              "where": "LV_EscapeRoom → Play",
              "do": "Collect Battery → press I → use Generator → press I → collect Key → press I → open Exit.",
              "check": "Battery disappears from the displayed inventory when consumed; Exit Key remains; the door opens correctly.",
              "why": "This proves the new data path supports the complete Mission 1 loop."
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
              "why": "This will become the reusable pickup class for many item rows."
            },
            {
              "title": "Create ItemRow",
              "where": "BP_ItemPickup → My Blueprint",
              "do": "Create variable ItemRow. Type = Name. Enable Instance Editable (open-eye icon / Instance Editable in Details). Compile.",
              "check": "Placed BP_ItemPickup instances expose ItemRow in their Details panel.",
              "why": "Each placed instance can point at a different Data Table row without changing the Blueprint graph."
            },
            {
              "title": "Add the selected row to the player",
              "where": "BP_ItemPickup → Sphere Collision → On Component Begin Overlap",
              "do": "Cast Other Actor to BP_ThirdPersonCharacter. Get InventoryRows → Add Unique. Connect ItemRow into the Item input instead of typing a fixed row name.",
              "check": "The Add Unique Item pin is fed by the ItemRow variable.",
              "why": "The same logic can now collect any row name assigned to the placed instance."
            },
            {
              "title": "Read the selected row data",
              "where": "BP_ItemPickup → after Add Unique",
              "do": "Get Data Table Row using DT_ItemData. Connect ItemRow to Row Name. Row Found → Break ST_ItemData → PickupMessage → Print String → Destroy Actor.",
              "check": "No item-specific name or message is typed into this graph.",
              "why": "Both identity and feedback now come from the selected data row."
            },
            {
              "title": "Handle bad data",
              "where": "BP_ItemPickup → Get Data Table Row",
              "do": "From Row Not Found, Print String: ERROR: Item data not found! Do not Destroy Actor on the failure path.",
              "check": "A bad ItemRow gives a clear error and leaves the pickup available to inspect/fix.",
              "why": "Reusable systems need a useful failure state, not silent breakage."
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
              "why": "The generic Blueprint is now driven by the Coin row."
            },
            {
              "title": "Place a Fuse instance",
              "where": "LV_EscapeRoom → duplicate the placed BP_ItemPickup",
              "do": "Move the duplicate elsewhere and set ItemRow = Fuse. Change its simple mesh/material/scale if useful; do not edit the Blueprint graph.",
              "check": "It prints Fuse collected! and I displays the Fuse description.",
              "why": "A second item proves this is genuinely reusable."
            },
            {
              "title": "Create a brand-new Wrench row",
              "where": "DT_ItemData",
              "do": "Add Row Name Wrench. DisplayName = Maintenance Wrench. Description = A heavy wrench left by the maintenance crew. PickupMessage = Maintenance Wrench collected! UseMessage = There is nothing to repair here yet. IsQuestItem = False. Value = 50. Save.",
              "check": "Wrench exists as a complete new row.",
              "why": "You are adding content before writing any new pickup logic."
            },
            {
              "title": "Add the Wrench without coding a new pickup",
              "where": "LV_EscapeRoom",
              "do": "Duplicate BP_ItemPickup again and set ItemRow = Wrench. Do not open the BP_ItemPickup graph.",
              "check": "Play → collect Wrench → correct message appears → I displays Maintenance Wrench and its description.",
              "why": "This proves new item content can be introduced through data and an existing reusable system."
            },
            {
              "title": "Perform the missing-row test",
              "where": "One temporary BP_ItemPickup instance",
              "do": "Set ItemRow = ThisDoesNotExist and Play. Touch it, observe the error, then delete/fix the temporary test instance.",
              "check": "ERROR: Item data not found! appears and the bad pickup does not silently disappear.",
              "why": "You have proved both the success path and the failure path."
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
              "why": "Deleting a variable while something still uses it will create broken nodes."
            },
            {
              "title": "Search for ItemDescriptions use",
              "where": "BP_ThirdPersonCharacter and any inventory display logic",
              "do": "Confirm descriptions now come from Get Data Table Row and Break ST_ItemData, not the old Map Find node.",
              "check": "No live graph reads ItemDescriptions.",
              "why": "DT_ItemData has replaced the description Map."
            },
            {
              "title": "Delete ItemDescriptions",
              "where": "BP_ThirdPersonCharacter → My Blueprint",
              "do": "Delete the unused ItemDescriptions variable. Compile and fix any remaining references if Unreal reports them.",
              "check": "The character compiles with no ItemDescriptions variable.",
              "why": "The description data now has one source of truth."
            },
            {
              "title": "Delete the old Inventory String Array",
              "where": "BP_ThirdPersonCharacter → My Blueprint",
              "do": "Delete the unused Inventory variable. Compile. If anything breaks, undo and migrate that remaining use to InventoryRows first.",
              "check": "The character and dependent Blueprints compile without the old Inventory.",
              "why": "InventoryRows is now the only runtime inventory ID list."
            },
            {
              "title": "Clean and label the new graphs",
              "where": "Changed Blueprint Event Graphs",
              "do": "Delete disconnected test nodes. Add comment boxes such as ADD ITEM TO INVENTORY, LOOK UP ITEM DATA, CHECK GENERATOR REQUIREMENT, CHECK EXIT REQUIREMENTS and DISPLAY INVENTORY. Save All.",
              "check": "There are no obvious disconnected migration leftovers and each major system is readable.",
              "why": "Readable graphs make the next refactor—Functions—much easier."
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
              "why": "The refactor must preserve player behaviour."
            },
            {
              "title": "Check optional generic items",
              "where": "During the same play-through",
              "do": "Collect Coin, Fuse and Wrench. Press I after collecting them.",
              "check": "Each item displays the correct DT_ItemData DisplayName and Description.",
              "why": "The generic pickup and table must work beyond the two original quest items."
            },
            {
              "title": "Prove the Data Table is authoritative",
              "where": "DT_ItemData → Wrench row",
              "do": "Change Wrench Value from 50 to 75 and slightly alter its Description. Save. Play again and inspect Wrench through I. Do not edit BP_ItemPickup.",
              "check": "The new Description appears immediately from the same pickup Blueprint.",
              "why": "Game content can now change independently of the reusable pickup code."
            },
            {
              "title": "Explain the architecture",
              "where": "Your project / to your teacher or partner",
              "do": "Be able to explain this chain in your own words: ItemRow Name → InventoryRows → DT_ItemData → ST_ItemData → DisplayName/Description/other fields.",
              "check": "You can describe what the Struct does, what the Data Table does and why the Array only stores row IDs.",
              "why": "Understanding the relationship matters more than memorising node names."
            },
            {
              "title": "Make one independent data extension",
              "where": "ST_ItemData / DT_ItemData",
              "do": "Choose ONE: add Weight Float; add Icon Texture2D; add Category Name/Text; or add another useful data field. Update at least two rows and display/use the new field somewhere simple.",
              "check": "Your new field is visible in the Struct, table rows and one Blueprint lookup.",
              "why": "Adapting the system independently is stronger evidence than copying the supplied rows."
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
              "why": "Mission 3 is a code-quality refactor of the game you already built."
            },
            {
              "title": "Run one clean Mission 2 play-through",
              "where": "LV_EscapeRoom → Play",
              "do": "Main Menu → collect Battery → inspect inventory → power Generator → collect ExitKey → open Exit → reach Win screen. Also collect one generic item such as Coin or Wrench.",
              "check": "The complete game still works before you change any logic.",
              "why": "You need a known-good baseline so new bugs can be traced to this refactor."
            },
            {
              "title": "Find repeated inventory checks",
              "where": "BP_Generator, BP_ExitDoor and any other item-gated Blueprint",
              "do": "Find each place that gets InventoryRows and then uses Contains. Do not change it yet. Notice that the same job is being rebuilt with a different item name.",
              "check": "You can identify at least two separate Contains checks against InventoryRows.",
              "why": "This repeated question—does the player own this row?—should become one reusable Function."
            },
            {
              "title": "Find repeated item-data lookups",
              "where": "BP_ItemPickup and BP_ThirdPersonCharacter inventory display",
              "do": "Locate Get Data Table Row → DT_ItemData → Break ST_ItemData chains. Notice that several graphs know how to fetch item data.",
              "check": "You can point to more than one place that reads DT_ItemData.",
              "why": "The lookup rules should live in one place so future changes are easier."
            },
            {
              "title": "Keep the old logic for now",
              "where": "All affected Blueprints",
              "do": "Do not delete any repeated node chain yet. You will replace and test each chain one at a time.",
              "check": "All Blueprints still compile and the game still plays.",
              "why": "Safe refactoring changes structure without changing behaviour."
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
              "why": "Inputs let callers tell the Function which item to check; the output sends the answer back."
            },
            {
              "title": "Make HasItem Pure",
              "where": "BP_ThirdPersonCharacter → select HasItem → Details",
              "do": "Enable Pure for HasItem.",
              "check": "The HasItem call node uses data pins rather than needing white execution wires.",
              "why": "HasItem only reads InventoryRows and returns an answer. It does not change the game state, so a Pure Function is appropriate."
            },
            {
              "title": "Build the Function logic",
              "where": "HasItem Function graph",
              "do": "Get InventoryRows → Contains. Connect the Function input ItemRow to Contains Item. Connect the Contains Boolean result to the Return Node output Result.",
              "check": "The complete Function is essentially InventoryRows Contains ItemRow → Result.",
              "why": "All inventory membership checks now have one authoritative implementation."
            },
            {
              "title": "Test HasItem before changing the game",
              "where": "BP_ThirdPersonCharacter → Event Graph",
              "do": "Create a temporary H keyboard event → Branch. Use HasItem with ItemRow = Battery as the Branch Condition. True → Print BATTERY FOUND. False → Print NO BATTERY.",
              "check": "Before collecting Battery, H prints NO BATTERY. After collecting Battery, H prints BATTERY FOUND.",
              "why": "Testing the Function independently makes later refactoring safer."
            },
            {
              "title": "Remove the temporary H test",
              "where": "BP_ThirdPersonCharacter → Event Graph",
              "do": "Delete the temporary H test chain after both results have been proven. Keep the HasItem Function.",
              "check": "No temporary keyboard test remains and HasItem still compiles.",
              "why": "The Function is now ready for real gameplay callers."
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
              "why": "Functions that change state are Impure and execute through normal execution wires."
            },
            {
              "title": "Build AddItem",
              "where": "AddItem Function graph",
              "do": "Get InventoryRows → Add Unique. Connect ItemRow to the Item input. Connect the Function execution path through Add Unique to the Return Node.",
              "check": "Calling AddItem with Coin adds Coin once and calling it again does not create a duplicate.",
              "why": "Add Unique keeps the inventory ID list clean while hiding the Array operation from outside Blueprints."
            },
            {
              "title": "Create RemoveItem",
              "where": "BP_ThirdPersonCharacter → My Blueprint → Functions → +",
              "do": "Create Function RemoveItem with Input ItemRow of type Name. Get InventoryRows → Remove Item and connect ItemRow. Leave Pure OFF.",
              "check": "RemoveItem compiles with one Name input and an execution path.",
              "why": "Gameplay systems can consume an item without directly manipulating the Array."
            },
            {
              "title": "Temporary Add/Remove test",
              "where": "BP_ThirdPersonCharacter → Event Graph",
              "do": "Create a temporary J key → AddItem(Coin) and a temporary R key → RemoveItem(Coin). Use your current I inventory display between presses to inspect the result.",
              "check": "J adds Coin once; pressing J repeatedly does not duplicate it; R removes Coin.",
              "why": "Both state-changing Functions are proven before other Blueprints depend on them."
            },
            {
              "title": "Delete the temporary keys",
              "where": "BP_ThirdPersonCharacter → Event Graph",
              "do": "Remove the temporary J and R test chains. Keep AddItem and RemoveItem.",
              "check": "The Event Graph is clean and both Functions remain available.",
              "why": "Test scaffolding should not become part of the finished controls."
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
              "why": "The caller receives both the data and a clear success/failure result."
            },
            {
              "title": "Read DT_ItemData",
              "where": "GetItemData Function graph",
              "do": "Add Get Data Table Row. Set Data Table = DT_ItemData. Connect ItemRow to Row Name.",
              "check": "The node exposes Row Found, Row Not Found and Out Row of type ST_ItemData.",
              "why": "The Function now owns the knowledge of which table stores item data."
            },
            {
              "title": "Return a successful lookup",
              "where": "GetItemData → Row Found",
              "do": "From Row Found add/use a Return Node. Connect Out Row to ItemData and set Found = True on that return path.",
              "check": "A valid row reaches a Return Node with real Struct data and Found True.",
              "why": "Callers can safely use the returned fields when Found is True."
            },
            {
              "title": "Return a failed lookup",
              "where": "GetItemData → Row Not Found",
              "do": "From Row Not Found, Print String: ERROR: Item data not found. Add Return Node and leave ItemData at its default empty Struct; set Found = False.",
              "check": "An invalid Row Name returns Found False and prints an obvious error.",
              "why": "One failure path is easier to debug than silent errors spread across multiple Blueprints."
            },
            {
              "title": "Test valid and invalid rows",
              "where": "BP_ThirdPersonCharacter → temporary keyboard tests",
              "do": "Use temporary T to call GetItemData(Battery) and print DisplayName from returned ItemData when Found is True. Then test ThisDoesNotExist and confirm the error path. Delete the temporary test afterwards.",
              "check": "Battery returns valid data; the fake row returns Found False/error.",
              "why": "Both Function exits need proof before you refactor callers."
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
              "why": "This Function performs an action and does not need information from its caller."
            },
            {
              "title": "Move the loop into the Function",
              "where": "PrintInventory Function graph",
              "do": "Get InventoryRows → For Each Loop. For each Array Element, call GetItemData and pass Array Element as ItemRow.",
              "check": "Each owned Row Name flows through your reusable GetItemData Function.",
              "why": "Functions can call other Functions; this is how small reusable jobs combine into a larger behaviour."
            },
            {
              "title": "Format each valid item",
              "where": "PrintInventory → GetItemData result",
              "do": "If Found is True, Break ST_ItemData from ItemData. Format Text as {Name}: {Description}, connect DisplayName and Description, then Print String. If Found is False, do not print fake item details.",
              "check": "Valid inventory rows print readable player-facing information.",
              "why": "PrintInventory now reuses the lookup Function rather than rebuilding its Data Table logic."
            },
            {
              "title": "Replace the old I chain",
              "where": "BP_ThirdPersonCharacter → Event Graph",
              "do": "Keep the I keyboard event, delete the old For Each / Data Table implementation connected to it, and call PrintInventory instead.",
              "check": "The I event now has one meaningful Function call instead of a large node chain.",
              "why": "This is the visible benefit of refactoring: the Event Graph becomes easier to read."
            },
            {
              "title": "Test several items",
              "where": "LV_EscapeRoom → Play",
              "do": "Collect at least two different items and press I. Consume Battery at the Generator and press I again.",
              "check": "Owned items print correctly and consumed Battery no longer appears.",
              "why": "The Function must match the behaviour of the old implementation."
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
              "why": "Mission 4 will improve communication further; for this mission the Cast gives you the object that owns the Functions."
            },
            {
              "title": "Replace Add Unique with AddItem",
              "where": "BP_ItemPickup → successful Cast path",
              "do": "Delete the direct Get InventoryRows → Add Unique chain. From As BP Third Person Character call AddItem and pass this pickup's ItemRow.",
              "check": "BP_ItemPickup no longer directly changes InventoryRows.",
              "why": "Inventory implementation is now owned by the Character Function."
            },
            {
              "title": "Replace direct Data Table lookup",
              "where": "BP_ItemPickup → after AddItem",
              "do": "Delete Get Data Table Row from the pickup. From the Character reference call GetItemData(ItemRow). Branch on Found.",
              "check": "BP_ItemPickup contains no DT_ItemData asset reference.",
              "why": "The Character Function now owns the Data Table lookup and failure handling."
            },
            {
              "title": "Use returned item data",
              "where": "BP_ItemPickup → Found True",
              "do": "Break returned ST_ItemData → PickupMessage → Print String → Destroy Actor. On Found False, do not Destroy Actor.",
              "check": "Valid items still show their own message and disappear; invalid rows remain so you can fix them.",
              "why": "The pickup now coordinates behaviour while reusable Functions perform the common jobs."
            },
            {
              "title": "Test three rows",
              "where": "LV_EscapeRoom → Play",
              "do": "Collect Coin, Fuse and Wrench generic pickup instances. Press I afterwards.",
              "check": "All three use correct messages/data and the inventory contains no duplicates.",
              "why": "A generic caller is only useful if the Functions work with several different inputs."
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
              "why": "Refactor the smallest repeated chain rather than rewriting the whole Generator."
            },
            {
              "title": "Replace Contains with HasItem",
              "where": "BP_Generator → Character reference",
              "do": "Delete the direct InventoryRows Contains chain. Call HasItem with ItemRow = Battery and use its Result as the existing Battery Branch condition.",
              "check": "The Branch still has the same True/False behaviour but no direct Array access.",
              "why": "The Generator now asks the Character a question through a named Function."
            },
            {
              "title": "Replace Remove Item with RemoveItem",
              "where": "BP_Generator → Battery success path",
              "do": "Delete direct InventoryRows → Remove Item. Call RemoveItem(Battery) before setting PowerOn True.",
              "check": "BP_Generator contains no direct InventoryRows Get node.",
              "why": "Consumption is also handled by the Character's reusable inventory API."
            },
            {
              "title": "Keep Generator-specific behaviour local",
              "where": "BP_Generator",
              "do": "Keep Set PowerOn True, Generator light visibility, sound/feedback and any Generator-specific visual logic in BP_Generator.",
              "check": "Only common inventory logic moved into Functions; Generator-specific behaviour remains readable here.",
              "why": "A good Function refactor does not move every node just because it can."
            },
            {
              "title": "Test all Generator states",
              "where": "LV_EscapeRoom → Play",
              "do": "Try Generator without Battery → collect Battery → power Generator → press I → return to Generator again.",
              "check": "Missing-Battery message works; Battery is consumed; Power remains on; repeated use is handled as before.",
              "why": "Refactoring must preserve gameplay behaviour."
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
              "why": "This is a read-only condition check, so Pure is suitable."
            },
            {
              "title": "Compose existing logic",
              "where": "CanUsePoweredItem Function graph",
              "do": "Get PowerOn. Call HasItem and pass RequiredItem. Feed PowerOn and HasItem Result into Boolean AND. Connect AND result to the Return Node Result.",
              "check": "The Function returns True only when power is on AND the requested item is owned.",
              "why": "A Function can reuse another Function instead of rebuilding its internals."
            },
            {
              "title": "Refactor the Exit Door",
              "where": "BP_ExitDoor",
              "do": "Keep the Cast to BP_ThirdPersonCharacter. Delete the direct Get PowerOn + InventoryRows Contains ExitKey + AND chain. Call CanUsePoweredItem with RequiredItem = ExitKey and use Result for the existing Branch.",
              "check": "The exit decision is now represented by one clearly named Function call.",
              "why": "The door says what it needs without knowing how the Character stores inventory."
            },
            {
              "title": "Keep door movement in the door",
              "where": "BP_ExitDoor → True path",
              "do": "Keep EXIT UNLOCKED feedback and door movement/animation in BP_ExitDoor. Do not move door visuals into the Character Function.",
              "check": "CanUsePoweredItem only answers the condition; the Door still owns Door behaviour.",
              "why": "Reusable condition logic and object-specific behaviour have different responsibilities."
            },
            {
              "title": "Retest four Exit states",
              "where": "LV_EscapeRoom → Play / restart between cases",
              "do": "Test no power/no key; key only; power only; power + ExitKey.",
              "check": "Only power + ExitKey opens the Exit, exactly as before.",
              "why": "The new reusable Function must reproduce the original AND condition perfectly."
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
              "why": "The new gate needs an existing data-driven item to require."
            },
            {
              "title": "Create BP_MaintenanceDoor",
              "where": "Content Drawer → Blueprint Class → Actor",
              "do": "Create BP_MaintenanceDoor. Add a Static Mesh and Box Collision. A stretched cube is enough for the door.",
              "check": "The Actor can be placed as a second blocked doorway/alcove in LV_EscapeRoom.",
              "why": "This is a new feature built after the refactor, so you can compare the amount of code required."
            },
            {
              "title": "Check the reusable condition",
              "where": "BP_MaintenanceDoor → Box Collision → On Component Begin Overlap",
              "do": "Cast Other Actor to BP_ThirdPersonCharacter. Call CanUsePoweredItem with RequiredItem = Fuse. Feed Result to a Branch.",
              "check": "The new door does not Get InventoryRows, Contains Fuse or build its own PowerOn AND chain.",
              "why": "One Function call replaces the repeated condition implementation."
            },
            {
              "title": "Handle the locked path",
              "where": "BP_MaintenanceDoor → Branch False",
              "do": "Print String: Maintenance access needs power and a Fuse.",
              "check": "Visiting too early gives a useful message and the door stays closed.",
              "why": "The player needs feedback without exposing technical implementation details."
            },
            {
              "title": "Consume Fuse and open the door",
              "where": "BP_MaintenanceDoor → Branch True",
              "do": "Call RemoveItem(Fuse) on the Character. Print String: Maintenance door unlocked! Move the door upward or rotate it using the same simple method you used for the Exit.",
              "check": "With PowerOn + Fuse, Fuse is removed and the Maintenance Door opens.",
              "why": "The new puzzle reuses both the condition Function and inventory mutation Function."
            },
            {
              "title": "Prove the new feature is independent",
              "where": "LV_EscapeRoom → Play",
              "do": "Test Maintenance Door with: neither requirement; Fuse only; power only; power + Fuse. Then check that the main Exit still needs ExitKey and still works.",
              "check": "Maintenance Door and Exit use different RequiredItem values but share the same reusable Functions.",
              "why": "Parameterised Functions should support different gameplay objects without being rewritten."
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
              "why": "The final architecture must support the complete player journey."
            },
            {
              "title": "Audit direct InventoryRows manipulation",
              "where": "BP_ItemPickup, BP_Generator, BP_ExitDoor, BP_MaintenanceDoor",
              "do": "Search visually for direct Get InventoryRows nodes. The reusable gameplay actors should now call Character Functions instead. InventoryRows itself can still be used inside the Character Functions that own the system.",
              "check": "Common external actors no longer manipulate the Array directly.",
              "why": "The Character now owns its inventory implementation behind a small reusable Function API."
            },
            {
              "title": "Audit direct Data Table lookups",
              "where": "BP_ItemPickup and ordinary gameplay Actors",
              "do": "Confirm common callers use GetItemData rather than each carrying their own Get Data Table Row DT_ItemData chain. Keep the table lookup inside GetItemData.",
              "check": "There is one clear authoritative item lookup Function.",
              "why": "Changing item-data lookup behaviour later now requires one edit instead of several."
            },
            {
              "title": "Clean and name your Function library",
              "where": "BP_ThirdPersonCharacter → My Blueprint → Functions",
              "do": "Confirm you have HasItem, AddItem, RemoveItem, GetItemData, PrintInventory and CanUsePoweredItem. Add useful Tooltips/Categories in Details if your version/workflow allows. Delete temporary keyboard test chains and disconnected old implementations. Compile and Save All.",
              "check": "The Function list reads like a small, understandable inventory/game-state API.",
              "why": "Naming and organisation are part of maintainable programming."
            },
            {
              "title": "Create one Function independently",
              "where": "BP_ThirdPersonCharacter",
              "do": "Create ONE extra useful Function without copying this guide node-for-node. Recommended: GetTotalInventoryValue → loop InventoryRows → GetItemData → add each ItemData.Value → return total Integer. Alternative: HasQuestItem, GetInventoryCount or another sensible read-only helper.",
              "check": "Your Function has a clear name, appropriate inputs/outputs, works in Play and is Pure only if it does not change state.",
              "why": "Independent adaptation proves you understand what a Function is for rather than only following supplied recipes."
            },
            {
              "title": "Explain the before and after",
              "where": "Your project / teacher check",
              "do": "Be able to explain one real example: BEFORE the Generator got InventoryRows and searched it itself; AFTER it calls HasItem(Battery). Then explain why that makes future changes safer.",
              "check": "You can describe the benefit in terms of reuse, readability and one place to change logic.",
              "why": "The goal is not fewer nodes for its own sake; it is better organisation of responsibilities."
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
      ]
    }
  ]
};

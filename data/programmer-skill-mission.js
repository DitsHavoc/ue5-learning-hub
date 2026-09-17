window.UE5_SKILL_MISSIONS = {
  "version": "3.56.3",
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
      ]
    }
  ]
};

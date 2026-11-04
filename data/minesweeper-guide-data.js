/* Standalone complete UE5 Minesweeper tutorial; the four source Mini-Projects are unchanged. */
window.UE5_MINESWEEPER_GUIDE = {
  "id": "minesweeper",
  "title": "Minesweeper — Complete Game in Unreal Engine 5.8",
  "subtitle": "Build a proper 6×6 puzzle: 6 mines, safe first click, numbered clues, flags, automatic zero clearing, a clock, victory, defeat and restart. No C++ or third-party assets.",
  "independent": true,
  "prerequisites": "Create a new Games → Blank Blueprint project in Unreal Engine 5.8. No starter-content pack or external downloads required.",
  "rules": [
    "36 cells in a 6×6 Uniform Grid, with exactly 6 distinct mines and 30 safe cells.",
    "Left click reveals. Right click toggles a flag. Flag Mode makes left click flag instead (trackpad friendly).",
    "Mines are chosen AFTER the first reveal, excluding that first square.",
    "A number shows how many of the eight surrounding cells have mines.",
    "Revealing any mine loses. Revealing all 30 safe cells wins; flags do not count towards the win.",
    "A one-second timer starts on first reveal and stops on win or loss. New Game resets everything."
  ],
  "stages": [
    {
      "id": "setup",
      "title": "1. Start the project and create the two Widgets",
      "tier": "Essential",
      "outcome": "An empty but visible Minesweeper screen is shown when you press Play; the board and individual cell have their own assets.",
      "beforeStart": "Open Unreal Engine 5.8 → Games → Blank → Blueprint → Desktop. Create a project named MinesweeperStudy.",
      "steps": [
        {
          "title": "Make a dedicated level",
          "where": "Content Drawer → Content",
          "do": "Create folder Minesweeper. File → New Level → Basic or Empty. Save Current Level As Content/Minesweeper/L_Minesweeper. Edit → Project Settings → Maps & Modes → Game Default Map=L_Minesweeper. Save the level.",
          "why": "Saving the map and setting the startup map ensures the game opens the correct level every time.",
          "check": "The level exists and is set as the startup map.",
          "helpTopics": [
            "level"
          ]
        },
        {
          "title": "Make the parent board Widget asset FIRST",
          "where": "Content/Minesweeper → right-click",
          "do": "Choose User Interface → Widget Blueprint → User Widget, name WBP_MineBoard. Open Designer. Keep a root Canvas Panel and add a Vertical Box; centre it using its Canvas Slot Alignment 0.5,0.5 and centre anchors. This Widget owns the full game.",
          "why": "The Board owns the game and on-screen layout; the Cell widget is a reusable single-square building block.",
          "check": "WBP_MineBoard is an asset, not a variable. It has a centred Vertical Box.",
          "helpTopics": [
            "widget"
          ]
        },
        {
          "title": "Name the board controls EXACTLY",
          "where": "WBP_MineBoard → Designer",
          "do": "Inside the Vertical Box add Text 'MINESWEEPER'; a Horizontal Box containing Text named FlagsText ('Flags: 0 / 6'), Text named TimeText ('Time: 0'), Button RestartButton ('New Game'); Uniform Grid Panel named MineGrid; Text StatusText ('Left click to reveal'). Tick Is Variable on FlagsText, TimeText, RestartButton, MineGrid and StatusText. Compile.",
          "why": "Using exact named UI controls lets later Blueprint functions find the correct labels, grid and button.",
          "check": "The board contains five explicitly named widgets; MineGrid is a Uniform Grid Panel, not an Integer Array.",
          "helpTopics": [
            "widget"
          ]
        },
        {
          "title": "Make the reusable cell Widget asset",
          "where": "Content/Minesweeper → right-click",
          "do": "Create User Widget WBP_MineCell. In Designer add a Size Box root with Width Override 54 and Height Override 54. Place Border named CellBorder inside; add Text named CellText inside Border and centre it. Set CellText temporary text '?' and tick Is Variable on CellText and CellBorder. Keep Border Visibility=Visible so mouse hits can reach it. Compile.",
          "why": "One reusable cell design is easier to maintain than 36 separate buttons; keeping it hit-testable allows mouse input.",
          "check": "You have one square 54×54 cell asset, with a Border and Text ready to change.",
          "helpTopics": [
            "widget"
          ]
        },
        {
          "title": "Tell a cell which board and square it belongs to",
          "where": "WBP_MineCell → Graph → My Blueprint → Variables +",
          "do": "Create CellIndex (Integer default 0) and BoardRef (WBP_MineBoard Object Reference). Tick Instance Editable and Expose on Spawn for BOTH; Compile. BoardRef is a blue Widget reference to the existing WBP_MineBoard, not a new board instance.",
          "why": "Expose on Spawn makes the correct index and owning board available to each newly created cell.",
          "check": "Two variables are on the CELL: CellIndex and BoardRef. Both appear as pins when Create Widget WBP_MineCell is used.",
          "helpTopics": [
            "variable"
          ]
        },
        {
          "title": "Give the BOARD a named event for cell clicks",
          "where": "WBP_MineBoard → Event Graph",
          "do": "Right-click empty space → Add Custom Event, name CellPressed. Select the red node → Details → Inputs → + twice: PressedIndex (Integer) and WantsFlag (Boolean). For now link its white exec to Print String 'CLICK RECEIVED'. Compile. These are Event INPUT PINS, not Variables.",
          "why": "A single named Custom Event is the communication point from a clicked Cell to the Board; the input pins carry data.",
          "check": "CellPressed is a red Custom Event with both pins and prints when called.",
          "helpTopics": [
            "custom-event"
          ]
        },
        {
          "title": "Display only ONE board when Play starts",
          "where": "L_Minesweeper → toolbar Blueprints → Open Level Blueprint",
          "do": "Event BeginPlay → Create Widget(Class=WBP_MineBoard, Owning Player=Get Player Controller 0) → Add to Viewport(Create Widget Return Value). Next on that Player Controller call Set Show Mouse Cursor(true) → Set Input Mode UI Only, supplying the same board as In Widget to Focus. Connect white execution in that order. Compile Level Blueprint and Save Level.",
          "why": "The Level Blueprint only creates the game screen; all actual Minesweeper rules will live in the Board widget.",
          "check": "Play shows the board title and empty grid, a cursor and New Game. No cells yet — that's next stage.",
          "helpTopics": [
            "widget",
            "exec"
          ]
        },
        {
          "title": "Test the basic UI before building anything else",
          "where": "L_Minesweeper → Play",
          "do": "Press Play, not Simulate. Confirm title, time, flags, restart and status are visible and centred. If blank, check Game Default Map and Level Blueprint's WHITE Create Widget → Add to Viewport wires. Stop Play and Save the two Widgets.",
          "why": "A visible blank screen is the first checkpoint: do not build mines before confirming the Widget displays.",
          "check": "A stable empty board appears every run with no Blueprint errors.",
          "helpTopics": [
            "playtest"
          ]
        }
      ],
      "names": [
        {
          "name": "L_Minesweeper",
          "kind": "Level asset",
          "owner": "Content/Minesweeper",
          "at": 1
        },
        {
          "name": "WBP_MineBoard",
          "kind": "Widget Blueprint asset",
          "owner": "Content/Minesweeper",
          "at": 2
        },
        {
          "name": "FlagsText",
          "kind": "Text widget (Is Variable)",
          "owner": "WBP_MineBoard",
          "at": 3
        },
        {
          "name": "TimeText",
          "kind": "Text widget (Is Variable)",
          "owner": "WBP_MineBoard",
          "at": 3
        },
        {
          "name": "RestartButton",
          "kind": "Button widget (Is Variable)",
          "owner": "WBP_MineBoard",
          "at": 3
        },
        {
          "name": "MineGrid",
          "kind": "Uniform Grid Panel widget (Is Variable)",
          "owner": "WBP_MineBoard",
          "at": 3
        },
        {
          "name": "StatusText",
          "kind": "Text widget (Is Variable)",
          "owner": "WBP_MineBoard",
          "at": 3
        },
        {
          "name": "WBP_MineCell",
          "kind": "Widget Blueprint asset",
          "owner": "Content/Minesweeper",
          "at": 4
        },
        {
          "name": "CellBorder",
          "kind": "Border widget (Is Variable)",
          "owner": "WBP_MineCell",
          "at": 4
        },
        {
          "name": "CellText",
          "kind": "Text widget (Is Variable)",
          "owner": "WBP_MineCell",
          "at": 4
        },
        {
          "name": "CellIndex",
          "kind": "Variable",
          "owner": "WBP_MineCell",
          "at": 5,
          "type": "Integer • Expose on Spawn"
        },
        {
          "name": "BoardRef",
          "kind": "Variable",
          "owner": "WBP_MineCell",
          "at": 5,
          "type": "WBP_MineBoard Object Reference • Expose on Spawn"
        },
        {
          "name": "CellPressed",
          "kind": "Custom Event",
          "owner": "WBP_MineBoard",
          "at": 6
        },
        {
          "name": "PressedIndex",
          "kind": "Input/Output pin — NOT a Variable",
          "owner": "CellPressed Custom Event",
          "at": 6,
          "type": "Integer"
        },
        {
          "name": "WantsFlag",
          "kind": "Input/Output pin — NOT a Variable",
          "owner": "CellPressed Custom Event",
          "at": 6,
          "type": "Boolean"
        }
      ],
      "check": "New blank game screen with working Level Blueprint and two separate Widget assets.",
      "fix": "Blank screen: verify saved startup level, Create Widget class and Add to Viewport. BoardRef missing as a type: Compile WBP_MineBoard before adding the cell reference.",
      "commonMistake": "The name of a Function, Widget, Custom Event or input pin is not automatically a Variable. Open the owning Blueprint; use the named-item labels in the current step.",
      "studentPromise": "One step → Compile → Save → Play → confirm Check. Do not continue if the test fails.",
      "optional": false
    },
    {
      "id": "grid",
      "title": "2. Spawn all 36 cells and get correct click indexes",
      "tier": "Essential",
      "outcome": "Six rows of six tiles appear; both left and right click report the correct tile index.",
      "beforeStart": "Stage 1 finished; WBP_MineBoard and WBP_MineCell exist and the empty board is visible.",
      "steps": [
        {
          "title": "Create the Cells Array on the BOARD",
          "where": "WBP_MineBoard → My Blueprint → Variables +",
          "do": "Add Cells. Type WBP_MineCell Object Reference; click the container icon to change Single to Array. Compile. This Array holds 36 cell Widget REFERENCES. It is not the MineGrid panel.",
          "why": "Storing created Cell Widget references lets the Board change or query any square by integer index.",
          "check": "Cells is one WBP_MineCell Object Reference Array on the BOARD.",
          "helpTopics": [
            "array",
            "variable"
          ]
        },
        {
          "title": "Create a single NewGame event",
          "where": "WBP_MineBoard → Event Graph",
          "do": "Right-click → Add Custom Event NewGame. Connect NewGame white exec → Clear Children(Target=MineGrid) → Clear(Array Cells) → For Loop First Index=0 Last Index=35. A loop index starts at zero, so this makes 36 iterations. Do NOT duplicate the Custom Event.",
          "why": "Clearing and rebuilding one grid prevents old cells from remaining after the New Game button is used.",
          "check": "There is exactly one NewGame event and one For Loop spawning 36 widgets.",
          "helpTopics": [
            "custom-event",
            "exec"
          ]
        },
        {
          "title": "Convert the loop index to row and column",
          "where": "WBP_MineBoard → NewGame For Loop",
          "do": "From green Loop Index use Integer Division by 6 to calculate Row, and Integer % Integer by 6 to calculate Column. THESE ARE NODE RESULTS, NOT Variables you must create. Index 0 gives (Row0,Col0); 7 gives (Row1,Col1); 35 gives (Row5,Col5).",
          "why": "Integer division gives the row and modulus gives the column, so one loop builds a 2D board.",
          "check": "The arithmetic gives exactly six values for each axis, 0..5.",
          "helpTopics": [
            "math"
          ]
        },
        {
          "title": "Create and add one cell PER loop iteration",
          "where": "NewGame → For Loop Body",
          "do": "From white Loop Body add Create Widget(Class=WBP_MineCell, Owning Player=Get Owning Player), plug CellIndex=Loop Index, BoardRef=Self. Connect its white output to Add(Array Cells, Item=Create Widget Return Value) → Add Child to Uniform Grid(Target=MineGrid,Content=Create Widget Return Value,In Row=Index DIV 6,In Column=Index MOD 6). Use one Create Widget node INSIDE the loop, not 36 copies.",
          "why": "Each loop iteration creates one independent Cell, stores it, and places it in its matching grid slot.",
          "check": "Play displays exactly 36 cells. The widget array and grid have the same count.",
          "helpTopics": [
            "spawn",
            "exec"
          ]
        },
        {
          "title": "Call NewGame on the first board construct",
          "where": "WBP_MineBoard → Event Graph",
          "do": "From Event Construct (the built-in event) wire white execution to CALL NewGame. Search 'Call NewGame' to avoid accidentally making another red event definition. Compile Board and Play.",
          "why": "Event Construct triggers the initial setup automatically when the Level creates the Board.",
          "check": "36 '?' squares appear in a 6×6 square without overlapping.",
          "helpTopics": [
            "custom-event",
            "playtest"
          ]
        },
        {
          "title": "Make left mouse work in the cell",
          "where": "WBP_MineCell → Graph → Overrides → OnMouseButtonDown",
          "do": "From MouseEvent use Get Effecting Button → Equal (Key) Left Mouse Button → Branch. On True, use BoardRef (Get) and CALL CellPressed(PressedIndex=CellIndex,WantsFlag=false). Return a Handled Event Reply. On False temporarily return Unhandled. Use the Widget OVERRIDE, not a Button OnClicked.",
          "why": "Handling a left mouse press directly in the Cell keeps click positions accurate without extra Controller raycasts.",
          "check": "Left-clicking any tile prints CLICK RECEIVED from the BOARD.",
          "helpTopics": [
            "input",
            "branch"
          ]
        },
        {
          "title": "Add right-click in the SAME Widget override",
          "where": "WBP_MineCell → OnMouseButtonDown",
          "do": "From the left-key Branch False, add Branch(Get Effecting Button==Right Mouse Button). On True call BoardRef.CellPressed(PressedIndex=CellIndex,WantsFlag=true), then Return Handled. Otherwise Return Unhandled. Do not add a second override. CellBorder remains Visible and hit-testable.",
          "why": "The same override can distinguish right-click from left-click and notify the Board using a Boolean input.",
          "check": "Right clicking a square also prints CLICK RECEIVED.",
          "helpTopics": [
            "input",
            "branch"
          ]
        },
        {
          "title": "Print the cell index BEFORE building game rules",
          "where": "WBP_MineBoard → CellPressed red event",
          "do": "Replace the old Print String input with Format Text 'Index {Index} / Flag {Flag}', passing PressedIndex and WantsFlag, then To String → Print String. Play: left-click top-left should print Index 0, top-right 5, bottom-right 35; right-click the same cell shows Flag true.",
          "why": "Printing the index first isolates UI input problems from the mine logic that follows.",
          "check": "You know the board, mouse buttons, indices and references all work before introducing mines.",
          "helpTopics": [
            "debug",
            "playtest"
          ]
        }
      ],
      "names": [
        {
          "name": "Cells",
          "kind": "Variable",
          "owner": "WBP_MineBoard",
          "at": 1,
          "type": "WBP_MineCell Object Reference Array"
        },
        {
          "name": "NewGame",
          "kind": "Custom Event",
          "owner": "WBP_MineBoard",
          "at": 2
        },
        {
          "name": "Row",
          "kind": "Integer result of Loop Index DIV 6 • not a Variable",
          "owner": "NewGame For Loop",
          "at": 3
        },
        {
          "name": "Column",
          "kind": "Integer result of Loop Index MOD 6 • not a Variable",
          "owner": "NewGame For Loop",
          "at": 3
        }
      ],
      "check": "A 6×6 grid with 36 correctly clickable cells and separate left/right click debugging.",
      "fix": "No tiles? Event Construct must call NewGame and For Loop Body must call Create Widget. All tiles stacked? Use Add Child to UNIFORM Grid with Row/Column wired. No clicks? CellBorder Visible, override's Handled/Unhandled return, BoardRef passed from Create Widget.",
      "commonMistake": "The name of a Function, Widget, Custom Event or input pin is not automatically a Variable. Open the owning Blueprint; use the named-item labels in the current step.",
      "studentPromise": "One step → Compile → Save → Play → confirm Check. Do not continue if the test fails.",
      "optional": false
    },
    {
      "id": "mines",
      "title": "3. Randomly hide six distinct mines after the first click",
      "tier": "Essential",
      "outcome": "A first-click-safe game board chooses exactly six unique mine positions; clicking or flagging before the first reveal cannot cause an explosion.",
      "beforeStart": "Stage 2 gives correct grid indexes and button types, but no mine logic yet.",
      "steps": [
        {
          "title": "Add BOARD Variables with exact types and defaults",
          "where": "WBP_MineBoard → My Blueprint → Variables +",
          "do": "Create MineCount(Integer default 6), Started(Boolean false), Finished(Boolean false), Won(Boolean false), SafeOpened(Integer 0), FlagsPlaced(Integer 0), CandidateIndexes(Integer Array). Compile, then set defaults. These are BOARD Variables, not Cell variables.",
          "why": "Board-wide variables own the shared game state; the candidate array avoids selecting the same mine twice.",
          "check": "Seven named Board Variables exist; CandidateIndexes has the Array icon.",
          "helpTopics": [
            "variable",
            "array"
          ]
        },
        {
          "title": "Add state to EVERY individual cell",
          "where": "WBP_MineCell → Variables +",
          "do": "Create IsMine(Boolean false), IsOpen(Boolean false), IsFlagged(Boolean false), AdjacentMines(Integer 0). Compile. These belong to WBP_MineCell so each of the 36 instances can remember its own different state.",
          "why": "Each Cell needs its own mine, flag, revealed and clue data because neighbouring squares have different states.",
          "check": "Four new cell Variables, independent from the Board's counters.",
          "helpTopics": [
            "variable"
          ]
        },
        {
          "title": "Reset state at the beginning of NewGame",
          "where": "WBP_MineBoard → NewGame event, BEFORE Clear Children",
          "do": "Insert Set Started=false → Set Finished=false → Set Won=false → Set SafeOpened=0 → Set FlagsPlaced=0 → Clear CandidateIndexes, then continue to the EXISTING Clear Children → Clear Cells → For Loop. White execution order matters.",
          "why": "Resetting state before recreating widgets ensures the next game is independent from the previous run.",
          "check": "After NewGame the six state fields have defaults; no stale mine candidates remain.",
          "helpTopics": [
            "get-set",
            "exec"
          ]
        },
        {
          "title": "Make a Function with an input, NOT another Variable",
          "where": "WBP_MineBoard → My Blueprint → Functions +",
          "do": "Create Function PlaceMines. Select its purple Function Entry → Details → Inputs → + → add SafeIndex (Integer). Add Clear CandidateIndexes → For Loop First=0 Last=35 from Function Entry. SafeIndex is a FUNCTION INPUT PIN; do not create a saved Board variable called SafeIndex.",
          "why": "The SafeIndex input lets mine placement exclude the first clicked tile without creating a permanent variable.",
          "check": "PlaceMines appears under Functions and has an Integer input SafeIndex.",
          "helpTopics": [
            "function",
            "function-input"
          ]
        },
        {
          "title": "Build the possible mine indexes, excluding the first click",
          "where": "PlaceMines → first For Loop Body",
          "do": "From Loop Index compare Integer != SafeIndex. Branch on the result. TRUE → Add CandidateIndexes(Item=Loop Index); FALSE → do nothing. The For Loop Completed should now have an array of exactly 35 valid candidates, missing the clicked square.",
          "why": "Excluding the first clicked index guarantees first-click safety before anything is shuffled or revealed.",
          "check": "SafeIndex=0 gives candidates 1..35; the first chosen tile can never get a mine.",
          "helpTopics": [
            "array",
            "branch"
          ]
        },
        {
          "title": "Shuffle the candidate ARRAY once",
          "where": "PlaceMines → first For Loop Completed",
          "do": "From CandidateIndexes Array drag a wire → search Shuffle (Array Shuffle). Connect first For Loop Completed white execution to Shuffle, then a SECOND For Loop First=0 Last=MineCount-1. The array is shuffled in place; no 'Shuffled' variable needed.",
          "why": "Shuffling a unique list gives fair randomness without an unreliable repeat-until-unused loop.",
          "check": "Randomised candidate order, with no duplicate indexes.",
          "helpTopics": [
            "array",
            "exec"
          ]
        },
        {
          "title": "Set the first six chosen cells to IsMine=true",
          "where": "PlaceMines → second For Loop Body",
          "do": "Get CandidateIndexes[second Loop Index]; that result is the selected mine's INTEGER index. Get Cells[selected index] (BLUE WBP_MineCell reference). Drag from that BLUE pin → Set IsMine=true on that Cell instance. Wire Loop Body white exec into Set IsMine. After second Loop Completed, PlaceMines is done. Do not call Random Integer again here.",
          "why": "Using the first six shuffled candidates guarantees exactly six distinct mines every time.",
          "check": "Six distinct WBP_MineCell instances have IsMine=true. The first clicked index is not one of them.",
          "helpTopics": [
            "array",
            "get-set"
          ]
        },
        {
          "title": "Prepare mines only for the very first LEFT reveal",
          "where": "WBP_MineBoard → CellPressed Event Graph",
          "do": "Remove the old index debug Print String. Entry → Branch(NOT Finished). On True Branch(WantsFlag); leave WantsFlag=True for Stage 6. On WantsFlag=False: Get Cells[PressedIndex] and Branch(NOT IsFlagged AND NOT IsOpen). FALSE does nothing: clicking a flagged/open tile is NOT a first reveal. TRUE → Branch(NOT Started). When NOT Started is True, CALL PlaceMines(SafeIndex=PressedIndex) → Set Started=true → Print String 'FIRST CLICK PREPARED'. When NOT Started is False, Print String 'SAME MINES'. The next stage replaces these two prints with a TryReveal call. Keep the new guard so a flag cannot start the game.",
          "why": "Only the first valid reveal should plant mines; later reveals must use the same hidden board.",
          "check": "A left-click on an unopened UNFLAGGED tile places mines once. Left-clicking a flagged tile does nothing and cannot start the game; right-click never places mines.",
          "helpTopics": [
            "branch",
            "exec"
          ]
        },
        {
          "title": "Prove six unique mines before trying to reveal",
          "where": "PlaceMines → second loop; L_Minesweeper Play",
          "do": "Temporarily add a Print String after Set IsMine that prints the candidate mine index. Restart Play and left click cell 0: exactly six DIFFERENT indices print, none zero. Stop and play again, first click index 18: six different indices print, none 18. Remove this debug Print String and Save.",
          "why": "A six-index print test proves random placement and first-click safety before complicated reveal logic hides errors.",
          "check": "Six non-overlapping mines every run, and the chosen first-click index is safe.",
          "helpTopics": [
            "debug",
            "playtest"
          ]
        }
      ],
      "names": [
        {
          "name": "MineCount",
          "kind": "Variable",
          "owner": "WBP_MineBoard",
          "at": 1,
          "type": "Integer • 6"
        },
        {
          "name": "Started",
          "kind": "Variable",
          "owner": "WBP_MineBoard",
          "at": 1,
          "type": "Boolean • false"
        },
        {
          "name": "Finished",
          "kind": "Variable",
          "owner": "WBP_MineBoard",
          "at": 1,
          "type": "Boolean • false"
        },
        {
          "name": "Won",
          "kind": "Variable",
          "owner": "WBP_MineBoard",
          "at": 1,
          "type": "Boolean • false"
        },
        {
          "name": "SafeOpened",
          "kind": "Variable",
          "owner": "WBP_MineBoard",
          "at": 1,
          "type": "Integer • 0"
        },
        {
          "name": "FlagsPlaced",
          "kind": "Variable",
          "owner": "WBP_MineBoard",
          "at": 1,
          "type": "Integer • 0"
        },
        {
          "name": "CandidateIndexes",
          "kind": "Variable",
          "owner": "WBP_MineBoard",
          "at": 1,
          "type": "Integer Array"
        },
        {
          "name": "IsMine",
          "kind": "Variable",
          "owner": "WBP_MineCell",
          "at": 2,
          "type": "Boolean • false"
        },
        {
          "name": "IsOpen",
          "kind": "Variable",
          "owner": "WBP_MineCell",
          "at": 2,
          "type": "Boolean • false"
        },
        {
          "name": "IsFlagged",
          "kind": "Variable",
          "owner": "WBP_MineCell",
          "at": 2,
          "type": "Boolean • false"
        },
        {
          "name": "AdjacentMines",
          "kind": "Variable",
          "owner": "WBP_MineCell",
          "at": 2,
          "type": "Integer • 0"
        },
        {
          "name": "PlaceMines",
          "kind": "Function",
          "owner": "WBP_MineBoard",
          "at": 4
        },
        {
          "name": "SafeIndex",
          "kind": "Input/Output pin — NOT a Variable",
          "owner": "PlaceMines Function",
          "at": 4,
          "type": "Integer"
        }
      ],
      "check": "Six unique randomly placed mines are generated once, excluding the first left click.",
      "fix": "Mines changing every click? Branch NOT Started must guard PlaceMines, then Set Started=true. Same mine twice? Shuffle a unique candidate list and use first six, no replacement picks. Bad first click? Exclude SafeIndex before Shuffle.",
      "commonMistake": "The name of a Function, Widget, Custom Event or input pin is not automatically a Variable. Open the owning Blueprint; use the named-item labels in the current step.",
      "studentPromise": "One step → Compile → Save → Play → confirm Check. Do not continue if the test fails.",
      "optional": false
    },
    {
      "id": "clues",
      "title": "4. Work out how many mines surround each square",
      "tier": "Essential",
      "outcome": "Every cell stores a clue between 0 and 8, counting diagonal, side and vertical neighbours without reading outside the 6×6 grid.",
      "beforeStart": "Stage 3 plants six mines after first left click. WBP_MineCell already has AdjacentMines Integer.",
      "steps": [
        {
          "title": "Create a boundary-safe IsMineAt Function",
          "where": "WBP_MineBoard → Functions +",
          "do": "Create Function IsMineAt. Function Inputs Row(Integer) and Column(Integer); Output HasMine(Boolean). Compile. Inputs and output are PINS on the Function, not saved Board Variables.",
          "why": "A boundary-safe helper makes every neighbour lookup reusable by the later counting function.",
          "check": "IsMineAt takes row/column and returns Boolean HasMine.",
          "helpTopics": [
            "function",
            "function-input"
          ]
        },
        {
          "title": "Guard all four edges before looking in Cells",
          "where": "IsMineAt graph",
          "do": "Entry → Branch with condition Row>=0 AND Row<6 AND Column>=0 AND Column<6. On FALSE connect a Return Node with HasMine=false. On TRUE continue. Create the comparisons from green integer pins and join red booleans with AND Boolean.",
          "why": "Corner and edge cells have fewer neighbours; checking bounds prevents invalid Array access.",
          "check": "Coordinates outside 0..5 immediately return false; no invalid Array Get.",
          "helpTopics": [
            "branch",
            "math"
          ]
        },
        {
          "title": "Read the correct cell's IsMine variable",
          "where": "IsMineAt Branch TRUE",
          "do": "Compute index=(Row*6)+Column using Multiply(Integer) and Add(Integer). Get Cells[index], from its BLUE WBP_MineCell reference read IsMine. Connect to Return Node.HasMine; wire white exec Branch TRUE into that Return. Use two Return Nodes instead of merging exec paths.",
          "why": "Flattening row and column back into Row*6+Column retrieves the exact Widget that owns IsMine.",
          "check": "IsMineAt(0,0) looks up Cells[0], IsMineAt(5,5) looks up Cells[35].",
          "helpTopics": [
            "get-set",
            "math"
          ]
        },
        {
          "title": "Create CountAdjacentMines and its LOCAL counters",
          "where": "WBP_MineBoard → Functions +",
          "do": "Make Function CountAdjacentMines with Input CheckIndex(Integer) and Output Count(Integer). In My Blueprint → Local Variables create ThisRow(Integer), ThisColumn(Integer), RunningCount(Integer). Entry → Set ThisRow=CheckIndex DIV 6 → Set ThisColumn=CheckIndex MOD 6 → Set RunningCount=0. These are LOCAL to this Function, not global Board Variables.",
          "why": "Local values hold temporary calculations; they are not duplicated across the whole Board.",
          "check": "CountAdjacentMines has one input, one output and three local integer variables.",
          "helpTopics": [
            "local",
            "function-input"
          ]
        },
        {
          "title": "Use two small For Loops for the eight directions",
          "where": "CountAdjacentMines after RunningCount=0",
          "do": "Add OUTER For Loop First Index=-1 Last Index=1 (its Index is DR). Connect Outer Loop Body → INNER For Loop First Index=-1 Last Index=1 (its Index is DC). On INNER Loop Body create Branch(Condition= (DR!=0) OR (DC!=0)) to skip the centre offset 0,0. Outer Loop Completed → Return Node(Count=RunningCount).",
          "why": "Two loops are a compact way to visit all surrounding offsets instead of manually making eight sets of nodes.",
          "check": "The 3×3 surrounding positions are visited, excluding only the centre.",
          "helpTopics": [
            "exec",
            "branch"
          ]
        },
        {
          "title": "Count only actual neighbouring mines",
          "where": "CountAdjacentMines → inner Branch TRUE",
          "do": "CALL IsMineAt(Row=ThisRow+DR, Column=ThisColumn+DC). From call white exec → Branch(HasMine). TRUE → Set local RunningCount=RunningCount+1. FALSE → no action. The inner For Loop continues automatically. Compile and do not touch SafeOpened: clue counting is not a reveal.",
          "why": "Skipping the centre avoids counting the clicked cell as its own neighbour; only surrounding mines matter.",
          "check": "Count is 0..8 and includes all legal diagonals, even at board edges.",
          "helpTopics": [
            "get-set",
            "branch"
          ]
        },
        {
          "title": "Write the clue number into each cell",
          "where": "WBP_MineBoard → Functions +",
          "do": "Create CalculateAllClues Function. Entry → For Loop 0..35. Loop Body: Get Cells[Loop Index], CALL CountAdjacentMines(CheckIndex=Loop Index), then Set AdjacentMines on that SAME cell to returned Count. White exec drives the Set. Compile.",
          "why": "Writing every clue in one pass means later reveals only display a stored value rather than recalculate it.",
          "check": "All 36 Cell instances receive correct AdjacentMines values.",
          "helpTopics": [
            "function",
            "exec"
          ]
        },
        {
          "title": "Calculate clues AFTER planting mines",
          "where": "WBP_MineBoard → CellPressed first-click path",
          "do": "Insert CALL CalculateAllClues BETWEEN PlaceMines(SafeIndex=PressedIndex) and Set Started=true. Do not calculate on Event Construct or before the six mines exist.",
          "why": "Clues must be calculated after the shuffled mines are assigned, otherwise every tile would show zero.",
          "check": "First click always executes PlaceMines → CalculateAllClues → Started=true.",
          "helpTopics": [
            "exec"
          ]
        },
        {
          "title": "Test with just ONE mine, then restore six",
          "where": "WBP_MineBoard MineCount default; Play",
          "do": "TEMPORARILY set MineCount=1. On first click add a temporary Print String for each cell's index and clue after Set AdjacentMines. No number can exceed 1; only the eight neighbours of that single mine (fewer at edges) show 1. Restore MineCount=6, remove debug print, Compile and Save.",
          "why": "A one-mine test makes the eight-neighbour maths easy to check visually before moving to six mines.",
          "check": "With one mine clues are only 0/1; with six all clues remain 0..8 and no index error appears.",
          "helpTopics": [
            "debug",
            "playtest"
          ]
        }
      ],
      "names": [
        {
          "name": "IsMineAt",
          "kind": "Function",
          "owner": "WBP_MineBoard",
          "at": 1
        },
        {
          "name": "Row",
          "kind": "Input/Output pin — NOT a Variable",
          "owner": "IsMineAt Function",
          "at": 1,
          "type": "Integer"
        },
        {
          "name": "Column",
          "kind": "Input/Output pin — NOT a Variable",
          "owner": "IsMineAt Function",
          "at": 1,
          "type": "Integer"
        },
        {
          "name": "HasMine",
          "kind": "Input/Output pin — NOT a Variable",
          "owner": "IsMineAt Function output",
          "at": 1,
          "type": "Boolean"
        },
        {
          "name": "CountAdjacentMines",
          "kind": "Function",
          "owner": "WBP_MineBoard",
          "at": 4
        },
        {
          "name": "CheckIndex",
          "kind": "Input/Output pin — NOT a Variable",
          "owner": "CountAdjacentMines Function",
          "at": 4,
          "type": "Integer"
        },
        {
          "name": "Count",
          "kind": "Input/Output pin — NOT a Variable",
          "owner": "CountAdjacentMines Function output",
          "at": 4,
          "type": "Integer"
        },
        {
          "name": "ThisRow",
          "kind": "Local Integer Variable",
          "owner": "CountAdjacentMines Function",
          "at": 4
        },
        {
          "name": "ThisColumn",
          "kind": "Local Integer Variable",
          "owner": "CountAdjacentMines Function",
          "at": 4
        },
        {
          "name": "RunningCount",
          "kind": "Local Integer Variable",
          "owner": "CountAdjacentMines Function",
          "at": 4
        },
        {
          "name": "CalculateAllClues",
          "kind": "Function",
          "owner": "WBP_MineBoard",
          "at": 7
        }
      ],
      "check": "Each cell has a valid eight-neighbour count computed after mines are placed; corners and edges never read invalid indices.",
      "fix": "All zero? Count AFTER mine placement. Index warnings? Use boundary guard in IsMineAt. Too many mines? Skip centre using DR!=0 OR DC!=0, not AND.",
      "commonMistake": "The name of a Function, Widget, Custom Event or input pin is not automatically a Variable. Open the owning Blueprint; use the named-item labels in the current step.",
      "studentPromise": "One step → Compile → Save → Play → confirm Check. Do not continue if the test fails.",
      "optional": false
    },
    {
      "id": "reveal",
      "title": "5. Reveal safe squares and lose when you hit a mine",
      "tier": "Essential",
      "outcome": "A click changes a covered tile into a number (or blank zero); a mine shows X and ends the game.",
      "beforeStart": "Stage 4 correctly stores six mines and clue counts; mouse clicks are passed to CellPressed.",
      "steps": [
        {
          "title": "Create the ONE visual update Function inside the CELL",
          "where": "WBP_MineCell → Functions +",
          "do": "Create UpdateCellLook. Use the existing Widget components CellBorder and CellText plus CELL variables IsOpen, IsMine, IsFlagged, AdjacentMines. Do not add new Variables named 'Colour', 'F' or 'Number'; those are values used on nodes.",
          "why": "The Cell owns its appearance; the Board should change state rather than duplicate text and colour logic.",
          "check": "UpdateCellLook exists on WBP_MineCell.",
          "helpTopics": [
            "function"
          ]
        },
        {
          "title": "Show covered and flagged visuals",
          "where": "UpdateCellLook graph",
          "do": "Entry → Branch(IsOpen). FALSE → Branch(IsFlagged). On FALSE/covered set CellText.SetText('') then CellBorder.Set Brush Color Slate Grey (LinearColor .3,.35,.4,1). On TRUE/flagged set CellText.SetText('F') then CellBorder.Set Brush Color Yellow (.9,.75,.15,1). Use SEPARATE execution paths. Compile.",
          "why": "Covered and flagged cells are both unrevealed but need different colours and symbols.",
          "check": "Covered tiles are blank grey; a flagged tile will show yellow F.",
          "helpTopics": [
            "widget",
            "branch"
          ]
        },
        {
          "title": "Show safe clue and red mine visuals",
          "where": "UpdateCellLook IsOpen TRUE output",
          "do": "Branch(IsMine). TRUE set CellText='X' and Border Brush Color red (.8,.15,.2,1). FALSE Branch(AdjacentMines==0): zero -> CellText=''; number -> convert AdjacentMines Integer to Text and SetText. Then set safe cell Border Brush Color light grey (.72,.78,.8,1) on EACH safe path. Compile.",
          "why": "A blank zero, a number and an exploded mine are three visibly different states a player must understand.",
          "check": "Open safe zeros are blank pale cells, numbers 1..8 appear as text, mines show red X.",
          "helpTopics": [
            "widget",
            "branch"
          ]
        },
        {
          "title": "Refresh new cells at creation",
          "where": "WBP_MineBoard → NewGame For Loop Body",
          "do": "After Add Child to Uniform Grid, call UpdateCellLook on the Created WBP_MineCell reference within the Loop Body. Keep BoardRef=Self and CellIndex=Loop Index. Compile and Play: the '?' placeholders disappear in favour of grey covered cells.",
          "why": "Refreshing each new cell removes the temporary question mark and ensures a consistent starting board.",
          "check": "NewGame shows 36 blank covered squares, not '?'.",
          "helpTopics": [
            "exec"
          ]
        },
        {
          "title": "Make a safe reveal Function and counter",
          "where": "WBP_MineBoard → Functions +",
          "do": "Create OpenOneSafe with Input OpenIndex(Integer). Get Cells[OpenIndex], promote to LOCAL TargetCell (WBP_MineCell Object Reference) inside OpenOneSafe. Branch(NOT TargetCell.IsOpen AND NOT TargetCell.IsFlagged AND NOT TargetCell.IsMine). TRUE → Set TargetCell.IsOpen=true → Set Board.SafeOpened=SafeOpened+1 → call TargetCell.UpdateCellLook. FALSE does nothing. Compile.",
          "why": "A reveal guard prevents repeated clicks and flags from incorrectly raising the number of safe cells opened.",
          "check": "Clicking same safe cell twice will only increase SafeOpened once.",
          "helpTopics": [
            "function",
            "branch"
          ]
        },
        {
          "title": "Create exactly one EndGame event",
          "where": "WBP_MineBoard → Event Graph",
          "do": "Add Custom Event EndGame with Boolean Input DidWin. Entry → Branch(NOT Finished). TRUE → Set Finished=true → Set Won=DidWin → Branch(DidWin). True set StatusText='Minefield cleared!'; False set StatusText='BOOM! Game over.' The clock is added later. Do not build a second EndGame for losing.",
          "why": "One EndGame event handles both outcomes, keeping the finished check and later timer shutdown in one place.",
          "check": "One shared event handles victory or loss, never twice.",
          "helpTopics": [
            "custom-event",
            "branch"
          ]
        },
        {
          "title": "On loss, turn all mine squares into red X",
          "where": "EndGame → losing StatusText path",
          "do": "After setting 'BOOM! Game over.', add For Loop 0..35. Loop Body: Get Cells[Index] → Branch(IsMine). True → Set that cell.IsOpen=true → Call its UpdateCellLook. False does nothing. This is an intentional reveal of mines; DO NOT call OpenOneSafe to reveal them.",
          "why": "Showing all mines after an explosion gives clear feedback about why the player lost.",
          "check": "Losing displays exactly six red X cells.",
          "helpTopics": [
            "exec"
          ]
        },
        {
          "title": "Route every left reveal through one TryReveal event",
          "where": "WBP_MineBoard → Event Graph and existing CellPressed",
          "do": "Add Custom Event TryReveal with Integer Input RevealIndex. Inside: Get Cells[RevealIndex] → Branch(IsOpen OR IsFlagged), TRUE do nothing; FALSE → Branch(IsMine). Mine TRUE: Set cell.IsOpen=true → UpdateCellLook → CALL EndGame(DidWin=false). Mine FALSE: CALL OpenOneSafe(OpenIndex=RevealIndex). In CellPressed KEEP the existing NOT IsFlagged AND NOT IsOpen pre-check. Replace the first-click and later debug Prints with CALL TryReveal(PressedIndex) on both paths, after any first-click PlaceMines → CalculateAllClues → Started=true. Leave WantsFlag TRUE unused until Stage 6.",
          "why": "TryReveal separates ordinary clicks from mine placement and determines whether a tile reveals safely or explodes.",
          "check": "First click cannot explode; later click on a mine ends the round; safe clicked tiles reveal numbers.",
          "helpTopics": [
            "custom-event",
            "branch"
          ]
        },
        {
          "title": "Test a full losing round",
          "where": "L_Minesweeper → Play",
          "do": "Left click a safe tile; its number or blank appears. Click it twice, verifying it changes no further. Keep opening until you hit a mine: exactly six X appear and then no cell responds. Stop Play to restart at this stage; the New Game button is wired later.",
          "why": "Testing repeated clicks and a deliberate loss catches scoring bugs before introducing flags and flood clearing.",
          "check": "All safe and mine reveal paths behave correctly and block double counting.",
          "helpTopics": [
            "playtest"
          ]
        }
      ],
      "names": [
        {
          "name": "UpdateCellLook",
          "kind": "Function",
          "owner": "WBP_MineCell",
          "at": 1
        },
        {
          "name": "OpenOneSafe",
          "kind": "Function",
          "owner": "WBP_MineBoard",
          "at": 5
        },
        {
          "name": "OpenIndex",
          "kind": "Input/Output pin — NOT a Variable",
          "owner": "OpenOneSafe Function",
          "at": 5,
          "type": "Integer"
        },
        {
          "name": "TargetCell",
          "kind": "LOCAL WBP_MineCell Reference",
          "owner": "OpenOneSafe Function",
          "at": 5
        },
        {
          "name": "EndGame",
          "kind": "Custom Event",
          "owner": "WBP_MineBoard",
          "at": 6
        },
        {
          "name": "DidWin",
          "kind": "Input/Output pin — NOT a Variable",
          "owner": "EndGame Custom Event",
          "at": 6,
          "type": "Boolean"
        },
        {
          "name": "TryReveal",
          "kind": "Custom Event",
          "owner": "WBP_MineBoard",
          "at": 8
        },
        {
          "name": "RevealIndex",
          "kind": "Input/Output pin — NOT a Variable",
          "owner": "TryReveal Custom Event",
          "at": 8,
          "type": "Integer"
        }
      ],
      "check": "Safe number/blank reveal works, no duplicate score, and a mine ends the game showing red X cells.",
      "fix": "Only '?' visible? Call UpdateCellLook in NewGame. Red mine on first click? PlaceMines SafeIndex must exclude clicked index. Score doubles? OpenOneSafe guard IsOpen=false. EndGame never fires? Check TryReveal and IsMine branch.",
      "commonMistake": "The name of a Function, Widget, Custom Event or input pin is not automatically a Variable. Open the owning Blueprint; use the named-item labels in the current step.",
      "studentPromise": "One step → Compile → Save → Play → confirm Check. Do not continue if the test fails.",
      "optional": false
    },
    {
      "id": "flags",
      "title": "6. Right-click flags plus a trackpad Flag Mode",
      "tier": "Essential",
      "outcome": "Players can mark suspicious cells with F, remove a flag, switch modes on a trackpad and see an accurate flag counter.",
      "beforeStart": "Stage 5 reveals cells and loses on mines. The CellPressed WantsFlag Boolean is already passed but not handled.",
      "steps": [
        {
          "title": "Add a visible Flag Mode control",
          "where": "WBP_MineBoard → Designer → controls Horizontal Box",
          "do": "Add Button FlagModeButton with child Text FlagModeText reading 'Mode: REVEAL'. Tick Is Variable on BOTH. Put this button beside New Game, not over MineGrid. Compile.",
          "why": "An on-screen mode control supports students using trackpads and makes the action discoverable.",
          "check": "Board shows a Flag Mode button.",
          "helpTopics": [
            "widget"
          ]
        },
        {
          "title": "Make the mode Boolean on BOARD",
          "where": "WBP_MineBoard → Variables +",
          "do": "Create FlagMode (Boolean default false). False means left-click reveals; True means left-click toggles flags. Right-click always flags regardless of mode. Compile.",
          "why": "One shared mode variable changes what a left click means without modifying how the Board stores tiles.",
          "check": "FlagMode is a BOARD Variable, not part of each tile.",
          "helpTopics": [
            "variable"
          ]
        },
        {
          "title": "Connect the toggle Button",
          "where": "WBP_MineBoard → FlagModeButton → Details → Events → OnClicked +",
          "do": "OnClicked WHITE → Set FlagMode = NOT FlagMode → Branch(FlagMode). TRUE set FlagModeText to 'Mode: FLAG'; FALSE set to 'Mode: REVEAL'. Compile.",
          "why": "Giving the player explicit feedback about the active mode prevents accidental flags.",
          "check": "The button switches between reveal and flag displays.",
          "helpTopics": [
            "widget",
            "branch"
          ]
        },
        {
          "title": "Send FlagMode to CellPressed on LEFT clicks",
          "where": "WBP_MineCell → OnMouseButtonDown override",
          "do": "Find LEFT mouse call to BoardRef.CellPressed. Replace fixed WantsFlag=false with Get BoardRef → Get FlagMode Boolean. Keep RIGHT mouse path WantsFlag=true and PressedIndex=CellIndex both places. Compile.",
          "why": "Right click should always flag; only the LEFT mouse action needs to consult the current mode.",
          "check": "Left-click in Flag Mode requests flag; right-click always requests flag.",
          "helpTopics": [
            "get-set",
            "exec"
          ]
        },
        {
          "title": "Create ToggleFlag as a Function",
          "where": "WBP_MineBoard → Functions +",
          "do": "Create ToggleFlag with Integer Input FlagIndex. Get Cells[FlagIndex]; Branch(NOT IsOpen). TRUE → Branch(IsFlagged). Already flagged: Set IsFlagged=false, FlagsPlaced=FlagsPlaced-1, Call that cell.UpdateCellLook. Not flagged: Branch(FlagsPlaced<MineCount); TRUE Set IsFlagged=true → FlagsPlaced=FlagsPlaced+1 → UpdateCellLook. FALSE outputs do nothing. Compile.",
          "why": "The flag guard stops revealed tiles being marked and keeps the flag count inside its legal range.",
          "check": "Only covered cells flag, FlagsPlaced stays between 0 and MineCount.",
          "helpTopics": [
            "function",
            "branch"
          ]
        },
        {
          "title": "Wire WannaFlag and refresh FlagsText",
          "where": "WBP_MineBoard → CellPressed WantsFlag TRUE and Event Graph",
          "do": "Connect WantsFlag TRUE → CALL ToggleFlag(FlagIndex=PressedIndex). Create Custom Event RefreshCounters: Set FlagsText Text using Format Text 'Flags: {Value} / 6' with Value=FlagsPlaced. Call RefreshCounters AFTER ToggleFlag and AFTER NewGame's For Loop Completed. These are CALLS to the SAME event, not two red event definitions.",
          "why": "One counter refresh point keeps the displayed flags total in sync with the Board's state.",
          "check": "Right click shows F and Flags: 1 / 6. Right-click again removes F and shows 0 / 6.",
          "helpTopics": [
            "custom-event",
            "binding"
          ]
        },
        {
          "title": "Reset Flag Mode and counter for every new board",
          "where": "WBP_MineBoard → NewGame state reset chain",
          "do": "Insert Set FlagMode=false and Set FlagModeText='Mode: REVEAL' in the existing NewGame chain, alongside Set FlagsPlaced=0. Do not duplicate the NewGame event or the 36-cell For Loop. Compile.",
          "why": "Mode and count must reset so an old Flag Mode choice cannot confuse the start of a fresh round.",
          "check": "NewGame restores Reveal mode and clears flags.",
          "helpTopics": [
            "get-set"
          ]
        },
        {
          "title": "Test trackpad and right-click workflows",
          "where": "L_Minesweeper → Play",
          "do": "Right-click a covered tile: F. Left-click it in Reveal mode: nothing happens. Right-click again: F disappears. Click Flag Mode button, then LEFT-click a tile to flag; change mode back to Reveal and left-click another tile to open it. Right-click after the game ends does nothing.",
          "why": "Testing both mouse methods proves flags truly protect cells from reveals, not just change their colour.",
          "check": "Both flag methods work and a flagged tile cannot be revealed accidentally.",
          "helpTopics": [
            "playtest"
          ]
        }
      ],
      "names": [
        {
          "name": "FlagModeButton",
          "kind": "Button widget (Is Variable)",
          "owner": "WBP_MineBoard",
          "at": 1
        },
        {
          "name": "FlagModeText",
          "kind": "Text widget (Is Variable)",
          "owner": "WBP_MineBoard",
          "at": 1
        },
        {
          "name": "FlagMode",
          "kind": "Variable",
          "owner": "WBP_MineBoard",
          "at": 2,
          "type": "Boolean • false"
        },
        {
          "name": "ToggleFlag",
          "kind": "Function",
          "owner": "WBP_MineBoard",
          "at": 5
        },
        {
          "name": "FlagIndex",
          "kind": "Input/Output pin — NOT a Variable",
          "owner": "ToggleFlag Function",
          "at": 5,
          "type": "Integer"
        },
        {
          "name": "RefreshCounters",
          "kind": "Custom Event",
          "owner": "WBP_MineBoard",
          "at": 6
        }
      ],
      "check": "Flags toggle by right click or flag mode; flag counter accurate and covered flags block revealing.",
      "fix": "Right click lost? Border must be Visible and WBP_MineCell OnMouseButtonDown must return Handled. Click mode does not change behaviour? Left CellPressed.WantsFlag must use BoardRef.FlagMode.",
      "commonMistake": "The name of a Function, Widget, Custom Event or input pin is not automatically a Variable. Open the owning Blueprint; use the named-item labels in the current step.",
      "studentPromise": "One step → Compile → Save → Play → confirm Check. Do not continue if the test fails.",
      "optional": false
    },
    {
      "id": "flood",
      "title": "7. Automatically clear connected empty squares and detect victory",
      "tier": "Essential",
      "outcome": "Clicking a zero reveals the neighbouring safe region; when all non-mine squares are open, the game declares victory.",
      "beforeStart": "Stage 6 flags and numbers work. The mine count is 6, so the standard target is 30 opened SAFE cells.",
      "steps": [
        {
          "title": "Create an INTEGER Array for pending cell indexes",
          "where": "WBP_MineBoard → Variables +",
          "do": "Create PendingIndexes as Integer Array. This is a simple queue of indexes waiting to be opened; it is NOT an Event named Pending or a list of Widgets. Compile.",
          "why": "The pending queue remembers squares still to check without using recursive Blueprint functions.",
          "check": "PendingIndexes shows as Integer Array on WBP_MineBoard.",
          "helpTopics": [
            "array",
            "variable"
          ]
        },
        {
          "title": "Start a FloodOpen Function with a queue",
          "where": "WBP_MineBoard → Functions +",
          "do": "Create FloodOpen with Input StartIndex(Integer). With this Function selected, create LOCAL CurrentIndex(Integer) and CurrentCell(WBP_MineCell Object Reference). Function Entry WHITE → Clear PendingIndexes → Add(StartIndex) → WhileLoop(Condition=Length(PendingIndexes)>0). No Delay or Timer in this Function.",
          "why": "Using one Function and local variables keeps the flood algorithm separate from the click event.",
          "check": "FloodOpen owns local CurrentIndex, CurrentCell and a queue; While Loop stops once queue is empty.",
          "helpTopics": [
            "function",
            "local"
          ]
        },
        {
          "title": "REMOVE the first queue entry every loop",
          "where": "FloodOpen → While Loop Body",
          "do": "LoopBody WHITE → Set LOCAL CurrentIndex=PendingIndexes[0] → Remove Index(PendingIndexes,0) → Set LOCAL CurrentCell=Cells[CurrentIndex]. Connect WHITE pins in this exact order. WITHOUT Remove Index, the While Loop cannot finish and Unreal will report an infinite loop.",
          "why": "Removing the first queued index on every pass guarantees the While Loop makes progress and eventually stops.",
          "check": "Each loop consumes its first index before reading the cell.",
          "helpTopics": [
            "array",
            "exec"
          ]
        },
        {
          "title": "Only open safe, covered and unflagged cells",
          "where": "FloodOpen after Set CurrentCell",
          "do": "Branch Condition = NOT CurrentCell.IsOpen AND NOT CurrentCell.IsFlagged AND NOT CurrentCell.IsMine. TRUE → Set CurrentCell.IsOpen=true → Set Board.SafeOpened=SafeOpened+1 → Call CurrentCell.UpdateCellLook. FALSE does nothing, so duplicates are safe. Do not CALL OpenOneSafe as well, or SafeOpened can count twice.",
          "why": "Only unopened, safe, unflagged cells should become revealed or increase SafeOpened.",
          "check": "SafeOpened increments once per actually opened safe cell.",
          "helpTopics": [
            "branch",
            "get-set"
          ]
        },
        {
          "title": "Expand only a ZERO clue",
          "where": "FloodOpen after UpdateCellLook",
          "do": "Add Branch(CurrentCell.AdjacentMines==0). TRUE compute Row=CurrentIndex DIV6 and Col=CurrentIndex MOD6. Add OUTER For Loop -1..1 (Index=DR), its LoopBody → INNER For Loop -1..1 (Index=DC). On INNER LoopBody Branch((DR!=0) OR (DC!=0)) to skip centre. This duplicates the grid neighbour maths but NOT the mine placement.",
          "why": "A zero means no adjacent mines, so its neighbours are safe to queue; a numbered square stops the expansion.",
          "check": "Only a zero spreads; a numbered cell does not continue spreading.",
          "helpTopics": [
            "math",
            "branch"
          ]
        },
        {
          "title": "Put neighbouring cells onto the pending queue",
          "where": "FloodOpen → neighbour Branch TRUE",
          "do": "Calculate Row2=Row+DR and Col2=Col+DC. Branch if Row2>=0 AND Row2<6 AND Col2>=0 AND Col2<6. TRUE → NextIndex=(Row2*6)+Col2 → Add Unique(PendingIndexes,NextIndex). No need to reveal immediately: While Loop handles each queued index. Cells already open/flagged will be skipped by the earlier guard.",
          "why": "Boundary checks and Add Unique keep the queue valid and avoid excessive duplicate work.",
          "check": "Only valid board indexes 0..35 enter the queue and no mines are opened by zero expansion.",
          "helpTopics": [
            "array",
            "branch"
          ]
        },
        {
          "title": "Replace one-cell reveal with FloodOpen",
          "where": "WBP_MineBoard → TryReveal, IsMine FALSE path",
          "do": "Disconnect CALL OpenOneSafe. Replace with CALL FloodOpen(StartIndex=RevealIndex). Keep the FIRST-click PlaceMines and CalculateAllClues unchanged, and the mine TRUE → EndGame(false) path unchanged. Do not call BOTH FloodOpen and OpenOneSafe.",
          "why": "Replacing the original one-cell call avoids running two reveal algorithms for the same click.",
          "check": "Clicking a blank safe cell opens multiple connected cells and bordering numbers.",
          "helpTopics": [
            "exec"
          ]
        },
        {
          "title": "Check the win target AFTER flood has finished",
          "where": "TryReveal → AFTER CALL FloodOpen",
          "do": "Add Branch Condition SafeOpened >= (36 - MineCount), using Integer math nodes. TRUE → CALL EndGame(DidWin=true), FALSE do nothing. For six mines win requires 30 safe opens; if testing MineCount=1 the target automatically becomes 35. Flags are NOT part of this win condition.",
          "why": "Winning depends on the number of safe cells, not where the flags happen to be placed.",
          "check": "Revealing all safe squares causes a one-time win.",
          "helpTopics": [
            "branch",
            "math"
          ]
        },
        {
          "title": "Stress-test flood with one mine and with flags",
          "where": "L_Minesweeper → Play",
          "do": "TEMPORARILY MineCount=1; click a zero and confirm a large clear area opens with no mine and no endless loop. Flag a square before starting and confirm flood respects its flag. Print SafeOpened briefly if needed — it must equal the number of opened safe squares. Restore MineCount=6 and remove temporary print. Compile and Save.",
          "why": "A one-mine board gives a large empty region that makes flood errors easier to see and fix.",
          "check": "Auto-clearing terminates, counts once per cell, respects flags and can lead to victory.",
          "helpTopics": [
            "playtest"
          ]
        }
      ],
      "names": [
        {
          "name": "PendingIndexes",
          "kind": "Variable",
          "owner": "WBP_MineBoard",
          "at": 1,
          "type": "Integer Array"
        },
        {
          "name": "FloodOpen",
          "kind": "Function",
          "owner": "WBP_MineBoard",
          "at": 2
        },
        {
          "name": "StartIndex",
          "kind": "Input/Output pin — NOT a Variable",
          "owner": "FloodOpen Function",
          "at": 2,
          "type": "Integer"
        },
        {
          "name": "CurrentIndex",
          "kind": "Local Integer Variable",
          "owner": "FloodOpen Function",
          "at": 2
        },
        {
          "name": "CurrentCell",
          "kind": "Local WBP_MineCell Reference",
          "owner": "FloodOpen Function",
          "at": 2
        }
      ],
      "check": "Clicking a zero opens all reachable safe area; victory triggers after 36-MineCount safe tiles. No repeated counting or endless loop.",
      "fix": "Infinite loop? Remove Index(PendingIndexes,0) must execute on EVERY While Body. Mines opened by flood? AdjacentMines==0 should gate neighbour addition; check IsMineAt. SafeOpened >30? Guard IsOpen=false and do not call OpenOneSafe too.",
      "commonMistake": "The name of a Function, Widget, Custom Event or input pin is not automatically a Variable. Open the owning Blueprint; use the named-item labels in the current step.",
      "studentPromise": "One step → Compile → Save → Play → confirm Check. Do not continue if the test fails.",
      "optional": false
    },
    {
      "id": "finish",
      "title": "8. Add the clock, restart and final end-to-end tests",
      "tier": "Essential",
      "outcome": "A complete playable game with a one-second clock, flags, automatic safe reveals, win/lose screens and New Game.",
      "beforeStart": "Stage 7 can win and lose, but a clock and proper repeatable restart are still missing.",
      "steps": [
        {
          "title": "Add exactly one elapsed-time counter and timer handle",
          "where": "WBP_MineBoard → Variables +",
          "do": "Create SecondsElapsed(Integer default 0) and ClockHandle(Timer Handle). On NewGame reset SecondsElapsed=0. These variables belong to BOARD, not CELL.",
          "why": "The round needs one clock shared by all cells, not 36 separate timers.",
          "check": "One shared SecondsElapsed and ClockHandle exist.",
          "helpTopics": [
            "variable"
          ]
        },
        {
          "title": "Create the one-second update Event",
          "where": "WBP_MineBoard → Event Graph",
          "do": "Create Custom Event TickClock. Entry → Branch(Started AND NOT Finished). TRUE → Set SecondsElapsed=SecondsElapsed+1 → Set TimeText.Text using Format Text 'Time: {Value}' with Value=SecondsElapsed. FALSE do nothing. Compile.",
          "why": "An event owns the actual one-second update while the timer only schedules it.",
          "check": "Calling TickClock updates the label and count only while game is active.",
          "helpTopics": [
            "custom-event",
            "binding"
          ]
        },
        {
          "title": "Start the clock on FIRST reveal, not on flagging",
          "where": "CellPressed → first-click branch",
          "do": "Find PlaceMines → CalculateAllClues → Set Started=true. AFTER Set Started, add Set Timer by Event with Time=1.0, Looping=true, Delegate Create Event bound to TickClock. Set ClockHandle from Timer Return Value. Then call TryReveal. The later-click branch calls TryReveal directly. The NOT IsFlagged AND NOT IsOpen pre-check before mine placement must remain: clicking a flag must never start the clock and does not start another timer.",
          "why": "The first valid reveal starts the game; flags and later clicks must not start extra timers.",
          "check": "Time stays 0 until first LEFT reveal; it then rises by one per second. One timer only.",
          "helpTopics": [
            "timer",
            "exec"
          ]
        },
        {
          "title": "Stop the clock on win or loss",
          "where": "EndGame existing event",
          "do": "After Set Finished=true and Set Won=DidWin, call Clear and Invalidate Timer by Handle(ClockHandle) before showing win/loss StatusText. Do not add second EndGame events or restart the timer here.",
          "why": "Stopping the timer at one common end point prevents the score screen from changing after the game finishes.",
          "check": "Win or defeat freezes the timer and prevents later input.",
          "helpTopics": [
            "timer"
          ]
        },
        {
          "title": "Wire the New Game button to restart the current widget",
          "where": "WBP_MineBoard Designer → RestartButton → Details → Events → OnClicked +",
          "do": "Connect Button OnClicked → CALL NewGame. Do not use Open Level or Create Widget again: NewGame already clears and creates the 36 cell Widgets. Compile.",
          "why": "The button should reuse NewGame so it does not create extra whole Board widgets.",
          "check": "The button works even after a win or loss.",
          "helpTopics": [
            "widget",
            "custom-event"
          ]
        },
        {
          "title": "Finish the NewGame reset sequence (all state)",
          "where": "WBP_MineBoard → existing NewGame Event Graph",
          "do": "At the VERY START of NewGame: Clear and Invalidate Timer by Handle(ClockHandle) → Set Started=false → Finished=false → Won=false → SafeOpened=0 → FlagsPlaced=0 → FlagMode=false → SecondsElapsed=0 → Clear CandidateIndexes → Clear PendingIndexes → Set TimeText='Time: 0' → Set StatusText='Left-click reveal • Right-click flag' → Set FlagModeText='Mode: REVEAL'. THEN the existing Clear Children(MineGrid) → Clear Cells → For Loop(0..35), which calls UpdateCellLook for each spawned cell. After Loop Completed call RefreshCounters. Keep one WHITE exec chain for the reset.",
          "why": "Clearing the timer, arrays, counters and children in one sequence makes repeated games predictable.",
          "check": "New Game resets clock, counters, mode, state, mine candidates, old Widgets and produces 36 clean cells.",
          "helpTopics": [
            "get-set",
            "exec"
          ]
        },
        {
          "title": "Test easy win, restore default MineCount",
          "where": "WBP_MineBoard → temporarily change MineCount, then Play",
          "do": "Set MineCount=1 temporarily. New Game, uncover the safe cells (zero expansion should help) and confirm 'Minefield cleared!' appears and timer freezes. Start a new game, flag and unflag. Then RESTORE MineCount=6, Compile, Save. The formula 36-MineCount means both test and normal play can win.",
          "why": "Testing with one mine verifies the win calculation also works when difficulty changes.",
          "check": "One-mine game can win; final saved MineCount is SIX.",
          "helpTopics": [
            "playtest"
          ]
        },
        {
          "title": "Test normal-game defeat and five consecutive restarts",
          "where": "L_Minesweeper → Play",
          "do": "MineCount=6. First left-click is safe. Make flags, reveal numbers, click a mine eventually: six red X appear and timer freezes. Click New Game five times: each time 36 covered cells, Flags 0/6, Time0, Mode REVEAL, safe first click and new random mines. Watch Output Log for Accessed None or infinite-loop warnings.",
          "why": "Five consecutive restarts expose stale-state bugs that a single Play test can miss.",
          "check": "One real win, one loss, working flags and repeatable New Game, with no duplicate grids or timers.",
          "helpTopics": [
            "playtest"
          ]
        },
        {
          "title": "Prepare an accessible final build",
          "where": "WBP_MineBoard and WBP_MineCell Designer; Platforms → Windows",
          "do": "Keep enough text contrast, centre your 6×6 grid and show a hint 'Left click reveal • Right click flag • Flag Mode for trackpads'. Set Project Settings → Maps & Modes startup map to L_Minesweeper, Save everything. Package Windows if the college build environment supports it; otherwise prepare an in-editor demonstration. Do not spend hours packaging instead of testing the game.",
          "why": "The final build must be playable and understandable without needing Unreal Editor controls explained by a teacher.",
          "check": "Another student can play, win/lose and restart unaided; the project opens directly into Minesweeper.",
          "helpTopics": [
            "art",
            "playtest"
          ]
        }
      ],
      "names": [
        {
          "name": "SecondsElapsed",
          "kind": "Variable",
          "owner": "WBP_MineBoard",
          "at": 1,
          "type": "Integer • 0"
        },
        {
          "name": "ClockHandle",
          "kind": "Variable",
          "owner": "WBP_MineBoard",
          "at": 1,
          "type": "Timer Handle"
        },
        {
          "name": "TickClock",
          "kind": "Custom Event",
          "owner": "WBP_MineBoard",
          "at": 2
        }
      ],
      "check": "A full Minesweeper game starts, plays, wins, loses, flags and restarts without errors or duplicate timers.",
      "fix": "Timer doubles? NewGame must Clear and Invalidate Timer by Handle and only the first reveal starts another. First-click mine? SafeIndex excluded. Restart gets 72 cells? Clear Children(MineGrid) and Clear Cells both run before For Loop. Win never fires? Check SafeOpened 36-MineCount AFTER FloodOpen. If the timer starts when clicking a flagged tile, preserve the CellPressed guard NOT IsFlagged AND NOT IsOpen BEFORE the NOT Started check.",
      "commonMistake": "The name of a Function, Widget, Custom Event or input pin is not automatically a Variable. Open the owning Blueprint; use the named-item labels in the current step.",
      "studentPromise": "One step → Compile → Save → Play → confirm Check. Do not continue if the test fails.",
      "optional": false
    },
    {
      "id": "polish",
      "title": "9. Optional: improve presentation and showcase the game",
      "tier": "Creative",
      "outcome": "Polish the finished game, test it with new players and prepare evidence without changing the working logic.",
      "beforeStart": "Stage 8 is already a complete game. Save a copy before attempting polish.",
      "steps": [
        {
          "title": "Improve readability without changing the logic",
          "where": "WBP_MineCell → Designer",
          "do": "Increase CellText font to around 20–22, adjust square border colours so covered, flagged, safe and mine are visibly distinct. Keep Border Visible/hit-testable and Text not intercepting clicks. Do not change Array indexes or flag rules.",
          "why": "Readable clue numbers and high-contrast states matter more than decorative textures in a logic puzzle.",
          "check": "All numbers, F and X are clearly visible.",
          "helpTopics": [
            "widget"
          ]
        },
        {
          "title": "Add one short rule panel",
          "where": "WBP_MineBoard → Designer",
          "do": "Place a Text under the grid: 'Numbers = mines in surrounding 8 squares. Open every safe square to win.' Keep it separate from MineGrid so it does not block tile clicks.",
          "why": "Brief on-screen instructions let the player understand the objective and controls independently.",
          "check": "A newcomer understands the aim without teacher explanation.",
          "helpTopics": [
            "widget"
          ]
        },
        {
          "title": "Have another student test it",
          "where": "L_Minesweeper → Play",
          "do": "Ask a classmate to reveal a cell, flag/unflag one, switch Flag Mode, uncover an empty area, lose, restart, and eventually win. Note any point where they ask for instructions. Fix readability before adding effects.",
          "why": "A new player is more likely to find unclear interactions than the student who built them.",
          "check": "Someone who did not build it can complete the game without coaching.",
          "helpTopics": [
            "playtest"
          ]
        },
        {
          "title": "Show evidence and an end-to-end demonstration",
          "where": "Screenshots, Teams or project evidence",
          "do": "Take screenshots of covered grid, some clue numbers and flags, and a win/lose state. Describe the Array of 36 Widgets, safe first-click candidate list and flood queue. Demonstrate restart without leaving the game.",
          "why": "Showing the mine placement, clue logic and finished game is strong evidence that the mechanics were understood.",
          "check": "A finished complete-game project can be shown or submitted with understandable evidence.",
          "helpTopics": [
            "art"
          ]
        }
      ],
      "names": [
        {
          "name": "WBP_MineBoard",
          "kind": "Existing Widget Blueprint asset",
          "owner": "Content/Minesweeper",
          "at": 0
        },
        {
          "name": "WBP_MineCell",
          "kind": "Existing Widget Blueprint asset",
          "owner": "Content/Minesweeper",
          "at": 0
        }
      ],
      "check": "A polished, player-tested, complete Minesweeper game with explanatory evidence.",
      "fix": "Visual changes may obscure mouse events. Keep CellBorder hit-testable and retest left and right clicks.",
      "commonMistake": "The name of a Function, Widget, Custom Event or input pin is not automatically a Variable. Open the owning Blueprint; use the named-item labels in the current step.",
      "studentPromise": "One step → Compile → Save → Play → confirm Check. Do not continue if the test fails.",
      "optional": true
    }
  ]
};

/* 4 Nov 2026: Literal, one-task-at-a-time beginner actions; stages, original checks and IDs remain stable. */
(function(){
const stages={
  "setup": [
    "In Unreal Engine 5.8, start Games → Blank → Blueprint → Desktop and name the project MinesweeperStudy.||Open the Content Drawer and create a folder called Minesweeper.||Choose File → New Level → Basic (or Empty).||Choose File → Save Current Level As and save it as Content/Minesweeper/L_Minesweeper.||Open Edit → Project Settings → Maps & Modes.||Set Game Default Map to L_Minesweeper.||Save the level.",
    "Open Content/Minesweeper in the Content Drawer.||Right-click empty space → User Interface → Widget Blueprint → User Widget.||Name the asset WBP_MineBoard and double-click it.||Open Designer. Keep the Canvas Panel root.||Drag a Vertical Box from Palette into Canvas Panel.||Select the Vertical Box → Details → Slot (Canvas Panel Slot). Set Anchors to centre and Alignment X=0.5, Y=0.5.||Keep this asset open: it is the BOARD widget, not an actor or variable.",
    "Open WBP_MineBoard → Designer and select the Vertical Box.||Drag in a Text widget and change its Text value to MINESWEEPER.||Add a Horizontal Box below the title. Inside it add Text widgets named FlagsText and TimeText; set their displayed text to Flags: 0 / 6 and Time: 0.||Still in the Horizontal Box add a Button named RestartButton, with a child Text reading New Game.||Add a Uniform Grid Panel named MineGrid BELOW the Horizontal Box.||Add a Text widget named StatusText below MineGrid and set it to Left click to reveal.||Select FlagsText, TimeText, RestartButton, MineGrid and StatusText one at a time; tick Is Variable for each in Details.||Click Compile, then Save. These names are DESIGNER widgets, not Blueprint Variables you create again.",
    "In Content/Minesweeper right-click → User Interface → Widget Blueprint → User Widget. Name it WBP_MineCell.||Double-click WBP_MineCell and go to Designer.||Add a Size Box as its root. Under Details set Width Override=54 and Height Override=54.||Place a Border inside Size Box, rename Border to CellBorder and leave Visibility=Visible.||Put a Text widget inside CellBorder; rename it CellText and centre the text horizontally and vertically.||Set the temporary CellText value to ?.||Tick Is Variable on CellBorder and CellText, then Compile and Save.",
    "Open WBP_MineCell → Graph → My Blueprint. Click + Variable.||Rename the variable CellIndex; in Details set type Integer and default 0.||Tick Instance Editable and Expose on Spawn on CellIndex.||Click + Variable again. Name it BoardRef and set type WBP_MineBoard Object Reference (the existing Widget Blueprint).||Tick Instance Editable and Expose on Spawn on BoardRef too.||Compile and Save. These are two CELL variables; do not create another board.",
    "Open WBP_MineBoard → Event Graph. Right-click blank graph space and choose Add Custom Event.||Rename the RED event node CellPressed.||Select CellPressed; in Details → Inputs click +, name the first pin PressedIndex and set its type Integer.||Click + again, name the second pin WantsFlag and set its type Boolean.||Drag from CellPressed WHITE execution pin → search Print String. Set In String to CLICK RECEIVED.||Compile. PressedIndex and WantsFlag are EVENT INPUT PINS; do not add them as Variables.",
    "Open your L_Minesweeper level. Toolbar → Blueprints → Open Level Blueprint.||From Event BeginPlay WHITE pin create Create Widget. Set Class=WBP_MineBoard and connect Get Player Controller (0) to Owning Player.||Drag Create Widget Return Value → Add to Viewport. Connect Create Widget WHITE execution to Add to Viewport WHITE input.||From Get Player Controller drag → Set Show Mouse Cursor and tick true.||From that Player Controller drag → Set Input Mode UI Only. Connect Create Widget Return Value to In Widget to Focus.||Connect the WHITE execution in this order: BeginPlay → Create Widget → Add to Viewport → Set Show Mouse Cursor → Set Input Mode UI Only.||Compile the Level Blueprint and save L_Minesweeper.",
    "Click Play (not Simulate) with L_Minesweeper open.||Look for MINESWEEPER, Flags: 0 / 6, Time: 0, New Game and the status text.||Confirm the mouse cursor is visible and there is no second board.||The grid should be EMPTY for now; 36 cells are created in Stage 2.||Stop Play and Save All. If the screen is blank, revisit the Level Blueprint's WHITE pins and Game Default Map."
  ],
  "grid": [
    "Open WBP_MineBoard → Event Graph → My Blueprint. Click + Variable.||Name it Cells. In Variable Type search WBP_MineCell and choose Object Reference.||Click the container icon beside the type and choose Array (the small square-grid icon).||Compile. Cells is an ARRAY of cell-widget references; MineGrid is the Uniform Grid Panel already in Designer.",
    "Still in WBP_MineBoard Event Graph, right-click → Add Custom Event; name the RED event NewGame.||Drag MineGrid from My Blueprint into the graph as GET. Drag from it → Clear Children.||Drag Cells as GET and from it create the Clear (Array) node.||From empty graph space create a For Loop node; set First Index=0 and Last Index=35.||Connect WHITE execution NewGame → Clear Children → Clear (Cells) → For Loop.||Do not add a new level or a second board. This loop will build all 36 cells.",
    "Find the For Loop created in NewGame. Its green Index pin tells you which cell is being built.||Drag from Index and search integer Divide; set the other input to 6. Its output is the ROW.||Drag from Index again and search integer Modulo (%); set the other input to 6. Its output is the COLUMN.||Do NOT create Row or Column Variables. Use these two green RESULT pins in the next task.||Example: Index=7 gives row 1 and column 1.",
    "From NewGame's For Loop Loop Body WHITE pin, create Create Widget and set Class=WBP_MineCell.||Connect Get Owning Player to Owning Player. Connect Loop Index to CellIndex; connect Self to BoardRef.||Drag from Cells (GET) → Add (Array). Connect Create Widget Return Value to Add Item.||Drag MineGrid (GET) → Add Child to Uniform Grid. Connect the SAME Create Widget Return Value to Content.||Connect Index DIV 6 to In Row and Index MOD 6 to In Column.||Connect WHITE execution Loop Body → Create Widget → Add (Array) → Add Child to Uniform Grid.||Compile. It is ONE Create Widget node run 36 times, not 36 separate nodes.",
    "In WBP_MineBoard Event Graph, right-click and add Event Construct (the built-in RED Widget event).||Drag from Event Construct WHITE pin and search Call NewGame (the call is a BLUE node).||Connect Event Construct → Call NewGame with the WHITE execution wire.||Compile, Save, press Play. You should see a 6×6 grid of 36 '?' cell widgets.||If the grid is empty, check the NewGame call and the Loop Body WHITE wire.",
    "Open WBP_MineCell → Graph. In My Blueprint choose Overrides → OnMouseButtonDown; Unreal makes an override with MyGeometry and MouseEvent pins.||Drag from MouseEvent and create Get Effecting Button.||Drag from the returned Key → Equal (Key), set other Key=Left Mouse Button.||Connect the RED OnMouseButtonDown WHITE execution → Branch; connect Equal (Key) to Condition.||From Branch True drag the BoardRef BLUE variable → Call CellPressed. Set PressedIndex from CellIndex and WantsFlag=false.||From that call WHITE output connect the function Return Node and set Return Value to Handled (Event Reply).||For now, connect Branch False to a Return Node with Return Value=Unhandled.||Compile and Play. Left-click a tile: the Board should print CLICK RECEIVED.",
    "Stay in WBP_MineCell → OnMouseButtonDown override.||Disconnect Branch False from its temporary Unhandled return. From Branch False create a SECOND Branch.||From MouseEvent → Get Effecting Button → Equal (Key) Right Mouse Button; connect this Boolean to second Branch Condition.||From second Branch True call BoardRef.CellPressed with PressedIndex=CellIndex and WantsFlag=true.||Connect this call's WHITE output to a Handled Return Node.||Connect second Branch False to Unhandled Return. Keep the LEFT mouse path unchanged.||Compile. Both mouse buttons should reach the SAME Board event.",
    "Open WBP_MineBoard → Event Graph and find RED CellPressed.||Locate its temporary Print String CLICK RECEIVED.||Drag from empty graph space → Format Text. Enter Index {Index} / Flag {Flag} in the Format field.||Connect event input PressedIndex to Format Text Index; connect WantsFlag to Flag (convert Boolean to Text if the pin needs it).||Convert Format Text output to String if required; connect to Print String In String.||Compile and Play. Left-click top left → Index 0; top right → 5; bottom right → 35. Right-click should show Flag true.||Save. The temporary print is removed in Stage 3."
  ],
  "mines": [
    "Open WBP_MineBoard → My Blueprint → Variables. Create MineCount (Integer, default 6).||Create Started (Boolean, false), Finished (Boolean, false) and Won (Boolean, false).||Create SafeOpened (Integer, 0) and FlagsPlaced (Integer, 0).||Create CandidateIndexes (Integer Array: change container from Single to Array).||Click Compile, select each variable and confirm the default values. ALL seven belong to BOARD, not the Cell.",
    "Open WBP_MineCell → My Blueprint → Variables.||Add IsMine (Boolean, default false).||Add IsOpen (Boolean, default false).||Add IsFlagged (Boolean, default false).||Add AdjacentMines (Integer, default 0).||Compile and Save. Every new cell will keep its own four values.",
    "Open WBP_MineBoard → Event Graph; find RED NewGame.||BEFORE its existing Clear Children node, insert Set Started=false, Set Finished=false, Set Won=false.||After those insert Set SafeOpened=0 and Set FlagsPlaced=0.||Drag CandidateIndexes as GET → Clear (Array).||Wire the WHITE execution from NewGame through these resets → Clear CandidateIndexes → the EXISTING Clear Children → Clear Cells → For Loop.||Do not create another NewGame event or remove the grid-building loop.",
    "Open WBP_MineBoard → My Blueprint → Functions → +. Rename the FUNCTION PlaceMines.||Click its PURPLE Function Entry node; under Details → Inputs click +. Name the input SafeIndex and set type Integer.||Drag CandidateIndexes as GET → Clear (Array). Connect Function Entry WHITE execution into Clear.||Create a For Loop with First Index=0 and Last Index=35. Connect Clear WHITE output → For Loop WHITE input.||Compile. SafeIndex is a green FUNCTION INPUT PIN, not a variable to create.",
    "Inside PlaceMines, find the first For Loop (0 through 35).||Drag from Loop Index (green) → Not Equal (Integer); compare it to SafeIndex.||Connect Loop Body WHITE pin → Branch and put Not Equal output on Branch Condition.||From CandidateIndexes (GET) create Add (Array). Connect Loop Index to Add Item.||Connect Branch TRUE WHITE → Add WHITE. Leave Branch FALSE empty.||Compile. When this loop completes, the array will contain every index except the first clicked one.",
    "Still inside PlaceMines, drag CandidateIndexes (GET) → Shuffle (Array).||Connect the FIRST For Loop Completed WHITE output to Shuffle WHITE input.||Add a SECOND For Loop after Shuffle and connect WHITE Shuffle → second For Loop.||Set second For Loop First Index=0. For Last Index, drag MineCount (GET) → Integer Subtract 1; connect that result.||Do not call Shuffle inside either Loop Body. It happens ONCE before choosing mines.",
    "Inside PlaceMines, use the SECOND For Loop Loop Body WHITE pin.||From CandidateIndexes (GET) choose Get (Array) and connect second Loop Index to its Index. This green output is the selected cell INDEX.||From Cells (GET) choose Get (Array); connect the selected index to its Index.||From the returned BLUE WBP_MineCell reference drag and search Set IsMine (the SET on this CELL object, not on the Board). Tick true.||Connect second Loop Body WHITE → Set IsMine WHITE.||Compile. Six unique cells are marked because Shuffle returned six different candidate indexes.",
    "Open WBP_MineBoard → Event Graph → RED CellPressed. Remove the temporary Print String.||From RED CellPressed create Branch with Condition NOT Finished. Connect event WHITE to Branch WHITE input.||From TRUE create Branch with Condition WantsFlag. Leave its TRUE pin unused until Stage 6.||From WantsFlag FALSE get Cells[PressedIndex] and read that cell's IsFlagged and IsOpen. Use NOT IsFlagged AND NOT IsOpen for a third Branch Condition. If FALSE do nothing.||From that Branch TRUE add Branch with Condition NOT Started.||From NOT Started TRUE: Call PlaceMines; connect PressedIndex → SafeIndex. After it, Set Started=true, then Print String FIRST CLICK PREPARED.||From NOT Started FALSE: Print String SAME MINES.||Compile and Play. The first eligible LEFT click places mines once; clicking a flag/open cell or right-click cannot place mines.",
    "Open PlaceMines and find Set IsMine=true inside the second For Loop Body.||Temporarily add a Print String after it; feed the selected integer mine index into In String using a conversion node.||Press Play, left-click cell 0. Verify six DIFFERENT indexes print and none is 0.||Stop Play, press Play again and first-click cell 18. Verify none of the six printed indexes is 18.||Remove this temporary Print String so Set IsMine remains in the loop.||Compile and Save. Do not leave debug prints in the finished game."
  ]
};
for(const [id,entries] of Object.entries(stages)){
 const stage=window.UE5_MINESWEEPER_GUIDE.stages.find(s=>s.id===id);
 if(!stage||stage.steps.length!==entries.length)throw Error('Minesweeper action count mismatch: '+id);
 stage.steps.forEach((step,i)=>{step.actions=entries[i].split('||').map(v=>v.trim()).filter(Boolean)});
}
})();

(function(){const stage=window.UE5_MINESWEEPER_GUIDE.stages.find(s=>s.id==='clues');const lines=["Open WBP_MineBoard → My Blueprint → Functions → +; name the new Function IsMineAt.||Select the purple Entry node. In Details → Inputs click + and create Row (Integer), then Column (Integer).||Select the Function and in Details → Outputs create HasMine (Boolean).||Compile. These are Function Input/Output pins, NOT Board variables.","In IsMineAt, drag from Row pin → Integer >= 0. Make another comparison Row < 6.||Repeat for Column >= 0 and Column < 6.||Connect all four comparison results with Boolean AND nodes.||From Function Entry WHITE connect Branch. Connect the final AND result to Condition.||Connect Branch FALSE WHITE to a Return Node with HasMine=false. Only the TRUE branch may read an Array.","From Row make Integer Multiply by 6. Add Column with Integer Add; this green result is the cell index.||Get Cells (Array) → Get node. Connect the calculated index.||Drag from the resulting BLUE WBP_MineCell reference → Get IsMine (Boolean).||Connect Branch TRUE WHITE to a Return Node and connect Get IsMine to its HasMine output.||Compile. Out-of-bounds positions return false without indexing Cells.","Create Function CountAdjacentMines in WBP_MineBoard. Add Function input CheckIndex (Integer) and Function output Count (Integer).||With this Function selected in My Blueprint, create LOCAL variable ThisRow (Integer).||Create LOCAL variables ThisColumn (Integer) and RunningCount (Integer).||From Function Entry WHITE connect Set ThisRow=CheckIndex DIV 6.||Then Set ThisColumn=CheckIndex MOD 6. Then Set RunningCount=0.||Compile. All three are LOCAL variables inside CountAdjacentMines.","After Set RunningCount=0, create an OUTER For Loop: First Index=-1, Last Index=1.||From OUTER Loop Body WHITE create an INNER For Loop: -1 to 1.||The outer green Index is the row offset. The inner green Index is the column offset; do not create DR/DC Variables.||From inner Loop Body WHITE add Branch. Make Condition (outer Index != 0) OR (inner Index != 0) using Integer Not Equal and Boolean OR.||The Branch FALSE path skips the centre cell. The TRUE path is used next.||Connect OUTER Loop Completed WHITE → Return Node, and connect Get RunningCount to Count.","On the inner Branch TRUE WHITE output, add Call IsMineAt.||For IsMineAt Row, calculate Get ThisRow + OUTER Loop Index with Integer Add.||For IsMineAt Column, calculate Get ThisColumn + INNER Loop Index.||Connect Branch TRUE WHITE → Call IsMineAt WHITE → another Branch WHITE; set its Condition to returned HasMine.||On that second Branch TRUE, Set RunningCount=Get RunningCount+1. Leave FALSE unused.||Compile. The loops advance automatically; no extra While Loop is needed.","Create Function CalculateAllClues in WBP_MineBoard.||From Function Entry WHITE create For Loop 0–35.||On Loop Body, Get Cells[Loop Index] and keep the BLUE cell object reference.||From Loop Body WHITE, Call CountAdjacentMines with CheckIndex=Loop Index.||From that BLUE cell object reference create Set AdjacentMines. Connect Count from CountAdjacentMines to its value.||Connect WHITE Loop Body → Call CountAdjacentMines → Set AdjacentMines. Compile.","Open WBP_MineBoard → Event Graph → CellPressed. Find the first-click execution chain Call PlaceMines → Set Started=true.||Insert a Call CalculateAllClues BETWEEN them.||Make WHITE execution PlaceMines → CalculateAllClues → Set Started=true.||Leave later-click calls unchanged; you must not recalculate clues on every click.||Compile and Save.","Temporarily change MineCount default from 6 to 1 in WBP_MineBoard, then Compile.||Inside CalculateAllClues temporarily add Print String after Set AdjacentMines, showing Loop Index and returned Count.||Play and first-click any tile. All clues must be 0 or 1, with 1 only around the single mine.||Stop Play. Delete the temporary Print String.||Restore MineCount default 6; Compile and Save."];if(stage.steps.length!==lines.length)throw Error('clues count');stage.steps.forEach((s,i)=>s.actions=lines[i].split('||'));})();

/* 4 Nov: literal revealed-cell and flagging actions. */
(function(){const sets={"reveal":["Open WBP_MineCell → My Blueprint → Functions → +. Name this Function UpdateCellLook.||Drag existing CellText and CellBorder DESIGNER widgets into its graph as GET.||Drag existing CELL Variables IsOpen, IsMine, IsFlagged and AdjacentMines into the graph as GET.||From purple Entry WHITE create Branch, Condition=Get IsOpen. FALSE is covered; TRUE is open.||Do not create a second Variable called Colour or Number.","From UpdateCellLook IsOpen FALSE add Branch Condition=Get IsFlagged.||From IsFlagged FALSE: drag CellText → SetText to blank; connect its WHITE output → CellBorder.Set Brush Color R=.30,G=.35,B=.40,A=1.||From IsFlagged TRUE: CellText.SetText F → CellBorder.Set Brush Color R=.90,G=.75,B=.15,A=1.||Connect WHITE execution separately for each path; Compile.","From UpdateCellLook IsOpen TRUE add Branch Condition=Get IsMine.||Mine TRUE: CellText.SetText X → CellBorder.Set Brush Color R=.80,G=.15,B=.20,A=1.||Mine FALSE: add Branch Condition=(Get AdjacentMines == 0).||Zero TRUE: CellText.SetText blank → CellBorder.Set Brush Color R=.72,G=.78,B=.80,A=1.||Number FALSE: AdjacentMines → ToText(Int) → CellText.SetText → same pale Set Brush Color.||Connect WHITE execution on every path; Compile.","Open WBP_MineBoard Event Graph → RED NewGame. Find For Loop → Create Widget → Add Child to Uniform Grid.||From Create Widget Return Value BLUE reference drag → Call UpdateCellLook.||Connect WHITE Add Child to Uniform Grid → Call UpdateCellLook.||Compile and Play: all 36 covered cells should now show blank grey tiles, not '?' characters.","Create FUNCTION OpenOneSafe in WBP_MineBoard. Add input OpenIndex (Integer) on its purple Entry.||Get Cells[OpenIndex]. Promote the BLUE cell reference to LOCAL variable TargetCell (WBP_MineCell Object Reference).||Connect Entry WHITE → Set TargetCell → Branch Condition=(NOT TargetCell.IsOpen AND NOT TargetCell.IsFlagged AND NOT TargetCell.IsMine).||On Branch TRUE set TargetCell.IsOpen=true → Set BOARD SafeOpened=SafeOpened+1 → Call TargetCell.UpdateCellLook.||Leave Branch FALSE empty; Compile. Clicking the same cell twice must not increment SafeOpened twice.","In WBP_MineBoard Event Graph add RED Custom Event EndGame. Add Input DidWin (Boolean) on that event.||EndGame WHITE → Branch Condition=NOT Finished. Leave FALSE empty.||On TRUE Set Finished=true → Set Won=DidWin → Branch Condition=DidWin.||On DidWin TRUE get StatusText → SetText Minefield cleared!||On DidWin FALSE get StatusText → SetText BOOM! Game over.||Compile. Keep one EndGame event for both outcomes.","Inside EndGame find SetText BOOM! Game over.||From its WHITE output add For Loop 0..35.||On Loop Body get Cells[Loop Index] and from the BLUE cell ref Get IsMine.||Branch Condition=IsMine. On TRUE Set IsOpen=true ON THAT CELL → Call that cell.UpdateCellLook.||Leave FALSE unconnected; Compile. All mines reveal only when the player loses.","In WBP_MineBoard add RED Custom Event TryReveal, input RevealIndex (Integer).||Get Cells[RevealIndex]. Branch Condition=(cell.IsOpen OR cell.IsFlagged); TRUE does nothing.||FALSE → Branch Condition=cell.IsMine. Mine TRUE: Set cell.IsOpen=true → Call cell.UpdateCellLook → Call EndGame(DidWin=false).||Mine FALSE: Call OpenOneSafe(OpenIndex=RevealIndex).||Find RED CellPressed. Replace FIRST CLICK PREPARED Print String with Call TryReveal(RevealIndex=PressedIndex).||Replace SAME MINES Print String with another Call TryReveal; these are two CALLS to the SAME red event.||Keep first-click WHITE order PlaceMines → CalculateAllClues → Set Started=true → TryReveal. Later clicks call TryReveal directly.||Compile.","Compile and save Board and Cell Widgets.||Play and left-click a covered tile; the first click must be safe.||Click the same tile again; SafeOpened must not change.||Keep revealing until you hit a mine. All six mines should show X, and later clicks should have no effect.||If clicks keep working after defeat check the NOT Finished Branch at the start of CellPressed."],"flags":["Open WBP_MineBoard → Designer. Find the Horizontal Box beside RestartButton.||Add a Button named FlagModeButton and put Text named FlagModeText inside; set its displayed text Mode: REVEAL.||Select BOTH widgets and tick Is Variable in Details.||Compile. Do not place this button inside MineGrid.","In WBP_MineBoard → My Blueprint → Variables click +. Name it FlagMode, type Boolean, default false.||Compile. false means left click reveals, true means left click flags; right click always flags.","In WBP_MineBoard Designer select FlagModeButton → Details → Events → + OnClicked.||OnClicked WHITE → Set FlagMode, value NOT (Get FlagMode).||From Set FlagMode WHITE add Branch Condition=Get FlagMode.||TRUE: get FlagModeText → SetText Mode: FLAG. FALSE: get FlagModeText → SetText Mode: REVEAL.||Compile and test the label.","Open WBP_MineCell → OnMouseButtonDown override.||Find the LEFT Call CellPressed. Get BoardRef and drag from it → Get FlagMode.||Connect this Boolean to WantsFlag on LEFT Call CellPressed instead of false.||Keep PressedIndex=Get CellIndex on both paths; keep RIGHT WantsFlag=true.||Compile.","In WBP_MineBoard create FUNCTION ToggleFlag with Entry Input FlagIndex (Integer).||Get Cells[FlagIndex] and promote BLUE cell reference to LOCAL TargetCell (WBP_MineCell Object Reference).||Entry WHITE → Set TargetCell → Branch Condition=NOT TargetCell.IsOpen. Leave FALSE empty.||TRUE → Branch Condition=TargetCell.IsFlagged.||If already flagged: Set TargetCell.IsFlagged=false → Set BOARD FlagsPlaced=FlagsPlaced-1 → Call TargetCell.UpdateCellLook.||If not flagged: Branch Condition=FlagsPlaced < MineCount. TRUE → Set TargetCell.IsFlagged=true → Set FlagsPlaced=FlagsPlaced+1 → Call UpdateCellLook. FALSE does nothing.||Compile.","Open WBP_MineBoard Event Graph → RED CellPressed → Branch WantsFlag. Connect TRUE WHITE → Call ToggleFlag(FlagIndex=PressedIndex).||Right-click → Add Custom Event RefreshCounters (RED). From its WHITE pin get existing FlagsText → SetText.||Add Format Text: Flags: {Value} / 6. Connect BOARD FlagsPlaced to Value and resulting Text to FlagsText.SetText.||Connect WHITE Call ToggleFlag → Call RefreshCounters.||In RED NewGame, from For Loop Completed WHITE pin also Call RefreshCounters. These are two CALLS to one event, not two definitions.||Compile.","In RED NewGame's existing reset chain, after Set FlagsPlaced=0 insert Set FlagMode=false.||Get existing FlagModeText → SetText Mode: REVEAL. Insert its WHITE pins before Clear Children.||Continue through the original Clear Children → Clear Cells → For Loop.||Compile and Save. Do not make a second NewGame.","Press Play; right-click a covered tile to make an F and show Flags: 1 / 6.||Left-click that flagged tile in REVEAL mode: it must stay flagged.||Right-click it again: F disappears and Flags: 0 / 6.||Press Flag Mode; the label should become Mode: FLAG. LEFT-click an unflagged covered tile to flag.||Switch to REVEAL and left-click a different tile to open.||Six flags can be placed; a seventh must be refused."]};for(const [id,lines]of Object.entries(sets)){const stage=window.UE5_MINESWEEPER_GUIDE.stages.find(s=>s.id===id);if(!stage||stage.steps.length!==lines.length)throw Error('Minesweeper '+id+' count');stage.steps.forEach((s,i)=>s.actions=lines[i].split('||'));}})();

/* Literal flood queue and win-condition actions. */
(function(){const stage=window.UE5_MINESWEEPER_GUIDE.stages.find(s=>s.id==='flood');const lines=["Open WBP_MineBoard → My Blueprint → Variables → +.||Name the new Variable PendingIndexes. Set its type to Integer.||Click the small container icon beside Type and choose Array (not Set).||Compile. This is a BOARD Integer Array of cell indexes, not an event or cell-widget Array.","Create FUNCTION FloodOpen in WBP_MineBoard. Add Entry Input StartIndex (Integer).||With FloodOpen selected, in My Blueprint → Local Variables create CurrentIndex (Integer).||Create another LOCAL variable CurrentCell (WBP_MineCell Object Reference).||From purple Entry WHITE drag PendingIndexes (GET) → Clear (Array).||From Clear WHITE drag PendingIndexes → Add (Array), Item=StartIndex.||After Add WHITE create While Loop. Set its Condition to Length(PendingIndexes) > 0, using Array Length and Integer Greater Than.||Compile. Do NOT use Delay, Tick or a Timer inside this Function.","Inside FloodOpen find While Loop Loop Body WHITE.||Drag PendingIndexes (GET) → Get (Array), set Index=0.||Drag Set LOCAL CurrentIndex into graph; connect its value to PendingIndexes[0]. Connect Loop Body WHITE → Set CurrentIndex.||From PendingIndexes (GET) create Remove Index(Array), with Index=0. Connect Set CurrentIndex WHITE → Remove Index WHITE.||Drag Cells (GET) → Get (Array), connect Get CurrentIndex to its Index.||From that BLUE cell reference drag Set LOCAL CurrentCell. Connect Remove Index WHITE → Set CurrentCell WHITE.||Compile. REMOVE INDEX 0 on every pass; without this the While Loop never finishes.","From Set CurrentCell WHITE add Branch.||For the Branch Condition, drag Get CurrentCell BLUE pin and read IsOpen, IsFlagged and IsMine from that CELL.||Combine NOT IsOpen AND NOT IsFlagged AND NOT IsMine with Boolean NOT/AND.||On TRUE Set CurrentCell.IsOpen=true → Set BOARD SafeOpened=SafeOpened+1 → Call CurrentCell.UpdateCellLook.||Leave FALSE empty so previously opened or flagged cells are skipped.||Compile. This is the ONLY place flood opening increments SafeOpened; do not ALSO call OpenOneSafe.","After Call CurrentCell.UpdateCellLook WHITE, add Branch Condition=(Get CurrentCell.AdjacentMines == 0).||Only TRUE continues to look at neighbours; FALSE ends for this cell.||For the Row value use Get CurrentIndex DIV 6. For Column value use Get CurrentIndex MOD 6. These are node results, not variables.||On the zero TRUE WHITE path create OUTER For Loop from -1 to 1.||From its Loop Body WHITE create INNER For Loop from -1 to 1.||On inner Loop Body WHITE create Branch Condition=(outer Loop Index != 0) OR (inner Loop Index != 0), skipping centre 0,0.||The next task uses that TRUE path; do not connect a separate Return in the nested loops.","From OUTER Loop Index calculate Row2=(CurrentIndex DIV 6) + outer Index using Integer Add.||From INNER Loop Index calculate Col2=(CurrentIndex MOD 6) + inner Index.||From the offset Branch TRUE WHITE add a new Branch. Set Condition=(Row2 >= 0) AND (Row2 < 6) AND (Col2 >= 0) AND (Col2 < 6).||On this boundary Branch TRUE calculate NextIndex=(Row2 * 6) + Col2 with Integer Multiply and Add.||Get PendingIndexes (Integer Array) → Add Unique. Connect NextIndex to Item.||Connect boundary Branch TRUE WHITE → Add Unique WHITE. Leave FALSE unused.||Compile. Only indexes 0 through 35 enter the queue. No mine should be opened from a zero.","Open WBP_MineBoard Event Graph → RED TryReveal.||On its SAFE (not-mine) branch find Call OpenOneSafe. Remove/disconnect that CALL node only.||Drag from empty graph → Call FloodOpen; set StartIndex=RevealIndex.||Connect the safe Branch WHITE execution to Call FloodOpen.||Keep mine Branch TRUE → EndGame(false) and the first-click PlaceMines/CalculateAllClues chain unchanged.||Compile. TryReveal must call either EndGame on a mine OR FloodOpen on a safe tile, never OpenOneSafe as well.","In RED TryReveal find the SAFE path Call FloodOpen.||From Call FloodOpen WHITE output create Branch.||For Condition use BOARD Get SafeOpened >= (36 - Get MineCount), with Integer Subtract and Greater Or Equal.||On TRUE Call EndGame(DidWin=true); leave FALSE unconnected.||Do not count FlagsPlaced when checking win. With six mines 30 safe cells must be opened.||Compile. The victory check must run AFTER FloodOpen has finished its While Loop.","Temporarily set MineCount=1, Compile, then Play.||Click a blank zero tile: a connected empty area and bordering numbered tiles should reveal without an infinite-loop error.||Flag one covered tile and confirm flood never removes that flag.||If necessary add temporary Print String to show SafeOpened after FloodOpen, then remove the Print.||Restore MineCount default 6; Compile and Save.||If an infinite loop is reported, FIRST check While Loop Body → Remove Index(PendingIndexes,0) WHITE wiring."];if(stage.steps.length!==lines.length)throw Error('flood action count');stage.steps.forEach((s,i)=>s.actions=lines[i].split('||'));})();

/* Literal clock, reset and optional polish actions. */
(function(){const sets={"finish":["Open WBP_MineBoard → My Blueprint → Variables → +.||Create SecondsElapsed of type Integer, default 0.||Create ClockHandle of type Timer Handle (search Timer Handle in Variable Type).||Compile. Add Set SecondsElapsed=0 to the existing NewGame reset chain.||Both variables belong to BOARD. Do not create a timer on every cell.","In WBP_MineBoard Event Graph right-click → Add Custom Event. Name it TickClock.||From TickClock WHITE add Branch Condition=(Get Started AND NOT Get Finished).||On TRUE Set SecondsElapsed=Get SecondsElapsed+1.||From its WHITE output drag existing TimeText (GET) → SetText.||Create Format Text with Time: {Value}; feed SecondsElapsed into Value and the formatted Text into SetText.||Leave Branch FALSE unused; Compile.","Open WBP_MineBoard → Event Graph → RED CellPressed. Find the FIRST-click WHITE chain Call PlaceMines → Call CalculateAllClues → Set Started=true.||Immediately AFTER Set Started add Set Timer by Event. Set Time=1.0 and tick Looping=true.||Connect the RED delegate output of the existing TickClock Custom Event to Set Timer by Event's Event pin (or create a matching delegate bound to TickClock). Do not connect TickClock as a normal WHITE execution call.||From Set Timer by Event Return Value → Set the BOARD ClockHandle variable.||Connect WHITE Set Started → Set Timer by Event → Set ClockHandle → Call TryReveal.||Leave the later-click path Call TryReveal unchanged. Compile. One timer starts at the first eligible reveal, not when flagging.","Open WBP_MineBoard → Event Graph → RED EndGame.||Find the TRUE path: Set Finished=true → Set Won=DidWin → Branch(DidWin).||Between Set Won and Branch(DidWin), insert Clear and Invalidate Timer by Handle.||Get BOARD ClockHandle and connect it to that Timer node's Handle pin.||Connect WHITE Set Won → Clear and Invalidate Timer by Handle → existing DidWin Branch.||Compile. Both loss and victory now stop the same timer.","Open WBP_MineBoard → Designer → select the EXISTING RestartButton.||In Details → Events click + beside OnClicked.||In Event Graph drag from the OnClicked WHITE pin and search Call NewGame (BLUE call to existing event).||Connect OnClicked WHITE → Call NewGame.||Compile and Save. Do not create another WBP_MineBoard Widget or reopen the level.","Open WBP_MineBoard Event Graph → existing RED NewGame.||At its VERY START connect Clear and Invalidate Timer by Handle(Get ClockHandle).||Then Set Started=false → Finished=false → Won=false → SafeOpened=0 → FlagsPlaced=0 → FlagMode=false → SecondsElapsed=0.||Clear CandidateIndexes and PendingIndexes using their existing Array GET nodes and Clear(Array).||Set existing TimeText text to Time: 0. Set existing StatusText text to Left-click reveal • Right-click flag.||Set existing FlagModeText text to Mode: REVEAL.||Continue WHITE execution to the EXISTING Clear Children(MineGrid) → Clear Cells → For Loop 0..35 with UpdateCellLook on each cell.||After For Loop Completed Call RefreshCounters. Compile. There is still ONE NewGame event and one 36-cell loop.","Temporarily select MineCount default=1 in WBP_MineBoard; Compile.||Play and reveal all 35 safe tiles. Confirm Minefield cleared! appears and the timer stops.||Click New Game: it must give 36 covered tiles, Flags: 0 / 6, Time: 0 and Mode: REVEAL.||Test flagging and unflagging.||STOP Play. Restore MineCount default=6, then Compile and Save.","Play with MineCount=6. Confirm first LEFT reveal never triggers a mine and the timer begins only then.||Place and remove flags; open numbered cells; eventually reveal a mine.||Check all SIX mines show red X, the status says BOOM! Game over., the timer freezes and further clicks do nothing.||Click New Game five consecutive times. After each click check 36 covered tiles, Flags: 0 / 6, Time: 0 and Mode: REVEAL.||Try one round where you reveal a large empty area. If you see an infinite-loop error check Remove Index 0 in FloodOpen.","Open WBP_MineBoard Designer. Make CellText readable, keep MineGrid centred, and show the controls in StatusText.||Open Project Settings → Maps & Modes; confirm Game Default Map=L_Minesweeper.||Choose File → Save All and test once using Play (not Simulate).||If your college PC has the Windows SDK and permission to package, use Platforms → Windows → Package Project and select an output folder.||If packaging is blocked, record an in-editor Play demonstration showing safe first click, flag, flood, loss, win and restart.||Only mark the Stage 8 check complete after all game behaviours have worked."],"polish":["Open WBP_MineCell → Designer. Select CellText.||Set its font size to roughly 20–22 and keep text centred.||Select CellBorder and check its Visibility remains Visible (hit-testable).||Play and check covered grey, flagged yellow F, numbered pale cell and mine red X are easy to tell apart.||Do not change CellIndex, the 6×6 grid size or Blueprint array order.","Open WBP_MineBoard → Designer.||Add a Text widget below MineGrid (outside the Uniform Grid Panel).||Set its displayed text to Numbers = mines in surrounding 8 squares. Open all safe squares to win.||Keep the instruction separate from cell Widgets so it does not intercept clicks.||Compile and Save.","Ask another student to open your game without explaining the controls first.||Ask them to reveal a tile, add/remove a flag and switch Flag Mode.||Ask them to reveal an empty area, lose, restart and win.||Write down each place they hesitate; change labels or contrast rather than adding new game systems.||Repeat the test after any improvement.","Take screenshots showing a covered board, clue numbers, flags and a victory/defeat result.||In a short explanation identify Cells as an Array of 36 Widget references and CandidateIndexes as the safe-first-click mine candidate Array.||Explain that PendingIndexes is an Integer queue used to reveal empty areas without recursion.||Demonstrate New Game five times without reloading the level.||Save the project and submit the requested evidence."]};for(const [id,lines]of Object.entries(sets)){const stage=window.UE5_MINESWEEPER_GUIDE.stages.find(s=>s.id===id);if(!stage||stage.steps.length!==lines.length)throw Error('Minesweeper '+id+' count');stage.steps.forEach((s,i)=>s.actions=lines[i].split('||'));}})();

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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
          "check": "The level exists and is set as the startup map.",
          "helpTopics": [
            "level"
          ]
        },
        {
          "title": "Make the parent board Widget asset FIRST",
          "where": "Content/Minesweeper → right-click",
          "do": "Choose User Interface → Widget Blueprint → User Widget, name WBP_MineBoard. Open Designer. Keep a root Canvas Panel and add a Vertical Box; centre it using its Canvas Slot Alignment 0.5,0.5 and centre anchors. This Widget owns the full game.",
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
          "check": "WBP_MineBoard is an asset, not a variable. It has a centred Vertical Box.",
          "helpTopics": [
            "widget"
          ]
        },
        {
          "title": "Name the board controls EXACTLY",
          "where": "WBP_MineBoard → Designer",
          "do": "Inside the Vertical Box add Text 'MINESWEEPER'; a Horizontal Box containing Text named FlagsText ('Flags: 0 / 6'), Text named TimeText ('Time: 0'), Button RestartButton ('New Game'); Uniform Grid Panel named MineGrid; Text StatusText ('Left click to reveal'). Tick Is Variable on FlagsText, TimeText, RestartButton, MineGrid and StatusText. Compile.",
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
          "check": "The board contains five explicitly named widgets; MineGrid is a Uniform Grid Panel, not an Integer Array.",
          "helpTopics": [
            "widget"
          ]
        },
        {
          "title": "Make the reusable cell Widget asset",
          "where": "Content/Minesweeper → right-click",
          "do": "Create User Widget WBP_MineCell. In Designer add a Size Box root with Width Override 54 and Height Override 54. Place Border named CellBorder inside; add Text named CellText inside Border and centre it. Set CellText temporary text '?' and tick Is Variable on CellText and CellBorder. Keep Border Visibility=Visible so mouse hits can reach it. Compile.",
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
          "check": "You have one square 54×54 cell asset, with a Border and Text ready to change.",
          "helpTopics": [
            "widget"
          ]
        },
        {
          "title": "Tell a cell which board and square it belongs to",
          "where": "WBP_MineCell → Graph → My Blueprint → Variables +",
          "do": "Create CellIndex (Integer default 0) and BoardRef (WBP_MineBoard Object Reference). Tick Instance Editable and Expose on Spawn for BOTH; Compile. BoardRef is a blue Widget reference to the existing WBP_MineBoard, not a new board instance.",
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
          "check": "Two variables are on the CELL: CellIndex and BoardRef. Both appear as pins when Create Widget WBP_MineCell is used.",
          "helpTopics": [
            "variable"
          ]
        },
        {
          "title": "Give the BOARD a named event for cell clicks",
          "where": "WBP_MineBoard → Event Graph",
          "do": "Right-click empty space → Add Custom Event, name CellPressed. Select the red node → Details → Inputs → + twice: PressedIndex (Integer) and WantsFlag (Boolean). For now link its white exec to Print String 'CLICK RECEIVED'. Compile. These are Event INPUT PINS, not Variables.",
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
          "check": "CellPressed is a red Custom Event with both pins and prints when called.",
          "helpTopics": [
            "custom-event"
          ]
        },
        {
          "title": "Display only ONE board when Play starts",
          "where": "L_Minesweeper → toolbar Blueprints → Open Level Blueprint",
          "do": "Event BeginPlay → Create Widget(Class=WBP_MineBoard, Owning Player=Get Player Controller 0) → Add to Viewport(Create Widget Return Value). Next on that Player Controller call Set Show Mouse Cursor(true) → Set Input Mode UI Only, supplying the same board as In Widget to Focus. Connect white execution in that order. Compile Level Blueprint and Save Level.",
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
          "check": "The arithmetic gives exactly six values for each axis, 0..5.",
          "helpTopics": [
            "math"
          ]
        },
        {
          "title": "Create and add one cell PER loop iteration",
          "where": "NewGame → For Loop Body",
          "do": "From white Loop Body add Create Widget(Class=WBP_MineCell, Owning Player=Get Owning Player), plug CellIndex=Loop Index, BoardRef=Self. Connect its white output to Add(Array Cells, Item=Create Widget Return Value) → Add Child to Uniform Grid(Target=MineGrid,Content=Create Widget Return Value,In Row=Index DIV 6,In Column=Index MOD 6). Use one Create Widget node INSIDE the loop, not 36 copies.",
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
          "check": "Four new cell Variables, independent from the Board's counters.",
          "helpTopics": [
            "variable"
          ]
        },
        {
          "title": "Reset state at the beginning of NewGame",
          "where": "WBP_MineBoard → NewGame event, BEFORE Clear Children",
          "do": "Insert Set Started=false → Set Finished=false → Set Won=false → Set SafeOpened=0 → Set FlagsPlaced=0 → Clear CandidateIndexes, then continue to the EXISTING Clear Children → Clear Cells → For Loop. White execution order matters.",
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
          "check": "First click always executes PlaceMines → CalculateAllClues → Started=true.",
          "helpTopics": [
            "exec"
          ]
        },
        {
          "title": "Test with just ONE mine, then restore six",
          "where": "WBP_MineBoard MineCount default; Play",
          "do": "TEMPORARILY set MineCount=1. On first click add a temporary Print String for each cell's index and clue after Set AdjacentMines. No number can exceed 1; only the eight neighbours of that single mine (fewer at edges) show 1. Restore MineCount=6, remove debug print, Compile and Save.",
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
          "check": "UpdateCellLook exists on WBP_MineCell.",
          "helpTopics": [
            "function"
          ]
        },
        {
          "title": "Show covered and flagged visuals",
          "where": "UpdateCellLook graph",
          "do": "Entry → Branch(IsOpen). FALSE → Branch(IsFlagged). On FALSE/covered set CellText.SetText('') then CellBorder.Set Brush Color Slate Grey (LinearColor .3,.35,.4,1). On TRUE/flagged set CellText.SetText('F') then CellBorder.Set Brush Color Yellow (.9,.75,.15,1). Use SEPARATE execution paths. Compile.",
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
          "check": "NewGame shows 36 blank covered squares, not '?'.",
          "helpTopics": [
            "exec"
          ]
        },
        {
          "title": "Make a safe reveal Function and counter",
          "where": "WBP_MineBoard → Functions +",
          "do": "Create OpenOneSafe with Input OpenIndex(Integer). Get Cells[OpenIndex], promote to LOCAL TargetCell (WBP_MineCell Object Reference) inside OpenOneSafe. Branch(NOT TargetCell.IsOpen AND NOT TargetCell.IsFlagged AND NOT TargetCell.IsMine). TRUE → Set TargetCell.IsOpen=true → Set Board.SafeOpened=SafeOpened+1 → call TargetCell.UpdateCellLook. FALSE does nothing. Compile.",
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
          "check": "Losing displays exactly six red X cells.",
          "helpTopics": [
            "exec"
          ]
        },
        {
          "title": "Route every left reveal through one TryReveal event",
          "where": "WBP_MineBoard → Event Graph and existing CellPressed",
          "do": "Add Custom Event TryReveal with Integer Input RevealIndex. Inside: Get Cells[RevealIndex] → Branch(IsOpen OR IsFlagged), TRUE do nothing; FALSE → Branch(IsMine). Mine TRUE: Set cell.IsOpen=true → UpdateCellLook → CALL EndGame(DidWin=false). Mine FALSE: CALL OpenOneSafe(OpenIndex=RevealIndex). In CellPressed KEEP the existing NOT IsFlagged AND NOT IsOpen pre-check. Replace the first-click and later debug Prints with CALL TryReveal(PressedIndex) on both paths, after any first-click PlaceMines → CalculateAllClues → Started=true. Leave WantsFlag TRUE unused until Stage 6.",
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
          "check": "Board shows a Flag Mode button.",
          "helpTopics": [
            "widget"
          ]
        },
        {
          "title": "Make the mode Boolean on BOARD",
          "where": "WBP_MineBoard → Variables +",
          "do": "Create FlagMode (Boolean default false). False means left-click reveals; True means left-click toggles flags. Right-click always flags regardless of mode. Compile.",
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
          "check": "FlagMode is a BOARD Variable, not part of each tile.",
          "helpTopics": [
            "variable"
          ]
        },
        {
          "title": "Connect the toggle Button",
          "where": "WBP_MineBoard → FlagModeButton → Details → Events → OnClicked +",
          "do": "OnClicked WHITE → Set FlagMode = NOT FlagMode → Branch(FlagMode). TRUE set FlagModeText to 'Mode: FLAG'; FALSE set to 'Mode: REVEAL'. Compile.",
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
          "check": "NewGame restores Reveal mode and clears flags.",
          "helpTopics": [
            "get-set"
          ]
        },
        {
          "title": "Test trackpad and right-click workflows",
          "where": "L_Minesweeper → Play",
          "do": "Right-click a covered tile: F. Left-click it in Reveal mode: nothing happens. Right-click again: F disappears. Click Flag Mode button, then LEFT-click a tile to flag; change mode back to Reveal and left-click another tile to open it. Right-click after the game ends does nothing.",
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
          "check": "Clicking a blank safe cell opens multiple connected cells and bordering numbers.",
          "helpTopics": [
            "exec"
          ]
        },
        {
          "title": "Check the win target AFTER flood has finished",
          "where": "TryReveal → AFTER CALL FloodOpen",
          "do": "Add Branch Condition SafeOpened >= (36 - MineCount), using Integer math nodes. TRUE → CALL EndGame(DidWin=true), FALSE do nothing. For six mines win requires 30 safe opens; if testing MineCount=1 the target automatically becomes 35. Flags are NOT part of this win condition.",
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
          "check": "One shared SecondsElapsed and ClockHandle exist.",
          "helpTopics": [
            "variable"
          ]
        },
        {
          "title": "Create the one-second update Event",
          "where": "WBP_MineBoard → Event Graph",
          "do": "Create Custom Event TickClock. Entry → Branch(Started AND NOT Finished). TRUE → Set SecondsElapsed=SecondsElapsed+1 → Set TimeText.Text using Format Text 'Time: {Value}' with Value=SecondsElapsed. FALSE do nothing. Compile.",
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
          "check": "Win or defeat freezes the timer and prevents later input.",
          "helpTopics": [
            "timer"
          ]
        },
        {
          "title": "Wire the New Game button to restart the current widget",
          "where": "WBP_MineBoard Designer → RestartButton → Details → Events → OnClicked +",
          "do": "Connect Button OnClicked → CALL NewGame. Do not use Open Level or Create Widget again: NewGame already clears and creates the 36 cell Widgets. Compile.",
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
          "check": "One-mine game can win; final saved MineCount is SIX.",
          "helpTopics": [
            "playtest"
          ]
        },
        {
          "title": "Test normal-game defeat and five consecutive restarts",
          "where": "L_Minesweeper → Play",
          "do": "MineCount=6. First left-click is safe. Make flags, reveal numbers, click a mine eventually: six red X appear and timer freezes. Click New Game five times: each time 36 covered cells, Flags 0/6, Time0, Mode REVEAL, safe first click and new random mines. Watch Output Log for Accessed None or infinite-loop warnings.",
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
          "check": "One real win, one loss, working flags and repeatable New Game, with no duplicate grids or timers.",
          "helpTopics": [
            "playtest"
          ]
        },
        {
          "title": "Prepare an accessible final build",
          "where": "WBP_MineBoard and WBP_MineCell Designer; Platforms → Windows",
          "do": "Keep enough text contrast, centre your 6×6 grid and show a hint 'Left click reveal • Right click flag • Flag Mode for trackpads'. Set Project Settings → Maps & Modes startup map to L_Minesweeper, Save everything. Package Windows if the college build environment supports it; otherwise prepare an in-editor demonstration. Do not spend hours packaging instead of testing the game.",
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
          "check": "All numbers, F and X are clearly visible.",
          "helpTopics": [
            "widget"
          ]
        },
        {
          "title": "Add one short rule panel",
          "where": "WBP_MineBoard → Designer",
          "do": "Place a Text under the grid: 'Numbers = mines in surrounding 8 squares. Open every safe square to win.' Keep it separate from MineGrid so it does not block tile clicks.",
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
          "check": "A newcomer understands the aim without teacher explanation.",
          "helpTopics": [
            "widget"
          ]
        },
        {
          "title": "Have another student test it",
          "where": "L_Minesweeper → Play",
          "do": "Ask a classmate to reveal a cell, flag/unflag one, switch Flag Mode, uncover an empty area, lose, restart, and eventually win. Note any point where they ask for instructions. Fix readability before adding effects.",
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
          "check": "Someone who did not build it can complete the game without coaching.",
          "helpTopics": [
            "playtest"
          ]
        },
        {
          "title": "Show evidence and an end-to-end demonstration",
          "where": "Screenshots, Teams or project evidence",
          "do": "Take screenshots of covered grid, some clue numbers and flags, and a win/lose state. Describe the Array of 36 Widgets, safe first-click candidate list and flood queue. Demonstrate restart without leaving the game.",
          "why": "Build one part, test it now, then add the next part. WHITE pins run actions; coloured pins carry values.",
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

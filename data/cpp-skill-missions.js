window.UE5_CPP_SKILL_MISSIONS = {
  "version": "3.58.5",
  "title": "Unreal C++ Programmer Path",
  "summary": "A cumulative Level 4 C++ pathway for students who already know Unreal through Blueprint but have never used Visual Studio with Unreal. Every mission continues the same L4CppTraining project.",
  "planned": [
    "Mission 0 — Visual Studio + Unreal Setup",
    "Mission 1 — Your First C++ Gameplay Actor",
    "Mission 2 — Variables, Functions & Decisions",
    "Mission 3 — Arrays & Gameplay State",
    "Mission 4 — Components & Collision",
    "Mission 5 — C++ Interaction",
    "Mission 6 — C++ ↔ Blueprint Communication",
    "Mission 7 — Structs, Enums & Data Tables",
    "Mission 8 — Save Game",
    "Final Mission — Hybrid C++ Game"
  ],
  "missions": [
    {
      "id": "cpp-setup",
      "sequence": 0,
      "displaySequence": "0",
      "discipline": "Unreal C++",
      "icon": "C++",
      "title": "Visual Studio + Unreal Setup",
      "subtitle": "Go from never using Visual Studio with Unreal to a verified C++ project that builds successfully and is ready for gameplay code.",
      "duration": "60–90 minutes",
      "difficulty": "Absolute beginner setup",
      "summary": "Before writing gameplay code, make the toolchain boring and predictable. Install/check the correct Visual Studio workload, create one Unreal C++ project, learn where its source lives, build it in Development Editor / Win64, understand when to use Live Coding, and practise the recovery steps students need when Unreal and Visual Studio stop agreeing.",
      "guideRule": "Do not rush to Mission 1. A clean successful Build is the final product of Mission 0.",
      "skills": [
        "Visual Studio Installer",
        "Game development with C++",
        "Solution Explorer",
        "Source folder",
        "Development Editor",
        "Win64",
        "Build",
        "Live Coding",
        "Refresh project files",
        "Compile errors"
      ],
      "rules": [
        "Use the same project name throughout this pathway: L4CppTraining.",
        "Do not move or rename source files in Windows Explorer while learning the workflow.",
        "Do not edit Engine source code. Work only inside your project's Source folder.",
        "Save before every compile/build.",
        "If a step says STOP & TEST, fix that result before continuing."
      ],
      "gameFlow": [
        "Check Visual Studio",
        "Create L4CppTraining",
        "Open Visual Studio",
        "Find Source",
        "Development Editor + Win64",
        "Build succeeds",
        "Learn Live Coding",
        "Recovery test",
        "Ready for Mission 1"
      ],
      "theoryLinks": [
        {
          "label": "Epic UE5.8 — C++ Programming Quick Start",
          "href": "https://dev.epicgames.com/documentation/unreal-engine/unreal-engine-cpp-quick-start"
        },
        {
          "label": "Microsoft — Install Visual Studio Tools for Unreal Engine",
          "href": "https://learn.microsoft.com/visualstudio/gamedev/unreal/get-started/vs-tools-unreal-install"
        }
      ],
      "stages": [
        {
          "id": "start",
          "number": 0,
          "title": "Start Here — Know What Mission 0 Is For",
          "goal": "Understand the two-program workflow and create a safe folder/location for the C++ project you will keep through the whole pathway.",
          "why": "Most first-time Unreal C++ problems are workflow problems rather than programming problems. You need to know which program owns which job before code appears.",
          "bridge": "Blueprint students already know the Unreal Editor. Mission 0 adds the second half of the workflow: Unreal creates/uses gameplay objects; Visual Studio edits and builds the native C++ source behind them.",
          "steps": [
            {
              "title": "Understand the two-program workflow",
              "where": "Read this before opening anything",
              "do": "Learn which program does which job.",
              "doList": [
                "Unreal Editor is where you create levels, place Actors, choose assets, tune exposed values and press Play.",
                "Visual Studio is where you read/edit C++ source, build the project and read compiler errors.",
                "The same Unreal project is open in both tools. They are not two separate projects.",
                "You will move between them constantly: edit code → compile/build → return to Unreal → test.",
                "Do not treat Visual Studio as a replacement for Unreal or Blueprint."
              ],
              "check": "You can explain that Unreal and Visual Studio are two views/workflows for the same project.",
              "why": "Students get lost quickly if they think the IDE is another game project."
            },
            {
              "title": "Choose the project location now",
              "where": "Windows File Explorer",
              "do": "Choose a simple local folder for the project.",
              "doList": [
                "Use a local drive/location approved by your college.",
                "Prefer a short path such as Documents\\Unreal Projects or the college's normal Unreal project folder.",
                "Avoid OneDrive/Desktop sync folders if your college machines have caused Unreal project-file locking or sync issues there.",
                "Do not put the project inside the Unreal Engine installation folder.",
                "You will name the project L4CppTraining later."
              ],
              "check": "You know exactly where the project will be saved.",
              "why": "Short predictable paths make generated project files and build errors easier to diagnose."
            },
            {
              "title": "Know the finish line",
              "where": "Mission 0 checklist",
              "do": "Do not judge success by whether Visual Studio merely opens.",
              "doList": [
                "The project must open in Unreal.",
                "Visual Studio must be able to see the project's Source folder.",
                "The toolbar/build configuration must be suitable for the Unreal Editor.",
                "A full Build must finish successfully.",
                "You must know how to reopen/refresh the Visual Studio project from Unreal.",
                "Only then should you mark Mission 0 complete."
              ],
              "check": "Your target is a successful working toolchain, not gameplay yet.",
              "why": "That gives Mission 1 a reliable starting point."
            }
          ],
          "test": [
            "You can describe what Unreal does and what Visual Studio does.",
            "You have chosen a safe project location.",
            "You know Mission 0 ends with a successful Build."
          ],
          "doneWhen": "You understand the workflow and are ready to verify the Visual Studio installation.",
          "common": [
            "Do not create random test projects with different names; this pathway intentionally keeps one project.",
            "If your college uses a required local project folder, use that rather than changing machine policy yourself."
          ]
        },
        {
          "id": "vs-installer",
          "number": 1,
          "title": "Check Visual Studio 2022 Is Installed",
          "goal": "Confirm the machine has Visual Studio 2022 and open Visual Studio Installer so you can inspect the installed workloads.",
          "why": "Visual Studio can be installed without the C++ compiler/workload Unreal needs. Seeing the IDE icon is not enough.",
          "steps": [
            {
              "title": "Open Visual Studio Installer",
              "where": "Windows Start/Search",
              "do": "Launch the installer rather than opening Visual Studio itself.",
              "doList": [
                "Press the Windows key.",
                "Type Visual Studio Installer.",
                "Open Visual Studio Installer.",
                "Wait for the installed products list to appear.",
                "Find Visual Studio 2022 Community, Professional or Enterprise on the machine.",
                "Do not click Launch yet."
              ],
              "check": "Visual Studio Installer shows a Visual Studio 2022 installation with a Modify button.",
              "why": "The Installer is where workloads/components are checked."
            },
            {
              "title": "If Visual Studio 2022 is missing",
              "where": "Visual Studio Installer",
              "do": "Stop and use the college-approved install route.",
              "doList": [
                "Do not download random older versions from third-party sites.",
                "Use the current college/software-centre installation route if one exists.",
                "If you do not have permission to install software, ask the teacher/technician rather than bypassing admin controls.",
                "The target is Visual Studio 2022 with Unreal/C++ tooling."
              ],
              "check": "Either Visual Studio 2022 is present or the machine has been flagged for installation.",
              "why": "The rest of the mission cannot be completed without a C++ compiler/IDE."
            }
          ],
          "test": [
            "Visual Studio 2022 appears in Visual Studio Installer.",
            "You can see the Modify control for that installation."
          ],
          "doneWhen": "You have confirmed Visual Studio 2022 exists and can inspect its workloads.",
          "common": [
            "Visual Studio Code is not the same product as Visual Studio 2022 for this pathway.",
            "If Windows Search cannot find Visual Studio Installer, ask for the machine image/software install to be checked."
          ]
        },
        {
          "id": "vs-workload",
          "number": 2,
          "title": "Install/Verify the Unreal C++ Workload",
          "goal": "Verify the Game development with C++ workload and Unreal-specific Visual Studio tools are installed.",
          "why": "This supplies the compiler, Windows SDK and Unreal integration students need for reliable project builds.",
          "steps": [
            {
              "title": "Open Modify",
              "where": "Visual Studio Installer → Visual Studio 2022",
              "do": "Inspect the installed workload.",
              "doList": [
                "Click Modify beside the installed Visual Studio 2022 edition.",
                "Open the Workloads tab.",
                "Find Game development with C++.",
                "Tick Game development with C++ if it is not already selected.",
                "Keep the installer open; do not click Modify/Install yet."
              ],
              "check": "Game development with C++ is selected.",
              "why": "That is Microsoft's Unreal-ready C++ workload."
            },
            {
              "title": "Check the Unreal optional tools",
              "where": "Visual Studio Installer → Installation details → Game development with C++",
              "do": "Verify the Unreal integration components.",
              "doList": [
                "With Game development with C++ selected, look at the Installation details/Optional pane.",
                "Ensure Visual Studio Tools for Unreal Engine is selected.",
                "Ensure Visual Studio debugger tools for Unreal Engine Blueprints is selected if available.",
                "Ensure Unreal Engine Test Adapter is selected if available.",
                "Ensure a supported Windows SDK is selected; Microsoft currently specifies Windows 10 SDK 10.0.18362.0 or later.",
                "Do not untick existing college-required components."
              ],
              "check": "The C++ workload, Unreal tools and a suitable Windows SDK are selected.",
              "why": "Those options provide Unreal-aware navigation, debugging and the Windows toolchain."
            },
            {
              "title": "Apply only if changes are needed",
              "where": "Visual Studio Installer",
              "do": "Finish the installation safely.",
              "doList": [
                "If you changed any boxes, click Modify.",
                "Allow the installer to finish completely.",
                "If Windows asks for admin permission and you do not have it, stop and ask the teacher/technician.",
                "If everything was already selected, close the installer without changing anything.",
                "Do not open Unreal until the installer has finished."
              ],
              "check": "Visual Studio Installer reports the installation is complete/up to date.",
              "why": "Opening/building during a partial workload install creates misleading compiler errors."
            }
          ],
          "test": [
            "Game development with C++ is installed.",
            "Visual Studio Tools for Unreal Engine is selected.",
            "A supported Windows SDK is installed."
          ],
          "doneWhen": "The machine has the C++/Unreal toolchain required for the pathway.",
          "common": [
            "Component names can move slightly between Visual Studio updates; keep Game development with C++ and Visual Studio Tools for Unreal Engine as the anchors.",
            "If Modify is disabled by college policy, record the missing component and ask staff to update the machine."
          ]
        },
        {
          "id": "create-project",
          "number": 3,
          "title": "Create L4CppTraining as a C++ Unreal Project",
          "goal": "Create the one Unreal project that every C++ mission will continue.",
          "why": "Keeping one project makes each new C++ idea an upgrade to something students already understand.",
          "steps": [
            {
              "title": "Open Unreal Engine 5.8",
              "where": "Epic Games Launcher / college Unreal shortcut",
              "do": "Start the current engine and open the New Project browser.",
              "doList": [
                "Launch Unreal Engine 5.8.",
                "Choose Games in the Project Browser.",
                "Choose Blank.",
                "Select C++ as the project type/programming language where the Project Browser exposes that choice.",
                "Set Target Platform to Desktop if the option is shown.",
                "Use the normal Maximum/Scalable quality setting your college uses; it does not affect the C++ lesson.",
                "Starter Content can be Off for this training project."
              ],
              "check": "The New Project screen is set to create a Blank C++ game project.",
              "why": "A C++ project generates a game module and source/build files from the start."
            },
            {
              "title": "Name and create the project",
              "where": "New Project → Project Name / Location",
              "do": "Use the exact pathway project name.",
              "doList": [
                "Set the project location to the folder chosen in Stage 0.",
                "Enter the exact project name L4CppTraining.",
                "Avoid spaces/special characters in the project name.",
                "Click Create.",
                "Wait. The first C++ project can take noticeably longer than a Blueprint-only project because Unreal generates/builds code files.",
                "Do not force-close Unreal or Visual Studio while generation is still happening."
              ],
              "check": "L4CppTraining opens in Unreal Editor and Visual Studio may also open automatically.",
              "why": "The exact shared project name keeps class/module names predictable throughout the tutorials."
            },
            {
              "title": "If the Project Browser did not offer C++",
              "where": "Unreal Editor fallback only",
              "do": "Use the supported conversion route rather than abandoning the mission.",
              "doList": [
                "Create/open the Blank project.",
                "In Unreal choose Tools → New C++ Class.",
                "Choose a simple class and complete the wizard only with teacher approval because this converts the content-only project to code.",
                "Unreal will generate the code module/project files and open the IDE.",
                "Return to the main path after the conversion succeeds."
              ],
              "check": "The project now contains a Source folder/code module and Visual Studio can open it.",
              "why": "Epic supports converting a content-only project by adding its first C++ class."
            }
          ],
          "test": [
            "The project name is L4CppTraining.",
            "The project opens in Unreal Engine 5.8.",
            "A C++ Source/module exists for the project."
          ],
          "doneWhen": "L4CppTraining exists as an Unreal C++ project and will be reused for later missions.",
          "common": [
            "First creation can be slow; wait for generation/build tasks rather than repeatedly clicking Create.",
            "If project creation fails, copy the FIRST meaningful error rather than the last fifty follow-on lines."
          ]
        },
        {
          "id": "project-anatomy",
          "number": 4,
          "title": "Meet the Files Unreal Created",
          "goal": "Identify the project file, Content folder and Source folder without editing or moving them.",
          "why": "Students need a mental map of where native code lives before Visual Studio's Solution Explorer makes sense.",
          "steps": [
            {
              "title": "Find the project folder",
              "where": "Windows File Explorer → L4CppTraining",
              "do": "Inspect, do not reorganise.",
              "doList": [
                "Close File Explorer previews if they slow the folder.",
                "Locate L4CppTraining.uproject.",
                "Locate Content — this is where Unreal assets such as maps/materials/Blueprints live.",
                "Locate Source — this is where your project's C++ source/module lives.",
                "You may also see Binaries, Intermediate, Saved and/or .vs after builds.",
                "Do not manually move files between these folders."
              ],
              "check": "You can point to L4CppTraining.uproject, Content and Source.",
              "why": "Content assets and C++ source are different parts of the same Unreal project."
            },
            {
              "title": "Open the Source folder only to inspect",
              "where": "File Explorer → L4CppTraining\\Source",
              "do": "Recognise the module files.",
              "doList": [
                "Open Source.",
                "Open the L4CppTraining folder/module.",
                "Notice the .Build.cs file.",
                "Notice the main project/module .h/.cpp files Unreal generated.",
                "Do not edit these files in Notepad.",
                "Return to Unreal/Visual Studio for code editing."
              ],
              "check": "You recognise that Source/L4CppTraining contains native project code/build configuration.",
              "why": "Later compiler messages often name these exact folders/files."
            }
          ],
          "test": [
            "You know Content stores Unreal assets.",
            "You know Source stores the C++ module/source.",
            "You have not renamed/moved generated files."
          ],
          "doneWhen": "You can navigate the physical project safely without treating generated folders as random clutter.",
          "common": [
            "Do not submit Binaries/Intermediate as authored source evidence unless specifically requested.",
            "Deleting generated folders can sometimes be a recovery technique, but not until the teacher explicitly teaches that workflow."
          ]
        },
        {
          "id": "meet-visual-studio",
          "number": 5,
          "title": "Meet Visual Studio — Only Learn the Parts You Need",
          "goal": "Find Solution Explorer, the project Source area, editor tabs and the Output/Error panes.",
          "why": "Visual Studio looks enormous. Beginners only need a small repeatable set of panels to work effectively in Unreal.",
          "steps": [
            {
              "title": "Open Visual Studio from Unreal",
              "where": "Unreal Editor → Tools",
              "do": "Use Unreal to open the correct project context.",
              "doList": [
                "In Unreal choose Tools → Open Visual Studio.",
                "Wait for Visual Studio to finish loading/indexing.",
                "If prompted to sign in, use the college policy; signing in is not required just to understand the project.",
                "Do not open a random .cpp file from File Explorer instead."
              ],
              "check": "Visual Studio opens with L4CppTraining loaded.",
              "why": "Opening through Unreal reduces the chance of editing the wrong solution/project."
            },
            {
              "title": "Find Solution Explorer",
              "where": "Visual Studio",
              "do": "Open the main project navigation panel.",
              "doList": [
                "Look for Solution Explorer, normally at the right side.",
                "If it is hidden choose View → Solution Explorer.",
                "Expand the L4CppTraining/game project nodes.",
                "Find the Source area/module.",
                "Do not expand Engine source trees looking for files to change.",
                "Click one project source file so it opens as a tab."
              ],
              "check": "You can open a project .h/.cpp file from Solution Explorer.",
              "why": "Solution Explorer becomes the main way to navigate classes once the project grows."
            },
            {
              "title": "Find Output and Error List",
              "where": "Visual Studio → View menu",
              "do": "Know where build messages will appear before the first Build.",
              "doList": [
                "Choose View → Output if Output is hidden.",
                "Choose View → Error List if Error List is hidden.",
                "In Output, learn that the Build output is the important place for the full compiler message.",
                "Do not assume every red underline is a real compiler failure while IntelliSense is still indexing.",
                "The real test is the compiler/build result."
              ],
              "check": "Solution Explorer, Output and Error List are all available.",
              "why": "Knowing where errors live removes a lot of first-build panic."
            }
          ],
          "test": [
            "You can open Solution Explorer.",
            "You can locate the L4CppTraining Source/module.",
            "You can open Output and Error List."
          ],
          "doneWhen": "Visual Studio no longer feels like an unexplained wall of panels.",
          "common": [
            "If Solution Explorer shows thousands of Engine files, collapse them and return to your game/project Source.",
            "IntelliSense can show temporary errors while Unreal project indexing is still running; use the build result as the authority."
          ]
        },
        {
          "id": "header-source",
          "number": 6,
          "title": "Understand .h, .cpp and Unreal's Generated Code",
          "goal": "Learn the purpose of header/source files and recognise Unreal macros without trying to memorise them.",
          "why": "Mission 1 will create a pair of files. Students need to know which kind of declaration/implementation belongs where.",
          "steps": [
            {
              "title": "Learn the simple rule",
              "where": "Visual Studio → project Source",
              "do": "Use this mental model.",
              "doList": [
                ".h = the class declaration/interface: what the class owns and what functions/properties exist.",
                ".cpp = implementation: what those functions actually do.",
                "Unreal adds reflection/code-generation macros such as UCLASS and GENERATED_BODY in gameplay classes.",
                "The .generated.h include is produced by Unreal Header Tool; do not create/edit that generated file yourself.",
                "You do not need to understand every macro before writing your first Actor."
              ],
              "check": "You can explain .h as declaration and .cpp as implementation.",
              "why": "This prevents students pasting all code into whichever tab happens to be open."
            },
            {
              "title": "Learn the generated-header rule early",
              "where": "Any Unreal gameplay class header you inspect",
              "do": "Notice where the generated include belongs.",
              "doList": [
                "Look for a line ending .generated.h in an Unreal gameplay header.",
                "Treat that generated header include as the final #include in that header.",
                "Do not move normal #include lines underneath it.",
                "Do not rename the generated header independently of the class/file.",
                "Mission 1 will use the C++ Class Wizard so Unreal creates this boilerplate correctly."
              ],
              "check": "You know not to move/add includes below the .generated.h include.",
              "why": "Unreal Header Tool relies on the expected generated-header structure."
            }
          ],
          "test": [
            "You can state what a header does.",
            "You can state what a .cpp file does.",
            "You know generated.h is managed by Unreal tooling."
          ],
          "doneWhen": "You understand enough file structure to read the first generated gameplay class in Mission 1.",
          "common": [
            "Do not memorise boilerplate line-by-line; use the Class Wizard to generate correct starting files.",
            "A compiler error near generated.h can be caused by an earlier syntax/macro problem, not the generated file itself."
          ]
        },
        {
          "id": "first-build",
          "number": 7,
          "title": "Set Development Editor / Win64 and Build Once",
          "goal": "Perform one full successful Visual Studio Build of L4CppTraining before adding gameplay code.",
          "why": "This proves the compiler, SDK, Unreal Build Tool and project files all agree on the untouched baseline.",
          "steps": [
            {
              "title": "Stop Play and save Unreal",
              "where": "Unreal Editor",
              "do": "Prepare for the clean baseline build.",
              "doList": [
                "Make sure Play In Editor is stopped.",
                "Choose File → Save All.",
                "Use Tools → Open Visual Studio if Visual Studio is not already open.",
                "Wait for the L4CppTraining project to finish loading in Visual Studio.",
                "Close Unreal Editor before this first full baseline Build.",
                "Keep Visual Studio open."
              ],
              "check": "The project is saved, Visual Studio is open on L4CppTraining, and Unreal Editor is closed for the full Build.",
              "why": "A clean baseline avoids mixing gameplay state with build troubleshooting."
            },
            {
              "title": "Choose the Editor configuration",
              "where": "Visual Studio top toolbar",
              "do": "Select the Unreal Editor build target.",
              "doList": [
                "Find the Solution Configuration dropdown.",
                "Choose Development Editor.",
                "Find the Solution Platform dropdown.",
                "Choose Win64.",
                "If those dropdowns are hidden, widen the Visual Studio window/toolbar or use Build → Configuration Manager to inspect them.",
                "Do not choose Shipping for normal classroom iteration."
              ],
              "check": "Visual Studio shows Development Editor and Win64.",
              "why": "Development Editor builds the game code that loads inside Unreal Editor."
            },
            {
              "title": "Build the game project",
              "where": "Visual Studio → Solution Explorer",
              "do": "Run a real compiler/build test.",
              "doList": [
                "Save All in Visual Studio (Ctrl+Shift+S).",
                "In Solution Explorer right-click the L4CppTraining game project.",
                "Choose Build.",
                "Watch the Output panel rather than clicking around while it works.",
                "Wait for the final build summary.",
                "Look for Build succeeded / 0 failed."
              ],
              "check": "The baseline project builds with 0 failed.",
              "why": "This is the strongest proof that the machine setup works before your own code is involved."
            },
            {
              "title": "If Build fails, read the first useful error",
              "where": "Visual Studio → Output",
              "do": "Diagnose rather than randomly changing settings.",
              "doList": [
                "Scroll upward from the final failure summary.",
                "Find the first error that mentions your toolchain/project rather than later follow-on failures.",
                "Read the file/path and error code/message.",
                "Do not try to fix 30 later errors before the first one.",
                "If it references missing compiler/SDK/toolset, return to the Visual Studio workload stage or ask staff."
              ],
              "check": "You can identify the first meaningful error or you have a successful Build.",
              "why": "One missing dependency can generate many secondary errors."
            }
          ],
          "test": [
            "Configuration is Development Editor.",
            "Platform is Win64.",
            "Build finishes successfully with 0 failed."
          ],
          "doneWhen": "The untouched L4CppTraining project builds successfully in Visual Studio.",
          "common": [
            "If Visual Studio says a build is blocked because Live Coding is active, use Unreal's Live Coding compile or close Unreal for the full IDE build.",
            "If Development Editor is unavailable, refresh/regenerate project files from Unreal before inventing a new configuration."
          ]
        },
        {
          "id": "live-coding",
          "number": 8,
          "title": "Learn Build vs Live Coding Before You Need It",
          "goal": "Understand the classroom rule for compiling small .cpp changes versus larger structural/header changes.",
          "why": "Mixing full IDE builds, Hot Reload and Live Coding without a rule creates confusing stale classes and editor state.",
          "steps": [
            {
              "title": "Find Live Coding",
              "where": "Unreal Editor → Editor Preferences / compile controls",
              "do": "Confirm Live Coding is enabled on the machine.",
              "doList": [
                "Return to Unreal Editor.",
                "Open Editor Preferences.",
                "Find Live Coding under the General/Live Coding settings.",
                "Confirm Live Coding is enabled (it is enabled by default in current Unreal versions).",
                "Keep Object Reinstancing at the project/college default; do not disable it during this beginner pathway."
              ],
              "check": "Live Coding is enabled or you know the college's approved compile method.",
              "why": "Current UE supports recompiling/patching C++ while the Editor is running."
            },
            {
              "title": "Use the simple classroom compile rule",
              "where": "Keep this rule beside your project",
              "do": "Choose the safer compile route for the change.",
              "doList": [
                "Small implementation-only .cpp change while Unreal is open: Live Coding is normally appropriate.",
                "Adding/changing reflected class structure, UPROPERTY/UFUNCTION signatures, constructors/components or after confusing reload behaviour: save, close Unreal and perform a full Visual Studio Build before reopening.",
                "Never run an IDE Build and a Live Coding compile at the same time.",
                "If the Editor behaves as if old code still exists, stop trying random recompiles and use the full close/build/reopen route.",
                "Mission 1 will tell you which route to use at each checkpoint."
              ],
              "check": "You can choose between Live Coding and a full Build using the change type rather than guessing.",
              "why": "Live Coding is powerful, but beginners need a predictable escape route for structural changes."
            },
            {
              "title": "Know the Live Coding shortcut",
              "where": "Unreal Editor",
              "do": "Learn the compile trigger without using it on random code yet.",
              "doList": [
                "Current Unreal Live Coding can be triggered from the Editor compile controls.",
                "Ctrl+Alt+F11 is the common Live Coding compile shortcut on Windows.",
                "Only trigger it after saving your edited code.",
                "Read the Live Coding output if it fails; do not repeatedly press the shortcut."
              ],
              "check": "You know how Live Coding is triggered and when not to rely on it.",
              "why": "That makes Mission 1 iteration faster without turning recompilation into superstition."
            }
          ],
          "test": [
            "You know what Live Coding is.",
            "You know a full Build is the safe recovery route for structural/header changes or strange reload behaviour.",
            "You will not run both build systems simultaneously."
          ],
          "doneWhen": "You have a simple compile rule you can follow without teacher intervention.",
          "common": [
            "Hot Reload and Live Coding are not the same workflow; this pathway uses Live Coding/current tooling.",
            "If a component/default value seems stale after Live Coding, close the Editor and perform a full Build."
          ]
        },
        {
          "id": "recovery",
          "number": 9,
          "title": "Recovery Drill — Reopen, Refresh and Prove the Toolchain",
          "goal": "Practise the safe recovery actions students will need when Visual Studio or Unreal loses project context, then finish with a final clean build.",
          "why": "Being able to recover the workflow is more valuable than pretending the IDE never misbehaves.",
          "steps": [
            {
              "title": "Practise reopening Visual Studio from Unreal",
              "where": "Unreal Editor → Tools",
              "do": "Use the supported project route.",
              "doList": [
                "Close Visual Studio only; leave Unreal/L4CppTraining open.",
                "In Unreal choose Tools → Open Visual Studio.",
                "Wait for the project to load again.",
                "Confirm Solution Explorer returns to L4CppTraining.",
                "Do not browse to a random old .sln/project on disk."
              ],
              "check": "Unreal can reopen the correct project in Visual Studio.",
              "why": "This is the quickest fix for students who accidentally close the IDE or open the wrong workspace."
            },
            {
              "title": "Know the project refresh command",
              "where": "Unreal Editor → Tools",
              "do": "Locate the refresh option without forcing it unnecessarily.",
              "doList": [
                "Open the Tools menu.",
                "Locate Refresh Visual Studio Project (wording can vary slightly by tooling/version).",
                "Use it if newly-added source/project files are not appearing correctly in Visual Studio.",
                "After refreshing, reopen Visual Studio if required.",
                "Do not repeatedly regenerate/refresh when the real problem is a C++ syntax error."
              ],
              "check": "You can locate the project refresh/re-generation workflow.",
              "why": "Epic notes that project files can need refreshing after source/project layout changes."
            },
            {
              "title": "Finish with one clean full build",
              "where": "Visual Studio",
              "do": "End Mission 0 on a verified baseline.",
              "doList": [
                "Save everything.",
                "If you want the cleanest possible final check, close Unreal Editor.",
                "Open the project in Visual Studio from the project/Unreal route.",
                "Set Development Editor + Win64.",
                "Right-click L4CppTraining → Build.",
                "Wait for Build succeeded / 0 failed.",
                "Reopen L4CppTraining in Unreal after the Build."
              ],
              "check": "L4CppTraining opens and its latest full Build has succeeded.",
              "why": "Mission 1 can now focus on programming rather than installation problems."
            }
          ],
          "test": [
            "You can reopen Visual Studio from Unreal.",
            "You can locate Refresh Visual Studio Project.",
            "Development Editor / Win64 Build succeeds.",
            "L4CppTraining reopens normally."
          ],
          "doneWhen": "Your Visual Studio + Unreal C++ toolchain is verified and you know the first recovery steps when it stops behaving.",
          "common": [
            "If a full baseline Build still fails, do not start Mission 1—capture the first error and fix the toolchain first.",
            "Refreshing project files does not fix invalid C++ syntax."
          ]
        }
      ]
    },
    {
      "id": "cpp-first-actor",
      "sequence": 1,
      "displaySequence": "1",
      "requiresMission": "cpp-setup",
      "discipline": "Unreal C++",
      "icon": "C++",
      "title": "Your First C++ Gameplay Actor",
      "subtitle": "Continue L4CppTraining: create an Actor class, log from BeginPlay, add a mesh component, expose RotationSpeed to Unreal, rotate the Actor in Tick, then make a Blueprint child that designers can tune.",
      "duration": "2–3 hours",
      "difficulty": "Absolute beginner C++ gameplay",
      "summary": "This is the first coding mission, but it still builds slowly. Use Unreal's C++ Class Wizard, learn what the generated .h and .cpp are doing, make one visible Actor, expose a property with UPROPERTY, use DeltaTime correctly, and prove that C++ can provide a reusable base while Blueprint handles presentation/tuning.",
      "guideRule": "Type the supplied code rather than pasting the whole finished class. Compile after each checkpoint so you know which change caused an error.",
      "skills": [
        "C++ Class Wizard",
        "AActor",
        "header vs source",
        "BeginPlay",
        "UE_LOG",
        "UStaticMeshComponent",
        "constructor",
        "UPROPERTY",
        "Tick",
        "DeltaTime",
        "FRotator",
        "Blueprint child"
      ],
      "rules": [
        "Continue L4CppTraining from Mission 0; do not create another project.",
        "Use Unreal's Tools → New C++ Class wizard to create gameplay classes.",
        "Type one change, Save, Compile/Build, then test.",
        "The generated .generated.h include stays the last #include in the header.",
        "Do not copy an entire final file over generated code until you understand which section you are changing."
      ],
      "gameFlow": [
        "Create TrainingActor",
        "Read generated code",
        "BeginPlay log",
        "Mesh component",
        "Expose RotationSpeed",
        "Rotate in Tick",
        "Place/test",
        "Blueprint child",
        "Break/fix",
        "Independent variant"
      ],
      "theoryLinks": [
        {
          "label": "Epic UE5.8 — Programming Quick Start",
          "href": "https://dev.epicgames.com/documentation/unreal-engine/unreal-engine-cpp-quick-start"
        },
        {
          "label": "Epic UE5.8 — Gameplay Classes",
          "href": "https://dev.epicgames.com/documentation/unreal-engine/gameplay-classes-in-unreal-engine"
        },
        {
          "label": "Epic UE5.8 — Actors",
          "href": "https://dev.epicgames.com/documentation/unreal-engine/actors-in-unreal-engine"
        }
      ],
      "stages": [
        {
          "id": "start",
          "number": 0,
          "title": "Start Here — Prove Mission 0 Still Works",
          "goal": "Open the same L4CppTraining project, verify one clean build, and set up a simple level area where your first C++ Actor will be visible.",
          "why": "You need a known-good baseline before the first authored C++ class.",
          "bridge": "Blueprint equivalent: before adding a new Blueprint system you prove the level/project still runs. C++ uses the same discipline, with a compiler/build check added.",
          "steps": [
            {
              "title": "Open the same project",
              "where": "Unreal Engine 5.8 → L4CppTraining",
              "do": "Reuse Mission 0.",
              "doList": [
                "Open L4CppTraining.",
                "Choose File → Save All.",
                "Confirm the project opens without module/build warnings.",
                "Do not create L4CppTraining2 or another copy for this mission."
              ],
              "check": "The same Mission 0 project opens cleanly.",
              "why": "Every C++ mission will grow this project."
            },
            {
              "title": "Run the baseline build",
              "where": "Visual Studio",
              "do": "Verify the project before adding code.",
              "doList": [
                "From Unreal choose Tools → Open Visual Studio.",
                "Wait for L4CppTraining to load in Visual Studio.",
                "Save All.",
                "Close Unreal Editor.",
                "Set Development Editor + Win64 in Visual Studio.",
                "Right-click/build L4CppTraining.",
                "Wait for 0 failed.",
                "Reopen L4CppTraining in Unreal only after the Build succeeds.",
                "If it fails before you change anything, fix Mission 0 rather than continuing."
              ],
              "check": "A clean Development Editor / Win64 full Build succeeds and L4CppTraining reopens.",
              "why": "Any later failure can now be tied to your new class/code."
            },
            {
              "title": "Prepare a visible test space",
              "where": "Unreal Editor → current level",
              "do": "Make a simple area for the training Actor.",
              "doList": [
                "Use a blank/default level area.",
                "Make sure there is a floor and enough light to see a cube.",
                "Place a Player Start/camera only if your chosen level needs it for testing.",
                "Save the map as LV_CPPTraining if you need a dedicated map."
              ],
              "check": "There is a simple saved space where a rotating cube will be obvious.",
              "why": "Immediate visual feedback makes the code easier to understand."
            }
          ],
          "test": [
            "L4CppTraining opens.",
            "Development Editor / Win64 baseline Build succeeds.",
            "A simple saved test level is ready."
          ],
          "doneWhen": "You have a known-good project and a visible test space.",
          "common": [
            "Do not troubleshoot new class code until the baseline itself builds.",
            "The level can stay ugly—this pathway is about programming."
          ]
        },
        {
          "id": "create-class",
          "number": 1,
          "title": "Create TrainingActor with Unreal's C++ Class Wizard",
          "goal": "Create your first authored AActor-derived gameplay class through Unreal so the boilerplate is generated correctly.",
          "why": "The Class Wizard creates the header/source pair and Unreal reflection boilerplate for you.",
          "steps": [
            {
              "title": "Open the C++ Class Wizard",
              "where": "Unreal Editor → Tools",
              "do": "Create a new native gameplay class.",
              "doList": [
                "Stop Play In Editor if it is running.",
                "Choose Tools → New C++ Class.",
                "In Common Classes choose Actor.",
                "Click Next.",
                "Name the class TrainingActor.",
                "Keep it in the project module/default Source location.",
                "Click Create Class.",
                "Wait for Unreal/Live Coding and Visual Studio to finish opening/updating."
              ],
              "check": "TrainingActor.h and TrainingActor.cpp exist and Visual Studio opens them.",
              "why": "Epic's wizard generates the UCLASS/generated header structure and registers the class with the project."
            },
            {
              "title": "Find both files in Solution Explorer",
              "where": "Visual Studio → Solution Explorer → Source → L4CppTraining",
              "do": "Locate the generated pair.",
              "doList": [
                "Find TrainingActor.h.",
                "Find TrainingActor.cpp.",
                "Open both as editor tabs.",
                "Notice Unreal's actual C++ class name begins with A: ATrainingActor.",
                "Do not rename the files/class after generation."
              ],
              "check": "Both generated files are open and you can see ATrainingActor.",
              "why": "Unreal uses the A prefix for Actor-derived C++ classes."
            },
            {
              "title": "Compile the untouched generated class first",
              "where": "Unreal Live Coding or full Build",
              "do": "Prove the Wizard output works before editing.",
              "doList": [
                "Save both generated files without changing them.",
                "Use Unreal's Live Coding compile if the Editor is open and it has already created the class cleanly.",
                "If the class has not appeared correctly or Live Coding reports structural trouble, close Unreal and run a full Development Editor / Win64 Build.",
                "Reopen Unreal.",
                "Find TrainingActor under C++ Classes / the project classes."
              ],
              "check": "The untouched TrainingActor class compiles and appears in Unreal.",
              "why": "Never add three code changes before proving the generated baseline."
            }
          ],
          "test": [
            "TrainingActor.h exists.",
            "TrainingActor.cpp exists.",
            "ATrainingActor derives from AActor.",
            "The untouched class compiles."
          ],
          "doneWhen": "Your first authored C++ Actor class exists and Unreal recognises it.",
          "common": [
            "Class names cannot contain spaces.",
            "If Tools → New C++ Class is missing, verify this is the Mission 0 code project and refresh/reopen the project."
          ]
        },
        {
          "id": "read-generated",
          "number": 2,
          "title": "Read the Generated Class Before Editing It",
          "goal": "Identify UCLASS, GENERATED_BODY, constructor, BeginPlay and Tick without trying to memorise the boilerplate.",
          "why": "Students should know which generated parts are structural and which functions they are about to change.",
          "bridge": "Blueprint equivalent: Event BeginPlay and Event Tick already exist as familiar concepts. In C++, the generated class overrides BeginPlay() and Tick(float DeltaTime).",
          "steps": [
            {
              "title": "Read TrainingActor.h top to bottom",
              "where": "Visual Studio → TrainingActor.h",
              "do": "Identify the structural lines.",
              "doList": [
                "Find #pragma once.",
                "Find #include \"CoreMinimal.h\".",
                "Find #include \"GameFramework/Actor.h\".",
                "Find #include \"TrainingActor.generated.h\" and confirm it is the final #include.",
                "Find UCLASS().",
                "Find class L4CPPTRAINING_API ATrainingActor : public AActor.",
                "Find GENERATED_BODY().",
                "Do not delete or reorder these lines."
              ],
              "check": "You can point to the base class AActor and the generated Unreal macros.",
              "why": "These lines connect standard C++ class syntax to Unreal's reflection/object system."
            },
            {
              "title": "Find the generated functions",
              "where": "TrainingActor.h",
              "do": "Match the declarations to familiar Blueprint events.",
              "doList": [
                "Find ATrainingActor(); — the constructor.",
                "Find virtual void BeginPlay() override;.",
                "Find virtual void Tick(float DeltaTime) override;.",
                "Notice public/protected labels.",
                "Do not change access sections yet."
              ],
              "check": "You can match BeginPlay to Blueprint Event BeginPlay and Tick to Event Tick.",
              "why": "The underlying gameplay lifecycle is the same even though the syntax changes."
            },
            {
              "title": "Match declarations to implementations",
              "where": "TrainingActor.cpp",
              "do": "Find the function bodies.",
              "doList": [
                "Open TrainingActor.cpp.",
                "Find ATrainingActor::ATrainingActor().",
                "Find ATrainingActor::BeginPlay().",
                "Find ATrainingActor::Tick(float DeltaTime).",
                "Notice each body uses braces { }.",
                "Notice BeginPlay calls Super::BeginPlay() and Tick calls Super::Tick(DeltaTime).",
                "Do not remove the Super calls."
              ],
              "check": "You can locate the header declaration and corresponding .cpp implementation for each function.",
              "why": "This declaration/implementation split is fundamental to the rest of the pathway."
            }
          ],
          "test": [
            "You can point to UCLASS and GENERATED_BODY.",
            "You know ATrainingActor derives from AActor.",
            "You can find constructor, BeginPlay and Tick in both files."
          ],
          "doneWhen": "The generated class is readable enough that the next edits have a clear location.",
          "common": [
            "Do not move normal includes below TrainingActor.generated.h.",
            "Do not remove Super::BeginPlay() or Super::Tick(DeltaTime) just because you do not yet know why they are there."
          ]
        },
        {
          "id": "first-log",
          "number": 3,
          "title": "First Code Change — Log from BeginPlay",
          "goal": "Add one UE_LOG line, compile it and prove Unreal executes your C++ when play begins.",
          "why": "A log message is the smallest useful end-to-end proof of edit → compile → run.",
          "bridge": "Blueprint equivalent: this is Event BeginPlay → Print String, but written in C++ and sent to Unreal's Output Log.",
          "steps": [
            {
              "title": "Add the log line",
              "where": "Visual Studio → TrainingActor.cpp → BeginPlay()",
              "do": "Type one line after Super::BeginPlay().",
              "doList": [
                "Click inside ATrainingActor::BeginPlay().",
                "Leave Super::BeginPlay(); as the first line.",
                "On the next line type the supplied UE_LOG statement exactly.",
                "End the statement with a semicolon.",
                "Save TrainingActor.cpp."
              ],
              "code": [
                {
                  "title": "Add inside BeginPlay()",
                  "content": "UE_LOG(LogTemp, Warning, TEXT(\"TrainingActor BeginPlay is running\"));"
                }
              ],
              "check": "BeginPlay contains Super::BeginPlay(); followed by the UE_LOG line.",
              "why": "UE_LOG writes diagnostic messages to Unreal's logging system."
            },
            {
              "title": "Compile the .cpp-only change",
              "where": "Unreal Editor + Visual Studio",
              "do": "Use the small-change route from Mission 0.",
              "doList": [
                "Make sure TrainingActor.cpp is saved.",
                "Return to Unreal.",
                "Trigger Live Coding compile (Ctrl+Alt+F11 or the Editor compile control).",
                "Wait for the Live Coding result.",
                "If it fails, read the first compiler error and return to the exact line you typed.",
                "Do not press Compile repeatedly without changing anything."
              ],
              "check": "Live Coding reports a successful compile.",
              "why": "This is a small implementation-only .cpp edit—ideal for Live Coding."
            },
            {
              "title": "Place the Actor and read the Output Log",
              "where": "Unreal Editor → Content Drawer / C++ Classes and Output Log",
              "do": "Make the class exist in the level before testing BeginPlay.",
              "doList": [
                "Find TrainingActor under C++ Classes/L4CppTraining.",
                "Drag TrainingActor into the level.",
                "Open Window → Developer Tools → Output Log if Output Log is hidden.",
                "Press Play.",
                "Search/scroll for TrainingActor BeginPlay is running.",
                "Stop Play."
              ],
              "check": "The Output Log displays your TrainingActor message when Play begins.",
              "why": "You have now proven that authored C++ compiled, loaded into Unreal and executed in the game."
            }
          ],
          "test": [
            "UE_LOG compiles.",
            "A TrainingActor instance is in the level.",
            "Output Log shows the BeginPlay message during Play."
          ],
          "doneWhen": "Your first C++ gameplay instruction has executed inside Unreal.",
          "common": [
            "If no message appears, make sure an instance of TrainingActor is actually placed in the level.",
            "If TEXT or quotes are wrong, type the line again carefully rather than replacing unrelated code."
          ]
        },
        {
          "id": "mesh-component",
          "number": 4,
          "title": "Give the C++ Actor a Mesh Component",
          "goal": "Create a UStaticMeshComponent in C++ and make it the Actor's root component.",
          "why": "Actors are containers for Components. A visible component lets the next code changes produce an obvious result.",
          "bridge": "Blueprint equivalent: Add Component → Static Mesh, then make it the root. C++ creates that component in the constructor.",
          "steps": [
            {
              "title": "Forward-declare the component type",
              "where": "Visual Studio → TrainingActor.h",
              "do": "Tell the header the component class exists without including its full header there.",
              "doList": [
                "Find the includes at the top of TrainingActor.h.",
                "Do not add an include below TrainingActor.generated.h.",
                "Below the includes and before UCLASS(), add the forward declaration supplied.",
                "Save the header."
              ],
              "code": [
                {
                  "title": "Add before UCLASS()",
                  "content": "class UStaticMeshComponent;"
                }
              ],
              "check": "TrainingActor.h contains class UStaticMeshComponent; before UCLASS().",
              "why": "A forward declaration reduces unnecessary header coupling while allowing a pointer property declaration."
            },
            {
              "title": "Declare the Mesh property",
              "where": "TrainingActor.h → inside ATrainingActor class → public section",
              "do": "Add a reflected component pointer.",
              "doList": [
                "Find the public: section containing the constructor.",
                "Add the UPROPERTY line supplied.",
                "On the next line declare UStaticMeshComponent* Mesh;.",
                "Keep the semicolon.",
                "Save the header."
              ],
              "code": [
                {
                  "title": "Add in the class public section",
                  "content": "UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=\"Training\")\nUStaticMeshComponent* Mesh;"
                }
              ],
              "check": "The class now declares a reflected Mesh component pointer.",
              "why": "UPROPERTY lets Unreal track/expose the object reference; VisibleAnywhere shows the component while preventing replacement of the pointer."
            },
            {
              "title": "Include the component in the .cpp file",
              "where": "TrainingActor.cpp → include section",
              "do": "Include exactly what the implementation uses.",
              "doList": [
                "Keep #include \"TrainingActor.h\" first.",
                "On the next include line add Components/StaticMeshComponent.h.",
                "Save TrainingActor.cpp."
              ],
              "code": [
                {
                  "title": "Add after TrainingActor.h include",
                  "content": "#include \"Components/StaticMeshComponent.h\""
                }
              ],
              "check": "TrainingActor.cpp includes StaticMeshComponent.h.",
              "why": "The .cpp needs the full component definition to construct/use it."
            },
            {
              "title": "Create the component in the constructor",
              "where": "TrainingActor.cpp → ATrainingActor::ATrainingActor()",
              "do": "Create the component as a default subobject and make it root.",
              "doList": [
                "Find the constructor.",
                "Leave PrimaryActorTick.bCanEverTick = true; in place.",
                "After it, add the two supplied lines.",
                "Check the TEXT name is Mesh.",
                "Save both files."
              ],
              "code": [
                {
                  "title": "Add inside the constructor",
                  "content": "Mesh = CreateDefaultSubobject<UStaticMeshComponent>(TEXT(\"Mesh\"));\nRootComponent = Mesh;"
                }
              ],
              "check": "The constructor creates Mesh and assigns it as RootComponent.",
              "why": "Default subobjects define the component structure every instance of the C++ class starts with."
            },
            {
              "title": "Use a full build for this structural change",
              "where": "Visual Studio + Unreal",
              "do": "Use the safe route for the new reflected property/component.",
              "doList": [
                "Save All.",
                "Close Unreal Editor.",
                "In Visual Studio confirm Development Editor + Win64.",
                "Build L4CppTraining.",
                "Wait for 0 failed.",
                "Reopen L4CppTraining.",
                "Select the TrainingActor instance and confirm a Mesh component appears."
              ],
              "check": "Build succeeds and TrainingActor exposes a Mesh component in Unreal.",
              "why": "You changed reflected class structure and constructor setup, so a full clean build/reopen is the beginner-safe workflow."
            }
          ],
          "test": [
            "Mesh is declared in TrainingActor.h.",
            "The .cpp includes StaticMeshComponent.h.",
            "Constructor creates Mesh and uses it as RootComponent.",
            "Full Build succeeds.",
            "Mesh appears on TrainingActor in Unreal."
          ],
          "doneWhen": "TrainingActor owns a real C++-created Static Mesh component.",
          "common": [
            "If UStaticMeshComponent is unknown, check the forward declaration and .cpp include.",
            "If Unreal still shows the old component layout after a successful Build, close/reopen the Editor and confirm you built the correct project/configuration."
          ]
        },
        {
          "id": "rotation-property",
          "number": 5,
          "title": "Expose RotationSpeed to the Unreal Editor",
          "goal": "Create your first editable C++ gameplay variable and see it appear in Details.",
          "why": "Unreal C++ becomes much more useful when programmers expose safe tuning values for Blueprint/designers.",
          "bridge": "Blueprint equivalent: create a Float variable, set it Instance Editable and give it a category. UPROPERTY metadata controls similar editor exposure from C++.",
          "steps": [
            {
              "title": "Declare RotationSpeed",
              "where": "TrainingActor.h → public section",
              "do": "Add the editable float below the Mesh property.",
              "doList": [
                "Keep the Mesh UPROPERTY unchanged.",
                "Add a blank line beneath Mesh.",
                "Type the supplied UPROPERTY specifier.",
                "Declare float RotationSpeed = 90.0f;.",
                "Check the final semicolon.",
                "Save the header."
              ],
              "code": [
                {
                  "title": "Add below Mesh",
                  "content": "UPROPERTY(EditAnywhere, BlueprintReadWrite, Category=\"Training\")\nfloat RotationSpeed = 90.0f;"
                }
              ],
              "check": "RotationSpeed is a float defaulting to 90.0 and marked EditAnywhere/BlueprintReadWrite.",
              "why": "The property macro makes the C++ variable visible/editable to Unreal's reflected editor/Blueprint systems."
            },
            {
              "title": "Decode the declaration",
              "where": "Before compiling",
              "do": "Understand each part rather than memorising a magic line.",
              "doList": [
                "UPROPERTY(...) = Unreal should reflect/manage this property.",
                "EditAnywhere = the value can be edited in class defaults/instances where appropriate.",
                "BlueprintReadWrite = Blueprint can read and write the exposed property.",
                "Category=\"Training\" = Unreal groups it under Training in Details.",
                "float = decimal number type.",
                "RotationSpeed = your variable name.",
                "= 90.0f = default value."
              ],
              "check": "You can explain why RotationSpeed appears in Unreal and what its default is.",
              "why": "Understanding the specifiers lets you design good programmer-to-designer controls later."
            },
            {
              "title": "Build and find it in Details",
              "where": "Full build/reopen → Unreal Editor",
              "do": "Verify reflection/editor exposure.",
              "doList": [
                "Because you changed a reflected header property, Save All and use the full close/build/reopen route if Live Coding does not update cleanly.",
                "Build Development Editor + Win64.",
                "Reopen Unreal.",
                "Select your TrainingActor instance.",
                "Find the Training category in Details.",
                "Confirm Rotation Speed is visible and currently 90.0.",
                "Change the instance value to 180.0, then set it back to 90.0."
              ],
              "check": "Rotation Speed appears in the Unreal Details panel and can be edited.",
              "why": "This proves the C++ variable is part of Unreal's reflection/editor workflow."
            }
          ],
          "test": [
            "RotationSpeed is declared with UPROPERTY.",
            "It appears under Training in Details.",
            "You can edit the value in Unreal."
          ],
          "doneWhen": "Your C++ class exposes its first designer-tunable gameplay property.",
          "common": [
            "If the property does not appear, check Build success and that you selected the correct TrainingActor instance/class.",
            "If the compiler errors near UPROPERTY, look above/below for missing semicolons or invalid macro syntax."
          ]
        },
        {
          "id": "rotate-tick",
          "number": 6,
          "title": "Rotate the Actor in Tick Using DeltaTime",
          "goal": "Use Tick and RotationSpeed to make the Actor rotate at a frame-rate-independent speed.",
          "why": "This turns the class from a static data example into visible gameplay behaviour.",
          "bridge": "Blueprint equivalent: Event Tick → RotationSpeed × Delta Seconds → Make Rotator → Add Actor Local Rotation.",
          "steps": [
            {
              "title": "Add the rotation code",
              "where": "TrainingActor.cpp → Tick(float DeltaTime)",
              "do": "Use the editable property every frame.",
              "doList": [
                "Find ATrainingActor::Tick(float DeltaTime).",
                "Leave Super::Tick(DeltaTime); as the first line.",
                "On the next line type the supplied AddActorLocalRotation call.",
                "Check the Yaw value uses RotationSpeed * DeltaTime.",
                "Save TrainingActor.cpp."
              ],
              "code": [
                {
                  "title": "Add inside Tick()",
                  "content": "AddActorLocalRotation(FRotator(0.0f, RotationSpeed * DeltaTime, 0.0f));"
                }
              ],
              "check": "Tick applies local rotation using RotationSpeed multiplied by DeltaTime.",
              "why": "Multiplying by DeltaTime makes the rotation speed approximately degrees-per-second rather than degrees-per-frame."
            },
            {
              "title": "Compile the implementation change",
              "where": "Unreal Editor",
              "do": "Use Live Coding for this .cpp-only edit.",
              "doList": [
                "Return to Unreal with the .cpp saved.",
                "Trigger Live Coding.",
                "Wait for success.",
                "If the line fails, read the first compiler error and compare parentheses/commas/semicolon with the supplied line.",
                "Do not change the header while debugging this stage."
              ],
              "check": "Live Coding succeeds.",
              "why": "No reflected structure changed—only Tick implementation."
            },
            {
              "title": "Understand the numbers",
              "where": "Before the visual test",
              "do": "Read the FRotator arguments.",
              "doList": [
                "FRotator uses Pitch, Yaw, Roll values.",
                "This tutorial passes 0.0f for Pitch.",
                "It passes RotationSpeed * DeltaTime for Yaw.",
                "It passes 0.0f for Roll.",
                "At default RotationSpeed 90, the actor aims to rotate about 90 degrees per second around Yaw."
              ],
              "check": "You can explain why DeltaTime appears in the calculation.",
              "why": "Frame-rate independence is a transferable gameplay-programming habit."
            }
          ],
          "test": [
            "Tick compiles.",
            "Rotation uses RotationSpeed * DeltaTime.",
            "You can explain what DeltaTime prevents."
          ],
          "doneWhen": "TrainingActor has visible rotation behaviour ready to test with a mesh.",
          "common": [
            "If it spins wildly, check you multiplied by DeltaTime rather than dividing or omitting it.",
            "If nothing changes later, confirm PrimaryActorTick.bCanEverTick is true in the constructor."
          ]
        },
        {
          "id": "place-test",
          "number": 7,
          "title": "Assign a Cube and Test the C++ Actor",
          "goal": "Give the C++ Mesh component a visible cube, press Play, and prove the exposed RotationSpeed changes the behaviour.",
          "why": "A programmer should test both the default and at least one changed input value.",
          "steps": [
            {
              "title": "Assign a mesh to the C++ component",
              "where": "Unreal Editor → select TrainingActor instance → Mesh component",
              "do": "Use a simple cube asset.",
              "doList": [
                "Select TrainingActor in the World Outliner.",
                "In Details select its Mesh component.",
                "Set Static Mesh to a basic Cube/Shape_Cube available in the project/Engine content.",
                "Scale/move the Actor so the cube is clearly visible.",
                "Save the level."
              ],
              "check": "The TrainingActor instance is now visible as a cube.",
              "why": "The C++ class provides the component; the Editor assigns presentation data."
            },
            {
              "title": "Test the default speed",
              "where": "Unreal Editor → Play",
              "do": "Observe the actual C++ behaviour.",
              "doList": [
                "Set Rotation Speed to 90.",
                "Press Play.",
                "Watch the cube for several seconds.",
                "Confirm it rotates smoothly around Yaw.",
                "Stop Play."
              ],
              "check": "The cube rotates while the game is running.",
              "why": "This is the visual proof that Tick and the exposed property are working together."
            },
            {
              "title": "Test a changed value",
              "where": "TrainingActor Details",
              "do": "Prove the Editor value controls C++.",
              "doList": [
                "Set Rotation Speed to 360.",
                "Press Play.",
                "Compare the speed with the 90 test.",
                "Stop Play.",
                "Set Rotation Speed to 0.",
                "Press Play and confirm the cube does not rotate.",
                "Stop Play."
              ],
              "check": "360 rotates much faster and 0 stops rotation.",
              "why": "Testing multiple inputs proves the variable is genuinely controlling the code rather than the motion being hard-coded."
            }
          ],
          "test": [
            "A visible cube is assigned.",
            "RotationSpeed=90 rotates.",
            "RotationSpeed=360 rotates faster.",
            "RotationSpeed=0 stops rotation."
          ],
          "doneWhen": "A placed C++ Actor visibly responds to an editor-exposed property.",
          "common": [
            "If the Actor is invisible, assign a Static Mesh to the Mesh component.",
            "If the cube is visible but stationary, confirm Tick is enabled and the Tick code compiled successfully."
          ]
        },
        {
          "id": "blueprint-child",
          "number": 8,
          "title": "Make a Blueprint Child of the C++ Class",
          "goal": "Create BP_TrainingActor from the C++ class and tune presentation/values in Blueprint without replacing the C++ system.",
          "why": "Professional Unreal workflows commonly use C++ for reusable foundations and Blueprint for designer-friendly configuration/presentation.",
          "bridge": "This is the key hybrid pattern: programmer writes the reusable class once; designers make/tune Blueprint children without rewriting the native behaviour.",
          "steps": [
            {
              "title": "Create the Blueprint child",
              "where": "Unreal Content Drawer",
              "do": "Make a Blueprint whose parent is TrainingActor.",
              "doList": [
                "Find TrainingActor in C++ Classes/L4CppTraining.",
                "Right-click it and choose Create Blueprint class based on TrainingActor if that option is available.",
                "If needed, use Add → Blueprint Class → All Classes and search TrainingActor.",
                "Name the new asset BP_TrainingActor.",
                "Save it in a sensible Blueprints folder under Content.",
                "Open BP_TrainingActor."
              ],
              "check": "BP_TrainingActor shows TrainingActor as its C++ parent class.",
              "why": "The Blueprint inherits the native component/property/behaviour."
            },
            {
              "title": "Configure the child",
              "where": "BP_TrainingActor",
              "do": "Use Blueprint for presentation/tuning only.",
              "doList": [
                "Select the inherited Mesh component.",
                "Assign the Cube mesh in the Blueprint defaults if it is not already set.",
                "Find the Training category.",
                "Set Rotation Speed to 45 for the Blueprint child default.",
                "Compile and Save the Blueprint.",
                "Do not recreate Tick/rotation logic in the Blueprint Event Graph."
              ],
              "check": "The Blueprint child has a cube and Rotation Speed 45 without duplicate rotation nodes.",
              "why": "The C++ parent owns behaviour; the Blueprint child customises data/presentation."
            },
            {
              "title": "Replace/test with the Blueprint child",
              "where": "LV_CPPTraining",
              "do": "Prove inheritance works.",
              "doList": [
                "Place BP_TrainingActor in the level beside or instead of the raw C++ TrainingActor.",
                "Press Play.",
                "Confirm BP_TrainingActor rotates using the inherited C++ Tick.",
                "Change its Rotation Speed instance value and retest.",
                "Open the Blueprint Event Graph and confirm no custom rotation logic was needed."
              ],
              "check": "The Blueprint child rotates entirely because of inherited C++ behaviour.",
              "why": "This demonstrates the hybrid C++ → Blueprint workflow the rest of the pathway will build on."
            }
          ],
          "test": [
            "BP_TrainingActor exists.",
            "Its parent is TrainingActor.",
            "It inherits Mesh and RotationSpeed.",
            "It rotates without Blueprint Tick logic."
          ],
          "doneWhen": "You have a reusable C++ base class and a designer-tunable Blueprint child.",
          "common": [
            "If you cannot find TrainingActor as a parent, make sure the C++ class compiled and Unreal was reopened after structural changes.",
            "Do not copy the C++ rotation into Blueprint just to make the child move—fix inheritance/compile issues instead."
          ]
        },
        {
          "id": "break-fix",
          "number": 9,
          "title": "Break It, Read the Compiler, Fix It — Then Make Your Own Variant",
          "goal": "Practise one controlled syntax failure, recover using the compiler message, then independently change the Actor behaviour.",
          "why": "C++ errors are unavoidable. Students need a repeatable debugging routine before later missions become more complex.",
          "steps": [
            {
              "title": "Create a safe intentional error",
              "where": "Visual Studio → TrainingActor.cpp → BeginPlay UE_LOG line",
              "do": "Break one semicolon on purpose.",
              "doList": [
                "Save a working copy/commit first if your class workflow requires it.",
                "Find the UE_LOG line in BeginPlay.",
                "Delete ONLY the final semicolon from that line.",
                "Save TrainingActor.cpp.",
                "Trigger Live Coding."
              ],
              "check": "The compile fails and reports an error near/after the changed line.",
              "why": "A controlled tiny failure teaches what a real compiler error looks like without risking the project."
            },
            {
              "title": "Read the first useful compiler error",
              "where": "Live Coding/Visual Studio Output",
              "do": "Use evidence rather than guessing.",
              "doList": [
                "Do not edit anything yet.",
                "Find the first error mentioning TrainingActor.cpp.",
                "Read the line number/message.",
                "Double-click the error if Visual Studio provides navigation.",
                "Compare the reported area to your last change.",
                "Restore the missing semicolon.",
                "Save and compile again."
              ],
              "check": "The class compiles successfully again after restoring the semicolon.",
              "why": "The compiler often points near the problem; your last small change provides the strongest clue."
            },
            {
              "title": "Make one independent variation",
              "where": "TrainingActor.h/.cpp or BP_TrainingActor",
              "do": "Choose ONE small change and test it.",
              "doList": [
                "Option A: add an editable float RollSpeed and use it in the FRotator Roll value.",
                "Option B: add an editable float PitchSpeed and use it in Pitch.",
                "Option C: create a second Blueprint child with a very different RotationSpeed and mesh.",
                "Make only one option.",
                "Compile/build using the appropriate Mission 0 rule.",
                "Play-test the result.",
                "Be able to explain whether the change belonged in C++ behaviour or Blueprint configuration."
              ],
              "check": "Your variant works and you can explain the C++/Blueprint responsibility choice.",
              "why": "Independent adaptation is the proof that you understand the class rather than only copying lines."
            },
            {
              "title": "Final code/Editor audit",
              "where": "Visual Studio + Unreal",
              "do": "Finish Mission 1 cleanly.",
              "doList": [
                "Confirm TrainingActor.h compiles with its generated header still last among includes.",
                "Confirm TrainingActor.cpp includes its matching header first.",
                "Confirm Mesh is created in the constructor.",
                "Confirm RotationSpeed is exposed through UPROPERTY.",
                "Confirm Tick uses DeltaTime.",
                "Confirm BP_TrainingActor inherits rather than duplicates the rotation behaviour.",
                "Save All."
              ],
              "check": "The project builds and the final Actor/Blueprint child both work.",
              "why": "Later missions will extend this project, so Mission 1 should end cleanly."
            }
          ],
          "test": [
            "You intentionally caused and fixed a compiler error.",
            "TrainingActor still builds.",
            "The raw/Blueprint-child Actor works.",
            "One independent variation has been tested.",
            "You can explain header vs source and C++ parent vs Blueprint child."
          ],
          "doneWhen": "You have completed the first end-to-end Unreal C++ gameplay class and can recover from a simple compiler error.",
          "common": [
            "Fix the first error before chasing later ones.",
            "If structural changes leave Unreal showing stale class data, use the full close/build/reopen route from Mission 0."
          ],
          "challenges": [
            "Add a second editable speed so the Actor rotates on two axes.",
            "Make two Blueprint children from TrainingActor with different meshes/speeds.",
            "Replace the cube with a prop and make a simple 'training hazard' spinner."
          ]
        }
      ]
    }
  ]
};

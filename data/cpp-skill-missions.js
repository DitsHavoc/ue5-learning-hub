window.UE5_CPP_SKILL_MISSIONS = {
  "version": "3.59.8",
  "title": "Unreal C++ Programmer Path",
  "summary": "A cumulative Level 4 Unreal C++ pathway for complete beginners. Every code-bearing step now gives an exact file, class/function/section, ADD/REPLACE/EDIT instruction, placement anchor and compile/build instruction before students type. The project progresses from toolchain to collectible, door, inventory and reusable component/events without leaving intentional linker gaps.",
  "planned": [
    "Mission 0 — Toolchain + Your First Working C++",
    "Mission 1 — Core Gameplay Actor: C++ Collectible",
    "Mission 2 — Functions & Decisions: Locked Door",
    "Mission 3 — Arrays & Inventory: Key Unlocks Door",
    "Mission 4 — Reusable Actor Components & Events",
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
      "title": "Toolchain + Your First Working C++",
      "subtitle": "Set up Visual Studio correctly, understand the Unreal C++ file/build workflow, then prove the whole toolchain by creating ASetupProbe, exposing a real C++ variable and printing it from BeginPlay.",
      "duration": "90 minutes–2 hours",
      "difficulty": "Absolute beginner",
      "summary": "This is no longer only an installation checklist. You will verify Visual Studio, create L4CppTraining, learn where C++ lives, build the untouched project, then write and run a tiny Unreal Actor class. By the end you will have edited a header, edited a .cpp file, compiled, placed the Actor, changed an editor-exposed value, read UE_LOG output and fixed a real compiler error.",
      "guideRule": "Work like a programmer from the first lesson: understand the small system, predict what the code should do, type it yourself, compile after each change and use the first useful error as evidence.",
      "skills": [
        "Visual Studio Installer",
        "Game development with C++",
        "Solution Explorer",
        ".h vs .cpp",
        "UCLASS / GENERATED_BODY",
        "AActor",
        "UPROPERTY",
        "int32",
        "BeginPlay",
        "UE_LOG",
        "Development Editor",
        "Win64",
        "Live Coding",
        "Compiler errors"
      ],
      "rules": [
        "Use one project for the whole pathway: L4CppTraining.",
        "Do not skip a READ THIS CODE box. New C++ punctuation/operators are explained at first use so you are never expected to guess what a symbol means.",
        "Type the code shown in the guide. Do not paste an entire finished file and hope it works.",
        "Compile after each code checkpoint so one error has one likely cause.",
        "Keep the generated .generated.h include as the final #include in an Unreal gameplay header.",
        "Do not edit Engine source. Work only inside L4CppTraining/Source.",
        "If STOP & TEST fails, do not unlock the next stage."
      ],
      "gameFlow": [
        "Toolchain",
        "L4CppTraining",
        "First full Build",
        "SetupProbe class",
        "Header property",
        "BeginPlay code",
        "Place Actor",
        "Change value",
        "Live Coding",
        "Break → read → fix"
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
          "label": "Microsoft — Install Visual Studio Tools for Unreal Engine",
          "href": "https://learn.microsoft.com/visualstudio/gamedev/unreal/get-started/vs-tools-unreal-install"
        }
      ],
      "stages": [
        {
          "id": "start",
          "number": 0,
          "title": "Start Here — Understand the Unreal C++ Loop",
          "goal": "Understand the workflow you are about to use repeatedly: edit code → compile/build → return to Unreal → test → read evidence.",
          "why": "The hardest part for a first-time Unreal C++ student is often not syntax. It is knowing which program to use, when to compile and how to tell whether the code actually ran.",
          "concept": "Unreal C++ development is one project viewed through two main tools. Unreal Editor owns levels, assets and play-testing. Visual Studio owns the source code and compiler workflow. The project only becomes useful when the two agree.",
          "practical": [
            "You will keep Unreal and Visual Studio as two parts of the same L4CppTraining project.",
            "Every later C++ mission will use the same compile/test loop.",
            "You will deliberately use Output/Build messages as evidence rather than guessing."
          ],
          "algorithm": [
            "Open the correct Unreal project.",
            "Open the matching Visual Studio project/workspace.",
            "Edit one small piece of C++.",
            "Save the file.",
            "Compile/build using the correct route.",
            "Return to Unreal and test the expected behaviour.",
            "If it fails, read the first useful compiler/runtime message."
          ],
          "review": [
            {
              "term": "Unreal Editor",
              "text": "Place/test gameplay objects, edit assets and tune exposed values."
            },
            {
              "term": "Visual Studio",
              "text": "Edit .h/.cpp files, build the project and inspect compiler output."
            },
            {
              "term": "Compile / Build",
              "text": "Turn C++ source into code Unreal can load and execute."
            },
            {
              "term": "Evidence",
              "text": "A successful build, Output Log line or visible gameplay result—not 'it looks about right'."
            }
          ],
          "steps": [
            {
              "title": "Choose a safe project location",
              "where": "Windows File Explorer",
              "doList": [
                "Use the normal college-approved Unreal project location on a local drive.",
                "Prefer a short path such as Documents\\Unreal Projects or the college standard.",
                "Avoid renaming/moving source files through File Explorer once Unreal has generated them.",
                "Do not place the project inside the Unreal Engine installation folder."
              ],
              "check": "You know exactly where L4CppTraining will live.",
              "why": "Predictable paths make generated project/build files easier to diagnose."
            },
            {
              "title": "Write down the loop",
              "where": "Your notes / verbal check",
              "doList": [
                "Say the workflow: edit → save → compile/build → test.",
                "Say what Unreal Editor is responsible for.",
                "Say what Visual Studio is responsible for.",
                "Know that a compiler error is information about the code/toolchain, not a reason to restart the whole project."
              ],
              "check": "You can explain the development loop without looking at the guide.",
              "why": "This is the routine you will repeat in every mission."
            }
          ],
          "test": [
            "You can explain the role of Unreal Editor.",
            "You can explain the role of Visual Studio.",
            "You can state the edit → build → test loop."
          ],
          "doneWhen": "The workflow makes sense before you install or write anything.",
          "common": [
            "Do not create several versions of the project just because a build fails.",
            "Do not treat red IntelliSense squiggles as more authoritative than the actual compiler result while Visual Studio is still indexing."
          ]
        },
        {
          "id": "vs-installer",
          "number": 1,
          "title": "Visual Studio 2022 — Verify the IDE",
          "goal": "Confirm Visual Studio 2022 is installed and open the Installer where the Unreal C++ workload is controlled.",
          "why": "Visual Studio can exist without the compiler and Unreal tooling. Opening the IDE is not proof that the C++ toolchain is installed.",
          "concept": "An IDE is the program you write/navigate code in. The compiler/toolchain is installed as workloads/components. Unreal needs both.",
          "practical": [
            "This stage is machine setup rather than gameplay, but it prevents most 'C++ does not build at all' problems.",
            "College machines may require staff/admin approval for changes."
          ],
          "algorithm": [
            "Open Visual Studio Installer.",
            "Locate Visual Studio 2022.",
            "Choose Modify.",
            "Inspect workloads instead of launching the IDE immediately."
          ],
          "review": [
            {
              "term": "IDE",
              "text": "Integrated Development Environment—the code editor/debug/build workspace."
            },
            {
              "term": "Workload",
              "text": "A bundle of Visual Studio tools/components for a type of development."
            },
            {
              "term": "Visual Studio 2022",
              "text": "The IDE used in this pathway on Windows."
            }
          ],
          "steps": [
            {
              "title": "Open Visual Studio Installer",
              "where": "Windows Start/Search",
              "doList": [
                "Press the Windows key.",
                "Type Visual Studio Installer.",
                "Open Visual Studio Installer.",
                "Wait for the installed products list.",
                "Find Visual Studio 2022 Community, Professional or Enterprise.",
                "Do not click Launch yet."
              ],
              "check": "A Visual Studio 2022 installation appears with Modify available.",
              "why": "The Installer is where the actual C++/Unreal workload is verified."
            },
            {
              "title": "If it is missing",
              "where": "College software route / teacher",
              "doList": [
                "Do not install an older Visual Studio from a random website.",
                "Use the college-approved installer/software centre.",
                "If you lack permission, flag the machine to staff.",
                "The target is Visual Studio 2022 with Game development with C++."
              ],
              "check": "Visual Studio 2022 is installed or the machine has been flagged for setup.",
              "why": "The rest of the pathway needs a supported compiler environment."
            }
          ],
          "test": [
            "Visual Studio 2022 appears in Visual Studio Installer.",
            "You can access Modify or know the machine requires staff setup."
          ],
          "doneWhen": "The correct IDE exists and its components can be inspected.",
          "common": [
            "Visual Studio Code is not Visual Studio 2022.",
            "Do not bypass college administrator controls."
          ]
        },
        {
          "id": "vs-workload",
          "number": 2,
          "title": "Install the Unreal C++ Workload",
          "goal": "Verify Game development with C++, Visual Studio Tools for Unreal Engine and a suitable Windows SDK.",
          "why": "These components provide the native compiler/toolset and Unreal-aware Visual Studio integration.",
          "concept": "C++ is compiled. Before any gameplay code can run, Windows/Visual Studio need the C++ compiler, SDK headers/libraries and Unreal integration.",
          "practical": [
            "Microsoft's Unreal setup guidance places the Unreal tools under Game development with C++.",
            "A missing SDK/toolset usually causes project-wide failures before your own code is even considered."
          ],
          "algorithm": [
            "Modify Visual Studio 2022.",
            "Select Game development with C++.",
            "Check Unreal optional components.",
            "Check Windows SDK.",
            "Apply changes and let the installation finish."
          ],
          "review": [
            {
              "term": "C++ compiler",
              "text": "Transforms source code into native machine/object code used by the Unreal build."
            },
            {
              "term": "Windows SDK",
              "text": "Headers/libraries/tools needed to build Windows applications."
            },
            {
              "term": "Visual Studio Tools for Unreal Engine",
              "text": "Adds Unreal-aware project, macro, logging and navigation features to Visual Studio."
            }
          ],
          "steps": [
            {
              "title": "Select the workload",
              "where": "Visual Studio Installer → Modify → Workloads",
              "doList": [
                "Open Modify for Visual Studio 2022.",
                "Find Game development with C++.",
                "Tick it if it is not selected.",
                "Do not untick college-required workloads."
              ],
              "check": "Game development with C++ is selected.",
              "why": "This is the core native-game-development workload used by Unreal."
            },
            {
              "title": "Check Unreal options",
              "where": "Installation details / Optional components",
              "doList": [
                "Ensure Visual Studio Tools for Unreal Engine is selected.",
                "Ensure Visual Studio debugger tools for Unreal Engine Blueprints is selected if offered.",
                "Ensure Unreal Engine Test Adapter is selected if offered.",
                "Ensure a supported Windows SDK is selected.",
                "Click Modify only if changes are needed and wait for completion."
              ],
              "check": "The C++ workload, Unreal tools and Windows SDK are installed.",
              "why": "This gives the project the compiler/integration expected by current Microsoft/Epic guidance."
            }
          ],
          "test": [
            "Game development with C++ is installed.",
            "Visual Studio Tools for Unreal Engine is installed.",
            "A suitable Windows SDK is installed."
          ],
          "doneWhen": "The machine has the native Unreal C++ toolchain.",
          "common": [
            "Exact optional component wording can move between Visual Studio updates.",
            "If installation requires admin credentials, stop and ask staff rather than working around policy."
          ]
        },
        {
          "id": "create-project",
          "number": 3,
          "title": "Create the One Project: L4CppTraining",
          "goal": "Create the Third Person C++ project that every mission in this pathway will extend.",
          "why": "The Third Person C++ template gives every student the same playable Character, camera, input and GameMode. That makes later collision, inventory, door and interaction tutorials predictable.",
          "concept": "A C++ Unreal template is a starting project with working systems already wired. The Third Person template includes a controllable Character. You will learn by extending that working codebase rather than spending the first lessons rebuilding movement/input.",
          "practical": [
            "Mission 1 needs a real Character to walk into the collectible sphere.",
            "Mission 3 will add inventory directly to the generated AL4CppTrainingCharacter.",
            "Later interaction missions can use the existing camera/input foundation."
          ],
          "algorithm": [
            "Choose Games → Third Person.",
            "Choose C++.",
            "Name the project L4CppTraining.",
            "Create it and let Unreal generate the native Character/GameMode module.",
            "Press Play and prove the template Character moves before adding your own code."
          ],
          "review": [
            {
              "term": "Third Person template",
              "text": "A starter project containing a playable Character, camera and input setup."
            },
            {
              "term": "AL4CppTrainingCharacter",
              "text": "The project-specific C++ Character class generated by the template."
            },
            {
              "term": "ACharacter",
              "text": "Unreal's Actor subclass for character-style Pawns with movement support."
            },
            {
              "term": "Template code",
              "text": "Working starting code you will read and extend; it is not 'cheating' or disposable."
            }
          ],
          "steps": [
            {
              "title": "Create the project",
              "where": "Unreal Engine 5.8 → Project Browser → Games → Third Person",
              "doList": [
                "Choose Games.",
                "Choose the Third Person template.",
                "Choose C++ as the project type/programming language where shown.",
                "Use Desktop/normal college target settings.",
                "Starter Content may be Off.",
                "Set the location chosen earlier.",
                "Name the project exactly L4CppTraining.",
                "Click Create and wait for generation/build tasks to finish.",
                "When the Editor opens, press Play.",
                "Move/jump with the template controls and confirm the Character/camera work before continuing."
              ],
              "check": "L4CppTraining opens as a Third Person C++ project and the generated Character is playable.",
              "why": "This gives every later mission the same known-good player code to build on."
            },
            {
              "title": "If you selected Third Person but Blueprint instead of C++",
              "where": "Unreal Editor → Tools",
              "doList": [
                "Do not continue pretending it is the same starting point.",
                "If you have not done any meaningful work yet, create the project again and choose Third Person + C++.",
                "If this is an existing class project with work you must keep, ask the teacher before converting it by adding C++.",
                "The intended pathway expects Source/L4CppTraining/L4CppTrainingCharacter.h and .cpp to exist."
              ],
              "check": "The project is confirmed as the C++ Third Person version and contains the generated Character source.",
              "why": "Epic supports adding native code to a content-only project."
            }
          ],
          "test": [
            "The project is called L4CppTraining.",
            "It was created from Third Person + C++.",
            "The template Character can move/jump in Play mode.",
            "A Source/L4CppTraining module and L4CppTrainingCharacter source files exist."
          ],
          "doneWhen": "The cumulative C++ training project exists with a working native Third Person Character.",
          "common": [
            "The first C++ project creation can take longer than a Blueprint-only project.",
            "If creation fails, capture the first meaningful build error rather than the final cascade."
          ]
        },
        {
          "id": "project-anatomy",
          "number": 4,
          "title": "Project Anatomy — Read the Codebase Before Editing It",
          "goal": "Identify the files Unreal generated and understand what belongs in Source versus Content.",
          "why": "Programmers need to navigate a codebase before they start changing it.",
          "concept": "The project is split between authored content and native source. Generated/build folders may appear, but Source and Content are the two folders beginners should understand first.",
          "practical": [
            "Later compiler errors will name Source files and line numbers.",
            "Mission 3 will deliberately edit L4CppTrainingCharacter.h/.cpp, so you should recognise them now.",
            "Blueprint children/assets live in Content but can inherit native classes from Source."
          ],
          "algorithm": [
            "Find .uproject.",
            "Find Content.",
            "Find Source/L4CppTraining.",
            "Open the game module files in Visual Studio.",
            "Do not manually reorganise generated folders."
          ],
          "review": [
            {
              "term": "Header (.h)",
              "text": "Declares a class, its properties and its functions."
            },
            {
              "term": "Source (.cpp)",
              "text": "Implements what those functions actually do."
            },
            {
              "term": ".Build.cs",
              "text": "Declares module build dependencies/settings."
            },
            {
              "term": "Binaries / Intermediate",
              "text": "Generated build output; not where you author gameplay logic."
            }
          ],
          "steps": [
            {
              "title": "Inspect the physical project",
              "where": "Windows File Explorer → L4CppTraining",
              "doList": [
                "Find L4CppTraining.uproject.",
                "Find Content.",
                "Find Source.",
                "Open Source → L4CppTraining.",
                "Find L4CppTrainingCharacter.h and L4CppTrainingCharacter.cpp.",
                "Notice L4CppTraining.Build.cs and the other generated module files.",
                "Do not edit them in Notepad or move them around."
              ],
              "check": "You can identify the project descriptor, Content, Source and the generated Character source files.",
              "why": "This gives later compiler paths/names meaning."
            },
            {
              "title": "Open Visual Studio from Unreal",
              "where": "Unreal Editor → Tools → Open Visual Studio",
              "doList": [
                "Open Visual Studio through Unreal.",
                "Wait for indexing/project loading.",
                "Open Solution Explorer if hidden: View → Solution Explorer.",
                "Find the L4CppTraining Source/module.",
                "Open one generated .h and one .cpp file without changing them."
              ],
              "check": "You can navigate project C++ from Solution Explorer.",
              "why": "Solution Explorer becomes the main code navigation view."
            }
          ],
          "test": [
            "You know where Source lives.",
            "You know where Content lives.",
            "You can find a .h, .cpp and .Build.cs."
          ],
          "doneWhen": "The project structure is familiar enough to navigate safely.",
          "common": [
            "Do not edit Engine source because it appears in the Visual Studio solution.",
            "Do not delete generated folders as a first response to an ordinary syntax error."
          ]
        },
        {
          "id": "meet-visual-studio",
          "number": 5,
          "title": "Visual Studio — Learn Only the Panels You Need",
          "goal": "Find Solution Explorer, Output, Error List and the Unreal Editor build configuration.",
          "why": "Reducing Visual Studio to a few repeatable tools makes the IDE manageable for first-time students.",
          "concept": "The compiler's Build Output is the authority. Error List is useful, but one true compiler error can cause many follow-on messages.",
          "practical": [
            "You will navigate code in Solution Explorer.",
            "You will read Build/Live Coding output when something fails.",
            "You will build the Editor target rather than a Shipping game build."
          ],
          "algorithm": [
            "Find Solution Explorer.",
            "Find Output.",
            "Find Error List.",
            "Set Development Editor.",
            "Set Win64.",
            "Build the untouched project once."
          ],
          "review": [
            {
              "term": "Development Editor",
              "text": "Build configuration for code that runs inside Unreal Editor during development."
            },
            {
              "term": "Win64",
              "text": "The Windows 64-bit target platform used in this classroom workflow."
            },
            {
              "term": "Output",
              "text": "Full build/compiler log—use this to find the first useful error."
            },
            {
              "term": "Error List",
              "text": "Clickable summary of errors/warnings; useful, but not a substitute for the build log."
            }
          ],
          "steps": [
            {
              "title": "Open the panels",
              "where": "Visual Studio → View",
              "doList": [
                "Open Solution Explorer.",
                "Open Output.",
                "Open Error List.",
                "Arrange them so the code editor remains readable.",
                "Ignore temporary IntelliSense red squiggles while indexing unless the actual Build also fails."
              ],
              "check": "All three panels are accessible.",
              "why": "These are the core beginner debugging/navigation panels."
            },
            {
              "title": "Choose the correct build target",
              "where": "Visual Studio top toolbar",
              "doList": [
                "Find Solution Configuration.",
                "Choose Development Editor.",
                "Find Solution Platform.",
                "Choose Win64.",
                "If dropdowns are hidden, use Build → Configuration Manager or widen the toolbar."
              ],
              "check": "Development Editor / Win64 is selected.",
              "why": "That is the target you will use for full Unreal Editor builds."
            },
            {
              "title": "Build the untouched project",
              "where": "Visual Studio",
              "doList": [
                "Save All.",
                "Close Unreal Editor for this first baseline full Build.",
                "Right-click/build L4CppTraining.",
                "Watch Output.",
                "Wait for Build succeeded / 0 failed.",
                "Reopen L4CppTraining only after the Build finishes."
              ],
              "check": "The untouched project builds successfully.",
              "why": "This proves the toolchain works before authored code is introduced."
            }
          ],
          "test": [
            "Solution Explorer, Output and Error List are available.",
            "Development Editor / Win64 is selected.",
            "The untouched project builds with 0 failed."
          ],
          "doneWhen": "The baseline compiler/toolchain is proven.",
          "common": [
            "If this untouched Build fails, stop: the problem is setup/toolchain, not your future gameplay code.",
            "Read the first meaningful error, especially if it mentions missing SDK/toolset."
          ]
        },
        {
          "id": "header-source",
          "number": 6,
          "title": "Create ASetupProbe — Your First Native Gameplay Class",
          "goal": "Create an Actor through Unreal's C++ Class Wizard and understand the generated header/source structure.",
          "why": "The best way to learn Unreal C++ structure is to create a real class and read what Unreal generates for you.",
          "concept": "An Unreal gameplay class combines standard C++ with Unreal reflection macros. AActor-derived classes can be placed in the world. The header declares the class; the .cpp implements it.",
          "practical": [
            "SetupProbe is deliberately tiny: one editable integer and one log message.",
            "It will remain in the project as a known-good diagnostic Actor."
          ],
          "algorithm": [
            "Use Tools → New C++ Class.",
            "Choose Actor.",
            "Name it SetupProbe.",
            "Let Unreal generate SetupProbe.h/.cpp.",
            "Read the generated constructor/BeginPlay/Tick before changing them."
          ],
          "review": [
            {
              "term": "AActor",
              "text": "Base type for an object that can exist/spawn in the Unreal world."
            },
            {
              "term": "UCLASS()",
              "text": "Marks the class for Unreal's reflection/object system."
            },
            {
              "term": "GENERATED_BODY()",
              "text": "Injects Unreal-generated class support required by reflected gameplay classes."
            },
            {
              "term": "Super::BeginPlay()",
              "text": "Calls the parent class BeginPlay implementation before your subclass adds its own behaviour."
            }
          ],
          "steps": [
            {
              "title": "Create SetupProbe",
              "where": "Unreal Editor → Tools → New C++ Class",
              "doList": [
                "Choose Actor.",
                "Click Next.",
                "Name the class SetupProbe.",
                "Keep the default L4CppTraining game module/location.",
                "Click Create Class.",
                "Wait until SetupProbe.h and SetupProbe.cpp have been generated and Visual Studio can open them.",
                "Do not edit the generated class yet.",
                "Treat any automatic Live Coding result as provisional only; the next step performs the known-good full registration build."
              ],
              "check": "SetupProbe.h and SetupProbe.cpp have been generated in Source/L4CppTraining.",
              "why": "The Wizard creates the source/reflection boilerplate, but source files existing on disk is not yet the same proof as Unreal loading the native class."
            },
            {
              "title": "Register the untouched class with Unreal",
              "where": "Visual Studio → Development Editor / Win64, then Unreal Editor",
              "doList": [
                "Save All in Visual Studio.",
                "Close Unreal Editor completely.",
                "In Visual Studio set Solution Configuration = Development Editor and Platform = Win64.",
                "In Solution Explorer under Games, right-click L4CppTraining and choose Build.",
                "Watch Output and wait for Build succeeded / 0 failed. If it fails, stop on the FIRST useful compiler/build error and do not continue.",
                "Reopen L4CppTraining.uproject.",
                "Open the Content Drawer and open its Settings menu.",
                "Enable Show C++ Classes. If the Sources panel is hidden, enable Show Sources Panel too.",
                "In the Sources panel open C++ Classes → L4CppTraining and find SetupProbe.",
                "If SetupProbe is not visible there, open Tools → Class Viewer and search SetupProbe.",
                "If neither C++ Classes nor Class Viewer can find SetupProbe after a 0-failed build/restart, stop and diagnose registration/build state before writing gameplay code."
              ],
              "check": "SetupProbe is discoverable as a native C++ class in Unreal after a successful full build/restart.",
              "why": "A native C++ class is not a normal .uasset inside Content. Proving it appears under C++ Classes or Class Viewer confirms Unreal actually loaded the compiled class.",
              "codeGuide": null
            },
            {
              "title": "Read the generated structure",
              "where": "Visual Studio → SetupProbe.h / SetupProbe.cpp",
              "doList": [
                "Find #include \"SetupProbe.generated.h\" and keep it as the final include in the header.",
                "Find UCLASS().",
                "Find class L4CPPTRAINING_API ASetupProbe : public AActor.",
                "Find GENERATED_BODY().",
                "Find ASetupProbe::ASetupProbe() in the .cpp.",
                "Find BeginPlay() and Tick() if the template generated Tick."
              ],
              "check": "You can point to class declaration, constructor and BeginPlay implementation.",
              "why": "You need to know where declarations and implementations live before typing code.",
              "code": [
                {
                  "title": "Typical SetupProbe.h structure to identify",
                  "content": "#pragma once\n\n#include \"CoreMinimal.h\"\n#include \"GameFramework/Actor.h\"\n#include \"SetupProbe.generated.h\"\n\nUCLASS()\nclass L4CPPTRAINING_API ASetupProbe : public AActor\n{\n    GENERATED_BODY()\n\npublic:\n    ASetupProbe();\n\nprotected:\n    virtual void BeginPlay() override;\n\npublic:\n    virtual void Tick(float DeltaTime) override;\n};"
                }
              ],
              "codeRead": {
                "items": [
                  {
                    "token": "#pragma once",
                    "meaning": "Tells the compiler to include this header only once in a build. You do not need to change it."
                  },
                  {
                    "token": "#include \"...\"",
                    "meaning": "Brings declarations from another header into this file so the compiler knows about those types/functions."
                  },
                  {
                    "token": "SetupProbe.generated.h",
                    "meaning": "A file generated by Unreal Header Tool. Keep this as the final #include in the header."
                  },
                  {
                    "token": "UCLASS()",
                    "meaning": "Marks this as an Unreal-reflected class. Think: “Unreal needs to know about this class.”"
                  },
                  {
                    "token": "L4CPPTRAINING_API",
                    "meaning": "Module export/import macro generated for this project. Leave it alone."
                  },
                  {
                    "token": "ASetupProbe",
                    "meaning": "The C++ class name. Actor-derived classes use the A prefix."
                  },
                  {
                    "token": ": public AActor",
                    "meaning": "Means ASetupProbe inherits from AActor, so it gets Actor behaviour and can exist in the world."
                  },
                  {
                    "token": "{ ... }",
                    "meaning": "Curly braces contain the class or function body."
                  },
                  {
                    "token": "GENERATED_BODY()",
                    "meaning": "Adds Unreal-generated support code. Do not remove it."
                  },
                  {
                    "token": "public:",
                    "meaning": "Members below can be accessed from outside the class where normal C++ access rules allow."
                  },
                  {
                    "token": "protected:",
                    "meaning": "Members below are intended for this class and subclasses, rather than general outside access."
                  },
                  {
                    "token": "virtual",
                    "meaning": "This function participates in C++ polymorphism and may be overridden by subclasses."
                  },
                  {
                    "token": "override",
                    "meaning": "Asks the compiler to verify this really overrides a parent-class function."
                  },
                  {
                    "token": ";",
                    "meaning": "Ends a C++ declaration/statement. Missing semicolons are a common beginner error."
                  }
                ],
                "note": "You are not expected to memorise this boilerplate. Your job is to recognise the important pieces and avoid deleting/reordering them."
              },
              "codeGuide": {
                "file": "SetupProbe.h",
                "find": "The generated ASetupProbe class created by Tools → New C++ Class",
                "action": "READ ONLY",
                "place": "Do not type or replace this block. Use it as a map and locate each matching line in your generated header.",
                "after": "No compile. This step is only about recognising the generated structure."
              }
            }
          ],
          "test": [
            "SetupProbe.h exists.",
            "SetupProbe.cpp exists.",
            "A full Development Editor / Win64 build succeeds with 0 failed.",
            "SetupProbe appears under C++ Classes/L4CppTraining or in Class Viewer.",
            "ASetupProbe derives from AActor.",
            "You can explain header versus .cpp."
          ],
          "doneWhen": "Your first authored Unreal C++ class is generated, fully built, loaded by Unreal and visible as a native class before you edit it.",
          "common": [
            "Class names cannot contain spaces.",
            "Do not move includes below SetupProbe.generated.h.",
            "Do not look only inside the normal Content folder for a native class; enable Show C++ Classes or use Class Viewer.",
            "Do not create SetupProbe a second time because it is not visible. First prove the full build/restart succeeded."
          ]
        },
        {
          "id": "first-build",
          "number": 7,
          "title": "Write Real Code — UPROPERTY + BeginPlay + UE_LOG",
          "goal": "Add an editable integer property to SetupProbe, log it from BeginPlay, build the structural change and prove the value travels from Unreal Editor into C++.",
          "why": "This is the first complete Unreal C++ data flow: C++ declares a value → Unreal exposes it → the placed Actor carries a value → C++ reads it at runtime.",
          "concept": "UPROPERTY connects a C++ member to Unreal's reflection/editor system. BeginPlay is a lifecycle function called when gameplay begins. UE_LOG is one of the most useful ways to prove code executed and inspect runtime values.",
          "practical": [
            "This mirrors a common Unreal pattern: programmers expose tuning data while runtime C++ consumes it.",
            "Later missions will expose item values, key requirements, interaction distances and more."
          ],
          "algorithm": [
            "Declare ProbeNumber in SetupProbe.h.",
            "Build/reopen because the reflected header changed.",
            "Place SetupProbe.",
            "Set ProbeNumber in Details.",
            "Play.",
            "BeginPlay logs the current value."
          ],
          "review": [
            {
              "term": "UPROPERTY(EditAnywhere)",
              "text": "Makes the property editable in Unreal Editor instances/defaults."
            },
            {
              "term": "BlueprintReadWrite",
              "text": "Allows Blueprint to read/write the reflected property."
            },
            {
              "term": "int32",
              "text": "A 32-bit integer type commonly used in Unreal C++."
            },
            {
              "term": "TEXT(...)",
              "text": "Wraps string literals for Unreal's TCHAR text system used by logging/macros."
            },
            {
              "term": "%d",
              "text": "Integer format placeholder used by this UE_LOG call."
            }
          ],
          "checkpointCode": [
            {
              "title": "SetupProbe.h — checkpoint",
              "content": "#pragma once\n\n#include \"CoreMinimal.h\"\n#include \"GameFramework/Actor.h\"\n#include \"SetupProbe.generated.h\"\n\nUCLASS()\nclass L4CPPTRAINING_API ASetupProbe : public AActor\n{\n    GENERATED_BODY()\n\npublic:\n    ASetupProbe();\n\n    virtual void Tick(float DeltaTime) override;\n\n    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category=\"Setup Probe\")\n    int32 ProbeNumber = 42;\n\nprotected:\n    virtual void BeginPlay() override;\n};"
            },
            {
              "title": "SetupProbe.cpp — checkpoint",
              "content": "#include \"SetupProbe.h\"\n\nASetupProbe::ASetupProbe()\n{\n    PrimaryActorTick.bCanEverTick = false;\n}\n\nvoid ASetupProbe::BeginPlay()\n{\n    Super::BeginPlay();\n\n    UE_LOG(\n        LogTemp,\n        Warning,\n        TEXT(\"SetupProbe connected. ProbeNumber = %d\"),\n        ProbeNumber\n    );\n}\n\nvoid ASetupProbe::Tick(float DeltaTime)\n{\n    Super::Tick(DeltaTime);\n}"
            }
          ],
          "steps": [
            {
              "title": "Simplify the constructor",
              "where": "SetupProbe.cpp → ASetupProbe::ASetupProbe()",
              "doList": [
                "Set PrimaryActorTick.bCanEverTick = false; because this probe does not need per-frame code.",
                "Keep the generated Tick declaration/definition if Unreal created it. With ticking disabled it will not run, but leaving the generated function avoids unnecessary deletion during your first class.",
                "Save SetupProbe.cpp."
              ],
              "code": [
                {
                  "title": "Constructor line",
                  "content": "PrimaryActorTick.bCanEverTick = false;"
                }
              ],
              "check": "The constructor disables Tick, while any generated Tick function remains harmlessly in place.",
              "why": "Do not pay for/update per-frame logic when the Actor does not need it.",
              "codeRead": {
                "items": [
                  {
                    "token": "ASetupProbe::ASetupProbe()",
                    "meaning": "The constructor for ASetupProbe. The :: means “this function belongs to ASetupProbe”."
                  },
                  {
                    "token": "PrimaryActorTick",
                    "meaning": "A member object/property owned by the Actor."
                  },
                  {
                    "token": ".",
                    "meaning": "Use the dot when accessing something on a normal object/value rather than through a pointer."
                  },
                  {
                    "token": "bCanEverTick",
                    "meaning": "A Boolean member. Unreal commonly prefixes Boolean variable names with b."
                  },
                  {
                    "token": "=",
                    "meaning": "Assignment: put the value on the right into the variable/member on the left."
                  },
                  {
                    "token": "false",
                    "meaning": "Boolean value meaning no/off."
                  },
                  {
                    "token": ";",
                    "meaning": "End of the statement."
                  }
                ]
              },
              "codeGuide": {
                "file": "SetupProbe.cpp",
                "find": "ASetupProbe::ASetupProbe()",
                "action": "EDIT EXISTING LINE",
                "place": "Inside the constructor braces, find the generated PrimaryActorTick.bCanEverTick line and change its value to false. Do not replace the whole constructor.",
                "after": "Save SetupProbe.cpp. Do not compile until the ProbeNumber/BeginPlay changes in this stage are also complete."
              }
            },
            {
              "title": "Declare ProbeNumber",
              "where": "SetupProbe.h → public section",
              "doList": [
                "Add the UPROPERTY line exactly as shown.",
                "On the next line declare int32 ProbeNumber = 42;.",
                "Check the semicolon.",
                "Do not put normal #include lines beneath SetupProbe.generated.h.",
                "Save the header."
              ],
              "code": [
                {
                  "title": "Add to SetupProbe.h",
                  "content": "UPROPERTY(EditAnywhere, BlueprintReadWrite, Category=\"Setup Probe\")\nint32 ProbeNumber = 42;"
                }
              ],
              "check": "ProbeNumber is declared as an editor-exposed int32 with default 42.",
              "why": "This is your first reflected native gameplay property.",
              "codeRead": {
                "items": [
                  {
                    "token": "UPROPERTY(...)",
                    "meaning": "Tells Unreal to reflect/manage the C++ member and applies editor/Blueprint rules."
                  },
                  {
                    "token": "EditAnywhere",
                    "meaning": "Allows the property to be edited in Unreal's Details panels/defaults where appropriate."
                  },
                  {
                    "token": "BlueprintReadWrite",
                    "meaning": "Allows Blueprint to read and write the property."
                  },
                  {
                    "token": "Category=\"Setup Probe\"",
                    "meaning": "Groups the property under a named section in the Unreal Details panel."
                  },
                  {
                    "token": "int32",
                    "meaning": "A 32-bit whole-number type used throughout Unreal C++."
                  },
                  {
                    "token": "ProbeNumber",
                    "meaning": "The variable/member name you chose."
                  },
                  {
                    "token": "= 42",
                    "meaning": "Initial/default value assigned in C++."
                  },
                  {
                    "token": ";",
                    "meaning": "Terminates the declaration."
                  }
                ]
              },
              "codeGuide": {
                "file": "SetupProbe.h",
                "find": "class ASetupProbe → public: section",
                "action": "ADD",
                "place": "Directly below ASetupProbe(); and before the protected: section, add the UPROPERTY line and ProbeNumber declaration.",
                "after": "Save the header. Because this is a reflected UPROPERTY change, use the full close Unreal → Development Editor / Win64 Build → reopen route after the .cpp change is also finished."
              }
            },
            {
              "title": "Log ProbeNumber from BeginPlay",
              "where": "SetupProbe.cpp → BeginPlay()",
              "doList": [
                "Leave Super::BeginPlay(); in place.",
                "Add the UE_LOG statement beneath it.",
                "Type the code yourself.",
                "Save the .cpp."
              ],
              "code": [
                {
                  "title": "Add under Super::BeginPlay()",
                  "content": "UE_LOG(LogTemp, Warning, TEXT(\"SetupProbe connected. ProbeNumber = %d\"), ProbeNumber);"
                }
              ],
              "check": "BeginPlay logs ProbeNumber.",
              "why": "This connects editor data to runtime C++ evidence.",
              "codeRead": {
                "items": [
                  {
                    "token": "void ASetupProbe::BeginPlay()",
                    "meaning": "Function implementation. :: says BeginPlay belongs to ASetupProbe."
                  },
                  {
                    "token": "Super::BeginPlay();",
                    "meaning": "Calls the parent AActor version first. Keep this unless you have a deliberate reason not to."
                  },
                  {
                    "token": "UE_LOG",
                    "meaning": "Unreal logging macro used to write runtime information to the Output Log."
                  },
                  {
                    "token": "LogTemp",
                    "meaning": "A general temporary log category suitable for learning/debug output."
                  },
                  {
                    "token": "Warning",
                    "meaning": "The log verbosity/level used here so the message is easy to spot."
                  },
                  {
                    "token": "TEXT(\"...\")",
                    "meaning": "Wraps the string literal in Unreal's TCHAR-compatible TEXT macro."
                  },
                  {
                    "token": "%d",
                    "meaning": "Placeholder for a decimal integer in this formatted log message."
                  },
                  {
                    "token": "ProbeNumber",
                    "meaning": "Value supplied to replace %d at runtime."
                  },
                  {
                    "token": ",",
                    "meaning": "Separates function/macro arguments."
                  },
                  {
                    "token": ";",
                    "meaning": "Ends the UE_LOG statement."
                  }
                ],
                "note": "Read the UE_LOG from left to right as: “log a warning message, and insert ProbeNumber where %d appears.”"
              },
              "codeGuide": {
                "file": "SetupProbe.cpp",
                "find": "void ASetupProbe::BeginPlay()",
                "action": "ADD",
                "place": "Inside BeginPlay(), keep Super::BeginPlay(); first and add UE_LOG immediately underneath it.",
                "after": "Save All, close Unreal, full Build Development Editor / Win64, reopen Unreal, then place/test SetupProbe."
              }
            },
            {
              "title": "Full build the reflected header change",
              "where": "Visual Studio",
              "doList": [
                "Save All.",
                "Close Unreal Editor.",
                "Select Development Editor / Win64.",
                "Build L4CppTraining.",
                "Wait for 0 failed.",
                "Reopen Unreal."
              ],
              "check": "The new reflected class/property loads after a successful full Build.",
              "why": "Header/reflection changes are safest for beginners using close → full Build → reopen."
            },
            {
              "title": "Place and test SetupProbe",
              "where": "Unreal Editor → level / Output Log",
              "doList": [
                "Find SetupProbe under C++ Classes/L4CppTraining.",
                "Drag one into the level.",
                "Select it and find Setup Probe → Probe Number.",
                "Set Probe Number to 73.",
                "Open Window → Developer Tools → Output Log.",
                "Press Play.",
                "Find the log line showing ProbeNumber = 73.",
                "Stop Play."
              ],
              "check": "The Output Log prints the same value you set in the Editor.",
              "why": "You have proven the complete C++ reflection/runtime loop."
            }
          ],
          "test": [
            "ProbeNumber appears in Details.",
            "You can change it from 42 to another value.",
            "The Build succeeds.",
            "BeginPlay logs the edited value."
          ],
          "doneWhen": "ASetupProbe executes authored C++ and reads editor-exposed data at runtime.",
          "common": [
            "If ProbeNumber is missing from Details, verify the full Build succeeded and you selected the correct Actor.",
            "If the compiler points near UPROPERTY, first check the previous line/semicolon and macro punctuation."
          ]
        },
        {
          "id": "live-coding",
          "number": 8,
          "title": "Use Live Coding for a .cpp-Only Change",
          "goal": "Add a local const variable and change runtime logging without changing the reflected class layout.",
          "why": "Students need a clear distinction between small implementation changes that are good Live Coding candidates and structural header changes that deserve a full rebuild.",
          "concept": "A local variable exists only inside the function call while it runs. const means the local value should not be reassigned after creation. This is ordinary C++ working inside an Unreal lifecycle function.",
          "practical": [
            "Gameplay code constantly creates temporary/local values for calculations.",
            "Live Coding speeds up small implementation changes while the Editor stays open."
          ],
          "algorithm": [
            "Read ProbeNumber.",
            "Calculate DoubledValue.",
            "Log both values.",
            "Save .cpp.",
            "Live Code compile.",
            "Play and compare output."
          ],
          "review": [
            {
              "term": "const int32",
              "text": "An integer local variable that will not be reassigned after initialisation."
            },
            {
              "term": "=",
              "text": "Assignment/initialisation operator."
            },
            {
              "term": "*",
              "text": "Multiplication operator."
            },
            {
              "term": "Local variable",
              "text": "Exists within the function scope rather than as persistent Actor state."
            }
          ],
          "checkpointCode": [
            {
              "title": "BeginPlay() after the Live Coding change",
              "content": "void ASetupProbe::BeginPlay()\n{\n    Super::BeginPlay();\n\n    const int32 DoubledValue = ProbeNumber * 2;\n\n    UE_LOG(\n        LogTemp,\n        Warning,\n        TEXT(\"Probe %d -> doubled %d\"),\n        ProbeNumber,\n        DoubledValue\n    );\n}"
            }
          ],
          "steps": [
            {
              "title": "Add DoubledValue",
              "where": "SetupProbe.cpp → BeginPlay()",
              "doList": [
                "Keep Super::BeginPlay();.",
                "Create const int32 DoubledValue = ProbeNumber * 2;.",
                "Replace the earlier log with the new two-value log.",
                "Save SetupProbe.cpp.",
                "Do not edit SetupProbe.h during this stage."
              ],
              "code": [
                {
                  "title": "BeginPlay body",
                  "content": "void ASetupProbe::BeginPlay()\n{\n    Super::BeginPlay();\n\n    const int32 DoubledValue = ProbeNumber * 2;\n\n    UE_LOG(\n        LogTemp,\n        Warning,\n        TEXT(\"Probe %d -> doubled %d\"),\n        ProbeNumber,\n        DoubledValue\n    );\n}"
                }
              ],
              "check": "BeginPlay calculates a local value and logs both numbers.",
              "why": "This introduces ordinary C++ expressions/local variables without another reflection change.",
              "codeRead": {
                "items": [
                  {
                    "token": "const",
                    "meaning": "Says this local variable should not be reassigned after it is initialised."
                  },
                  {
                    "token": "int32",
                    "meaning": "Whole-number type."
                  },
                  {
                    "token": "DoubledValue",
                    "meaning": "A local variable name; it only exists while BeginPlay is running."
                  },
                  {
                    "token": "ProbeNumber * 2",
                    "meaning": "Multiply ProbeNumber by 2."
                  },
                  {
                    "token": "*",
                    "meaning": "Here * means multiplication. Later you will also see * in pointer-related C++ syntax; the surrounding code tells you which meaning is intended."
                  },
                  {
                    "token": "=",
                    "meaning": "Initialises DoubledValue with the result on the right."
                  },
                  {
                    "token": "%d -> %d",
                    "meaning": "Two integer placeholders; arguments after the text fill them in from left to right."
                  }
                ]
              },
              "codeGuide": {
                "file": "SetupProbe.cpp",
                "find": "void ASetupProbe::BeginPlay()",
                "action": "EDIT FUNCTION BODY",
                "place": "Keep Super::BeginPlay();. Add DoubledValue immediately after it, then REPLACE the previous one-value UE_LOG with the new two-value UE_LOG.",
                "after": "Save SetupProbe.cpp and use Live Coding because only .cpp implementation code changed."
              }
            },
            {
              "title": "Compile with Live Coding",
              "where": "Unreal Editor",
              "doList": [
                "Keep Unreal Editor open.",
                "Trigger Live Coding from the Editor or Ctrl+Alt+F11.",
                "Wait for a successful compile.",
                "Press Play.",
                "With ProbeNumber 73, confirm the output includes doubled 146.",
                "Stop Play."
              ],
              "check": "The .cpp-only change compiles without closing Unreal and prints the expected calculation.",
              "why": "This is the fast iteration route for small implementation edits."
            }
          ],
          "test": [
            "Live Coding succeeds.",
            "Probe 73 produces doubled 146.",
            "You can explain why this stage did not need a reflected header change."
          ],
          "doneWhen": "You can make and verify a small .cpp-only code change efficiently.",
          "common": [
            "Use Live Coding for implementation-only .cpp edits after the class has already passed a normal full build.",
            "Do not use Live Coding as the proof that a brand-new UCLASS/UActorComponent is registered.",
            "For UCLASS/USTRUCT/UENUM/UFUNCTION/UPROPERTY signature or reflected header changes, the beginner-safe route is save → close Unreal → Development Editor / Win64 full Build → reopen.",
            "Do not run Visual Studio Build and Live Coding simultaneously.",
            "If the Editor behaves as if old code is still loaded, use the safe close → full Build → reopen route."
          ]
        },
        {
          "id": "recovery",
          "number": 9,
          "title": "Break It on Purpose — Read, Fix, Recover",
          "goal": "Cause one controlled compiler error, use the first useful message to fix it, then finish with a clean full Build.",
          "why": "Compiler errors are part of C++ development. The skill is not avoiding them; it is reducing the change, reading the message and correcting the actual cause.",
          "concept": "One syntax error can create many secondary errors. The first error near your last change is usually the best starting point.",
          "practical": [
            "Later classes will be much larger. A disciplined 'last change + first error' routine prevents random edits.",
            "SetupProbe remains a known-good class you can use to test whether the toolchain itself still works."
          ],
          "algorithm": [
            "Make one intentional error.",
            "Compile once.",
            "Read the first error.",
            "Navigate to its line.",
            "Undo/fix only the mistake.",
            "Compile again.",
            "Finish with a clean full Build."
          ],
          "review": [
            {
              "term": "Syntax error",
              "text": "Code does not follow C++ grammar, such as a missing semicolon."
            },
            {
              "term": "Compiler error",
              "text": "The compiler cannot produce valid output from the source."
            },
            {
              "term": "Follow-on error",
              "text": "A later error caused by an earlier parse/type failure."
            },
            {
              "term": "Recovery build",
              "text": "Close Unreal and perform a clean full Development Editor / Win64 Build when state is confusing."
            }
          ],
          "steps": [
            {
              "title": "Remove one semicolon",
              "where": "SetupProbe.cpp → DoubledValue line",
              "doList": [
                "Delete ONLY the final semicolon from const int32 DoubledValue = ProbeNumber * 2;.",
                "Save the file.",
                "Trigger Live Coding once.",
                "Do not change five other lines after it fails."
              ],
              "check": "Compilation fails because of the deliberate syntax error.",
              "why": "A tiny controlled error makes compiler output safe to study."
            },
            {
              "title": "Use the first useful error",
              "where": "Live Coding / Visual Studio Output",
              "doList": [
                "Find the first error referencing SetupProbe.cpp.",
                "Read the line number/message.",
                "Return to the code around your last change.",
                "Restore the semicolon.",
                "Save.",
                "Compile again."
              ],
              "check": "Live Coding succeeds after restoring the semicolon.",
              "why": "You fixed the cause instead of chasing symptoms."
            },
            {
              "title": "Practise reopen/refresh",
              "where": "Unreal Editor → Tools",
              "doList": [
                "Locate Tools → Open Visual Studio.",
                "Locate Refresh Visual Studio Project (wording may vary slightly).",
                "Know refresh is for project/source-file visibility, not C++ syntax errors.",
                "Do not use refresh as a replacement for reading compiler output."
              ],
              "check": "You know where the two common project-navigation recovery commands live.",
              "why": "Students sometimes lose project context separately from code correctness."
            },
            {
              "title": "Final full Build",
              "where": "Visual Studio",
              "doList": [
                "Save All.",
                "Close Unreal Editor.",
                "Set Development Editor / Win64.",
                "Build L4CppTraining.",
                "Confirm 0 failed.",
                "Reopen Unreal.",
                "Place/test SetupProbe one final time."
              ],
              "check": "The project ends Mission 0 with a clean full Build and working SetupProbe.",
              "why": "Mission 1 can now start from a known-good real C++ baseline."
            }
          ],
          "test": [
            "You deliberately caused a compiler error.",
            "You found and fixed it from the compiler output.",
            "A final full Build succeeds.",
            "SetupProbe still logs its value/calculation."
          ],
          "doneWhen": "You have completed the entire Unreal C++ workflow: setup, author, compile, run, inspect and debug.",
          "common": [
            "If the project built before the intentional edit, do not reinstall Visual Studio because of a missing semicolon.",
            "Refresh project files does not fix invalid C++."
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
      "title": "Core Gameplay Actor — Build a C++ Collectible",
      "subtitle": "Continue L4CppTraining and build a real collectible Actor entirely from C++ foundations: component hierarchy, editable data, per-frame rotation, overlap collision, delegate binding, condition checks, a Character cast, collection state, logging and a Blueprint child.",
      "duration": "3–4 hours",
      "difficulty": "Guided beginner gameplay code",
      "summary": "Mission 1 now behaves like a small gameplay-programming chapter rather than a syntax demo. You will plan the collection algorithm, review the class responsibilities, then build ATrainingPickup in layers. The finished object spins, detects a player overlap, checks state/type, logs who collected it and its value, and destroys itself. Blueprint is used to assign presentation/tuning—not to replace the native gameplay logic.",
      "guideRule": "Before each code block, read what the class/function is responsible for. Type the change, compile it, then prove it in Unreal. Use the full-code checkpoints only to compare after you have built the stage.",
      "skills": [
        "AActor",
        "Component hierarchy",
        "CreateDefaultSubobject",
        "SetupAttachment",
        "UPROPERTY",
        "UFUNCTION",
        "float / int32 / bool",
        "Tick + DeltaTime",
        "USphereComponent",
        "collision channels",
        "delegates / AddDynamic",
        "if / return",
        "Cast<ACharacter>",
        "Destroy",
        "Blueprint child"
      ],
      "rules": [
        "Continue the same L4CppTraining project from Mission 0.",
        "Do not skip a READ THIS CODE box. New C++ punctuation/operators are explained at first use so you are never expected to guess what a symbol means.",
        "Build one gameplay responsibility at a time: structure → data → update → collision → response.",
        "Type incremental code first; full-file checkpoints are for comparison/debugging.",
        "Use C++ for the reusable gameplay rule. Use Blueprint for mesh/material/default tuning.",
        "Compile/test after every stage before adding the next system.",
        "If you change reflected header structure and the Editor becomes confused, use close → full Build → reopen."
      ],
      "gameFlow": [
        "Plan collectible",
        "Create class",
        "Build components",
        "Expose data",
        "Rotate in Tick",
        "Configure overlap",
        "Bind delegate",
        "Validate player",
        "Collect + Destroy",
        "Blueprint child + variation"
      ],
      "theoryLinks": [
        {
          "label": "Epic UE5.8 — Gameplay Classes",
          "href": "https://dev.epicgames.com/documentation/unreal-engine/gameplay-classes-in-unreal-engine"
        },
        {
          "label": "Epic UE5.8 — C++ and Blueprints Example",
          "href": "https://dev.epicgames.com/documentation/en-us/unreal-engine/cpp-and-blueprints-example"
        },
        {
          "label": "Epic UE5.8 — C++ Programming Tutorials",
          "href": "https://dev.epicgames.com/documentation/unreal-engine/unreal-engine-cpp-programming-tutorials"
        }
      ],
      "stages": [
        {
          "id": "start",
          "number": 0,
          "title": "Plan the Mechanic Before the Code",
          "goal": "Define exactly what the collectible should do and turn that behaviour into a small algorithm before creating the class.",
          "why": "The book reference repeatedly separates the gameplay idea, practical use, algorithm and code review. We will use that same learning rhythm so the code has a reason to exist.",
          "concept": "The collectible is an Actor with visible representation, a detection volume, editable data and one response to player overlap. It is small enough to understand, but real enough to introduce several core Unreal C++ systems.",
          "practical": [
            "Collectibles are used for score items, keys, health/ammo, quest items and progression.",
            "This class will become the foundation for later inventory and locked-door missions.",
            "The Blueprint child will let a designer change the mesh/value without rewriting C++."
          ],
          "algorithm": [
            "Initialise a root, mesh and collection sphere.",
            "Every frame, rotate the Actor using RotationSpeed × DeltaTime.",
            "When the sphere begins overlapping something, check whether the pickup is already collected.",
            "Check the overlapping Actor exists and is a Character.",
            "Mark the pickup collected.",
            "Log the collector and ItemValue.",
            "Destroy the pickup."
          ],
          "review": [
            {
              "term": "State",
              "text": "bCollected remembers whether collection has already happened."
            },
            {
              "term": "Data",
              "text": "RotationSpeed and ItemValue are values that can vary between pickup instances."
            },
            {
              "term": "Detection",
              "text": "USphereComponent produces an overlap event when a Pawn enters its query volume."
            },
            {
              "term": "Response",
              "text": "The overlap callback validates the Actor, logs the event and removes the pickup."
            }
          ],
          "steps": [
            {
              "title": "Prove Mission 0 still works",
              "where": "L4CppTraining",
              "doList": [
                "Open L4CppTraining.",
                "Place/test SetupProbe or confirm it still exists.",
                "Save All.",
                "Open Visual Studio from Unreal.",
                "If the project has not been built since Mission 0, close Unreal and run Development Editor / Win64 Build.",
                "Reopen Unreal after a successful build."
              ],
              "check": "The existing C++ project is healthy before you add the collectible.",
              "why": "A known-good baseline makes new errors traceable to the new class."
            },
            {
              "title": "Predict the class members",
              "where": "Before Visual Studio coding",
              "doList": [
                "Write down: SceneRoot, Mesh, CollectionSphere.",
                "Write down: RotationSpeed, ItemValue, bCollected.",
                "Write down: BeginPlay, Tick, OnCollectionSphereBeginOverlap.",
                "Do not worry about syntax yet; identify responsibilities first."
              ],
              "check": "You can describe the class shape before seeing the code.",
              "why": "Programming starts with decomposing the mechanic, not typing macros blindly."
            }
          ],
          "test": [
            "You can explain the collection algorithm in order.",
            "You can name the three components and three gameplay properties.",
            "Mission 0 project still builds/runs."
          ],
          "doneWhen": "You know what the class must own and what event makes collection happen.",
          "common": [
            "Do not start by searching for a giant finished pickup class online.",
            "If you cannot describe what triggers collection, revisit the algorithm before coding."
          ]
        },
        {
          "id": "create-class",
          "number": 1,
          "title": "Create ATrainingPickup",
          "goal": "Use Unreal's C++ Class Wizard to create the new Actor and compile the untouched generated class.",
          "why": "A clean generated baseline separates Wizard/module issues from the code you will add afterwards.",
          "concept": "ATrainingPickup derives from AActor, so Unreal can place/spawn it in the world. The class name uses Unreal's A prefix because it derives from Actor.",
          "practical": [
            "The class will eventually become a reusable base for multiple pickup Blueprint children.",
            "The C++ Class Wizard creates the reflection boilerplate correctly."
          ],
          "algorithm": [
            "Tools → New C++ Class.",
            "Actor parent.",
            "Name TrainingPickup.",
            "Generate header/source.",
            "Compile untouched baseline.",
            "Confirm class appears in Unreal."
          ],
          "review": [
            {
              "term": "ATrainingPickup",
              "text": "C++ class name; A prefix indicates Actor-derived."
            },
            {
              "term": "TrainingPickup.h",
              "text": "Declares components/properties/functions."
            },
            {
              "term": "TrainingPickup.cpp",
              "text": "Constructs components and implements runtime behaviour."
            }
          ],
          "steps": [
            {
              "title": "Generate the class",
              "where": "Unreal Editor → Tools → New C++ Class",
              "doList": [
                "Choose Actor.",
                "Click Next.",
                "Name it TrainingPickup.",
                "Keep the default L4CppTraining game module/location.",
                "Click Create Class.",
                "Wait until TrainingPickup.h and TrainingPickup.cpp exist and open in Visual Studio.",
                "Do not add components/properties yet."
              ],
              "check": "TrainingPickup.h/.cpp exist in the L4CppTraining module.",
              "why": "The Wizard creates the UCLASS source files; the next step proves Unreal has actually loaded the compiled class."
            },
            {
              "title": "Full build and prove the native class is visible",
              "where": "Visual Studio → Unreal Content Drawer / Class Viewer",
              "doList": [
                "Save the untouched generated files.",
                "Close Unreal Editor completely.",
                "Select Development Editor / Win64 in Visual Studio.",
                "Right-click L4CppTraining under Games in Solution Explorer → Build.",
                "Wait for Build succeeded / 0 failed.",
                "Reopen the L4CppTraining project.",
                "Content Drawer → Settings → enable Show C++ Classes.",
                "Open C++ Classes → L4CppTraining and find TrainingPickup.",
                "If it is not listed there, Tools → Class Viewer → search TrainingPickup.",
                "Only continue when Unreal can see ATrainingPickup.",
                "If it is still missing, do not make a duplicate class and do not start editing components—capture the first build/module error instead."
              ],
              "check": "ATrainingPickup builds with 0 failed and is visible to Unreal as a native class.",
              "why": "New UCLASS registration is a structural step. A full Editor build/restart gives beginners a deterministic checkpoint before Live Coding is used for later implementation-only edits."
            }
          ],
          "test": [
            "TrainingPickup.h/.cpp exist.",
            "ATrainingPickup derives from AActor.",
            "Development Editor / Win64 builds with 0 failed.",
            "TrainingPickup appears under C++ Classes/L4CppTraining or Class Viewer."
          ],
          "doneWhen": "The untouched ATrainingPickup class is compiled, registered and visible in Unreal.",
          "common": [
            "Do not add all components and overlap code before the generated class has passed this registration build.",
            "A native C++ class does not appear as a normal Content .uasset.",
            "If C++ Classes is missing, Content Drawer → Settings → Show C++ Classes.",
            "If the source files exist but Unreal cannot find the class, do not create it again—fix the build/load state first.",
            "Use the first Wizard/Build error rather than editing random module files."
          ]
        },
        {
          "id": "read-generated",
          "number": 2,
          "title": "Write the Class Shape — Header First",
          "goal": "Declare the three components, three gameplay properties and overlap callback in TrainingPickup.h.",
          "why": "The header is the contract of the class. Reading it should tell another programmer what the Actor owns and can respond to.",
          "concept": "The header declares reflected member variables with UPROPERTY and event callback functions with UFUNCTION. Forward declarations let the header refer to component types without pulling their full definitions into every file that includes this header.",
          "practical": [
            "A readable header is a map of the gameplay class.",
            "Later missions will add inventory/door functions using the same declaration → implementation pattern."
          ],
          "algorithm": [
            "Forward-declare component types.",
            "Declare constructor/Tick/BeginPlay.",
            "Declare components.",
            "Declare editable gameplay data.",
            "Declare overlap callback."
          ],
          "review": [
            {
              "term": "class UStaticMeshComponent;",
              "text": "Forward declaration: tells C++ the type name exists."
            },
            {
              "term": "UPROPERTY",
              "text": "Makes Unreal aware of a member for reflection/editor/object tracking."
            },
            {
              "term": "UFUNCTION()",
              "text": "Marks the callback for Unreal reflection/delegate binding."
            },
            {
              "term": "protected",
              "text": "Class members accessible in this class and subclasses; used here for lifecycle/callback implementation."
            }
          ],
          "checkpointCode": [
            {
              "title": "TrainingPickup.h — target after this stage",
              "content": "#pragma once\n\n#include \"CoreMinimal.h\"\n#include \"GameFramework/Actor.h\"\n#include \"TrainingPickup.generated.h\"\n\nclass USceneComponent;\nclass UStaticMeshComponent;\nclass USphereComponent;\nclass UPrimitiveComponent;\n\nUCLASS()\nclass L4CPPTRAINING_API ATrainingPickup : public AActor\n{\n    GENERATED_BODY()\n\npublic:\n    ATrainingPickup();\n\n    virtual void Tick(float DeltaTime) override;\n\n    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=\"Pickup\")\n    USceneComponent* SceneRoot;\n\n    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=\"Pickup\")\n    UStaticMeshComponent* Mesh;\n\n    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=\"Pickup\")\n    USphereComponent* CollectionSphere;\n\n    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category=\"Pickup\")\n    float RotationSpeed = 90.0f;\n\n    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category=\"Pickup\")\n    int32 ItemValue = 10;\n\n    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=\"Pickup\")\n    bool bCollected = false;\n\nprotected:\n    virtual void BeginPlay() override;\n\n    UFUNCTION()\n    void OnCollectionSphereBeginOverlap(\n        UPrimitiveComponent* OverlappedComponent,\n        AActor* OtherActor,\n        UPrimitiveComponent* OtherComp,\n        int32 OtherBodyIndex,\n        bool bFromSweep,\n        const FHitResult& SweepResult\n    );\n};"
            }
          ],
          "steps": [
            {
              "title": "Add component forward declarations",
              "where": "TrainingPickup.h → after includes / before UCLASS",
              "doList": [
                "Keep TrainingPickup.generated.h as the final #include.",
                "Below the includes, add forward declarations for USceneComponent, UStaticMeshComponent, USphereComponent and UPrimitiveComponent.",
                "Do not #include component headers under the generated header."
              ],
              "code": [
                {
                  "title": "Forward declarations",
                  "content": "class USceneComponent;\nclass UStaticMeshComponent;\nclass USphereComponent;\nclass UPrimitiveComponent;"
                }
              ],
              "check": "The header can name the component pointer types without moving generated.h.",
              "why": "This keeps the header's dependencies lighter.",
              "codeRead": {
                "items": [
                  {
                    "token": "class UStaticMeshComponent;",
                    "meaning": "A forward declaration: “this class type exists; I only need to refer to it here.”"
                  },
                  {
                    "token": "class",
                    "meaning": "C++ keyword used when declaring a class/type."
                  },
                  {
                    "token": ";",
                    "meaning": "A forward declaration ends with a semicolon because it is only a declaration, not a class body."
                  }
                ],
                "note": "Forward declarations are not creating components. They simply let the header use pointer types without including every component header."
              },
              "codeGuide": {
                "file": "TrainingPickup.h",
                "find": "Immediately after #include \"TrainingPickup.generated.h\"? NO — forward declarations go after the include block but before UCLASS().",
                "action": "ADD",
                "place": "Keep TrainingPickup.generated.h as the final #include. Add the forward-declaration lines on the blank lines AFTER that include and BEFORE UCLASS().",
                "after": "Save the header. Do not full Build yet; finish the header declarations in this stage first."
              }
            },
            {
              "title": "Declare the component properties",
              "where": "TrainingPickup.h → public section",
              "doList": [
                "Declare SceneRoot with VisibleAnywhere + BlueprintReadOnly.",
                "Declare Mesh the same way.",
                "Declare CollectionSphere the same way.",
                "Use the Pickup category on all three.",
                "Check every pointer line ends with a semicolon."
              ],
              "code": [
                {
                  "title": "Component declarations",
                  "content": "UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=\"Pickup\")\nUSceneComponent* SceneRoot;\n\nUPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=\"Pickup\")\nUStaticMeshComponent* Mesh;\n\nUPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=\"Pickup\")\nUSphereComponent* CollectionSphere;"
                }
              ],
              "check": "Three reflected component pointers are declared.",
              "why": "These components define the Actor's physical/visible structure.",
              "codeRead": {
                "items": [
                  {
                    "token": "USceneComponent* SceneRoot;",
                    "meaning": "Declares a pointer named SceneRoot that can refer to a USceneComponent object."
                  },
                  {
                    "token": "*",
                    "meaning": "In a declaration such as USceneComponent* SceneRoot, * means SceneRoot is a pointer. A pointer stores/refers to the address of an object rather than containing the whole object itself."
                  },
                  {
                    "token": "Pointer",
                    "meaning": "For now, think “reference to an Unreal object/component I will create in the constructor.” You do not need pointer arithmetic in this course."
                  },
                  {
                    "token": "VisibleAnywhere",
                    "meaning": "Shows the property/component reference in Unreal's editor but does not invite replacement of the pointer itself."
                  },
                  {
                    "token": "BlueprintReadOnly",
                    "meaning": "Blueprint may read this property but cannot directly assign a different pointer through normal Blueprint property access."
                  },
                  {
                    "token": "Category=\"Pickup\"",
                    "meaning": "Groups the property under Pickup in the Details panel."
                  }
                ],
                "note": "The * next to the type is one of the first big C++ differences from Blueprint. For this course, Unreal Components are usually handled through pointers."
              },
              "codeGuide": {
                "file": "TrainingPickup.h",
                "find": "class ATrainingPickup → public: section",
                "action": "ADD",
                "place": "Add SceneRoot, Mesh and CollectionSphere declarations below the constructor/Tick declarations and before the protected: section. Do not delete generated declarations.",
                "after": "Save. Continue the rest of the header stage before the full Build."
              }
            },
            {
              "title": "Declare the gameplay data",
              "where": "TrainingPickup.h → public section",
              "doList": [
                "Add RotationSpeed as float default 90.0f.",
                "Add ItemValue as int32 default 10.",
                "Add bCollected as bool default false.",
                "Make RotationSpeed and ItemValue EditAnywhere/BlueprintReadWrite.",
                "Make bCollected VisibleAnywhere/BlueprintReadOnly."
              ],
              "code": [
                {
                  "title": "Gameplay properties",
                  "content": "UPROPERTY(EditAnywhere, BlueprintReadWrite, Category=\"Pickup\")\nfloat RotationSpeed = 90.0f;\n\nUPROPERTY(EditAnywhere, BlueprintReadWrite, Category=\"Pickup\")\nint32 ItemValue = 10;\n\nUPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=\"Pickup\")\nbool bCollected = false;"
                }
              ],
              "check": "The class now has editable tuning data and read-only collection state.",
              "why": "Programmer-owned state and designer-tunable data have different exposure needs.",
              "codeRead": {
                "items": [
                  {
                    "token": "float RotationSpeed = 90.0f;",
                    "meaning": "A decimal-number property. The f marks the literal as a float."
                  },
                  {
                    "token": "int32 ItemValue = 10;",
                    "meaning": "A whole-number property."
                  },
                  {
                    "token": "bool bCollected = false;",
                    "meaning": "A true/false property, initially false."
                  },
                  {
                    "token": "bool",
                    "meaning": "Boolean type: true or false."
                  },
                  {
                    "token": "bCollected",
                    "meaning": "Unreal naming convention commonly prefixes Boolean names with b."
                  },
                  {
                    "token": "90.0f",
                    "meaning": "Floating-point literal. The trailing f explicitly makes it a float."
                  },
                  {
                    "token": "EditAnywhere / BlueprintReadWrite",
                    "meaning": "These are designer-tunable values, so Unreal/Blueprint are allowed to edit them."
                  },
                  {
                    "token": "VisibleAnywhere / BlueprintReadOnly",
                    "meaning": "Collection state should be inspectable but not casually overwritten by a designer."
                  }
                ]
              },
              "codeGuide": {
                "file": "TrainingPickup.h",
                "find": "class ATrainingPickup → public: section",
                "action": "ADD",
                "place": "Place RotationSpeed, ItemValue and bCollected directly below the component declarations you just added.",
                "after": "Save. Continue to the callback declaration before building."
              }
            },
            {
              "title": "Declare the overlap callback",
              "where": "TrainingPickup.h → protected section",
              "doList": [
                "Keep BeginPlay() override.",
                "Add UFUNCTION().",
                "Type the full OnCollectionSphereBeginOverlap signature from the code block.",
                "Pay attention to pointers, commas, bool and const FHitResult&.",
                "End the declaration with a semicolon."
              ],
              "code": [
                {
                  "title": "Overlap callback declaration",
                  "content": "UFUNCTION()\nvoid OnCollectionSphereBeginOverlap(\n    UPrimitiveComponent* OverlappedComponent,\n    AActor* OtherActor,\n    UPrimitiveComponent* OtherComp,\n    int32 OtherBodyIndex,\n    bool bFromSweep,\n    const FHitResult& SweepResult\n);"
                }
              ],
              "check": "The overlap callback is declared with UFUNCTION().",
              "why": "Dynamic overlap delegates require a compatible reflected callback.",
              "codeRead": {
                "items": [
                  {
                    "token": "UFUNCTION()",
                    "meaning": "Registers the function with Unreal's reflection system so it can be bound to the dynamic overlap delegate."
                  },
                  {
                    "token": "void",
                    "meaning": "The function does not return a value."
                  },
                  {
                    "token": "OnCollectionSphereBeginOverlap",
                    "meaning": "Your callback function name."
                  },
                  {
                    "token": "UPrimitiveComponent* OverlappedComponent",
                    "meaning": "The component that generated the overlap event."
                  },
                  {
                    "token": "AActor* OtherActor",
                    "meaning": "The other Actor involved in the overlap. This is the parameter you will care about most in this mission."
                  },
                  {
                    "token": "UPrimitiveComponent* OtherComp",
                    "meaning": "The other Actor's component that overlapped."
                  },
                  {
                    "token": "int32 OtherBodyIndex",
                    "meaning": "Index Unreal supplies for the overlapping body when relevant."
                  },
                  {
                    "token": "bool bFromSweep",
                    "meaning": "True when the overlap came from a swept movement test."
                  },
                  {
                    "token": "const FHitResult& SweepResult",
                    "meaning": "Extra hit/sweep information supplied by Unreal."
                  },
                  {
                    "token": "&",
                    "meaning": "Here & means the parameter is passed by reference. const means this function promises not to modify that referenced FHitResult."
                  },
                  {
                    "token": "*",
                    "meaning": "In AActor* and UPrimitiveComponent*, * means pointer."
                  },
                  {
                    "token": ",",
                    "meaning": "Separates parameters in the function's parameter list."
                  }
                ],
                "note": "DO NOT MEMORISE THIS CALLBACK SIGNATURE. Unreal's overlap delegate requires this shape, so copy/type it carefully. The important beginner idea is: Unreal calls this function and supplies information about the overlap."
              },
              "codeGuide": {
                "file": "TrainingPickup.h",
                "find": "class ATrainingPickup → protected: section",
                "action": "ADD",
                "place": "Keep BeginPlay() override. Add UFUNCTION() and the callback declaration directly below BeginPlay(). Do not type an implementation body in the header.",
                "after": "Save All. These are reflected/header changes; use a full Build when the matching constructor/component implementation is ready in Stage 3."
              }
            }
          ],
          "test": [
            "TrainingPickup.h shows the whole intended class structure.",
            "The three component properties exist.",
            "RotationSpeed, ItemValue and bCollected exist.",
            "The overlap UFUNCTION signature exists."
          ],
          "doneWhen": "Another programmer could understand the class responsibilities by reading the header.",
          "common": [
            "If UHT/compile errors appear around a UPROPERTY, check the line immediately above/below for punctuation.",
            "Do not put component #include lines after TrainingPickup.generated.h.",
            "You do not need to memorise the overlap callback parameter list; you do need to know that Unreal supplies those values and OtherActor identifies the other Actor."
          ]
        },
        {
          "id": "first-log",
          "number": 3,
          "title": "Constructor — Build the Component Hierarchy",
          "goal": "Create SceneRoot, Mesh and CollectionSphere as default subobjects and attach them into a clear hierarchy.",
          "why": "Unreal Actors are containers for Components. The constructor is where this class defines the components every instance starts with.",
          "concept": "CreateDefaultSubobject creates components as part of the class default object/instance structure. SetRootComponent establishes the root transform. SetupAttachment creates parent/child relationships.",
          "practical": [
            "This is the C++ equivalent of adding components in a Blueprint Components panel.",
            "Blueprint children will inherit this component hierarchy."
          ],
          "algorithm": [
            "Enable Tick.",
            "Create SceneRoot.",
            "Set it as root.",
            "Create Mesh and attach to root.",
            "Create CollectionSphere and attach to root.",
            "Compile and inspect hierarchy in Unreal."
          ],
          "review": [
            {
              "term": "CreateDefaultSubobject<T>",
              "text": "Creates a component/object that every instance of the class owns by default."
            },
            {
              "term": "SetRootComponent",
              "text": "Defines the Actor component whose transform anchors the hierarchy."
            },
            {
              "term": "SetupAttachment",
              "text": "Declares which component is parented to which."
            },
            {
              "term": "TEXT(\"Mesh\")",
              "text": "The internal component name shown to Unreal/reflection."
            }
          ],
          "steps": [
            {
              "title": "Add required component includes",
              "where": "TrainingPickup.cpp → top of file",
              "doList": [
                "Keep #include \"TrainingPickup.h\" first.",
                "Add SceneComponent.h.",
                "Add SphereComponent.h.",
                "Add StaticMeshComponent.h.",
                "Do not add these beneath generated.h because this is the .cpp file, not the header."
              ],
              "code": [
                {
                  "title": "Includes",
                  "content": "#include \"TrainingPickup.h\"\n\n#include \"Components/SceneComponent.h\"\n#include \"Components/SphereComponent.h\"\n#include \"Components/StaticMeshComponent.h\""
                }
              ],
              "check": "TrainingPickup.cpp has the full component type definitions it needs.",
              "why": "Forward declarations are enough for pointers in the header; construction/member calls require full definitions in the .cpp.",
              "codeRead": {
                "items": [
                  {
                    "token": "#include \"TrainingPickup.h\"",
                    "meaning": "The matching class header is included first in the .cpp so missing dependencies in the header are easier to catch."
                  },
                  {
                    "token": "#include \"Components/SceneComponent.h\"",
                    "meaning": "Brings in the full definition of USceneComponent so the .cpp can create/use it."
                  },
                  {
                    "token": "Forward declaration vs #include",
                    "meaning": "The header can often forward-declare a pointer type. The .cpp includes the full type when it needs to construct it or call its functions."
                  }
                ]
              },
              "codeGuide": {
                "file": "TrainingPickup.cpp",
                "find": "Top include block",
                "action": "ADD",
                "place": "Keep #include \"TrainingPickup.h\" as the first include. Add the three Components/... includes immediately below it.",
                "after": "Save. No compile until the constructor component code in this stage is complete."
              }
            },
            {
              "title": "Create SceneRoot",
              "where": "ATrainingPickup::ATrainingPickup()",
              "doList": [
                "Keep PrimaryActorTick.bCanEverTick = true;.",
                "Create SceneRoot with CreateDefaultSubobject<USceneComponent>.",
                "Call SetRootComponent(SceneRoot).",
                "Save."
              ],
              "code": [
                {
                  "title": "Root component",
                  "content": "SceneRoot = CreateDefaultSubobject<USceneComponent>(TEXT(\"SceneRoot\"));\nSetRootComponent(SceneRoot);"
                }
              ],
              "check": "SceneRoot is the Actor root.",
              "why": "A neutral scene root makes it easy to attach both visual and collision components.",
              "codeRead": {
                "items": [
                  {
                    "token": "ATrainingPickup::ATrainingPickup()",
                    "meaning": "Constructor implementation. :: means this constructor belongs to ATrainingPickup."
                  },
                  {
                    "token": "CreateDefaultSubobject<USceneComponent>",
                    "meaning": "Creates a default component owned by every ATrainingPickup instance."
                  },
                  {
                    "token": "<USceneComponent>",
                    "meaning": "Angle brackets supply the C++ template type: create this kind of component."
                  },
                  {
                    "token": "TEXT(\"SceneRoot\")",
                    "meaning": "Internal Unreal name for the component."
                  },
                  {
                    "token": "SceneRoot = ...",
                    "meaning": "Stores the pointer returned by CreateDefaultSubobject into the SceneRoot member."
                  },
                  {
                    "token": "SetRootComponent(SceneRoot)",
                    "meaning": "Makes SceneRoot the Actor's root component."
                  },
                  {
                    "token": "()",
                    "meaning": "Parentheses contain function arguments. Empty () means no arguments."
                  }
                ]
              },
              "codeGuide": {
                "file": "TrainingPickup.cpp",
                "find": "ATrainingPickup::ATrainingPickup()",
                "action": "ADD",
                "place": "Inside the constructor braces, keep PrimaryActorTick.bCanEverTick = true; and add the SceneRoot creation lines immediately underneath it.",
                "after": "Save. Continue adding Mesh and CollectionSphere before building."
              }
            },
            {
              "title": "Create Mesh and CollectionSphere",
              "where": "Same constructor",
              "doList": [
                "Create Mesh as UStaticMeshComponent.",
                "Attach Mesh to SceneRoot.",
                "Disable collision on Mesh so the visible pickup does not physically block the player.",
                "Create CollectionSphere as USphereComponent.",
                "Attach CollectionSphere to SceneRoot.",
                "Set initial sphere radius to 90.0f.",
                "Save."
              ],
              "code": [
                {
                  "title": "Child components",
                  "content": "Mesh = CreateDefaultSubobject<UStaticMeshComponent>(TEXT(\"Mesh\"));\nMesh->SetupAttachment(SceneRoot);\nMesh->SetCollisionEnabled(ECollisionEnabled::NoCollision);\n\nCollectionSphere = CreateDefaultSubobject<USphereComponent>(TEXT(\"CollectionSphere\"));\nCollectionSphere->SetupAttachment(SceneRoot);\nCollectionSphere->InitSphereRadius(90.0f);"
                }
              ],
              "check": "The constructor creates a non-blocking Mesh and a separate CollectionSphere under SceneRoot.",
              "why": "The class now has visible representation and a dedicated interaction/detection shape.",
              "codeRead": {
                "items": [
                  {
                    "token": "Mesh->SetupAttachment(SceneRoot)",
                    "meaning": "Call SetupAttachment on the object pointed to by Mesh, making SceneRoot its parent."
                  },
                  {
                    "token": "->",
                    "meaning": "Use the arrow operator to access a member/function through a pointer."
                  },
                  {
                    "token": "Mesh->SetCollisionEnabled(...)",
                    "meaning": "Calls another function on the Mesh component pointer."
                  },
                  {
                    "token": "ECollisionEnabled::NoCollision",
                    "meaning": "An enum value. :: here means NoCollision belongs to the ECollisionEnabled enum/type."
                  },
                  {
                    "token": "CollectionSphere->InitSphereRadius(90.0f)",
                    "meaning": "Calls a sphere-component function through the pointer and gives it one float argument."
                  },
                  {
                    "token": "::",
                    "meaning": "You will see :: in several contexts; broadly it means “this name belongs inside that class/type/namespace.”"
                  }
                ],
                "note": "Useful rule: if the variable is a pointer to an Unreal object/component, you will very often use -> to call its functions."
              },
              "codeGuide": {
                "file": "TrainingPickup.cpp",
                "find": "ATrainingPickup::ATrainingPickup()",
                "action": "ADD",
                "place": "Still inside the same constructor, add this block immediately after SetRootComponent(SceneRoot);.",
                "after": "Save All, close Unreal, full Build Development Editor / Win64, reopen, then inspect the component hierarchy."
              }
            },
            {
              "title": "Full build the structural changes",
              "where": "Visual Studio",
              "doList": [
                "Save All.",
                "Close Unreal Editor.",
                "Build Development Editor / Win64.",
                "Wait for 0 failed.",
                "Reopen Unreal.",
                "Create/place a raw TrainingPickup instance if available.",
                "Inspect its component hierarchy in Details."
              ],
              "check": "Unreal shows SceneRoot, Mesh and CollectionSphere on the C++ Actor.",
              "why": "This proves the C++ constructor created the expected Unreal component structure."
            }
          ],
          "test": [
            "Full Build succeeds.",
            "TrainingPickup exposes all three components.",
            "Mesh and CollectionSphere are attached under SceneRoot."
          ],
          "doneWhen": "The C++ Actor has its complete component structure.",
          "common": [
            "If a component type is incomplete/unknown in the .cpp, check its #include.",
            "If components are missing after a successful structural build, close/reopen Unreal and ensure you built L4CppTraining."
          ]
        },
        {
          "id": "mesh-component",
          "number": 4,
          "title": "Data + BeginPlay — Make the Class Explain Its Own State",
          "goal": "Verify editable properties in Unreal and log the pickup's name/value when gameplay starts.",
          "why": "Before adding collision behaviour, prove the Actor can expose and report its own configuration.",
          "concept": "Properties are state/data; functions use that data. GetName() returns the object's runtime name and the unary * converts FString to the character pointer expected by this logging format.",
          "practical": [
            "Runtime logs are invaluable for checking which instance fired an event and what data it held.",
            "Later inventory code will use the same idea with item IDs/rows."
          ],
          "algorithm": [
            "Expose/tune RotationSpeed and ItemValue.",
            "BeginPlay reads ItemValue.",
            "Log Actor name + ItemValue.",
            "Place two instances with different values.",
            "Confirm two different runtime messages."
          ],
          "review": [
            {
              "term": "GetName()",
              "text": "Returns this UObject/Actor instance's name as FString."
            },
            {
              "term": "*GetName()",
              "text": "Provides TCHAR* data from the FString for formatting in UE_LOG."
            },
            {
              "term": "ItemValue",
              "text": "Per-instance editable state stored on the Actor."
            },
            {
              "term": "BeginPlay",
              "text": "One-time startup lifecycle point for runtime setup/checks."
            }
          ],
          "steps": [
            {
              "title": "Add BeginPlay logging",
              "where": "TrainingPickup.cpp → BeginPlay()",
              "doList": [
                "Leave Super::BeginPlay();.",
                "Add the log statement shown.",
                "Save the .cpp.",
                "Use Live Coding because this is implementation-only if the header from the previous stage is already built."
              ],
              "code": [
                {
                  "title": "BeginPlay log",
                  "content": "UE_LOG(\n    LogTemp,\n    Log,\n    TEXT(\"%s ready. ItemValue = %d\"),\n    *GetName(),\n    ItemValue\n);"
                }
              ],
              "check": "BeginPlay reports the Actor name and ItemValue.",
              "why": "You can distinguish multiple placed instances in runtime output.",
              "codeRead": {
                "items": [
                  {
                    "token": "GetName()",
                    "meaning": "Returns this Actor's runtime name as an FString."
                  },
                  {
                    "token": "*GetName()",
                    "meaning": "UE_LOG's %s formatting expects character data; Unreal's common FString logging pattern uses *String to access it."
                  },
                  {
                    "token": "* in *GetName()",
                    "meaning": "This is NOT the same use of * as UStaticMeshComponent* Mesh. Same symbol, different context. Here it is being used on an FString expression for logging."
                  },
                  {
                    "token": "%s",
                    "meaning": "String placeholder in a formatted log."
                  },
                  {
                    "token": "%d",
                    "meaning": "Integer placeholder."
                  },
                  {
                    "token": "*GetName(), ItemValue",
                    "meaning": "Arguments fill %s then %d from left to right."
                  }
                ],
                "note": "Do not try to generalise every meaning of * today. Learn each use in context: pointer declaration versus FString logging."
              },
              "codeGuide": {
                "file": "TrainingPickup.cpp",
                "find": "void ATrainingPickup::BeginPlay()",
                "action": "ADD",
                "place": "Inside BeginPlay(), keep Super::BeginPlay(); first and add the UE_LOG block immediately underneath it.",
                "after": "Save and Live Coding compile; this is .cpp-only implementation code."
              }
            },
            {
              "title": "Place two configured instances",
              "where": "Unreal Editor",
              "doList": [
                "Place two TrainingPickup instances.",
                "Assign a simple Cube/Sphere mesh to each Mesh component.",
                "Set one ItemValue to 10 and the other to 50.",
                "Set different RotationSpeed values too.",
                "Press Play.",
                "Find two ready log lines with their distinct values.",
                "Stop Play."
              ],
              "check": "Each Actor reports its own configured ItemValue.",
              "why": "This proves UPROPERTY data belongs to individual placed instances."
            }
          ],
          "test": [
            "Two pickup instances can have different values.",
            "BeginPlay logs each Actor's name/value.",
            "Changing editor values changes runtime output."
          ],
          "doneWhen": "The class exposes and reports per-instance gameplay data correctly.",
          "common": [
            "If the mesh is invisible, assign a Static Mesh asset—the C++ component exists but has no asset by default.",
            "If both logs show the same value, check each placed instance rather than the class default only."
          ]
        },
        {
          "id": "rotation-property",
          "number": 5,
          "title": "Tick — Add Frame-Rate-Independent Rotation",
          "goal": "Use Tick and DeltaTime to make the pickup spin at the editor-controlled RotationSpeed.",
          "why": "This is a visible example of per-frame gameplay code and shows why time-based motion uses DeltaTime.",
          "concept": "Tick runs every frame when enabled. Multiplying degrees-per-second by DeltaTime converts the desired rate into the small amount of rotation to apply this frame.",
          "practical": [
            "Rotating pickups/props are common readability feedback.",
            "The same DeltaTime principle applies to many manual movement/interpolation systems."
          ],
          "algorithm": [
            "Tick receives DeltaTime.",
            "Calculate YawDelta = RotationSpeed × DeltaTime.",
            "Create an FRotator.",
            "Apply local rotation.",
            "Test 0, 90 and 360 values."
          ],
          "review": [
            {
              "term": "float DeltaTime",
              "text": "Seconds elapsed since the previous frame."
            },
            {
              "term": "FRotator(Pitch,Yaw,Roll)",
              "text": "Unreal rotation representation in degrees."
            },
            {
              "term": "AddActorLocalRotation",
              "text": "Adds rotation relative to the Actor's local orientation."
            },
            {
              "term": "RotationSpeed * DeltaTime",
              "text": "Converts a per-second rate into a per-frame increment."
            }
          ],
          "steps": [
            {
              "title": "Implement Tick rotation",
              "where": "TrainingPickup.cpp → Tick(float DeltaTime)",
              "doList": [
                "Leave Super::Tick(DeltaTime);.",
                "Add AddActorLocalRotation.",
                "Use FRotator(0.0f, RotationSpeed * DeltaTime, 0.0f).",
                "Save the .cpp.",
                "Live Coding compile."
              ],
              "code": [
                {
                  "title": "Tick implementation",
                  "content": "AddActorLocalRotation(\n    FRotator(0.0f, RotationSpeed * DeltaTime, 0.0f)\n);"
                }
              ],
              "check": "Tick rotates around Yaw using RotationSpeed × DeltaTime.",
              "why": "The speed remains approximately consistent across frame rates.",
              "codeRead": {
                "items": [
                  {
                    "token": "void ATrainingPickup::Tick(float DeltaTime)",
                    "meaning": "Tick belongs to ATrainingPickup and receives one float named DeltaTime each frame."
                  },
                  {
                    "token": "float",
                    "meaning": "Decimal-number type."
                  },
                  {
                    "token": "DeltaTime",
                    "meaning": "Seconds since the previous frame."
                  },
                  {
                    "token": "FRotator(0.0f, RotationSpeed * DeltaTime, 0.0f)",
                    "meaning": "Constructs a temporary rotator using Pitch, Yaw and Roll values."
                  },
                  {
                    "token": "RotationSpeed * DeltaTime",
                    "meaning": "Converts a degrees-per-second speed into this frame's amount."
                  },
                  {
                    "token": "AddActorLocalRotation(...)",
                    "meaning": "Actor function that applies the rotator in local space."
                  },
                  {
                    "token": "0.0f",
                    "meaning": "A float literal with value zero."
                  }
                ]
              },
              "codeGuide": {
                "file": "TrainingPickup.cpp",
                "find": "void ATrainingPickup::Tick(float DeltaTime)",
                "action": "ADD",
                "place": "Keep Super::Tick(DeltaTime); first. Add AddActorLocalRotation(...) immediately below it.",
                "after": "Save and Live Coding compile."
              }
            },
            {
              "title": "Test three values",
              "where": "Unreal Editor",
              "doList": [
                "Set one instance RotationSpeed = 0 and verify it remains still.",
                "Set another to 90 and observe a steady spin.",
                "Set another to 360 and compare.",
                "Stop Play after the comparison."
              ],
              "check": "The three values produce three clearly different behaviours.",
              "why": "Testing inputs proves the editor property actually controls the native code."
            }
          ],
          "test": [
            "RotationSpeed 0 stops rotation.",
            "90 rotates steadily.",
            "360 rotates faster.",
            "You can explain why DeltaTime is multiplied."
          ],
          "doneWhen": "The pickup has visible frame-rate-independent C++ behaviour.",
          "common": [
            "If it never rotates, check PrimaryActorTick.bCanEverTick = true and that the latest .cpp compiled.",
            "If it spins absurdly fast, check you did not omit DeltaTime."
          ]
        },
        {
          "id": "rotate-tick",
          "number": 6,
          "title": "Collision — Configure the Collection Sphere",
          "goal": "Make CollectionSphere query-only, ignore everything by default and overlap Pawns.",
          "why": "Collision detection should be deliberate: the pickup needs to detect the player without becoming an invisible physical obstacle.",
          "concept": "Collision has two separate ideas: whether a component participates in queries/physics, and how it responds to channels. QueryOnly + Pawn Overlap is appropriate for a trigger-style collection sphere.",
          "practical": [
            "This pattern is used for pickups, trigger zones, doors, checkpoints and hazards.",
            "Later missions will create more specific interaction/detection rules."
          ],
          "algorithm": [
            "Enable query collision.",
            "Ignore all channels.",
            "Override Pawn to Overlap.",
            "Keep sphere attached to the Actor.",
            "Inspect/debug the radius in Unreal."
          ],
          "review": [
            {
              "term": "ECollisionEnabled::QueryOnly",
              "text": "Participates in traces/overlaps but not physical collision simulation."
            },
            {
              "term": "ECR_Ignore",
              "text": "No response to that collision channel."
            },
            {
              "term": "ECC_Pawn",
              "text": "Built-in collision channel commonly used by Pawn/Character collision."
            },
            {
              "term": "ECR_Overlap",
              "text": "Generate overlap detection rather than blocking movement."
            }
          ],
          "steps": [
            {
              "title": "Add collision settings",
              "where": "TrainingPickup.cpp → constructor after InitSphereRadius",
              "doList": [
                "Set Collision Enabled to QueryOnly.",
                "Explicitly enable Generate Overlap Events.",
                "Set all channel responses to Ignore.",
                "Set Pawn response to Overlap.",
                "Save the .cpp."
              ],
              "code": [
                {
                  "title": "CollectionSphere collision",
                  "content": "CollectionSphere->SetCollisionEnabled(ECollisionEnabled::QueryOnly);\nCollectionSphere->SetGenerateOverlapEvents(true);\nCollectionSphere->SetCollisionResponseToAllChannels(ECR_Ignore);\nCollectionSphere->SetCollisionResponseToChannel(ECC_Pawn, ECR_Overlap);"
                }
              ],
              "check": "CollectionSphere is a query-only Pawn-overlap trigger with overlap events explicitly enabled.",
              "why": "The player can walk through the pickup while still producing an overlap event.",
              "codeRead": {
                "items": [
                  {
                    "token": "CollectionSphere->",
                    "meaning": "Call functions on the USphereComponent pointed to by CollectionSphere."
                  },
                  {
                    "token": "ECollisionEnabled::QueryOnly",
                    "meaning": "Participate in queries such as overlaps/traces, but not physical simulation/blocking."
                  },
                  {
                    "token": "SetGenerateOverlapEvents(true)",
                    "meaning": "Explicitly tells the component to generate overlap events."
                  },
                  {
                    "token": "ECR_Ignore",
                    "meaning": "Collision response enum value: ignore that channel."
                  },
                  {
                    "token": "ECC_Pawn",
                    "meaning": "Built-in Pawn collision channel."
                  },
                  {
                    "token": "ECR_Overlap",
                    "meaning": "Collision response enum value: report overlap rather than block."
                  },
                  {
                    "token": "true",
                    "meaning": "Boolean value meaning yes/on."
                  }
                ]
              },
              "codeGuide": {
                "file": "TrainingPickup.cpp",
                "find": "ATrainingPickup::ATrainingPickup()",
                "action": "ADD",
                "place": "Find CollectionSphere->InitSphereRadius(90.0f); and add the four collision lines immediately BELOW it, still inside the constructor.",
                "after": "Save. Constructor/default-subobject changes can appear stale with Live Coding; use a full close/build/reopen if the Details panel does not update correctly."
              }
            },
            {
              "title": "Build/test the shape before binding logic",
              "where": "Unreal Editor",
              "doList": [
                "Compile the constructor change using the safe route if Live Coding does not refresh component defaults cleanly.",
                "Select a TrainingPickup instance.",
                "Select CollectionSphere and inspect its radius/collision settings.",
                "Enable collision visualisation in the Editor if your class workflow uses it.",
                "Walk the player through the pickup; no collection should happen yet."
              ],
              "check": "The player is not physically blocked, and the sphere exists as the detection volume.",
              "why": "Detection setup should be proven before event-response code is added."
            }
          ],
          "test": [
            "CollectionSphere does not block the player.",
            "It is QueryOnly.",
            "Pawn response is Overlap."
          ],
          "doneWhen": "The Actor has a correctly configured trigger-style collection volume.",
          "common": [
            "If the sphere blocks movement, inspect collision enabled/response settings.",
            "If the sphere settings appear stale after constructor edits, close/rebuild/reopen."
          ]
        },
        {
          "id": "place-test",
          "number": 7,
          "title": "Delegates — Bind the Overlap Event to Your Function",
          "goal": "Connect CollectionSphere's OnComponentBeginOverlap event to the C++ callback declared in the header.",
          "why": "The sphere can detect overlap, but code only responds if the event/delegate is bound to a function.",
          "concept": "A delegate is a type-safe way for one system/component to call registered functions when an event occurs. AddDynamic binds this component event to your UFUNCTION callback.",
          "practical": [
            "Unreal uses delegates throughout gameplay code for overlaps, UI, timers and events.",
            "This is the C++ equivalent of using an overlap event node in a Blueprint graph."
          ],
          "algorithm": [
            "CollectionSphere generates BeginOverlap.",
            "OnComponentBeginOverlap delegate broadcasts.",
            "Bound callback receives details about the overlap.",
            "Callback will decide whether collection is valid."
          ],
          "review": [
            {
              "term": "OnComponentBeginOverlap",
              "text": "The sphere component's overlap event/delegate."
            },
            {
              "term": "AddDynamic",
              "text": "Binds a reflected member function to a dynamic multicast delegate."
            },
            {
              "term": "this",
              "text": "The current ATrainingPickup instance."
            },
            {
              "term": "&ATrainingPickup::OnCollectionSphereBeginOverlap",
              "text": "Pointer/reference to the member function that should be called."
            }
          ],
          "steps": [
            {
              "title": "Bind the event",
              "where": "TrainingPickup.cpp → constructor after collision setup",
              "doList": [
                "Add the AddDynamic call shown.",
                "Use this as the object receiving the callback.",
                "Use &ATrainingPickup::OnCollectionSphereBeginOverlap as the bound function.",
                "Save."
              ],
              "code": [
                {
                  "title": "Delegate binding",
                  "content": "CollectionSphere->OnComponentBeginOverlap.AddDynamic(\n    this,\n    &ATrainingPickup::OnCollectionSphereBeginOverlap\n);"
                }
              ],
              "check": "The collection sphere event is bound to your callback.",
              "why": "The component now has somewhere to send overlap notifications.",
              "codeRead": {
                "items": [
                  {
                    "token": "OnComponentBeginOverlap",
                    "meaning": "The CollectionSphere delegate/event that broadcasts when overlap begins."
                  },
                  {
                    "token": ".AddDynamic(...)",
                    "meaning": "AddDynamic is called on the delegate object. Here . is used because OnComponentBeginOverlap itself is a member object, not a pointer."
                  },
                  {
                    "token": "this",
                    "meaning": "Pointer to the current ATrainingPickup object—the specific pickup instance receiving the callback."
                  },
                  {
                    "token": "&ATrainingPickup::OnCollectionSphereBeginOverlap",
                    "meaning": "Address/reference to the member function that should be called."
                  },
                  {
                    "token": "&",
                    "meaning": "Here & means “take the address/reference of this function” for the delegate binding."
                  },
                  {
                    "token": "ATrainingPickup::",
                    "meaning": "Says the callback function belongs to the ATrainingPickup class."
                  },
                  {
                    "token": ",",
                    "meaning": "Separates the two AddDynamic arguments."
                  }
                ],
                "note": "You do not need to invent delegate syntax from memory. The important idea is: CollectionSphere's event is being connected to your callback."
              },
              "codeGuide": {
                "file": "TrainingPickup.cpp",
                "find": "ATrainingPickup::ATrainingPickup()",
                "action": "ADD",
                "place": "Add the AddDynamic block immediately after the CollectionSphere collision configuration and before the constructor's closing brace.",
                "after": "Save, but DO NOT compile yet. The callback must have a definition first; complete the next step."
              }
            },
            {
              "title": "Create a temporary proof callback body",
              "where": "TrainingPickup.cpp → OnCollectionSphereBeginOverlap definition",
              "doList": [
                "Add the full function definition matching the header signature.",
                "Inside it, add a temporary UE_LOG line: Pickup overlap fired.",
                "Save and compile.",
                "Play and walk into the pickup.",
                "Confirm the log fires, then stop Play."
              ],
              "code": [
                {
                  "title": "Temporary proof inside callback",
                  "content": "UE_LOG(LogTemp, Warning, TEXT(\"Pickup overlap fired\"));"
                }
              ],
              "check": "Walking the player into CollectionSphere causes the callback log.",
              "why": "You prove event binding before adding filtering/state logic.",
              "codeGuide": {
                "file": "TrainingPickup.cpp",
                "find": "Below the constructor / after existing lifecycle function definitions",
                "action": "ADD FUNCTION DEFINITION",
                "place": "Add the full OnCollectionSphereBeginOverlap(...) definition once. Put the temporary UE_LOG inside its braces. Do not add a second declaration to the header.",
                "after": "Save and compile. Now the delegate has a real callback definition, so the project can link."
              }
            }
          ],
          "test": [
            "The callback definition matches the header signature.",
            "Compile succeeds.",
            "Player overlap produces the temporary log."
          ],
          "doneWhen": "A native Unreal component event successfully calls your C++ function.",
          "common": [
            "If AddDynamic errors, compare the callback signature exactly.",
            "If the callback never fires, debug collision/channel settings before rewriting the function.",
            "The &, :: and this syntax in AddDynamic is normal C++/Unreal delegate wiring. Understand what is connected; do not expect yourself to write it from memory yet."
          ]
        },
        {
          "id": "blueprint-child",
          "number": 8,
          "title": "Collection Logic — Validate, Change State, Destroy",
          "goal": "Replace the temporary overlap log with a real collection response using if, return, Cast<ACharacter>, bCollected, UE_LOG and Destroy().",
          "why": "This is where the class becomes gameplay: detection is filtered through rules, state changes once, feedback is produced, then the Actor is removed.",
          "concept": "Early-return checks keep invalid cases out of the main success path. Cast<ACharacter> asks whether the overlapping Actor can be treated as an ACharacter. bCollected prevents duplicate processing.",
          "practical": [
            "The same pattern—validate → state change → feedback → consequence—appears in doors, damage, inventory and quests.",
            "The Character cast is intentional here because the first collectible specifically requires a Character; later Interface missions will show capability-based alternatives."
          ],
          "algorithm": [
            "If already collected or OtherActor is null → return.",
            "Try Cast<ACharacter>(OtherActor).",
            "If cast fails → return.",
            "Set bCollected = true.",
            "Log Character + pickup + ItemValue.",
            "Destroy this pickup."
          ],
          "review": [
            {
              "term": "if (...)",
              "text": "Runs a block only when the condition is true."
            },
            {
              "term": "||",
              "text": "Logical OR—either condition being true is enough."
            },
            {
              "term": "return;",
              "text": "Exit the current function immediately."
            },
            {
              "term": "Cast<ACharacter>",
              "text": "Checks/converts the generic AActor pointer to ACharacter when valid."
            },
            {
              "term": "Destroy()",
              "text": "Requests removal of this Actor from the world."
            }
          ],
          "checkpointCode": [
            {
              "title": "TrainingPickup.h — complete Mission 1 header",
              "content": "#pragma once\n\n#include \"CoreMinimal.h\"\n#include \"GameFramework/Actor.h\"\n#include \"TrainingPickup.generated.h\"\n\nclass USceneComponent;\nclass UStaticMeshComponent;\nclass USphereComponent;\nclass UPrimitiveComponent;\n\nUCLASS()\nclass L4CPPTRAINING_API ATrainingPickup : public AActor\n{\n    GENERATED_BODY()\n\npublic:\n    ATrainingPickup();\n\n    virtual void Tick(float DeltaTime) override;\n\n    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=\"Pickup\")\n    USceneComponent* SceneRoot;\n\n    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=\"Pickup\")\n    UStaticMeshComponent* Mesh;\n\n    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=\"Pickup\")\n    USphereComponent* CollectionSphere;\n\n    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category=\"Pickup\")\n    float RotationSpeed = 90.0f;\n\n    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category=\"Pickup\")\n    int32 ItemValue = 10;\n\n    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=\"Pickup\")\n    bool bCollected = false;\n\nprotected:\n    virtual void BeginPlay() override;\n\n    UFUNCTION()\n    void OnCollectionSphereBeginOverlap(\n        UPrimitiveComponent* OverlappedComponent,\n        AActor* OtherActor,\n        UPrimitiveComponent* OtherComp,\n        int32 OtherBodyIndex,\n        bool bFromSweep,\n        const FHitResult& SweepResult\n    );\n};"
            },
            {
              "title": "TrainingPickup.cpp — complete Mission 1 implementation",
              "content": "#include \"TrainingPickup.h\"\n\n#include \"Components/SceneComponent.h\"\n#include \"Components/SphereComponent.h\"\n#include \"Components/StaticMeshComponent.h\"\n#include \"GameFramework/Character.h\"\n\nATrainingPickup::ATrainingPickup()\n{\n    PrimaryActorTick.bCanEverTick = true;\n\n    SceneRoot = CreateDefaultSubobject<USceneComponent>(TEXT(\"SceneRoot\"));\n    SetRootComponent(SceneRoot);\n\n    Mesh = CreateDefaultSubobject<UStaticMeshComponent>(TEXT(\"Mesh\"));\n    Mesh->SetupAttachment(SceneRoot);\n    Mesh->SetCollisionEnabled(ECollisionEnabled::NoCollision);\n\n    CollectionSphere = CreateDefaultSubobject<USphereComponent>(TEXT(\"CollectionSphere\"));\n    CollectionSphere->SetupAttachment(SceneRoot);\n    CollectionSphere->InitSphereRadius(90.0f);\n    CollectionSphere->SetCollisionEnabled(ECollisionEnabled::QueryOnly);\n    CollectionSphere->SetGenerateOverlapEvents(true);\n    CollectionSphere->SetCollisionResponseToAllChannels(ECR_Ignore);\n    CollectionSphere->SetCollisionResponseToChannel(ECC_Pawn, ECR_Overlap);\n\n    CollectionSphere->OnComponentBeginOverlap.AddDynamic(\n        this,\n        &ATrainingPickup::OnCollectionSphereBeginOverlap\n    );\n}\n\nvoid ATrainingPickup::BeginPlay()\n{\n    Super::BeginPlay();\n\n    UE_LOG(\n        LogTemp,\n        Log,\n        TEXT(\"%s ready. ItemValue = %d\"),\n        *GetName(),\n        ItemValue\n    );\n}\n\nvoid ATrainingPickup::Tick(float DeltaTime)\n{\n    Super::Tick(DeltaTime);\n\n    AddActorLocalRotation(\n        FRotator(0.0f, RotationSpeed * DeltaTime, 0.0f)\n    );\n}\n\nvoid ATrainingPickup::OnCollectionSphereBeginOverlap(\n    UPrimitiveComponent* OverlappedComponent,\n    AActor* OtherActor,\n    UPrimitiveComponent* OtherComp,\n    int32 OtherBodyIndex,\n    bool bFromSweep,\n    const FHitResult& SweepResult\n)\n{\n    if (bCollected || !OtherActor)\n    {\n        return;\n    }\n\n    ACharacter* Character = Cast<ACharacter>(OtherActor);\n\n    if (!Character)\n    {\n        return;\n    }\n\n    bCollected = true;\n\n    UE_LOG(\n        LogTemp,\n        Warning,\n        TEXT(\"%s collected %s for %d points\"),\n        *Character->GetName(),\n        *GetName(),\n        ItemValue\n    );\n\n    Destroy();\n}"
            }
          ],
          "steps": [
            {
              "title": "Include ACharacter",
              "where": "TrainingPickup.cpp → includes",
              "doList": [
                "Add #include \"GameFramework/Character.h\" beneath the component includes.",
                "Save."
              ],
              "code": [
                {
                  "title": "Character include",
                  "content": "#include \"GameFramework/Character.h\""
                }
              ],
              "check": "The .cpp has the full ACharacter definition needed by Cast usage.",
              "why": "The callback will filter generic overlapping Actors to Characters.",
              "codeGuide": {
                "file": "TrainingPickup.cpp",
                "find": "Top include block",
                "action": "ADD",
                "place": "Add #include \"GameFramework/Character.h\" below the Components/... includes and above the first function definition.",
                "after": "Save. No separate compile needed until the callback edits below are complete."
              }
            },
            {
              "title": "Add the guard clause",
              "where": "OnCollectionSphereBeginOverlap()",
              "doList": [
                "Remove the temporary Pickup overlap fired log.",
                "Add if (bCollected || !OtherActor).",
                "Inside the braces, return;.",
                "Read the condition aloud: if already collected OR there is no OtherActor, stop."
              ],
              "code": [
                {
                  "title": "Early guard",
                  "content": "if (bCollected || !OtherActor)\n{\n    return;\n}"
                }
              ],
              "check": "Invalid/duplicate overlap cases leave the function immediately.",
              "why": "Guard clauses keep the success path simpler and prevent duplicate collection.",
              "codeRead": {
                "items": [
                  {
                    "token": "if (condition)",
                    "meaning": "Run the following braces only when the condition is true."
                  },
                  {
                    "token": "bCollected",
                    "meaning": "True after a successful collection."
                  },
                  {
                    "token": "||",
                    "meaning": "Logical OR. The whole condition is true if either side is true."
                  },
                  {
                    "token": "!OtherActor",
                    "meaning": "Logical NOT applied to the pointer. In this context it means “OtherActor is null / there is no valid Actor pointer.”"
                  },
                  {
                    "token": "!",
                    "meaning": "Logical NOT: flips true/false. With a pointer in a condition, !Pointer is a common way to test for null."
                  },
                  {
                    "token": "return;",
                    "meaning": "Leave this function immediately. Nothing below it runs for this event call."
                  },
                  {
                    "token": "{ }",
                    "meaning": "The braces contain the statements controlled by the if."
                  }
                ],
                "note": "Read it in English: “If we already collected this OR Unreal did not give us another Actor, stop immediately.”"
              },
              "codeGuide": {
                "file": "TrainingPickup.cpp",
                "find": "ATrainingPickup::OnCollectionSphereBeginOverlap(...)",
                "action": "REPLACE TEMPORARY BODY CONTENT",
                "place": "KEEP the full callback signature. Delete only the temporary UE_LOG inside { }. Add the guard clause as the first code in the function body.",
                "after": "Save. Continue the same callback before compiling."
              }
            },
            {
              "title": "Cast and validate the player",
              "where": "Same callback",
              "doList": [
                "Create ACharacter* Character = Cast<ACharacter>(OtherActor);.",
                "Add if (!Character) { return; }.",
                "Do not access Character data before the null check."
              ],
              "code": [
                {
                  "title": "Character validation",
                  "content": "ACharacter* Character = Cast<ACharacter>(OtherActor);\n\nif (!Character)\n{\n    return;\n}"
                }
              ],
              "check": "Only ACharacter overlaps continue into the collection success path.",
              "why": "The sphere event supplies a generic AActor pointer; this mechanic specifically requires a Character.",
              "codeRead": {
                "items": [
                  {
                    "token": "ACharacter* Character",
                    "meaning": "Declares a pointer variable named Character that may point to an ACharacter."
                  },
                  {
                    "token": "Cast<ACharacter>(OtherActor)",
                    "meaning": "Unreal's type-safe cast: try treating OtherActor as ACharacter."
                  },
                  {
                    "token": "<ACharacter>",
                    "meaning": "The target type we are asking for."
                  },
                  {
                    "token": "if (!Character)",
                    "meaning": "If the cast failed, Character is null, so stop."
                  },
                  {
                    "token": "Character",
                    "meaning": "After the null check succeeds, this pointer can be used as an ACharacter in the success path."
                  }
                ],
                "note": "A Cast is not magic conversion. It asks whether the object really is compatible with the requested Unreal type."
              },
              "codeGuide": {
                "file": "TrainingPickup.cpp",
                "find": "ATrainingPickup::OnCollectionSphereBeginOverlap(...)",
                "action": "ADD",
                "place": "Inside the callback, add this block immediately AFTER the first guard clause and BEFORE any collection-success code.",
                "after": "Save. Continue to the success path before compiling."
              }
            },
            {
              "title": "Complete collection",
              "where": "Same callback after validation",
              "doList": [
                "Set bCollected = true;.",
                "Add the multi-value UE_LOG shown.",
                "Call Destroy(); last.",
                "Save the .cpp.",
                "Compile with Live Coding if the class structure/header is unchanged."
              ],
              "code": [
                {
                  "title": "Success path",
                  "content": "bCollected = true;\n\nUE_LOG(\n    LogTemp,\n    Warning,\n    TEXT(\"%s collected %s for %d points\"),\n    *Character->GetName(),\n    *GetName(),\n    ItemValue\n);\n\nDestroy();"
                }
              ],
              "check": "A valid Character overlap changes state, logs the collection and destroys the Actor.",
              "why": "Detection is now connected to a complete gameplay response.",
              "codeRead": {
                "items": [
                  {
                    "token": "bCollected = true;",
                    "meaning": "Change persistent Actor state so another overlap cannot process collection again."
                  },
                  {
                    "token": "Character->GetName()",
                    "meaning": "Call GetName through the Character pointer."
                  },
                  {
                    "token": "*Character->GetName()",
                    "meaning": "Get FString character data for UE_LOG's %s placeholder."
                  },
                  {
                    "token": "GetName()",
                    "meaning": "Without an object before it, this calls GetName on the current pickup (this Actor)."
                  },
                  {
                    "token": "ItemValue",
                    "meaning": "The editable whole-number value on this pickup instance."
                  },
                  {
                    "token": "Destroy();",
                    "meaning": "Ask Unreal to destroy/remove this Actor instance from the world."
                  },
                  {
                    "token": "Order matters",
                    "meaning": "Set bCollected before logging/destroying so a repeated overlap cannot enter the success path first."
                  }
                ]
              },
              "codeGuide": {
                "file": "TrainingPickup.cpp",
                "find": "ATrainingPickup::OnCollectionSphereBeginOverlap(...)",
                "action": "ADD",
                "place": "Inside the same callback, add the success block immediately AFTER the Character null-check. Destroy(); must remain last in the success path.",
                "after": "Save and Live Coding compile. Then Play-test collection."
              }
            },
            {
              "title": "Run the collection test",
              "where": "Unreal Editor",
              "doList": [
                "Place a TrainingPickup with a visible mesh.",
                "Set ItemValue to 25.",
                "Press Play.",
                "Walk into the CollectionSphere.",
                "Confirm the pickup disappears.",
                "Confirm Output Log names the Character/pickup and value 25.",
                "Stop Play."
              ],
              "check": "The pickup is collected once and removed from the level.",
              "why": "This proves the entire C++ mechanic end-to-end."
            }
          ],
          "test": [
            "Non-player/invalid overlap is filtered.",
            "Player overlap logs the configured ItemValue.",
            "bCollected is set before destruction.",
            "The Actor disappears after collection."
          ],
          "doneWhen": "ATrainingPickup is a complete C++ gameplay Actor rather than a demonstration object.",
          "common": [
            "If Cast always fails, confirm your playable object derives from ACharacter; if your course template uses another Pawn type, this check must be adapted deliberately.",
            "If the event fires twice before destruction, confirm bCollected is set before logging/Destroy."
          ]
        },
        {
          "id": "break-fix",
          "number": 9,
          "title": "Blueprint Child, Code Review and Independent Variation",
          "goal": "Create BP_TrainingPickup as a designer-facing child, review the full native class, deliberately debug one small code error and make one independent variation.",
          "why": "The finished learning outcome is hybrid Unreal development: C++ owns reusable rules; Blueprint configures assets/default values. You should also be able to read and adapt your own code.",
          "concept": "C++ and Blueprint are complementary. Native code can define components/state/behaviour; Blueprint children can supply meshes/materials and tuned defaults while inheriting that behaviour.",
          "practical": [
            "One C++ pickup class can support coin/key/health Blueprint variants.",
            "Later inventory missions will extend the native system without discarding this class."
          ],
          "algorithm": [
            "Create Blueprint child.",
            "Assign mesh/material/defaults.",
            "Test inherited C++ behaviour.",
            "Break one known syntax line.",
            "Use compiler output to fix it.",
            "Make one code/data variation.",
            "Explain which responsibility belongs in C++ vs Blueprint."
          ],
          "review": [
            {
              "term": "C++ base class",
              "text": "Owns the reusable system and rules."
            },
            {
              "term": "Blueprint child",
              "text": "Inherits native behaviour and configures presentation/defaults."
            },
            {
              "term": "Compile error workflow",
              "text": "Last small change → first useful error → fix cause → compile again."
            },
            {
              "term": "Transfer",
              "text": "Change one requirement independently to prove understanding."
            }
          ],
          "steps": [
            {
              "title": "Create BP_TrainingPickup",
              "where": "Content Drawer → C++ Classes/L4CppTraining (or Tools → Class Viewer)",
              "doList": [
                "In the Content Drawer open Settings and ensure Show C++ Classes is enabled.",
                "Open C++ Classes → L4CppTraining and find TrainingPickup.",
                "If the native class is not there, use Tools → Class Viewer and search TrainingPickup. If neither finds it, stop and return to the class registration/full-build step.",
                "Right-click TrainingPickup and choose Create Blueprint class based on TrainingPickup (or use Create Blueprint from Class Viewer).",
                "Save the new Blueprint in your normal project Content folder and name it BP_TrainingPickup.",
                "Open BP_TrainingPickup.",
                "Assign a clear mesh/material to inherited Mesh.",
                "Set default RotationSpeed to 120.",
                "Set ItemValue to 25.",
                "Compile/Save the Blueprint.",
                "Do not recreate Tick or overlap logic in its Event Graph."
              ],
              "check": "BP_TrainingPickup is a normal Content .uasset whose parent is the registered native ATrainingPickup class.",
              "why": "The native C++ class lives in the compiled module; the Blueprint child is the Content asset used for presentation/tuning."
            },
            {
              "title": "Test inheritance",
              "where": "LV_CPPTraining",
              "doList": [
                "Place BP_TrainingPickup.",
                "Press Play.",
                "Confirm it rotates from inherited Tick.",
                "Walk into it.",
                "Confirm it logs ItemValue 25 and disappears.",
                "Stop Play.",
                "Change only Blueprint ItemValue to 100 and retest."
              ],
              "check": "Blueprint values change the inherited C++ outcome without rewriting code.",
              "why": "This is the hybrid workflow you want students to recognise."
            },
            {
              "title": "Break and fix one code line",
              "where": "TrainingPickup.cpp",
              "doList": [
                "Remove the semicolon from bCollected = true;.",
                "Compile once.",
                "Read the first TrainingPickup.cpp compiler error.",
                "Restore the semicolon.",
                "Compile again.",
                "Do not change unrelated code."
              ],
              "check": "You recover using compiler evidence.",
              "why": "Debugging discipline must scale with the codebase."
            },
            {
              "title": "Choose one independent variation",
              "where": "TrainingPickup.h/.cpp or Blueprint child",
              "doList": [
                "Option A: add editable bool bSpin = true and change Tick so rotation only happens when bSpin is true.",
                "Option B: add editable FString PickupLabel and include it in the collection log.",
                "Option C: create two Blueprint children—Coin and Key—with different meshes/ItemValue but the same native collection behaviour.",
                "Choose ONE option.",
                "Build/compile appropriately.",
                "Play-test the changed result."
              ],
              "check": "Your variation works and you can explain exactly which data/logic you changed.",
              "why": "Independent adaptation proves you understand the mechanic, not just the instructions."
            },
            {
              "title": "Explain the class from memory",
              "where": "Final verbal/written check",
              "doList": [
                "Explain what the constructor does.",
                "Explain what Tick does.",
                "Explain what CollectionSphere does.",
                "Explain why AddDynamic is needed.",
                "Explain why the callback checks bCollected and OtherActor.",
                "Explain what Cast<ACharacter> proves.",
                "Explain why the Blueprint child does not need its own overlap logic."
              ],
              "check": "You can describe the full mechanic without tracing every line in the guide.",
              "why": "The goal is transferable understanding, not a copied file."
            }
          ],
          "test": [
            "BP_TrainingPickup inherits and runs the native C++ logic.",
            "You deliberately caused and fixed a compiler error.",
            "One independent variation works.",
            "You can explain the complete collection algorithm and class responsibilities."
          ],
          "doneWhen": "You have built, tested, debugged and adapted a real hybrid C++ collectible system.",
          "common": [
            "If Blueprint child components look stale after native structural changes, close Unreal and full Build/reopen.",
            "Do not solve a C++ inheritance issue by duplicating the whole mechanic in Blueprint."
          ],
          "challenges": [
            "Create BP_Coin and BP_Key children with different meshes/values.",
            "Add a sound/particle reference property for later collection feedback, but do not implement it until you understand the asset pointer type.",
            "Add a second boolean such as bSpin and only rotate when it is true."
          ]
        }
      ]
    },
    {
      "id": "cpp-functions-door",
      "sequence": 2,
      "displaySequence": "2",
      "requiresMission": "cpp-first-actor",
      "discipline": "Unreal C++",
      "icon": "C++",
      "title": "Functions & Decisions — Build a Locked Door",
      "subtitle": "Continue L4CppTraining by building a native door that detects the player, asks functions whether it can open, changes state, moves only its mesh, closes when the player leaves, and exposes a C++ SetLocked function to Blueprint.",
      "duration": "3–4 hours",
      "difficulty": "Guided beginner gameplay logic",
      "summary": "Mission 1 taught you how an Actor owns components/data and reacts to an event. Mission 2 makes the code more organised. You will build ATrainingDoor and separate the mechanic into small functions: CanOpenDoor, OpenDoor, CloseDoor and SetLocked. Along the way you will learn return types, parameters, const member functions, &&, the ternary operator, FVector arithmetic and why a good function should have one clear job.",
      "guideRule": "Do not write one giant overlap function. Build and test the door as a set of small named functions, because Mission 3 will reuse those functions when inventory/key logic is added.",
      "skills": [
        "Custom C++ functions",
        "return values",
        "parameters",
        "const functions",
        "bool decisions",
        "&&",
        "FVector",
        "relative location",
        "Box collision",
        "Begin/End overlap",
        "BlueprintCallable",
        "BlueprintPure",
        "state separation"
      ],
      "rules": [
        "Continue the same Third Person L4CppTraining project.",
        "Do not skip READ THIS CODE boxes—new syntax is decoded at first use.",
        "One function should do one clear job.",
        "Keep the trigger volume fixed; move DoorMesh, not the whole Actor, so the trigger does not move away from the player.",
        "Compile and test after every new responsibility.",
        "Mission 2 deliberately uses an editable lock Boolean. Mission 3 will replace the manual key condition with real inventory state."
      ],
      "gameFlow": [
        "Plan door",
        "Create class",
        "Components + trigger",
        "Cache locations",
        "CanOpenDoor()",
        "Open/Close functions",
        "Overlap decisions",
        "SetLocked(bool)",
        "Blueprint child",
        "Final tests + variation"
      ],
      "theoryLinks": [
        {
          "label": "Epic UE5.8 — UFunctions",
          "href": "https://dev.epicgames.com/documentation/unreal-engine/ufunctions-in-unreal-engine"
        },
        {
          "label": "Epic UE5.8 — Collision Overview",
          "href": "https://dev.epicgames.com/documentation/unreal-engine/collision-in-unreal-engine---overview"
        },
        {
          "label": "Epic UE5.8 — Gameplay Classes",
          "href": "https://dev.epicgames.com/documentation/unreal-engine/gameplay-classes-in-unreal-engine"
        }
      ],
      "stages": [
        {
          "id": "start",
          "number": 0,
          "title": "Plan the Door — State, Detection, Decision, Action",
          "goal": "Turn a locked-door mechanic into a small algorithm and decide which parts deserve separate functions.",
          "why": "The book's door chapter follows the same useful pattern: initialise the door, detect the player, check conditions, activate the door, then manage state. We will implement that pattern with clearer function separation.",
          "concept": "A door is not just 'collision makes it move'. It has state (locked/open), detection (trigger overlap), a decision (can it open?) and actions (open/close). Separating those responsibilities makes the code reusable and much easier to debug.",
          "practical": [
            "Doors, gates, lifts and puzzle mechanisms all use state + conditions + actions.",
            "Small functions let later inventory code ask the door a question without rewriting movement logic.",
            "Moving only DoorMesh keeps TriggerBox fixed around the doorway."
          ],
          "algorithm": [
            "Construct SceneRoot, DoorMesh and TriggerBox.",
            "At BeginPlay remember the DoorMesh closed location and calculate its open location.",
            "When a Character enters TriggerBox, check lock/open state.",
            "If unlocked and closed, call OpenDoor().",
            "When the Character leaves, call CloseDoor().",
            "Keep lock changes inside SetLocked(bool)."
          ],
          "review": [
            {
              "term": "State",
              "text": "bIsLocked and bIsOpen describe the current door condition."
            },
            {
              "term": "Condition",
              "text": "A Boolean expression that decides which path runs."
            },
            {
              "term": "Function",
              "text": "A named block of code with one job that can optionally receive parameters and/or return a value."
            },
            {
              "term": "Relative location",
              "text": "A component's location relative to its parent, useful here because only DoorMesh should move."
            }
          ],
          "steps": [
            {
              "title": "Prove the previous project still works",
              "where": "L4CppTraining → Play",
              "doList": [
                "Open the same project.",
                "Test BP_TrainingPickup once.",
                "Confirm the Third Person Character moves and can collect the pickup.",
                "Save All before creating the door class."
              ],
              "check": "The previous C++ gameplay Actor and template Character still work.",
              "why": "The new class starts from a known-good codebase."
            },
            {
              "title": "Write the four function jobs",
              "where": "Notes / verbal check",
              "doList": [
                "CanOpenDoor = answer a yes/no question.",
                "OpenDoor = change open state and move DoorMesh to the open location.",
                "CloseDoor = change open state and move DoorMesh back.",
                "SetLocked = change lock state in one named place."
              ],
              "check": "You can explain why those are separate functions rather than one giant overlap block.",
              "why": "This mission is fundamentally about organising logic into reusable functions."
            }
          ],
          "test": [
            "You can state the door algorithm in order.",
            "You can explain the job of all four functions.",
            "The previous project still runs."
          ],
          "doneWhen": "The mechanic has been decomposed before code is added.",
          "common": [
            "Do not start with animation/Timeline complexity; first make the state/decision structure correct.",
            "Do not move the entire Actor if the trigger needs to remain around the doorway."
          ]
        },
        {
          "id": "create-class",
          "number": 1,
          "title": "Create ATrainingDoor and Read the Function Shape",
          "goal": "Generate an Actor class and learn how C++ function declarations describe return type, function name, parameters and const.",
          "why": "Once you can read a function signature, Unreal C++ stops looking like an arbitrary string of punctuation.",
          "concept": "A function declaration tells C++ what can be called. The implementation in the .cpp contains what happens. A return type appears before the name; parameters are inside parentheses; a trailing const on a member function promises not to change the object through that function.",
          "practical": [
            "CanOpenDoor returns bool because callers need an answer.",
            "OpenDoor and CloseDoor return void because they perform actions rather than calculate a value.",
            "SetLocked receives one bool parameter because the caller chooses the new state."
          ],
          "algorithm": [
            "Create TrainingDoor.",
            "Compile untouched class.",
            "Add function declarations gradually.",
            "Implement each function later in the .cpp."
          ],
          "review": [
            {
              "term": "bool CanOpenDoor() const;",
              "text": "Returns true/false, takes no parameters, promises not to modify this Actor."
            },
            {
              "term": "void OpenDoor();",
              "text": "Returns no value and takes no parameters."
            },
            {
              "term": "void SetLocked(bool bNewLocked);",
              "text": "Returns no value and receives one Boolean parameter."
            },
            {
              "term": "Declaration",
              "text": "The function's promised shape/name in the header."
            }
          ],
          "steps": [
            {
              "title": "Generate TrainingDoor",
              "where": "Unreal Editor → Tools → New C++ Class",
              "doList": [
                "Choose Actor.",
                "Name it TrainingDoor.",
                "Create Class.",
                "Wait for TrainingDoor.h/.cpp to be generated and open them in Visual Studio.",
                "Do not edit the generated class yet.",
                "Save All and close Unreal Editor.",
                "Set Visual Studio to Development Editor / Win64.",
                "Build L4CppTraining and wait for 0 failed.",
                "Reopen Unreal.",
                "Content Drawer → Settings → Show C++ Classes.",
                "Confirm TrainingDoor appears in C++ Classes → L4CppTraining or search TrainingDoor in Tools → Class Viewer.",
                "Only then continue to read/add the door functions."
              ],
              "check": "ATrainingDoor compiles with 0 failed and Unreal can find the native class.",
              "why": "This isolates class registration/toolchain problems before any authored door code is added."
            },
            {
              "title": "Read three function signatures",
              "where": "Before adding them to TrainingDoor.h",
              "doList": [
                "Read bool CanOpenDoor() const; as: returns bool, no parameters, read-only function.",
                "Read void OpenDoor(); as: action function, no return value.",
                "Read void SetLocked(bool bNewLocked); as: action function with one Boolean input.",
                "Notice every declaration ends with a semicolon."
              ],
              "check": "You can identify return type, name and parameters in each signature.",
              "why": "This is core C++ literacy used in every later mission."
            }
          ],
          "test": [
            "TrainingDoor.h/.cpp exist.",
            "ATrainingDoor builds untouched with 0 failed.",
            "TrainingDoor is visible under C++ Classes/L4CppTraining or Class Viewer.",
            "You can explain bool versus void.",
            "You can identify a function parameter."
          ],
          "doneWhen": "You can read the function shapes before implementing them.",
          "common": [
            "Do not confuse the semicolon-ended header declaration with the brace-bodied .cpp implementation.",
            "const after the parentheses is about the member function, not about a local variable.",
            "Do not rely on normal Content-folder browsing to prove a native class exists.",
            "If TrainingDoor is missing after restart, return to the full build output before editing or recreating the class."
          ]
        },
        {
          "id": "header",
          "number": 2,
          "title": "Header — Declare Door Components, State and Functions",
          "goal": "Build the class contract in TrainingDoor.h before implementing behaviour.",
          "why": "A readable header should tell another programmer what the door owns, what state can be tuned/inspected and what functions define its behaviour.",
          "concept": "This header combines component pointers, editable/visible state, public Blueprint-facing functions, protected event callbacks and private cached locations.",
          "practical": [
            "Designers can tune bIsLocked and OpenOffset.",
            "Blueprint can read CanOpenDoor or call SetLocked.",
            "Only this class needs direct access to its cached closed/open positions."
          ],
          "algorithm": [
            "Forward-declare component types.",
            "Declare components.",
            "Declare state/data.",
            "Declare public query/action functions.",
            "Declare overlap callbacks and internal Open/Close functions.",
            "Declare private cached FVector locations."
          ],
          "review": [
            {
              "term": "private:",
              "text": "Members below are only directly accessible inside ATrainingDoor (plus normal C++ friend rules)."
            },
            {
              "term": "FVector",
              "text": "Three-component vector type used for positions/offsets."
            },
            {
              "term": "BlueprintPure",
              "text": "Exposes a read/query function to Blueprint without an execution pin because it should not change state."
            },
            {
              "term": "BlueprintCallable",
              "text": "Exposes an action function for Blueprint to call."
            }
          ],
          "checkpointCode": [
            {
              "title": "TrainingDoor.h — stage checkpoint",
              "content": "#pragma once\n\n#include \"CoreMinimal.h\"\n#include \"GameFramework/Actor.h\"\n#include \"TrainingDoor.generated.h\"\n\nclass USceneComponent;\nclass UStaticMeshComponent;\nclass UBoxComponent;\nclass UPrimitiveComponent;\n\nUCLASS()\nclass L4CPPTRAINING_API ATrainingDoor : public AActor\n{\n    GENERATED_BODY()\n\npublic:\n    ATrainingDoor();\n\n    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=\"Door\")\n    USceneComponent* SceneRoot;\n\n    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=\"Door\")\n    UStaticMeshComponent* DoorMesh;\n\n    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=\"Door\")\n    UBoxComponent* TriggerBox;\n\n    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category=\"Door\")\n    bool bIsLocked = true;\n\n    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=\"Door\")\n    bool bIsOpen = false;\n\n    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category=\"Door\")\n    FVector OpenOffset = FVector(0.0f, 0.0f, 220.0f);\n\n    UFUNCTION(BlueprintPure, Category=\"Door\")\n    bool CanOpenDoor() const;\n\n    UFUNCTION(BlueprintCallable, Category=\"Door\")\n    void SetLocked(bool bNewLocked);\n\nprotected:\n    virtual void BeginPlay() override;\n\n    UFUNCTION()\n    void OnTriggerBeginOverlap(\n        UPrimitiveComponent* OverlappedComponent,\n        AActor* OtherActor,\n        UPrimitiveComponent* OtherComp,\n        int32 OtherBodyIndex,\n        bool bFromSweep,\n        const FHitResult& SweepResult\n    );\n\n    UFUNCTION()\n    void OnTriggerEndOverlap(\n        UPrimitiveComponent* OverlappedComponent,\n        AActor* OtherActor,\n        UPrimitiveComponent* OtherComp,\n        int32 OtherBodyIndex\n    );\n\n    void OpenDoor();\n    void CloseDoor();\n\nprivate:\n    FVector ClosedRelativeLocation;\n    FVector OpenRelativeLocation;\n};"
            }
          ],
          "steps": [
            {
              "title": "Declare component pointers",
              "where": "TrainingDoor.h",
              "doList": [
                "Forward-declare USceneComponent, UStaticMeshComponent, UBoxComponent and UPrimitiveComponent.",
                "Declare SceneRoot, DoorMesh and TriggerBox as VisibleAnywhere/BlueprintReadOnly under Category Door.",
                "Keep TrainingDoor.generated.h as the final include."
              ],
              "code": [
                {
                  "title": "Components",
                  "content": "UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=\"Door\")\nUSceneComponent* SceneRoot;\n\nUPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=\"Door\")\nUStaticMeshComponent* DoorMesh;\n\nUPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=\"Door\")\nUBoxComponent* TriggerBox;"
                }
              ],
              "codeRead": {
                "items": [
                  {
                    "token": "UBoxComponent* TriggerBox;",
                    "meaning": "TriggerBox is a pointer to an Unreal box component; the * is pointer declaration syntax."
                  },
                  {
                    "token": "VisibleAnywhere",
                    "meaning": "The component reference is visible/inspectable in the editor."
                  },
                  {
                    "token": "BlueprintReadOnly",
                    "meaning": "Blueprint can read the property but not replace it through ordinary property access."
                  }
                ]
              },
              "check": "Three reflected component pointers exist.",
              "why": "These form the stable door structure.",
              "codeGuide": {
                "file": "TrainingDoor.h",
                "find": "class ATrainingDoor → public: section plus forward declarations before UCLASS()",
                "action": "ADD",
                "place": "Add forward declarations after the generated include block/before UCLASS(). Add SceneRoot, DoorMesh and TriggerBox inside public:. Do not replace the generated class skeleton.",
                "after": "Save. DO NOT BUILD YET; the header declares functions that are implemented over the next stages."
              }
            },
            {
              "title": "Declare state and movement data",
              "where": "TrainingDoor.h → public section",
              "doList": [
                "Add bIsLocked default true.",
                "Add bIsOpen default false.",
                "Add OpenOffset default FVector(0,0,220).",
                "Use EditAnywhere/BlueprintReadWrite for tunable lock/offset.",
                "Use VisibleAnywhere/BlueprintReadOnly for bIsOpen."
              ],
              "code": [
                {
                  "title": "Door state",
                  "content": "UPROPERTY(EditAnywhere, BlueprintReadWrite, Category=\"Door\")\nbool bIsLocked = true;\n\nUPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=\"Door\")\nbool bIsOpen = false;\n\nUPROPERTY(EditAnywhere, BlueprintReadWrite, Category=\"Door\")\nFVector OpenOffset = FVector(0.0f, 0.0f, 220.0f);"
                }
              ],
              "codeRead": {
                "items": [
                  {
                    "token": "FVector",
                    "meaning": "Unreal type containing X, Y and Z float values, often used for positions/directions/offsets."
                  },
                  {
                    "token": "FVector(0.0f, 0.0f, 220.0f)",
                    "meaning": "Construct a vector with no X/Y change and +220 units on Z."
                  },
                  {
                    "token": "bIsOpen",
                    "meaning": "Boolean state; the b prefix follows common Unreal Boolean naming."
                  }
                ]
              },
              "check": "The door has explicit lock/open state and an editable open offset.",
              "why": "Conditions need state, and movement needs data rather than magic numbers hidden inside a function.",
              "codeGuide": {
                "file": "TrainingDoor.h",
                "find": "class ATrainingDoor → public: section",
                "action": "ADD",
                "place": "Place bIsLocked, bIsOpen and OpenOffset directly below the component declarations.",
                "after": "Save. Do not build yet."
              }
            },
            {
              "title": "Declare public functions",
              "where": "TrainingDoor.h → public section",
              "doList": [
                "Add CanOpenDoor() const with UFUNCTION(BlueprintPure).",
                "Add SetLocked(bool bNewLocked) with UFUNCTION(BlueprintCallable).",
                "Put both in Category Door.",
                "Read each signature before continuing."
              ],
              "code": [
                {
                  "title": "Public door functions",
                  "content": "UFUNCTION(BlueprintPure, Category=\"Door\")\nbool CanOpenDoor() const;\n\nUFUNCTION(BlueprintCallable, Category=\"Door\")\nvoid SetLocked(bool bNewLocked);"
                }
              ],
              "codeRead": {
                "items": [
                  {
                    "token": "bool",
                    "meaning": "CanOpenDoor returns true or false."
                  },
                  {
                    "token": "const",
                    "meaning": "CanOpenDoor promises not to change member state through this function."
                  },
                  {
                    "token": "void",
                    "meaning": "SetLocked performs an action and returns no value."
                  },
                  {
                    "token": "bool bNewLocked",
                    "meaning": "One Boolean parameter supplied by the caller."
                  }
                ]
              },
              "check": "The class exposes one query and one action function.",
              "why": "This introduces two common gameplay-function roles.",
              "codeGuide": {
                "file": "TrainingDoor.h",
                "find": "class ATrainingDoor → public: section",
                "action": "ADD",
                "place": "Place CanOpenDoor() and SetLocked(...) declarations below the state properties. These are declarations only—end them with semicolons.",
                "after": "Save. Do not build yet."
              }
            },
            {
              "title": "Declare callbacks/internal helpers/cache",
              "where": "TrainingDoor.h → protected/private",
              "doList": [
                "Declare BeginPlay override.",
                "Declare BeginOverlap and EndOverlap UFUNCTION callbacks using the supplied signatures.",
                "Declare void OpenDoor(); and void CloseDoor();.",
                "Under private: add ClosedRelativeLocation and OpenRelativeLocation as FVectors."
              ],
              "code": [
                {
                  "title": "Internal function declarations",
                  "content": "void OpenDoor();\nvoid CloseDoor();\n\nprivate:\n    FVector ClosedRelativeLocation;\n    FVector OpenRelativeLocation;"
                }
              ],
              "codeRead": {
                "items": [
                  {
                    "token": "private:",
                    "meaning": "The cached locations are implementation details only ATrainingDoor should directly manipulate."
                  },
                  {
                    "token": "ClosedRelativeLocation",
                    "meaning": "Stores where DoorMesh started relative to SceneRoot."
                  },
                  {
                    "token": "OpenRelativeLocation",
                    "meaning": "Stores the calculated relative position used when open."
                  }
                ],
                "note": "Use the full checkpoint above for the exact overlap signatures—you are still not expected to memorise Unreal's event parameter list."
              },
              "check": "The header describes the full class contract.",
              "why": "The implementation can now be built one function at a time.",
              "codeGuide": {
                "file": "TrainingDoor.h",
                "find": "class ATrainingDoor → protected: and private: sections",
                "action": "ADD",
                "place": "Under protected:, add BeginPlay, both UFUNCTION overlap declarations, OpenDoor() and CloseDoor(). Under private:, add ClosedRelativeLocation and OpenRelativeLocation. Do not put function bodies in the header.",
                "after": "Save. Continue to Stage 3 before your first door Build."
              }
            }
          ],
          "test": [
            "The header matches the stage checkpoint.",
            "All state/function declarations compile after a full build when implementations are supplied in later stages.",
            "You can explain public/protected/private at a beginner level."
          ],
          "doneWhen": "TrainingDoor.h clearly describes structure, state and function responsibilities.",
          "common": [
            "If you compile immediately after declaring non-inline functions without implementations, linker errors are expected—continue to the implementation stages before the final full Build.",
            "Keep the event signatures exact for AddDynamic compatibility."
          ]
        },
        {
          "id": "constructor",
          "number": 3,
          "title": "Constructor — Build a Fixed Trigger + Moving Door Mesh",
          "goal": "Create the component hierarchy, blocking DoorMesh and query-only Pawn TriggerBox.",
          "why": "The trigger needs to stay in the doorway while DoorMesh moves up/down; otherwise moving the whole Actor would move the detector away and immediately end the overlap.",
          "concept": "SceneRoot anchors the Actor. DoorMesh is the physical visual door. TriggerBox is a separate query volume. Their collision jobs are different.",
          "practical": [
            "DoorMesh blocks Pawns/world.",
            "TriggerBox detects Pawn presence without blocking.",
            "Moving only DoorMesh preserves the trigger location."
          ],
          "algorithm": [
            "Create SceneRoot.",
            "Create/attach DoorMesh and make it blocking.",
            "Create/attach TriggerBox.",
            "Configure QueryOnly/Pawn overlap.",
            "Bind BeginOverlap and EndOverlap delegates."
          ],
          "review": [
            {
              "term": "QueryAndPhysics",
              "text": "Component participates in collision queries and physical blocking/interaction."
            },
            {
              "term": "ECR_Block",
              "text": "Collision response: prevent passage/produce blocking contact."
            },
            {
              "term": "SetBoxExtent",
              "text": "Sets TriggerBox half-size in local units."
            },
            {
              "term": "OnComponentEndOverlap",
              "text": "Delegate broadcast when an Actor/component stops overlapping the box."
            }
          ],
          "steps": [
            {
              "title": "Add includes and root",
              "where": "TrainingDoor.cpp",
              "doList": [
                "Include BoxComponent, SceneComponent, StaticMeshComponent and Character headers.",
                "Set PrimaryActorTick.bCanEverTick = false.",
                "Create SceneRoot and SetRootComponent."
              ],
              "code": [
                {
                  "title": "Constructor start",
                  "content": "SceneRoot = CreateDefaultSubobject<USceneComponent>(TEXT(\"SceneRoot\"));\nSetRootComponent(SceneRoot);"
                }
              ],
              "check": "The door has a neutral root and does not Tick.",
              "why": "No per-frame update is needed for instant open/close behaviour.",
              "codeGuide": {
                "file": "TrainingDoor.cpp",
                "find": "Top includes + ATrainingDoor::ATrainingDoor()",
                "action": "ADD",
                "place": "Keep #include \"TrainingDoor.h\" first; add component/Character includes below it. Inside the constructor, set Tick false and create SceneRoot.",
                "after": "Save. Continue the constructor before building."
              }
            },
            {
              "title": "Create blocking DoorMesh",
              "where": "TrainingDoor.cpp → constructor",
              "doList": [
                "Create DoorMesh.",
                "Attach it to SceneRoot.",
                "Set collision to QueryAndPhysics.",
                "Set all channels to Block for this beginner version."
              ],
              "code": [
                {
                  "title": "DoorMesh",
                  "content": "DoorMesh = CreateDefaultSubobject<UStaticMeshComponent>(TEXT(\"DoorMesh\"));\nDoorMesh->SetupAttachment(SceneRoot);\nDoorMesh->SetCollisionEnabled(ECollisionEnabled::QueryAndPhysics);\nDoorMesh->SetCollisionResponseToAllChannels(ECR_Block);"
                }
              ],
              "check": "DoorMesh can physically block the player.",
              "why": "The visual door is also the physical barrier.",
              "codeGuide": {
                "file": "TrainingDoor.cpp",
                "find": "ATrainingDoor::ATrainingDoor()",
                "action": "ADD",
                "place": "Add this block immediately after SetRootComponent(SceneRoot);.",
                "after": "Save. Continue to TriggerBox."
              }
            },
            {
              "title": "Create TriggerBox",
              "where": "TrainingDoor.cpp → constructor",
              "doList": [
                "Create TriggerBox and attach to SceneRoot.",
                "Set extent to FVector(120,120,120).",
                "Set QueryOnly.",
                "Enable overlap events.",
                "Ignore all channels then set Pawn to Overlap."
              ],
              "code": [
                {
                  "title": "TriggerBox collision",
                  "content": "TriggerBox = CreateDefaultSubobject<UBoxComponent>(TEXT(\"TriggerBox\"));\nTriggerBox->SetupAttachment(SceneRoot);\nTriggerBox->SetBoxExtent(FVector(120.0f, 120.0f, 120.0f));\nTriggerBox->SetCollisionEnabled(ECollisionEnabled::QueryOnly);\nTriggerBox->SetGenerateOverlapEvents(true);\nTriggerBox->SetCollisionResponseToAllChannels(ECR_Ignore);\nTriggerBox->SetCollisionResponseToChannel(ECC_Pawn, ECR_Overlap);"
                }
              ],
              "check": "TriggerBox detects Pawn overlap without becoming another physical wall.",
              "why": "Detection and blocking are separate component responsibilities.",
              "codeGuide": {
                "file": "TrainingDoor.cpp",
                "find": "ATrainingDoor::ATrainingDoor()",
                "action": "ADD",
                "place": "Add this block immediately after the DoorMesh collision setup and before delegate bindings.",
                "after": "Save. Continue to delegate bindings/stubs."
              }
            },
            {
              "title": "Bind begin/end events and add temporary callback stubs",
              "where": "TrainingDoor.cpp → constructor",
              "doList": [
                "Bind OnComponentBeginOverlap to OnTriggerBeginOverlap.",
                "Bind OnComponentEndOverlap to OnTriggerEndOverlap.",
                "Below the constructor, add both temporary callback function definitions exactly as shown.",
                "Leave the callback bodies empty for now—the real decision logic is added in Stage 7.",
                "Save TrainingDoor.cpp.",
                "Full Build Development Editor / Win64 and reopen Unreal before marking this stage complete."
              ],
              "code": [
                {
                  "title": "Delegate bindings — inside the constructor",
                  "content": "TriggerBox->OnComponentBeginOverlap.AddDynamic(\n    this,\n    &ATrainingDoor::OnTriggerBeginOverlap\n);\n\nTriggerBox->OnComponentEndOverlap.AddDynamic(\n    this,\n    &ATrainingDoor::OnTriggerEndOverlap\n);"
                },
                {
                  "title": "Temporary callback stubs — below the constructor",
                  "content": "void ATrainingDoor::OnTriggerBeginOverlap(\n    UPrimitiveComponent* OverlappedComponent,\n    AActor* OtherActor,\n    UPrimitiveComponent* OtherComp,\n    int32 OtherBodyIndex,\n    bool bFromSweep,\n    const FHitResult& SweepResult\n)\n{\n}\n\nvoid ATrainingDoor::OnTriggerEndOverlap(\n    UPrimitiveComponent* OverlappedComponent,\n    AActor* OtherActor,\n    UPrimitiveComponent* OtherComp,\n    int32 OtherBodyIndex\n)\n{\n}"
                }
              ],
              "codeRead": {
                "items": [
                  {
                    "token": "OnComponentEndOverlap",
                    "meaning": "Event fired when an overlap ends; it has a slightly shorter callback signature than BeginOverlap."
                  },
                  {
                    "token": "&ATrainingDoor::OnTriggerEndOverlap",
                    "meaning": "Address of the ATrainingDoor member function registered as the callback."
                  }
                ]
              },
              "check": "Both delegates are bound, both callbacks have temporary definitions, and the project completes a full Build with 0 failed.",
              "why": "Binding references the callback functions. Providing stubs now keeps the project linkable until Stage 7 replaces the empty bodies with real logic.",
              "codeGuide": {
                "file": "TrainingDoor.cpp",
                "find": "ATrainingDoor::ATrainingDoor() plus new callback definitions below the constructor",
                "action": "ADD",
                "place": "Put the delegate-binding block at the END of the constructor before its closing brace. Then add the two full empty callback definitions BELOW the constructor. Do not put callback definitions inside the constructor.",
                "after": "Save All, close Unreal, full Build Development Editor / Win64. The stubs exist specifically so this stage links cleanly."
              }
            }
          ],
          "test": [
            "SceneRoot, DoorMesh and TriggerBox are created.",
            "DoorMesh blocks while TriggerBox overlaps Pawns.",
            "Begin and End overlap delegates are bound.",
            "Both callback stubs exist.",
            "Development Editor / Win64 Build succeeds with 0 failed."
          ],
          "doneWhen": "The door has its physical/detection architecture and compiles cleanly before behaviour is added.",
          "common": [
            "If the player cannot enter the trigger because an invisible box blocks them, TriggerBox is not QueryOnly/Overlap.",
            "If moving the door later causes an immediate end overlap, check you are moving DoorMesh rather than the entire Actor."
          ]
        },
        {
          "id": "locations",
          "number": 4,
          "title": "BeginPlay — Cache Closed and Open Locations",
          "goal": "Remember the mesh's starting location and calculate the destination using FVector addition.",
          "why": "OpenDoor should not repeatedly add to the current position and drift upward every time. It should move between two known locations.",
          "concept": "Caching stores a known value for later reuse. OpenRelativeLocation is calculated once from the closed position plus the editable OpenOffset.",
          "practical": [
            "This prevents repeated-open accumulation bugs.",
            "Designers can change OpenOffset without editing the movement function."
          ],
          "algorithm": [
            "Read DoorMesh relative location.",
            "Store as ClosedRelativeLocation.",
            "Add OpenOffset.",
            "Store as OpenRelativeLocation."
          ],
          "review": [
            {
              "term": "GetRelativeLocation()",
              "text": "Returns the component's location relative to its parent."
            },
            {
              "term": "+",
              "text": "For FVectors, adds X/Y/Z components together."
            },
            {
              "term": "Cache",
              "text": "Store a value once so later functions reuse the known result."
            }
          ],
          "steps": [
            {
              "title": "Implement BeginPlay cache",
              "where": "TrainingDoor.cpp → BeginPlay()",
              "doList": [
                "Keep Super::BeginPlay();.",
                "Assign ClosedRelativeLocation = DoorMesh->GetRelativeLocation();.",
                "Assign OpenRelativeLocation = ClosedRelativeLocation + OpenOffset;.",
                "Save."
              ],
              "code": [
                {
                  "title": "Location cache",
                  "content": "ClosedRelativeLocation = DoorMesh->GetRelativeLocation();\nOpenRelativeLocation = ClosedRelativeLocation + OpenOffset;"
                }
              ],
              "codeRead": {
                "items": [
                  {
                    "token": "DoorMesh->GetRelativeLocation()",
                    "meaning": "Call through the DoorMesh pointer and read its position relative to SceneRoot."
                  },
                  {
                    "token": "ClosedRelativeLocation + OpenOffset",
                    "meaning": "FVector addition calculates the target open position."
                  },
                  {
                    "token": "=",
                    "meaning": "Store each calculated FVector into the corresponding member."
                  }
                ]
              },
              "check": "BeginPlay calculates exactly two stable mesh locations.",
              "why": "Open/Close functions can now set positions rather than accumulate movement.",
              "codeGuide": {
                "file": "TrainingDoor.cpp",
                "find": "void ATrainingDoor::BeginPlay()",
                "action": "ADD / CREATE IMPLEMENTATION",
                "place": "If BeginPlay implementation already exists, keep Super::BeginPlay(); and add the two cache lines underneath. If only declared in the header, create the .cpp function definition once.",
                "after": "Save and Live Coding compile."
              }
            }
          ],
          "test": [
            "ClosedRelativeLocation comes from DoorMesh.",
            "OpenRelativeLocation = Closed + Offset.",
            "No movement happens yet."
          ],
          "doneWhen": "The two door positions are cached correctly.",
          "common": [
            "Do not use AddActorWorldOffset every time the trigger fires; repeated calls would accumulate movement.",
            "Keep OpenOffset editable so the same class can make vertical or sideways doors."
          ]
        },
        {
          "id": "can-open",
          "number": 5,
          "title": "Return Values — Write CanOpenDoor() const",
          "goal": "Create a pure query function that returns true only when the door is unlocked and currently closed.",
          "why": "Putting the decision in one named function makes the overlap callback readable and lets later inventory code extend the condition cleanly.",
          "concept": "Boolean operators combine conditions. && means both sides must be true. ! negates a Boolean. return sends the result back to the caller.",
          "practical": [
            "Queries such as CanOpen, HasItem, IsAlive and HasAmmo are common gameplay functions.",
            "BlueprintPure makes the C++ query available to Blueprint without pretending it changes the world."
          ],
          "algorithm": [
            "Check NOT locked.",
            "Check NOT open.",
            "Combine with AND.",
            "Return result."
          ],
          "review": [
            {
              "term": "&&",
              "text": "Logical AND: both conditions must be true."
            },
            {
              "term": "!bIsLocked",
              "text": "True when the door is not locked."
            },
            {
              "term": "return",
              "text": "Ends the function and sends a value to the caller."
            },
            {
              "term": "const",
              "text": "Promises this query will not modify member state."
            }
          ],
          "steps": [
            {
              "title": "Implement the query",
              "where": "TrainingDoor.cpp",
              "doList": [
                "Create bool ATrainingDoor::CanOpenDoor() const.",
                "Return !bIsLocked && !bIsOpen;.",
                "Save/compile."
              ],
              "code": [
                {
                  "title": "CanOpenDoor",
                  "content": "bool ATrainingDoor::CanOpenDoor() const\n{\n    return !bIsLocked && !bIsOpen;\n}"
                }
              ],
              "codeRead": {
                "items": [
                  {
                    "token": "bool",
                    "meaning": "The caller will receive true or false."
                  },
                  {
                    "token": "!bIsLocked",
                    "meaning": "Condition is true when bIsLocked is false."
                  },
                  {
                    "token": "&&",
                    "meaning": "Both unlocked AND closed must be true."
                  },
                  {
                    "token": "!bIsOpen",
                    "meaning": "Prevents opening again while already open."
                  }
                ],
                "note": "Read it in English: “Can open = not locked AND not already open.”"
              },
              "check": "CanOpenDoor returns one readable Boolean expression.",
              "why": "Named queries prevent decision logic being copied into several callbacks.",
              "codeGuide": {
                "file": "TrainingDoor.cpp",
                "find": "New function: bool ATrainingDoor::CanOpenDoor() const",
                "action": "ADD FUNCTION DEFINITION",
                "place": "Add this function at file scope, below another completed ATrainingDoor function (for example after BeginPlay). It must NOT be nested inside another function.",
                "after": "Save and compile."
              }
            }
          ],
          "test": [
            "Locked + closed returns false.",
            "Unlocked + closed returns true.",
            "Unlocked + open returns false."
          ],
          "doneWhen": "The door's open decision exists as a reusable query.",
          "common": [
            "Do not use = when you mean comparison/Boolean logic.",
            "If you find yourself changing state inside CanOpenDoor, stop: a query function should remain read-only here."
          ]
        },
        {
          "id": "open-close",
          "number": 6,
          "title": "Action Functions — OpenDoor() and CloseDoor()",
          "goal": "Implement two small functions that guard against duplicate work, update bIsOpen and move DoorMesh to a cached location.",
          "why": "The overlap event should decide when to act; OpenDoor/CloseDoor should own how the movement/state change happens.",
          "concept": "Guard clauses prevent unnecessary work. State should be changed at the same point as the world action so the code and game agree.",
          "practical": [
            "Later you can replace instant SetRelativeLocation with interpolation/animation without changing every caller.",
            "The same open/close functions can be triggered by overlap, interaction, Blueprint or inventory logic."
          ],
          "algorithm": [
            "Open: if already open return; set open true; set mesh to OpenRelativeLocation.",
            "Close: if already closed return; set open false; set mesh to ClosedRelativeLocation."
          ],
          "review": [
            {
              "term": "SetRelativeLocation",
              "text": "Directly sets the component's relative location."
            },
            {
              "term": "Guard clause",
              "text": "An early condition + return that exits when the action is unnecessary/invalid."
            },
            {
              "term": "State + action",
              "text": "bIsOpen is updated alongside the visible mesh movement."
            }
          ],
          "steps": [
            {
              "title": "Implement OpenDoor",
              "where": "TrainingDoor.cpp",
              "doList": [
                "Add if (bIsOpen) return guard.",
                "Set bIsOpen = true.",
                "Call DoorMesh->SetRelativeLocation(OpenRelativeLocation).",
                "Save."
              ],
              "code": [
                {
                  "title": "OpenDoor",
                  "content": "void ATrainingDoor::OpenDoor()\n{\n    if (bIsOpen)\n    {\n        return;\n    }\n\n    bIsOpen = true;\n    DoorMesh->SetRelativeLocation(OpenRelativeLocation);\n}"
                }
              ],
              "check": "OpenDoor performs one state/action transition.",
              "why": "It cannot repeatedly move/mark an already-open door.",
              "codeGuide": {
                "file": "TrainingDoor.cpp",
                "find": "New function: void ATrainingDoor::OpenDoor()",
                "action": "ADD FUNCTION DEFINITION",
                "place": "Add the full function at file scope below CanOpenDoor() or another completed function. Do not place it inside BeginPlay/constructor.",
                "after": "Save. Add CloseDoor before compiling."
              }
            },
            {
              "title": "Implement CloseDoor",
              "where": "TrainingDoor.cpp",
              "doList": [
                "Add if (!bIsOpen) return guard.",
                "Set bIsOpen = false.",
                "Set DoorMesh relative location to ClosedRelativeLocation.",
                "Save."
              ],
              "code": [
                {
                  "title": "CloseDoor",
                  "content": "void ATrainingDoor::CloseDoor()\n{\n    if (!bIsOpen)\n    {\n        return;\n    }\n\n    bIsOpen = false;\n    DoorMesh->SetRelativeLocation(ClosedRelativeLocation);\n}"
                }
              ],
              "check": "CloseDoor mirrors the open action cleanly.",
              "why": "Symmetric functions are easier to read/test than one function full of branches.",
              "codeGuide": {
                "file": "TrainingDoor.cpp",
                "find": "New function: void ATrainingDoor::CloseDoor()",
                "action": "ADD FUNCTION DEFINITION",
                "place": "Add the full function at file scope directly after OpenDoor().",
                "after": "Save and Live Coding compile both action functions together."
              }
            }
          ],
          "test": [
            "OpenDoor only opens a closed door.",
            "CloseDoor only closes an open door.",
            "Only DoorMesh moves."
          ],
          "doneWhen": "The movement actions are isolated into reusable functions.",
          "common": [
            "If the trigger moves, you accidentally moved the Actor/root instead of DoorMesh.",
            "If the door climbs higher each time, you used additive movement instead of cached target positions."
          ]
        },
        {
          "id": "overlap",
          "number": 7,
          "title": "Decisions in Context — Use the Functions from Overlap Events",
          "goal": "Validate the overlapping Actor, reject locked doors, call CanOpenDoor/OpenDoor on enter and CloseDoor on exit.",
          "why": "This stage shows what good event code looks like: validate input, make a decision, call named functions.",
          "concept": "Callbacks should coordinate the mechanic rather than contain every implementation detail. This keeps event code short enough to read as an algorithm.",
          "practical": [
            "Later Mission 3 will add a key/inventory check right into this decision point.",
            "The movement functions will not need rewriting."
          ],
          "algorithm": [
            "Begin overlap → Cast to ACharacter → if invalid return → if locked log/return → if CanOpenDoor then OpenDoor.",
            "End overlap → Cast Character → if invalid return → CloseDoor."
          ],
          "review": [
            {
              "term": "Cast<ACharacter>",
              "text": "Checks whether OtherActor is compatible with ACharacter."
            },
            {
              "term": "if (bIsLocked)",
              "text": "Direct state condition—true means reject this attempt."
            },
            {
              "term": "CanOpenDoor()",
              "text": "Calls your query and receives bool."
            },
            {
              "term": "OpenDoor()",
              "text": "Calls your separate action function."
            }
          ],
          "steps": [
            {
              "title": "Implement BeginOverlap",
              "where": "TrainingDoor.cpp → OnTriggerBeginOverlap",
              "doList": [
                "Find the existing OnTriggerBeginOverlap function stub created in Stage 3.",
                "KEEP the function signature exactly as it is.",
                "REPLACE only the empty code between { and } with the supplied decision code.",
                "Cast OtherActor to ACharacter.",
                "Return if the cast fails.",
                "If bIsLocked, log that the door is locked and return.",
                "If CanOpenDoor() is true, call OpenDoor().",
                "Save TrainingDoor.cpp."
              ],
              "code": [
                {
                  "title": "Begin overlap decision",
                  "content": "ACharacter* Character = Cast<ACharacter>(OtherActor);\n\nif (!Character)\n{\n    return;\n}\n\nif (bIsLocked)\n{\n    UE_LOG(LogTemp, Warning, TEXT(\"%s is locked\"), *GetName());\n    return;\n}\n\nif (CanOpenDoor())\n{\n    OpenDoor();\n}"
                }
              ],
              "check": "The begin event reads like a sequence of validation/decisions.",
              "why": "The callback coordinates rather than owning movement implementation.",
              "codeGuide": {
                "file": "TrainingDoor.cpp",
                "find": "Existing ATrainingDoor::OnTriggerBeginOverlap(...) stub from Stage 3",
                "action": "REPLACE FUNCTION BODY ONLY",
                "place": "KEEP the signature and braces. Replace the empty content between { } with the supplied decision code.",
                "after": "Save. Continue to EndOverlap before compiling."
              }
            },
            {
              "title": "Implement EndOverlap",
              "where": "TrainingDoor.cpp → OnTriggerEndOverlap",
              "doList": [
                "Find the existing OnTriggerEndOverlap function stub created in Stage 3.",
                "KEEP the function signature exactly as it is.",
                "REPLACE only the empty code between { and } with the supplied code.",
                "Cast OtherActor to ACharacter.",
                "Return if invalid.",
                "Call CloseDoor().",
                "Save TrainingDoor.cpp, then Live Coding compile (or use the safe full Build route if the Editor state is unclear)."
              ],
              "code": [
                {
                  "title": "End overlap",
                  "content": "ACharacter* Character = Cast<ACharacter>(OtherActor);\n\nif (!Character)\n{\n    return;\n}\n\nCloseDoor();"
                }
              ],
              "check": "A valid Character leaving requests CloseDoor.",
              "why": "CloseDoor's own guard safely handles the already-closed case.",
              "codeGuide": {
                "file": "TrainingDoor.cpp",
                "find": "Existing ATrainingDoor::OnTriggerEndOverlap(...) stub from Stage 3",
                "action": "REPLACE FUNCTION BODY ONLY",
                "place": "KEEP the signature and braces. Replace the empty content between { } with the supplied code.",
                "after": "Save and Live Coding compile; if event code appears stale, use the full Build route."
              }
            },
            {
              "title": "Test locked and unlocked",
              "where": "Unreal Editor",
              "doList": [
                "Place TrainingDoor.",
                "Assign a cube/door mesh and scale it visibly.",
                "Position TriggerBox around the doorway.",
                "With bIsLocked=true, walk in and confirm the log says locked/no movement.",
                "Stop, set bIsLocked=false, Play again.",
                "Walk into trigger and confirm DoorMesh opens; walk out and confirm it closes."
              ],
              "check": "The same class produces different behaviour from one Boolean state.",
              "why": "This is the practical value of decisions + reusable functions."
            }
          ],
          "test": [
            "Locked door refuses/does not move.",
            "Unlocked door opens on enter.",
            "Unlocked door closes on exit.",
            "Trigger remains fixed."
          ],
          "doneWhen": "The door's events correctly orchestrate the function-based mechanic.",
          "common": [
            "If EndOverlap fires immediately on open, confirm only DoorMesh moves and TriggerBox remains attached to SceneRoot.",
            "If the Character cannot pass even when open, check DoorMesh moved far enough and no second blocking component remains in the doorway."
          ]
        },
        {
          "id": "set-locked",
          "number": 8,
          "title": "Parameters + Blueprint Exposure — SetLocked(bool)",
          "goal": "Implement SetLocked with an input parameter and expose it to Blueprint for future systems.",
          "why": "Mission 3's inventory/key logic needs one clean way to unlock the door rather than writing bIsLocked = false everywhere.",
          "concept": "Parameters make functions reusable by letting the caller supply data. `bNewLocked` is a local parameter; the member `bIsLocked` stores the Actor's state.",
          "practical": [
            "A switch, key, quest or Blueprint can all call the same SetLocked function.",
            "Centralising the state change gives you one place to add feedback later."
          ],
          "algorithm": [
            "Receive bNewLocked.",
            "Assign it to bIsLocked.",
            "Log the new state."
          ],
          "review": [
            {
              "term": "Parameter",
              "text": "Input supplied when a function is called."
            },
            {
              "term": "bNewLocked",
              "text": "Temporary input value valid inside SetLocked."
            },
            {
              "term": "bIsLocked",
              "text": "Persistent member state stored on the Actor."
            },
            {
              "term": "?:",
              "text": "Ternary conditional operator used here to choose text based on a Boolean."
            }
          ],
          "steps": [
            {
              "title": "Implement SetLocked",
              "where": "TrainingDoor.cpp",
              "doList": [
                "Create the implementation matching the header.",
                "Assign bIsLocked = bNewLocked.",
                "Add the supplied log showing true/false.",
                "Save/compile."
              ],
              "code": [
                {
                  "title": "SetLocked",
                  "content": "void ATrainingDoor::SetLocked(bool bNewLocked)\n{\n    bIsLocked = bNewLocked;\n\n    UE_LOG(\n        LogTemp,\n        Warning,\n        TEXT(\"%s locked = %s\"),\n        *GetName(),\n        bIsLocked ? TEXT(\"true\") : TEXT(\"false\")\n    );\n}"
                }
              ],
              "codeRead": {
                "items": [
                  {
                    "token": "bIsLocked = bNewLocked;",
                    "meaning": "Copy the caller's new value into the door's stored lock state."
                  },
                  {
                    "token": "condition ? valueA : valueB",
                    "meaning": "Ternary operator: choose valueA when condition is true, otherwise valueB."
                  },
                  {
                    "token": "bIsLocked ? TEXT(\"true\") : TEXT(\"false\")",
                    "meaning": "Choose the word true/false for the log based on current state."
                  }
                ]
              },
              "check": "One parameter controls the persistent lock state.",
              "why": "Later systems can unlock without reaching directly into implementation details.",
              "codeGuide": {
                "file": "TrainingDoor.cpp",
                "find": "New function: void ATrainingDoor::SetLocked(bool bNewLocked)",
                "action": "ADD FUNCTION DEFINITION",
                "place": "Add the function at file scope near CanOpenDoor/OpenDoor/CloseDoor. It must not be nested inside another function.",
                "after": "Save and Live Coding compile."
              }
            },
            {
              "title": "Confirm Blueprint exposure",
              "where": "Create/open BP_TrainingDoor child → Event Graph search",
              "doList": [
                "Create BP_TrainingDoor based on TrainingDoor if you have not already.",
                "Right-click in its Event Graph and search Set Locked.",
                "Confirm the native function appears with a Boolean input.",
                "Delete any test node if you are not using it yet; do not add replacement gameplay logic."
              ],
              "check": "Blueprint can call the C++ SetLocked function.",
              "why": "Epic's hybrid workflow uses C++ foundations with selectively exposed Blueprint controls."
            }
          ],
          "test": [
            "SetLocked compiles.",
            "It changes bIsLocked.",
            "The function is callable in a Blueprint child.",
            "CanOpenDoor remains BlueprintPure/read-only."
          ],
          "doneWhen": "The door has a clean public API for querying/changing lock state.",
          "common": [
            "If Set Locked does not appear in Blueprint, confirm UFUNCTION(BlueprintCallable) is on the declaration and the project was rebuilt/reflected correctly.",
            "Do not mark OpenDoor BlueprintCallable yet unless you deliberately want callers to bypass the door's condition checks."
          ]
        },
        {
          "id": "final",
          "number": 9,
          "title": "Full Door Build — Review, Debug and Adapt",
          "goal": "Compare against the complete class, test all state transitions, deliberately fix one function bug and create one independent variation.",
          "why": "A code-based mission is complete when you can read, debug and change the mechanic—not when one copied door happens to move.",
          "concept": "The finished class separates structure, state, queries, actions and events. That separation is what lets Mission 3 add key/inventory logic without rebuilding the door.",
          "practical": [
            "The class is now reusable for lifts/gates/secret doors by changing mesh and OpenOffset.",
            "SetLocked is the hook Mission 3 will use after a key check."
          ],
          "algorithm": [
            "Full Build.",
            "Locked test.",
            "Unlocked open/close test.",
            "Break one line.",
            "Use compiler output.",
            "Fix.",
            "Make one variation.",
            "Explain function responsibilities."
          ],
          "review": [
            {
              "term": "Query function",
              "text": "CanOpenDoor answers a question without changing state."
            },
            {
              "term": "Action function",
              "text": "OpenDoor/CloseDoor/SetLocked change state/world."
            },
            {
              "term": "Callback",
              "text": "Overlap event functions receive engine-supplied event data and coordinate the mechanic."
            },
            {
              "term": "Refactor-ready",
              "text": "Key/inventory logic can be inserted into the decision point without changing movement code."
            }
          ],
          "checkpointCode": [
            {
              "title": "TrainingDoor.h — complete Mission 2",
              "content": "#pragma once\n\n#include \"CoreMinimal.h\"\n#include \"GameFramework/Actor.h\"\n#include \"TrainingDoor.generated.h\"\n\nclass USceneComponent;\nclass UStaticMeshComponent;\nclass UBoxComponent;\nclass UPrimitiveComponent;\n\nUCLASS()\nclass L4CPPTRAINING_API ATrainingDoor : public AActor\n{\n    GENERATED_BODY()\n\npublic:\n    ATrainingDoor();\n\n    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=\"Door\")\n    USceneComponent* SceneRoot;\n\n    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=\"Door\")\n    UStaticMeshComponent* DoorMesh;\n\n    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=\"Door\")\n    UBoxComponent* TriggerBox;\n\n    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category=\"Door\")\n    bool bIsLocked = true;\n\n    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=\"Door\")\n    bool bIsOpen = false;\n\n    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category=\"Door\")\n    FVector OpenOffset = FVector(0.0f, 0.0f, 220.0f);\n\n    UFUNCTION(BlueprintPure, Category=\"Door\")\n    bool CanOpenDoor() const;\n\n    UFUNCTION(BlueprintCallable, Category=\"Door\")\n    void SetLocked(bool bNewLocked);\n\nprotected:\n    virtual void BeginPlay() override;\n\n    UFUNCTION()\n    void OnTriggerBeginOverlap(\n        UPrimitiveComponent* OverlappedComponent,\n        AActor* OtherActor,\n        UPrimitiveComponent* OtherComp,\n        int32 OtherBodyIndex,\n        bool bFromSweep,\n        const FHitResult& SweepResult\n    );\n\n    UFUNCTION()\n    void OnTriggerEndOverlap(\n        UPrimitiveComponent* OverlappedComponent,\n        AActor* OtherActor,\n        UPrimitiveComponent* OtherComp,\n        int32 OtherBodyIndex\n    );\n\n    void OpenDoor();\n    void CloseDoor();\n\nprivate:\n    FVector ClosedRelativeLocation;\n    FVector OpenRelativeLocation;\n};"
            },
            {
              "title": "TrainingDoor.cpp — complete Mission 2",
              "content": "#include \"TrainingDoor.h\"\n\n#include \"Components/BoxComponent.h\"\n#include \"Components/SceneComponent.h\"\n#include \"Components/StaticMeshComponent.h\"\n#include \"GameFramework/Character.h\"\n\nATrainingDoor::ATrainingDoor()\n{\n    PrimaryActorTick.bCanEverTick = false;\n\n    SceneRoot = CreateDefaultSubobject<USceneComponent>(TEXT(\"SceneRoot\"));\n    SetRootComponent(SceneRoot);\n\n    DoorMesh = CreateDefaultSubobject<UStaticMeshComponent>(TEXT(\"DoorMesh\"));\n    DoorMesh->SetupAttachment(SceneRoot);\n    DoorMesh->SetCollisionEnabled(ECollisionEnabled::QueryAndPhysics);\n    DoorMesh->SetCollisionResponseToAllChannels(ECR_Block);\n\n    TriggerBox = CreateDefaultSubobject<UBoxComponent>(TEXT(\"TriggerBox\"));\n    TriggerBox->SetupAttachment(SceneRoot);\n    TriggerBox->SetBoxExtent(FVector(120.0f, 120.0f, 120.0f));\n    TriggerBox->SetCollisionEnabled(ECollisionEnabled::QueryOnly);\n    TriggerBox->SetGenerateOverlapEvents(true);\n    TriggerBox->SetCollisionResponseToAllChannels(ECR_Ignore);\n    TriggerBox->SetCollisionResponseToChannel(ECC_Pawn, ECR_Overlap);\n\n    TriggerBox->OnComponentBeginOverlap.AddDynamic(\n        this,\n        &ATrainingDoor::OnTriggerBeginOverlap\n    );\n\n    TriggerBox->OnComponentEndOverlap.AddDynamic(\n        this,\n        &ATrainingDoor::OnTriggerEndOverlap\n    );\n}\n\nvoid ATrainingDoor::BeginPlay()\n{\n    Super::BeginPlay();\n\n    ClosedRelativeLocation = DoorMesh->GetRelativeLocation();\n    OpenRelativeLocation = ClosedRelativeLocation + OpenOffset;\n}\n\nbool ATrainingDoor::CanOpenDoor() const\n{\n    return !bIsLocked && !bIsOpen;\n}\n\nvoid ATrainingDoor::SetLocked(bool bNewLocked)\n{\n    bIsLocked = bNewLocked;\n\n    UE_LOG(\n        LogTemp,\n        Warning,\n        TEXT(\"%s locked = %s\"),\n        *GetName(),\n        bIsLocked ? TEXT(\"true\") : TEXT(\"false\")\n    );\n}\n\nvoid ATrainingDoor::OpenDoor()\n{\n    if (bIsOpen)\n    {\n        return;\n    }\n\n    bIsOpen = true;\n    DoorMesh->SetRelativeLocation(OpenRelativeLocation);\n}\n\nvoid ATrainingDoor::CloseDoor()\n{\n    if (!bIsOpen)\n    {\n        return;\n    }\n\n    bIsOpen = false;\n    DoorMesh->SetRelativeLocation(ClosedRelativeLocation);\n}\n\nvoid ATrainingDoor::OnTriggerBeginOverlap(\n    UPrimitiveComponent* OverlappedComponent,\n    AActor* OtherActor,\n    UPrimitiveComponent* OtherComp,\n    int32 OtherBodyIndex,\n    bool bFromSweep,\n    const FHitResult& SweepResult\n)\n{\n    ACharacter* Character = Cast<ACharacter>(OtherActor);\n\n    if (!Character)\n    {\n        return;\n    }\n\n    if (bIsLocked)\n    {\n        UE_LOG(LogTemp, Warning, TEXT(\"%s is locked\"), *GetName());\n        return;\n    }\n\n    if (CanOpenDoor())\n    {\n        OpenDoor();\n    }\n}\n\nvoid ATrainingDoor::OnTriggerEndOverlap(\n    UPrimitiveComponent* OverlappedComponent,\n    AActor* OtherActor,\n    UPrimitiveComponent* OtherComp,\n    int32 OtherBodyIndex\n)\n{\n    ACharacter* Character = Cast<ACharacter>(OtherActor);\n\n    if (!Character)\n    {\n        return;\n    }\n\n    CloseDoor();\n}"
            }
          ],
          "steps": [
            {
              "title": "Run the complete test matrix",
              "where": "Unreal Editor",
              "doList": [
                "Locked + closed: enter trigger → no open.",
                "Unlocked + closed: enter → opens.",
                "Remain inside trigger → does not repeatedly move.",
                "Leave trigger → closes.",
                "Re-enter unlocked → opens again.",
                "Change OpenOffset to a sideways vector and confirm the same code works."
              ],
              "check": "Every state transition behaves predictably.",
              "why": "Testing combinations catches logic bugs hidden by one happy-path run."
            },
            {
              "title": "Break and fix a function",
              "where": "TrainingDoor.cpp → CanOpenDoor",
              "doList": [
                "Temporarily change && to ||.",
                "Compile and observe that it still compiles—this is now a logic bug, not syntax error.",
                "Play-test locked/open states and observe wrong behaviour.",
                "Restore &&.",
                "Retest."
              ],
              "check": "You recognise that successful compilation does not guarantee correct logic.",
              "why": "Programmers debug both compiler errors and behaviour errors."
            },
            {
              "title": "Choose one independent variation",
              "where": "TrainingDoor C++/Blueprint",
              "doList": [
                "Option A: make a sideways sliding door by changing OpenOffset in BP_TrainingDoor.",
                "Option B: add editable bool bCloseWhenPlayerLeaves and only CloseDoor when true.",
                "Option C: add logs inside OpenDoor/CloseDoor showing state changes.",
                "Complete one option and test it."
              ],
              "check": "Your variation changes the mechanic without collapsing the function structure.",
              "why": "Transfer demonstrates understanding."
            }
          ],
          "test": [
            "Complete header/.cpp match a working build.",
            "Locked/unlocked/open/close states all work.",
            "You found/fixed a deliberate logic bug.",
            "One independent variation works."
          ],
          "doneWhen": "You can build and explain a function-based C++ door ready for inventory integration.",
          "common": [
            "A build can succeed with wrong Boolean logic—test behaviour.",
            "If the door won't close, inspect the EndOverlap binding/signature and trigger position."
          ]
        }
      ]
    },
    {
      "id": "cpp-arrays-inventory",
      "sequence": 3,
      "displaySequence": "3",
      "requiresMission": "cpp-functions-door",
      "discipline": "Unreal C++",
      "icon": "C++",
      "title": "Arrays & Inventory — Collect a Key, Unlock the Door",
      "subtitle": "Upgrade the same project into a connected gameplay system: add a TArray<FName> inventory to AL4CppTrainingCharacter, refactor TrainingPickup to add ItemIds, and make TrainingDoor require ExitKey before it unlocks.",
      "duration": "4–5 hours",
      "difficulty": "Guided cumulative gameplay system",
      "summary": "This mission connects the classes you already built. The Third Person Character becomes the owner of a simple inventory array. TrainingPickup stops merely logging collection and actually adds an FName item. TrainingDoor checks that inventory for a required key. You will learn TArray, FName, AddUnique, Contains, Remove, Num, range-based for loops, equality/greater-than comparisons and cross-class function calls.",
      "guideRule": "Keep the first inventory deliberately simple: a TArray<FName> is a presence list, not a full RPG inventory. The goal is to understand ownership, arrays and class communication before Structs/Data Tables later.",
      "skills": [
        "TArray<FName>",
        "FName",
        "AddUnique",
        "Contains",
        "Remove",
        "Num",
        "range-based for",
        "const reference",
        "custom Character functions",
        "cross-class calls",
        "inventory ownership",
        "pickup refactor",
        "key-gated door"
      ],
      "rules": [
        "Continue the same L4CppTraining project; do not make a separate inventory demo.",
        "Do not skip READ THIS CODE boxes—TArray/FName/loop/reference syntax is explained at first use.",
        "The Character owns Inventory because it represents player state.",
        "Pickups request AddItem; doors request HasItem. They do not each create their own inventory.",
        "Use FName item IDs such as ExitKey/Coin. Display names/data come later with Structs/Data Tables.",
        "Test Coin versus ExitKey so you prove the door checks the correct item rather than merely 'inventory not empty'."
      ],
      "gameFlow": [
        "Character owns TArray",
        "AddItem",
        "HasItem",
        "RemoveItem",
        "Print loop",
        "Pickup gets ItemId",
        "Pickup calls Character",
        "Door gets RequiredItem",
        "Door checks key",
        "Full key→door loop"
      ],
      "theoryLinks": [
        {
          "label": "Epic UE5.8 — Array Containers",
          "href": "https://dev.epicgames.com/documentation/unreal-engine/array-containers-in-unreal-engine"
        },
        {
          "label": "Epic UE5.8 — TArray API",
          "href": "https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Core/TArray"
        },
        {
          "label": "Epic UE5.8 — UFunctions",
          "href": "https://dev.epicgames.com/documentation/unreal-engine/ufunctions-in-unreal-engine"
        }
      ],
      "stages": [
        {
          "id": "start",
          "number": 0,
          "title": "Plan Ownership — Who Should Store the Inventory?",
          "goal": "Decide where inventory state belongs and define the simple item-ID algorithm before editing the Character.",
          "why": "The book's inventory examples separate collected-item data from world pickups. We will keep that principle but simplify the first system to a TArray<FName> owned by the player Character.",
          "concept": "World pickups are temporary Actors. Player inventory is persistent player state during the level, so AL4CppTrainingCharacter should own the array. Other Actors communicate with the Character through small functions such as AddItem and HasItem.",
          "practical": [
            "A pickup can disappear while the Character still remembers the item.",
            "A door can ask the Character whether ExitKey exists without knowing how the array is implemented.",
            "Later you can replace FName with Struct/Data Table-backed data without changing the ownership principle."
          ],
          "algorithm": [
            "Character owns Inventory: TArray<FName>.",
            "Pickup has an ItemId such as ExitKey.",
            "On collection, pickup casts to AL4CppTrainingCharacter and calls AddItem(ItemId).",
            "Door has RequiredItem such as ExitKey.",
            "On overlap, locked door asks Character HasItem(RequiredItem).",
            "If yes: SetLocked(false) then reuse CanOpenDoor/OpenDoor."
          ],
          "review": [
            {
              "term": "Ownership",
              "text": "Which object/class is responsible for storing and changing a piece of state."
            },
            {
              "term": "TArray<FName>",
              "text": "Unreal dynamic array storing FName values."
            },
            {
              "term": "FName",
              "text": "Efficient name/identifier type useful for IDs such as ExitKey."
            },
            {
              "term": "API",
              "text": "Small public functions other classes use instead of directly manipulating internal state."
            }
          ],
          "steps": [
            {
              "title": "Draw the data flow",
              "where": "Notes / whiteboard",
              "doList": [
                "Write BP_Key/TrainingPickup → AddItem(ExitKey) → Character Inventory.",
                "Write TrainingDoor → HasItem(ExitKey) → true/false.",
                "Circle Character Inventory as the single owner.",
                "Cross out the idea of putting separate inventory arrays on pickup/door Actors."
              ],
              "check": "You can describe where item state lives after the pickup is destroyed.",
              "why": "Good ownership prevents duplicated/inconsistent game state."
            },
            {
              "title": "Prove Mission 2 door still works",
              "where": "L4CppTraining → Play",
              "doList": [
                "Test TrainingDoor locked.",
                "Test it unlocked.",
                "Confirm SetLocked/CanOpenDoor/Open/Close still work.",
                "Return bIsLocked=true for the key-gated upgrade."
              ],
              "check": "The door baseline is working before inventory changes.",
              "why": "Mission 3 modifies the condition, not the movement system."
            }
          ],
          "test": [
            "You can explain Character ownership.",
            "You can explain pickup → Character → door data flow.",
            "Mission 2 door baseline works."
          ],
          "doneWhen": "The inventory architecture makes sense before code changes.",
          "common": [
            "Do not create TArray inventories on every Actor that needs to know about items.",
            "Do not jump to a full item struct/count/UI system yet; this mission is about arrays and communication."
          ]
        },
        {
          "id": "array-header",
          "number": 1,
          "title": "Character Header — Declare TArray<FName> Inventory",
          "goal": "Add the inventory array and four small public inventory functions to AL4CppTrainingCharacter.",
          "why": "The generated Character already owns player movement/state; adding the array here creates one authoritative inventory for the player.",
          "concept": "TArray is Unreal's dynamically sized typed array. The type inside angle brackets is the element type. `TArray<FName>` means every element is an FName.",
          "practical": [
            "The array can grow as items are collected.",
            "VisibleAnywhere lets you inspect inventory in Details/debugging without encouraging arbitrary Blueprint replacement.",
            "Functions form a safer public interface around the array."
          ],
          "algorithm": [
            "Open L4CppTrainingCharacter.h.",
            "Declare Inventory.",
            "Declare AddItem.",
            "Declare HasItem.",
            "Declare RemoveItem.",
            "Declare PrintInventory."
          ],
          "review": [
            {
              "term": "TArray<FName>",
              "text": "Dynamic array whose elements are FName values."
            },
            {
              "term": "<FName>",
              "text": "Template type argument: this array is allowed to store FName elements."
            },
            {
              "term": "Inventory",
              "text": "The array member owned by each Character instance."
            },
            {
              "term": "BlueprintPure",
              "text": "Appropriate for HasItem because it only answers a question."
            }
          ],
          "checkpointCode": [
            {
              "title": "Add this inventory section to L4CppTrainingCharacter.h",
              "content": "UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=\"Inventory\")\nTArray<FName> Inventory;\n\nUFUNCTION(BlueprintCallable, Category=\"Inventory\")\nvoid AddItem(FName ItemId);\n\nUFUNCTION(BlueprintPure, Category=\"Inventory\")\nbool HasItem(FName ItemId) const;\n\nUFUNCTION(BlueprintCallable, Category=\"Inventory\")\nbool RemoveItem(FName ItemId);\n\nUFUNCTION(BlueprintCallable, Category=\"Inventory\")\nvoid PrintInventory() const;"
            }
          ],
          "steps": [
            {
              "title": "Find the generated Character class",
              "where": "Visual Studio → Source/L4CppTraining/L4CppTrainingCharacter.h",
              "doList": [
                "Open the existing Character header generated by the Third Person C++ template.",
                "Find a sensible public section for gameplay functions/properties.",
                "Do not delete movement/camera/input declarations.",
                "Add the inventory section alongside—not instead of—the template code."
              ],
              "check": "You are editing AL4CppTrainingCharacter, not ACharacter engine source.",
              "why": "Mission 3 extends your project Character safely."
            },
            {
              "title": "Declare Inventory",
              "where": "L4CppTrainingCharacter.h",
              "doList": [
                "Add the VisibleAnywhere/BlueprintReadOnly UPROPERTY.",
                "Type TArray<FName> Inventory;.",
                "Save."
              ],
              "code": [
                {
                  "title": "Inventory member",
                  "content": "UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=\"Inventory\")\nTArray<FName> Inventory;"
                }
              ],
              "codeRead": {
                "items": [
                  {
                    "token": "TArray<...>",
                    "meaning": "Unreal templated dynamic array container."
                  },
                  {
                    "token": "<FName>",
                    "meaning": "The element type: every array entry is an FName."
                  },
                  {
                    "token": "Inventory",
                    "meaning": "The member variable holding the Character's collected item IDs."
                  },
                  {
                    "token": ";",
                    "meaning": "Ends the member declaration."
                  }
                ]
              },
              "check": "The Character declares one reflected array of FName.",
              "why": "This becomes the single inventory state owner.",
              "codeGuide": {
                "file": "L4CppTrainingCharacter.h",
                "find": "class AL4CppTrainingCharacter → public: gameplay section",
                "action": "ADD",
                "place": "Do NOT replace the generated Third Person Character header. Add the Inventory UPROPERTY inside the class, in a public section near your new inventory functions and away from the #include block.",
                "after": "Save. Do not full Build until the function declarations are added too."
              }
            },
            {
              "title": "Declare inventory functions",
              "where": "L4CppTrainingCharacter.h",
              "doList": [
                "Declare AddItem(FName ItemId).",
                "Declare HasItem(FName ItemId) const returning bool.",
                "Declare RemoveItem(FName ItemId) returning bool.",
                "Declare PrintInventory() const.",
                "Apply BlueprintCallable/Pure exactly as shown in the checkpoint."
              ],
              "code": [
                {
                  "title": "Inventory API",
                  "content": "UFUNCTION(BlueprintCallable, Category=\"Inventory\")\nvoid AddItem(FName ItemId);\n\nUFUNCTION(BlueprintPure, Category=\"Inventory\")\nbool HasItem(FName ItemId) const;\n\nUFUNCTION(BlueprintCallable, Category=\"Inventory\")\nbool RemoveItem(FName ItemId);\n\nUFUNCTION(BlueprintCallable, Category=\"Inventory\")\nvoid PrintInventory() const;"
                }
              ],
              "codeRead": {
                "items": [
                  {
                    "token": "FName ItemId",
                    "meaning": "Each function receives an FName identifier such as ExitKey."
                  },
                  {
                    "token": "bool RemoveItem(...)",
                    "meaning": "RemoveItem will report whether an item was actually removed."
                  },
                  {
                    "token": "const",
                    "meaning": "HasItem/PrintInventory promise not to change Character member state."
                  }
                ]
              },
              "check": "Other classes now have a small set of named inventory operations to call.",
              "why": "This hides the implementation details behind readable functions.",
              "codeGuide": {
                "file": "L4CppTrainingCharacter.h",
                "find": "class AL4CppTrainingCharacter → same public: inventory section",
                "action": "ADD",
                "place": "Add the four UFUNCTION declarations directly below Inventory. Keep all existing movement/camera/input declarations.",
                "after": "Save. These declarations are implemented in Stages 2–5; do not delete or replace template code."
              }
            }
          ],
          "test": [
            "Inventory is TArray<FName>.",
            "All four function declarations exist.",
            "The existing Third Person Character declarations remain intact."
          ],
          "doneWhen": "The Character header owns the inventory contract.",
          "common": [
            "Do not replace the whole generated Character header with the checkpoint; insert the new section into the existing template class.",
            "If TArray/FName are unknown, confirm CoreMinimal.h is still included by the Character header."
          ]
        },
        {
          "id": "add-item",
          "number": 2,
          "title": "AddItem — Validate IDs and AddUnique",
          "goal": "Implement AddItem so invalid NAME_None is rejected and valid item IDs are added once.",
          "why": "A function around the array can enforce rules consistently instead of every pickup touching Inventory directly.",
          "concept": "FName has a special empty value NAME_None. AddUnique adds an element only when the array does not already contain an equal value.",
          "practical": [
            "Keys/quest flags are often presence-based rather than quantity-based.",
            "AddUnique intentionally makes this first inventory a set-like presence list."
          ],
          "algorithm": [
            "If ItemId.IsNone() → log/return.",
            "Inventory.AddUnique(ItemId).",
            "Log item name and Inventory.Num()."
          ],
          "review": [
            {
              "term": "NAME_None",
              "text": "Special empty/no-name FName value."
            },
            {
              "term": "ItemId.IsNone()",
              "text": "Returns true when the FName has no meaningful identifier."
            },
            {
              "term": "AddUnique",
              "text": "Adds the element only if an equal element is not already present."
            },
            {
              "term": "Num()",
              "text": "Returns the current number of array elements."
            }
          ],
          "steps": [
            {
              "title": "Implement AddItem",
              "where": "L4CppTrainingCharacter.cpp",
              "doList": [
                "Create AL4CppTrainingCharacter::AddItem(FName ItemId).",
                "Guard against ItemId.IsNone().",
                "Call Inventory.AddUnique(ItemId).",
                "Log the item text and Inventory.Num().",
                "Save."
              ],
              "code": [
                {
                  "title": "AddItem implementation",
                  "content": "void AL4CppTrainingCharacter::AddItem(FName ItemId)\n{\n    if (ItemId.IsNone())\n    {\n        UE_LOG(LogTemp, Warning, TEXT(\"Cannot add NAME_None to inventory\"));\n        return;\n    }\n\n    Inventory.AddUnique(ItemId);\n\n    UE_LOG(\n        LogTemp,\n        Warning,\n        TEXT(\"Added %s. Inventory count = %d\"),\n        *ItemId.ToString(),\n        Inventory.Num()\n    );\n}"
                }
              ],
              "codeRead": {
                "items": [
                  {
                    "token": "ItemId.IsNone()",
                    "meaning": "Call an FName function that asks whether this ID is NAME_None/empty."
                  },
                  {
                    "token": "Inventory.AddUnique(ItemId)",
                    "meaning": "Add ItemId only when it is not already in the array."
                  },
                  {
                    "token": "Inventory.Num()",
                    "meaning": "Read the number of elements currently in the array."
                  },
                  {
                    "token": "ItemId.ToString()",
                    "meaning": "Convert FName to FString for readable logging."
                  }
                ]
              },
              "check": "AddItem validates, adds uniquely and logs the count.",
              "why": "Centralising the rule prevents invalid/duplicate IDs from being added by different pickups.",
              "codeGuide": {
                "file": "L4CppTrainingCharacter.cpp",
                "find": "New file-scope function: AL4CppTrainingCharacter::AddItem(FName ItemId)",
                "action": "ADD FUNCTION DEFINITION",
                "place": "Add the function below existing Character function definitions, not inside the constructor, input setup or another function.",
                "after": "Save and compile."
              }
            }
          ],
          "test": [
            "AddItem compiles.",
            "NAME_None path returns without adding.",
            "Valid FName adds to the array.",
            "Duplicate AddUnique does not create a second entry."
          ],
          "doneWhen": "The Character has a safe item-add operation.",
          "common": [
            "AddUnique means this is not yet a quantity inventory; two Coins still result in one Coin ID.",
            "Do not use Inventory.Add directly if you want presence semantics for this mission."
          ]
        },
        {
          "id": "has-item",
          "number": 3,
          "title": "HasItem — Query the Array with Contains",
          "goal": "Implement a one-line query that reports whether the inventory contains a specific FName.",
          "why": "Doors should ask a readable question rather than loop through or directly inspect the Character's array themselves.",
          "concept": "Contains is a TArray query. It returns true when an equal element is present and false otherwise.",
          "practical": [
            "HasItem(ExitKey) will become the locked-door decision.",
            "The same function can be reused by quests, containers or UI later."
          ],
          "algorithm": [
            "Receive ItemId.",
            "Return Inventory.Contains(ItemId)."
          ],
          "review": [
            {
              "term": "Contains",
              "text": "TArray function returning whether an element exists."
            },
            {
              "term": "return Inventory.Contains(...)",
              "text": "Directly return the Boolean produced by Contains."
            },
            {
              "term": "const function",
              "text": "Safe query that does not modify the Character."
            }
          ],
          "steps": [
            {
              "title": "Implement HasItem",
              "where": "L4CppTrainingCharacter.cpp",
              "doList": [
                "Add the function implementation.",
                "Return Inventory.Contains(ItemId);.",
                "Save."
              ],
              "code": [
                {
                  "title": "HasItem",
                  "content": "bool AL4CppTrainingCharacter::HasItem(FName ItemId) const\n{\n    return Inventory.Contains(ItemId);\n}"
                }
              ],
              "codeRead": {
                "items": [
                  {
                    "token": "Inventory.Contains(ItemId)",
                    "meaning": "Search the array for an element equal to ItemId and produce true/false."
                  },
                  {
                    "token": "return",
                    "meaning": "Send that true/false result back to the caller."
                  }
                ],
                "note": "This is intentionally tiny. Good functions do not need to be long to be valuable."
              },
              "check": "HasItem expresses the inventory question in one readable line.",
              "why": "Other gameplay code can depend on the function name rather than the TArray implementation.",
              "codeGuide": {
                "file": "L4CppTrainingCharacter.cpp",
                "find": "New file-scope function: bool AL4CppTrainingCharacter::HasItem(FName ItemId) const",
                "action": "ADD FUNCTION DEFINITION",
                "place": "Add it directly below AddItem() for readability.",
                "after": "Save and compile."
              }
            }
          ],
          "test": [
            "HasItem is const.",
            "It returns bool.",
            "It uses Contains."
          ],
          "doneWhen": "Other classes can ask the Character whether an item ID exists.",
          "common": [
            "Do not duplicate Contains loops in every door/pickup.",
            "Do not change state inside HasItem."
          ]
        },
        {
          "id": "remove-item",
          "number": 4,
          "title": "RemoveItem — Turn TArray's Result into a Boolean",
          "goal": "Remove an item and report whether removal happened.",
          "why": "Later mechanics may consume keys/items. This also teaches using a function's numeric return value to create your own Boolean result.",
          "concept": "TArray::Remove removes matching elements and returns the number removed. Comparing that count to zero answers 'did anything get removed?'",
          "practical": [
            "Consumable key/quest item behaviour can call RemoveItem.",
            "The caller does not need to know how TArray removal works."
          ],
          "algorithm": [
            "RemovedCount = Inventory.Remove(ItemId).",
            "Return RemovedCount > 0."
          ],
          "review": [
            {
              "term": "const int32 RemovedCount",
              "text": "Local whole-number result that will not be reassigned."
            },
            {
              "term": "Inventory.Remove(ItemId)",
              "text": "Remove matching entries and return how many were removed."
            },
            {
              "term": ">",
              "text": "Greater-than comparison."
            },
            {
              "term": "RemovedCount > 0",
              "text": "Boolean expression true when at least one item was removed."
            }
          ],
          "steps": [
            {
              "title": "Implement RemoveItem",
              "where": "L4CppTrainingCharacter.cpp",
              "doList": [
                "Create const int32 RemovedCount from Inventory.Remove(ItemId).",
                "Return RemovedCount > 0;.",
                "Save."
              ],
              "code": [
                {
                  "title": "RemoveItem",
                  "content": "bool AL4CppTrainingCharacter::RemoveItem(FName ItemId)\n{\n    const int32 RemovedCount = Inventory.Remove(ItemId);\n    return RemovedCount > 0;\n}"
                }
              ],
              "codeRead": {
                "items": [
                  {
                    "token": "Inventory.Remove(ItemId)",
                    "meaning": "Removes matching ItemId entries and returns an int32 count."
                  },
                  {
                    "token": "> 0",
                    "meaning": "Comparison becomes true when at least one match was removed."
                  },
                  {
                    "token": "const int32",
                    "meaning": "Store the result once and do not reassign it."
                  }
                ]
              },
              "check": "RemoveItem converts the array's count result into a simple true/false API.",
              "why": "Callers usually care whether removal succeeded, not the internal count mechanics.",
              "codeGuide": {
                "file": "L4CppTrainingCharacter.cpp",
                "find": "New file-scope function: bool AL4CppTrainingCharacter::RemoveItem(FName ItemId)",
                "action": "ADD FUNCTION DEFINITION",
                "place": "Add it directly below HasItem().",
                "after": "Save and compile."
              }
            }
          ],
          "test": [
            "Existing item can be removed.",
            "Missing item returns false.",
            "The function returns bool."
          ],
          "doneWhen": "The basic inventory can now add, query and remove IDs.",
          "common": [
            "Because AddUnique prevents duplicates, Remove normally removes 0 or 1 in this mission.",
            "A quantity/count inventory comes later with Structs."
          ]
        },
        {
          "id": "print-loop",
          "number": 5,
          "title": "Range-Based for — Print Every Inventory Item",
          "goal": "Implement PrintInventory and learn the beginner anatomy of a range-based for loop and const reference.",
          "why": "Arrays become useful when you can process every element. Logging the contents also gives you a simple debugging tool for later pickup/door tests.",
          "concept": "A range-based for loop visits each element in a container. `const FName& ItemId` means use a read-only reference to each existing FName instead of making a new copy for the loop body.",
          "practical": [
            "The same loop shape appears when processing enemies, objectives, items and components.",
            "PrintInventory lets you verify state without building UI yet."
          ],
          "algorithm": [
            "Log Inventory.Num().",
            "For each ItemId in Inventory → convert to string → log it."
          ],
          "review": [
            {
              "term": "for (... : Inventory)",
              "text": "Range-based loop: repeat once for each array element."
            },
            {
              "term": "const FName& ItemId",
              "text": "Read-only reference to the current array element."
            },
            {
              "term": ":",
              "text": "Inside this for syntax, read it as 'in' or 'from' the Inventory container."
            },
            {
              "term": "&",
              "text": "Here means reference—ItemId refers to the existing array element rather than copying it."
            }
          ],
          "steps": [
            {
              "title": "Implement PrintInventory",
              "where": "L4CppTrainingCharacter.cpp",
              "doList": [
                "Log Inventory.Num().",
                "Add the range-based for loop exactly as shown.",
                "Inside the loop log each ItemId.ToString().",
                "Save/compile."
              ],
              "code": [
                {
                  "title": "PrintInventory",
                  "content": "void AL4CppTrainingCharacter::PrintInventory() const\n{\n    UE_LOG(LogTemp, Warning, TEXT(\"Inventory contains %d item(s)\"), Inventory.Num());\n\n    for (const FName& ItemId : Inventory)\n    {\n        UE_LOG(LogTemp, Warning, TEXT(\"- %s\"), *ItemId.ToString());\n    }\n}"
                }
              ],
              "codeRead": {
                "items": [
                  {
                    "token": "for",
                    "meaning": "Start a loop."
                  },
                  {
                    "token": "const FName& ItemId",
                    "meaning": "For this iteration, ItemId is a read-only reference to the current FName element."
                  },
                  {
                    "token": ": Inventory",
                    "meaning": "Iterate through every element stored in Inventory."
                  },
                  {
                    "token": "{ ... }",
                    "meaning": "Loop body runs once per element."
                  }
                ],
                "note": "You do not need to master references generally yet. In this loop, read `const FName& ItemId` as “the current item, read-only, without copying it.”"
              },
              "check": "PrintInventory logs the count and every FName entry.",
              "why": "You now have both an array-processing pattern and a debugging tool.",
              "codeGuide": {
                "file": "L4CppTrainingCharacter.cpp",
                "find": "New file-scope function: void AL4CppTrainingCharacter::PrintInventory() const",
                "action": "ADD FUNCTION DEFINITION",
                "place": "Add it below RemoveItem(). Keep the entire for loop inside PrintInventory's braces.",
                "after": "Save and compile. Then test via the later pickup/door integration."
              }
            }
          ],
          "test": [
            "Empty inventory logs count 0.",
            "After items are added, every ID is logged.",
            "The loop is read-only."
          ],
          "doneWhen": "You can inspect the full TArray contents at runtime.",
          "common": [
            "Do not remove items from the array inside this same beginner range loop.",
            "The & here is a reference, not the function-address use you saw in AddDynamic."
          ]
        },
        {
          "id": "pickup-id",
          "number": 6,
          "title": "Refactor TrainingPickup — Give Every Pickup an ItemId",
          "goal": "Add an FName ItemId property and change the pickup to communicate specifically with AL4CppTrainingCharacter.",
          "why": "Mission 1's pickup disappeared and logged a score value. Now it will actually change persistent player state before it destroys itself.",
          "concept": "A reusable world pickup should carry data identifying what it represents. ItemId is that small piece of data; the Character still owns the inventory.",
          "practical": [
            "One C++ class can become BP_Key, BP_Coin and other pickups by changing ItemId/mesh.",
            "The pickup does not need its own knowledge of the Inventory array."
          ],
          "algorithm": [
            "Add editable ItemId.",
            "Cast OtherActor to AL4CppTrainingCharacter.",
            "Reject NAME_None.",
            "Call Character->AddItem(ItemId).",
            "Then mark collected/log/destroy."
          ],
          "review": [
            {
              "term": "FName ItemId",
              "text": "Identifier carried by this pickup instance."
            },
            {
              "term": "AL4CppTrainingCharacter*",
              "text": "Pointer to your project-specific Character type, giving access to AddItem/HasItem."
            },
            {
              "term": "Cross-class call",
              "text": "One object calls a public function belonging to another object."
            },
            {
              "term": "Include",
              "text": "TrainingPickup.cpp needs the project Character header to use its functions."
            }
          ],
          "steps": [
            {
              "title": "Add ItemId to TrainingPickup.h",
              "where": "TrainingPickup.h",
              "doList": [
                "Add an EditAnywhere/BlueprintReadWrite FName named ItemId.",
                "Default it to NAME_None.",
                "Keep ItemValue for now; it can remain useful debug/value data."
              ],
              "code": [
                {
                  "title": "Pickup ItemId",
                  "content": "UPROPERTY(EditAnywhere, BlueprintReadWrite, Category=\"Pickup\")\nFName ItemId = NAME_None;"
                }
              ],
              "check": "Each pickup can now identify itself with an FName.",
              "why": "Data distinguishes Key from Coin while behaviour stays in one class.",
              "codeGuide": {
                "file": "TrainingPickup.h",
                "find": "class ATrainingPickup → public: Pickup properties",
                "action": "ADD",
                "place": "Add ItemId directly beside/below ItemValue in the existing public Pickup data section. Do not create a second public: section unless needed.",
                "after": "Save. Because this is a reflected UPROPERTY change, full Build after the related .cpp refactor is complete."
              }
            },
            {
              "title": "Include the project Character",
              "where": "TrainingPickup.cpp → includes",
              "doList": [
                "Add #include \"L4CppTrainingCharacter.h\".",
                "You may remove GameFramework/Character.h from TrainingPickup.cpp if it is no longer otherwise used.",
                "Save."
              ],
              "code": [
                {
                  "title": "Project Character include",
                  "content": "#include \"L4CppTrainingCharacter.h\""
                }
              ],
              "check": "TrainingPickup.cpp knows the full project Character type.",
              "why": "It needs access to AddItem.",
              "codeGuide": {
                "file": "TrainingPickup.cpp",
                "find": "Top include block",
                "action": "ADD / CLEAN UP INCLUDE",
                "place": "Add #include \"L4CppTrainingCharacter.h\" below TrainingPickup.h/component includes. Remove GameFramework/Character.h only if nothing else in this file uses ACharacter.",
                "after": "Save. No compile until the callback cast/refactor below is complete."
              }
            },
            {
              "title": "Replace the generic Character cast",
              "where": "OnCollectionSphereBeginOverlap",
              "doList": [
                "Change ACharacter* to AL4CppTrainingCharacter*.",
                "Cast<AL4CppTrainingCharacter>(OtherActor).",
                "Keep the null guard.",
                "Before collection success, guard against ItemId.IsNone().",
                "Call Character->AddItem(ItemId).",
                "Then continue with bCollected/log/Destroy."
              ],
              "code": [
                {
                  "title": "Inventory-aware pickup success path",
                  "content": "AL4CppTrainingCharacter* Character =\n    Cast<AL4CppTrainingCharacter>(OtherActor);\n\nif (!Character)\n{\n    return;\n}\n\nif (ItemId.IsNone())\n{\n    UE_LOG(LogTemp, Warning, TEXT(\"%s has no ItemId\"), *GetName());\n    return;\n}\n\nCharacter->AddItem(ItemId);\n\nbCollected = true;\n\nUE_LOG(\n    LogTemp,\n    Warning,\n    TEXT(\"%s collected item %s\"),\n    *Character->GetName(),\n    *ItemId.ToString()\n);\n\nDestroy();"
                }
              ],
              "codeRead": {
                "items": [
                  {
                    "token": "AL4CppTrainingCharacter*",
                    "meaning": "Pointer type for your specific template Character class."
                  },
                  {
                    "token": "Character->AddItem(ItemId)",
                    "meaning": "Call the Character's public inventory function through its pointer."
                  },
                  {
                    "token": "ItemId.IsNone()",
                    "meaning": "Reject pickup instances that were not configured with an ID."
                  }
                ]
              },
              "check": "Pickup collection adds the ID to Character state before destroying the world Actor.",
              "why": "The pickup becomes a producer of inventory state rather than the owner of it.",
              "codeGuide": {
                "file": "TrainingPickup.cpp",
                "find": "ATrainingPickup::OnCollectionSphereBeginOverlap(...)",
                "action": "REPLACE PART OF FUNCTION BODY",
                "place": "KEEP the initial bCollected/OtherActor guard. Replace the old ACharacter cast/null-check and old success block with the supplied AL4CppTrainingCharacter + ItemId + AddItem version.",
                "after": "Save All. Because TrainingPickup.h changed too, close Unreal, full Build Development Editor / Win64, reopen and test BP_Coin/BP_Key."
              }
            }
          ],
          "test": [
            "NAME_None pickup refuses to disappear/add.",
            "Configured pickup calls AddItem.",
            "Pickup destroys after successful add."
          ],
          "doneWhen": "TrainingPickup now feeds the Character inventory.",
          "common": [
            "If AL4CppTrainingCharacter is unknown, confirm the include/file/class name generated by your Third Person project.",
            "If your project name/class differs because you ignored the required L4CppTraining name, adapt deliberately rather than guessing."
          ]
        },
        {
          "id": "pickup-children",
          "number": 7,
          "title": "Create BP_Key and BP_Coin — Same C++ Class, Different Data",
          "goal": "Create two Blueprint children with different ItemIds and prove AddUnique/HasItem distinguish them.",
          "why": "This is the data-driven benefit of the reusable C++ base: gameplay code is shared while instances/classes carry different configuration.",
          "concept": "The C++ TrainingPickup defines collection behaviour. Blueprint children configure mesh/material/ItemId/ItemValue without duplicating the event code.",
          "practical": [
            "BP_Key can unlock the door.",
            "BP_Coin deliberately should not unlock it.",
            "Testing both prevents a false-positive design where the door opens for any inventory item."
          ],
          "algorithm": [
            "Create BP_Key parent TrainingPickup → ItemId ExitKey.",
            "Create BP_Coin parent TrainingPickup → ItemId Coin.",
            "Collect Coin.",
            "Collect Key.",
            "Inspect logs/count."
          ],
          "review": [
            {
              "term": "ExitKey",
              "text": "FName identifier used consistently by key pickup and door requirement."
            },
            {
              "term": "Coin",
              "text": "Different FName used as a negative test for the door."
            },
            {
              "term": "Configuration",
              "text": "Data values chosen in Blueprint while native behaviour remains inherited."
            }
          ],
          "steps": [
            {
              "title": "Create BP_Key",
              "where": "Content Drawer → Blueprint based on TrainingPickup",
              "doList": [
                "Create BP_Key.",
                "Assign a visible key-ish/test mesh/material.",
                "Set ItemId = ExitKey.",
                "Set ItemValue = 0 or another value of your choice.",
                "Save."
              ],
              "check": "BP_Key inherits C++ collection but carries ExitKey data.",
              "why": "Key identity is data, not a new overlap implementation."
            },
            {
              "title": "Create BP_Coin",
              "where": "Content Drawer → Blueprint based on TrainingPickup",
              "doList": [
                "Create BP_Coin.",
                "Assign a visibly different mesh/material.",
                "Set ItemId = Coin.",
                "Save."
              ],
              "check": "BP_Coin uses the same C++ class with a different FName.",
              "why": "You can now test item-specific logic."
            },
            {
              "title": "Test collection order",
              "where": "LV_CPPTraining → Play",
              "doList": [
                "Place Coin and Key apart.",
                "Collect Coin first and read AddItem log/count.",
                "Collect Key and read log/count.",
                "Place/collect a second Coin and confirm AddUnique does not increase the array count for duplicate Coin.",
                "Stop Play."
              ],
              "check": "Inventory contains unique Coin and ExitKey IDs.",
              "why": "This proves TArray operations before the door starts depending on them."
            }
          ],
          "test": [
            "Coin and ExitKey are distinct FNames.",
            "Duplicate Coin does not duplicate array entry.",
            "Key adds ExitKey."
          ],
          "doneWhen": "Two Blueprint pickup variants feed one native inventory system.",
          "common": [
            "If both children add the same ID, check their ItemId defaults.",
            "AddUnique's no-duplicate behaviour is intentional in this simple presence inventory."
          ]
        },
        {
          "id": "door-key",
          "number": 8,
          "title": "Upgrade TrainingDoor — Require a Specific Inventory Item",
          "goal": "Add RequiredItem to the door and refactor its overlap decision to unlock only when the Character HasItem(RequiredItem).",
          "why": "This is the payoff of separating functions in Mission 2: movement remains untouched; only the condition/communication layer changes.",
          "concept": "The door owns its requirement data but not the inventory. It asks the Character's HasItem API. If the required ID is present, the door calls its existing SetLocked(false) and OpenDoor path.",
          "practical": [
            "Different doors can require different item IDs.",
            "A Coin will not satisfy a door configured for ExitKey.",
            "The door never loops through Inventory itself."
          ],
          "algorithm": [
            "Door has RequiredItem = ExitKey.",
            "On Character overlap, if locked → ask HasItem(RequiredItem).",
            "If false → log/return.",
            "If true → SetLocked(false).",
            "Then reuse CanOpenDoor() and OpenDoor()."
          ],
          "review": [
            {
              "term": "RequiredItem",
              "text": "Door configuration data describing which FName unlocks it."
            },
            {
              "term": "Character->HasItem(...)",
              "text": "Cross-class query through the Character's public API."
            },
            {
              "term": "Single responsibility",
              "text": "Door decides requirements/movement; Character owns inventory storage/search."
            }
          ],
          "steps": [
            {
              "title": "Add RequiredItem to TrainingDoor.h",
              "where": "TrainingDoor.h → public state",
              "doList": [
                "Add an EditAnywhere/BlueprintReadWrite FName RequiredItem.",
                "Default it to ExitKey using TEXT or FName construction as shown.",
                "Save."
              ],
              "code": [
                {
                  "title": "Door requirement",
                  "content": "UPROPERTY(EditAnywhere, BlueprintReadWrite, Category=\"Door|Lock\")\nFName RequiredItem = FName(TEXT(\"ExitKey\"));"
                }
              ],
              "codeRead": {
                "items": [
                  {
                    "token": "Category=\"Door|Lock\"",
                    "meaning": "The | creates a nested-style Details category grouping such as Door → Lock."
                  },
                  {
                    "token": "FName(TEXT(\"ExitKey\"))",
                    "meaning": "Construct an FName whose identifier text is ExitKey."
                  }
                ]
              },
              "check": "Each door instance can specify an item ID requirement.",
              "why": "Requirement is data rather than a hard-coded comparison hidden deep in the callback.",
              "codeGuide": {
                "file": "TrainingDoor.h",
                "find": "class ATrainingDoor → public: Door lock/state properties",
                "action": "ADD",
                "place": "Add RequiredItem near bIsLocked/OpenOffset, not outside the class and not in the include section.",
                "after": "Save. Full Build after the .cpp cast/query refactor below."
              }
            },
            {
              "title": "Include the project Character",
              "where": "TrainingDoor.cpp",
              "doList": [
                "Add #include \"L4CppTrainingCharacter.h\".",
                "Remove/stop relying on GameFramework/Character.h for the overlap cast if no longer needed.",
                "Save."
              ],
              "check": "TrainingDoor can call HasItem on your project Character.",
              "why": "A generic ACharacter does not know about the inventory functions you added."
            },
            {
              "title": "Refactor BeginOverlap lock decision",
              "where": "TrainingDoor.cpp → OnTriggerBeginOverlap",
              "doList": [
                "Cast OtherActor to AL4CppTrainingCharacter.",
                "Return if invalid.",
                "If bIsLocked, check Character->HasItem(RequiredItem).",
                "If false, log required item and return.",
                "If true, call SetLocked(false).",
                "Then reuse if (CanOpenDoor()) OpenDoor()."
              ],
              "code": [
                {
                  "title": "Key-aware door decision",
                  "content": "AL4CppTrainingCharacter* Character =\n    Cast<AL4CppTrainingCharacter>(OtherActor);\n\nif (!Character)\n{\n    return;\n}\n\nif (bIsLocked)\n{\n    if (!Character->HasItem(RequiredItem))\n    {\n        UE_LOG(\n            LogTemp,\n            Warning,\n            TEXT(\"%s requires %s\"),\n            *GetName(),\n            *RequiredItem.ToString()\n        );\n        return;\n    }\n\n    SetLocked(false);\n}\n\nif (CanOpenDoor())\n{\n    OpenDoor();\n}"
                }
              ],
              "codeRead": {
                "items": [
                  {
                    "token": "Character->HasItem(RequiredItem)",
                    "meaning": "Ask the Character inventory whether the exact required FName exists."
                  },
                  {
                    "token": "if (!Character->HasItem(...))",
                    "meaning": "If the answer is false, reject the open attempt."
                  },
                  {
                    "token": "SetLocked(false)",
                    "meaning": "Reuse Mission 2's named function rather than directly assigning bIsLocked in this callback."
                  },
                  {
                    "token": "CanOpenDoor()",
                    "meaning": "Movement decision still uses the existing query after unlocking."
                  }
                ]
              },
              "check": "The overlap callback now depends on the Character API without touching Inventory directly.",
              "why": "This is clean class-to-class gameplay communication.",
              "codeGuide": {
                "file": "TrainingDoor.cpp",
                "find": "ATrainingDoor::OnTriggerBeginOverlap(...)",
                "action": "REPLACE FUNCTION BODY",
                "place": "KEEP the existing function signature. Replace the Mission 2 ACharacter/locked-body logic with the complete key-aware body shown here.",
                "after": "Save All, close Unreal, full Build Development Editor / Win64, reopen and test Coin versus ExitKey."
              }
            },
            {
              "title": "Update EndOverlap cast too",
              "where": "TrainingDoor.cpp → OnTriggerEndOverlap",
              "doList": [
                "Change the validation cast to AL4CppTrainingCharacter for consistency.",
                "Keep CloseDoor() after a successful cast.",
                "Save/build."
              ],
              "check": "Both door callbacks validate the same project Character type.",
              "why": "The door is now explicitly part of this project's player gameplay system."
            }
          ],
          "test": [
            "Door compiles with RequiredItem.",
            "Without ExitKey it logs the requirement and stays shut.",
            "With ExitKey it calls SetLocked(false) and opens.",
            "Movement functions did not need rewriting."
          ],
          "doneWhen": "The door is genuinely gated by player inventory.",
          "common": [
            "If the door opens after collecting Coin only, check RequiredItem is ExitKey and HasItem receives RequiredItem—not merely Inventory.Num()>0.",
            "If HasItem is unavailable, confirm you are casting to AL4CppTrainingCharacter and included its header."
          ]
        },
        {
          "id": "final",
          "number": 9,
          "title": "Full Gameplay Loop — Coin ≠ Key, Key Unlocks Door",
          "goal": "Run a complete test matrix, inspect inventory logs, optionally consume the key, and independently add one new item/door requirement.",
          "why": "The system is only trustworthy if the negative cases work: wrong item must not unlock the door and a missing item must be handled safely.",
          "concept": "You now have three communicating C++ gameplay classes: Character owns state, Pickup adds state, Door queries state. That is a small but real gameplay architecture.",
          "practical": [
            "This pattern scales to quest items, cards, fuses, switches and progression gates.",
            "Later Struct/Data Table missions can replace raw FName data while preserving the same relationships."
          ],
          "algorithm": [
            "Try door empty.",
            "Collect Coin.",
            "Try door again.",
            "Collect ExitKey.",
            "Try door → unlock/open.",
            "Print inventory.",
            "Adapt one new requirement."
          ],
          "review": [
            {
              "term": "Producer",
              "text": "TrainingPickup produces/adds item state."
            },
            {
              "term": "Owner",
              "text": "AL4CppTrainingCharacter stores and manages inventory."
            },
            {
              "term": "Consumer/query user",
              "text": "TrainingDoor asks whether required state exists."
            },
            {
              "term": "Integration test",
              "text": "Test several classes together through the actual gameplay sequence."
            }
          ],
          "checkpointCode": [
            {
              "title": "Character inventory functions — L4CppTrainingCharacter.cpp",
              "content": "void AL4CppTrainingCharacter::AddItem(FName ItemId)\n{\n    if (ItemId.IsNone())\n    {\n        UE_LOG(LogTemp, Warning, TEXT(\"Cannot add NAME_None to inventory\"));\n        return;\n    }\n\n    Inventory.AddUnique(ItemId);\n\n    UE_LOG(\n        LogTemp,\n        Warning,\n        TEXT(\"Added %s. Inventory count = %d\"),\n        *ItemId.ToString(),\n        Inventory.Num()\n    );\n}\n\nbool AL4CppTrainingCharacter::HasItem(FName ItemId) const\n{\n    return Inventory.Contains(ItemId);\n}\n\nbool AL4CppTrainingCharacter::RemoveItem(FName ItemId)\n{\n    const int32 RemovedCount = Inventory.Remove(ItemId);\n    return RemovedCount > 0;\n}\n\nvoid AL4CppTrainingCharacter::PrintInventory() const\n{\n    UE_LOG(LogTemp, Warning, TEXT(\"Inventory contains %d item(s)\"), Inventory.Num());\n\n    for (const FName& ItemId : Inventory)\n    {\n        UE_LOG(LogTemp, Warning, TEXT(\"- %s\"), *ItemId.ToString());\n    }\n}"
            }
          ],
          "steps": [
            {
              "title": "Run the negative/positive test matrix",
              "where": "LV_CPPTraining → Play",
              "doList": [
                "Start with no items and enter the locked door trigger: stays locked/logs ExitKey requirement.",
                "Collect BP_Coin.",
                "Try door: still locked.",
                "Collect BP_Key.",
                "Try door: unlocks and opens.",
                "Leave trigger: closes but remains unlocked.",
                "Re-enter: opens without needing another key.",
                "Stop Play."
              ],
              "check": "The door responds to the correct FName, not just any inventory content.",
              "why": "Negative cases prove item-specific logic."
            },
            {
              "title": "Call PrintInventory for debugging",
              "where": "Temporary Blueprint call or Visual Studio debug path",
              "doList": [
                "Because PrintInventory is BlueprintCallable, temporarily call it from a convenient Blueprint event/test path OR call it from AddItem while testing.",
                "Confirm the output lists Coin and ExitKey.",
                "Remove any temporary automatic call if you do not want it permanently."
              ],
              "check": "Runtime logs match the expected TArray contents.",
              "why": "A diagnostic function helps verify state without building UI yet."
            },
            {
              "title": "Optional key consumption",
              "where": "TrainingDoor.cpp key-success path",
              "doList": [
                "If you want a one-use key, after HasItem succeeds call Character->RemoveItem(RequiredItem).",
                "Check the returned Boolean before/while unlocking.",
                "If you want permanent ownership, leave the key in Inventory instead.",
                "Choose one rule and be able to explain it."
              ],
              "code": [
                {
                  "title": "Optional consumption line",
                  "content": "Character->RemoveItem(RequiredItem);"
                }
              ],
              "check": "Your key-consumption rule is deliberate rather than accidental.",
              "why": "Gameplay design determines whether items are ownership flags or consumable resources.",
              "codeGuide": {
                "file": "TrainingDoor.cpp",
                "find": "ATrainingDoor::OnTriggerBeginOverlap(...) → inside the successful key branch",
                "action": "OPTIONAL ADD",
                "place": "ONLY if you choose consumable keys: insert Character->RemoveItem(RequiredItem); AFTER HasItem has succeeded and BEFORE SetLocked(false). Do not add it to the failure branch.",
                "after": "Save and compile, then explicitly test whether the key remains/vanishes according to your chosen rule."
              }
            },
            {
              "title": "Independent transfer challenge",
              "where": "Project",
              "doList": [
                "Create a new Blueprint pickup child with ItemId = Fuse.",
                "Duplicate/configure a TrainingDoor child with RequiredItem = Fuse.",
                "Prove ExitKey does not open the Fuse door.",
                "Collect Fuse and prove it does.",
                "Do not add special-case C++ if the existing data-driven system already supports it."
              ],
              "check": "A new item/door pair works by configuration rather than copied code.",
              "why": "That is the proof the array/API architecture is reusable."
            }
          ],
          "test": [
            "Empty inventory fails correctly.",
            "Coin does not unlock ExitKey door.",
            "ExitKey unlocks it.",
            "Door remains usable after unlock according to your design.",
            "Fuse transfer challenge works without new special-case C++."
          ],
          "doneWhen": "The project contains a working C++ inventory loop connecting Character, pickups and locked doors.",
          "common": [
            "If the key appears in logs but HasItem is false, compare FName spelling exactly (ExitKey vs other IDs).",
            "If you consume the key and then reset bIsLocked manually, the player will need another key—state rules should be deliberate."
          ]
        }
      ]
    },
    {
      "id": "cpp-inventory-component",
      "sequence": 4,
      "displaySequence": "4",
      "requiresMission": "cpp-arrays-inventory",
      "discipline": "Unreal C++",
      "icon": "C++",
      "title": "Reusable Actor Components & Events — Extract Inventory",
      "subtitle": "Refactor the working inventory out of AL4CppTrainingCharacter into a reusable UInventoryComponent, broadcast an inventory-changed event, then update pickups and doors to communicate through the component.",
      "duration": "4–5 hours",
      "difficulty": "Guided architecture refactor",
      "summary": "Your inventory works, but the Character is starting to own too many unrelated jobs. Mission 4 teaches composition: create a reusable Actor Component for inventory behaviour, attach it to the Character, broadcast a dynamic multicast delegate when state changes, and refactor the existing pickup/door systems without changing their player-facing behaviour.",
      "guideRule": "Do not delete the old Character inventory until the component version has passed the full gameplay test. Refactor safely: build replacement → connect callers → prove behaviour → remove obsolete code.",
      "skills": [
        "UActorComponent",
        "composition",
        "CreateDefaultSubobject component",
        "private state",
        "getter functions",
        "dynamic multicast delegates",
        "BlueprintAssignable",
        "Broadcast",
        "AddDynamic",
        "component API",
        "safe refactoring"
      ],
      "rules": [
        "Continue the same L4CppTraining project.",
        "Do not skip READ THIS CODE boxes—component/delegate syntax is explained at first use.",
        "The new component owns the TArray; Character owns the component instance.",
        "Keep inventory data private behind functions rather than letting every Actor edit the array.",
        "Refactor one caller at a time and test before removing the old Character implementation.",
        "Mission 4 should end with the same Coin/Key/Door gameplay behaviour as Mission 3, but cleaner architecture."
      ],
      "gameFlow": [
        "Why component?",
        "Create UInventoryComponent",
        "Move array/API",
        "Add delegate",
        "Character owns component",
        "Bind event",
        "Refactor pickup",
        "Refactor door",
        "Delete old Character inventory",
        "Full regression + reuse"
      ],
      "theoryLinks": [
        {
          "label": "Epic UE5.8 — Components",
          "href": "https://dev.epicgames.com/documentation/en-us/unreal-engine/components-in-unreal-engine"
        },
        {
          "label": "Epic UE5.8 — UActorComponent",
          "href": "https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/UActorComponent"
        },
        {
          "label": "Epic UE5.8 — Delegates",
          "href": "https://dev.epicgames.com/documentation/en-us/unreal-engine/delegates-and-lambda-functions-in-unreal-engine"
        },
        {
          "label": "Epic UE5.8 — Dynamic Delegates",
          "href": "https://dev.epicgames.com/documentation/en-us/unreal-engine/dynamic-delegates-in-unreal-engine"
        }
      ],
      "stages": [
        {
          "id": "start",
          "number": 0,
          "title": "Why Refactor? — Character Has Too Many Jobs",
          "goal": "Identify why inventory is a reusable behaviour and plan a safe move from Character-owned array to UInventoryComponent.",
          "why": "Mission 3 deliberately put the first TArray directly on the Character because it was the easiest place to learn ownership. Now that the mechanic works, you can improve the architecture without changing the game.",
          "concept": "Composition means building an Actor from reusable components instead of making one class own every system. UActorComponent is designed for reusable non-physical behaviours; inventory is a strong example because it has no world transform of its own.",
          "practical": [
            "The same InventoryComponent could later be added to an NPC, chest or different player Character.",
            "Character code becomes easier to read because movement/input and inventory implementation are separated.",
            "Pickup and door can depend on the inventory component API instead of the Character's raw array."
          ],
          "algorithm": [
            "Build UInventoryComponent while old Character inventory still works.",
            "Move/copy array functions into the component.",
            "Add component instance to Character.",
            "Refactor pickup to call component AddItem.",
            "Refactor door to call component HasItem.",
            "Run full regression test.",
            "Only then delete old Character inventory/functions."
          ],
          "review": [
            {
              "term": "Composition",
              "text": "Build functionality by giving an Actor components, rather than forcing all behaviour into the Actor class itself."
            },
            {
              "term": "UActorComponent",
              "text": "Reusable component for non-spatial behaviour such as inventory, attributes or logic."
            },
            {
              "term": "Refactor",
              "text": "Improve code structure while preserving intended external behaviour."
            },
            {
              "term": "Regression test",
              "text": "Re-test previously working behaviour after structural changes."
            }
          ],
          "steps": [
            {
              "title": "Audit the Character",
              "where": "L4CppTrainingCharacter.h/.cpp",
              "doList": [
                "Find Inventory TArray.",
                "Find AddItem, HasItem, RemoveItem and PrintInventory.",
                "Notice movement/camera/input code also lives in the Character.",
                "Do not delete the inventory code yet."
              ],
              "check": "You can identify the inventory behaviour that will move.",
              "why": "Refactoring starts by identifying a coherent responsibility."
            },
            {
              "title": "State the safety rule",
              "where": "Notes / verbal check",
              "doList": [
                "Replacement first.",
                "Callers second.",
                "Full test third.",
                "Delete old implementation last."
              ],
              "check": "You can explain why deleting first would make debugging harder.",
              "why": "Safe incremental refactors preserve a working reference point."
            }
          ],
          "test": [
            "Mission 3 gameplay still works.",
            "You can explain why inventory fits an ActorComponent.",
            "Old Character inventory remains intact for now."
          ],
          "doneWhen": "You have a clear safe refactor plan.",
          "common": [
            "Do not rewrite pickup, door and Character simultaneously before the component itself compiles.",
            "Refactoring is not an excuse to change gameplay rules at the same time."
          ]
        },
        {
          "id": "create-component",
          "number": 1,
          "title": "Create UInventoryComponent",
          "goal": "Create an Actor Component C++ class and understand why its prefix/lifecycle differ from AActor.",
          "why": "This is your first authored reusable non-Actor gameplay class.",
          "concept": "UActorComponent inherits from UObject rather than AActor, so it cannot be placed independently in a level and has no transform. An Actor owns component instances.",
          "practical": [
            "Character will create one InventoryComponent.",
            "The component can later be reused by other Actor classes.",
            "It does not need Tick for this inventory system."
          ],
          "algorithm": [
            "Tools → New C++ Class.",
            "Choose Actor Component (or Show All Classes → ActorComponent).",
            "Name InventoryComponent.",
            "Compile untouched class.",
            "Inspect UInventoryComponent inheritance."
          ],
          "review": [
            {
              "term": "U prefix",
              "text": "Unreal naming prefix used for UObject-derived classes such as components."
            },
            {
              "term": "UActorComponent",
              "text": "Base class for reusable Actor-owned behaviour without a transform."
            },
            {
              "term": "AActor vs UActorComponent",
              "text": "Actor can exist in the world; ActorComponent belongs to an Actor."
            },
            {
              "term": "PrimaryComponentTick",
              "text": "Component equivalent of Actor tick configuration."
            }
          ],
          "steps": [
            {
              "title": "Generate InventoryComponent",
              "where": "Unreal Editor → Tools → New C++ Class",
              "doList": [
                "Choose Actor Component if shown in Common Classes.",
                "If not, use All Classes and search ActorComponent.",
                "Name the class InventoryComponent.",
                "Create it in the L4CppTraining project module.",
                "Wait for InventoryComponent.h/.cpp to be generated and open them in Visual Studio.",
                "Do not edit the generated class yet.",
                "Save All and close Unreal Editor.",
                "Set Development Editor / Win64.",
                "Build L4CppTraining and wait for 0 failed.",
                "Reopen Unreal.",
                "Content Drawer → Settings → Show C++ Classes.",
                "Confirm InventoryComponent appears under C++ Classes → L4CppTraining or in Tools → Class Viewer.",
                "Only then edit the component constructor."
              ],
              "check": "UInventoryComponent builds untouched with 0 failed and is registered with Unreal.",
              "why": "A clean registration build separates native component/toolchain problems from the inventory logic added afterwards."
            },
            {
              "title": "Disable unnecessary component Tick",
              "where": "InventoryComponent.cpp → constructor",
              "doList": [
                "Set PrimaryComponentTick.bCanEverTick = false;.",
                "Save/compile."
              ],
              "code": [
                {
                  "title": "Component constructor",
                  "content": "UInventoryComponent::UInventoryComponent()\n{\n    PrimaryComponentTick.bCanEverTick = false;\n}"
                }
              ],
              "codeRead": {
                "items": [
                  {
                    "token": "UInventoryComponent::UInventoryComponent()",
                    "meaning": "Constructor belonging to the UObject-derived InventoryComponent class."
                  },
                  {
                    "token": "PrimaryComponentTick",
                    "meaning": "Component tick settings; equivalent idea to PrimaryActorTick on Actors."
                  },
                  {
                    "token": "false",
                    "meaning": "This inventory has no per-frame work, so Tick is disabled."
                  }
                ]
              },
              "check": "InventoryComponent does not Tick.",
              "why": "Non-spatial event-driven inventory has no reason to update every frame.",
              "codeGuide": {
                "file": "InventoryComponent.cpp",
                "find": "UInventoryComponent::UInventoryComponent()",
                "action": "EDIT EXISTING LINE",
                "place": "Inside the generated component constructor, find PrimaryComponentTick.bCanEverTick and set it to false. Do not replace the entire generated file.",
                "after": "Save and compile."
              }
            }
          ],
          "test": [
            "InventoryComponent.h/.cpp exist.",
            "UInventoryComponent derives from UActorComponent.",
            "The untouched class full-builds with 0 failed and appears in Unreal's native class views.",
            "Tick is disabled after the constructor edit."
          ],
          "doneWhen": "The reusable component class exists.",
          "common": [
            "Do not choose SceneComponent—inventory has no position/rotation.",
            "Do not create a separate Inventory Actor just to store non-spatial behaviour.",
            "Do not expect InventoryComponent to appear as an ordinary .uasset in Content.",
            "If the native component class is absent after restart, fix the full build/load state before continuing."
          ]
        },
        {
          "id": "component-header",
          "number": 2,
          "title": "Component Header — Move the Inventory Contract",
          "goal": "Declare the private TArray and public inventory API inside UInventoryComponent.",
          "why": "The component should own both inventory state and the functions that enforce its rules.",
          "concept": "Encapsulation keeps data private and exposes named operations. Other classes should ask AddItem/HasItem rather than edit the array.",
          "practical": [
            "The component can change its internal representation later without forcing every caller to change.",
            "GetItemCount provides a simple read-only count without exposing the array itself."
          ],
          "algorithm": [
            "Declare public functions.",
            "Declare BlueprintAssignable event placeholder later.",
            "Keep Inventory private.",
            "Use AllowPrivateAccess metadata only so Blueprint reflection can expose it read-only if required."
          ],
          "review": [
            {
              "term": "Encapsulation",
              "text": "Hide internal data and expose controlled functions for interacting with it."
            },
            {
              "term": "private TArray",
              "text": "Only UInventoryComponent directly edits Inventory."
            },
            {
              "term": "GetItemCount",
              "text": "Query returning Inventory.Num() without exposing array mutation."
            }
          ],
          "checkpointCode": [
            {
              "title": "InventoryComponent.h — stage checkpoint before events",
              "content": "#pragma once\n\n#include \"CoreMinimal.h\"\n#include \"Components/ActorComponent.h\"\n#include \"InventoryComponent.generated.h\"\n\nUCLASS(ClassGroup=(Custom), meta=(BlueprintSpawnableComponent))\nclass L4CPPTRAINING_API UInventoryComponent : public UActorComponent\n{\n    GENERATED_BODY()\n\npublic:\n    UInventoryComponent();\n\n    UFUNCTION(BlueprintCallable, Category=\"Inventory\")\n    bool AddItem(FName ItemId);\n\n    UFUNCTION(BlueprintPure, Category=\"Inventory\")\n    bool HasItem(FName ItemId) const;\n\n    UFUNCTION(BlueprintCallable, Category=\"Inventory\")\n    bool RemoveItem(FName ItemId);\n\n    UFUNCTION(BlueprintCallable, Category=\"Inventory\")\n    void PrintInventory() const;\n\n    UFUNCTION(BlueprintPure, Category=\"Inventory\")\n    int32 GetItemCount() const;\n\nprivate:\n    UPROPERTY(\n        VisibleAnywhere,\n        BlueprintReadOnly,\n        Category=\"Inventory\",\n        meta=(AllowPrivateAccess=\"true\")\n    )\n    TArray<FName> Inventory;\n};"
            }
          ],
          "steps": [
            {
              "title": "Declare the public inventory functions",
              "where": "InventoryComponent.h → public section",
              "doList": [
                "Add bool AddItem(FName ItemId).",
                "Add bool HasItem(FName ItemId) const.",
                "Add bool RemoveItem(FName ItemId).",
                "Add void PrintInventory() const.",
                "Add int32 GetItemCount() const.",
                "Add the BlueprintCallable/Pure specifiers shown in the checkpoint."
              ],
              "code": [
                {
                  "title": "Component API",
                  "content": "UFUNCTION(BlueprintCallable, Category=\"Inventory\")\nbool AddItem(FName ItemId);\n\nUFUNCTION(BlueprintPure, Category=\"Inventory\")\nbool HasItem(FName ItemId) const;\n\nUFUNCTION(BlueprintCallable, Category=\"Inventory\")\nbool RemoveItem(FName ItemId);\n\nUFUNCTION(BlueprintCallable, Category=\"Inventory\")\nvoid PrintInventory() const;\n\nUFUNCTION(BlueprintPure, Category=\"Inventory\")\nint32 GetItemCount() const;"
                }
              ],
              "check": "The component has a complete public API without exposing mutation details.",
              "why": "Other systems can depend on function names rather than array implementation.",
              "codeGuide": {
                "file": "InventoryComponent.h",
                "find": "class UInventoryComponent → public: section",
                "action": "ADD",
                "place": "Add the five UFUNCTION declarations below UInventoryComponent(); and before private:. Do not remove generated component declarations.",
                "after": "Save. Do not build yet—the implementations are added in Stage 3."
              }
            },
            {
              "title": "Move the TArray declaration to private",
              "where": "InventoryComponent.h → private section",
              "doList": [
                "Declare TArray<FName> Inventory.",
                "Use VisibleAnywhere + BlueprintReadOnly + Category Inventory.",
                "Add meta=(AllowPrivateAccess=\"true\") exactly as shown.",
                "Do not delete the Character array yet."
              ],
              "code": [
                {
                  "title": "Private inventory state",
                  "content": "UPROPERTY(\n    VisibleAnywhere,\n    BlueprintReadOnly,\n    Category=\"Inventory\",\n    meta=(AllowPrivateAccess=\"true\")\n)\nTArray<FName> Inventory;"
                }
              ],
              "codeRead": {
                "items": [
                  {
                    "token": "private:",
                    "meaning": "Only UInventoryComponent methods can directly access this member in ordinary C++."
                  },
                  {
                    "token": "meta=(AllowPrivateAccess=\"true\")",
                    "meaning": "Allows Unreal's Blueprint reflection to expose the private property according to the specified read-only rule."
                  },
                  {
                    "token": "TArray<FName>",
                    "meaning": "Same simple presence inventory learned in Mission 3, now owned by the component."
                  }
                ]
              },
              "check": "Inventory storage now exists in the new class too.",
              "why": "This is the state being extracted from Character.",
              "codeGuide": {
                "file": "InventoryComponent.h",
                "find": "class UInventoryComponent → private: section",
                "action": "ADD",
                "place": "Add a private: section near the bottom of the class (if one does not already exist) and place the UPROPERTY + TArray inside it, before the class closing };.",
                "after": "Save. Keep the old Character inventory for now."
              }
            }
          ],
          "test": [
            "Component public API is declared.",
            "Inventory is private in component.",
            "Old Character inventory still exists until migration passes."
          ],
          "doneWhen": "The new component contract/state are declared.",
          "common": [
            "Do not make Inventory public simply to make refactoring easier.",
            "The component and Character temporarily both having an array is expected during the safe transition."
          ]
        },
        {
          "id": "move-functions",
          "number": 3,
          "title": "Move the Inventory Logic — Improve AddItem While You Refactor",
          "goal": "Implement the inventory functions inside UInventoryComponent and make AddItem return success instead of silently accepting duplicates.",
          "why": "A refactor can improve the internal API when the behaviour is explicit and tested. Returning bool lets pickups know whether collection actually succeeded.",
          "concept": "The component owns the rules. AddItem returns false for NAME_None or duplicate IDs; true only when the array changes.",
          "practical": [
            "A duplicate unique pickup can remain in the world instead of disappearing if AddItem fails.",
            "Door HasItem logic remains a simple query."
          ],
          "algorithm": [
            "AddItem: validate → reject duplicate → Add → return true.",
            "HasItem: Contains.",
            "RemoveItem: Remove → success bool.",
            "PrintInventory: loop.",
            "GetItemCount: Num."
          ],
          "review": [
            {
              "term": "Success return",
              "text": "bool tells the caller whether the requested state change happened."
            },
            {
              "term": "Inventory.Add",
              "text": "Now safe after an explicit Contains duplicate check."
            },
            {
              "term": "<= 0",
              "text": "Comparison used to detect that nothing was removed."
            }
          ],
          "checkpointCode": [
            {
              "title": "InventoryComponent.cpp — core logic before events",
              "content": "#include \"InventoryComponent.h\"\n\nUInventoryComponent::UInventoryComponent()\n{\n    PrimaryComponentTick.bCanEverTick = false;\n}\n\nbool UInventoryComponent::AddItem(FName ItemId)\n{\n    if (ItemId.IsNone())\n    {\n        UE_LOG(LogTemp, Warning, TEXT(\"Inventory rejected NAME_None\"));\n        return false;\n    }\n\n    if (Inventory.Contains(ItemId))\n    {\n        UE_LOG(\n            LogTemp,\n            Warning,\n            TEXT(\"Inventory already contains %s\"),\n            *ItemId.ToString()\n        );\n        return false;\n    }\n\n    Inventory.Add(ItemId);\n    return true;\n}\n\nbool UInventoryComponent::HasItem(FName ItemId) const\n{\n    return Inventory.Contains(ItemId);\n}\n\nbool UInventoryComponent::RemoveItem(FName ItemId)\n{\n    const int32 RemovedCount = Inventory.Remove(ItemId);\n    return RemovedCount > 0;\n}\n\nvoid UInventoryComponent::PrintInventory() const\n{\n    UE_LOG(\n        LogTemp,\n        Warning,\n        TEXT(\"Inventory contains %d item(s)\"),\n        Inventory.Num()\n    );\n\n    for (const FName& ItemId : Inventory)\n    {\n        UE_LOG(LogTemp, Warning, TEXT(\"- %s\"), *ItemId.ToString());\n    }\n}\n\nint32 UInventoryComponent::GetItemCount() const\n{\n    return Inventory.Num();\n}"
            }
          ],
          "steps": [
            {
              "title": "Implement AddItem/HasItem",
              "where": "InventoryComponent.cpp",
              "doList": [
                "Reject NAME_None with false.",
                "Reject duplicate Contains with false.",
                "Call Inventory.Add(ItemId).",
                "For now leave the Broadcast line in the checkpoint until the next stage or add it after declaring the delegate.",
                "Return true.",
                "Implement HasItem with Contains."
              ],
              "code": [
                {
                  "title": "Core AddItem decision",
                  "content": "if (ItemId.IsNone())\n{\n    return false;\n}\n\nif (Inventory.Contains(ItemId))\n{\n    return false;\n}\n\nInventory.Add(ItemId);\nreturn true;"
                }
              ],
              "check": "AddItem only reports true when the component state changes.",
              "why": "Callers can make correct decisions based on actual success.",
              "codeGuide": {
                "file": "InventoryComponent.cpp",
                "find": "File scope below UInventoryComponent constructor",
                "action": "ADD FUNCTION DEFINITIONS",
                "place": "Add complete UInventoryComponent::AddItem(...) and UInventoryComponent::HasItem(...) functions at file scope. Do not paste them inside the constructor.",
                "after": "Save. Continue Remove/Print/Count before compiling the component API as a whole."
              }
            },
            {
              "title": "Implement Remove/Print/Count",
              "where": "InventoryComponent.cpp",
              "doList": [
                "Move/adapt RemoveItem from Mission 3.",
                "Move PrintInventory loop.",
                "Implement GetItemCount returning Inventory.Num().",
                "Save/compile before adding delegate code."
              ],
              "code": [
                {
                  "title": "GetItemCount",
                  "content": "int32 UInventoryComponent::GetItemCount() const\n{\n    return Inventory.Num();\n}"
                }
              ],
              "check": "The component can perform every operation the Character inventory previously provided.",
              "why": "The replacement must be feature-complete before callers migrate.",
              "codeGuide": {
                "file": "InventoryComponent.cpp",
                "find": "File scope below AddItem()/HasItem()",
                "action": "ADD FUNCTION DEFINITIONS",
                "place": "Add RemoveItem(), PrintInventory() and GetItemCount() as three separate file-scope functions. Use the checkpoint to compare the complete .cpp.",
                "after": "Save and compile. At this point the component core API should work before delegates are introduced."
              }
            }
          ],
          "test": [
            "Component AddItem rejects invalid/duplicate IDs.",
            "HasItem works.",
            "RemoveItem works.",
            "PrintInventory/GetItemCount work."
          ],
          "doneWhen": "Inventory behaviour exists independently of the Character.",
          "common": [
            "Do not delete Character functions yet.",
            "If you copied method bodies, ensure class qualifiers now say UInventoryComponent:: rather than AL4CppTrainingCharacter::."
          ]
        },
        {
          "id": "delegate",
          "number": 4,
          "title": "Events — Broadcast OnInventoryChanged",
          "goal": "Declare a dynamic multicast delegate, expose it as BlueprintAssignable and broadcast it after successful add/remove operations.",
          "why": "Other systems should be able to react when inventory changes without the component knowing every listener.",
          "concept": "A multicast delegate is an event that can have multiple listeners. The inventory component broadcasts 'something changed'; listeners choose what to do.",
          "practical": [
            "UI can refresh after a pickup.",
            "Character can log/debug changes.",
            "Audio/quest systems could listen later without changing AddItem."
          ],
          "algorithm": [
            "Declare delegate type with ItemId/NewCount parameters.",
            "Add OnInventoryChanged property.",
            "After successful Add → Broadcast.",
            "After successful Remove → Broadcast."
          ],
          "review": [
            {
              "term": "DECLARE_DYNAMIC_MULTICAST_DELEGATE_TwoParams",
              "text": "Macro creating a reflected multicast event type with two parameters."
            },
            {
              "term": "BlueprintAssignable",
              "text": "Allows Blueprint to bind event listeners to the delegate."
            },
            {
              "term": "Broadcast",
              "text": "Invoke every function currently bound to the multicast delegate."
            },
            {
              "term": "Loose notification",
              "text": "Broadcaster announces an event without needing to know specific listeners."
            }
          ],
          "steps": [
            {
              "title": "Declare the delegate type",
              "where": "InventoryComponent.h → after includes/before UCLASS",
              "doList": [
                "Add the TwoParams delegate declaration exactly as shown.",
                "Name the type FInventoryChangedSignature.",
                "Parameters: FName ItemId and int32 NewCount.",
                "Do not place this macro inside a function body."
              ],
              "code": [
                {
                  "title": "Delegate type",
                  "content": "DECLARE_DYNAMIC_MULTICAST_DELEGATE_TwoParams(\n    FInventoryChangedSignature,\n    FName, ItemId,\n    int32, NewCount\n);"
                }
              ],
              "codeRead": {
                "items": [
                  {
                    "token": "DECLARE_DYNAMIC_MULTICAST_DELEGATE_TwoParams",
                    "meaning": "Unreal macro that declares a dynamic multicast event signature with two supplied parameters."
                  },
                  {
                    "token": "FInventoryChangedSignature",
                    "meaning": "The new delegate type name."
                  },
                  {
                    "token": "FName, ItemId",
                    "meaning": "First event parameter type/name."
                  },
                  {
                    "token": "int32, NewCount",
                    "meaning": "Second event parameter type/name."
                  }
                ],
                "note": "Do not memorise the macro name. Learn the idea: define an event type and the data listeners receive."
              },
              "check": "The header defines a delegate signature before the component class.",
              "why": "The class can now own an instance of that event type.",
              "codeGuide": {
                "file": "InventoryComponent.h",
                "find": "After #include \"InventoryComponent.generated.h\" and BEFORE UCLASS()",
                "action": "ADD",
                "place": "Add the DECLARE_DYNAMIC_MULTICAST_DELEGATE_TwoParams macro at header/global scope. Do not put it inside UInventoryComponent or inside a function.",
                "after": "Save. Do not full Build until the delegate property/broadcast changes are also complete."
              }
            },
            {
              "title": "Expose OnInventoryChanged",
              "where": "InventoryComponent.h → public section",
              "doList": [
                "Add UPROPERTY(BlueprintAssignable, Category=\"Inventory\").",
                "Declare FInventoryChangedSignature OnInventoryChanged;.",
                "Save."
              ],
              "code": [
                {
                  "title": "Delegate property",
                  "content": "UPROPERTY(BlueprintAssignable, Category=\"Inventory\")\nFInventoryChangedSignature OnInventoryChanged;"
                }
              ],
              "check": "The component owns a Blueprint-bindable inventory event.",
              "why": "Listeners can subscribe without inventory knowing them.",
              "codeGuide": {
                "file": "InventoryComponent.h",
                "find": "class UInventoryComponent → public: section",
                "action": "ADD",
                "place": "Add the BlueprintAssignable UPROPERTY and OnInventoryChanged declaration directly below UInventoryComponent(); and before the inventory UFUNCTION declarations.",
                "after": "Save. Continue broadcast edits."
              }
            },
            {
              "title": "Broadcast after successful state changes",
              "where": "InventoryComponent.cpp",
              "doList": [
                "After Inventory.Add(ItemId), call OnInventoryChanged.Broadcast(ItemId, Inventory.Num()).",
                "After successful RemoveItem, call the same Broadcast before returning true.",
                "Do not Broadcast for rejected duplicates/missing removals.",
                "Save/full build if reflection changes require it."
              ],
              "code": [
                {
                  "title": "Broadcast",
                  "content": "OnInventoryChanged.Broadcast(ItemId, Inventory.Num());"
                }
              ],
              "codeRead": {
                "items": [
                  {
                    "token": ".Broadcast(...)",
                    "meaning": "Call every listener bound to this multicast delegate."
                  },
                  {
                    "token": "ItemId",
                    "meaning": "Tell listeners which identifier was involved."
                  },
                  {
                    "token": "Inventory.Num()",
                    "meaning": "Tell listeners the new total count."
                  }
                ]
              },
              "check": "Only successful inventory changes broadcast events.",
              "why": "Listeners receive meaningful change notifications rather than failed attempts.",
              "codeGuide": {
                "file": "InventoryComponent.cpp",
                "find": "UInventoryComponent::AddItem(...) and UInventoryComponent::RemoveItem(...)",
                "action": "ADD TO TWO EXISTING FUNCTIONS",
                "place": "In AddItem(), insert Broadcast immediately AFTER Inventory.Add(ItemId) and BEFORE return true. In RemoveItem(), insert Broadcast only AFTER confirming RemovedCount > 0 and BEFORE return true.",
                "after": "Save All, close Unreal, full Build Development Editor / Win64 because the delegate/reflection header changed."
              }
            }
          ],
          "test": [
            "Delegate type compiles.",
            "OnInventoryChanged is BlueprintAssignable.",
            "Add/remove success broadcasts.",
            "Rejected operations do not broadcast."
          ],
          "doneWhen": "Inventory state changes can notify external listeners.",
          "common": [
            "Dynamic multicast delegates do not return values; they notify listeners.",
            "If UHT errors occur, keep the DECLARE macro at header/global scope and check commas/parameter pairs."
          ],
          "checkpointCode": [
            {
              "title": "InventoryComponent.h — after adding OnInventoryChanged",
              "content": "#pragma once\n\n#include \"CoreMinimal.h\"\n#include \"Components/ActorComponent.h\"\n#include \"InventoryComponent.generated.h\"\n\nDECLARE_DYNAMIC_MULTICAST_DELEGATE_TwoParams(\n    FInventoryChangedSignature,\n    FName, ItemId,\n    int32, NewCount\n);\n\nUCLASS(ClassGroup=(Custom), meta=(BlueprintSpawnableComponent))\nclass L4CPPTRAINING_API UInventoryComponent : public UActorComponent\n{\n    GENERATED_BODY()\n\npublic:\n    UInventoryComponent();\n\n    UPROPERTY(BlueprintAssignable, Category=\"Inventory\")\n    FInventoryChangedSignature OnInventoryChanged;\n\n    UFUNCTION(BlueprintCallable, Category=\"Inventory\")\n    bool AddItem(FName ItemId);\n\n    UFUNCTION(BlueprintPure, Category=\"Inventory\")\n    bool HasItem(FName ItemId) const;\n\n    UFUNCTION(BlueprintCallable, Category=\"Inventory\")\n    bool RemoveItem(FName ItemId);\n\n    UFUNCTION(BlueprintCallable, Category=\"Inventory\")\n    void PrintInventory() const;\n\n    UFUNCTION(BlueprintPure, Category=\"Inventory\")\n    int32 GetItemCount() const;\n\nprivate:\n    UPROPERTY(\n        VisibleAnywhere,\n        BlueprintReadOnly,\n        Category=\"Inventory\",\n        meta=(AllowPrivateAccess=\"true\")\n    )\n    TArray<FName> Inventory;\n};"
            }
          ]
        },
        {
          "id": "character-component",
          "number": 5,
          "title": "Character Composition — Add InventoryComponent",
          "goal": "Create one UInventoryComponent as a default subobject on AL4CppTrainingCharacter and expose a getter.",
          "why": "The Character should own the component instance while the component owns inventory implementation.",
          "concept": "An Actor Component is created as a default subobject in the owning Actor constructor, just like other native components, but it does not need SetupAttachment because it has no transform.",
          "practical": [
            "Every spawned player Character gets its own inventory component instance.",
            "Other classes can ask Character for its component through a getter."
          ],
          "algorithm": [
            "Forward-declare UInventoryComponent.",
            "Declare component pointer/getter.",
            "Include component header in Character.cpp.",
            "CreateDefaultSubobject in Character constructor.",
            "Return pointer from getter."
          ],
          "review": [
            {
              "term": "Default subobject",
              "text": "Native component automatically created as part of every Character instance."
            },
            {
              "term": "No SetupAttachment",
              "text": "UActorComponent has no transform, so it is not attached spatially to SceneRoot."
            },
            {
              "term": "Getter",
              "text": "Small function that returns a pointer/reference to owned data/component."
            }
          ],
          "steps": [
            {
              "title": "Declare InventoryComponent and getter",
              "where": "L4CppTrainingCharacter.h",
              "doList": [
                "Forward-declare class UInventoryComponent near other forward declarations.",
                "Add VisibleAnywhere/BlueprintReadOnly UInventoryComponent* InventoryComponent.",
                "Add BlueprintPure UInventoryComponent* GetInventoryComponent() const.",
                "Do not remove old array/functions yet."
              ],
              "code": [
                {
                  "title": "Character component members",
                  "content": "UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=\"Inventory\")\nUInventoryComponent* InventoryComponent;\n\nUFUNCTION(BlueprintPure, Category=\"Inventory\")\nUInventoryComponent* GetInventoryComponent() const;"
                }
              ],
              "check": "Character declares ownership/access to the component.",
              "why": "Callers need a clear route to the reusable inventory service.",
              "codeGuide": {
                "file": "L4CppTrainingCharacter.h",
                "find": "Forward declarations + class AL4CppTrainingCharacter public: inventory section",
                "action": "ADD",
                "place": "Add `class UInventoryComponent;` with the other forward declarations before the Character UCLASS. Inside the Character public section, add the component UPROPERTY and getter. Keep the old Mission 3 Inventory/functions for now.",
                "after": "Save. Continue constructor/getter before the full Build."
              }
            },
            {
              "title": "Create the component in the Character constructor",
              "where": "L4CppTrainingCharacter.cpp",
              "doList": [
                "Include InventoryComponent.h.",
                "Find AL4CppTrainingCharacter constructor.",
                "Create InventoryComponent with CreateDefaultSubobject<UInventoryComponent>(TEXT(\"InventoryComponent\")).",
                "Do not call SetupAttachment.",
                "Save/full build."
              ],
              "code": [
                {
                  "title": "Create component",
                  "content": "InventoryComponent =\n    CreateDefaultSubobject<UInventoryComponent>(TEXT(\"InventoryComponent\"));"
                }
              ],
              "codeRead": {
                "items": [
                  {
                    "token": "CreateDefaultSubobject<UInventoryComponent>",
                    "meaning": "Create one native InventoryComponent owned by every Character instance."
                  },
                  {
                    "token": "No SetupAttachment",
                    "meaning": "ActorComponent has no transform/location, unlike SceneComponent/PrimitiveComponent."
                  }
                ]
              },
              "check": "The Character now owns a native InventoryComponent.",
              "why": "Composition replaces direct inventory implementation.",
              "codeGuide": {
                "file": "L4CppTrainingCharacter.cpp",
                "find": "Top includes + AL4CppTrainingCharacter::AL4CppTrainingCharacter()",
                "action": "ADD",
                "place": "Add #include \"InventoryComponent.h\" to the include block. Inside the existing Character constructor, add CreateDefaultSubobject near the other native component setup. Do NOT call SetupAttachment.",
                "after": "Save. Continue the getter implementation."
              }
            },
            {
              "title": "Implement the getter",
              "where": "L4CppTrainingCharacter.cpp",
              "doList": [
                "Add GetInventoryComponent implementation.",
                "Return InventoryComponent.",
                "Save/compile."
              ],
              "code": [
                {
                  "title": "Getter",
                  "content": "UInventoryComponent* AL4CppTrainingCharacter::GetInventoryComponent() const\n{\n    return InventoryComponent;\n}"
                }
              ],
              "check": "Other C++/Blueprint systems can retrieve the component through a named query.",
              "why": "This avoids public callers needing to know how it is stored.",
              "codeGuide": {
                "file": "L4CppTrainingCharacter.cpp",
                "find": "New file-scope function: UInventoryComponent* AL4CppTrainingCharacter::GetInventoryComponent() const",
                "action": "ADD FUNCTION DEFINITION",
                "place": "Add the getter below another complete Character function, not inside the constructor.",
                "after": "Save All, close Unreal, full Build Development Editor / Win64, reopen and confirm the component appears."
              }
            }
          ],
          "test": [
            "Character compiles with InventoryComponent.",
            "Component appears on Character/Blueprint component list.",
            "Getter returns it."
          ],
          "doneWhen": "Inventory behaviour is composed into the Character.",
          "common": [
            "If UInventoryComponent is incomplete in the .cpp constructor, include InventoryComponent.h.",
            "Do not attach ActorComponent to a SceneComponent."
          ]
        },
        {
          "id": "bind-event",
          "number": 6,
          "title": "Character Listens to Inventory Events",
          "goal": "Bind a Character handler to OnInventoryChanged in BeginPlay and log event data.",
          "why": "This proves the delegate is genuinely decoupled: InventoryComponent broadcasts; Character chooses to listen.",
          "concept": "AddDynamic is used again, but this time you created the event yourself. The listener callback signature must match the delegate parameters exactly.",
          "practical": [
            "Later UI can listen instead of/in addition to Character.",
            "Character no longer needs AddItem implementation to know when inventory changes."
          ],
          "algorithm": [
            "Declare BeginPlay if not already present.",
            "Declare UFUNCTION handler(FName,int32).",
            "BeginPlay checks component.",
            "AddDynamic listener.",
            "Handler logs values."
          ],
          "review": [
            {
              "term": "Listener",
              "text": "Object/function registered to run when an event broadcasts."
            },
            {
              "term": "Signature match",
              "text": "Handler parameter types/order must match the delegate signature."
            },
            {
              "term": "AddDynamic",
              "text": "Bind current UObject instance/member function to a dynamic multicast delegate."
            }
          ],
          "steps": [
            {
              "title": "Declare BeginPlay/handler",
              "where": "L4CppTrainingCharacter.h",
              "doList": [
                "If BeginPlay override is not already declared, add virtual void BeginPlay() override; under protected.",
                "Add UFUNCTION() void HandleInventoryChanged(FName ItemId, int32 NewCount);.",
                "Do not duplicate BeginPlay if the template already has one."
              ],
              "code": [
                {
                  "title": "Listener declarations",
                  "content": "virtual void BeginPlay() override;\n\nUFUNCTION()\nvoid HandleInventoryChanged(FName ItemId, int32 NewCount);"
                }
              ],
              "check": "Character has a matching two-parameter listener callback.",
              "why": "Dynamic delegate binding needs a reflected compatible function.",
              "codeGuide": {
                "file": "L4CppTrainingCharacter.h",
                "find": "class AL4CppTrainingCharacter → protected: section",
                "action": "ADD / CHECK FIRST",
                "place": "Search the class for BeginPlay before typing. If it already exists, DO NOT duplicate it. Otherwise add `virtual void BeginPlay() override;`. Add the UFUNCTION handler beside it in protected:.",
                "after": "Save. Continue to the .cpp implementations before building."
              }
            },
            {
              "title": "Bind in BeginPlay",
              "where": "L4CppTrainingCharacter.cpp",
              "doList": [
                "In BeginPlay keep Super::BeginPlay();.",
                "Check InventoryComponent is valid.",
                "Call InventoryComponent->OnInventoryChanged.AddDynamic(this, &AL4CppTrainingCharacter::HandleInventoryChanged).",
                "Save."
              ],
              "code": [
                {
                  "title": "Bind listener",
                  "content": "if (InventoryComponent)\n{\n    InventoryComponent->OnInventoryChanged.AddDynamic(\n        this,\n        &AL4CppTrainingCharacter::HandleInventoryChanged\n    );\n}"
                }
              ],
              "check": "Character subscribes when gameplay begins.",
              "why": "The component does not need to know the Character's handler exists.",
              "codeGuide": {
                "file": "L4CppTrainingCharacter.cpp",
                "find": "AL4CppTrainingCharacter::BeginPlay()",
                "action": "ADD / CREATE IF MISSING",
                "place": "If BeginPlay() already has an implementation, KEEP Super::BeginPlay(); and add the InventoryComponent binding after it. If no implementation exists, create the full function once and call Super first.",
                "after": "Save. Continue the handler implementation before compiling."
              }
            },
            {
              "title": "Implement the handler",
              "where": "L4CppTrainingCharacter.cpp",
              "doList": [
                "Add HandleInventoryChanged with FName ItemId/int32 NewCount.",
                "Log both values.",
                "Compile."
              ],
              "code": [
                {
                  "title": "Event handler",
                  "content": "void AL4CppTrainingCharacter::HandleInventoryChanged(\n    FName ItemId,\n    int32 NewCount\n)\n{\n    UE_LOG(\n        LogTemp,\n        Warning,\n        TEXT(\"Inventory changed: %s | count = %d\"),\n        *ItemId.ToString(),\n        NewCount\n    );\n}"
                }
              ],
              "check": "The listener is ready to prove future broadcasts.",
              "why": "This is your first authored event broadcaster/listener pair.",
              "codeGuide": {
                "file": "L4CppTrainingCharacter.cpp",
                "find": "New file-scope function: AL4CppTrainingCharacter::HandleInventoryChanged(FName,int32)",
                "action": "ADD FUNCTION DEFINITION",
                "place": "Add the full handler at file scope below BeginPlay() or another complete Character function.",
                "after": "Save All, full Build if needed for the new reflected UFUNCTION, then collect an item to prove the event fires."
              }
            }
          ],
          "test": [
            "Binding compiles.",
            "Handler signature matches delegate.",
            "A future broadcast will call the Character handler."
          ],
          "doneWhen": "Character reacts to component events without owning the component logic.",
          "common": [
            "If AddDynamic errors, compare handler parameters exactly with FInventoryChangedSignature.",
            "Always keep Super::BeginPlay() when adding an override here."
          ]
        },
        {
          "id": "pickup-refactor",
          "number": 7,
          "title": "Refactor TrainingPickup to Use the Component",
          "goal": "Replace Character->AddItem with GetInventoryComponent()->AddItem and only destroy the pickup when the component reports success.",
          "why": "This migrates one caller at a time and immediately benefits from AddItem's new success Boolean.",
          "concept": "The Character identifies/owns the service; the InventoryComponent performs the inventory operation. Pickup needs neither the array nor old Character AddItem.",
          "practical": [
            "Duplicate key/coin pickups can remain when AddItem rejects them, making the result explicit.",
            "InventoryChanged event fires automatically from the component."
          ],
          "algorithm": [
            "Cast Character.",
            "Get component pointer.",
            "If null return.",
            "Call AddItem.",
            "If false log/return.",
            "If true mark collected/destroy."
          ],
          "review": [
            {
              "term": "Service component",
              "text": "Reusable object providing a focused API such as inventory operations."
            },
            {
              "term": "bool bAdded",
              "text": "Local result telling pickup whether AddItem changed state."
            },
            {
              "term": "Null component guard",
              "text": "Protect against calling through a missing component pointer."
            }
          ],
          "steps": [
            {
              "title": "Include InventoryComponent",
              "where": "TrainingPickup.cpp",
              "doList": [
                "Add #include \"InventoryComponent.h\".",
                "Keep L4CppTrainingCharacter.h.",
                "Save."
              ],
              "check": "Pickup can call component functions through the full type.",
              "why": "Getter only gives the pointer; the .cpp needs the class definition to call AddItem."
            },
            {
              "title": "Replace AddItem call",
              "where": "OnCollectionSphereBeginOverlap",
              "doList": [
                "After Character validation, get UInventoryComponent* Inventory = Character->GetInventoryComponent().",
                "Return if Inventory is null.",
                "Call const bool bAdded = Inventory->AddItem(ItemId).",
                "If !bAdded, log/reject and return.",
                "Only then set bCollected and Destroy."
              ],
              "code": [
                {
                  "title": "Component-based pickup",
                  "content": "UInventoryComponent* Inventory =\n    Character->GetInventoryComponent();\n\nif (!Inventory)\n{\n    return;\n}\n\nconst bool bAdded = Inventory->AddItem(ItemId);\n\nif (!bAdded)\n{\n    UE_LOG(\n        LogTemp,\n        Warning,\n        TEXT(\"Could not add %s\"),\n        *ItemId.ToString()\n    );\n    return;\n}\n\nbCollected = true;\nDestroy();"
                }
              ],
              "codeRead": {
                "items": [
                  {
                    "token": "UInventoryComponent* Inventory",
                    "meaning": "Local pointer to the Character's reusable inventory service."
                  },
                  {
                    "token": "const bool bAdded",
                    "meaning": "Store whether AddItem actually changed inventory."
                  },
                  {
                    "token": "if (!bAdded)",
                    "meaning": "Reject collection when invalid/duplicate item was not added."
                  }
                ]
              },
              "check": "Pickup now depends on the component API, not Character inventory functions.",
              "why": "One caller has been safely migrated.",
              "codeGuide": {
                "file": "TrainingPickup.cpp",
                "find": "ATrainingPickup::OnCollectionSphereBeginOverlap(...)",
                "action": "REPLACE PART OF FUNCTION BODY",
                "place": "KEEP the Character cast, ItemId validation and callback signature. Replace the direct Character->AddItem(ItemId) success section with GetInventoryComponent(), null guard, bAdded check and success block.",
                "after": "Save and compile. Test pickup + delegate BEFORE refactoring the door."
              }
            },
            {
              "title": "Test pickup before touching door",
              "where": "Play",
              "doList": [
                "Collect Coin.",
                "Confirm Character HandleInventoryChanged log fires.",
                "Try collecting duplicate Coin.",
                "Confirm the second AddItem is rejected according to your current pickup placement/state test.",
                "Collect Key.",
                "Confirm event logs new count."
              ],
              "check": "Pickup + component + delegate work before door is refactored.",
              "why": "One-at-a-time testing localises refactor problems."
            }
          ],
          "test": [
            "Pickup obtains component safely.",
            "Successful add broadcasts/listener logs.",
            "Failed add does not destroy through the success path."
          ],
          "doneWhen": "TrainingPickup is fully migrated to UInventoryComponent.",
          "common": [
            "If delegate log never appears but item adds, check BeginPlay binding.",
            "If component pointer is null, confirm Character constructor created it and you're using AL4CppTrainingCharacter."
          ]
        },
        {
          "id": "door-refactor",
          "number": 8,
          "title": "Refactor TrainingDoor to Query InventoryComponent",
          "goal": "Replace Character->HasItem with component HasItem while preserving the exact Mission 3 key-gated behaviour.",
          "why": "A good refactor should make the architecture change invisible to the player.",
          "concept": "Door asks Character for its inventory service, then asks that component the item question. Door still owns RequiredItem/lock/movement.",
          "practical": [
            "Door no longer depends on Character implementing inventory methods.",
            "Another Character class could work if it exposes/owns the same component route later."
          ],
          "algorithm": [
            "Cast Character.",
            "Get InventoryComponent.",
            "If missing return/log.",
            "Locked? ask Inventory->HasItem(RequiredItem).",
            "If false reject.",
            "If true SetLocked(false).",
            "Reuse CanOpenDoor/OpenDoor."
          ],
          "review": [
            {
              "term": "Regression",
              "text": "Accidental loss/change of previously working behaviour."
            },
            {
              "term": "Preserve behaviour",
              "text": "Coin still fails; ExitKey still unlocks; movement unchanged."
            }
          ],
          "steps": [
            {
              "title": "Include InventoryComponent",
              "where": "TrainingDoor.cpp",
              "doList": [
                "Add InventoryComponent.h include.",
                "Keep L4CppTrainingCharacter.h.",
                "Save."
              ],
              "check": "Door can call component HasItem.",
              "why": "The concrete component type must be known in this implementation file."
            },
            {
              "title": "Replace the key query",
              "where": "OnTriggerBeginOverlap",
              "doList": [
                "After Character validation, get Inventory component.",
                "Return if null.",
                "Replace Character->HasItem(RequiredItem) with Inventory->HasItem(RequiredItem).",
                "Keep SetLocked(false), CanOpenDoor and OpenDoor unchanged.",
                "Save/compile."
              ],
              "code": [
                {
                  "title": "Component-based key query",
                  "content": "UInventoryComponent* Inventory =\n    Character->GetInventoryComponent();\n\nif (!Inventory)\n{\n    return;\n}\n\nif (bIsLocked)\n{\n    if (!Inventory->HasItem(RequiredItem))\n    {\n        UE_LOG(\n            LogTemp,\n            Warning,\n            TEXT(\"%s requires %s\"),\n            *GetName(),\n            *RequiredItem.ToString()\n        );\n        return;\n    }\n\n    SetLocked(false);\n}\n\nif (CanOpenDoor())\n{\n    OpenDoor();\n}"
                }
              ],
              "check": "Door behaviour is preserved through the new service component.",
              "why": "The movement/lock architecture from Mission 2 survives the refactor unchanged.",
              "codeGuide": {
                "file": "TrainingDoor.cpp",
                "find": "ATrainingDoor::OnTriggerBeginOverlap(...)",
                "action": "REPLACE PART OF FUNCTION BODY",
                "place": "KEEP the Character cast and existing door movement calls. After Character validation, obtain InventoryComponent and replace Character->HasItem(RequiredItem) with Inventory->HasItem(RequiredItem).",
                "after": "Save and compile, then run the full no-item/Coin/ExitKey regression test."
              }
            },
            {
              "title": "Regression test",
              "where": "Play",
              "doList": [
                "No items → door fails.",
                "Coin only → door fails.",
                "ExitKey → door unlocks/opens.",
                "Leave → closes.",
                "Re-enter → opens while unlocked."
              ],
              "check": "Player-facing Mission 3 behaviour is unchanged.",
              "why": "That is the success condition for the architecture refactor."
            }
          ],
          "test": [
            "Door queries UInventoryComponent.",
            "Wrong item still fails.",
            "Correct item still unlocks.",
            "Open/close remains unchanged."
          ],
          "doneWhen": "All gameplay callers use the new component.",
          "common": [
            "If door stopped compiling, check both Character and InventoryComponent includes.",
            "Do not delete old Character inventory until this stage passes."
          ]
        },
        {
          "id": "final",
          "number": 9,
          "title": "Delete the Old Inventory, Full Regression, Reuse the Component",
          "goal": "Remove the obsolete Character array/functions, run the complete gameplay loop and demonstrate that the component is independently reusable.",
          "why": "A refactor is unfinished while two competing inventory implementations remain.",
          "concept": "Once every caller uses UInventoryComponent, the old Character-owned array/API becomes dead code. Removing it leaves one source of truth.",
          "practical": [
            "Character becomes focused on character responsibilities.",
            "Future UI/save systems can work with InventoryComponent directly.",
            "Component reuse becomes possible on other Actor types."
          ],
          "algorithm": [
            "Search references to old Character AddItem/HasItem/etc.",
            "Delete old Character TArray/functions/implementations.",
            "Build.",
            "Run full gameplay regression.",
            "Optionally add component to another test Actor/Blueprint.",
            "Explain event flow."
          ],
          "review": [
            {
              "term": "Dead code",
              "text": "Implementation no longer used by the current system."
            },
            {
              "term": "Single source of truth",
              "text": "Only one inventory array/system controls the state."
            },
            {
              "term": "Reusable component",
              "text": "Behaviour packaged so multiple Actor classes can own independent instances."
            },
            {
              "term": "Event flow",
              "text": "Component changes state → Broadcast → Character/listeners react."
            }
          ],
          "checkpointCode": [
            {
              "title": "InventoryComponent.h — complete Mission 4",
              "content": "#pragma once\n\n#include \"CoreMinimal.h\"\n#include \"Components/ActorComponent.h\"\n#include \"InventoryComponent.generated.h\"\n\nDECLARE_DYNAMIC_MULTICAST_DELEGATE_TwoParams(\n    FInventoryChangedSignature,\n    FName, ItemId,\n    int32, NewCount\n);\n\nUCLASS(ClassGroup=(Custom), meta=(BlueprintSpawnableComponent))\nclass L4CPPTRAINING_API UInventoryComponent : public UActorComponent\n{\n    GENERATED_BODY()\n\npublic:\n    UInventoryComponent();\n\n    UPROPERTY(BlueprintAssignable, Category=\"Inventory\")\n    FInventoryChangedSignature OnInventoryChanged;\n\n    UFUNCTION(BlueprintCallable, Category=\"Inventory\")\n    bool AddItem(FName ItemId);\n\n    UFUNCTION(BlueprintPure, Category=\"Inventory\")\n    bool HasItem(FName ItemId) const;\n\n    UFUNCTION(BlueprintCallable, Category=\"Inventory\")\n    bool RemoveItem(FName ItemId);\n\n    UFUNCTION(BlueprintCallable, Category=\"Inventory\")\n    void PrintInventory() const;\n\n    UFUNCTION(BlueprintPure, Category=\"Inventory\")\n    int32 GetItemCount() const;\n\nprivate:\n    UPROPERTY(\n        VisibleAnywhere,\n        BlueprintReadOnly,\n        Category=\"Inventory\",\n        meta=(AllowPrivateAccess=\"true\")\n    )\n    TArray<FName> Inventory;\n};"
            },
            {
              "title": "InventoryComponent.cpp — complete Mission 4",
              "content": "#include \"InventoryComponent.h\"\n\nUInventoryComponent::UInventoryComponent()\n{\n    PrimaryComponentTick.bCanEverTick = false;\n}\n\nbool UInventoryComponent::AddItem(FName ItemId)\n{\n    if (ItemId.IsNone())\n    {\n        UE_LOG(LogTemp, Warning, TEXT(\"Inventory rejected NAME_None\"));\n        return false;\n    }\n\n    if (Inventory.Contains(ItemId))\n    {\n        UE_LOG(\n            LogTemp,\n            Warning,\n            TEXT(\"Inventory already contains %s\"),\n            *ItemId.ToString()\n        );\n        return false;\n    }\n\n    Inventory.Add(ItemId);\n\n    OnInventoryChanged.Broadcast(ItemId, Inventory.Num());\n\n    return true;\n}\n\nbool UInventoryComponent::HasItem(FName ItemId) const\n{\n    return Inventory.Contains(ItemId);\n}\n\nbool UInventoryComponent::RemoveItem(FName ItemId)\n{\n    const int32 RemovedCount = Inventory.Remove(ItemId);\n\n    if (RemovedCount <= 0)\n    {\n        return false;\n    }\n\n    OnInventoryChanged.Broadcast(ItemId, Inventory.Num());\n\n    return true;\n}\n\nvoid UInventoryComponent::PrintInventory() const\n{\n    UE_LOG(\n        LogTemp,\n        Warning,\n        TEXT(\"Inventory contains %d item(s)\"),\n        Inventory.Num()\n    );\n\n    for (const FName& ItemId : Inventory)\n    {\n        UE_LOG(LogTemp, Warning, TEXT(\"- %s\"), *ItemId.ToString());\n    }\n}\n\nint32 UInventoryComponent::GetItemCount() const\n{\n    return Inventory.Num();\n}"
            }
          ],
          "steps": [
            {
              "title": "Remove old Character inventory implementation",
              "where": "L4CppTrainingCharacter.h/.cpp",
              "doList": [
                "Search project references for Character::AddItem, HasItem, RemoveItem and PrintInventory.",
                "Confirm pickup/door no longer use them.",
                "Delete the old Character Inventory TArray.",
                "Delete old Character inventory function declarations/implementations.",
                "Keep InventoryComponent pointer/getter/event handler.",
                "Full Build."
              ],
              "check": "There is one inventory array: the private one inside UInventoryComponent.",
              "why": "Duplicate state after a refactor is confusing and dangerous."
            },
            {
              "title": "Run the full regression",
              "where": "Play",
              "doList": [
                "Collect Coin → inventory changed event/log.",
                "Try locked ExitKey door → fails.",
                "Collect ExitKey → inventory changed event/log.",
                "Door unlocks/opens.",
                "Duplicate item add is rejected.",
                "If you use RemoveItem, confirm removal broadcasts too."
              ],
              "check": "All Mission 3 gameplay survives with the new architecture.",
              "why": "Structure improved without breaking behaviour."
            },
            {
              "title": "Inspect Blueprint event exposure",
              "where": "Character/Blueprint with InventoryComponent",
              "doList": [
                "Select/inspect InventoryComponent in the owning Blueprint/editor.",
                "Confirm On Inventory Changed is available for Blueprint binding where appropriate.",
                "Do not build UI yet unless you want the stretch task."
              ],
              "check": "The component event is available beyond the C++ Character listener.",
              "why": "Dynamic multicast + BlueprintAssignable creates an extension point for later UI."
            },
            {
              "title": "Independent component challenge",
              "where": "Your choice",
              "doList": [
                "Option A: add InventoryComponent to a simple test Actor/Blueprint and prove it has its own empty inventory.",
                "Option B: bind a Blueprint Print String to OnInventoryChanged.",
                "Option C: add BlueprintPure GetItemCount display/debug use.",
                "Complete one and explain why the component can be reused."
              ],
              "check": "You demonstrate reuse/notification without moving the TArray back into Character.",
              "why": "This proves you understand composition rather than only following a refactor recipe."
            }
          ],
          "test": [
            "Old Character inventory code is removed.",
            "Only UInventoryComponent owns TArray<FName>.",
            "Pickup and door still work.",
            "Inventory change event fires.",
            "One reuse/event extension is demonstrated."
          ],
          "doneWhen": "The project has a clean reusable inventory component and event-driven notification architecture.",
          "common": [
            "Do not delete old Character methods until project-wide references show callers migrated.",
            "If Blueprint event exposure seems stale after delegate/header changes, close Unreal and full Build/reopen."
          ]
        }
      ]
    }
  ]
};

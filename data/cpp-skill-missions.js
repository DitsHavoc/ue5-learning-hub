window.UE5_CPP_SKILL_MISSIONS = {
  "version": "3.58.7",
  "title": "Unreal C++ Programmer Path",
  "summary": "A cumulative Level 4 C++ pathway for students who know Unreal through Blueprint but are new to Visual Studio and native gameplay code. Each mission uses the same L4CppTraining project and follows a repeatable pattern: understand the mechanic, plan the algorithm, review the class/code, build it, compile it, test it, then adapt it.",
  "planned": [
    "Mission 0 — Toolchain + Your First Working C++",
    "Mission 1 — Core Gameplay Actor: C++ Collectible",
    "Mission 2 — Functions & Decisions: Key + Locked Door",
    "Mission 3 — Arrays & Inventory State",
    "Mission 4 — Components, Collision & Gameplay Events",
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
          "goal": "Create the C++ project that every mission in this pathway will extend.",
          "why": "A cumulative project makes later learning feel like upgrading a real codebase instead of completing disconnected syntax exercises.",
          "concept": "A C++ Unreal project contains a game module under Source. Unreal Build Tool compiles that module and Unreal Editor loads it alongside your Content assets.",
          "practical": [
            "You will keep this project through future pickups, doors, inventory, interaction and save/load work.",
            "The exact project name makes class/module/API names predictable in the guide."
          ],
          "algorithm": [
            "Create a Games project.",
            "Choose C++/code project.",
            "Name it L4CppTraining.",
            "Let Unreal generate the game module.",
            "Open the project and Visual Studio."
          ],
          "review": [
            {
              "term": ".uproject",
              "text": "The Unreal project descriptor."
            },
            {
              "term": "Source",
              "text": "Your project's C++ module/source files."
            },
            {
              "term": "Content",
              "text": "Unreal assets such as maps, Blueprints, meshes and materials."
            },
            {
              "term": "L4CPPTRAINING_API",
              "text": "The module export macro that will appear in generated gameplay classes."
            }
          ],
          "steps": [
            {
              "title": "Create the project",
              "where": "Unreal Engine 5.8 → Project Browser → Games",
              "doList": [
                "Choose a Blank Games project.",
                "Choose C++ as the project type/programming language where shown.",
                "Use Desktop/normal college target settings.",
                "Starter Content may be Off.",
                "Set the location chosen earlier.",
                "Name the project exactly L4CppTraining.",
                "Click Create and wait for generation/build tasks to finish."
              ],
              "check": "L4CppTraining opens as a C++ Unreal project.",
              "why": "This creates the game module and source/build files used by every later mission."
            },
            {
              "title": "If you accidentally made a Blueprint-only project",
              "where": "Unreal Editor → Tools",
              "doList": [
                "Do not start over immediately.",
                "Use Tools → New C++ Class to add an Actor class only if your teacher approves converting the project.",
                "Creating the first native class converts the project into a code project.",
                "Return to this guide once a Source module exists."
              ],
              "check": "The project contains C++ Source and Visual Studio can open it.",
              "why": "Epic supports adding native code to a content-only project."
            }
          ],
          "test": [
            "The project is called L4CppTraining.",
            "It opens in Unreal.",
            "A Source/L4CppTraining module exists."
          ],
          "doneWhen": "The cumulative C++ training project exists.",
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
            "Later Blueprint children will live in Content but inherit native classes from Source."
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
                "Notice L4CppTraining.Build.cs and generated module source files.",
                "Do not edit them in Notepad or move them around."
              ],
              "check": "You can identify the project descriptor, Content and Source.",
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
                "Keep the default game module/location.",
                "Click Create Class.",
                "Wait for Unreal/Live Coding and Visual Studio to update.",
                "Find SetupProbe.h and SetupProbe.cpp in Solution Explorer."
              ],
              "check": "ASetupProbe exists as a generated AActor class.",
              "why": "The Wizard creates the boilerplate and updates the module for you."
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
              "why": "You need to know where declarations and implementations live before typing code."
            }
          ],
          "test": [
            "SetupProbe.h exists.",
            "SetupProbe.cpp exists.",
            "ASetupProbe derives from AActor.",
            "You can explain header versus .cpp."
          ],
          "doneWhen": "Your first authored Unreal C++ class exists and its structure is readable.",
          "common": [
            "Class names cannot contain spaces.",
            "Do not move includes below SetupProbe.generated.h."
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
              "content": "#pragma once\n\n#include \"CoreMinimal.h\"\n#include \"GameFramework/Actor.h\"\n#include \"SetupProbe.generated.h\"\n\nUCLASS()\nclass L4CPPTRAINING_API ASetupProbe : public AActor\n{\n    GENERATED_BODY()\n\npublic:\n    ASetupProbe();\n\n    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category=\"Setup Probe\")\n    int32 ProbeNumber = 42;\n\nprotected:\n    virtual void BeginPlay() override;\n};"
            },
            {
              "title": "SetupProbe.cpp — checkpoint",
              "content": "#include \"SetupProbe.h\"\n\nASetupProbe::ASetupProbe()\n{\n    PrimaryActorTick.bCanEverTick = false;\n}\n\nvoid ASetupProbe::BeginPlay()\n{\n    Super::BeginPlay();\n\n    UE_LOG(\n        LogTemp,\n        Warning,\n        TEXT(\"SetupProbe connected. ProbeNumber = %d\"),\n        ProbeNumber\n    );\n}"
            }
          ],
          "steps": [
            {
              "title": "Simplify the constructor",
              "where": "SetupProbe.cpp → ASetupProbe::ASetupProbe()",
              "doList": [
                "Set PrimaryActorTick.bCanEverTick = false; because this probe does not need per-frame code.",
                "If the generated template contains Tick(), you may leave the function declaration/definition temporarily, but it is not used by the probe.",
                "Save the .cpp."
              ],
              "code": [
                {
                  "title": "Constructor line",
                  "content": "PrimaryActorTick.bCanEverTick = false;"
                }
              ],
              "check": "The constructor explicitly disables unnecessary Tick.",
              "why": "Do not pay for/update per-frame logic when the Actor does not need it."
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
              "why": "This is your first reflected native gameplay property."
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
              "why": "This connects editor data to runtime C++ evidence."
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
              "why": "This introduces ordinary C++ expressions/local variables without another reflection change."
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
                "Keep the default L4CppTraining module/location.",
                "Click Create Class.",
                "Wait for Visual Studio/Live Coding to update.",
                "Open TrainingPickup.h and TrainingPickup.cpp."
              ],
              "check": "A generated ATrainingPickup class exists.",
              "why": "The Wizard handles UCLASS/generated header/module plumbing."
            },
            {
              "title": "Compile before changing it",
              "where": "Unreal / Visual Studio",
              "doList": [
                "Save the untouched generated files.",
                "Compile once using Live Coding if Unreal has created/loaded the class normally.",
                "If the class does not appear correctly, close Unreal and full Build Development Editor / Win64.",
                "Reopen Unreal and confirm TrainingPickup appears under C++ Classes."
              ],
              "check": "The untouched class compiles and is visible to Unreal.",
              "why": "This makes the generated class your new known-good checkpoint."
            }
          ],
          "test": [
            "TrainingPickup.h/.cpp exist.",
            "ATrainingPickup derives from AActor.",
            "The untouched class compiles."
          ],
          "doneWhen": "The new gameplay class is recognised by Unreal.",
          "common": [
            "Do not add all components and overlap code before the generated class has compiled once.",
            "If class creation fails, use the first Wizard/Build error rather than editing random module files."
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
              "why": "This keeps the header's dependencies lighter."
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
              "why": "These components define the Actor's physical/visible structure."
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
              "why": "Programmer-owned state and designer-tunable data have different exposure needs."
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
              "why": "Dynamic overlap delegates require a compatible reflected callback."
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
            "Do not put component #include lines after TrainingPickup.generated.h."
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
              "why": "Forward declarations are enough for pointers in the header; construction/member calls require full definitions in the .cpp."
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
              "why": "A neutral scene root makes it easy to attach both visual and collision components."
            },
            {
              "title": "Create Mesh and CollectionSphere",
              "where": "Same constructor",
              "doList": [
                "Create Mesh as UStaticMeshComponent.",
                "Attach Mesh to SceneRoot.",
                "Create CollectionSphere as USphereComponent.",
                "Attach CollectionSphere to SceneRoot.",
                "Set initial sphere radius to 90.0f.",
                "Save."
              ],
              "code": [
                {
                  "title": "Child components",
                  "content": "Mesh = CreateDefaultSubobject<UStaticMeshComponent>(TEXT(\"Mesh\"));\nMesh->SetupAttachment(SceneRoot);\n\nCollectionSphere = CreateDefaultSubobject<USphereComponent>(TEXT(\"CollectionSphere\"));\nCollectionSphere->SetupAttachment(SceneRoot);\nCollectionSphere->InitSphereRadius(90.0f);"
                }
              ],
              "check": "The constructor creates a root with Mesh and CollectionSphere children.",
              "why": "The class now has visible representation and a dedicated interaction/detection shape."
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
              "why": "You can distinguish multiple placed instances in runtime output."
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
              "why": "The speed remains approximately consistent across frame rates."
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
                "Set all channel responses to Ignore.",
                "Set Pawn response to Overlap.",
                "Save the .cpp."
              ],
              "code": [
                {
                  "title": "CollectionSphere collision",
                  "content": "CollectionSphere->SetCollisionEnabled(ECollisionEnabled::QueryOnly);\nCollectionSphere->SetCollisionResponseToAllChannels(ECR_Ignore);\nCollectionSphere->SetCollisionResponseToChannel(ECC_Pawn, ECR_Overlap);"
                }
              ],
              "check": "CollectionSphere is a Pawn-overlap trigger rather than a blocker.",
              "why": "The player can walk through the pickup while still producing an overlap event."
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
              "why": "The component now has somewhere to send overlap notifications."
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
              "why": "You prove event binding before adding filtering/state logic."
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
            "If the callback never fires, debug collision/channel settings before rewriting the function."
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
              "content": "#include \"TrainingPickup.h\"\n\n#include \"Components/SceneComponent.h\"\n#include \"Components/SphereComponent.h\"\n#include \"Components/StaticMeshComponent.h\"\n#include \"GameFramework/Character.h\"\n\nATrainingPickup::ATrainingPickup()\n{\n    PrimaryActorTick.bCanEverTick = true;\n\n    SceneRoot = CreateDefaultSubobject<USceneComponent>(TEXT(\"SceneRoot\"));\n    SetRootComponent(SceneRoot);\n\n    Mesh = CreateDefaultSubobject<UStaticMeshComponent>(TEXT(\"Mesh\"));\n    Mesh->SetupAttachment(SceneRoot);\n\n    CollectionSphere = CreateDefaultSubobject<USphereComponent>(TEXT(\"CollectionSphere\"));\n    CollectionSphere->SetupAttachment(SceneRoot);\n    CollectionSphere->InitSphereRadius(90.0f);\n    CollectionSphere->SetCollisionEnabled(ECollisionEnabled::QueryOnly);\n    CollectionSphere->SetCollisionResponseToAllChannels(ECR_Ignore);\n    CollectionSphere->SetCollisionResponseToChannel(ECC_Pawn, ECR_Overlap);\n\n    CollectionSphere->OnComponentBeginOverlap.AddDynamic(\n        this,\n        &ATrainingPickup::OnCollectionSphereBeginOverlap\n    );\n}\n\nvoid ATrainingPickup::BeginPlay()\n{\n    Super::BeginPlay();\n\n    UE_LOG(\n        LogTemp,\n        Log,\n        TEXT(\"%s ready. ItemValue = %d\"),\n        *GetName(),\n        ItemValue\n    );\n}\n\nvoid ATrainingPickup::Tick(float DeltaTime)\n{\n    Super::Tick(DeltaTime);\n\n    AddActorLocalRotation(\n        FRotator(0.0f, RotationSpeed * DeltaTime, 0.0f)\n    );\n}\n\nvoid ATrainingPickup::OnCollectionSphereBeginOverlap(\n    UPrimitiveComponent* OverlappedComponent,\n    AActor* OtherActor,\n    UPrimitiveComponent* OtherComp,\n    int32 OtherBodyIndex,\n    bool bFromSweep,\n    const FHitResult& SweepResult\n)\n{\n    if (bCollected || !OtherActor)\n    {\n        return;\n    }\n\n    ACharacter* Character = Cast<ACharacter>(OtherActor);\n\n    if (!Character)\n    {\n        return;\n    }\n\n    bCollected = true;\n\n    UE_LOG(\n        LogTemp,\n        Warning,\n        TEXT(\"%s collected %s for %d points\"),\n        *Character->GetName(),\n        *GetName(),\n        ItemValue\n    );\n\n    Destroy();\n}"
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
              "why": "The callback will filter generic overlapping Actors to Characters."
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
              "why": "Guard clauses keep the success path simpler and prevent duplicate collection."
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
              "why": "The sphere event supplies a generic AActor pointer; this mechanic specifically requires a Character."
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
              "why": "Detection is now connected to a complete gameplay response."
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
              "where": "Content Drawer",
              "doList": [
                "Create a Blueprint class based on TrainingPickup.",
                "Name it BP_TrainingPickup.",
                "Assign a clear mesh/material to inherited Mesh.",
                "Set default RotationSpeed to 120.",
                "Set ItemValue to 25.",
                "Compile/Save the Blueprint.",
                "Do not recreate Tick or overlap logic in its Event Graph."
              ],
              "check": "The Blueprint child is configured but contains no duplicate core gameplay graph.",
              "why": "Presentation/tuning belongs in Blueprint while the system remains native."
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
                "Option A: add editable float CollectionRadius and use it to set the sphere radius in the constructor (then full rebuild).",
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
    }
  ]
};

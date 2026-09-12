// UE5 Learning Hub v3.54.0 — Power Jam Programmer Master Guide
// Beginner-safe Blueprint walkthrough for the two-person Power Jam.
(() => {
  const tools = window.UE5_TUTORIAL_DATA;
  if (!tools || !Array.isArray(tools.tutorials)) return;

  const A = 'assets/power-jam-programmer/';
  const shot = (file, caption) => ({ src: A + file, caption, kind: 'local' });

  const tutorial = {
    id: 'power-jam-programmer',
    title: 'Power Jam Programmer: Maps, Switches & Doors',
    icon: '⚡',
    category: 'programming-workflow',
    designModule: null,
    unrealHome: true,
    libraryHidden: true,
    unrealSection: 'Blueprint Programming • Pair Jam',
    unrealIntroEyebrow: 'PROGRAMMER ROUTE • ONE MECHANIC JAM',
    unrealIntroTitle: 'Build one reusable power mechanic that your Designer can use without touching your Blueprint graphs',
    unrealCallout: 'Do not rush ahead. Build the smallest working version first. At every checkpoint, compare your screen with the classroom capture. If a checkpoint does not work, fix it before moving on.',
    unrealNextEyebrow: 'NEXT • HAND IT TO YOUR TEAMMATE',
    unrealNextTitle: 'Your mechanic is only useful if the Designer can receive and use it safely',
    unrealNextText: 'Save All, close Unreal, commit the working system and push it. The Designer pulls your Blueprints, places them in Jam_Main and changes only the exposed Power ID / Required Power values.',
    unrealNextHref: '#/tutorial/github-unreal-team-workflow',
    unrealNextLabel: 'Open the GitHub team workflow →',
    duration: '45–75 min first build',
    difficulty: 'Complete Beginner',
    summary: 'Create a reusable power system in UE5 using a Blueprint Map. A switch activates a named circuit; a door asks whether that circuit is active. The Designer can then configure POWER_A, POWER_B or POWER_C from the Details panel without editing your code.',
    uses: ['Blueprint Maps', 'Functions', 'Instance Editable', 'Overlap Events', 'Casting', 'Branch'],
    referenceLesson: null,
    prescriptive: true,
    steps: [
      {
        title: 'Start in the shared Jam folders',
        where: 'Content Browser → Content → Jam',
        do: 'Confirm the shared project contains Art, Blueprints, Maps and Materials folders. Your programming assets belong in Jam/Blueprints. Do not scatter them through the project.',
        doList: [
          'Open Content/Jam.',
          'Confirm the Blueprints and Maps folders exist.',
          'Use Jam/Blueprints for BP_PowerSwitch and BP_PowerDoor.',
          'Use a separate Programmer_Test map for your own testing; do not build the mechanic directly inside the Designer’s Jam_Main map.'
        ],
        see: 'Four clear Jam folders: Art, Blueprints, Maps and Materials.',
        why: 'A predictable folder structure makes team ownership obvious and stops the Designer having to hunt for your mechanic.',
        check: 'You can point to the Blueprints folder where your two reusable actors will live.',
        visual: shot('01-project-folders.png', 'Classroom capture — the Power Jam folder structure.')
      },
      {
        title: 'Open the player Character Blueprint',
        where: 'Content Browser → the Character Blueprint used by the Third Person project',
        do: 'Open BP_ThirdPersonCharacter. This is where the player will store the shared power state because every switch and door needs to ask the same player which circuits are active.',
        doList: [
          'Open BP_ThirdPersonCharacter.',
          'Make sure My Blueprint and Details are visible.',
          'Do not create a second player Character just for this mechanic.'
        ],
        see: 'BP_ThirdPersonCharacter is open in the Blueprint Editor.',
        why: 'One shared PowerStates Map gives every switch and door one source of truth.',
        check: 'The Blueprint tab name says BP_ThirdPersonCharacter before you create PowerStates.',
        visual: shot('02-character-blueprint.png', 'Classroom capture — the Character Blueprint used for the shared power state.')
      },
      {
        title: 'Create PowerStates as a Map',
        where: 'BP_ThirdPersonCharacter → My Blueprint → Variables',
        do: 'Create a variable named PowerStates. Change the container to Map, with Name as the Key type and Boolean as the Value type.',
        doList: [
          'Add a new variable called PowerStates.',
          'Set the Key type to Name.',
          'Change the container type to Map.',
          'Set the Value type to Boolean.',
          'Compile the Blueprint.'
        ],
        see: 'PowerStates shows Name on the left and Boolean on the right of the Map type.',
        why: 'A Map stores pairs. Here the circuit name is the key and its on/off state is the Boolean value.',
        check: 'Read it aloud: “PowerStates stores Name → Boolean.”',
        troubleshoot: [
          'If you only see one type, you have probably made a normal variable or Array rather than a Map.',
          'Compile before trying to add default Map entries.'
        ],
        visual: shot('03-powerstates-map-type.png', 'Checkpoint — PowerStates is a Map using Name → Boolean.')
      },
      {
        title: 'Add the three power circuits',
        where: 'BP_ThirdPersonCharacter → PowerStates → Default Value',
        do: 'Add three Map elements and name them exactly POWER_A, POWER_B and POWER_C. Leave every Boolean unticked so all three begin False.',
        doList: [
          'Add three Map elements.',
          'Enter POWER_A.',
          'Enter POWER_B.',
          'Enter POWER_C.',
          'Leave all three Boolean boxes False.'
        ],
        see: 'PowerStates contains exactly three named entries, all off.',
        why: 'The names become the IDs the Designer will later assign to switches and doors. Exact spelling matters.',
        check: 'POWER_A, POWER_B and POWER_C are visible and all begin False.',
        troubleshoot: [
          'Do not use POWER A, Power_A or power_a. The switch and door names must match the Map keys exactly.'
        ],
        visual: shot('04-powerstates-defaults.png', 'Checkpoint — POWER_A, POWER_B and POWER_C all begin False.')
      },
      {
        title: 'Create the ActivatePower function',
        where: 'BP_ThirdPersonCharacter → My Blueprint → Functions',
        do: 'Add a new function named ActivatePower. This function will receive the name of a circuit and turn that circuit on.',
        see: 'ActivatePower appears in the Functions list.',
        why: 'Putting this job in a function means every switch can call the same reusable logic.',
        check: 'ActivatePower is selected in the Functions list.',
        visual: shot('05-activatepower-function.png', 'Checkpoint — ActivatePower exists as a Character function.')
      },
      {
        title: 'Give ActivatePower a PowerID input',
        where: 'ActivatePower → Details → Inputs',
        do: 'Add one input named PowerID and set its type to Name.',
        doList: [
          'Add an input.',
          'Rename it PowerID.',
          'Set its type to Name.'
        ],
        see: 'The purple Name input PowerID appears on the function entry node.',
        why: 'The same function can now receive POWER_A, POWER_B or POWER_C instead of being hard-coded to one circuit.',
        check: 'The function entry has one purple pin labelled Power ID.',
        visual: [
          shot('06-activatepower-input.png', 'Set the ActivatePower input to PowerID — Name.'),
          shot('07-activatepower-empty.png', 'Checkpoint — the empty ActivatePower function now has a Power ID input.')
        ]
      },
      {
        title: 'Build ActivatePower with Map Add',
        where: 'ActivatePower function graph',
        do: 'Get PowerStates and use the Map Add node. Connect PowerID to the Key, tick the Boolean Value True, then continue execution into Print String with POWER RESTORED.',
        doList: [
          'Drag PowerStates into the graph as Get.',
          'Create an Add node for the Map.',
          'Connect PowerStates to the Target Map.',
          'Connect PowerID to Key.',
          'Tick the Boolean Value so it is True.',
          'Connect the function execution wire through Add into Print String.',
          'Set the Print String text to POWER RESTORED.',
          'Compile.'
        ],
        see: 'The graph matches the capture: PowerStates feeds Add; PowerID feeds the key; the value is True.',
        why: 'Map Add also replaces an existing value for the same key. POWER_A = False therefore becomes POWER_A = True when the function is called.',
        check: 'The Boolean on Add is ticked. If it is False, your “activate” function would keep turning circuits off.',
        troubleshoot: [
          'If Add does not look like the screenshot, drag from the PowerStates Map pin first so Unreal creates the correct Map version of Add.',
          'The PowerID purple wire must enter the Key pin, not the Boolean Value.'
        ],
        visual: shot('08-activatepower-complete.png', 'Finished ActivatePower — set the named Map entry to True, then print POWER RESTORED.')
      },
      {
        title: 'Create the HasPower function',
        where: 'BP_ThirdPersonCharacter → My Blueprint → Functions',
        do: 'Create a second function named HasPower. This one will answer a question: is the requested circuit currently on?',
        see: 'HasPower appears below ActivatePower in the Functions list.',
        why: 'Doors should ask for the current state rather than reaching into the Map and duplicating lookup logic themselves.',
        check: 'HasPower is selected and ready for inputs/outputs.',
        visual: shot('09-has-power-function.png', 'Checkpoint — create a second Character function called HasPower.')
      },
      {
        title: 'Set the HasPower input and output',
        where: 'HasPower → Details',
        do: 'Add PowerID as a Name input and HasPower as a Boolean output.',
        doList: [
          'Input: PowerID — Name.',
          'Output: HasPower — Boolean.',
          'Compile.'
        ],
        see: 'The function entry has Power ID; the Return Node has a red Has Power Boolean.',
        why: 'The door can pass its RequiredPower name in and receive one simple True/False answer back.',
        check: 'Your empty function looks like the capture before adding the Map lookup.',
        visual: [
          shot('10-has-power-input-output.png', 'HasPower needs a Name input and Boolean output.'),
          shot('11-has-power-empty.png', 'Checkpoint — HasPower now accepts Power ID and returns Has Power.')
        ]
      },
      {
        title: 'Build HasPower with Map Find',
        where: 'HasPower function graph',
        do: 'Get PowerStates and use Map Find. Connect PowerID to the Key. Connect the top red Value output from Find to the HasPower Boolean on the Return Node.',
        doList: [
          'Get PowerStates.',
          'Create a Find node from the Map.',
          'Connect PowerID to the Find Key.',
          'Connect Find → Value to Return Node → Has Power.',
          'Leave the second red Return Value pin unused for this beginner system.',
          'Compile.'
        ],
        see: 'The stored Boolean Value from the Map is returned as HasPower.',
        why: 'Find gives the value stored against the key. We pre-created all three circuit names, so the returned Value is exactly the on/off state the door needs.',
        check: 'Use the TOP red output from Find — Value — for HasPower.',
        troubleshoot: [
          'Find has two red outputs. Value is the stored Boolean. Return Value only reports whether that key existed in the Map.',
          'If a circuit name is mistyped later, Find returns the default Boolean value False, so the door will behave as unpowered.'
        ],
        visual: shot('12-has-power-complete.png', 'Finished HasPower — find the named Map entry and return its stored Boolean Value.')
      },
      {
        title: 'Create BP_PowerSwitch as an Actor',
        where: 'Content/Jam/Blueprints → Add Blueprint Class',
        do: 'Create a normal Actor Blueprint and name it BP_PowerSwitch.',
        doList: [
          'Choose Actor as the Parent Class.',
          'Name the Blueprint BP_PowerSwitch.',
          'Keep it in Content/Jam/Blueprints.'
        ],
        see: 'BP_PowerSwitch exists in the Jam Blueprints folder.',
        why: 'An Actor Blueprint can be placed many times in a level, which is exactly what the Designer needs.',
        check: 'The Content Browser shows BP_PowerSwitch inside Jam/Blueprints.',
        visual: [
          shot('13-create-actor-blueprint.png', 'Choose Actor as the parent class.'),
          shot('14-powerswitch-asset.png', 'Checkpoint — BP_PowerSwitch exists in the Jam Blueprints folder.')
        ]
      },
      {
        title: 'Give the switch a mesh and trigger box',
        where: 'BP_PowerSwitch → Components',
        do: 'Add a Static Mesh for something visible and a Box Collision component for the trigger area. Resize the Box so the player can clearly walk into it.',
        doList: [
          'Add Static Mesh.',
          'Add Box Collision.',
          'Assign any simple placeholder mesh.',
          'Resize the Box slightly larger than the visible switch object.'
        ],
        see: 'The Components panel contains Box and StaticMesh.',
        why: 'The mesh communicates where the switch is; the Box handles the overlap event.',
        check: 'You can see the collision box around the visible switch mesh in the Blueprint viewport.',
        visual: shot('15-powerswitch-components.png', 'BP_PowerSwitch components — a visible mesh plus a larger Box trigger.')
      },
      {
        title: 'Set the switch Box to overlap',
        where: 'BP_PowerSwitch → Box → Details → Collision',
        do: 'Turn Generate Overlap Events on and use OverlapAllDynamic for this jam.',
        doList: [
          'Select Box.',
          'Generate Overlap Events: On.',
          'Collision Preset: OverlapAllDynamic.'
        ],
        see: 'Generate Overlap Events is ticked and the preset reads OverlapAllDynamic.',
        why: 'The event graph cannot react to the player entering the Box if the component is not generating overlaps.',
        check: 'Compare the Collision panel to the capture before writing the event graph.',
        troubleshoot: [
          'If the graph later looks correct but nothing happens in Play, this is one of the first settings to re-check.'
        ],
        visual: shot('16-powerswitch-collision.png', 'Switch trigger settings — Generate Overlap Events on, OverlapAllDynamic.')
      },
      {
        title: 'Expose PowerID to the Designer',
        where: 'BP_PowerSwitch → Variables',
        do: 'Create PowerID as a Name variable and tick Instance Editable.',
        doList: [
          'Variable name: PowerID.',
          'Type: Name.',
          'Instance Editable: On.',
          'Compile.'
        ],
        see: 'PowerID is a purple Name variable with Instance Editable ticked.',
        why: 'The Designer can set each placed switch to POWER_A, POWER_B or POWER_C from the Level Editor without opening your Blueprint graph.',
        check: 'Instance Editable is visibly ticked.',
        visual: shot('17-powerswitch-powerid.png', 'PowerID is a Name and Instance Editable so the Designer can configure each switch instance.')
      },
      {
        title: 'Program the switch overlap',
        where: 'BP_PowerSwitch → Event Graph',
        do: 'From the Box component, add On Component Begin Overlap. Cast Other Actor to BP_ThirdPersonCharacter. From the successful Cast, call Activate Power. Get this switch’s PowerID variable and connect it to the function’s Power ID input.',
        doList: [
          'Box → Add Event → On Component Begin Overlap.',
          'Connect Other Actor to Cast To BP_ThirdPersonCharacter → Object.',
          'Connect the white execution wire from overlap into the Cast.',
          'From the successful Cast, call Activate Power.',
          'Connect As BP_ThirdPersonCharacter to Activate Power → Target.',
          'Drag PowerID into the graph as Get.',
          'Connect PowerID to Activate Power → Power ID.',
          'Compile and Save.'
        ],
        see: 'The complete graph matches the capture, including the separate Power ID variable wire.',
        why: 'The Cast gives this switch access to the functions stored on the player. Passing PowerID keeps one reusable switch Blueprint configurable per instance.',
        check: 'Do not leave Activate Power → Power ID as None. A purple wire from the switch PowerID variable must be connected.',
        troubleshoot: [
          'If the Cast never succeeds, confirm Other Actor is wired into the Cast Object pin and that the project really uses BP_ThirdPersonCharacter.',
          'If POWER RESTORED prints but the wrong circuit changes, check the PowerID value on the placed switch instance.'
        ],
        visual: shot('18-powerswitch-graph.png', 'Finished switch graph — overlap, cast to the player, call Activate Power and pass this instance’s PowerID.')
      },
      {
        title: 'Place the switch and set POWER_A',
        where: 'Programmer_Test map → select the placed BP_PowerSwitch',
        do: 'Place BP_PowerSwitch in your test map. With the placed actor selected, set Power ID to POWER_A in the Details panel.',
        see: 'The placed switch instance shows Power ID = POWER_A.',
        why: 'This proves Instance Editable is doing its job: configuration happens in the level, not by duplicating or rewriting the Blueprint.',
        check: 'The Details panel says POWER_A exactly.',
        visual: shot('19-powerswitch-instance.png', 'Placed switch instance — the Designer-facing Power ID field is set to POWER_A.')
      },
      {
        title: 'Test the switch before building the door',
        where: 'Programmer_Test → Play',
        do: 'Press Play and walk into the switch trigger. Do not continue until POWER RESTORED appears.',
        see: 'POWER RESTORED appears on screen.',
        why: 'This isolates the first half of the mechanic. If the switch is broken, adding a door only gives you two places to debug at once.',
        check: 'POWER RESTORED appears when you overlap the switch.',
        troubleshoot: [
          'No message: re-check Box collision, Generate Overlap Events, the Cast and the Activate Power execution wire.',
          'Message appears: the switch section is working. Move on.'
        ],
        visual: shot('20-power-restored-test.png', 'Success checkpoint — touching the switch prints POWER RESTORED.')
      },
      {
        title: 'Create BP_PowerDoor',
        where: 'Content/Jam/Blueprints',
        do: 'Create another Actor Blueprint called BP_PowerDoor. Add a Static Mesh and Box Collision, just as you did for the switch.',
        doList: [
          'Create Actor Blueprint → BP_PowerDoor.',
          'Add Static Mesh.',
          'Add Box Collision.',
          'Use a simple placeholder mesh that blocks a doorway.',
          'Keep the door Static Mesh blocking the player; the Box is the overlap trigger.'
        ],
        see: 'BP_PowerDoor exists in Jam/Blueprints and its Components panel contains Box and StaticMesh. The mesh blocks the route; the Box detects the player.',
        why: 'The Designer needs one reusable door asset they can place many times and configure with different power requirements.',
        check: 'Both components are visible before you write the graph.',
        visual: [
          shot('21-powerdoor-asset.png', 'Checkpoint — BP_PowerDoor exists beside the switch Blueprint.'),
          shot('24-powerdoor-components.png', 'BP_PowerDoor components — Box plus StaticMesh.')
        ]
      },
      {
        title: 'Configure the door trigger and RequiredPower',
        where: 'BP_PowerDoor → Box / Variables',
        do: 'Set the Box to generate overlaps using OverlapAllDynamic. Then create RequiredPower as a Name variable and tick Instance Editable.',
        doList: [
          'Box → Generate Overlap Events: On.',
          'Box → Collision Preset: OverlapAllDynamic.',
          'Create RequiredPower.',
          'RequiredPower type: Name.',
          'Instance Editable: On.',
          'Compile.'
        ],
        see: 'RequiredPower is an editable Name variable and the Box uses the same overlap approach as the switch.',
        why: 'The Designer can choose which circuit a door requires without editing your graph.',
        check: 'RequiredPower is Instance Editable and your trigger is using OverlapAllDynamic.',
        visual: [
          shot('25-powerdoor-collision.png', 'Door trigger preset — use OverlapAllDynamic, matching the switch trigger.'),
          shot('22-powerdoor-requiredpower.png', 'RequiredPower is a Name variable with Instance Editable enabled.')
        ]
      },
      {
        title: 'Program the powered door',
        where: 'BP_PowerDoor → Event Graph',
        do: 'On Box Begin Overlap, Cast the Other Actor to BP_ThirdPersonCharacter. Call Has Power on the player and pass this door’s RequiredPower into Power ID. Send Has Power into a Branch. True hides the door and disables its collision; False prints NO POWER.',
        doList: [
          'Box → On Component Begin Overlap.',
          'Other Actor → Cast To BP_ThirdPersonCharacter.',
          'From the successful Cast, call Has Power.',
          'Get RequiredPower and connect it to Has Power → Power ID.',
          'Connect Has Power Boolean to Branch → Condition.',
          'True → Set Actor Hidden In Game with New Hidden ticked.',
          'Continue True → Set Actor Enable Collision with New Actor Enable Collision unticked.',
          'False → Print String: NO POWER.',
          'Compile and Save.'
        ],
        see: 'The finished graph matches the capture, including Required Power wired into Has Power.',
        why: 'The door does not need to know how the Map works. It asks the player one reusable question and reacts to the Boolean answer.',
        check: 'Required Power must be connected to Power ID. If the Has Power node says None, stop and fix it.',
        troubleshoot: [
          'If NO POWER appears even after activating the switch, compare the switch PowerID and door RequiredPower character-for-character.',
          'If the door disappears but still blocks the player, confirm Set Actor Enable Collision is connected on the True path and its checkbox is off.'
        ],
        visual: shot('23-powerdoor-graph.png', 'Finished door graph — ask HasPower(RequiredPower), branch, then either open or print NO POWER.')
      },
      {
        title: 'Place the door and require POWER_A',
        where: 'Programmer_Test → select BP_PowerDoor',
        do: 'Place BP_PowerDoor so it blocks the route. Select the placed actor and set Required Power to POWER_A.',
        see: 'The Details panel says Required Power = POWER_A.',
        why: 'The switch and door now refer to the same named circuit without being directly wired to one another.',
        check: 'Switch = POWER_A and Door = POWER_A.',
        visual: shot('26-powerdoor-instance.png', 'Placed door instance — Required Power is set to POWER_A.')
      },
      {
        title: 'Prove the False path first',
        where: 'Programmer_Test → Play',
        do: 'Start Play and walk into the door BEFORE touching the switch. The door should remain and NO POWER should appear.',
        see: 'NO POWER appears and the route remains blocked.',
        why: 'A good test proves both outcomes. Testing only the successful route can hide a door that is accidentally always open.',
        check: 'Do not touch the switch first. The first door test must fail.',
        visual: shot('27-no-power-test.png', 'False-path checkpoint — before activating POWER_A, the door prints NO POWER.')
      },
      {
        title: 'Prove the full circuit and then prove reuse',
        where: 'Programmer_Test → Play, then Details panel',
        do: 'Activate the POWER_A switch and return to the door. The True path should hide the door and disable its collision. Then stop Play, change BOTH the switch PowerID and door RequiredPower to POWER_B, and test again.',
        doList: [
          'POWER_A test: door fails before switch, opens after switch.',
          'Change switch PowerID to POWER_B.',
          'Change door RequiredPower to POWER_B.',
          'Play again and repeat the test.',
          'Do not change any Blueprint graph to make POWER_B work.'
        ],
        see: 'The same two Blueprints work with a different circuit name just by changing exposed instance values.',
        why: 'That is the proof that you built a reusable system rather than a one-off script.',
        check: 'POWER_B works without editing ActivatePower, HasPower, BP_PowerSwitch or BP_PowerDoor.',
        troubleshoot: [
          'If POWER_A works but POWER_B does not, check that POWER_B exists in PowerStates and that both placed actors use exactly POWER_B.'
        ]
      },
      {
        title: 'Hand the mechanic to the Designer',
        where: 'Unreal → Save All → close Unreal → GitHub Desktop',
        do: 'Save All and close Unreal. Commit the working programming assets and push them. Tell the Designer the mechanic is ready to pull.',
        doList: [
          'Save All.',
          'Close Unreal.',
          'Review changed files in GitHub Desktop.',
          'Commit with a message such as: Programmer: working power switch and door system.',
          'Push origin.',
          'Tell the Designer to close Unreal, Fetch/Pull and reopen the project.'
        ],
        see: 'The Designer can pull BP_PowerSwitch and BP_PowerDoor and configure PowerID / RequiredPower from Jam_Main.',
        why: 'Your job is not just to make code work on your PC. Your job is to provide a reliable reusable system another discipline can actually use.',
        check: 'The Designer does not need to open either Event Graph to place and configure the mechanic.',
        troubleshoot: [
          'If Jam_Main appears in your changed files, stop and check whether you accidentally edited/saved the Designer-owned map.',
          'If GitHub reports a binary conflict, stop and use the GitHub team guide before choosing a version.'
        ]
      }
    ],
    quiz: [
      {
        q: 'What does the PowerStates Map store in this jam?',
        options: ['Door mesh → location', 'Name → Boolean', 'Boolean → Name', 'Switch actor → door actor'],
        correct: 1,
        feedback: 'The circuit name is the key and its on/off state is the Boolean value: POWER_A → True/False.'
      },
      {
        q: 'POWER_A already exists in the Map as False. What happens when ActivatePower uses Map Add with POWER_A and True?',
        options: ['A second POWER_A is created', 'The old POWER_A value is replaced with True', 'The Map is cleared', 'Nothing — Add only works on new keys'],
        correct: 1,
        feedback: 'Map Add overwrites the value for an existing key, which is exactly how the function turns a circuit on.'
      },
      {
        q: 'Why are PowerID and RequiredPower marked Instance Editable?',
        options: ['So GitHub can merge them', 'So the Designer can configure placed switch/door instances without editing the Blueprint graph', 'So the variables replicate online', 'So Unreal creates the variables automatically'],
        correct: 1,
        feedback: 'Instance Editable exposes the value on placed Blueprint instances in the Level Editor Details panel.'
      },
      {
        q: 'The switch prints POWER RESTORED, but the POWER_A door still prints NO POWER. What should you check first?',
        options: ['Add a Timeline', 'Make a second Character Blueprint', 'Check that the switch PowerID and door RequiredPower match exactly', 'Delete the Branch'],
        correct: 2,
        feedback: 'The system communicates through the shared circuit name. POWER_A must match POWER_A exactly.'
      },
      {
        q: 'What best proves the mechanic is reusable?',
        options: ['The POWER_A test works once', 'The door has a nicer mesh', 'Changing both exposed IDs to POWER_B works without editing any Blueprint graph', 'The Print String is removed'],
        correct: 2,
        feedback: 'A reusable mechanic works for different configured IDs without rewriting the underlying logic.'
      }
    ],
    mistakes: [
      'Creating PowerStates as a normal variable or Array instead of a Name → Boolean Map.',
      'Typing different circuit names such as POWER A, Power_A or power_a.',
      'Leaving the Add Boolean value False inside ActivatePower.',
      'Using the wrong red output from Map Find: the stored Value is what HasPower returns in this simple system.',
      'Forgetting Generate Overlap Events on a switch or door trigger Box.',
      'Forgetting to tick Instance Editable on PowerID or RequiredPower.',
      'Leaving Activate Power → Power ID or Has Power → Power ID as None instead of wiring the local variable.',
      'Testing the door only after activating the switch instead of proving the False path first.',
      'Editing Jam_Main as the Programmer instead of using your own Programmer_Test map.',
      'Adding animation, UI or polish before the basic circuit works.'
    ],
    makeItYours: [
      'After the basic version works, replace the disappearing door with a Timeline that slides the mesh open.',
      'Change the switch material or emissive colour after it activates so the player gets clear feedback.',
      'Add a small UI display showing which circuits are currently online.',
      'Let several doors share the same RequiredPower so one circuit affects multiple parts of the level.',
      'Add a Designer-requested improvement — but only one — and record it as a separate Git commit.'
    ],
    worksWhen: [
      'PowerStates contains POWER_A, POWER_B and POWER_C as Boolean values.',
      'Touching a placed switch activates the circuit named in that switch’s PowerID.',
      'A door stays closed and prints NO POWER before its required circuit is active.',
      'The same door opens after the matching circuit is activated.',
      'Changing both placed actors to POWER_B works without editing the Blueprint graphs.',
      'The Designer can configure switches and doors from the Level Editor Details panel.',
      'The Programmer can hand the mechanic over through GitHub without editing the Designer-owned Jam_Main map.'
    ],
    referenceImages: [],
    source: {
      title: 'Epic Games — Blueprint Foundations (UE5.8)',
      url: 'https://dev.epicgames.com/documentation/unreal-engine/blueprint-foundations'
    }
  };

  if (!tools.tutorials.some(t => t.id === tutorial.id)) tools.tutorials.push(tutorial);
})();

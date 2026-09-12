// UE5 Learning Hub v3.53.0 — GitHub + Unreal Team Workflow Master Guide
// Beginner-safe two-person workflow using GitHub Desktop outside Unreal.
(() => {
  const tools = window.UE5_TUTORIAL_DATA;
  if (!tools || !Array.isArray(tools.tutorials)) return;

  const tutorial = {
    id: 'github-unreal-team-workflow',
    title: 'GitHub + Unreal: Two-Person Team Workflow',
    icon: '🔀',
    category: 'programming-workflow',
    designModule: null,
    unrealHome: true,
    libraryHidden: true,
    unrealSection: 'GitHub & Team Workflow',
    unrealIntroEyebrow: '01 • TEAM WORKFLOW',
    unrealIntroTitle: 'Get the same Unreal project safely onto two PCs — then keep both copies in sync',
    unrealCallout: 'For this beginner workflow, GitHub Desktop handles version control outside Unreal. You do not need to enable an Unreal Git plugin. The golden rule is simple: pull before work, and only one person edits a particular Unreal asset at a time.',
    unrealNextEyebrow: 'NEXT • USE THE PIPELINE FOR REAL',
    unrealNextTitle: 'Now build something as a two-person team',
    unrealNextText: 'Use this exact workflow during your pair jam. The Programmer owns the reusable Blueprints; the Designer owns the main playable map. Push small working changes and let your Git history show how the project developed.',
    unrealNextHref: '#/tutorials',
    unrealNextLabel: 'Choose a mechanic to build →',
    duration: '35–50 min setup • then 2–5 min each handover',
    difficulty: 'Complete Beginner',
    summary: 'Set up one private GitHub repository for an Unreal project, invite a teammate, clone the project onto both PCs, prove changes move both ways, then use a safe pull–work–commit–push routine without creating binary-asset conflicts.',
    uses: ['GitHub Desktop', 'Git LFS', 'Unreal Project', 'Commit', 'Push / Pull', 'Team Ownership'],
    referenceLesson: null,
    prescriptive: true,
    steps: [
      {
        title: 'Understand what GitHub is doing',
        where: 'Before opening Unreal',
        do: 'Agree that you are not both editing one live cloud project. Each student has a local copy of the same Unreal project. GitHub is the middle point used to exchange saved versions.',
        doList: [
          'Student A PC → GitHub repository → Student B PC.',
          'Push sends your committed work to GitHub.',
          'Pull brings your teammate’s committed work from GitHub onto your PC.',
          'For this first jam, close Unreal before pulling changes.'
        ],
        see: 'Both students can explain the difference between a local Unreal project and the shared GitHub repository.',
        why: 'Most beginner Git confusion comes from imagining Google Docs-style live editing. Git instead synchronises separate local copies.',
        check: 'Ask your partner: “If I change a Blueprint on my PC, can you see it instantly?” The correct answer is no — not until it is saved, committed, pushed and pulled.',
        visual: [{
          src: 'assets/github-team-guide/09_daily_team_workflow.png',
          caption: 'Hub teaching diagram — the everyday team workflow. The exact GitHub Desktop appearance may change slightly over time.',
          kind: 'local',
          sourceUrl: 'https://docs.github.com/en/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/syncing-your-branch-in-github-desktop',
          sourceTitle: 'GitHub Docs — Syncing your branch in GitHub Desktop'
        }]
      },
      {
        title: 'Get both students ready',
        where: 'Both PCs',
        do: 'Both students sign in to GitHub and GitHub Desktop, and confirm they are using the same Unreal Engine version.',
        doList: [
          'Install/open GitHub Desktop and sign in.',
          'Use the same Unreal Engine version on both machines.',
          'Do not enable an Unreal Git plugin for this beginner workflow.',
          'Keep GitHub Desktop and Unreal as two separate tools: GitHub Desktop moves versions; Unreal makes the game.'
        ],
        see: 'Both students can open GitHub Desktop and Unreal independently.',
        why: 'Keeping source control outside Unreal removes an extra layer of UI and troubleshooting while the team learns the basic workflow.',
        check: 'Both students can show GitHub Desktop signed in and name the Unreal version they are using.',
        troubleshoot: ['If GitHub Desktop is not installed, stop here. Do not start making separate copies of the Unreal project by USB or email.']
      },
      {
        title: 'Student A creates the team repository',
        where: 'GitHub.com → + → New repository',
        do: 'Student A creates one repository for the team. Use a clear name such as PowerJam-Team7.',
        doList: [
          'One team = one repository.',
          'Use the course/project name plus the team name or number.',
          'Do not create two separate repositories for the same project.'
        ],
        see: 'A new empty repository exists on Student A’s GitHub account.',
        why: 'The repository is the shared online history both local project copies will connect to.',
        check: 'Student A can open the repository page and read the correct team/project name.',
        visual: [{
          src: 'assets/github-team-guide/01_create_new_repository.png',
          caption: 'Hub teaching diagram — create the team repository from GitHub’s + menu.',
          kind: 'local',
          sourceUrl: 'https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository',
          sourceTitle: 'GitHub Docs — Creating a new repository'
        }]
      },
      {
        title: 'Name it clearly and make it private',
        where: 'GitHub.com → Create a new repository',
        do: 'Enter the team repository name and choose Private before creating it.',
        doList: [
          'Example: PowerJam-Team7.',
          'Choose Private.',
          'Do not put passwords, keys or personal information in the repository.'
        ],
        see: 'The repository exists and its visibility shows Private.',
        why: 'A private repository keeps unfinished classroom project files limited to the team and invited collaborators.',
        check: 'Before continuing, confirm the repository name is sensible and visibility says Private.',
        visual: [{
          src: 'assets/github-team-guide/02_name_and_private.png',
          caption: 'Hub teaching diagram — give the repository a clear name and set its visibility to Private.',
          kind: 'local',
          sourceUrl: 'https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository',
          sourceTitle: 'GitHub Docs — Creating a new repository'
        }]
      },
      {
        title: 'Student A invites Student B',
        where: 'Repository → Settings → Collaborators / Manage access',
        do: 'Student A adds Student B using their GitHub username. Student B accepts the invitation before anyone continues.',
        doList: [
          'Search for the exact GitHub username.',
          'Send the invitation.',
          'Student B opens the invitation and accepts it.',
          'Do not continue until Student B has access.'
        ],
        see: 'Student B appears as a collaborator and can see the repository in GitHub.',
        why: 'Cloning is not enough for teamwork: Student B also needs permission to push their own commits back to the shared repository.',
        check: 'Student B opens the repository page while signed in. If they cannot see it, the invitation/access step is not finished.',
        troubleshoot: ['If Student B cannot find the repository in GitHub Desktop, confirm the invitation has actually been accepted.'],
        visual: [{
          src: 'assets/github-team-guide/03_invite_collaborator.png',
          caption: 'Hub teaching diagram — invite the second student through repository access settings.',
          kind: 'local',
          sourceUrl: 'https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository',
          sourceTitle: 'GitHub Docs — Inviting collaborators'
        }]
      },
      {
        title: 'Student A clones the empty repository',
        where: 'GitHub Desktop → File → Clone repository…',
        do: 'Student A clones the team repository to a sensible local folder such as Documents/GitHub/PowerJam-Team7.',
        doList: [
          'Choose the team repository.',
          'Choose a local path you can find again.',
          'Click Clone.',
          'This folder is now the team project folder on Student A’s PC.'
        ],
        see: 'GitHub Desktop shows the team repository as the Current Repository.',
        why: 'Cloning connects a local folder to the online repository so GitHub Desktop knows where to commit, pull and push.',
        check: 'Use Repository → Show in Explorer and confirm you can see the local repository folder.',
        visual: [
          {
            src: 'assets/github-team-guide/04_clone_repository_menu.png',
            caption: 'Hub teaching diagram — open the Clone repository window in GitHub Desktop.',
            kind: 'local',
            sourceUrl: 'https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop',
            sourceTitle: 'GitHub Docs — Cloning repositories with GitHub Desktop'
          },
          {
            src: 'assets/github-team-guide/05_clone_repository_dialog.png',
            caption: 'Hub teaching diagram — select the team repository and choose its local folder.',
            kind: 'local',
            sourceUrl: 'https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop',
            sourceTitle: 'GitHub Docs — Cloning repositories with GitHub Desktop'
          }
        ]
      },
      {
        title: 'Check the Unreal/Git safety files before adding the project',
        where: 'The repository folder in File Explorer',
        do: 'Confirm the teacher starter contains .gitattributes and .gitignore. If either is missing, stop and ask the teacher before copying the Unreal project into the repository.',
        doList: [
          '.gitattributes should track *.uasset and *.umap with Git LFS.',
          '.gitignore should exclude generated folders such as Binaries, DerivedDataCache, Intermediate and Saved.',
          'Students do not need to edit these files during this first jam.',
          'GitHub Desktop includes Git LFS; these tracking rules tell it which Unreal binary assets should use LFS.'
        ],
        see: 'The repository has the two setup files and is ready for Unreal content.',
        why: 'Unreal assets are binary and generated folders can be enormous. Correct setup prevents the repository filling with temporary data and routes the main Unreal assets through Git LFS.',
        check: 'Do not continue until the teacher confirms the repository is configured for Unreal.',
        troubleshoot: ['If GitHub Desktop later shows thousands of files from Saved, Intermediate or DerivedDataCache, stop — the ignore setup is wrong.']
      },
      {
        title: 'Student A puts the Unreal project inside the repository',
        where: 'The cloned repository folder',
        do: 'Create the supplied Third Person project directly in the repository folder, or copy the teacher starter project contents into that folder.',
        doList: [
          'The .uproject file should sit near the top of the repository.',
          'Good: PowerJam-Team7/PowerJam.uproject.',
          'Avoid accidentally nesting another unnecessary PowerJam-Team7/PowerJam/ folder inside it.',
          'Open the .uproject once, confirm the project runs, then Save All and close Unreal.'
        ],
        see: 'The repository folder contains Config, Content and the .uproject file. GitHub Desktop now sees the new project files as changes.',
        why: 'Student B will receive whatever is inside this repository. If the actual Unreal project is outside it, there is nothing useful to clone.',
        check: 'From the repository folder, double-click the .uproject and confirm the correct Third Person project opens.',
        troubleshoot: ['If the project will not open, fix that locally before the first commit. Do not push a broken starter project to your partner.']
      },
      {
        title: 'Student A makes the first commit',
        where: 'GitHub Desktop → Changes',
        do: 'After Save All and closing Unreal, review the changed files and create the first commit with the message “Initial Unreal project setup”.',
        doList: [
          'Look through the changed-file list before committing.',
          'You should see real project files such as Content, Config and the .uproject.',
          'You should NOT see thousands of generated files from Saved, Intermediate or DerivedDataCache.',
          'Use a commit message that says what changed.'
        ],
        see: 'GitHub Desktop records a commit on the main branch.',
        why: 'A commit is a named checkpoint in the project history. Small meaningful checkpoints are much easier to understand and recover than one giant “final” commit.',
        check: 'The History tab shows “Initial Unreal project setup”.',
        troubleshoot: ['If GitHub Desktop lists unexpected generated folders, do not commit them. Stop and fix the .gitignore first.'],
        visual: [{
          src: 'assets/github-team-guide/06_commit_changes.png',
          caption: 'Hub teaching diagram — review changed files and write a useful commit message before committing.',
          kind: 'local',
          sourceUrl: 'https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop',
          sourceTitle: 'GitHub Docs — Committing and reviewing changes'
        }]
      },
      {
        title: 'Student A pushes the project to GitHub',
        where: 'GitHub Desktop → Push origin',
        do: 'Click Push origin and wait until GitHub Desktop says the branch is up to date.',
        doList: [
          'Commit = record the checkpoint locally.',
          'Push = upload those commits to the shared GitHub repository.',
          'Do not tell your partner to pull until the push has finished.'
        ],
        see: 'The repository on GitHub.com now contains the Unreal project files.',
        why: 'Student B can only clone/pull work that has actually been pushed to the online repository.',
        check: 'Open the repository on GitHub.com and confirm the Content folder and .uproject are visible.',
        visual: [{
          src: 'assets/github-team-guide/07_push_origin.png',
          caption: 'Hub teaching diagram — Push origin sends the committed project to the shared GitHub repository.',
          kind: 'local',
          sourceUrl: 'https://docs.github.com/en/desktop/making-changes-in-a-branch/pushing-changes-to-github-from-github-desktop',
          sourceTitle: 'GitHub Docs — Pushing changes from GitHub Desktop'
        }]
      },
      {
        title: 'Student B clones the finished Unreal repository',
        where: 'Student B PC → GitHub Desktop → File → Clone repository…',
        do: 'Student B selects the team repository, chooses a local folder and clicks Clone. When the download finishes, open the .uproject.',
        doList: [
          'Do not create a second fresh Unreal project.',
          'Clone the existing team repository instead.',
          'Wait for GitHub Desktop to finish downloading before opening the .uproject.',
          'If Unreal asks to convert the project to a different engine version, stop and check both students are using the same version.'
        ],
        see: 'Student B can open the same Third Person project locally on their own PC.',
        why: 'This is the point where the team genuinely has two local copies of one shared project history.',
        check: 'Both students can open the project and see the same starter map/content.',
        visual: [{
          src: 'assets/github-team-guide/05_clone_repository_dialog.png',
          caption: 'Hub teaching diagram — Student B clones the existing team repository rather than creating another Unreal project.',
          kind: 'local',
          sourceUrl: 'https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop',
          sourceTitle: 'GitHub Docs — Cloning repositories with GitHub Desktop'
        }]
      },
      {
        title: 'Prove Designer → Programmer handover works',
        where: 'Jam_Main.umap → GitHub Desktop',
        do: 'The Designer places one obvious cube in Jam_Main, saves, closes Unreal, commits “Designer: GitHub test cube” and pushes. The Programmer keeps Unreal closed, Fetches/Pulls, then opens Jam_Main.',
        doList: [
          'Designer: place one cube → Save All → close Unreal → commit → push.',
          'Designer: tell the Programmer “I’ve pushed”.',
          'Programmer: with Unreal closed, Fetch origin → Pull origin.',
          'Programmer: reopen Unreal and check the cube exists.'
        ],
        see: 'The Programmer sees the cube that only existed on the Designer’s PC a few minutes earlier.',
        why: 'This proves the full save–commit–push–pull chain works before the team creates anything valuable.',
        check: 'If the cube is not visible, stop. Do not start the jam until the handover works.',
        visual: [{
          src: 'assets/github-team-guide/08_fetch_then_pull.png',
          caption: 'Hub teaching diagram — close Unreal, Fetch origin, then Pull origin before reopening the project.',
          kind: 'local',
          sourceUrl: 'https://docs.github.com/en/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/syncing-your-branch-in-github-desktop',
          sourceTitle: 'GitHub Docs — Syncing your branch in GitHub Desktop'
        }]
      },
      {
        title: 'Prove Programmer → Designer handover works',
        where: 'Content/Jam/Blueprints → GitHub Desktop',
        do: 'The Programmer creates a temporary BP_Test Actor Blueprint, saves, closes Unreal, commits and pushes. The Designer closes Unreal, pulls, reopens the project and checks BP_Test exists.',
        doList: [
          'Programmer: create BP_Test in the agreed Blueprints folder.',
          'Save All → close Unreal → commit “Programmer: GitHub Blueprint test” → push.',
          'Designer: Fetch/Pull with Unreal closed.',
          'Designer: reopen Unreal and confirm BP_Test exists.',
          'Delete BP_Test afterwards using the same save/commit/push routine.'
        ],
        see: 'The Designer receives a Blueprint created on the Programmer’s PC.',
        why: 'Testing both directions proves that both collaborators can contribute to the repository rather than one person having read-only access.',
        check: 'Only begin the real jam once both handover tests have passed.'
      },
      {
        title: 'Give every Unreal asset one owner',
        where: 'Team agreement before real work begins',
        do: 'Divide ownership so the two students do not independently edit the same .uasset or .umap file.',
        doList: [
          'Designer owns Jam_Main.umap.',
          'Programmer owns BP_PowerSwitch, BP_PowerDoor and Programmer_Test.umap.',
          'The Designer may place Blueprint instances and change exposed values in Jam_Main; they do not edit the Programmer’s Blueprint graphs.',
          'The Programmer may open Jam_Main to test; they do not save changes to the Designer’s map.',
          'ONE UNREAL ASSET = ONE OWNER AT A TIME.'
        ],
        see: 'Both students can name exactly which files they are responsible for.',
        why: '.uasset and .umap files are binary. Git cannot reliably combine two different edits to the same Unreal asset in the way it can merge ordinary text.',
        check: 'Ask “Who owns Jam_Main?” and “Who owns BP_PowerDoor?” Both students should answer immediately.',
        visual: [{
          src: 'assets/github-team-guide/09_daily_team_workflow.png',
          caption: 'Hub teaching diagram — the workflow and the critical ownership rule for Unreal binary assets.',
          kind: 'local',
          sourceUrl: 'https://docs.github.com/en/get-started/using-git/about-git',
          sourceTitle: 'GitHub Docs — About Git'
        }]
      },
      {
        title: 'Use the same routine every time work changes hands',
        where: 'Every lesson and every handover',
        do: 'Use the same sequence every time: PULL → OPEN UNREAL → WORK → SAVE ALL → CLOSE UNREAL → COMMIT → PUSH → TELL YOUR PARTNER.',
        doList: [
          'Before work: Unreal closed → Fetch/Pull → open Unreal.',
          'During work: stay inside the assets you own.',
          'After a useful chunk: Save All → close Unreal → review changes → commit → push.',
          'Tell your partner when the push is finished.',
          'Prefer several small meaningful commits to one huge end-of-day dump.'
        ],
        see: 'GitHub History starts telling the story of the project: who changed what and why.',
        why: 'A repeated routine prevents most “I overwrote your work” and “my PC has an older version” problems before they happen.',
        check: 'At the end of the lesson, GitHub Desktop should say the branch is up to date with origin.',
        visual: [
          {
            src: 'assets/github-team-guide/08_fetch_then_pull.png',
            caption: 'Start of work: Fetch/Pull while Unreal is closed.',
            kind: 'local',
            sourceUrl: 'https://docs.github.com/en/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/syncing-your-branch-in-github-desktop',
            sourceTitle: 'GitHub Docs — Syncing your branch in GitHub Desktop'
          },
          {
            src: 'assets/github-team-guide/09_daily_team_workflow.png',
            caption: 'Whole routine: Pull → Open Unreal → Work → Save → Close → Commit → Push.',
            kind: 'local',
            sourceUrl: 'https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop',
            sourceTitle: 'GitHub Docs — Committing and reviewing changes'
          }
        ]
      },
      {
        title: 'Use commit messages that another human can understand',
        where: 'GitHub Desktop → Summary',
        do: 'Write a short message describing the actual change.',
        doList: [
          'Good: “Programmer: power switch activates circuit”.',
          'Good: “Designer: moved POWER_B after playtest”.',
          'Good: “Programmer: added door feedback”.',
          'Bad: “stuff”, “work”, “update”, “final”, “FINALFINAL2”.'
        ],
        see: 'The History tab reads like a short production log rather than a mystery list.',
        why: 'Clear commit history becomes evidence of contribution and makes it much easier to identify the point before something broke.',
        check: 'A teammate who was absent should be able to read the message and understand what changed.',
        visual: [{
          src: 'assets/github-team-guide/06_commit_changes.png',
          caption: 'Hub teaching diagram — commit messages should describe the change, not just say “work”.',
          kind: 'local',
          sourceUrl: 'https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop',
          sourceTitle: 'GitHub Docs — Committing and reviewing changes'
        }]
      },
      {
        title: 'If GitHub says CONFLICT, stop',
        where: 'GitHub Desktop',
        do: 'Do not click random conflict-resolution, discard or force-push options. Stop and call the teacher.',
        doList: [
          'Do not force push.',
          'Do not discard changes just to remove the warning.',
          'Do not choose “mine” or “theirs” for an Unreal binary asset until you know which copy is authoritative.',
          'Tell the teacher which asset both students edited and which machine has the version that should be kept.'
        ],
        see: 'No work is destroyed while the team works out which version should win.',
        why: 'A conflict in an Unreal binary file usually means two people changed the same asset. One version may have to be chosen, so guessing can permanently discard somebody’s work.',
        check: 'The team can explain which ownership rule would have prevented the conflict.',
        troubleshoot: ['If this happens repeatedly, stop the jam and reassign asset ownership more clearly.']
      },
      {
        title: 'Finish every lesson with a clean handover',
        where: 'Unreal → GitHub Desktop',
        do: 'Before leaving: Save All, close Unreal, review your changed files, commit, push and confirm GitHub Desktop says Up to date with origin.',
        doList: [
          'Save All in Unreal.',
          'Close Unreal.',
          'Review the changed files — do you recognise them?',
          'Commit with a useful message.',
          'Push origin.',
          'Tell your teammate the push is complete.'
        ],
        see: 'The latest working version is safely in the shared repository rather than trapped on one classroom PC.',
        why: 'A local save is not a team handover. The project is only shared once the relevant commit has been pushed.',
        check: 'Both partners can leave the room knowing the next session can begin with Pull rather than detective work.'
      }
    ],
    quiz: [
      {
        q: 'Your teammate says they have pushed a new Blueprint. Unreal is currently open on your PC. What is the safest beginner workflow?',
        options: ['Pull immediately while Unreal is open', 'Close Unreal, Fetch/Pull in GitHub Desktop, then reopen Unreal', 'Create another copy of the project', 'Ask them to email the .uasset file'],
        correct: 1,
        feedback: 'For this beginner jam, close Unreal before pulling. It keeps the version-control handover simple and avoids replacing assets while the Editor has them loaded.'
      },
      {
        q: 'Both students independently edited BP_PowerDoor.uasset and GitHub reports a conflict. What should they do first?',
        options: ['Force push the newest one', 'Click Keep Mine', 'Stop and work out which version should be kept with the teacher', 'Rename both files and continue'],
        correct: 2,
        feedback: 'Unreal .uasset files are binary. Do not guess at a conflict. Decide which version is authoritative and fix the ownership rule that allowed both students to edit it.'
      },
      {
        q: 'Which statement best describes Push?',
        options: ['It downloads your teammate’s latest work', 'It uploads your local commits to the shared repository', 'It saves the current Unreal level', 'It merges two .umap files automatically'],
        correct: 1,
        feedback: 'Commit records a local checkpoint. Push sends those commits to the shared GitHub repository.'
      },
      {
        q: 'The Designer owns Jam_Main.umap. The Programmer owns BP_PowerDoor. Which is the safest arrangement?',
        options: ['Both edit both assets whenever they need to', 'Designer edits Jam_Main and uses exposed BP_PowerDoor settings; Programmer edits the Blueprint graph', 'Programmer saves changes into Jam_Main while testing', 'Designer duplicates BP_PowerDoor and edits their copy'],
        correct: 1,
        feedback: 'Clear asset ownership lets both students work in parallel while minimising binary conflicts.'
      },
      {
        q: 'Why can Student B open the same Unreal project after cloning the repository?',
        options: ['GitHub remotely runs Student A’s Unreal Editor', 'The repository contains the actual project files, so cloning creates Student B’s own local copy', 'Unreal automatically streams the project from GitHub', 'The project only exists in the cloud'],
        correct: 1,
        feedback: 'Each student has a separate local copy. GitHub synchronises committed versions between those copies.'
      }
    ],
    mistakes: [
      'Opening Unreal and starting work before pulling the latest team version.',
      'Assuming GitHub is live co-editing like Google Docs.',
      'Both students editing the same .uasset or .umap file.',
      'Using vague commit messages such as “stuff” or “final”.',
      'Saving locally but forgetting to commit and push before leaving.',
      'Pulling a repository and then creating a second fresh Unreal project instead of opening the existing .uproject.',
      'Committing Saved, Intermediate, DerivedDataCache or other generated folders.',
      'Clicking force-push/discard/conflict buttons without understanding which Unreal asset version should be kept.'
    ],
    makeItYours: [
      'Add a short README that names the two team roles and which folders/assets each person owns.',
      'Use your commit history as a mini production log: each message should make the project’s development readable.',
      'In the next micro-jam, swap Programmer and Designer roles so both students experience both sides of the handover.'
    ],
    worksWhen: [
      'Both students can clone/open the same Unreal project on separate PCs.',
      'A Designer map change can be pushed and pulled successfully to the Programmer’s PC.',
      'A Programmer Blueprint change can be pushed and pulled successfully to the Designer’s PC.',
      'Both students can explain Push, Pull and Commit in plain English.',
      'Each important Unreal asset has one agreed owner at a time.',
      'The team ends a lesson with meaningful commits pushed and GitHub Desktop showing the branch is up to date.'
    ],
    referenceImages: [],
    source: {
      title: 'GitHub Docs — GitHub Desktop',
      url: 'https://docs.github.com/en/desktop'
    }
  };

  if (!tools.tutorials.some(t => t.id === tutorial.id)) tools.tutorials.push(tutorial);
})();

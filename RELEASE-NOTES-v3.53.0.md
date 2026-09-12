# UE5 Learning Hub v3.53.0 — GitHub Team Workflow

## What changed

Added a new long-form Unreal Learning Master Guide:

**GitHub + Unreal: Two-Person Team Workflow**

Direct route:

`#/tutorial/github-unreal-team-workflow`

The guide is designed for students who are complete beginners to both GitHub and collaborative Unreal work.

## Student workflow covered

- what GitHub is doing: two local project copies, one shared repository;
- GitHub Desktop sign-in and same Unreal-version check;
- Student A creates a private repository;
- Student A invites Student B as a collaborator;
- clone the repository locally;
- check `.gitattributes` / `.gitignore` safety before adding Unreal;
- put the Unreal project inside the repository;
- first commit and push;
- Student B clones and opens the `.uproject`;
- Designer → Programmer handshake test;
- Programmer → Designer handshake test;
- binary-asset ownership rule;
- everyday Pull → Work → Save → Commit → Push routine;
- useful commit messages;
- conflict STOP rule;
- end-of-lesson handover.

## Visual support

Nine local classroom teaching diagrams are included under:

`assets/github-team-guide/`

They cover repository creation, private visibility, collaborator invite, clone, commit, push, fetch/pull and the daily team workflow. The guide captions explicitly describe them as Hub teaching diagrams and link to the matching official GitHub documentation.

## Industry & Careers bridge

Chapter 2 — **The People Who Make Games** now contains a direct bridge to the GitHub team guide so students can immediately put role interdependence into practice during the two-person jam.

## Revision

The Master Guide contributes five scenario questions to central Revision covering:

- safe pull workflow;
- binary conflict response;
- Push meaning;
- asset ownership;
- local-copy vs cloud-project understanding.

## Navigation / copy cleanup

Unreal Learning Master Guide copy has been generalised so Master Guides can cover full production workflows as well as Landscape and Sequencer engine workflows.

## Backend / database

No Supabase schema change.

No `backend.js` change.

No new polling, Storage reads or network-heavy content. All new guide images are static local PNGs.

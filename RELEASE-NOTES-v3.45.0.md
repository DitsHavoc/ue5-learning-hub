# UE5 Learning Hub v3.45.0 — Student Journey / Navigation Pass

## Why this release exists
The Hub now contains a very large amount of strong learning material. v3.45.0 deliberately adds **no new learning content**. It makes the existing content easier to enter, continue and understand.

## Home now answers three questions first
1. **Class Focus** — what the group is currently working on.
2. **Continue Your Work** — the student’s own last meaningful learning destination.
3. **Find / Explore** — search or choose a Guided Path.

The Hub therefore suggests without deciding for the student.

## Class Focus
Teacher control lives on:

**Classes → Class Focus**

Teachers can:
- choose a class;
- choose any major Hub area or Guided Path;
- write a short lesson-specific instruction;
- start it now or schedule it for later;
- optionally set an end time;
- queue several future focuses;
- edit or delete scheduled items.

A newer scheduled focus automatically supersedes an older open-ended one when its start time arrives.

Students:
- see the current Class Focus at the top of Home;
- can still continue their own 3D / Unreal / Designer / Theory / Guided Path work;
- can open the previous class task for up to seven days when available.

## Continue Your Work
The Hub remembers the student’s last meaningful learning route across:
- Guided Paths
- Unreal lessons
- Quick Tutorials
- Designer Studio
- Game Design Theory
- 3D Modelling
- Sculpt
- Chapter Builds / Building Blocks

It deliberately ignores News, Leaderboard, Resources and other support pages so a quick visit does not hijack the student’s main work.

## Homepage cleanup
- “Choose where to learn” replaced with **“What are you here to do?”**
- misleading core-only “Next Mission” card is hidden on Home;
- Guided Path count is dynamic rather than hard-coded to 3;
- major learning destinations remain available but are visually quieter;
- Quick Tutorials / Building Blocks / Revision / Critique / Resources / Cheat Sheet become a compact support strip;
- Leaderboard moves lower down the page.

## Sidebar cleanup
- five main learning destinations stay immediately visible;
- Critique / Sculpt / News sit behind a small **More areas** reveal;
- Study Tools, Reference and Community & Progress are collapsible;
- the open/closed state is remembered;
- if a student navigates directly into a collapsed section, that section opens automatically.

## Database
The additive Class Focus migration was applied to Supabase project `zuqjrxcdgevutyyzsmni` on 8 September 2026.

It adds:
- `class_focus_items`
- `get_my_class_focus()`
- `get_class_focus_schedule(uuid)`
- `save_class_focus_item(...)`
- `delete_class_focus_item(uuid)`

Direct table access is revoked from normal browser roles; the authenticated RPCs use the Hub’s existing class teacher/member access checks.

## Files to upload
- `index.html`
- `journey-cleanup.css`
- `journey-cleanup.js`

The SQL file is included as a record only — **do not run it again** unless rebuilding another Supabase project.

## What this release does NOT change
- app.js
- backend.js
- roster-controls.js
- course/tutorial/theory/design/pathway data
- Prison Cell
- Prison Escape
- Blueprint Foundations
- 3D content
- XP/progress rules
- Supabase Auth/signup configuration
- existing sitewide visual CSS

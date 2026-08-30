-- v3.39.3 — Teams-first Hub: retire duplicate project/evidence submission writes without deleting historical data.
-- SELECT policies stay in place so existing records remain preserved for recovery/export.

-- Formal lesson evidence submissions are now handled in Microsoft Teams.
drop policy if exists "students create own submissions" on public.evidence_submissions;
drop policy if exists "submissions updated by editable owner or assigned teacher" on public.evidence_submissions;
drop policy if exists "students add files to editable submissions" on public.submission_files;
drop policy if exists "students delete files from editable submissions" on public.submission_files;

-- Collaborative Hub Projects are retired. Keep read policies, remove all mutation policies.
drop policy if exists "project owner updates project" on public.projects;
drop policy if exists "active project owner deletes project" on public.projects;

drop policy if exists "class teachers create project templates" on public.project_templates;
drop policy if exists "class teachers update project templates" on public.project_templates;
drop policy if exists "class teachers delete project templates" on public.project_templates;

drop policy if exists "active owner removes members or member leaves" on public.project_members;
drop policy if exists "active members update own role label" on public.project_members;

drop policy if exists "lead or teacher creates milestones" on public.project_milestones;
drop policy if exists "team lead or teacher updates milestones" on public.project_milestones;
drop policy if exists "lead or teacher deletes milestones" on public.project_milestones;

drop policy if exists "active members create own project updates" on public.project_updates;
drop policy if exists "active authors update own project updates" on public.project_updates;
drop policy if exists "active authors delete own project updates" on public.project_updates;

drop policy if exists "active members add own project media" on public.project_media;
drop policy if exists "active uploader updates own project media caption" on public.project_media;
drop policy if exists "active uploader deletes own project media" on public.project_media;

drop policy if exists "members active or teachers review project comments" on public.project_comments;
drop policy if exists "teachers add overall project feedback" on public.project_comments;
drop policy if exists "authors update own project comments while reviewable" on public.project_comments;
drop policy if exists "authors delete own project comments while reviewable" on public.project_comments;

-- Stop both old project uploads and old lesson-evidence uploads at Storage level.
drop policy if exists "project media storage upload" on storage.objects;
drop policy if exists "project media legacy thumbnail upload" on storage.objects;
drop policy if exists "project media storage delete own" on storage.objects;
drop policy if exists "students upload editable evidence" on storage.objects;
drop policy if exists "students update editable evidence" on storage.objects;
drop policy if exists "students delete editable evidence" on storage.objects;

-- Old project RPCs must not provide a mutation path after the UI is retired.
revoke execute on function public.join_project_by_code(text) from public, anon, authenticated;
revoke execute on function public.regenerate_project_join_code(uuid) from public, anon, authenticated;
revoke execute on function public.reopen_project(uuid) from public, anon, authenticated;
revoke execute on function public.start_project_from_template(uuid,text) from public, anon, authenticated;

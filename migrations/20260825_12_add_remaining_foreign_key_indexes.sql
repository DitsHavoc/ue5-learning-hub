create index if not exists teacher_bootstrap_used_by_idx on private.teacher_bootstrap(used_by) where used_by is not null;
create index if not exists class_teachers_added_by_idx on public.class_teachers(added_by) where added_by is not null;
create index if not exists teacher_invites_used_by_idx on public.teacher_invites(used_by) where used_by is not null;

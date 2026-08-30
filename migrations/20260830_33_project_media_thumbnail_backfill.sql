-- v3.39.3 — bandwidth pass: allow safe one-time thumbnail backfill for legacy project screenshots.
-- Existing project-media write policy is unchanged. This extra policy only permits a .thumb.webp
-- beside an existing project-media object, and only to the uploader or a teacher assigned to that project.

create or replace function private.can_write_project_thumbnail_path(p_path text)
returns boolean
language sql
stable
security definer
set search_path = pg_catalog, public, private, storage
as $$
  select
    right(coalesce(p_path,''),11) = '.thumb.webp'
    and (
      (
        split_part(coalesce(p_path,''),'/',2) = (select auth.uid())::text
        and (select private.project_is_member((select private.project_id_from_media_path(p_path)),(select auth.uid())))
      )
      or (select private.teacher_can_access_project((select private.project_id_from_media_path(p_path))))
    )
    and exists(
      select 1
      from storage.objects o
      where o.bucket_id = 'project-media'
        and o.name = left(p_path, greatest(length(p_path)-11,0))
    );
$$;

revoke all on function private.can_write_project_thumbnail_path(text) from public, anon;
grant execute on function private.can_write_project_thumbnail_path(text) to authenticated;

drop policy if exists "project media legacy thumbnail upload" on storage.objects;
create policy "project media legacy thumbnail upload" on storage.objects
for insert to authenticated
with check (
  bucket_id='project-media'
  and (select private.can_write_project_thumbnail_path(name))
);

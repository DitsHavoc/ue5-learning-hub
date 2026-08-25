grant execute on function private.project_is_member(uuid,uuid) to authenticated;
grant execute on function private.project_is_owner(uuid,uuid) to authenticated;
grant execute on function private.teacher_can_access_project(uuid) to authenticated;
grant execute on function private.shares_project_with(uuid) to authenticated;
grant execute on function private.project_id_from_media_path(text) to authenticated;
grant execute on function private.can_read_project_media_path(text) to authenticated;
grant execute on function private.can_write_project_media_path(text) to authenticated;

create or replace function private.user_is_student(p_user uuid) returns boolean language sql stable security definer set search_path=pg_catalog,public as $$select exists(select 1 from public.profiles where id=p_user and role='student')$$;
revoke all on function private.user_is_student(uuid) from public; grant execute on function private.user_is_student(uuid) to authenticated;

create or replace function private.guard_class_update() returns trigger language plpgsql security definer set search_path=pg_catalog,public as $$begin if new.id is distinct from old.id or new.teacher_id is distinct from old.teacher_id or new.created_at is distinct from old.created_at then raise exception 'Class ownership and identity cannot be changed here.'; end if; new.name:=btrim(new.name); new.academic_year:=btrim(coalesce(new.academic_year,'')); return new; end$$;
drop trigger if exists trg_guard_class_update on public.classes;
create trigger trg_guard_class_update before update on public.classes for each row execute function private.guard_class_update();

create or replace function private.normalise_class_teacher_insert() returns trigger language plpgsql security definer set search_path=pg_catalog,public as $$begin if auth.uid() is not null then new.added_by:=auth.uid(); new.created_at:=now(); end if; return new; end$$;
drop trigger if exists trg_normalise_class_teacher_insert on public.class_teachers;
create trigger trg_normalise_class_teacher_insert before insert on public.class_teachers for each row execute function private.normalise_class_teacher_insert();

alter table public.profiles drop constraint if exists profiles_display_name_check;
alter table public.profiles add constraint profiles_display_name_check check(char_length(btrim(display_name)) between 2 and 100);
alter table public.classes drop constraint if exists classes_name_check;
alter table public.classes add constraint classes_name_check check(char_length(btrim(name)) between 2 and 100);
alter table public.classes drop constraint if exists classes_academic_year_check;
alter table public.classes add constraint classes_academic_year_check check(char_length(academic_year)<=40);

drop policy if exists "assigned teachers insert memberships" on public.class_members;
create policy "assigned teachers insert student memberships" on public.class_members for insert to authenticated with check ((select private.teacher_has_class_access(class_id)) and (select private.user_is_student(user_id)));

create or replace function private.guard_evidence_submission_write() returns trigger language plpgsql security definer set search_path=pg_catalog,public as $$
declare v_uid uuid:=auth.uid(); v_teacher boolean:=coalesce(private.is_teacher(),false);
begin
 if v_uid is null then raise exception 'Authentication required.'; end if;
 if tg_op='INSERT' then
   if v_teacher then raise exception 'Teachers cannot create student evidence submissions.'; end if;
   new.user_id:=v_uid; new.teacher_feedback:=''; new.reviewed_by:=null; new.reviewed_at:=null; new.created_at:=now(); new.updated_at:=now();
   if new.status='submitted' then new.submitted_at:=now(); else new.submitted_at:=null; end if; return new;
 end if;
 if v_teacher then
   if new.user_id is distinct from old.user_id or new.lesson_id is distinct from old.lesson_id or new.mechanic_id is distinct from old.mechanic_id or new.reflection is distinct from old.reflection or new.evidence_url is distinct from old.evidence_url or new.submitted_at is distinct from old.submitted_at or new.created_at is distinct from old.created_at then raise exception 'Teachers may review evidence but cannot alter student work.'; end if;
   if new.status not in ('changes_required','approved') then raise exception 'Teacher review status must be Changes Required or Approved.'; end if;
   new.reviewed_by:=v_uid; new.reviewed_at:=now(); new.updated_at:=now(); return new;
 end if;
 if old.user_id<>v_uid then raise exception 'You can only edit your own evidence.'; end if;
 if new.user_id is distinct from old.user_id or new.lesson_id is distinct from old.lesson_id or new.mechanic_id is distinct from old.mechanic_id or new.teacher_feedback is distinct from old.teacher_feedback or new.reviewed_by is distinct from old.reviewed_by or new.reviewed_at is distinct from old.reviewed_at or new.created_at is distinct from old.created_at then raise exception 'Protected evidence fields cannot be changed.'; end if;
 new.updated_at:=now();
 if new.status='submitted' and old.status is distinct from 'submitted' then new.submitted_at:=now(); else new.submitted_at:=old.submitted_at; end if;
 return new;
end$$;
drop trigger if exists trg_guard_evidence_submission_write on public.evidence_submissions;
create trigger trg_guard_evidence_submission_write before insert or update on public.evidence_submissions for each row execute function private.guard_evidence_submission_write();

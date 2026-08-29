-- v3.36.0 follow-up: enforce the same meaningful-feedback floor server-side as the UI.
alter table public.critique_feedback drop constraint if exists critique_feedback_works_well_check;
alter table public.critique_feedback drop constraint if exists critique_feedback_clearer_check;
alter table public.critique_feedback drop constraint if exists critique_feedback_change_try_check;
alter table public.critique_feedback add constraint critique_feedback_works_well_check check (char_length(works_well) between 12 and 600);
alter table public.critique_feedback add constraint critique_feedback_clearer_check check (char_length(clearer) between 12 and 600);
alter table public.critique_feedback add constraint critique_feedback_change_try_check check (char_length(change_try) between 12 and 600);

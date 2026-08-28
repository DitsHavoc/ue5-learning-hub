-- v3.34.7 — richer project evidence attachments + external share links

alter table public.project_updates
  add column if not exists external_url text not null default '',
  add column if not exists external_label text not null default '';

update storage.buckets
set allowed_mime_types = array[
  'image/png',
  'image/jpeg',
  'image/webp',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
]::text[],
file_size_limit = 10485760
where id = 'project-media';

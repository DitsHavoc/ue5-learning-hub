-- v3.39.4 — Network Quiet pass
-- Retired Projects/evidence are preserved for admin recovery, but stale Hub clients must not keep serving their large media.

-- The v3.39.3 product no longer exposes these files in the live Hub. Removing the
-- authenticated Storage SELECT policies prevents old tabs/builds from minting new
-- signed download URLs. Objects remain stored and recoverable by project admins.
drop policy if exists "project media storage read" on storage.objects;
drop policy if exists "students read own evidence" on storage.objects;
drop policy if exists "assigned teachers read evidence" on storage.objects;

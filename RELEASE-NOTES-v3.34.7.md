# UE5 Learning Hub v3.34.7 — Project Files & Larger-Work Links

Project milestone evidence can now contain normal classroom documents as well as screenshots.

## Student evidence changes
- Milestone evidence accepts up to 6 uploaded files per entry, with the existing 10 MB per-file limit.
- Supported uploads: PNG, JPG/JPEG, WebP, PDF, DOC, DOCX, PPT, PPTX, XLS and XLSX.
- Images still render as visual thumbnails.
- PDF, Word, PowerPoint and Excel files render as clear attachment cards with filename, type, size, optional note and an **Open file** action.
- File captions are now described as **File captions / notes** so they make sense for documents too.
- Each milestone evidence entry has an optional **Link to larger work** plus an optional label.
- The link is intended for large builds, gameplay/video, source projects or other files stored in OneDrive, Google Drive, SharePoint or another shared service.
- The student-facing help explicitly reminds students to give their teacher permission to view the shared link.
- Share links are restricted to normal `http://` or `https://` URLs.

## Storage / database
Migration:
`migrations/20260828_25_project_evidence_documents_and_links.sql`

It:
- adds `external_url` and `external_label` to `project_updates`
- widens the private `project-media` storage bucket from image-only uploads to the supported document MIME types
- keeps the storage limit at 10 MB per file

Existing screenshots, evidence, comments, milestones and project records are unchanged.

The migration was applied to the live Supabase project on 28 Aug 2026.

Builds on v3.34.6.

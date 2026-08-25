# UE5 Learning Hub — V1

A static classroom learning website for Unreal Engine 5.

## What V1 includes

- Dashboard
- Four learning paths
- 12 seeded lessons
- Learning aims and success goals
- Guided build steps
- Quick-check quizzes
- Stretch tasks
- Independent challenge tasks
- "Play it or watch it" game-analysis tasks
- Homework tasks
- One-click homework copy for Teams
- Common problems / good practice
- Search
- UE5 glossary
- Local progress saving
- XP and levels
- Responsive layout
- No database and no login required

## Hosting with GitHub Pages

1. Create a GitHub repository.
2. Upload all files and folders from this project.
3. In GitHub open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save.
7. GitHub will provide the Pages URL after deployment.

## Important files

- `index.html` — page shell
- `styles.css` — all visual styling
- `app.js` — routing, search, progress, XP, quizzes and interaction
- `data/lessons.js` — learning paths, lessons and glossary

Most future content updates should happen in `data/lessons.js`.

## Progress

Progress is saved using the browser's `localStorage`.

That means:
- no accounts are needed;
- it works on GitHub Pages;
- progress stays on that browser/device;
- clearing browser storage clears progress.

A future version could use Supabase if cloud student accounts/progress are wanted.

## Media

Each lesson currently contains a media placeholder. This is intentional.

A future version can add an `assets/` media library and lesson fields for:
- screenshot
- animated GIF
- short MP4
- YouTube embed

The content/data separation means media can be replaced without rebuilding the app.

## Content note

The lesson content is original classroom material informed by established Unreal Engine teaching concepts. It does not reproduce book text or images.

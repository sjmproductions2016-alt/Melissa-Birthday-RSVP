# Asset Path Rules

## Purpose

Prevent broken images, missing media, invalid imports, and incorrect asset paths.

## Core Rule

Never guess asset paths. Inspect the repo first.

## Required Asset Workflow

Before using images, video, audio, fonts, PDFs, or other files:

1. Locate the actual asset folder.
2. Confirm exact file names.
3. Confirm capitalization.
4. Confirm file extensions.
5. Confirm whether assets belong in `public`, `src/assets`, or another folder.
6. Use paths that match the framework.

## Common Rules

For Vite/React:

- Public assets usually use `/filename.ext` or `/images/filename.ext`
- Imported assets usually live in `src/assets`
- Do not reference files that do not exist

For Next.js:

- Public assets usually live in `public`
- Use paths beginning with `/`
- Use Next Image only when configured properly

## Do Not

- Invent image names
- Invent file paths
- Reference placeholder assets unless explicitly requested
- Leave broken image tags
- Hide critical content inside images only
- Change asset folder structure without reason

## Final Check

Before finalizing:

1. List all image/media paths used.
2. Confirm every referenced file exists.
3. Add useful alt text.
4. Use fallback behavior if an optional asset is missing.

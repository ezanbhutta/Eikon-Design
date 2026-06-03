# assets-source/ — local staging (NOT committed)

Everything in this folder is **gitignored** except this README. It's a
staging area for **big original files** so they never bloat the repo.

## Workflow

1. Drop your originals here (subfolders welcome), e.g.:
   ```
   assets-source/
     lumen-optics/
       logo.png        ← big export
       mockup.jpg      ← big mockup
       logo.svg        ← vector export (best)
   ```
2. Run the optimizer:
   ```bash
   npm run optimize
   ```
3. It writes web-ready assets to `public/work/` (JPEG/PNG → WebP, resized;
   SVG → minified). **Only that optimized output is committed.**
4. Keep the heavy masters (PDF, .ai, .psd, full-res JPEG) in Google
   Drive / Dropbox — not in git.

## Notes

- **Logos:** export **SVG** from Illustrator/Figma — tiny, infinitely
  scalable, and theme-aware. PDFs can't be converted here.
- **Photos / mockups:** any JPEG/PNG is fine; the script compresses them.
- Tune output with env vars: `MAX_WIDTH=2400 QUALITY=82 npm run optimize`.

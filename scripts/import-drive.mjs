/**
 * Batch-import Drive images. Scans the harness tool-results dirs for any
 * `download_file_content` JSON results ({content:<base64>, mimeType, title}),
 * derives a clean slug from each file's title, and optimizes to WebP in
 * public/work/. Order-independent and idempotent.
 *
 * Usage: node scripts/import-drive.mjs
 */
import { readdirSync, readFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = "/root/.claude/projects/-home-user-Eikon-Design";

function findResultFiles() {
  const found = [];
  let sessions = [];
  try {
    sessions = readdirSync(ROOT);
  } catch {
    return found;
  }
  for (const session of sessions) {
    const dir = path.join(ROOT, session, "tool-results");
    let entries = [];
    try {
      entries = readdirSync(dir);
    } catch {
      continue;
    }
    for (const name of entries) {
      if (name.includes("download_file_content") && name.endsWith(".txt")) {
        found.push(path.join(dir, name));
      }
    }
  }
  return found;
}

function slugify(title) {
  return title
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/\b(branding kit|brand kit|image|logo|final|files?|kit)\b/gi, "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const seen = new Set();
let count = 0;

for (const file of findResultFiles()) {
  let json;
  try {
    json = JSON.parse(readFileSync(file, "utf8"));
  } catch {
    continue;
  }
  if (!json?.content || !String(json.mimeType ?? "").startsWith("image/")) continue;

  const slug = slugify(json.title ?? "");
  if (!slug || seen.has(slug)) continue;
  seen.add(slug);

  const outPath = path.join("public/work", `${slug}.webp`);
  mkdirSync(path.dirname(outPath), { recursive: true });
  const info = await sharp(Buffer.from(json.content, "base64"))
    .rotate()
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(outPath);

  count++;
  console.log(
    `  ${(json.title ?? "").padEnd(34)} → ${slug}.webp  ${String(Math.round(info.size / 1024)).padStart(4)} KB  ${info.width}×${info.height}`,
  );
}

console.log(`\nImported ${count} image(s) to public/work/`);

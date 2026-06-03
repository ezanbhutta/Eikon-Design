/**
 * Asset optimizer.
 *
 * Drop big originals (JPEG/PNG/SVG) into `assets-source/` (gitignored),
 * then run `npm run optimize`. Raster images are resized + converted to
 * WebP; SVGs are minified with SVGO. Output lands in `public/work/`,
 * preserving subfolders — commit ONLY that optimized output.
 *
 * PDFs / .ai / .psd cannot be converted here: export SVG (logos) or
 * a high-res PNG/JPEG (artwork) from your design tool first.
 *
 * Tunables: MAX_WIDTH (default 2000), QUALITY (default 80).
 */
import { readdir, mkdir, stat, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { optimize } from "svgo";

const SRC = "assets-source";
const OUT = "public/work";
const MAX_WIDTH = Number(process.env.MAX_WIDTH ?? 2000);
const QUALITY = Number(process.env.QUALITY ?? 80);
const RASTER = new Set([".jpg", ".jpeg", ".png", ".tif", ".tiff", ".avif"]);

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.name.startsWith(".")) continue;
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

function fmt(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

async function main() {
  if (!existsSync(SRC)) {
    console.log(`No "${SRC}/" folder. Create it, add JPEG/PNG/SVG originals, and re-run.`);
    return;
  }
  const files = await walk(SRC);
  if (files.length === 0) {
    console.log(`"${SRC}/" is empty — drop JPEG/PNG/SVG files in (subfolders OK) and re-run.`);
    return;
  }

  let totalIn = 0;
  let totalOut = 0;
  let count = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === ".md") continue;
    const rel = path.relative(SRC, file);
    const inSize = (await stat(file)).size;

    if (RASTER.has(ext)) {
      const outPath = path.join(OUT, rel.replace(/\.[^.]+$/, ".webp"));
      await mkdir(path.dirname(outPath), { recursive: true });
      await sharp(file)
        .rotate()
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outPath);
      const outSize = (await stat(outPath)).size;
      totalIn += inSize;
      totalOut += outSize;
      count++;
      const saved = Math.round((1 - outSize / inSize) * 100);
      console.log(`  ${rel}  ${fmt(inSize)} → ${path.relative(".", outPath)}  ${fmt(outSize)}  (-${saved}%)`);
    } else if (ext === ".svg") {
      const outPath = path.join(OUT, rel);
      await mkdir(path.dirname(outPath), { recursive: true });
      const { data } = optimize(await readFile(file, "utf8"), { multipass: true });
      await writeFile(outPath, data);
      const outSize = Buffer.byteLength(data);
      totalIn += inSize;
      totalOut += outSize;
      count++;
      console.log(`  ${rel}  ${fmt(inSize)} → ${path.relative(".", outPath)}  ${fmt(outSize)}  (svg)`);
    } else {
      console.log(`  skip ${rel} — unsupported (${ext}). Export SVG or PNG/JPEG from your design tool.`);
    }
  }

  console.log(`\nDone. ${count} file(s): ${fmt(totalIn)} → ${fmt(totalOut)} written to ${OUT}/`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

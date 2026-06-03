/**
 * Crop the consistent Eikon branding-board template into its individual
 * pieces (clean logo + mockups), so the portfolio shows real parts rather
 * than the whole busy board.
 *
 * All boards share the same grid, so one set of fractional regions works
 * for every project. Output → public/work/<slug>-<region>.webp.
 *   node scripts/crop-boards.mjs
 */
import { readFileSync } from "node:fs";
import sharp from "sharp";

const slugs = [
  "sooshigo",
  "oceanexis",
  "pixoro",
  "rav7n",
  "bodytone",
  "cramberly",
  "dymora-lab",
  "velox",
  "mistory",
];

/** Regions as fractions of each board (left, top, width, height). */
const regions = {
  logo: { left: 0.281, top: 0.362, width: 0.408, height: 0.55 },
  poster: { left: 0.029, top: 0.041, width: 0.196, height: 0.565 },
  social: { left: 0.739, top: 0.041, width: 0.238, height: 0.563 },
  card: { left: 0.739, top: 0.665, width: 0.238, height: 0.287 },
};

for (const slug of slugs) {
  const src = `public/work/${slug}.webp`;
  let meta;
  try {
    meta = await sharp(readFileSync(src)).metadata();
  } catch {
    console.log(`  ! missing ${src}`);
    continue;
  }
  const W = meta.width ?? 1600;
  const H = meta.height ?? 1078;

  for (const [name, r] of Object.entries(regions)) {
    const left = Math.round(r.left * W);
    const top = Math.round(r.top * H);
    const width = Math.min(Math.round(r.width * W), W - left);
    const height = Math.min(Math.round(r.height * H), H - top);
    const out = `public/work/${slug}-${name}.webp`;
    await sharp(readFileSync(src))
      .extract({ left, top, width, height })
      .webp({ quality: 86 })
      .toFile(out);
    console.log(`  ${slug}-${name}.webp  ${width}×${height}`);
  }
}

console.log("\nDone cropping boards.");

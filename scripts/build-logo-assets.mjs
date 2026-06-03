/**
 * Rasterize the real Eikon logo (public/eikon-logo.svg) into the icon
 * assets Next.js needs. Run once after updating the logo.
 *   node scripts/build-logo-assets.mjs
 */
import { readFileSync } from "node:fs";
import sharp from "sharp";

const svg = readFileSync("public/eikon-logo.svg");
const render = (size) =>
  sharp(svg, { density: 360 }).resize(size, size, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  });

// Transparent full-res PNG (general use + OG)
await render(512).png().toFile("public/eikon-logo.png");

// Favicon (transparent)
await render(256).png().toFile("src/app/icon.png");

// Apple touch icon — full-bleed (the logo is a solid gradient square; iOS rounds it)
await render(180).png().toFile("src/app/apple-icon.png");

// Sanity: report corner vs centre alpha/colour
const { data, info } = await render(64)
  .raw()
  .ensureAlpha()
  .toBuffer({ resolveWithObject: true });
const at = (x, y) => {
  const i = (y * info.width + x) * info.channels;
  return `rgba(${data[i]},${data[i + 1]},${data[i + 2]},${data[i + 3]})`;
};
console.log("corner(2,2):", at(2, 2), " center(32,32):", at(32, 32));
console.log("Wrote public/eikon-logo.png, src/app/icon.png, src/app/apple-icon.png");

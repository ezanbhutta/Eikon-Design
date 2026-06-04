import { chromium } from "playwright";

const url = process.argv[2] ?? "http://localhost:3000";
const out = process.argv[3] ?? "/tmp/shot.png";
const full = process.argv[4] === "full";
const wait = Number(process.argv[5] ?? 4200);

const browser = await chromium.launch({
  args: [
    "--enable-unsafe-swiftshader",
    "--ignore-gpu-blocklist",
    "--use-gl=angle",
    "--use-angle=swiftshader",
    "--no-sandbox",
  ],
});
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});
await page.goto(url, { waitUntil: "load" });
await page.waitForTimeout(wait);
await page.screenshot({ path: out, fullPage: full });
await browser.close();
console.log("shot →", out);

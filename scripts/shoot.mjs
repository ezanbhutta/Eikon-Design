import { chromium } from "playwright";

const url = process.argv[2] ?? "http://localhost:3000";
const out = process.argv[3] ?? "/tmp/shot.png";
const wait = Number(process.argv[4] ?? 4500);
const scroll = process.argv[5]; // optional CSS selector to scroll into view

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

if (scroll) {
  await page.evaluate((sel) => {
    document.querySelector(sel)?.scrollIntoView({ block: "start" });
  }, scroll);
  await page.waitForTimeout(2200);
}

await page.screenshot({ path: out });
await browser.close();
console.log("shot →", out);

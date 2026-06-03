import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logo = readFileSync(join(process.cwd(), "public/eikon-logo.png")).toString(
  "base64",
);

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0b0c",
          padding: "80px",
          color: "#f2f0ea",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <img
            src={`data:image/png;base64,${logo}`}
            width={92}
            height={92}
            style={{ borderRadius: 22 }}
            alt=""
          />
          <div
            style={{ fontSize: 30, letterSpacing: 12, textTransform: "uppercase" }}
          >
            {`${site.name} Designs`}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 74,
            lineHeight: 1.05,
            maxWidth: 960,
          }}
        >
          <span>Logos &amp; identities, built to be&nbsp;</span>
          <span style={{ color: "#ff5a36" }}>remembered.</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#8a8a82",
          }}
        >
          <span>{site.tagline}</span>
          <span>{new URL(site.url).host}</span>
        </div>
      </div>
    ),
    size,
  );
}

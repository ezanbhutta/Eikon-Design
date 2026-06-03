import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#0a0a0b",
          padding: "80px",
          color: "#f4f2ec",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              border: "2px solid #e8b25a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#e8b25a",
              fontSize: 40,
              fontWeight: 700,
            }}
          >
            E
          </div>
          <div style={{ fontSize: 30, letterSpacing: 12, textTransform: "uppercase" }}>
            {site.name}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 76,
            lineHeight: 1.05,
            maxWidth: 920,
          }}
        >
          <span>Logos &amp; identities, built to be&nbsp;</span>
          <span style={{ color: "#e8b25a", fontStyle: "italic" }}>
            remembered.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#9a9a93",
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

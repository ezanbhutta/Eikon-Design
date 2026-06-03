import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const ogBar = {
    width: 42,
    height: 9,
    borderRadius: 5,
    background: "#ffffff",
  } as const;

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
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 22,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 9,
              background:
                "linear-gradient(135deg, #ff4f93 0%, #ff6a64 55%, #ff6b4c 100%)",
            }}
          >
            <div style={ogBar} />
            <div style={ogBar} />
            <div style={{ ...ogBar, width: 38 }} />
          </div>
          <div
            style={{ fontSize: 30, letterSpacing: 12, textTransform: "uppercase" }}
          >
            {site.name}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 76,
            lineHeight: 1.05,
            maxWidth: 940,
          }}
        >
          <span>Logos &amp; identities, built to be&nbsp;</span>
          <span style={{ color: "#ff7a6b", fontStyle: "italic" }}>
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

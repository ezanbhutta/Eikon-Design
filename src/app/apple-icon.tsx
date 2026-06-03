import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon — full-bleed gradient (iOS applies its own rounding). */
export default function AppleIcon() {
  const bar = {
    width: 84,
    height: 17,
    borderRadius: 9,
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
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          background: "linear-gradient(135deg, #ff4f93 0%, #ff6a64 55%, #ff6b4c 100%)",
        }}
      >
        <div style={bar} />
        <div style={bar} />
        <div style={{ ...bar, width: 78 }} />
      </div>
    ),
    size,
  );
}

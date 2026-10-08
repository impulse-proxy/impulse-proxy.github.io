import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

// Static exports require generated metadata images to be rendered at build time.
export const dynamic = "force-static";
export const alt = "Impulse, an HTTP/3 and QUIC edge runtime";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: "#09090b",
        color: "#fafafa",
        display: "flex",
        flexDirection: "column",
        fontFamily: "sans-serif",
        height: "100%",
        justifyContent: "space-between",
        padding: "72px 80px",
        width: "100%",
      }}
    >
      <div style={{ alignItems: "center", display: "flex", gap: 18 }}>
        <div
          style={{
            alignItems: "center",
            background: "#fafafa",
            borderRadius: 16,
            color: "#09090b",
            display: "flex",
            fontSize: 34,
            fontWeight: 800,
            height: 64,
            justifyContent: "center",
            width: 64,
          }}
        >
          I
        </div>
        <span style={{ fontSize: 34, fontWeight: 700 }}>{siteConfig.name}</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-3px",
            lineHeight: 1.05,
            maxWidth: 980,
          }}
        >
          HTTP/3 and QUIC edge runtime
        </div>
        <div style={{ color: "#a1a1aa", display: "flex", fontSize: 30 }}>
          Route · Protect · Observe
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #3f3f46",
          color: "#d4d4d8",
          display: "flex",
          fontSize: 23,
          justifyContent: "space-between",
          paddingTop: 28,
        }}
      >
        <span>Open source</span>
        <span>{siteConfig.maturity} · Controlled production rollout</span>
      </div>
    </div>,
    size,
  );
}

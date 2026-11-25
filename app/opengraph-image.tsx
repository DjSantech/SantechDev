import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

export const alt = siteConfig.seo.title.es;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const highlights = ["Sistemas POS", "E-commerce con pagos", "Sitios corporativos", "Claude Code · MCP"];

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
          padding: "72px 80px",
          backgroundColor: "#09090b",
          backgroundImage: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(139,92,246,0.35), transparent)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700 }}>
            Santiago<span style={{ color: "#a78bfa" }}>Dev</span>
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#71717a" }}>{siteConfig.location}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>{siteConfig.name}</div>
          <div style={{ display: "flex", fontSize: 40, color: "#a1a1aa" }}>
            Desarrollador Full-Stack · <span style={{ color: "#a78bfa", marginLeft: 12 }}>Desarrollo con IA</span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
          {highlights.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                flexShrink: 0,
                whiteSpace: "nowrap",
                padding: "10px 18px",
                borderRadius: 999,
                border: "1px solid rgba(139,92,246,0.35)",
                backgroundColor: "rgba(139,92,246,0.12)",
                color: "#ddd6fe",
                fontSize: 22,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}

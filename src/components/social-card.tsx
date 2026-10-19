import { ImageResponse } from "next/og";

export const socialCardSize = { width: 1200, height: 630 };

export function createSocialCard() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "74px 82px",
          background: "radial-gradient(ellipse at 77% 48%, #10243b 0%, #080d17 42%, #05070d 78%)",
          color: "#f8fafc",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "670px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#94a3b8", fontSize: "18px", letterSpacing: "5px" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#32e69a" }} />
            PORTFOLIO / FRANCE
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: "48px", fontSize: "82px", fontWeight: 700, letterSpacing: "-6px", lineHeight: 0.98 }}>
            <span>FLORIAN</span>
            <span style={{ color: "#8390a5", fontSize: "64px" }}>JOVE GARCIA</span>
          </div>
          <div style={{ display: "flex", marginTop: "36px", color: "#d8e2ef", fontSize: "22px", letterSpacing: "2px" }}>
            <span style={{ color: "#37d7ff" }}>MOBILE</span>
            <span style={{ padding: "0 12px", color: "#66758b" }}>·</span>
            <span style={{ color: "#a79dff" }}>WEB</span>
            <span style={{ padding: "0 12px", color: "#66758b" }}>·</span>
            <span style={{ color: "#32e69a" }}>INFRASTRUCTURE</span>
          </div>
        </div>
        <div style={{ display: "flex", width: "250px", height: "250px", alignItems: "center", justifyContent: "center", border: "1px solid #334155", borderRadius: "50%", background: "radial-gradient(circle, #102034, #080d17 70%)", boxShadow: "0 0 70px rgba(55,215,255,.12)", fontSize: "64px", fontWeight: 700, letterSpacing: "-8px" }}>
          FJG
        </div>
        <div style={{ position: "absolute", right: "82px", bottom: "50px", display: "flex", gap: "10px" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#37d7ff" }} />
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#8e83ff" }} />
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#32e69a" }} />
        </div>
      </div>
    ),
    socialCardSize,
  );
}

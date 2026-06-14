import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#F5F7FC",
          color: "#172033",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Arial, sans-serif",
          height: "100%",
          justifyContent: "space-between",
          padding: 72,
          width: "100%",
        }}
      >
        <div
          style={{
            borderTop: "8px solid #315CD6",
            display: "flex",
            flexDirection: "column",
            paddingTop: 36,
          }}
        >
          <div style={{ fontSize: 78, fontWeight: 800, letterSpacing: "-3px", lineHeight: 1.05 }}>
            Pakon Poomson
          </div>
          <div style={{ fontSize: 38, fontWeight: 700, lineHeight: 1.18, marginTop: 30, maxWidth: 920 }}>
            Practical AI products, retrieval systems, and data workflows.
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid #CBD3E3",
            display: "flex",
            fontSize: 24,
            justifyContent: "space-between",
            paddingTop: 28,
          }}
        >
          <span>AI Engineer · GenAI · Data Systems</span>
          <span>github.com/Praciller</span>
        </div>
      </div>
    ),
    size,
  );
}

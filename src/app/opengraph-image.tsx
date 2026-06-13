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
          background: "#FAFAFA",
          color: "#0A0A0A",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Inter, Arial, sans-serif",
          height: "100%",
          justifyContent: "space-between",
          padding: 72,
          width: "100%",
        }}
      >
        <div
          style={{
            borderTop: "2px solid #0A0A0A",
            display: "flex",
            flexDirection: "column",
            paddingTop: 36,
          }}
        >
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05 }}>
            Pakon Poomson
          </div>
          <div style={{ fontSize: 42, fontWeight: 700, lineHeight: 1.15, marginTop: 32 }}>
            AI Engineer / GenAI Engineer / Data Engineer
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid #D4D4D8",
            display: "flex",
            fontSize: 24,
            justifyContent: "space-between",
            paddingTop: 28,
          }}
        >
          <span>GitHub: Praciller</span>
          <span>RAG / Multimodal AI / ML</span>
        </div>
      </div>
    ),
    size,
  );
}

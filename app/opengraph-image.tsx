import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lose Weight Today – Herbalife Independent Distributor Melbourne";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #2d8b3e 0%, #1a5e28 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Lose Weight Today
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#f59e0b",
              fontWeight: 600,
              marginBottom: 24,
            }}
          >
            Herbalife Independent Distributor – Melbourne
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#d1fae5",
              maxWidth: 700,
              lineHeight: 1.5,
            }}
          >
            Personalised weight-loss coaching, nutrition plans & Herbalife products. Walk-in 7 days 9am-8pm.
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 20,
              color: "white",
              background: "#f59e0b",
              padding: "12px 32px",
              borderRadius: 999,
              fontWeight: 600,
            }}
          >
            www.loseweighttoday.com.au
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

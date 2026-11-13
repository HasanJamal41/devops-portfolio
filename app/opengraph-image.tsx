import { ImageResponse } from "next/og";

// Link preview shown when the portfolio is shared on LinkedIn, WhatsApp, Slack or X.
export const alt = "Hasan Jamal, DevOps Engineer: Kubernetes, AWS, Azure and DevSecOps";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const tags = ["Kubernetes", "AWS", "Azure", "Terraform", "GitOps", "DevSecOps"];

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
          padding: 72,
          background:
            "radial-gradient(circle at 12% 0%, rgba(30,91,255,.55), transparent 50%), radial-gradient(circle at 100% 100%, rgba(123,61,255,.5), transparent 55%), #05060A",
          color: "#EEF0F6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #4FE3FF, #8B7CFF)",
              color: "#05060A",
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            HJ
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#C5CADB" }}>Islamabad, Pakistan · Open to new roles</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 800, letterSpacing: -3, lineHeight: 1 }}>Hasan Jamal</div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 46,
              fontWeight: 700,
              backgroundImage: "linear-gradient(90deg, #4FE3FF, #8B7CFF)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            DevOps Engineer · 3.5+ years
          </div>
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          {tags.map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                padding: "12px 22px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,.18)",
                background: "rgba(255,255,255,.05)",
                fontSize: 24,
                color: "#C5CADB",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}

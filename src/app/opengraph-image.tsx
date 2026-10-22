import { ImageResponse } from "next/og";

export const alt = "Financial Groove — Accounting expertise for arts and entertainment";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#000", color: "#fff", padding: "68px 78px", fontFamily: "sans-serif", position: "relative", overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}><div style={{ width: 58, height: 58, borderRadius: 16, background: "#EA1B75", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, fontWeight: 800 }}>FG</div><div style={{ display: "flex", fontSize: 34, fontWeight: 700, letterSpacing: -1 }}>financial&nbsp;<span style={{ color: "#EA1B75" }}>GROOVE</span></div></div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 950 }}><div style={{ color: "#EA1B75", fontSize: 24, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", marginBottom: 20 }}>Accounting for arts &amp; entertainment</div><div style={{ display: "flex", flexDirection: "column", fontSize: 86, lineHeight: .93, fontWeight: 800, letterSpacing: -3, textTransform: "uppercase" }}><span>You create.</span><span>We keep count.</span></div></div>
      <div style={{ position: "absolute", right: -70, bottom: -80, width: 330, height: 330, borderRadius: 999, border: "35px solid #EA1B75", opacity: .85 }} />
    </div>,
    size,
  );
}

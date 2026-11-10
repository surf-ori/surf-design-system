const BADGE_TONES = {
  orange: ["#FFF3E3", "#B85B00"], blue: ["#E3F1FB", "#005E99"], green: ["#E5F4EA", "#006B33"],
  red: ["#FDE9E7", "#B5241A"], purple: ["#F2E6F4", "#772583"], black: ["#000000", "#FFFFFF"],
};
export function Badge({ tone = "orange", shape = "pill", children }) {
  const [bg, fg] = BADGE_TONES[tone] || BADGE_TONES.orange;
  const label = shape === "label";
  return (
    <span style={{ display: "inline-flex", alignItems: "center", padding: label ? "4px 10px" : "5px 12px", background: bg, color: fg, borderRadius: label ? 4 : 999, font: `600 ${label ? 12 : 13}px/1.2 var(--font-body)`, textTransform: label ? "uppercase" : "none", letterSpacing: label ? "0.06em" : 0 }}>
      {children}
    </span>
  );
}

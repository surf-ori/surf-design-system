const NOTICE_TONES = {
  success: ["#E5F4EA", "#008942", "#005D2D"], info: ["#E3F1FB", "#0077C0", "#004F80"],
  warning: ["#FFF8DC", "#E6B800", "#735900"], error: ["#FDE9E7", "#DF3226", "#8A1C14"],
};
export function Notice({ tone = "info", title, children }) {
  const [bg, edge, fg] = NOTICE_TONES[tone] || NOTICE_TONES.info;
  return (
    <div role={tone === "error" ? "alert" : "status"} style={{ display: "flex", flexDirection: "column", gap: 2, padding: "12px 14px", background: bg, borderTop: `3px solid ${edge}`, borderRadius: 6, color: fg, font: "400 14px/1.45 var(--font-body)" }}>
      {title && <strong style={{ fontWeight: 700 }}>{title}</strong>}
      {children && <span>{children}</span>}
    </div>
  );
}

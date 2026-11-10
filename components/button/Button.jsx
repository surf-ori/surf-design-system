export function Button({ variant = "primary", size = "md", disabled = false, children, onClick, type = "button" }) {
  const pad = { sm: "8px 14px", md: "12px 22px", lg: "14px 26px" }[size];
  const fs = { sm: 13, md: 15, lg: 17 }[size];
  const rad = { sm: 8, md: 10, lg: 12 }[size];
  const v = {
    primary: { background: "var(--surf-orange)", color: "#fff", border: "1px solid var(--surf-orange)" },
    secondary: { background: "var(--surf-black)", color: "#fff", border: "1px solid var(--surf-black)" },
    outline: { background: "#fff", color: "var(--surf-black)", border: "1px solid var(--surf-black)" },
    text: { background: "transparent", color: "var(--surf-orange-700)", border: "1px solid transparent", padding: "12px 4px" },
  }[variant];
  return (
    <button type={type} disabled={disabled} onClick={onClick} style={{ display: "inline-flex", alignItems: "center", gap: 8, cursor: disabled ? "default" : "pointer", padding: pad, font: `700 ${fs}px/1 var(--font-body)`, borderRadius: rad, opacity: disabled ? 0.5 : 1, transition: "background var(--dur-fast) var(--ease-out)", ...v }}>
      {children}
    </button>
  );
}

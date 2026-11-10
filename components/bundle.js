/* @ds-bundle: {"format":4,"namespace":"SURFDesignSystem_019e21","components":[{"name":"Badge","sourcePath":"components/badge/Badge.jsx"},{"name":"Button","sourcePath":"components/button/Button.jsx"},{"name":"Notice","sourcePath":"components/notice/Notice.jsx"},{"name":"ThemeToggle"}],"sourceHashes":{"components/badge/Badge.jsx":"f7aaa5565f52","components/button/Button.jsx":"071a6fa89b2f","components/notice/Notice.jsx":"da8697ae0605"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SURFDesignSystem_019e21 = window.SURFDesignSystem_019e21 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/badge/Badge.jsx
try { (() => {
const BADGE_TONES = {
  orange: ["var(--tone-orange-bg)", "var(--tone-orange-fg)"],
  blue: ["var(--tone-blue-bg)", "var(--tone-blue-fg)"],
  green: ["var(--tone-green-bg)", "var(--tone-green-fg)"],
  red: ["var(--tone-red-bg)", "var(--tone-red-fg)"],
  purple: ["var(--tone-purple-bg)", "var(--tone-purple-fg)"],
  black: ["var(--bg-inverse)", "var(--fg-inverse)"]
};
function Badge({
  tone = "orange",
  shape = "pill",
  children
}) {
  const [bg, fg] = BADGE_TONES[tone] || BADGE_TONES.orange;
  const label = shape === "label";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: label ? "4px 10px" : "5px 12px",
      background: bg,
      color: fg,
      borderRadius: label ? 4 : 999,
      font: `600 ${label ? 12 : 13}px/1.2 var(--font-body)`,
      textTransform: label ? "uppercase" : "none",
      letterSpacing: label ? "0.06em" : 0
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badge/Badge.jsx", error: String((e && e.message) || e) }); }

// components/button/Button.jsx
try { (() => {
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  children,
  onClick,
  type = "button"
}) {
  const pad = {
    sm: "8px 14px",
    md: "12px 22px",
    lg: "14px 26px"
  }[size];
  const fs = {
    sm: 13,
    md: 15,
    lg: 17
  }[size];
  const rad = {
    sm: 8,
    md: 10,
    lg: 12
  }[size];
  const v = {
    primary: {
      background: "var(--bg-accent)",
      color: "var(--fg-on-accent)",
      border: "1px solid var(--bg-accent)"
    },
    secondary: {
      background: "var(--bg-inverse)",
      color: "var(--fg-inverse)",
      border: "1px solid var(--bg-inverse)"
    },
    outline: {
      background: "var(--bg-1)",
      color: "var(--fg-1)",
      border: "1px solid var(--fg-1)"
    },
    text: {
      background: "transparent",
      color: "var(--fg-accent-strong)",
      border: "1px solid transparent",
      padding: "12px 4px"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: disabled ? "default" : "pointer",
      padding: pad,
      font: `700 ${fs}px/1 var(--font-body)`,
      borderRadius: rad,
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--dur-fast) var(--ease-out)",
      ...v
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/button/Button.jsx", error: String((e && e.message) || e) }); }

// components/notice/Notice.jsx
try { (() => {
const NOTICE_TONES = {
  success: ["var(--tone-green-bg)", "var(--status-success)", "var(--tone-green-fg)"],
  info: ["var(--tone-blue-bg)", "var(--status-info)", "var(--tone-blue-fg)"],
  warning: ["var(--tone-yellow-bg)", "var(--status-warning)", "var(--tone-yellow-fg)"],
  error: ["var(--tone-red-bg)", "var(--status-error)", "var(--tone-red-fg)"]
};
function Notice({
  tone = "info",
  title,
  children
}) {
  const [bg, edge, fg] = NOTICE_TONES[tone] || NOTICE_TONES.info;
  return /*#__PURE__*/React.createElement("div", {
    role: tone === "error" ? "alert" : "status",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "12px 14px",
      background: bg,
      borderTop: `3px solid ${edge}`,
      borderRadius: 6,
      color: fg,
      font: "400 14px/1.45 var(--font-body)"
    }
  }, title && /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 700
    }
  }, title), children && /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Notice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/notice/Notice.jsx", error: String((e && e.message) || e) }); }

// ThemeToggle: React wrapper around <surf-theme-toggle> from components/lib/surf-theme.js
try { (() => {
function ThemeToggle({
  compact = false,
  showLabels = false,
  label = "Thema",
  labelLight,
  labelSystem,
  labelDark
}) {
  return /*#__PURE__*/React.createElement("surf-theme-toggle", {
    compact: compact ? "" : undefined,
    labels: showLabels ? "visible" : undefined,
    label: label,
    "label-light": labelLight,
    "label-system": labelSystem,
    "label-dark": labelDark
  });
}
Object.assign(__ds_scope, { ThemeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ThemeToggle", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Notice = __ds_scope.Notice;

__ds_ns.ThemeToggle = __ds_scope.ThemeToggle;

})();

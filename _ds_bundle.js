/* @ds-bundle: {"format":4,"namespace":"SURFDesignSystem_019e21","components":[{"name":"Badge","sourcePath":"components/badge/Badge.jsx"},{"name":"Button","sourcePath":"components/button/Button.jsx"},{"name":"Notice","sourcePath":"components/notice/Notice.jsx"}],"sourceHashes":{"components/badge/Badge.jsx":"f7aaa5565f52","components/button/Button.jsx":"071a6fa89b2f","components/notice/Notice.jsx":"da8697ae0605","ui_kits/surf-web/Breadcrumb.jsx":"0c1593e3503d","ui_kits/surf-web/CardGrid.jsx":"175884d8057d","ui_kits/surf-web/Footer.jsx":"68401b20d310","ui_kits/surf-web/Header.jsx":"00e0b7a2f038","ui_kits/surf-web/Hero.jsx":"4e697b501fa1","ui_kits/surf-web/app.jsx":"186ee825eab1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SURFDesignSystem_019e21 = window.SURFDesignSystem_019e21 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/badge/Badge.jsx
try { (() => {
const BADGE_TONES = {
  orange: ["#FFF3E3", "#B85B00"],
  blue: ["#E3F1FB", "#005E99"],
  green: ["#E5F4EA", "#006B33"],
  red: ["#FDE9E7", "#B5241A"],
  purple: ["#F2E6F4", "#772583"],
  black: ["#000000", "#FFFFFF"]
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
      background: "var(--surf-orange)",
      color: "#fff",
      border: "1px solid var(--surf-orange)"
    },
    secondary: {
      background: "var(--surf-black)",
      color: "#fff",
      border: "1px solid var(--surf-black)"
    },
    outline: {
      background: "#fff",
      color: "var(--surf-black)",
      border: "1px solid var(--surf-black)"
    },
    text: {
      background: "transparent",
      color: "var(--surf-orange-700)",
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
  success: ["#E5F4EA", "#008942", "#005D2D"],
  info: ["#E3F1FB", "#0077C0", "#004F80"],
  warning: ["#FFF8DC", "#E6B800", "#735900"],
  error: ["#FDE9E7", "#DF3226", "#8A1C14"]
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

// ui_kits/surf-web/Breadcrumb.jsx
try { (() => {
/* global React */
function Breadcrumb({
  items,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "surf-breadcrumb surf-container",
    "aria-label": "Kruimelpad"
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    className: "crumb-sep"
  }, "/"), i === items.length - 1 ? /*#__PURE__*/React.createElement("span", {
    className: "current"
  }, it.label) : /*#__PURE__*/React.createElement("a", {
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(it);
    }
  }, it.label))));
}
Object.assign(window, {
  Breadcrumb
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/surf-web/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// ui_kits/surf-web/CardGrid.jsx
try { (() => {
/* global React, Icon */
function CardGrid({
  eyebrow,
  title,
  items,
  onItemClick
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "surf-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surf-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surf-section-head"
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", null, title)), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-text"
  }, "Alles bekijken ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    className: "surf-card-grid"
  }, items.map(c => /*#__PURE__*/React.createElement("a", {
    key: c.title,
    className: "surf-card",
    onClick: e => {
      e.preventDefault();
      onItemClick && onItemClick(c);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 24,
    stroke: 2
  })), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, c.tag), /*#__PURE__*/React.createElement("h3", null, c.title), /*#__PURE__*/React.createElement("p", null, c.body), /*#__PURE__*/React.createElement("span", {
    className: "more"
  }, "Lees meer ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14
  })))))));
}
Object.assign(window, {
  CardGrid
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/surf-web/CardGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/surf-web/Footer.jsx
try { (() => {
/* global React, Icon */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "surf-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surf-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surf-footer-top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/SURF_diap.svg",
    alt: "SURF",
    style: {
      height: 56,
      filter: "invert(1)",
      marginBottom: 24,
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "tagline"
  }, "Samen aanjagen van ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "vernieuwing."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Algemeen"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Over SURF")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Contact")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Downloads")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Vacatures")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Volg ons"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, /*#__PURE__*/React.createElement(Icon, {
    name: "globe",
    size: 14
  }), "\xA0\xA0social.edu.nl/@SURF")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, /*#__PURE__*/React.createElement(Icon, {
    name: "linkedin",
    size: 14
  }), "\xA0\xA0LinkedIn")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, /*#__PURE__*/React.createElement(Icon, {
    name: "youtube",
    size: 14
  }), "\xA0\xA0YouTube")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 14
  }), "\xA0\xA0communicatie@surf.nl"))))), /*#__PURE__*/React.createElement("div", {
    className: "surf-footer-bottom"
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 Co\xF6peratie SURF U.A. \xB7 Hoog Overborch \xB7 Utrecht"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", null, "Privacy"), /*#__PURE__*/React.createElement("a", null, "Toegankelijkheid"), /*#__PURE__*/React.createElement("a", null, "Sitemap")))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/surf-web/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/surf-web/Header.jsx
try { (() => {
/* global React */
const {
  useState
} = React;
function Icon({
  name,
  size = 20,
  stroke = 2,
  color = "currentColor"
}) {
  // Render via Lucide. Lucide is globally available via UMD.
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.setAttribute("data-lucide", name);
      window.lucide.createIcons({
        attrs: {
          "stroke-width": stroke,
          width: size,
          height: size,
          stroke: color
        },
        nameAttr: "data-lucide",
        elements: [ref.current]
      });
    }
  }, [name, size, stroke, color]);
  return /*#__PURE__*/React.createElement("i", {
    ref: ref,
    "data-lucide": name,
    style: {
      display: "inline-flex"
    }
  });
}
function Wordmark({
  variant = "fc",
  height = 42
}) {
  const src = variant === "diap" ? "../../assets/logo/SURF_diap.svg" : "../../assets/logo/SURF_fc.svg";
  return /*#__PURE__*/React.createElement("a", {
    className: "surf-wordmark",
    href: "#",
    "aria-label": "SURF"
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "SURF",
    style: {
      height,
      display: "block"
    }
  }));
}
function Header({
  active = "Basiselementen",
  onNavigate
}) {
  const items = ["Richtlijnen", "Basiselementen", "Downloads", "Over SURF"];
  return /*#__PURE__*/React.createElement("header", {
    className: "surf-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surf-container surf-header-inner"
  }, /*#__PURE__*/React.createElement(Wordmark, null), /*#__PURE__*/React.createElement("nav", {
    className: "surf-nav"
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    className: it === active ? "active" : "",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(it);
    }
  }, it))), /*#__PURE__*/React.createElement("div", {
    className: "surf-header-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "surf-search",
    "aria-label": "Zoeken"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16
  }), " Zoeken op merkportaal\u2026"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary btn-sm"
  }, "Inloggen"))));
}
Object.assign(window, {
  Header,
  Wordmark,
  Icon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/surf-web/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/surf-web/Hero.jsx
try { (() => {
/* global React, Icon */
function Hero({
  onPrimary
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "surf-hero surf-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surf-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Samen aanjagen", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "van vernieuwing.")), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Duik in onze richtlijnen, communicatiemiddelen en templates en draag bij aan een herkenbare en consistente huisstijl van SURF."), /*#__PURE__*/React.createElement("div", {
    className: "surf-hero-cta"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary btn-lg",
    onClick: onPrimary
  }, "Bekijk richtlijnen ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 18
  })), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-outline btn-lg"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    size: 18
  }), " Templates downloaden"))), /*#__PURE__*/React.createElement("div", {
    className: "basiskader"
  }, /*#__PURE__*/React.createElement("img", {
    className: "hero-photo",
    src: "https://www.surf.nl/files/styles/scrollable_item/public/2025-12/surf_eur_dec2025_98.jpg?h=a5f3641b&itok=VwFCJl1I",
    alt: "Studenten aan het werk op campus"
  }), /*#__PURE__*/React.createElement("div", {
    className: "corner-accent"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/SURF_diap.svg",
    alt: "SURF"
  })), /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, "Studenten \xB7 Erasmus Universiteit Rotterdam"))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/surf-web/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/surf-web/app.jsx
try { (() => {
/* global React, Header, Hero, CardGrid, Footer, Breadcrumb, Icon */
const {
  useState
} = React;
const RICHTLIJNEN = [{
  tag: "Richtlijn",
  icon: "feather",
  title: "Schrijfwijzer",
  body: "Hoe schrijven we bij SURF? Tone, casing en taalkeuze in één gids."
}, {
  tag: "Richtlijn",
  icon: "video",
  title: "Video",
  body: "Richtlijnen voor video — van interviews tot motion graphics."
}, {
  tag: "Richtlijn",
  icon: "camera",
  title: "Fotografie",
  body: "Beeldtaal, fotografiekeuzes en hoe je SURF in beeld brengt."
}, {
  tag: "Richtlijn",
  icon: "accessibility",
  title: "Digitale toegankelijkheid",
  body: "Maak je communicatie bruikbaar voor iedereen."
}];
const BASISELEMENTEN = [{
  tag: "Basis",
  icon: "type",
  title: "Logo",
  body: "Het SURF-logo, varianten, witruimte en wanneer welke versie."
}, {
  tag: "Basis",
  icon: "text",
  title: "Lettertype",
  body: "Nunito voor koppen, Source Sans Pro voor bodytekst."
}, {
  tag: "Basis",
  icon: "palette",
  title: "Kleuren",
  body: "Oranje en zwart als basis, met een rijk palet aan steunkleuren."
}, {
  tag: "Basis",
  icon: "shapes",
  title: "Iconen",
  body: "Vlakke lijniconen — open, rond en altijd in één kleur."
}, {
  tag: "Basis",
  icon: "square-dashed",
  title: "SURF basiskader",
  body: "Het zwarte kader dat onze beeldcomposities samenbrengt."
}];
const COLORS_DOC = [{
  name: "Oranje",
  hex: "#E67300",
  dark: true
}, {
  name: "Zwart",
  hex: "#000000",
  dark: true
}, {
  name: "Grijs",
  hex: "#CCCCCC",
  dark: false
}, {
  name: "Rood",
  hex: "#DF3226",
  dark: true
}, {
  name: "Geel",
  hex: "#FEDB00",
  dark: false
}, {
  name: "Blauw",
  hex: "#0077C0",
  dark: true
}, {
  name: "Donker groen",
  hex: "#008942",
  dark: true
}, {
  name: "Licht groen",
  hex: "#B8E3C9",
  dark: false
}, {
  name: "Paars",
  hex: "#772583",
  dark: true
}];
function HomePage({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    onPrimary: () => go({
      page: "list",
      topic: "Richtlijnen"
    })
  }), /*#__PURE__*/React.createElement(CardGrid, {
    eyebrow: "Onze richtlijnen",
    title: "Voor herkenbare communicatie",
    items: RICHTLIJNEN,
    onItemClick: c => go({
      page: "detail",
      topic: c.title,
      parent: "Richtlijnen"
    })
  }), /*#__PURE__*/React.createElement(CardGrid, {
    eyebrow: "Basiselementen",
    title: "De bouwstenen van de huisstijl",
    items: BASISELEMENTEN,
    onItemClick: c => go({
      page: "detail",
      topic: c.title,
      parent: "Basiselementen"
    })
  }));
}
function ListPage({
  topic,
  go
}) {
  const items = topic === "Richtlijnen" ? RICHTLIJNEN : BASISELEMENTEN;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: "Home",
      key: "home"
    }, {
      label: topic,
      key: topic
    }],
    onNavigate: it => go(it.key === "home" ? {
      page: "home"
    } : {
      page: "list",
      topic
    })
  }), /*#__PURE__*/React.createElement("section", {
    className: "surf-container",
    style: {
      padding: "16px 0 8px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "900 56px/1.05 var(--font-display)",
      letterSpacing: "-0.02em",
      margin: "12px 0 8px"
    }
  }, topic), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 19px/1.55 var(--font-body)",
      color: "var(--fg-2)",
      maxWidth: "44em",
      margin: 0
    }
  }, topic === "Richtlijnen" ? "Hoe we communiceren namens SURF — van tekst tot video, van fotografie tot toegankelijkheid." : "De visuele bouwstenen van het SURF-merk: logo, lettertype, kleuren, iconen en het basiskader.")), /*#__PURE__*/React.createElement(CardGrid, {
    title: "Onderwerpen",
    items: items,
    onItemClick: c => go({
      page: "detail",
      topic: c.title,
      parent: topic
    })
  }));
}
function DetailPage({
  topic,
  parent,
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: "Home",
      key: "home"
    }, {
      label: parent,
      key: parent
    }, {
      label: topic
    }],
    onNavigate: it => go(it.key === "home" ? {
      page: "home"
    } : it.key === parent ? {
      page: "list",
      topic: parent
    } : {
      page: "home"
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "surf-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "surf-detail-grid"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "surf-side-nav"
  }, (parent === "Basiselementen" ? BASISELEMENTEN : RICHTLIJNEN).map(it => /*#__PURE__*/React.createElement("a", {
    key: it.title,
    className: it.title === topic ? "active" : "",
    onClick: () => go({
      page: "detail",
      topic: it.title,
      parent
    })
  }, it.title))), /*#__PURE__*/React.createElement("article", {
    className: "surf-prose"
  }, topic === "Kleuren" ? /*#__PURE__*/React.createElement(ColorsArticle, null) : /*#__PURE__*/React.createElement(GenericArticle, {
    topic: topic
  })))));
}
function ColorsArticle() {
  const basics = COLORS_DOC.slice(0, 3);
  const support = COLORS_DOC.slice(3);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Kleuren"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Ons kleurenpallet bepaalt de visuele hi\xEBrarchie voor het ontwerp. Bij SURF gaan we uit van twee basiskleuren, daarnaast vullen we dit aan met steunkleuren."), /*#__PURE__*/React.createElement("h2", null, "Basiskleuren"), /*#__PURE__*/React.createElement("p", null, "De basiskleuren van SURF zijn oranje en zwart. Van hieruit zijn er een aantal lichtere varianten zoals licht grijs en lichtere kleuren oranje."), /*#__PURE__*/React.createElement("div", {
    className: "surf-color-row"
  }, basics.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.hex,
    className: `surf-color-chip ${c.dark ? "dark" : ""}`,
    style: {
      background: c.hex
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nm"
  }, c.name), /*#__PURE__*/React.createElement("div", {
    className: "hx"
  }, c.hex)))), /*#__PURE__*/React.createElement("h2", null, "Steunkleuren"), /*#__PURE__*/React.createElement("p", null, "Deze steunkleuren laten de diversiteit van SURF zien. Daarnaast worden deze kleuren gebruikt om iets te benadrukken voor de kijker."), /*#__PURE__*/React.createElement("div", {
    className: "surf-color-row"
  }, support.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.hex,
    className: `surf-color-chip ${c.dark ? "dark" : ""}`,
    style: {
      background: c.hex
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nm"
  }, c.name), /*#__PURE__*/React.createElement("div", {
    className: "hx"
  }, c.hex)))), /*#__PURE__*/React.createElement("h2", null, "Kleuren met transparante versies"), /*#__PURE__*/React.createElement("p", null, "De transparante kleuren zijn 80% transparant en worden gebruikt om kleurvlakken over fotografie te leggen."));
}
function GenericArticle({
  topic
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, topic), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Hier vind je de richtlijnen en assets voor ", /*#__PURE__*/React.createElement("b", null, topic.toLowerCase()), " bij SURF. Volg deze om een herkenbare en consistente huisstijl te bewaren."), /*#__PURE__*/React.createElement("h2", null, "Wat is het?"), /*#__PURE__*/React.createElement("p", null, "Een korte beschrijving van het onderwerp en hoe het zich verhoudt tot de rest van het SURF-merk. Deze pagina is een placeholder in het UI-kit; de echte tekst staat op het merkportaal."), /*#__PURE__*/React.createElement("h2", null, "Hoe gebruik je het?"), /*#__PURE__*/React.createElement("p", null, "Praktische tips, do's en don'ts en links naar templates die je direct kunt downloaden."), /*#__PURE__*/React.createElement("p", null, "Heb je vragen? Stuur je vraag per e-mail naar ", /*#__PURE__*/React.createElement("a", {
    style: {
      color: "var(--surf-orange)"
    }
  }, "communicatie@surf.nl"), "."));
}
function App() {
  const [route, setRoute] = useState({
    page: "home"
  });
  const navigateTopBar = it => {
    if (it === "Richtlijnen" || it === "Basiselementen") setRoute({
      page: "list",
      topic: it
    });else setRoute({
      page: "home"
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "surf-page"
  }, /*#__PURE__*/React.createElement(Header, {
    active: route.page === "home" ? "" : route.parent || route.topic,
    onNavigate: navigateTopBar
  }), route.page === "home" && /*#__PURE__*/React.createElement(HomePage, {
    go: setRoute
  }), route.page === "list" && /*#__PURE__*/React.createElement(ListPage, {
    topic: route.topic,
    go: setRoute
  }), route.page === "detail" && /*#__PURE__*/React.createElement(DetailPage, {
    topic: route.topic,
    parent: route.parent,
    go: setRoute
  }), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/surf-web/app.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Notice = __ds_scope.Notice;

})();

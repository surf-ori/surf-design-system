# SURF Design System

This repository is the SURF Design System: brand tokens (SURF brand layer and the Curve product layer), a light and a dark theme, Oat UI 1.0.0 with a SURF theme as the default HTML framework, and React components (Button, Badge, Notice, ThemeToggle).

The leading copy lives in Claude as a Design System artifact: https://claude.ai/artifact/Xj9LXhJJk8p8m3ukpeTCt6
Change the design system there (or with the Artifact tool against that link), then refresh this repository from it. Do not edit the files here by hand and leave the artifact behind, or the two drift apart.

## Using it in a page

Load, in this order, in `<head>`:

```html
<script src="https://surf-ori.github.io/surf-design-system/components/lib/surf-theme.js"></script>
<script>SURFTheme.init()</script>
<link rel="stylesheet" href="https://surf-ori.github.io/surf-design-system/tokens.css">
<link rel="stylesheet" href="https://surf-ori.github.io/surf-design-system/components/bundle.css">
<script src="https://surf-ori.github.io/surf-design-system/components/lib/oat.min.js" defer></script>
```

React pages also load React 18, then `components/bundle.js`, and take components from `window.SURFDesignSystem_019e21` (types in `components/index.d.ts`). See `examples/starter.html`.

## Rules

- Read `README.md` first, then the component's `components/<Name>/README.md` before using it.
- Colours, spacing, radii, shadows and type only through the tokens (`var(--…)`, names in `tokens.json`); never raw hex values.
- Plain HTML: write semantic elements and let Oat style them (`<button>`, `data-variant="secondary"`, `role="alert"` with `data-variant`, `class="card"`, `role="switch"`).
- Themes: `data-theme="light"` or `"dark"` on `<html>`, set by `surf-theme.js`. Offer the switch with `<surf-theme-toggle>` (React: `ThemeToggle`). Check text contrast in both themes.
- Do not load Oat from a CDN as well: `components/bundle.css` already contains it with the SURF theme.
- `tokens.css` is generated from `tokens.json`. Change `tokens.json`, never `tokens.css` alone.
- Leftovers from the migration that nothing uses any more: `manifest.json`, `migration-map.json`, `_ds_manifest.json`, `_ds_bundle.js` (old bundle, still loaded by `ui_kits/surf-web`), `styles.css`, the lowercase `components/button|badge|notice/` folders and `preview/`. Remove them only when the owner agrees.

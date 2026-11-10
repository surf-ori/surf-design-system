# ThemeToggle

A switch between the light theme, the system setting and the dark theme, after the theme button in the DURF design system.

The choice is stored in the browser (`localStorage`, key `surf-theme`); "system" stores nothing and follows the operating system, also when that changes while the page is open. The switch sets `data-theme="light"` or `data-theme="dark"` on `<html>`, which is what the tokens and Oat respond to. Use the three-way switch in settings and page footers, and `compact` (one button that cycles system → light → dark, its icon showing the current choice) in a topbar. Option names default to Licht, Systeem and Donker; pass `labelLight`, `labelSystem` and `labelDark` for another language.

The logic lives in `components/lib/surf-theme.js`, so it also works without React: write `<surf-theme-toggle></surf-theme-toggle>` (attributes `compact`, `labels="visible"`, `label-light` …) in plain HTML. To avoid a flash of the wrong theme, load that script in `<head>` and call `SURFTheme.init()` straight after it, before the stylesheets render the body. `SURFTheme.get()`, `set("light" | "system" | "dark")` and `cycle()` are there for your own controls; every change fires `surf-theme-change` on `<html>`.

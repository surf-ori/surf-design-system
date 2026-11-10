# Oat

Oat UI 1.0.0 (https://oat.ink) is part of this design system: plain semantic HTML gets the SURF look without classes or React.

The design system's stylesheet carries Oat's CSS with a SURF theme on top, and its libraries load Oat's script (`window.ot`) for the interactive elements, so any page that uses the design system can write `<button>`, `<div role="alert" data-variant="warning">`, `<article class="card">` or `<input type="checkbox" role="switch">` and get SURF colours, radii, fonts and shadows, in the light and the dark theme. Buttons are orange (`--primary`), `data-variant="secondary"` is black, alerts and badges take `success`, `warning` and `danger`. Use the bundle's Button, Badge and Notice in React pages and Oat's elements in plain HTML; both draw on the same tokens.

Oat's spacing variables are renamed `--oat-space-N` here, because SURF's `--space-N` scale uses the same names with other values. White text on the orange primary button reads 3.08:1: keep button labels bold. To use Oat outside this design system, load `tokens.css`, `components/bundle.css`, `components/lib/oat.min.js` and `components/lib/surf-theme.js` in that order; do not load Oat from a CDN as well, or its unthemed copy comes first.

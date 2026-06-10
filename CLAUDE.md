# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The public marketing site for DROBE (a virtual-wardrobe app built around a 3D body avatar). Static site built with Hugo (no theme — all layouts are custom), deployed to GitHub Pages on every push to `main`.

## Commands

```bash
./dev                  # Dev server at http://localhost:1313 (alias for scripts/serve.sh)
./build                # Production build to public/ (alias for scripts/build.sh)
npm run screenshots    # Playwright captures all pages × 3 viewports into tests/screenshots/
```

- **Never run `hugo` directly** — it is not on PATH. The scripts download a pinned Hugo (extended) into `.bin/` on first run.
- Hugo version **0.139.4** is pinned in three places that must stay in sync: `scripts/serve.sh`, `scripts/build.sh`, and `.github/workflows/pages.yml`.
- There are no tests or linters. `npm run screenshots` (requires `npm install` first) is the closest thing to visual verification; it starts its own Hugo server.

## Architecture

**Content lives in `data/*.yaml`, not markdown.** Each `content/<section>/_index.md` is just front matter (title/description); the page body is rendered by `layouts/<section>/list.html` iterating over a matching data file:

| Page | Template | Data source |
|------|----------|-------------|
| `/` (home) | `layouts/index.html` | inline HTML |
| `/product/` | `layouts/product/list.html` | `data/screens.yaml` |
| `/features/` | `layouts/features/list.html` | `data/features.yaml` |
| `/compare/` | `layouts/compare/list.html` | `data/competitors.yaml` |
| `/business/` | `layouts/business/list.html` | `data/business.yaml` |
| `/roadmap/` | `layouts/roadmap/list.html` | `data/roadmap.yaml` |

To change page copy, edit the YAML. To add a page, add all three pieces plus a `[[menu.main]]` entry in `hugo.toml`.

**Base template blocks** (`layouts/_default/baseof.html`): every page template defines `bodyclass`, `head` (its page-specific stylesheet), `main`, and `scripts`. CSS is split per page: `main.css` always loads; `home.css` (home), `product.css` (product), `pages.css` (all other inner pages). No CSS pipeline — files in `static/css/` are served as-is.

**Partials:**
- `icon.html` — inline SVG icon set keyed by name (`{{ partial "icon.html" (dict "name" "camera" "size" 20) }}`). New icons are added as another `else if` branch.
- `screenshot-device.html` — device-framed app screenshot figure.

**URLs must use `relURL`.** The site currently deploys to a GitHub Pages subpath (`julia1ko.github.io/drobe-fashion.com/`); CI overrides `baseURL` via `actions/configure-pages`, so absolute paths that work locally will 404 in production. A `static/CNAME` exists for the eventual custom domain `drobe-fashion.com`.

**Two kinds of screenshots — don't confuse them:**
- `static/images/screenshots/` — app-prototype screenshots (from the separate `drobe-demo` Expo repo) displayed *on* the site, referenced from `data/*.yaml`.
- `tests/screenshots/` — gitignored output of `npm run screenshots`, captures *of* this site for visual checks.

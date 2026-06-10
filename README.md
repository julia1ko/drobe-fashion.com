# DROBE — drobe-fashion.com

**Your body. Your closet. Your rules.**

The public website for [DROBE](https://drobe-fashion.com) — a virtual wardrobe built around a 4D digital avatar of your body.

Built with [Hugo](https://gohugo.io/) and deployed automatically to GitHub Pages on every push to `main`.

---

## What is DROBE?

Most people own more clothes than they will ever wear, yet every morning the question is the same: what do I wear? The problem is not the clothes. It is that we cannot see them, remember them, or imagine them on our bodies.

DROBE solves this with one core innovation: a 4D digital avatar that is an exact replica of your body. From there, every item you own lives in a virtual closet — digitalized, organised, and always accessible.

Not about buying more. About finally knowing what you have, and always knowing what to wear.

---

## Local development

**You do not need Homebrew or a global Hugo install.** The repo downloads Hugo into `.bin/` on first run.

From the project folder:

```bash
cd /Users/juliakoberl/code/drobe-fashion.com
./dev
```

Opens at **http://localhost:1313**

Build for production:

```bash
./build
# Output in public/
```

Equivalent commands: `./scripts/serve.sh` and `./scripts/build.sh`

> Do not run `hugo` directly — it is not on your PATH. Always use `./dev` or `./scripts/serve.sh`.

---

## Deployment

GitHub Actions builds and deploys the site on every push to `main` (see `.github/workflows/pages.yml`).

- **Live site (now):** [julia1ko.github.io/drobe-fashion.com](https://julia1ko.github.io/drobe-fashion.com/)
- **Custom domain (later):** `drobe-fashion.com` — the workflow reads the correct `baseURL` from GitHub Pages automatically, so asset paths update when the custom domain is enabled. The `static/CNAME` file is already in place.

To enable the custom domain, add a DNS record pointing to GitHub Pages (see [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)), then set it under **Settings → Pages → Custom domain**.

---

## Site structure

| Page | URL | Content |
|------|-----|---------|
| Home | `/` | Cinematic landing page |
| Product | `/product/` | Interactive demo with animated avatar |
| Features | `/features/` | Full virtual closet & marketplace features |
| Compare | `/compare/` | Competitor feature matrix |
| Business | `/business/` | Freemium, premium, marketplace model |
| Roadmap | `/roadmap/` | MVP → V2 → V3 timeline & tech stack |

## Repository layout

```
drobe-fashion.com/
  content/          Page content (one section per page)
  data/             Features, competitors, roadmap, business model
  layouts/          HTML templates and partials
  static/           CSS, JS, images, CNAME
  hugo.toml         Site configuration
  .github/workflows/pages.yml   CI/CD
```

---

## Related repos

| Repository | Purpose |
|------------|---------|
| **drobe-fashion.com** (this repo) | Public marketing website |
| [drobe-demo](https://github.com/julia1ko/drobe-demo) | Interactive UI demo — Expo app prototype |

---

## License

All rights reserved. © DROBE

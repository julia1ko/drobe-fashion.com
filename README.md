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

No Homebrew required. The repo includes scripts that download Hugo automatically on first run:

```bash
./scripts/serve.sh
# Opens at http://localhost:1313
```

Build for production:

```bash
./scripts/build.sh
# Output in public/
```

If you already have Hugo installed globally, you can also run `hugo server -D` directly.

---

## Deployment

GitHub Actions builds and deploys the site on every push to `main` (see `.github/workflows/pages.yml`).

- **Live site (now):** [julia1ko.github.io/drobe-fashion.com](https://julia1ko.github.io/drobe-fashion.com/)
- **Custom domain (later):** `drobe-fashion.com` — the workflow reads the correct `baseURL` from GitHub Pages automatically, so asset paths update when the custom domain is enabled. The `static/CNAME` file is already in place.

To enable the custom domain, add a DNS record pointing to GitHub Pages (see [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)), then set it under **Settings → Pages → Custom domain**.

---

## Repository layout

```
drobe-fashion.com/
  content/          Hugo content (homepage)
  layouts/          HTML templates
  static/           CSS, images, CNAME
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

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

Install Hugo (macOS):

```bash
brew install hugo
```

Run the site locally:

```bash
hugo server -D
# Opens at http://localhost:1313
```

Build for production:

```bash
hugo --minify
# Output in public/
```

---

## Deployment

GitHub Actions builds and deploys the site on every push to `main` (see `.github/workflows/pages.yml`).

To enable GitHub Pages:

1. Go to **Settings → Pages** in the GitHub repo
2. Set **Source** to **GitHub Actions**
3. For the custom domain `drobe-fashion.com`, add a DNS record pointing to GitHub Pages (see [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site))

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

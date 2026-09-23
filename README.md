# venqi.io - Quantum Computing Blog

A clean Jekyll + GitHub Pages starter for your personal quantum computing site at `venqi.io`.

## What is included

- Jekyll blog structure (`_posts`, pages, config)
- GitHub Pages deployment workflow (GitHub Actions)
- Custom domain support via `CNAME`
- Minimal custom styling in `assets/css/style.scss`

## Local development

1. Install dependencies:

```bash
bundle install
```

2. Run locally:

```bash
bundle exec jekyll serve
```

3. Open:

```text
http://127.0.0.1:4000
```

## Deploy to GitHub Pages

1. Create a new GitHub repository (recommended: `venqi.github.io` for a user site).
2. Push this folder content to the repository.
3. In GitHub repo settings, enable Pages with source `GitHub Actions`.
4. Confirm `venqi.io` DNS points to GitHub Pages:
   - `A` records for apex domain to GitHub Pages IPs.
   - Optional `www` CNAME to `<your-github-username>.github.io`.
5. Keep `CNAME` file in repo root as `venqi.io`.

## Recommended next edits

- Update author metadata in `_config.yml`
- Add new posts under `_posts/`
- Replace placeholder pages with your own roadmap, notes, and tutorials

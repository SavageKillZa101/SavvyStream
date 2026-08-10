# SavvyStream

A lightweight Netflix-like React SPA (Vite) scaffold that embeds a video iframe player and integrates with TMDB (placeholder). Deploys to GitHub Pages via Actions.

Quick start (local):
1. Copy the repo to `SavvyStream` on GitHub and set `TMDB_API_KEY` in repository secrets (optional for dev; you can use .env).
2. npm install
3. npm run dev

Build & deploy: push to `main` -> GitHub Action builds and publishes to `gh-pages`.

Environment variables:
- VITE_TMDB_API_KEY (set locally in `.env` or in Actions as `TMDB_API_KEY`)

Files created:
- src/ components, styles
- .github/workflows/deploy-gh-pages.yml

Notes:
- The player uses the provided embed iframe. Replace embed URL or wire TMDB streaming sources when you have APIs.

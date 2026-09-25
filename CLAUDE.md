# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run lint` — run Oxlint (not ESLint; config in `.oxlintrc.json`)
- `npm test` — run the Vitest suite once (`vitest run`, non-watch)
- `npm run preview` — serve the built `dist/` locally

Run a single test file: `npx vitest run src/App.test.jsx`. Watch mode: `npx vitest`.

## Architecture

Single-page React 19 app bootstrapped by Vite. Entry is `src/main.jsx` → `src/App.jsx`. All expense-tracker state lives in `App.jsx` via `useState` (description, amount, in-memory `expenses` array) — there is no router, backend, or persistence; expenses reset on reload.

Tests run under Vitest with the jsdom environment. `vite.config.js` holds the `test` block (environment + `setupFiles`), so there is no separate Vitest config. `src/setupTests.js` registers `@testing-library/jest-dom` matchers.

## CI/CD (the point of this repo)

`.github/workflows/ci.yml` runs on push to `master`: install → lint → test → build → build and push a Docker image to GitHub Container Registry (`ghcr.io/<repo>:latest`). Any of lint/test/build failing breaks the pipeline, so run all three locally before pushing to `master`.

The `Dockerfile` is a two-stage build: `node:22-alpine` builds the app, then the static `dist/` is served by `nginx:alpine` on port 80. Node 22 is the pinned CI/build version.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Development server with hot reload
npm run build        # Type-check + build (parallel)
npm run build-only   # Build without type-checking
npm run preview      # Preview production build
npm run test:unit    # Run unit tests with Vitest
npm run type-check   # TypeScript type checking only
npm run lint         # ESLint with auto-fix
npm run format       # Prettier formatting for src/
```

## Architecture

**Cégvándor** is a Vue 3 + TypeScript marketing website for a corporate accommodation provider, built with Vite and Vuetify 3.

**Tech stack**: Vue 3 SFCs, TypeScript, Vuetify 3 (Material Design), vue-i18n (Hungarian/English), Vue Router

**App shell** (`src/App.vue`): Contains the global layout — navbar with language selector, right-side navigation drawer, and footer. All route content renders inside `<router-view>`.

**Pages** (`src/pages/`): Route-level components loaded lazily via Vue Router. Routes are defined in `src/router/index.ts`:
- `/` → `Home-View.vue`
- `/kapcsolat` → `ContactUs-View.vue`
- `/hogyan-mukodunk` → `HowItWorks-View.vue`
- `/login` → `Login-View.vue`
- `/impresszum` → `Impresszum-View.vue`

**Translations** (`src/i18n/index.ts`): All UI strings live here as nested objects under `hu` and `en` locale keys. The language selector in the navbar toggles between these at runtime.

**Vuetify theme**: Primary color `#22288d` (dark blue), configured in `src/main.ts`.

**Branching**: `main` is the development branch; `gh-pages` holds built assets for GitHub Pages deployment.

## Deployment

**Target**: GitHub Pages on `gh-pages` branch with custom domain `cegvandor.hu` (stored in CNAME file).

**Deploy steps**:

1. Build the production bundle: `npm run build-only`
2. Checkout gh-pages: `git checkout gh-pages`
3. Save the CNAME file: `CNAME_CONTENT=$(cat CNAME)`
4. Clear old files: `find . -maxdepth 1 -not -name '.git' -not -name '.' -exec rm -rf {} +`
5. Copy new build: `cp -r dist/* .`
6. Restore CNAME: `echo "$CNAME_CONTENT" > CNAME`
7. Commit and push: `git add -A && git commit -m "Deploy: [description]" && git push origin gh-pages`
8. Return to main: `git checkout main`

**Important**: Always preserve the CNAME file during deployment — it specifies the custom domain for GitHub Pages.

## Code Style

- Prettier: `semi: false`, `singleQuote: true`, `printWidth: 100`
- Path alias: `@` maps to `src/`
- ESLint uses Vue + TypeScript + Prettier integration (formatting rules disabled in ESLint, delegated to Prettier)

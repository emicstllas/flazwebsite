# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (runs on port 3001)
npm run build    # Production build + type check
npm run lint     # ESLint
```

## Stack

- **Next.js 16** App Router — read `node_modules/next/dist/docs/` before assuming API behaviour
- **React 19** with React Compiler enabled (`reactCompiler: true` in `next.config.ts`)
- **Tailwind CSS v4** — uses `@import "tailwindcss"` in globals.css, not a config file
- **TypeScript**

## Architecture

All page sections live as individual components in `components/`. The single page is `app/page.tsx` which imports and stacks them in order. `app/layout.tsx` renders the `<Navbar />` outside the padded wrapper so it spans full viewport width.

**Layout padding pattern** — every section uses the same responsive padding formula:
```
clamp(16px, calc(-57px + 19.5vw), 318px)
```
This gives ~16px on mobile (375px) scaling to 318px on a 1920px screen. Sections that need full-bleed (carousel, footer) use negative margins to escape the layout wrapper then add the same padding back.

**Brand tokens** (defined in `globals.css` `:root`):
- `--flaz-teal: #4DC8C8` — primary accent, replaces orange from reference designs
- `--flaz-teal-dark: #3aabab` — hover state
- `--flaz-dark: #2c2c2c`
- Background: `#ECEAE6`

**Font** — F37 Blanka loaded via `@font-face` from `/public/fonts/` (.otf files). Weights: 300 Light (body default), 400 Regular, 500 Medium (headings), 700 Bold.

**Reference site** — `brs-group.ae` is the design reference. Orange in the reference = Flaz teal in our implementation.

**Images** — placeholder images live in `public/images/`. Project/service/hero images should be added there. Logo variants: `public/logo.png` (icon only), `public/images/flazlogo&name.png` (full lockup).

## Key Patterns

- Inline `style={{ backgroundColor: "var(--flaz-teal)" }}` with `onMouseEnter/Leave` for hover — Tailwind arbitrary CSS variables in hover states are unreliable in v4
- `rounded-sm` throughout (professional, minimal rounding) — `rounded-full` only for circular elements
- SVG clip-path on carousel (`#carousel-clip`) creates the V-notch bottom edge matching the Flaz logo shape

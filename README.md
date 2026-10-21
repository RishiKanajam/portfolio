# Rishi Kanajam portfolio

Minimal Next.js 16 / TypeScript portfolio for rishikanajam.dev.

## Local preview

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For a production preview:

```sh
npm run lint
npm run build
npm run start
```

The build downloads IBM Plex Sans and JetBrains Mono through `next/font` and requires network access. Fonts are self-hosted in the resulting build; slow connections may use a fallback font to avoid delayed text painting.

## Content

Edit `src/content/content.ts`. Four featured projects are generated statically at `/work/[slug]`; longer background, experience, education and side-project prose lives at `/about`. The CV is served at `/resume.pdf`.

The supplied Profile Alignment Kit governs facts. DeceptionArena has no public source link; do not invent one or describe its benchmark infrastructure as published findings.

## Validation

- `npm run lint`: zero errors or warnings.
- `npm run build`: passes; home, background and all four work pages are static.
- Local production mobile Lighthouse: 99 performance, 100 accessibility; FCP 1.1s, LCP 1.8s, total blocking time 40ms, CLS 0. Scores vary by environment.
- All six pages checked at 360px and 1280px in light and dark themes: no horizontal overflow or browser errors.
- Theme toggle and persistence, keyboard skip link and focus, project navigation, unknown-project 404 and CV delivery verified.
- Full featured-project prose and original About text verified unchanged against the content-fix commit.

# Osama Abo-Bakr — Portfolio

Editorial portfolio for **Osama Abo-Bakr**, AI Engineer & Solution Architect based in Cairo.

Live: <https://osama-abo-bakr.vercel.app>

## Design

A typography-led editorial layout rather than a card grid — hairline rules, an
asymmetric twelve-column grid, and a numbered running order that reads top to
bottom as a single feature.

- **Palette** — press ink (`#0d0f12`), bone paper (`#ede9e0`), and Egyptian blue
  (`#4c7df0`). The blue is the only chromatic note on the page.
- **Type** — Bodoni Moda for display, Archivo for body, IBM Plex Mono for labels
  and figures.
- **Signature** — the masthead is annotated by hairline detection frames with
  confidence scores, the way Osama's own YOLO field-detection models annotate a
  document. It runs once, on load, and appears nowhere else.
- **The insert** — *Measures* inverts to bone paper, a printed gatefold bound
  into the middle of the issue. Every figure on it is measured and names its
  source.

Colours are held as space-separated channels (`--ink-c: 13 15 18`) so Tailwind's
alpha modifiers compose; a full `var(--x)` colour makes Tailwind silently drop
`bg-ink/85` and friends. `.invert-paper` restates the composed colours rather
than relying on inheritance, because a custom property substitutes its `var()`s
where it is *declared*, not where it is used.

## Content

All copy, roles, projects and figures live in [`lib/content.ts`](lib/content.ts) —
a single source of truth kept in step with `public/resume.pdf`. Update that one
file to update the site.

Projects carry an optional `href`: work that shipped inside a company has no
public repository, and those rows say so instead of linking nowhere.

## Running it

```bash
pnpm install
pnpm dev
```

Then open <http://localhost:3000>.

```bash
pnpm build      # production build
npx tsc --noEmit  # typecheck — next.config.mjs ignores type errors during build
```

## Stack

Next.js 15 (App Router, static) · React 19 · TypeScript · Tailwind CSS 3 ·
`next/font` for self-hosted Google fonts. No UI framework, no client-side data
fetching, no images to load.

## Contact

- Email — <osamaoabobakr12@gmail.com>
- GitHub — <https://github.com/Osama-Abo-Bakr>
- LinkedIn — <https://www.linkedin.com/in/osama-abo-bakr-293614259/>

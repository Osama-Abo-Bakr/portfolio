# Osama Abo-Bakr — Portfolio

Editorial portfolio for **Osama Abo-Bakr**, AI Engineer & Solution Architect based in Cairo.

Live: <https://osama-abo-bakr.vercel.app>

## Design

A typography-led editorial layout rather than a card grid — hairline rules, an
asymmetric twelve-column grid, and a numbered running order that reads top to
bottom as a single feature.

- **Palette** — deep olive-forest ground (`#343c33`), cream (`#e7e8e0`), and
  true-white bands (`#ffffff`). Near-monochrome, after the Loire reference:
  the ground carries the colour and there is no bright accent. The page
  alternates the two grounds, and each restates its channels.
- **Type** — Bodoni Moda for display, Archivo for body, IBM Plex Mono for labels
  and figures.
- **Signature** — the masthead is annotated by hairline detection frames with
  confidence scores, the way Osama's own YOLO field-detection models annotate a
  document. It runs once, on load, and appears nowhere else.
- **The bands** — light sections invert to white with near-black type. Every
  figure on *Measures* is measured and names its source.

Colours are held as space-separated channels (`--ink-c: 52 60 51`) so Tailwind's
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

## Client feedback

`testimonials` in `lib/content.ts` is empty, and the Feedback band does not
render while it is. Paste real reviews from
<https://www.upwork.com/freelancers/osamaa305> — quote, author, engagement —
and the section appears, the running order renumbers itself, and the nav picks
it up. Nothing there is invented.

## Contact

- Email — <osamaoabobakr12@gmail.com>
- GitHub — <https://github.com/Osama-Abo-Bakr>
- LinkedIn — <https://www.linkedin.com/in/osama-abo-bakr-293614259/>

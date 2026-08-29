import { identity, deck } from "@/lib/content"

/**
 * The cover. A full-bleed plate under a dashed structural grid, with the
 * cover line set low-left and the standing meta along the top — the shape
 * the reference uses. The detection frames are Osama's own: his field
 * models draw exactly this over a document, and here they read the page.
 */
function Detect({
  tag,
  confidence,
  delay,
  inset = "-0.12em -0.2em",
  below = false,
}: {
  tag: string
  confidence: string
  delay: number
  inset?: string
  below?: boolean
}) {
  return (
    <span className="detect" style={{ inset, animationDelay: `${delay}ms` }} aria-hidden>
      <span className={below ? "detect-tag detect-tag-below" : "detect-tag"}>
        {tag} <span style={{ opacity: 0.65 }}>{confidence}</span>
      </span>
    </span>
  )
}

const thumbs = ["/img/thumb-1.jpg", "/img/thumb-2.jpg", "/img/thumb-3.jpg"]

export function EditorialHero() {
  return (
    <section id="top" className="band-deep relative isolate overflow-hidden">
      {/* The plate. Held back so the type stays the loudest thing on it. */}
      <img
        src="/img/hero.jpg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-90"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/45 to-ink/70"
      />
      <div aria-hidden className="grid-rules pointer-events-none absolute inset-0 -z-10" />

      <div className="page-pad relative flex min-h-[100svh] flex-col pb-12 pt-24">
        {/* Standing head — the two centre labels the reference runs. */}
        <div className="hidden items-baseline justify-center gap-16 lg:flex">
          <span className="label">The practice of applied AI</span>
          <span className="label">Est. Cairo — production systems</span>
        </div>

        <div className="mt-auto">
          <div className="max-w-4xl">
            <span className="relative inline-block">
              <Detect tag="field: title" confidence="0.981" delay={620} />
              <span className="font-mono text-micro uppercase tracking-[0.18em] text-bone-dim">{identity.role}</span>
            </span>

            <h1 className="relative mt-11 inline-block font-display text-masthead font-medium">
              <Detect tag="field: name" confidence="0.996" delay={260} inset="-0.04em -0.11em" />
              <span className="block">Osama</span>
              <span className="block">Abo-Bakr</span>
            </h1>
          </div>

          <div className="rule-t mt-10 grid gap-y-8 pt-8 md:grid-cols-12 md:gap-8">
            <div className="flex flex-wrap items-start gap-x-2 gap-y-3 md:col-span-4">
              <a href="#colophon" className="btn-frame">
                Get in touch
              </a>
              <a href="#work" className="btn-frame">
                See the work
              </a>
            </div>

            <p className="max-w-measure text-[0.9375rem] leading-relaxed text-bone/85 md:col-span-5">{deck}</p>

            <div className="flex gap-3 md:col-span-3 md:justify-end">
              {thumbs.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  aria-hidden
                  width={140}
                  height={100}
                  className={`h-[62px] w-[86px] object-cover opacity-80 transition-opacity duration-500 ease-editorial hover:opacity-100 sm:h-[76px] sm:w-[104px] ${
                    // Three plates do not fit a 320px screen; the last one
                    // waits for the room.
                    i === 2 ? "hidden sm:block" : ""
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-baseline justify-between">
            <span className="font-mono text-micro text-bone-faint">
              <span className="relative inline-block">
                <Detect tag="field: locale" confidence="0.974" delay={900} below />
                {identity.coordinates}
              </span>
            </span>
            <a href="#approach" className="label group inline-flex items-center gap-2 hover:text-bone">
              <span>Read on</span>
              <span aria-hidden className="transition-transform duration-500 ease-editorial group-hover:translate-y-1">
                ↓
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

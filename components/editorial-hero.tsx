import { identity, deck } from "@/lib/content"

/**
 * The masthead. Osama's detection models draw hairline boxes with a
 * confidence score over the fields they find in a document; here the
 * same instrument reads the page it is printed on. It runs once, on
 * load, and appears nowhere else on the site.
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

export function EditorialHero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-end px-6 pb-12 pt-28 sm:px-10 lg:px-16 xl:px-20">
      <div className="grid gap-y-12 md:grid-cols-12 md:gap-10">
        {/* Kicker — the standing head of the issue. */}
        <div className="md:col-span-5">
          <p className="label">Portfolio — 2026</p>
        </div>

        <div className="md:col-span-7 md:pt-1">
          <span className="relative inline-block">
            <Detect tag="field: title" confidence="0.981" delay={620} />
            <span className="font-mono text-micro uppercase tracking-[0.18em] text-bone-dim">{identity.role}</span>
          </span>
        </div>

        {/* The name, set as the cover line. */}
        <div className="md:col-span-12">
          <h1 className="relative inline-block font-display text-masthead font-medium">
            <Detect tag="field: name" confidence="0.996" delay={260} inset="-0.04em -0.11em" />
            <span className="block">Osama</span>
            <span className="block">Abo-Bakr</span>
          </h1>
        </div>
      </div>

      <div className="rule-t mt-12 grid gap-y-10 pt-8 md:mt-16 md:grid-cols-12 md:gap-10">
        <p className="max-w-measure text-deck font-light leading-snug md:col-span-6">{deck}</p>

        <dl className="space-y-4 md:col-span-3 md:col-start-8">
          <div>
            <dt className="label">Currently</dt>
            <dd className="mt-1.5 text-[0.9375rem]">{identity.currently}</dd>
          </div>
          <div>
            <dt className="label">Based in</dt>
            <dd className="mt-1.5 text-[0.9375rem]">{identity.location}</dd>
            <dd className="mt-1 font-mono text-micro text-bone-faint">
              <span className="relative inline-block">
                <Detect tag="field: locale" confidence="0.974" delay={900} below />
                {identity.coordinates}
              </span>
            </dd>
          </div>
        </dl>

        <div className="flex items-end md:col-span-2 md:col-start-11 md:justify-end">
          <a href="#profile" className="label group inline-flex items-center gap-2 hover:text-bone">
            <span>Read on</span>
            <span aria-hidden className="transition-transform duration-500 ease-editorial group-hover:translate-y-1">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

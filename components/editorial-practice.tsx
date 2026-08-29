"use client"

import { facts, identity, practice } from "@/lib/content"
import { Eyebrow } from "@/components/section-head"
import { useReveal } from "@/hooks/use-reveal"

export function EditorialPractice() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="profile" ref={ref} className="reveal">
      {/* Portrait band — the reference's founder spread. */}
      <div className="grid md:grid-cols-2">
        <div className="order-2 flex flex-col justify-center page-pad py-16 md:order-1 md:py-24">
          <Eyebrow index="05" label="Profile" />
          <h2 className="mt-8 max-w-[18ch] font-display text-title font-medium">
            Two years of shipping the hard part.
          </h2>
          <p className="mt-8 max-w-measure text-[0.9375rem] leading-relaxed text-bone/80">
            Six posts, from a university research bench to a fintech ML team in Cairo — by way of a support platform in
            Riyadh and a freelance practice with a hundred per cent job success score.
          </p>
          <dl className="rule-t mt-10 grid grid-cols-2 gap-6 pt-8 sm:grid-cols-3">
            {facts.slice(0, 3).map((fact) => (
              <div key={fact.label}>
                <dt className="label">{fact.label}</dt>
                <dd className="mt-2 text-[0.875rem] leading-snug text-bone/85">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative order-1 md:order-2">
          <img
            src="/img/portrait.jpg"
            alt=""
            aria-hidden
            loading="lazy"
            className="h-80 w-full object-cover sm:h-96 md:h-full md:min-h-[38rem]"
          />
          {/* Caption sits on a scrim so it stays legible over the plate,
              and wraps rather than colliding at narrow widths. */}
          <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent px-6 pb-6 pt-16">
            <span className="font-display text-[1.5rem] font-medium leading-tight text-bone">Osama Abo-Bakr</span>
            <span className="label">{identity.role}</span>
          </div>
        </div>
      </div>

      <div className="section-pad pt-0">
        {practice.map((role) => (
          <article
            key={`${role.org}-${role.period}`}
            data-reveal-child
            className="reveal rule-t grid gap-y-5 py-8 md:grid-cols-12 md:gap-10 md:py-12"
          >
            <header className="md:col-span-4">
              <h3 className="font-display text-[1.75rem] font-medium leading-tight md:text-[2rem]">{role.org}</h3>
              <p className="mt-2 text-[0.9375rem] text-bone/85">{role.title}</p>
              <p className="label mt-4">{role.period}</p>
              <p className="mt-1.5 font-mono text-micro text-bone-faint">{role.place}</p>
            </header>

            <ul className="space-y-4 md:col-span-7 md:col-start-6">
              {role.notes.map((note, i) => (
                <li key={i} className="flex gap-4">
                  <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-accent/70" />
                  <span className="max-w-measure text-[0.9375rem] leading-relaxed text-bone/80">{note}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

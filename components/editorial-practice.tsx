"use client"

import { practice } from "@/lib/content"
import { SectionHead } from "@/components/section-head"
import { useReveal } from "@/hooks/use-reveal"

export function EditorialPractice() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="practice" ref={ref} className="section-pad reveal">
      <SectionHead
        index="02"
        label="Practice"
        title="Where the work happened."
        aside="Six posts across four years — a fintech ML team in Cairo, a support platform in Riyadh, a decade's worth of freelance briefs, and the university that started it."
      />

      <div className="mt-14 md:mt-20">
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
                  <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-lapis/70" />
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

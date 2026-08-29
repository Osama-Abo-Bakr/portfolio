"use client"

import { lede, facts } from "@/lib/content"
import { SectionHead } from "@/components/section-head"
import { useReveal } from "@/hooks/use-reveal"

export function EditorialProfile() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="profile" ref={ref} className="section-pad reveal">
      <SectionHead index="01" label="Profile" title="The distance between a notebook and production." />

      <div className="mt-14 grid gap-y-14 md:grid-cols-12 md:gap-10">
        <div className="space-y-6 md:col-span-7">
          {lede.map((paragraph, i) => (
            <p
              key={i}
              data-reveal-child
              className="reveal max-w-measure text-lede font-light leading-relaxed text-bone/90 first:text-bone"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Standing facts, set as a masthead colophon block. */}
        <dl className="md:col-span-4 md:col-start-9">
          {facts.map((fact) => (
            <div key={fact.label} data-reveal-child className="reveal rule-t py-4 first:border-t-0 first:pt-0">
              <dt className="label">{fact.label}</dt>
              <dd className="mt-2 text-[0.9375rem] leading-relaxed text-bone/85">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

"use client"

import { domains } from "@/lib/content"
import { Eyebrow } from "@/components/section-head"
import { useReveal } from "@/hooks/use-reveal"

/**
 * The white card band. Three areas of practice — what the work is, not a
 * menu of services, because Osama does not sell packages.
 */
export function EditorialDomains() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="domains" ref={ref} className="invert-white section-pad reveal">
      <div className="grid gap-y-6 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-6">
          <Eyebrow index="02" label="Practice" />
          <h2 className="mt-6 max-w-[14ch] font-display text-title font-medium">Three things, done properly.</h2>
        </div>
        <p className="max-w-measure self-end text-[0.9375rem] leading-relaxed text-bone-dim md:col-span-5 md:col-start-8">
          Every project below sits in one of these. They are areas of practice rather than a menu — the shape of the
          problem decides what gets built.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:mt-20 md:grid-cols-3">
        {domains.map((domain) => (
          <article key={domain.title} data-reveal-child className="reveal group">
            <div className="overflow-hidden">
              <img
                src={domain.image}
                alt=""
                aria-hidden
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
              />
            </div>
            <h3 className="mt-6 font-display text-[1.625rem] font-medium leading-tight">{domain.title}</h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-bone/75">{domain.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

"use client"

import { pipeline } from "@/lib/content"
import { Eyebrow } from "@/components/section-head"
import { useReveal } from "@/hooks/use-reveal"

/**
 * The numbered band. Unlike a generic "our process", this is a real
 * sequence: the eKYC pipeline's four stages, each feeding the next.
 */
export function EditorialPipeline() {
  const ref = useReveal<HTMLElement>()
  const [lead, ...rest] = pipeline

  return (
    <section id="pipeline" ref={ref} className="invert-white section-pad reveal pt-0">
      <div className="grid gap-y-6 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-6">
          <Eyebrow index="03" label="Pipeline" />
          <h2 className="mt-6 max-w-[16ch] font-display text-title font-medium">One document, four stages.</h2>
        </div>
        <p className="max-w-measure self-end text-[0.9375rem] leading-relaxed text-bone-dim md:col-span-5 md:col-start-8">
          The eKYC pipeline built at Thndr, end to end. Each stage hands the next a narrower problem, which is why the
          whole thing answers in under half a second.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:mt-20 md:grid-cols-12">
        <article data-reveal-child className="reveal md:col-span-6">
          <img
            src={lead.image}
            alt=""
            aria-hidden
            loading="lazy"
            className="h-72 w-full object-cover md:h-[22rem]"
          />
          <div className="rule-t mt-6 flex items-baseline gap-4 pt-4">
            <span className="font-mono text-label text-accent">{lead.index}</span>
            <h3 className="font-display text-[1.5rem] font-medium">{lead.title}</h3>
          </div>
          <p className="mt-3 max-w-measure text-[0.9375rem] leading-relaxed text-bone/75">{lead.summary}</p>
        </article>

        <div className="grid gap-8 md:col-span-6 md:grid-cols-3">
          {rest.map((stage) => (
            <article key={stage.index} data-reveal-child className="reveal">
              <img
                src={stage.image}
                alt=""
                aria-hidden
                loading="lazy"
                className="h-40 w-full object-cover"
              />
              <div className="rule-t mt-4 flex items-baseline gap-3 pt-3">
                <span className="font-mono text-label text-accent">{stage.index}</span>
                <h3 className="font-display text-[1.25rem] font-medium">{stage.title}</h3>
              </div>
              <p className="mt-2 text-[0.875rem] leading-relaxed text-bone/75">{stage.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

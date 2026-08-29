"use client"

import { lede } from "@/lib/content"
import { Eyebrow } from "@/components/section-head"
import { useReveal } from "@/hooks/use-reveal"

/**
 * Text left, plate right — the reference's "Considered Differently" band.
 * The image runs to the edge of the page rather than sitting in a box.
 */
export function EditorialApproach() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="approach" ref={ref} className="reveal grid md:grid-cols-2">
      <div className="order-2 flex flex-col justify-center page-pad py-16 md:order-1 md:py-24">
        <Eyebrow index="01" label="Approach" />
        <h2 className="mt-8 max-w-[16ch] font-display text-title font-medium">Systems, considered differently.</h2>
        <div className="rule-t mt-10 space-y-5 pt-8">
          {lede.map((paragraph, i) => (
            <p key={i} data-reveal-child className="reveal max-w-measure text-[0.9375rem] leading-relaxed text-bone/80">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-10">
          <a href="#colophon" className="btn-frame">
            Start a conversation
          </a>
        </div>
      </div>

      <div className="order-1 md:order-2">
        <img
          src="/img/approach.jpg"
          alt=""
          aria-hidden
          loading="lazy"
          className="h-64 w-full object-cover sm:h-80 md:h-full md:min-h-[36rem]"
        />
      </div>
    </section>
  )
}

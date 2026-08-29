"use client"

import { sectionIndex, testimonials } from "@/lib/content"
import { Eyebrow } from "@/components/section-head"
import { useReveal } from "@/hooks/use-reveal"

/**
 * Client feedback, as the card band the reference runs. Renders nothing
 * while `testimonials` is empty — an empty praise section is worse than
 * no praise section, and invented praise is worse than both.
 */
export function EditorialTestimonials() {
  const ref = useReveal<HTMLElement>()
  if (testimonials.length === 0) return null

  return (
    <section id="feedback" ref={ref} className="invert-white section-pad reveal">
      <div className="grid gap-y-6 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-6">
          <Eyebrow index={sectionIndex("feedback")} label="Feedback" />
          <h2 className="mt-6 max-w-[14ch] font-display text-title font-medium">
            Better systems. Real progress.
          </h2>
        </div>
        <p className="max-w-measure self-end text-[0.9375rem] leading-relaxed text-bone-dim md:col-span-5 md:col-start-8">
          Delivered through Upwork, where the work carries a 100% Job Success Score across ten-plus projects.
        </p>
      </div>

      <ul className="mt-14 grid gap-8 md:mt-20 md:grid-cols-3">
        {testimonials.map((t) => (
          <li key={t.author} data-reveal-child className="reveal rule-t pt-8">
            <blockquote className="max-w-measure text-[1.0625rem] leading-relaxed text-bone/85">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <footer className="mt-6">
              <p className="font-display text-[1.25rem] font-medium leading-tight">{t.author}</p>
              <p className="label mt-2">{t.context}</p>
            </footer>
          </li>
        ))}
      </ul>
    </section>
  )
}

"use client"

import { sectionIndex, toolkit } from "@/lib/content"
import { Eyebrow } from "@/components/section-head"
import { useReveal } from "@/hooks/use-reveal"

/**
 * The circular plate with capability labels set around it — the
 * reference's "Every Session has a Purpose" band. The pills are the
 * toolkit's own group names, so the ring says something true.
 */
export function EditorialOrbit() {
  const ref = useReveal<HTMLElement>()
  const groups = toolkit.slice(0, 6)
  const left = groups.slice(0, 3)
  const right = groups.slice(3)

  return (
    <section id="toolkit" ref={ref} className="band-deep section-pad reveal relative overflow-hidden">
      <div className="grid gap-y-6 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-6">
          <Eyebrow index={sectionIndex("toolkit")} label="Toolkit" />
          <h2 className="mt-6 max-w-[15ch] font-display text-title font-medium">Every layer has a purpose.</h2>
        </div>
        <p className="max-w-measure self-end text-[0.9375rem] leading-relaxed text-bone-dim md:col-span-4 md:col-start-9">
          From the model to the queue in front of it, each piece is chosen for the job rather than the résumé. Tools,
          grouped by what they are actually for.
        </p>
      </div>

      <div className="relative mt-16 md:mt-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 md:flex-row md:justify-between">
          <ul className="order-2 flex w-full flex-wrap justify-center gap-3 md:order-1 md:w-auto md:flex-col md:items-start">
            {left.map((g) => (
              <li key={g.group} data-reveal-child className="reveal pill">
                {g.group}
              </li>
            ))}
          </ul>

          <img
            src="/img/orbit.png"
            alt=""
            aria-hidden
            loading="lazy"
            className="order-1 w-52 shrink-0 sm:w-64 md:order-2 md:w-80 lg:w-[22rem]"
          />

          <ul className="order-3 flex w-full flex-wrap justify-center gap-3 md:w-auto md:flex-col md:items-end">
            {right.map((g) => (
              <li key={g.group} data-reveal-child className="reveal pill">
                {g.group}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* The full inventory, still typography — no proficiency meters. */}
      <div className="rule-t mt-16 pt-10 md:mt-20">
        {toolkit.map((group) => (
          <div key={group.group} data-reveal-child className="reveal grid gap-y-2 py-4 md:grid-cols-12 md:gap-10">
            <h3 className="label md:col-span-3 md:pt-1">{group.group}</h3>
            <p className="text-[0.9375rem] leading-relaxed text-bone/80 md:col-span-9">
              {group.items.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

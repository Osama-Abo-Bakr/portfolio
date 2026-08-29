"use client"

import { figures } from "@/lib/content"
import { SectionHead } from "@/components/section-head"
import { useReveal } from "@/hooks/use-reveal"

/**
 * The inverted insert — bone paper bound into the middle of the issue.
 * Every figure is one Osama measured, and every one names its source;
 * the deltas carry the before-value so the number means something.
 */
export function EditorialMeasures() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="measures" ref={ref} className="invert-paper section-pad reveal">
      <SectionHead
        index="04"
        label="Measures"
        title="Numbers that were measured, not claimed."
        aside="Each figure comes from a system in production and names where it came from. Where the work replaced something, the previous value is kept beside it."
      />

      <dl className="mt-14 grid gap-x-10 md:mt-20 md:grid-cols-3">
        {figures.map((figure) => (
          <div key={figure.label} data-reveal-child className="reveal rule-t py-8 md:py-12">
            <dt className="sr-only">{figure.label}</dt>
            <dd>
              {/* The line above the numeral carries either what the figure
                  replaced, or the qualifier the résumé attaches to it. It
                  is subordinate to the number, never dropped from it. */}
              {figure.from ? (
                <p className="mb-2 flex items-baseline gap-2 font-mono text-micro text-bone-dim">
                  <span className="line-through decoration-1">{figure.from}</span>
                  <span aria-hidden>→</span>
                </p>
              ) : figure.qualifier ? (
                <p className="mb-2 font-mono text-micro text-bone-dim">{figure.qualifier}</p>
              ) : null}
              <p className="font-display text-figure font-medium">
                {/* Bodoni has no multiplication sign, so it falls back to a
                    stranger's serif. Set it in the grotesque, deliberately. */}
                {figure.value.split(/(×)/).map((part, i) =>
                  part === "×" ? (
                    <span
                      key={i}
                      className="font-sans font-light"
                      style={{ fontSize: "0.62em", verticalAlign: "0.05em", marginLeft: "0.05em" }}
                    >
                      ×
                    </span>
                  ) : (
                    part
                  ),
                )}
              </p>
              <p className="mt-4 max-w-[26ch] text-[0.9375rem] leading-snug text-bone/80">{figure.label}</p>
              <p className="label mt-4">{figure.source}</p>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

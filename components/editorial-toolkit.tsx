"use client"

import { Fragment } from "react"

import { toolkit } from "@/lib/content"
import { SectionHead } from "@/components/section-head"
import { useReveal } from "@/hooks/use-reveal"

/**
 * Tools as typography. No proficiency meters — a bar chart of feelings
 * about your own skills is not a measurement.
 */
export function EditorialToolkit() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="toolkit" ref={ref} className="section-pad reveal">
      <SectionHead index="05" label="Toolkit" title="What the work is built with." />

      <div className="mt-14 md:mt-20">
        {toolkit.map((group) => (
          <div
            key={group.group}
            data-reveal-child
            className="reveal rule-t grid gap-y-3 py-6 md:grid-cols-12 md:gap-10 md:py-7"
          >
            <h3 className="label md:col-span-3 md:pt-1.5">{group.group}</h3>
            {/* Each item keeps its trailing middot on the same line; the
                break opportunity is the real space that follows it. Without
                that space the whole group is one unbreakable word. */}
            <p className="text-[1.0625rem] leading-relaxed text-bone/85 md:col-span-9">
              {group.items.map((item, i) => (
                <Fragment key={item}>
                  <span className="whitespace-nowrap">
                    {item}
                    {i < group.items.length - 1 ? (
                      <span aria-hidden className="pl-2.5 text-bone-faint">
                        ·
                      </span>
                    ) : null}
                  </span>
                  {i < group.items.length - 1 ? " " : null}
                </Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

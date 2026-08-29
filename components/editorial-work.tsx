"use client"

import { work } from "@/lib/content"
import { SectionHead } from "@/components/section-head"
import { useReveal } from "@/hooks/use-reveal"

/**
 * Selected work as an index, not a card grid: year, title, context,
 * stack, source. Rules do the separating; nothing floats in a box.
 */
export function EditorialWork() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="work" ref={ref} className="section-pad reveal">
      <SectionHead
        index="03"
        label="Selected Work"
        title="Nine things worth the page."
        aside="Production systems sit alongside open source. Where a project shipped inside a company, there is no public repository to link — the row says so with a dash."
      />

      {/* Index header — the column names, stated once. */}
      <div className="mt-14 hidden md:mt-20 md:grid md:grid-cols-12 md:gap-10 md:pb-4">
        <span className="label md:col-span-1">Year</span>
        <span className="label md:col-span-4">Project</span>
        <span className="label md:col-span-5">Description</span>
        <span className="label md:col-span-2 md:text-right">Source</span>
      </div>

      <div>
        {work.map((project) => {
          const Row = (
            <>
              <div className="md:col-span-1">
                <span className="font-mono text-micro text-bone-dim">{project.year}</span>
              </div>

              <div className="md:col-span-4">
                <h3 className="font-display text-[1.625rem] font-medium leading-tight transition-colors duration-300 group-hover:text-lapis md:text-[1.875rem]">
                  {project.title}
                </h3>
                <p className="label mt-2">{project.context}</p>
              </div>

              <div className="md:col-span-5">
                <p className="max-w-measure text-[0.9375rem] leading-relaxed text-bone/80">{project.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
                  {project.stack.map((tool) => (
                    <li key={tool} className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-bone-faint">
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-2 md:text-right">
                {project.href ? (
                  <span className="label inline-flex items-center gap-1.5 transition-colors duration-300 group-hover:text-lapis">
                    Source
                    <span aria-hidden className="transition-transform duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </span>
                ) : (
                  // The dash reads as "none" under the Source column header;
                  // on mobile there is no header, so it says so in words.
                  <span className="font-mono text-micro text-bone-faint">
                    <span className="md:hidden">No public source</span>
                    <span className="hidden md:inline" title="No public repository">
                      —
                    </span>
                  </span>
                )}
              </div>
            </>
          )

          const rowClass =
            "group grid gap-y-4 rule-t py-8 transition-colors duration-300 md:grid-cols-12 md:gap-10 md:py-10"

          return project.href ? (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal-child
              className={`reveal ${rowClass} hover:bg-ink-raised md:-mx-6 md:px-6`}
            >
              {Row}
            </a>
          ) : (
            <div key={project.title} data-reveal-child className={`reveal ${rowClass} md:-mx-6 md:px-6`}>
              {Row}
            </div>
          )
        })}
      </div>

      <div className="rule-t pt-8">
        <a
          href="https://github.com/Osama-Abo-Bakr?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="label inline-flex items-center gap-2 hover:text-lapis"
        >
          <span>All 100+ repositories on GitHub</span>
          <span aria-hidden>↗</span>
        </a>
      </div>
    </section>
  )
}

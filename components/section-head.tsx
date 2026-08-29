import type { ReactNode } from "react"

/** The running eyebrow every band opens with: index, rule, label. */
export function Eyebrow({ index, label }: { index: string; label: string }) {
  return (
    <p className="flex items-baseline gap-3">
      <span className="font-mono text-label text-accent">{index}</span>
      <span aria-hidden className="label">
        —
      </span>
      <span className="label">{label}</span>
    </p>
  )
}

/**
 * The running head of every section: index numeral, hairline, title.
 * The numerals are real — the page reads top to bottom as one feature.
 */
export function SectionHead({
  index,
  label,
  title,
  aside,
}: {
  index: string
  label: string
  title: ReactNode
  aside?: ReactNode
}) {
  return (
    <div className="rule-t pt-6 md:pt-8">
      <Eyebrow index={index} label={label} />
      <div className="mt-8 grid gap-6 md:mt-12 md:grid-cols-12 md:gap-10">
        <h2 className="font-display text-title font-medium md:col-span-7">{title}</h2>
        {aside ? (
          <p className="max-w-measure self-end text-[0.9375rem] leading-relaxed text-bone-dim md:col-span-4 md:col-start-9">
            {aside}
          </p>
        ) : null}
      </div>
    </div>
  )
}

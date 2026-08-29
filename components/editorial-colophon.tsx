"use client"

import { identity } from "@/lib/content"
import { SectionHead } from "@/components/section-head"
import { useReveal } from "@/hooks/use-reveal"

// The address itself is set large just above, so it is not repeated here.
const channels = [
  { label: "Phone", value: identity.phone, href: `tel:${identity.phone.replace(/\s/g, "")}` },
  { label: "LinkedIn", value: identity.linkedinHandle, href: identity.linkedin },
  { label: "GitHub", value: identity.githubHandle, href: identity.github },
  { label: "Résumé", value: "PDF, one page", href: identity.resume },
]

export function EditorialColophon() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="colophon" ref={ref} className="section-pad reveal">
      <SectionHead
        index="06"
        label="Colophon"
        title="Open to work that needs the hard part done properly."
        aside="Freelance and consulting enquiries welcome — retrieval systems, document intelligence, agent architectures, or an existing pipeline that needs to get faster."
      />

      {/* The address itself, set as the largest line on the page after the name. */}
      <a
        href={`mailto:${identity.email}`}
        data-reveal-child
        className="reveal group mt-14 block rule-t pt-10 md:mt-20"
      >
        <span className="label">Write to me</span>
        <span className="mt-4 flex flex-wrap items-baseline gap-x-5 gap-y-2">
          <span className="font-display text-[clamp(1.5rem,0.9rem+3.2vw,4rem)] font-medium leading-[1.08] transition-colors duration-300 group-hover:text-lapis">
            {/* An address wraps after the @, never mid-word. */}
            {identity.email.split("@")[0]}@<wbr />
            {identity.email.split("@")[1]}
          </span>
          <span
            aria-hidden
            className="font-mono text-2xl text-lapis transition-transform duration-500 ease-editorial group-hover:-translate-y-1 group-hover:translate-x-1"
          >
            ↗
          </span>
        </span>
      </a>

      <dl className="mt-16 grid gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-4">
        {channels.map((channel) => (
          <div key={channel.label} data-reveal-child className="reveal rule-t py-5">
            <dt className="label">{channel.label}</dt>
            <dd className="mt-2">
              <a
                href={channel.href}
                target={channel.href.startsWith("http") || channel.href.startsWith("/") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="link-underline break-words text-[0.9375rem]"
              >
                {channel.value}
              </a>
            </dd>
          </div>
        ))}
      </dl>

      {/* A real colophon: what the page is set in, and where it is written from. */}
      <footer className="rule-t mt-20 flex flex-col gap-6 pt-8 md:flex-row md:items-start md:justify-between">
        <p className="max-w-measure font-mono text-micro leading-relaxed text-bone-faint">
          Set in Bodoni Moda, Archivo and IBM Plex Mono. Built with Next.js and Tailwind CSS, written and deployed from{" "}
          {identity.location}.
        </p>
        {/* Year resolves at build and again on the client; they differ for
            one night a year, which is not worth a mismatch warning. */}
        <p className="font-mono text-micro text-bone-faint" suppressHydrationWarning>
          © {new Date().getFullYear()} {identity.name}
        </p>
      </footer>
    </section>
  )
}

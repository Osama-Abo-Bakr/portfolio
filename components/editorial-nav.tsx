"use client"

import { useEffect, useState } from "react"
import { identity, sections } from "@/lib/content"

export function EditorialNav() {
  const [active, setActive] = useState<string>("")
  const [lifted, setLifted] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Track which section the reader is in, so the masthead can name it.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    for (const s of sections) {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const current = sections.find((s) => s.id === active)

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-editorial ${
          lifted ? "border-b border-rule bg-ink/85 backdrop-blur-md" : "border-b border-transparent"
        }`}
      >
        {/* Same max-width and padding as <main>, so the masthead sits on
            the page grid instead of 48px outside it. */}
        <div className="mx-auto flex h-14 max-w-page items-center justify-between gap-6 px-6 sm:px-10 lg:px-16 xl:px-20">
          <a
            href="#top"
            className="font-display text-lg font-semibold tracking-tight transition-colors hover:text-accent"
          >
            Osama Abo-Bakr
          </a>

          {/* Running head — names the section the reader is currently in. */}
          <span
            aria-hidden
            className={`label hidden flex-1 justify-center transition-opacity duration-500 md:flex ${
              current ? "opacity-100" : "opacity-0"
            }`}
          >
            {current ? `${current.index} — ${current.label}` : "—"}
          </span>

          <nav className="hidden items-center gap-7 lg:flex">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`label transition-colors hover:text-bone ${active === s.id ? "text-bone" : ""}`}
              >
                {s.label}
              </a>
            ))}
            <a
              href={identity.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="label border border-rule-strong px-3 py-1.5 text-bone transition-colors hover:border-accent hover:text-accent"
              style={{ borderColor: "var(--rule-strong)" }}
            >
              Résumé
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close contents" : "Open contents"}
            className="label text-bone lg:hidden"
          >
            {open ? "Close" : "Contents"}
          </button>
        </div>
      </header>

      {/* Contents overlay — a table of contents, not a hamburger drawer. */}
      <div
        // inert keeps the closed overlay out of the tab order and the
        // accessibility tree; opacity-0 alone leaves its links focusable.
        inert={!open}
        className={`fixed inset-0 z-40 bg-ink transition-opacity duration-300 ease-editorial lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="mx-auto flex h-full max-w-page flex-col justify-center gap-1 px-6 sm:px-10">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-5 border-b border-rule py-5"
            >
              <span className="font-mono text-label text-accent">{s.index}</span>
              <span className="font-display text-3xl font-medium">{s.label}</span>
            </a>
          ))}
          <a
            href={identity.resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-baseline gap-5 py-5"
          >
            <span className="font-mono text-label text-accent">↗</span>
            <span className="font-display text-3xl font-medium">Résumé</span>
          </a>
        </nav>
      </div>
    </>
  )
}

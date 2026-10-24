"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/logo"
import { CallButton, CircleCall } from "@/components/buttons"
import { SERVICES } from "@/lib/services"
import { AREAS } from "@/lib/areas"
import { SITE } from "@/lib/site"

const links = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/cost-guides", label: "Cost guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

function Caret() {
  return <span aria-hidden="true" className="ml-1.5 inline-block h-2 w-2 -translate-y-0.5 rotate-45 border-b-2 border-r-2 border-current" />
}

export function Header() {
  const [open, setOpen] = useState(false)
  const path = usePathname()
  useEffect(() => setOpen(false), [path])
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  const item = "px-3 py-2 font-display text-[15px] font-semibold text-ink/80 transition hover:text-ink hover:underline hover:decoration-signal hover:decoration-4 hover:underline-offset-8"
  const panel = "invisible absolute left-0 top-full translate-y-2 rounded-2xl bg-white p-3 text-ink opacity-0 shadow-2xl ring-1 ring-ink/10 transition duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
  const sub = "block rounded-xl px-4 py-2.5 font-display text-[15px] font-semibold hover:bg-signal"
  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-white/95 text-ink shadow-sm shadow-ink/5 backdrop-blur">
      <div className="hidden bg-ink text-xs text-silver md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-1.5">
          <span>{SITE.tagline}</span>
          <a href={`tel:${SITE.phoneTel}`} className="font-semibold text-signal hover:underline">{SITE.phoneDisplay}</a>
        </div>
      </div>
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-5">
        <Logo />
        <nav aria-label="Main" className="hidden items-center lg:flex">
          <div className="group relative">
            <Link href="/services" className={item}>Services<Caret /></Link>
            <div className={`${panel} w-[27rem]`}>
              {SERVICES.map((s) => <Link key={s.slug} href={`/services/${s.slug}`} className={sub}>{s.name}</Link>)}
            </div>
          </div>
          <div className="group relative">
            <Link href="/areas" className={item}>Areas<Caret /></Link>
            <div className={`${panel} grid w-[26rem] grid-cols-2`}>
              {AREAS.map((a) => <Link key={a.slug} href={`/areas/${a.slug}`} className={sub}>{a.name}</Link>)}
            </div>
          </div>
          {links.map((l) => <Link key={l.href} href={l.href} className={item}>{l.label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden xl:block"><CallButton size="md" label={`Call ${SITE.phoneDisplay}`} pulse /></div>
          <div className="hidden sm:block xl:hidden"><CallButton size="md" label="Call Now" pulse /></div>
          <div className="sm:hidden"><CircleCall /></div>
          <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full bg-ink/5 transition hover:bg-ink/10 lg:hidden">
            <span className={`h-0.5 w-5 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-[76px] overflow-y-auto bg-white px-5 pb-28 pt-4 lg:hidden">
          <details className="border-b border-ink/10 py-4">
            <summary className="cursor-pointer font-display text-3xl font-bold marker:hidden">Services<Caret /></summary>
            <div className="mt-3 flex flex-col">
              <Link href="/services" className="py-2 text-lg text-graphite">All services</Link>
              {SERVICES.map((s) => <Link key={s.slug} href={`/services/${s.slug}`} className="py-2 text-lg text-graphite hover:text-ink">{s.name}</Link>)}
            </div>
          </details>
          <details className="border-b border-ink/10 py-4">
            <summary className="cursor-pointer font-display text-3xl font-bold marker:hidden">Areas<Caret /></summary>
            <div className="mt-3 flex flex-col">
              <Link href="/areas" className="py-2 text-lg text-graphite">All areas</Link>
              {AREAS.map((a) => <Link key={a.slug} href={`/areas/${a.slug}`} className="py-2 text-lg text-graphite hover:text-ink">{a.name}</Link>)}
            </div>
          </details>
          {links.map((l) => <Link key={l.href} href={l.href} className="block border-b border-ink/10 py-4 font-display text-3xl font-bold">{l.label}</Link>)}
          <Link href="/faq" className="block border-b border-ink/10 py-4 font-display text-3xl font-bold">FAQ</Link>
        </div>
      )}
    </header>
  )
}

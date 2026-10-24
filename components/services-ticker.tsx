import Link from "next/link"
import { SERVICES } from "@/lib/services"

function Roof() {
  return <svg aria-hidden="true" viewBox="0 0 40 24" className="h-6 w-10 shrink-0 text-signal" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21 20 4l17 17" /></svg>
}

const words: { t: string; href: string }[] = SERVICES.map((s) => ({ t: s.jobLabel, href: `/services/${s.slug}` }))

/** Endless ticker of what we do. Pauses on hover. */
export function ServicesTicker() {
  const row = (hidden: boolean) => words.map((w) => (
    <span key={`${hidden}-${w.t}`} className="flex items-center gap-8">
      <Link href={w.href} tabIndex={hidden ? -1 : undefined} aria-hidden={hidden || undefined} className="font-display text-5xl font-extrabold tracking-tight text-white transition hover:text-signal md:text-7xl">{w.t}</Link>
      <Roof />
    </span>
  ))
  return (
    <section aria-label="What we do" className="bg-ink py-10">
      <div className="overflow-hidden">
        <div className="strip-fast flex w-max items-center gap-8 pr-8">{row(false)}{row(true)}</div>
      </div>
    </section>
  )
}

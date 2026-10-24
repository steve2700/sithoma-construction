"use client"

import Link from "next/link"
import { useState } from "react"
import { SERVICES } from "@/lib/services"
import { MovingImage } from "@/components/moving-image"

/** Switch between repairs and installations. The cards change to show what we do in each. */
export function WorkToggle() {
  const [mode, setMode] = useState<"repairs" | "installs">("repairs")
  return (
    <div>
      <div role="tablist" aria-label="Repairs or installations" className="inline-flex rounded-full bg-white p-1.5 shadow-sm ring-1 ring-ink/10">
        {([["repairs", "Repairs"], ["installs", "Installations"]] as const).map(([k, l]) => (
          <button key={k} role="tab" type="button" aria-selected={mode === k} onClick={() => setMode(k)} className={`rounded-full px-7 py-3 font-display text-base font-bold transition ${mode === k ? "bg-ink text-white" : "text-ink hover:bg-steel"}`}>{l}</button>
        ))}
      </div>
      <div key={mode} className="swap mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Link key={s.slug} href={`/services/${s.slug}`} className="group block overflow-hidden rounded-[1.5rem] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <MovingImage src={s.image} alt={s.imageAlt} variant={i} className="aspect-[16/10]" markWidth={32} />
            <div className="p-6">
              <p className="kicker text-chrome">{mode === "repairs" ? "Repairs" : "Installations"}</p>
              <h3 className="mt-2 text-xl font-bold leading-tight">{s.name}</h3>
              <ul className="mt-4 space-y-2 text-graphite">
                {s[mode].slice(0, 3).map((x) => <li key={x} className="flex items-start gap-3"><span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-signal" />{x}</li>)}
              </ul>
              <span className="mt-5 inline-block font-display font-bold underline decoration-signal decoration-4 underline-offset-4">See the service</span>
            </div>
          </Link>
        ))}
        <Link href="/contact#job-card" className="flex min-h-[280px] flex-col justify-between rounded-[1.5rem] bg-signal p-7 transition hover:bg-signal-dark">
          <p className="kicker">Not sure which?</p>
          <p className="font-display text-3xl font-extrabold leading-tight">Send photos and we will tell you what the job needs.</p>
          <span className="font-display font-bold">Get a free quote &rarr;</span>
        </Link>
      </div>
    </div>
  )
}

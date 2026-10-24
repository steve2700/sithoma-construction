"use client"

import { useEffect, useMemo, useState } from "react"
import { WhatsAppIcon } from "@/components/icons"
import { AREAS, WORK_TYPES, PROPERTY_TYPES } from "@/lib/areas"
import { SERVICES } from "@/lib/services"
import { WA_LINK } from "@/lib/site"
import { trackWhatsAppClick } from "@/lib/analytics"

const field = "h-12 w-full rounded-2xl border-2 border-silver bg-white px-4 text-lg text-ink placeholder:text-chrome focus:border-ink focus:outline-none"
const chip = (on: boolean) =>
  `rounded-full border-2 px-4 py-2 font-display text-sm font-semibold transition active:scale-95 ${on ? "border-ink bg-signal text-ink" : "border-silver bg-white text-ink hover:border-ink"}`
const label = "font-display text-lg font-bold"
const JOBS = [...SERVICES.map((s) => s.jobLabel), "Something else"]

export function JobCard({ defaultJob = "", defaultArea = "", defaultProperty = "" }: { defaultJob?: string; defaultArea?: string; defaultProperty?: string }) {
  const [job, setJob] = useState(defaultJob)
  const [work, setWork] = useState<string>("Repair")
  const [property, setProperty] = useState(defaultProperty)
  const [area, setArea] = useState(defaultArea)
  const [details, setDetails] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [ref, setRef] = useState("SC000000")

  useEffect(() => setRef(`SC${Math.floor(100000 + Math.random() * 900000)}`), [])

  const ready = job && name.trim()

  const message = useMemo(() => {
    const lines = [
      "*SITHOMA CONSTRUCTION JOB CARD*",
      `Ref: ${ref}`,
      `Name: ${name.trim() || "..."}`,
      `Job: ${job || "..."}`,
      `Type of work: ${work}`,
      `Property: ${property || "Not given"}`,
      `Location: ${area || "Not given"}`,
    ]
    if (details.trim()) lines.push(`Details: ${details.trim()}`)
    if (phone.trim()) lines.push(`Call me on: ${phone.trim()}`)
    lines.push("", "I will send photos in this chat.")
    return lines.join("\n")
  }, [ref, name, job, work, property, area, details, phone])

  const send = () => {
    if (!ready) return
    trackWhatsAppClick()
    window.open(WA_LINK(message), "_blank", "noopener,noreferrer")
  }

  return (
    <div id="job-card" className="grid scroll-mt-28 gap-8 lg:grid-cols-[1fr_380px]">
      <div className="rounded-[1.75rem] bg-steel p-6 text-ink md:p-8">
        <fieldset>
          <legend className={label}>What do you need done?</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {JOBS.map((p) => <button key={p} type="button" aria-pressed={job === p} onClick={() => setJob(p)} className={chip(job === p)}>{p}</button>)}
          </div>
        </fieldset>

        <fieldset className="mt-6">
          <legend className={label}>Repair or new installation?</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {WORK_TYPES.map((s) => <button key={s} type="button" aria-pressed={work === s} onClick={() => setWork(s)} className={chip(work === s)}>{s}</button>)}
          </div>
        </fieldset>

        <fieldset className="mt-6">
          <legend className={label}>What kind of property?</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {PROPERTY_TYPES.map((s) => <button key={s} type="button" aria-pressed={property === s} onClick={() => setProperty(s)} className={chip(property === s)}>{s}</button>)}
          </div>
        </fieldset>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className={label}>Where is the property?</span>
            <select className={`${field} mt-2`} value={area} onChange={(e) => setArea(e.target.value)}>
              <option value="">Choose an area</option>
              {AREAS.map((a) => <option key={a.slug} value={a.name}>{a.name}</option>)}
              <option value="Other Gauteng area">Other Gauteng area</option>
            </select>
          </label>
          <label className="block">
            <span className={label}>Your name</span>
            <input className={`${field} mt-2`} value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" autoComplete="name" />
          </label>
        </div>

        <label className="mt-6 block">
          <span className={label}>Tell us a little about it</span>
          <input className={`${field} mt-2`} value={details} onChange={(e) => setDetails(e.target.value)} placeholder="For example: leaking flat roof, about 40 square metres" />
        </label>

        <label className="mt-6 block">
          <span className={label}>Best number to call</span>
          <input className={`${field} mt-2 md:max-w-sm`} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Optional" inputMode="tel" autoComplete="tel" />
        </label>

        <button type="button" onClick={send} disabled={!ready} className="mt-7 flex h-16 w-full items-center justify-center gap-3 rounded-full bg-[#25D366] font-display text-lg font-bold text-ink transition hover:bg-[#1fbd5b] active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-silver disabled:text-graphite/70">
          <WhatsAppIcon className="h-7 w-7" />
          Send job card on WhatsApp
        </button>
        <p className="mt-3 text-center text-sm text-graphite">
          {ready ? "WhatsApp opens with your job card ready to send. Add photos in the chat." : "Choose the job and add your name to send."}
        </p>
      </div>

      <aside aria-label="Job card preview" className="relative hidden self-start lg:block">
        <div className="relative overflow-hidden rounded-[1.75rem] border-2 border-dashed border-white/30 bg-white/5 p-7 text-white backdrop-blur">
          <div className="flex items-baseline justify-between">
            <p className="font-display text-xl font-extrabold tracking-wide">JOB CARD</p>
            <p className="kicker text-signal">{ref}</p>
          </div>
          <dl className="mt-8 space-y-4 text-base">
            {[["Name", name], ["Job", job], ["Work", work], ["Property", property], ["Location", area], ["Details", details], ["Call me on", phone]].map(([k, v]) => (
              <div key={k} className="flex gap-3 border-b border-white/10 pb-3">
                <dt className="w-24 shrink-0 text-silver">{k}</dt>
                <dd className={`min-w-0 break-words ${v ? "text-white" : "text-white/30"}`}>{v || "Waiting"}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-silver">This is exactly what lands in our WhatsApp.</p>
        </div>
      </aside>
    </div>
  )
}

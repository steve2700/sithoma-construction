"use client"

import { useEffect, useRef, useState } from "react"

const steps = [
  { t: "Send photos or visit", d: "Fill in the job card and add photos on WhatsApp. For bigger jobs we visit to measure." },
  { t: "Get a clear quote", d: "You get a written scope and price before any work begins." },
  { t: "Agree dates", d: "We agree start and finish dates that suit you and stick to them." },
  { t: "Careful work", d: "Preparation first, then the finish. We protect your floors and furniture and clean up." },
  { t: "Check and hand over", d: "We walk through the work with you and put right anything that is not perfect." },
]

export function ProjectSteps() {
  const ref = useRef<HTMLOListElement | null>(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <ol ref={ref} className={`steps ${on ? "in" : ""} grid gap-4 sm:grid-cols-2 lg:grid-cols-5`}>
      {steps.map((s, i) => (
        <li key={s.t} className="step rounded-3xl bg-white p-6" style={{ "--i": i } as React.CSSProperties}>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-signal font-display text-lg font-extrabold text-ink">{i + 1}</span>
          <h3 className="mt-4 text-xl font-bold leading-tight">{s.t}</h3>
          <p className="mt-2 text-graphite">{s.d}</p>
        </li>
      ))}
    </ol>
  )
}

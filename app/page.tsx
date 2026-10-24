import type { Metadata } from "next"
import Link from "next/link"
import { CallButton, LinkButton, WhatsAppButton } from "@/components/buttons"
import { HeroStage } from "@/components/hero-stage"
import { RoofLines } from "@/components/roof-lines"
import { RotatingWord } from "@/components/rotating-word"
import { Typewriter } from "@/components/typewriter"
import { WordReveal } from "@/components/word-reveal"
import { ScrambleText } from "@/components/scramble-text"
import { ScrollText } from "@/components/scroll-text"
import { CountUp } from "@/components/count-up"
import { WorkToggle } from "@/components/work-toggle"
import { ProblemFinder } from "@/components/problem-finder"
import { ServicesTicker } from "@/components/services-ticker"
import { BeforeAfter } from "@/components/before-after"
import { ProjectSteps } from "@/components/project-steps"
import { PhotoStrip } from "@/components/photo-strip"
import { JobCard } from "@/components/job-card"
import { Faq } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { SERVICES, BA_TORCH, BA_ROOF_REPAIR, BA_ROOF_PAINT } from "@/lib/services"
import { AREAS } from "@/lib/areas"

export const metadata: Metadata = {
  title: { absolute: "Sithoma Construction | Painting, Drywall, Ceilings, Tiling and Waterproofing in Gauteng" },
  alternates: { canonical: "/" },
}

const faqs = [
  { q: "What areas do you cover?", a: "We are based in Midrand and work across Gauteng and its outskirts, including Sandton, Fourways, Johannesburg, Randburg, Roodepoort, Pretoria, Centurion, Kempton Park, Edenvale, Bedfordview and Boksburg." },
  { q: "Do you do repairs as well as new installations?", a: "Yes. Every service we offer covers both. We repair what is damaged and install what is new, and the repairs are done properly before any finishing starts." },
  { q: "How do I get a quote?", a: "Fill in the job card on this page. It opens in WhatsApp, ready to send. Add photos of the work and we will come back with a clear quote, or arrange a visit for bigger jobs." },
  { q: "What is Rhinolite?", a: "Rhinolite is a gypsum based plaster that gives walls and ceilings a very smooth, hard finish that takes paint well." },
  { q: "Can you fix a leaking roof?", a: "Yes. We find where the water is getting in and repair the roof or waterproof it. We can also repair and repaint the damage inside." },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <RoofLines className="absolute -left-10 top-6 -z-10 h-[420px] w-[90%] opacity-[0.14]" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="rise flex flex-wrap items-center gap-x-3 gap-y-2" style={{ animationDelay: "0ms" }}>
              <span className="kicker rounded-md bg-ink px-2.5 py-1.5 text-signal">Need help with</span>
              <Typewriter className="min-h-[1.6em] text-base font-semibold text-graphite" lines={["a damp patch on the ceiling?", "peeling paint outside?", "cracked tiles in the shower?", "a new partition wall?", "a roof that leaks?"]} />
            </div>
            <h1 className="mt-5 text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-[3.3rem] xl:text-[3.6rem]">
              <span className="rise block" style={{ animationDelay: "120ms" }}>We repair and install</span>
              <span className="rise my-1 block" style={{ animationDelay: "240ms" }}>
                <RotatingWord interval={2200} words={["painting", "drywall", "ceilings", "tiling", "Rhinolite", "waterproofing", "roofs"]} className="rounded-2xl bg-signal px-4 pb-1" />
              </span>
              <span className="rise block" style={{ animationDelay: "360ms" }}>across Gauteng.</span>
            </h1>
            <WordReveal as="p" step={26} text="Repairs done properly first, installations finished beautifully after. Send us photos and we will tell you what the job needs and what it costs." className="mt-6 max-w-xl text-xl leading-relaxed text-graphite" />
            <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "600ms" }}>
              <CallButton pulse />
              <LinkButton href="/contact#job-card" look="outline">Get a Free Quote</LinkButton>
              <WhatsAppButton label="WhatsApp" />
            </div>
          </div>
          <div className="rise px-2 sm:px-8" style={{ animationDelay: "400ms" }}><HeroStage /></div>
        </div>
      </section>

      {/* Statement */}
      <section className="mx-auto max-w-5xl px-5 py-20">
        <ScrambleText text="BROAD VISION  HONEST SERVICE  GREAT VALUE" className="kicker text-chrome" />
        <ScrollText className="mt-5 font-display text-3xl font-extrabold leading-[1.15] md:text-5xl" text="A repair done badly comes back. An installation done badly shows every single day. So we prepare properly, finish carefully and tell you what the job needs before we start." />
        <div className="mt-14 grid grid-cols-3 gap-6">
          {[[SERVICES.length, "services"], [AREAS.length, "Gauteng areas"], [3, "before and after projects"]].map(([n, l]) => (
            <div key={l as string} className="border-l-4 border-signal pl-4">
              <CountUp to={n as number} className="font-display text-6xl font-extrabold md:text-7xl" />
              <p className="mt-1 text-graphite">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Repairs and installations */}
      <section className="mx-auto max-w-7xl px-5 pb-20">
        <p className="mb-3"><ScrambleText text="01 WHAT WE DO" className="kicker text-chrome" /></p>
        <WordReveal text="Repairs first. Installations done right." className="mb-8 max-w-3xl text-4xl font-extrabold leading-[1.05] md:text-5xl" mark={["Repairs"]} />
        <WorkToggle />
      </section>

      {/* Problem finder */}
      <section className="bg-white py-20" id="problem-finder">
        <div className="mx-auto max-w-7xl px-5">
          <p className="mb-3"><ScrambleText text="02 WHAT IS THE PROBLEM" className="kicker text-chrome" /></p>
          <WordReveal text="What are you looking at right now?" className="max-w-3xl text-4xl font-extrabold leading-[1.05] md:text-5xl" mark={["right"]} />
          <p className="mt-4 max-w-2xl text-lg text-graphite">Pick what you can see. We will show the usual causes and what we do about it, and you can send it to us in one tap.</p>
          <div className="mt-10"><ProblemFinder /></div>
        </div>
      </section>

      <ServicesTicker />

      {/* Before and after */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <p className="mb-3"><ScrambleText text="03 THE RESULTS" className="kicker text-chrome" /></p>
        <WordReveal text="See the difference. Drag to compare." className="max-w-3xl text-4xl font-extrabold leading-[1.05] md:text-5xl" />
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <BeforeAfter item={BA_ROOF_REPAIR} />
          <BeforeAfter item={BA_TORCH} />
          <BeforeAfter item={BA_ROOF_PAINT} />
        </div>
      </section>

      {/* Job card */}
      <section className="gable bg-ink px-5 pb-24 pt-28 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3"><ScrambleText text="04 YOUR JOB CARD" className="kicker text-signal" /></p>
            <WordReveal text="Send your job card on WhatsApp" className="text-4xl font-extrabold leading-[1.05] md:text-5xl" mark={["WhatsApp"]} />
            <p className="mt-4 text-xl text-silver">A few quick answers and your job is in our queue. Add photos in the chat and we will come back with a quote.</p>
          </div>
          <JobCard />
        </div>
      </section>

      {/* How a project runs */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <p className="mb-3"><ScrambleText text="05 HOW IT WORKS" className="kicker text-chrome" /></p>
        <WordReveal text="From first photo to final handover" className="mb-10 max-w-3xl text-4xl font-extrabold leading-[1.05] md:text-5xl" />
        <ProjectSteps />
      </section>

      <section className="pb-20" aria-labelledby="work">
        <WordReveal as="h2" text="On site, at work" className="mx-auto mb-8 max-w-7xl px-5 text-4xl font-extrabold md:text-5xl" />
        <PhotoStrip />
      </section>

      {/* Areas */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <p className="mb-3"><ScrambleText text="06 NEAR YOU" className="kicker text-chrome" /></p>
          <WordReveal text="Based in Midrand, working across Gauteng" className="max-w-3xl text-4xl font-extrabold leading-[1.05] md:text-5xl" />
          <div className="mt-8 flex flex-wrap gap-3">
            {AREAS.map((a) => <Link key={a.slug} href={`/areas/${a.slug}`} className="rounded-full border-2 border-ink px-6 py-2.5 font-display text-lg font-semibold transition hover:bg-signal">{a.name}</Link>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20">
        <WordReveal text="Common questions" className="mb-10 text-4xl font-extrabold md:text-5xl" />
        <Faq items={faqs} />
      </section>

      <CtaBand />
    </>
  )
}

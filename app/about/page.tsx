import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { MovingImage } from "@/components/moving-image"
import { CtaBand } from "@/components/cta-band"
import { PhotoStrip } from "@/components/photo-strip"
import { ProjectSteps } from "@/components/project-steps"
import { WordReveal } from "@/components/word-reveal"
import { CallButton, LinkButton } from "@/components/buttons"
import { ADDRESS_LINE } from "@/lib/site"

export const metadata: Metadata = {
  title: "About Sithoma Construction and Projects",
  description: "Sithoma Construction and Projects is based in Midrand and does repairs and installations for painting, drywall, ceilings, tiling, Rhinolite, waterproofing and roofs across Gauteng.",
  alternates: { canonical: "/about" },
}

const values = [
  { t: "Broad vision", d: "We look at the whole job, not just the visible part. A damp wall gets the leak fixed before it gets painted. A new ceiling gets the right framing before it gets its finish." },
  { t: "Honest service", d: "You get a clear scope and price before work starts, and honest advice about what the job really needs, even when that means less work." },
  { t: "Great value", d: "Preparation and quality materials make work last. That is better value than the cheapest quote that has to be redone in two years." },
]

export default function AboutPage() {
  return (
    <>
      {/* TODO: replace or extend with the owner's real story, years in business and team details. */}
      <PageHero crumbs={[{ name: "About", href: "/about" }]} title="Where we build your visions" mark={["visions"]} image={{ src: "/exterior-house-painting-double-storey-home.jpg", alt: "Sithoma team painting a double storey home" }} text="Sithoma Construction and Projects does repairs and installations for homes and businesses across Gauteng. Our goal is quality projects, finished on time.">
        <CallButton />
        <LinkButton href="/contact#job-card" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
        <div>
          <WordReveal text="Painting, drywall, ceilings, tiling, Rhinolite, waterproofing and roofs" className="text-3xl font-extrabold leading-[1.1] md:text-4xl" />
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-graphite">
            One team that handles the finishing trades most properties need. That means fewer contractors to coordinate and one place to call when something needs repairing or installing.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-graphite">
            We are based at {ADDRESS_LINE}, and we work across Gauteng and its outskirts.
          </p>
        </div>
        <MovingImage src="/led-cove-ceiling-design-installation.jpg" alt="LED cove ceiling design installed by Sithoma" className="aspect-square max-h-[540px] w-full rounded-[1.75rem]" priority markWidth={44} />
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3">
          {values.map((p) => (
            <div key={p.t} className="border-l-4 border-signal pl-6">
              <h3 className="text-2xl font-bold">{p.t}</h3>
              <p className="mt-2 text-lg text-graphite">{p.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20">
        <WordReveal text="How a project runs" className="mb-10 text-4xl font-extrabold md:text-5xl" />
        <ProjectSteps />
      </section>
      <section className="pb-20"><PhotoStrip /></section>
      <CtaBand />
    </>
  )
}

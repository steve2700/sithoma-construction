import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { MovingImage } from "@/components/moving-image"
import { CallButton, LinkButton, WhatsAppButton } from "@/components/buttons"
import { Faq } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { JobCard } from "@/components/job-card"
import { WordReveal } from "@/components/word-reveal"
import { SERVICES } from "@/lib/services"

export const metadata: Metadata = {
  title: "Property Repairs for Landlords, Agents and Property Managers in Gauteng",
  description: "Rental and managed property repairs in Gauteng: painting between tenants, leaks, ceilings, tiles, plaster and roofs. Reliable repairs and installations from Sithoma Construction.",
  keywords: ["rental property repairs Gauteng", "painting between tenants", "property manager contractor Johannesburg", "move out repairs"],
  alternates: { canonical: "/for-landlords-and-property-managers" },
}

const problems = [
  { t: "Tenants have moved out", d: "Walls need patching and repainting, tiles need fixing and the place must be let again quickly. We repair and repaint so the property looks new." },
  { t: "A leak has started damaging the unit", d: "We find the source, stop it with waterproofing or roof repairs and repair the ceilings and walls it damaged." },
  { t: "You manage many properties", d: "One contractor for painting, ceilings, tiling, plaster and roofs means fewer calls and a consistent standard across your portfolio." },
]

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: "Landlords and agents", href: "/for-landlords-and-property-managers" }]} title="Property repairs that keep your units let" mark={["let"]} image={{ src: "/interior-painting-smooth-wall-finish-and-door.jpg", alt: "Freshly painted interior with smooth walls" }} text="Painting between tenants, leak repairs and finishing work for landlords, agents and property managers across Gauteng.">
        <CallButton />
        <WhatsAppButton message="Hi Sithoma Construction, I manage rental properties and need a quote." />
        <LinkButton href="#job-card" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-20">
        <WordReveal text="Problems we solve for property owners" className="max-w-3xl text-4xl font-extrabold leading-[1.05] md:text-5xl" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {problems.map((p, i) => (
            <div key={p.t} className="rounded-3xl bg-white p-7">
              <span className="kicker text-chrome">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-2xl font-bold leading-tight">{p.t}</h3>
              <p className="mt-3 text-graphite">{p.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <WordReveal text="What we handle" className="text-4xl font-extrabold md:text-5xl" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.slice(0, 4).concat(SERVICES.slice(5)).map((s, i) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group block overflow-hidden rounded-[1.5rem] bg-steel transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <MovingImage src={s.image} alt={s.imageAlt} variant={i} className="aspect-[4/3]" markWidth={30} sizes="(min-width: 1024px) 25vw, 100vw" />
                <div className="p-5"><h3 className="text-lg font-bold leading-tight">{s.name}</h3></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="gable bg-ink px-5 pb-24 pt-28 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-4xl font-extrabold leading-[1.05] md:text-5xl">Send a job card</h2>
          <JobCard defaultProperty="Complex or estate" />
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-5 py-20">
        <h2 className="mb-10 text-4xl font-extrabold">Your questions</h2>
        <Faq items={[
          { q: "Can you handle several units in one visit?", a: "Yes. Send us the list and photos and we will plan the work so units are turned around efficiently." },
          { q: "Do you provide quotes for agents?", a: "Yes. Quotes are free and clearly itemised so you can pass them to the owner." },
          { q: "Can you repaint between tenants?", a: "Yes. We patch and repair marks and damage, then repaint so the unit is ready to let." },
        ]} />
      </section>
      <CtaBand />
    </>
  )
}

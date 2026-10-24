import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { MovingImage } from "@/components/moving-image"
import { CallButton, LinkButton } from "@/components/buttons"
import { CtaBand } from "@/components/cta-band"
import { SERVICES } from "@/lib/services"

export const metadata: Metadata = {
  title: "Painting, Drywall, Ceiling, Tiling, Rhinolite, Waterproofing and Roof Services in Gauteng",
  description: "All Sithoma Construction services in Gauteng: painting, drywall, ceilings, tiling, Rhinolite plastering, waterproofing and roof repairs. Repairs and installations with free quotes.",
  alternates: { canonical: "/services" },
}

export default function ServicesPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Services", href: "/services" }]} title="Repairs and installations across Gauteng" mark={["installations"]} image={{ src: "/exterior-house-painting-double-storey-home.jpg", alt: "Double storey home being painted" }} text="Seven services, each covering repairs and new installations. Pick one, or send a job card.">
        <CallButton />
        <LinkButton href="/contact#job-card" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group grid overflow-hidden rounded-[1.5rem] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[220px_1fr]">
              <MovingImage src={s.image} alt={s.imageAlt} variant={i} className="min-h-52" sizes="220px" markWidth={30} />
              <div className="p-6">
                <h2 className="text-xl font-bold leading-tight">{s.name}</h2>
                <p className="mt-3 text-graphite">{s.short}</p>
                <span className="mt-4 inline-block font-display font-bold underline decoration-signal decoration-4 underline-offset-4">Read more</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}

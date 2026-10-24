import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { CallButton, LinkButton } from "@/components/buttons"
import { CtaBand } from "@/components/cta-band"
import { SERVICES } from "@/lib/services"

export const metadata: Metadata = {
  title: "Cost Guides: What Affects the Price of Painting, Tiling, Ceilings and More",
  description: "Plain English cost guides for painting, drywall, ceilings, tiling, Rhinolite, waterproofing and roof repairs in Gauteng. Learn what drives the price and how to compare quotes.",
  alternates: { canonical: "/cost-guides" },
}

export default function CostGuidesPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Cost guides", href: "/cost-guides" }]} title="What really affects the price of your job" mark={["price"]} text="Every job is different, so we explain what drives the cost instead of guessing a number. Use these guides to compare quotes fairly.">
        <CallButton />
        <LinkButton href="/contact#job-card" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <Link key={s.slug} href={`/cost-guides/${s.cost.slug}`} className="group rounded-[1.5rem] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <p className="kicker text-chrome">{s.jobLabel}</p>
              <h2 className="mt-3 text-2xl font-bold leading-tight">{s.cost.title}</h2>
              <p className="mt-3 text-graphite">{s.cost.intro}</p>
              <span className="mt-4 inline-block font-display font-bold underline decoration-signal decoration-4 underline-offset-4">Read the guide</span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}

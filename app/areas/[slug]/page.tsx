import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PageHero } from "@/components/page-hero"
import { MovingImage } from "@/components/moving-image"
import { CallButton, LinkButton, WhatsAppButton } from "@/components/buttons"
import { Faq } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { JsonLd } from "@/components/json-ld"
import { JobCard } from "@/components/job-card"
import { AREAS, getArea } from "@/lib/areas"
import { SERVICES } from "@/lib/services"
import { SITE } from "@/lib/site"

export const dynamicParams = false
export function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const a = getArea(slug)
  if (!a) return {}
  const title = `Painting, Drywall, Ceilings, Tiling and Waterproofing in ${a.name}`
  const description = `Repairs and installations in ${a.name}: painting, drywall, ceilings, tiling, Rhinolite, waterproofing and roofs. Free quotes from Sithoma Construction. Call Now or send a WhatsApp job card.`
  return {
    title, description,
    keywords: [`builders ${a.name}`, `painters ${a.name}`, `ceiling installation ${a.name}`, `tiling ${a.name}`, `waterproofing ${a.name}`, `roof repairs ${a.name}`],
    alternates: { canonical: `/areas/${a.slug}` },
    openGraph: { title, description, url: `${SITE.url}/areas/${a.slug}`, images: [{ url: a.image }] },
  }
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const a = getArea(slug)
  if (!a) notFound()
  const nearby = AREAS.filter((x) => x.slug !== a.slug).slice(0, 6)
  const faqs = [
    { q: `Do you work in ${a.name}?`, a: `Yes. Sithoma Construction does repairs and installations for painting, drywall, ceilings, tiling, Rhinolite, waterproofing and roofs in ${a.name} and the surrounding areas.` },
    { q: `How do I get a quote in ${a.name}?`, a: "Fill in the job card on this page. It opens in WhatsApp with your details ready to send. Add photos in the chat and we will come back with a quote." },
    { q: `Which suburbs near ${a.name} do you cover?`, a: `We cover ${a.places.join(", ")} and the wider Gauteng area, including ${nearby.slice(0, 3).map((n) => n.name).join(", ")}.` },
  ]
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: `Repairs and installations in ${a.name}`, url: `${SITE.url}/areas/${a.slug}`, provider: { "@id": `${SITE.url}/#business` }, areaServed: { "@type": "City", name: a.name, containedInPlace: { "@type": "AdministrativeArea", name: "Gauteng" } } }} />
      <PageHero crumbs={[{ name: "Areas", href: "/areas" }, { name: a.name, href: `/areas/${a.slug}` }]} title={`Repairs and installations in ${a.name}`} mark={[a.name.split(" ")[0]]} text={a.context}>
        <CallButton />
        <WhatsAppButton message={`Hi Sithoma Construction, I need a quote in ${a.name}.`} />
        <LinkButton href="#job-card" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1fr]">
        <MovingImage src={a.image} alt={a.imageAlt} priority className="min-h-[360px] rounded-[1.75rem] lg:aspect-[4/5]" sizes="(min-width: 1024px) 40vw, 100vw" markWidth={44} />
        <div>
          <h2 className="text-3xl font-extrabold md:text-4xl">What we do in {a.name}</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-graphite">
            We work on {a.homes} in {a.name}. Send a job card, get a clear quote, and our team will repair and install with proper preparation and a clean finish.
          </p>
          <h3 className="mt-8 text-2xl font-bold">Suburbs we serve around {a.name}</h3>
          <div className="mt-4 flex flex-wrap gap-2">{a.places.map((p) => <span key={p} className="rounded-full bg-white px-4 py-2 font-display text-base font-semibold">{p}</span>)}</div>
          <h3 className="mt-8 text-2xl font-bold">Services in {a.name}</h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.comboSlug}-${a.slug}`} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-base font-medium transition hover:bg-signal">
                  <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-ink" />{s.comboName} in {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="gable bg-ink px-5 pb-24 pt-28 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 max-w-3xl text-4xl font-extrabold leading-[1.05] md:text-5xl">Send a job card from {a.name}</h2>
          <JobCard defaultArea={a.name} />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20">
        <h2 className="mb-10 text-4xl font-extrabold">{a.name}: your questions</h2>
        <Faq items={faqs} />
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-3xl font-extrabold">Nearby areas</h2>
          <div className="mt-6 flex flex-wrap gap-3">{nearby.map((n) => <Link key={n.slug} href={`/areas/${n.slug}`} className="rounded-full border-2 border-ink px-5 py-2 font-display text-base font-semibold transition hover:bg-signal">{n.name}</Link>)}</div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

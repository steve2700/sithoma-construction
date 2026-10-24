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
import { WordReveal } from "@/components/word-reveal"
import { COMBOS, getCombo } from "@/lib/combos"
import { AREAS } from "@/lib/areas"
import { SERVICES } from "@/lib/services"
import { SITE } from "@/lib/site"

export const dynamicParams = false
export function generateStaticParams() {
  return COMBOS.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const c = getCombo(slug)
  if (!c) return {}
  const { service: s, area: a } = c
  const title = `${s.comboName} in ${a.name}: Repairs and Installations`
  const description = `${s.name} in ${a.name}. Repairs and installations for ${a.homes}. Free quotes from Sithoma Construction. Call Now or send a WhatsApp job card.`
  return {
    title, description,
    keywords: [`${s.comboName.toLowerCase()} ${a.name}`, `${s.name.toLowerCase()} ${a.name}`, `${s.keywords[0]} ${a.name}`],
    alternates: { canonical: `/${c.slug}` },
    openGraph: { title, description, url: `${SITE.url}/${c.slug}`, images: [{ url: s.image }] },
  }
}

export default async function ComboPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const c = getCombo(slug)
  if (!c) notFound()
  const { service: s, area: a } = c
  const otherServices = SERVICES.filter((x) => x.slug !== s.slug)
  const otherAreas = AREAS.filter((x) => x.slug !== a.slug)
  const faqs = [
    { q: `Do you offer ${s.name.toLowerCase()} in ${a.name}?`, a: `Yes. Sithoma Construction offers ${s.name.toLowerCase()} in ${a.name} and nearby suburbs such as ${a.places.slice(0, 3).join(", ")}, for ${a.homes}.` },
    { q: `Do you do repairs or installations in ${a.name}?`, a: `Both. We repair damage and install new work. For example: ${s.repairs[0].toLowerCase()}, and ${s.installs[0].toLowerCase()}.` },
    { q: `How do I get a quote in ${a.name}?`, a: "Fill in the job card on this page. It opens in WhatsApp with your details ready to send. Add photos in the chat and we will come back with a clear quote." },
    ...s.faqs.slice(0, 1),
  ]
  const list = (items: string[]) => (
    <ul className="mt-5 space-y-3">{items.map((i) => <li key={i} className="flex items-start gap-3 rounded-2xl bg-white p-4 text-lg"><span aria-hidden="true" className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-signal" />{i}</li>)}</ul>
  )
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: `${s.name} in ${a.name}`, description: `${s.name} in ${a.name}`, url: `${SITE.url}/${c.slug}`, serviceType: s.name, provider: { "@id": `${SITE.url}/#business` }, areaServed: { "@type": "City", name: a.name, containedInPlace: { "@type": "AdministrativeArea", name: "Gauteng" } } }} />
      <PageHero crumbs={[{ name: "Areas", href: "/areas" }, { name: a.name, href: `/areas/${a.slug}` }, { name: s.comboName, href: `/${c.slug}` }]} title={`${s.comboName} in ${a.name}`} mark={[a.name.split(" ")[0]]} text={`${s.short} Serving ${a.homes} in ${a.name}.`} image={{ src: s.image, alt: s.imageAlt }}>
        <CallButton />
        <WhatsAppButton message={`Hi Sithoma Construction, I need ${s.name.toLowerCase()} in ${a.name}.`} />
        <LinkButton href="#job-card" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <p className="rounded-3xl border-l-8 border-signal bg-white p-6 text-xl font-medium leading-relaxed">
          Sithoma Construction provides {s.name.toLowerCase()} in {a.name}. {a.context}
        </p>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <p className="kicker text-chrome">Repairs in {a.name}</p>
            <WordReveal text="What we repair" className="mt-2 text-3xl font-extrabold" />
            {list(s.repairs)}
          </div>
          <div>
            <p className="kicker text-chrome">Installations in {a.name}</p>
            <WordReveal text="What we install" className="mt-2 text-3xl font-extrabold" />
            {list(s.installs)}
          </div>
        </div>
        <h2 className="mt-14 text-3xl font-extrabold">When {a.name} homeowners call us</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">{s.signs.map((i) => <li key={i} className="border-l-4 border-signal pl-4 text-xl">{i}</li>)}</ul>
        <h3 className="mt-10 text-2xl font-bold">Suburbs around {a.name}</h3>
        <div className="mt-4 flex flex-wrap gap-2">{a.places.map((p) => <span key={p} className="rounded-full bg-white px-4 py-2 font-display text-base font-semibold">{p}</span>)}</div>
        <p className="mt-8 text-lg"><Link href={`/services/${s.slug}`} className="font-display font-bold underline decoration-signal decoration-4 underline-offset-4">Read about {s.name.toLowerCase()}</Link>{" "}or{" "}<Link href={`/cost-guides/${s.cost.slug}`} className="font-display font-bold underline decoration-signal decoration-4 underline-offset-4">see what affects the cost</Link>.</p>
      </section>

      {s.process && (
        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-3">
            {s.process.map((p, i) => <MovingImage key={p.src} src={p.src} alt={p.alt} variant={i} className="aspect-[4/3] rounded-[1.5rem]" markWidth={32} />)}
          </div>
        </section>
      )}

      <section className="gable bg-ink px-5 pb-24 pt-28 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 max-w-3xl text-4xl font-extrabold leading-[1.05] md:text-5xl">Get a quote for {s.name.toLowerCase()} in {a.name}</h2>
          <JobCard defaultJob={s.jobLabel} defaultArea={a.name} />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20">
        <h2 className="mb-10 text-4xl font-extrabold">{s.comboName} in {a.name}: your questions</h2>
        <Faq items={faqs} />
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-3xl font-extrabold">More services in {a.name}</h2>
          <div className="mt-6 flex flex-wrap gap-3">{otherServices.map((o) => <Link key={o.slug} href={`/${o.comboSlug}-${a.slug}`} className="rounded-full border-2 border-ink px-5 py-2 font-display text-base font-semibold transition hover:bg-signal">{o.comboName} in {a.name}</Link>)}</div>
          <h2 className="mt-12 text-3xl font-extrabold">{s.comboName} in other areas</h2>
          <div className="mt-6 flex flex-wrap gap-3">{otherAreas.map((o) => <Link key={o.slug} href={`/${s.comboSlug}-${o.slug}`} className="rounded-full bg-steel px-5 py-2 font-display text-base font-semibold transition hover:bg-ink hover:text-white">{s.comboName} in {o.name}</Link>)}</div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

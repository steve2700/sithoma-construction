import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PageHero } from "@/components/page-hero"
import { CallButton, LinkButton, WhatsAppButton } from "@/components/buttons"
import { Faq } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { JsonLd } from "@/components/json-ld"
import { JobCard } from "@/components/job-card"
import { WordReveal } from "@/components/word-reveal"
import { SERVICES } from "@/lib/services"
import { AREAS } from "@/lib/areas"
import { SITE } from "@/lib/site"

export const dynamicParams = false
const byCost = (slug: string) => SERVICES.find((s) => s.cost.slug === slug)
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.cost.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const s = byCost(slug)
  if (!s) return {}
  const description = `${s.cost.intro} Free quotes from Sithoma Construction in Gauteng.`
  return {
    title: s.cost.title,
    description,
    keywords: [`${s.jobLabel.toLowerCase()} cost Gauteng`, `${s.jobLabel.toLowerCase()} prices Johannesburg`, `how much does ${s.jobLabel.toLowerCase()} cost`],
    alternates: { canonical: `/cost-guides/${s.cost.slug}` },
    openGraph: { title: s.cost.title, description, url: `${SITE.url}/cost-guides/${s.cost.slug}`, images: [{ url: s.image }] },
  }
}

export default async function CostGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = byCost(slug)
  if (!s) notFound()
  const faqs = [
    { q: `How much does ${s.jobLabel.toLowerCase()} cost in Gauteng?`, a: "The price depends on the size of the job, the condition of the surface, the materials and how easy it is to reach. We give a clear written quote after you send photos or after a visit, so you know the price before work starts." },
    { q: "Do you charge for quotes?", a: "No. Quotes are free. Send a job card with photos and we will come back to you." },
    ...s.faqs.slice(0, 1),
  ]
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: s.cost.title, description: s.cost.intro, mainEntityOfPage: `${SITE.url}/cost-guides/${s.cost.slug}`, author: { "@id": `${SITE.url}/#business` }, publisher: { "@id": `${SITE.url}/#business` } }} />
      <PageHero crumbs={[{ name: "Cost guides", href: "/cost-guides" }, { name: s.jobLabel, href: `/cost-guides/${s.cost.slug}` }]} title={s.cost.title} text={s.cost.intro}>
        <CallButton />
        <WhatsAppButton message={`Hi Sithoma Construction, I would like a quote for ${s.name.toLowerCase()}.`} />
        <LinkButton href="#job-card" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>
      <section className="mx-auto max-w-5xl px-5 py-20">
        <p className="rounded-3xl border-l-8 border-signal bg-white p-6 text-xl font-medium leading-relaxed">The honest answer to "how much?" is "it depends", and these are the things it depends on. Once you know them, you can compare quotes properly.</p>
        <WordReveal text="What drives the price" className="mt-14 text-3xl font-extrabold md:text-4xl" />
        <ol className="mt-8 space-y-4">
          {s.cost.factors.map((f, i) => (
            <li key={f.t} className="grid gap-3 rounded-3xl bg-white p-6 sm:grid-cols-[3.5rem_1fr]">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-signal font-display text-lg font-extrabold">{i + 1}</span>
              <div><h3 className="text-xl font-bold">{f.t}</h3><p className="mt-1 text-lg text-graphite">{f.d}</p></div>
            </li>
          ))}
        </ol>
        <WordReveal text="How to get an accurate quote" className="mt-14 text-3xl font-extrabold md:text-4xl" />
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">{s.cost.tips.map((t) => <li key={t} className="flex items-start gap-3 rounded-2xl bg-white p-4 text-lg"><span aria-hidden="true" className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-signal" />{t}</li>)}</ul>
        <p className="mt-10 text-lg">Read more about <Link href={`/services/${s.slug}`} className="font-display font-bold underline decoration-signal decoration-4 underline-offset-4">{s.name.toLowerCase()}</Link>, or see where we work: {AREAS.slice(0, 4).map((a, i) => (<span key={a.slug}>{i > 0 ? ", " : ""}<Link href={`/${s.comboSlug}-${a.slug}`} className="font-semibold underline decoration-signal decoration-2 underline-offset-4">{a.name}</Link></span>))} and more.</p>
      </section>
      <section className="gable bg-ink px-5 pb-24 pt-28 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 max-w-3xl text-4xl font-extrabold leading-[1.05] md:text-5xl">Get your free quote</h2>
          <JobCard defaultJob={s.jobLabel} />
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-5 py-20">
        <h2 className="mb-10 text-4xl font-extrabold">Your questions</h2>
        <Faq items={faqs} />
      </section>
      <CtaBand />
    </>
  )
}

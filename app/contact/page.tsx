import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { JobCard } from "@/components/job-card"
import { PhoneIcon, WhatsAppIcon } from "@/components/icons"
import { JsonLd } from "@/components/json-ld"
import { PhotoStrip } from "@/components/photo-strip"
import { SITE, WA_LINK, ADDRESS_LINE, MAPS_LINK } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact Sithoma Construction and Get a Free Quote",
  description: "Call Sithoma Construction, send a WhatsApp job card or email us for painting, drywall, ceilings, tiling, Rhinolite, waterproofing and roof work across Gauteng. Based in Midrand.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ContactPage", url: `${SITE.url}/contact`, mainEntity: { "@id": `${SITE.url}/#business` } }} />
      <PageHero crumbs={[{ name: "Contact", href: "/contact" }]} title="Call us, or send a job card" mark={["job"]} image={{ src: "/exterior-house-painting-double-storey-home.jpg", alt: "Sithoma team at work on a double storey home" }} text="The fastest way to a quote is the job card below. For anything urgent, call now." />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <a href={`tel:${SITE.phoneTel}`} className="flex items-center gap-4 rounded-[1.5rem] bg-signal p-6 text-ink transition hover:bg-signal-dark">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ink text-signal"><PhoneIcon className="h-6 w-6" /></span>
            <span><span className="block font-display text-base">Call Now</span><span className="font-display text-xl font-extrabold">{SITE.phoneDisplay}</span></span>
          </a>
          <a href={WA_LINK("Hi Sithoma Construction, I need a quote.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-[1.5rem] bg-[#25D366] p-6 text-ink transition hover:bg-[#1fbd5b]">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ink text-[#25D366]"><WhatsAppIcon className="h-7 w-7" /></span>
            <span><span className="block font-display text-base">WhatsApp</span><span className="font-display text-xl font-extrabold">Chat with us</span></span>
          </a>
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 rounded-[1.5rem] bg-ink p-6 text-white transition hover:bg-graphite">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white font-display text-2xl font-bold text-ink">@</span>
            <span className="min-w-0"><span className="block font-display text-base">Email</span><span className="block break-words font-display text-sm font-bold">{SITE.email}</span></span>
          </a>
          <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-[1.5rem] bg-white p-6 text-ink ring-1 ring-ink/10 transition hover:bg-steel">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-signal font-display text-xl font-extrabold">&rarr;</span>
            <span><span className="block font-display text-base">Visit us</span><span className="block text-sm font-semibold">{ADDRESS_LINE}</span></span>
          </a>
        </div>
      </section>
      <section className="gable bg-ink px-5 pb-24 pt-28 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-4xl font-extrabold leading-[1.05] md:text-5xl">Your job card</h2>
          <JobCard />
        </div>
      </section>
      <section className="py-16">
        <p className="mx-auto mb-8 max-w-7xl px-5 font-display text-3xl font-bold">Based in Midrand, working across Gauteng</p>
        <PhotoStrip />
      </section>
    </>
  )
}

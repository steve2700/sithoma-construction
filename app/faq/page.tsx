import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Faq } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { MovingImage } from "@/components/moving-image"
import { CallButton, WhatsAppButton } from "@/components/buttons"

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about painting, drywall, ceilings, tiling, Rhinolite, waterproofing and roof repairs in Gauteng from Sithoma Construction.",
  alternates: { canonical: "/faq" },
}

const items = [
  { q: "What areas do you cover?", a: "We are based in Midrand and work across Gauteng and its outskirts, including Sandton, Fourways, Johannesburg, Randburg, Roodepoort, Pretoria, Centurion, Kempton Park, Edenvale, Bedfordview and Boksburg." },
  { q: "Do you do repairs as well as installations?", a: "Yes. Every service covers both repairs and new installations." },
  { q: "How do I get a quote?", a: "Complete the job card on our website. It opens in WhatsApp, ready to send. Add photos and we will come back with a clear quote, or arrange a visit for bigger jobs." },
  { q: "Are quotes free?", a: "Yes. We give free quotes. Send photos or arrange a visit." },
  { q: "What is Rhinolite?", a: "Rhinolite is a gypsum based plaster that gives walls and ceilings a very smooth, hard finish that takes paint well." },
  { q: "What is torch on waterproofing?", a: "It is a bitumen membrane that is heated and bonded to a flat roof or slab to make a tough, sealed layer." },
  { q: "Can you fix a leaking roof?", a: "Yes. We find where the water is coming in, repair the roof or waterproof it, and repair the damage inside." },
  { q: "Do you build drywall partitions and bulkheads?", a: "Yes. We frame, board and finish drywall partitions, bulkheads and linings." },
  { q: "Can you tile bathrooms and showers?", a: "Yes. We tile bathrooms, showers, floors and stairs, and repair loose or cracked tiles." },
  { q: "Do you paint roofs?", a: "Yes. We clean, repair and paint tile and sheet roofs." },
]

export default function FaqPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "FAQ", href: "/faq" }]} title="Your questions, answered" mark={["answered"]} image={{ src: "/shower-tiling-installation-with-corner-shelves.jpg", alt: "Shower tiling installation" }} text="Quick answers for homeowners, landlords and businesses.">
        <CallButton />
        <WhatsAppButton />
      </PageHero>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1.4fr_1fr]">
        <Faq items={items} />
        <div className="grid gap-5 self-start sm:grid-cols-2 lg:sticky lg:top-36 lg:grid-cols-1">
          <MovingImage src="/roof-tile-repairs-and-maintenance-after.avif" alt="Tile roof after repairs" className="aspect-[4/3] rounded-[1.5rem]" />
          <MovingImage src="/passage-bulkhead-ceiling-and-smooth-painted-walls.jpg" alt="Passage bulkhead ceiling and smooth painted walls" className="aspect-[4/3] rounded-[1.5rem]" variant={1} />
        </div>
      </section>
      <CtaBand />
    </>
  )
}

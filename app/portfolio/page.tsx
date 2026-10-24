import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { MovingImage } from "@/components/moving-image"
import { BeforeAfter } from "@/components/before-after"
import { CtaBand } from "@/components/cta-band"
import { CallButton, LinkButton } from "@/components/buttons"
import { BA_ROOF_REPAIR, BA_TORCH, BA_ROOF_PAINT } from "@/lib/services"

export const metadata: Metadata = {
  title: "Portfolio: Painting, Tiling, Ceilings, Roofs and Waterproofing Projects",
  description: "See Sithoma Construction projects across Gauteng: exterior painting, tiling, LED ceilings, drywall, roof repairs, roof painting and torch on waterproofing, with before and after photos.",
  alternates: { canonical: "/portfolio" },
}

const photos: [string, string][] = [
  ["/exterior-house-painting-double-storey-home.jpg", "Double storey home being painted"],
  ["/led-cove-ceiling-design-installation.jpg", "LED cove ceiling design installation"],
  ["/bathroom-wall-and-floor-tiling-installation.jpg", "Bathroom wall and floor tiling"],
  ["/staircase-tiling-installation.jpg", "Staircase tiling installation"],
  ["/shower-tiling-installation-with-corner-shelves.jpg", "Shower tiling with corner shelves"],
  ["/church-roof-painting-finished.avif", "Church roof freshly painted"],
  ["/new-timber-roof-trusses-installation.jpg", "New timber roof trusses"],
  ["/kitchen-renovation-ceiling-and-cabinet-installation.jpg", "Kitchen renovation ceiling and cabinets"],
  ["/passage-bulkhead-ceiling-and-smooth-painted-walls.jpg", "Passage bulkhead ceiling and smooth walls"],
  ["/interior-painting-smooth-wall-finish-and-door.jpg", "Smooth interior walls and painted door"],
  ["/red-tile-roof-restoration-and-painting.jpg", "Red tile roof restoration"],
  ["/roofers-repairing-tiled-roof-on-residential-street.jpg", "Roofers repairing a tiled roof"],
  ["/roofing-team-repairing-tiled-roof-at-garden-home.jpg", "Roofing team at a garden home"],
  ["/red-corrugated-roof-painting.jpg", "Red corrugated roof painting"],
  ["/flat-roof-waterproofing-membrane-installation.jpg", "Flat roof waterproofing membrane"],
  ["/ceiling-bulkhead-with-blue-led-lighting.jpg", "Ceiling bulkhead with blue LED lighting"],
  ["/ceiling-downlights-and-smooth-finish-open-plan.jpg", "Open plan ceiling with downlights"],
  ["/drywall-partition-walls-office-passage.jpg", "Drywall partition walls in an office passage"],
  ["/drywall-partition-framing-installation.jpg", "Drywall partition framing"],
  ["/plasterboard-drywall-installation-passage.jpg", "Plasterboard drywall installation"],
  ["/painter-spraying-exterior-wall.jpg", "Painter spraying an exterior wall"],
  ["/double-storey-home-with-garage-exterior.jpg", "Double storey home with garage"],
]

export default function PortfolioPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Portfolio", href: "/portfolio" }]} title="Our work, before and after" mark={["work"]} image={{ src: "/led-cove-ceiling-design-installation.jpg", alt: "LED cove ceiling design installation" }} text="Real projects from real properties across Gauteng.">
        <CallButton />
        <LinkButton href="/contact#job-card" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-3xl font-extrabold md:text-4xl">Before and after</h2>
          <p className="mt-3 text-lg text-graphite">Drag each slider to compare.</p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <BeforeAfter item={BA_ROOF_REPAIR} />
            <BeforeAfter item={BA_TORCH} />
            <BeforeAfter item={BA_ROOF_PAINT} />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {photos.map(([src, alt], i) => (
            <MovingImage key={src} src={src} alt={alt} variant={i} className={`mb-5 break-inside-avoid rounded-[1.5rem] ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-[4/3]" : "aspect-square"}`} markWidth={32} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}

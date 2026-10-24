import Link from "next/link"
import { Logo } from "@/components/logo"
import { PhoneIcon, WhatsAppIcon } from "@/components/icons"
import { SERVICES } from "@/lib/services"
import { AREAS } from "@/lib/areas"
import { SITE, WA_LINK, ADDRESS_LINE, MAPS_LINK } from "@/lib/site"

export function Footer() {
  const h = "font-display text-lg font-bold text-white"
  const a = "block py-1 text-silver transition hover:text-signal"
  return (
    <footer className="bg-ink pb-24 pt-16 text-silver md:pb-10">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="dark" className="max-w-[260px]" />
          <p className="mt-5 max-w-xs leading-relaxed">Repairs and installations for painting, drywall, ceilings, tiling, Rhinolite, waterproofing and roofs across {SITE.region}.</p>
          <p className="mt-4 text-sm text-silver/80">{ADDRESS_LINE}</p>
          <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm font-semibold text-signal hover:underline">Get directions</a>
          <div className="mt-6 flex gap-3">
            <a href={`tel:${SITE.phoneTel}`} aria-label="Call Sithoma Construction" className="flex h-12 w-12 items-center justify-center rounded-full bg-signal text-ink transition hover:bg-signal-dark"><PhoneIcon className="h-5 w-5" /></a>
            <a href={WA_LINK("Hi Sithoma Construction, I need a quote.")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Sithoma Construction" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-ink transition hover:bg-[#1fbd5b]"><WhatsAppIcon className="h-6 w-6" /></a>
          </div>
        </div>
        <div>
          <h3 className={h}>Services</h3>
          <div className="mt-3">{SERVICES.map((s) => <Link key={s.slug} href={`/services/${s.slug}`} className={a}>{s.name}</Link>)}</div>
          <h3 className={`${h} mt-8`}>Cost guides</h3>
          <div className="mt-3"><Link href="/cost-guides" className={a}>All cost guides</Link></div>
        </div>
        <div>
          <h3 className={h}>Areas we cover</h3>
          <div className="mt-3 grid grid-cols-2 gap-x-4">{AREAS.map((s) => <Link key={s.slug} href={`/areas/${s.slug}`} className={a}>{s.name}</Link>)}</div>
        </div>
        <div>
          <h3 className={h}>Contact</h3>
          <div className="mt-3">
            <a href={`tel:${SITE.phoneTel}`} className={a}>{SITE.phoneDisplay}</a>
            <a href={`mailto:${SITE.email}`} className={a}>{SITE.email}</a>
            <Link href="/contact#job-card" className={a}>Send a job card</Link>
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className={a}>Follow us on Facebook</a>
            <Link href="/portfolio" className={a}>Portfolio</Link>
            <Link href="/for-landlords-and-property-managers" className={a}>For landlords and agents</Link>
            <Link href="/about" className={a}>About</Link>
            <Link href="/faq" className={a}>FAQ</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-white/10 px-5 pt-6 text-sm md:flex-row md:justify-between">
        <p>&copy; {new Date().getFullYear()} Sithoma Construction and Projects. All rights reserved.</p>
        <p className="flex gap-5"><Link href="/privacy" className="hover:text-white">Privacy Policy</Link><Link href="/terms" className="hover:text-white">Terms of Service</Link></p>
      </div>
    </footer>
  )
}

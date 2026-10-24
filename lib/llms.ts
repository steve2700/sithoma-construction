import { SITE, ADDRESS_LINE } from "@/lib/site"
import { SERVICES } from "@/lib/services"
import { AREAS } from "@/lib/areas"

const head = `# Sithoma Construction and Projects

> Sithoma Construction and Projects does repairs and installations for painting, drywall, ceilings, tiling, Rhinolite plastering, waterproofing and roofs for homes and businesses across ${SITE.region}, South Africa. Based in Midrand. ${SITE.tagline}

Website: ${SITE.url}
Phone and WhatsApp: ${SITE.phoneDisplay}
Email: ${SITE.email}
Address: ${ADDRESS_LINE}
Facebook: ${SITE.facebook}
Service area: ${SITE.region}
How to get a quote: send a WhatsApp job card from ${SITE.url}/contact with the job, whether it is a repair or installation, the property type and the area, then add photos in the chat. Quotes are free.
`

export function llmsShort() {
  let o = head + "\n## Services\n"
  for (const s of SERVICES) o += `- [${s.name}](${SITE.url}/services/${s.slug}): ${s.short}\n`
  o += "\n## Cost guides\n"
  for (const s of SERVICES) o += `- [${s.cost.title}](${SITE.url}/cost-guides/${s.cost.slug})\n`
  o += "\n## Areas\n"
  for (const a of AREAS) o += `- [Repairs and installations in ${a.name}](${SITE.url}/areas/${a.slug})\n`
  o += `\n## Pages\n- [Contact and job card](${SITE.url}/contact)\n- [Portfolio](${SITE.url}/portfolio)\n- [About](${SITE.url}/about)\n- [FAQ](${SITE.url}/faq)\n- [For landlords and property managers](${SITE.url}/for-landlords-and-property-managers)\n- [Full content for AI](${SITE.url}/llms-full.txt)\n`
  return o
}

export function llmsFull() {
  let o = head + "\n## Services in detail\n"
  for (const s of SERVICES) {
    o += `\n### ${s.name}\nURL: ${SITE.url}/services/${s.slug}\n${s.answer}\n\n${s.intro}\n\nRepairs: ${s.repairs.join("; ")}.\nInstallations: ${s.installs.join("; ")}.\nCall us when: ${s.signs.join("; ")}.\n`
    for (const f of s.faqs) o += `\nQ: ${f.q}\nA: ${f.a}\n`
    o += `\nCost factors: ${s.cost.factors.map((f) => f.t).join("; ")}.\n`
  }
  o += "\n## Areas\n"
  for (const a of AREAS) o += `\n### ${a.name}\nURL: ${SITE.url}/areas/${a.slug}\n${a.context} Suburbs: ${a.places.join(", ")}.\n`
  return o
}

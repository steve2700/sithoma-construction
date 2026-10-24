import type { MetadataRoute } from "next"
import { SITE } from "@/lib/site"
import { SERVICES } from "@/lib/services"
import { AREAS } from "@/lib/areas"
import { COMBOS } from "@/lib/combos"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({ url: `${SITE.url}${path}`, lastModified: now, changeFrequency, priority })
  return [
    page("", 1, "weekly"),
    page("/services", 0.9),
    ...SERVICES.map((s) => page(`/services/${s.slug}`, 0.9)),
    page("/areas", 0.8),
    ...AREAS.map((a) => page(`/areas/${a.slug}`, 0.8)),
    ...COMBOS.map((c) => page(`/${c.slug}`, 0.7)),
    page("/cost-guides", 0.7),
    ...SERVICES.map((s) => page(`/cost-guides/${s.cost.slug}`, 0.6)),
    page("/portfolio", 0.7),
    page("/for-landlords-and-property-managers", 0.6),
    page("/about", 0.6),
    page("/faq", 0.6),
    page("/contact", 0.8),
    page("/privacy", 0.2, "yearly"),
    page("/terms", 0.2, "yearly"),
  ]
}

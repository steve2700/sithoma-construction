import { AREAS, type Area } from "@/lib/areas"
import { SERVICES, type Service } from "@/lib/services"

export interface Combo { slug: string; service: Service; area: Area }

export const COMBOS: Combo[] = SERVICES.flatMap((service) =>
  AREAS.map((area) => ({ slug: `${service.comboSlug}-${area.slug}`, service, area })),
)

export function getCombo(slug: string) {
  return COMBOS.find((c) => c.slug === slug)
}

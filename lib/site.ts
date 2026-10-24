// Contact details for Sithoma Construction and Projects. Change them here and the whole site updates.
export const SITE = {
  name: "Sithoma Construction and Projects",
  shortName: "Sithoma Construction",
  url: "https://www.sithomaconstruction.co.za",
  phoneDisplay: "071 918 1317",
  phoneTel: "+27719181317",
  whatsapp: "27719181317",
  email: "info@sithomaconstruction.co.za",
  tagline: "Broad vision. Honest service. Great value.",
  region: "Gauteng and its outskirts",
  address: { street: "Cnr Brand Road and Swart Drive", suburb: "President Park AH", city: "Midrand", postal: "1685", country: "ZA" },
  facebook: "https://www.facebook.com/p/Sithoma-construction-and-projects-61552033671649/",
}

export const ADDRESS_LINE = `${SITE.address.street}, ${SITE.address.suburb}, ${SITE.address.city}, ${SITE.address.postal}`
export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_LINE)}`

export const WA_LINK = (text: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`

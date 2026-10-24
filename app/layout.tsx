import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "@fontsource/sora/500.css"
import "@fontsource/sora/700.css"
import "@fontsource/sora/800.css"
import "@fontsource/figtree/400.css"
import "@fontsource/figtree/500.css"
import "@fontsource/figtree/700.css"
import "@fontsource/michroma/400.css"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { JsonLd } from "@/components/json-ld"
import { GOOGLE_ADS_CONVERSION_ID } from "@/lib/analytics"
import { SITE } from "@/lib/site"
import { SERVICES } from "@/lib/services"
import { AREAS } from "@/lib/areas"

export const viewport: Viewport = { themeColor: "#25272b" }

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Sithoma Construction | Painting, Drywall, Ceilings, Tiling and Waterproofing in Gauteng",
    template: "%s | Sithoma Construction",
  },
  description:
    "Sithoma Construction and Projects does repairs and installations for painting, drywall, ceilings, tiling, Rhinolite finishes, waterproofing and roofs across Gauteng. Based in Midrand. Call Now or send a WhatsApp job card.",
  keywords: ["painters Gauteng", "drywall installation Johannesburg", "ceiling installation", "tiling contractors", "Rhinolite plastering", "waterproofing contractors", "roof repairs Gauteng", "Sithoma Construction", "builders Midrand"],
  applicationName: "Sithoma Construction",
  authors: [{ name: "Sithoma Construction and Projects", url: SITE.url }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#c98b0a" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: SITE.url,
    siteName: "Sithoma Construction and Projects",
    title: "Sithoma Construction | Repairs and Installations in Gauteng",
    description: "Painting, drywall, ceilings, tiling, Rhinolite, waterproofing and roofs across Gauteng.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sithoma Construction and Projects, repairs and installations across Gauteng" }],
  },
  twitter: { card: "summary_large_image", title: "Sithoma Construction | Gauteng", description: "Repairs and installations for painting, drywall, ceilings, tiling, waterproofing and roofs.", images: ["/og-image.png"] },
  category: "Construction",
  other: { "geo.region": "ZA-GP", "geo.placename": "Midrand, Gauteng, South Africa" },
}

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  alternateName: SITE.shortName,
  url: SITE.url,
  image: `${SITE.url}/og-image.png`,
  logo: `${SITE.url}/logo-square.png`,
  telephone: SITE.phoneTel,
  email: SITE.email,
  slogan: SITE.tagline,
  description: "Repairs and installations for painting, drywall, ceilings, tiling, Rhinolite finishes, waterproofing and roofs across Gauteng and its outskirts.",
  priceRange: "$$",
  address: { "@type": "PostalAddress", streetAddress: `${SITE.address.street}, ${SITE.address.suburb}`, addressLocality: SITE.address.city, postalCode: SITE.address.postal, addressRegion: "Gauteng", addressCountry: SITE.address.country },
  sameAs: [SITE.facebook],
  knowsAbout: SERVICES.map((s) => s.name),
  areaServed: [{ "@type": "AdministrativeArea", name: "Gauteng" }, ...AREAS.map((a) => ({ "@type": "City", name: a.name }))],
  makesOffer: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name, url: `${SITE.url}/services/${s.slug}` } })),
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <head>
        <meta name="format-detection" content="telephone=yes" />
        {GOOGLE_ADS_CONVERSION_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_CONVERSION_ID}`} />
            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GOOGLE_ADS_CONVERSION_ID}');` }} />
          </>
        )}
        <JsonLd data={businessSchema} />
        <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: SITE.name, inLanguage: "en-ZA", publisher: { "@id": `${SITE.url}/#business` } }} />
      </head>
      <body>
        <Header />
        <main className="pb-[72px] md:pb-0">{children}</main>
        <Footer />
        <FloatingActions />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

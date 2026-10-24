import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = { title: "Terms of Service", description: "Terms for using the Sithoma Construction website and requesting quotes.", alternates: { canonical: "/terms" } }

export default function Terms() {
  const h = "mt-10 text-3xl font-bold"
  const p = "mt-3 text-lg leading-relaxed text-graphite"
  return (
    <>
      <PageHero crumbs={[{ name: "Terms of Service", href: "/terms" }]} title="Terms of Service" />
      <article className="mx-auto max-w-3xl px-5 py-16">
        <p className={p}>By using this website you agree to these terms. They are a general guide and do not replace a written quote or contract.</p>
        <h2 className={h}>Quotes</h2>
        <p className={p}>Quotes given from photos or messages are estimates. The final price is confirmed in writing after the work has been measured and before extra work begins.</p>
        <h2 className={h}>Work and materials</h2>
        <p className={p}>Work is carried out on the terms of the signed quote or contract. Any workmanship or material warranty is stated on that document.</p>
        <h2 className={h}>Website content</h2>
        <p className={p}>Information on this site is provided in good faith and may change without notice. Photos are for illustration.</p>
        <h2 className={h}>Liability</h2>
        <p className={p}>To the extent allowed by law, Sithoma Construction and Projects is not liable for loss arising from the use of this website.</p>
        <h2 className={h}>Contact</h2>
        <p className={p}>Questions about these terms can be sent to us through the contact page.</p>
      </article>
    </>
  )
}

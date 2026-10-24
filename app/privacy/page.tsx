import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SITE, ADDRESS_LINE } from "@/lib/site"

export const metadata: Metadata = { title: "Privacy Policy", description: "How Sithoma Construction and Projects collects, uses and protects your personal information.", alternates: { canonical: "/privacy" } }

export default function Privacy() {
  const h = "mt-10 text-3xl font-bold"
  const p = "mt-3 text-lg leading-relaxed text-graphite"
  return (
    <>
      <PageHero crumbs={[{ name: "Privacy Policy", href: "/privacy" }]} title="Privacy Policy" />
      <article className="mx-auto max-w-3xl px-5 py-16">
        <p className={p}>Sithoma Construction and Projects respects your privacy and handles personal information in line with the Protection of Personal Information Act (POPIA).</p>
        <h2 className={h}>Who we are</h2>
        <p className={p}>Sithoma Construction and Projects, {ADDRESS_LINE}. Email {SITE.email}, phone {SITE.phoneDisplay}.</p>
        <h2 className={h}>What we collect</h2>
        <p className={p}>When you send a job card or contact us, we receive your name, your phone or WhatsApp number, your property location, details of the job and any photos or messages you send. The job card form on this website does not store anything. It prepares a WhatsApp message that you choose to send.</p>
        <h2 className={h}>How we use it</h2>
        <p className={p}>We use your information to quote, schedule and carry out work, to contact you about your job and to keep project records. We do not sell your information.</p>
        <h2 className={h}>Sharing</h2>
        <p className={p}>We only share information with suppliers or service providers where it is needed to complete your job, or where the law requires it.</p>
        <h2 className={h}>Analytics and cookies</h2>
        <p className={p}>We use privacy friendly analytics to understand how the website is used so we can improve it.</p>
        <h2 className={h}>Your rights</h2>
        <p className={p}>You may ask to see, correct or delete the personal information we hold about you. Email {SITE.email} and we will respond.</p>
      </article>
    </>
  )
}

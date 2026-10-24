import { CallButton, WhatsAppButton, LinkButton } from "@/components/buttons"
import { RotatingWord } from "@/components/rotating-word"
import { RoofLines } from "@/components/roof-lines"

export function CtaBand({ text = "Send us photos of what needs doing and we will come back with a clear quote." }: { text?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-20 text-white">
      <RoofLines grey="#5c5f66" className="absolute -right-10 top-4 -z-10 h-64 w-[75%] opacity-30" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold leading-[1.05] md:text-6xl">
            <span className="block">Ready to start?</span>
            <span className="mt-1 block"><RotatingWord interval={2200} words={["Get a free quote.", "Send us photos.", "Call us today."]} className="rounded-xl bg-signal px-3 pb-1 text-ink" /></span>
          </h2>
          <p className="mt-4 text-lg text-silver">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <CallButton look="red" />
          <WhatsAppButton />
          <LinkButton href="/contact#job-card" look="outlineLight">Get a Free Quote</LinkButton>
        </div>
      </div>
    </section>
  )
}

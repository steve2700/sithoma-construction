import Image from "next/image"

const slides: [string, string, string][] = [
  ["/exterior-house-painting-double-storey-home.jpg", "Double storey home being painted", "Exterior painting"],
  ["/led-cove-ceiling-design-installation.jpg", "LED cove ceiling design", "Ceiling designs"],
  ["/bathroom-wall-and-floor-tiling-installation.jpg", "Bathroom tiling installation", "Precision tiling"],
  ["/church-roof-painting-finished.avif", "Church roof freshly painted", "Roof painting"],
]

export function HeroStage() {
  return (
    <div className="relative pb-6">
      <div aria-hidden="true" className="absolute -left-3 -top-3 h-24 w-40 rounded-3xl border-4 border-signal" />
      <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] bg-ink shadow-2xl shadow-ink/30" aria-label="Recent Sithoma projects">
        {slides.map(([src, alt, cap], i) => (
          <div key={src} className="slide absolute inset-0" style={{ animationDelay: `${i * 6}s` }}>
            <Image src={src} alt={alt} fill priority={i === 0} sizes="(min-width: 1024px) 45vw, 100vw" className={`object-cover ${["drift-a", "drift-b", "drift-c", "drift-a"][i]}`} />
            <span className="absolute bottom-4 left-4 rounded-full bg-ink/90 px-4 py-2 font-display text-sm font-bold text-white">{cap}</span>
          </div>
        ))}
        <span className="pointer-events-none absolute right-3 top-3 flex items-center rounded-full bg-white/95 px-3 py-1.5 shadow-md">
          <Image src="/logo-mark.svg" alt="" width={34} height={36} />
        </span>
      </div>
      <div className="absolute -bottom-0 right-4 rounded-2xl bg-signal px-5 py-3 font-display font-bold text-ink shadow-xl sm:right-[-18px]">Repairs and installations</div>
    </div>
  )
}

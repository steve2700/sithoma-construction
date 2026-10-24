import { MovingImage } from "@/components/moving-image"

const photos: [string, string][] = [
  ["/exterior-house-painting-double-storey-home.jpg", "Exterior house painting"],
  ["/bathroom-wall-and-floor-tiling-installation.jpg", "Bathroom tiling installation"],
  ["/roof-tile-repairs-and-maintenance-after.avif", "Tile roof after repairs"],
  ["/led-cove-ceiling-design-installation.jpg", "LED cove ceiling design"],
  ["/staircase-tiling-installation.jpg", "Staircase tiling"],
  ["/new-timber-roof-trusses-installation.jpg", "New timber roof trusses"],
  ["/torch-on-waterproofing-flat-roof-after.avif", "Torch on waterproofing"],
  ["/passage-bulkhead-ceiling-and-smooth-painted-walls.jpg", "Passage bulkhead ceiling and smooth walls"],
  ["/shower-tiling-installation-with-corner-shelves.jpg", "Shower tiling"],
  ["/church-roof-painting-finished.avif", "Church roof painting"],
]

export function PhotoStrip() {
  const all = [...photos, ...photos]
  return (
    <div className="overflow-hidden" aria-label="Recent work">
      <div className="strip flex w-max gap-4">
        {all.map(([src, alt], i) => (
          <MovingImage key={i} src={src} alt={i < photos.length ? alt : ""} variant={i} sizes="320px" className="h-64 w-72 shrink-0 rounded-[1.5rem]" markWidth={32} />
        ))}
      </div>
    </div>
  )
}

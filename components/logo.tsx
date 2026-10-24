import Image from "next/image"
import Link from "next/link"

export function Logo({ tone = "light", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Link href="/" aria-label="Sithoma Construction and Projects home" className={`block ${className}`}>
      <Image src={tone === "dark" ? "/logo-horizontal-light.svg" : "/logo-horizontal.svg"} alt="Sithoma Construction and Projects" width={420} height={148} priority className="h-11 w-auto sm:h-[3.75rem]" />
    </Link>
  )
}

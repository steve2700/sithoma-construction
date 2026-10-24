/** The two roof lines from the logo, drawn on when the page loads. */
export function RoofLines({ className = "", grey = "#25272b", gold = "#e3a61c" }: { className?: string; grey?: string; gold?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 40 1100 200" className={className} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path className="draw draw-2" d="M196 112 L250 74 Q266 63 284 71 C440 148 700 146 1082 100" stroke={gold} strokeWidth="9" />
      <path className="draw" d="M30 190 L112 104 Q126 90 142 102 C196 146 268 174 346 180" stroke={grey} strokeWidth="9" />
    </svg>
  )
}

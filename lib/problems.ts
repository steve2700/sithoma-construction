export interface Problem {
  id: string
  label: string
  causes: string[]
  action: string
  service: string
  urgent?: string
}

export const PROBLEMS: Problem[] = [
  { id: "damp", label: "Damp patches or stains on walls or ceilings", service: "waterproofing",
    urgent: "If water is near lights or sockets, switch the power off at the board.",
    causes: ["A leaking roof or flat roof", "A failed waterproofing membrane", "A plumbing leak behind the wall", "Rising damp or poor drainage"],
    action: "We find where the water is coming from, stop it at the source and then repair and repaint the damage so it does not come back." },
  { id: "roof-leak", label: "My roof is leaking", service: "roof-repairs-and-painting",
    causes: ["Cracked or slipped roof tiles", "Failed flashing or ridge capping", "Worn roof sheets or screws", "A flat roof membrane that has split"],
    action: "We inspect the roof, repair the damaged tiles or sheets and seal the weak spots. A flat roof that keeps leaking may need waterproofing." },
  { id: "peeling", label: "Paint is peeling, fading or bubbling", service: "painting-and-decorating",
    causes: ["Moisture behind the paint", "Poor surface preparation last time", "Sun damage on exterior walls", "The wrong paint for the surface"],
    action: "We scrape, repair and prepare the surface properly, treat any damp, and repaint with a coating that suits the surface." },
  { id: "cracks", label: "Cracks or rough patches in walls and plaster", service: "rhinolite-plastering",
    causes: ["Movement in the building", "Weak or poorly mixed plaster", "Water getting into the wall", "Old repairs that have failed"],
    action: "We cut out and repair the damaged plaster, then finish the wall smooth with Rhinolite so it is ready for paint." },
  { id: "tiles", label: "Loose, cracked or hollow tiles", service: "precision-tiling",
    causes: ["Poor adhesive or preparation", "Movement in the floor or wall", "Water getting behind the tiles", "Grout that has failed"],
    action: "We lift the bad tiles, fix the cause underneath, and retile and regrout so the surface is flat and sealed." },
  { id: "ceiling-damage", label: "Sagging or water damaged ceiling", service: "ceiling-designs-and-installation",
    urgent: "A sagging wet ceiling can fall. Keep people away from underneath it.",
    causes: ["A roof or plumbing leak above", "Heavy insulation or water load", "Failed fixings or hangers", "Old, brittle boards"],
    action: "We make it safe, trace the leak, remove the damaged boards and install a new ceiling with a clean, painted finish." },
  { id: "partition", label: "I need a new partition wall or office layout", service: "drywall-installation-and-repairs",
    causes: ["More rooms needed in a space", "Offices that need dividing", "A room that needs splitting or closing off", "A bulkhead or boxing in required"],
    action: "We frame, board and finish drywall partitions and bulkheads, ready for paint, with a clear quote based on your plan." },
  { id: "ceiling-design", label: "I want a new ceiling design", service: "ceiling-designs-and-installation",
    causes: ["A flat ceiling that feels plain", "A wish for LED cove lighting", "Downlights that need a neat layout", "A renovation or new build"],
    action: "We design and install ceilings with bulkheads, cove lighting and downlights, finished smooth and painted." },
]

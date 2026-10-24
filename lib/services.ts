export interface BeforeAfterItem {
  title: string
  before: string
  after: string
  ratio: string
  caption: string
  alt: string
}

export interface CostGuide {
  slug: string
  title: string
  intro: string
  factors: { t: string; d: string }[]
  tips: string[]
}

export interface Service {
  slug: string
  comboSlug: string
  comboName: string
  name: string
  short: string
  jobLabel: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  image: string
  imageAlt: string
  headline: string
  intro: string
  answer: string
  repairs: string[]
  installs: string[]
  signs: string[]
  process?: { src: string; alt: string; caption: string }[]
  gallery?: BeforeAfterItem[]
  faqs: { q: string; a: string }[]
  cost: CostGuide
}

export const BA_ROOF_REPAIR: BeforeAfterItem = {
  title: "Tile roof repairs and maintenance",
  before: "/roof-tile-repairs-and-maintenance-before.avif",
  after: "/roof-tile-repairs-and-maintenance-after.avif",
  ratio: "3 / 4",
  caption: "A tired, damaged tile roof repaired, cleaned and restored.",
  alt: "Tile roof before and after repairs and maintenance",
}
export const BA_ROOF_PAINT: BeforeAfterItem = {
  title: "Roof painting",
  before: "/roof-painting-tile-roof-before.avif",
  after: "/roof-painting-tile-roof-after.avif",
  ratio: "1 / 1",
  caption: "A faded roof given a fresh, protective coat of paint.",
  alt: "Tile roof before and after painting",
}
export const BA_TORCH: BeforeAfterItem = {
  title: "Torch on waterproofing",
  before: "/torch-on-waterproofing-flat-roof-before.avif",
  after: "/torch-on-waterproofing-flat-roof-after.avif",
  ratio: "3 / 4",
  caption: "A worn flat roof sealed with a torch on waterproofing membrane.",
  alt: "Flat roof before and after torch on waterproofing",
}

export const SERVICES: Service[] = [
  {
    slug: "painting-and-decorating",
    comboSlug: "painters", comboName: "Painters",
    name: "Painting and Decorating",
    short: "Interior and exterior painting, with the repairs done properly first.",
    jobLabel: "Painting",
    metaTitle: "Painters in Gauteng: Interior and Exterior Painting",
    metaDescription: "Interior and exterior painting in Gauteng, including crack and damp repairs before painting. Free quotes from Sithoma Construction. Call Now or send a WhatsApp job card.",
    keywords: ["painters Gauteng", "interior painting Johannesburg", "exterior house painting", "painting contractors Midrand", "wall repairs and painting"],
    image: "/exterior-house-painting-double-storey-home.jpg",
    imageAlt: "Double storey home being painted by the Sithoma team",
    headline: "Painting that lasts, because the repairs come first",
    intro: "A good paint job is 80 percent preparation. We repair cracks, treat damp and prepare every surface before the first coat goes on, whether it is one room or a whole house.",
    answer: "Sithoma Construction paints homes and businesses across Gauteng, inside and out. We repair damaged walls, treat damp and prepare surfaces first, then paint with coatings that suit the surface.",
    repairs: ["Crack and hole repairs before painting", "Peeling and flaking paint treated and recoated", "Damp and water stain treatment", "Touch ups between tenants", "Exterior walls restored after weather damage"],
    installs: ["Full interior painting for new builds and renovations", "Exterior painting with weather resistant coatings", "Ceilings, doors, window frames and woodwork", "Feature walls and colour schemes", "Spray painting for large surfaces"],
    signs: ["Paint is peeling or bubbling", "Walls are stained or marked", "Exterior looks faded and tired", "Moving in or moving out", "Renovation is almost finished"],
    process: [
      { src: "/painter-spraying-exterior-wall.jpg", alt: "Painter spraying an exterior wall", caption: "Spray painting" },
      { src: "/interior-painting-smooth-wall-finish-and-door.jpg", alt: "Smooth interior painted walls and door", caption: "Smooth interior finish" },
      { src: "/double-storey-home-with-garage-exterior.jpg", alt: "Double storey home exterior with garage", caption: "Exterior finish" },
    ],
    faqs: [
      { q: "Do you repair walls before painting?", a: "Yes. We repair cracks and holes, treat damp and sand and prime the surface before painting. This is what makes the paint last." },
      { q: "Do you paint exteriors and interiors?", a: "Yes. We paint interior walls, ceilings, doors and woodwork, and exterior walls and roofs." },
      { q: "How do I get a quote?", a: "Send a WhatsApp job card with photos of the area. We will come back with a clear quote, or arrange a visit for bigger jobs." },
    ],
    cost: { slug: "painting-cost-gauteng", title: "What affects the cost of painting in Gauteng", intro: "Painting prices vary a lot because no two jobs are the same. This guide shows what drives the price so you can compare quotes fairly.",
      factors: [
        { t: "Size of the area", d: "The total wall and ceiling area is the biggest factor, plus how high the ceilings are." },
        { t: "Condition of the surface", d: "Cracks, damp and old peeling paint need repair and preparation before painting, and that takes time." },
        { t: "Paint quality and number of coats", d: "Better paint costs more but lasts longer. Dark colours over light walls usually need extra coats." },
        { t: "Access and height", d: "Double storey walls and roofs need scaffolding or ladders, which adds time and equipment." },
        { t: "Furniture and finishing details", d: "Moving furniture, masking, doors, frames and skirting all add to the work." },
      ],
      tips: ["Send photos of every room or wall you want painted", "Say whether you want repairs included", "Choose your paint colours before the quote", "Ask what preparation is included"] },
  },
  {
    slug: "drywall-installation-and-repairs",
    comboSlug: "drywall", comboName: "Drywall Installers",
    name: "Drywall Installation and Repairs",
    short: "Partition walls, bulkheads and drywall repairs, framed, boarded and finished.",
    jobLabel: "Drywall",
    metaTitle: "Drywall Installation and Repairs in Gauteng",
    metaDescription: "Drywall installation and repairs in Gauteng. Partition walls, bulkheads, office dividers and board repairs, framed, boarded and finished. Free quotes from Sithoma Construction.",
    keywords: ["drywall installation Gauteng", "drywall contractors Johannesburg", "partition walls", "drywall repairs", "bulkheads"],
    image: "/passage-bulkhead-ceiling-and-smooth-painted-walls.jpg",
    imageAlt: "Passage with a drywall bulkhead ceiling and smooth painted walls",
    headline: "Drywall partitions and bulkheads, framed straight and finished smooth",
    intro: "Drywall lets you change a space quickly and cleanly. We install partitions, bulkheads and linings, and repair damaged boards so walls look like they were never touched.",
    answer: "Sithoma Construction installs and repairs drywall across Gauteng, including partition walls, office dividers, bulkheads and board repairs, finished smooth and ready for paint.",
    repairs: ["Damaged and water stained boards replaced", "Cracked joints and corners repaired", "Holes and impact damage patched", "Sagging bulkheads and linings fixed", "Walls restored after plumbing or electrical work"],
    installs: ["Partition walls for homes and offices", "Steel stud and board framing", "Bulkheads and boxing in", "Wall linings and dry lining", "Insulation inside walls and ceilings"],
    signs: ["You need an extra room or office", "Boards are damaged or water stained", "Cracks keep returning at joints", "A space needs dividing", "Renovation needs new walls fast"],
    process: [
      { src: "/drywall-partition-framing-installation.jpg", alt: "Drywall partition framing being installed", caption: "Framing" },
      { src: "/plasterboard-drywall-installation-passage.jpg", alt: "Plasterboard drywall installed along a passage", caption: "Boarding" },
      { src: "/drywall-partition-walls-office-passage.jpg", alt: "Finished drywall partition walls in an office passage", caption: "Finished partitions" },
    ],
    faqs: [
      { q: "How fast can drywall be installed?", a: "Drywall is much faster and cleaner than brick. The time depends on the size of the job and the finish required, and we give you a time frame in the quote." },
      { q: "Can you repair water damaged drywall?", a: "Yes. We find and stop the leak first, then replace the damaged boards and finish and paint the wall." },
      { q: "Do you do office partitions?", a: "Yes. We build office partitions and dividers for businesses and homes." },
    ],
    cost: { slug: "drywall-cost-gauteng", title: "What affects the cost of drywall in Gauteng", intro: "Drywall prices depend on the layout and the finish. Here is what shapes the price so you know what to ask for.",
      factors: [
        { t: "Length and height of the walls", d: "More wall area means more framing, boards and finishing." },
        { t: "Type of boards", d: "Standard, moisture resistant and soundproofing boards are priced differently." },
        { t: "Insulation and electrical work", d: "Insulation, sockets and switches inside the wall add materials and coordination." },
        { t: "Finish level", d: "A smooth, paint ready finish takes more skill and time than a basic board finish." },
        { t: "Doors, bulkheads and details", d: "Door frames, windows and bulkheads add framing work." },
      ],
      tips: ["Share a sketch or measurements", "Say what finish you need", "Tell us if electrical work is involved", "Ask about the time frame"] },
  },
  {
    slug: "ceiling-designs-and-installation",
    comboSlug: "ceilings", comboName: "Ceiling Installers",
    name: "Ceiling Designs, Installation and Repairs",
    short: "Bulkheads, LED cove ceilings, downlights and ceiling repairs.",
    jobLabel: "Ceilings",
    metaTitle: "Ceiling Designs, Installation and Repairs in Gauteng",
    metaDescription: "Ceiling designs, installation and repairs in Gauteng. LED cove ceilings, bulkheads, suspended ceilings and water damage repairs. Free quotes from Sithoma Construction.",
    keywords: ["ceiling installation Gauteng", "LED cove ceiling design", "bulkhead ceilings", "ceiling repairs Johannesburg", "suspended ceilings"],
    image: "/led-cove-ceiling-design-installation.jpg",
    imageAlt: "LED cove ceiling design installed in a home",
    headline: "Ceiling designs that lift a room, and ceiling repairs that fix the damage",
    intro: "A ceiling shapes how a room feels. We design and install bulkheads, cove lighting and downlight layouts, and we repair sagging or water damaged ceilings properly.",
    answer: "Sithoma Construction designs, installs and repairs ceilings across Gauteng, including LED cove ceilings, bulkheads, suspended ceilings and water damage repairs.",
    repairs: ["Sagging and water damaged ceilings repaired", "Cracked boards and cornices replaced", "Stained ceilings treated and repainted", "Failed fixings and hangers replaced", "Ceilings made safe after roof leaks"],
    installs: ["LED cove and bulkhead ceiling designs", "Suspended ceilings for homes and offices", "Downlight layouts and cut outs", "New ceilings for renovations and new builds", "Cornices and decorative details"],
    signs: ["Ceiling is sagging or stained", "A room feels plain and flat", "You want cove or LED lighting", "Roof leak has damaged the boards", "Renovation needs a new ceiling"],
    process: [
      { src: "/ceiling-bulkhead-with-blue-led-lighting.jpg", alt: "Ceiling bulkhead with blue LED lighting", caption: "Bulkhead with LED" },
      { src: "/ceiling-downlights-and-smooth-finish-open-plan.jpg", alt: "Open plan ceiling with downlights and a smooth finish", caption: "Downlights" },
      { src: "/kitchen-renovation-ceiling-and-cabinet-installation.jpg", alt: "Kitchen renovation with new ceiling and cabinets", caption: "Kitchen ceiling" },
    ],
    faqs: [
      { q: "Can you install LED cove ceilings?", a: "Yes. We build the bulkhead and cove, and the lighting can be fitted to your design. Send photos of ceilings you like." },
      { q: "Can you repair a water damaged ceiling?", a: "Yes. We make it safe, find the leak, replace the damaged boards and repaint. If the leak is on the roof, we can repair that as well." },
      { q: "Do you install suspended ceilings?", a: "Yes, for homes and for offices and commercial spaces." },
    ],
    cost: { slug: "ceiling-cost-gauteng", title: "What affects the cost of ceilings in Gauteng", intro: "Ceiling prices swing widely between a plain flat ceiling and a full cove and LED design. This guide explains why.",
      factors: [
        { t: "Ceiling area", d: "The total area of the ceiling, and its height, drives the amount of framing and board." },
        { t: "Design complexity", d: "Bulkheads, coves and curves take more framing and finishing than a flat ceiling." },
        { t: "Lighting", d: "Downlights, LED strips and drivers add materials and electrical work." },
        { t: "Existing ceiling", d: "Removing an old or damaged ceiling adds time and disposal." },
        { t: "Finish and paint", d: "A smooth finish and painting are part of a neat ceiling and are priced into the job." },
      ],
      tips: ["Share photos of designs you like", "Say where lights should go", "Tell us if the old ceiling must come out", "Ask about the finish and paint included"] },
  },
  {
    slug: "precision-tiling",
    comboSlug: "tiling", comboName: "Tiling Contractors",
    name: "Precision Tiling",
    short: "Bathrooms, showers, floors and stairs tiled with straight lines and clean grout.",
    jobLabel: "Tiling",
    metaTitle: "Tiling Contractors in Gauteng: Bathrooms, Floors and Stairs",
    metaDescription: "Precision tiling in Gauteng for bathrooms, showers, floors and stairs, plus tile repairs and regrouting. Free quotes from Sithoma Construction. Call Now or send a job card.",
    keywords: ["tiling contractors Gauteng", "bathroom tiling Johannesburg", "shower tiling", "floor tiling Midrand", "tile repairs and regrouting"],
    image: "/bathroom-wall-and-floor-tiling-installation.jpg",
    imageAlt: "Bathroom with wall and floor tiling installed",
    headline: "Precision tiling with straight lines and clean grout",
    intro: "Tiling shows every mistake, so the preparation and the setting out matter. We tile bathrooms, showers, floors and stairs, and we repair loose or cracked tiles.",
    answer: "Sithoma Construction installs and repairs tiling across Gauteng, including bathrooms, showers, floors and stairs, with careful preparation, straight lines and clean grout.",
    repairs: ["Loose, hollow and cracked tiles replaced", "Regrouting and resealing", "Leaking showers repaired and retiled", "Uneven floors levelled before retiling", "Tiles matched where possible"],
    installs: ["Bathroom wall and floor tiling", "Shower tiling with niches and shelves", "Floor tiling in large formats", "Staircase tiling", "Kitchen floors and splashbacks"],
    signs: ["Tiles sounding hollow", "Cracked or lifting tiles", "Grout going dark or crumbling", "Shower is leaking", "Renovating a bathroom or floor"],
    process: [
      { src: "/shower-tiling-installation-with-corner-shelves.jpg", alt: "Shower tiling installed with corner shelves", caption: "Shower tiling" },
      { src: "/staircase-tiling-installation.jpg", alt: "Staircase tiling installation", caption: "Staircase tiling" },
      { src: "/kitchen-renovation-ceiling-and-cabinet-installation.jpg", alt: "Kitchen renovation with tiled floor in progress", caption: "Kitchen renovation" },
    ],
    faqs: [
      { q: "Do you do bathroom and shower tiling?", a: "Yes. We tile bathroom walls and floors and showers, including waterproofing where it is needed." },
      { q: "Can you replace a few broken tiles?", a: "Yes. We lift the damaged tiles, fix the cause and replace them. Matching old tiles depends on whether a match is still available." },
      { q: "Do you tile large format tiles?", a: "Yes. Large tiles need a flat surface and careful setting out, which is a big part of our preparation." },
    ],
    cost: { slug: "tiling-cost-gauteng", title: "What affects the cost of tiling in Gauteng", intro: "Tiling labour depends on the tile, the surface and the layout. Here is what shapes the price.",
      factors: [
        { t: "Area to be tiled", d: "The floor and wall area is the main driver of labour." },
        { t: "Type and size of tile", d: "Large format, porcelain and natural stone tiles take more care to cut and set." },
        { t: "Surface preparation", d: "Uneven floors, old tiles to remove and waterproofing add work before tiling starts." },
        { t: "Layout and cuts", d: "Patterns, stairs, niches and many cuts take longer than a plain open floor." },
        { t: "Grout and sealing", d: "The grout type and any sealing add to the materials and time." },
      ],
      tips: ["Choose your tiles first and share the size", "Measure the area or send photos", "Say if old tiles must be removed", "Ask whether waterproofing is included"] },
  },
  {
    slug: "rhinolite-plastering",
    comboSlug: "rhinolite-plastering", comboName: "Rhinolite Plastering",
    name: "Rhinolite Plastering and Finishes",
    short: "Smooth Rhinolite walls and ceilings, plus plaster repairs that disappear.",
    jobLabel: "Rhinolite",
    metaTitle: "Rhinolite Plastering and Finishes in Gauteng",
    metaDescription: "Rhinolite plastering and smooth wall finishes in Gauteng, plus plaster repairs and skimming. Free quotes from Sithoma Construction. Call Now or send a WhatsApp job card.",
    keywords: ["Rhinolite plastering Gauteng", "rhinoliting Johannesburg", "smooth wall finish", "skim coating", "plaster repairs"],
    image: "/interior-painting-smooth-wall-finish-and-door.jpg",
    imageAlt: "Smooth Rhinolite finished interior wall with a painted door",
    headline: "Rhinolite finishes that leave walls and ceilings perfectly smooth",
    intro: "Rhinolite gives walls and ceilings a smooth, hard finish that takes paint beautifully. We apply it to new work and repair cracked or rough plaster on old walls.",
    answer: "Sithoma Construction applies Rhinolite plaster and smooth finishes across Gauteng, and repairs cracked, uneven and damaged plaster, leaving walls and ceilings ready for paint.",
    repairs: ["Cracked plaster cut out and repaired", "Rough and uneven walls skimmed smooth", "Old failed repairs redone", "Damp damaged plaster replaced", "Walls prepared for repainting"],
    installs: ["Rhinolite on new walls and ceilings", "Smooth skim finishes over brick and block", "Rhinolite over drywall", "Feature walls and smooth ceilings", "Walls ready for paint or wallpaper"],
    signs: ["Walls are rough or uneven", "Cracks keep coming back", "Plaster is crumbling or hollow", "You want a smooth modern finish", "Building work is complete and walls need finishing"],
    process: [
      { src: "/passage-bulkhead-ceiling-and-smooth-painted-walls.jpg", alt: "Smooth finished passage walls and bulkhead ceiling", caption: "Smooth passage walls" },
      { src: "/ceiling-downlights-and-smooth-finish-open-plan.jpg", alt: "Smooth finished ceiling in an open plan space", caption: "Smooth ceiling" },
      { src: "/interior-painting-smooth-wall-finish-and-door.jpg", alt: "Smooth wall finish ready for paint", caption: "Ready for paint" },
    ],
    faqs: [
      { q: "What is Rhinolite?", a: "Rhinolite is a gypsum based plaster that gives a smooth, hard surface on walls and ceilings. It is popular because the finish is very smooth and takes paint well." },
      { q: "Can Rhinolite repair cracked walls?", a: "Yes. We cut out loose plaster, repair the crack and skim the wall so the repair is not visible once it is painted." },
      { q: "Can you Rhinolite an old wall?", a: "Often yes, once the wall is sound and dry. We check the wall first and tell you what preparation is needed." },
    ],
    cost: { slug: "rhinolite-cost-gauteng", title: "What affects the cost of Rhinolite plastering in Gauteng", intro: "Rhinolite prices depend on the area and the state of the walls. Here is what to expect when comparing quotes.",
      factors: [
        { t: "Wall and ceiling area", d: "The total surface area is the main factor." },
        { t: "Condition of the surface", d: "Rough, cracked or damp walls need repairs and preparation before plastering." },
        { t: "Number of coats", d: "A smooth finish may need more than one coat and sanding." },
        { t: "Access and height", d: "High ceilings and stairwells need scaffolding or special access." },
        { t: "Drying time and sequencing", d: "Rhinolite must dry before painting, which affects the schedule." },
      ],
      tips: ["Send photos of the walls", "Tell us if walls are new or old", "Say whether painting is also needed", "Ask about the drying time"] },
  },
  {
    slug: "waterproofing",
    comboSlug: "waterproofing", comboName: "Waterproofing Contractors",
    name: "Waterproofing Repairs and Installation",
    short: "Torch on membranes, flat roofs, balconies and damp walls sealed against water.",
    jobLabel: "Waterproofing",
    metaTitle: "Waterproofing Contractors in Gauteng: Flat Roofs and Damp",
    metaDescription: "Waterproofing in Gauteng: torch on waterproofing for flat roofs, balconies and damp walls, plus leak repairs. Free quotes from Sithoma Construction. Call Now or send a job card.",
    keywords: ["waterproofing Gauteng", "torch on waterproofing", "flat roof waterproofing Johannesburg", "damp proofing", "leak repairs"],
    image: "/torch-on-waterproofing-flat-roof-after.avif",
    imageAlt: "Flat roof finished with torch on waterproofing",
    headline: "Waterproofing that stops the leak and protects the building",
    intro: "Water finds every weak point. We find where it is getting in, repair the damage and seal the surface with torch on membranes and coatings that are built to last.",
    answer: "Sithoma Construction repairs and installs waterproofing across Gauteng, including torch on membranes for flat roofs, balconies and walls, and repairs for leaks and damp.",
    gallery: [BA_TORCH],
    repairs: ["Leaking flat roofs repaired", "Failed membranes patched or replaced", "Damp walls traced and treated", "Balcony and slab leaks sealed", "Damage repaired and repainted afterwards"],
    installs: ["Torch on waterproofing for flat roofs", "Waterproofing for balconies and slabs", "Liquid waterproofing coatings", "Waterproofing under tiles in showers and bathrooms", "Protective coatings for new builds"],
    signs: ["Damp patches on ceilings or walls", "Flat roof is leaking after rain", "Paint is bubbling from moisture", "Balcony or slab is leaking", "New flat roof needs protecting"],
    process: [
      { src: "/flat-roof-waterproofing-membrane-installation.jpg", alt: "Flat roof waterproofing membrane being installed", caption: "Membrane installation" },
      { src: "/roof-repair-worker-on-tiled-roof.jpg", alt: "Worker repairing a tiled roof", caption: "Roof repair" },
    ],
    faqs: [
      { q: "What is torch on waterproofing?", a: "Torch on waterproofing uses a bitumen membrane that is heated and bonded to the surface, creating a tough, sealed layer. It is widely used on flat roofs." },
      { q: "How do I know my flat roof needs waterproofing?", a: "Signs are leaks after rain, damp patches on ceilings, ponding water and a worn, cracked surface. We inspect and tell you honestly what is needed." },
      { q: "Do you repair the damage inside as well?", a: "Yes. Once the leak is stopped we can repair and repaint ceilings and walls that were damaged." },
    ],
    cost: { slug: "waterproofing-cost-gauteng", title: "What affects the cost of waterproofing in Gauteng", intro: "Waterproofing prices depend on the area, the method and the condition of the surface. Here is how to compare quotes.",
      factors: [
        { t: "Area to be waterproofed", d: "The roof, balcony or wall area is the main factor." },
        { t: "Method and materials", d: "Torch on membranes and liquid coatings are different products at different prices." },
        { t: "Condition of the existing surface", d: "Old membranes may need removing, and cracks and ponding must be repaired first." },
        { t: "Access and height", d: "Roofs that are hard to reach need extra safety equipment and time." },
        { t: "Repairs inside afterwards", d: "Ceiling and wall damage from earlier leaks may need to be repaired and repainted." },
      ],
      tips: ["Send photos of the roof or wall and any damage inside", "Say when the leak happens, for example only in heavy rain", "Ask what warranty or workmanship cover applies", "Ask what preparation is included"] },
  },
  {
    slug: "roof-repairs-and-painting",
    comboSlug: "roof-repairs", comboName: "Roof Repairs and Painting",
    name: "Roof Repairs and Roof Painting",
    short: "Roof tile and sheet repairs, leak fixes, new roof structures and roof painting.",
    jobLabel: "Roofing",
    metaTitle: "Roof Repairs and Roof Painting in Gauteng",
    metaDescription: "Roof repairs, roof painting and new roof structures in Gauteng. Tile and sheet repairs, leak fixes and restoration. Free quotes from Sithoma Construction. Call Now or send a job card.",
    keywords: ["roof repairs Gauteng", "roof painting Johannesburg", "tile roof repairs", "roof leak repairs", "roof restoration"],
    image: "/roof-tile-repairs-and-maintenance-after.avif",
    imageAlt: "Tile roof after repairs and maintenance",
    headline: "Roof repairs and roof painting that protect the whole house",
    intro: "The roof is the most exposed part of any building. We repair tiles and sheets, stop leaks, build new roof structures and paint roofs so they look good and last longer.",
    answer: "Sithoma Construction repairs, paints and builds roofs across Gauteng, including tile and sheet repairs, leak fixes, roof restoration and new timber roof structures.",
    gallery: [BA_ROOF_REPAIR, BA_ROOF_PAINT],
    repairs: ["Cracked and slipped tiles replaced", "Roof leaks traced and sealed", "Ridge capping and flashing repaired", "Roof sheets and fixings replaced", "Maintenance and cleaning of old roofs"],
    installs: ["New timber roof trusses and structures", "Roof tiling and sheeting", "Roof painting and protective coatings", "Roof restoration for tired roofs", "Flat roof waterproofing"],
    signs: ["Leaks when it rains", "Broken or slipped tiles", "Faded, dirty or mossy roof", "Rust on roof sheets", "Building a new roof or extension"],
    process: [
      { src: "/new-timber-roof-trusses-installation.jpg", alt: "New timber roof trusses installed on a building", caption: "New roof trusses" },
      { src: "/church-roof-painting-finished.avif", alt: "Church roof freshly painted", caption: "Finished roof painting" },
      { src: "/red-tile-roof-restoration-and-painting.jpg", alt: "Red tile roof restoration and painting", caption: "Roof restoration" },
    ],
    faqs: [
      { q: "Can you fix a leaking roof?", a: "Yes. We find where the water is getting in, repair the tiles, sheets or flashings and seal the weak spots. A flat roof may need waterproofing." },
      { q: "Do you paint roofs?", a: "Yes. We clean, repair and paint tile and sheet roofs, which protects them and freshens the whole house." },
      { q: "Do you build new roof structures?", a: "Yes. We build timber roof trusses and structures for new builds and extensions." },
    ],
    cost: { slug: "roof-repairs-cost-gauteng", title: "What affects the cost of roof repairs in Gauteng", intro: "Roof jobs range from replacing a few tiles to restoring a whole roof. Here is what drives the price.",
      factors: [
        { t: "Roof size and pitch", d: "Larger and steeper roofs take more time and safety equipment." },
        { t: "Type of roof", d: "Tile, concrete tile, sheet and flat roofs need different materials and methods." },
        { t: "Extent of the damage", d: "A few broken tiles is a small job. Widespread damage or rotten timber is much bigger." },
        { t: "Access and safety", d: "Scaffolding and fall protection add cost on high roofs." },
        { t: "Painting and coatings", d: "Cleaning, repairs, primer and paint coats are priced by the roof area." },
      ],
      tips: ["Send photos of the roof and any leaks inside", "Tell us what type of roof you have", "Ask whether cleaning and repairs are included", "Ask about the paint or coating system"] },
  },
]

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug)
}

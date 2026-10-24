export interface Area {
  slug: string
  name: string
  places: string[]
  homes: string
  context: string
  image: string
  imageAlt: string
}

export const AREAS: Area[] = [
  { slug: "midrand", name: "Midrand", places: ["President Park", "Halfway House", "Kyalami", "Noordwyk"], homes: "estates, townhouse complexes and family homes",
    context: "Midrand is where we are based, so we know the estates, complexes and family homes here well. We repair and install finishes across Midrand and the surrounding suburbs.",
    image: "/exterior-house-painting-double-storey-home.jpg", imageAlt: "Double storey home being painted in Midrand" },
  { slug: "sandton", name: "Sandton", places: ["Bryanston", "Morningside", "Rivonia", "Sunninghill"], homes: "upmarket homes, apartments and offices",
    context: "Sandton homes and offices expect a neat, precise finish. We repair and install painting, ceilings, tiling and more across Sandton.",
    image: "/led-cove-ceiling-design-installation.jpg", imageAlt: "LED cove ceiling design installed in a home" },
  { slug: "fourways", name: "Fourways", places: ["Fourways Gardens", "Lonehill", "Dainfern", "Paulshof"], homes: "lifestyle estates and security complexes",
    context: "Fourways estates and complexes need reliable contractors who respect the rules and finish cleanly. We work across Fourways and its neighbouring suburbs.",
    image: "/kitchen-renovation-ceiling-and-cabinet-installation.jpg", imageAlt: "Kitchen renovation with ceiling and cabinet installation" },
  { slug: "johannesburg", name: "Johannesburg", places: ["Rosebank", "Melville", "Linden", "Parktown"], homes: "established homes, flats and commercial buildings",
    context: "Older Johannesburg homes and buildings often need careful repairs before anything new goes in. We handle both repairs and installations across the city.",
    image: "/church-roof-painting-finished.avif", imageAlt: "Church roof freshly painted in Johannesburg" },
  { slug: "randburg", name: "Randburg", places: ["Northcliff", "Ferndale", "Fontainebleau", "Randpark Ridge"], homes: "family homes and complexes",
    context: "Randburg families and landlords call us for painting, repairs and finishing work that is done properly the first time.",
    image: "/interior-painting-smooth-wall-finish-and-door.jpg", imageAlt: "Smooth painted interior walls in a Randburg home" },
  { slug: "roodepoort", name: "Roodepoort", places: ["Florida", "Constantia Kloof", "Weltevreden Park", "Wilgeheuwel"], homes: "family homes and smallholdings",
    context: "Roodepoort homes get repairs and installations from a team that arrives with a clear quote and finishes cleanly.",
    image: "/roof-tile-repairs-and-maintenance-after.avif", imageAlt: "Tiled roof after repairs and maintenance" },
  { slug: "pretoria", name: "Pretoria", places: ["Menlo Park", "Brooklyn", "Waterkloof", "Hatfield"], homes: "family homes, flats and offices",
    context: "Pretoria homes and offices call us for painting, drywall, ceilings, tiling, waterproofing and roof work, from small repairs to full installations.",
    image: "/shower-tiling-installation-with-corner-shelves.jpg", imageAlt: "Shower tiling installed in a Pretoria home" },
  { slug: "centurion", name: "Centurion", places: ["Irene", "Eldoraigne", "Lyttelton", "Highveld"], homes: "estates and security complexes",
    context: "Centurion estates and complexes use us for neat, reliable repairs and installations, from a leaking flat roof to a new ceiling design.",
    image: "/torch-on-waterproofing-flat-roof-after.avif", imageAlt: "Flat roof after torch on waterproofing" },
  { slug: "kempton-park", name: "Kempton Park", places: ["Bonaero Park", "Rhodesfield", "Glen Marais", "Birchleigh"], homes: "family homes and small commercial units",
    context: "We repair and install finishes for Kempton Park homes and small businesses, from painting and plastering to waterproofing.",
    image: "/drywall-partition-walls-office-passage.jpg", imageAlt: "Drywall partition walls in an office passage" },
  { slug: "edenvale", name: "Edenvale", places: ["Eastleigh", "Dowerglen", "Hurlingham", "Lombardy East"], homes: "family homes and complexes",
    context: "Edenvale homeowners and landlords call us for tidy, dependable repairs and installations.",
    image: "/staircase-tiling-installation.jpg", imageAlt: "Staircase tiling installation" },
  { slug: "bedfordview", name: "Bedfordview", places: ["Bedford Gardens", "Senderwood", "Linksfield", "Eastgate"], homes: "upmarket homes and apartments",
    context: "Bedfordview homes get precise finishes from us, including smooth Rhinolite walls, tiling, ceilings and painting.",
    image: "/passage-bulkhead-ceiling-and-smooth-painted-walls.jpg", imageAlt: "Passage bulkhead ceiling and smooth painted walls" },
  { slug: "boksburg", name: "Boksburg", places: ["Parkrand", "Witfield", "Beyers Park", "Sunward Park"], homes: "family homes and commercial properties",
    context: "Boksburg homes and commercial properties use Sithoma for repairs and installations, including roofs and waterproofing.",
    image: "/red-tile-roof-restoration-and-painting.jpg", imageAlt: "Red tile roof restoration and painting" },
]

export function getArea(slug: string) {
  return AREAS.find((a) => a.slug === slug)
}

export const WORK_TYPES = ["Repair", "New installation", "Not sure yet"] as const
export const PROPERTY_TYPES = ["Home", "Business", "Complex or estate"] as const

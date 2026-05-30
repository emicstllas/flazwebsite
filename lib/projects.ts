const img = {
  villaLakes:      "/images/pexels-ahmed-bahaa-2157317588-34823937.jpg",
  arabianRanches:  "/images/pexels-artbovich-7174108.jpg",
  damacOffice:     "/images/pexels-semih-basaran-353570345-29679172.jpg",
  fairwayApt:      "/images/pexels-ranamatloob567-34378030.jpg",
  jvcApartment:    "/images/pexels-ranamatloob567-34378029.jpg",
  palmVilla:       "/images/pexels-zak-mir-2158162344-35492984.jpg",
};

// Cycles through all images for 8-slot gallery placeholders
function galleryFor(startIndex: number): string[] {
  const all = Object.values(img);
  return Array.from({ length: 8 }, (_, i) => all[(startIndex + i) % all.length]);
}

export type Project = {
  id: string;
  title: string;
  desc: string;
  shortDesc: string;
  image: string;
  beforeImage?: string;
  gallery: string[];
  tags: string[];
  area: string;
  year: string;
  scope: string;
  duration: string;
};

export const projects: Project[] = [
  {
    id: "villa-lakes",
    title: "Garden-View Villa, The Lakes",
    desc: "Full interior overhaul — structural finishes, custom joinery, and folding glass doors that open to a private garden. Every material was sourced and approved before a single wall was touched.",
    shortDesc: "Full interior overhaul with custom joinery and folding glass doors.",
    image: img.villaLakes,
    beforeImage: img.fairwayApt,
    gallery: galleryFor(0),
    tags: ["Villa", "NOC", "MEP"],
    area: "The Lakes, Dubai",
    year: "2024",
    scope: "Design, MEP, Fit-out, NOC Approvals",
    duration: "14 weeks",
  },
  {
    id: "arabian-ranches",
    title: "Arabian Ranches Family Villa",
    desc: "Modern comfort meets oriental elegance across a complete renovation blending warm materials with precise craftsmanship. Structural changes were approved and executed within a single continuous build phase.",
    shortDesc: "Complete renovation blending modern comfort with oriental elegance.",
    image: img.arabianRanches,
    beforeImage: img.jvcApartment,
    gallery: galleryFor(1),
    tags: ["Villa", "Renovation"],
    area: "Arabian Ranches",
    year: "2024",
    scope: "Full Renovation, Interior Design, Structural",
    duration: "10 weeks",
  },
  {
    id: "damac-office",
    title: "DAMAC Smart Heights Office",
    desc: "Welcoming lounge, open work zones, and quiet meeting rooms built for daily use. The brief was a workspace that feels professional to clients and comfortable to the team — we delivered both without compromise.",
    shortDesc: "Functional workspace with lounge, open zones, and dedicated meeting rooms.",
    image: img.damacOffice,
    beforeImage: img.palmVilla,
    gallery: galleryFor(2),
    tags: ["Commercial", "Fit-out"],
    area: "Business Bay",
    year: "2025",
    scope: "Commercial Fit-out, MEP, Partitioning",
    duration: "8 weeks",
  },
  {
    id: "fairway-apt",
    title: "Fairway West Tower — Luxury Apartment",
    desc: "Design-and-build renovation with bespoke cabinetry, premium finishes, and fully coordinated FF&E throughout every room. The client wanted a show-home standard — delivered on schedule with zero snagging.",
    shortDesc: "Design-and-build with bespoke cabinetry and premium FF&E coordination.",
    image: img.fairwayApt,
    beforeImage: img.villaLakes,
    gallery: galleryFor(3),
    tags: ["Apartment", "Design", "Renovation"],
    area: "Dubai Hills",
    year: "2025",
    scope: "Design & Build, FF&E, Joinery, Plumbing",
    duration: "12 weeks",
  },
  {
    id: "jvc-apartment",
    title: "JVC Studio Conversion",
    desc: "Smart layout redesign converting a standard studio into a functional one-bedroom with built-in storage, a sliding partition wall, and modern finishes throughout. Proof that clever planning beats extra square footage.",
    shortDesc: "Layout redesign converting a studio into a functional one-bedroom.",
    image: img.jvcApartment,
    beforeImage: img.arabianRanches,
    gallery: galleryFor(4),
    tags: ["Apartment", "Renovation"],
    area: "Jumeirah Village Circle",
    year: "2025",
    scope: "Layout Redesign, Fit-out, Plumbing",
    duration: "6 weeks",
  },
  {
    id: "palm-villa",
    title: "Palm Jumeirah Waterfront Villa",
    desc: "High-end villa transformation featuring bespoke stonework, a panoramic pool deck, and a custom outdoor living area designed for the UAE climate. One of our most technically complex projects — completed ahead of schedule.",
    shortDesc: "High-end transformation with stonework, pool deck, and outdoor living area.",
    image: img.palmVilla,
    beforeImage: img.damacOffice,
    gallery: galleryFor(5),
    tags: ["Villa", "Luxury", "Outdoor"],
    area: "Palm Jumeirah",
    year: "2025",
    scope: "Full Renovation, Landscaping, Pool, Outdoor",
    duration: "20 weeks",
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

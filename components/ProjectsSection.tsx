import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "villa-lakes",
    title: "Garden-View Villa in The Lakes",
    desc: "Full interior upgrade with new finishes, custom furniture, and folding glass doors.",
    image: "/images/pexels-ahmed-bahaa-2157317588-34823937.jpg",
    tags: ["Villa", "NOC", "MEP", "Renovation"],
  },
  {
    id: "arabian-ranches",
    title: "Arabian Ranches Family Villa",
    desc: "Family villa renovation blending modern comfort with oriental elegance.",
    image: "/images/pexels-artbovich-7174108.jpg",
    tags: ["Villa", "NOC", "Renovation"],
  },
  {
    id: "damac-office",
    title: "DAMAC Smart Heights Office",
    desc: "Functional office with welcoming lounge, open work zone, and quiet meeting rooms.",
    image: "/images/pexels-semih-basaran-353570345-29679172.jpg",
    tags: ["Commercial", "MEP", "Fit-out"],
  },
  {
    id: "fairway-apt",
    title: "Luxury Apartment in Fairway West Tower",
    desc: "Design-and-build renovation with custom furniture and premium finishes.",
    image: "/images/pexels-ranamatloob567-34378030.jpg",
    tags: ["Apartment", "Design", "Renovation"],
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="relative overflow-hidden rounded-sm group" style={{ height: "clamp(320px, 35vw, 560px)" }}>

      {/* Logo notch — top center of the card */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
        <Image
          src="/logo.png"
          alt=""
          width={44}
          height={44}
          className="object-contain"
          style={{
            transform: "rotate(180deg)",
            filter: "brightness(0) invert(1)",
            mixBlendMode: "multiply",
          }}
        />
      </div>

      {/* Full-bleed image */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Tall gradient that covers the whole bottom half smoothly */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 via-40% to-transparent" />

      {/* Frosted glass — covers same area as gradient, no visible edge */}
      <div
        className="absolute bottom-0 left-0 right-0 px-5 pt-24 pb-5 overflow-visible"
        style={{
          background: "transparent",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          maskImage: "linear-gradient(to top, black 70%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 70%, transparent 100%)",
        }}
      >
        {/* Title + tags inline */}
        <div className="flex items-start justify-between gap-3 mb-1.5">
          <h3 className="text-white text-[16px] md:text-[20px] lg:text-[28px] font-medium leading-snug">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-1.5 shrink-0">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-2.5 py-0.5 rounded-sm tracking-wide"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.85)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-white/60 text-[12px] md:text-[14px] lg:text-[20px] font-light leading-relaxed mb-4">
          {project.desc}
        </p>

        {/* View project button — text only, white pill on hover */}
        <Link
          href="#projects"
          className="inline-flex items-center gap-2 text-[13px] md:text-[16px] lg:text-[20px] font-medium px-5 py-2 rounded-sm transition-all text-white/80 hover:bg-white hover:text-[var(--flaz-dark)]"
        >
          View project
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="py-14">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-[var(--flaz-dark)] text-left mb-12 tracking-tight">
        Explore our recent transformations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      {/* View all CTA */}
      <div className="flex justify-center mt-10">
        <Link
          href="#projects"
          className="inline-flex items-center gap-2 text-sm font-medium px-7 py-3 rounded-sm border transition-colors hover:bg-[var(--flaz-teal)] hover:text-white hover:border-[var(--flaz-teal)]"
          style={{ borderColor: "var(--flaz-teal)", color: "var(--flaz-teal)" }}
        >
          View all projects
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </section>
  );
}


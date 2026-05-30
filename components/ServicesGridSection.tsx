const services = [
  {
    title: "Air-Conditioning, Ventilation & Air Filtration Systems",
    desc: "Professional HVAC installation, servicing, and maintenance for residential and commercial properties.",
  },
  {
    title: "Plumbing & Sanitary Installation",
    desc: "Complete plumbing systems and sanitary installations across all property types.",
  },
  {
    title: "Floor & Wall Tiling Works",
    desc: "Expert tiling for floors and walls using premium materials and precision finishes.",
  },
  {
    title: "Painting Contracting",
    desc: "Interior and exterior painting with high-quality coatings and professional finishing.",
  },
  {
    title: "Carpentry & Wood Flooring Works",
    desc: "Custom carpentry and wood flooring installations tailored to your property's design.",
  },
  {
    title: "Wallpaper Fixing Works",
    desc: "Professional wallpaper installation and fixing for all interior spaces.",
  },
  {
    title: "False Ceiling & Light Partitions Installation",
    desc: "Design and installation of false ceilings and light partition systems for modern interiors.",
  },
  {
    title: "Plaster Works",
    desc: "High-quality plastering for smooth, durable wall and ceiling finishes.",
  },
];

export default function ServicesGridSection() {
  return (
    <section className="py-14">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">
        <div>
          <p
            className="text-[10px] uppercase tracking-[0.2em] font-medium mb-4"
            style={{ color: "var(--flaz-teal)" }}
          >
            Full scope
          </p>
          <h2
            className="font-medium text-[var(--flaz-dark)] tracking-tight leading-tight"
            style={{ fontSize: "clamp(22px, 3.2vw, 46px)" }}
          >
            Everything under one roof
          </h2>
        </div>
        <p
          className="text-[13px] font-light text-gray-500 leading-relaxed"
          style={{ maxWidth: "38ch" }}
        >
          Every trade, fully coordinated. One team, one contract, zero gaps between disciplines.
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ borderTop: "1px solid rgba(44,44,44,0.1)" }}
      >
        {services.map((s, i) => (
          <div
            key={s.title}
            className="flex gap-5 py-7"
            style={{
              borderBottom: "1px solid rgba(44,44,44,0.08)",
              borderRight: i % 2 === 0 ? "1px solid rgba(44,44,44,0.08)" : undefined,
              paddingRight: i % 2 === 0 ? "clamp(16px, 3vw, 48px)" : 0,
              paddingLeft: i % 2 !== 0 ? "clamp(16px, 3vw, 48px)" : 0,
            }}
          >
            <span
              className="text-[11px] font-medium tabular-nums shrink-0 pt-0.5"
              style={{ color: "var(--flaz-teal)", minWidth: "22px" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3
                className="font-medium text-[var(--flaz-dark)] leading-snug mb-2"
                style={{ fontSize: "clamp(14px, 1.4vw, 18px)" }}
              >
                {s.title}
              </h3>
              <p className="text-[13px] font-light text-gray-500 leading-relaxed">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Air-Conditioning, Ventilations & Air Filtration Systems Installation & Maintenance",
    desc: "Professional HVAC installation, servicing, and maintenance for residential and commercial properties.",
  },
  {
    title: "Plumbing & Sanitary Installation",
    desc: "Complete plumbing systems and sanitary installations across all property types.",
  },
  {
    title: "Floor & Wall Tiling Works",
    desc: "Expert tiling solutions for floors and walls using premium materials and precision finishes.",
  },
  {
    title: "Painting Contracting",
    desc: "Interior and exterior painting services with high-quality coatings and professional finishing.",
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
    desc: "High-quality plastering services for smooth, durable wall and ceiling finishes.",
  },
];

export default function ServicesGridSection() {
  return (
    <section className="py-14">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-[var(--flaz-dark)] text-left mb-12 tracking-tight">
        Learn more about our services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {services.map((s) => (
          <div key={s.title} className="relative bg-white rounded-sm pt-10 px-6 pb-6 flex flex-col">
            {/* Logo notch — inverted downward, inner gaps transparent = cut-in effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <Image
                src="/logo.png"
                alt=""
                width={44}
                height={44}
                className="object-contain"
                style={{
                  transform: "rotate(180deg)",
                  filter: "brightness(0) invert(1) sepia(6%) saturate(200%) brightness(0.93)",
                  mixBlendMode: "multiply",
                }}
              />
            </div>

            <h3 className="text-[20px] md:text-[26px] lg:text-[32px] font-medium text-[var(--flaz-dark)] mb-3 leading-snug">
              {s.title}
            </h3>
            <p className="text-[13px] md:text-[16px] lg:text-[20px] font-light text-gray-500 leading-relaxed flex-1 mb-5">
              {s.desc}
            </p>
            <Link
              href="#services"
              className="inline-flex items-center gap-1 text-sm font-medium hover:opacity-70 transition-opacity mt-auto"
              style={{ color: "var(--flaz-teal)" }}
            >
              Explore service
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

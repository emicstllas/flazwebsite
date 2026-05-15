import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "villa",
    title: "Luxury villa transformations",
    desc: "Complete villa renovation — from concept and layout to finishes and furnishing.",
    image: "/images/pexels-ranamatloob567-34378029.jpg",
    dark: false,
  },
  {
    id: "commercial",
    title: "Commercial space reinvention",
    desc: "Full renovation and fit-out for offices, showrooms, and retail spaces — from planning to handover.",
    image: "/images/pexels-semih-basaran-353570345-29679172.jpg",
    dark: false,
  },
  {
    id: "apartment",
    title: "Modern apartment fit-out",
    desc: "Upgrade your apartment with smart layouts, premium materials, and turnkey execution.",
    image: "/images/pexels-artbovich-7174108.jpg",
    dark: false,
  },
  {
    id: "signature",
    title: "Signature services",
    desc: "Developed and executed in collaboration with our award-winning partner design bureau.",
    image: "/images/pexels-zak-mir-2158162344-35492984.jpg",
    dark: true,
  },
];

function ExploreLink({ dark }: { dark: boolean }) {
  return (
    <Link
      href="#services"
      className="inline-flex items-center gap-1.5 text-[13px] md:text-[16px] lg:text-[20px] font-medium tracking-wide transition-opacity hover:opacity-60 mt-auto pt-5"
      style={{ color: dark ? "rgba(255,255,255,0.8)" : "var(--flaz-teal)" }}
    >
      Explore service
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </Link>
  );
}

function LightCard({ service }: { service: (typeof services)[0] }) {
  return (
    <div
      className="rounded-sm flex flex-col overflow-hidden group"
      style={{ backgroundColor: "#ffffff", height: "clamp(380px, 40vw, 612px)" }}
    >
      {/* Text area */}
      <div className="px-7 pt-7 pb-5 flex flex-col" style={{ minHeight: "180px" }}>
        <h3 className="text-[20px] md:text-[26px] lg:text-[32px] font-medium text-[var(--flaz-dark)] leading-snug mb-3">
          {service.title}
        </h3>
        <p className="text-[13px] md:text-[16px] lg:text-[20px] font-light text-gray-500 leading-relaxed">
          {service.desc}
        </p>
        <ExploreLink dark={false} />
      </div>

      {/* Image — fills remaining space */}
      <div className="relative flex-1 overflow-visible">
        {/* Logo notch — white, blends into card */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <Image
            src="/logo.png"
            alt=""
            width={48}
            height={48}
            className="object-contain"
            style={{
              transform: "rotate(180deg)",
              filter: "brightness(0) invert(1)",
              mixBlendMode: "multiply",
            }}
          />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}

function DarkCard({ service }: { service: (typeof services)[0] }) {
  return (
    <div
      className="rounded-sm flex flex-col overflow-hidden relative group"
      style={{ backgroundColor: "#1c1c1c", height: "clamp(380px, 40vw, 612px)" }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover opacity-25 transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c] via-[#1c1c1c]/80 to-transparent" />
      </div>

      {/* Logo notch — white, blends into dark card top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <Image
          src="/logo.png"
          alt=""
          width={48}
          height={48}
          className="object-contain"
          style={{
            transform: "rotate(180deg)",
            filter: "brightness(0) invert(1)",
            mixBlendMode: "multiply",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-7 pt-7 pb-8 flex flex-col h-full">
        <h3 className="text-[20px] md:text-[26px] lg:text-[32px] font-medium text-white leading-snug mb-3">
          {service.title}
        </h3>
        <p className="text-[13px] md:text-[16px] lg:text-[20px] font-light text-white/50 leading-relaxed max-w-xs">
          {service.desc}
        </p>
        <ExploreLink dark={true} />
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="py-14">
      <h2 className="text-[26px] md:text-[38px] lg:text-[52px] font-medium text-[var(--flaz-dark)] leading-tight mb-10 tracking-tight">
        We provide full-cycle services<br />for all property types
      </h2>

      <div className="flex flex-col gap-4">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LightCard service={services[0]} />
          <LightCard service={services[1]} />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LightCard service={services[2]} />
          <DarkCard service={services[3]} />
        </div>
      </div>
    </section>
  );
}

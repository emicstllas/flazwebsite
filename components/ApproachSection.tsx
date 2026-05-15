import Link from "next/link";

const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    before: "Each project is planned with exceptional ",
    highlight: "care to avoid overload",
    after: "",
    cta: true,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="9" y1="7" x2="15" y2="7" />
        <line x1="9" y1="11" x2="15" y2="11" />
        <line x1="9" y1="15" x2="12" y2="15" />
      </svg>
    ),
    before: "Dedicated ",
    highlight: "project manager and site engineer",
    after: " for every project",
    cta: false,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    before: "",
    highlight: "Weekly progress reports",
    after: " with photo updates",
    cta: false,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="15" height="11" rx="2" />
        <polyline points="17 8 22 8 22 16 17 16" />
        <line x1="8" y1="21" x2="8" y2="14" />
        <line x1="5" y1="21" x2="11" y2="21" />
      </svg>
    ),
    before: "",
    highlight: "Transparent communication",
    after: " and planning",
    cta: false,
  },
];

export default function ApproachSection() {
  return (
    <section className="py-14">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-[var(--flaz-dark)] mb-12 tracking-tight">
        Our approach
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-300">
        {pillars.map((p, i) => (
          <div
            key={i}
            className="flex flex-col gap-6 pr-0 xl:pr-10 pl-0 xl:pl-10 first:pl-0 last:pr-0 py-6 xl:py-0"
          >
            <span className="text-[var(--flaz-dark)]">{p.icon}</span>

            <p className="text-[18px] md:text-[24px] lg:text-[32px] text-[var(--flaz-dark)] leading-snug font-medium">
              {p.before && <span>{p.before}</span>}
              <span style={{ color: "var(--flaz-teal)" }}>{p.highlight}</span>
              {p.after && <span>{p.after}</span>}
            </p>

            {p.cta && (
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-[var(--flaz-dark)] hover:bg-black text-white text-sm font-medium px-5 py-3 rounded-sm transition-colors self-start"
              >
                Get free consultation
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

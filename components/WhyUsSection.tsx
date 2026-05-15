const stats = [
  {
    before: "Expert solutions for ",
    highlight: "modern technical needs",
    rest: "",
  },
  {
    before: "Committed to delivering ",
    highlight: "exceptional outcomes",
    rest: "",
  },
  {
     before: "Powered by a team that ",
    highlight: "gets things done",
    rest: "",
  },
  {
    before: "We take care of permits —",
    highlight: "start to finish",
    rest: "",
  },
  {
    before: "Every project comes with ",
    highlight: "trusted warranty support",
    rest: "",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-14">
      <h2 className="text-[30px] md:text-[44px] lg:text-[64px] font-medium text-[var(--flaz-dark)] mb-10 tracking-tight">
        Why us
      </h2>

      {/* Stats row */}
      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-300">
        {stats.map((stat, i) => (
          <div key={i} className="flex-1 pr-0 md:pr-8 pl-0 md:pl-8 first:pl-0 last:pr-0 py-4 md:py-0">
            <p className="text-[16px] md:text-[19px] lg:text-[22px] leading-snug font-medium text-[var(--flaz-dark)]">
              {stat.before && <span>{stat.before}</span>}
              <span style={{ color: "var(--flaz-teal)" }}>{stat.highlight}</span>
              {stat.rest && <span>{stat.rest}</span>}
            </p>
          </div>
        ))}
      </div>

      
    </section>
  );
}

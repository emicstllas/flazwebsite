import Link from "next/link";

const steps = [
  {
    title: "Survey & scoping",
    body: "We visit the site, assess the full scope, and produce a detailed written quotation — fixed price agreed before anything starts. No estimates, no surprises.",
  },
  {
    title: "Dedicated oversight",
    body: "Every project gets a named project manager and site engineer assigned from day one. One person to call, one person accountable for the entire job.",
  },
  {
    title: "Live progress updates",
    body: "Weekly photo reports and progress calls so you always know exactly where your project stands — whether you're on site or overseas.",
  },
  {
    title: "Clean handover",
    body: "A final walkthrough, snag list cleared, and all documentation handed over. We don't close a project until you're satisfied.",
  },
];

export default function ApproachSection() {
  return (
    <section className="py-14">
      <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-24">

        {/* Left — sticky header + CTA */}
        <div className="lg:sticky lg:self-start" style={{ top: "88px" }}>
          <p
            className="text-[10px] uppercase tracking-[0.2em] font-medium mb-4"
            style={{ color: "var(--flaz-teal)" }}
          >
            How we work
          </p>
          <h2
            className="font-medium text-[var(--flaz-dark)] tracking-tight leading-tight mb-6"
            style={{ fontSize: "clamp(24px, 3.4vw, 48px)" }}
          >
            Structured delivery.<br />Every time.
          </h2>
          <p
            className="font-light text-gray-500 leading-relaxed mb-10"
            style={{ fontSize: "clamp(13px, 1.3vw, 16px)", maxWidth: "36ch" }}
          >
            Every Flaz project follows the same four-stage process — so you always know what happens next, who is responsible, and where your project stands.
          </p>
          <Link
            href="#contact"
            className="flaz-btn-teal inline-flex items-center gap-2 text-[13px] font-medium px-5 py-3 rounded-sm text-white"
          >
            Get free consultation
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        {/* Right — numbered steps */}
        <div>
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex gap-7 py-8"
              style={{ borderTop: "1px solid rgba(44,44,44,0.1)" }}
            >
              <span
                className="text-[11px] font-medium tabular-nums shrink-0 pt-1"
                style={{ color: "var(--flaz-teal)", letterSpacing: "0.05em", minWidth: "22px" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3
                  className="font-medium text-[var(--flaz-dark)] mb-2 leading-snug"
                  style={{ fontSize: "clamp(15px, 1.4vw, 18px)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="font-light text-gray-500 leading-relaxed"
                  style={{ fontSize: "clamp(13px, 1.2vw, 15px)", maxWidth: "52ch" }}
                >
                  {step.body}
                </p>
              </div>
            </div>
          ))}
          {/* Bottom border */}
          <div style={{ borderTop: "1px solid rgba(44,44,44,0.1)" }} />
        </div>

      </div>
    </section>
  );
}

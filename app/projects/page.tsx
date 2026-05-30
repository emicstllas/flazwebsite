import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import ProjectsGrid from "@/components/ProjectsGrid";
import ContactFooter from "@/components/ContactFooter";

export const metadata: Metadata = {
  title: "Projects — Flaz Technical Services",
  description:
    "Browse completed villa, apartment, and commercial renovations across Dubai. Every project delivered from a single point of contact.",
};

export default function ProjectsPage() {
  return (
    <main>
      {/* Page hero */}
      <div className="pt-16 pb-0">
        {/* Eyebrow */}
        <div className="inline-flex items-center mb-8">
          <span
            className="text-[10px] uppercase tracking-[0.2em] font-medium px-3 py-1 rounded-full"
            style={{
              border: "1px solid rgba(77,200,200,0.35)",
              color: "var(--flaz-teal)",
              background: "rgba(77,200,200,0.07)",
            }}
          >
            Portfolio
          </span>
        </div>

        {/* Heading + sub */}
        <div className="flex items-end justify-between gap-8 flex-wrap mb-16">
          <h1
            className="font-medium text-[var(--flaz-dark)] leading-none tracking-tight"
            style={
              {
                fontSize: "clamp(36px, 5vw, 64px)",
                textWrap: "balance",
              } as React.CSSProperties
            }
          >
            Every project,<br />
            <span style={{ fontWeight: 300, color: "rgba(44,44,44,0.45)" }}>
              built from scratch.
            </span>
          </h1>
          <p
            className="text-[14px] font-light text-gray-500 leading-relaxed"
            style={{ maxWidth: "40ch" }}
          >
            From permit approvals to final handover — each project is managed by a single team so nothing falls through the cracks.
          </p>
        </div>

        {/* Stats strip — left-aligned, editorial, no identical-cell grid */}
        <div
          className="flex flex-wrap"
          style={{ borderTop: "1px solid rgba(44,44,44,0.1)" }}
        >
          {[
            { value: `${projects.length}+`, label: "Completed projects", note: "across Dubai" },
            { value: "100%", label: "NOC success rate", note: "zero rejections" },
            { value: "8–20 wks", label: "Average delivery", note: "design to handover" },
            { value: "1", label: "Point of contact", note: "start to finish" },
          ].map(({ value, label, note }, i) => (
            <div
              key={label}
              className="flex-1 min-w-[140px] pt-7 pb-10"
              style={{
                paddingRight: "clamp(20px, 2.5vw, 48px)",
                paddingLeft: i === 0 ? 0 : "clamp(20px, 2.5vw, 48px)",
                borderLeft: i > 0 ? "1px solid rgba(44,44,44,0.08)" : undefined,
              }}
            >
              <p
                className="font-medium text-[var(--flaz-dark)] leading-none mb-2"
                style={{ fontSize: "clamp(28px, 3.2vw, 44px)" }}
              >
                {value}
              </p>
              <p className="text-[12px] font-medium text-[var(--flaz-dark)] mb-0.5">{label}</p>
              <p className="text-[11px] font-light text-gray-400">{note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Grid */}
      <ProjectsGrid projects={projects} />

      {/* CTA bar */}
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-6 py-12 mt-8 mb-4"
        style={{ borderTop: "1px solid rgba(44,44,44,0.1)", borderBottom: "1px solid rgba(44,44,44,0.1)" }}
      >
        <div>
          <p className="font-medium text-[var(--flaz-dark)] text-[18px] md:text-[22px] tracking-tight mb-1">
            Ready to start your own project?
          </p>
          <p className="text-[13px] font-light text-gray-500">
            Leave your details and we will call you within 24 hours.
          </p>
        </div>
        <a
          href="#contact"
          className="flaz-btn-teal inline-flex items-center gap-2.5 text-[13px] font-medium text-white rounded-sm px-7 py-3 shrink-0"
        >
          Get in touch
          <span className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)" }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </a>
      </div>

      <ContactFooter />
    </main>
  );
}

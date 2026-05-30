"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "Do you offer full-cycle technical and fit-out services?",
    a: "Yes. We handle everything from initial consultation and design through to execution and handover — including electrical, plumbing, civil works, MEP, and finishing.",
  },
  {
    q: "What is the step-by-step process for a project?",
    a: "We start with a site survey and consultation, then prepare a detailed scope and quotation. Once approved, we assign a project manager, begin works, and provide weekly progress updates until final handover.",
  },
  {
    q: "Who manages and handles the project process?",
    a: "Every project is assigned a dedicated project manager and site engineer who oversee the full scope, coordinate trades, and serve as your single point of contact throughout.",
  },
  {
    q: "Do I need approvals or NOCs for my project?",
    a: "For most renovation and fit-out works in Dubai you will need NOC approvals from the relevant authorities or your developer. Our team handles all permit applications and submissions on your behalf.",
  },
  {
    q: "How long does a project typically take?",
    a: "Timelines vary by scope — a standard apartment fit-out takes 4–8 weeks, while larger villa or commercial projects can range from 2–6 months. We provide a detailed schedule before work begins.",
  },
  {
    q: "Can I live in the property during the works?",
    a: "In many cases yes, depending on the scope. For full fit-outs or major civil works we recommend vacating temporarily. We discuss this during the consultation and plan accordingly to minimise disruption.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-14">
      {/* Header */}
      <div className="mb-12">
        <p
          className="text-[10px] uppercase tracking-[0.2em] font-medium mb-4"
          style={{ color: "var(--flaz-teal)" }}
        >
          Common questions
        </p>
        <h2
          className="font-medium text-[var(--flaz-dark)] tracking-tight leading-tight"
          style={{ fontSize: "clamp(24px, 3.4vw, 48px)" }}
        >
          Everything you need to know
        </h2>
      </div>

      {/* Side-by-side layout */}
      <div
        className="grid grid-cols-1 lg:grid-cols-[5fr_7fr]"
        style={{ borderTop: "1px solid rgba(44,44,44,0.1)" }}
      >
        {/* Left — question list */}
        <div style={{ borderRight: "1px solid rgba(44,44,44,0.08)" }}>
          {faqs.map((item, i) => {
            const isActive = i === active;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="w-full flex items-start gap-5 py-5 pr-0 lg:pr-10 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--flaz-teal)]"
                style={{ borderBottom: "1px solid rgba(44,44,44,0.08)" }}
              >
                <span
                  className="text-[11px] font-medium tabular-nums shrink-0 pt-0.5 transition-colors duration-200"
                  style={{ color: isActive ? "var(--flaz-teal)" : "rgba(44,44,44,0.25)", minWidth: "22px" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-[14px] md:text-[15px] leading-snug transition-colors duration-200"
                  style={{
                    color: isActive ? "var(--flaz-dark)" : "rgba(44,44,44,0.55)",
                    fontWeight: isActive ? 500 : 300,
                  }}
                >
                  {item.q}
                </span>
                {isActive && (
                  <span className="ml-auto shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ color: "var(--flaz-teal)" }}>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Right — answer panel */}
        <div className="pt-8 lg:pt-10 lg:pl-16 lg:sticky lg:self-start" style={{ top: "88px" }}>
          <div key={active} className="faq-answer-enter">
            <p
              className="font-medium text-[var(--flaz-dark)] leading-snug mb-5"
              style={{ fontSize: "clamp(17px, 1.8vw, 24px)" }}
            >
              {faqs[active].q}
            </p>
            <p
              className="font-light text-gray-500 leading-relaxed mb-10"
              style={{ fontSize: "clamp(13px, 1.3vw, 16px)", maxWidth: "54ch" }}
            >
              {faqs[active].a}
            </p>

            {/* CTA strip */}
            <div
              className="flex items-center gap-4 pt-8"
              style={{ borderTop: "1px solid rgba(44,44,44,0.08)" }}
            >
              <p className="text-[12px] font-light text-gray-400">
                Still have questions?
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-[12px] font-medium transition-colors"
                style={{ color: "var(--flaz-teal)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--flaz-teal-dark)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--flaz-teal)")}
              >
                Talk to our team
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

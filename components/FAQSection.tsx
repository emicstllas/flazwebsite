"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do you offer full-cycle technical and fit-out services?",
    a: "Yes. We handle everything from initial consultation and design through to execution and handover — including electrical, plumbing, civil works, MEP, and finishing.",
  },
  {
    q: "What is the step-by-step process for a technical services project?",
    a: "We start with a site survey and consultation, then prepare a detailed scope and quotation. Once approved, we assign a project manager, begin works, and provide weekly progress updates until final handover.",
  },
  {
    q: "Who will manage and handle the project process?",
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
    q: "Can I live or operate in the property during the works?",
    a: "In many cases yes, depending on the scope. For full fit-outs or major civil works we recommend vacating temporarily. We discuss this during the consultation and plan accordingly to minimise disruption.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-gray-200">
      <button
        className="w-full flex items-center justify-between gap-6 py-6 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-[18px] md:text-[24px] lg:text-[32px] font-medium text-[var(--flaz-dark)]">{q}</span>
        <span
          className="shrink-0 w-8 h-8 rounded-sm-full border border-gray-300 flex items-center justify-center transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>

      {open && (
        <p className="pb-6 text-[13px] md:text-[16px] lg:text-[20px] font-light text-gray-500 leading-relaxed max-w-3xl">
          {a}
        </p>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-14">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[var(--flaz-dark)] mb-8 tracking-tight">
        FAQ
      </h2>

      <div>
        {faqs.map((item) => (
          <FAQItem key={item.q} q={item.q} a={item.a} />
        ))}
        <div className="border-t border-gray-200" />
      </div>
    </section>
  );
}

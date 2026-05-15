"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Our team", href: "#team" },
  { label: "Blog", href: "#blog" },
];

const serviceLinks = [
  "Luxury villa transformations",
  "Commercial space renovation",
  "Modern apartment fit-out",
  "Signature services",
];

const moreServiceLinks = [
  "Smart home integration",
  "Electrical works",
  "Plumbing & sanitary",
  "NOC and permits",
  "Fit-out and renovation",
  "Procurement and furnishing",
];

export default function ContactFooter() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <section
      className="mt-14"
      style={{
        backgroundColor: "#1a1a1a",
        marginLeft: "calc(clamp(16px, calc(-57px + 19.5vw), 318px) * -1)",
        marginRight: "calc(clamp(16px, calc(-57px + 19.5vw), 318px) * -1)",
        paddingLeft: "clamp(16px, calc(-57px + 19.5vw), 318px)",
        paddingRight: "clamp(16px, calc(-57px + 19.5vw), 318px)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[520px]">

        {/* Left — Contact */}
        <div className="py-14 pr-0 lg:pr-16 flex flex-col justify-between">
          <div>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-medium text-white leading-tight mb-3">
              Ready to transform<br />your property?
            </h2>
            <p className="text-white/50 text-sm mb-8">
              Leave your contact details and we will contact you shortly.
            </p>

            {/* Form */}
            <div className="flex flex-col gap-3 max-w-sm">
              <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white text-gray-800 text-sm px-4 py-3 rounded-sm outline-none placeholder:text-gray-400"
              />
              <div className="flex items-center bg-white rounded-sm overflow-hidden">
                <span className="pl-4 pr-2 text-sm text-gray-600 border-r border-gray-200 py-3 shrink-0">
                  🇦🇪 +971
                </span>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 text-sm px-3 py-3 outline-none text-gray-800 placeholder:text-gray-400"
                />
              </div>
              <button
                className="w-full py-3 rounded-sm text-white text-sm font-medium tracking-wide transition-colors"
                style={{ backgroundColor: "var(--flaz-teal)" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--flaz-teal-dark)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--flaz-teal)")}
              >
                Send your contact
              </button>
              <p className="text-white/30 text-xs leading-relaxed">
                By submitting, you agree to our privacy policy and consent to being contacted by our team.
              </p>
            </div>
          </div>

          {/* Bottom contact info + logo */}
          <div className="mt-10 flex flex-col gap-6">
            <div className="flex flex-col gap-1.5">
              <a href="tel:+97146086468" className="text-white/70 text-sm hover:text-white transition-colors">
                +971 (4) 608 6468
              </a>
              <a href="mailto:welcome@flaz-group.ae" className="text-white/70 text-sm hover:text-white transition-colors">
                welcome@flaz-group.ae
              </a>
              <div className="flex gap-3 mt-1">
                <a href="https://wa.me/971542589881" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                  <WhatsAppIcon />
                </a>
              </div>
            </div>

            {/* Logo + room image */}
            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt="Flaz" width={48} height={48} className="object-contain" />
              <div className="relative w-32 h-20 rounded-sm overflow-hidden bg-gray-700">
                <Image src="/images/pexels-artbovich-7174108.jpg" alt="Project" fill className="object-cover opacity-70" sizes="128px" />
              </div>
            </div>
          </div>
        </div>

        {/* Right — Footer nav */}
        <div className="py-14 pl-0 lg:pl-16 lg:border-l border-white/10 flex flex-col justify-between">
          <div>
            <p className="text-white/40 text-xs mb-6 leading-relaxed">
              Office 11, Floor 12A, I-Rise Tower, Dubai
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Navigation */}
              <div>
                <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Navigation</p>
                <ul className="flex flex-col gap-2.5">
                  {navLinks.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-white/70 text-sm hover:text-white transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Services</p>
                <ul className="flex flex-col gap-2.5">
                  {serviceLinks.map((l) => (
                    <li key={l}>
                      <Link href="#services" className="text-white/70 text-sm hover:text-white transition-colors leading-snug block">
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* More services */}
              <div>
                <p className="text-white/30 text-xs uppercase tracking-widest mb-4">More services</p>
                <ul className="flex flex-col gap-2.5">
                  {moreServiceLinks.map((l) => (
                    <li key={l}>
                      <Link href="#services" className="text-white/70 text-sm hover:text-white transition-colors leading-snug block">
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-white/20 text-xs mt-10">
            © {new Date().getFullYear()} Flaz Technical Services. All rights reserved.
          </p>
        </div>

      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

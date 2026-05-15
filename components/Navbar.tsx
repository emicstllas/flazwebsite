"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Our Team", href: "#team" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-200/60"
      style={{ backgroundColor: "#ECEAE6" }}
    >
      {/* Inner row — padded to match page content */}
      <div
        className="h-[60px] md:h-[72px] lg:h-[88px] flex items-center justify-between"
        style={{
          paddingLeft: "clamp(16px, calc(-57px + 19.5vw), 318px)",
          paddingRight: "clamp(16px, calc(-57px + 19.5vw), 318px)",
        }}
      >
        {/* Logo — small icon on mobile, full logo+name on desktop */}
        <Link href="/" className="flex items-center shrink-0">
          {/* Mobile: icon only */}
          <Image
            src="/logo.png"
            alt="Flaz"
            width={36}
            height={36}
            className="block lg:hidden w-[32px] h-[32px] object-contain"
            priority
          />
          {/* Desktop: full logo + name */}
          <Image
            src="/images/flazlogo&name.png"
            alt="Flaz Technical Services"
            width={280}
            height={64}
            className="hidden lg:block h-[52px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[16px] font-light text-gray-600 hover:text-[var(--flaz-dark)] transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="https://wa.me/971542589881"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[16px] font-light text-gray-500 hover:text-[var(--flaz-teal)] transition-colors"
          >
            <WhatsAppIcon size={16} />
            <span>+971 54 258 9881</span>
          </a>
          <Link
            href="#contact"
            className="text-[16px] font-medium px-5 py-2.5 rounded-sm tracking-wide whitespace-nowrap transition-colors"
            style={{ backgroundColor: "var(--flaz-teal)", color: "white" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--flaz-teal-dark)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--flaz-teal)")}
          >
            Get free consultation
          </Link>
        </div>

        {/* Mobile right — WhatsApp + Contact us + Burger */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="https://wa.me/971542589881"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 hover:text-[var(--flaz-teal)] transition-colors"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon size={20} />
          </a>
          <Link
            href="#contact"
            className="text-[16px] font-medium px-3 py-2 rounded-sm tracking-wide whitespace-nowrap"
            style={{ backgroundColor: "var(--flaz-dark)", color: "white" }}
          >
            Contact us
          </Link>
          <button
            className="p-2 text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="lg:hidden w-full border-t border-gray-200/60"
          style={{ backgroundColor: "#ECEAE6" }}
        >
          <div
            className="py-5 flex flex-col"
            style={{
              paddingLeft: "clamp(16px, calc(-57px + 19.5vw), 318px)",
              paddingRight: "clamp(16px, calc(-57px + 19.5vw), 318px)",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[16px] font-light text-gray-700 hover:text-[var(--flaz-teal)] transition-colors py-3.5 border-b border-gray-200/50"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-5">
              <Link
                href="#contact"
                className="block text-[16px] font-medium px-5 py-3 rounded-sm text-center tracking-wide"
                style={{ backgroundColor: "var(--flaz-teal)", color: "white" }}
                onClick={() => setMenuOpen(false)}
              >
                Get free consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

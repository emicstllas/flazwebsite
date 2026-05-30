"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction === "right" ? 340 : -340, behavior: "smooth" });
  };

  const prev = useCallback(() => setActiveIndex((i) => (i !== null && i > 0 ? i - 1 : i)), []);
  const next = useCallback(
    () => setActiveIndex((i) => (i !== null && i < images.length - 1 ? i + 1 : i)),
    [images.length]
  );
  const close = useCallback(() => setActiveIndex(null), []);

  return (
    <>
      <div
        className="pb-16"
        style={{ borderTop: "1px solid rgba(44,44,44,0.1)", paddingTop: "clamp(28px, 3.5vw, 48px)" }}
      >
        {/* Section header */}
        <div className="flex items-center justify-between mb-7">
          <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-400">
            Project gallery
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{ border: "1px solid rgba(44,44,44,0.15)", background: "transparent" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(44,44,44,0.06)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{ border: "1px solid rgba(44,44,44,0.15)", background: "transparent" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(44,44,44,0.06)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-1 hide-scrollbar"
        >
          {images.map((src, i) => (
            <button
              key={i}
              className="group relative flex-none overflow-hidden focus:outline-none"
              style={{
                width: "clamp(200px, 22vw, 310px)",
                aspectRatio: "4/3",
                borderRadius: "3px",
                border: "1px solid rgba(44,44,44,0.1)",
                flexShrink: 0,
              }}
              onClick={() => setActiveIndex(i)}
              aria-label={`View photo ${i + 1}`}
            >
              <Image
                src={src}
                alt={`${title} — photo ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                sizes="310px"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(14,14,14,0.22)" }}
              >
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(44,44,44,0.8)" strokeWidth="2" strokeLinecap="round">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </span>
              </div>

              {/* Index label */}
              <div
                className="absolute bottom-2.5 right-2.5 text-[10px] font-medium tabular-nums"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(14,14,14,0.93)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
          onClick={close}
        >
          {/* Image container */}
          <div
            className="relative"
            style={{ width: "min(90vw, 1280px)", aspectRatio: "16/9" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex]}
              alt={`${title} — photo ${activeIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          {/* Counter */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.18em] font-medium"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </div>

          {/* Prev */}
          {activeIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous photo"
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.12)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {/* Next */}
          {activeIndex < images.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next photo"
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.12)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
          )}

          {/* Close */}
          <button
            onClick={close}
            aria-label="Close gallery"
            className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.12)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

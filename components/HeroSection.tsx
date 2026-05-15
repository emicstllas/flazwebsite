"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    src: "/images/pexels-artbovich-7174105.jpg",
    alt: "Flaz Technical Services project",
  },
  {
    src: "/images/pexels-ranamatloob567-34378029.jpg",
    alt: "Flaz Technical Services project",
  },
  {
    src: "/images/pexels-semih-basaran-353570345-29679172.jpg",
    alt: "Flaz Technical Services project",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="flex flex-col">

      {/* SVG clip-path definition — same V-notch as reference site */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="0"
        height="0"
        style={{ position: "absolute" }}
      >
        <defs>
          <clipPath id="carousel-clip" clipPathUnits="objectBoundingBox">
            <path d="M1,0l0,0.9428571428571428c0,0.03155857142857143,-0.0124375,0.05714285714285714,-0.027777777777777776,0.05714285714285714l-0.4396701388888889,0c-0.0072875,0,-0.014283333333333334,-0.005891428571428571,-0.019478472222222223,-0.016404285714285715l-0.013073611111111112,-0.026452857142857143l-0.013073611111111112,0.026452857142857143c-0.005195138888888889,0.010512857142857143,-0.012190972222222223,0.016404285714285715,-0.019478472222222223,0.016404285714285715l-0.4396701388888889,0c-0.015340972222222223,0,-0.027777777777777776,-0.025584285714285712,-0.027777777777777776,-0.05714285714285714l0,-0.9428571428571428l1,0z" />
          </clipPath>
        </defs>
      </svg>

      {/* Carousel — escapes layout padding, adds back small padding */}
      <div
        style={{
          marginLeft: "calc(clamp(16px, calc(-57px + 19.5vw), 318px) * -1)",
          marginRight: "calc(clamp(16px, calc(-57px + 19.5vw), 318px) * -1)",
          paddingLeft: "clamp(16px, calc(-57px + 19.5vw), 318px)",
          paddingRight: "clamp(16px, calc(-57px + 19.5vw), 318px)",
        }}
      >
        <div
          className="relative mx-auto overflow-hidden"
          style={{
            width: "1275px",
            maxWidth: "100%",
            height: "clamp(220px, 30vw, 484px)",
            clipPath: "url(#carousel-clip)",
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={i === 0}
                sizes="1275px"
              />
            </div>
          ))}

          <div className="absolute inset-0 bg-gradient-to-br from-[var(--flaz-dark)] via-gray-700 to-gray-500 -z-10" />

          {/* Prev arrow */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:opacity-70 transition-opacity z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </button>

          {/* Next arrow */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:opacity-70 transition-opacity z-10"
            aria-label="Next slide"
          >
            <ChevronRight />
          </button>

          {/* Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-white w-6"
                    : "bg-white/50 hover:bg-white/80 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Below carousel */}
      <div
        className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-8 pt-8 pb-12"
        style={{
          marginLeft: "calc(clamp(16px, calc(-57px + 19.5vw), 318px) * -1)",
          marginRight: "calc(clamp(16px, calc(-57px + 19.5vw), 318px) * -1)",
          paddingLeft: "clamp(16px, calc(-57px + 19.5vw), 318px)",
          paddingRight: "clamp(16px, calc(-57px + 19.5vw), 318px)",
        }}
      >
        <h1 className="text-[36px] md:text-[52px] lg:text-[75px] font-medium text-[#1a1a1a] leading-[1.0] tracking-[-0.02em] max-w-[800px] shrink-0">
          Your trusted technical services partner
        </h1>

        <div className="flex flex-col gap-5 max-w-[400px] pt-2">
          <p className="text-[14px] md:text-[16px] lg:text-[20px] font-light text-gray-600 leading-[1.7]">
            We handle everything from{" "}
            <span className="text-[var(--flaz-teal)]">design and engineering</span>{" "}
            to{" "}
            <span className="text-[var(--flaz-teal)]">approvals and construction</span>
            , across villas, apartments, offices, and retail spaces.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#1a1a1a] hover:bg-black text-white text-[15px] font-light px-7 py-3.5 transition-colors self-start tracking-wide"
          >
            Get free consultation
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

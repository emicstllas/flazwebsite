import type { Metadata } from "next";
import ServicesHero from "@/components/ServicesHero";
import ServicesSection from "@/components/ServicesSection";
import ServicesGridSection from "@/components/ServicesGridSection";
import FAQSection from "@/components/FAQSection";
import ContactFooter from "@/components/ContactFooter";

export const metadata: Metadata = {
  title: "Services — Flaz Technical Services",
  description:
    "Full-cycle technical services for villas, apartments, offices, and retail spaces in Dubai. Design, engineering, approvals, and construction.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesSection />
      <ServicesGridSection />
      <FAQSection />
      <ContactFooter />
    </main>
  );
}

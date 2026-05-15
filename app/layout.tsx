import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingWidget from "@/components/FloatingWidget";
import ContactModal from "@/components/ContactModal";

export const metadata: Metadata = {
  title: "Flaz Technical Services",
  description: "Professional technical services by Flaz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col" style={{ backgroundColor: "#ECEAE6" }}>
        <Navbar />
        {/* Spacer to push content below the fixed navbar */}
        <div className="h-[60px] md:h-[72px] lg:h-[88px] shrink-0" />
        <div style={{ paddingLeft: "clamp(16px, calc(-57px + 19.5vw), 318px)", paddingRight: "clamp(16px, calc(-57px + 19.5vw), 318px)", position: "relative", zIndex: 1 }}>
          {children}
        </div>
        <ContactModal />
        <FloatingWidget />
      </body>
    </html>
  );
}

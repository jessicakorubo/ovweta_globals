import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ovwetaglobal.com"),
  title: {
    default: "Marine Equipment Supplier in Port Harcourt | Marine & Industrial Equipment Sale & Hire — Port Harcourt",
    template: "%s | Ovweta Global Limited",
  },
  description:
    "Ovweta Global Limited provides certified marine and industrial equipment for sale and hire in Port Harcourt, Nigeria. Cargo nets, wire ropes, slings fabrication, pilot ladders, ladder hire, buoys, rescue lines and more for the oil & gas sector.",
  keywords: [
    "marine equipment for sale Nigeria",
    "marine equipment supplier Port Harcourt",
    "buy cargo net Port Harcourt",
    "webbing sling for sale",
    "wire rope supplier Nigeria",
    "marine equipment hire Nigeria",
    "industrial equipment hire Port Harcourt",
    "wire rope hire Nigeria",
    "sling fabrication Port Harcourt",
    "cargo net hire",
    "pilot ladder hire",
    "Jacob's ladder hire",
    "lifeboat boarding ladder",
    "ladder hire Nigeria",
    "scramble net hire",
    "gangway net",
    "rescue line hire",
    "wire ropes Nigeria",
    "wire rope fittings",
    "shackles sockets grips Nigeria",
    "rope dressing Nigeria",
    "lifting gear examination",
    "certificate validation Nigeria",
    "testing and certification oil gas",
    "slings testing certification",
    "offshore equipment hire Rivers State",
    "oil and gas equipment hire Nigeria",
    "marine safety equipment Nigeria",
    "buoy hire Nigeria",
    "site services offshore Nigeria",
    "Ovweta Global",
    "ovwetaglobal.com",
  ],
  authors: [{ name: "Ovweta Global Limited" }],
  creator: "Ovweta Global Limited",
  publisher: "Ovweta Global Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.ovwetaglobal.com",
    siteName: "Ovweta Global Limited",
    title: "Ovweta Global Limited | Marine & Industrial Equipment Sale & Hire",
    description:
      "Certified marine and industrial equipment sale and hire in Port Harcourt, Nigeria. Wire ropes, slings, cargo nets, ladders, buoys, rescue gear and testing & certification for the oil & gas sector.",
    images: [
      {
        url: "/og-image.jpg", // Add a 1200x630 branded image to /public
        width: 1200,
        height: 630,
        alt: "Ovweta Global Limited — Marine & Industrial Equipment Sale & Hire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ovweta Global Limited | Marine & Industrial Equipment Sale & Hire",
    description:
      "Certified marine and industrial equipment sale and hire — wire ropes, slings, nets, ladders, buoys and more. Port Harcourt, Nigeria.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.ovwetaglobal.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Structured data — Google rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Ovweta Global Limited",
              description:
                "Certified marine and industrial equipment sale and hire — wire ropes, slings fabrication, cargo nets, pilot ladders, buoys, rescue lines, lifting gear examination and testing & certification for the oil & gas sector.",
              url: "https://www.ovwetaglobal.com",
              telephone: "+234-8135734743",
              email: "ovwetaglobal@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "No. 56 Igwruta Road, Rumukwrushi",
                addressLocality: "Port Harcourt",
                addressRegion: "Rivers State",
                addressCountry: "NG",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "17:00",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Marine & Industrial Equipment Sale & Hire",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wire Rope Sale, Hire & Fittings" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Slings Fabrication & Management" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cargo Net Sale & Hire" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pilot Ladder Sale & Hire" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Jacob's Ladder Sale & Hire" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lifeboat Boarding Ladder Sale & Hire" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rescue Line Sale & Hire" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lifting Gear Examination" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Testing & Certification" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rope Dressing" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Site Services" } },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-steel-900">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
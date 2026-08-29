import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Ovweta Global Limited in Port Harcourt. Enquire about marine equipment hire, wire ropes, slings, nets, ladders, buoys and site services. We respond within 24 hours.",
  keywords: [
    "contact Ovweta Global", "marine equipment hire enquiry Port Harcourt",
    "wire rope hire contact Nigeria", "sling hire enquiry",
    "offshore equipment rental contact Rivers State",
  ],
  openGraph: {
    title: "Contact Ovweta Global Limited",
    description: "Enquire about marine and industrial equipment hire in Port Harcourt. Response within 24 hours.",
    url: "https://www.ovwetaglobal.com/contact",
  },
  alternates: { canonical: "https://www.ovwetaglobal.com/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
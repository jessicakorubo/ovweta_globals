import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products & Equipment Hire",
  description:
    "Browse Ovweta Global's full hire inventory — wire ropes, sling fabrication, cargo nets, scramble nets, gangway nets, pilot ladders, Jacob's ladders, lifeboat boarding ladders, rescue lines, buoys, stretchers, lifting gear examination, testing & certification, rope dressing and site services. Port Harcourt, Nigeria.",
  keywords: [
    "marine equipment hire", "wire rope hire Nigeria", "sling fabrication Port Harcourt",
    "cargo net hire Nigeria", "pilot ladder hire", "ladder hire Nigeria",
    "Jacob's ladder hire", "lifeboat ladder hire", "rescue line hire",
    "scramble net hire", "gangway net hire", "buoy hire Nigeria",
    "lifting gear examination Nigeria", "certificate validation Nigeria",
    "testing certification oil gas Nigeria", "rope dressing Nigeria",
    "wire ropes fittings shackles sockets Nigeria",
    "offshore equipment hire Port Harcourt", "slings testing Nigeria",
    "site services offshore Nigeria",
  ],
  openGraph: {
    title: "Marine & Industrial Equipment Hire | Ovweta Global Limited",
    description:
      "Wire ropes, slings, nets, ladders, buoys, rescue gear, testing & certification — hire from Ovweta Global in Port Harcourt.",
    url: "https://www.ovwetaglobal.com/products",
  },
  alternates: { canonical: "https://www.ovwetaglobal.com/products" },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
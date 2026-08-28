import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Ovweta Global Limited | Marine & Industrial Equipment Hire",
  description: "Ovweta Global Limited provides certified marine and industrial equipment for hire — cargo nets, slings, buoys, ladders, stretchers and more. Port Harcourt, Nigeria.",
  keywords: ["marine equipment hire", "cargo nets", "slings", "oil gas equipment", "Port Harcourt", "Ovweta Global"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-steel-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

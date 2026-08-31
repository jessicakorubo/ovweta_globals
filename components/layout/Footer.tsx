import Link from "next/link";
import { Anchor, MapPin, Phone, Mail, Globe } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Products & Hire", href: "/products" },
    { label: "Contact", href: "/contact" },
  ],
  "Equipment Categories": [
    { label: "Nets & Rope", href: "/products#nets" },
    { label: "Buoys & Flotation", href: "/products#buoys" },
    { label: "Safety & Rescue", href: "/products#safety" },
    { label: "Ladders & Access", href: "/products#ladders" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-steel-950 border-t border-steel-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 border-2 border-amber-500 flex items-center justify-center">
                <Anchor className="w-4 h-4 text-amber-500" />
              </div>
              <span className="font-display text-xl text-white tracking-widest">OVWETA</span>
            </Link>
            <p className="text-sm text-steel-400 leading-relaxed mb-6">
              Certified marine and industrial equipment hire. Serving the oil & gas sector across Nigeria with reliable, inspected gear.
            </p>
            <div className="flex flex-col gap-3 text-xs text-steel-400">
              <span className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                No. 15 Igwruta Road, Rumukwurushi, Port Harcourt
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                +234-8135734743 · 08168246868
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                ovwetaglobal@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                www.ovwetaglobal.com
              </span>
              <a  // 
                href="http://mail.ovwetaglobal.com/webmail"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors duration-200"
              >
                <Mail className="w-3.5 h-3.5 shrink-0" />
                Access Webmail
              </a>  
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-amber-500 text-[10px] font-mono tracking-[0.2em] uppercase mb-5">{group}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-steel-400 hover:text-white transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Hire CTA */}
          <div>
            <h4 className="text-amber-500 text-[10px] font-mono tracking-[0.2em] uppercase mb-5">Hire Equipment</h4>
            <p className="text-sm text-steel-400 mb-5 leading-relaxed">
              Need certified marine or industrial equipment? Submit a hire request and we'll respond within 24 hours.
            </p>
            <Link href="/products" className="inline-block px-5 py-2.5 bg-amber-500 text-steel-950 text-sm font-bold hover:bg-amber-400 transition-colors duration-200">
              Browse Equipment
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-steel-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-steel-600">
          <span>© {new Date().getFullYear()} Ovweta Global Limited. RC: 1524805. All rights reserved.</span>
          <span className="text-steel-700">Built by <span className="text-amber-600/70">Jasit Technologies</span></span>
        </div>
      </div>
    </footer>
  );
}

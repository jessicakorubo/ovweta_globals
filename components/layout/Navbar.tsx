"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Anchor } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products & Hire" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={clsx(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled || pathname !== "/"
        ? "bg-steel-950/95 backdrop-blur-md border-b border-steel-800/60 shadow-xl shadow-black/40"
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 border-2 border-amber-500 flex items-center justify-center group-hover:bg-amber-500 transition-all duration-300">
            <Anchor className="w-4 h-4 text-amber-500 group-hover:text-steel-950 transition-colors duration-300" />
          </div>
          <div>
            <span className="font-display text-2xl text-white tracking-widest leading-none block">
              OVWETA
            </span>
            <span className="text-amber-500 text-[9px] font-mono tracking-[0.25em] uppercase leading-none">
              Global Limited
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200",
                pathname === link.href
                  ? "text-amber-400"
                  : "text-steel-300 hover:text-white",
                link.href === "/products" && "ml-2 px-5 py-2 border border-amber-500/60 text-amber-400 hover:bg-amber-500 hover:text-steel-950 transition-all duration-200"
              )}
            >
              {link.label}
              {pathname === link.href && link.href !== "/products" && (
                <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-amber-500" />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setOpen(v => !v)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={clsx(
        "md:hidden bg-steel-950/98 border-t border-steel-800/50 overflow-hidden transition-all duration-300",
        open ? "max-h-72 py-4" : "max-h-0"
      )}>
        <nav className="flex flex-col px-6 gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className={clsx(
                "py-3 text-sm font-medium border-b border-steel-800/40 last:border-0 transition-colors",
                pathname === link.href ? "text-amber-400" : "text-steel-300 hover:text-white"
              )}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

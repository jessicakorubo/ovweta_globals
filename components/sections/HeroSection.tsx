"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown, ShieldCheck, Anchor } from "lucide-react";
import { Button } from "@/components/ui";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Force play on mount — some browsers need a nudge
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked — poster image shows automatically
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-steel-950 overflow-hidden">

      {/* ── BACKGROUND VIDEO ─────────────────────────────────────────── */}
      {/* 
        TO USE YOUR OWN VIDEO:
        1. Place your video file in the /public folder e.g. /public/hero.mp4
        2. Change the src below to "/hero.mp4"
        3. Remove the poster attribute or replace with your own thumbnail
      */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity90"
        poster="https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&w=1920"
      >
        <source src="/hero.mp4" type="video/mp4" />
        {/* Fallback: poster image shows automatically if video fails */}
      </video>

      {/* Overlay — lighter than before so video/image shows through */}
      <div className="absolute inset-0 bg-gradient-to-r from-steel-950/90 via-steel-950/70 to-steel-950/40 pointer-events-none" />

      {/* Grid texture */}
      <div className="absolute inset-0 grid-texture opacity-30 pointer-events-none" />

      {/* Amber vertical accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-500/80 to-transparent pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-steel-950 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-32 pb-20">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8" style={{ animation: "fadeIn 0.6s ease both" }}>
            <Anchor className="w-4 h-4 text-amber-500" />
            <span className="text-amber-500 text-[10px] font-mono tracking-[0.3em] uppercase">
              Marine & Industrial Equipment · Port Harcourt
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-7xl md:text-9xl text-white tracking-wider leading-none mb-6"
            style={{ animation: "fadeUp 0.7s ease 0.1s both" }}
          >
            OVWETA
            <br />
            <span className="text-amber-500">GLOBAL</span>
          </h1>

          <p
            className="text-steel-200 text-lg leading-relaxed mb-4 max-w-xl"
            style={{ animation: "fadeUp 0.7s ease 0.25s both" }}
          >
            Certified marine and industrial equipment for hire — cargo nets, slings, buoys, rescue gear, and more. Built for the oil & gas sector.
          </p>

          {/* Trust badges */}
          <div
            className="flex flex-wrap gap-4 mb-10"
            style={{ animation: "fadeUp 0.7s ease 0.35s both" }}
          >
            {["RC: 1524805", "Rivers State", "Oil & Gas Sector"].map((badge) => (
              <span key={badge} className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-steel-300 border border-steel-600 bg-steel-950/50 px-3 py-1 backdrop-blur-sm">
                <ShieldCheck className="w-3 h-3 text-amber-500" />
                {badge}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4"
            style={{ animation: "fadeUp 0.7s ease 0.45s both" }}
          >
            <Button href="/products" size="lg">
              Browse Equipment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Get in Touch
            </Button>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-steel-700/60"
            style={{ animation: "fadeUp 0.7s ease 0.55s both" }}
          >
            {[
              { value: "18+", label: "Equipment Types" },
              { value: "24hrs", label: "Response Time" },
              { value: "100%", label: "Inspected Gear" },
              { value: "PHC", label: "Based In" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl text-amber-400 tracking-wider">{s.value}</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-steel-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#categories" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-steel-500 hover:text-amber-500 transition-colors">
        <span className="text-[9px] font-mono tracking-[0.25em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
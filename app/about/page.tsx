import { Container, SectionHeader } from "@/components/ui";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ShieldCheck, Zap, Users, Globe2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Ovweta Global Limited is a 100% Nigerian-owned marine and industrial equipment company based in Port Harcourt, Rivers State. Serving the oil & gas sector with certified wire ropes, slings, nets, ladders, buoys and site services.",
  keywords: [
    "Ovweta Global about", "marine equipment company Nigeria",
    "industrial equipment Port Harcourt", "oil gas equipment company Rivers State",
    "Nigerian marine company RC 1524805",
  ],
  openGraph: {
    title: "About Ovweta Global Limited",
    description: "100% Nigerian-owned marine and industrial equipment hire company based in Port Harcourt, serving the oil & gas sector.",
    url: "https://www.ovwetaglobal.com/about",
  },
  alternates: { canonical: "https://www.ovwetaglobal.com/about" },
};

const values = [
  { icon: ShieldCheck, title: "Safety First", desc: "Every item is inspected and certified before leaving our facility. No compromises." },
  { icon: Zap, title: "Fast Response", desc: "We turn around hire quotes within 24 hours. Time matters in the field." },
  { icon: Users, title: "Client Focus", desc: "We work with your specs and timeline, not the other way around." },
  { icon: Globe2, title: "Local Expertise", desc: "Deep knowledge of Nigeria's oil & gas operating environment." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 relative overflow-hidden min-h-[55vh] flex items-end">
        {/* Bright background image — people working with marine/industrial equipment */}
        {/* Replace with your own photo: place in /public and change src to e.g. "/about-hero.jpg" */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1920')" }}
        />
        {/* Gradient overlay — dark at bottom where text sits, lighter at top to show the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-steel-950 via-steel-950/60 to-steel-950/20 pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-500/80 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

        <Container className="relative z-10 pb-4">
          <ScrollReveal>
            <span className="text-amber-500 text-[10px] font-mono tracking-[0.25em] uppercase block mb-3">About Us</span>
            <span className="amber-rule" />
            <h1 className="font-display text-6xl md:text-8xl text-white tracking-wider leading-none max-w-2xl drop-shadow-2xl">
              WHO WE ARE
            </h1>
          </ScrollReveal>
        </Container>
      </section>

      {/* Story */}
      <section className="py-24 bg-steel-900">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <SectionHeader label="Our Story" title="OVWETA GLOBAL" subtitle="A Nigerian company built around the needs of the oil & gas industry." />
              <p className="text-steel-400 leading-relaxed mb-4">
                Ovweta Global Limited is a 100% Nigerian-owned company incorporated and registered with the Corporate Affairs Commission (RC: 1524805), headquartered at No. 56 Igwruta Road, Rumukwurushi, Port Harcourt, Rivers State.
              </p>
              <p className="text-steel-400 leading-relaxed mb-4">
                We specialise in the supply and hire of certified marine and industrial safety equipment — including cargo nets, scramble nets, gangway nets, steel wire rope nets, pilot ladders, embarkation ladders, stretchers, and a full range of buoys and flotation equipment.
              </p>
              <p className="text-steel-400 leading-relaxed">
                Our clients include operators across the upstream and downstream oil & gas sector who need reliable, inspected equipment delivered on time and to specification.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((v) => {
                  const Icon = v.icon;
                  return (
                    <div key={v.title} className="p-6 bg-steel-800/50 border border-steel-700/50">
                      <div className="w-9 h-9 border border-steel-600 flex items-center justify-center mb-4">
                        <Icon className="w-4 h-4 text-amber-500" />
                      </div>
                      <h3 className="font-display text-xl text-white tracking-wider mb-2">{v.title.toUpperCase()}</h3>
                      <p className="text-xs text-steel-400 leading-relaxed">{v.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* Contact callout */}
              <div className="mt-4 p-6 bg-amber-500/10 border border-amber-500/30">
                <div className="font-display text-3xl text-amber-400 tracking-wider mb-1">RC: 1524805</div>
                <div className="text-xs text-steel-400 font-mono">Corporate Affairs Commission · Federal Republic of Nigeria</div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* What we supply */}
      <section className="py-24 bg-steel-950 relative">
        <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none" />
        <Container>
          <ScrollReveal>
            <SectionHeader label="Our Inventory" title="WHAT WE SUPPLY" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { cat: "Nets & Rope", items: ["Cargo Nets", "Scramble Nets", "Gangway Nets", "Steel Wire Rope Nets"] },
              { cat: "Ladders & Access", items: ["Pilot Ladders", "Embarkation Ladders"] },
              { cat: "Safety & Rescue", items: ["Single Stretchers", "Double Stretchers"] },
              { cat: "Buoys & Flotation", items: ["Cylindrical Buoys", "Chain Through Buoys", "Pick-Up Buoys"] },
            ].map((group, i) => (
              <ScrollReveal key={group.cat} delay={i * 80}>
                <div className="p-6 bg-steel-800/30 border border-steel-700/40">
                  <h3 className="font-display text-xl text-amber-400 tracking-wider mb-4">{group.cat.toUpperCase()}</h3>
                  <ul className="flex flex-col gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-steel-300">
                        <span className="w-1.5 h-1.5 bg-amber-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
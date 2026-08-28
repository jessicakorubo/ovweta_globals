import { Container, Button } from "@/components/ui";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CheckCircle2, ArrowRight } from "lucide-react";

const pillars = [
  "100% Nigerian registered company (RC: 1524805)",
  "All equipment inspected before every hire",
  "Serving oil & gas operators since incorporation",
  "Fast 24-hour quote turnaround",
  "Port Harcourt based — Rivers State & beyond",
  "Custom specifications available on request",
];

export default function AboutSnippet() {
  return (
    <>
      {/* About */}
      <section className="py-28 bg-steel-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-500/30 to-transparent" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <span className="text-amber-500 text-[10px] font-mono tracking-[0.25em] uppercase block mb-3">About Ovweta Global</span>
              <span className="amber-rule" />
              <h2 className="font-display text-5xl md:text-6xl text-white tracking-wider leading-none mb-6">
                BUILT FOR<br />THE FIELD
              </h2>
              <p className="text-steel-400 leading-relaxed mb-4">
                Ovweta Global Limited is a Port Harcourt-based marine and industrial equipment company serving Nigeria's oil & gas sector. We supply and hire certified safety and lifting gear to offshore and onshore operators who need reliable, inspected equipment — fast.
              </p>
              <p className="text-steel-400 leading-relaxed mb-8">
                Every item in our inventory is maintained to specification and available for hire with clear terms. Submit a hire request online and our team will respond within 24 hours.
              </p>
              <Button href="/about" variant="outline">
                Our Story <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="grid grid-cols-1 gap-3">
                {pillars.map((p) => (
                  <div key={p} className="flex items-start gap-3 p-4 bg-steel-800/40 border border-steel-700/40">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-steel-300">{p}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Hire CTA banner */}
      <section className="py-20 bg-amber-500 relative overflow-hidden">
        <div className="absolute inset-0 stripe-accent opacity-30 pointer-events-none" />
        <Container>
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="font-display text-5xl text-steel-950 tracking-wider leading-none mb-2">
                  NEED EQUIPMENT?
                </h2>
                <p className="text-steel-800 text-sm">Browse our inventory and submit a hire request. We respond within 24 hours.</p>
              </div>
              <div className="flex flex-wrap gap-4 shrink-0">
                <Button href="/products" variant="ghost" size="lg" className="bg-steel-950 text-white hover:bg-steel-900 border-0">
                  Browse Equipment <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button href="/contact" variant="ghost" size="lg" className="border-2 border-steel-950 text-steel-950 hover:bg-steel-950 hover:text-white bg-transparent">
                  Contact Us
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}

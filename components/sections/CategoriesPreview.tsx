import Link from "next/link";
import { Container, SectionHeader } from "@/components/ui";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { categories } from "@/lib/products";
import { Network, LifeBuoy, Stethoscope, MoreVertical, ArrowRight } from "lucide-react";

const icons: Record<string, React.ElementType> = {
  nets: Network,
  buoys: LifeBuoy,
  safety: Stethoscope,
  ladders: MoreVertical,
};

export default function CategoriesPreview() {
  return (
    <section id="categories" className="py-28 bg-steel-900">
      <Container>
        <ScrollReveal>
          <SectionHeader
            label="Equipment Categories"
            title="WHAT WE HIRE"
            subtitle="All equipment is inspected and certified before every hire. We serve oil & gas operators across Rivers State and beyond."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => {
            const Icon = icons[cat.slug] || Network;
            return (
              <ScrollReveal key={cat.slug} delay={i * 80}>
                <Link
                  href={`/products#${cat.slug}`}
                  className="group block p-6 bg-steel-800/50 border border-steel-700/50 hover:border-amber-500/50 hover:bg-steel-800 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Top amber line */}
                  <div className="absolute top-0 left-0 w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-500" />

                  <div className="w-10 h-10 border border-steel-600 group-hover:border-amber-500 flex items-center justify-center mb-4 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-steel-400 group-hover:text-amber-400 transition-colors duration-300" />
                  </div>

                  <h3 className="font-display text-2xl text-white tracking-wider mb-2">{cat.label.toUpperCase()}</h3>
                  <p className="text-xs text-steel-400 leading-relaxed mb-4">{cat.description}</p>

                  <span className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-amber-500/70 group-hover:text-amber-400 transition-colors">
                    View All <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

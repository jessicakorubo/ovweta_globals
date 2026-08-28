"use client";
import { useState } from "react";
import { Container } from "@/components/ui";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { products, categories, type Product } from "@/lib/products";
import { X, Send, Loader2, CheckCircle2, ChevronDown } from "lucide-react";
import clsx from "clsx";

type HireForm = {
  name: string; company: string; email: string; phone: string;
  duration: string; purpose: string; quantity: string; notes: string;
};

const emptyForm: HireForm = { name: "", company: "", email: "", phone: "", duration: "", purpose: "", quantity: "1", notes: "" };

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [form, setForm] = useState<HireForm>(emptyForm);
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const filtered = activeCategory === "all" ? products : products.filter(p => p.categorySlug === activeCategory);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("/api/hire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product: selectedProduct?.name, ...form }),
      });
      if (res.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const openHire = (product: Product) => {
    setSelectedProduct(product);
    setForm(emptyForm);
    setFormState("idle");
    document.body.style.overflow = "hidden";
  };

  const closeHire = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "";
  };

  const inputCls = "w-full px-4 py-3 bg-steel-800 border border-steel-600 text-sm text-white placeholder:text-steel-500 focus:outline-none focus:border-amber-500 transition-colors";

  return (
    <>
      {/* Hero */}
      <section className="bg-steel-950 pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-texture opacity-50 pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-500/50 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        <Container>
          <ScrollReveal>
            <span className="text-amber-500 text-[10px] font-mono tracking-[0.25em] uppercase block mb-3">Hire Inventory</span>
            <span className="amber-rule" />
            <h1 className="font-display text-6xl md:text-8xl text-white tracking-wider leading-none mb-4">
              PRODUCTS<br /><span className="text-amber-500">&amp; HIRE</span>
            </h1>
            <p className="text-steel-400 max-w-xl text-base leading-relaxed">
              Browse our full inventory of certified marine and industrial equipment. Click any item to submit a hire request.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Category filter */}
      <section className="bg-steel-900 border-b border-steel-800 sticky top-20 z-30">
        <Container>
          <div className="flex items-center gap-1 overflow-x-auto py-4 scrollbar-none">
            <button
              onClick={() => setActiveCategory("all")}
              className={clsx(
                "shrink-0 px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all duration-200",
                activeCategory === "all"
                  ? "bg-amber-500 text-steel-950"
                  : "text-steel-400 hover:text-white border border-steel-700 hover:border-steel-500"
              )}
            >
              All Equipment
            </button>
            {categories.map(cat => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={clsx(
                  "shrink-0 px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all duration-200",
                  activeCategory === cat.slug
                    ? "bg-amber-500 text-steel-950"
                    : "text-steel-400 hover:text-white border border-steel-700 hover:border-steel-500"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Products grid */}
      <section className="py-16 bg-steel-900 min-h-[60vh]">
        <Container>
          {activeCategory === "all" && (
            <div className="flex flex-col gap-16">
              {categories.map((cat) => (
                <div key={cat.slug} id={cat.slug}>
                  <ScrollReveal>
                    <div className="flex items-center gap-4 mb-8">
                      <h2 className="font-display text-3xl text-white tracking-wider">{cat.label.toUpperCase()}</h2>
                      <div className="flex-1 h-px bg-steel-700" />
                      <span className="text-[10px] font-mono text-steel-500 tracking-widest uppercase">
                        {products.filter(p => p.categorySlug === cat.slug).length} items
                      </span>
                    </div>
                  </ScrollReveal>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.filter(p => p.categorySlug === cat.slug).map((product, i) => (
                      <ProductCard key={product.id} product={product} onHire={openHire} delay={i * 60} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeCategory !== "all" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} onHire={openHire} delay={i * 60} />
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Hire Request Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeHire} />

          <div className="relative z-10 w-full max-w-2xl max-h-[90vh] bg-steel-900 border border-steel-700 overflow-y-auto">
            {/* Modal header */}
            <div className="sticky top-0 bg-steel-950 border-b border-steel-800 px-6 py-4 flex items-start justify-between gap-4 z-10">
              <div>
                <div className="text-[10px] font-mono tracking-widest uppercase text-amber-500 mb-1">Hire Request</div>
                <h3 className="font-display text-2xl text-white tracking-wider">{selectedProduct.name.toUpperCase()}</h3>
              </div>
              <button onClick={closeHire} className="text-steel-400 hover:text-white transition-colors mt-1 shrink-0">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {formState === "success" ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                  <h4 className="font-display text-3xl text-white tracking-wider mb-2">REQUEST SENT</h4>
                  <p className="text-steel-400 text-sm mb-6">
                    We've received your hire request for <strong className="text-white">{selectedProduct.name}</strong>. Our team will respond within 24 hours.
                  </p>
                  <button onClick={closeHire} className="text-sm text-amber-500 underline underline-offset-2 hover:text-amber-400 transition-colors">
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Product summary */}
                  <div className="bg-steel-800/50 border border-steel-700/50 mb-4 overflow-hidden">
                    <div className="h-40 overflow-hidden">
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="w-full h-full object-cover opacity-70"
                      />
                    </div>
                    <div className="p-4">
                    <p className="text-xs text-steel-400 leading-relaxed">{selectedProduct.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {selectedProduct.specs.slice(0, 2).map(s => (
                        <span key={s} className="text-[10px] font-mono px-2 py-0.5 bg-steel-700/50 text-steel-400 tracking-wide">{s}</span>
                      ))}
                    </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono tracking-widest uppercase text-steel-500 block mb-1.5">Full Name *</label>
                      <input name="name" required placeholder="Your full name" value={form.name} onChange={handleChange} className={inputCls} />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono tracking-widest uppercase text-steel-500 block mb-1.5">Company</label>
                      <input name="company" placeholder="Company / organisation" value={form.company} onChange={handleChange} className={inputCls} />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono tracking-widest uppercase text-steel-500 block mb-1.5">Email Address *</label>
                      <input name="email" type="email" required placeholder="you@company.com" value={form.email} onChange={handleChange} className={inputCls} />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono tracking-widest uppercase text-steel-500 block mb-1.5">Phone / WhatsApp *</label>
                      <input name="phone" required placeholder="+234 ..." value={form.phone} onChange={handleChange} className={inputCls} />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono tracking-widest uppercase text-steel-500 block mb-1.5">Hire Duration *</label>
                      <input name="duration" required placeholder="e.g. 2 weeks, 1 month" value={form.duration} onChange={handleChange} className={inputCls} />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono tracking-widest uppercase text-steel-500 block mb-1.5">Quantity Needed</label>
                      <input name="quantity" type="number" min="1" value={form.quantity} onChange={handleChange} className={inputCls} />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono tracking-widest uppercase text-steel-500 block mb-1.5">Purpose / Use Case *</label>
                    <input name="purpose" required placeholder="e.g. Offshore cargo transfer, vessel evacuation drill..." value={form.purpose} onChange={handleChange} className={inputCls} />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono tracking-widest uppercase text-steel-500 block mb-1.5">Additional Notes</label>
                    <textarea name="notes" rows={3} placeholder="Specific requirements, dimensions, delivery location..." value={form.notes} onChange={handleChange} className={inputCls + " resize-none"} />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="flex items-center justify-center gap-2 w-full py-4 bg-amber-500 text-steel-950 font-bold text-sm tracking-widest uppercase hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {formState === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    Submit Hire Request
                  </button>

                  <p className="text-[10px] text-steel-500 text-center">We respond within 24 hours. Submitting this form does not confirm a booking.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ProductCard({ product, onHire, delay }: { product: Product; onHire: (p: Product) => void; delay: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <ScrollReveal delay={delay}>
      <div className="group bg-steel-800/40 border border-steel-700/50 hover:border-amber-500/40 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
        <div className="absolute top-0 left-0 w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-500 z-10" />

        {/* Product image */}
        <div className="relative h-48 overflow-hidden bg-steel-800 shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
          <span className="absolute top-3 left-3 text-[9px] font-mono tracking-widest uppercase bg-steel-950/80 text-amber-400 px-2.5 py-1 backdrop-blur-sm">
            {product.category}
          </span>
        </div>

        <div className="p-6 flex-1">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <h3 className="font-display text-2xl text-white tracking-wider">{product.name.toUpperCase()}</h3>
            </div>
          </div>

          <p className="text-xs text-steel-400 leading-relaxed mb-4">{product.description}</p>

          {/* Expandable specs */}
          <button
            onClick={() => setExpanded(v => !v)}
            className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-steel-500 hover:text-amber-400 transition-colors mb-3"
          >
            Specs & Applications
            <ChevronDown className={clsx("w-3 h-3 transition-transform duration-200", expanded && "rotate-180")} />
          </button>

          {expanded && (
            <div className="mb-4 flex flex-col gap-3">
              <div>
                <div className="text-[9px] font-mono tracking-widest uppercase text-steel-600 mb-1.5">Specifications</div>
                <ul className="flex flex-col gap-1">
                  {product.specs.map(s => (
                    <li key={s} className="flex items-start gap-2 text-xs text-steel-400">
                      <span className="w-1 h-1 bg-amber-500 shrink-0 mt-1.5" />{s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-[9px] font-mono tracking-widest uppercase text-steel-600 mb-1.5">Applications</div>
                <ul className="flex flex-col gap-1">
                  {product.applications.map(a => (
                    <li key={a} className="flex items-start gap-2 text-xs text-steel-400">
                      <span className="w-1 h-1 bg-steel-500 shrink-0 mt-1.5" />{a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="px-6 pb-6">
          <button
            onClick={() => onHire(product)}
            className="w-full py-3 bg-transparent border border-amber-500/50 text-amber-400 text-xs font-bold tracking-widest uppercase hover:bg-amber-500 hover:text-steel-950 transition-all duration-200"
          >
            Request Hire
          </button>
        </div>
      </div>
    </ScrollReveal>
  );
}

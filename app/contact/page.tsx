"use client";
import { useState } from "react";
import { Container } from "@/components/ui";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2, Loader2, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setState("success");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
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
            <span className="text-amber-500 text-[10px] font-mono tracking-[0.25em] uppercase block mb-3">Get In Touch</span>
            <span className="amber-rule" />
            <h1 className="font-display text-6xl md:text-8xl text-white tracking-wider leading-none">
              CONTACT US
            </h1>
            <p className="text-steel-400 mt-4 max-w-lg text-base leading-relaxed">
              For hire enquiries, pricing, or general information — reach out and we'll respond within 24 hours.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-24 bg-steel-900">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">

            {/* Contact info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="font-display text-3xl text-white tracking-wider mb-8">REACH US</h2>
                <div className="flex flex-col gap-6">
                  {[
                    { icon: MapPin, label: "Office Address", value: "No. 17A Chikwe Street\nRumukwurusitiku\nPort Harcourt, Rivers State" },
                    { icon: Phone, label: "Phone", value: "+234-8063958022\n08168246868" },
                    { icon: MessageCircle, label: "WhatsApp", value: "+234-8063958022" },
                    { icon: Mail, label: "Email", value: "samsonovwetaglobal@yahoo.com" },
                    { icon: Globe, label: "Website", value: "www.ovwetaglobal.com" },
                  ].map(contact => {
                    const Icon = contact.icon;
                    return (
                      <div key={contact.label} className="flex gap-4">
                        <div className="w-9 h-9 border border-steel-700 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-amber-500" />
                        </div>
                        <div>
                          <div className="text-[10px] font-mono uppercase tracking-widest text-steel-500 mb-1">{contact.label}</div>
                          {contact.value.split("\n").map((line, i) => (
                            <p key={i} className="text-sm text-steel-300 leading-relaxed">{line}</p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-10 p-5 bg-amber-500/10 border border-amber-500/30">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-amber-500 mb-2">Response Time</p>
                  <p className="text-sm text-steel-300">We respond to all enquiries within <strong className="text-white">24 hours</strong> on business days.</p>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={100}>
                <div className="bg-steel-800/40 border border-steel-700/50 p-8">
                  {state === "success" ? (
                    <div className="text-center py-12">
                      <CheckCircle2 className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                      <h3 className="font-display text-3xl text-white tracking-wider mb-2">MESSAGE SENT</h3>
                      <p className="text-steel-400 text-sm">Thank you for reaching out. We'll be in touch within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <h3 className="font-display text-2xl text-white tracking-wider mb-2">SEND A MESSAGE</h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[10px] font-mono tracking-widest uppercase text-steel-500 block mb-1.5">Full Name *</label>
                          <input name="name" required placeholder="Your full name" value={form.name} onChange={handleChange} className={inputCls} />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono tracking-widest uppercase text-steel-500 block mb-1.5">Email Address *</label>
                          <input name="email" type="email" required placeholder="you@company.com" value={form.email} onChange={handleChange} className={inputCls} />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[10px] font-mono tracking-widest uppercase text-steel-500 block mb-1.5">Phone / WhatsApp</label>
                          <input name="phone" placeholder="+234 ..." value={form.phone} onChange={handleChange} className={inputCls} />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono tracking-widest uppercase text-steel-500 block mb-1.5">Subject *</label>
                          <select name="subject" required value={form.subject} onChange={handleChange} className={inputCls + " bg-steel-800"}>
                            <option value="">Select a subject</option>
                            <option>Equipment Hire Enquiry</option>
                            <option>Pricing Information</option>
                            <option>Custom Specification</option>
                            <option>General Enquiry</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] font-mono tracking-widest uppercase text-steel-500 block mb-1.5">Message *</label>
                        <textarea name="message" required rows={5} placeholder="Tell us what you need..." value={form.message} onChange={handleChange} className={inputCls + " resize-none"} />
                      </div>

                      <button
                        type="submit"
                        disabled={state === "loading"}
                        className="flex items-center justify-center gap-2 w-full py-4 bg-amber-500 text-steel-950 font-bold text-sm tracking-widest uppercase hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        {state === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

import { MessageCircle } from "lucide-react";
import { Container, Button } from "@/components/ui";

const WHATSAPP_NUMBER = "2348135734743"; // confirm this is the WhatsApp number

type Props = {
  name: string;
  intro: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  specs: string[];
  applications: string[];
};

export default function ProductPageTemplate({
  name, intro, image, imageAlt, paragraphs, specs, applications,
}: Props) {
  const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello Ovweta Global, I'd like a price for ${name}.`
  )}`;

  return (
    <section className="pt-48 pb-24 bg-steel-900">
      <Container>
        <span className="text-amber-500 text-[10px] font-mono tracking-[0.25em] uppercase block mb-3">
          Port Harcourt, Nigeria
        </span>
        <h1 className="font-display text-5xl md:text-7xl text-white tracking-wider leading-none mb-6">
          {name.toUpperCase()}
        </h1>
        <p className="text-steel-300 max-w-2xl leading-relaxed mb-10">{intro}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <img src={image} alt={imageAlt} className="w-full h-80 object-cover border border-steel-700" />
          <div className="flex flex-col gap-4 justify-center">
            {paragraphs.map((p) => (
              <p key={p} className="text-steel-400 leading-relaxed">{p}</p>
            ))}
            <div className="flex flex-wrap gap-4 mt-4">
              <Button href="/contact" size="lg">Request a Quote</Button>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-amber-500 text-amber-400 font-bold text-base hover:bg-amber-500 hover:text-steel-950 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                Get Price on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-steel-800/40 border border-steel-700/50">
            <h2 className="font-display text-2xl text-amber-400 tracking-wider mb-4">SPECIFICATIONS</h2>
            <ul className="flex flex-col gap-2">
              {specs.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-steel-300">
                  <span className="w-1.5 h-1.5 bg-amber-500 shrink-0 mt-1.5" />{s}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-steel-800/40 border border-steel-700/50">
            <h2 className="font-display text-2xl text-amber-400 tracking-wider mb-4">APPLICATIONS</h2>
            <ul className="flex flex-col gap-2">
              {applications.map((a) => (
                <li key={a} className="flex items-start gap-2 text-sm text-steel-300">
                  <span className="w-1.5 h-1.5 bg-amber-500 shrink-0 mt-1.5" />{a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
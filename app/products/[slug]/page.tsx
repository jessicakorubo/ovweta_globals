import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductPageTemplate from "@/components/sections/ProductPageTemplate";
import { productPages } from "@/lib/product-pages";

export function generateStaticParams() {
  return productPages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = productPages.find((x) => x.slug === params.slug);
  if (!p) return {};
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: { canonical: `https://www.ovwetaglobal.com/products/${p.slug}` },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = productPages.find((x) => x.slug === params.slug);
  if (!p) notFound();

  return (
    <ProductPageTemplate
      name={p.name}
      intro={p.intro}
      image={p.image}
      imageAlt={`${p.name} supplied by Ovweta Global, Port Harcourt`}
      paragraphs={p.paragraphs}
      specs={p.specs}
      applications={p.applications}
    />
  );
}
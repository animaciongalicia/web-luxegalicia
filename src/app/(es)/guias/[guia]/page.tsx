import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import { FaqSection } from "@/components/Blocks";
import JsonLd from "@/components/JsonLd";
import { GUIAS, getGuia } from "@/content/guias";
import { SITE_URL, absoluteUrl } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIAS.map((g) => ({ guia: g.slug }));
}

export function generateMetadata({ params }: { params: { guia: string } }): Metadata {
  const g = getGuia(params.guia);
  if (!g) return {};
  const url = absoluteUrl(`/guias/${g.slug}`);
  return {
    title: g.metaTitle,
    description: g.metaDescription,
    alternates: { canonical: url },
    openGraph: { type: "article", title: g.metaTitle, description: g.metaDescription, url, images: [{ url: g.image, alt: g.alt }] },
  };
}

export default function GuiaPage({ params }: { params: { guia: string } }) {
  const g = getGuia(params.guia);
  if (!g) notFound();
  const url = absoluteUrl(`/guias/${g.slug}`);
  return (
    <>
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden pt-16">
        <Image src={g.image} alt={g.alt} fill className="object-cover" priority quality={75} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center text-white">
          <span className="rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">{g.category}</span>
          <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">{g.title}</h1>
          <p className="mt-6 text-sm text-gray-300">Lectura de {g.readMinutes} min · Por Luxe Galicia</p>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-5 text-lg leading-relaxed text-gray-600">
            {g.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {g.sections.map((s) => (
            <section key={s.heading} className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">{s.heading}</h2>
              {s.paragraphs?.map((p) => (
                <p key={p} className="mt-4 leading-relaxed text-gray-600">{p}</p>
              ))}
              {s.list && (
                <ul className="mt-4 space-y-3">
                  {s.list.map((li) => (
                    <li key={li} className="flex gap-3 leading-relaxed text-gray-600">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-luxe-600" />
                      {li}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <aside className="mt-16 rounded-2xl border border-luxe-100 bg-luxe-50 p-8">
            <h2 className="text-lg font-semibold text-luxe-900">Sigue leyendo</h2>
            <ul className="mt-4 space-y-2">
              {g.related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="text-luxe-700 underline decoration-luxe-300 underline-offset-2 hover:decoration-luxe-600">{r.title}</Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </article>

      <CTASection />
      <FaqSection faqs={g.faqs} />

      <nav aria-label="Ruta de navegación" className="border-t border-gray-100 bg-gray-50 px-6 py-6">
        <ol className="mx-auto flex max-w-3xl flex-wrap gap-2 text-sm text-gray-500">
          <li><Link href="/" className="hover:text-luxe-700">Inicio</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/guias" className="hover:text-luxe-700">Guías</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-700">{g.title}</li>
        </ol>
      </nav>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: g.title,
          description: g.metaDescription,
          image: absoluteUrl(g.image),
          datePublished: g.date,
          dateModified: g.date,
          mainEntityOfPage: url,
          author: { "@id": `${SITE_URL}/#organization` },
          publisher: { "@id": `${SITE_URL}/#organization` },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Guías", item: absoluteUrl("/guias") },
            { "@type": "ListItem", position: 3, name: g.title, item: url },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: g.faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
        }}
      />
    </>
  );
}

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

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

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
          {g.stats && (
            <dl className={`mt-10 grid gap-4 ${g.stats.length % 4 === 0 ? "grid-cols-2 md:grid-cols-4" : g.stats.length % 3 === 0 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-2"}`}>
              {g.stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-luxe-100 bg-luxe-50 px-4 py-5 text-center">
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block text-2xl font-bold tracking-tight text-luxe-800">{s.value}</span>
                    <span className="mt-1 block text-xs leading-snug text-gray-600">{s.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          )}

          {g.summary && (
            <div className="mt-10 rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-luxe-700">En resumen</p>
              <ul className="mt-4 space-y-3">
                {g.summary.map((li) => (
                  <li key={li} className="flex gap-3 leading-relaxed text-gray-700">
                    <span aria-hidden="true" className="text-luxe-600">✓</span>
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {g.sections.length >= 4 && (
            <nav aria-label="Índice" className="mt-10 border-l-2 border-luxe-200 pl-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">En esta guía</p>
              <ol className="mt-3 space-y-2 text-sm">
                {g.sections.map((s) => (
                  <li key={s.heading}>
                    <a href={`#${slugify(s.heading)}`} className="text-gray-600 hover:text-luxe-700">{s.heading}</a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {g.sections.map((s, i) => (
            <div key={s.heading}>
              <section id={slugify(s.heading)} className="mt-12 scroll-mt-24">
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
                {s.table && (
                  <div className="mt-6 overflow-x-auto rounded-xl border border-gray-100">
                    <table className="w-full min-w-[520px] text-left text-sm">
                      <thead className="bg-luxe-50 text-xs uppercase tracking-wider text-luxe-800">
                        <tr>
                          {s.table.head.map((h) => (
                            <th key={h} scope="col" className="px-4 py-3 font-semibold">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {s.table.rows.map((row) => (
                          <tr key={row.join("|")} className="text-gray-600">
                            {row.map((cell, ci) =>
                              ci === 0 ? (
                                <th key={ci} scope="row" className="px-4 py-3 font-semibold text-gray-900">{cell}</th>
                              ) : (
                                <td key={ci} className="px-4 py-3">{cell}</td>
                              )
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {s.image && (
                  <figure className="mt-8">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                      <Image src={s.image.src} alt={s.image.alt} fill className="object-cover" sizes="(min-width: 768px) 768px, 100vw" />
                    </div>
                    {s.image.caption && <figcaption className="mt-3 text-center text-sm text-gray-500">{s.image.caption}</figcaption>}
                  </figure>
                )}
                {s.after?.map((p) => (
                  <p key={p} className="mt-4 leading-relaxed text-gray-600">{p}</p>
                ))}
                {s.tip && (
                  <p className="mt-6 rounded-xl border-l-4 border-amber-400 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-amber-900">
                    <strong className="font-semibold">Consejo: </strong>
                    {s.tip}
                  </p>
                )}
              </section>
              {g.service && i === Math.floor((g.sections.length - 1) / 2) && (
                <aside className="mt-12 flex flex-col gap-4 rounded-2xl bg-luxe-800 p-8 text-white sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold">{g.service.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-luxe-100">{g.service.text}</p>
                  </div>
                  <Link href={g.service.href} className="inline-flex shrink-0 items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-luxe-800 transition-colors hover:bg-luxe-50">
                    {g.service.label}
                  </Link>
                </aside>
              )}
            </div>
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

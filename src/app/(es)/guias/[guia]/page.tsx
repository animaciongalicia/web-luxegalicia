import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import { DataTable, FaqSection } from "@/components/Blocks";
import JsonLd from "@/components/JsonLd";
import { GUIAS, getGuia } from "@/content/guias";
import { PAGES_ES } from "@/content/pages";
import { TOURS } from "@/content/tours";
import { SITE, SITE_URL, absoluteUrl, whatsappLink } from "@/content/site";
import { serif } from "@/lib/fonts";
import { rich } from "@/components/RichText";

export const dynamicParams = false;

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Image and label for a "Sigue leyendo" card, whatever kind of page it links to.
function relatedCard(href: string) {
  const guide = href.startsWith("/guias/") ? getGuia(href.slice(7)) : undefined;
  if (guide) return { image: guide.image, alt: guide.alt, label: guide.category };
  const tour = TOURS.find((t) => href === `/tours-con-chofer-galicia/${t.slug}`);
  if (tour) return { image: tour.image, alt: tour.alt, label: "Tour" };
  const page = PAGES_ES.find((p) => href === `/${p.slug}`);
  if (page) return { image: page.hero.image, alt: page.hero.alt || page.hero.title, label: "Servicio" };
  return { image: "/images/flota-berlinas-fila.jpg", alt: "Flota de Luxe Galicia", label: "Servicio" };
}

// Headings may carry a manual "3. " prefix; the template numbers them itself.
const cleanHeading = (h: string) => h.replace(/^\d+\.\s*/, "");

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
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
  const [lead, ...intro] = g.intro;
  const serviceAfter = Math.floor((g.sections.length - 1) / 2);
  const related = g.related.map((r) => ({ ...r, ...relatedCard(r.href) }));

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[58vh] items-end overflow-hidden pt-16">
        <Image src={g.image} alt={g.alt} fill className="object-cover" priority quality={75} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-12 pt-24 text-white lg:px-8">
          <nav aria-label="Ruta de navegación" className="text-sm text-white/70">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span aria-hidden="true" className="mx-2">/</span>
            <Link href="/guias" className="hover:text-white">Guías</Link>
          </nav>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">{g.category}</p>
          <h1 className={`${serif.className} mt-3 max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl`}>{g.title}</h1>
          <p className="mt-6 text-sm text-white/75">
            {g.readMinutes} min de lectura · Actualizado el {formatDate(g.date)}
          </p>
        </div>
      </section>

      <div className="bg-white px-6 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,1fr)_300px]">
          <article className="min-w-0 max-w-[46rem]">
            {/* Entrada */}
            <p className={`${serif.className} text-xl leading-relaxed text-gray-800 sm:text-2xl sm:leading-relaxed`}>{rich(lead)}</p>
            {intro.map((p) => (
              <p key={p} className="mt-5 text-lg leading-relaxed text-gray-600">{rich(p)}</p>
            ))}

            {g.stats && (
              <dl className={`mt-10 grid grid-cols-2 divide-gray-100 overflow-hidden rounded-2xl border border-gray-100 sm:divide-x ${g.stats.length === 4 ? "sm:grid-cols-4" : ""}`}>
                {g.stats.map((s) => (
                  <div key={s.label} className="bg-gray-50/60 px-4 py-5 text-center">
                    <dt className="sr-only">{s.label}</dt>
                    <dd>
                      <span className="block text-2xl font-bold tracking-tight text-luxe-800">{s.value}</span>
                      <span className="mt-1 block text-xs leading-snug text-gray-500">{s.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            )}

            {g.summary && (
              <div className="mt-10 rounded-2xl bg-luxe-900 p-7 text-white sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Lo esencial</p>
                <ul className="mt-5 space-y-4">
                  {g.summary.map((li) => (
                    <li key={li} className="flex gap-3 leading-relaxed text-luxe-50">
                      <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0 fill-amber-300">
                        <path d="M7.6 14.2 3.4 10l1.4-1.4 2.8 2.8 7.6-7.6L16.6 5z" />
                      </svg>
                      <span>{rich(li)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Índice en móvil */}
            {g.sections.length >= 4 && (
              <details className="mt-10 rounded-2xl border border-gray-100 bg-gray-50 p-5 lg:hidden">
                <summary className="cursor-pointer text-sm font-semibold text-gray-900">En esta guía</summary>
                <ol className="mt-4 space-y-2 text-sm">
                  {g.sections.map((s, i) => (
                    <li key={s.heading}>
                      <a href={`#${slugify(s.heading)}`} className="text-gray-600 hover:text-luxe-700">
                        {String(i + 1).padStart(2, "0")} · {cleanHeading(s.heading)}
                      </a>
                    </li>
                  ))}
                </ol>
              </details>
            )}

            {g.sections.map((s, i) => (
              <div key={s.heading}>
                <section id={slugify(s.heading)} className="mt-16 scroll-mt-24">
                  <p className="text-sm font-semibold tracking-widest text-luxe-600">{String(i + 1).padStart(2, "0")}</p>
                  <h2 className={`${serif.className} mt-1 text-2xl font-semibold leading-snug text-gray-900 sm:text-3xl`}>{cleanHeading(s.heading)}</h2>
                  {s.paragraphs?.map((p) => (
                    <p key={p} className="mt-4 text-[17px] leading-relaxed text-gray-600">{rich(p)}</p>
                  ))}
                  {s.list && (
                    <ul className="mt-6 divide-y divide-gray-100 rounded-2xl border border-gray-100">
                      {s.list.map((li) => {
                        const [head, ...rest] = li.split(": ");
                        const hasHead = rest.length > 0 && head.length < 60 && !head.includes("[");
                        return (
                          <li key={li} className="flex gap-4 px-5 py-4 text-[15px] leading-relaxed text-gray-600">
                            <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-luxe-500" />
                            <span>
                              {hasHead ? (
                                <>
                                  <strong className="font-semibold text-gray-900">{head}:</strong> {rich(rest.join(": "))}
                                </>
                              ) : (
                                rich(li)
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                  {s.table && (
                    <div className="mt-6">
                      <DataTable head={s.table.head} rows={s.table.rows} />
                    </div>
                  )}
                  {s.quote && (
                    <blockquote className={`${serif.className} my-10 border-l-4 border-amber-400 pl-6 text-2xl leading-snug text-gray-900`}>
                      {s.quote}
                    </blockquote>
                  )}
                  {s.image && (
                    <figure className="mt-8">
                      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-gray-100">
                        <Image src={s.image.src} alt={s.image.alt} fill className="object-cover" sizes="(min-width: 1024px) 736px, 100vw" />
                      </div>
                      {s.image.caption && <figcaption className="mt-3 text-sm italic text-gray-500">{s.image.caption}</figcaption>}
                    </figure>
                  )}
                  {s.after?.map((p) => (
                    <p key={p} className="mt-4 text-[17px] leading-relaxed text-gray-600">{rich(p)}</p>
                  ))}
                  {s.tip && (
                    <div className="mt-8 flex gap-4 rounded-2xl bg-luxe-50 p-6">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 fill-none stroke-luxe-700" strokeWidth={1.8}>
                        <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.8V16h5v-.3c0-.7.4-1.4 1-1.8A6 6 0 0 0 12 3Z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-luxe-800">Consejo</p>
                        <p className="mt-1 leading-relaxed text-gray-700">{rich(s.tip)}</p>
                      </div>
                    </div>
                  )}
                </section>

                {g.service && i === serviceAfter && (
                  <aside className="relative mt-16 overflow-hidden rounded-2xl">
                    <Image src={g.image} alt="" fill className="object-cover" sizes="736px" />
                    <div className="absolute inset-0 bg-luxe-950/85" />
                    <div className="relative flex flex-col gap-5 p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
                      <div>
                        <p className={`${serif.className} text-2xl font-semibold`}>{g.service.title}</p>
                        <p className="mt-2 max-w-md text-sm leading-relaxed text-luxe-100">{g.service.text}</p>
                      </div>
                      <Link href={g.service.href} className="inline-flex shrink-0 items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-luxe-900 transition-colors hover:bg-amber-50">
                        {g.service.label} →
                      </Link>
                    </div>
                  </aside>
                )}
              </div>
            ))}
          </article>

          {/* Lateral */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              {g.sections.length >= 4 && (
                <nav aria-label="Índice" className="rounded-2xl border border-gray-100 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">En esta guía</p>
                  <ol className="mt-4 space-y-3 text-sm">
                    {g.sections.map((s, i) => (
                      <li key={s.heading} className="flex gap-3">
                        <span className="font-semibold text-luxe-600">{String(i + 1).padStart(2, "0")}</span>
                        <a href={`#${slugify(s.heading)}`} className="leading-snug text-gray-600 hover:text-luxe-700">{cleanHeading(s.heading)}</a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
              <div className="rounded-2xl bg-gray-900 p-6 text-white">
                <p className={`${serif.className} text-xl font-semibold`}>¿Te lo organizo?</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">Fechas, personas y ciudades. Tienes propuesta en 24 horas.</p>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-5 w-full justify-center">WhatsApp</a>
                <Link href="/presupuesto" className="mt-3 inline-flex w-full justify-center rounded-lg border border-white/30 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white/10">
                  Pedir presupuesto
                </Link>
                <p className="mt-4 text-center text-xs text-gray-400">{SITE.phone}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Sigue leyendo */}
      <section className="bg-gray-50 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className={`${serif.className} text-2xl font-semibold text-gray-900 sm:text-3xl`}>Sigue leyendo</h2>
          <div className={`mt-8 grid gap-6 sm:grid-cols-2 ${related.length === 4 ? "lg:grid-cols-4" : related.length === 3 ? "lg:grid-cols-3" : ""}`}>
            {related.map((r) => (
              <Link key={r.href} href={r.href} className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="relative h-36 overflow-hidden bg-gray-100">
                  <Image src={r.image} alt={r.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 25vw, 50vw" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-luxe-700">{r.label}</p>
                  <p className="mt-2 font-semibold leading-snug text-gray-900">{r.title}</p>
                  <span className="mt-auto pt-4 text-sm font-medium text-luxe-700">Leer →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={g.faqs} />
      <CTASection />

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

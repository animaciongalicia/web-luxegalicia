import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import { FaqSection } from "@/components/Blocks";
import JsonLd from "@/components/JsonLd";
import { rich } from "@/components/RichText";
import { TOURS, getTour } from "@/content/tours";
import { SITE, SITE_URL, absoluteUrl, whatsappLink } from "@/content/site";
import { serif } from "@/lib/fonts";

export const dynamicParams = false;

export function generateStaticParams() {
  return TOURS.map((t) => ({ tour: t.slug }));
}

export function generateMetadata({ params }: { params: { tour: string } }): Metadata {
  const tour = getTour(params.tour);
  if (!tour) return {};
  const url = absoluteUrl(`/tours-con-chofer-galicia/${tour.slug}`);
  return {
    title: tour.metaTitle,
    description: tour.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: tour.metaTitle, description: tour.metaDescription, url, images: [{ url: tour.image, alt: tour.alt }] },
  };
}

export default function TourPage({ params }: { params: { tour: string } }) {
  const tour = getTour(params.tour);
  if (!tour) notFound();
  const facts = [
    { label: "Duración", value: tour.duration },
    { label: "Recorrido", value: tour.distance },
    { label: "Salida", value: tour.base },
    { label: "Vehículo", value: tour.vehicle },
  ];
  const [lead, ...intro] = tour.intro;
  // Otros tours: primero los del mismo tipo, para que la sugerencia tenga sentido.
  const others = [...TOURS.filter((t) => t.slug !== tour.slug && t.kind === tour.kind), ...TOURS.filter((t) => t.kind !== tour.kind)].slice(0, 3);
  const multiDay = tour.kind === "varios-dias";

  return (
    <>
      {/* Cabecera */}
      <section className="relative flex min-h-[62vh] items-end overflow-hidden pt-16">
        <Image src={tour.image} alt={tour.alt} fill priority quality={75} sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-10 pt-24 text-white lg:px-8">
          <nav aria-label="Ruta de navegación" className="text-sm text-white/70">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span aria-hidden="true" className="mx-2">/</span>
            <Link href="/tours-con-chofer-galicia" className="hover:text-white">Tours</Link>
          </nav>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
            {multiDay ? "Ruta privada de varios días" : "Excursión privada de un día"}
          </p>
          <h1 className={`${serif.className} mt-3 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl`}>{tour.name}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">{tour.summary}</p>
          <dl className="mt-8 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-4 border-t border-white/20 pt-6 md:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">{f.label}</dt>
                <dd className="mt-1 font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="bg-white px-6 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="min-w-0 max-w-[46rem]">
            <p className={`${serif.className} text-xl leading-relaxed text-gray-800 sm:text-2xl sm:leading-relaxed`}>{rich(lead)}</p>
            {intro.map((p) => (
              <p key={p} className="mt-5 text-lg leading-relaxed text-gray-600">{rich(p)}</p>
            ))}

            {/* Lo que no te puedes perder */}
            <h2 className={`${serif.className} mt-14 text-2xl font-semibold text-gray-900 sm:text-3xl`}>Lo que no te puedes perder</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {tour.highlights.map((h, i) => (
                <div key={h.title} className="rounded-2xl border border-gray-100 bg-gray-50/70 p-6">
                  <p className="text-sm font-semibold tracking-widest text-luxe-600">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 font-semibold text-gray-900">{h.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{h.text}</p>
                </div>
              ))}
            </div>

            {/* Itinerario */}
            <h2 className={`${serif.className} mt-16 text-2xl font-semibold text-gray-900 sm:text-3xl`}>{multiDay ? "Itinerario día a día" : "El recorrido"}</h2>
            <ol className="relative mt-8 space-y-10 border-l border-luxe-200 pl-8">
              {tour.stops.map((s, i) => (
                <li key={s.title} className="relative">
                  <span aria-hidden="true" className="absolute -left-[41px] top-0 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-luxe-600 bg-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-luxe-600" />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-luxe-700">{multiDay ? `Día ${i + 1}` : `Parada ${i + 1}`}</p>
                  <h3 className={`${serif.className} mt-1 text-xl font-semibold text-gray-900`}>{s.title}</h3>
                  <p className="mt-2 text-[17px] leading-relaxed text-gray-600">{rich(s.text)}</p>
                  {s.image && (
                    <div className="relative mt-5 aspect-[16/9] overflow-hidden rounded-2xl bg-gray-100">
                      <Image src={s.image.src} alt={s.image.alt} fill className="object-cover" sizes="(min-width: 1024px) 700px, 100vw" />
                    </div>
                  )}
                </li>
              ))}
            </ol>
            <p className="mt-10 text-sm italic text-gray-500">Itinerario orientativo: se ajusta a tus fechas, a tu ritmo y a tu aeropuerto de llegada.</p>
          </article>

          {/* Lateral */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-gray-100 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Bueno saber</p>
              <dl className="mt-4 space-y-4">
                {tour.practical.map((p) => (
                  <div key={p.label}>
                    <dt className="text-sm font-semibold text-gray-900">{p.label}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-gray-600">{p.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-2xl border border-gray-100 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Incluye</p>
              <ul className="mt-4 space-y-2.5 text-sm text-gray-700">
                {tour.includes.map((i) => (
                  <li key={i} className="flex gap-2.5">
                    <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 fill-luxe-600"><path d="M7.6 14.2 3.4 10l1.4-1.4 2.8 2.8 7.6-7.6L16.6 5z" /></svg>
                    {i}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">No incluye</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-500">
                {tour.notIncluded.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-gray-900 p-6 text-white">
              <p className={`${serif.className} text-xl font-semibold`}>¿Te lo preparo?</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-300">Fechas, personas y por dónde llegas. Recibes itinerario y precio en 24 horas.</p>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-5 w-full justify-center">WhatsApp</a>
              <Link href="/presupuesto" className="mt-3 inline-flex w-full justify-center rounded-lg border border-white/30 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white/10">
                Pedir presupuesto
              </Link>
              <p className="mt-4 text-center text-xs text-gray-400">{SITE.phone}</p>
            </div>
          </aside>
        </div>
      </div>

      <FaqSection faqs={tour.faqs} />

      {/* Otros tours */}
      <section className="bg-gray-50 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className={`${serif.className} text-2xl font-semibold text-gray-900 sm:text-3xl`}>Otros tours</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((t) => (
              <Link key={t.slug} href={`/tours-con-chofer-galicia/${t.slug}`} className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image src={t.image} alt={t.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 768px) 33vw, 100vw" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-luxe-700">{t.duration}</p>
                  <p className={`${serif.className} mt-1 text-lg font-semibold leading-snug text-gray-900`}>{t.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{t.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="¿Diseñamos tu ruta?" description="Dime fechas, número de personas y aeropuerto de llegada. Recibes itinerario y precio en 24 horas laborables." />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: tour.name,
          description: tour.metaDescription,
          url: absoluteUrl(`/tours-con-chofer-galicia/${tour.slug}`),
          image: absoluteUrl(tour.image),
          provider: { "@id": `${SITE_URL}/#organization` },
          itinerary: { "@type": "ItemList", itemListElement: tour.stops.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.title, description: s.text.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1") })) },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: tour.faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
        }}
      />
    </>
  );
}

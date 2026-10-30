import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { BlockRenderer, FaqSection } from "@/components/Blocks";
import JsonLd from "@/components/JsonLd";
import { TOURS, getTour } from "@/content/tours";
import { SITE_URL, absoluteUrl } from "@/content/site";

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
  const others = TOURS.filter((t) => t.slug !== tour.slug).slice(0, 3);
  return (
    <>
      <HeroPage eyebrow="Tour privado con chófer" title={tour.name} subtitle={tour.summary} imageSrc={tour.image} alt={tour.alt} />

      <section className="border-b border-gray-100 bg-white px-6 py-8">
        <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-6 text-center md:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">{f.label}</dt>
              <dd className="mt-1 font-semibold text-gray-900">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <BlockRenderer block={{ type: "intro", paragraphs: tour.intro }} />

      <section className="section-padding bg-gray-50">
        <AnimateOnScroll className="mx-auto max-w-4xl">
          <h2 className="heading-section text-center">{tour.kind === "varios-dias" ? "Itinerario día a día" : "Paradas del recorrido"}</h2>
          <ol className="mt-12 space-y-6">
            {tour.stops.map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-luxe-700 font-bold text-white">{i + 1}</span>
                <div className="card-elegant flex-1 p-6 hover:translate-y-0">
                  <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-600">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-center text-sm text-gray-500">Itinerario orientativo: se adapta a tus fechas, intereses y aeropuerto de llegada.</p>
        </AnimateOnScroll>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <div className="card-elegant hover:translate-y-0">
            <h2 className="text-xl font-bold text-gray-900">Incluye</h2>
            <ul className="mt-4 space-y-3 text-gray-600">
              {tour.includes.map((i) => (
                <li key={i} className="flex gap-3"><span className="text-luxe-600">✓</span>{i}</li>
              ))}
            </ul>
          </div>
          <div className="card-elegant hover:translate-y-0">
            <h2 className="text-xl font-bold text-gray-900">No incluye</h2>
            <ul className="mt-4 space-y-3 text-gray-600">
              {tour.notIncluded.map((i) => (
                <li key={i} className="flex gap-3"><span className="text-gray-400">–</span>{i}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-gray-600">
          Precio según número de personas y vehículo. <Link href="/presupuesto" className="text-luxe-700 underline decoration-luxe-300 underline-offset-2 hover:decoration-luxe-600">Pide tu presupuesto</Link>.
        </p>
      </section>

      <BlockRenderer block={{ type: "suunia", text: "¿Hoteles, restaurantes, guías o experiencias? Suunia, DMC partner, organiza el programa completo alrededor de este tour." }} />
      <CTASection title={`¿Hacemos ${tour.name.toLowerCase()}?`} description="Dime fechas, número de personas y aeropuerto de llegada. Recibes itinerario y precio en 24 horas laborables." />
      <FaqSection faqs={tour.faqs} />
      <BlockRenderer
        block={{
          type: "links",
          heading: "Otros tours",
          bg: "gray",
          items: others.map((t) => ({ title: t.name, text: `${t.duration} · ${t.summary}`, href: `/tours-con-chofer-galicia/${t.slug}`, image: t.image, alt: t.alt })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: tour.name,
          description: tour.metaDescription,
          url: absoluteUrl(`/tours-con-chofer-galicia/${tour.slug}`),
          provider: { "@id": `${SITE_URL}/#organization` },
          itinerary: { "@type": "ItemList", itemListElement: tour.stops.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.title, description: s.text })) },
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

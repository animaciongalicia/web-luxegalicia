import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { FaqSection } from "@/components/Blocks";
import CardGrid from "@/components/CardGrid";
import { serif } from "@/lib/fonts";
import JsonLd from "@/components/JsonLd";
import { TOURS } from "@/content/tours";
import { absoluteUrl } from "@/content/site";

const URL = absoluteUrl("/tours-con-chofer-galicia");

export const metadata: Metadata = {
  title: "Tours con chófer por Galicia: 3, 5, 7 días y excursiones",
  description:
    "Tours privados con chófer por Galicia: rutas de 3, 5 y 7 días y excursiones a Rías Baixas, Ribeira Sacra, Costa da Morte e Islas Cíes.",
  alternates: { canonical: URL, languages: { es: URL, en: absoluteUrl("/en/galicia-chauffeur-tours"), "x-default": URL } },
  openGraph: { locale: "es_ES", siteName: "Luxe Galicia", url: URL, images: ["/images/tours-rias-baixas.jpg"] },
};

const faqs = [
  { question: "¿Qué diferencia hay entre un tour con chófer y un viaje organizado?", answer: "En un tour con chófer contratas el vehículo, el chófer y la ruta. Hoteles, comidas y actividades los reservas tú o, si quieres el programa completo, Suunia, DMC partner, lo organiza." },
  { question: "¿Se pueden personalizar los itinerarios?", answer: "Sí. Los itinerarios son una base: se ajustan a tus fechas, intereses, aeropuerto de llegada y número de personas." },
  { question: "¿Para cuántas personas?", answer: "De 1 a 3 en berlina, hasta 7 en van ejecutiva y grupos mayores en minibús o autocar." },
];

export default function ToursPage() {
  const multi = TOURS.filter((t) => t.kind === "varios-dias");
  const day = TOURS.filter((t) => t.kind === "un-dia");
  return (
    <>
      <section className="relative flex min-h-[60vh] items-end overflow-hidden pt-16">
        <Image src="/images/tours-rias-baixas.jpg" alt="Viñedos de albariño en las Rías Baixas" fill priority quality={70} sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-12 pt-24 text-white lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Tours privados con chófer</p>
          <h1 className={`${serif.className} mt-3 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl`}>Tours con chófer por Galicia</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">De una excursión de un día a una semana recorriendo Galicia, en berlina o van ejecutiva y con una ruta pensada para ti.</p>
        </div>
      </section>

      <section className="bg-white px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className={`${serif.className} text-xl leading-relaxed text-gray-800 sm:text-2xl sm:leading-relaxed`}>
            Galicia no se entiende desde la autopista. Está en los miradores del Sil, en una bodega de Cambados, en el faro de Fisterra a última hora.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Llegar a esos sitios conduciendo tú, con curvas, sin aparcamiento y con una copa de albariño en la mano, no tiene sentido. Llegas por Santiago, A Coruña, Vigo u Oporto y el chófer se ocupa del resto. Cada itinerario es una base que se ajusta a tus fechas y a tu ritmo.
          </p>
        </div>
      </section>

      {/* Varios días */}
      <section className="bg-gray-50 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-2 border-b border-gray-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className={`${serif.className} text-3xl font-semibold text-gray-900`}>Rutas de varios días</h2>
            <p className="text-gray-500">Con el mismo chófer de principio a fin.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {multi.map((t) => (
              <Link key={t.slug} href={`/tours-con-chofer-galicia/${t.slug}`} className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-shadow hover:shadow-lg">
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image quality={60} src={t.image} alt={t.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(min-width: 768px) 50vw, 100vw" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-gray-900">{t.duration}</span>
                </div>
                <div className="p-7">
                  <h3 className={`${serif.className} text-2xl font-semibold text-gray-900 group-hover:text-luxe-800`}>{t.name}</h3>
                  <p className="mt-2 leading-relaxed text-gray-600">{t.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {t.highlights.map((h) => (
                      <li key={h.title} className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600">{h.title}</li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm font-semibold text-luxe-700">Ver itinerario →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Un día */}
      <section className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-2 border-b border-gray-100 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className={`${serif.className} text-3xl font-semibold text-gray-900`}>Excursiones de un día</h2>
            <p className="text-gray-500">Salida y regreso a tu hotel, puerto o aeropuerto.</p>
          </div>
          <CardGrid count={day.length}>
            {(w) => day.map((t) => (
              <Link key={t.slug} href={`/tours-con-chofer-galicia/${t.slug}`} className={`group flex flex-col ${w}`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
                  <Image quality={60} src={t.image} alt={t.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-luxe-700">{t.duration} · desde {t.base.split(",")[0]}</p>
                <h3 className={`${serif.className} mt-1 text-xl font-semibold leading-snug text-gray-900 group-hover:text-luxe-800`}>{t.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{t.summary}</p>
              </Link>
            ))}
          </CardGrid>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-12 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-600">¿Llegas en crucero o por Oporto?</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/excursiones-cruceros-galicia" className="rounded-full border border-gray-300 px-4 py-2 font-medium text-gray-700 hover:border-luxe-600 hover:text-luxe-700">Excursiones para cruceros</Link>
            <Link href="/oporto-galicia" className="rounded-full border border-gray-300 px-4 py-2 font-medium text-gray-700 hover:border-luxe-600 hover:text-luxe-700">Oporto ⇄ Galicia</Link>
            <Link href="/guias/galicia-con-chofer" className="rounded-full border border-gray-300 px-4 py-2 font-medium text-gray-700 hover:border-luxe-600 hover:text-luxe-700">Distancias reales en Galicia</Link>
          </div>
        </div>
      </section>

      <CTASection title="¿Diseñamos tu ruta por Galicia?" description="Dime cuántos días, cuántas personas y por dónde llegas. Te propongo itinerario y vehículo." />
      <FaqSection faqs={faqs} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Tours con chófer por Galicia",
          itemListElement: TOURS.map((t, i) => ({ "@type": "ListItem", position: i + 1, url: absoluteUrl(`/tours-con-chofer-galicia/${t.slug}`), name: t.name })),
        }}
      />
    </>
  );
}

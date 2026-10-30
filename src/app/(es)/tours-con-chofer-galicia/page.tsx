import type { Metadata } from "next";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";
import { BlockRenderer, FaqSection } from "@/components/Blocks";
import JsonLd from "@/components/JsonLd";
import { TOURS } from "@/content/tours";
import { absoluteUrl } from "@/content/site";

const URL = absoluteUrl("/tours-con-chofer-galicia");

export const metadata: Metadata = {
  title: "Tours con chófer por Galicia: 3, 5 y 7 días y excursiones de un día",
  description:
    "Tours privados con chófer por Galicia en van ejecutiva o berlina: rutas de 3, 5 y 7 días y excursiones a Rías Baixas, Ribeira Sacra, Ourense termal y Vigo e Islas Cíes.",
  alternates: { canonical: URL, languages: { es: URL, en: absoluteUrl("/en/galicia-chauffeur-tours") } },
  openGraph: { url: URL, images: ["/images/tours-rias-baixas.jpg"] },
};

const faqs = [
  { question: "¿Qué diferencia hay entre un tour con chófer y un viaje organizado?", answer: "En un tour con chófer contratas el vehículo, el chófer y la ruta. Hoteles, comidas y actividades los reservas tú o, si quieres el programa completo, Suunia (DMC partner) lo organiza todo." },
  { question: "¿Se pueden personalizar los itinerarios?", answer: "Sí. Los itinerarios son una base: se ajustan a tus fechas, intereses, aeropuerto de llegada y número de personas." },
  { question: "¿Para cuántas personas?", answer: "De 1 a 3 en berlina, hasta 7 en van ejecutiva y grupos mayores en minibús o autocar." },
];

export default function ToursPage() {
  const multi = TOURS.filter((t) => t.kind === "varios-dias");
  const day = TOURS.filter((t) => t.kind === "un-dia");
  const toItems = (list: typeof TOURS) =>
    list.map((t) => ({ title: t.name, text: `${t.duration} · ${t.summary}`, href: `/tours-con-chofer-galicia/${t.slug}`, image: t.image, alt: t.alt }));
  return (
    <>
      <HeroPage
        eyebrow="Tours privados con chófer"
        title="Tours con chófer por Galicia"
        subtitle="Van ejecutiva o berlina, chófer profesional y una ruta pensada para ti. De una excursión de un día a una semana recorriendo Galicia."
        imageSrc="/images/tours-rias-baixas.jpg"
        alt="Viñedos de albariño en las Rías Baixas"
      />
      <BlockRenderer
        block={{
          type: "intro",
          paragraphs: [
            "Galicia no se entiende desde la autopista. Está en los miradores del Sil, en una bodega de Cambados, en el faro de Fisterra a última hora. Llegar a esos sitios conduciendo tú, con curvas, sin aparcamiento y con una copa de albariño en la mano, no tiene sentido.",
            "Estos tours están pensados para empresas que vienen a conocer Galicia (viajes de inspección, clientes clave, comités) y para viajeros que quieren verla bien. Llegas por Santiago, A Coruña, Vigo u Oporto y el chófer se ocupa del resto.",
          ],
        }}
      />
      <BlockRenderer block={{ type: "links", heading: "Rutas de varios días", bg: "gray", items: toItems(multi) }} />
      <BlockRenderer block={{ type: "links", heading: "Excursiones de un día", items: toItems(day) }} />
      <BlockRenderer
        block={{
          type: "links",
          heading: "Más opciones",
          bg: "gray",
          items: [
            { title: "Excursiones para cruceros", text: "Desde los puertos de A Coruña y Vigo.", href: "/excursiones-cruceros-galicia" },
            { title: "Oporto y Galicia", text: "Empieza el viaje en Oporto y sube hacia Galicia.", href: "/oporto-galicia" },
            { title: "Guía: moverse por Galicia con chófer", text: "Distancias y tiempos reales.", href: "/guias/galicia-con-chofer" },
          ],
        }}
      />
      <BlockRenderer block={{ type: "suunia", text: "¿Quieres el viaje completo, con hoteles, restaurantes y experiencias? Suunia, DMC partner, diseña el programa y Luxe Galicia pone el vehículo y el chófer." }} />
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

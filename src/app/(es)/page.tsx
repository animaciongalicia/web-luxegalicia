import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { FaqSection } from "@/components/Blocks";
import JsonLd from "@/components/JsonLd";
import { SITE, SITE_URL, absoluteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Luxe Galicia – Transporte premium para congresos, eventos y empresas en Galicia",
  description:
    "Transporte premium con chófer en Galicia y Oporto para congresos, incentivos, empresas y agencias MICE. Berlinas, vans de lujo, minibuses y autocares. Desde 2013. Presupuesto en 24 h.",
  alternates: { canonical: SITE_URL, languages: { es: SITE_URL, en: absoluteUrl("/en") } },
  openGraph: {
    title: "Luxe Galicia – Transporte premium en Galicia",
    description: "Congresos, incentivos, empresas y tours con chófer en Galicia y Oporto.",
    url: SITE_URL,
    images: [{ url: "/images/flota-luxe-galicia.jpg", width: 1200, height: 630, alt: "Flota premium de Luxe Galicia" }],
  },
};

const problemas = [
  "Necesitas 15 vehículos el mismo día y los proveedores locales tienen tres.",
  "Organizas desde Madrid, Barcelona o fuera de España y no conoces a nadie en destino.",
  "El programa cambia a las once de la noche y alguien tiene que reorganizarlo todo.",
  "Tus asistentes llegan por cuatro aeropuertos distintos: Santiago, A Coruña, Vigo y Oporto.",
  "Tu cliente VIP no puede esperar ni un minuto en la sala de llegadas.",
  "Quieres un presupuesto claro y una sola factura, no cinco proveedores.",
];

const destacados = [
  {
    title: "Eventos & MICE",
    text: "Congresos, incentivos y festivales: lanzaderas, aeropuertos, ponentes y cena de gala. Para agencias y organizadores que vienen de fuera.",
    href: "/transporte-eventos-galicia",
    image: "/images/sala-eventos-empresas.jpg",
    alt: "Sala de congresos preparada en Galicia",
  },
  {
    title: "Empresas",
    text: "Visitas, inspecciones, desarrollo comercial y chófer a disposición por horas o días.",
    href: "/transporte-empresas-galicia",
    image: "/images/traslados-chofer-coruna.jpg",
    alt: "Ejecutivo con chófer en una visita de empresa en Galicia",
  },
  {
    title: "Tours con chófer",
    text: "Galicia en 3, 5 o 7 días en van de lujo, o excursiones de un día por las Rías Baixas y la Ribeira Sacra.",
    href: "/tours-con-chofer-galicia",
    image: "/images/tours-rias-baixas.jpg",
    alt: "Viñedos de albariño en las Rías Baixas",
  },
];

const servicios = [
  { title: "Traslados desde A Coruña, Santiago y Vigo", text: "A toda Galicia, Oporto, Asturias y Madrid, con precios orientativos por trayecto y vehículo.", href: "/traslados" },
  { title: "Oporto, puerta de entrada a Galicia", text: "Del aeropuerto de Oporto a Vigo, Rías Baixas, Santiago o A Coruña, puerta a puerta.", href: "/oporto-galicia" },
  { title: "Camino de Santiago", text: "Inicio de etapa, vehículo de apoyo y regreso para grupos y agencias del Camino.", href: "/transporte-camino-de-santiago" },
  { title: "Flota disponible", text: "Berlinas premium y de lujo, vans Clase V, minibuses VIP y autocares.", href: "/flota" },
];

const partners = [
  { name: "Suunia", text: "DMC en Galicia: viajes a medida, incentivos y programas completos en destino.", href: SITE.suuniaUrl },
  { name: "SeaGalicia", text: "Experiencias náuticas y alquiler de barcos con patrón en las Rías Baixas.", href: "https://www.seagalicia.com" },
  { name: "MilEventosGalicia", text: "Producción de eventos corporativos, cenas de gala y team building.", href: "https://mileventosgalicia.com" },
];

const motivos = [
  { title: `Desde ${SITE.since}`, text: "Más de una década moviendo congresos, empresas y viajeros por Galicia." },
  { title: "De 1 a 500 personas", text: "De una berlina para un ponente a una operativa completa de autocares." },
  { title: "Galicia, Oporto, Madrid y Asturias", text: "Bases en A Coruña, Santiago y Vigo, y colaboradores en Oporto y Madrid." },
  { title: "Un interlocutor, 24 h", text: "Una persona responsable de tu servicio, de principio a fin." },
];

const faqs = [
  { question: "¿Qué tipo de servicios de transporte ofrece Luxe Galicia?", answer: "Transporte premium con chófer para congresos, incentivos, festivales y eventos corporativos; transporte para empresas (visitas, inspecciones, desarrollo comercial); traslados desde A Coruña, Santiago, Vigo y Oporto; transporte para grupos del Camino de Santiago y tours con chófer por Galicia." },
  { question: "¿En qué zonas trabajáis?", answer: "Toda Galicia, con bases en A Coruña, Santiago y Vigo, y traslados a Oporto, Asturias, León y Madrid." },
  { question: "¿Cuánto se tarda en recibir un presupuesto?", answer: "Menos de 24 horas laborables. Para urgencias, WhatsApp directo." },
  { question: "¿Trabajáis con agencias de fuera de Galicia?", answer: "Sí. Agencias MICE, DMC y organizadores de Madrid, Barcelona y otros países son el cliente principal, con condiciones específicas y opción de marca blanca." },
];

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden lg:min-h-[75vh]">
        <Image src="/images/flota-luxe-galicia.jpg" alt="Berlinas Mercedes Clase S y vans Clase V de Luxe Galicia" fill className="object-cover" priority quality={75} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center text-white lg:py-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-300">Transporte premium · Galicia &amp; Oporto</p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Transporte premium para congresos, eventos y empresas en Galicia
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-200 sm:text-lg md:text-xl">
            Berlinas, vans de lujo, minibuses y autocares con chófer. Una sola llamada, un único interlocutor y toda la operativa resuelta, de una persona a quinientas.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/presupuesto" className="inline-flex items-center gap-2 rounded-lg bg-luxe-600 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-luxe-700 hover:shadow-lg">
              Pedir presupuesto
            </Link>
            <Link href="/agencias-mice" className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10">
              Soy agencia
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Presentación */}
      <section className="section-padding bg-white">
        <AnimateOnScroll className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-section">Tu partner de movilidad en Galicia</h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Te voy a decir la verdad: un evento no falla por el vehículo. Falla por la coordinación. Luxe Galicia existe para que eso no te pase.
            </p>
          </div>
          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">¿Qué hace Luxe Galicia?</h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                Planifica y ejecuta el transporte con chófer de congresos, incentivos, festivales y empresas que vienen a Galicia. Pone a tu disposición la flota que necesitas, del coche ejecutivo al autocar, y la coordina como una sola operativa.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                Trabaja sobre todo para <Link href="/agencias-mice" className="text-luxe-700 underline decoration-luxe-300 underline-offset-2 hover:decoration-luxe-600">agencias MICE</Link> y empresas de fuera que necesitan un partner local fiable.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">¿Dónde?</h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                En toda Galicia, con salidas desde <Link href="/traslados-desde-coruna" className="text-luxe-700 underline decoration-luxe-300 underline-offset-2 hover:decoration-luxe-600">A Coruña</Link>, <Link href="/traslados-desde-santiago" className="text-luxe-700 underline decoration-luxe-300 underline-offset-2 hover:decoration-luxe-600">Santiago</Link> y <Link href="/traslados-desde-vigo" className="text-luxe-700 underline decoration-luxe-300 underline-offset-2 hover:decoration-luxe-600">Vigo</Link>, y hacia Oporto, Asturias y Madrid.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                <Link href="/oporto-galicia" className="text-luxe-700 underline decoration-luxe-300 underline-offset-2 hover:decoration-luxe-600">Oporto</Link> es la puerta de entrada de muchos asistentes internacionales: se cubre como si estuviera en Galicia.
              </p>
            </div>
          </div>
          <div className="mt-16">
            <h3 className="text-center text-xl font-semibold text-gray-900">¿Te suena alguna de estas situaciones?</h3>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {problemas.map((p) => (
                <li key={p} className="flex gap-3 text-gray-600">
                  <svg aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-luxe-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>
      </section>

      {/* 3. Destacados */}
      <section className="section-padding bg-gray-50">
        <AnimateOnScroll className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="heading-section">Lo que mueve Luxe Galicia</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {destacados.map((d) => (
              <Link key={d.href} href={d.href} className="group stagger-child overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="relative h-56 overflow-hidden">
                  <Image src={d.image} alt={d.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 768px) 33vw, 100vw" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{d.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-luxe-700">Descubrir más →</span>
                </div>
              </Link>
            ))}
          </div>
        </AnimateOnScroll>
      </section>

      {/* 4. Servicios */}
      <section className="section-padding bg-white">
        <AnimateOnScroll className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="heading-section">Traslados y servicios</h2>
            <p className="mt-4 text-lg text-gray-600">Precios orientativos a la vista. Porque quieres saber de qué cifra hablas antes de pedir nada.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {servicios.map((s) => (
              <Link key={s.href} href={s.href} className="card-elegant group stagger-child block">
                <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{s.text}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-luxe-700">Ver más →</span>
              </Link>
            ))}
          </div>
        </AnimateOnScroll>
      </section>

      {/* 5. CTA */}
      <CTASection />

      {/* 6. Partners */}
      <section className="section-padding bg-gray-50">
        <AnimateOnScroll className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="heading-section">Partners en Galicia</h2>
            <p className="mt-4 text-lg text-gray-600">Cuando tu evento necesita algo más que transporte.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {partners.map((p) => (
              <a key={p.name} href={p.href} className="card-elegant stagger-child text-center">
                <h3 className="text-lg font-semibold text-luxe-800">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{p.text}</p>
              </a>
            ))}
          </div>
        </AnimateOnScroll>
      </section>

      {/* 7. Por qué Luxe */}
      <section className="section-padding bg-white">
        <AnimateOnScroll className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="heading-section">¿Por qué Luxe Galicia?</h2>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {motivos.map((m) => (
              <div key={m.title} className="stagger-child text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-luxe-50 text-luxe-700">
                  <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{m.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">Guías destacadas</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <Link href="/guias/transporte-congresos-eventos-galicia" className="btn-outline">Transporte para eventos</Link>
              <Link href="/guias/oporto-galicia-como-llegar" className="btn-outline">De Oporto a Galicia</Link>
              <Link href="/guias/transporte-palexco" className="btn-outline">Transporte a Palexco</Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      <CTASection
        title="Cuando te pongas en serio con tu evento, no querrás volver atrás"
        description="Cuéntame fechas, personas y ciudades. Propuesta clara en 24 horas laborables."
      />
      <FaqSection faqs={faqs} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
        }}
      />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import CardGrid from "@/components/CardGrid";
import { GUIAS, getGuia } from "@/content/guias";
import type { Guide } from "@/content/types";
import { absoluteUrl } from "@/content/site";
import { serif } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Guías de transporte y eventos en Galicia | Luxe Galicia",
  description:
    "Guías prácticas para organizar el transporte de congresos, eventos, viajes de empresa y grupos en Galicia y Oporto: sedes, aeropuertos, distancias y logística.",
  alternates: { canonical: absoluteUrl("/guias") },
};

const FEATURED = "ano-santo-2027-transporte-grupos";

const SECTIONS = [
  { id: "esenciales", category: "Guía", title: "Guías esenciales", intro: "Lo básico para mover a un grupo por Galicia sin sorpresas." },
  { id: "sedes", category: "Sede", title: "Guías por sede", intro: "Cómo llegar, dónde parar y cuánto transporte necesita cada recinto." },
  { id: "articulos", category: "Artículo", title: "Artículos", intro: "Temas concretos: fechas, eventos, comparativas y casos reales." },
] as const;

function Meta({ g }: { g: Guide }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-wider text-luxe-700">
      {g.category} · {g.readMinutes} min
    </p>
  );
}

export default function GuiasPage() {
  const featured = getGuia(FEATURED)!;
  return (
    <>
      <section className="bg-luxe-950 px-6 pb-14 pt-32 text-white lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Guías</p>
          <h1 className={`${serif.className} mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl`}>Guías para mover gente por Galicia</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-luxe-100">
            Congresos, sedes, viajes de empresa, el Camino y Oporto. Lo que funciona, contado por quien lo hace a diario.
          </p>
          <nav aria-label="Secciones" className="mt-8 flex flex-wrap gap-3">
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white hover:text-luxe-900">
                {s.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Destacado */}
      <section className="bg-white px-6 pt-14 lg:px-8">
        <Link href={`/guias/${featured.slug}`} className="group mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-gray-100 shadow-sm transition-shadow hover:shadow-lg md:grid-cols-5">
          <div className="relative min-h-[260px] overflow-hidden md:col-span-3">
            <Image src={featured.image} alt={featured.alt} fill priority className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(min-width: 768px) 60vw, 100vw" />
          </div>
          <div className="flex flex-col justify-center p-8 md:col-span-2 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Destacado</p>
            <h2 className={`${serif.className} mt-3 text-2xl font-semibold leading-snug text-gray-900 md:text-3xl`}>{featured.title}</h2>
            <p className="mt-4 leading-relaxed text-gray-600">{featured.metaDescription}</p>
            <span className="mt-6 text-sm font-semibold text-luxe-700">Leer artículo · {featured.readMinutes} min →</span>
          </div>
        </Link>
      </section>

      {SECTIONS.map((sec) => {
        const items = GUIAS.filter((x) => x.category === sec.category && x.slug !== FEATURED);
        return (
          <section key={sec.id} id={sec.id} className="scroll-mt-20 bg-white px-6 py-16 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <div className="mb-10 flex flex-col gap-2 border-b border-gray-100 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <h2 className={`${serif.className} text-3xl font-semibold text-gray-900`}>{sec.title}</h2>
                <p className="text-gray-500">{sec.intro}</p>
              </div>

              {sec.id === "sedes" ? (
                <div className="grid gap-5 md:grid-cols-2">
                  {items.map((x) => (
                    <Link key={x.slug} href={`/guias/${x.slug}`} className="group flex items-center gap-5 rounded-2xl border border-gray-100 p-3 transition-all hover:border-luxe-200 hover:shadow-md">
                      <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-40">
                        <Image src={x.image} alt={x.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="160px" />
                      </div>
                      <div className="min-w-0 pr-2">
                        <Meta g={x} />
                        <h3 className="mt-1.5 font-semibold leading-snug text-gray-900 group-hover:text-luxe-800">{x.title}</h3>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <CardGrid count={items.length} maxCols={sec.id === "articulos" ? 4 : 3}>
                  {(w) =>
                    items.map((x) => (
                      <Link key={x.slug} href={`/guias/${x.slug}`} className={`group flex flex-col ${w}`}>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                          <Image src={x.image} alt={x.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                        </div>
                        <div className="pt-5">
                          <Meta g={x} />
                          <h3 className={`${serif.className} mt-2 text-xl font-semibold leading-snug text-gray-900 group-hover:text-luxe-800`}>{x.title}</h3>
                          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-500">{x.metaDescription}</p>
                        </div>
                      </Link>
                    ))
                  }
                </CardGrid>
              )}
            </div>
          </section>
        );
      })}
      <CTASection />
    </>
  );
}

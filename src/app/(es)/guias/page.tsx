import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import CardGrid from "@/components/CardGrid";
import { GUIAS } from "@/content/guias";
import { absoluteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Guías de transporte y eventos en Galicia | Luxe Galicia",
  description:
    "Guías prácticas para organizar el transporte de congresos, eventos, viajes de empresa y grupos en Galicia y Oporto: sedes, aeropuertos, distancias y logística.",
  alternates: { canonical: absoluteUrl("/guias") },
};

const GROUPS = [
  { category: "Guía", title: "Guías esenciales" },
  { category: "Sede", title: "Guías por sede" },
  { category: "Artículo", title: "Artículos" },
] as const;

export default function GuiasPage() {
  return (
    <>
      <section className="bg-luxe-800 px-6 pb-16 pt-32 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">Guías</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Guías para mover gente por Galicia</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-luxe-100">
          Congresos, eventos, viajes de empresa, el Camino y Oporto. Lo que funciona, explicado sin rodeos.
        </p>
      </section>
      {GROUPS.map((g, gi) => {
        const items = GUIAS.filter((x) => x.category === g.category);
        if (!items.length) return null;
        return (
          <section key={g.category} className={`section-padding ${gi % 2 ? "bg-gray-50" : "bg-white"}`}>
            <div className="mx-auto max-w-7xl">
              <h2 className="heading-section mb-10 text-center">{g.title}</h2>
              <CardGrid count={items.length}>
                {(w) => items.map((x) => (
                  <Link key={x.slug} href={`/guias/${x.slug}`} className={`group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${w}`}>
                    <div className="relative h-48 overflow-hidden">
                      <Image src={x.image} alt={x.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-luxe-700">{x.category} · {x.readMinutes} min</p>
                      <h3 className="mt-2 text-lg font-semibold text-gray-900">{x.title}</h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-600">{x.metaDescription}</p>
                    </div>
                  </Link>
                ))}
              </CardGrid>
            </div>
          </section>
        );
      })}
      <CTASection />
    </>
  );
}

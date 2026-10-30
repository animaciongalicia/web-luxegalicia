import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import QuoteForm from "@/components/QuoteForm";
import { FLOTA } from "@/content/flota";
import { PRECIOS, VEHICLE_LABELS, formatPrecio, type VehicleKey } from "@/content/precios";
import { SITE } from "@/content/site";
import type { Block, Faq, Lang } from "@/content/types";

const sectionBg = (bg?: "gray") => (bg === "gray" ? "bg-gray-50" : "bg-white");

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-luxe-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

function SectionHeading({ heading, intro }: { heading?: string; intro?: string }) {
  if (!heading) return null;
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <h2 className="heading-section">{heading}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-gray-600">{intro}</p>}
    </div>
  );
}

const VEHICLE_ORDER: VehicleKey[] = ["berlina", "van", "minibus", "autocar"];

export function RouteTable({ rows, lang = "es" }: { rows: { destino: string; km: number; tiempo: string; precio?: string }[]; lang?: Lang }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead className="bg-luxe-50 text-xs uppercase tracking-wider text-luxe-800">
          <tr>
            <th scope="col" className="px-5 py-4 font-semibold">{lang === "en" ? "Destination" : "Destino"}</th>
            <th scope="col" className="px-5 py-4 font-semibold">{lang === "en" ? "Distance / time" : "Distancia / tiempo"}</th>
            {VEHICLE_ORDER.map((v) => (
              <th key={v} scope="col" className="px-5 py-4 font-semibold">
                {VEHICLE_LABELS[v][lang]}
                <span className="block text-[10px] font-medium normal-case tracking-normal text-gray-500">{VEHICLE_LABELS[v].pax} pax</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((r) => {
            const p = r.precio ? PRECIOS[r.precio] : undefined;
            return (
              <tr key={r.destino} className="text-gray-600">
                <th scope="row" className="px-5 py-4 font-semibold text-gray-900">{r.destino}</th>
                <td className="px-5 py-4 whitespace-nowrap">~{r.km} km · {r.tiempo}</td>
                {VEHICLE_ORDER.map((v) => (
                  <td key={v} className="px-5 py-4 whitespace-nowrap">{formatPrecio(p?.[v], lang)}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function FleetGrid({ lang = "es" }: { lang?: Lang }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {FLOTA.map((v) => (
        <article key={v.key} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="relative h-48 bg-gray-100">
            <Image src={v.image} alt={v.alt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
          </div>
          <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-luxe-700">{v.pax}</p>
            <h3 className="mt-1 text-lg font-semibold text-gray-900">{lang === "en" ? v.nameEn : v.name}</h3>
            <p className="mt-2 text-sm text-gray-500">{v.models}</p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">{lang === "en" ? v.usesEn : v.uses}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function FaqSection({ faqs, lang = "es" }: { faqs: Faq[]; lang?: Lang }) {
  if (!faqs.length) return null;
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-4xl">
        <h2 className="heading-section text-center">{lang === "en" ? "Frequently asked questions" : "Preguntas frecuentes"}</h2>
        <div className="mt-12 space-y-8">
          {faqs.map((f) => (
            <div key={f.question} className="border-b border-gray-100 pb-8 last:border-0">
              <h3 className="text-lg font-semibold text-gray-900">{f.question}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">{f.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlockRenderer({ block, lang = "es" }: { block: Block; lang?: Lang }) {
  switch (block.type) {
    case "intro":
      return (
        <section className="section-padding bg-white">
          <AnimateOnScroll className="mx-auto max-w-4xl">
            {block.heading && <h2 className="heading-section">{block.heading}</h2>}
            <div className={`${block.heading ? "mt-6" : ""} space-y-5 text-lg leading-relaxed text-gray-600`}>
              {block.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </AnimateOnScroll>
        </section>
      );

    case "prose":
      return (
        <section className="section-padding bg-white">
          <div className="mx-auto max-w-3xl">
            {block.heading && <h2 className="text-2xl font-bold tracking-tight text-gray-900">{block.heading}</h2>}
            <div className="mt-4 space-y-4 leading-relaxed text-gray-600">
              {block.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      );

    case "features": {
      const cols = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[block.columns || 3];
      return (
        <section className={`section-padding ${sectionBg(block.bg)}`}>
          <AnimateOnScroll className="mx-auto max-w-7xl">
            <SectionHeading heading={block.heading} intro={block.intro} />
            <div className={`grid gap-8 ${cols}`}>
              {block.items.map((item) => (
                <div key={item.title} className="card-elegant stagger-child">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </section>
      );
    }

    case "checklist":
      return (
        <section className={`section-padding ${sectionBg(block.bg)}`}>
          <AnimateOnScroll className="mx-auto max-w-5xl">
            <SectionHeading heading={block.heading} intro={block.intro} />
            <ul className="grid gap-5 sm:grid-cols-2">
              {block.items.map((item) => (
                <li key={item} className="flex gap-3 text-gray-600">
                  <CheckIcon />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>
        </section>
      );

    case "steps":
      return (
        <section className={`section-padding ${sectionBg(block.bg)}`}>
          <AnimateOnScroll className="mx-auto max-w-6xl">
            <SectionHeading heading={block.heading} intro={block.intro} />
            <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {block.items.map((item, i) => (
                <li key={item.title} className="stagger-child text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-luxe-700 text-lg font-bold text-white">{i + 1}</span>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.text}</p>
                </li>
              ))}
            </ol>
          </AnimateOnScroll>
        </section>
      );

    case "zigzag":
      return (
        <section className={`section-padding ${sectionBg(block.bg)}`}>
          <div className="mx-auto max-w-6xl">
            {block.heading && <SectionHeading heading={block.heading} />}
            <div className="space-y-16">
              {block.items.map((item, i) => (
                <AnimateOnScroll key={item.title} className="grid items-center gap-8 md:grid-cols-2">
                  <div className={`relative h-72 overflow-hidden rounded-2xl ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <Image src={item.image} alt={item.alt} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">{item.title}</h3>
                    <div className="mt-4 space-y-4 leading-relaxed text-gray-600">
                      {item.paragraphs.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      );

    case "routes":
      return (
        <section className={`section-padding ${sectionBg(block.bg)}`}>
          <AnimateOnScroll className="mx-auto max-w-6xl">
            <SectionHeading heading={block.heading} intro={block.intro} />
            <RouteTable rows={block.rows} lang={lang} />
            <p className="mt-4 text-center text-xs text-gray-500">
              {block.note ||
                (lang === "en"
                  ? "Indicative one-way prices, VAT included. Distances and times are approximate. Final price depends on date, schedule and waiting time."
                  : "Precios orientativos por trayecto, IVA incluido. Distancias y tiempos aproximados. El precio final depende de fecha, horario y tiempos de espera.")}
            </p>
          </AnimateOnScroll>
        </section>
      );

    case "links":
      return (
        <section className={`section-padding ${sectionBg(block.bg)}`}>
          <AnimateOnScroll className="mx-auto max-w-7xl">
            <SectionHeading heading={block.heading} intro={block.intro} />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {block.items.map((item) =>
                item.image ? (
                  <Link key={item.href + item.title} href={item.href} className="group stagger-child overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="relative h-56 overflow-hidden">
                      <Image src={item.image} alt={item.alt || item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      {item.text && <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.text}</p>}
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-luxe-700">
                        {lang === "en" ? "See more" : "Ver más"} <Arrow />
                      </span>
                    </div>
                  </Link>
                ) : (
                  <Link key={item.href + item.title} href={item.href} className="card-elegant group stagger-child block">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    {item.text && <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.text}</p>}
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-luxe-700">
                      {lang === "en" ? "See more" : "Ver más"} <Arrow />
                    </span>
                  </Link>
                )
              )}
            </div>
          </AnimateOnScroll>
        </section>
      );

    case "fleet":
      return (
        <section className={`section-padding ${sectionBg(block.bg)}`}>
          <div className="mx-auto max-w-7xl">
            <SectionHeading heading={block.heading} intro={block.intro} />
            <FleetGrid lang={lang} />
          </div>
        </section>
      );

    case "quote":
      return (
        <section id="quote" className={`section-padding scroll-mt-20 ${sectionBg(block.bg)}`}>
          <div className="mx-auto max-w-3xl">
            <SectionHeading heading={block.heading} intro={block.intro} />
            <QuoteForm lang={lang} />
            <p className="mt-6 text-center text-sm text-gray-500">
              {SITE.phone} · {SITE.email}
            </p>
          </div>
        </section>
      );

    case "suunia":
      return (
        <section className="bg-white px-6 pb-4 md:px-12 lg:px-20 xl:px-32">
          <div className="mx-auto flex max-w-4xl flex-col items-start gap-4 rounded-2xl border border-luxe-100 bg-luxe-50 p-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="leading-relaxed text-luxe-900">{block.text}</p>
            <a href={SITE.suuniaUrl} className="btn-outline shrink-0">
              Suunia DMC
            </a>
          </div>
        </section>
      );
  }
}

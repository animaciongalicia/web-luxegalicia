import type { MetadataRoute } from "next";
import { PAGES_ES, PAGES_EN } from "@/content/pages";
import { TOURS } from "@/content/tours";
import { GUIAS } from "@/content/guias";
import { absoluteUrl } from "@/content/site";

const LAST_MODIFIED = new Date("2026-10-30");

const PRIORITY: Record<string, number> = {
  "agencias-mice": 0.95,
  "transporte-eventos-galicia": 0.95,
  "transporte-eventos-deportivos": 0.8,
  "transporte-congresos-galicia": 0.9,
  "transporte-empresas-galicia": 0.9,
  "oporto-galicia": 0.9,
  traslados: 0.85,
  "alquiler-autocar-con-conductor-galicia": 0.9,
  "traslados-desde-coruna": 0.85,
  "traslados-desde-santiago": 0.85,
  "traslados-desde-vigo": 0.85,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (path: string, priority: number, changeFrequency: "weekly" | "monthly" = "monthly") => ({
    url: absoluteUrl(path),
    lastModified: LAST_MODIFIED,
    changeFrequency,
    priority,
  });
  return [
    entry("/", 1, "weekly"),
    ...PAGES_ES.filter((p) => !p.noindex).map((p) => entry(`/${p.slug}`, PRIORITY[p.slug] ?? 0.7)),
    entry("/tours-con-chofer-galicia", 0.85),
    ...TOURS.map((t) => entry(`/tours-con-chofer-galicia/${t.slug}`, t.slug === "pazos-y-camelias" ? 0.4 : 0.7)),
    entry("/guias", 0.7, "weekly"),
    ...GUIAS.map((g) => entry(`/guias/${g.slug}`, g.slug === "transporte-palexco" ? 0.85 : g.slug === "como-llegar-estadio-riazor" ? 0.75 : g.category === "Guía" ? 0.75 : 0.65)),
    entry("/en", 0.8),
    ...PAGES_EN.map((p) => entry(`/en/${p.slug}`, 0.75)),
  ];
}

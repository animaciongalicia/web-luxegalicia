import type { MetadataRoute } from "next";
import { PAGES_ES, PAGES_EN } from "@/content/pages";
import { TOURS } from "@/content/tours";
import { guiasPublicadas } from "@/content/guias";
import { absoluteUrl } from "@/content/site";

// Real update dates: set the date when a section's content changes, not on every deploy.
const PAGES_UPDATED = new Date("2026-11-03");
const TOURS_UPDATED = new Date("2026-11-02");

const PRIORITY: Record<string, number> = {
  "agencias-mice": 0.95,
  "transporte-eventos-galicia": 0.95,
  "transporte-eventos-deportivos": 0.8,
  "transporte-congresos-galicia": 0.9,
  "transporte-empresas-galicia": 0.9,
  "oporto-galicia": 0.9,
  traslados: 0.85,
  "alquiler-autocar-con-conductor-galicia": 0.9,
  "alquiler-minibus-con-conductor-galicia": 0.9,
  "alquiler-van-con-conductor-galicia": 0.85,
  "chofer-privado-galicia": 0.9,
  "traslados-desde-coruna": 0.85,
  "traslados-desde-santiago": 0.85,
  "traslados-desde-vigo": 0.85,
};

// Se regenera cada hora para incluir las guías programadas el día de su fecha.
export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (path: string, priority: number, changeFrequency: "weekly" | "monthly" = "monthly", lastModified: Date = PAGES_UPDATED) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  });
  return [
    entry("/", 1, "weekly"),
    ...PAGES_ES.filter((p) => !p.noindex).map((p) => entry(`/${p.slug}`, PRIORITY[p.slug] ?? 0.7)),
    entry("/tours-con-chofer-galicia", 0.85, "monthly", TOURS_UPDATED),
    ...TOURS.map((t) => entry(`/tours-con-chofer-galicia/${t.slug}`, t.slug === "pazos-y-camelias" ? 0.4 : 0.7, "monthly", TOURS_UPDATED)),
    entry("/guias", 0.7, "weekly"),
    ...guiasPublicadas().map((g) =>
      entry(`/guias/${g.slug}`, g.slug === "transporte-palexco" ? 0.85 : g.slug === "como-llegar-estadio-riazor" ? 0.75 : g.category === "Guía" ? 0.75 : 0.65, "monthly", new Date(g.date))
    ),
    entry("/en", 0.8),
    ...PAGES_EN.map((p) => entry(`/en/${p.slug}`, 0.75)),
  ];
}

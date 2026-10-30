import { PAGES_MICE } from "./pages-mice";
import { PAGES_TRASLADOS } from "./pages-traslados";
import { PAGES_OTROS } from "./pages-otros";
import { PAGES_EN } from "./pages-en";

export const PAGES_ES = [...PAGES_MICE, ...PAGES_TRASLADOS, ...PAGES_OTROS];
export { PAGES_EN };

export function getPage(slug: string, lang: "es" | "en" = "es") {
  return (lang === "en" ? PAGES_EN : PAGES_ES).find((p) => p.slug === slug);
}

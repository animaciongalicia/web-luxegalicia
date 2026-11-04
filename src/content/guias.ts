import type { Guide } from "./types";
import { GUIAS_DATA } from "./guias-data";

// Cada guía vive en su propio archivo en src/content/guias-data/.
//
// PUBLICACIÓN PROGRAMADA: una guía con `date` futura ya puede estar en el repo,
// pero no aparece en la web (ni en el índice, ni en el sitemap, ni por URL)
// hasta ese día a las 07:00 de Madrid. Las páginas de guías y el sitemap se
// regeneran cada hora (revalidate), así que salen solas sin volver a desplegar.
const PUBLISH_HOUR_UTC = 6; // 07:00 en invierno, 08:00 en verano (Madrid)

export function isPublished(g: Guide, now: Date = new Date()) {
  const [y, m, d] = g.date.split("-").map(Number);
  return Date.UTC(y, m - 1, d, PUBLISH_HOUR_UTC) <= now.getTime();
}

/** Guías ya publicadas, calculadas en el momento de la petición. */
export function guiasPublicadas(now: Date = new Date()): Guide[] {
  return GUIAS_DATA.filter((g) => isPublished(g, now));
}

/** Guías programadas para más adelante (solo para revisión interna). */
export function guiasProgramadas(now: Date = new Date()): Guide[] {
  return GUIAS_DATA.filter((g) => !isPublished(g, now));
}

export function getGuia(slug: string) {
  const g = GUIAS_DATA.find((x) => x.slug === slug);
  return g && isPublished(g) ? g : undefined;
}

import type { Guide } from "./types";
import { GUIAS_DATA } from "./guias-data";

// Cada guía vive en su propio archivo en src/content/guias-data/.
export const GUIAS: Guide[] = GUIAS_DATA;

export function getGuia(slug: string) {
  return GUIAS.find((g) => g.slug === slug);
}

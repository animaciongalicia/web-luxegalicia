import type { Tour } from "./types";
import { TOURS_VARIOS_DIAS } from "./tours-data/varios-dias";
import { TOURS_UN_DIA } from "./tours-data/un-dia";

// Rutas de varios días primero; las excursiones de un día en el orden de la carta.
export const TOURS: Tour[] = [...TOURS_VARIOS_DIAS, ...TOURS_UN_DIA];

export function getTour(slug: string) {
  return TOURS.find((t) => t.slug === slug);
}

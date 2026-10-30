/**
 * Precios orientativos "desde" (IVA incluido) por ruta y tipo de vehículo.
 *
 * PENDIENTE: rellenar con las tarifas reales. Mientras un valor sea null,
 * la web muestra "Consultar". Basta con cambiar el número aquí: todas las
 * tablas de traslados se actualizan solas.
 */
export type VehicleKey = "berlina" | "van" | "minibus" | "autocar";

export const VEHICLE_LABELS: Record<VehicleKey, { es: string; en: string; pax: string }> = {
  berlina: { es: "Berlina premium", en: "Premium sedan", pax: "1-3" },
  van: { es: "Van de lujo", en: "Luxury van", pax: "1-7" },
  minibus: { es: "Minibús", en: "Minibus", pax: "8-19" },
  autocar: { es: "Autocar", en: "Coach", pax: "20-55" },
};

type Precio = Partial<Record<VehicleKey, number | null>>;

const vacio: Precio = { berlina: null, van: null, minibus: null, autocar: null };

export const PRECIOS: Record<string, Precio> = {
  // Desde A Coruña
  "coruna-santiago": { ...vacio },
  "coruna-ferrol": { ...vacio },
  "coruna-lugo": { ...vacio },
  "coruna-pontevedra": { ...vacio },
  "coruna-vigo": { ...vacio },
  "coruna-ourense": { ...vacio },
  "coruna-oporto": { ...vacio },
  "coruna-oviedo": { ...vacio },
  "coruna-madrid": { ...vacio },
  // Desde Santiago
  "santiago-coruna": { ...vacio },
  "santiago-pontevedra": { ...vacio },
  "santiago-vigo": { ...vacio },
  "santiago-lugo": { ...vacio },
  "santiago-ourense": { ...vacio },
  "santiago-sanxenxo": { ...vacio },
  "santiago-oporto": { ...vacio },
  "santiago-oviedo": { ...vacio },
  "santiago-madrid": { ...vacio },
  // Desde Vigo
  "vigo-pontevedra": { ...vacio },
  "vigo-sanxenxo": { ...vacio },
  "vigo-santiago": { ...vacio },
  "vigo-ourense": { ...vacio },
  "vigo-coruna": { ...vacio },
  "vigo-oporto": { ...vacio },
  "vigo-madrid": { ...vacio },
  // Desde Oporto (aeropuerto)
  "oporto-vigo": { ...vacio },
  "oporto-pontevedra": { ...vacio },
  "oporto-sanxenxo": { ...vacio },
  "oporto-santiago": { ...vacio },
  "oporto-coruna": { ...vacio },
};

export function formatPrecio(value: number | null | undefined, lang: "es" | "en" = "es") {
  if (value == null) return lang === "en" ? "On request" : "Consultar";
  return lang === "en" ? `from €${value}` : `desde ${value} €`;
}

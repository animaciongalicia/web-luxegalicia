/**
 * Eventos de conversión para GA4. Solo envía si gtag está cargado
 * (requiere NEXT_PUBLIC_GA_ID). Con Consent Mode, si el usuario rechaza
 * las cookies, GA4 recibe pings anónimos sin identificadores.
 */
export type TrackEvent =
  | "contact_whatsapp"
  | "contact_phone"
  | "contact_email"
  | "quote_cta_click"
  | "generate_lead";

export function track(event: TrackEvent, params: Record<string, string | number | undefined> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, { page_path: window.location.pathname, ...params });
}

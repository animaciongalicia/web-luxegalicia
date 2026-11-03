// Accepts the env value with or without protocol ("www.luxegalicia.com" works too).
function normalizeSiteUrl(raw: string | undefined) {
  const value = (raw || "").trim().replace(/\/+$/, "");
  if (!value) return "https://www.luxegalicia.com";
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const SITE = {
  name: "Luxe Galicia",
  since: 2013,
  phone: "+34 678 288 284",
  phoneHref: "tel:+34678288284",
  officePhone: "+34 881 255 607",
  officePhoneHref: "tel:+34881255607",
  whatsapp: "34678288284",
  email: "info@luxegalicia.com",
  city: "A Coruña",
  // Titular (mismo que Suunia). Se puede sobrescribir con variables de entorno.
  legalName: process.env.NEXT_PUBLIC_LEGAL_NAME || "Inversiones SHISO SL",
  taxId: process.env.NEXT_PUBLIC_TAX_ID || "B70319223",
  address: process.env.NEXT_PUBLIC_LEGAL_ADDRESS || "Ronda de Montealto, 4 – 5ºA · 15002 A Coruña",
  suuniaUrl: "https://www.suunia.com",
};

export function whatsappLink(text?: string) {
  const base = `https://wa.me/${SITE.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function absoluteUrl(path: string) {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path}`;
}

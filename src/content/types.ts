export type Lang = "es" | "en";

export type LinkItem = { title: string; text?: string; href: string; image?: string; alt?: string };

export type RouteRow = {
  destino: string;
  km: number;
  tiempo: string;
  /** Clave en precios.ts. Si no hay precio cargado, se muestra "Consultar". */
  precio?: string;
};

export type Block =
  | { type: "intro"; heading?: string; paragraphs: string[] }
  | { type: "features"; heading: string; intro?: string; items: { title: string; text: string }[]; columns?: 2 | 3 | 4; bg?: "gray" }
  | { type: "checklist"; heading: string; intro?: string; items: string[]; bg?: "gray" }
  | { type: "steps"; heading: string; intro?: string; items: { title: string; text: string }[]; bg?: "gray" }
  | { type: "zigzag"; heading?: string; items: { title: string; paragraphs: string[]; image: string; alt: string }[]; bg?: "gray" }
  | { type: "routes"; heading: string; intro?: string; rows: RouteRow[]; note?: string; bg?: "gray" }
  | { type: "links"; heading: string; intro?: string; items: LinkItem[]; bg?: "gray" }
  | { type: "fleet"; heading?: string; intro?: string; bg?: "gray" }
  | { type: "quote"; heading?: string; intro?: string; bg?: "gray" }
  | { type: "suunia"; text: string }
  | { type: "table"; heading: string; intro?: string; head: string[]; rows: string[][]; note?: string; bg?: "gray" }
  | { type: "legal"; updated: string; sections: LegalSection[] };

export type LegalSection = { heading: string; paragraphs?: string[]; list?: string[]; table?: { head: string[]; rows: string[][] } };

export type Faq = { question: string; answer: string };

export type Page = {
  slug: string;
  lang?: Lang;
  metaTitle: string;
  metaDescription: string;
  hero: { eyebrow?: string; title: string; subtitle: string; image: string; alt?: string };
  blocks: Block[];
  faqs?: Faq[];
  cta?: { title: string; description: string };
  /** Tipo de servicio para el JSON-LD. Si falta, la página no emite Service. */
  serviceType?: string;
  /** Ruta equivalente en el otro idioma (hreflang). */
  alternate?: string;
  noindex?: boolean;
};

export type Tour = {
  slug: string;
  kind: "varios-dias" | "un-dia";
  name: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  alt: string;
  duration: string;
  distance: string;
  base: string;
  vehicle: string;
  summary: string;
  intro: string[];
  stops: { title: string; text: string }[];
  includes: string[];
  notIncluded: string[];
  faqs: Faq[];
};

export type Guide = {
  slug: string;
  category: "Guía" | "Sede" | "Artículo";
  title: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  alt: string;
  readMinutes: number;
  date: string;
  intro: string[];
  /** Puntos clave que se muestran en una caja al principio. */
  summary?: string[];
  sections: {
    heading: string;
    paragraphs?: string[];
    list?: string[];
    table?: { head: string[]; rows: string[][] };
    tip?: string;
    /** Frase destacada (cita) que se muestra grande dentro de la sección. */
    quote?: string;
    after?: string[];
    image?: { src: string; alt: string; caption?: string };
  }[];
  /** Cifras clave (usar 2 o 4 para que la fila quede cuadrada). */
  stats?: { value: string; label: string }[];
  /** Llamada al servicio relacionado, que se muestra a mitad del artículo. */
  service?: { title: string; text: string; href: string; label: string };
  faqs: Faq[];
  related: { title: string; href: string }[];
};

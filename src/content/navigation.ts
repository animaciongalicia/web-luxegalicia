import type { Lang } from "./types";

export type NavItem = {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
};

export const NAV: Record<Lang, NavItem[]> = {
  es: [
    {
      name: "Eventos",
      href: "/transporte-eventos-galicia",
      children: [
        { name: "Para agencias MICE", href: "/agencias-mice" },
        { name: "Congresos y convenciones", href: "/transporte-congresos-galicia" },
        { name: "Incentivos", href: "/transporte-incentivos-galicia" },
        { name: "Festivales y producciones", href: "/transporte-festivales-producciones" },
        { name: "Fútbol y eventos deportivos", href: "/transporte-eventos-deportivos" },
      ],
    },
    { name: "Empresas", href: "/transporte-empresas-galicia" },
    {
      name: "Traslados",
      href: "/traslados",
      children: [
        { name: "Desde A Coruña", href: "/traslados-desde-coruna" },
        { name: "Desde Santiago", href: "/traslados-desde-santiago" },
        { name: "Desde Vigo", href: "/traslados-desde-vigo" },
        { name: "Oporto, puerta de Galicia", href: "/oporto-galicia" },
        { name: "Camino de Santiago", href: "/transporte-camino-de-santiago" },
        { name: "Aeropuertos", href: "/aeropuertos-galicia" },
      ],
    },
    {
      name: "Tours",
      href: "/tours-con-chofer-galicia",
      children: [
        { name: "Galicia en 3 días", href: "/tours-con-chofer-galicia/galicia-3-dias" },
        { name: "Galicia en 5 días", href: "/tours-con-chofer-galicia/galicia-5-dias" },
        { name: "Galicia en 7 días", href: "/tours-con-chofer-galicia/galicia-7-dias" },
        { name: "Rías Baixas", href: "/tours-con-chofer-galicia/rias-baixas" },
        { name: "Ribeira Sacra", href: "/tours-con-chofer-galicia/ribeira-sacra" },
        { name: "Ourense termal", href: "/tours-con-chofer-galicia/ourense-termal" },
        { name: "Vigo e Islas Cíes", href: "/tours-con-chofer-galicia/vigo-islas-cies" },
        { name: "Excursiones para cruceros", href: "/excursiones-cruceros-galicia" },
      ],
    },
    { name: "Flota", href: "/flota" },
    { name: "Guías", href: "/guias" },
  ],
  en: [
    { name: "MICE & Agencies", href: "/en/mice-ground-transportation" },
    { name: "Porto ⇄ Galicia", href: "/en/porto-galicia-private-chauffeur" },
    { name: "Chauffeur tours", href: "/en/galicia-chauffeur-tours" },
  ],
};

export const UI: Record<Lang, { quote: string; quoteHref: string; whatsapp: string; switchLabel: string; switchHref: string; tagline: string; skip: string }> = {
  es: {
    quote: "Presupuesto",
    quoteHref: "/presupuesto",
    whatsapp: "WhatsApp",
    switchLabel: "EN",
    switchHref: "/en",
    tagline: "Transporte premium · Galicia",
    skip: "Ir al contenido",
  },
  en: {
    quote: "Get a quote",
    quoteHref: "/en#quote",
    whatsapp: "WhatsApp",
    switchLabel: "ES",
    switchHref: "/",
    tagline: "Ground transportation · Galicia",
    skip: "Skip to content",
  },
};

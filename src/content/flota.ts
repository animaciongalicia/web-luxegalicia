import type { VehicleKey } from "./precios";

export type Vehicle = {
  key: VehicleKey | "berlina-lujo";
  name: string;
  nameEn: string;
  pax: string;
  models: string;
  uses: string;
  usesEn: string;
  image: string;
  alt: string;
};

// Modelos orientativos ("o similar"). Las fotos se sustituirán por las de los modelos definitivos.
export const FLOTA: Vehicle[] = [
  {
    key: "berlina",
    name: "Berlina ejecutiva",
    nameEn: "Executive sedan",
    pax: "1-3 pasajeros",
    models: "Mercedes Clase E, BMW Serie 5, Audi A6 o similar",
    uses: "Traslados ejecutivos, aeropuertos y visitas de empresa.",
    usesEn: "Executive transfers, airports and business visits.",
    image: "/images/berlina-clase-e.jpg",
    alt: "Berlina Mercedes Clase E negra con conductor en A Coruña",
  },
  {
    key: "berlina-lujo",
    name: "Berlina de representación",
    nameEn: "First-class sedan",
    pax: "1-3 pasajeros",
    models: "Mercedes Clase S, BMW Serie 7, Audi A8 o similar",
    uses: "Dirección general, ponentes, autoridades y clientes clave.",
    usesEn: "Top executives, speakers, key guests.",
    image: "/images/flota-luxe-galicia.jpg",
    alt: "Mercedes Clase S y Mercedes Clase V negros de la flota Luxe Galicia",
  },
  {
    key: "van",
    name: "Van ejecutiva",
    nameEn: "Executive van",
    pax: "1-7 pasajeros",
    models: "Mercedes Clase V o similar",
    uses: "Equipos directivos, familias, tours con chófer de varios días.",
    usesEn: "Executive teams, families, multi-day chauffeur tours.",
    image: "/images/van-ejecutiva-galicia.jpg",
    alt: "Van ejecutiva Mercedes negra con conductor para grupos reducidos",
  },
  {
    key: "minibus",
    name: "Minibús",
    nameEn: "Minibus",
    pax: "8-19 pasajeros",
    models: "Mercedes Sprinter o similar",
    uses: "Grupos medianos, lanzaderas de congreso, visitas técnicas.",
    usesEn: "Mid-size groups, congress shuttles, technical visits.",
    image: "/images/minibus-galicia.jpg",
    alt: "Minibús Mercedes Sprinter negro con puerta abierta para grupos",
  },
  {
    key: "autocar",
    name: "Autocar",
    nameEn: "Coach",
    pax: "20-55 pasajeros",
    models: "Autocares de gran turismo",
    uses: "Congresos, incentivos, festivales y traslados masivos.",
    usesEn: "Congresses, incentives, festivals and large transfers.",
    image: "/images/autobus-traslados-galicia.png",
    alt: "Autocar de gran turismo para traslados de grupos en Galicia",
  },
];

import type { Guide } from "../types";

export const guia: Guide = {
  slug: "galicia-con-chofer",
  category: "Guía",
  title: "Moverse por Galicia con chófer: distancias, rutas y tiempos",
  metaTitle: "Moverse por Galicia con chófer: distancias, rutas y tiempos reales",
  metaDescription:
    "Distancias y tiempos reales entre las ciudades de Galicia y Oporto, rutas recomendadas y cuándo compensa viajar con chófer frente a coche de alquiler o transporte público.",
  image: "/images/van-ejecutiva-galicia.jpg",
  alt: "Van ejecutiva con chófer recorriendo Galicia",
  readMinutes: 7,
  date: "2026-10-30",
  stats: [
    { value: "~50 min", label: "A Coruña – Santiago" },
    { value: "~1 h", label: "Santiago – Vigo" },
    { value: "~1 h 35 min", label: "Vigo – aeropuerto de Oporto" },
    { value: "~5 h 45 min", label: "A Coruña – Madrid" },
  ],
  intro: [
    "Galicia es pequeña en el mapa y lenta en la carretera. Costa recortada, curvas, pueblos que no salen en las rutas rápidas y una niebla que aparece cuando menos la esperas.",
    "Si planificas con los tiempos del navegador, vas a llegar tarde a todo. Aquí tienes los reales.",
  ],
  summary: [
    "Las tres ciudades grandes están a menos de una hora y cuarenta minutos entre sí.",
    "Fuera de la autopista, los tiempos del navegador se quedan cortos.",
    "Con chófer compensa a partir de tres personas, en viajes de empresa y en rutas de vino.",
    "Los cascos históricos tienen el tráfico restringido: planifica dónde te dejan.",
  ],
  sections: [
    {
      heading: "Tiempos de referencia por autopista",
      table: {
        head: ["Trayecto", "Tiempo aproximado"],
        rows: [
          ["A Coruña – Santiago", "~50 min"],
          ["A Coruña – Lugo", "~1 h 10 min"],
          ["Santiago – Pontevedra", "~45 min"],
          ["Santiago – Vigo", "~1 h"],
          ["Santiago – Ourense", "~1 h 15 min"],
          ["Vigo – aeropuerto de Oporto", "~1 h 35 min"],
          ["A Coruña – Oviedo", "~3 h 15 min"],
          ["A Coruña – Madrid", "~5 h 45 min"],
        ],
      },
      after: [
        "Tienes las tablas completas en [traslados con conductor desde A Coruña](/traslados-desde-coruna), [traslados privados desde Santiago de Compostela](/traslados-desde-santiago) y [traslados con chófer desde Vigo](/traslados-desde-vigo).",
      ],
    },
    {
      heading: "Cuándo compensa el chófer",
      image: { src: "/images/bodega-albarino-rias-baixas.jpg", alt: "Bodega de albariño entre viñedos en las Rías Baixas", caption: "Las rutas con cata de vino son el ejemplo perfecto: nadie del grupo tiene que conducir." },
      list: [
        "Viajes de empresa con agenda apretada: trabajas en el coche.",
        "Grupos de 3 o más personas: el coste por persona baja mucho.",
        "Rutas con cata de vino: Rías Baixas, Ribeira Sacra, Ribeiro.",
        "Llegada por Oporto y salida por otro aeropuerto.",
        "Carreteras complicadas: Ribeira Sacra, Costa da Morte.",
      ],
      after: [
        "Si vienes por trabajo, el [chófer para empresas y directivos en Galicia](/transporte-empresas-galicia) encadena visitas en varias ciudades el mismo día. Si vienes a conocer Galicia, mira los [tours privados por Galicia con chófer](/tours-con-chofer-galicia).",
      ],
    },
    {
      heading: "Tres rutas que funcionan muy bien con chófer",
      image: { src: "/images/combarro-horreos.jpg", alt: "Hórreos de Combarro junto a la ría de Pontevedra" },
      list: [
        "Rías Baixas: Combarro, Cambados y O Grove en un día, con cata de albariño. Es la [excursión privada a las Rías Baixas](/tours-con-chofer-galicia/rias-baixas).",
        "Ribeira Sacra: miradores del Sil, monasterios y bodegas por carreteras de curvas. Mira la [ruta por la Ribeira Sacra con conductor](/tours-con-chofer-galicia/ribeira-sacra).",
        "Costa da Morte: faros y acantilados hasta Fisterra, con la vuelta de noche resuelta.",
      ],
      quote: "En Galicia el paisaje está en las carreteras secundarias. Y ahí es donde menos quieres conducir.",
      after: ["¿Llegas en barco? Si tu crucero hace escala en A Coruña o Vigo, mira las [excursiones privadas desde el puerto de cruceros](/excursiones-cruceros-galicia): Santiago o las Rías Baixas con regreso garantizado al barco."],
    },
    {
      heading: "Conducir en Galicia: lo que no te cuentan",
      list: [
        "Muchas carreteras secundarias son estrechas y con curvas: el navegador se queda corto.",
        "La niebla y la lluvia son habituales en invierno y en la costa.",
        "Los cascos históricos de Santiago, Pontevedra o Lugo tienen el tráfico restringido.",
        "La AP-9, que une A Coruña, Santiago, Pontevedra y Vigo, es de peaje.",
        "Aparcar en el centro y en los pueblos de costa en verano es complicado.",
      ],
      tip: "En Santiago, el coche no entra al casco histórico. Si te lo estás pensando, lee [Uber, taxi o chófer en Santiago de Compostela](/guias/uber-taxi-chofer-santiago-de-compostela).",
    },
    {
      heading: "Qué vehículo elegir",
      image: { src: "/images/chofer-carretera-galicia.jpg", alt: "Berlina con chófer en una carretera de Galicia" },
      table: {
        head: ["Personas", "Vehículo", "Ideal para"],
        rows: [
          ["1-3", "Berlina ejecutiva", "Directivos, parejas, traslados de aeropuerto"],
          ["4-7", "Van ejecutiva", "Familias, comités, tours de varios días"],
          ["8-19", "Minibús", "Grupos pequeños, peregrinos, peñas"],
          ["20 o más", "Autocar", "Congresos, excursiones, eventos"],
        ],
      },
      after: ["Detalles de cada vehículo en la [flota de berlinas, vans y minibuses con conductor](/flota)."],
    },
  ],
  service: {
    title: "¿Te mueves por Galicia?",
    text: "Dime ruta, fechas y personas. Te propongo vehículo y tiempos reales.",
    href: "/tours-con-chofer-galicia",
    label: "Tours con chófer",
  },
  faqs: [
    { question: "¿Cuántos días hacen falta para ver Galicia?", answer: "Con 3 días ves lo esencial (Santiago y Rías Baixas); con 5, la costa atlántica completa; con 7, también el interior (Ribeira Sacra, Lugo) y la Playa de las Catedrales." },
    { question: "¿Es caro viajar por Galicia con chófer?", answer: "Para una persona sola, más que un coche de alquiler. A partir de tres personas, o en rutas con cata de vino, la diferencia por persona se reduce mucho y ganas tiempo y comodidad." },
  ],
  related: [
    { title: "Uber, taxi o chófer en Santiago", href: "/guias/uber-taxi-chofer-santiago-de-compostela" },
    { title: "Galicia en 5 días con chófer", href: "/tours-con-chofer-galicia/galicia-5-dias" },
    { title: "Cómo ir de Oporto a Galicia", href: "/guias/oporto-galicia-como-llegar" },
  ],
};

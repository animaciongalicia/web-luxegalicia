import type { Guide } from "../types";

export const guia: Guide = {
  slug: "transporte-palacio-congresos-santiago",
  category: "Sede",
  title: "Transporte para eventos en el Palacio de Congresos de Santiago",
  metaTitle: "Transporte para congresos en el Palacio de Congresos de Santiago",
  metaDescription:
    "Cómo organizar el transporte de un congreso en el Palacio de Congresos de Santiago de Compostela: lanzaderas con el casco histórico y los hoteles, aeropuerto, tiempos y cenas.",
  image: "/images/catedral-santiago-alameda.jpg",
  alt: "Santiago de Compostela, sede de congresos",
  readMinutes: 6,
  date: "2026-10-30",
  stats: [
    { value: "~10-15 min", label: "aeropuerto de Santiago" },
    { value: "~10-15 min", label: "centro de Santiago" },
    { value: "~50 min", label: "A Coruña" },
    { value: "~2 h 20 min", label: "aeropuerto de Oporto" },
  ],
  intro: [
    "Santiago vende sola. Pones \"congreso en Santiago de Compostela\" en el programa y la inscripción sube.",
    "Lo que no sale en el folleto: el Palacio de Congresos y Exposiciones de Galicia está fuera del casco histórico, camino del aeropuerto. Y tus asistentes quieren dormir junto a la catedral. Entre una cosa y otra está tu plan de transporte.",
  ],
  summary: [
    "La sede está fuera del casco histórico: la lanzadera es parte del plan, no un extra.",
    "Al casco histórico no entran autocares: las recogidas se hacen en su perímetro.",
    "Agrupa los hoteles por zonas y haz una ruta por zona.",
    "En el Año Santo 2027, más gente alojada fuera y más tiempo en cada trayecto.",
  ],
  sections: [
    {
      heading: "Tiempos de referencia",
      table: {
        head: ["Desde", "Hasta el Palacio de Congresos"],
        rows: [
          ["Aeropuerto de Santiago", "~10-15 min"],
          ["Centro de Santiago", "~10-15 min, según tráfico"],
          ["A Coruña", "~50 min"],
          ["Aeropuerto de Oporto", "~2 h 20 min"],
        ],
      },
      after: [
        "Si parte de tus asistentes llega por Oporto, el [traslado privado de Oporto a Santiago](/oporto-galicia) es la pieza que más tiempo ahorra.",
      ],
    },
    {
      heading: "Qué congresos se celebran aquí",
      paragraphs: [
        "El Palacio acoge congresos nacionales de sociedades médicas y científicas. Un ejemplo: el 48.º Congreso Nacional de SEMERGEN, en octubre de 2026, reunió a más de 4.500 médicos de familia en Santiago.",
        "Con esos volúmenes el transporte deja de ser un detalle. Son miles de personas repartidas por toda la ciudad, y muchas fuera de ella, que tienen que llegar a la misma hora a la misma puerta.",
      ],
      quote: "Cuatro mil personas, una puerta y la misma hora. Eso no se resuelve con taxis.",
    },
    {
      heading: "Claves logísticas",
      image: { src: "/images/flota-vans-evento.webp", alt: "Vans con chófer preparadas para la salida de un congreso" },
      list: [
        "Casco histórico: tiene el tráfico restringido. Las recogidas se hacen en puntos accesibles cerca de los hoteles.",
        "Lanzaderas: por bloques antes de las plenarias y salidas escalonadas al final del día.",
        "Cenas en el casco histórico: traslado hasta el punto accesible más cercano y paseo final.",
        "Acompañantes: Rías Baixas o Costa da Morte con chófer mientras dura el congreso.",
      ],
    },
    {
      heading: "Cómo dimensionar las lanzaderas",
      list: [
        "Agrupa los hoteles por zonas: casco histórico, ensanche, salida hacia el aeropuerto y fuera de la ciudad.",
        "Una ruta circular por zona, con salidas cada 15-20 minutos en la franja de entrada.",
        "Salidas por bloques al final de cada jornada, coordinadas con el programa.",
        "Berlinas para ponentes y comité, independientes de las lanzaderas.",
        "Si hay hoteles en A Coruña o en las Rías Baixas, autocares directos con horario fijo.",
      ],
      after: [
        "Para los bloques grandes, lo que funciona son las [lanzaderas en autocar para congresos en Santiago](/transporte-congresos-galicia). Para los hoteles más alejados, un [minibús con conductor](/alquiler-autocar-con-conductor-galicia) llena mejor y gasta menos.",
      ],
      tip: "En el Año Santo 2027 cuenta con más asistentes alojados fuera de Santiago. Tienes las claves en la guía del [Año Santo 2027 para eventos](/guias/ano-santo-2027-transporte-grupos).",
    },
    {
      heading: "Un mismo plan para dos sedes",
      image: { src: "/images/tours-santiago.jpg", alt: "Plaza del Obradoiro, en Santiago de Compostela" },
      paragraphs: [
        "Muchos congresos en Santiago hacen las sesiones en el Palacio y la cena o un acto institucional en la [Cidade da Cultura, en el monte Gaiás](/guias/transporte-cidade-da-cultura). Con un buen plan, la misma flota cubre los dos recintos y los hoteles.",
        "Y para quien se queda un día más: [traslado con conductor desde Santiago a cualquier aeropuerto](/traslados-desde-santiago) a cualquier aeropuerto o ciudad de Galicia.",
      ],
    },
  ],
  service: {
    title: "¿Tu congreso es en Santiago?",
    text: "Lanzaderas, aeropuerto, ponentes y cena de gala en un solo plan. Presupuesto en 24 horas.",
    href: "/transporte-congresos-galicia",
    label: "Transporte para congresos",
  },
  faqs: [
    { question: "¿Se puede llegar en autocar al casco histórico de Santiago?", answer: "No directamente: el acceso está restringido. Se usan puntos de subida y bajada en el perímetro del casco histórico." },
    { question: "¿Cuánto se tarda del aeropuerto de Santiago al Palacio de Congresos?", answer: "Entre 10 y 15 minutos en vehículo, según el tráfico." },
  ],
  related: [
    { title: "Transporte en la Cidade da Cultura", href: "/guias/transporte-cidade-da-cultura" },
    { title: "Transporte para congresos y eventos: guía completa", href: "/guias/transporte-congresos-eventos-galicia" },
    { title: "Uber, taxi o chófer en Santiago", href: "/guias/uber-taxi-chofer-santiago-de-compostela" },
  ],
};

import type { Guide } from "../types";

export const guia: Guide = {
  slug: "transporte-ifevi-vigo",
  category: "Sede",
  title: "Transporte para ferias y congresos en IFEVI (Vigo)",
  metaTitle: "Transporte para ferias y eventos en IFEVI, Vigo",
  metaDescription:
    "Cómo organizar el transporte para una feria o congreso en IFEVI (Vigo): ubicación junto al aeropuerto de Peinador, tiempos desde Vigo, Santiago y Oporto, lanzaderas y montaje.",
  image: "/images/galicia-fest-vigo.jpg",
  alt: "Vista del puerto de Vigo durante un gran evento",
  readMinutes: 6,
  date: "2026-10-30",
  stats: [
    { value: "minutos", label: "del aeropuerto de Vigo" },
    { value: "~15-20 min", label: "del centro de Vigo" },
    { value: "~1 h", label: "Santiago" },
    { value: "~1 h 40 min", label: "aeropuerto de Oporto" },
  ],
  intro: [
    "IFEVI, la Institución Ferial de Vigo, es el gran recinto ferial del sur de Galicia. Aquí se celebran ferias internacionales como Conxemar, además de congresos, convenciones y eventos de empresa.",
    "Tiene una ventaja y un reto. La ventaja: está junto al aeropuerto de Peinador. El reto: queda lejos del centro de Vigo, que es donde duerme casi todo el mundo.",
  ],
  summary: [
    "IFEVI está junto al aeropuerto, a 15-20 minutos del centro de Vigo.",
    "En ferias internacionales, Oporto es el aeropuerto que más pesa.",
    "Lanzaderas en apertura y cierre, y vans para montaje y personal de stand.",
    "En semana de feria la ciudad se llena: reserva la flota con tiempo.",
  ],
  sections: [
    {
      heading: "Tiempos de referencia",
      table: {
        head: ["Desde", "Hasta IFEVI"],
        rows: [
          ["Aeropuerto de Vigo (Peinador)", "A pocos minutos"],
          ["Centro de Vigo y zona hotelera", "~15-20 min, según tráfico"],
          ["Pontevedra", "~30-35 min"],
          ["Santiago de Compostela", "~1 h"],
          ["Aeropuerto de Oporto", "~1 h 40 min"],
        ],
      },
    },
    {
      heading: "Oporto, el aeropuerto que más importa en IFEVI",
      image: { src: "/images/van-avion-privado.jpg", alt: "Van con chófer esperando junto a un avión" },
      paragraphs: [
        "En ferias internacionales, buena parte de expositores y compradores vuela a Oporto: más conexiones y, muchas veces, mejores precios. Eso convierte el [transfer del aeropuerto de Oporto a IFEVI](/oporto-galicia) en una pieza central del plan.",
        "Lo eficiente es agrupar llegadas por franjas horarias en vans o minibuses, con un vehículo de reserva para los vuelos que se retrasan.",
      ],
      tip: "Si quieres comparar opciones para ese tramo, lo tienes todo en [de Oporto a Vigo: tren, autobús o traslado privado](/guias/oporto-vigo-tren-autobus-traslado).",
    },
    {
      heading: "Cómo se plantea una operativa en IFEVI",
      image: { src: "/images/flota-minibuses-autocar.webp", alt: "Minibuses y autocar para lanzaderas a una feria" },
      list: [
        "Lanzaderas: desde los hoteles del centro de Vigo en la apertura y al cierre de cada jornada.",
        "Llegadas por Oporto: traslados agrupados por franjas de vuelo.",
        "Compradores clave y delegaciones: berlinas a disposición.",
        "Montaje y personal de stand: vans en horarios largos.",
        "Cena o networking: en Vigo o en las Rías Baixas, con vuelta escalonada.",
        "Acompañantes: Baiona, las Islas Cíes en temporada o las Rías Baixas.",
      ],
      after: [
        "Para las lanzaderas grandes, el [alquiler de autocares para ferias en Vigo](/alquiler-autocar-con-conductor-galicia). Para los acompañantes, una [excursión privada a Vigo y las Islas Cíes](/tours-con-chofer-galicia/vigo-islas-cies).",
      ],
    },
    {
      heading: "Semana de feria: la ciudad se llena",
      image: { src: "/images/van-equipaje-hotel.jpg", alt: "Van ejecutiva cargando equipaje en la puerta de un hotel" },
      paragraphs: [
        "Durante las grandes ferias, hoteles y transporte en Vigo se tensan. La diferencia entre tener lanzaderas propias y depender de taxis que no llegan es haber reservado a tiempo.",
        "El caso más claro es Conxemar, la gran feria del producto del mar congelado. Lo cuento en detalle en [Conxemar 2027: cómo moverse en Vigo durante la feria](/guias/conxemar-transporte-vigo).",
      ],
      quote: "En semana de feria, el que no reservó a tiempo hace cola de taxi.",
    },
  ],
  service: {
    title: "¿Expones o organizas en IFEVI?",
    text: "Lanzaderas, llegadas por Oporto y vans para tu equipo. Un solo proveedor para toda la feria.",
    href: "/traslados-desde-vigo",
    label: "Traslados desde Vigo",
  },
  faqs: [
    { question: "¿Qué aeropuerto es mejor para una feria en IFEVI?", answer: "Peinador está junto al recinto, pero tiene menos vuelos. Para internacionales, Oporto suele ser la mejor opción, con un traslado de alrededor de 1 h 40 min por carretera." },
    { question: "¿Hacéis traslados de grupos desde Oporto a IFEVI?", answer: "Sí. Se agrupan las llegadas por franjas horarias en vans, minibuses o autocares, con seguimiento de los vuelos." },
  ],
  related: [
    { title: "Conxemar 2027: transporte en Vigo", href: "/guias/conxemar-transporte-vigo" },
    { title: "Traslados con chófer desde Vigo", href: "/traslados-desde-vigo" },
    { title: "Transporte para eventos en Galicia", href: "/transporte-eventos-galicia" },
  ],
};

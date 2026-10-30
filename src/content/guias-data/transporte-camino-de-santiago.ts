import type { Guide } from "../types";

export const guia: Guide = {
  slug: "transporte-camino-de-santiago",
  category: "Guía",
  title: "Transporte en el Camino de Santiago para grupos: guía práctica",
  metaTitle: "Transporte en el Camino de Santiago para grupos: guía práctica",
  metaDescription:
    "Cómo organizar el transporte de un grupo en el Camino de Santiago: llegar al inicio de etapa (Sarria, Tui, Oporto, Ferrol), vehículo de apoyo, equipaje y regreso desde Santiago.",
  image: "/images/faro-de-Finisterre-1.jpg",
  alt: "Faro de Fisterra, final del Camino de Santiago",
  readMinutes: 8,
  date: "2026-10-30",
  stats: [
    { value: "100 km", label: "mínimo a pie para la Compostela" },
    { value: "~1 h 20 min", label: "Santiago – Sarria" },
    { value: "~1 h 30 min", label: "aeropuerto de Oporto – Tui" },
    { value: "2027", label: "Año Santo" },
  ],
  intro: [
    "El Camino se hace a pie. Eso no lo discute nadie.",
    "Pero antes del primer paso hay que llegar al punto de salida. Y al final hay que volver a casa. Para un grupo, esas dos piezas deciden si la experiencia empieza bien y termina mejor, o si empieza con un autobús perdido y termina con veinte personas buscando taxi en el Obradoiro.",
  ],
  summary: [
    "Los inicios más habituales son Sarria, Tui, Oporto y Ferrol.",
    "Un vehículo de apoyo cambia la experiencia de grupos con niveles distintos.",
    "El equipaje viaja aparte: el grupo camina solo con lo del día.",
    "En el Año Santo 2027, reserva alojamiento y transporte con mucha antelación.",
  ],
  sections: [
    {
      heading: "Los puntos de inicio más habituales",
      table: {
        head: ["Inicio", "Ruta", "Desde dónde llegas"],
        rows: [
          ["Sarria", "Camino Francés, últimos 100 km", "~1 h 20 min desde Santiago"],
          ["O Cebreiro", "Camino Francés, entrada en Galicia", "~2 h desde Santiago"],
          ["Tui o Valença", "Camino Portugués", "~1 h 30 min desde el aeropuerto de Oporto"],
          ["Oporto", "Portugués completo o por la costa", "Directo desde el aeropuerto"],
          ["Ferrol", "Camino Inglés", "~45 min desde A Coruña"],
        ],
      },
      after: [
        "Si tu grupo aterriza en Santiago y empieza en Sarria, lo más cómodo es un [traslado de Santiago a Sarria para empezar el Camino](/traslados-desde-santiago). Si aterriza en Oporto, el [traslado del aeropuerto de Oporto a Tui o Valença](/oporto-galicia) lo deja en la salida en hora y media.",
      ],
    },
    {
      heading: "Qué ruta elegir según el grupo",
      image: { src: "/images/minibus-interior.jpg", alt: "Interior de un minibús preparado para un grupo de peregrinos" },
      table: {
        head: ["Ruta", "Inicio habitual", "Distancia aprox.", "Para quién"],
        rows: [
          ["Camino Francés", "Sarria", "~115 km, 5 etapas", "El más concurrido y con más servicios"],
          ["Portugués central", "Tui", "~115-120 km, 6 etapas", "Grupos que llegan por Vigo u Oporto"],
          ["Portugués por la costa", "Baiona", "~120 km, 6 etapas", "Quien quiere mar y paisaje"],
          ["Camino Inglés", "Ferrol", "~115-120 km, 5 etapas", "Grupos que buscan menos gente"],
        ],
      },
    },
    {
      heading: "Vehículo de apoyo: cuándo merece la pena",
      paragraphs: [
        "En un grupo siempre hay alguien que va más lento, alguien con una ampolla el tercer día y alguien que quiere hacer la etapa larga entera.",
        "Un vehículo de apoyo con chófer resuelve las tres cosas: recoge a quien lo necesita, lleva al grupo al alojamiento si duerme fuera del trazado y está ahí para los imprevistos. Es la base del [transporte de grupos en el Camino de Santiago](/transporte-camino-de-santiago).",
      ],
      quote: "El Camino se hace a pie. La logística, no.",
    },
    {
      heading: "El equipaje del grupo",
      paragraphs: [
        "Caminar con mochila ligera lo cambia todo. El equipaje viaja en vehículo de alojamiento en alojamiento y el grupo solo lleva lo del día.",
        "Para grupos, lo más eficiente es que el mismo vehículo de apoyo se encargue de las maletas. Un único responsable, horarios coordinados con la ruta y ninguna maleta perdida entre empresas distintas.",
      ],
    },
    {
      heading: "El regreso",
      image: { src: "/images/catedral-santiago-alameda.jpg", alt: "La catedral de Santiago vista desde la Alameda", caption: "La llegada a Santiago es una fiesta. Que nadie tenga que pensar en cómo volver." },
      paragraphs: [
        "Desde Santiago se vuelve al aeropuerto de Santiago, A Coruña, Vigo u Oporto. O se añade un día para llegar al fin del mundo: Fisterra y Muxía, con una [excursión privada a la Costa da Morte](/tours-con-chofer-galicia/costa-da-morte).",
        "Déjalo planificado antes de salir. El día de llegada todo el mundo quiere celebrar, no buscar transporte. Para grupos grandes, el [alquiler de un autocar con conductor](/alquiler-autocar-con-conductor-galicia) para la vuelta sale más barato y más tranquilo que muchos taxis.",
      ],
    },
    {
      heading: "Año Santo 2027",
      paragraphs: [
        "En 2027 el Camino vive un año de máxima afluencia. Para grupos eso significa una cosa: reservar alojamiento y transporte con mucha más antelación de lo normal, sobre todo en Semana Santa y en verano.",
      ],
      tip: "Reserva alojamiento y transporte en cuanto tengas fechas. En Año Santo, quien reserva primero elige.",
    },
  ],
  service: {
    title: "¿Tu grupo hace el Camino?",
    text: "Traslado al inicio de etapa, vehículo de apoyo, equipaje y vuelta a casa. Un solo plan.",
    href: "/transporte-camino-de-santiago",
    label: "Transporte para el Camino",
  },
  faqs: [
    { question: "¿Cuánto se tarda del aeropuerto de Santiago a Sarria?", answer: "Alrededor de 1 hora y 20 minutos por carretera." },
    { question: "¿Qué vehículo necesita un grupo de 12 peregrinos?", answer: "Un minibús de hasta 19 plazas, con espacio para mochilas y maletas." },
    { question: "¿Se puede llevar el equipaje del grupo entre etapas?", answer: "Sí. Lo más práctico es que el vehículo de apoyo se encargue también del equipaje, con horarios coordinados con la ruta." },
  ],
  related: [
    { title: "Camino Portugués por la costa", href: "/guias/camino-portugues-costa-etapas-grupos" },
    { title: "Año Santo 2027: transporte de grupos", href: "/guias/ano-santo-2027-transporte-grupos" },
    { title: "Cómo ir de Oporto a Galicia", href: "/guias/oporto-galicia-como-llegar" },
  ],
};

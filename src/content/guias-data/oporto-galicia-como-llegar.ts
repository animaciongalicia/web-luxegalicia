import type { Guide } from "../types";

export const guia: Guide = {
  slug: "oporto-galicia-como-llegar",
  category: "Guía",
  title: "Cómo ir de Oporto a Galicia: tren, autobús, coche o chófer",
  metaTitle: "Cómo ir de Oporto a Galicia (Vigo, Santiago, A Coruña): opciones",
  metaDescription:
    "Cómo ir del aeropuerto de Oporto a Vigo, Santiago de Compostela o A Coruña: tren, autobús, coche de alquiler o traslado privado con chófer. Tiempos, ventajas y desventajas.",
  image: "/images/traslados-coruna-santiago.jpg",
  alt: "Coche con chófer en la carretera entre Oporto y Galicia",
  readMinutes: 7,
  date: "2026-10-30",
  stats: [
    { value: "1 h 35 min", label: "aeropuerto de Oporto – Vigo" },
    { value: "2 h 20 min", label: "aeropuerto de Oporto – Santiago" },
    { value: "3 h", label: "aeropuerto de Oporto – A Coruña" },
    { value: "-1 h", label: "Portugal respecto a España" },
  ],
  intro: [
    "Oporto es la gran puerta internacional del noroeste. Más vuelos, a menudo más baratos y con conexiones que Galicia no tiene, como las de Norteamérica.",
    "El problema llega al aterrizar: ¿y ahora cómo llego a Vigo, a Santiago o a A Coruña? Tienes cuatro opciones. Te las comparo sin rodeos.",
  ],
  summary: [
    "Por carretera: 1 h 35 min a Vigo, 2 h 20 min a Santiago y 3 h a A Coruña.",
    "Tren y autobús son baratos, pero lentos y rígidos si tu vuelo se retrasa.",
    "El coche de alquiler tiene letra pequeña: recargo internacional y peajes electrónicos.",
    "Desde dos personas, el traslado privado sale mucho más competitivo de lo que parece.",
  ],
  sections: [
    {
      heading: "Tiempos desde el aeropuerto de Oporto",
      table: {
        head: ["Destino", "Tiempo por carretera"],
        rows: [
          ["Vigo", "~1 h 35 min"],
          ["Pontevedra", "~1 h 55 min"],
          ["Rías Baixas (Sanxenxo, O Grove)", "~2 h 10 min"],
          ["Santiago de Compostela", "~2 h 20 min"],
          ["A Coruña", "~3 h"],
        ],
      },
      image: { src: "/images/viajero-aeropuerto.webp", alt: "Viajero recién llegado al aeropuerto con su equipaje" },
      after: ["Si tu destino final está en las Rías Baixas, el trayecto sigue desde Vigo: mira los [traslados privados de Vigo a Sanxenxo, O Grove y Baiona](/traslados-desde-vigo)."],
    },
    {
      heading: "Tren",
      paragraphs: [
        "Hay tren entre Oporto y Vigo, pero con pocas frecuencias al día. Antes tienes que ir del aeropuerto a la estación de Oporto, y desde Vigo seguir hacia Santiago o A Coruña. Barato, sí. Pero lento y atado a horarios.",
      ],
    },
    {
      heading: "Autobús",
      paragraphs: [
        "Varias compañías conectan el aeropuerto de Oporto con Vigo y Santiago. Es lo más económico para una persona con poco equipaje. El problema: horarios limitados y nadie te espera si el vuelo se retrasa.",
      ],
    },
    {
      heading: "Coche de alquiler",
      paragraphs: [
        "Te da libertad, pero lee la letra pequeña. Recargo por devolver el coche en otro país. Autopistas portuguesas con peaje electrónico que tienes que gestionar. Y dos o tres horas al volante después de un vuelo largo.",
      ],
    },
    {
      heading: "Traslado privado con chófer",
      image: { src: "/images/van-ejecutiva-galicia.jpg", alt: "Van ejecutiva con chófer esperando a viajeros llegados a Oporto" },
      paragraphs: [
        "El chófer te espera en llegadas aunque el vuelo se retrase, carga el equipaje y te deja en la puerta del hotel. Tú te sientas y descansas.",
        "Para dos o más personas, o para un viaje de empresa, el coste por persona se acerca mucho a las otras opciones. Y el tiempo que ganas no tiene precio. Así funciona un [traslado privado del aeropuerto de Oporto a Vigo, Santiago o A Coruña](/oporto-galicia).",
      ],
      quote: "Aterrizas cansado. Lo último que quieres es buscar una estación.",
    },
    {
      heading: "Comparativa rápida",
      table: {
        head: ["Opción", "A Santiago", "Flexibilidad", "Mejor para"],
        rows: [
          ["Traslado privado", "~2 h 20 min", "Total: sale cuando llegas", "Empresas, familias y grupos"],
          ["Autobús", "~2 h 30 min - 3 h", "Horarios fijos", "Viajeros solos sin prisa"],
          ["Tren", "Más de 3 h con transbordos", "Baja", "Quien ya está en Oporto ciudad"],
          ["Coche de alquiler", "~2 h 20 min", "Alta", "Viajes largos por libre"],
        ],
      },
      after: ["Tiempos orientativos desde el aeropuerto de Oporto con tráfico normal. Si viajas por trabajo, el traslado es además tu primera hora de oficina: así funciona el [transporte ejecutivo para viajes de empresa](/transporte-empresas-galicia)."],
    },
    {
      heading: "Consejos para el día de llegada",
      image: { src: "/images/van-clase-v-carretera.webp", alt: "Van ejecutiva en carretera entre Oporto y Galicia" },
      list: [
        "Portugal tiene una hora menos: revisa la hora local de llegada al reservar.",
        "Si alquilas coche, resuelve el peaje electrónico antes de salir del aeropuerto.",
        "Si llegas en el último vuelo de la noche, reserva antes: a esas horas hay pocas opciones.",
        "Para grupos con llegadas en varios vuelos, agrupa las recogidas por franjas horarias.",
      ],
      tip: "Para empresas y congresos, Oporto suele dar más vuelos y mejores precios. Si tu feria es en Vigo, mira la [guía de transporte para IFEVI](/guias/transporte-ifevi-vigo): allí Oporto es el aeropuerto que más importa.",
    },
  ],
  service: {
    title: "¿Aterrizas en Oporto?",
    text: "Chófer esperando en llegadas, seguimiento del vuelo y puerta a puerta hasta tu hotel en Galicia.",
    href: "/oporto-galicia",
    label: "Traslados Oporto ⇄ Galicia",
  },
  faqs: [
    { question: "¿Cuál es la forma más rápida de ir de Oporto a Santiago?", answer: "Por carretera: unas 2 horas y 20 minutos desde el aeropuerto con un traslado directo. El transporte público requiere transbordos y suele tardar bastante más." },
    { question: "¿Hay control de fronteras entre Portugal y Galicia?", answer: "No. Ambos países están en el espacio Schengen y no hay controles fronterizos ordinarios." },
    { question: "¿Merece la pena volar a Oporto en vez de a Santiago?", answer: "Para vuelos internacionales, muchas veces sí: más conexiones y mejores precios. Compensa sobre todo si tu destino es Vigo o el sur de Galicia." },
  ],
  related: [
    { title: "De Oporto a Vigo: tren, autobús o traslado", href: "/guias/oporto-vigo-tren-autobus-traslado" },
    { title: "Moverse por Galicia con chófer", href: "/guias/galicia-con-chofer" },
    { title: "Tour Oporto y Galicia en 5 días", href: "/tours-con-chofer-galicia/oporto-y-galicia-5-dias" },
  ],
};

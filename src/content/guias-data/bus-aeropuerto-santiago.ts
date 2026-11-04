import type { Guide } from "../types";

// Programado: lunes 9 de noviembre de 2026.
// Palabra clave: "bus aeropuerto santiago" (590/mes, KD 18). Datos de líneas: web de Aena (nov 2026).
export const guia: Guide = {
  slug: "bus-aeropuerto-santiago",
  category: "Artículo",
  title: "Bus del aeropuerto de Santiago: líneas, paradas y cuándo compensa un traslado",
  metaTitle: "Bus aeropuerto Santiago: líneas al centro, Coruña y Lugo",
  metaDescription:
    "Cómo ir en bus del aeropuerto de Santiago al centro, a A Coruña o a Lugo: líneas, dónde se coge y cuándo compensa más un taxi o un traslado privado.",
  image: "/images/sala-espera-aeropuerto.jpg",
  alt: "Sala de espera del aeropuerto con aviones al fondo",
  readMinutes: 6,
  date: "2026-11-09",
  stats: [
    { value: "6A", label: "bus urbano al centro de Santiago" },
    { value: "~15 min", label: "en coche hasta el centro" },
    { value: "3", label: "líneas de Monbus a otras ciudades" },
    { value: "Planta 0", label: "salidas, en llegadas" },
  ],
  intro: [
    "Aterrizas en el aeropuerto Rosalía de Castro y tienes dos opciones: buscar el autobús o buscar a alguien que te lleve. Si viajas solo, con una maleta y sin prisa, el bus funciona bien y es barato.",
    "Si llegas tarde, con niños, en grupo o con una reunión a la hora, la cosa cambia. Te cuento qué líneas hay, a dónde van y cuándo deja de compensar.",
  ],
  summary: [
    "La línea 6A conecta el aeropuerto con el centro de Santiago y la Estación Intermodal.",
    "Monbus tiene líneas directas a A Coruña, Lugo y Sobrado desde la planta de llegadas.",
    "Los horarios cambian según temporada: consúltalos el mismo día en la web del operador.",
    "Para grupos, vuelos nocturnos o agendas ajustadas, el traslado reservado sale a cuenta.",
  ],
  sections: [
    {
      heading: "Las líneas que salen del aeropuerto",
      table: {
        head: ["Línea", "Destino", "Para quién"],
        rows: [
          ["6A (urbana)", "Centro de Santiago y Estación Intermodal", "Hoteles del centro y conexión con tren y autobús"],
          ["Monbus", "Estación de autobuses de A Coruña", "Si duermes o trabajas en A Coruña"],
          ["Monbus", "Lugo, por Arzúa y Palas de Rei", "Interior de Galicia y pueblos del Camino Francés"],
          ["Monbus", "Sobrado, por Arzúa", "Camino del Norte"],
        ],
      },
      after: [
        "Las paradas de Monbus están en la planta 0, en la zona de llegadas. Los horarios y las tarifas se actualizan con frecuencia, así que compruébalos antes de volar en la web de Aena o del operador.",
      ],
    },
    {
      heading: "Del aeropuerto al centro en la línea 6A",
      image: { src: "/images/santiago-obradoiro-catedral.jpg", alt: "Plaza del Obradoiro y catedral de Santiago de Compostela" },
      paragraphs: [
        "Es la opción más barata para llegar al centro: precio de billete urbano y conexión directa con la Estación Intermodal, donde están el tren y los autobuses de largo recorrido.",
        "Lo que tienes que saber: el casco histórico de Santiago está cerrado al tráfico. Ni el bus ni ningún coche te deja en la puerta de un hotel de la zona monumental. Desde la parada más cercana, toca caminar con la maleta por calles empedradas. Si llueve, que en Santiago es frecuente, se nota.",
      ],
      tip: "Si tu hotel está dentro del casco histórico, mira en el mapa cuál es la parada más cercana antes de subir al bus. Te ahorras dar vueltas con la maleta.",
    },
    {
      heading: "A A Coruña o a Lugo en autobús",
      paragraphs: [
        "Desde el aeropuerto de Santiago hay autobús directo a la estación de A Coruña y a Lugo. Es útil si vuelas a Santiago porque tiene más conexiones que Alvedro.",
        "El problema es la frecuencia. Son pocas salidas al día, y si tu vuelo se retrasa una hora puedes perder la última. Si tienes una cita o un evento, no te la juegues con un único autobús.",
      ],
    },
    {
      heading: "Bus, taxi o traslado reservado",
      table: {
        head: ["Situación", "Lo que compensa"],
        rows: [
          ["Viajas solo, de día y con poco equipaje", "Bus 6A"],
          ["Vas al centro y sois dos o tres", "Taxi desde la parada del aeropuerto"],
          ["Llegas de madrugada o en el último vuelo", "Traslado reservado: nadie depende de la última salida"],
          ["Sois cuatro o más, o con mucho equipaje", "Van con conductor reservada"],
          ["Vas a A Coruña, Lugo, Vigo o Sarria con hora fija", "Traslado privado puerta a puerta"],
          ["Viaje de empresa o ponente de un congreso", "Chófer con seguimiento del vuelo"],
        ],
      },
      after: [
        "Si vas a otra ciudad, tienes tiempos y opciones en los [traslados desde el aeropuerto de Santiago a cualquier punto de Galicia](/traslados-desde-santiago).",
      ],
    },
    {
      heading: "Cuándo el bus deja de compensar",
      image: { src: "/images/llegada-aeropuerto-coches.webp", alt: "Coches con chófer esperando en la zona de llegadas de un aeropuerto" },
      list: [
        "Grupos: con cuatro billetes de bus y el taxi desde la parada al hotel, la diferencia con una [van con conductor](/alquiler-van-con-conductor-galicia) se reduce mucho, y tardas el doble.",
        "Vuelos tardíos: si aterrizas después de la última salida, te quedas con la cola del taxi como única opción.",
        "Equipaje grande: bicicletas, golf o material de trabajo no siempre caben en el bus.",
        "Agenda de trabajo: si tienes una reunión a la hora, el bus no espera si el vuelo se retrasa. Un chófer sí.",
        "Peregrinos que empiezan el Camino lejos: Sarria o Tui no se resuelven con el bus del aeropuerto. Para eso está el [transporte para grupos del Camino de Santiago](/transporte-camino-de-santiago).",
      ],
      quote: "El bus es barato hasta que lo pierdes.",
    },
  ],
  service: {
    title: "¿Aterrizas en Santiago y no quieres depender del bus?",
    text: "El chófer sigue tu vuelo y te espera en llegadas con tu nombre, a cualquier hora.",
    href: "/aeropuertos-galicia",
    label: "Traslados de aeropuerto",
  },
  faqs: [
    { question: "¿Qué autobús va del aeropuerto de Santiago al centro?", answer: "La línea urbana 6A, que conecta el aeropuerto con el centro de Santiago y la Estación Intermodal. Consulta horarios y tarifas en la web de TUSSA o de Aena antes de viajar." },
    { question: "¿Hay autobús directo del aeropuerto de Santiago a A Coruña?", answer: "Sí. Monbus tiene una línea entre el aeropuerto de Santiago y la estación de autobuses de A Coruña, con salida desde la planta de llegadas. Tiene pocas frecuencias al día." },
    { question: "¿Cuánto se tarda del aeropuerto al centro de Santiago?", answer: "Unos 15 minutos en coche sin tráfico. En autobús, algo más por las paradas intermedias." },
    { question: "¿El bus me deja en la puerta del hotel?", answer: "No, y tampoco el taxi si tu hotel está en el casco histórico: la zona monumental tiene el tráfico restringido y el último tramo se hace a pie." },
  ],
  related: [
    { title: "Uber, taxi o chófer en Santiago", href: "/guias/uber-taxi-chofer-santiago-de-compostela" },
    { title: "Traslados de aeropuerto en Galicia y Oporto", href: "/aeropuertos-galicia" },
    { title: "Chófer privado en Galicia", href: "/chofer-privado-galicia" },
  ],
};

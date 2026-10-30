import type { Guide } from "../types";

export const guia: Guide = {
  slug: "oporto-vigo-tren-autobus-traslado",
  category: "Artículo",
  title: "De Oporto a Vigo: tren, autobús, coche o traslado privado. Qué compensa",
  metaTitle: "De Oporto a Vigo: tren, autobús o traslado privado | Comparativa",
  metaDescription:
    "Cómo ir de Oporto (aeropuerto o ciudad) a Vigo: horarios y duración del tren, autobuses desde el aeropuerto, coche de alquiler y traslado privado. Comparativa clara y consejos.",
  image: "/images/chofer-carretera-galicia.jpg",
  alt: "Chófer en la autopista entre Oporto y Vigo",
  readMinutes: 6,
  date: "2026-10-30",
  stats: [
    { value: "~150 km", label: "entre Oporto y Vigo" },
    { value: "1 h 35 min", label: "por carretera desde el aeropuerto" },
    { value: "~2", label: "trenes directos al día" },
    { value: "-1 h", label: "Portugal respecto a España" },
  ],
  intro: [
    "Oporto y Vigo están a unos 150 kilómetros. Cerca. Y aun así, quien aterriza en Oporto con destino Vigo se queda mirando el móvil: ¿tren, autobús, coche o traslado?",
    "Aquí tienes la respuesta con los datos que importan: cuánto se tarda de verdad, desde dónde sale cada opción y cuándo compensa cada una.",
  ],
  summary: [
    "Por carretera, del aeropuerto de Oporto a Vigo: alrededor de 1 h 35 min.",
    "El tren directo sale de Oporto-Campanhã, no del aeropuerto, y solo hay unas dos salidas al día.",
    "Hay autobuses directos desde el aeropuerto: lo más barato para una persona.",
    "Para 3 o más personas, viajes de empresa o mucho equipaje, el traslado privado suele ganar.",
  ],
  sections: [
    {
      heading: "Comparativa rápida",
      table: {
        head: ["Opción", "Desde", "Duración aprox.", "Ventaja", "Inconveniente"],
        rows: [
          ["Traslado privado", "Aeropuerto o cualquier dirección", "1 h 35 min", "Puerta a puerta, espera si el vuelo se retrasa", "Precio por vehículo, no por persona"],
          ["Autobús", "Aeropuerto de Oporto", "1 h 45 min - 2 h 15 min", "Barato y directo", "Horarios fijos; sin margen si el vuelo se retrasa"],
          ["Tren", "Estación de Campanhã", "~2 h 20 min - 2 h 35 min", "Cómodo una vez en la estación", "Pocas salidas y hay que llegar antes a Campanhã"],
          ["Coche de alquiler", "Aeropuerto de Oporto", "1 h 35 min", "Libertad", "Recargo internacional y peajes electrónicos"],
        ],
      },
      after: ["Duraciones orientativas con tráfico normal y según los horarios publicados por los operadores. Comprueba siempre los vigentes."],
    },
    {
      heading: "En tren: el Celta Oporto – Vigo",
      paragraphs: [
        "El tren directo, conocido como Celta, une Oporto-Campanhã con Vigo-Guixar. Según los horarios publicados, hay unas dos salidas al día en cada sentido y el viaje ronda las 2 h 20 min - 2 h 35 min.",
        "La pega si llegas en avión: el tren no sale del aeropuerto. Primero tienes que llegar a Campanhã y cuadrar tu vuelo con uno de los pocos trenes del día. Si el vuelo se retrasa, el siguiente tren puede ser mañana.",
      ],
      tip: "Portugal tiene una hora menos que España. Un tren que sale de Oporto a las 19:10, hora portuguesa, llega a Vigo pasadas las 22:30, hora española.",
    },
    {
      heading: "En autobús desde el aeropuerto",
      image: { src: "/images/chofer-interior-berlina.webp", alt: "Chófer al volante durante un traslado privado" },
      paragraphs: [
        "Varias compañías, entre ellas Alsa, FlixBus y otras líneas internacionales, conectan el aeropuerto de Oporto con Vigo a lo largo del día. El trayecto ronda 1 h 45 min - 2 h 15 min y el precio suele moverse entre 10 y 25 euros por persona, según la antelación.",
        "Para una persona con poco equipaje y un vuelo puntual, es lo más económico. Su punto débil: si tu vuelo se retrasa y lo pierdes, toca esperar al siguiente.",
      ],
    },
    {
      heading: "En coche de alquiler",
      paragraphs: [
        "Libertad, sí. Pero con letra pequeña: muchas compañías cobran recargo por devolver el coche en otro país y las autopistas portuguesas tienen peaje electrónico que debes tener resuelto antes de circular.",
        "Y después de un vuelo largo, hora y media al volante por un país que no conoces no es el mejor plan. Menos aún si vas a trabajar al llegar.",
      ],
    },
    {
      heading: "Traslado privado con chófer",
      image: { src: "/images/van-ejecutiva-galicia.jpg", alt: "Van ejecutiva con chófer para el trayecto Oporto – Vigo" },
      paragraphs: [
        "El chófer sigue tu vuelo, te espera en llegadas con tu nombre, carga el equipaje y te deja en la puerta del hotel, de la empresa o del recinto ferial. Sin transbordos, sin horarios y sin pensar en peajes.",
        "El precio es por vehículo, así que se reparte. Para tres o más personas, o para un viaje de empresa en el que tu tiempo vale dinero, se acerca mucho más de lo que crees a las otras opciones. Así funciona el [traslado privado del aeropuerto de Oporto a Vigo](/oporto-galicia).",
      ],
      quote: "Hora y media en un coche que conduce otro es hora y media de trabajo o de descanso. Tú decides.",
    },
    {
      heading: "¿Cuál te conviene?",
      list: [
        "Viajas solo, sin prisa y con poco equipaje: autobús desde el aeropuerto.",
        "Ya estás en el centro de Oporto y te cuadra el horario: tren desde Campanhã.",
        "Vas a moverte varios días por Galicia y Portugal: coche de alquiler (revisa el recargo).",
        "Viaje de empresa, familia, grupo o llegada tarde: traslado privado.",
        "Feria en IFEVI o congreso en Vigo: traslado privado o lanzadera para el grupo. Lo cuento en la [guía de transporte para ferias en IFEVI](/guias/transporte-ifevi-vigo).",
      ],
      after: [
        "Y una vez en Vigo, para seguir hacia Baiona, Sanxenxo o Santiago, tienes los [traslados con conductor desde Vigo a las Rías Baixas](/traslados-desde-vigo). Si vienes por negocios, el [chófer para viajes de negocios en Vigo](/transporte-empresas-galicia) te acompaña toda la agenda.",
      ],
    },
  ],
  service: {
    title: "Del aeropuerto de Oporto a Vigo, puerta a puerta",
    text: "Berlinas, vans ejecutivas y minibuses con seguimiento del vuelo.",
    href: "/oporto-galicia",
    label: "Traslados Oporto ⇄ Galicia",
  },
  faqs: [
    { question: "¿Cuánto se tarda de Oporto a Vigo?", answer: "Por carretera, alrededor de 1 h 35 min desde el aeropuerto. En autobús, entre 1 h 45 min y 2 h 15 min. En tren, unas 2 h 20 min - 2 h 35 min desde la estación de Campanhã." },
    { question: "¿Hay tren directo del aeropuerto de Oporto a Vigo?", answer: "No. El tren Oporto–Vigo sale de la estación de Campanhã, a la que hay que llegar antes desde el aeropuerto en metro o taxi." },
    { question: "¿Cuántos trenes hay al día entre Oporto y Vigo?", answer: "Según los horarios publicados, alrededor de dos trenes directos diarios en cada sentido. Conviene confirmarlo en Renfe o Comboios de Portugal." },
    { question: "¿Hay diferencia horaria entre Oporto y Vigo?", answer: "Sí. Portugal tiene una hora menos que España durante todo el año." },
  ],
  related: [
    { title: "Cómo ir de Oporto a Galicia", href: "/guias/oporto-galicia-como-llegar" },
    { title: "Conxemar 2027: cómo moverse en Vigo", href: "/guias/conxemar-transporte-vigo" },
    { title: "Traslados con chófer desde Vigo", href: "/traslados-desde-vigo" },
    { title: "Tour por el norte de Portugal", href: "/tours-con-chofer-galicia/norte-de-portugal" },
  ],
};

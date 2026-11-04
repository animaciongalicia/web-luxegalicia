import type { Guide } from "../types";

// Programado: lunes 23 de noviembre de 2026.
// Palabras clave: "como llegar a sarria" (480/mes, KD 12), "sarria camino de santiago" (2.400/mes).
export const guia: Guide = {
  slug: "como-llegar-a-sarria-camino",
  category: "Artículo",
  title: "Cómo llegar a Sarria para empezar el Camino de Santiago",
  metaTitle: "Cómo llegar a Sarria para empezar el Camino de Santiago",
  metaDescription:
    "Cómo llegar a Sarria desde Santiago, Lugo, Madrid o el aeropuerto: tren, autobús o traslado privado. Tiempos reales y qué conviene a cada tipo de grupo.",
  image: "/images/catedral-santiago-alameda.jpg",
  alt: "Catedral de Santiago de Compostela, meta del Camino que empieza en Sarria",
  readMinutes: 7,
  date: "2026-11-23",
  stats: [
    { value: "~115 km", label: "de Sarria a Santiago a pie" },
    { value: "5-6", label: "etapas habituales" },
    { value: "~30 min", label: "de Lugo a Sarria" },
    { value: "~1 h 30", label: "del aeropuerto de Santiago en coche" },
  ],
  intro: [
    "Sarria es el punto de salida más popular del Camino Francés. La razón es sencilla: está a algo más de 100 kilómetros de Santiago, la distancia mínima a pie para conseguir la Compostela, y se hace en cinco o seis etapas.",
    "El problema es llegar. Sarria es un pueblo del interior de Lugo, sin aeropuerto y con conexiones que obligan a combinar horarios. Te cuento todas las opciones y cuál conviene según desde dónde vengas y con cuánta gente.",
  ],
  summary: [
    "Lo más cómodo desde fuera de Galicia: volar a Santiago y seguir por carretera, alrededor de hora y media.",
    "Desde Lugo, tren o autobús directo en unos 30 minutos.",
    "Desde Santiago no hay una conexión directa sencilla: se suele pasar por Lugo o por Monforte.",
    "Para grupos, el traslado privado evita transbordos con mochilas y bastones.",
  ],
  sections: [
    {
      heading: "Las opciones, de un vistazo",
      table: {
        head: ["Desde", "Opción habitual", "Tiempo orientativo"],
        rows: [
          ["Lugo", "Tren o autobús directo", "~30 min"],
          ["Santiago de Compostela", "Tren o autobús con transbordo, o carretera", "~1 h 30 en coche; más en transporte público"],
          ["Aeropuerto de Santiago", "Carretera directa", "~1 h 30"],
          ["Madrid", "Tren (directo o por Monforte) o carretera", "~5 h por carretera"],
          ["A Coruña", "Carretera", "~1 h 45"],
        ],
      },
      after: ["Los horarios de tren y autobús cambian según la temporada. Confírmalos en Renfe y en Monbus antes de cerrar billetes, y deja margen si los combinas con un vuelo."],
    },
    {
      heading: "En tren",
      image: { src: "/images/monforte-de-lemos.jpg", alt: "Monforte de Lemos, nudo ferroviario del sur de Lugo" },
      paragraphs: [
        "Sarria tiene estación de tren en la línea que une Monforte de Lemos con Lugo. Desde Lugo hay varias conexiones al día y el trayecto ronda la media hora.",
        "Desde Madrid hay servicios que llegan a Sarria directos o con cambio en Monforte. Es una buena opción si vienes de la meseta y viajas ligero. Desde Santiago, en cambio, el tren obliga a combinar y tarda más que la carretera.",
      ],
    },
    {
      heading: "En autobús",
      paragraphs: [
        "Monbus conecta Lugo y Sarria con varias salidas diarias. Desde Santiago, la mayoría de combinaciones pasan por Lugo, así que cuenta con transbordo y con un tiempo total bastante mayor que en coche.",
        "Si llegas en avión a Santiago, desde el aeropuerto sale un bus de Monbus hacia Lugo por el propio Camino Francés (Arzúa, Palas de Rei). Desde Lugo, otro autobús o el tren te dejan en Sarria. Tienes los detalles en la guía del [bus del aeropuerto de Santiago](/guias/bus-aeropuerto-santiago).",
      ],
      tip: "Si combinas avión, autobús y tren el mismo día, pon el margen en el primer enlace. Un retraso al principio te hace perder toda la cadena.",
    },
    {
      heading: "En coche o con traslado privado",
      image: { src: "/images/van-carretera-galicia.webp", alt: "Van con conductor en una carretera de Galicia rumbo a Sarria" },
      paragraphs: [
        "Por carretera, Sarria queda a hora y media del aeropuerto de Santiago y a unas cinco horas de Madrid. Sin transbordos, sin horarios y con las mochilas y los bastones en el maletero.",
        "El coche de alquiler tiene un problema evidente: lo dejas en Sarria y tú terminas en Santiago. Devolverlo en otra ciudad tiene recargo, y nadie del grupo quiere volver a por él.",
        "Por eso, para grupos y familias, lo habitual es un traslado directo: del aeropuerto o del hotel a Sarria, y al terminar, de Santiago al aeropuerto. Si vienes de la capital, existe el [traslado de Madrid a Sarria](/traslados-madrid-galicia) sin cambios.",
      ],
      quote: "El Camino empieza en Sarria. El viaje hasta Sarria no debería costarte un día entero.",
    },
    {
      heading: "Qué conviene según tu grupo",
      list: [
        "Peregrino solo y con tiempo: tren o autobús. Es barato y forma parte de la experiencia.",
        "Pareja o familia: compara el coste de varios billetes y transbordos con un traslado directo. Con niños, gana el directo.",
        "Grupo de 8 a 19 personas: un minibús lleva a todos juntos con el equipaje.",
        "Grupo organizado o agencia: traslado de llegada, vehículo de apoyo durante las etapas y regreso desde Santiago, todo con un solo proveedor.",
      ],
      after: [
        "Si organizas un grupo, tienes todo el planteamiento en el [transporte para grupos del Camino de Santiago](/transporte-camino-de-santiago): llegada, apoyo entre etapas y regreso.",
      ],
    },
  ],
  service: {
    title: "¿Empiezas el Camino en Sarria con un grupo?",
    text: "Llegada desde el aeropuerto o tu ciudad, vehículo de apoyo y regreso desde Santiago.",
    href: "/transporte-camino-de-santiago",
    label: "Transporte para el Camino",
  },
  faqs: [
    { question: "¿Cuántos kilómetros hay de Sarria a Santiago a pie?", answer: "Unos 115 kilómetros por el Camino Francés, que se suelen hacer en cinco o seis etapas. Es más de los 100 km mínimos para obtener la Compostela." },
    { question: "¿Cuál es el aeropuerto más cercano a Sarria?", answer: "El de Santiago de Compostela, a alrededor de hora y media por carretera. El de A Coruña queda algo más lejos." },
    { question: "¿Hay autobús directo de Santiago a Sarria?", answer: "Las conexiones habituales pasan por Lugo, con transbordo. Por carretera directa, el trayecto ronda la hora y media." },
    { question: "¿Se puede ir en tren a Sarria?", answer: "Sí. Sarria tiene estación en la línea Monforte – Lugo, con conexiones desde Lugo en unos 30 minutos y servicios desde Madrid directos o con cambio en Monforte." },
  ],
  related: [
    { title: "Transporte en el Camino de Santiago para grupos", href: "/guias/transporte-camino-de-santiago" },
    { title: "Año Santo 2027: transporte de grupos", href: "/guias/ano-santo-2027-transporte-grupos" },
    { title: "Traslados Madrid ⇄ Galicia", href: "/traslados-madrid-galicia" },
  ],
};

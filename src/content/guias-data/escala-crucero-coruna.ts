import type { Guide } from "../types";

// Programado: lunes 30 de noviembre de 2026.
// Palabra clave: "cruceros coruña" (1.900/mes, KD 30). Empuja a /excursiones-cruceros-galicia (reina con pocos enlaces).
export const guia: Guide = {
  slug: "escala-crucero-coruna",
  category: "Artículo",
  title: "Escala de crucero en A Coruña: qué hacer según las horas que tengas",
  metaTitle: "Escala de crucero en A Coruña: qué hacer en 4, 6 u 8 horas",
  metaDescription:
    "Tu crucero hace escala en A Coruña: qué ver a pie desde el puerto, qué hacer en 4, 6 u 8 horas y cuándo compensa una excursión a Santiago.",
  image: "/images/cruceros-coruna.jpg",
  alt: "Vista aérea del puerto de A Coruña con cruceros atracados",
  readMinutes: 6,
  date: "2026-11-30",
  stats: [
    { value: "A pie", label: "del muelle a la Ciudad Vieja" },
    { value: "~50 min", label: "por carretera a Santiago" },
    { value: "~25 min", label: "a Betanzos" },
    { value: "1 h", label: "de margen antes del embarque" },
  ],
  intro: [
    "A Coruña tiene una ventaja que pocos puertos de crucero tienen: bajas del barco y ya estás en el centro. El Muelle de Trasatlánticos está pegado a la Marina, la Ciudad Vieja y la plaza de María Pita.",
    "La pregunta no es si da tiempo a ver algo. Es qué hacer con las horas que tienes. Te lo ordeno por duración de la escala, de lo que se hace a pie a lo que necesita un coche.",
  ],
  summary: [
    "Con menos de 4 horas: Ciudad Vieja, María Pita y la Marina a pie.",
    "Con 4 a 6 horas: añade la Torre de Hércules y el paseo marítimo, mejor con transporte.",
    "Con 7 horas o más: Santiago de Compostela, a unos 50 minutos por carretera.",
    "Regla de oro: estar de vuelta al menos una hora antes de la hora de embarque.",
  ],
  sections: [
    {
      heading: "Menos de 4 horas: A Coruña a pie",
      image: { src: "/images/coruna-torre-hercules.jpg", alt: "Torre de Hércules junto al mar en A Coruña" },
      list: [
        "La Marina y sus galerías acristaladas, la imagen más conocida de la ciudad.",
        "Plaza de María Pita y el Ayuntamiento.",
        "Ciudad Vieja: iglesias románicas, plazas pequeñas y el jardín de San Carlos.",
        "Calle Real y calle San Andrés para compras, con la primera tienda de Zara cerca del puerto.",
        "Un vino y una ración en la zona de la calle Estrella o la Franja.",
      ],
      after: ["Todo esto queda a un paseo corto desde el muelle. No necesitas transporte, solo calzado cómodo y un paraguas por si acaso."],
    },
    {
      heading: "De 4 a 6 horas: la Torre de Hércules y la costa",
      paragraphs: [
        "La Torre de Hércules es el faro romano en funcionamiento más antiguo del mundo y Patrimonio de la Humanidad. Está en el extremo de la península, a unos kilómetros del muelle. Se puede ir andando por el paseo marítimo, pero con una escala ajustada se pierde mucho tiempo.",
        "Con un vehículo y un chófer que conoce la ciudad, en tres o cuatro horas encadenas la Torre, el Monte de San Pedro con sus vistas sobre la bahía, las playas de Riazor y Orzán y la Ciudad Vieja. Es lo que se conoce como A Coruña a fondo.",
      ],
      tip: "En los días con varios cruceros en puerto, los taxis de la zona se saturan. Si tu plan depende de un coche, resérvalo antes de llegar.",
    },
    {
      heading: "7 horas o más: Santiago de Compostela",
      image: { src: "/images/santiago-obradoiro-catedral.jpg", alt: "Catedral de Santiago desde la plaza del Obradoiro" },
      paragraphs: [
        "Santiago está a unos 50 minutos por autopista. Con una escala de siete u ocho horas da tiempo a ver la catedral y el Obradoiro, pasear el casco histórico, comer bien y volver con margen.",
        "La excursión de la naviera funciona, pero va al ritmo del autobús y del grupo. Una [excursión privada desde el puerto de A Coruña](/excursiones-cruceros-galicia) va a tu ritmo, sale a pie de terminal y vuelve cuando tú decides, siempre con la hora del barco como límite.",
      ],
      quote: "En una escala, el tiempo es lo único que no puedes recuperar.",
    },
    {
      heading: "Otras ideas cerca del puerto",
      table: {
        head: ["Destino", "Tiempo por carretera", "Para quién"],
        rows: [
          ["Betanzos", "~25 min", "Casco medieval y la tortilla más famosa de Galicia"],
          ["Santiago de Compostela", "~50 min", "Escalas largas: catedral y casco histórico"],
          ["Costa da Morte (Malpica, faros)", "~1 h", "Paisaje atlántico salvaje"],
          ["Fisterra", "~1 h 45", "Solo con escalas muy largas"],
        ],
      },
      after: ["Si prefieres algo más tranquilo y sin escala en mente, mira los [tours privados por Galicia con chófer](/tours-con-chofer-galicia), de un día o de varios."],
    },
    {
      heading: "Cómo no perder el barco",
      list: [
        "Cuenta hacia atrás desde la hora de embarque, no desde la de salida del barco.",
        "Deja al menos una hora de margen para volver, pasar el control y subir.",
        "Lleva el teléfono del barco y el del chófer o del guía.",
        "Si tu escala coincide con la de otros barcos, sal pronto: la ciudad se llena a media mañana.",
      ],
    },
  ],
  service: {
    title: "¿Tu crucero para en A Coruña?",
    text: "Excursión privada a Santiago o A Coruña a fondo, con recogida a pie de terminal y vuelta garantizada al barco.",
    href: "/excursiones-cruceros-galicia",
    label: "Excursiones para cruceros",
  },
  faqs: [
    { question: "¿Dónde atracan los cruceros en A Coruña?", answer: "En el Muelle de Trasatlánticos, en pleno centro, junto a la Marina y la Ciudad Vieja. Se sale de la terminal directamente a la ciudad." },
    { question: "¿Se puede ir andando del puerto a la Torre de Hércules?", answer: "Sí, por el paseo marítimo, pero es un paseo largo. En una escala corta compensa ir en coche y aprovechar el tiempo allí." },
    { question: "¿Da tiempo a ir a Santiago desde el crucero?", answer: "Con siete u ocho horas de escala, sí. Santiago está a unos 50 minutos por autopista y da tiempo a ver la catedral, comer y volver con margen." },
    { question: "¿Qué pasa si el tráfico retrasa la vuelta?", answer: "Por eso se planifica con al menos una hora de margen sobre la hora de embarque. Un chófer que conoce la escala ajusta la ruta para cumplirla." },
  ],
  related: [
    { title: "Excursiones privadas para cruceros", href: "/excursiones-cruceros-galicia" },
    { title: "Excursión privada a Santiago de Compostela", href: "/tours-con-chofer-galicia/santiago-de-compostela" },
    { title: "Traslados desde A Coruña", href: "/traslados-desde-coruna" },
  ],
};

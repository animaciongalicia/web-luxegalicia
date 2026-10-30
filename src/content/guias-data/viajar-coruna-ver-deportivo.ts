import type { Guide } from "../types";

export const guia: Guide = {
  slug: "viajar-coruna-ver-deportivo",
  category: "Artículo",
  title: "Viajar a A Coruña a ver al Deportivo: guía para aficionados visitantes",
  metaTitle: "Viajar a A Coruña para ver al Deportivo en Riazor: guía práctica",
  metaDescription:
    "Guía para aficionados y peñas que viajan a A Coruña a un partido en Riazor: cómo llegar en avión, tren o autocar, dónde alojarse, el día de partido y qué hacer en la ciudad.",
  image: "/images/traslados-chofer-coruna.jpg",
  alt: "Minibús con conductor para grupos de aficionados en A Coruña",
  readMinutes: 6,
  date: "2026-10-30",
  stats: [
    { value: "~32.500", label: "espectadores en Riazor" },
    { value: "~20 min", label: "a pie desde el centro" },
    { value: "~20 min", label: "aeropuerto de Alvedro" },
    { value: "~55 min", label: "aeropuerto de Santiago" },
  ],
  intro: [
    "Con el Deportivo de vuelta en Primera, A Coruña vuelve a recibir aficionados de toda España cada quince días. Y Riazor tiene algo que pocos estadios tienen: está en plena ciudad, junto a la playa.",
    "Esto es para ti si vienes de fuera o si organizas el desplazamiento de tu peña. Cómo llegar, dónde dormir, cómo moverte el día de partido y qué hacer el resto del fin de semana.",
  ],
  summary: [
    "Riazor está en el centro: desde la zona hotelera se llega andando por el paseo marítimo.",
    "El día de partido, aparcar cerca es casi imposible. No dependas del coche.",
    "Llega por Alvedro, por Santiago (a unos 55 minutos) o en tren de alta velocidad.",
    "Las peñas en autocar coordinan la llegada con las zonas habilitadas para el partido.",
  ],
  sections: [
    {
      heading: "Cómo llegar a A Coruña",
      table: {
        head: ["Cómo", "Desde", "Hasta Riazor", "Ten en cuenta"],
        rows: [
          ["Avión a A Coruña (Alvedro)", "Madrid, Barcelona y otras ciudades", "~20 min", "Pocos vuelos: resérvalo pronto"],
          ["Avión a Santiago", "Más conexiones nacionales", "~55 min", "Necesitas [traslado del aeropuerto de Santiago a A Coruña](/aeropuertos-galicia)"],
          ["Tren de alta velocidad", "Madrid y otras ciudades", "~10 min desde la estación", "Buena opción desde Madrid"],
          ["Autocar de peña", "Tu ciudad", "Directo", "Coordina la zona de llegada para el partido"],
        ],
      },
    },
    {
      heading: "Dónde alojarse",
      image: { src: "/images/cruceros-coruna.jpg", alt: "Vista aérea de A Coruña, con el centro, el puerto y la Torre de Hércules al fondo" },
      list: [
        "Centro y la Marina: lo más cómodo; Riazor queda a un paseo y tienes todo cerca.",
        "Riazor y Orzán: junto al estadio y a la playa; se llena pronto en días de partido.",
        "Fuera de la ciudad (Oleiros, Santa Cristina, Arteixo): más disponibilidad, pero necesitas transporte el día de partido.",
        "Santiago: si quieres combinar fútbol y Santiago, está a 50 minutos con un [traslado de Santiago a A Coruña con conductor](/traslados-desde-santiago).",
      ],
    },
    {
      heading: "El día de partido",
      paragraphs: [
        "Riazor recibe a más de 30.000 personas en un barrio residencial junto al mar. Se cortan calles y los aparcamientos se llenan pronto. Lo cómodo: llegar andando desde el centro por el paseo marítimo, o que te dejen y te recojan.",
        "A la salida, decenas de miles de personas salen a la vez. Si vas en grupo, fijad antes un punto de encuentro algo alejado del estadio.",
      ],
      quote: "Vienes por el partido. Que el atasco de la salida no sea lo que recuerdes.",
      tip: "Si tenéis vuelo o tren de vuelta el mismo día, no lo pongáis justo después del partido: entre la salida del estadio y el tráfico, deja al menos dos horas de margen.",
    },
    {
      heading: "Si vienes con una peña",
      image: { src: "/images/minibus-interior.jpg", alt: "Interior de un minibús para un grupo de aficionados" },
      list: [
        "Los autocares visitantes llegan a las zonas que se habilitan para cada partido según el dispositivo de seguridad.",
        "Coordina con tu peña o con el club la hora y el punto de llegada.",
        "Si el grupo duerme en A Coruña, el autocar o los minibuses pueden quedarse a disposición todo el fin de semana.",
        "Para grupos pequeños, una van o un minibús con chófer es más flexible que un autocar grande.",
      ],
      after: [
        "Para eso existe el [transporte para peñas que viajan a Riazor](/transporte-eventos-deportivos): autocar o minibús, punto de encuentro claro y vuelta sin perder a nadie. Y si el grupo es grande, el [alquiler de autocar con conductor para desplazamientos de aficionados](/alquiler-autocar-con-conductor-galicia).",
      ],
    },
    {
      heading: "Qué hacer en A Coruña antes o después del partido",
      list: [
        "Torre de Hércules: el faro romano en funcionamiento más antiguo del mundo, Patrimonio de la Humanidad.",
        "Paseo marítimo: uno de los más largos de Europa, de Riazor a la Torre.",
        "Ciudad Vieja y plaza de María Pita.",
        "Tapas y raciones en la calle de la Estrella, la Franja y alrededores.",
        "Monte de San Pedro: las mejores vistas de la ciudad.",
        "Si te quedas el domingo: [excursión a Santiago de Compostela con chófer](/tours-con-chofer-galicia/santiago-de-compostela) o a la Costa da Morte.",
      ],
    },
  ],
  service: {
    title: "Transporte para el partido",
    text: "Traslados desde aeropuertos y estación, autocares para peñas y vans para grupos. También a Balaídos y otros eventos deportivos.",
    href: "/transporte-eventos-deportivos",
    label: "Transporte para el fútbol",
  },
  faqs: [
    { question: "¿Se puede ir andando al estadio de Riazor desde el centro?", answer: "Sí. Desde la zona de la Marina y la plaza de María Pita son unos 20 minutos andando, gran parte por el paseo marítimo." },
    { question: "¿Qué aeropuerto me conviene para ver al Deportivo?", answer: "Alvedro (A Coruña) es el más cercano, a unos 20 minutos de Riazor. Si no hay vuelos, Santiago está a unos 55 minutos por carretera." },
    { question: "¿Dónde aparcan los autocares de aficionados visitantes?", answer: "En las zonas que se habilitan para cada partido según el dispositivo de seguridad. Conviene coordinarlo con antelación." },
    { question: "¿Merece la pena quedarse el fin de semana?", answer: "Sí. A Coruña tiene mucho que ver y Santiago o la Costa da Morte están a una hora o poco más." },
  ],
  related: [
    { title: "Cómo llegar al estadio de Riazor", href: "/guias/como-llegar-estadio-riazor" },
    { title: "Excursión privada a la Costa da Morte", href: "/tours-con-chofer-galicia/costa-da-morte" },
    { title: "Traslados con conductor desde A Coruña", href: "/traslados-desde-coruna" },
  ],
};

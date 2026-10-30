import type { Guide } from "../types";

export const guia: Guide = {
  slug: "como-llegar-estadio-riazor",
  category: "Sede",
  title: "Cómo llegar al estadio de Riazor: transporte, aparcamiento y grupos",
  metaTitle: "Cómo llegar al estadio de Riazor (A Coruña): transporte y aparcamiento",
  metaDescription:
    "Cómo llegar al estadio Abanca-Riazor el día de partido del Deportivo: desde el aeropuerto, la estación y el centro, aparcamiento, autocares de peñas y transporte con chófer para grupos.",
  image: "/images/coruna-torre-hercules.jpg",
  alt: "Paseo marítimo de A Coruña, junto a la Torre de Hércules",
  readMinutes: 5,
  date: "2026-10-30",
  stats: [
    { value: "~32.500", label: "espectadores" },
    { value: "~20 min", label: "a pie desde el centro" },
    { value: "~20 min", label: "aeropuerto de Alvedro" },
    { value: "~55 min", label: "aeropuerto de Santiago" },
  ],
  intro: [
    "Riazor, la casa del Deportivo, está en pleno A Coruña, entre las playas de Riazor y Orzán. Caben unas 32.500 personas y, con el equipo de vuelta en Primera, los días de partido la ciudad se llena.",
    "Para ir andando desde el centro es una maravilla. Para llegar en coche o en grupo, un pequeño infierno. Te cuento cómo hacerlo bien.",
  ],
  summary: [
    "Desde el centro, 20 minutos andando por el paseo marítimo.",
    "Aparcar cerca el día de partido es casi imposible.",
    "Los autocares de peñas paran donde marca el dispositivo de tráfico.",
    "La vuelta es lo complicado: fija un punto de encuentro lejos del estadio.",
  ],
  sections: [
    {
      heading: "Tiempos de referencia hasta Riazor",
      table: {
        head: ["Desde", "Tiempo", "Cómo"],
        rows: [
          ["Centro (plaza de María Pita)", "~20 min", "Andando por el paseo marítimo"],
          ["Estación de tren", "~10 min", "En vehículo"],
          ["Aeropuerto de A Coruña (Alvedro)", "~20 min", "En vehículo"],
          ["Aeropuerto de Santiago", "~55 min", "En vehículo"],
          ["Aeropuerto de Oporto", "~3 h", "En vehículo"],
        ],
      },
      after: [
        "Si llegas el mismo día del partido, reserva la [recogida en el aeropuerto de Alvedro o de Santiago](/aeropuertos-galicia) con margen: el tráfico alrededor del estadio se complica horas antes.",
      ],
    },
    {
      heading: "Aparcamiento: el gran problema",
      paragraphs: [
        "El entorno de Riazor es un barrio residencial junto a la playa, con poco aparcamiento en superficie. Los días de partido los aparcamientos cercanos se llenan pronto y se cortan o desvían calles.",
        "Si vienes en coche, llega con mucha antelación o aparca lejos y camina. Si vienes en grupo, lo cómodo es que te dejen y te recojan.",
      ],
      quote: "El partido dura noventa minutos. Salir del entorno del estadio, a veces, más.",
    },
    {
      heading: "Si vienes en grupo o con una peña",
      image: { src: "/images/autocar-conductor.png", alt: "Autocar con conductor para el desplazamiento de una peña" },
      list: [
        "Los autocares no paran donde quieren: el día de partido hay zonas de estacionamiento y un dispositivo de tráfico que fija la organización con la Policía Local.",
        "Planifica la vuelta: a la salida, decenas de miles de personas salen a la vez y el entorno se colapsa un rato.",
        "Acuerda un punto de encuentro para el regreso algo alejado del estadio.",
        "Para grupos de empresa con invitados, una van o un minibús con chófer evita perder a la mitad del grupo a la salida.",
      ],
      after: [
        "Un proveedor local conoce el procedimiento y coordina la llegada. Es lo que hace el [transporte para peñas y aficionados del Deportivo](/transporte-eventos-deportivos): autocar o minibús, punto de encuentro claro y vuelta sin perder a nadie.",
      ],
    },
    {
      heading: "Empresas con invitados en el palco",
      image: { src: "/images/minibus-sprinter-negro.jpg", alt: "Minibús para un grupo de invitados a un partido" },
      paragraphs: [
        "Cada vez más empresas usan el partido para invitar a clientes. Ahí el transporte es parte de la experiencia: recogida en el hotel, llegada sin colas y vuelta tranquila a la cena.",
        "Para eso funcionan los [traslados a partidos del Deportivo para empresas](/transporte-eventos-deportivos) con berlina, van o minibús, según el tamaño del grupo.",
      ],
    },
    {
      heading: "Haz del partido un fin de semana",
      paragraphs: [
        "Muchos aficionados que vienen de fuera aprovechan para conocer A Coruña o Santiago, o hacen al día siguiente una [excursión con chófer a la Costa da Morte](/tours-con-chofer-galicia/costa-da-morte).",
      ],
      tip: "Si vienes de fuera a ver al Dépor, tienes la guía completa en [viajar a A Coruña a ver al Deportivo](/guias/viajar-coruna-ver-deportivo).",
    },
  ],
  service: {
    title: "¿Vienes en grupo a Riazor?",
    text: "Autocar, minibús o van con chófer. El chófer te deja cerca y te recoge donde no hay atasco.",
    href: "/transporte-eventos-deportivos",
    label: "Transporte para partidos",
  },
  faqs: [
    { question: "¿Se puede aparcar cerca de Riazor el día de partido?", answer: "Es difícil: los aparcamientos cercanos se llenan pronto y hay calles cortadas. Lo más práctico es llegar a pie desde el centro o con un transporte que te deje y te recoja." },
    { question: "¿Cuánto se tarda del aeropuerto de A Coruña a Riazor?", answer: "Unos 20 minutos en vehículo en condiciones normales. Los días de partido, conviene sumar margen por el tráfico." },
    { question: "¿Dónde aparcan los autocares de las peñas visitantes?", answer: "En las zonas que se habilitan para cada partido según el dispositivo de seguridad. Un proveedor local conoce el procedimiento y coordina la llegada." },
  ],
  related: [
    { title: "Viajar a A Coruña a ver al Deportivo", href: "/guias/viajar-coruna-ver-deportivo" },
    { title: "Transporte para partidos y eventos deportivos", href: "/transporte-eventos-deportivos" },
    { title: "Traslados con conductor desde A Coruña", href: "/traslados-desde-coruna" },
  ],
};

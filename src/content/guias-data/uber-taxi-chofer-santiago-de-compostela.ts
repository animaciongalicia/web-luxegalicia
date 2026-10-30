import type { Guide } from "../types";

export const guia: Guide = {
  slug: "uber-taxi-chofer-santiago-de-compostela",
  category: "Artículo",
  title: "Uber, taxi o chófer en Santiago de Compostela: qué te conviene en cada caso",
  metaTitle: "Uber, taxi o chófer en Santiago de Compostela: qué te conviene",
  metaDescription:
    "Cómo moverte en Santiago de Compostela: taxi, VTC por aplicación (Uber, Cabify), autobús o coche con chófer. Desde el aeropuerto, por la ciudad y para grupos o empresas.",
  image: "/images/chofer-conduciendo-berlina.jpg",
  alt: "Chófer conduciendo una berlina por Santiago de Compostela",
  readMinutes: 5,
  date: "2026-10-30",
  stats: [
    { value: "15-20 min", label: "aeropuerto – centro" },
    { value: "4", label: "formas de moverte" },
  ],
  intro: [
    "Llegas a Santiago y tienes que moverte: del aeropuerto al hotel, del hotel a una reunión, del centro a la Cidade da Cultura. Cuatro opciones: taxi, VTC por aplicación, autobús o un coche con chófer reservado.",
    "Ninguna gana siempre. Depende de cuántos sois, de cuántos trayectos haces y de cuánto te importa no esperar. Decide en dos minutos.",
  ],
  summary: [
    "Para un trayecto suelto de una o dos personas, taxi o VTC suelen bastar.",
    "En Galicia las VTC funcionan con contratación previa: la disponibilidad inmediata varía.",
    "Al casco histórico no entra nadie: ningún vehículo te deja en la puerta de la catedral.",
    "Para grupos, empresas, varios trayectos o llegadas de madrugada, chófer reservado.",
  ],
  sections: [
    {
      heading: "Comparativa rápida",
      table: {
        head: ["Opción", "Mejor para", "Ventaja", "Inconveniente"],
        rows: [
          ["Taxi", "Trayectos sueltos, 1-4 personas", "Paradas en aeropuerto, estación y centro", "Colas en horas punta y días de evento"],
          ["VTC por aplicación", "Quien ya usa Uber o Cabify", "Precio visible antes de pedir", "Disponibilidad variable; contratación previa"],
          ["Autobús", "Poco equipaje y sin prisa", "Lo más barato", "Horarios y paradas fijas"],
          ["Chófer reservado", "Empresas, grupos, varios trayectos", "Te espera, sigue tu vuelo, mismo coche todo el día", "Hay que reservarlo antes"],
        ],
      },
    },
    {
      heading: "Taxi",
      paragraphs: [
        "Santiago tiene paradas en el aeropuerto Rosalía de Castro, en la estación de tren y en varios puntos del centro. Para un trayecto suelto, cómodo y rápido.",
        "El problema llega cuando todo el mundo lo necesita a la vez: varios vuelos aterrizando, la salida de un congreso, un día de lluvia o las fechas grandes del Año Santo. Ahí las colas pueden ser largas.",
      ],
    },
    {
      heading: "VTC por aplicación (Uber, Cabify)",
      paragraphs: [
        "Las aplicaciones de VTC operan en Santiago, pero con un matiz: en Galicia los VTC se contratan con antelación (la normativa autonómica exige una precontratación mínima, aunque la Xunta ha propuesto eliminarla). En la práctica, encontrar coche al momento depende de cuántos haya en ese instante.",
        "Para un viajero suelto que ya usa la aplicación, puede ir bien. Para un grupo o una agenda de empresa con horarios cerrados, depender del momento es jugársela.",
      ],
      tip: "Si llegas en el último vuelo de la noche o en una fecha de mucha demanda, no confíes en encontrar coche al aterrizar: resérvalo antes de volar.",
    },
    {
      heading: "Autobús",
      paragraphs: [
        "Hay autobús entre el aeropuerto, el centro y la estación, y líneas urbanas que llegan a sitios como la Cidade da Cultura. Lo más económico, pero con horarios y paradas fijas. Con maletas o en grupo, poco práctico.",
      ],
    },
    {
      heading: "Coche con chófer reservado",
      image: { src: "/images/chofer-puerta-detalle.jpg", alt: "Chófer abriendo la puerta de una berlina" },
      paragraphs: [
        "Un chófer reservado no es solo un traslado. Sigue tu vuelo, te espera en llegadas con tu nombre y, si lo contratas por horas o por días, te acompaña en toda tu agenda.",
        "Es lo lógico cuando sois varios (el precio es por vehículo), cuando tienes varias reuniones en el día, cuando llegas de madrugada o cuando no te puedes permitir esperar.",
      ],
      list: [
        "Empresas: aeropuerto, reuniones, Palacio de Congresos y vuelta, con el mismo chófer. Es el [chófer por horas para empresas en Santiago](/transporte-empresas-galicia).",
        "Grupos: una van o un minibús en lugar de tres taxis que llegan a horas distintas.",
        "Familias con equipaje o peregrinos al final del Camino.",
        "Excursiones desde Santiago: Rías Baixas, Costa da Morte o A Coruña.",
      ],
      quote: "El taxi te lleva. El chófer te espera. Esa es toda la diferencia.",
      after: ["Para llegar o salir de Santiago, tienes los [traslados desde el aeropuerto de Santiago a cualquier punto de Galicia](/traslados-desde-santiago)."],
    },
    {
      heading: "El casco histórico: lo que nadie te cuenta",
      image: { src: "/images/catedral-santiago-alameda.jpg", alt: "Casco histórico de Santiago de Compostela con la catedral" },
      paragraphs: [
        "La zona monumental de Santiago tiene el tráfico restringido. Da igual que vayas en taxi, VTC o con chófer: te dejan en el punto accesible más cercano y el último tramo es a pie. Si tu hotel está dentro del casco histórico, pregunta antes dónde será la parada.",
        "En 2027, con el Año Santo, esto se nota todavía más. Lo explico en la guía del [Año Santo 2027 para grupos y eventos](/guias/ano-santo-2027-transporte-grupos).",
      ],
      tip: "Si vas a un congreso en el Palacio de Congresos, mira cómo se organizan las lanzaderas en la [guía del Palacio de Congresos de Santiago](/guias/transporte-palacio-congresos-santiago).",
    },
  ],
  service: {
    title: "Chófer en Santiago, cuando no puedes esperar",
    text: "Traslados desde el aeropuerto, chófer por horas para empresas y vans para grupos.",
    href: "/traslados-desde-santiago",
    label: "Traslados desde Santiago",
  },
  faqs: [
    { question: "¿Funciona Uber en Santiago de Compostela?", answer: "Sí, las aplicaciones de VTC operan en Santiago, pero en Galicia los VTC se contratan con antelación y la disponibilidad inmediata puede variar según la hora y la demanda." },
    { question: "¿Cuánto se tarda del aeropuerto de Santiago al centro?", answer: "Entre 15 y 20 minutos en vehículo, según el tráfico y el punto exacto del centro." },
    { question: "¿Un taxi puede llevarme hasta la catedral?", answer: "No. El casco histórico tiene el tráfico restringido y cualquier vehículo te deja en el punto accesible más cercano." },
    { question: "¿Cuándo compensa un chófer frente al taxi?", answer: "Cuando sois tres o más personas, cuando tienes varios trayectos en el día, cuando llegas de madrugada o en fechas de mucha demanda." },
  ],
  related: [
    { title: "Moverse por Galicia con chófer", href: "/guias/galicia-con-chofer" },
    { title: "Traslados de aeropuerto en Galicia", href: "/aeropuertos-galicia" },
    { title: "Excursión privada a Santiago de Compostela", href: "/tours-con-chofer-galicia/santiago-de-compostela" },
  ],
};

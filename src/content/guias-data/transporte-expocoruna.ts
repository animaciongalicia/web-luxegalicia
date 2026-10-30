import type { Guide } from "../types";

export const guia: Guide = {
  slug: "transporte-expocoruna",
  category: "Sede",
  title: "Transporte para ferias y eventos en ExpoCoruña",
  metaTitle: "Transporte para ferias y eventos en ExpoCoruña (A Coruña)",
  metaDescription:
    "Cómo organizar el transporte de una feria, congreso o gran evento en ExpoCoruña: ubicación, tiempos desde los aeropuertos de Alvedro, Santiago y Oporto, lanzaderas y montaje.",
  image: "/images/traslados-coruna-eventos.jpg",
  alt: "Vans con chófer preparadas para una feria en A Coruña",
  readMinutes: 6,
  date: "2026-10-30",
  stats: [
    { value: "~13.500 m²", label: "Hall principal" },
    { value: "~10-15 min", label: "aeropuerto de Alvedro" },
    { value: "~10-15 min", label: "centro de A Coruña" },
    { value: "~45-55 min", label: "aeropuerto de Santiago" },
  ],
  intro: [
    "ExpoCoruña es el recinto de A Coruña para formatos grandes: ferias, conciertos y eventos que piden mucho espacio diáfano. Su Hall ronda los 13.500 m², según el propio recinto.",
    "Los congresos médicos y científicos suelen ir a Palexco, en el centro. Cuando el formato crece, entra ExpoCoruña. Y ahí cambia todo, porque está fuera del centro: aquí casi nadie llega andando.",
  ],
  summary: [
    "Fuera del centro: la lanzadera hotel – recinto es imprescindible.",
    "A 10-15 minutos del aeropuerto de Alvedro y del centro.",
    "Salidas escalonadas al cierre para evitar el atasco en la explanada.",
    "El transporte empieza antes de abrir: montaje y personal de stand.",
  ],
  sections: [
    {
      heading: "Dónde está y cómo se llega",
      paragraphs: [
        "El recinto está en la rúa Juana Capdevielle, 2, en la entrada de la ciudad, con acceso rápido a las vías principales y aparcamiento propio. Para quien viene de fuera, la clave es unir tres puntos: aeropuerto o estación, hotel y recinto.",
      ],
      table: {
        head: ["Desde", "Hasta ExpoCoruña"],
        rows: [
          ["Aeropuerto de A Coruña (Alvedro)", "~10-15 min"],
          ["Centro de A Coruña y zona hotelera", "~10-15 min, según tráfico"],
          ["Palexco y puerto", "~10-15 min"],
          ["Aeropuerto de Santiago", "~45-55 min"],
          ["Aeropuerto de Oporto", "~3 h"],
        ],
      },
      after: ["Para las llegadas, [traslados desde el aeropuerto de A Coruña y de Santiago](/aeropuertos-galicia) agrupados por franjas de vuelo."],
    },
    {
      heading: "Por qué aquí la lanzadera es imprescindible",
      paragraphs: [
        "Con la sede fuera del núcleo urbano, cada asistente sin transporte es un taxi más en la puerta a la hora de entrada y de salida. En eventos grandes, las colas de taxis y el aparcamiento lleno son la queja número uno.",
        "Una lanzadera hotel – recinto con frecuencia fija en las horas punta y por bloques el resto del día lo resuelve. Y da una imagen mucho más profesional.",
      ],
      quote: "En ExpoCoruña, cada asistente sin lanzadera es un taxi más en la cola.",
    },
    {
      heading: "Cómo se plantea una operativa en ExpoCoruña",
      image: { src: "/images/minibus-galicia.jpg", alt: "Minibús preparado para una lanzadera de feria" },
      list: [
        "Rutas circulares por los hoteles del centro, con salidas cada 15-20 minutos en la apertura.",
        "Salidas escalonadas al cierre para evitar picos en la explanada.",
        "Punto de subida y bajada de autocares acordado con el recinto y señalizado.",
        "Berlinas a disposición para expositores principales, ponentes y organización.",
        "Recogidas de aeropuerto agrupadas por franjas de llegada.",
        "Coordinador de transporte en el recinto durante los picos.",
      ],
      after: [
        "Es la base de cualquier [lanzadera para ferias y eventos en A Coruña](/transporte-eventos-galicia). Para dimensionarla, cuenta unas 50 personas por autocar y rotación con el [alquiler de autocar con conductor](/alquiler-autocar-con-conductor-galicia).",
      ],
    },
    {
      heading: "Montaje y desmontaje",
      image: { src: "/images/flota-berlinas-vans-aerea.jpg", alt: "Berlinas y vans con chófer vistas desde el aire" },
      paragraphs: [
        "En ferias, el transporte empieza antes de abrir. Equipos de montaje, técnicos y personal de stand llegan días antes y trabajan en horarios largos.",
        "Vans y minibuses con recogidas tempranas y regresos tardíos evitan depender del transporte público. Si buscas un [chófer para empresas expositoras en A Coruña](/transporte-empresas-galicia), esta es la parte que más se agradece.",
        "En conciertos y grandes producciones pasa lo mismo, multiplicado: artistas, técnicos y equipo con horarios imposibles. Para eso está el [transporte para artistas, técnicos y producciones](/transporte-festivales-producciones).",
      ],
      tip: "Si tu evento es un congreso y no una feria, la sede natural es el centro. Compara con la [guía de Palexco](/guias/transporte-palexco).",
    },
  ],
  service: {
    title: "¿Tu feria es en ExpoCoruña?",
    text: "Lanzaderas desde los hoteles, aeropuertos y vans para montaje. Presupuesto en 24 horas.",
    href: "/traslados-desde-coruna",
    label: "Traslados desde A Coruña",
  },
  faqs: [
    { question: "¿Se puede llegar andando a ExpoCoruña desde el centro?", answer: "No es lo habitual: el recinto está fuera del centro. Para eventos con asistentes alojados en hoteles céntricos, lo recomendable es una lanzadera." },
    { question: "¿Cuántos autocares necesita una feria en ExpoCoruña?", answer: "Depende de los asistentes que se alojan en hoteles y de la franja de entrada. Como referencia, cada autocar mueve unas 50 personas por rotación; con el programa y las cifras se calcula el plan exacto." },
  ],
  related: [
    { title: "Transporte para congresos en Palexco", href: "/guias/transporte-palexco" },
    { title: "Calendario de congresos y ferias 2027", href: "/guias/calendario-congresos-ferias-galicia-2027" },
    { title: "Traslados con conductor desde A Coruña", href: "/traslados-desde-coruna" },
  ],
};

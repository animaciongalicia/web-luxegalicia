import type { Guide } from "../types";

export const guia: Guide = {
  slug: "transporte-cidade-da-cultura",
  category: "Sede",
  title: "Transporte para eventos en la Cidade da Cultura (Santiago)",
  metaTitle: "Transporte para eventos en la Cidade da Cultura de Santiago",
  metaDescription:
    "Cómo organizar el transporte de un evento en la Cidade da Cultura de Galicia (monte Gaiás, Santiago): acceso, tiempos desde el centro y el aeropuerto, lanzaderas y cenas de gala.",
  image: "/images/mirador-galicia.jpg",
  alt: "Mirador sobre el paisaje gallego cerca de Santiago",
  readMinutes: 5,
  date: "2026-10-30",
  stats: [
    { value: "~4 km", label: "del centro de Santiago" },
    { value: "~10-15 min", label: "en vehículo desde el centro" },
    { value: "~15-20 min", label: "aeropuerto de Santiago" },
    { value: "2011", label: "año de inauguración" },
  ],
  intro: [
    "La Cidade da Cultura de Galicia, en el monte Gaiás, es de los espacios para eventos más espectaculares de Galicia. Un complejo de Peter Eisenman, inaugurado en 2011, con auditorio, salas y espacios singulares para congresos, presentaciones y cenas de gala.",
    "Impresiona. Pero está a unos 4 km del centro de Santiago, en lo alto del monte. Sin transporte organizado, tus invitados dependen de un autobús urbano o de un taxi que no llega.",
  ],
  summary: [
    "A 10-15 minutos del centro en vehículo, pero cuesta arriba y lejos para ir andando.",
    "No dejes el programa en manos de las líneas urbanas.",
    "En cenas de gala, la vuelta escalonada al centro es imprescindible.",
    "Llueve a menudo: el punto de subida y bajada, lo más cerca posible de la puerta.",
  ],
  sections: [
    {
      heading: "Tiempos de referencia",
      table: {
        head: ["Desde", "Hasta la Cidade da Cultura"],
        rows: [
          ["Centro de Santiago", "~10-15 min en vehículo"],
          ["Estación de tren de Santiago", "~10 min"],
          ["Aeropuerto de Santiago", "~15-20 min"],
          ["A Coruña", "~50 min"],
          ["Aeropuerto de Oporto", "~2 h 20 min"],
        ],
      },
      after: ["Los ponentes que aterrizan en Rosalía de Castro llegan en un cuarto de hora con un [traslado del aeropuerto de Santiago a la Cidade da Cultura](/aeropuertos-galicia)."],
    },
    {
      heading: "Claves logísticas",
      image: { src: "/images/chofer-puerta-abierta-interior.jpg", alt: "Chófer con la puerta abierta esperando a un invitado" },
      list: [
        "Acceso: por carretera desde la AP-9, con aparcamiento en el propio complejo. Pero quien duerme en el casco histórico no tiene forma cómoda de llegar a pie.",
        "Autobús urbano: las líneas que suben al monte Gaiás tienen frecuencias limitadas. No conviene que el programa dependa de ellas.",
        "Casco histórico: tráfico restringido. Las recogidas se hacen en puntos accesibles cerca de los hoteles.",
        "Lluvia: el punto de subida y bajada debe quedar lo más cerca posible de la entrada al edificio.",
      ],
      quote: "Un edificio espectacular no sirve de nada si tus invitados llegan empapados y tarde.",
    },
    {
      heading: "Cenas de gala en el monte Gaiás",
      image: { src: "/images/cena-gala-evento-galicia.jpg", alt: "Salón preparado para una cena de gala" },
      paragraphs: [
        "La Cidade da Cultura es una sede de cena de gala espectacular, y justo por eso concentra el pico de transporte del evento: todo el mundo sube a la vez y baja a horas distintas.",
        "La vuelta se organiza en salidas escalonadas hacia el centro y los hoteles. Para grupos grandes, [autocares con conductor para cenas de gala en Santiago](/alquiler-autocar-con-conductor-galicia). Para la dirección y los ponentes, berlinas a disposición toda la noche.",
      ],
      tip: "Coloca la primera salida 15 minutos después del final del servicio y la última, al cierre. Nadie espera y nadie se va antes de tiempo.",
    },
    {
      heading: "Combinarlo con el Palacio de Congresos",
      paragraphs: [
        "Muchos congresos en Santiago hacen las sesiones en el [Palacio de Congresos de Santiago](/guias/transporte-palacio-congresos-santiago) y la cena o un acto institucional aquí. Un mismo plan de transporte cubre los dos recintos y los hoteles con la misma flota.",
        "Es justo lo que resuelve un buen [transporte para eventos corporativos en Santiago](/transporte-eventos-galicia): un plan, una flota, un interlocutor.",
      ],
    },
  ],
  service: {
    title: "¿Tu evento es en la Cidade da Cultura?",
    text: "Lanzaderas desde los hoteles, cena de gala con vuelta escalonada y berlinas para la dirección.",
    href: "/transporte-eventos-galicia",
    label: "Transporte para eventos",
  },
  faqs: [
    { question: "¿Se puede ir andando del centro de Santiago a la Cidade da Cultura?", answer: "Se puede, pero es un paseo largo y cuesta arriba, poco práctico para asistentes a un evento. Lo recomendable es organizar lanzaderas." },
    { question: "¿Llegan autocares grandes a la Cidade da Cultura?", answer: "Sí, el complejo tiene acceso rodado y aparcamiento. El punto exacto de subida y bajada se acuerda con la organización del recinto." },
  ],
  related: [
    { title: "Transporte para congresos y eventos: guía completa", href: "/guias/transporte-congresos-eventos-galicia" },
    { title: "Traslados privados desde Santiago", href: "/traslados-desde-santiago" },
    { title: "Año Santo 2027: transporte de grupos y eventos", href: "/guias/ano-santo-2027-transporte-grupos" },
  ],
};

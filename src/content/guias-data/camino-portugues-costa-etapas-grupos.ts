import type { Guide } from "../types";

export const guia: Guide = {
  slug: "camino-portugues-costa-etapas-grupos",
  category: "Artículo",
  title: "Camino Portugués por la costa: etapas y logística para grupos",
  metaTitle: "Camino Portugués por la costa: etapas, km y logística para grupos",
  metaDescription:
    "Camino Portugués por la costa de Oporto a Santiago: distancia, etapas por tramos, opción corta desde Baiona y cómo organizar transporte, vehículo de apoyo y regreso para grupos.",
  image: "/images/parador-baiona.jpg",
  alt: "Baiona, etapa del Camino Portugués por la costa",
  readMinutes: 8,
  date: "2026-10-30",
  stats: [
    { value: "~270 km", label: "de Oporto a Santiago" },
    { value: "12-13", label: "etapas desde Oporto" },
    { value: "~120 km", label: "desde Baiona" },
    { value: "6", label: "etapas desde Baiona" },
  ],
  intro: [
    "El Camino Portugués por la costa es de las rutas jacobeas que más crecen. Sale de Oporto, sube pegado al Atlántico, entra en Galicia por A Guarda y se une al Portugués central en Redondela.",
    "Para un peregrino solo, la logística es sencilla. Para un grupo, no tanto: llegar a Oporto, mover maletas, cruzar el Miño, apoyar a quien no puede con una etapa y volver desde Santiago. Te lo ordeno.",
  ],
  summary: [
    "Entre 265 y 280 km según la variante, normalmente en 12 o 13 etapas.",
    "Opción corta: desde Baiona, unos 120 km en 6 etapas. Suficiente para la Compostela.",
    "Se une al Camino Portugués central en Redondela, antes de Pontevedra.",
    "Para grupos, la clave es el vehículo de apoyo y el equipaje entre alojamientos.",
  ],
  sections: [
    {
      heading: "El recorrido por tramos",
      paragraphs: [
        "Las guías no coinciden en el número exacto de etapas, porque cada grupo las adapta a su ritmo y a sus alojamientos. Esta es la estructura más habitual:",
      ],
      table: {
        head: ["Tramo", "Recorrido", "Qué tener en cuenta"],
        rows: [
          ["Oporto → Viana do Castelo", "Oporto o Matosinhos, Vila do Conde, Póvoa de Varzim, Esposende", "Etapas llanas junto al mar; la primera suele ser larga"],
          ["Viana do Castelo → A Guarda", "Caminha y cruce del río Miño", "El barco depende de la marea y del servicio: ten un plan B"],
          ["A Guarda → Vigo", "Oia, Baiona, Nigrán", "Costa gallega espectacular; Baiona, inicio de la opción corta"],
          ["Vigo → Pontevedra", "Redondela (unión con el central), Arcade", "A partir de aquí hay muchos más peregrinos"],
          ["Pontevedra → Santiago", "Caldas de Reis, Padrón", "Tramo final compartido con el Portugués central"],
        ],
      },
    },
    {
      heading: "La opción corta: desde Baiona",
      image: { src: "/images/combarro-horreos.jpg", alt: "Hórreos de Combarro junto a la ría de Pontevedra" },
      paragraphs: [
        "Si el grupo no tiene dos semanas, empezar en Baiona es lo más popular: unos 120 km hasta Santiago en unas 6 etapas, con la parte gallega más bonita de la costa y distancia suficiente para la Compostela, que exige los últimos 100 km a pie.",
        "Y logísticamente es muy cómodo: Baiona está a menos de una hora del aeropuerto de Vigo y a unas dos horas del de Oporto. Desde Vigo, un [traslado privado de Vigo a Baiona](/traslados-desde-vigo) y el grupo empieza a caminar esa misma tarde.",
      ],
    },
    {
      heading: "Logística para grupos",
      image: { src: "/images/minibus-galicia.jpg", alt: "Minibús de apoyo para un grupo de peregrinos" },
      list: [
        "Llegada: recogida en el aeropuerto de Oporto y traslado a Oporto, Matosinhos o el punto de inicio. Es el [traslado del aeropuerto de Oporto al inicio del Camino](/oporto-galicia).",
        "Equipaje: el grupo camina con mochila ligera y las maletas viajan en vehículo entre alojamientos.",
        "Vehículo de apoyo: una van o un minibús que acompaña al grupo, recoge a quien lo necesite y resuelve los tramos sin alojamiento cerca.",
        "Cruce del Miño: si el barco entre Caminha y A Guarda no opera, el vehículo de apoyo cruza por carretera.",
        "Llegada a Santiago: recogida al final de la última etapa y traslado al hotel, con acceso coordinado al casco histórico.",
        "Regreso: a los aeropuertos de Santiago, Vigo u Oporto, o extensión a Fisterra.",
      ],
      tip: "Con niveles distintos en el grupo, el vehículo de apoyo es lo que permite que todos terminen juntos. Es la diferencia entre un viaje de grupo y un grupo que se desmonta el tercer día.",
    },
    {
      heading: "Qué vehículo necesita tu grupo",
      image: { src: "/images/van-carretera-galicia.webp", alt: "Van de apoyo en una carretera de la costa gallega" },
      table: {
        head: ["Tamaño del grupo", "Apoyo recomendado"],
        rows: [
          ["4-7 peregrinos", "Una van ejecutiva para apoyo y equipaje"],
          ["8-16 peregrinos", "Minibús de apoyo (equipaje en el maletero o en vehículo aparte)"],
          ["17-30 peregrinos", "Minibús de apoyo + vehículo para equipaje"],
          ["Grupos grandes", "Autocar para llegada y regreso + vehículos de apoyo por etapas"],
        ],
      },
      after: [
        "Para los grupos grandes, el [autocar con conductor para grupos de peregrinos](/alquiler-autocar-con-conductor-galicia) cubre la llegada y la vuelta. El día a día lo resuelve el [vehículo de apoyo para peregrinos en el Camino](/transporte-camino-de-santiago).",
      ],
      quote: "Que todos lleguen a Santiago juntos depende menos de las piernas que de la logística.",
    },
    {
      heading: "Mejor época",
      paragraphs: [
        "Primavera y principios de otoño son ideales: buen tiempo y menos calor que en pleno verano. En julio y agosto la costa está más concurrida y los alojamientos se llenan.",
      ],
      tip: "En 2027, Año Santo, la demanda será alta todo el año. Lo tienes en la guía del [Año Santo 2027 para grupos](/guias/ano-santo-2027-transporte-grupos).",
    },
  ],
  service: {
    title: "Transporte para grupos del Camino",
    text: "Llegada desde Oporto, vehículo de apoyo, equipaje entre etapas y regreso desde Santiago, con un solo responsable.",
    href: "/transporte-camino-de-santiago",
    label: "Transporte para el Camino",
  },
  faqs: [
    { question: "¿Cuántos kilómetros tiene el Camino Portugués por la costa?", answer: "Entre unos 265 y 280 km desde Oporto hasta Santiago, según la variante y el punto exacto de salida." },
    { question: "¿Cuántas etapas tiene?", answer: "Normalmente entre 12 y 13 etapas desde Oporto. Desde Baiona, unas 6 etapas." },
    { question: "¿Se puede obtener la Compostela empezando en Baiona?", answer: "Sí. Desde Baiona hay unos 120 km, por encima de los 100 km mínimos que se exigen a pie." },
    { question: "¿Dónde se une con el Camino Portugués central?", answer: "En Redondela, antes de Arcade y Pontevedra." },
  ],
  related: [
    { title: "Transporte en el Camino de Santiago para grupos", href: "/guias/transporte-camino-de-santiago" },
    { title: "Cómo ir de Oporto a Galicia", href: "/guias/oporto-galicia-como-llegar" },
    { title: "Excursión privada a la Costa da Morte", href: "/tours-con-chofer-galicia/costa-da-morte" },
  ],
};

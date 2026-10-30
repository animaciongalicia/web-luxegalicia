import type { Tour } from "./types";

const INCLUYE_BASE = [
  "Vehículo premium con chófer profesional durante todo el recorrido",
  "Combustible, peajes y aparcamientos",
  "Recogida y regreso en hotel, aeropuerto, estación o puerto",
  "Itinerario adaptable sobre la marcha",
];

const INCLUYE_VARIOS_DIAS = [...INCLUYE_BASE, "Alojamiento y dietas del chófer"];

const NO_INCLUYE = [
  "Alojamiento y comidas de los viajeros",
  "Entradas a monumentos, bodegas y actividades",
  "Guía oficial de turismo (disponible bajo petición a través de Suunia)",
];

export const TOURS: Tour[] = [
  {
    slug: "galicia-3-dias",
    kind: "varios-dias",
    name: "Galicia en 3 días con chófer",
    metaTitle: "Galicia en 3 días con chófer privado: Santiago y Rías Baixas",
    metaDescription:
      "Tour privado de 3 días por Galicia con chófer y van de lujo: Santiago de Compostela, Rías Baixas, Combarro, Cambados y Pontevedra. Salida desde Santiago, Vigo u Oporto.",
    image: "/images/tours-santiago.jpg",
    alt: "Plaza del Obradoiro y catedral de Santiago de Compostela",
    duration: "3 días",
    distance: "~350 km",
    base: "Santiago, Vigo u Oporto",
    vehicle: "Berlina premium o van de lujo",
    summary: "Lo esencial de Galicia en un fin de semana largo: Santiago, albariño y rías.",
    intro: [
      "Tres días bastan para entender por qué Galicia engancha: la catedral de Santiago, las rías, el marisco y el albariño. Con chófer, el tiempo se va en disfrutar, no en buscar aparcamiento.",
      "Ideal para viajes de empresa cortos, clientes VIP o viajeros que llegan por Santiago u Oporto.",
    ],
    stops: [
      { title: "Día 1 · Santiago de Compostela", text: "Recogida en el aeropuerto o en Oporto. Traslado al hotel y tarde libre para la catedral, el Obradoiro y el casco histórico. Cena en la zona vieja." },
      { title: "Día 2 · Rías Baixas", text: "Combarro y sus hórreos frente al mar, Cambados y una bodega de albariño, O Grove y A Toxa. Regreso a Santiago o noche en las Rías Baixas." },
      { title: "Día 3 · Pontevedra y salida", text: "Paseo por el casco histórico de Pontevedra y traslado al aeropuerto de Santiago, Vigo u Oporto según tu vuelo." },
    ],
    includes: INCLUYE_VARIOS_DIAS,
    notIncluded: NO_INCLUYE,
    faqs: [
      { question: "¿Se puede empezar en Oporto y terminar en Santiago?", answer: "Sí. El itinerario se adapta a tu aeropuerto de llegada y salida. Oporto–Rías Baixas–Santiago es una combinación muy habitual." },
      { question: "¿El chófer se queda los tres días?", answer: "Sí, vehículo y chófer acompañan todo el viaje. Su alojamiento y dietas van incluidos en el presupuesto." },
    ],
  },
  {
    slug: "galicia-5-dias",
    kind: "varios-dias",
    name: "Galicia en 5 días con chófer",
    metaTitle: "Galicia en 5 días con chófer: A Coruña, Costa da Morte, Santiago y Rías Baixas",
    metaDescription:
      "Tour privado de 5 días por Galicia con chófer: A Coruña, Costa da Morte y Fisterra, Santiago de Compostela, Rías Baixas y Vigo. En berlina o van de lujo.",
    image: "/images/tours-costa-da-morte.jpg",
    alt: "Acantilados de la Costa da Morte en Galicia",
    duration: "5 días",
    distance: "~600 km",
    base: "A Coruña, Santiago u Oporto",
    vehicle: "Berlina premium o van de lujo",
    summary: "La Galicia atlántica completa: ciudad, fin del mundo, Santiago y rías.",
    intro: [
      "Cinco días para recorrer la costa gallega de norte a sur: la A Coruña de la Torre de Hércules, los faros de la Costa da Morte, Santiago y las Rías Baixas, terminando en Vigo o en Oporto.",
      "Es el formato estrella para viajes de inspección y para viajeros que quieren ver Galicia sin prisas y sin conducir.",
    ],
    stops: [
      { title: "Día 1 · A Coruña", text: "Llegada por el aeropuerto de Alvedro o Santiago. Torre de Hércules, Monte de San Pedro y Ciudad Vieja." },
      { title: "Día 2 · Costa da Morte", text: "Malpica, Muxía y el faro de Fisterra al atardecer. La Galicia más salvaje." },
      { title: "Día 3 · Santiago de Compostela", text: "Catedral, casco histórico y mercado de abastos. Tarde libre." },
      { title: "Día 4 · Rías Baixas", text: "Combarro, Cambados, bodega de albariño y O Grove." },
      { title: "Día 5 · Vigo y salida", text: "Vigo o Baiona y traslado al aeropuerto de Vigo u Oporto." },
    ],
    includes: INCLUYE_VARIOS_DIAS,
    notIncluded: NO_INCLUYE,
    faqs: [
      { question: "¿Se puede hacer en sentido inverso, desde Oporto?", answer: "Sí. Empezar en Oporto y terminar en A Coruña o Santiago funciona igual de bien." },
      { question: "¿Qué vehículo recomendáis para 6 personas?", answer: "Una van de lujo tipo Mercedes Clase V: viajan juntos, con espacio para el equipaje de cinco días." },
    ],
  },
  {
    slug: "galicia-7-dias",
    kind: "varios-dias",
    name: "Galicia en 7 días con chófer",
    metaTitle: "Galicia en 7 días con chófer privado | Ruta completa en van de lujo",
    metaDescription:
      "Tour privado de 7 días por Galicia con chófer: A Coruña, Costa da Morte, Santiago, Rías Baixas, Ribeira Sacra, Lugo y Playa de las Catedrales. Van de lujo o berlina.",
    image: "/images/ribeira-sacra-bodegas-top.jpg",
    alt: "Viñedos en bancales sobre el cañón del Sil en la Ribeira Sacra",
    duration: "7 días",
    distance: "~1.000 km",
    base: "A Coruña o Santiago",
    vehicle: "Van de lujo o berlina premium",
    summary: "La Galicia completa: costa, interior, vino y piedra.",
    intro: [
      "Una semana para ver todo lo que hace única a Galicia: la costa atlántica, Santiago, las rías, los cañones de la Ribeira Sacra, la muralla romana de Lugo y la Playa de las Catedrales.",
      "Con chófer y van de lujo, cada día tiene su ritmo y el viaje se adapta sobre la marcha al tiempo, al grupo y a los planes.",
    ],
    stops: [
      { title: "Día 1 · A Coruña", text: "Llegada y paseo por la ciudad: Torre de Hércules, paseo marítimo y Ciudad Vieja." },
      { title: "Día 2 · Costa da Morte", text: "Faros, acantilados, Muxía y Fisterra." },
      { title: "Día 3 · Santiago de Compostela", text: "Catedral, casco histórico y gastronomía." },
      { title: "Día 4 · Rías Baixas", text: "Combarro, Cambados, albariño y O Grove." },
      { title: "Día 5 · Ribeira Sacra", text: "Cañón del Sil, monasterio de Santo Estevo, miradores y bodega de mencía." },
      { title: "Día 6 · Lugo y A Mariña", text: "Muralla romana de Lugo y Playa de las Catedrales con marea baja." },
      { title: "Día 7 · Regreso", text: "Traslado al aeropuerto de A Coruña, Santiago u Oporto." },
    ],
    includes: INCLUYE_VARIOS_DIAS,
    notIncluded: NO_INCLUYE,
    faqs: [
      { question: "¿Hay que reservar la Playa de las Catedrales?", answer: "En Semana Santa y verano el acceso a la playa requiere reserva gratuita previa en la web de la Xunta. Se tiene en cuenta en el itinerario." },
      { question: "¿Se pueden cambiar días o añadir paradas?", answer: "Sí. Es un itinerario base: se reorganiza según intereses, temporada y mareas." },
    ],
  },
  {
    slug: "rias-baixas",
    kind: "un-dia",
    name: "Rías Baixas y albariño con chófer",
    metaTitle: "Tour privado Rías Baixas con chófer: albariño, Combarro y O Grove",
    metaDescription:
      "Excursión privada de un día por las Rías Baixas con chófer: Combarro, Cambados, bodega de albariño, O Grove y A Toxa. Salida desde Santiago, Vigo, Pontevedra o A Coruña.",
    image: "/images/tours-rias-baixas.jpg",
    alt: "Viñedos de albariño en las Rías Baixas",
    duration: "8 horas",
    distance: "~150 km",
    base: "Santiago, Vigo o Pontevedra",
    vehicle: "Berlina, van o minibús",
    summary: "Albariño, hórreos frente al mar y la ría de Arousa.",
    intro: [
      "Las Rías Baixas son el lado amable del Atlántico: pueblos marineros, viñedos de albariño y playas en calma. Un día con chófer permite catar vino sin preocuparse de conducir de vuelta.",
    ],
    stops: [
      { title: "Combarro", text: "Hórreos sobre el mar y callejuelas de piedra." },
      { title: "Cambados", text: "La capital del albariño: Pazo de Fefiñáns y visita a bodega." },
      { title: "O Grove y A Toxa", text: "Paseo por la isla de A Toxa y comida de marisco en O Grove." },
      { title: "Pontevedra", text: "Casco histórico peatonal antes del regreso (opcional)." },
    ],
    includes: INCLUYE_BASE,
    notIncluded: NO_INCLUYE,
    faqs: [
      { question: "¿Se puede añadir un paseo en barco por las bateas?", answer: "Sí, en O Grove hay salidas en barco para ver las bateas de mejillón. Se encaja en el horario si lo pides al reservar." },
    ],
  },
  {
    slug: "ribeira-sacra",
    kind: "un-dia",
    name: "Ribeira Sacra con chófer",
    metaTitle: "Tour privado Ribeira Sacra con chófer: cañón del Sil y bodegas",
    metaDescription:
      "Excursión privada de un día a la Ribeira Sacra con chófer: cañón del Sil, miradores, monasterio de Santo Estevo, bodega de mencía y catamarán. Desde Ourense, Santiago o Vigo.",
    image: "/images/tours-ribeira-sacra.jpg",
    alt: "Cañón del Sil en la Ribeira Sacra",
    duration: "8-9 horas",
    distance: "~250 km",
    base: "Ourense, Santiago o Vigo",
    vehicle: "Berlina, van o minibús",
    summary: "Cañones, monasterios y viñedos imposibles.",
    intro: [
      "La Ribeira Sacra es la Galicia que no espera nadie: cañones de cientos de metros, viñedos en bancales que se vendimian a mano y monasterios románicos escondidos en el bosque.",
      "Las carreteras son estrechas y con curvas. Exactamente por eso conviene ir con chófer.",
    ],
    stops: [
      { title: "Miradores del Sil", text: "Balcóns de Madrid y miradores sobre el cañón." },
      { title: "Monasterio de Santo Estevo", text: "Monasterio benedictino convertido en parador." },
      { title: "Catamarán por el Sil", text: "Recorrido por el cañón desde el río (en temporada)." },
      { title: "Bodega de mencía", text: "Visita y cata en una bodega de la D.O. Ribeira Sacra." },
    ],
    includes: INCLUYE_BASE,
    notIncluded: [...NO_INCLUYE, "Billete del catamarán"],
    faqs: [
      { question: "¿Cuál es la mejor época?", answer: "Primavera y otoño. La vendimia (septiembre-octubre) es espectacular. En invierno los catamaranes reducen salidas." },
    ],
  },
  {
    slug: "ourense-termal",
    kind: "un-dia",
    name: "Ourense termal con chófer",
    metaTitle: "Tour privado Ourense termal con chófer: termas, Ribadavia y Ribeiro",
    metaDescription:
      "Excursión privada de un día a Ourense con chófer: As Burgas, termas del Miño, catedral, puente romano y Ribadavia con bodega del Ribeiro. Desde Vigo, Santiago o A Coruña.",
    image: "/images/galicia-bodegas-otono.jpg",
    alt: "Bodega del Ribeiro en otoño en la provincia de Ourense",
    duration: "7-8 horas",
    distance: "~220 km",
    base: "Vigo, Santiago o A Coruña",
    vehicle: "Berlina, van o minibús",
    summary: "Aguas termales, judería medieval y vino del Ribeiro.",
    intro: [
      "Ourense es la capital termal de Galicia: aguas calientes que brotan en pleno centro y a la orilla del Miño. Se combina con Ribadavia, su judería y una bodega del Ribeiro.",
    ],
    stops: [
      { title: "As Burgas y casco histórico", text: "Fuentes termales en el centro, catedral y plaza Mayor." },
      { title: "Termas del Miño", text: "Baño en las termas de Outariz o A Chavasqueira (traer bañador)." },
      { title: "Puente romano", text: "Paseo por el puente sobre el Miño." },
      { title: "Ribadavia", text: "Judería medieval y visita a bodega del Ribeiro." },
    ],
    includes: INCLUYE_BASE,
    notIncluded: [...NO_INCLUYE, "Entrada a las termas"],
    faqs: [
      { question: "¿Las termas están abiertas todo el año?", answer: "Las termas al aire libre abren todo el año; algunas instalaciones tienen horarios reducidos en invierno. Se confirma al planificar." },
    ],
  },
  {
    slug: "vigo-islas-cies",
    kind: "un-dia",
    name: "Vigo e Islas Cíes con chófer",
    metaTitle: "Tour privado Vigo e Islas Cíes con chófer | Excursión desde Galicia",
    metaDescription:
      "Excursión privada con chófer a Vigo y las Islas Cíes: barco a la playa de Rodas, mirador de O Castro y Baiona. Desde Santiago, Pontevedra u Oporto.",
    image: "/images/playa-rodas-islas-cies-suunia.jpg",
    alt: "Playa de Rodas en las Islas Cíes",
    duration: "8-9 horas",
    distance: "~200 km",
    base: "Santiago, Pontevedra u Oporto",
    vehicle: "Berlina, van o minibús",
    summary: "El Caribe gallego y la ciudad más grande de Galicia.",
    intro: [
      "Las Islas Cíes son parque nacional y una de las playas más famosas del mundo. Se llega en barco desde Vigo y el acceso está limitado a un número diario de visitantes.",
      "El chófer te deja en el puerto, te recoge al volver y aprovecha el resto del día para enseñarte Vigo o Baiona.",
    ],
    stops: [
      { title: "Puerto de Vigo", text: "Barco a las Islas Cíes (unos 40 minutos)." },
      { title: "Islas Cíes", text: "Playa de Rodas, faro y miradores del parque nacional." },
      { title: "Vigo", text: "Mirador de O Castro y casco viejo a la vuelta." },
      { title: "Baiona (alternativa)", text: "Fortaleza de Monterreal cuando no hay barcos a las Cíes." },
    ],
    includes: INCLUYE_BASE,
    notIncluded: [...NO_INCLUYE, "Billete de barco y autorización de acceso a las Cíes"],
    faqs: [
      { question: "¿Se puede ir a las Cíes todo el año?", answer: "Los barcos regulares operan principalmente de Semana Santa a septiembre, y en temporada alta hace falta autorización previa de la Xunta, que se tramita al reservar el barco. Fuera de temporada se propone Baiona como alternativa." },
    ],
  },
];

export function getTour(slug: string) {
  return TOURS.find((t) => t.slug === slug);
}

import type { Tour } from "../types";
import { INCLUYE_VARIOS_DIAS, NO_INCLUYE } from "./comun";

export const TOURS_VARIOS_DIAS: Tour[] = [
  {
    slug: "galicia-3-dias",
    kind: "varios-dias",
    name: "Galicia en 3 días con chófer",
    metaTitle: "Galicia en 3 días con chófer privado: Santiago y Rías Baixas",
    metaDescription:
      "Tour privado de 3 días por Galicia con chófer: Santiago de Compostela, Rías Baixas, Combarro, Cambados, A Toxa y Pontevedra. Salida desde Santiago, Vigo u Oporto.",
    image: "/images/tours-santiago.jpg",
    alt: "Plaza del Obradoiro y catedral de Santiago de Compostela",
    duration: "3 días",
    distance: "~350 km",
    base: "Santiago, Vigo u Oporto",
    vehicle: "Berlina ejecutiva o van ejecutiva",
    summary: "Santiago, el albariño y la luz de las rías en un fin de semana largo.",
    intro: [
      "Tres días son pocos para Galicia, pero bastan para entender por qué quien viene una vez vuelve: la piedra de Santiago, el Atlántico en calma de las rías y una mesa que no se olvida.",
      "El ritmo es tranquilo a propósito. Un día de ciudad, un día de mar y vino, y una mañana para despedirse sin carreras. El chófer resuelve lo que en Galicia más tiempo roba: aparcar, encontrar el camino y volver de noche.",
    ],
    highlights: [
      { title: "El Obradoiro al caer la tarde", text: "La catedral cambia de color con la última luz. Es el momento de llegar a la plaza." },
      { title: "Combarro frente al mar", text: "Hórreos de piedra levantados sobre la orilla de la ría de Pontevedra." },
      { title: "Albariño en Cambados", text: "Cata en una bodega familiar y paseo por la plaza del Pazo de Fefiñáns." },
      { title: "Marisco en O Grove", text: "Comida frente a la ría de Arousa y paseo por la isla de A Toxa." },
    ],
    stops: [
      {
        title: "Santiago de Compostela",
        text: "Recogida en el aeropuerto de Santiago, Vigo u Oporto y traslado al hotel. Tarde para el casco histórico: catedral, plaza de Quintana, rúa do Vilar y una primera cena en la zona vieja.",
        image: { src: "/images/catedral-santiago-alameda.jpg", alt: "La catedral de Santiago vista desde la Alameda" },
      },
      {
        title: "Rías Baixas",
        text: "Salida hacia la costa. Combarro a media mañana, antes de que llegue la gente; Cambados para la bodega y el Pazo de Fefiñáns; comida de marisco en O Grove y paseo por A Toxa. Noche en las Rías Baixas o regreso a Santiago.",
        image: { src: "/images/combarro-horreos.jpg", alt: "Hórreos de Combarro junto a la ría de Pontevedra" },
      },
      {
        title: "Pontevedra y salida",
        text: "Paseo por el casco histórico peatonal de Pontevedra, de la Peregrina a la plaza de la Leña, y traslado al aeropuerto calculado según tu vuelo.",
      },
    ],
    practical: [
      { label: "Mejor época", value: "De abril a octubre. En septiembre coinciden buen tiempo y vendimia." },
      { label: "Para quién", value: "Clientes que visitan Galicia por primera vez, escapadas cortas y viajes de empresa con un día libre." },
      { label: "En carretera", value: "Menos de dos horas al día, repartidas en trayectos cortos." },
      { label: "Consejo", value: "Si vuelas a Oporto, se empieza por las Rías Baixas y se termina en Santiago." },
    ],
    includes: INCLUYE_VARIOS_DIAS,
    notIncluded: NO_INCLUYE,
    faqs: [
      { question: "¿Se puede empezar en Oporto y terminar en Santiago?", answer: "Sí. El itinerario se adapta a tu aeropuerto de llegada y de salida. Oporto – Rías Baixas – Santiago es una combinación muy habitual." },
      { question: "¿El chófer se queda los tres días?", answer: "Sí. Vehículo y chófer acompañan todo el viaje, y su alojamiento y dietas van incluidos en el presupuesto." },
      { question: "¿Dónde conviene dormir la segunda noche?", answer: "En las Rías Baixas, si quieres cenar junto al mar; en Santiago, si prefieres no cambiar de hotel. Las dos opciones funcionan." },
    ],
  },
  {
    slug: "galicia-5-dias",
    kind: "varios-dias",
    name: "Galicia en 5 días con chófer",
    metaTitle: "Galicia en 5 días con chófer: A Coruña, Costa da Morte, Santiago y Rías Baixas",
    metaDescription:
      "Tour privado de 5 días por Galicia con chófer: A Coruña, Costa da Morte y Fisterra, Santiago de Compostela, Rías Baixas y Vigo. En berlina o van ejecutiva.",
    image: "/images/tours-costa-da-morte.jpg",
    alt: "Acantilados de la Costa da Morte en Galicia",
    duration: "5 días",
    distance: "~600 km",
    base: "A Coruña, Santiago u Oporto",
    vehicle: "Berlina ejecutiva o van ejecutiva",
    summary: "La Galicia atlántica de norte a sur: ciudad, fin del mundo, Santiago y rías.",
    intro: [
      "Cinco días para recorrer la costa gallega de arriba abajo, del faro romano de A Coruña a la luz de las Rías Baixas, pasando por la costa más salvaje de Europa y por Santiago.",
      "Es la ruta que mejor explica Galicia a quien no la conoce, y la que más se pide para viajes de inspección: en una semana corta se ve la Galicia de las postales y la que no sale en ellas.",
    ],
    highlights: [
      { title: "La Torre de Hércules", text: "El faro romano en funcionamiento más antiguo del mundo, sobre el Atlántico." },
      { title: "Fisterra al atardecer", text: "El kilómetro cero del Camino y el sol hundiéndose en el mar." },
      { title: "Un día entero en Santiago", text: "Sin prisas: catedral, mercado de abastos y casco histórico." },
      { title: "La ría de Arousa", text: "Albariño en Cambados y marisco en O Grove." },
    ],
    stops: [
      {
        title: "A Coruña",
        text: "Llegada por Alvedro o Santiago. Torre de Hércules, paseo marítimo, Ciudad Vieja y la vista desde el Monte de San Pedro al caer la tarde.",
        image: { src: "/images/cruceros-coruna.jpg", alt: "Vista aérea de A Coruña con el puerto y la Torre de Hércules" },
      },
      {
        title: "Costa da Morte",
        text: "Malpica y las islas Sisargas, el faro del cabo Vilán, el santuario de Muxía frente al mar y el faro de Fisterra para el atardecer. Es el día más largo y el que más se recuerda.",
        image: { src: "/images/faro-de-Finisterre-1.jpg", alt: "Faro de Fisterra sobre el Atlántico" },
      },
      {
        title: "Santiago de Compostela",
        text: "Catedral, Obradoiro, mercado de abastos y tarde libre. Si se quiere más contexto, visita con guía oficial o subida a las cubiertas de la catedral.",
      },
      {
        title: "Rías Baixas",
        text: "Combarro, Cambados con visita a bodega de albariño y O Grove. Noche junto a la ría.",
        image: { src: "/images/bodega-albarino-rias-baixas.jpg", alt: "Bodega de albariño entre viñedos en las Rías Baixas" },
      },
      {
        title: "Vigo o Baiona y salida",
        text: "Mañana en Baiona o en el casco viejo de Vigo, y traslado al aeropuerto de Vigo u Oporto.",
      },
    ],
    practical: [
      { label: "Mejor época", value: "De mayo a octubre. En invierno la Costa da Morte es todavía más espectacular, con menos horas de luz." },
      { label: "Para quién", value: "Viajes de inspección, parejas y familias que quieren ver la costa completa sin conducir." },
      { label: "En carretera", value: "Entre una y tres horas al día. El día de la Costa da Morte es el más largo." },
      { label: "Consejo", value: "Se puede hacer al revés: llegada a Oporto y salida por A Coruña o Santiago." },
    ],
    includes: INCLUYE_VARIOS_DIAS,
    notIncluded: NO_INCLUYE,
    faqs: [
      { question: "¿Se puede hacer en sentido inverso, desde Oporto?", answer: "Sí. Empezar en Oporto y terminar en A Coruña o Santiago funciona igual de bien." },
      { question: "¿Qué vehículo recomendáis para 6 personas?", answer: "Una van ejecutiva tipo Mercedes Clase V: viajan juntos y con espacio para el equipaje de cinco días." },
      { question: "¿Cuántos hoteles son?", answer: "Lo habitual son tres: A Coruña, Santiago y las Rías Baixas. Así se cambia de hotel lo justo." },
    ],
  },
  {
    slug: "galicia-7-dias",
    kind: "varios-dias",
    name: "Galicia en 7 días con chófer",
    metaTitle: "Galicia en 7 días con chófer privado | Ruta completa en van ejecutiva",
    metaDescription:
      "Tour privado de 7 días por Galicia con chófer: A Coruña, Costa da Morte, Santiago, Rías Baixas, Ribeira Sacra, Lugo y Playa de las Catedrales. Van ejecutiva o berlina.",
    image: "/images/ribeira-sacra-bodegas-top.jpg",
    alt: "Viñedos en bancales sobre el cañón del Sil en la Ribeira Sacra",
    duration: "7 días",
    distance: "~1.000 km",
    base: "A Coruña o Santiago",
    vehicle: "Van ejecutiva o berlina ejecutiva",
    summary: "La Galicia completa: costa, interior, vino y piedra.",
    intro: [
      "Una semana permite ver lo que casi nadie ve en un primer viaje: además de la costa y Santiago, el interior. Los cañones de la Ribeira Sacra, la muralla romana de Lugo y los arcos de piedra de la Playa de las Catedrales.",
      "Es un viaje con contrastes, del Atlántico abierto al Cantábrico y de las rías a los viñedos en bancales. Con chófer, cada día tiene su ritmo y el plan se ajusta sobre la marcha al tiempo y a las mareas.",
    ],
    highlights: [
      { title: "El cañón del Sil", text: "Viñedos colgados sobre el río y monasterios románicos en el bosque." },
      { title: "La muralla de Lugo", text: "Dos kilómetros de muralla romana que se recorren por arriba." },
      { title: "La Playa de las Catedrales", text: "Arcos de roca de hasta treinta metros, solo con la marea baja." },
      { title: "Costa da Morte y Rías Baixas", text: "Las dos caras del Atlántico gallego en la misma semana." },
    ],
    stops: [
      { title: "A Coruña", text: "Llegada y paseo por la ciudad: Torre de Hércules, paseo marítimo y Ciudad Vieja." },
      {
        title: "Costa da Morte",
        text: "Faros, acantilados, Muxía y el atardecer en Fisterra.",
        image: { src: "/images/tours-costa-da-morte.jpg", alt: "Acantilados de la Costa da Morte" },
      },
      { title: "Santiago de Compostela", text: "Catedral, casco histórico y mercado de abastos. Tarde libre." },
      { title: "Rías Baixas", text: "Combarro, Cambados con bodega de albariño y O Grove." },
      {
        title: "Ribeira Sacra",
        text: "Miradores del cañón del Sil, monasterio de Santo Estevo, catamarán en temporada y bodega de mencía.",
        image: { src: "/images/ribeira-sacra-aerea.jpg", alt: "Vista aérea del río y los viñedos de la Ribeira Sacra" },
      },
      {
        title: "Lugo y A Mariña",
        text: "Paseo por la muralla romana de Lugo y llegada a la Playa de las Catedrales con la marea baja. Ribadeo para cerrar el día.",
        image: { src: "/images/playa-catedrales-galicia.jpg", alt: "Arcos de roca de la Playa de las Catedrales" },
      },
      { title: "Regreso", text: "Traslado al aeropuerto de A Coruña, Santiago u Oporto según tu vuelo." },
    ],
    practical: [
      { label: "Mejor época", value: "De mayo a octubre. La vendimia en la Ribeira Sacra, en septiembre, es un plus." },
      { label: "Para quién", value: "Quien quiere conocer Galicia de verdad en un solo viaje, sin repetir paisaje." },
      { label: "En carretera", value: "Entre una y tres horas al día, con el día de la Ribeira Sacra y el de A Mariña como los más largos." },
      { label: "Consejo", value: "El orden de los días se cierra con la tabla de mareas: la Playa de las Catedrales manda." },
    ],
    includes: INCLUYE_VARIOS_DIAS,
    notIncluded: NO_INCLUYE,
    faqs: [
      { question: "¿Hay que reservar la Playa de las Catedrales?", answer: "En Semana Santa y verano el acceso requiere una autorización gratuita previa en la web de la Xunta. Se tiene en cuenta en el itinerario." },
      { question: "¿Se pueden cambiar días o añadir paradas?", answer: "Sí. Es un itinerario base: se reorganiza según intereses, temporada y mareas." },
      { question: "¿Cuántos cambios de hotel hay?", answer: "Lo habitual son cuatro bases: A Coruña, Santiago, Rías Baixas y Ribeira Sacra o Lugo. Se puede reducir alargando algún trayecto." },
    ],
  },
  {
    slug: "oporto-y-galicia-5-dias",
    kind: "varios-dias",
    name: "Oporto y Galicia en 5 días con chófer",
    metaTitle: "Oporto y Galicia en 5 días con chófer privado | Tour en van ejecutiva",
    metaDescription:
      "Tour privado de 5 días con chófer desde Oporto: Valença y Tui, Baiona, Vigo e Islas Cíes, Rías Baixas y Santiago de Compostela. Ideal si vuelas a Oporto.",
    image: "/images/parador-baiona.jpg",
    alt: "Parador de Baiona sobre la costa de las Rías Baixas",
    duration: "5 días",
    distance: "~550 km",
    base: "Aeropuerto de Oporto",
    vehicle: "Berlina ejecutiva o van ejecutiva",
    summary: "Aterrizas en Oporto y subes por la costa hasta Santiago.",
    intro: [
      "Si vuelas desde América o desde buena parte de Europa, lo lógico es aterrizar en Oporto. Esta ruta convierte ese trayecto en parte del viaje: cruzas el Miño entre dos fortalezas, bajas a la costa en Baiona y subes por las Rías Baixas hasta Santiago.",
      "Sin trenes con transbordo ni coches de alquiler que devolver en otro país. El chófer te espera en llegadas y te acompaña hasta el final. Si solo necesitas el trayecto, tienes el [traslado privado de Oporto a Galicia](/oporto-galicia).",
    ],
    highlights: [
      { title: "Valença y Tui", text: "Dos fortalezas frente a frente, una a cada lado del río Miño." },
      { title: "Baiona", text: "La villa donde llegó la noticia del descubrimiento de América, con su fortaleza sobre el mar." },
      { title: "Las Islas Cíes", text: "Parque nacional y la playa de Rodas, en barco desde Vigo." },
      { title: "Llegar a Santiago", text: "El final natural de una ruta que sigue el trazado del Camino Portugués." },
    ],
    stops: [
      {
        title: "Oporto → Valença, Tui y Baiona",
        text: "Recogida en el aeropuerto de Oporto. Paseo por las murallas de Valença, la catedral de Tui al otro lado del puente y llegada a Baiona para la noche.",
        image: { src: "/images/parador-baiona.jpg", alt: "Fortaleza de Baiona sobre el mar" },
      },
      {
        title: "Vigo e Islas Cíes",
        text: "Barco a las Islas Cíes en temporada, con mañana en la playa de Rodas y los miradores. Fuera de temporada, la costa entre Baiona y Vigo y el casco viejo de Vigo.",
        image: { src: "/images/playa-rodas-islas-cies-suunia.jpg", alt: "Playa de Rodas en las Islas Cíes" },
      },
      { title: "Rías Baixas", text: "Combarro, Cambados con visita a bodega de albariño y O Grove." },
      { title: "Santiago de Compostela", text: "Catedral, casco histórico y mercado de abastos. Tarde libre." },
      { title: "Salida", text: "Traslado al aeropuerto de Santiago o de vuelta al de Oporto, a unas 2 h 20 min." },
    ],
    practical: [
      { label: "Mejor época", value: "De mayo a septiembre, cuando hay barcos a las Islas Cíes." },
      { label: "Para quién", value: "Viajeros que vuelan a Oporto desde fuera de Europa y quieren ver el norte de Portugal y Galicia de una vez." },
      { label: "En carretera", value: "Trayectos cortos, de menos de dos horas al día." },
      { label: "Consejo", value: "Portugal tiene una hora menos que España: revisa la hora local de tu vuelo al reservar." },
    ],
    includes: INCLUYE_VARIOS_DIAS,
    notIncluded: NO_INCLUYE,
    faqs: [
      { question: "¿Se puede terminar el tour en Oporto?", answer: "Sí. El último día se vuelve al aeropuerto de Oporto desde Santiago en unas 2 horas y 20 minutos, calculando la salida según tu vuelo." },
      { question: "¿Hay que pasar algún control en la frontera?", answer: "No. Portugal y España están en el espacio Schengen y no hay controles fronterizos ordinarios." },
      { question: "¿Qué pasa si no hay barco a las Islas Cíes?", answer: "Fuera de temporada o con mal tiempo, el día se dedica a la costa de Baiona y a Vigo. Se confirma al planificar." },
    ],
  },
];

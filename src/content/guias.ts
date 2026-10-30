import type { Guide } from "./types";

export const GUIAS: Guide[] = [
  {
    slug: "transporte-congresos-eventos-galicia",
    category: "Guía",
    title: "Transporte para congresos y eventos en Galicia: la guía completa",
    metaTitle: "Transporte para congresos y eventos en Galicia: guía completa",
    metaDescription:
      "Cómo planificar el transporte de un congreso o evento en Galicia: cuántos vehículos necesitas, plazos, aeropuertos, sedes, lanzaderas y los errores que más caro salen.",
    image: "/images/sala-eventos-empresas.jpg",
    alt: "Sala de congresos preparada en Galicia",
    readMinutes: 9,
    date: "2026-10-30",
    intro: [
      "Organizar el transporte de un congreso parece sencillo hasta que haces números: 400 asistentes, seis hoteles, tres aeropuertos posibles, una cena de gala a 25 kilómetros y un programa que cambia la semana anterior.",
      "Esta guía resume lo que funciona en Galicia después de más de una década moviendo congresos, incentivos y eventos corporativos. Sin teoría: decisiones que puedes tomar hoy.",
    ],
    sections: [
      {
        heading: "1. Empieza por las llegadas, no por la sede",
        paragraphs: [
          "En Galicia hay cuatro aeropuertos en juego: Santiago (SCQ), A Coruña (LCG), Vigo (VGO) y Oporto (OPO). Tus asistentes no llegarán todos por el mismo. Los internacionales tiran de Oporto y Santiago; los nacionales, de Santiago y A Coruña; los de Madrid, cada vez más, en tren de alta velocidad a Santiago, A Coruña, Vigo u Ourense.",
          "Pide en la inscripción el medio de llegada, la hora y el aeropuerto o estación. Con ese dato el plan de transporte se diseña solo.",
        ],
      },
      {
        heading: "2. Cuántos vehículos necesitas",
        paragraphs: ["La regla rápida para lanzaderas sede-hotel: calcula el pico de personas que tienen que llegar en la misma franja de 30 minutos y divide por la capacidad del vehículo, sumando un 15 % de margen."],
        list: [
          "1-3 personas: berlina premium (ponentes, VIP, comité).",
          "4-7 personas: van de lujo.",
          "8-19 personas: minibús.",
          "20-55 personas: autocar. Para 300 asistentes en un mismo bloque horario, 6 autocares en una o dos rotaciones.",
          "Siempre: una berlina de reserva para imprevistos con VIP.",
        ],
      },
      {
        heading: "3. Lanzaderas: frecuencia fija o por bloques",
        paragraphs: [
          "Frecuencia fija (cada 15-20 minutos) funciona cuando los hoteles están cerca y las sesiones empiezan escalonadas. Por bloques (salidas a hora cerrada antes de cada sesión plenaria) funciona cuando todos empiezan a la vez.",
          "En A Coruña, con hoteles céntricos y Palexco en el puerto, muchos asistentes van caminando: la lanzadera se reserva para hoteles alejados y para la cena. En Santiago, con el Palacio de Congresos fuera del casco histórico, la lanzadera es casi obligatoria.",
        ],
      },
      {
        heading: "4. Plazos de reserva",
        list: [
          "Congresos de más de 200 personas en temporada alta (mayo-octubre): 3-6 meses.",
          "Incentivos y eventos de 50-200 personas: 1-3 meses.",
          "Traslados ejecutivos: 24-48 horas.",
          "Fechas críticas: Semana Santa, julio-agosto, puentes y grandes eventos en Santiago (Año Santo).",
        ],
      },
      {
        heading: "5. Los errores que más caros salen",
        list: [
          "Contratar vehículos sueltos a varias empresas sin un coordinador común.",
          "No prever la vuelta escalonada de la cena de gala.",
          "Olvidar que el casco histórico de Santiago tiene el tráfico restringido.",
          "No pedir el aeropuerto de llegada en la inscripción.",
          "Calcular tiempos con el mapa y no con el tráfico real de entrada a las ciudades.",
        ],
      },
      {
        heading: "6. Quién coordina",
        paragraphs: [
          "La pieza que más se subestima. Un coordinador de transporte con línea directa con la secretaría técnica resuelve en minutos lo que, sin él, se convierte en veinte llamadas. Es lo que diferencia una operativa profesional de una lista de coches.",
        ],
      },
    ],
    faqs: [
      { question: "¿Qué aeropuerto es mejor para un congreso en A Coruña?", answer: "Alvedro (A Coruña) está a 10 minutos de la ciudad, pero tiene menos vuelos. Santiago, a 50 minutos, concentra más conexiones. Lo habitual es combinar ambos y, para internacionales, Oporto." },
      { question: "¿Cuánto cuesta el transporte de un congreso?", answer: "Depende del número de asistentes, hoteles, días y actividades. Con el programa y las cifras de asistentes se prepara un presupuesto cerrado en 24 horas laborables." },
    ],
    related: [
      { title: "Transporte para congresos en Galicia", href: "/transporte-congresos-galicia" },
      { title: "Transporte a Palexco", href: "/guias/transporte-palexco" },
      { title: "Palacio de Congresos de Santiago", href: "/guias/transporte-palacio-congresos-santiago" },
      { title: "Para agencias MICE", href: "/agencias-mice" },
    ],
  },
  {
    slug: "organizar-evento-en-galicia-agencias",
    category: "Guía",
    title: "Organizar un evento en Galicia desde fuera: guía para agencias",
    metaTitle: "Organizar un evento en Galicia: guía para agencias MICE de fuera",
    metaDescription:
      "Guía para agencias MICE de Madrid, Barcelona y extranjero que organizan eventos en Galicia: sedes, aeropuertos, distancias, temporadas, proveedores y logística.",
    image: "/images/pazo-eventos-corporativos.jpg",
    alt: "Pazo gallego preparado para un evento corporativo",
    readMinutes: 8,
    date: "2026-10-30",
    intro: [
      "Galicia funciona muy bien para eventos: buena gastronomía, sedes con carácter, distancias cortas y una imagen todavía fresca para los asistentes. Pero tiene sus reglas, y si organizas desde Madrid, Barcelona o el extranjero, conviene conocerlas antes de cerrar nada.",
    ],
    sections: [
      {
        heading: "Las tres ciudades de eventos",
        list: [
          "A Coruña: Palexco en el puerto, ExpoCoruña para grandes formatos, hoteles céntricos y aeropuerto a 10 minutos.",
          "Santiago de Compostela: Palacio de Congresos, Cidade da Cultura y la marca Santiago. Aeropuerto con más vuelos de Galicia.",
          "Vigo: IFEVI junto al aeropuerto, base industrial y salida natural hacia Oporto y las Rías Baixas.",
        ],
      },
      {
        heading: "Cómo llegan tus asistentes",
        paragraphs: [
          "Avión a Santiago, A Coruña, Vigo u Oporto; tren de alta velocidad desde Madrid a Ourense, Santiago, A Coruña y Vigo. Para grupos internacionales, Oporto suele ser la mejor opción por número de conexiones, con traslado por carretera de 1,5 a 3 horas según el destino.",
        ],
      },
      {
        heading: "Distancias que debes tener en la cabeza",
        list: [
          "A Coruña – Santiago: ~50 min.",
          "Santiago – Vigo: ~1 h.",
          "Santiago – Rías Baixas (Sanxenxo, O Grove): ~1 h.",
          "Vigo – Oporto (aeropuerto): ~1 h 35 min.",
          "Santiago – Ribeira Sacra: ~1 h 45 min.",
        ],
      },
      {
        heading: "Temporadas",
        paragraphs: [
          "Mayo, junio, septiembre y octubre son los meses ideales: buen tiempo y menos saturación. Julio y agosto concentran turismo y festivales. El invierno es más barato y tranquilo, con lluvia: planifica actividades a cubierto y traslados puerta a puerta.",
        ],
      },
      {
        heading: "Proveedores: el gran reto",
        paragraphs: [
          "El tejido de proveedores en Galicia es de empresas pequeñas. En transporte, por ejemplo, la mayoría tiene unas pocas berlinas y vans. Un evento de 200 personas necesita coordinar varias. Trabajar con un único partner local que asuma esa coordinación te ahorra semanas de gestiones.",
          "Para el programa completo (hoteles, restauración, actividades), un DMC local como Suunia; para el transporte, Luxe Galicia.",
        ],
      },
    ],
    faqs: [
      { question: "¿Cuál es la mejor ciudad de Galicia para un congreso?", answer: "Depende del tamaño y del perfil. A Coruña ofrece sede en el centro y hoteles a pie; Santiago, la marca y la conectividad aérea; Vigo, cercanía con Oporto y tejido industrial." },
    ],
    related: [
      { title: "Para agencias MICE", href: "/agencias-mice" },
      { title: "Transporte para incentivos", href: "/transporte-incentivos-galicia" },
      { title: "Oporto ⇄ Galicia", href: "/oporto-galicia" },
    ],
  },
  {
    slug: "oporto-galicia-como-llegar",
    category: "Guía",
    title: "Cómo ir de Oporto a Galicia: tren, autobús, coche o chófer",
    metaTitle: "Cómo ir de Oporto a Galicia (Vigo, Santiago, A Coruña): opciones",
    metaDescription:
      "Cómo ir del aeropuerto de Oporto a Vigo, Santiago de Compostela o A Coruña: tren, autobús, coche de alquiler o traslado privado con chófer. Tiempos, ventajas y desventajas.",
    image: "/images/traslados-coruna-santiago.jpg",
    alt: "Carretera entre Oporto y Galicia",
    readMinutes: 6,
    date: "2026-10-30",
    intro: [
      "El aeropuerto de Oporto es la gran puerta internacional del noroeste peninsular. Si vas a Galicia y tu vuelo aterriza allí, tienes cuatro opciones. Esta es la comparación sin rodeos.",
    ],
    sections: [
      {
        heading: "Tiempos por carretera desde el aeropuerto de Oporto",
        list: ["Vigo: ~1 h 35 min.", "Pontevedra: ~1 h 55 min.", "Rías Baixas (Sanxenxo, O Grove): ~2 h 10 min.", "Santiago de Compostela: ~2 h 20 min.", "A Coruña: ~3 h."],
      },
      {
        heading: "Tren",
        paragraphs: [
          "Hay conexión ferroviaria entre Oporto y Vigo con pocas frecuencias diarias, y desde Vigo sigues hacia Santiago o A Coruña. Implica llegar primero desde el aeropuerto a la estación de Oporto y, normalmente, hacer transbordo. Barato, pero lento y rígido de horarios.",
        ],
      },
      {
        heading: "Autobús",
        paragraphs: [
          "Varias compañías conectan el aeropuerto de Oporto con Vigo y Santiago. Es la opción más económica para una persona con poco equipaje, pero con horarios limitados y sin flexibilidad si tu vuelo se retrasa.",
        ],
      },
      {
        heading: "Coche de alquiler",
        paragraphs: [
          "Da libertad, pero tiene letra pequeña: recargos por devolver el coche en otro país, autopistas portuguesas con peaje electrónico que hay que gestionar y la conducción después de un vuelo largo.",
        ],
      },
      {
        heading: "Traslado privado con chófer",
        paragraphs: [
          "El chófer te espera en llegadas aunque el vuelo se retrase, carga el equipaje y te deja en la puerta del hotel. Para dos o más personas, o para viajes de empresa, el coste por persona se acerca mucho más de lo que parece a las otras opciones, y el tiempo que ganas es enorme.",
        ],
      },
    ],
    faqs: [
      { question: "¿Cuál es la forma más rápida de ir de Oporto a Santiago?", answer: "Por carretera: unas 2 horas y 20 minutos desde el aeropuerto con un traslado directo. El transporte público requiere transbordos y suele tardar bastante más." },
      { question: "¿Hay control de fronteras entre Portugal y Galicia?", answer: "No. Ambos países están en el espacio Schengen y no hay controles fronterizos ordinarios." },
    ],
    related: [
      { title: "Traslados Oporto ⇄ Galicia", href: "/oporto-galicia" },
      { title: "Traslados desde Vigo", href: "/traslados-desde-vigo" },
      { title: "Tours con chófer por Galicia", href: "/tours-con-chofer-galicia" },
    ],
  },
  {
    slug: "transporte-camino-de-santiago",
    category: "Guía",
    title: "Transporte en el Camino de Santiago para grupos: guía práctica",
    metaTitle: "Transporte en el Camino de Santiago para grupos: guía práctica",
    metaDescription:
      "Cómo organizar el transporte de un grupo en el Camino de Santiago: llegar al inicio de etapa (Sarria, Tui, Oporto, Ferrol), vehículo de apoyo, equipaje y regreso desde Santiago.",
    image: "/images/faro-de-Finisterre-1.jpg",
    alt: "Faro de Fisterra, final del Camino de Santiago",
    readMinutes: 7,
    date: "2026-10-30",
    intro: [
      "El Camino se hace a pie. Pero antes de dar el primer paso hay que llegar al punto de salida, y al final hay que volver a casa. Para un grupo, esas dos piezas deciden si la experiencia empieza y termina bien.",
    ],
    sections: [
      {
        heading: "Los puntos de inicio más habituales",
        list: [
          "Sarria (Camino Francés): los últimos 100 km. ~1 h 20 min desde Santiago.",
          "O Cebreiro (Camino Francés): entrada en Galicia, ~2 h desde Santiago.",
          "Tui o Valença (Camino Portugués): ~1 h 30 min desde el aeropuerto de Oporto.",
          "Oporto (Camino Portugués completo o por la costa).",
          "Ferrol (Camino Inglés): ~45 min desde A Coruña.",
        ],
      },
      {
        heading: "Vehículo de apoyo: cuándo merece la pena",
        paragraphs: [
          "Para grupos con personas de distinto nivel, viajes de empresa o grupos que se alojan fuera del trazado, un vehículo de apoyo con chófer cambia la experiencia: recoge a quien lo necesite, lleva al grupo al alojamiento y resuelve imprevistos.",
        ],
      },
      {
        heading: "El regreso",
        paragraphs: [
          "Desde Santiago se vuelve al aeropuerto de Santiago, A Coruña, Vigo u Oporto, o se añade un día a Fisterra y Muxía. Planifícalo antes de salir: el día de llegada todo el mundo quiere celebrar, no buscar transporte.",
        ],
      },
    ],
    faqs: [
      { question: "¿Cuánto se tarda del aeropuerto de Santiago a Sarria?", answer: "Alrededor de 1 hora y 20 minutos por carretera." },
      { question: "¿Qué vehículo necesita un grupo de 12 peregrinos?", answer: "Un minibús de hasta 19 plazas, con espacio para mochilas y maletas." },
    ],
    related: [
      { title: "Transporte para el Camino de Santiago", href: "/transporte-camino-de-santiago" },
      { title: "Traslados desde Santiago", href: "/traslados-desde-santiago" },
      { title: "Oporto ⇄ Galicia", href: "/oporto-galicia" },
    ],
  },
  {
    slug: "galicia-con-chofer",
    category: "Guía",
    title: "Moverse por Galicia con chófer: distancias, rutas y tiempos",
    metaTitle: "Moverse por Galicia con chófer: distancias, rutas y tiempos reales",
    metaDescription:
      "Distancias y tiempos reales entre las ciudades de Galicia y Oporto, rutas recomendadas y cuándo compensa viajar con chófer frente a coche de alquiler o transporte público.",
    image: "/images/van-lujo-galicia.jpg",
    alt: "Van de lujo con chófer recorriendo Galicia",
    readMinutes: 6,
    date: "2026-10-30",
    intro: [
      "Galicia es compacta en el mapa y lenta en la realidad: costa recortada, carreteras secundarias con curvas y pueblos que no salen en las rutas rápidas. Saber los tiempos reales es la base de cualquier itinerario.",
    ],
    sections: [
      {
        heading: "Tiempos de referencia por autopista",
        list: [
          "A Coruña – Santiago: ~50 min.",
          "A Coruña – Lugo: ~1 h 10 min.",
          "Santiago – Pontevedra: ~45 min.",
          "Santiago – Vigo: ~1 h.",
          "Santiago – Ourense: ~1 h 15 min.",
          "Vigo – Oporto (aeropuerto): ~1 h 35 min.",
          "A Coruña – Oviedo: ~3 h 15 min.",
          "A Coruña – Madrid: ~5 h 45 min.",
        ],
      },
      {
        heading: "Cuándo compensa el chófer",
        list: [
          "Viajes de empresa con agenda apretada.",
          "Grupos de 3 o más personas: el coste por persona baja mucho.",
          "Rutas con cata de vino (Rías Baixas, Ribeira Sacra, Ribeiro).",
          "Llegadas por Oporto y salidas por otro aeropuerto.",
          "Carreteras complicadas: Ribeira Sacra, Costa da Morte.",
        ],
      },
    ],
    faqs: [
      { question: "¿Cuántos días hacen falta para ver Galicia?", answer: "Con 3 días ves lo esencial (Santiago y Rías Baixas); con 5, la costa atlántica completa; con 7, también el interior (Ribeira Sacra, Lugo) y la Playa de las Catedrales." },
    ],
    related: [
      { title: "Tours con chófer por Galicia", href: "/tours-con-chofer-galicia" },
      { title: "Traslados", href: "/traslados" },
    ],
  },
  {
    slug: "transporte-palexco",
    category: "Sede",
    title: "Transporte para eventos en Palexco (A Coruña)",
    metaTitle: "Transporte para eventos y congresos en Palexco, A Coruña",
    metaDescription:
      "Cómo organizar el transporte de un congreso o evento en Palexco (A Coruña): accesos, tiempos desde los aeropuertos de Alvedro, Santiago y Oporto, hoteles y lanzaderas.",
    image: "/images/coruna-torre-hercules.jpg",
    alt: "Puerto de A Coruña junto a Palexco",
    readMinutes: 5,
    date: "2026-10-30",
    intro: [
      "Palexco, el Palacio de Exposiciones y Congresos de A Coruña, está en el muelle de Trasatlánticos, en pleno centro y junto a la terminal de cruceros. Esa ubicación es su gran ventaja y también lo que hay que planificar bien.",
    ],
    sections: [
      {
        heading: "Tiempos de llegada",
        list: [
          "Aeropuerto de A Coruña (Alvedro): ~15 min.",
          "Aeropuerto de Santiago: ~50-60 min.",
          "Aeropuerto de Oporto: ~3 h.",
          "Estación de tren de A Coruña: ~10 min.",
        ],
      },
      {
        heading: "Claves logísticas",
        list: [
          "Muchos hoteles céntricos están a distancia caminando: la lanzadera se centra en hoteles alejados y en las actividades.",
          "La zona del puerto concentra tráfico en horas punta y en días de crucero: conviene acordar con la organización los puntos de subida y bajada de autocares.",
          "Para cenas de gala en pazos o fincas de los alrededores, prevé vuelta escalonada.",
          "Con varios aeropuertos de llegada, un coordinador centraliza recogidas.",
        ],
      },
    ],
    faqs: [
      { question: "¿Hace falta lanzadera en un congreso en Palexco?", answer: "Para hoteles del centro, no siempre. Sí para hoteles fuera del centro, para llegadas al aeropuerto y para actividades y cenas fuera de la ciudad." },
    ],
    related: [
      { title: "Transporte para congresos", href: "/transporte-congresos-galicia" },
      { title: "Traslados desde A Coruña", href: "/traslados-desde-coruna" },
      { title: "Guía completa de transporte para eventos", href: "/guias/transporte-congresos-eventos-galicia" },
    ],
  },
  {
    slug: "transporte-palacio-congresos-santiago",
    category: "Sede",
    title: "Transporte para eventos en el Palacio de Congresos de Santiago",
    metaTitle: "Transporte para congresos en el Palacio de Congresos de Santiago",
    metaDescription:
      "Cómo organizar el transporte de un congreso en el Palacio de Congresos de Santiago de Compostela: lanzaderas con el casco histórico y hoteles, aeropuerto y tiempos.",
    image: "/images/tours-santiago.jpg",
    alt: "Santiago de Compostela, sede de congresos",
    readMinutes: 5,
    date: "2026-10-30",
    intro: [
      "El Palacio de Congresos y Exposiciones de Galicia está en Santiago, fuera del casco histórico y cerca de la salida hacia el aeropuerto. Muchos asistentes se alojan en el centro, así que la lanzadera es parte esencial del plan.",
    ],
    sections: [
      {
        heading: "Tiempos de referencia",
        list: [
          "Aeropuerto de Santiago: ~10-15 min.",
          "Centro de Santiago: ~10-15 min, según tráfico.",
          "A Coruña: ~50 min.",
          "Aeropuerto de Oporto: ~2 h 20 min.",
        ],
      },
      {
        heading: "Claves logísticas",
        list: [
          "El casco histórico tiene el tráfico restringido: las recogidas se hacen en puntos accesibles cercanos a los hoteles.",
          "Lanzaderas por bloques antes de las sesiones plenarias y salidas escalonadas al final del día.",
          "Cenas en el casco histórico: traslado hasta el punto accesible más cercano y paseo final.",
          "Programa de acompañantes: Rías Baixas o Costa da Morte con chófer mientras dura el congreso.",
        ],
      },
    ],
    faqs: [
      { question: "¿Se puede llegar en autocar al casco histórico de Santiago?", answer: "No directamente: el acceso está restringido. Se usan puntos de subida y bajada en el perímetro del casco histórico." },
    ],
    related: [
      { title: "Transporte para congresos", href: "/transporte-congresos-galicia" },
      { title: "Traslados desde Santiago", href: "/traslados-desde-santiago" },
      { title: "Guía completa de transporte para eventos", href: "/guias/transporte-congresos-eventos-galicia" },
    ],
  },
];

export function getGuia(slug: string) {
  return GUIAS.find((g) => g.slug === slug);
}

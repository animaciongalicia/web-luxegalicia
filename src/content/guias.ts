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
    title: "Transporte para congresos en Palexco (A Coruña): la guía completa",
    metaTitle: "Transporte para congresos en Palexco, A Coruña | Guía completa",
    metaDescription:
      "Guía para organizar el transporte de un congreso en Palexco (A Coruña): llegadas por Alvedro, Santiago, Oporto y tren, hoteles, lanzaderas, ponentes, cena de gala y días de crucero.",
    image: "/images/coruna-torre-hercules.jpg",
    alt: "Puerto de A Coruña, donde se encuentra Palexco",
    readMinutes: 8,
    date: "2026-10-31",
    intro: [
      "Palexco, el Palacio de Exposiciones y Congresos de A Coruña, es la sede de referencia de la ciudad para congresos médicos, de sociedades científicas y convenciones de empresa. Está en el muelle de Trasatlánticos, en pleno centro, con la ciudad y los hoteles alrededor.",
      "Esa ubicación lo cambia todo. En Palexco el problema no es llevar a la gente a un recinto lejano: es coordinar llegadas desde cuatro aeropuertos, ponentes con agendas imposibles, hoteles repartidos por la ciudad y una cena de gala fuera del centro, todo en una zona con tráfico de puerto, paseo marítimo y, algunos días, cruceros atracados al lado.",
    ],
    sections: [
      {
        heading: "Dónde está y por qué importa",
        paragraphs: [
          "Palexco está junto a la avenida de la Marina y la terminal de cruceros, a pocos minutos a pie de la Ciudad Vieja, la plaza de María Pita y buena parte de la oferta hotelera del centro. Para un congresista alojado en el centro, la sede está a un paseo.",
          "Por eso, en Palexco el transporte se concentra en tres momentos: las llegadas y salidas de la ciudad, los asistentes alojados fuera del centro y las actividades sociales fuera del núcleo urbano.",
        ],
      },
      {
        heading: "Cómo llegan tus asistentes",
        list: [
          "Aeropuerto de A Coruña (Alvedro): ~15 min. Vuelos nacionales, sobre todo Madrid y Barcelona.",
          "Aeropuerto de Santiago: ~50-60 min. Más conexiones nacionales e internacionales.",
          "Aeropuerto de Oporto: ~3 h. La puerta de muchos asistentes internacionales.",
          "Estación de tren de A Coruña: ~10 min. Alta velocidad desde Madrid.",
          "En coche: acceso por la AP-9 y la A-6, con aparcamientos públicos en el entorno del puerto.",
        ],
      },
      {
        heading: "El perfil de un congreso en Palexco",
        paragraphs: [
          "Un congreso médico o científico tipo reúne a varios cientos de asistentes durante dos a cuatro días, con ponentes nacionales e internacionales, una zona de exposición con la industria, cursos precongreso y, casi siempre, una cena de clausura. La secretaría técnica coordina decenas de llegadas en pocas horas el primer día.",
          "Cada uno de esos elementos tiene su propia necesidad de transporte, y es ahí donde un plan profesional marca la diferencia.",
        ],
      },
      {
        heading: "Qué transporte necesita de verdad",
        list: [
          "Recibimiento en aeropuertos y estación: recogidas agrupadas por franjas horarias, con cartelería del congreso.",
          "Ponentes y comité: berlinas con chófer a disposición, sobre todo para ponentes que llegan y se van el mismo día.",
          "Hoteles fuera del centro: lanzadera por bloques antes de las sesiones plenarias y al cierre de cada jornada.",
          "Industria y expositores: vans para material ligero y personal de stand en montaje y desmontaje.",
          "Cena de gala: autocares a pazos, fincas o restaurantes de los alrededores, con vuelta escalonada.",
          "Programa de acompañantes: excursiones con chófer a Santiago, Costa da Morte o Betanzos.",
          "Salidas: traslados al aeropuerto o la estación calculados según el horario de cierre del congreso.",
        ],
      },
      {
        heading: "Cuatro detalles que solo conoce quien trabaja aquí",
        list: [
          "Días de crucero: cuando hay barcos atracados en la terminal de al lado, el entorno del puerto se llena de autobuses y peatones. Conviene consultar el calendario de escalas y prever más margen.",
          "Punto de subida y bajada: hay que acordarlo con la organización del recinto y comunicarlo bien. Un autocar parado donde no debe genera atasco y multas.",
          "Lluvia: en A Coruña llueve a menudo. Lo que en un día de sol es un paseo de diez minutos se convierte en una demanda de taxis que la ciudad no absorbe. Ten un plan B con lanzadera.",
          "Alvedro y la niebla: el aeropuerto de A Coruña sufre desvíos por niebla en ciertas épocas. Los vuelos desviados suelen ir a Santiago: un proveedor con flota disponible reubica las recogidas en minutos.",
        ],
      },
      {
        heading: "Cuántos vehículos necesitas",
        paragraphs: [
          "Como referencia, para un congreso de 400 asistentes en Palexco con la mitad alojados fuera del centro: dos o tres autocares en rotación en las franjas punta, un minibús de apoyo, tres o cuatro berlinas para ponentes y comité, y la flota de la cena de gala, que suele ser el pico del congreso. Con el programa y la lista de hoteles se calcula el plan exacto.",
        ],
      },
    ],
    faqs: [
      { question: "¿Hace falta lanzadera en un congreso en Palexco?", answer: "Para los asistentes alojados en el centro, normalmente no: van andando. Sí para hoteles fuera del centro, para llegadas y salidas de aeropuertos, para los días de lluvia y para actividades y cenas fuera de la ciudad." },
      { question: "¿Qué aeropuerto es mejor para un congreso en Palexco?", answer: "Alvedro está a 15 minutos, pero tiene menos vuelos. Santiago, a unos 50-60 minutos, concentra más conexiones. Para asistentes internacionales, Oporto. Lo habitual es combinar los tres." },
      { question: "¿Podéis encargaros de los ponentes además de la lanzadera?", answer: "Sí. Lo más eficaz es un único plan con berlinas para ponentes y comité, lanzaderas para asistentes y autocares para la cena, coordinado por una sola persona." },
      { question: "¿Qué pasa si un vuelo a Alvedro se desvía a Santiago?", answer: "Se reubica la recogida en el aeropuerto de Santiago con el vehículo disponible más cercano. Por eso conviene que las recogidas las gestione un proveedor con flota suficiente y seguimiento de vuelos." },
    ],
    related: [
      { title: "Transporte para congresos en Galicia", href: "/transporte-congresos-galicia" },
      { title: "Para agencias MICE", href: "/agencias-mice" },
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
  {
    slug: "transporte-ifevi-vigo",
    category: "Sede",
    title: "Transporte para ferias y congresos en IFEVI (Vigo)",
    metaTitle: "Transporte para ferias y eventos en IFEVI, Vigo",
    metaDescription:
      "Cómo organizar el transporte para una feria o congreso en IFEVI (Vigo): ubicación junto al aeropuerto de Peinador, tiempos desde Vigo, Santiago y Oporto, lanzaderas y montaje.",
    image: "/images/galicia-fest-vigo.jpg",
    alt: "Evento multitudinario en Vigo",
    readMinutes: 6,
    date: "2026-10-31",
    intro: [
      "IFEVI, la Institución Ferial de Vigo, es el gran recinto ferial del sur de Galicia. Acoge ferias internacionales como Conxemar, la gran cita del producto del mar congelado, además de congresos, convenciones y eventos de empresa.",
      "Su ubicación es su gran ventaja: está en la avenida do Aeroporto, junto al aeropuerto de Peinador. Y también su reto: queda lejos del centro de Vigo, donde se aloja la mayoría de asistentes.",
    ],
    sections: [
      {
        heading: "Tiempos de referencia",
        list: [
          "Aeropuerto de Vigo (Peinador): a pocos minutos.",
          "Centro de Vigo y zona hotelera: ~15-20 min, según tráfico.",
          "Pontevedra: ~30-35 min.",
          "Santiago de Compostela: ~1 h.",
          "Aeropuerto de Oporto: ~1 h 40 min.",
        ],
      },
      {
        heading: "Oporto, el aeropuerto que más importa en IFEVI",
        paragraphs: [
          "En ferias internacionales, buena parte de los expositores y compradores vuela a Oporto: más conexiones y, a menudo, mejores precios que los aeropuertos gallegos. Eso convierte el traslado Oporto–Vigo en una pieza central del plan de transporte.",
          "La forma más eficiente es agrupar llegadas por franjas horarias en vans o minibuses, con un vehículo de reserva para los vuelos retrasados.",
        ],
      },
      {
        heading: "Cómo se plantea una operativa en IFEVI",
        list: [
          "Lanzaderas desde los hoteles del centro de Vigo en la apertura y al cierre de cada jornada.",
          "Traslados Oporto–Vigo agrupados por llegadas.",
          "Berlinas para compradores clave y delegaciones internacionales.",
          "Vans para equipos de montaje y personal de stand en horarios largos.",
          "Cena o evento de networking en Vigo o en las Rías Baixas con vuelta escalonada.",
          "Excursiones para acompañantes a Baiona, las Islas Cíes (en temporada) o las Rías Baixas.",
        ],
      },
      {
        heading: "Semana de feria: la ciudad se llena",
        paragraphs: [
          "Durante las grandes ferias, hoteles y transporte en Vigo se tensan. Reservar la flota con tiempo es la diferencia entre tener lanzaderas propias o depender de taxis que no llegan.",
        ],
      },
    ],
    faqs: [
      { question: "¿Qué aeropuerto es mejor para una feria en IFEVI?", answer: "Peinador está junto al recinto, pero tiene menos vuelos. Para internacionales, Oporto suele ser la mejor opción, con un traslado de unos 1 h 40 min por carretera." },
      { question: "¿Hacéis traslados de grupos desde Oporto a IFEVI?", answer: "Sí. Se agrupan las llegadas por franjas horarias en vans, minibuses o autocares, con coordinación de los vuelos." },
    ],
    related: [
      { title: "Traslados desde Vigo", href: "/traslados-desde-vigo" },
      { title: "Oporto ⇄ Galicia", href: "/oporto-galicia" },
      { title: "Transporte para eventos en Galicia", href: "/transporte-eventos-galicia" },
    ],
  },
  {
    slug: "transporte-cidade-da-cultura",
    category: "Sede",
    title: "Transporte para eventos en la Cidade da Cultura (Santiago)",
    metaTitle: "Transporte para eventos en la Cidade da Cultura de Santiago",
    metaDescription:
      "Cómo organizar el transporte de un evento en la Cidade da Cultura de Galicia (Monte Gaiás, Santiago): acceso, tiempos desde el centro y el aeropuerto, lanzaderas y cenas.",
    image: "/images/tours-santiago.jpg",
    alt: "Santiago de Compostela, sede de la Cidade da Cultura",
    readMinutes: 5,
    date: "2026-10-31",
    intro: [
      "La Cidade da Cultura de Galicia, en el monte Gaiás, es uno de los espacios de eventos más espectaculares de Galicia: un complejo arquitectónico de Peter Eisenman inaugurado en 2011, con auditorio, salas y espacios singulares para congresos, presentaciones y cenas de gala.",
      "Está a unos 4 km del centro de Santiago, en lo alto del monte. Sin transporte organizado, tus asistentes dependen de un autobús urbano o de taxis.",
    ],
    sections: [
      {
        heading: "Tiempos de referencia",
        list: [
          "Centro de Santiago: ~10-15 min en vehículo.",
          "Estación de tren de Santiago: ~10 min.",
          "Aeropuerto de Santiago: ~15-20 min.",
          "A Coruña: ~50 min.",
          "Aeropuerto de Oporto: ~2 h 20 min.",
        ],
      },
      {
        heading: "Claves logísticas",
        list: [
          "Hay acceso por carretera desde la AP-9 y aparcamiento en el propio complejo, pero los asistentes alojados en el casco histórico no tienen forma cómoda de llegar a pie.",
          "Las líneas urbanas que suben al monte Gaiás tienen frecuencias limitadas: no conviene que el programa dependa de ellas.",
          "El casco histórico tiene el tráfico restringido: las recogidas se hacen en puntos accesibles cercanos a los hoteles.",
          "Para cenas de gala en la Cidade da Cultura, la vuelta escalonada al centro y a los hoteles es esencial.",
          "Llueve a menudo: el punto de subida y bajada debe quedar lo más cerca posible de la entrada al edificio.",
        ],
      },
      {
        heading: "Combinarlo con el Palacio de Congresos",
        paragraphs: [
          "Muchos congresos en Santiago celebran las sesiones en el Palacio de Congresos y la cena o un acto institucional en la Cidade da Cultura. Un mismo plan de transporte puede cubrir los dos recintos y los hoteles con la misma flota.",
        ],
      },
    ],
    faqs: [
      { question: "¿Se puede ir andando del centro de Santiago a la Cidade da Cultura?", answer: "Se puede, pero es un paseo largo y cuesta arriba, poco práctico para asistentes a un evento. Lo recomendable es organizar lanzaderas." },
      { question: "¿Llegan autocares grandes a la Cidade da Cultura?", answer: "Sí, el complejo tiene acceso rodado y aparcamiento. El punto exacto de subida y bajada se acuerda con la organización del recinto." },
    ],
    related: [
      { title: "Palacio de Congresos de Santiago", href: "/guias/transporte-palacio-congresos-santiago" },
      { title: "Traslados desde Santiago", href: "/traslados-desde-santiago" },
      { title: "Transporte para congresos", href: "/transporte-congresos-galicia" },
    ],
  },
  {
    slug: "transporte-expocoruna",
    category: "Sede",
    title: "Transporte para ferias y eventos en ExpoCoruña",
    metaTitle: "Transporte para ferias y eventos en ExpoCoruña (A Coruña)",
    metaDescription:
      "Cómo organizar el transporte de una feria, congreso o gran evento en ExpoCoruña: ubicación, tiempos desde los aeropuertos de Alvedro, Santiago y Oporto, lanzaderas y aparcamiento.",
    image: "/images/sala-eventos-empresas.jpg",
    alt: "Recinto preparado para una feria profesional en A Coruña",
    readMinutes: 6,
    date: "2026-10-31",
    intro: [
      "ExpoCoruña es el recinto ferial de A Coruña para grandes formatos: ferias, conciertos y eventos que necesitan mucho espacio diáfano. Los congresos médicos y científicos suelen celebrarse en Palexco, en el centro; ExpoCoruña entra en juego cuando el formato es más grande. Su gran espacio diáfano, el Hall, ronda los 13.500 m² según el propio recinto.",
      "A diferencia de Palexco, que está en el puerto y rodeado de hoteles, ExpoCoruña está fuera del centro. Eso cambia por completo el plan de transporte: aquí casi nadie llega andando.",
    ],
    sections: [
      {
        heading: "Dónde está y cómo se llega",
        paragraphs: [
          "El recinto está en la rúa Juana Capdevielle, 2, en la zona de entrada a la ciudad, con acceso rápido a las vías principales y aparcamiento propio. Para asistentes que vienen de fuera, la clave es conectar tres puntos: aeropuerto o estación, hotel y recinto.",
        ],
        list: [
          "Aeropuerto de A Coruña (Alvedro): ~10-15 min.",
          "Centro de A Coruña y zona hotelera: ~10-15 min, según tráfico.",
          "Palexco y puerto: ~10-15 min.",
          "Aeropuerto de Santiago: ~45-55 min.",
          "Aeropuerto de Oporto: ~3 h.",
        ],
      },
      {
        heading: "Por qué aquí la lanzadera es imprescindible",
        paragraphs: [
          "Con la sede fuera del núcleo urbano, cada asistente sin transporte organizado es un taxi más en la puerta a la hora de entrada y de salida. En eventos grandes, las colas de taxis y el aparcamiento lleno son la queja número uno.",
          "Una lanzadera hotel-recinto con frecuencia fija en las horas punta y por bloques el resto del día resuelve el problema y da una imagen mucho más profesional.",
        ],
      },
      {
        heading: "Cómo se plantea una operativa en ExpoCoruña",
        list: [
          "Rutas circulares por los hoteles del centro con salidas cada 15-20 minutos en la franja de apertura.",
          "Salidas escalonadas al cierre para evitar picos en la explanada.",
          "Punto de subida y bajada de autocares acordado con el recinto y señalizado.",
          "Berlinas a disposición para expositores principales, ponentes y organización.",
          "Recogidas de aeropuerto agrupadas por franjas horarias de llegada.",
          "Coordinador de transporte en el recinto durante los picos.",
        ],
      },
      {
        heading: "Montaje y desmontaje",
        paragraphs: [
          "En ferias, el transporte empieza antes de abrir: equipos de montaje, técnicos y personal de stand que llegan días antes y trabajan en horarios largos. Vans y minibuses con recogidas tempranas y regresos tardíos evitan depender del transporte público.",
        ],
      },
    ],
    faqs: [
      { question: "¿Se puede llegar andando a ExpoCoruña desde el centro?", answer: "No es lo habitual: el recinto está fuera del centro. Para eventos con asistentes alojados en hoteles céntricos, lo recomendable es una lanzadera." },
      { question: "¿Cuántos autocares necesita una feria en ExpoCoruña?", answer: "Depende de los asistentes que se alojan en hoteles y de la franja de entrada. Como referencia, cada autocar mueve unas 50 personas por rotación; con el programa y las cifras se calcula el plan exacto." },
    ],
    related: [
      { title: "Transporte para eventos en Galicia", href: "/transporte-eventos-galicia" },
      { title: "Transporte a Palexco", href: "/guias/transporte-palexco" },
      { title: "Traslados desde A Coruña", href: "/traslados-desde-coruna" },
      { title: "Guía completa de transporte para eventos", href: "/guias/transporte-congresos-eventos-galicia" },
    ],
  },
];

export function getGuia(slug: string) {
  return GUIAS.find((g) => g.slug === slug);
}

import type { Page } from "./types";

export const PAGES_MICE: Page[] = [
  {
    slug: "transporte-eventos-galicia",
    metaTitle: "Transporte para eventos en Galicia | Congresos, incentivos y festivales",
    metaDescription:
      "Empresa de transporte para eventos en Galicia: congresos, incentivos, festivales y eventos corporativos. Berlinas, vans de lujo, minibuses y autocares con coordinación en destino.",
    serviceType: "Transporte para eventos",
    hero: {
      eyebrow: "Eventos",
      title: "Transporte para eventos en Galicia",
      subtitle: "Congresos, incentivos, festivales y eventos corporativos. De diez invitados a quinientos asistentes, con un solo responsable de todo el movimiento.",
      image: "/images/sala-eventos-empresas.jpg",
      alt: "Sala preparada para un evento corporativo en Galicia",
    },
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "Un evento no falla por el vehículo. Falla por la coordinación: horarios que no cuadran, asistentes que llegan por cuatro aeropuertos distintos y cambios de última hora que nadie gestiona.",
          "Luxe Galicia planifica y ejecuta el transporte de eventos en toda Galicia y el norte de Portugal desde 2013. Tú defines el evento; el movimiento de tu gente queda resuelto.",
        ],
      },
      {
        type: "links",
        heading: "Elige tu tipo de evento",
        bg: "gray",
        items: [
          { title: "Para agencias MICE", text: "Partner en destino para agencias de Madrid, Barcelona y extranjero. Marca blanca y factura única.", href: "/agencias-mice", image: "/images/flota-luxe-galicia.jpg", alt: "Flota premium para agencias MICE" },
          { title: "Congresos y convenciones", text: "Lanzaderas sede-hotel, aeropuertos, ponentes y cena de gala.", href: "/transporte-congresos-galicia", image: "/images/sala-eventos-empresas.jpg", alt: "Sala de congresos en Galicia" },
          { title: "Incentivos", text: "Vans de lujo y minibuses VIP a disposición durante todo el viaje.", href: "/transporte-incentivos-galicia", image: "/images/pazo-eventos-corporativos.jpg", alt: "Pazo gallego para un incentivo" },
          { title: "Festivales y producciones", text: "Artistas, técnicos, giras y rodajes con cambios en tiempo real.", href: "/transporte-festivales-producciones", image: "/images/electronica-GozoFestival.jpg", alt: "Escenario de festival en Galicia" },
        ],
      },
      {
        type: "steps",
        heading: "Cómo se organiza el transporte de un evento",
        items: [
          { title: "Brief", text: "Fechas, asistentes, hoteles, sedes y horarios." },
          { title: "Plan de transporte", text: "Vehículos, rutas, frecuencias y precio cerrado." },
          { title: "Asignación", text: "Chóferes, vehículos, contactos y hoja de ruta." },
          { title: "Ejecución", text: "Coordinación en tiempo real y cierre con informe." },
        ],
      },
      { type: "fleet", heading: "Flota disponible para eventos", bg: "gray" },
      { type: "quote", heading: "Cuéntame tu evento" },
    ],
    faqs: [
      { question: "¿Qué tipo de eventos cubrís?", answer: "Congresos, convenciones, incentivos, eventos corporativos, festivales, giras, rodajes y bodas, en toda Galicia y el norte de Portugal." },
      { question: "¿Cuántas personas podéis mover en un mismo evento?", answer: "De una berlina para un ponente a operativas de cientos de asistentes con autocares, minibuses, vans y berlinas coordinados." },
      { question: "¿Con cuánta antelación hay que reservar?", answer: "Para eventos de más de 200 personas en temporada alta, de 3 a 6 meses. Para eventos pequeños, de 2 a 4 semanas suele bastar." },
    ],
  },
  {
    slug: "agencias-mice",
    metaTitle: "Transporte para agencias MICE en Galicia | Luxe Galicia",
    metaDescription:
      "Partner de transporte en Galicia para agencias MICE de Madrid, Barcelona y extranjero. Flota de 1 a 500 personas, coordinador en destino, factura única y presupuesto en 24 h.",
    serviceType: "Ground transportation for MICE agencies",
    alternate: "/en/mice-ground-transportation",
    hero: {
      eyebrow: "Para agencias MICE · Madrid · Barcelona · Internacional",
      title: "Tu partner de transporte en Galicia",
      subtitle:
        "Organizas el evento desde fuera. Yo muevo a tu gente en destino. Berlinas, vans, minibuses y autocares con un único interlocutor y una sola factura.",
      image: "/images/flota-luxe-galicia.jpg",
      alt: "Flota de berlinas Mercedes Clase S y vans Clase V para agencias MICE en Galicia",
    },
    blocks: [
      {
        type: "intro",
        heading: "Te voy a decir la verdad: el evento no falla por el vehículo",
        paragraphs: [
          "Falla por la coordinación. Por el autocar que llega al hotel equivocado. Por el ponente que espera 40 minutos en el aeropuerto de Santiago. Por el cambio de horario a las once de la noche que nadie gestiona.",
          "Cuando organizas un congreso, un incentivo o un roadshow en Galicia desde Madrid, Barcelona o fuera de España, no conoces a los proveedores locales. Y los proveedores locales son pequeños: tres berlinas aquí, dos vans allá. Tu evento necesita quince vehículos el mismo día.",
          "Luxe Galicia resuelve justo eso. Desde 2013 coordina flota premium en toda Galicia y el norte de Portugal para agencias que necesitan capacidad, puntualidad y alguien que conteste al teléfono.",
        ],
      },
      {
        type: "features",
        heading: "Lo que consigues trabajando con Luxe Galicia",
        intro: "Sin letra pequeña. Lo que una agencia de fuera necesita en destino.",
        columns: 3,
        bg: "gray",
        items: [
          { title: "Un único interlocutor", text: "Una persona responsable de toda la operativa de transporte. Antes, durante y después del evento. Sin rebotes entre empresas." },
          { title: "Capacidad real", text: "De una berlina a 500 asistentes. Berlinas premium y de lujo, vans Clase V, minibuses VIP y autocares coordinados en una sola operativa." },
          { title: "Factura única", text: "Un presupuesto, una factura y unas condiciones claras. Tu departamento financiero lo agradece." },
          { title: "Coordinador en destino", text: "En operativas de grupo, un coordinador sobre el terreno controla horarios, recogidas y cambios en tiempo real." },
          { title: "Marca blanca", text: "Si lo necesitas, los chóferes trabajan en nombre de tu agencia: cartelería, protocolo y comunicación con tu imagen." },
          { title: "Respuesta en 24 horas", text: "Propuesta detallada en menos de 24 horas laborables. Para urgencias, WhatsApp directo." },
        ],
      },
      {
        type: "steps",
        heading: "Cómo funciona",
        items: [
          { title: "Brief", text: "Me pasas fechas, número de asistentes, hoteles, sedes y horarios. Con un Excel basta." },
          { title: "Propuesta", text: "Recibes el plan de transporte: vehículos, rutas, tiempos y precio cerrado." },
          { title: "Operativa", text: "Confirmas y queda todo asignado: chóferes, matrículas, contactos y hoja de ruta." },
          { title: "Ejecución", text: "Coordinación en tiempo real el día del evento y cierre con informe del servicio." },
        ],
      },
      {
        type: "links",
        heading: "Servicios para tu evento en Galicia",
        bg: "gray",
        items: [
          { title: "Congresos y convenciones", text: "Lanzaderas sede-hotel, aeropuertos y cenas de gala.", href: "/transporte-congresos-galicia", image: "/images/sala-eventos-empresas.jpg", alt: "Sala de congresos preparada para un evento corporativo en Galicia" },
          { title: "Incentivos", text: "Movilidad premium para viajes de incentivo de varios días.", href: "/transporte-incentivos-galicia", image: "/images/pazo-eventos-corporativos.jpg", alt: "Pazo gallego preparado para un evento de incentivo" },
          { title: "Oporto, puerta de entrada", text: "Tus asistentes vuelan a Oporto. Los recoges y los llevas a Galicia sin fricciones.", href: "/oporto-galicia", image: "/images/traslados-coruna-santiago.jpg", alt: "Traslado con chófer entre Oporto y Galicia" },
        ],
      },
      {
        type: "checklist",
        heading: "Galicia, en datos para tu planificación",
        items: [
          "Cuatro aeropuertos en juego: Santiago (SCQ), A Coruña (LCG), Vigo (VGO) y Oporto (OPO).",
          "Sedes de referencia: Palexco y ExpoCoruña (A Coruña), Palacio de Congresos de Santiago, Cidade da Cultura, IFEVI (Vigo).",
          "Distancias cortas: A Coruña–Santiago ~50 min, Santiago–Vigo ~1 h, Vigo–Oporto ~1 h 40 min.",
          "Cobertura fuera de Galicia: Oporto, Asturias, León y Madrid.",
          "Programa completo con hotel y experiencias a través de Suunia, DMC partner.",
          "Chóferes con experiencia en protocolo y servicio a ejecutivos.",
        ],
      },
      {
        type: "suunia",
        text: "¿Necesitas además alojamiento, restauración, actividades o guías? Suunia, DMC partner de Luxe Galicia, organiza el programa completo en destino.",
      },
      { type: "quote", heading: "Pide tu propuesta", intro: "Cuantos más datos, más precisa la propuesta. En 24 horas laborables la tienes.", bg: "gray" },
    ],
    cta: {
      title: "Cuando tu evento esté en Galicia, ya sabes a quién llamar",
      description: "Una llamada, toda la operativa de transporte resuelta. Tú te ocupas del cliente; el movimiento de tu gente es cosa mía.",
    },
    faqs: [
      { question: "¿Trabajáis con agencias de fuera de Galicia?", answer: "Sí, es el cliente principal de Luxe Galicia: agencias MICE, DMC y organizadores de congresos de Madrid, Barcelona y otros países que celebran eventos en Galicia y no tienen proveedores locales de confianza." },
      { question: "¿Cuántos vehículos podéis coordinar para un mismo evento?", answer: "Desde un único traslado ejecutivo hasta operativas de cientos de asistentes con berlinas, vans, minibuses y autocares trabajando en paralelo, con un coordinador responsable." },
      { question: "¿Ofrecéis tarifa para agencias?", answer: "Sí. Las agencias tienen condiciones específicas y la opción de trabajar en marca blanca. Pídelas en tu primera solicitud." },
      { question: "¿Cubrís Oporto y el norte de Portugal?", answer: "Sí. Oporto es una de las principales puertas de entrada a Galicia y se cubren traslados desde su aeropuerto y su ciudad hacia cualquier punto de Galicia." },
      { question: "¿Con cuánta antelación hay que reservar?", answer: "Para congresos y grupos grandes, cuanto antes mejor: en temporada alta la capacidad se agota. Los traslados ejecutivos se resuelven habitualmente con 24-48 horas." },
    ],
  },
  {
    slug: "transporte-congresos-galicia",
    metaTitle: "Transporte para congresos en Galicia | Lanzaderas y traslados",
    metaDescription:
      "Transporte para congresos y convenciones en Galicia: lanzaderas sede-hotel, traslados de aeropuerto, cenas de gala y ponentes VIP. Palexco, Santiago, Vigo. Presupuesto en 24 h.",
    serviceType: "Transporte para congresos",
    hero: {
      eyebrow: "Congresos y convenciones",
      title: "Transporte para congresos en Galicia",
      subtitle: "Lanzaderas, aeropuertos, ponentes y cena de gala. Todo el movimiento de tu congreso planificado al minuto y con un solo responsable.",
      image: "/images/sala-eventos-empresas.jpg",
      alt: "Sala de un congreso en Galicia preparada para los asistentes",
    },
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "Un congreso son cientos de personas que tienen que estar en el sitio correcto a la hora correcta. Varias veces al día. Durante varios días.",
          "Si lo organizas en A Coruña, Santiago o Vigo, Luxe Galicia diseña el plan de transporte completo: cuántos vehículos, qué rutas, qué frecuencia y qué margen. Y lo ejecuta con flota premium y coordinación en tiempo real.",
        ],
      },
      {
        type: "features",
        heading: "Qué incluye la operativa de un congreso",
        columns: 3,
        bg: "gray",
        items: [
          { title: "Llegadas y salidas", text: "Recogida en los aeropuertos de Santiago, A Coruña, Vigo y Oporto, y en estaciones de tren, con cartelería y control de vuelos." },
          { title: "Lanzaderas sede-hotel", text: "Circuitos con frecuencia fija o por bloques de sesión entre hoteles y sede, ajustados al programa." },
          { title: "Ponentes y VIP", text: "Berlinas premium o de lujo con chófer a disposición para ponentes, comité organizador y autoridades." },
          { title: "Cena de gala y actividades", text: "Traslados a pazos, bodegas o restaurantes fuera del núcleo urbano, con vuelta escalonada." },
          { title: "Programa de acompañantes", text: "Excursiones con chófer a Santiago, Rías Baixas o Costa da Morte mientras se celebra el congreso." },
          { title: "Coordinación en sede", text: "Coordinador de transporte en el punto de salida, en contacto directo con la secretaría técnica." },
        ],
      },
      {
        type: "checklist",
        heading: "Cómo se calcula la flota de un congreso",
        intro: "Cada congreso es distinto, pero estas son las preguntas que deciden el plan.",
        items: [
          "¿Cuántos asistentes se alojan fuera de caminando distancia de la sede?",
          "¿Cuántos hoteles hay y cómo de dispersos están?",
          "¿Las sesiones empiezan a la misma hora para todos o por bloques?",
          "¿Hay cena de gala o actividades fuera de la ciudad?",
          "¿Qué porcentaje llega por Santiago, A Coruña, Vigo u Oporto?",
          "¿Qué perfiles necesitan vehículo a disposición todo el día?",
        ],
      },
      {
        type: "links",
        heading: "Guías por sede",
        intro: "Accesos, distancias y logística de transporte de las principales sedes de Galicia.",
        bg: "gray",
        items: [
          { title: "Transporte a Palexco (A Coruña)", text: "Accesos, tiempos desde el aeropuerto de Alvedro y desde Santiago, y zonas de subida y bajada.", href: "/guias/transporte-palexco" },
          { title: "Palacio de Congresos de Santiago", text: "Cómo planificar lanzaderas entre el casco histórico, los hoteles y el palacio.", href: "/guias/transporte-palacio-congresos-santiago" },
          { title: "Guía completa: transporte para congresos y eventos", text: "Cuántos vehículos, plazos y errores que se pagan caros.", href: "/guias/transporte-congresos-eventos-galicia" },
        ],
      },
      { type: "fleet", heading: "Flota disponible para tu congreso" },
      { type: "quote", heading: "Cuéntame tu congreso", bg: "gray" },
    ],
    cta: {
      title: "Tu congreso merece un plan de transporte, no una lista de coches",
      description: "Envía el programa y recibe una propuesta con rutas, frecuencias y precio cerrado.",
    },
    faqs: [
      { question: "¿Podéis gestionar todo el transporte de un congreso de varios cientos de personas?", answer: "Sí. Se planifica la operativa completa (llegadas, lanzaderas, actividades y salidas) combinando autocares, minibuses, vans y berlinas, con un coordinador responsable." },
      { question: "¿Qué pasa si cambia el programa a última hora?", answer: "El coordinador ajusta horarios y vehículos en tiempo real en contacto con la secretaría técnica. Para eso existe: los cambios son parte del trabajo." },
      { question: "¿Cubrís congresos en Santiago y Vigo además de A Coruña?", answer: "Sí. Se trabaja en las sedes de A Coruña, Santiago, Vigo y en cualquier punto de Galicia." },
      { question: "¿Se puede contratar solo el transporte de los ponentes?", answer: "Sí. Muchas organizaciones contratan solo berlinas con chófer para ponentes y comité, y otra empresa para el resto. Tú decides el alcance." },
    ],
  },
  {
    slug: "transporte-incentivos-galicia",
    metaTitle: "Transporte para viajes de incentivo en Galicia | Luxe Galicia",
    metaDescription:
      "Movilidad premium para viajes de incentivo en Galicia: vans de lujo, minibuses VIP y berlinas con chófer para grupos de empresa. Rías Baixas, Ribeira Sacra, Santiago.",
    serviceType: "Transporte para viajes de incentivo",
    hero: {
      eyebrow: "Viajes de incentivo",
      title: "Transporte premium para incentivos en Galicia",
      subtitle: "Un incentivo se recuerda por los detalles. El vehículo, el chófer y la puntualidad también cuentan.",
      image: "/images/pazo-eventos-corporativos.jpg",
      alt: "Pazo gallego preparado para un evento de incentivo de empresa",
    },
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "Tu cliente ha premiado a su mejor equipo con un viaje a Galicia. Lo último que quieres es un autocar cualquiera esperando en una rotonda.",
          "Luxe Galicia pone la movilidad a la altura del incentivo: vans Clase V y minibuses VIP para grupos reducidos, autocares de gran turismo para grupos grandes y berlinas de lujo para la dirección. Con chóferes que conocen las rutas, los tiempos y el protocolo.",
        ],
      },
      {
        type: "features",
        heading: "Movilidad pensada para un incentivo",
        columns: 2,
        bg: "gray",
        items: [
          { title: "Vehículos a disposición por días", text: "El grupo no depende de horarios rígidos: el vehículo y el chófer acompañan todo el programa." },
          { title: "Rutas que suman experiencia", text: "Rías Baixas, Ribeira Sacra, Costa da Morte o Santiago con paradas en miradores, bodegas y pazos." },
          { title: "Imagen cuidada", text: "Vehículos premium, chóferes uniformados y protocolo de bienvenida con la imagen de tu cliente si lo necesitas." },
          { title: "Coordinación con el programa", text: "Trabajo directo con la agencia o con Suunia, el DMC partner, para encajar cada traslado en la agenda." },
        ],
      },
      {
        type: "links",
        heading: "Rutas con chófer que funcionan en un incentivo",
        items: [
          { title: "Rías Baixas y albariño", href: "/tours-con-chofer-galicia/rias-baixas", image: "/images/tours-rias-baixas.jpg", alt: "Viñedos de albariño en las Rías Baixas" },
          { title: "Ribeira Sacra", href: "/tours-con-chofer-galicia/ribeira-sacra", image: "/images/tours-ribeira-sacra.jpg", alt: "Cañón del Sil en la Ribeira Sacra" },
          { title: "Galicia en 3 días", href: "/tours-con-chofer-galicia/galicia-3-dias", image: "/images/tours-santiago.jpg", alt: "Catedral de Santiago de Compostela" },
        ],
      },
      {
        type: "suunia",
        text: "El programa completo del incentivo (hoteles, experiencias, gastronomía, actividades) lo diseña Suunia, DMC partner. Luxe Galicia se ocupa de que todo el grupo llegue a cada sitio.",
      },
      { type: "quote", heading: "Cuéntame tu incentivo", bg: "gray" },
    ],
    faqs: [
      { question: "¿Qué vehículo recomendáis para un incentivo de 12 personas?", answer: "Un minibús premium de hasta 19 plazas o dos vans Clase V, según el estilo del programa. Las vans dan más flexibilidad para dividir el grupo." },
      { question: "¿El chófer puede acompañar al grupo varios días?", answer: "Sí. Es la fórmula más habitual en incentivos: vehículo y chófer a disposición durante todo el programa, con alojamiento del chófer incluido en el presupuesto cuando el viaje es itinerante." },
      { question: "¿Podéis trabajar con el DMC que ya tenga la agencia?", answer: "Sí. Luxe Galicia trabaja con cualquier agencia o DMC. Si no tienes, Suunia puede encargarse del programa completo." },
    ],
  },
  {
    slug: "transporte-festivales-producciones",
    metaTitle: "Transporte para festivales, giras y rodajes en Galicia",
    metaDescription:
      "Transporte para festivales, conciertos, giras y rodajes en Galicia: artistas, técnicos, producción y público VIP. Operativa coordinada con producción y cambios en tiempo real.",
    serviceType: "Transporte para festivales y producciones",
    hero: {
      eyebrow: "Festivales · Giras · Rodajes",
      title: "Transporte para festivales y producciones en Galicia",
      subtitle: "Artistas, técnicos y equipos de producción moviéndose a contrarreloj. Aquí el margen de error es cero.",
      image: "/images/electronica-GozoFestival.jpg",
      alt: "Escenario de un festival de música en Galicia",
    },
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "En un festival, el horario de un artista no se negocia. Un retraso de veinte minutos en un traslado se convierte en un concierto que empieza tarde y en una producción que se juega su reputación.",
          "Luxe Galicia trabaja con productoras y promotores en festivales, giras y rodajes de toda Galicia: traslados de artistas y bandas, movimiento de técnicos, lanzaderas de público VIP y vehículos a disposición durante todo el evento.",
        ],
      },
      {
        type: "features",
        heading: "Qué se cubre",
        columns: 3,
        bg: "gray",
        items: [
          { title: "Artistas y bandas", text: "Aeropuerto-hotel-recinto con berlinas y vans de lujo. Discreción total y chóferes acostumbrados a horarios imposibles." },
          { title: "Técnicos y producción", text: "Vans y minibuses para equipos de montaje, con recogidas múltiples y turnos de madrugada." },
          { title: "Público VIP y patrocinadores", text: "Lanzaderas desde hoteles y ciudades cercanas con acceso directo al recinto." },
          { title: "Rodajes", text: "Vehículos a disposición para equipo artístico y técnico, desplazamientos entre localizaciones." },
          { title: "Cambios en tiempo real", text: "Un responsable conectado con producción que reasigna vehículos al momento." },
          { title: "Toda Galicia y norte de Portugal", text: "Festivales en costa e interior, con salidas desde los aeropuertos de Galicia y Oporto." },
        ],
      },
      {
        type: "steps",
        heading: "Cómo se organiza",
        items: [
          { title: "Hoja de producción", text: "Recibo horarios de llegada, pruebas de sonido, actuaciones y salidas." },
          { title: "Plan de movimientos", text: "Asignación de vehículos y chóferes por artista, equipo y franja." },
          { title: "Canal directo", text: "Grupo de coordinación con producción para cambios al minuto." },
          { title: "Cierre", text: "Informe de servicios realizados para la liquidación con la promotora." },
        ],
      },
      {
        type: "links",
        heading: "Para profundizar",
        bg: "gray",
        items: [
          { title: "Guía: transporte para congresos y eventos en Galicia", href: "/guias/transporte-congresos-eventos-galicia" },
          { title: "Flota disponible", href: "/flota" },
          { title: "Traslados desde Vigo", href: "/traslados-desde-vigo" },
        ],
      },
      { type: "quote", heading: "Pásame la hoja de producción" },
    ],
    faqs: [
      { question: "¿Trabajáis de madrugada?", answer: "Sí. En festivales y giras los traslados de madrugada son la norma, y la operativa se diseña con turnos de chóferes para cumplir los descansos legales." },
      { question: "¿Podéis firmar acuerdos de confidencialidad?", answer: "Sí. En traslados de artistas la discreción es parte del servicio y se firman los acuerdos que la producción necesite." },
      { question: "¿Cubrís festivales fuera de las ciudades?", answer: "Sí, cualquier recinto de Galicia y el norte de Portugal, incluidas ubicaciones rurales con accesos complicados." },
    ],
  },
  {
    slug: "transporte-empresas-galicia",
    metaTitle: "Transporte para empresas en Galicia | Chófer y visitas de negocio",
    metaDescription:
      "Transporte con chófer para empresas que visitan Galicia: inspecciones, auditorías, visitas a fábricas y proveedores, desarrollo comercial, ferias y chófer a disposición por horas o días.",
    serviceType: "Transporte ejecutivo para empresas",
    hero: {
      eyebrow: "Empresas",
      title: "Transporte para empresas que vienen a Galicia",
      subtitle: "Inspecciones, visitas comerciales, ferias y agendas apretadas. Tu equipo trabaja; el chófer se ocupa del resto.",
      image: "/images/traslados-chofer-coruna.jpg",
      alt: "Chófer abriendo la puerta de una berlina a un ejecutivo en A Coruña",
    },
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "Vienes a Galicia a trabajar, no a pelearte con un coche de alquiler, los aparcamientos de un polígono o una carretera comarcal a las ocho de la mañana.",
          "Luxe Galicia pone a tu disposición berlinas y vans premium con chófer para que tu agenda de visitas se cumpla, se alargue lo que haga falta y termine a tiempo para el vuelo de vuelta.",
        ],
      },
      {
        type: "zigzag",
        bg: "gray",
        items: [
          {
            title: "Visitas, inspecciones y auditorías",
            paragraphs: [
              "Auditorías de calidad, visitas a fábricas, homologación de proveedores, inspecciones técnicas. Galicia tiene industria repartida entre polígonos, puertos y zonas rurales: A Coruña, Arteixo, Ferrol, Santiago, Vigo, Ourense.",
              "El chófer te recoge en el aeropuerto o en el hotel, encadena las visitas del día y espera lo que haga falta. Tú llegas con la cabeza en la reunión.",
            ],
            image: "/images/traslados-chofer-coruna.jpg",
            alt: "Ejecutivo bajando de una berlina con chófer para una visita de empresa",
          },
          {
            title: "Desarrollo comercial, ferias y roadshows",
            paragraphs: [
              "Visitas a clientes en varias ciudades en un mismo día, presentaciones de producto, ferias en IFEVI o ExpoCoruña, reuniones con distribuidores.",
              "Se diseña la ruta para que aproveches cada hora: A Coruña, Santiago, Vigo y Oporto están a menos de tres horas entre sí. Con chófer, el coche se convierte en tu oficina entre reunión y reunión.",
            ],
            image: "/images/flota-luxe-galicia.jpg",
            alt: "Berlinas y vans premium para roadshows comerciales en Galicia",
          },
          {
            title: "Chófer a disposición por horas o días",
            paragraphs: [
              "Para directivos, comités de dirección y clientes estratégicos. Un vehículo y un chófer a tu servicio durante la jornada o durante toda la estancia.",
              "Berlina premium para una persona, berlina de lujo para la alta dirección o van Clase V para el comité completo.",
            ],
            image: "/images/van-lujo-galicia.jpg",
            alt: "Van de lujo Mercedes con chófer a disposición de un comité de dirección",
          },
        ],
      },
      {
        type: "checklist",
        heading: "Por qué las empresas de fuera lo prefieren",
        items: [
          "Sin alquilar coche, sin aparcar, sin conducir cansado de vuelta al aeropuerto.",
          "Agenda con varias visitas en ciudades distintas el mismo día.",
          "Factura a nombre de la empresa y condiciones para servicios recurrentes.",
          "Recogida en Santiago, A Coruña, Vigo u Oporto según tu vuelo.",
          "Chóferes discretos, puntuales y con experiencia con ejecutivos.",
          "Un solo contacto para todas las visitas de tu equipo durante el año.",
        ],
      },
      { type: "quote", heading: "Cuéntame tu agenda de visitas", bg: "gray" },
    ],
    faqs: [
      { question: "¿Puedo contratar un chófer para un día completo de visitas?", answer: "Sí. Es el servicio más habitual para empresas: chófer y vehículo a disposición por horas o por jornada, con la ruta adaptada a tu agenda." },
      { question: "¿Me recogéis en el aeropuerto de Oporto si mi visita es en Vigo?", answer: "Sí. Muchas empresas vuelan a Oporto por la oferta de vuelos internacionales y hacen el trayecto a Vigo, Pontevedra o Santiago con chófer." },
      { question: "¿Facturáis a la empresa?", answer: "Sí, con factura a nombre de la empresa. Para equipos que viajan a Galicia con frecuencia se acuerdan condiciones de cliente recurrente." },
      { question: "¿Cuál es la antelación mínima?", answer: "Para traslados ejecutivos suele bastar con 24-48 horas. Para agendas de varios días o varios vehículos, cuanto antes mejor." },
    ],
  },
];

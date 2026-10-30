import type { Page } from "./types";

const VEHICULOS_FAQ = {
  question: "¿Qué vehículo necesito según el número de personas?",
  answer:
    "Berlina ejecutiva para 1-3 personas, van ejecutiva para hasta 7, minibús para 8-19 y autocar a partir de 20. Para grupos grandes se combinan varios vehículos en la misma operativa.",
};

const PRECIO_FAQ = {
  question: "¿Los precios de la tabla son cerrados?",
  answer:
    "Son precios orientativos por trayecto con IVA incluido. El precio final se confirma por escrito antes del servicio y depende de fecha, horario nocturno, esperas y paradas intermedias.",
};

export const PAGES_TRASLADOS: Page[] = [
  {
    slug: "traslados",
    metaTitle: "Traslados con chófer en Galicia, Oporto, Madrid y Asturias",
    metaDescription:
      "Traslados privados con chófer desde A Coruña, Santiago y Vigo a toda Galicia, Oporto, Asturias y Madrid. Berlinas, vans ejecutivas, minibuses y autocares. Precios orientativos.",
    serviceType: "Traslados privados con chófer",
    hero: {
      eyebrow: "Traslados privados",
      title: "Traslados con chófer desde Galicia, hacia donde necesites",
      subtitle: "Tres bases (A Coruña, Santiago y Vigo), Oporto como puerta de entrada y salidas hacia Madrid y Asturias. Precio claro antes de reservar.",
      image: "/images/llegada-aeropuerto-coches.webp",
      alt: "Berlinas con chófer en la zona de llegadas de un aeropuerto",
    },
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "La mayoría de webs de transporte te esconden el precio. Aquí tienes precios orientativos por trayecto y por tipo de vehículo, porque cuando organizas un viaje quieres saber de qué cifra hablas antes de pedir nada.",
          "Elige tu punto de salida y consulta destinos, distancias y vehículos disponibles.",
        ],
      },
      {
        type: "links",
        heading: "Elige tu punto de partida",
        bg: "gray",
        items: [
          { title: "Desde A Coruña", text: "Toda Galicia, Oporto, Asturias y Madrid desde la base principal.", href: "/traslados-desde-coruna", image: "/images/coruna-torre-hercules.jpg", alt: "Monumento junto a la Torre de Hércules, en A Coruña" },
          { title: "Desde Santiago", text: "Aeropuerto Rosalía de Castro, estación de tren y el final del Camino.", href: "/traslados-desde-santiago", image: "/images/tours-santiago.jpg", alt: "Catedral de Santiago de Compostela" },
          { title: "Desde Vigo", text: "Rías Baixas, Oporto y puerto de cruceros.", href: "/traslados-desde-vigo", image: "/images/playa-rodas-islas-cies-suunia.jpg", alt: "Playa de Rodas en las Islas Cíes frente a Vigo" },
          { title: "Oporto, puerta de Galicia", text: "Del aeropuerto de Oporto a cualquier punto de Galicia.", href: "/oporto-galicia", image: "/images/van-avion-privado.jpg", alt: "Van con chófer junto a un avión en el aeropuerto" },
          { title: "Camino de Santiago", text: "Inicio de etapas, vehículo de apoyo y regreso para grupos.", href: "/transporte-camino-de-santiago", image: "/images/faro-de-Finisterre-1.jpg", alt: "Faro de Fisterra, final del Camino de Santiago" },
          { title: "Aeropuertos", text: "Santiago, A Coruña, Vigo y Oporto.", href: "/aeropuertos-galicia", image: "/images/viajero-aeropuerto.webp", alt: "Viajero en un aeropuerto viendo despegar un avión" },
        ],
      },
      { type: "fleet", heading: "Tipos de vehículo" },
    ],
    faqs: [VEHICULOS_FAQ, PRECIO_FAQ],
  },
  {
    slug: "traslados-desde-coruna",
    metaTitle: "Traslados con chófer desde A Coruña | Precios orientativos",
    metaDescription:
      "Traslados privados con chófer desde A Coruña a Santiago, Vigo, Lugo, Ourense, Oporto, Asturias y Madrid. Berlinas, vans ejecutivas, minibuses y autocares. Tabla de precios.",
    serviceType: "Traslados con chófer desde A Coruña",
    hero: {
      eyebrow: "Base principal · A Coruña",
      title: "Traslados con chófer desde A Coruña",
      subtitle: "A cualquier punto de Galicia, a Oporto, a Asturias o a Madrid. Puerta a puerta, con precio claro.",
      image: "/images/coruna-torre-hercules.jpg",
      alt: "Monumento junto a la Torre de Hércules, en A Coruña",
    },
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "A Coruña es la base de Luxe Galicia desde 2013. Desde aquí salen traslados a diario hacia el resto de Galicia y fuera de ella: ejecutivos que tienen reunión en Vigo, grupos que vuelan desde Oporto, familias que van a Madrid sin pasar por el aeropuerto.",
          "Recogida en el aeropuerto de Alvedro, en la estación de tren, en el puerto de cruceros, en hoteles o en cualquier dirección del área de A Coruña (Arteixo, Oleiros, Culleredo, Sada).",
        ],
      },
      {
        type: "routes",
        heading: "Destinos y precios orientativos desde A Coruña",
        bg: "gray",
        rows: [
          { destino: "Santiago de Compostela", km: 75, tiempo: "50 min", precio: "coruna-santiago" },
          { destino: "Ferrol", km: 55, tiempo: "45 min", precio: "coruna-ferrol" },
          { destino: "Lugo", km: 97, tiempo: "1 h 10 min", precio: "coruna-lugo" },
          { destino: "Pontevedra", km: 135, tiempo: "1 h 25 min", precio: "coruna-pontevedra" },
          { destino: "Vigo", km: 160, tiempo: "1 h 40 min", precio: "coruna-vigo" },
          { destino: "Ourense", km: 175, tiempo: "1 h 50 min", precio: "coruna-ourense" },
          { destino: "Oporto (aeropuerto)", km: 300, tiempo: "3 h", precio: "coruna-oporto" },
          { destino: "Oviedo / Gijón", km: 290, tiempo: "3 h 15 min", precio: "coruna-oviedo" },
          { destino: "Madrid", km: 590, tiempo: "5 h 45 min", precio: "coruna-madrid" },
        ],
      },
      {
        type: "features",
        heading: "Lo que incluye cada traslado",
        columns: 4,
        items: [
          { title: "Precio cerrado", text: "Confirmado por escrito antes del servicio. Sin sorpresas en peajes ni combustible." },
          { title: "Control de vuelos y trenes", text: "Si tu vuelo se retrasa, el chófer lo sabe y te espera." },
          { title: "Recibimiento", text: "Chófer esperando con tu nombre en llegadas o en el lobby del hotel." },
          { title: "Paradas a medida", text: "Paradas intermedias en ruta si las necesitas, avisando al reservar." },
        ],
      },
      {
        type: "links",
        heading: "Otros puntos de partida",
        bg: "gray",
        items: [
          { title: "Traslados desde Santiago", href: "/traslados-desde-santiago" },
          { title: "Traslados desde Vigo", href: "/traslados-desde-vigo" },
          { title: "Oporto ⇄ Galicia", href: "/oporto-galicia" },
        ],
      },
    ],
    faqs: [
      { question: "¿Hacéis traslados de A Coruña a Madrid por carretera?", answer: "Sí. Es una alternativa habitual para grupos y familias con equipaje o para quien prefiere un trayecto puerta a puerta. En van ejecutiva el grupo viaja junto y sin escalas." },
      { question: "¿Recogéis en el puerto de cruceros de A Coruña?", answer: "Sí. El puerto está en pleno centro, junto a Palexco. Se recoge a pie de terminal para traslados o excursiones privadas a Santiago." },
      VEHICULOS_FAQ,
      PRECIO_FAQ,
    ],
  },
  {
    slug: "traslados-desde-santiago",
    metaTitle: "Traslados con chófer desde Santiago de Compostela | Precios",
    metaDescription:
      "Traslados privados con chófer desde Santiago de Compostela y su aeropuerto a A Coruña, Vigo, Rías Baixas, Ourense, Lugo, Oporto, Asturias y Madrid. Precios orientativos.",
    serviceType: "Traslados con chófer desde Santiago de Compostela",
    hero: {
      eyebrow: "Santiago de Compostela",
      title: "Traslados con chófer desde Santiago",
      subtitle: "Aeropuerto Rosalía de Castro, estación de tren, hoteles del casco histórico y el final del Camino. Hacia toda Galicia y más allá.",
      image: "/images/tours-santiago.jpg",
      alt: "Catedral de Santiago de Compostela",
    },
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "Santiago es el centro de gravedad de Galicia: el aeropuerto con más vuelos, la estación de alta velocidad hacia Madrid y la meta de miles de peregrinos. Desde aquí, todo está a una hora o poco más.",
          "Recogida en el aeropuerto Rosalía de Castro (SCQ), en la estación de tren, en hoteles (con acceso coordinado al casco histórico, que tiene el tráfico restringido) o en el Palacio de Congresos.",
        ],
      },
      {
        type: "routes",
        heading: "Destinos y precios orientativos desde Santiago",
        bg: "gray",
        rows: [
          { destino: "A Coruña", km: 75, tiempo: "50 min", precio: "santiago-coruna" },
          { destino: "Pontevedra", km: 60, tiempo: "45 min", precio: "santiago-pontevedra" },
          { destino: "Sanxenxo / O Grove", km: 75, tiempo: "1 h", precio: "santiago-sanxenxo" },
          { destino: "Vigo", km: 90, tiempo: "1 h", precio: "santiago-vigo" },
          { destino: "Lugo", km: 105, tiempo: "1 h 15 min", precio: "santiago-lugo" },
          { destino: "Ourense", km: 110, tiempo: "1 h 15 min", precio: "santiago-ourense" },
          { destino: "Oporto (aeropuerto)", km: 230, tiempo: "2 h 20 min", precio: "santiago-oporto" },
          { destino: "Oviedo / Gijón", km: 320, tiempo: "3 h 30 min", precio: "santiago-oviedo" },
          { destino: "Madrid", km: 600, tiempo: "5 h 50 min", precio: "santiago-madrid" },
        ],
      },
      {
        type: "features",
        heading: "Pensado para quien llega a Santiago",
        columns: 3,
        items: [
          { title: "Congresistas y ejecutivos", text: "Aeropuerto, hotel y Palacio de Congresos o Cidade da Cultura sin perder tiempo." },
          { title: "Peregrinos y grupos del Camino", text: "Regreso al aeropuerto, a Oporto o al inicio de otra etapa. Fisterra y Muxía incluidos." },
          { title: "Viajeros internacionales", text: "Santiago como punto de partida para recorrer Galicia con chófer." },
        ],
      },
      {
        type: "links",
        heading: "También te puede interesar",
        bg: "gray",
        items: [
          { title: "Transporte en el Camino de Santiago", href: "/transporte-camino-de-santiago" },
          { title: "Guía: Palacio de Congresos de Santiago", href: "/guias/transporte-palacio-congresos-santiago" },
          { title: "Tours con chófer desde Santiago", href: "/tours-con-chofer-galicia" },
          { title: "Uber, taxi o chófer en Santiago", href: "/guias/uber-taxi-chofer-santiago-de-compostela" },
        ],
      },
    ],
    faqs: [
      { question: "¿Podéis recoger en un hotel del casco histórico de Santiago?", answer: "El casco histórico tiene el tráfico restringido. Se acuerda el punto de recogida más cercano accesible para vehículos o se gestiona el acceso cuando el hotel lo permite." },
      { question: "¿Cuánto se tarda de Santiago a Oporto?", answer: "Unas 2 horas y 20 minutos hasta el aeropuerto de Oporto en condiciones normales de tráfico, por autopista." },
      VEHICULOS_FAQ,
      PRECIO_FAQ,
    ],
  },
  {
    slug: "traslados-desde-vigo",
    metaTitle: "Traslados con chófer desde Vigo a Oporto y Galicia | Precios",
    metaDescription:
      "Traslados privados con chófer desde Vigo a Oporto, Rías Baixas, Santiago, Ourense y A Coruña. Recogida en aeropuerto de Peinador y puerto de cruceros. Precios orientativos.",
    serviceType: "Traslados con chófer desde Vigo",
    hero: {
      eyebrow: "Vigo · Rías Baixas",
      title: "Traslados con chófer desde Vigo",
      subtitle: "A Oporto en menos de dos horas, a las Rías Baixas en media hora y a Santiago en una. Recogida en aeropuerto, estación y puerto de cruceros.",
      image: "/images/playa-rodas-islas-cies-suunia.jpg",
      alt: "Islas Cíes frente a Vigo",
    },
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "Vigo es distinto. Es la ciudad más grande de Galicia, la puerta de las Rías Baixas, un puerto de cruceros con escalas durante todo el año y la ciudad gallega mejor conectada con Oporto.",
          "Vigo–Oporto es una de las rutas más buscadas: empresas que vuelan a Oporto por su oferta internacional y trabajan en Vigo, y viajeros que combinan Portugal y Galicia en el mismo viaje.",
        ],
      },
      {
        type: "routes",
        heading: "Destinos y precios orientativos desde Vigo",
        bg: "gray",
        rows: [
          { destino: "Pontevedra", km: 30, tiempo: "30 min", precio: "vigo-pontevedra" },
          { destino: "Sanxenxo / O Grove", km: 55, tiempo: "50 min", precio: "vigo-sanxenxo" },
          { destino: "Santiago de Compostela", km: 90, tiempo: "1 h", precio: "vigo-santiago" },
          { destino: "Ourense", km: 100, tiempo: "1 h 05 min", precio: "vigo-ourense" },
          { destino: "Oporto (aeropuerto)", km: 145, tiempo: "1 h 35 min", precio: "vigo-oporto" },
          { destino: "A Coruña", km: 160, tiempo: "1 h 40 min", precio: "vigo-coruna" },
          { destino: "Madrid", km: 590, tiempo: "5 h 40 min", precio: "vigo-madrid" },
        ],
      },
      {
        type: "zigzag",
        items: [
          {
            title: "Puerto de cruceros de Vigo",
            paragraphs: [
              "La terminal de cruceros está en el centro de la ciudad. Desde allí, una excursión privada con chófer a Santiago, a las Rías Baixas o a Baiona encaja en el horario de escala con margen.",
              "Para navieras, consignatarias y agencias de excursiones se organizan operativas de grupo con minibuses y autocares.",
            ],
            image: "/images/tours-islas-cies.jpg",
            alt: "Ría de Vigo con las Islas Cíes al fondo",
          },
          {
            title: "Empresas en el área de Vigo",
            paragraphs: [
              "Visitas a plantas industriales, puerto, proveedores y ferias en IFEVI, junto al aeropuerto de Peinador.",
              "Chófer a disposición por horas o por jornada, con recogida en Oporto si tu vuelo llega allí.",
            ],
            image: "/images/traslados-chofer-coruna.jpg",
            alt: "Ejecutivo con chófer en una visita de empresa en Vigo",
          },
        ],
      },
      {
        type: "links",
        heading: "Relacionado",
        bg: "gray",
        items: [
          { title: "Oporto, puerta de entrada a Galicia", href: "/oporto-galicia" },
          { title: "Excursiones para cruceros", href: "/excursiones-cruceros-galicia" },
          { title: "Tour Vigo e Islas Cíes", href: "/tours-con-chofer-galicia/vigo-islas-cies" },
          { title: "Guía: transporte a IFEVI", href: "/guias/transporte-ifevi-vigo" },
          { title: "Norte de Portugal con chófer", href: "/tours-con-chofer-galicia/norte-de-portugal" },
        ],
      },
    ],
    faqs: [
      { question: "¿Cuánto se tarda de Vigo al aeropuerto de Oporto?", answer: "Alrededor de 1 hora y 35 minutos por autopista. Conviene salir con margen en horas punta de entrada a Oporto." },
      { question: "¿Hacéis excursiones privadas para cruceristas en Vigo?", answer: "Sí. Recogida en la terminal y regreso con margen sobre la hora de embarque. Santiago, Rías Baixas y Baiona son las más demandadas." },
      VEHICULOS_FAQ,
      PRECIO_FAQ,
    ],
  },
  {
    slug: "oporto-galicia",
    metaTitle: "Oporto ⇄ Galicia con chófer | Traslados desde el aeropuerto de Oporto",
    metaDescription:
      "Traslados privados con chófer entre Oporto (aeropuerto y ciudad) y Galicia: Vigo, Rías Baixas, Santiago y A Coruña. Para empresas, agencias y viajeros. Berlinas, vans y minibuses.",
    serviceType: "Traslados Oporto - Galicia con chófer",
    alternate: "/en/porto-galicia-private-chauffeur",
    hero: {
      eyebrow: "Oporto · Puerta de entrada a Galicia",
      title: "De Oporto a Galicia, con chófer y sin complicaciones",
      subtitle: "El aeropuerto de Oporto tiene más conexiones internacionales que ninguno de Galicia. Aterriza allí y llega a Vigo, Santiago o A Coruña puerta a puerta.",
      image: "/images/chofer-carretera-galicia.jpg",
      alt: "Chófer conduciendo por autopista entre Oporto y Galicia",
    },
    blocks: [
      {
        type: "intro",
        heading: "Por qué Oporto es la entrada natural a Galicia",
        paragraphs: [
          "Si vienes desde América, desde muchas ciudades europeas o en un vuelo de bajo coste, lo más probable es que aterrices en Oporto. Está a 1 h 35 min de Vigo, a 2 h 20 min de Santiago y a 3 h de A Coruña.",
          "El problema llega al bajar del avión: tren con transbordos, autobuses con horarios limitados o un coche de alquiler que tienes que devolver en otro país. Con chófer, sales del aeropuerto y no vuelves a pensar en ello hasta que llegas al hotel.",
          "Luxe Galicia cuenta con colaboradores en Oporto para recogidas en aeropuerto y ciudad, y coordina toda la operativa hasta cualquier punto de Galicia.",
        ],
      },
      {
        type: "routes",
        heading: "Desde el aeropuerto de Oporto",
        bg: "gray",
        rows: [
          { destino: "Vigo", km: 145, tiempo: "1 h 35 min", precio: "oporto-vigo" },
          { destino: "Pontevedra", km: 175, tiempo: "1 h 55 min", precio: "oporto-pontevedra" },
          { destino: "Sanxenxo / O Grove", km: 195, tiempo: "2 h 10 min", precio: "oporto-sanxenxo" },
          { destino: "Santiago de Compostela", km: 230, tiempo: "2 h 20 min", precio: "oporto-santiago" },
          { destino: "A Coruña", km: 300, tiempo: "3 h", precio: "oporto-coruna" },
        ],
      },
      {
        type: "features",
        heading: "Para quién es",
        columns: 3,
        items: [
          { title: "Agencias y congresos", text: "Asistentes internacionales que vuelan a Oporto: llegadas escalonadas, cartelería y lanzaderas a la sede en Galicia." },
          { title: "Empresas", text: "Visitas a Vigo, Pontevedra o Santiago aprovechando los vuelos directos de Oporto." },
          { title: "Viajeros y peregrinos", text: "Inicio del Camino Portugués, viajes por Galicia o combinaciones Portugal-Galicia con tours de varios días." },
        ],
      },
      {
        type: "links",
        heading: "Sigue planificando",
        bg: "gray",
        items: [
          { title: "Guía: cómo ir de Oporto a Galicia", text: "Tren, autobús, coche o chófer: tiempos y pros y contras.", href: "/guias/oporto-galicia-como-llegar" },
          { title: "De Oporto a Vigo: qué compensa", text: "Tren, autobús o traslado privado, comparados.", href: "/guias/oporto-vigo-tren-autobus-traslado" },
          { title: "Camino Portugués desde Oporto", text: "Transporte para grupos de peregrinos.", href: "/transporte-camino-de-santiago" },
          { title: "Oporto y Galicia en 5 días", text: "Aterriza en Oporto y sube por la costa hasta Santiago con chófer.", href: "/tours-con-chofer-galicia/oporto-y-galicia-5-dias" },
        ],
      },
    ],
    faqs: [
      { question: "¿El chófer me espera si el vuelo a Oporto se retrasa?", answer: "Sí. Se hace seguimiento del vuelo y el chófer ajusta la hora de recogida. El tiempo de espera razonable está incluido." },
      { question: "¿Hay que pagar algo extra por cruzar la frontera?", answer: "No hay controles fronterizos entre Portugal y España. Los peajes del trayecto van incluidos en el precio confirmado." },
      { question: "¿Podéis recoger a un grupo grande en el aeropuerto de Oporto?", answer: "Sí, con minibuses y autocares, coordinando llegadas escalonadas en varios vuelos." },
      { question: "¿Hacéis el trayecto inverso, de Galicia a Oporto?", answer: "Sí, desde cualquier punto de Galicia al aeropuerto o a la ciudad de Oporto, calculando la salida según tu vuelo." },
    ],
  },
  {
    slug: "transporte-camino-de-santiago",
    metaTitle: "Transporte para el Camino de Santiago | Grupos, vans y minibuses",
    metaDescription:
      "Transporte para grupos del Camino de Santiago: traslado al inicio de etapa (Sarria, Tui, Oporto, Ferrol, O Cebreiro), vehículo de apoyo, equipaje y regreso desde Santiago o Fisterra.",
    serviceType: "Transporte para el Camino de Santiago",
    hero: {
      eyebrow: "Camino de Santiago",
      title: "Transporte para grupos del Camino de Santiago",
      subtitle: "Tú caminas. El resto, resuelto: llegada al inicio de etapa, vehículo de apoyo y regreso desde Santiago o Fisterra.",
      image: "/images/faro-de-Finisterre-1.jpg",
      alt: "Faro de Fisterra al atardecer, final del Camino de Santiago",
    },
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "Organizar el Camino para un grupo tiene un punto ciego: la logística entre etapas. Cómo llegar al punto de inicio desde el aeropuerto, qué pasa si alguien no puede seguir, cómo se mueve el equipaje y cómo vuelve todo el grupo desde Santiago.",
          "Luxe Galicia trabaja con agencias del Camino, turoperadores extranjeros y grupos organizados con vans ejecutivas, minibuses y autocares adaptados a cada etapa.",
        ],
      },
      {
        type: "features",
        heading: "Servicios para el Camino",
        columns: 3,
        bg: "gray",
        items: [
          { title: "Traslado al inicio de etapa", text: "Desde los aeropuertos de Santiago, A Coruña, Vigo u Oporto hasta Sarria, Tui, Ferrol, O Cebreiro, Valença o el punto que elijas." },
          { title: "Vehículo de apoyo", text: "Van o minibús acompañando al grupo: recogidas al final de etapa, apoyo en tramos duros y traslado a alojamientos fuera del trazado." },
          { title: "Equipaje de grupos", text: "Traslado del equipaje del grupo entre alojamientos, coordinado con la ruta." },
          { title: "Regreso desde Santiago", text: "Al aeropuerto, a Oporto o a tu ciudad, el día de llegada o el siguiente." },
          { title: "Extensión a Fisterra y Muxía", text: "Excursión con chófer al fin del mundo para cerrar el Camino." },
          { title: "Para agencias del Camino", text: "Operativas recurrentes durante toda la temporada con condiciones para agencias." },
        ],
      },
      {
        type: "checklist",
        heading: "Rutas más habituales",
        items: [
          "Camino Francés: Santiago o aeropuerto → Sarria (~1 h 20 min) u O Cebreiro (~2 h).",
          "Camino Portugués: aeropuerto de Oporto → Oporto ciudad, Valença o Tui (~1 h 30 min).",
          "Camino Inglés: A Coruña o Santiago → Ferrol (~45 min desde A Coruña).",
          "Final: Santiago → Fisterra y Muxía (~1 h 20 min).",
          "Regreso: Santiago → aeropuertos de Santiago, A Coruña, Vigo u Oporto.",
          "Grupos de 4 a más de 50 peregrinos con el vehículo adecuado.",
        ],
      },
      {
        type: "links",
        heading: "Para planificar",
        bg: "gray",
        items: [
          { title: "Guía: transporte en el Camino de Santiago", href: "/guias/transporte-camino-de-santiago" },
          { title: "Camino Portugués por la costa: etapas y logística", href: "/guias/camino-portugues-costa-etapas-grupos" },
          { title: "Año Santo 2027: transporte de grupos", href: "/guias/ano-santo-2027-transporte-grupos" },
          { title: "Oporto ⇄ Galicia", href: "/oporto-galicia" },
          { title: "Traslados desde Santiago", href: "/traslados-desde-santiago" },
        ],
      },
    ],
    faqs: [
      { question: "¿Lleváis a un grupo del aeropuerto de Santiago a Sarria?", answer: "Sí, es uno de los traslados más solicitados: aproximadamente 1 hora y 20 minutos hasta Sarria, punto de inicio de los últimos 100 km del Camino Francés." },
      { question: "¿Podéis acompañar al grupo con un vehículo durante varios días?", answer: "Sí. Un vehículo de apoyo con chófer acompaña al grupo durante las etapas, con recogidas y traslados a los alojamientos." },
      { question: "¿Trabajáis con agencias extranjeras del Camino?", answer: "Sí. Se trabaja en español e inglés con agencias y turoperadores que organizan grupos durante toda la temporada." },
    ],
  },
  {
    slug: "alquiler-autocar-con-conductor-galicia",
    metaTitle: "Alquiler de autocares y minibuses con conductor en Galicia",
    metaDescription:
      "Alquiler de autocares y minibuses con conductor en Galicia para congresos, eventos, empresas, excursiones y traslados de grupos. Salidas desde A Coruña, Santiago y Vigo.",
    serviceType: "Alquiler de autocares con conductor",
    hero: {
      eyebrow: "Autocares y minibuses",
      title: "Alquiler de autocares y minibuses con conductor en Galicia",
      subtitle: "Para congresos, eventos, empresas y grupos. De 8 a cientos de personas, con salidas desde A Coruña, Santiago y Vigo y un solo responsable de toda la operativa.",
      image: "/images/flota-minibuses-autocar.webp",
      alt: "Flota de minibuses y autocar con conductor en Galicia",
    },
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "Mover a un grupo no es alquilar un autocar. Es saber cuántos vehículos hacen falta, de qué tamaño, a qué hora tiene que salir cada uno y qué pasa si el programa cambia. Ahí es donde se gana o se pierde un evento.",
          "Luxe Galicia coordina autocares y minibuses con conductor en toda Galicia: lanzaderas de congresos, traslados de aeropuerto para grupos, excursiones, eventos de empresa, festivales y traslados de invitados. Con una sola persona responsable de que todo salga a la hora.",
        ],
      },
      {
        type: "features",
        heading: "Qué vehículo necesita tu grupo",
        columns: 3,
        bg: "gray",
        items: [
          { title: "Minibús · 8-19 plazas", text: "Grupos medianos, visitas técnicas, comités y traslados de aeropuerto. Ágil en cascos urbanos y carreteras secundarias." },
          { title: "Midibús · 20-35 plazas", text: "Grupos de empresa, excursiones y lanzaderas con hoteles de tamaño medio." },
          { title: "Autocar · hasta 55 plazas", text: "Congresos, eventos y traslados de grupos grandes. Para más personas, varios autocares coordinados." },
        ],
      },
      {
        type: "checklist",
        heading: "Para qué se contratan",
        items: [
          "Lanzaderas de congresos entre hoteles y sede (Palexco, Palacio de Congresos de Santiago, IFEVI).",
          "Traslados de grupos desde los aeropuertos de Santiago, A Coruña, Vigo y Oporto.",
          "Eventos de empresa, convenciones y cenas de gala con vuelta escalonada.",
          "Excursiones de grupo por Galicia: Santiago, Rías Baixas, Costa da Morte.",
          "Festivales, conciertos y eventos deportivos.",
          "Traslado de invitados en bodas y celebraciones.",
        ],
      },
      {
        type: "steps",
        heading: "Cómo se organiza",
        items: [
          { title: "Datos del grupo", text: "Número de personas, fechas, horarios y puntos de recogida." },
          { title: "Plan de vehículos", text: "Tamaño y número de autocares o minibuses y rotaciones necesarias." },
          { title: "Precio cerrado", text: "Presupuesto detallado con tiempos de espera y kilómetros incluidos." },
          { title: "Coordinación", text: "Un responsable en contacto con tu equipo durante todo el servicio." },
        ],
      },
      {
        type: "links",
        heading: "Salidas desde",
        bg: "gray",
        items: [
          { title: "A Coruña", text: "Grupos y congresos en Palexco y ExpoCoruña, aeropuerto de Alvedro y puerto.", href: "/traslados-desde-coruna" },
          { title: "Santiago de Compostela", text: "Palacio de Congresos, Cidade da Cultura, aeropuerto y Camino.", href: "/traslados-desde-santiago" },
          { title: "Vigo", text: "IFEVI, puerto de cruceros, Rías Baixas y Oporto.", href: "/traslados-desde-vigo" },
        ],
      },
    ],
    cta: {
      title: "¿Cuántos autocares necesita tu evento?",
      description: "Pásame el número de personas, los horarios y los puntos de recogida. Te propongo el plan de vehículos y el precio en 24 horas laborables.",
    },
    faqs: [
      { question: "¿Cuántas plazas tiene un autocar?", answer: "Los autocares de gran turismo suelen tener hasta 55 plazas. Para grupos más pequeños hay midibuses de 20 a 35 plazas y minibuses de 8 a 19." },
      { question: "¿El precio incluye el conductor?", answer: "Sí. Todos los autocares y minibuses se contratan con conductor profesional. El presupuesto indica las horas de servicio, los kilómetros y los tiempos de espera incluidos." },
      { question: "¿Podéis coordinar varios autocares para un congreso?", answer: "Sí. Se planifican rotaciones y lanzaderas con varios vehículos trabajando en paralelo, coordinados por una sola persona." },
      { question: "¿Trabajáis fuera de Galicia?", answer: "Sí. Se hacen traslados de grupos a Oporto, Asturias, León y Madrid." },
      { question: "¿Con cuánta antelación hay que reservar?", answer: "Para grandes grupos en temporada alta (mayo a octubre) y en el Año Santo 2027, cuanto antes mejor: de 2 a 6 meses según el tamaño." },
    ],
  },
  {
    slug: "aeropuertos-galicia",
    metaTitle: "Traslados aeropuerto con chófer: Santiago, A Coruña, Vigo y Oporto",
    metaDescription:
      "Traslados privados desde y hacia los aeropuertos de Santiago (SCQ), A Coruña (LCG), Vigo (VGO) y Oporto (OPO). Tiempos a cada ciudad, seguimiento del vuelo, recibimiento con cartel y grupos.",
    serviceType: "Traslados de aeropuerto con chófer",
    hero: {
      eyebrow: "Aeropuertos",
      title: "Traslados de aeropuerto en Galicia y Oporto",
      subtitle: "Santiago, A Coruña, Vigo y Oporto. El chófer sigue tu vuelo y te espera en llegadas con tu nombre.",
      image: "/images/sala-espera-aeropuerto.jpg",
      alt: "Sala de espera de un aeropuerto con aviones al fondo",
    },
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "Galicia tiene tres aeropuertos a menos de dos horas entre sí, y a 1 h 35 min de Vigo está Oporto, el de más conexiones internacionales del noroeste.",
          "Elegir bien por dónde llegar ahorra horas y dinero. Y el traslado empieza antes de aterrizar: con el número de vuelo, la recogida se ajusta sola.",
        ],
      },
      {
        type: "links",
        heading: "Elige aeropuerto",
        bg: "gray",
        items: [
          { title: "Santiago (SCQ)", text: "Rosalía de Castro. El de más vuelos de Galicia, a 15 min del centro de Santiago.", href: "/traslados-desde-santiago" },
          { title: "A Coruña (LCG)", text: "Alvedro, a 10 minutos del centro de A Coruña y de Palexco.", href: "/traslados-desde-coruna" },
          { title: "Vigo (VGO)", text: "Peinador, junto a IFEVI y a 30 min de Pontevedra y las Rías Baixas.", href: "/traslados-desde-vigo" },
          { title: "Oporto (OPO)", text: "Francisco Sá Carneiro. Vuelos directos a medio mundo, a 1 h 35 min de Vigo.", href: "/oporto-galicia" },
        ],
      },
      {
        type: "table",
        heading: "Tiempos desde cada aeropuerto",
        intro: "Tiempos orientativos en coche, sin tráfico. Sirven para elegir aeropuerto y calcular la hora de salida hacia el vuelo de vuelta.",
        head: ["Aeropuerto", "A Coruña", "Santiago", "Vigo", "Pontevedra"],
        rows: [
          ["Santiago (SCQ)", "50 min", "15 min", "1 h", "50 min"],
          ["A Coruña (LCG)", "10 min", "55 min", "1 h 45 min", "1 h 25 min"],
          ["Vigo (VGO)", "1 h 45 min", "1 h", "15 min", "30 min"],
          ["Oporto (OPO)", "3 h", "2 h 20 min", "1 h 35 min", "1 h 50 min"],
        ],
        note: "Para el vuelo de vuelta se calcula la recogida con margen para facturar y pasar el control.",
      },
      {
        type: "features",
        heading: "¿Por qué aeropuerto te conviene llegar?",
        columns: 2,
        bg: "gray",
        items: [
          { title: "Vas a A Coruña o Ferrol", text: "Alvedro, si hay vuelo directo. Si no, Santiago está a 50 minutos y tiene muchas más frecuencias." },
          { title: "Vas a Santiago o al centro de Galicia", text: "Santiago (SCQ). Es el aeropuerto con más rutas nacionales y europeas de Galicia." },
          { title: "Vas a Vigo, Pontevedra o las Rías Baixas", text: "Vigo (VGO) para vuelos nacionales. Para vuelos internacionales, Oporto suele ser más rápido en total." },
          { title: "Llegas desde fuera de Europa", text: "Oporto (OPO). Tiene vuelos directos a Norteamérica, Brasil y gran parte de Europa, y evita una escala en Madrid." },
        ],
      },
      {
        type: "features",
        heading: "Así funciona un traslado de aeropuerto",
        columns: 4,
        items: [
          { title: "Seguimiento del vuelo", text: "La hora de recogida se ajusta a la llegada real." },
          { title: "Recibimiento", text: "Chófer en la sala de llegadas con cartel." },
          { title: "Ayuda con el equipaje", text: "Del carro al maletero, sin prisas." },
          { title: "Precio confirmado", text: "Por escrito y antes del servicio." },
        ],
      },
      {
        type: "zigzag",
        bg: "gray",
        items: [
          {
            title: "Grupos y congresos que llegan en varios vuelos",
            paragraphs: [
              "En un congreso, los asistentes no llegan juntos: llegan en diez vuelos repartidos entre la mañana y la noche, y a veces por dos aeropuertos distintos.",
              "Se organizan recogidas por franjas horarias, con vehículos del tamaño de cada franja y un punto de encuentro claro en llegadas. Nadie espera dos horas a que se llene un autocar.",
            ],
            image: "/images/llegada-aeropuerto-coches.webp",
            alt: "Vehículos con chófer esperando a un grupo en la llegada del aeropuerto",
          },
          {
            title: "Directivos y vuelos privados",
            paragraphs: [
              "Recogida a pie de pista o en la terminal de aviación general cuando el aeropuerto lo permite, con el vehículo listo a la hora de aterrizaje.",
              "Berlina de representación o van Clase V, chófer discreto y salida directa a la reunión.",
            ],
            image: "/images/van-avion-privado.jpg",
            alt: "Van ejecutiva esperando junto a un avión privado",
          },
        ],
      },
      {
        type: "checklist",
        heading: "Qué necesito para reservar",
        items: [
          "Número de vuelo, fecha y hora de llegada.",
          "Nombre del pasajero para el cartel y teléfono de contacto.",
          "Número de personas y de maletas.",
          "Dirección de destino o del hotel.",
          "Equipaje especial: palos de golf, bicicletas, material de stand.",
          "Para grupos, la lista de vuelos de llegada.",
        ],
      },
    ],
    faqs: [
      { question: "¿Qué pasa si mi vuelo llega con retraso?", answer: "El chófer sigue el vuelo y ajusta la hora. El tiempo de espera razonable está incluido en el servicio." },
      { question: "¿Dónde me espera el chófer?", answer: "En la sala de llegadas, a la salida de recogida de equipajes, con un cartel con tu nombre o el de tu empresa. Recibes su nombre y teléfono antes del viaje." },
      { question: "¿Podéis recoger a un grupo que llega en varios vuelos?", answer: "Sí. Se planifican recogidas escalonadas por franjas horarias, con varios vehículos o con uno que espera a los últimos vuelos, según lo que convenga al grupo." },
      { question: "¿Y si mi vuelo internacional llega a Madrid?", answer: "También es posible el traslado con chófer desde Madrid, aunque suele compensar más un vuelo de conexión a Santiago, A Coruña o Vigo y la recogida allí." },
      { question: "¿Cubrís vuelos de primera hora o de madrugada?", answer: "Sí, bajo reserva. Indica la hora del vuelo al pedir presupuesto." },
      VEHICULOS_FAQ,
    ],
  },
  {
    slug: "excursiones-cruceros-galicia",
    metaTitle: "Excursiones privadas para cruceros en A Coruña y Vigo",
    metaDescription:
      "Excursiones privadas con chófer para pasajeros de crucero desde los puertos de A Coruña y Vigo: Santiago de Compostela, Rías Baixas, Baiona y A Coruña. Regreso garantizado antes del embarque.",
    serviceType: "Excursiones privadas para cruceros",
    hero: {
      eyebrow: "Cruceros · A Coruña · Vigo",
      title: "Excursiones privadas para cruceros en Galicia",
      subtitle: "Tu barco hace escala unas horas. Aprovéchalas sin colas, sin autobuses de 50 personas y con regreso garantizado al barco.",
      image: "/images/cruceros-vigo-traslados.jpg",
      alt: "Cruceros atracados en el puerto de Vigo al atardecer",
    },
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "Los puertos de A Coruña y Vigo están en pleno centro, y Santiago de Compostela queda a una hora de ambos. En una escala de ocho o diez horas da tiempo a ver la catedral, comer bien y volver al barco con margen.",
          "La diferencia con la excursión de la naviera: vas a tu ritmo, en una berlina o una van ejecutiva, con un chófer que conoce los tiempos de la escala.",
        ],
      },
      {
        type: "features",
        heading: "Excursiones más solicitadas",
        columns: 3,
        bg: "gray",
        items: [
          { title: "Santiago de Compostela", text: "Desde A Coruña o Vigo. Catedral, Obradoiro y casco histórico. 6-7 horas." },
          { title: "Rías Baixas", text: "Desde Vigo: Baiona, Combarro o una bodega de albariño. 5-7 horas." },
          { title: "A Coruña a fondo", text: "Torre de Hércules, Monte de San Pedro y Ciudad Vieja, con paradas que el autobús no hace. 3-4 horas." },
        ],
      },
      {
        type: "zigzag",
        items: [
          {
            title: "Desde el puerto de A Coruña",
            paragraphs: [
              "La terminal está en pleno centro, junto a la Marina y la Ciudad Vieja. El chófer te espera a pie de terminal.",
              "En escalas cortas, A Coruña a fondo. En escalas de siete horas o más, Santiago de Compostela, a unos 50 minutos.",
            ],
            image: "/images/cruceros-coruna.jpg",
            alt: "Vista aérea del puerto de A Coruña con cruceros atracados",
          },
          {
            title: "Desde el puerto de Vigo",
            paragraphs: [
              "La terminal de Vigo también está en el centro de la ciudad y a un paso de las Rías Baixas.",
              "Baiona, Combarro o una bodega de albariño en media jornada, o Santiago en una hora si la escala lo permite.",
            ],
            image: "/images/puerto-rias-baixas.jpg",
            alt: "Puerto pesquero en las Rías Baixas",
          },
        ],
      },
      {
        type: "checklist",
        heading: "Garantías para tu escala",
        bg: "gray",
        items: [
          "Recogida a pie de terminal de cruceros.",
          "Regreso al barco con margen sobre la hora de embarque.",
          "Itinerario adaptado a la duración real de la escala.",
          "Chóferes que hablan inglés bajo petición.",
          "Berlinas para parejas, vans para familias y minibuses para grupos.",
          "Operativas de grupo para agencias de excursiones y consignatarias.",
        ],
      },
    ],
    faqs: [
      { question: "¿Da tiempo a ver Santiago en una escala en A Coruña?", answer: "Sí, en escalas de 7 horas o más. El trayecto es de unos 50 minutos y se planifica el regreso con margen sobre el embarque." },
      { question: "¿Qué pasa si hay retrasos en la vuelta?", answer: "El itinerario se diseña con margen de seguridad y el chófer controla el horario en todo momento. La prioridad es que estés en el barco a tiempo." },
    ],
  },
];

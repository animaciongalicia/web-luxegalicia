import type { Page } from "./types";

const VEHICULOS_FAQ = {
  question: "¿Qué vehículo necesito según el número de personas?",
  answer:
    "Berlina premium para 1-3 personas, van de lujo para hasta 7, minibús para 8-19 y autocar a partir de 20. Para grupos grandes se combinan varios vehículos en la misma operativa.",
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
      "Traslados privados con chófer desde A Coruña, Santiago y Vigo a toda Galicia, Oporto, Asturias y Madrid. Berlinas, vans de lujo, minibuses y autocares. Precios orientativos.",
    serviceType: "Traslados privados con chófer",
    hero: {
      eyebrow: "Traslados privados",
      title: "Traslados con chófer desde Galicia, hacia donde necesites",
      subtitle: "Tres bases (A Coruña, Santiago y Vigo), Oporto como puerta de entrada y salidas hacia Madrid y Asturias. Precio claro antes de reservar.",
      image: "/images/traslados-coruna-santiago.jpg",
      alt: "Berlina con chófer en un traslado entre A Coruña y Santiago",
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
          { title: "Desde A Coruña", text: "Toda Galicia, Oporto, Asturias y Madrid desde la base principal.", href: "/traslados-desde-coruna", image: "/images/coruna-torre-hercules.jpg", alt: "Torre de Hércules en A Coruña" },
          { title: "Desde Santiago", text: "Aeropuerto Rosalía de Castro, estación de tren y el final del Camino.", href: "/traslados-desde-santiago", image: "/images/tours-santiago.jpg", alt: "Catedral de Santiago de Compostela" },
          { title: "Desde Vigo", text: "Rías Baixas, Oporto y puerto de cruceros.", href: "/traslados-desde-vigo", image: "/images/playa-rodas-islas-cies-suunia.jpg", alt: "Playa de Rodas en las Islas Cíes frente a Vigo" },
          { title: "Oporto, puerta de Galicia", text: "Del aeropuerto de Oporto a cualquier punto de Galicia.", href: "/oporto-galicia", image: "/images/traslados-chofer-coruna.jpg", alt: "Traslado con chófer desde el aeropuerto de Oporto" },
          { title: "Camino de Santiago", text: "Inicio de etapas, vehículo de apoyo y regreso para grupos.", href: "/transporte-camino-de-santiago", image: "/images/faro-de-Finisterre-1.jpg", alt: "Faro de Fisterra, final del Camino de Santiago" },
          { title: "Aeropuertos", text: "Santiago, A Coruña, Vigo y Oporto.", href: "/aeropuertos-galicia", image: "/images/van-lujo-galicia.jpg", alt: "Van de lujo esperando en un aeropuerto de Galicia" },
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
      "Traslados privados con chófer desde A Coruña a Santiago, Vigo, Lugo, Ourense, Oporto, Asturias y Madrid. Berlinas, vans de lujo, minibuses y autocares. Tabla de precios.",
    serviceType: "Traslados con chófer desde A Coruña",
    hero: {
      eyebrow: "Base principal · A Coruña",
      title: "Traslados con chófer desde A Coruña",
      subtitle: "A cualquier punto de Galicia, a Oporto, a Asturias o a Madrid. Puerta a puerta, con precio claro.",
      image: "/images/coruna-torre-hercules.jpg",
      alt: "Torre de Hércules, A Coruña",
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
      { question: "¿Hacéis traslados de A Coruña a Madrid por carretera?", answer: "Sí. Es una alternativa habitual para grupos y familias con equipaje o para quien prefiere un trayecto puerta a puerta. En van de lujo el grupo viaja junto y sin escalas." },
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
      image: "/images/traslados-coruna-santiago.jpg",
      alt: "Berlina con chófer en la autopista entre Oporto y Galicia",
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
          { title: "Camino Portugués desde Oporto", text: "Transporte para grupos de peregrinos.", href: "/transporte-camino-de-santiago" },
          { title: "Oporto y Galicia en 5 días", text: "Aterriza en Oporto y sube por la costa hasta Santiago con chófer.", href: "/tours-con-chofer-galicia/oporto-y-galicia-5-dias" },
        ],
      },
      { type: "quote", heading: "Reserva tu traslado desde Oporto" },
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
          "Luxe Galicia trabaja con agencias del Camino, turoperadores extranjeros y grupos organizados con vans de lujo, minibuses y autocares adaptados a cada etapa.",
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
          { title: "Oporto ⇄ Galicia", href: "/oporto-galicia" },
          { title: "Traslados desde Santiago", href: "/traslados-desde-santiago" },
        ],
      },
      { type: "quote", heading: "Cuéntame vuestro Camino" },
    ],
    faqs: [
      { question: "¿Lleváis a un grupo del aeropuerto de Santiago a Sarria?", answer: "Sí, es uno de los traslados más solicitados: aproximadamente 1 hora y 20 minutos hasta Sarria, punto de inicio de los últimos 100 km del Camino Francés." },
      { question: "¿Podéis acompañar al grupo con un vehículo durante varios días?", answer: "Sí. Un vehículo de apoyo con chófer acompaña al grupo durante las etapas, con recogidas y traslados a los alojamientos." },
      { question: "¿Trabajáis con agencias extranjeras del Camino?", answer: "Sí. Se trabaja en español e inglés con agencias y turoperadores que organizan grupos durante toda la temporada." },
    ],
  },
  {
    slug: "aeropuertos-galicia",
    metaTitle: "Traslados aeropuerto con chófer: Santiago, A Coruña, Vigo y Oporto",
    metaDescription:
      "Traslados privados con chófer desde y hacia los aeropuertos de Santiago (SCQ), A Coruña (LCG), Vigo (VGO) y Oporto (OPO). Control de vuelos, recibimiento con cartel y precio cerrado.",
    serviceType: "Traslados de aeropuerto con chófer",
    hero: {
      eyebrow: "Aeropuertos",
      title: "Traslados de aeropuerto en Galicia y Oporto",
      subtitle: "Santiago, A Coruña, Vigo y Oporto. El chófer sigue tu vuelo y te espera en llegadas con tu nombre.",
      image: "/images/van-lujo-galicia.jpg",
      alt: "Van de lujo con chófer esperando en un aeropuerto",
    },
    blocks: [
      {
        type: "links",
        heading: "Elige aeropuerto",
        items: [
          { title: "Santiago (SCQ)", text: "El de más vuelos de Galicia. A 15 min del centro de Santiago y 50 min de A Coruña.", href: "/traslados-desde-santiago" },
          { title: "A Coruña (LCG)", text: "Alvedro, a 10 minutos del centro de A Coruña y de Palexco.", href: "/traslados-desde-coruna" },
          { title: "Vigo (VGO)", text: "Peinador, junto a IFEVI y a 30 min de las Rías Baixas.", href: "/traslados-desde-vigo" },
          { title: "Oporto (OPO)", text: "La gran puerta internacional del noroeste. 1 h 35 min de Vigo.", href: "/oporto-galicia" },
        ],
      },
      {
        type: "features",
        heading: "Así funciona un traslado de aeropuerto",
        columns: 4,
        bg: "gray",
        items: [
          { title: "Seguimiento del vuelo", text: "Hora de recogida ajustada a la llegada real." },
          { title: "Recibimiento", text: "Chófer en la sala de llegadas con cartel." },
          { title: "Ayuda con el equipaje", text: "Del carro al maletero, sin prisas." },
          { title: "Precio confirmado", text: "Por escrito y antes del servicio." },
        ],
      },
    ],
    faqs: [
      { question: "¿Qué pasa si mi vuelo llega con retraso?", answer: "El chófer sigue el vuelo y ajusta la hora. El tiempo de espera razonable está incluido en el servicio." },
      { question: "¿Podéis recoger a un grupo que llega en varios vuelos?", answer: "Sí. Se planifican recogidas escalonadas con varios vehículos o con un vehículo que espera a los últimos vuelos, según lo que convenga al grupo." },
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
      image: "/images/coruna-torre-hercules.jpg",
      alt: "Torre de Hércules vista desde el puerto de A Coruña",
    },
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "Los puertos de A Coruña y Vigo están en pleno centro, y Santiago de Compostela queda a una hora de ambos. En una escala de ocho o diez horas da tiempo a ver la catedral, comer bien y volver al barco con margen.",
          "La diferencia con la excursión de la naviera: vas a tu ritmo, en una berlina o una van de lujo, con un chófer que conoce los tiempos de la escala.",
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
        type: "checklist",
        heading: "Garantías para tu escala",
        items: [
          "Recogida a pie de terminal de cruceros.",
          "Regreso al barco con margen sobre la hora de embarque.",
          "Itinerario adaptado a la duración real de la escala.",
          "Chóferes que hablan inglés bajo petición.",
          "Berlinas para parejas, vans para familias y minibuses para grupos.",
          "Operativas de grupo para agencias de excursiones y consignatarias.",
        ],
      },
      { type: "quote", heading: "Reserva tu excursión" },
    ],
    faqs: [
      { question: "¿Da tiempo a ver Santiago en una escala en A Coruña?", answer: "Sí, en escalas de 7 horas o más. El trayecto es de unos 50 minutos y se planifica el regreso con margen sobre el embarque." },
      { question: "¿Qué pasa si hay retrasos en la vuelta?", answer: "El itinerario se diseña con margen de seguridad y el chófer controla el horario en todo momento. La prioridad es que estés en el barco a tiempo." },
    ],
  },
];

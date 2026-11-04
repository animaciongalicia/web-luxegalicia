import type { Page } from "./types";

/**
 * Alquiler de autobús con conductor por ciudad. Enfocadas a servicios de ticket
 * alto (excursiones y tours, empresas, bodas, congresos y eventos), no a
 * traslados sueltos. Referencia de competencia: Melytour gana el racimo
 * "alquiler autobús vigo" (≈1.500 búsquedas/mes) con una sola página de ciudad.
 */

const VEHICULOS_TABLA = {
  type: "table" as const,
  heading: "Qué vehículo necesita tu grupo",
  head: ["Personas", "Vehículo", "Cuándo encaja"],
  rows: [
    ["8-19", "Minibús", "Grupos medianos, bodas íntimas, comités y visitas técnicas. Más en [alquiler de minibús con conductor](/alquiler-minibus-con-conductor-galicia)"],
    ["20-35", "Midibús", "Excursiones de empresa, invitados de boda y grupos de tamaño medio"],
    ["36-55", "Autocar de gran turismo", "Congresos, convenciones, peregrinaciones y grandes excursiones"],
    ["Más de 55", "Varios vehículos coordinados", "Eventos con rotaciones o salidas desde varios hoteles"],
  ],
};

export const PAGES_AUTOBUS: Page[] = [
  // ───────────────────────────── VIGO ─────────────────────────────
  {
    slug: "alquiler-autobus-con-conductor-vigo",
    metaTitle: "Alquiler de autobús con conductor en Vigo | Rías Baixas",
    metaDescription:
      "Alquiler de autobús y minibús con conductor en Vigo para excursiones por las Rías Baixas, empresas, bodas, IFEVI y eventos. Rutas a medida con un solo responsable.",
    serviceType: "Alquiler de autobús con conductor en Vigo",
    hero: {
      eyebrow: "Autobuses con conductor · Vigo",
      title: "Alquiler de autobús con conductor en Vigo",
      subtitle: "Excursiones por las Rías Baixas, viajes de empresa, bodas y eventos en IFEVI. Con el vehículo adecuado y un conductor que conoce cada carretera de la ría.",
      image: "/images/vigo-puente-rande.jpg",
      alt: "Puente de Rande sobre la ría de Vigo",
    },
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "Vigo es la mejor base del sur de Galicia. En menos de una hora tienes Baiona, Combarro, Cambados y las bodegas del albariño. En hora y media, Oporto. Y en la ciudad, IFEVI, el puerto de cruceros y una de las zonas industriales más potentes del noroeste.",
          "Por eso aquí un autobús rara vez hace un solo trayecto. Hace una ruta: recoge en el hotel, para en tres sitios, espera en la bodega y vuelve a la hora de la cena. Lo que importa no es el autobús. Es quién planifica la jornada para que salga redonda.",
        ],
      },
      {
        type: "features",
        heading: "Para qué se alquila un autobús en Vigo",
        columns: 3,
        bg: "gray",
        items: [
          { title: "Excursiones por las Rías Baixas", text: "Baiona, Combarro, Cambados, O Grove y A Guarda en jornadas a medida, con paradas en miradores, lonjas y bodegas." },
          { title: "Empresas y visitas industriales", text: "Delegaciones de clientes, auditorías y visitas a planta en la Zona Franca y los polígonos del área, con rutas entre varias sedes." },
          { title: "Bodas en pazos y fincas", text: "Invitados del hotel a la iglesia, de la iglesia al banquete en el pazo y vuelta escalonada al final de la noche." },
          { title: "Ferias y congresos en IFEVI", text: "Lanzaderas hotel-recinto, recogidas en Peinador y Oporto y cenas de expositores con vuelta organizada." },
          { title: "Incentivos y viajes de grupo", text: "Programas de varios días con el mismo conductor: ría, vino, Santiago y norte de Portugal." },
          { title: "Fútbol y grandes eventos", text: "Peñas, empresas con invitados y equipos visitantes a Balaídos y a los conciertos de la ciudad." },
        ],
      },
      {
        type: "table",
        heading: "Excursiones de un día en autobús desde Vigo",
        intro: "Tiempos orientativos por carretera desde el centro de Vigo. Con ellos se diseña una jornada que se disfruta, no que se pasa en el asiento.",
        head: ["Destino", "Tiempo", "Ideal para"],
        rows: [
          ["Baiona y A Guarda (Monte de Santa Trega)", "~30-50 min", "Costa, parador y vistas sobre la desembocadura del Miño"],
          ["Combarro y Pontevedra", "~35-40 min", "Hórreos sobre el mar y casco histórico peatonal"],
          ["Cambados y O Grove", "~55 min", "Bodegas de albariño, marisco y paseo en barco por la ría"],
          ["Tui y Valença do Minho", "~30 min", "Catedral fortaleza y la frontera con Portugal a pie"],
          ["Santiago de Compostela", "~1 h", "Catedral y casco histórico en media jornada"],
          ["Oporto", "~1 h 35 min", "Ribeira, bodegas de vino de Oporto y el Douro"],
        ],
        note: "Si buscas la ruta ya pensada, mira la [excursión privada a las Rías Baixas](/tours-con-chofer-galicia/rias-baixas).",
      },
      {
        type: "zigzag",
        items: [
          {
            title: "Bodas en las Rías Baixas",
            paragraphs: [
              "Muchas bodas del sur de Galicia se celebran en pazos y fincas fuera de la ciudad, con carreteras estrechas y aparcamiento limitado. El autobús resuelve dos problemas: que nadie conduzca después del banquete y que los invitados lleguen todos a la vez a la ceremonia.",
              "Se planifica con ida desde uno o dos hoteles y una vuelta en varias salidas. El conductor conoce el acceso a la finca antes del día de la boda. Tienes todos los detalles en el [transporte para bodas en Galicia](/transporte-bodas-galicia).",
            ],
            image: "/images/servicio-boda-luxegalicia.jpg",
            alt: "Vehículo con conductor preparado para el servicio de una boda",
          },
          {
            title: "Empresas que reciben visitas en Vigo",
            paragraphs: [
              "La industria de Vigo recibe clientes, auditores y delegaciones de todo el mundo. Un autobús o un minibús con conductor recoge al grupo en Peinador o en Oporto, encadena visitas a planta y termina en un restaurante de la ría.",
              "Una sola persona coordina horarios, esperas y cambios, y la empresa recibe una factura. Más en el [transporte para empresas en Galicia](/transporte-empresas-galicia).",
            ],
            image: "/images/vigo-puerto-aerea.jpg",
            alt: "Vista aérea del puerto de Vigo y su zona industrial",
          },
        ],
      },
      VEHICULOS_TABLA,
      {
        type: "checklist",
        heading: "Lo que marca la diferencia en Vigo",
        bg: "gray",
        items: [
          "Conductores que conocen los accesos a pazos, bodegas y miradores de la ría.",
          "Rutas que esquivan el tráfico de la AP-9 y del centro en hora punta.",
          "Coordinación con los barcos a las Islas Cíes, que en temporada tienen acceso limitado.",
          "Recogidas en Peinador y en el aeropuerto de Oporto con seguimiento del vuelo.",
          "Experiencia en IFEVI y en el puerto de cruceros en días de máxima ocupación.",
          "Un solo responsable para todo el servicio, de la propuesta al último regreso.",
        ],
      },
      {
        type: "links",
        heading: "Más desde Vigo",
        items: [
          { title: "Traslados desde Vigo", text: "Aeropuertos, Rías Baixas y Oporto con chófer.", href: "/traslados-desde-vigo" },
          { title: "Transporte para ferias en IFEVI", text: "Lanzaderas, expositores y cenas durante la feria.", href: "/guias/transporte-ifevi-vigo" },
          { title: "Autobús en Santiago", text: "Congresos, peregrinaciones y excursiones desde Compostela.", href: "/alquiler-autobus-con-conductor-santiago" },
        ],
      },
    ],
    cta: {
      title: "¿Qué plan tienes en Vigo?",
      description: "Dime fecha, número de personas y qué queréis hacer. Te propongo la ruta, el vehículo y el precio en 24 horas laborables.",
    },
    faqs: [
      { question: "¿Cuánto cuesta alquilar un autobús con conductor en Vigo?", answer: "Depende de las horas de servicio, los kilómetros, el tamaño del vehículo y la fecha. Una excursión de jornada completa no se presupuesta igual que un traslado. Pide presupuesto con tu plan y recibes un precio cerrado." },
      { question: "¿Podéis organizar una excursión por las Rías Baixas desde Vigo?", answer: "Sí. Es el servicio más habitual: Baiona, Combarro, Cambados u O Grove con paradas a medida, comida y visita a una bodega de albariño." },
      { question: "¿Hacéis bodas fuera de Vigo?", answer: "Sí. Se cubren pazos y fincas de las Rías Baixas, el Baixo Miño y el norte de Portugal, con ida y vuelta escalonada para los invitados." },
      { question: "¿El autobús puede llevar al grupo a Oporto?", answer: "Sí. Oporto está a 1 h 35 min de Vigo y es una excursión habitual de un día, o el punto de llegada y salida de grupos que vuelan allí." },
      { question: "¿Con cuánta antelación hay que reservar?", answer: "En temporada alta (mayo a octubre) y en fechas de feria en IFEVI, de uno a tres meses. Para bodas, en cuanto tengas la fecha." },
    ],
  },

  // ─────────────────────────── A CORUÑA ───────────────────────────
  {
    slug: "alquiler-autobus-con-conductor-coruna",
    metaTitle: "Alquiler de autobús con conductor en A Coruña y comarca",
    metaDescription:
      "Alquiler de autobús y minibús con conductor en A Coruña para excursiones, empresas, bodas, congresos en Palexco y eventos. Costa da Morte, Rías Altas y Santiago.",
    serviceType: "Alquiler de autobús con conductor en A Coruña",
    hero: {
      eyebrow: "Autobuses con conductor · A Coruña",
      title: "Alquiler de autobús con conductor en A Coruña",
      subtitle: "Excursiones a la Costa da Morte y las Rías Altas, empresas, bodas y congresos en Palexco. La base de Luxe Galicia, con conductores que conocen la provincia a fondo.",
      image: "/images/coruna-torre-hercules.jpg",
      alt: "Torre de Hércules en A Coruña junto al océano",
    },
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "A Coruña es la puerta de dos de los paisajes más salvajes de Galicia. Hacia el oeste, la Costa da Morte, con sus faros y acantilados hasta Fisterra. Hacia el norte, las Rías Altas, Cedeira y San Andrés de Teixido. Y Santiago, a cincuenta minutos.",
          "También es ciudad de empresa y de congresos. Polígonos como Sabón, A Grela o Pocomaco, sedes como Palexco y ExpoCoruña y un aeropuerto, Alvedro, a diez minutos del centro. Un autobús aquí puede ser una excursión de lujo para un incentivo o la lanzadera de un congreso médico. Las dos cosas se hacen bien solo si alguien las planifica.",
        ],
      },
      {
        type: "features",
        heading: "Para qué se alquila un autobús en A Coruña",
        columns: 3,
        bg: "gray",
        items: [
          { title: "Excursiones y tours", text: "Costa da Morte, Rías Altas, Betanzos o Santiago en jornadas a medida, con comida y paradas en los puntos que el autobús de línea no toca." },
          { title: "Empresas de la comarca", text: "Visitas de clientes y proveedores a Arteixo, A Grela o Ferrol, convenciones, jornadas de equipo y la cena de Navidad." },
          { title: "Bodas en As Mariñas", text: "Pazos y fincas de Oleiros, Sada, Bergondo y Betanzos, con invitados que vuelven en varias salidas sin coger el coche." },
          { title: "Congresos en Palexco y ExpoCoruña", text: "Lanzaderas desde los hoteles, recogidas en Alvedro y Santiago y cena de gala fuera de la ciudad." },
          { title: "Cruceros", text: "Grupos que desembarcan en el Muelle de Trasatlánticos y quieren ver Santiago o la costa con regreso garantizado al barco." },
          { title: "Fútbol y eventos", text: "Peñas e invitados de empresa a Riazor, conciertos y grandes eventos en el Coliseum y ExpoCoruña." },
        ],
      },
      {
        type: "table",
        heading: "Excursiones de un día en autobús desde A Coruña",
        intro: "Tiempos orientativos por carretera desde el centro. La Costa da Morte y las Rías Altas tienen carreteras de curvas: se planifican con margen.",
        head: ["Destino", "Tiempo", "Ideal para"],
        rows: [
          ["Betanzos", "~25 min", "Casco medieval, iglesias góticas y la tortilla más famosa de Galicia"],
          ["Santiago de Compostela", "~50 min", "Catedral y casco histórico en media jornada"],
          ["Malpica y Costa da Morte", "~50 min - 1 h 15", "Faros, acantilados y pueblos marineros"],
          ["Cedeira y San Andrés de Teixido", "~1 h 15 - 1 h 30", "Acantilados de Herbeira y santuario de las Rías Altas"],
          ["Fisterra y Muxía", "~1 h 45", "El fin del mundo y la puesta de sol"],
          ["Playa de las Catedrales", "~2 h 15", "Excursión de jornada completa, con reserva de acceso en temporada"],
        ],
        note: "Mira también la [excursión privada a la Costa da Morte](/tours-con-chofer-galicia/costa-da-morte) y la de [San Andrés de Teixido y Cabo Ortegal](/tours-con-chofer-galicia/ferrol-cabo-ortegal).",
      },
      {
        type: "zigzag",
        items: [
          {
            title: "Bodas en los pazos de As Mariñas",
            paragraphs: [
              "El entorno de A Coruña está lleno de pazos y fincas para bodas a veinte o treinta minutos de la ciudad. Bonitos, sí. Pero con accesos estrechos, poco aparcamiento y la vuelta a la ciudad de madrugada.",
              "El autobús lleva a los invitados desde el hotel o desde un punto céntrico, espera durante la celebración y vuelve en dos o tres salidas. Nadie conduce, nadie busca taxi a las cuatro de la mañana.",
            ],
            image: "/images/pazo-galicia-jardines.jpg",
            alt: "Jardines de un pazo gallego preparado para una boda",
          },
          {
            title: "Congresos y empresas",
            paragraphs: [
              "Palexco recibe congresos médicos y científicos durante todo el año, y ExpoCoruña los grandes formatos. Para los dos, el autobús es la lanzadera entre hoteles y sede, y el transporte de la cena de gala.",
              "Y para las empresas de la comarca, el mismo servicio sirve para la convención anual, la visita de un cliente con su equipo o la cena de Navidad. Tienes cómo se planifica en el [transporte para congresos en Galicia](/transporte-congresos-galicia).",
            ],
            image: "/images/traslados-coruna-eventos.jpg",
            alt: "Vehículos con conductor preparados para un evento en A Coruña",
          },
        ],
      },
      VEHICULOS_TABLA,
      {
        type: "checklist",
        heading: "Lo que marca la diferencia en A Coruña",
        bg: "gray",
        items: [
          "Base propia en la ciudad: respuesta rápida y conductores de la zona.",
          "Experiencia en Palexco, ExpoCoruña y el Muelle de Trasatlánticos.",
          "Rutas por la Costa da Morte y las Rías Altas con tiempos reales, no los del navegador.",
          "Recogidas en Alvedro y en el aeropuerto de Santiago con seguimiento del vuelo.",
          "Puntos de bajada pactados en la Ciudad Vieja y en la zona de Riazor en días de partido.",
          "Un solo responsable para todo el servicio, de la propuesta al último regreso.",
        ],
      },
      {
        type: "links",
        heading: "Más desde A Coruña",
        items: [
          { title: "Traslados desde A Coruña", text: "Aeropuertos, Santiago, Oporto, Asturias y Madrid.", href: "/traslados-desde-coruna" },
          { title: "Transporte a Palexco", text: "Congresos en el centro de A Coruña: llegadas, lanzaderas y cena de gala.", href: "/guias/transporte-palexco" },
          { title: "Autobús en Vigo", text: "Rías Baixas, IFEVI y bodas en el sur de Galicia.", href: "/alquiler-autobus-con-conductor-vigo" },
        ],
      },
    ],
    cta: {
      title: "¿Qué plan tienes en A Coruña?",
      description: "Dime fecha, número de personas y qué queréis hacer. Te propongo la ruta, el vehículo y el precio en 24 horas laborables.",
    },
    faqs: [
      { question: "¿Cuánto cuesta alquilar un autobús con conductor en A Coruña?", answer: "Depende de las horas de servicio, los kilómetros, el tamaño del vehículo y la fecha. Envía tu plan (fecha, personas, recorrido y horarios) y recibes un precio cerrado." },
      { question: "¿Se puede hacer la Costa da Morte en un día desde A Coruña?", answer: "Sí. Lo habitual es Malpica, los faros y Muxía o Fisterra en una jornada completa, con comida por el camino y vuelta a la puesta de sol." },
      { question: "¿Hacéis bodas en pazos de Oleiros, Sada o Betanzos?", answer: "Sí. Es una de las zonas con más bodas de Galicia. Se organiza la ida de los invitados y una vuelta escalonada al final de la celebración." },
      { question: "¿Cubrís congresos en Palexco?", answer: "Sí. Lanzaderas desde los hoteles, recogidas en los aeropuertos y transporte para la cena de gala, con un responsable en contacto con la secretaría técnica." },
      { question: "¿Con cuánta antelación hay que reservar?", answer: "Para congresos, bodas y temporada alta, de uno a tres meses. Para excursiones fuera de temporada, con dos o tres semanas suele bastar." },
    ],
  },

  // ─────────────────────────── SANTIAGO ───────────────────────────
  {
    slug: "alquiler-autobus-con-conductor-santiago",
    metaTitle: "Alquiler de autobús con conductor en Santiago de Compostela",
    metaDescription:
      "Alquiler de autobús y minibús con conductor en Santiago para excursiones, congresos, empresas, bodas y grupos del Año Santo 2027. Rutas a medida por toda Galicia.",
    serviceType: "Alquiler de autobús con conductor en Santiago de Compostela",
    hero: {
      eyebrow: "Autobuses con conductor · Santiago de Compostela",
      title: "Alquiler de autobús con conductor en Santiago",
      subtitle: "Excursiones a toda Galicia, congresos, empresas y bodas desde el centro geográfico de la comunidad. Y en 2027, el Año Santo.",
      image: "/images/catedral-santiago-alameda.jpg",
      alt: "Catedral de Santiago de Compostela vista desde la Alameda",
    },
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "Santiago está en el centro de todo. A menos de una hora tienes A Coruña, Pontevedra y las Rías Baixas. A hora y cuarto, la Costa da Morte y Ourense. Es la base perfecta para grupos que quieren ver Galicia sin cambiar de hotel cada noche.",
          "Y tiene sus propias reglas. El casco histórico está cerrado al tráfico, el Palacio de Congresos y la Cidade da Cultura están fuera del centro, y en 2027, Año Santo, la ciudad va a recibir grupos como pocas veces. Un autobús aquí funciona si quien lo planifica conoce dónde puede parar, a qué hora y cuánto camina el grupo.",
        ],
      },
      {
        type: "features",
        heading: "Para qué se alquila un autobús en Santiago",
        columns: 3,
        bg: "gray",
        items: [
          { title: "Excursiones por Galicia", text: "Rías Baixas, Costa da Morte, Fisterra, Ribeira Sacra u Ourense termal en jornadas a medida, volviendo a dormir a Santiago." },
          { title: "Congresos y eventos", text: "Lanzaderas al Palacio de Congresos y a la Cidade da Cultura, y cenas de gala con vuelta escalonada al centro." },
          { title: "Empresas e instituciones", text: "Delegaciones, jornadas institucionales, visitas de la universidad y convenciones con varias sedes en el mismo día." },
          { title: "Bodas", text: "Invitados del casco histórico a pazos y fincas del entorno, con ida conjunta y vuelta en varias salidas." },
          { title: "Peregrinaciones y Año Santo", text: "Grupos parroquiales, colegios y asociaciones que llegan a Santiago y quieren completar la visita con una excursión." },
          { title: "Incentivos", text: "Programas de varios días con Santiago como base y el mismo conductor durante todo el viaje." },
        ],
      },
      {
        type: "table",
        heading: "Excursiones de un día en autobús desde Santiago",
        intro: "Tiempos orientativos por carretera. Desde Santiago, casi toda Galicia queda a una excursión de distancia.",
        head: ["Destino", "Tiempo", "Ideal para"],
        rows: [
          ["Pontevedra y Combarro", "~45-55 min", "Casco histórico y hórreos sobre la ría"],
          ["Cambados y O Grove", "~50 min - 1 h", "Albariño, marisco y paseo en barco"],
          ["A Coruña", "~50 min", "Torre de Hércules, Marina y Ciudad Vieja"],
          ["Fisterra y Muxía", "~1 h 15 - 1 h 30", "El final del Camino y la Costa da Morte"],
          ["Ourense termal", "~1 h 15", "Termas al aire libre y casco histórico"],
          ["Ribeira Sacra", "~1 h 45", "Cañón del Sil, monasterios y viñedos en bancales"],
        ],
        note: "Si buscas la ruta ya pensada, mira la [excursión privada a la Ribeira Sacra](/tours-con-chofer-galicia/ribeira-sacra) o los [tours de varios días por Galicia](/tours-con-chofer-galicia).",
      },
      {
        type: "zigzag",
        items: [
          {
            title: "Congresos fuera del casco histórico",
            paragraphs: [
              "El Palacio de Congresos y la Cidade da Cultura están a varios kilómetros de los hoteles del centro, y la Cidade, en lo alto del monte Gaiás. Sin lanzaderas, los asistentes dependen de líneas urbanas con pocas frecuencias o de taxis que no llegan para todos.",
              "El plan se diseña por bloques de sesión, con más vehículos en la primera rotación de la mañana y una vuelta escalonada tras la cena de gala. Tienes la logística completa en la guía del [Palacio de Congresos de Santiago](/guias/transporte-palacio-congresos-santiago).",
            ],
            image: "/images/sala-eventos-empresas.jpg",
            alt: "Sala preparada para un congreso en Santiago de Compostela",
          },
          {
            title: "Año Santo 2027",
            paragraphs: [
              "En un Año Santo, Santiago recibe peregrinaciones, colegios, asociaciones y grupos organizados de toda Europa. La demanda de autobuses se dispara y los buenos vehículos se reservan con meses de antelación.",
              "Si tu grupo viene en 2027, planifica ya: llegada, días en Santiago, excursiones y salida. Tienes todo el contexto en la guía del [Año Santo 2027 para grupos](/guias/ano-santo-2027-transporte-grupos).",
            ],
            image: "/images/santiago-obradoiro-catedral.jpg",
            alt: "Plaza del Obradoiro con la catedral de Santiago",
          },
        ],
      },
      VEHICULOS_TABLA,
      {
        type: "checklist",
        heading: "Lo que marca la diferencia en Santiago",
        bg: "gray",
        items: [
          "Puntos de subida y bajada pactados junto al casco histórico, donde los autobuses pueden parar.",
          "Experiencia en el Palacio de Congresos, la Cidade da Cultura y los hoteles del centro.",
          "Recogidas en el aeropuerto Rosalía de Castro y en la Estación Intermodal.",
          "Planificación con meses de antelación para el Año Santo 2027.",
          "Rutas a toda Galicia sin cambiar de hotel: Santiago como base.",
          "Un solo responsable para todo el servicio, de la propuesta al último regreso.",
        ],
      },
      {
        type: "intro",
        paragraphs: [
          "¿Tu grupo va a hacer el Camino? Eso es otro servicio, con llegada al inicio de etapa, vehículo de apoyo y regreso: lo tienes en el [transporte para grupos del Camino de Santiago](/transporte-camino-de-santiago).",
        ],
      },
      {
        type: "links",
        heading: "Más desde Santiago",
        items: [
          { title: "Traslados desde Santiago", text: "Aeropuerto, A Coruña, Vigo, Sarria y Oporto con chófer.", href: "/traslados-desde-santiago" },
          { title: "Cidade da Cultura", text: "Eventos y cenas de gala en el monte Gaiás.", href: "/guias/transporte-cidade-da-cultura" },
          { title: "Autobús en A Coruña", text: "Costa da Morte, Rías Altas, Palexco y bodas en As Mariñas.", href: "/alquiler-autobus-con-conductor-coruna" },
        ],
      },
    ],
    cta: {
      title: "¿Qué plan tienes en Santiago?",
      description: "Dime fecha, número de personas y qué queréis hacer. Te propongo la ruta, el vehículo y el precio en 24 horas laborables.",
    },
    faqs: [
      { question: "¿Cuánto cuesta alquilar un autobús con conductor en Santiago?", answer: "Depende de las horas de servicio, los kilómetros, el tamaño del vehículo y la fecha. En el Año Santo la demanda sube. Envía tu plan y recibes un precio cerrado." },
      { question: "¿Puede el autobús entrar en el casco histórico de Santiago?", answer: "No. La zona monumental tiene el tráfico restringido. El autobús deja y recoge al grupo en puntos autorizados cercanos, que se pactan antes del servicio." },
      { question: "¿Qué excursiones se pueden hacer en un día desde Santiago?", answer: "Las Rías Baixas, la Costa da Morte y Fisterra, A Coruña, Ourense o la Ribeira Sacra. Casi toda Galicia queda a menos de dos horas." },
      { question: "¿Hacéis lanzaderas para congresos en la Cidade da Cultura?", answer: "Sí. Lanzaderas desde los hoteles del centro y vuelta escalonada tras las cenas de gala, coordinadas con la organización del recinto." },
      { question: "¿Con cuánta antelación hay que reservar para el Año Santo 2027?", answer: "Cuanto antes. Para grupos grandes en primavera y verano de 2027, lo recomendable es reservar con seis meses o más." },
    ],
  },
];

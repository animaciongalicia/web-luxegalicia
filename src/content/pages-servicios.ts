import type { Page } from "./types";

/**
 * Páginas de servicio por tipo de vehículo. Atacan búsquedas con intención de
 * compra que no tenían página propia (datos Semrush ES, nov 2026):
 * - "alquiler minibus con conductor" 480 · "alquiler microbus con conductor" 170
 * - "alquiler furgoneta con conductor" 480 · "van con conductor" 20
 * - "alquiler coche con conductor" 590 · "chofer privado" 480 · "coche con conductor" 260
 */
export const PAGES_SERVICIOS: Page[] = [
  {
    slug: "alquiler-minibus-con-conductor-galicia",
    metaTitle: "Alquiler de minibús con conductor en Galicia (8-19 plazas)",
    metaDescription:
      "Alquiler de minibús y microbús con conductor en Galicia para grupos de 8 a 19 personas: aeropuertos, empresas, excursiones, bodas y eventos.",
    serviceType: "Alquiler de minibús con conductor",
    hero: {
      eyebrow: "Minibús · 8-19 plazas",
      title: "Alquiler de minibús con conductor en Galicia",
      subtitle: "Para grupos que no caben en una van y no necesitan un autocar. Todos juntos, con el equipaje y con un conductor que conoce el camino.",
      image: "/images/minibus-sprinter-negro.jpg",
      alt: "Minibús negro con conductor preparado para recoger a un grupo en Galicia",
    },
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "Doce personas. Demasiadas para una van, pocas para un autocar. Es el tamaño de grupo más habitual y el que peor se resuelve: dos coches que llegan a horas distintas, tres taxis que nadie consigue a la vez o un autocar de 55 plazas medio vacío que no entra en el casco histórico.",
          "El minibús es la respuesta. De 8 a 19 plazas, maletero para el equipaje y tamaño suficiente para moverse por ciudad, por carreteras secundarias y por las calles estrechas de los pueblos de costa. El grupo viaja junto, llega junto y vuelve junto.",
          "Luxe Galicia coordina minibuses con conductor en toda Galicia y el norte de Portugal, con salida desde A Coruña, Santiago y Vigo.",
        ],
      },
      {
        type: "features",
        heading: "Para qué se alquila un minibús con conductor",
        columns: 3,
        bg: "gray",
        items: [
          { title: "Traslados de aeropuerto", text: "Recogida del grupo en Santiago, A Coruña, Vigo u Oporto con seguimiento del vuelo y espacio para todas las maletas." },
          { title: "Empresas y comités", text: "Visitas técnicas, auditorías, comités de dirección o una delegación de clientes que va de planta en planta." },
          { title: "Excursiones de grupo", text: "Rías Baixas, Ribeira Sacra o Costa da Morte con paradas en miradores y bodegas, sin que nadie conduzca." },
          { title: "Bodas y celebraciones", text: "Traslado de familiares e invitados entre hotel, iglesia y finca, con vuelta escalonada al final de la noche." },
          { title: "Camino de Santiago", text: "Del aeropuerto a Sarria, Tui o Ferrol con mochilas y bastones, y vehículo de apoyo entre etapas." },
          { title: "Congresos e incentivos", text: "Lanzaderas de hoteles pequeños o grupos de ponentes, y movilidad a disposición en programas de varios días." },
        ],
      },
      {
        type: "table",
        heading: "Minibús, van o autocar: cuál necesitas",
        head: ["Personas", "Vehículo", "Cuándo compensa"],
        rows: [
          ["1-7", "Van ejecutiva", "Familias, directivos y grupos pequeños. Mira el [alquiler de van con conductor](/alquiler-van-con-conductor-galicia)"],
          ["8-19", "Minibús", "El grupo viaja junto y el vehículo entra en cualquier ciudad"],
          ["20-35", "Midibús", "Grupos de empresa y excursiones de tamaño medio"],
          ["36-55", "Autocar", "Congresos y grupos grandes. Mira el [alquiler de autocar con conductor](/alquiler-autocar-con-conductor-galicia)"],
        ],
        note: "Con mucho equipaje (golf, bicicletas, material de trabajo), conviene subir un escalón de tamaño o añadir remolque.",
      },
      {
        type: "checklist",
        heading: "De qué depende el precio de un minibús con conductor",
        intro: "No hay precio por kilómetro que sirva para todo. Estas son las variables que mueven el presupuesto.",
        bg: "gray",
        items: [
          "Horas de servicio: no es lo mismo un traslado de aeropuerto que una jornada completa a disposición.",
          "Kilómetros y peajes del recorrido, incluida la vuelta del vehículo a su base.",
          "Horario: los servicios nocturnos y de madrugada tienen recargo.",
          "Esperas largas entre trayectos, si el conductor no puede liberar el vehículo.",
          "Varios días fuera de la base: alojamiento y dietas del conductor.",
          "Temporada: de mayo a octubre y en el Año Santo la demanda sube y conviene reservar antes.",
        ],
      },
      {
        type: "intro",
        heading: "Lo que te ahorras con conductor",
        paragraphs: [
          "Alquilar un minibús sin conductor parece más barato hasta que lo haces. Necesitas carné D1 para más de 8 pasajeros, alguien del grupo se queda sin disfrutar porque conduce, y nadie conoce dónde se puede aparcar un vehículo de siete metros en el centro de Santiago o de Pontevedra.",
          "Con conductor profesional, el vehículo te deja en la puerta, espera donde está permitido y aparece a la hora acordada. El seguro de viajeros va incluido y la responsabilidad de la ruta no es tuya. Y si el grupo quiere tomar un albariño en la bodega, puede hacerlo.",
        ],
      },
      {
        type: "links",
        heading: "Salidas desde",
        items: [
          { title: "A Coruña", text: "Aeropuerto de Alvedro, Palexco, ExpoCoruña y el puerto.", href: "/traslados-desde-coruna" },
          { title: "Santiago de Compostela", text: "Aeropuerto Rosalía de Castro, Palacio de Congresos y el Camino.", href: "/traslados-desde-santiago" },
          { title: "Vigo", text: "Aeropuerto de Peinador, IFEVI, Rías Baixas y Oporto.", href: "/traslados-desde-vigo" },
        ],
      },
    ],
    cta: {
      title: "¿Cuántos sois y adónde vais?",
      description: "Dime personas, fechas, horarios y recorrido. Te propongo el minibús adecuado y el precio en 24 horas laborables.",
    },
    faqs: [
      { question: "¿Cuántas plazas tiene un minibús?", answer: "Los minibuses habituales tienen de 8 a 19 plazas para pasajeros, además del conductor. Para grupos de 20 a 35 personas se usa un midibús." },
      { question: "¿Qué diferencia hay entre minibús y microbús?", answer: "Se usan casi como sinónimos. Normalmente se llama microbús a los modelos más pequeños, de 8 a 16 plazas, y minibús a los de hasta 19. Lo que importa es el número de plazas y el espacio para equipaje." },
      { question: "¿Puedo contratar el minibús por horas o por días?", answer: "Sí. Se contrata por traslado, por horas, por jornada o por días a disposición. En viajes de varios días, el alojamiento del conductor se incluye en el presupuesto." },
      { question: "¿Cabe el equipaje de todo el grupo?", answer: "Para un grupo con una maleta por persona, sí. Con equipaje voluminoso, como bolsas de golf o bicicletas, se valora un vehículo mayor o un remolque." },
      { question: "¿El minibús puede salir de Galicia?", answer: "Sí. Se hacen servicios a Oporto, Asturias, León y Madrid, y a cualquier punto de España con planificación previa." },
    ],
  },
  {
    slug: "alquiler-van-con-conductor-galicia",
    metaTitle: "Alquiler de van y furgoneta con conductor en Galicia",
    metaDescription:
      "Alquiler de van ejecutiva y furgoneta con conductor en Galicia para 1 a 7 personas: aeropuertos, familias, directivos, tours y traslados a Oporto.",
    serviceType: "Alquiler de van con conductor",
    hero: {
      eyebrow: "Van ejecutiva · 1-7 plazas",
      title: "Alquiler de van con conductor en Galicia",
      subtitle: "Hasta siete personas y todas sus maletas en un solo vehículo. Para familias, equipos directivos y viajes que no caben en una berlina.",
      image: "/images/van-mercedes-clase-v.jpg",
      alt: "Van Mercedes Clase V negra con conductor en Galicia",
    },
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "Una berlina se queda pequeña en cuanto sois más de tres o lleváis maletas grandes. Dos coches significan dos conductores, dos horas de llegada y la mitad del grupo esperando a la otra mitad.",
          "La van ejecutiva resuelve eso. Hasta siete pasajeros en asientos cómodos, mesa o asientos enfrentados en muchos modelos, y maletero para el equipaje de todos. Es el vehículo más versátil de la flota: igual sirve para recoger a una familia en el aeropuerto que para mover a un comité de dirección durante tres días.",
          "Cuando buscas una furgoneta con conductor para personas, lo que necesitas en realidad es esto: una van tipo Mercedes Clase V o similar, con chófer profesional y el viaje resuelto de puerta a puerta.",
        ],
      },
      {
        type: "features",
        heading: "Quién la alquila",
        columns: 2,
        bg: "gray",
        items: [
          { title: "Familias y grupos de amigos", text: "Del aeropuerto al hotel con niños, sillas y maletas. Sin alquilar coche ni conducir de noche por carreteras que no conoces." },
          { title: "Equipos directivos", text: "Visitas a fábricas, clientes o sedes en varias ciudades el mismo día. El equipo trabaja y habla en el trayecto." },
          { title: "Tours privados", text: "Galicia en 3, 5 o 7 días con el mismo chófer, o una excursión de un día por las Rías Baixas o la Ribeira Sacra." },
          { title: "Traslados largos", text: "Oporto, Lisboa o Madrid hacia Galicia en un solo vehículo, con paradas cuando las necesitéis." },
        ],
      },
      {
        type: "zigzag",
        items: [
          {
            title: "La van como base de un viaje",
            paragraphs: [
              "En un viaje de varios días, la van y el chófer acompañan al grupo de principio a fin. El equipaje se queda a bordo entre hoteles, el chófer conoce los horarios de cada uno y el programa se adapta sobre la marcha.",
              "Es la fórmula de los [tours privados por Galicia con chófer](/tours-con-chofer-galicia): Santiago, las Rías Baixas, la Costa da Morte o la Ribeira Sacra sin depender de excursiones en grupo.",
            ],
            image: "/images/van-equipaje-hotel.jpg",
            alt: "Chófer cargando el equipaje de un grupo en una van frente al hotel",
          },
          {
            title: "La van en un evento",
            paragraphs: [
              "En congresos, incentivos y eventos de empresa, varias vans permiten dividir al grupo y moverse con agilidad: ponentes por un lado, dirección por otro y actividades en paralelo.",
              "Llegan donde un autocar no entra y dan una imagen cuidada desde la recogida en el aeropuerto.",
            ],
            image: "/images/flota-vans-congreso.jpg",
            alt: "Vans ejecutivas con chófer esperando a los asistentes de un evento",
          },
        ],
      },
      {
        type: "table",
        heading: "Berlina, van o minibús",
        head: ["Personas y equipaje", "Vehículo"],
        rows: [
          ["1-3 personas, equipaje normal", "Berlina ejecutiva, con [chófer privado](/chofer-privado-galicia)"],
          ["4-7 personas, o 2-3 con mucho equipaje", "Van ejecutiva"],
          ["8-19 personas", "Minibús. Mira el [alquiler de minibús con conductor](/alquiler-minibus-con-conductor-galicia)"],
        ],
      },
      {
        type: "checklist",
        heading: "Incluido en el servicio",
        bg: "gray",
        items: [
          "Conductor profesional y seguro de viajeros.",
          "Seguimiento del vuelo o del tren en las recogidas.",
          "Recibimiento con cartel en llegadas.",
          "Agua y cargadores a bordo.",
          "Sillas infantiles bajo petición.",
          "Peajes del recorrido incluidos en el precio confirmado.",
        ],
      },
    ],
    cta: {
      title: "¿Sois más de tres?",
      description: "Dime personas, equipaje, fechas y recorrido. Te confirmo vehículo y precio en 24 horas laborables.",
    },
    faqs: [
      { question: "¿Cuántas personas caben en una van con conductor?", answer: "Hasta 7 pasajeros además del conductor. Con mucho equipaje, lo cómodo es contar 5 o 6 personas por van." },
      { question: "¿Es lo mismo una furgoneta con conductor que una van?", answer: "Para transporte de personas, sí: se trata de una furgoneta de pasajeros de gama alta, tipo Mercedes Clase V o similar, con asientos individuales y conductor profesional." },
      { question: "¿Puedo alquilar la van por días para un viaje por Galicia?", answer: "Sí. Es una de las fórmulas más habituales: van y chófer a disposición durante todo el viaje, con el alojamiento del chófer incluido en el presupuesto." },
      { question: "¿Ponéis sillas para niños?", answer: "Sí, bajo petición. Indica la edad o el peso de cada niño al pedir presupuesto." },
      { question: "¿Hacéis traslados desde el aeropuerto de Oporto?", answer: "Sí. Es uno de los trayectos más habituales en van: del aeropuerto de Oporto a Vigo, Pontevedra, Santiago o A Coruña." },
    ],
  },
  {
    slug: "chofer-privado-galicia",
    metaTitle: "Chófer privado en Galicia: coche con conductor por horas",
    metaDescription:
      "Chófer privado y alquiler de coche con conductor en Galicia por horas, por días o por trayecto. Berlinas ejecutivas para directivos, viajeros y eventos.",
    serviceType: "Chófer privado y coche con conductor",
    hero: {
      eyebrow: "Chófer privado · Coche con conductor",
      title: "Chófer privado en Galicia",
      subtitle: "Un coche con conductor para ti, por horas, por días o para un solo trayecto. Tú decides la agenda; el chófer se adapta.",
      image: "/images/chofer-conduciendo-berlina.jpg",
      alt: "Chófer privado al volante de una berlina ejecutiva en Galicia",
    },
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "Hay días en los que conducir es perder el tiempo. Reuniones en tres ciudades, un vuelo a primera hora, una cena de trabajo que se alarga o una visita a Galicia en la que no quieres pelearte con el navegador, la lluvia y el aparcamiento.",
          "Un chófer privado convierte el coche en un espacio tuyo. Trabajas, llamas o descansas mientras alguien que conoce las carreteras te lleva puntual a cada sitio. Y espera lo que haga falta.",
          "Luxe Galicia ofrece coche con conductor en toda Galicia y el norte de Portugal: berlinas ejecutivas, berlinas de representación y vans para cuando sois más.",
        ],
      },
      {
        type: "features",
        heading: "Tres formas de contratarlo",
        columns: 3,
        bg: "gray",
        items: [
          { title: "Por trayecto", text: "Del aeropuerto al hotel, de Santiago a A Coruña o de Vigo a Oporto. Precio cerrado antes de reservar." },
          { title: "Por horas", text: "Un número de horas a disposición para reuniones, compras o una cena. El chófer espera entre parada y parada." },
          { title: "Por días", text: "Chófer y coche durante toda tu estancia, para viajes de negocios o vacaciones sin preocuparte de nada." },
        ],
      },
      {
        type: "table",
        heading: "Quién contrata un chófer privado en Galicia",
        head: ["Perfil", "Servicio habitual"],
        rows: [
          ["Directivo de visita", "Chófer por jornada con ruta de reuniones. Mira el [transporte para empresas](/transporte-empresas-galicia)"],
          ["Ponente o invitado de un congreso", "Recogida en el aeropuerto y coche a disposición durante el evento"],
          ["Viajero que llega a Galicia", "Traslado de aeropuerto con seguimiento del vuelo y cartel en llegadas"],
          ["Pareja o familia de vacaciones", "Excursiones de un día o viaje de varios días con el mismo chófer"],
          ["Cliente de una boda o celebración", "Coche para los novios, los padrinos o los invitados de honor"],
        ],
      },
      {
        type: "intro",
        heading: "Chófer privado, taxi o VTC: cuándo compensa cada uno",
        paragraphs: [
          "Para un trayecto corto por ciudad, sin prisa ni equipaje, un taxi es lo más práctico. Fuera de las grandes ciudades, la oferta de VTC en Galicia es escasa y no siempre hay un coche disponible cuando lo necesitas, sobre todo de madrugada o en aeropuertos pequeños.",
          "El chófer privado compensa cuando necesitas certeza: saber quién te recoge, en qué vehículo y a qué hora, que te espere si el vuelo se retrasa y que encadene varias paradas sin pedir otro coche en cada una. Tienes la comparación detallada en la guía de [Uber, taxi o chófer en Santiago](/guias/uber-taxi-chofer-santiago-de-compostela).",
        ],
      },
      {
        type: "checklist",
        heading: "Lo que esperas de un buen chófer, y lo que tienes",
        bg: "gray",
        items: [
          "Puntualidad: llega antes de la hora, no a la hora.",
          "Discreción absoluta sobre conversaciones, llamadas y documentos.",
          "Conocimiento de rutas, accesos y aparcamientos de cada ciudad.",
          "Vehículo limpio, revisado y con agua y cargadores a bordo.",
          "Seguimiento de vuelos y trenes: si te retrasas, espera.",
          "Inglés bajo petición para clientes internacionales.",
        ],
      },
      { type: "fleet", heading: "Vehículos disponibles" },
    ],
    cta: {
      title: "¿Cuándo necesitas el chófer?",
      description: "Dime fecha, horario y recorrido. Te confirmo vehículo y precio en 24 horas laborables, o antes por WhatsApp.",
    },
    faqs: [
      { question: "¿Cuánto cuesta un chófer privado por horas?", answer: "Depende del vehículo, el número de horas, los kilómetros y el horario. Para servicios por horas se fija un mínimo de horas a disposición. Pide presupuesto con tu agenda y recibes un precio cerrado." },
      { question: "¿Qué diferencia hay entre un chófer privado y una VTC?", answer: "Con una VTC pides un trayecto y te asigna el coche disponible. Con un chófer privado reservas con antelación un conductor y un vehículo concretos, que te esperan y se adaptan a tu agenda." },
      { question: "¿Puedo contratar un coche con conductor para varios días?", answer: "Sí. Chófer y vehículo a disposición durante toda la estancia, con alojamiento del chófer incluido en el presupuesto si el viaje es itinerante." },
      { question: "¿En qué ciudades hay servicio de chófer privado?", answer: "En toda Galicia, con salidas habituales desde A Coruña, Santiago y Vigo, y también en Oporto y el norte de Portugal." },
      { question: "¿Con cuánta antelación hay que reservar?", answer: "Normalmente basta con 24-48 horas. Para fechas de alta demanda, como grandes eventos o el verano, conviene reservar antes." },
    ],
  },
];

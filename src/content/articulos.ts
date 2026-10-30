import type { Guide } from "./types";

export const ARTICULOS: Guide[] = [
  // 1 · Año Santo 2027
  {
    slug: "ano-santo-2027-transporte-grupos",
    category: "Artículo",
    title: "Año Santo 2027: cómo organizar el transporte de grupos y eventos en Galicia",
    metaTitle: "Xacobeo 2027: cómo organizar el transporte de grupos y eventos en Galicia",
    metaDescription:
      "Guía para agencias, empresas y organizadores: fechas clave del Año Santo 2027, cómo afecta al transporte en Santiago y Galicia, cuándo reservar y cómo mover grupos sin colapsos.",
    image: "/images/tours-santiago.jpg",
    alt: "Catedral de Santiago de Compostela, centro del Año Santo 2027",
    readMinutes: 9,
    date: "2026-10-31",
    stats: [{"value": "31/12/2026", "label": "apertura de la Puerta Santa"}, {"value": "25/07/2027", "label": "Día del Apóstol, en domingo"}, {"value": "21-28 mar", "label": "Semana Santa 2027"}, {"value": "2032", "label": "próximo Año Santo"}],
    intro: [
      "2027 es Año Santo Compostelano. Pasa cuando el 25 de julio, día del Apóstol, cae en domingo, y no se repetirá hasta 2032. Para Santiago y para toda Galicia significa una cosa: más grupos, más eventos y mucha más presión sobre hoteles y transporte.",
      "Si organizas una peregrinación, un viaje de grupo, un congreso o un evento de empresa en Galicia en 2027, esta guía te ahorra el error más caro del Año Santo: dejar el transporte para el final.",
    ],
    summary: [
      "El Año Santo se abre con la Puerta Santa el 31 de diciembre de 2026 y dura todo 2027.",
      "Las fechas críticas son Semana Santa (21-28 de marzo de 2027), julio, agosto y el 25 de julio.",
      "La flota de autocares y vans de Galicia es limitada: en las fechas punta se agota meses antes.",
      "Alojar al grupo fuera de Santiago (A Coruña, Rías Baixas) y moverlo con chófer es la solución más eficaz.",
      "Para grupos grandes, reserva el transporte en cuanto tengas fechas, no cuando tengas el programa cerrado.",
    ],
    sections: [
      {
        heading: "Qué es el Año Santo y por qué cambia la logística",
        image: {"src": "/images/catedral-santiago-alameda.jpg", "alt": "Catedral de Santiago de Compostela desde la Alameda"},
        paragraphs: [
          "El Año Santo Compostelano, o Xacobeo, se celebra los años en que el 25 de julio cae en domingo. Durante todo el año, la Puerta Santa de la catedral permanece abierta y Santiago se convierte en destino de peregrinaciones organizadas, grupos parroquiales, colegios, asociaciones y empresas que aprovechan el tirón para hacer el Camino o celebrar eventos.",
          "A la demanda del peregrino individual se suma la de los grupos organizados, que son justo los que necesitan transporte: llegar al inicio de etapa, volver desde Santiago, moverse entre hoteles y visitas. Y eso ocurre sobre una flota que en Galicia no es enorme: la mayoría de empresas de transporte con chófer son pequeñas.",
        ],
      },
      {
        heading: "Fechas clave de 2027",
        table: {
          head: ["Fecha", "Qué pasa", "Impacto en el transporte"],
          rows: [
            ["31 dic 2026", "Apertura de la Puerta Santa", "Santiago lleno en Nochevieja; accesos al centro restringidos"],
            ["21-28 mar 2027", "Semana Santa", "Primer gran pico de grupos y peregrinos"],
            ["Mayo-junio", "Temporada de grupos y congresos", "Alta demanda de autocares y minibuses"],
            ["25 jul 2027", "Día del Apóstol (domingo)", "Máximo del año: ciudad colapsada, reservas imprescindibles"],
            ["Julio-agosto", "Temporada alta", "Hoteles y flota al límite en toda Galicia"],
            ["Sept-oct", "Segunda temporada de grupos", "Buena época, todavía con mucha demanda"],
          ],
        },
        after: [
          "Las fechas de apertura y clausura las fija la Catedral y conviene confirmarlas en su agenda oficial a medida que se acerquen.",
        ],
      },
      {
        heading: "Los tres problemas de transporte que vas a encontrar",
        image: {"src": "/images/celebracion-multitud-galicia.jpg", "alt": "Multitud en una celebración en Galicia", "caption": "En las fechas grandes, los accesos y la capacidad de transporte son el cuello de botella."},
        list: [
          "Capacidad: en fechas punta los autocares y las vans ejecutivas se reservan con meses de antelación. Quien llega tarde se queda sin vehículo o paga lo que le pidan.",
          "Accesos: el casco histórico de Santiago tiene el tráfico restringido y en los días grandes se amplían los cortes. Los autocares solo pueden subir y bajar pasajeros en puntos concretos.",
          "Alojamiento disperso: con Santiago lleno, muchos grupos se alojan en A Coruña, Pontevedra, las Rías Baixas o incluso Oporto. Eso convierte cada día del programa en una pequeña operación de transporte.",
        ],
      },
      {
        heading: "Cómo planificarlo bien",
        list: [
          "Reserva el transporte en cuanto tengas fechas y número aproximado de personas. Los ajustes se hacen después.",
          "Valora alojar al grupo fuera de Santiago: A Coruña está a 50 minutos y las Rías Baixas a una hora, con más disponibilidad y mejor precio.",
          "Elige bien el aeropuerto: Santiago tendrá más demanda que nunca; A Coruña, Vigo y Oporto son alternativas reales con traslado por carretera.",
          "Evita llegar a Santiago el 25 de julio con un grupo grande si no tienes un motivo concreto: el día anterior o el posterior se disfruta igual y se mueve mucho mejor.",
          "Pide al proveedor que te confirme los puntos de subida y bajada en Santiago antes del viaje.",
          "Ten un único responsable del transporte para todo el viaje: en Año Santo los imprevistos se multiplican.",
        ],
        tip: "Si tu grupo va a hacer el Camino, separa dos necesidades: el transporte del grupo (aeropuerto, inicio de etapa, regreso) y el apoyo durante las etapas (vehículo de apoyo, equipaje). Reservar ambos con el mismo proveedor simplifica muchísimo la coordinación.",
      },
      {
        heading: "Qué vehículo y con cuánta antelación",
        table: {
          head: ["Tipo de grupo", "Vehículo recomendado", "Antelación en Año Santo"],
          rows: [
            ["Familia o directivos (1-3)", "Berlina ejecutiva", "2-4 semanas; en julio, más"],
            ["Grupo reducido (4-7)", "Van ejecutiva", "1-2 meses"],
            ["Peregrinación o grupo mediano (8-19)", "Minibús", "2-4 meses"],
            ["Grupo grande o congreso (20-55+)", "Uno o varios autocares", "4-6 meses o más"],
          ],
        },
      },
      {
        heading: "Congresos y eventos de empresa en 2027",
        paragraphs: [
          "Muchas sociedades científicas, asociaciones y empresas eligen Santiago y Galicia en 2027 precisamente por el Año Santo. Si tu evento coincide con fechas de alta afluencia, el plan de transporte debe contar con más tiempo en cada trayecto, puntos de subida y bajada acordados y lanzaderas entre hoteles dispersos.",
          "La combinación que mejor funciona: sesiones en el Palacio de Congresos o en la Cidade da Cultura, alojamiento repartido entre Santiago y A Coruña, y una flota coordinada por una sola persona.",
        ],
      },
    ],
    service: {
      title: "¿Tienes un grupo o un evento en Galicia en 2027?",
      text: "Reserva ahora la flota y ajusta los detalles después. En Año Santo, quien reserva primero elige.",
      href: "/presupuesto",
      label: "Pedir presupuesto",
    },
    faqs: [
      { question: "¿Cuándo empieza y termina el Año Santo 2027?", answer: "Se abre con la apertura de la Puerta Santa de la catedral de Santiago el 31 de diciembre de 2026 y dura todo 2027. La fecha de clausura la confirma la Catedral." },
      { question: "¿Por qué 2027 es Año Santo?", answer: "Porque el 25 de julio, festividad del Apóstol Santiago, cae en domingo. El siguiente será en 2032." },
      { question: "¿Con cuánta antelación debo reservar el transporte para un grupo?", answer: "Para grupos grandes en fechas punta, de 4 a 6 meses. Para grupos pequeños, de 1 a 2 meses. Lo importante es asegurar la flota en cuanto tengas fechas." },
      { question: "¿Es buena idea alojarse fuera de Santiago en Año Santo?", answer: "Sí, especialmente para grupos. A Coruña o las Rías Baixas están a una hora o menos y ofrecen más disponibilidad. Con un vehículo con chófer, el trayecto diario no es un problema." },
    ],
    related: [
      { title: "Transporte para el Camino de Santiago", href: "/transporte-camino-de-santiago" },
      { title: "Traslados desde Santiago", href: "/traslados-desde-santiago" },
      { title: "Palacio de Congresos de Santiago", href: "/guias/transporte-palacio-congresos-santiago" },
      { title: "Transporte para eventos en Galicia", href: "/transporte-eventos-galicia" },
    ],
  },

  // 2 · Fam trip
  {
    slug: "fam-trip-galicia-como-organizarlo",
    category: "Artículo",
    title: "Fam trip en Galicia: cómo organizarlo para que el agente vuelva queriendo vender el destino",
    metaTitle: "Fam trip en Galicia: cómo organizarlo para que funcione | Guía práctica",
    metaDescription:
      "Cómo organizar un fam trip en Galicia para agentes de viajes, organizadores MICE o prensa: objetivos, programa tipo de 3 días, logística, errores habituales y cómo medir el resultado.",
    image: "/images/pazo-galicia-jardines.jpg",
    alt: "Finca preparada para la presentación de un fam trip en Galicia",
    readMinutes: 8,
    date: "2026-10-31",
    stats: [{"value": "8-16", "label": "participantes ideales"}, {"value": "3 días", "label": "formato más habitual"}, {"value": "< 2 h", "label": "de carretera al día"}, {"value": "6 meses", "label": "de seguimiento posterior"}],
    intro: [
      "Un fam trip (viaje de familiarización) no es un viaje de regalo. Es una herramienta de venta: llevas a agentes de viajes, organizadores de eventos o periodistas a conocer un destino para que después lo vendan, lo recomienden o escriban sobre él.",
      "Galicia tiene todo para que un fam trip funcione: gastronomía, paisaje, sedes con carácter y distancias cortas. Pero un mal fam trip deja peor imagen que no hacer ninguno. Esta guía te cuenta cómo hacerlo bien.",
    ],
    summary: [
      "Define antes qué tiene que vender el agente al volver: el programa se diseña para eso.",
      "No más de 2 horas de carretera al día: el tiempo en el autobús es tiempo perdido.",
      "Grupos de 8 a 16 personas en minibús o vans funcionan mejor que un autocar medio vacío.",
      "Mezcla visitas técnicas (sedes, hoteles) con experiencias que el agente pueda contar.",
      "La logística ES el mensaje: si el transporte falla, el agente piensa que el destino falla.",
    ],
    sections: [
      {
        heading: "Qué es un fam trip y para qué sirve",
        paragraphs: [
          "Un fam trip reúne a profesionales que venden o recomiendan destinos (agencias de viajes, organizadores MICE, turoperadores, prensa especializada) para que conozcan en primera persona hoteles, sedes, proveedores y experiencias.",
          "En Galicia, las instituciones turísticas y el sector MICE organizan fam trips con hosted buyers que visitan A Coruña, Santiago y Vigo y se reúnen con empresas locales. Pero cualquier hotel, DMC o grupo de proveedores puede organizar el suyo.",
        ],
      },
      {
        heading: "Define el objetivo antes que el programa",
        list: [
          "¿Quieres que vendan Galicia para incentivos? Enseña pazos, bodegas, experiencias en barco y hoteles con capacidad para grupos.",
          "¿Quieres congresos? Prioriza sedes (Palexco, Palacio de Congresos de Santiago, Cidade da Cultura), plazas hoteleras cerca y conectividad aérea.",
          "¿Quieres viajes a medida de alto nivel? Paradores, hoteles boutique, gastronomía de autor y tours con chófer.",
          "¿Quieres prensa? Historias y experiencias únicas que se puedan contar y fotografiar.",
        ],
        tip: "Escribe en una frase qué debe poder vender el agente al volver. Si una visita no ayuda a esa frase, sobra.",
      },
      {
        heading: "Programa tipo de 3 días",
        image: {"src": "/images/bodega-albarino-rias-baixas.jpg", "alt": "Bodega de albariño en las Rías Baixas, parada habitual de un fam trip"},
        table: {
          head: ["Día", "Programa", "Transporte"],
          rows: [
            ["Día 1", "Llegada por Santiago u Oporto · check-in · cena de bienvenida", "Recogidas por franjas de vuelo, cartelería del fam trip"],
            ["Día 2", "Santiago o A Coruña: site inspection de sede y hoteles · comida · experiencia de tarde", "Minibús o vans a disposición todo el día"],
            ["Día 3", "Rías Baixas: bodega de albariño, barco por la ría o pazo · comida", "Ruta con paradas, máximo 2 h de carretera"],
            ["Salida", "Workshop o reunión de cierre · traslado al aeropuerto", "Salidas escalonadas según vuelos"],
          ],
        },
      },
      {
        heading: "Logística: donde se gana o se pierde un fam trip",
        image: {"src": "/images/minibus-interior.jpg", "alt": "Interior de un minibús con chófer para un grupo de agentes de viajes"},
        paragraphs: [
          "Los participantes de un fam trip son profesionales que organizan viajes. Detectan al momento un retraso, un vehículo inadecuado o una espera innecesaria. Y lo trasladan al destino: si el transporte falla, piensan que Galicia es complicada.",
        ],
        list: [
          "Usa vehículos ejecutivos y del tamaño justo: un minibús de 19 plazas para 14 personas, no un autocar de 55.",
          "Ten el mismo chófer y vehículo todo el viaje: genera confianza y simplifica la coordinación.",
          "Agrupa las llegadas por franjas horarias y ten un vehículo de reserva para retrasos.",
          "Calcula tiempos reales: Galicia es corta en el mapa, pero las carreteras secundarias son lentas.",
          "Deja tiempo libre y de networking: es cuando los agentes hablan entre ellos y con los proveedores.",
        ],
      },
      {
        heading: "Errores que vemos a menudo",
        list: [
          "Programa sobrecargado: diez visitas al día y ninguna se recuerda.",
          "Demasiadas horas en carretera para ver algo que se puede enseñar más cerca.",
          "Todos los hoteles iguales: el agente necesita ver variedad para poder vender.",
          "Olvidar la lluvia: sin plan B a cubierto, un día gris arruina la percepción del destino.",
          "Ningún seguimiento después: el fam trip es el principio de la venta, no el final.",
        ],
      },
      {
        heading: "Cómo medir si ha funcionado",
        list: [
          "Solicitudes de presupuesto de los participantes en los 6 meses siguientes.",
          "Programas o eventos confirmados atribuibles al fam trip.",
          "Valoración de los participantes recogida al final del viaje.",
          "Publicaciones y menciones, si el grupo incluía prensa.",
        ],
      },
    ],
    service: {
      title: "¿Organizas un fam trip en Galicia?",
      text: "Minibuses y vans ejecutivas con el mismo chófer todo el viaje, recogidas por franjas de vuelo y un único responsable de la logística.",
      href: "/agencias-mice",
      label: "Transporte para agencias",
    },
    faqs: [
      { question: "¿Cuántos días debe durar un fam trip?", answer: "Lo habitual es entre 2 y 4 días. Tres días permiten enseñar dos zonas de Galicia sin sobrecargar el programa." },
      { question: "¿Cuántos participantes es lo ideal?", answer: "Entre 8 y 16. Permite atención personalizada, networking real y moverse en minibús o vans, que dan mejor imagen que un autocar." },
      { question: "¿Qué aeropuertos conviene usar?", answer: "Santiago para participantes nacionales y Oporto para internacionales. A Coruña y Vigo son buenas alternativas según el programa." },
      { question: "¿Quién debería organizarlo?", answer: "Un DMC local como Suunia para el programa y los proveedores, y un proveedor de transporte con flota con chófer para la logística." },
    ],
    related: [
      { title: "Para agencias MICE", href: "/agencias-mice" },
      { title: "Organizar un evento en Galicia desde fuera", href: "/guias/organizar-evento-en-galicia-agencias" },
      { title: "Transporte para incentivos", href: "/transporte-incentivos-galicia" },
    ],
  },

  // 5 · Oporto a Vigo
  {
    slug: "oporto-vigo-tren-autobus-traslado",
    category: "Artículo",
    title: "De Oporto a Vigo: tren, autobús, coche o traslado privado. Qué compensa",
    metaTitle: "De Oporto a Vigo: tren, autobús o traslado privado | Comparativa 2026",
    metaDescription:
      "Cómo ir de Oporto (aeropuerto o ciudad) a Vigo: horarios y duración del tren, autobuses desde el aeropuerto, coche de alquiler y traslado privado. Comparativa clara y consejos.",
    image: "/images/chofer-carretera-galicia.jpg",
    alt: "Chófer en la autopista entre Oporto y Vigo",
    readMinutes: 7,
    date: "2026-10-31",
    stats: [{"value": "~150 km", "label": "entre Oporto y Vigo"}, {"value": "1 h 35 min", "label": "por carretera desde el aeropuerto"}, {"value": "~2", "label": "trenes directos al día"}, {"value": "-1 h", "label": "Portugal respecto a España"}],
    intro: [
      "Oporto y Vigo están a unos 150 kilómetros y muy conectados por carretera. Aun así, quien aterriza en el aeropuerto de Oporto con destino Vigo se encuentra con una duda: ¿tren, autobús, coche o traslado privado?",
      "Aquí tienes la comparación sin rodeos, con los datos que importan: cuánto se tarda de verdad, desde dónde sale cada opción y cuándo compensa cada una.",
    ],
    summary: [
      "Por carretera, del aeropuerto de Oporto a Vigo se tarda alrededor de 1 h 35 min.",
      "El tren directo sale de Oporto-Campanhã (no del aeropuerto) y solo hay unas dos salidas diarias.",
      "Hay autobuses directos desde el aeropuerto varias veces al día: la opción más barata para una persona.",
      "Para 3 o más personas, viajes de empresa o mucho equipaje, el traslado privado suele compensar.",
      "Ojo: Portugal tiene una hora menos que España. Revisa bien los horarios.",
    ],
    sections: [
      {
        heading: "Comparativa rápida",
        table: {
          head: ["Opción", "Desde", "Duración aprox.", "Ventaja", "Inconveniente"],
          rows: [
            ["Traslado privado", "Aeropuerto o cualquier dirección", "1 h 35 min", "Puerta a puerta, espera si el vuelo se retrasa", "Precio por vehículo, no por persona"],
            ["Autobús", "Aeropuerto de Oporto", "1 h 45 min - 2 h 15 min", "Barato y directo desde el aeropuerto", "Horarios fijos; sin margen si el vuelo se retrasa"],
            ["Tren", "Estación de Campanhã", "~2 h 20 min - 2 h 35 min", "Cómodo una vez en la estación", "Pocas salidas al día y hay que ir antes a Campanhã"],
            ["Coche de alquiler", "Aeropuerto de Oporto", "1 h 35 min", "Libertad", "Recargo por devolverlo en otro país y peajes electrónicos"],
          ],
        },
        after: ["Duraciones orientativas en condiciones normales de tráfico y según los horarios publicados por los operadores. Comprueba siempre los horarios vigentes."],
      },
      {
        heading: "En tren: el Celta Oporto–Vigo",
        paragraphs: [
          "El tren directo entre Oporto y Vigo, conocido como Celta, une la estación de Oporto-Campanhã con Vigo-Guixar. Según los horarios publicados, hay unas dos salidas diarias en cada sentido y el viaje dura en torno a 2 h 20 min - 2 h 35 min.",
          "La pega para quien llega en avión: el tren no sale del aeropuerto. Primero hay que llegar a Campanhã en metro o taxi, y cuadrar el vuelo con uno de los pocos trenes del día. Si el vuelo se retrasa, el siguiente tren puede ser al día siguiente.",
        ],
        tip: "Portugal tiene una hora menos que España. Un tren que sale de Oporto a las 19:10, hora portuguesa, llega a Vigo pasadas las 22:30, hora española.",
      },
      {
        heading: "En autobús desde el aeropuerto",
        paragraphs: [
          "Varias compañías (entre ellas Alsa, FlixBus y otras líneas internacionales) conectan el aeropuerto de Oporto con Vigo con salidas repartidas a lo largo del día. El trayecto ronda 1 h 45 min - 2 h 15 min y los precios, según la antelación, suelen moverse entre unos 10 y 25 euros por persona.",
          "Es la opción más económica para una persona con poco equipaje y un vuelo puntual. Su punto débil es la falta de flexibilidad: si tu vuelo se retrasa y pierdes el autobús, toca esperar al siguiente.",
        ],
      },
      {
        heading: "En coche de alquiler",
        paragraphs: [
          "Alquilar un coche en el aeropuerto da libertad, pero tiene letra pequeña: muchas compañías cobran un recargo por devolver el coche en otro país, y las autopistas portuguesas tienen peaje electrónico que hay que tener resuelto antes de circular.",
          "Además, después de un vuelo largo, conducir hora y media por un país que no conoces no es el mejor plan, sobre todo si vas a trabajar al llegar.",
        ],
      },
      {
        heading: "Traslado privado con chófer",
        image: {"src": "/images/van-ejecutiva-galicia.jpg", "alt": "Van ejecutiva con chófer para el trayecto Oporto–Vigo"},
        paragraphs: [
          "El chófer sigue tu vuelo, te espera en llegadas con tu nombre, carga el equipaje y te deja en la puerta del hotel, de la empresa o del recinto ferial. Sin transbordos, sin horarios y sin pensar en peajes.",
          "El precio es por vehículo, así que se reparte entre los viajeros: para tres o más personas, o para viajes de empresa en los que el tiempo vale dinero, se acerca mucho más de lo que parece a las otras opciones.",
        ],
      },
      {
        heading: "¿Cuál te conviene?",
        list: [
          "Viajas solo, sin prisa y con poco equipaje: autobús desde el aeropuerto.",
          "Ya estás en el centro de Oporto y te cuadra el horario: tren desde Campanhã.",
          "Vas a moverte varios días por Galicia y Portugal: coche de alquiler (revisa el recargo internacional).",
          "Viaje de empresa, familia, grupo o llegada tarde: traslado privado.",
          "Feria en IFEVI o congreso en Vigo: traslado privado o lanzadera organizada para el grupo.",
        ],
      },
    ],
    service: {
      title: "Del aeropuerto de Oporto a Vigo, puerta a puerta",
      text: "Berlinas, vans ejecutivas y minibuses con seguimiento de vuelo. Consulta los precios orientativos.",
      href: "/traslados-desde-vigo",
      label: "Ver traslados Oporto–Vigo",
    },
    faqs: [
      { question: "¿Cuánto se tarda de Oporto a Vigo?", answer: "Por carretera, alrededor de 1 h 35 min desde el aeropuerto. En autobús, entre 1 h 45 min y 2 h 15 min. En tren, unas 2 h 20 min - 2 h 35 min desde la estación de Campanhã." },
      { question: "¿Hay tren directo del aeropuerto de Oporto a Vigo?", answer: "No. El tren Oporto–Vigo sale de la estación de Campanhã, a la que hay que llegar antes desde el aeropuerto en metro o taxi." },
      { question: "¿Cuántos trenes hay al día entre Oporto y Vigo?", answer: "Según los horarios publicados, alrededor de dos trenes directos diarios en cada sentido. Conviene confirmarlo en Renfe o Comboios de Portugal." },
      { question: "¿Hay diferencia horaria entre Oporto y Vigo?", answer: "Sí. Portugal tiene una hora menos que España durante todo el año." },
    ],
    related: [
      { title: "Oporto ⇄ Galicia con chófer", href: "/oporto-galicia" },
      { title: "Traslados desde Vigo", href: "/traslados-desde-vigo" },
      { title: "Cómo ir de Oporto a Galicia", href: "/guias/oporto-galicia-como-llegar" },
      { title: "Transporte a IFEVI (Vigo)", href: "/guias/transporte-ifevi-vigo" },
    ],
  },

  // 6 · Camino Portugués por la costa
  {
    slug: "camino-portugues-costa-etapas-grupos",
    category: "Artículo",
    title: "Camino Portugués por la costa: etapas y logística para grupos",
    metaTitle: "Camino Portugués por la costa: etapas, km y logística para grupos",
    metaDescription:
      "Camino Portugués por la costa de Oporto a Santiago: distancia, etapas por tramos, opción corta desde Baiona y cómo organizar transporte, vehículo de apoyo y regreso para grupos.",
    image: "/images/parador-baiona.jpg",
    alt: "Baiona, etapa del Camino Portugués por la costa",
    readMinutes: 9,
    date: "2026-10-31",
    stats: [{"value": "~270 km", "label": "de Oporto a Santiago"}, {"value": "12-13", "label": "etapas desde Oporto"}, {"value": "~120 km", "label": "desde Baiona"}, {"value": "6", "label": "etapas desde Baiona"}],
    intro: [
      "El Camino Portugués por la costa es una de las rutas jacobeas que más crece: sale de Oporto, sube pegado al Atlántico por el norte de Portugal, entra en Galicia por A Guarda y se une al Camino Portugués central en Redondela antes de llegar a Santiago.",
      "Para un peregrino solo, la logística es sencilla. Para un grupo, no tanto: hay que llegar a Oporto, mover equipajes, cruzar el Miño, apoyar a quien no puede con una etapa y volver desde Santiago. Esta guía te lo ordena.",
    ],
    summary: [
      "Distancia total: entre unos 265 y 280 km según la variante, normalmente en 12 o 13 etapas.",
      "Opción corta: desde Baiona, unos 120 km en 6 etapas, suficiente para obtener la Compostela.",
      "El Camino de la costa se une al Portugués central en Redondela, antes de Pontevedra.",
      "Para grupos, la clave es el vehículo de apoyo y el transporte de equipaje entre alojamientos.",
      "Regreso: de Santiago al aeropuerto de Oporto hay unas 2 h 20 min por carretera.",
    ],
    sections: [
      {
        heading: "El recorrido por tramos",
        paragraphs: [
          "Las guías no coinciden en el número exacto de etapas, porque cada grupo las adapta a su ritmo y a los alojamientos. Esta es la estructura por tramos más habitual:",
        ],
        table: {
          head: ["Tramo", "Recorrido", "Qué tener en cuenta"],
          rows: [
            ["Oporto → Viana do Castelo", "Oporto o Matosinhos, Vila do Conde, Póvoa de Varzim, Esposende", "Etapas llanas junto al mar; la primera suele ser larga"],
            ["Viana do Castelo → A Guarda", "Caminha y cruce del río Miño", "El cruce en barco depende de la marea y del servicio; ten un plan B"],
            ["A Guarda → Vigo", "Oia, Baiona, Nigrán", "Costa gallega espectacular; Baiona, inicio de la opción corta"],
            ["Vigo → Pontevedra", "Redondela (unión con el Camino central), Arcade", "A partir de aquí aumenta mucho el número de peregrinos"],
            ["Pontevedra → Santiago", "Caldas de Reis, Padrón", "Tramo final compartido con el Camino Portugués central"],
          ],
        },
      },
      {
        heading: "La opción corta: desde Baiona",
        paragraphs: [
          "Si el grupo no tiene dos semanas, empezar en Baiona es la alternativa más popular: unos 120 km hasta Santiago en unas 6 etapas, con la parte gallega más bonita de la costa y suficiente distancia para obtener la Compostela, que exige recorrer a pie al menos los últimos 100 km.",
          "Logísticamente es muy cómodo: Baiona está a menos de una hora del aeropuerto de Vigo y a unas 2 horas del de Oporto.",
        ],
      },
      {
        heading: "Logística para grupos",
        image: {"src": "/images/minibus-galicia.jpg", "alt": "Minibús de apoyo para un grupo de peregrinos"},
        list: [
          "Llegada: recogida en el aeropuerto de Oporto y traslado a Oporto, Matosinhos o el punto de inicio elegido. Si empezáis en Baiona, mejor por Vigo u Oporto.",
          "Equipaje: el grupo camina con mochila ligera y el equipaje viaja en vehículo entre alojamientos.",
          "Vehículo de apoyo: una van o minibús que acompaña al grupo, recoge a quien lo necesite y resuelve los tramos sin alojamiento cercano.",
          "Cruce del Miño: si el barco entre Caminha y A Guarda no opera, el vehículo de apoyo resuelve el cruce por carretera.",
          "Llegada a Santiago: recogida al final de la última etapa y traslado al hotel, con acceso coordinado al casco histórico.",
          "Regreso: a los aeropuertos de Santiago, Vigo u Oporto, o extensión a Fisterra.",
        ],
        tip: "Para grupos con niveles distintos, el vehículo de apoyo es lo que permite que todos terminen el Camino juntos. Es la diferencia entre un viaje de grupo y un grupo que se desmonta en el tercer día.",
      },
      {
        heading: "Qué vehículo necesita tu grupo",
        table: {
          head: ["Tamaño del grupo", "Apoyo recomendado"],
          rows: [
            ["4-7 peregrinos", "Una van ejecutiva para apoyo y equipaje"],
            ["8-16 peregrinos", "Minibús de apoyo (equipaje en el maletero o en vehículo aparte)"],
            ["17-30 peregrinos", "Minibús de apoyo + vehículo para equipaje"],
            ["Grupos grandes", "Autocar para llegada y regreso + vehículos de apoyo por etapas"],
          ],
        },
      },
      {
        heading: "Mejor época",
        paragraphs: [
          "Primavera y principios de otoño son ideales: buen tiempo y menos calor que en pleno verano. En julio y agosto la costa está más concurrida y los alojamientos se llenan, y en 2027, Año Santo, la demanda será mayor durante todo el año.",
        ],
      },
    ],
    service: {
      title: "Transporte para grupos del Camino",
      text: "Llegada desde Oporto, vehículo de apoyo, equipaje entre etapas y regreso desde Santiago, coordinado por un solo responsable.",
      href: "/transporte-camino-de-santiago",
      label: "Ver transporte para el Camino",
    },
    faqs: [
      { question: "¿Cuántos kilómetros tiene el Camino Portugués por la costa?", answer: "Entre unos 265 y 280 km desde Oporto hasta Santiago, según la variante y el punto exacto de salida." },
      { question: "¿Cuántas etapas tiene?", answer: "Normalmente entre 12 y 13 etapas desde Oporto. Desde Baiona, unas 6 etapas." },
      { question: "¿Se puede obtener la Compostela empezando en Baiona?", answer: "Sí. Desde Baiona hay unos 120 km, por encima de los 100 km mínimos que se exigen a pie." },
      { question: "¿Dónde se une con el Camino Portugués central?", answer: "En Redondela, antes de Arcade y Pontevedra." },
    ],
    related: [
      { title: "Transporte para el Camino de Santiago", href: "/transporte-camino-de-santiago" },
      { title: "Guía: transporte en el Camino de Santiago", href: "/guias/transporte-camino-de-santiago" },
      { title: "Oporto ⇄ Galicia", href: "/oporto-galicia" },
      { title: "Año Santo 2027: transporte de grupos", href: "/guias/ano-santo-2027-transporte-grupos" },
    ],
  },

  // 3 · Viaje de incentivos
  {
    slug: "viaje-incentivos-galicia",
    category: "Artículo",
    title: "Viaje de incentivos en Galicia: qué funciona, qué no y cómo mover al grupo",
    metaTitle: "Viaje de incentivos en Galicia: qué funciona y cómo organizarlo",
    metaDescription:
      "Cómo diseñar un viaje de incentivos en Galicia que motive de verdad: experiencias que funcionan, errores habituales, programa tipo de 3 días y cómo organizar el transporte del grupo.",
    image: "/images/pazo-eventos-corporativos.jpg",
    alt: "Pazo gallego preparado para un viaje de incentivos",
    readMinutes: 8,
    date: "2026-10-31",
    stats: [{"value": "3 días", "label": "formato más habitual"}, {"value": "< 2 h", "label": "de carretera al día"}, {"value": "may-oct", "label": "mejor temporada"}, {"value": "1", "label": "chófer para todo el programa"}],
    intro: [
      "Un viaje de incentivos es un premio. Tu cliente quiere que sus mejores comerciales, distribuidores o empleados vuelvan contando lo que han vivido y con ganas de ganarse el siguiente. Si vuelven hablando del autobús, algo ha fallado.",
      "Galicia funciona muy bien para incentivos: es auténtica, se come de maravilla, no está masificada y tiene experiencias que no se encuentran en otros destinos. Esta guía te cuenta qué funciona, qué no y cómo mover al grupo sin que la logística se coma la experiencia.",
    ],
    summary: [
      "Lo que más funciona: gastronomía de producto, el mar, los pazos y la Ribeira Sacra.",
      "El enemigo número uno: demasiadas horas de carretera. Elige una o dos zonas, no cinco.",
      "Un plan B a cubierto para cada día: en Galicia llueve, y eso no puede estropear el premio.",
      "El transporte forma parte de la experiencia: vehículos ejecutivos y el mismo chófer todo el viaje.",
      "Para grupos de 10 a 20, varias vans dan más flexibilidad que un autocar.",
    ],
    sections: [
      {
        heading: "Lo que funciona en Galicia",
        image: {"src": "/images/marisco-galicia.jpg", "alt": "Bandeja de marisco gallego en una comida de incentivo"},
        list: [
          "Gastronomía de producto: marisco en las Rías Baixas, pulpo, carne gallega y restaurantes con estrella Michelin.",
          "El mar: salida en barco privado por la ría, visita a una batea de mejillón o navegación a vela.",
          "Vino: albariño en las Rías Baixas y mencía en la Ribeira Sacra, con catas en bodegas familiares.",
          "Pazos: cenas de gala y eventos en casas señoriales con jardines centenarios.",
          "Paisajes que impresionan: cañón del Sil, Costa da Morte, faro de Fisterra al atardecer.",
          "Santiago de Compostela: la visita que todo el mundo quiere poder contar.",
        ],
      },
      {
        heading: "Lo que no funciona",
        list: [
          "Querer enseñar toda Galicia en tres días: el grupo pasa el viaje en el autobús.",
          "Restaurantes turísticos con menú de grupo: el incentivo tiene que sentirse exclusivo.",
          "No tener plan B por la lluvia: una actividad al aire libre sin alternativa es un riesgo.",
          "Un autocar grande para un grupo pequeño: da sensación de excursión, no de premio.",
          "Horarios rígidos: el mejor momento del viaje suele ser la sobremesa que nadie había planificado.",
        ],
        tip: "Regla práctica: no más de dos horas de carretera al día, repartidas en trayectos de menos de una hora entre paradas.",
      },
      {
        heading: "Programa tipo de 3 días",
        image: {"src": "/images/veleros-ria-galicia.jpg", "alt": "Veleros navegando por la ría durante un incentivo"},
        table: {
          head: ["Día", "Programa", "Movilidad"],
          rows: [
            ["Día 1", "Llegada a Santiago · paseo por el casco histórico · cena de bienvenida", "Recogida en aeropuerto con cartelería de la empresa"],
            ["Día 2", "Rías Baixas: barco por la ría, comida de marisco, bodega de albariño · cena en un pazo", "Vans o minibús a disposición todo el día"],
            ["Día 3", "Mañana libre o actividad en Santiago · comida de despedida · salida", "Traslados escalonados al aeropuerto"],
          ],
        },
        after: ["Con un día más, la Ribeira Sacra o la Costa da Morte completan el programa sin repetir."],
      },
      {
        heading: "Cómo mover al grupo",
        image: {"src": "/images/cena-gala-evento-galicia.jpg", "alt": "Salón preparado para la cena de un viaje de incentivo"},
        table: {
          head: ["Tamaño del grupo", "Opción recomendada", "Por qué"],
          rows: [
            ["Hasta 7", "Una van ejecutiva", "Todos juntos y con trato muy personal"],
            ["8-20", "Varias vans o un minibús", "Flexibilidad para dividir el grupo en actividades"],
            ["20-50", "Autocar de gran turismo + berlina para la dirección", "Eficiencia sin descuidar a la dirección"],
            ["50+", "Varios autocares coordinados", "Rotaciones y llegadas escalonadas"],
          ],
        },
        list: [
          "El mismo chófer durante todo el programa: conoce al grupo, sus horarios y sus preferencias.",
          "Recibimiento personalizado con la imagen de la empresa.",
          "Vehículos a disposición, no solo traslados puntuales: el programa respira.",
        ],
      },
    ],
    service: {
      title: "Movilidad con chófer para tu incentivo",
      text: "Vans ejecutivas, minibuses y autocares con chófer a disposición durante todo el programa.",
      href: "/transporte-incentivos-galicia",
      label: "Ver transporte para incentivos",
    },
    faqs: [
      { question: "¿Cuál es la mejor época para un incentivo en Galicia?", answer: "De mayo a octubre, con junio y septiembre como meses ideales. En invierno hay buenas opciones si el programa tiene alternativas a cubierto." },
      { question: "¿Cuántos días necesita un incentivo en Galicia?", answer: "Tres días es el formato más habitual. Con cuatro se puede añadir una segunda zona, como la Ribeira Sacra o la Costa da Morte." },
      { question: "¿Quién organiza el programa completo?", answer: "Un DMC local, como Suunia, diseña el programa con hoteles, restaurantes y experiencias. Luxe Galicia se encarga de toda la movilidad." },
    ],
    related: [
      { title: "Transporte para incentivos", href: "/transporte-incentivos-galicia" },
      { title: "Fam trip en Galicia", href: "/guias/fam-trip-galicia-como-organizarlo" },
      { title: "Tours con chófer por Galicia", href: "/tours-con-chofer-galicia" },
    ],
  },

  // 4 · Conxemar
  {
    slug: "conxemar-transporte-vigo",
    category: "Artículo",
    title: "Conxemar 2027: cómo moverse en Vigo durante la feria",
    metaTitle: "Conxemar 2027: transporte, aeropuertos y hoteles en Vigo",
    metaDescription:
      "Guía práctica para expositores y visitantes de Conxemar en Vigo: cómo llegar a IFEVI, qué aeropuerto elegir (Vigo, Santiago u Oporto), dónde alojarse y cómo organizar traslados.",
    image: "/images/puerto-rias-baixas.jpg",
    alt: "Ría de Vigo, ciudad sede de Conxemar",
    readMinutes: 7,
    date: "2026-10-31",
    stats: [{"value": "5-7 oct", "label": "Conxemar 2027"}, {"value": "~700", "label": "expositores en ediciones recientes"}, {"value": "40+", "label": "países representados"}, {"value": "~1 h 40 min", "label": "desde el aeropuerto de Oporto"}],
    intro: [
      "Conxemar, la Feria Internacional de Productos del Mar Congelados, es uno de los grandes encuentros mundiales del sector pesquero. Se celebra cada octubre en IFEVI, el recinto ferial de Vigo, y reúne a cientos de expositores y a miles de profesionales de decenas de países.",
      "Durante esos días Vigo se llena: hoteles completos, taxis imposibles y el entorno de IFEVI saturado. Esta guía te ayuda a organizar los traslados para que tu equipo y tus clientes lleguen a tiempo a cada reunión.",
    ],
    summary: [
      "Conxemar 2027 se celebra del 5 al 7 de octubre de 2027 en IFEVI, según la web oficial de la feria.",
      "IFEVI está junto al aeropuerto de Peinador, a unos 15-20 minutos del centro de Vigo.",
      "Muchos visitantes internacionales vuelan a Oporto: está a unos 1 h 40 min de IFEVI por carretera.",
      "Con Vigo lleno, alojarse en Pontevedra, Baiona o Sanxenxo es habitual: necesitarás transporte diario.",
      "Reserva los traslados con meses de antelación: la semana de la feria la demanda se dispara.",
    ],
    sections: [
      {
        heading: "Conxemar en datos",
        paragraphs: [
          "Organizada por la asociación española de mayoristas, importadores, exportadores y fabricantes de productos de la pesca y la acuicultura, Conxemar reúne a fabricantes, mayoristas, importadores, exportadores y empresas de frío, maquinaria y envasado. Según datos publicados de ediciones recientes, ronda los 700 expositores y supera los 25.000 visitantes profesionales de más de 40 países.",
          "La edición de 2027 se celebra del 5 al 7 de octubre, según la web oficial de Conxemar.",
        ],
      },
      {
        heading: "Qué aeropuerto elegir",
        table: {
          head: ["Aeropuerto", "Distancia a IFEVI", "Para quién"],
          rows: [
            ["Vigo (Peinador)", "A pocos minutos", "Vuelos nacionales; el más cómodo si tienes conexión"],
            ["Santiago", "~1 h", "Más vuelos nacionales y algunos internacionales"],
            ["Oporto", "~1 h 40 min", "La mejor opción para muchos visitantes internacionales"],
            ["A Coruña", "~1 h 45 min", "Alternativa si los demás están completos"],
          ],
        },
        tip: "Si vuelas a Oporto, recuerda que Portugal tiene una hora menos que España. Cuadra bien la hora de recogida con tu primera reunión en la feria.",
      },
      {
        heading: "Dónde alojarse y cómo moverse cada día",
        image: {"src": "/images/parador-baiona.jpg", "alt": "Baiona, una de las alternativas de alojamiento durante Conxemar"},
        paragraphs: [
          "Los hoteles del centro de Vigo se llenan pronto durante la feria. Muchas empresas alojan a su equipo en Pontevedra, Baiona, Sanxenxo o Redondela, a 20-50 minutos de IFEVI. La distancia no es un problema si el transporte diario está organizado.",
        ],
        list: [
          "Ida y vuelta diaria hotel–IFEVI en van o minibús para el equipo de stand.",
          "Berlina a disposición para directivos y compradores clave entre reuniones.",
          "Traslados a la cena con clientes en Vigo o en las Rías Baixas, con vuelta escalonada.",
          "Recogidas de aeropuerto agrupadas por vuelos, especialmente desde Oporto.",
        ],
      },
      {
        heading: "Montaje y desmontaje",
        paragraphs: [
          "Los días anteriores y posteriores a la feria, los equipos de montaje trabajan en horarios largos. Una van a disposición con recogidas tempranas y regreso tardío evita depender de taxis en un recinto alejado del centro.",
        ],
      },
      {
        heading: "Checklist de transporte para expositores",
        list: [
          "Reserva vehículos en cuanto tengas confirmado el stand.",
          "Recoge los vuelos de todo el equipo en una sola hoja: llegada, aeropuerto y hora.",
          "Decide qué personas necesitan vehículo a disposición y cuáles solo traslados.",
          "Planifica las cenas con clientes con su transporte de vuelta.",
          "Ten un único contacto de transporte para todo el equipo durante la feria.",
        ],
      },
    ],
    service: {
      title: "Transporte para tu equipo en Conxemar",
      text: "Traslados desde Oporto, Vigo y Santiago, vans para el equipo de stand y berlinas para clientes clave.",
      href: "/traslados-desde-vigo",
      label: "Ver traslados desde Vigo",
    },
    faqs: [
      { question: "¿Cuándo se celebra Conxemar 2027?", answer: "Del 5 al 7 de octubre de 2027 en IFEVI, Vigo, según la web oficial de la feria." },
      { question: "¿Cómo se llega a IFEVI desde el centro de Vigo?", answer: "En vehículo, en unos 15-20 minutos según el tráfico. Durante la feria conviene salir con margen." },
      { question: "¿Merece la pena volar a Oporto para ir a Conxemar?", answer: "Para muchos visitantes internacionales, sí: tiene más conexiones y está a unos 1 h 40 min de IFEVI por carretera con un traslado directo." },
    ],
    related: [
      { title: "Transporte a IFEVI (Vigo)", href: "/guias/transporte-ifevi-vigo" },
      { title: "De Oporto a Vigo: qué compensa", href: "/guias/oporto-vigo-tren-autobus-traslado" },
      { title: "Traslados desde Vigo", href: "/traslados-desde-vigo" },
    ],
  },
  // 7 · Uber, taxi o chófer en Santiago
  {
    slug: "uber-taxi-chofer-santiago-de-compostela",
    category: "Artículo",
    title: "Uber, taxi o chófer en Santiago de Compostela: qué te conviene en cada caso",
    metaTitle: "Uber, taxi o chófer en Santiago de Compostela: qué te conviene",
    metaDescription:
      "Cómo moverte en Santiago de Compostela: taxi, VTC por aplicación (Uber, Cabify), autobús o coche con chófer. Desde el aeropuerto, por la ciudad y para grupos o empresas.",
    image: "/images/chofer-conduciendo-berlina.jpg",
    alt: "Chófer conduciendo una berlina por Santiago de Compostela",
    readMinutes: 6,
    date: "2026-10-31",
    stats: [{"value": "15-20 min", "label": "aeropuerto – centro"}, {"value": "4", "label": "formas de moverte"}],
    intro: [
      "Llegas a Santiago y necesitas moverte: del aeropuerto al hotel, del hotel a una reunión o del centro a la Cidade da Cultura. Tienes cuatro opciones: taxi, VTC por aplicación, autobús o un coche con chófer reservado.",
      "Ninguna es la mejor siempre. Depende de cuántos sois, de cuántos trayectos haces y de cuánto te importa no esperar. Aquí tienes la guía para decidir rápido.",
    ],
    summary: [
      "Para un trayecto suelto de una o dos personas, el taxi o una VTC por aplicación suelen ser suficientes.",
      "En Galicia, las VTC funcionan con contratación previa, así que su disponibilidad inmediata puede variar.",
      "El casco histórico tiene el tráfico restringido: ningún vehículo te deja en la puerta de la catedral.",
      "Para grupos, empresas, varios trayectos al día o llegadas de madrugada, un chófer reservado da seguridad.",
      "En fechas punta (Año Santo, congresos, verano), reservar con antelación marca la diferencia.",
    ],
    sections: [
      {
        heading: "Comparativa rápida",
        table: {
          head: ["Opción", "Mejor para", "Ventaja", "Inconveniente"],
          rows: [
            ["Taxi", "Trayectos sueltos, 1-4 personas", "Paradas en aeropuerto, estación y centro", "Colas en horas punta y días de evento"],
            ["VTC por aplicación", "Quien ya usa Uber o Cabify", "Precio visible antes de pedir", "Disponibilidad variable; contratación previa"],
            ["Autobús", "Viajeros con poco equipaje y sin prisa", "La opción más barata", "Horarios y paradas fijas"],
            ["Chófer reservado", "Empresas, grupos, varios trayectos", "Te espera, sigue tu vuelo, mismo vehículo todo el día", "Hay que reservarlo con antelación"],
          ],
        },
      },
      {
        heading: "Taxi",
        paragraphs: [
          "Santiago tiene paradas de taxi en el aeropuerto Rosalía de Castro, en la estación de tren y en varios puntos del centro. Para un trayecto suelto es una opción cómoda y rápida.",
          "El problema aparece cuando todo el mundo lo necesita a la vez: la llegada de varios vuelos, la salida de un congreso, un día de lluvia o las fechas grandes del Año Santo. Ahí las colas pueden ser largas.",
        ],
      },
      {
        heading: "VTC por aplicación (Uber, Cabify)",
        paragraphs: [
          "Las aplicaciones de VTC operan en Santiago, pero hay un matiz importante: en Galicia los vehículos VTC se contratan con antelación (la normativa autonómica exige una precontratación mínima, aunque la Xunta ha propuesto eliminarla). En la práctica, la disponibilidad inmediata depende de cuántos vehículos haya en ese momento.",
          "Para un viajero suelto que ya usa la aplicación, puede funcionar bien. Para un grupo o una agenda de empresa con horarios cerrados, depender de la disponibilidad del momento es un riesgo.",
        ],
        tip: "Si llegas en el último vuelo de la noche o en una fecha con mucha demanda, no confíes en encontrar vehículo al momento: resérvalo antes de volar.",
      },
      {
        heading: "Autobús",
        paragraphs: [
          "Hay conexión en autobús entre el aeropuerto, el centro y la estación, y líneas urbanas que llegan a puntos como la Cidade da Cultura. Es la opción más económica, pero con horarios y paradas fijas, y poco práctica con equipaje o con un grupo.",
        ],
      },
      {
        heading: "Coche con chófer reservado",
        paragraphs: [
          "Un chófer reservado no es solo un traslado: sigue tu vuelo, te espera en llegadas con tu nombre y, si lo contratas por horas o por días, te acompaña en todos los trayectos de tu agenda.",
          "Es la opción lógica cuando sois varios (el precio es por vehículo), cuando tienes varias reuniones en el día, cuando llegas de madrugada o cuando no puedes permitirte esperar.",
        ],
        list: [
          "Empresas: aeropuerto, reuniones, Palacio de Congresos y vuelta, con el mismo chófer.",
          "Grupos: una van o un minibús en lugar de tres taxis que llegan a horas distintas.",
          "Familias con equipaje o peregrinos al final del Camino.",
          "Excursiones desde Santiago: Rías Baixas, Costa da Morte o A Coruña.",
        ],
      },
      {
        heading: "El casco histórico: lo que nadie te cuenta",
        image: {"src": "/images/catedral-santiago-alameda.jpg", "alt": "Casco histórico de Santiago de Compostela con la catedral"},
        paragraphs: [
          "La zona monumental de Santiago tiene el tráfico restringido. Da igual que vayas en taxi, VTC o con chófer: el vehículo te deja en el punto accesible más cercano y el último tramo se hace a pie. Si tu hotel está dentro del casco histórico, conviene saber de antemano dónde será la parada.",
        ],
      },
    ],
    service: {
      title: "Chófer en Santiago, cuando no puedes esperar",
      text: "Traslados desde el aeropuerto, chófer por horas para empresas y vans para grupos.",
      href: "/traslados-desde-santiago",
      label: "Ver traslados desde Santiago",
    },
    faqs: [
      { question: "¿Funciona Uber en Santiago de Compostela?", answer: "Sí, las aplicaciones de VTC operan en Santiago, pero en Galicia los VTC se contratan con antelación y la disponibilidad inmediata puede variar según la hora y la demanda." },
      { question: "¿Cuánto se tarda del aeropuerto de Santiago al centro?", answer: "Entre 15 y 20 minutos en vehículo, según el tráfico y el punto exacto del centro." },
      { question: "¿Un taxi puede llevarme hasta la catedral?", answer: "No. El casco histórico tiene el tráfico restringido y cualquier vehículo te deja en el punto accesible más cercano." },
      { question: "¿Cuándo compensa un chófer frente al taxi?", answer: "Cuando sois tres o más personas, cuando tienes varios trayectos en el día, cuando llegas de madrugada o en fechas de mucha demanda." },
    ],
    related: [
      { title: "Traslados desde Santiago", href: "/traslados-desde-santiago" },
      { title: "Aeropuertos de Galicia", href: "/aeropuertos-galicia" },
      { title: "Año Santo 2027: transporte de grupos", href: "/guias/ano-santo-2027-transporte-grupos" },
    ],
  },

  // 8 · Ver al Deportivo
  {
    slug: "viajar-coruna-ver-deportivo",
    category: "Artículo",
    title: "Viajar a A Coruña a ver al Deportivo: guía para aficionados visitantes",
    metaTitle: "Viajar a A Coruña para ver al Deportivo en Riazor: guía práctica",
    metaDescription:
      "Guía para aficionados y peñas que viajan a A Coruña a un partido en Riazor: cómo llegar en avión, tren o autocar, dónde alojarse, el día de partido y qué hacer en la ciudad.",
    image: "/images/traslados-chofer-coruna.jpg",
    alt: "Monumento junto a la Torre de Hércules, en A Coruña",
    readMinutes: 7,
    date: "2026-10-31",
    stats: [{"value": "~32.500", "label": "espectadores en Riazor"}, {"value": "~20 min", "label": "a pie desde el centro"}, {"value": "~20 min", "label": "aeropuerto de Alvedro"}, {"value": "~55 min", "label": "aeropuerto de Santiago"}],
    intro: [
      "Con el Deportivo de vuelta en Primera División, A Coruña vuelve a recibir aficionados de toda España cada quince días. Riazor está en plena ciudad, junto a la playa, y el viaje puede ser mucho más que un partido.",
      "Esta guía es para el aficionado visitante y para las peñas que organizan el desplazamiento: cómo llegar, dónde dormir, cómo moverse el día de partido y qué hacer el resto del fin de semana.",
    ],
    summary: [
      "Riazor está en el centro de A Coruña: desde la zona hotelera se llega andando por el paseo marítimo.",
      "El día de partido, aparcar cerca del estadio es casi imposible: mejor no depender del coche.",
      "Llega por Alvedro (A Coruña), Santiago (a unos 50 minutos) o en tren de alta velocidad.",
      "Las peñas en autocar deben coordinar la llegada con las zonas habilitadas para el partido.",
      "Aprovecha el viaje: Torre de Hércules, Ciudad Vieja, tapas en la zona de la calle de la Estrella y la Franja.",
    ],
    sections: [
      {
        heading: "Cómo llegar a A Coruña",
        table: {
          head: ["Cómo", "Desde", "Tiempo hasta Riazor", "Ten en cuenta"],
          rows: [
            ["Avión a A Coruña (Alvedro)", "Madrid, Barcelona y otras ciudades", "~20 min", "Menos vuelos; resérvalo pronto"],
            ["Avión a Santiago", "Más conexiones nacionales", "~55 min", "Necesitas traslado por carretera"],
            ["Tren de alta velocidad", "Madrid y otras ciudades", "~10 min desde la estación", "Buena opción desde Madrid"],
            ["Autocar de peña", "Tu ciudad", "Directo", "Coordina la zona de llegada para el partido"],
          ],
        },
      },
      {
        heading: "Dónde alojarse",
        list: [
          "Centro y zona de la Marina: lo más cómodo; Riazor queda a un paseo y tienes todo cerca.",
          "Riazor y Orzán: junto al estadio y a la playa; se llena pronto en días de partido.",
          "Fuera de la ciudad (Oleiros, Santa Cristina, Arteixo): más disponibilidad, pero necesitarás transporte el día de partido.",
          "Santiago: si quieres combinar fútbol y Santiago, está a 50 minutos con un traslado.",
        ],
      },
      {
        heading: "El día de partido",
        paragraphs: [
          "Riazor recibe a más de 30.000 personas y está en un barrio residencial junto al mar. El tráfico se corta en las calles cercanas y los aparcamientos se llenan pronto. Lo más cómodo es llegar andando desde el centro por el paseo marítimo o que te dejen y te recojan.",
          "A la salida, decenas de miles de personas salen a la vez. Si vas en grupo, acordad de antemano un punto de encuentro algo alejado del estadio.",
        ],
        tip: "Si tenéis vuelo o tren de vuelta el mismo día, no lo pongáis justo después del partido: entre la salida del estadio y el tráfico, deja al menos dos horas de margen.",
      },
      {
        heading: "Si vienes con una peña",
        list: [
          "Los autocares visitantes llegan a las zonas que se habilitan para cada partido según el dispositivo de seguridad.",
          "Coordina con tu peña o con el club la hora y el punto de llegada.",
          "Si el grupo duerme en A Coruña, el autocar o los minibuses pueden quedarse a disposición todo el fin de semana.",
          "Para grupos pequeños, una van o un minibús con chófer es más flexible que un autocar grande.",
        ],
      },
      {
        heading: "Qué hacer en A Coruña antes o después del partido",
        list: [
          "Torre de Hércules: el faro romano en funcionamiento más antiguo del mundo, Patrimonio de la Humanidad.",
          "Paseo marítimo: uno de los más largos de Europa, de Riazor a la Torre.",
          "Ciudad Vieja y plaza de María Pita.",
          "Tapas y raciones en la zona de la calle de la Estrella, la Franja y los alrededores.",
          "Monte de San Pedro: las mejores vistas de la ciudad.",
          "Si te quedas el domingo: excursión a Santiago o a la Costa da Morte.",
        ],
      },
    ],
    service: {
      title: "Transporte para el partido",
      text: "Traslados desde aeropuertos y estación, autocares para peñas y vans para grupos. También a Balaídos y otros eventos deportivos.",
      href: "/transporte-eventos-deportivos",
      label: "Ver transporte para el fútbol",
    },
    faqs: [
      { question: "¿Se puede ir andando al estadio de Riazor desde el centro?", answer: "Sí. Desde la zona de la Marina y la plaza de María Pita son unos 20 minutos andando, gran parte por el paseo marítimo." },
      { question: "¿Qué aeropuerto me conviene para ver al Deportivo?", answer: "Alvedro (A Coruña) es el más cercano, a unos 20 minutos de Riazor. Si no hay vuelos, Santiago está a unos 55 minutos por carretera." },
      { question: "¿Dónde aparcan los autocares de aficionados visitantes?", answer: "En las zonas que se habilitan para cada partido según el dispositivo de seguridad. Conviene coordinarlo con antelación." },
      { question: "¿Merece la pena quedarse el fin de semana?", answer: "Sí. A Coruña tiene mucho que ver y Santiago o la Costa da Morte están a una hora o poco más." },
    ],
    related: [
      { title: "Cómo llegar al estadio de Riazor", href: "/guias/como-llegar-estadio-riazor" },
      { title: "Transporte para partidos y eventos deportivos", href: "/transporte-eventos-deportivos" },
      { title: "Traslados desde A Coruña", href: "/traslados-desde-coruna" },
    ],
  },

  // 9 · Calendario 2027
  {
    slug: "calendario-congresos-ferias-galicia-2027",
    category: "Artículo",
    title: "Calendario de congresos y ferias en Galicia 2027",
    metaTitle: "Calendario de congresos y ferias en Galicia 2027 | A Coruña, Santiago, Vigo",
    metaDescription:
      "Calendario 2027 de congresos, ferias y grandes eventos profesionales en A Coruña, Santiago de Compostela y Vigo: fechas, sedes y claves de transporte para cada uno.",
    image: "/images/finca-montesqueiro-corporativo-presentacion.jpg",
    alt: "Sala de congresos en Galicia",
    readMinutes: 6,
    date: "2026-10-31",
    stats: [{"value": "3", "label": "ciudades de congresos"}, {"value": "Todo 2027", "label": "Año Santo en Santiago"}],
    intro: [
      "2027 va a ser un año intenso para los eventos profesionales en Galicia: Año Santo en Santiago, congresos médicos y científicos en Palexco y la gran feria internacional del producto del mar en Vigo.",
      "Este calendario recoge los congresos y ferias ya anunciados para 2027 en las tres grandes ciudades, con su sede y lo que conviene saber del transporte. Se actualiza a medida que se confirman nuevas fechas.",
    ],
    summary: [
      "Todo 2027 es Año Santo: más demanda de hoteles y transporte en Santiago y alrededores.",
      "Mayo y junio concentran congresos científicos en A Coruña y Santiago.",
      "Conxemar (5-7 de octubre) es el gran pico de Vigo.",
      "Las fechas marcadas como «por confirmar» proceden de fuentes no oficiales: compruébalas con la organización.",
    ],
    sections: [
      {
        heading: "A Coruña",
        table: {
          head: ["Fechas", "Evento", "Sede", "Estado"],
          rows: [
            ["5-7 mar 2027", "BioCultura A Coruña", "Palexco", "Por confirmar"],
            ["4-6 abr 2027", "Fórum Gastronómico", "ExpoCoruña", "Por confirmar"],
            ["19-21 may 2027", "Congreso SECOIR (Sociedad Española de Cirugía Ocular Implanto-Refractiva)", "Palexco", "Anunciado"],
            ["14-16 jun 2027", "Encuentro internacional de la red de sostenibilidad de IAPS (500+ participantes)", "A Coruña", "Anunciado"],
            ["2027 (fecha por anunciar)", "XIII Congreso Internacional de Psicología y Educación (CIPE)", "A Coruña", "Anunciado"],
          ],
        },
        after: ["Claves de transporte en A Coruña: llegadas por Alvedro, Santiago y Oporto; lanzaderas para hoteles fuera del centro y cenas fuera de la ciudad."],
      },
      {
        heading: "Santiago de Compostela",
        image: {"src": "/images/catedral-santiago-alameda.jpg", "alt": "Catedral de Santiago de Compostela, ciudad del Año Santo 2027"},
        table: {
          head: ["Fechas", "Evento", "Sede", "Estado"],
          rows: [
            ["Todo el año", "Año Santo Compostelano 2027", "Catedral y ciudad", "Confirmado"],
            ["12-14 may 2027", "49.º Congreso de la Sociedad Española de Endocrinología Pediátrica", "Santiago", "Anunciado"],
            ["Junio 2027", "16.º Congreso Nacional y 3.º Ibérico de Ensayos No Destructivos (END)", "Cidade da Cultura", "Anunciado"],
            ["25 jul 2027", "Día del Apóstol (domingo)", "Ciudad", "Confirmado"],
          ],
        },
        after: ["Claves de transporte en Santiago: el casco histórico tiene el tráfico restringido y en Año Santo la demanda será alta todo el año; reserva la flota pronto."],
      },
      {
        heading: "Vigo",
        table: {
          head: ["Fechas", "Evento", "Sede", "Estado"],
          rows: [
            ["27-29 abr 2027", "MindTech", "IFEVI", "Por confirmar"],
            ["5-7 oct 2027", "Conxemar, Feria Internacional de Productos del Mar Congelados", "IFEVI", "Confirmado"],
          ],
        },
        after: [
          "Según el Vigo Convention Bureau, IFEVI tenía ya 52 eventos cerrados para 2027 a finales de 2026, así que el calendario de Vigo seguirá creciendo.",
          "Claves de transporte en Vigo: IFEVI está junto al aeropuerto de Peinador; muchos visitantes internacionales llegan por Oporto, a 1 h 40 min.",
        ],
      },
      {
        heading: "Cómo usar este calendario",
        list: [
          "Si organizas un evento en 2027, comprueba que no coincide con un gran evento en la misma ciudad: hoteles y transporte se encarecen y escasean.",
          "Si tu evento coincide con uno de estos, reserva el transporte con más antelación de lo habitual.",
          "Si eres expositor o asistente, reserva traslados y alojamiento en cuanto confirmes tu participación.",
          "¿Organizas un congreso o feria en Galicia en 2027 y no aparece? Escribe a info@luxegalicia.com para añadirlo.",
        ],
      },
    ],
    service: {
      title: "¿Tu evento está en este calendario?",
      text: "Asegura ahora la flota: lanzaderas, traslados de aeropuerto y vehículos para ponentes con un único responsable.",
      href: "/transporte-eventos-galicia",
      label: "Transporte para eventos",
    },
    faqs: [
      { question: "¿Qué congresos se celebran en A Coruña en 2027?", answer: "Entre los anunciados figuran el congreso SECOIR en Palexco (19-21 de mayo), un encuentro internacional de la red de sostenibilidad de IAPS (14-16 de junio) y el XIII Congreso Internacional de Psicología y Educación, además de ferias en Palexco y ExpoCoruña." },
      { question: "¿Cuándo es Conxemar 2027?", answer: "Del 5 al 7 de octubre de 2027 en IFEVI, Vigo." },
      { question: "¿Cómo afecta el Año Santo a los congresos en Santiago?", answer: "Aumenta la demanda de hoteles y transporte durante todo el año, sobre todo en Semana Santa, julio y agosto. Conviene reservar con mucha antelación." },
    ],
    related: [
      { title: "Transporte a Palexco", href: "/guias/transporte-palexco" },
      { title: "Conxemar 2027: cómo moverse en Vigo", href: "/guias/conxemar-transporte-vigo" },
      { title: "Año Santo 2027: transporte de grupos", href: "/guias/ano-santo-2027-transporte-grupos" },
      { title: "Transporte para congresos", href: "/transporte-congresos-galicia" },
    ],
  },
];

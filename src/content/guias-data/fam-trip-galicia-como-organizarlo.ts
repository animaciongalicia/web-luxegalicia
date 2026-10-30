import type { Guide } from "../types";

export const guia: Guide = {
  slug: "fam-trip-galicia-como-organizarlo",
  category: "Artículo",
  title: "Fam trip en Galicia: cómo organizarlo para que el agente vuelva queriendo vender el destino",
  metaTitle: "Fam trip en Galicia: cómo organizarlo para que funcione | Guía práctica",
  metaDescription:
    "Cómo organizar un fam trip en Galicia para agentes de viajes, organizadores MICE o prensa: objetivos, programa tipo de 3 días, logística, errores habituales y cómo medir el resultado.",
  image: "/images/pazo-galicia-jardines.jpg",
  alt: "Pazo gallego con jardines, parada habitual de un fam trip",
  readMinutes: 7,
  date: "2026-10-30",
  stats: [
    { value: "8-16", label: "participantes ideales" },
    { value: "3 días", label: "formato más habitual" },
    { value: "< 2 h", label: "de carretera al día" },
    { value: "6 meses", label: "de seguimiento posterior" },
  ],
  intro: [
    "Un fam trip no es un viaje de regalo. Es una herramienta de venta: llevas a agentes, organizadores de eventos o periodistas a conocer un destino para que después lo vendan, lo recomienden o escriban sobre él.",
    "Galicia tiene todo para que funcione. Pero te voy a decir algo que pocos dicen: un mal fam trip deja peor imagen que no hacer ninguno. Esto es lo que separa uno bueno de uno que se olvida en una semana.",
  ],
  summary: [
    "Define primero qué tiene que vender el agente al volver. El programa se diseña para eso.",
    "Nunca más de 2 horas de carretera al día.",
    "Grupos de 8 a 16 en minibús o vans: mejor que un autocar medio vacío.",
    "La logística es el mensaje: si el transporte falla, el agente piensa que el destino falla.",
  ],
  sections: [
    {
      heading: "Qué es un fam trip y para qué sirve",
      paragraphs: [
        "Reúne a profesionales que venden o recomiendan destinos (agencias, organizadores MICE, turoperadores, prensa especializada) para que conozcan en primera persona hoteles, sedes, proveedores y experiencias.",
        "En Galicia, las instituciones turísticas y el sector MICE organizan fam trips con hosted buyers que visitan A Coruña, Santiago y Vigo. Pero cualquier hotel, DMC o grupo de proveedores puede montar el suyo. Si eres agencia y lo organizas desde fuera, empieza por [cómo organizar un evento en Galicia desde fuera](/guias/organizar-evento-en-galicia-agencias).",
      ],
    },
    {
      heading: "Define el objetivo antes que el programa",
      list: [
        "Incentivos: enseña pazos, bodegas, experiencias en barco y hoteles con capacidad para grupos.",
        "Congresos: prioriza sedes ([Palexco](/guias/transporte-palexco), Palacio de Congresos de Santiago, Cidade da Cultura), hoteles cerca y conectividad aérea.",
        "Viajes a medida de alto nivel: paradores, hoteles boutique, gastronomía de autor y [tours privados con chófer por Galicia](/tours-con-chofer-galicia).",
        "Prensa: historias y experiencias que se puedan contar y fotografiar.",
      ],
      tip: "Escribe en una frase qué debe poder vender el agente al volver. Si una visita no ayuda a esa frase, sobra.",
    },
    {
      heading: "Programa tipo de 3 días",
      image: { src: "/images/bodega-albarino-rias-baixas.jpg", alt: "Bodega de albariño en las Rías Baixas, parada habitual de un fam trip" },
      table: {
        head: ["Día", "Programa", "Transporte"],
        rows: [
          ["Día 1", "Llegada por Santiago u Oporto · check-in · cena de bienvenida", "Recogidas por franjas de vuelo, con cartel del fam trip"],
          ["Día 2", "Santiago o A Coruña: visita de sede y hoteles · comida · experiencia de tarde", "Minibús o vans a disposición todo el día"],
          ["Día 3", "Rías Baixas: bodega de albariño, barco por la ría o pazo · comida", "Ruta con paradas, máximo 2 h de carretera"],
          ["Salida", "Reunión de cierre · traslado al aeropuerto", "Salidas escalonadas según vuelos"],
        ],
      },
      after: ["El día de Rías Baixas funciona igual que una [excursión privada por las Rías Baixas con cata de albariño](/tours-con-chofer-galicia/rias-baixas): pocas paradas, bien elegidas."],
    },
    {
      heading: "Logística: donde se gana o se pierde un fam trip",
      image: { src: "/images/minibus-interior.jpg", alt: "Interior de un minibús con chófer para un grupo de agentes de viajes" },
      paragraphs: [
        "Tus invitados organizan viajes para vivir. Detectan al segundo un retraso, un vehículo que no encaja o una espera tonta. Y lo trasladan al destino: si el transporte falla, piensan que Galicia es complicada.",
      ],
      list: [
        "Vehículos del tamaño justo: un minibús de 19 plazas para 14 personas, no un autocar de 55.",
        "El mismo chófer y vehículo todo el viaje: genera confianza y simplifica.",
        "Llegadas agrupadas por franjas horarias, con un vehículo de reserva para retrasos.",
        "Tiempos reales: Galicia es corta en el mapa, pero las carreteras secundarias son lentas.",
        "Tiempo libre y de networking: es cuando los agentes hablan entre ellos y con los proveedores.",
      ],
      quote: "En un fam trip, la logística no acompaña al mensaje. La logística es el mensaje.",
      after: ["Por eso conviene que el transporte lo lleve un [proveedor de minibuses y vans para fam trips y agencias](/agencias-mice) que entienda el contexto: no es una excursión, es una presentación comercial sobre ruedas."],
    },
    {
      heading: "Errores habituales",
      list: [
        "Programa sobrecargado: diez visitas al día y ninguna se recuerda.",
        "Demasiadas horas en carretera para ver algo que se puede enseñar más cerca.",
        "Todos los hoteles iguales: el agente necesita variedad para poder vender.",
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
      tip: "Si el objetivo final son viajes de incentivo, lee también [qué funciona en un viaje de incentivos en Galicia](/guias/viaje-incentivos-galicia).",
    },
  ],
  service: {
    title: "¿Organizas un fam trip en Galicia?",
    text: "Minibuses y vans ejecutivas con el mismo chófer todo el viaje, recogidas por franjas de vuelo y un único responsable.",
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
    { title: "Viaje de incentivos en Galicia", href: "/guias/viaje-incentivos-galicia" },
    { title: "Organizar un evento en Galicia desde fuera", href: "/guias/organizar-evento-en-galicia-agencias" },
    { title: "Transporte para viajes de incentivo", href: "/transporte-incentivos-galicia" },
  ],
};

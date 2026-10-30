import type { Guide } from "../types";

export const guia: Guide = {
  slug: "organizar-evento-en-galicia-agencias",
  category: "Guía",
  title: "Organizar un evento en Galicia desde fuera: guía para agencias",
  metaTitle: "Organizar un evento en Galicia: guía para agencias MICE de fuera",
  metaDescription:
    "Guía para agencias MICE de Madrid, Barcelona y extranjero que organizan eventos en Galicia: ciudades y sedes, aeropuertos, distancias, temporadas, proveedores y calendario de trabajo.",
  image: "/images/planificacion-transporte-evento.webp",
  alt: "Planificación del transporte de un evento en una tableta",
  readMinutes: 10,
  date: "2026-10-30",
  stats: [
    { value: "3", label: "ciudades de eventos: A Coruña, Santiago y Vigo" },
    { value: "4", label: "aeropuertos, incluido Oporto" },
    { value: "< 1 h 40 min", label: "entre las tres ciudades" },
    { value: "mayo-oct", label: "mejor temporada" },
  ],
  intro: [
    "Galicia funciona muy bien para eventos: se come de maravilla, hay sedes con carácter, las distancias son cortas y para tus asistentes todavía es un destino fresco.",
    "Pero tiene sus reglas. Si organizas desde Madrid, Barcelona o desde fuera de España, te conviene conocerlas antes de firmar nada. Yo he visto a agencias muy buenas pagar la novatada. No hace falta que tú la pagues.",
  ],
  summary: [
    "A Coruña, Santiago y Vigo cubren casi todo: elige por perfil de evento, no por foto.",
    "Oporto es el aeropuerto internacional que más te va a ayudar.",
    "Los proveedores locales son pequeños: necesitas a alguien que coordine varios.",
    "Mayo, junio, septiembre y octubre son los mejores meses.",
  ],
  sections: [
    {
      heading: "Las tres ciudades de eventos",
      image: { src: "/images/catedral-santiago-alameda.jpg", alt: "Catedral de Santiago de Compostela vista desde la Alameda" },
      table: {
        head: ["Ciudad", "Encaja mejor con", "Sedes de referencia", "Aeropuerto"],
        rows: [
          ["A Coruña", "Congresos médicos y científicos, convenciones", "[Palexco](/guias/transporte-palexco), [ExpoCoruña](/guias/transporte-expocoruna)", "Alvedro, a 10-15 min"],
          ["Santiago", "Imagen institucional, Año Santo, actos singulares", "[Palacio de Congresos](/guias/transporte-palacio-congresos-santiago), [Cidade da Cultura](/guias/transporte-cidade-da-cultura)", "Rosalía de Castro, a 15 min"],
          ["Vigo", "Ferias internacionales, industria, puerta a Oporto", "[IFEVI](/guias/transporte-ifevi-vigo), Auditorio Mar de Vigo", "Peinador, junto a IFEVI"],
        ],
      },
    },
    {
      heading: "Cómo llegan tus asistentes",
      paragraphs: [
        "En avión a Santiago, A Coruña, Vigo u Oporto. En tren de alta velocidad desde Madrid a Ourense, Santiago, A Coruña y Vigo.",
        "Para grupos internacionales, Oporto suele ganar por número de conexiones. El precio es un traslado por carretera de hora y media a tres horas. Bien organizado, con un [transfer privado del aeropuerto de Oporto a Galicia](/oporto-galicia), deja de ser un problema y se convierte en la primera buena impresión.",
      ],
    },
    {
      heading: "Las distancias que debes tener en la cabeza",
      list: [
        "A Coruña – Santiago: ~50 min.",
        "Santiago – Vigo: ~1 h.",
        "Santiago – Rías Baixas (Sanxenxo, O Grove): ~1 h.",
        "Vigo – aeropuerto de Oporto: ~1 h 35 min.",
        "Santiago – Ribeira Sacra: ~1 h 45 min.",
      ],
      after: ["Tienes todos los tiempos entre ciudades en la guía para [moverse por Galicia con chófer](/guias/galicia-con-chofer)."],
    },
    {
      heading: "Temporadas",
      paragraphs: [
        "Mayo, junio, septiembre y octubre son los meses buenos: buen tiempo y menos saturación. Julio y agosto concentran turismo y festivales. El invierno es más barato y más tranquilo, pero llueve: programa actividades a cubierto y traslados puerta a puerta.",
      ],
      tip: "En 2027 hay Año Santo. Si tu evento es en Santiago, trátalo como temporada alta todo el año.",
    },
    {
      heading: "Proveedores: el verdadero reto",
      paragraphs: [
        "Te voy a decir la verdad: en Galicia casi todos los proveedores son pequeños. En transporte, la mayoría tiene unas pocas berlinas y vans. Un evento de 200 personas necesita coordinar a varios.",
        "Si lo haces tú desde Madrid, son semanas de llamadas. Si lo haces con un [proveedor de transporte en Galicia para agencias de Madrid y Barcelona](/agencias-mice), es una conversación: un interlocutor, un plan, una factura.",
      ],
      quote: "El evento no falla por la sala. Falla por lo que pasa entre la sala y el hotel.",
    },
    {
      heading: "Calendario de trabajo para una agencia de fuera",
      list: [
        "12 meses antes: ciudad y sede elegidas, hoteles bloqueados.",
        "6-9 meses antes: visita de inspección, proveedores locales y flota reservada para las fechas clave.",
        "3 meses antes: programa social cerrado (cena de gala, actividades, acompañantes).",
        "1 mes antes: lista de llegadas por vuelo y hotel; plan de transporte definitivo.",
        "1 semana antes: hoja de ruta con horarios, vehículos, chóferes y contactos.",
        "Durante el evento: un coordinador local con línea directa con tu equipo.",
      ],
    },
    {
      heading: "Lo que hace que un evento en Galicia se recuerde",
      image: { src: "/images/veleros-ria-galicia.jpg", alt: "Veleros navegando por una ría gallega durante una actividad de empresa" },
      paragraphs: [
        "Lo que más recuerdan tus asistentes no es la sala. Es una cena de marisco frente a la ría, una salida en velero, una cata de albariño o un paseo por Santiago al anochecer.",
        "Para el programa completo (hoteles, restauración, experiencias), Suunia, DMC partner. Para mover a todo el grupo entre una cosa y otra, el [transporte para viajes de incentivo en Galicia](/transporte-incentivos-galicia).",
      ],
    },
    {
      heading: "Checklist para tu visita de inspección",
      list: [
        "Recorre el trayecto aeropuerto – hotel – sede a la hora real del evento.",
        "Comprueba dónde pueden parar los autocares en la sede y en los hoteles.",
        "Mide el tiempo real hasta el lugar de la cena de gala.",
        "Pregunta qué otros eventos hay en la ciudad en tus fechas.",
        "Conoce en persona al responsable local del transporte.",
      ],
      tip: "Si vas a hacer un viaje de inspección o un fam trip con clientes, tienes una guía específica: [cómo organizar un fam trip en Galicia](/guias/fam-trip-galicia-como-organizarlo).",
    },
  ],
  service: {
    title: "¿Organizas un evento en Galicia desde fuera?",
    text: "Un solo interlocutor para todo el transporte en destino. Marca blanca si la necesitas.",
    href: "/agencias-mice",
    label: "Transporte para agencias",
  },
  faqs: [
    { question: "¿Cuál es la mejor ciudad de Galicia para un congreso?", answer: "Depende del tamaño y del perfil. A Coruña ofrece sede en el centro y hoteles a pie; Santiago, la marca y la conectividad aérea; Vigo, cercanía con Oporto y tejido industrial." },
    { question: "¿Puedo trabajar con un proveedor de transporte en marca blanca?", answer: "Sí. Los chóferes pueden trabajar con la imagen de tu agencia: cartelería, protocolo y comunicación con el cliente final." },
  ],
  related: [
    { title: "Transporte para congresos y eventos: guía completa", href: "/guias/transporte-congresos-eventos-galicia" },
    { title: "Viaje de incentivos en Galicia", href: "/guias/viaje-incentivos-galicia" },
    { title: "Partner de transporte para agencias MICE", href: "/agencias-mice" },
  ],
};

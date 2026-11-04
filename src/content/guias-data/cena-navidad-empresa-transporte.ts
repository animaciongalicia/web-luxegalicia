import type { Guide } from "../types";

// Programado: lunes 16 de noviembre de 2026 (las empresas cierran la cena entre noviembre y principios de diciembre).
// Palabras clave: "cena de navidad empresa" (50/mes, intención comercial), "transporte cena de empresa".
export const guia: Guide = {
  slug: "cena-navidad-empresa-transporte",
  category: "Artículo",
  title: "Cena de Navidad de empresa: cómo organizar el transporte para que nadie conduzca",
  metaTitle: "Cena de Navidad de empresa: transporte para que nadie conduzca",
  metaDescription:
    "Cómo organizar el transporte de la cena de Navidad de tu empresa en Galicia: autocar o minibús, horarios de vuelta escalonados y errores que se pagan caros.",
  image: "/images/cena-gala-evento-galicia.jpg",
  alt: "Salón preparado para la cena de Navidad de una empresa",
  readMinutes: 6,
  date: "2026-11-16",
  stats: [
    { value: "0", label: "personas al volante a la vuelta" },
    { value: "2-3", label: "salidas de vuelta escalonadas" },
    { value: "4-6 sem.", label: "de antelación en diciembre" },
    { value: "1", label: "persona responsable del transporte" },
  ],
  intro: [
    "La cena de Navidad es la noche del año en la que tu equipo se relaja. Y justo por eso es la noche en la que más gente coge el coche cuando no debería.",
    "Te voy a decir la verdad aunque suene a sermón: si la empresa organiza la cena y no organiza la vuelta, está dejando la parte más delicada de la noche en manos de la suerte. Con un autocar o un par de minibuses, el problema desaparece. Te cuento cómo plantearlo.",
  ],
  summary: [
    "Organiza la ida y, sobre todo, la vuelta: es lo que la gente agradece.",
    "La vuelta, en dos o tres salidas escalonadas: nadie se va antes de tiempo y nadie espera.",
    "Recoge en dos o tres puntos clave, no en la puerta de cada uno.",
    "En diciembre la flota se agota: reserva con cuatro a seis semanas.",
  ],
  sections: [
    {
      heading: "Por qué la empresa debería poner el transporte",
      paragraphs: [
        "Porque es la forma más sencilla de que la noche salga bien. Nadie tiene que decidir quién conduce, nadie busca aparcamiento cerca del restaurante y nadie espera un taxi a las dos de la mañana en pleno diciembre.",
        "Y porque la imagen cuenta. El equipo nota que la empresa ha pensado en todo, no solo en el menú. Es un detalle pequeño en el presupuesto y grande en lo que se recuerda.",
      ],
      quote: "La cena la recuerda todo el mundo. La vuelta, solo si sale mal.",
    },
    {
      heading: "Qué vehículo según el tamaño del equipo",
      table: {
        head: ["Personas", "Opción", "Cómo funciona"],
        rows: [
          ["Hasta 7", "Una van con conductor", "Recogida en uno o dos puntos y vuelta al cierre"],
          ["8-19", "Un [minibús con conductor](/alquiler-minibus-con-conductor-galicia)", "Ida conjunta y una o dos vueltas"],
          ["20-55", "Un autocar", "Ida desde la oficina y vueltas escalonadas"],
          ["Más de 55", "Varios autocares o autocar y minibús", "Rutas por zonas de la ciudad o del área"],
        ],
      },
      after: [
        "Si la cena es fuera de la ciudad, en un pazo o una finca, el transporte deja de ser una comodidad y pasa a ser imprescindible. Para grupos grandes, mira el [alquiler de autocar con conductor](/alquiler-autocar-con-conductor-galicia).",
      ],
    },
    {
      heading: "La clave: la vuelta escalonada",
      image: { src: "/images/flota-minibuses-autocar.webp", alt: "Minibuses y autocar con conductor preparados para la vuelta de una cena" },
      paragraphs: [
        "Nadie quiere irse a la misma hora. Hay quien tiene niños y se va después del postre, y hay quien cierra el local. Si pones un único autocar a la una de la mañana, la mitad se va antes en taxi y la otra mitad se queda sin transporte.",
        "Lo que funciona es dividir la vuelta en dos o tres salidas. Una temprana, poco después del final de la cena. Una intermedia. Y la última, al cierre. Se avisa en la invitación y todo el mundo sabe a qué atenerse.",
      ],
      tip: "Pide a cada persona que indique en la confirmación en qué salida volverá. Con eso se ajusta el tamaño de cada vehículo y no pagas plazas vacías.",
    },
    {
      heading: "Cómo planificar las recogidas",
      list: [
        "Puntos de encuentro: la oficina, una o dos zonas céntricas y, si hace falta, un polígono. No recojas casa por casa.",
        "Ida con margen: que todos lleguen antes del aperitivo, no a mitad de los entrantes.",
        "Vuelta a los mismos puntos de recogida: la gente deja allí el coche o tiene el transporte de vuelta a casa resuelto.",
        "Un responsable por parte de la empresa con el teléfono del coordinador de transporte.",
        "Lista de asistentes por vehículo para no dejar a nadie en tierra.",
      ],
    },
    {
      heading: "Errores que se pagan caros",
      list: [
        "Reservar tarde: en las semanas de cenas de empresa la demanda se dispara y la flota disponible se agota.",
        "Un solo horario de vuelta: provoca taxis, coches propios y gente esperando en la calle.",
        "Olvidar a quien vive fuera: el compañero de Betanzos o de Arteixo también tiene que volver.",
        "No confirmar el acceso del autocar al restaurante: algunas zonas no permiten parar a vehículos grandes.",
      ],
      after: [
        "Si además de la cena organizas una convención, una jornada de equipo o recibes visitas durante el año, todo eso entra en el [transporte para empresas en Galicia](/transporte-empresas-galicia) con un solo proveedor.",
      ],
    },
  ],
  service: {
    title: "¿Organizas la cena de tu empresa?",
    text: "Dime número de personas, restaurante y puntos de recogida. Te propongo vehículos y horarios de vuelta.",
    href: "/transporte-empresas-galicia",
    label: "Transporte para empresas",
  },
  faqs: [
    { question: "¿Con cuánta antelación hay que reservar el autocar para la cena de Navidad?", answer: "Lo recomendable es de cuatro a seis semanas. En las fechas de más cenas de empresa la flota disponible se agota antes." },
    { question: "¿Se puede hacer la vuelta en varios horarios?", answer: "Sí, y es lo recomendable: dos o tres salidas escalonadas para que cada persona vuelva cuando quiera sin depender de un taxi." },
    { question: "¿El conductor espera durante la cena?", answer: "Depende del plan. Se puede contratar ida y vuelta con el vehículo esperando, o ida y vuelta como servicios separados. Se elige lo que salga más eficiente según el horario." },
    { question: "¿Hacéis rutas por varios puntos de la ciudad?", answer: "Sí. Se acuerdan dos o tres puntos de recogida y de vuelta. Recoger casa por casa alarga mucho el servicio." },
  ],
  related: [
    { title: "Transporte para empresas en Galicia", href: "/transporte-empresas-galicia" },
    { title: "Alquiler de minibús con conductor", href: "/alquiler-minibus-con-conductor-galicia" },
    { title: "Transporte para eventos en Galicia", href: "/transporte-eventos-galicia" },
  ],
};

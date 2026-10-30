import { SITE } from "./site";
import type { Page } from "./types";

const titular = SITE.legalName || "[PENDIENTE: razón social]";
const cif = SITE.taxId || "[PENDIENTE: CIF]";
const domicilio = SITE.address || "[PENDIENTE: domicilio social]";

export const PAGES_OTROS: Page[] = [
  {
    slug: "flota",
    metaTitle: "Flota con chófer en Galicia: berlinas, vans, minibuses y autocares",
    metaDescription:
      "Flota con chófer con chófer disponible en Galicia: berlinas Mercedes Clase E y Clase S, vans Clase V, minibuses y autocares para empresas, congresos y tours.",
    hero: {
      eyebrow: "Flota",
      title: "Flota con chófer con chófer en Galicia",
      subtitle: "De una berlina a una operativa de 500 personas. El vehículo adecuado para cada servicio, con chóferes profesionales.",
      image: "/images/flota-luxe-galicia.jpg",
      alt: "Mercedes Clase S y Clase V de la flota Luxe Galicia",
    },
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "Cada servicio pide un vehículo distinto. Un consejero delegado no viaja igual que un equipo técnico, y un congreso de 300 personas no se mueve igual que una familia de cinco.",
          "La flota disponible cubre desde berlinas ejecutivas y de representación hasta autocares de gran turismo, siempre con conductor profesional, seguro de viajeros y vehículos de gama alta en perfecto estado.",
        ],
      },
      { type: "fleet", heading: "Vehículos disponibles", bg: "gray" },
      {
        type: "links",
        heading: "Grupos grandes",
        items: [
          { title: "Autocares y minibuses con conductor", text: "Para congresos, eventos, excursiones y traslados de grupos en toda Galicia.", href: "/alquiler-autocar-con-conductor-galicia" },
          { title: "Transporte para congresos", text: "Lanzaderas, aeropuertos y cena de gala.", href: "/transporte-congresos-galicia" },
        ],
      },
      {
        type: "checklist",
        heading: "En todos los servicios",
        items: [
          "Conductores profesionales con experiencia en servicio a ejecutivos y grupos.",
          "Vehículos de gama alta, limpios y revisados antes de cada servicio.",
          "Seguro de viajeros y documentación en regla.",
          "Agua y cargadores a bordo en berlinas y vans.",
          "Chóferes con inglés bajo petición.",
          "Posibilidad de vehículos coordinados para grandes operativas.",
        ],
      },
    ],
    cta: {
      title: "¿No sabes qué vehículo necesitas?",
      description: "Dime cuántas personas, cuánto equipaje y qué ruta. Te propongo la combinación que mejor encaja.",
    },
    faqs: [
      { question: "¿Los modelos de la web son exactamente los que voy a recibir?", answer: "Los modelos indicados son orientativos ('o similar'). Si un servicio requiere un modelo concreto, se confirma por escrito en el presupuesto." },
      { question: "¿Cuál es la capacidad máxima?", answer: "No hay un límite fijo: para grandes operativas se coordinan varios autocares, minibuses y berlinas en paralelo." },
    ],
  },
  {
    slug: "presupuesto",
    metaTitle: "Pedir presupuesto de transporte con chófer en Galicia | Luxe Galicia",
    metaDescription:
      "Solicita presupuesto de transporte con chófer en Galicia y Oporto: congresos, eventos, empresas, traslados y tours. Respuesta en menos de 24 horas laborables.",
    hero: {
      eyebrow: "Presupuesto",
      title: "Pide tu presupuesto",
      subtitle: "Cuéntame el servicio y tienes una propuesta clara en menos de 24 horas laborables. Para urgencias, WhatsApp.",
      image: "/images/traslados-coruna-santiago.jpg",
      alt: "Berlina con chófer preparada para un servicio en Galicia",
    },
    blocks: [
      { type: "quote", heading: "Datos del servicio", intro: "Cuanta más información, más precisa la propuesta. No hace falta tenerlo todo cerrado." },
      {
        type: "features",
        heading: "Qué pasa después",
        columns: 3,
        bg: "gray",
        items: [
          { title: "1. Revisión", text: "Se estudia la operativa: vehículos, tiempos, rutas y disponibilidad." },
          { title: "2. Propuesta", text: "Recibes el presupuesto detallado por email en menos de 24 h laborables." },
          { title: "3. Confirmación", text: "Confirmas y recibes los datos del chófer y del vehículo antes del servicio." },
        ],
      },
    ],
  },
  {
    slug: "transporte-bodas-galicia",
    metaTitle: "Coches con chófer para bodas en Galicia | Luxe Galicia",
    metaDescription:
      "Coches con chófer para bodas en Galicia: berlinas para los novios y autocares para los invitados entre ceremonia, celebración y alojamiento.",
    serviceType: "Transporte para bodas",
    hero: {
      eyebrow: "Bodas",
      title: "Transporte con chófer para bodas en Galicia",
      subtitle: "Berlina con chófer para los novios y autocares para los invitados. Puntualidad el día que no admite retrasos.",
      image: "/images/finca-montesqueiro-corporativo-presentacion.jpg",
      alt: "Finca en Galicia preparada para una celebración",
    },
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "Una boda en Galicia suele implicar una iglesia, un pazo o una finca a media hora y cien invitados que no deberían conducir de vuelta.",
          "Se cubren dos servicios: berlina de representación con chófer para los novios y familia directa, y autocares o minibuses para los invitados entre ceremonia, celebración y alojamiento.",
        ],
      },
      {
        type: "features",
        heading: "Servicios para bodas",
        columns: 2,
        bg: "gray",
        items: [
          { title: "Novios y familia", text: "Berlina de representación con chófer, decoración discreta y tiempos medidos para las fotos." },
          { title: "Invitados", text: "Autocares y minibuses con horarios de ida y vuelta escalonados, para que nadie conduzca." },
        ],
      },
    ],
    faqs: [
      { question: "¿Con cuánta antelación hay que reservar para una boda?", answer: "En temporada alta (mayo a septiembre), con varios meses de antelación. Los sábados se agotan pronto." },
    ],
  },
  {
    slug: "aviso-legal",
    noindex: true,
    metaTitle: "Aviso legal | Luxe Galicia",
    metaDescription: "Aviso legal del sitio web luxegalicia.com.",
    hero: { title: "Aviso legal", subtitle: "Información legal del titular del sitio web.", image: "/images/flota-luxe-galicia.jpg" },
    blocks: [
      {
        type: "prose",
        heading: "Titular del sitio web",
        paragraphs: [
          `En cumplimiento de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico, se informa de que el titular de este sitio web es ${titular}, con CIF ${cif} y domicilio en ${domicilio}. Contacto: ${SITE.email} · ${SITE.phone}.`,
        ],
      },
      {
        type: "prose",
        heading: "Condiciones de uso",
        paragraphs: [
          "El acceso a este sitio web es gratuito e implica la aceptación de estas condiciones. El usuario se compromete a hacer un uso adecuado de los contenidos y a no emplearlos para actividades ilícitas.",
          "Los precios publicados son orientativos. El precio de cada servicio es el que figura en el presupuesto aceptado por escrito.",
        ],
      },
      {
        type: "prose",
        heading: "Propiedad intelectual",
        paragraphs: [
          "Los textos, diseños y logotipos de este sitio web pertenecen a su titular o se utilizan con autorización. Queda prohibida su reproducción sin consentimiento expreso. Las marcas de vehículos citadas pertenecen a sus respectivos titulares y se mencionan solo a efectos descriptivos.",
        ],
      },
    ],
  },
  {
    slug: "politica-privacidad",
    noindex: true,
    metaTitle: "Política de privacidad | Luxe Galicia",
    metaDescription: "Política de privacidad de luxegalicia.com.",
    hero: { title: "Política de privacidad", subtitle: "Cómo se tratan tus datos personales.", image: "/images/flota-luxe-galicia.jpg" },
    blocks: [
      {
        type: "prose",
        heading: "Responsable del tratamiento",
        paragraphs: [`${titular}, CIF ${cif}, ${domicilio}. Email: ${SITE.email}.`],
      },
      {
        type: "prose",
        heading: "Finalidad y legitimación",
        paragraphs: [
          "Los datos que envías a través del formulario de presupuesto, el email o WhatsApp se usan únicamente para responder a tu solicitud y, si la aceptas, para prestar el servicio contratado. La base legal es tu consentimiento y la ejecución de un contrato o de medidas precontractuales.",
          "Los datos se conservan mientras dure la relación comercial y durante los plazos legalmente exigidos.",
        ],
      },
      {
        type: "prose",
        heading: "Destinatarios y derechos",
        paragraphs: [
          "Los datos solo se comunican a los colaboradores necesarios para prestar el servicio (por ejemplo, el conductor asignado) o cuando lo exija la ley.",
          `Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a ${SITE.email}. También puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).`,
        ],
      },
    ],
  },
  {
    slug: "politica-cookies",
    noindex: true,
    metaTitle: "Política de cookies | Luxe Galicia",
    metaDescription: "Política de cookies de luxegalicia.com.",
    hero: { title: "Política de cookies", subtitle: "Qué cookies usa esta web y cómo gestionarlas.", image: "/images/flota-luxe-galicia.jpg" },
    blocks: [
      {
        type: "prose",
        heading: "Qué cookies se usan",
        paragraphs: [
          "Esta web usa una cookie técnica en el almacenamiento local del navegador para recordar tu elección sobre las cookies.",
          "Si aceptas, se activan cookies de analítica de Google Analytics 4 para medir de forma agregada el uso de la web. Si las rechazas, Google Analytics funciona en modo sin cookies (Consent Mode) y no almacena identificadores en tu navegador.",
        ],
      },
      {
        type: "prose",
        heading: "Cómo gestionarlas",
        paragraphs: [
          "Puedes cambiar tu elección borrando los datos de este sitio en tu navegador. También puedes bloquear o eliminar cookies desde la configuración de Chrome, Firefox, Safari o Edge.",
        ],
      },
    ],
  },
];

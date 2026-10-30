import { SITE } from "./site";
import type { Page } from "./types";

const titular = SITE.legalName || "[PENDIENTE: razón social]";
const cif = SITE.taxId || "[PENDIENTE: CIF]";
const domicilio = SITE.address || "[PENDIENTE: domicilio social]";
const ACTUALIZADO = "octubre de 2026";

export const PAGES_OTROS: Page[] = [
  {
    slug: "flota",
    metaTitle: "Flota con chófer en Galicia: berlinas, vans, minibuses y autocares",
    metaDescription:
      "Flota con chófer disponible en Galicia: berlinas Mercedes Clase E y Clase S, vans Clase V, minibuses y autocares para empresas, congresos y tours.",
    hero: {
      eyebrow: "Flota",
      title: "Flota con chófer en Galicia",
      subtitle: "De una berlina a una operativa de 500 personas. El vehículo adecuado para cada servicio, con chóferes profesionales.",
      image: "/images/flota-berlinas-vans-puente.webp",
      alt: "Berlinas y vans con chófer de la flota de Luxe Galicia",
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
    metaTitle: "Contacto y presupuesto de transporte en Galicia | Luxe Galicia",
    metaDescription:
      "Contacto y presupuesto de transporte corporativo y para eventos en Galicia y Oporto. Respuesta en menos de 24 horas laborables. Teléfono, WhatsApp o formulario.",
    hero: {
      eyebrow: "Contacto",
      title: "Contacto y presupuesto",
      subtitle: "Cuéntame el servicio y tienes una propuesta clara en menos de 24 horas laborables. Para urgencias, WhatsApp.",
      image: "/images/planificacion-transporte-evento.webp",
      alt: "Planificación del transporte de un evento en una tableta",
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
      "Coches con chófer para bodas en Galicia: berlinas para los novios, coches clásicos bajo disponibilidad y autocares para los invitados entre ceremonia, celebración y alojamiento.",
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
        columns: 3,
        bg: "gray",
        items: [
          { title: "Novios y familia", text: "Berlina de representación con chófer, decoración discreta y tiempos medidos para las fotos." },
          { title: "Invitados", text: "Autocares y minibuses con horarios de ida y vuelta escalonados, para que nadie conduzca." },
          { title: "Coches clásicos", text: "Para quien busca una entrada con historia, coches clásicos con conductor bajo disponibilidad. Consulta modelos y fechas." },
        ],
      },
      {
        type: "zigzag",
        items: [
          {
            title: "El día que no admite retrasos",
            paragraphs: [
              "El chófer conoce los tiempos de la ceremonia, las fotos y la llegada al banquete. Tú solo tienes que disfrutar.",
              "Para los invitados, horarios de vuelta escalonados: el primero al terminar la cena y el último al cierre de la fiesta.",
            ],
            image: "/images/berlina-puerta-abierta.jpg",
            alt: "Berlina con chófer y la puerta abierta esperando a los novios",
          },
        ],
      },
    ],
    faqs: [
      { question: "¿Tenéis coches clásicos para bodas?", answer: "Sí, bajo disponibilidad y con conductor. Escribe con la fecha y el lugar y recibes los modelos disponibles." },
      { question: "¿Con cuánta antelación hay que reservar para una boda?", answer: "En temporada alta (mayo a septiembre), con varios meses de antelación. Los sábados se agotan pronto." },
    ],
  },
  {
    slug: "aviso-legal",
    noindex: true,
    metaTitle: "Aviso legal | Luxe Galicia",
    metaDescription: "Aviso legal del sitio web luxegalicia.com: titular, condiciones de uso, responsabilidad y propiedad intelectual.",
    hero: { title: "Aviso legal", subtitle: "Quién está detrás de esta web y en qué condiciones puedes usarla.", image: "/images/flota-luxe-galicia.jpg" },
    blocks: [
      {
        type: "legal",
        updated: ACTUALIZADO,
        sections: [
          {
            heading: "Titular del sitio web",
            paragraphs: [
              "En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), estos son los datos del titular de luxegalicia.com:",
            ],
            list: [
              `Titular: ${titular}`,
              `CIF: ${cif}`,
              `Domicilio: ${domicilio}`,
              `Email: ${SITE.email}`,
              `Teléfono: ${SITE.phone}`,
              "Nombre comercial: Luxe Galicia",
            ],
          },
          {
            heading: "Objeto",
            paragraphs: [
              "Esta web informa sobre los servicios de transporte con conductor de Luxe Galicia en Galicia y el norte de Portugal: traslados, transporte para congresos, eventos y empresas, y tours, y permite solicitar presupuesto.",
              "Los servicios se prestan con vehículos y conductores debidamente autorizados para el transporte de viajeros, propios o de empresas colaboradoras, según el tipo de servicio.",
            ],
          },
          {
            heading: "Condiciones de uso",
            paragraphs: [
              "El acceso a esta web es gratuito y supone aceptar este aviso legal. Te comprometes a usar la web y sus contenidos de forma lícita, sin dañar la imagen del titular ni de terceros y sin introducir virus o código dañino.",
              "Para pedir presupuesto debes facilitar datos veraces. Si los datos son de otra persona (por ejemplo, de los asistentes a un evento), garantizas que tienes su permiso para comunicarlos.",
            ],
          },
          {
            heading: "Precios y presupuestos",
            paragraphs: [
              "Los precios y tiempos que aparecen en la web son orientativos. El precio de cada servicio es el que figura en el presupuesto aceptado por escrito, que recoge el vehículo, el itinerario, los horarios y las condiciones de cancelación.",
            ],
          },
          {
            heading: "Responsabilidad",
            paragraphs: [
              "El titular procura que la información de la web sea correcta y esté actualizada, pero no garantiza la ausencia de errores ni responde de las decisiones tomadas solo a partir de ella. Distancias, tiempos de viaje, fechas de eventos y datos de terceros pueden cambiar.",
              "Tampoco responde de interrupciones técnicas ajenas a su control ni de los daños que pueda causar el uso indebido de la web.",
            ],
          },
          {
            heading: "Enlaces a otras webs",
            paragraphs: [
              "La web incluye enlaces a sitios de terceros (organismos, recintos, partners). El titular no controla esos sitios ni responde de sus contenidos. Si detectas un enlace a un contenido ilícito, escribe a " + SITE.email + " y se retirará.",
            ],
          },
          {
            heading: "Propiedad intelectual e industrial",
            paragraphs: [
              "Los textos, el diseño, el logotipo y la marca Luxe Galicia pertenecen al titular o se usan con autorización. Las fotografías son propias, cedidas por colaboradores o de bancos de imágenes con licencia. No se permite su reproducción, distribución o transformación sin permiso por escrito.",
              "Las marcas de vehículos y los nombres de recintos y eventos citados pertenecen a sus titulares y se mencionan solo a efectos descriptivos.",
            ],
          },
          {
            heading: "Protección de datos y cookies",
            paragraphs: [
              "El tratamiento de tus datos personales se explica en la política de privacidad, y el uso de cookies, en la política de cookies.",
            ],
          },
          {
            heading: "Legislación aplicable",
            paragraphs: [
              "Este aviso legal se rige por la legislación española. Para cualquier conflicto, las partes se someten a los juzgados y tribunales de A Coruña, salvo que la ley establezca otro fuero, como en el caso de los consumidores, que pueden acudir a los de su domicilio.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "politica-privacidad",
    noindex: true,
    metaTitle: "Política de privacidad | Luxe Galicia",
    metaDescription: "Política de privacidad de luxegalicia.com: qué datos se tratan, para qué, durante cuánto tiempo y cómo ejercer tus derechos.",
    hero: { title: "Política de privacidad", subtitle: "Qué datos se tratan, para qué y cómo ejercer tus derechos.", image: "/images/flota-luxe-galicia.jpg" },
    blocks: [
      {
        type: "legal",
        updated: ACTUALIZADO,
        sections: [
          {
            heading: "Responsable del tratamiento",
            list: [
              `Responsable: ${titular}`,
              `CIF: ${cif}`,
              `Domicilio: ${domicilio}`,
              `Email para temas de privacidad: ${SITE.email}`,
            ],
          },
          {
            heading: "Qué datos se tratan",
            list: [
              "Datos de contacto: nombre, empresa, email y teléfono.",
              "Datos del servicio: fechas, horarios, número de personas, itinerario, vuelos o trenes y necesidades especiales.",
              "Datos de pasajeros que nos facilites para prestar el servicio (por ejemplo, el nombre para el cartel de recogida).",
              "Datos de navegación, solo si aceptas las cookies de analítica.",
            ],
            paragraphs: ["No se piden datos especialmente protegidos. Si comunicas alguno (por ejemplo, una necesidad de movilidad reducida), se usa solo para adaptar el servicio."],
          },
          {
            heading: "Para qué se usan y con qué base legal",
            table: {
              head: ["Finalidad", "Base legal"],
              rows: [
                ["Responder a tu solicitud de presupuesto o consulta", "Medidas precontractuales a petición tuya (art. 6.1.b RGPD)"],
                ["Prestar y facturar el servicio contratado", "Ejecución del contrato y obligaciones legales (art. 6.1.b y 6.1.c RGPD)"],
                ["Enviarte información sobre servicios similares, si eres cliente", "Interés legítimo (art. 6.1.f RGPD y art. 21 LSSI). Puedes oponerte en cualquier momento"],
                ["Medir el uso de la web con Google Analytics", "Tu consentimiento (art. 6.1.a RGPD)"],
              ],
            },
          },
          {
            heading: "Cuánto tiempo se conservan",
            paragraphs: [
              "Las solicitudes de presupuesto que no se convierten en servicio se conservan un máximo de un año. Los datos de clientes, mientras dure la relación comercial y después durante los plazos legales (seis años para la documentación contable y fiscal). Después se bloquean y se suprimen.",
            ],
          },
          {
            heading: "A quién se comunican",
            paragraphs: ["No se venden ni se ceden datos a terceros. Solo acceden a ellos quienes los necesitan para prestar el servicio o por obligación legal:"],
            list: [
              "Empresas de transporte y conductores colaboradores que realizan el servicio.",
              "Proveedores tecnológicos que actúan como encargados del tratamiento: alojamiento web (Vercel Inc.), analítica (Google Ireland Ltd.), correo electrónico y el servicio de envío del formulario.",
              "WhatsApp (Meta Platforms), si eliges contactar por ese canal.",
              "Administraciones públicas, juzgados o fuerzas de seguridad cuando lo exija la ley.",
            ],
          },
          {
            heading: "Transferencias internacionales",
            paragraphs: [
              "Algunos proveedores (Vercel, Google, Meta) pueden tratar datos en Estados Unidos. Estas transferencias se amparan en el Marco de Privacidad de Datos UE-EE. UU. o en las cláusulas contractuales tipo aprobadas por la Comisión Europea.",
            ],
          },
          {
            heading: "Tus derechos",
            paragraphs: [`Puedes ejercer en cualquier momento estos derechos escribiendo a ${SITE.email}, indicando qué derecho ejerces:`],
            list: [
              "Acceso: saber qué datos tuyos se tratan.",
              "Rectificación: corregir datos inexactos.",
              "Supresión: pedir que se borren.",
              "Oposición y limitación del tratamiento.",
              "Portabilidad: recibir tus datos en un formato estándar.",
              "Retirar el consentimiento dado, sin que afecte a lo tratado antes.",
            ],
          },
          {
            heading: "Reclamaciones",
            paragraphs: [
              "Si consideras que tus datos no se tratan correctamente, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).",
            ],
          },
          {
            heading: "Seguridad",
            paragraphs: [
              "La web funciona con conexión cifrada (HTTPS) y los datos se guardan con medidas técnicas y organizativas adecuadas para evitar su pérdida, alteración o acceso no autorizado.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "politica-cookies",
    noindex: true,
    metaTitle: "Política de cookies | Luxe Galicia",
    metaDescription: "Política de cookies de luxegalicia.com: qué cookies se usan, para qué y cómo gestionarlas.",
    hero: { title: "Política de cookies", subtitle: "Qué cookies usa esta web y cómo gestionarlas.", image: "/images/flota-luxe-galicia.jpg" },
    blocks: [
      {
        type: "legal",
        updated: ACTUALIZADO,
        sections: [
          {
            heading: "Qué son las cookies",
            paragraphs: [
              "Son pequeños archivos que una web guarda en tu navegador para recordar información sobre tu visita. Algunas son necesarias para que la web funcione y otras sirven para medir cómo se usa.",
            ],
          },
          {
            heading: "Qué cookies usa esta web",
            paragraphs: ["Esta web no usa cookies publicitarias ni de redes sociales. Solo estas:"],
            table: {
              head: ["Nombre", "Titular", "Para qué", "Duración"],
              rows: [
                ["cookie-consent", "Luxe Galicia", "Recordar si aceptas o rechazas la analítica (almacenamiento local, técnica)", "Hasta que la borres"],
                ["_ga", "Google", "Distinguir usuarios de forma anónima en Google Analytics 4", "2 años"],
                ["_ga_XEJKTB7SZR", "Google", "Mantener el estado de la sesión en Google Analytics 4", "2 años"],
              ],
            },
          },
          {
            heading: "Cómo funciona tu elección",
            paragraphs: [
              "Las cookies de Google Analytics solo se instalan si pulsas Aceptar en el aviso de cookies.",
              "Si las rechazas, Google Analytics funciona en modo sin cookies (Consent Mode): no guarda identificadores en tu navegador y solo recibe señales agregadas y anónimas.",
            ],
          },
          {
            heading: "Cómo cambiar o retirar el consentimiento",
            paragraphs: [
              "Borra los datos de este sitio en tu navegador y el aviso volverá a aparecer en tu próxima visita. También puedes bloquear o eliminar cookies desde la configuración del navegador:",
            ],
            list: [
              "Chrome: Configuración → Privacidad y seguridad → Cookies.",
              "Safari: Ajustes → Privacidad → Gestionar datos de sitios web.",
              "Firefox: Ajustes → Privacidad y seguridad → Cookies y datos del sitio.",
              "Edge: Configuración → Cookies y permisos del sitio.",
            ],
          },
          {
            heading: "Más información",
            paragraphs: [
              "Sobre cómo trata Google los datos de Analytics: policies.google.com/privacy. Sobre tus datos personales en esta web: política de privacidad.",
            ],
          },
        ],
      },
    ],
  },
];

import type { Guide } from "../types";

export const guia: Guide = {
    slug: "transporte-palexco",
    category: "Sede",
    title: "Transporte para congresos en Palexco (A Coruña): la guía completa",
    metaTitle: "Transporte para congresos en Palexco, A Coruña | Guía completa",
    metaDescription:
      "Guía para organizar el transporte de un congreso en Palexco (A Coruña): llegadas por Alvedro, Santiago, Oporto y tren, hoteles, lanzaderas, ponentes, cena de gala y días de crucero.",
    image: "/images/sala-eventos-empresas.jpg",
    alt: "Sala preparada para las sesiones de un congreso",
    readMinutes: 7,
    date: "2026-10-30",
    stats: [{"value": "~15 min", "label": "aeropuerto de Alvedro"}, {"value": "~50 min", "label": "aeropuerto de Santiago"}, {"value": "~3 h", "label": "aeropuerto de Oporto"}, {"value": "~10 min", "label": "estación de tren"}],
    intro: [
      "Palexco tiene una ventaja que muchas sedes envidian: está en el centro de A Coruña, en el muelle, con la ciudad y los hoteles alrededor.",
      "Y precisamente por eso mucha gente se confía. Piensa que en una sede céntrica el transporte se resuelve solo. Hasta que el primer día llegan doscientas personas por tres aeropuertos, llueve, hay un crucero atracado al lado y la cena de gala es a 25 kilómetros.",
    ],
    summary: [
      "El transporte se concentra en tres momentos: llegadas y salidas, hoteles fuera del centro y la cena de gala.",
      "Tus asistentes llegarán por Alvedro, Santiago, Oporto y tren. Pide ese dato en la inscripción.",
      "Los días de crucero y los días de lluvia cambian el plan. Ten previsto el plan B antes de necesitarlo.",
      "La cena de clausura suele ser el pico de vehículos del congreso.",
    ],
    sections: [
      {
        heading: "Una sede en el centro no significa cero transporte",
        paragraphs: [
          "Palexco está junto a la avenida de la Marina y la terminal de cruceros, a unos minutos a pie de la Ciudad Vieja y de María Pita. Si tu congresista duerme en el centro, va andando. Perfecto.",
          "Pero un congreso médico o científico de varios cientos de personas no duerme todo en el centro. Tiene ponentes que llegan y se van el mismo día, una zona de industria que monta y desmonta, cursos precongreso y una cena de clausura fuera de la ciudad. Por eso el [transporte para congresos médicos en A Coruña](/transporte-congresos-galicia) se planifica aunque la sede esté a un paseo.",
        ],
        quote: "En Palexco el reto no es llegar a la sede. Es coordinar todo lo que pasa alrededor.",
      },
      {
        heading: "Por dónde llegan tus asistentes",
        paragraphs: ["A Coruña tiene aeropuerto propio, pero con pocas rutas. Lo normal es que el congreso se reparta entre cuatro puertas de entrada:"],
        table: {
          head: ["Llegada", "Hasta Palexco", "Quién la usa"],
          rows: [
            ["Aeropuerto de A Coruña (Alvedro)", "~15 min", "Asistentes de Madrid y Barcelona"],
            ["Aeropuerto de Santiago", "~50 min", "Resto de España y vuelos europeos"],
            ["Aeropuerto de Oporto", "~3 h", "Internacionales, sobre todo de fuera de Europa"],
            ["Estación de A Coruña", "~10 min", "Alta velocidad desde Madrid"],
          ],
        },
        after: ["Las recogidas en [el aeropuerto de Alvedro, Santiago u Oporto](/aeropuertos-galicia) se agrupan por franjas de vuelo, con el chófer siguiendo cada llegada."],
        tip: "Pide en el formulario de inscripción el medio de llegada, la hora y el aeropuerto o la estación. Con ese dato el plan de recogidas se diseña solo.",
      },
      {
        heading: "Qué transporte necesita de verdad un congreso aquí",
        image: {"src": "/images/flota-berlinas-hotel.webp", "alt": "Berlinas con chófer esperando a ponentes frente al hotel", "caption": "Los ponentes con agenda apretada son los que más agradecen una berlina a disposición."},
        list: [
          "Recibimiento: recogidas en aeropuertos y estación agrupadas por franjas horarias, con cartel del congreso.",
          "Ponentes y comité: berlinas con chófer a disposición, sobre todo para quien llega y se va el mismo día.",
          "Hoteles fuera del centro: lanzadera por bloques antes de las plenarias y al cierre de cada jornada.",
          "Industria: vans para material ligero y personal de stand en montaje y desmontaje.",
          "Cena de gala: [autocares con conductor](/alquiler-autocar-con-conductor-galicia) a pazos, fincas o restaurantes de los alrededores, con vuelta escalonada.",
          "Acompañantes: [excursión privada a Santiago de Compostela](/tours-con-chofer-galicia/santiago-de-compostela), Costa da Morte o Betanzos.",
        ],
      },
      {
        heading: "Cuatro cosas que solo sabes si trabajas aquí",
        list: [
          "Días de crucero: con barcos atracados en la terminal de al lado, el entorno del puerto se llena de autobuses y peatones. Mira el calendario de escalas y suma margen.",
          "Punto de subida y bajada: acuérdalo con el recinto y comunícalo bien. Un autocar parado donde no debe es atasco y multa.",
          "Lluvia: lo que con sol es un paseo de diez minutos, con lluvia se convierte en doscientas personas buscando taxi. La ciudad no los tiene. Y si ese día juega el Deportivo en Riazor, menos aún.",
          "Niebla en Alvedro: en ciertas épocas hay desvíos a Santiago. Si tu proveedor tiene flota disponible, reubica las recogidas en minutos.",
        ],
        tip: "Ten una lanzadera de reserva para los días de lluvia. Es lo que más agradecen los asistentes y lo que menos se presupuesta.",
      },
      {
        heading: "Cuántos vehículos necesitas",
        paragraphs: [
          "Una referencia real: congreso de 400 asistentes, la mitad alojados fuera del centro.",
        ],
        table: {
          head: ["Momento", "Flota orientativa"],
          rows: [
            ["Franjas punta hotel–sede", "2 o 3 autocares en rotación + 1 minibús de apoyo"],
            ["Ponentes y comité", "3 o 4 berlinas con chófer"],
            ["Llegadas del primer día", "Vans y minibuses por franjas de vuelo"],
            ["Cena de clausura", "El pico: un autocar por cada 50 personas, con vuelta escalonada"],
          ],
        },
        after: ["Con el programa y la lista de hoteles se calcula el plan exacto. Sin ellos, cualquier cifra es una suposición. Si el formato es una feria grande y no un congreso, la referencia es [ExpoCoruña](/guias/transporte-expocoruna), donde casi nadie llega andando."],
      },
    ],
    service: { title: "¿Tu congreso es en Palexco?", text: "Pásame el programa y la lista de hoteles. Recibes el plan de transporte y el presupuesto en 24 horas.", href: "/transporte-congresos-galicia", label: "Transporte para congresos" },
    faqs: [
      { question: "¿Hace falta lanzadera en un congreso en Palexco?", answer: "Para los asistentes alojados en el centro, normalmente no: van andando. Sí para hoteles fuera del centro, para llegadas y salidas de aeropuertos, para los días de lluvia y para actividades y cenas fuera de la ciudad." },
      { question: "¿Qué aeropuerto es mejor para un congreso en Palexco?", answer: "Alvedro está a 15 minutos, pero tiene menos vuelos. Santiago, a unos 50 minutos, concentra más conexiones. Para asistentes internacionales, Oporto. Lo habitual es combinar los tres." },
      { question: "¿Podéis encargaros de los ponentes además de la lanzadera?", answer: "Sí. Lo más eficaz es un único plan con berlinas para ponentes y comité, lanzaderas para asistentes y autocares para la cena, coordinado por una sola persona." },
      { question: "¿Qué pasa si un vuelo a Alvedro se desvía a Santiago?", answer: "Se reubica la recogida en el aeropuerto de Santiago con el vehículo disponible más cercano. Por eso conviene que las recogidas las gestione un proveedor con flota suficiente y seguimiento de vuelos." },
    ],
    related: [
      { title: "Transporte para congresos y eventos en Galicia", href: "/guias/transporte-congresos-eventos-galicia" },
      { title: "Cómo llegar al estadio de Riazor", href: "/guias/como-llegar-estadio-riazor" },
      { title: "Calendario de congresos y ferias 2027", href: "/guias/calendario-congresos-ferias-galicia-2027" },
      { title: "Para agencias MICE", href: "/agencias-mice" },
    ],
};

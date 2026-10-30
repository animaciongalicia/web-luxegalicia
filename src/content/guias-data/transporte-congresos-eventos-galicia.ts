import type { Guide } from "../types";

export const guia: Guide = {
  slug: "transporte-congresos-eventos-galicia",
  category: "Guía",
  title: "Transporte para congresos y eventos en Galicia: la guía completa",
  metaTitle: "Transporte para congresos y eventos en Galicia: guía completa",
  metaDescription:
    "Cómo planificar el transporte de un congreso o evento en Galicia: cuántos vehículos necesitas, plazos, aeropuertos, sedes, lanzaderas, cena de gala y los errores que más caro salen.",
  image: "/images/flota-vans-congreso.jpg",
  alt: "Vans con chófer preparadas en la entrada de un congreso en Galicia",
  readMinutes: 9,
  date: "2026-10-30",
  stats: [
    { value: "4", label: "aeropuertos en juego" },
    { value: "1-500", label: "personas por operativa" },
    { value: "~50 min", label: "A Coruña – Santiago" },
    { value: "3-6 meses", label: "antelación en grandes congresos" },
  ],
  intro: [
    "El transporte de un congreso parece lo fácil. Hasta que haces números: 400 asistentes, seis hoteles, tres aeropuertos, una cena de gala a 25 kilómetros y un programa que cambia la semana anterior.",
    "Te voy a contar lo que funciona en Galicia después de más de una década moviendo congresos, incentivos y eventos de empresa. Sin teoría. Decisiones que puedes tomar hoy.",
  ],
  summary: [
    "Empieza por las llegadas, no por la sede: pide aeropuerto y hora en la inscripción.",
    "Dimensiona la flota por el pico de 30 minutos, no por el total de asistentes.",
    "En temporada alta, reserva con 3 a 6 meses de antelación.",
    "La cena de gala es el momento más delicado. Y la vuelta, más que la ida.",
  ],
  sections: [
    {
      heading: "Empieza por las llegadas, no por la sede",
      paragraphs: [
        "En Galicia juegan cuatro aeropuertos: Santiago, A Coruña, Vigo y Oporto. Tus asistentes no van a llegar todos por el mismo. Los internacionales tiran de Oporto y Santiago. Los nacionales, de Santiago y A Coruña. Y los de Madrid, cada vez más, en tren de alta velocidad.",
        "Si no sabes por dónde llega tu gente, no puedes planificar nada. Es así de simple.",
      ],
      table: {
        head: ["Llegada", "Quién la usa", "Clave"],
        rows: [
          ["Aeropuerto de Santiago", "Nacionales y europeos", "El de más vuelos de Galicia"],
          ["Aeropuerto de A Coruña", "Madrid y Barcelona", "A 10 minutos de la ciudad"],
          ["Aeropuerto de Vigo", "Nacionales", "Junto a IFEVI"],
          ["Aeropuerto de Oporto", "Internacionales", "[Traslado privado de Oporto a Galicia](/oporto-galicia) de 1 h 35 min a 3 h"],
          ["Tren AVE", "Madrid", "Estaciones en Santiago, A Coruña, Vigo y Ourense"],
        ],
      },
      tip: "Añade al formulario de inscripción tres campos: medio de llegada, hora y aeropuerto o estación. Con eso, el plan de recogidas se diseña solo.",
    },
    {
      heading: "Cuántos vehículos necesitas",
      image: { src: "/images/flota-berlinas-aparcamiento.jpg", alt: "Berlinas y vans con chófer preparadas para un congreso", caption: "La flota se dimensiona por el pico de asistentes en una misma franja de 30 minutos." },
      paragraphs: [
        "La regla rápida: calcula cuántas personas tienen que moverse en la misma franja de 30 minutos, divide por la capacidad del vehículo y suma un 15 % de margen. No calcules con el total de inscritos. Calcula con el pico.",
      ],
      list: [
        "1-3 personas: berlina ejecutiva, para ponentes, invitados especiales y comité.",
        "4-7 personas: van ejecutiva.",
        "8-19 personas: minibús.",
        "20-55 personas: autocar. Para 300 asistentes en el mismo bloque, 6 autocares en una o dos rotaciones.",
        "Siempre: una berlina de reserva para imprevistos con invitados especiales.",
      ],
      after: [
        "Si tu evento necesita grupos grandes, mira cómo funciona el [alquiler de autocares y minibuses con conductor en Galicia](/alquiler-autocar-con-conductor-galicia). Y para ver qué entra en cada vehículo, la [flota de berlinas, vans y minibuses con chófer](/flota).",
      ],
    },
    {
      heading: "Lanzaderas: frecuencia fija o por bloques",
      paragraphs: [
        "Frecuencia fija, cada 15 o 20 minutos, funciona cuando los hoteles están cerca y las sesiones empiezan escalonadas. Por bloques, con salidas a hora cerrada antes de cada plenaria, funciona cuando todo el mundo empieza a la vez.",
        "Y la ciudad cambia el plan. En A Coruña, con [Palexco en pleno puerto](/guias/transporte-palexco), mucha gente va andando: la lanzadera se reserva para hoteles alejados y para la cena. En Santiago, con el [Palacio de Congresos fuera del casco histórico](/guias/transporte-palacio-congresos-santiago), la lanzadera es casi obligatoria.",
      ],
      quote: "No calcules la flota con el total de inscritos. Calcúlala con el pico.",
    },
    {
      heading: "Cuándo reservar",
      table: {
        head: ["Tipo de servicio", "Antelación recomendada"],
        rows: [
          ["Congreso de más de 200 personas en temporada alta (mayo-octubre)", "3 a 6 meses"],
          ["Incentivos y eventos de 50 a 200 personas", "1 a 3 meses"],
          ["Traslados ejecutivos", "24 a 48 horas"],
          ["Semana Santa, julio-agosto, puentes y Año Santo 2027", "Lo antes posible"],
        ],
      },
      tip: "En 2027, con el Año Santo, Santiago va a estar tensionado casi todo el año. Si tu congreso es allí, adelanta todas las reservas.",
    },
    {
      heading: "Los errores que más caros salen",
      list: [
        "Contratar vehículos sueltos a varias empresas, sin nadie que coordine.",
        "No prever la vuelta escalonada de la cena de gala.",
        "Olvidar que el casco histórico de Santiago tiene el tráfico restringido.",
        "No pedir el aeropuerto de llegada en la inscripción.",
        "Calcular tiempos con el mapa y no con el tráfico real de entrada a las ciudades.",
      ],
    },
    {
      heading: "Quién coordina",
      paragraphs: [
        "Es la pieza que más se subestima. Un coordinador de transporte con línea directa con la secretaría técnica resuelve en minutos lo que, sin él, son veinte llamadas.",
        "Es lo que separa una operativa profesional de una lista de coches. Si organizas desde fuera, eso es lo que buscas en un [partner de transporte en destino para agencias MICE](/agencias-mice): una persona, un plan, una factura.",
      ],
    },
    {
      heading: "La cena de gala: el momento más delicado",
      image: { src: "/images/cena-gala-evento-galicia.jpg", alt: "Salón preparado para la cena de gala de un congreso en Galicia" },
      paragraphs: [
        "La cena suele ser el pico de transporte de todo el congreso: todos salen a la vez hacia un pazo, una finca o un restaurante fuera de la ciudad. Y vuelven a horas distintas.",
        "La clave está en la vuelta. Un primer autocar al terminar la cena, otro una hora después y el último al cierre. Así nadie espera y nadie se va antes de tiempo.",
      ],
      tip: "Pide al restaurante la hora real de fin del servicio y programa la primera salida 15 minutos después, no antes.",
      after: [
        "¿Quieres ver cómo se monta todo esto de principio a fin? Aquí tienes el [servicio de transporte para congresos en Galicia](/transporte-congresos-galicia), con lanzaderas, aeropuertos y cena de gala en un solo plan.",
      ],
    },
  ],
  service: {
    title: "¿Tienes un congreso en Galicia?",
    text: "Pásame fechas, asistentes y hoteles. Recibes el plan de transporte y el presupuesto en 24 horas.",
    href: "/transporte-congresos-galicia",
    label: "Transporte para congresos",
  },
  faqs: [
    { question: "¿Qué aeropuerto es mejor para un congreso en A Coruña?", answer: "Alvedro (A Coruña) está a 10 minutos de la ciudad, pero tiene menos vuelos. Santiago, a 50 minutos, concentra más conexiones. Lo habitual es combinar ambos y, para internacionales, Oporto." },
    { question: "¿Cuánto cuesta el transporte de un congreso?", answer: "Depende de los asistentes, los hoteles, los días y las actividades. Con el programa y las cifras de asistentes se prepara un presupuesto cerrado en 24 horas laborables." },
    { question: "¿Cuántos autocares necesito para 300 asistentes?", answer: "Si los 300 se mueven en el mismo bloque horario, unos 6 autocares en una rotación, o 3-4 en dos rotaciones si hay margen de tiempo. Se calcula con el pico de 30 minutos, no con el total." },
  ],
  related: [
    { title: "Transporte para congresos en Palexco", href: "/guias/transporte-palexco" },
    { title: "Organizar un evento en Galicia desde fuera", href: "/guias/organizar-evento-en-galicia-agencias" },
    { title: "Calendario de congresos y ferias 2027", href: "/guias/calendario-congresos-ferias-galicia-2027" },
    { title: "Transporte para eventos en Galicia", href: "/transporte-eventos-galicia" },
  ],
};

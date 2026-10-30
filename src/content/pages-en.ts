import type { Page } from "./types";

export const PAGES_EN: Page[] = [
  {
    slug: "mice-ground-transportation",
    lang: "en",
    metaTitle: "MICE ground transportation in Galicia, Spain | Luxe Galicia",
    metaDescription:
      "Ground transportation partner in Galicia for MICE agencies and DMCs: sedans, executive vans, minibuses and coaches, on-site coordinator, single invoice, quote within 24 hours.",
    serviceType: "MICE ground transportation",
    alternate: "/agencias-mice",
    hero: {
      eyebrow: "For MICE agencies & DMCs",
      title: "Your ground transportation partner in Galicia",
      subtitle: "You plan the event from abroad. I move your people on the ground: one point of contact, one invoice, the right vehicles.",
      image: "/images/flota-luxe-galicia.jpg",
      alt: "Mercedes S-Class sedans and V-Class vans available in Galicia",
    },
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "Events rarely fail because of a vehicle. They fail because of coordination: the coach at the wrong hotel, the speaker waiting at Santiago airport, the late-night schedule change nobody handles.",
          "Local transport companies in Galicia are small. Your congress needs fifteen vehicles on the same morning. Since 2013, Luxe Galicia has coordinated chauffeur-driven fleets across Galicia and Northern Portugal for agencies that need capacity, punctuality and someone who answers the phone.",
        ],
      },
      {
        type: "features",
        heading: "What you get",
        columns: 3,
        bg: "gray",
        items: [
          { title: "Single point of contact", text: "One person accountable for the whole transport operation, before, during and after the event." },
          { title: "Real capacity", text: "From one sedan to 500 attendees: sedans, executive vans, minibuses and coaches in a single operation." },
          { title: "One invoice", text: "One proposal, one invoice, clear terms." },
          { title: "On-site coordinator", text: "For group operations, a coordinator on the ground manages pick-ups and real-time changes." },
          { title: "White label", text: "Drivers can operate under your agency's branding and protocol." },
          { title: "Quote within 24 h", text: "Detailed proposal within 24 business hours. WhatsApp for urgent requests." },
        ],
      },
      {
        type: "checklist",
        heading: "Galicia at a glance",
        items: [
          "Four airports: Santiago (SCQ), A Coruña (LCG), Vigo (VGO) and Porto (OPO).",
          "Main venues: Palexco and ExpoCoruña (A Coruña), Santiago Congress Centre, City of Culture, IFEVI (Vigo).",
          "Short distances: A Coruña–Santiago ~50 min, Santiago–Vigo ~1 h, Vigo–Porto ~1 h 35 min.",
          "Full programmes with hotels and experiences through Suunia, our DMC partner.",
        ],
      },
      { type: "quote", heading: "Request your proposal" },
    ],
    faqs: [
      { question: "Do you work with agencies from outside Spain?", answer: "Yes. International and national MICE agencies are the main clients. Service is provided in Spanish and English." },
      { question: "Do you cover Porto?", answer: "Yes. Porto airport is one of the main gateways to Galicia, and transfers from Porto to any point in Galicia are part of the daily operation." },
    ],
  },
  {
    slug: "porto-galicia-private-chauffeur",
    lang: "en",
    metaTitle: "Porto to Galicia private chauffeur | Santiago, Vigo, A Coruña",
    metaDescription:
      "Private chauffeur transfers from Porto airport and city to Santiago de Compostela, Vigo, the Rías Baixas and A Coruña. Flight tracking, meet and greet, fixed price.",
    serviceType: "Porto to Galicia private transfers",
    alternate: "/oporto-galicia",
    hero: {
      eyebrow: "Porto · Gateway to Galicia",
      title: "From Porto to Galicia with a private chauffeur",
      subtitle: "Land in Porto, the best-connected airport in the region, and arrive at your hotel in Vigo, Santiago or A Coruña door to door.",
      image: "/images/traslados-coruna-santiago.jpg",
      alt: "Private chauffeur car on the motorway between Porto and Galicia",
    },
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "Flying from the US or most European cities, you will probably land in Porto. Vigo is 1 h 35 min away, Santiago de Compostela 2 h 20 min and A Coruña 3 h.",
          "Trains need transfers, buses run on fixed timetables and a rental car means cross-border drop-off fees and electronic tolls. With a private chauffeur, you walk out of arrivals and stop thinking about it until you reach your hotel.",
        ],
      },
      {
        type: "routes",
        heading: "From Porto airport",
        bg: "gray",
        rows: [
          { destino: "Vigo", km: 145, tiempo: "1 h 35 min", precio: "oporto-vigo" },
          { destino: "Pontevedra", km: 175, tiempo: "1 h 55 min", precio: "oporto-pontevedra" },
          { destino: "Sanxenxo / O Grove", km: 195, tiempo: "2 h 10 min", precio: "oporto-sanxenxo" },
          { destino: "Santiago de Compostela", km: 230, tiempo: "2 h 20 min", precio: "oporto-santiago" },
          { destino: "A Coruña", km: 300, tiempo: "3 h", precio: "oporto-coruna" },
        ],
      },
      {
        type: "checklist",
        heading: "Included in every transfer",
        items: [
          "Flight tracking: your driver adjusts to your real arrival time.",
          "Meet and greet with a name sign in arrivals.",
          "Tolls, fuel and reasonable waiting time.",
          "Executive sedan, executive van or minibus depending on your group.",
          "English-speaking drivers on request.",
          "Optional stops on the way (Valença, Tui, Baiona).",
        ],
      },
      { type: "quote", heading: "Book your transfer" },
    ],
    faqs: [
      { question: "What is the fastest way from Porto to Santiago de Compostela?", answer: "A direct road transfer: about 2 hours 20 minutes from Porto airport. Public transport requires changes and takes considerably longer." },
      { question: "Is there a border check between Portugal and Spain?", answer: "No. Both countries are in the Schengen area, so there are no routine border controls." },
      { question: "Can you start a Camino de Santiago group in Porto?", answer: "Yes. Transfers to the starting point of the Portuguese Way and back from Santiago are available for groups of any size." },
    ],
  },
  {
    slug: "galicia-chauffeur-tours",
    lang: "en",
    metaTitle: "Galicia private chauffeur tours: 3, 5 and 7 days | Luxe Galicia",
    metaDescription:
      "Private chauffeur tours of Galicia, Spain: 3, 5 and 7-day itineraries and day trips to the Rías Baixas, Ribeira Sacra, Santiago de Compostela and the Cíes Islands.",
    serviceType: "Private chauffeur tours in Galicia",
    alternate: "/tours-con-chofer-galicia",
    hero: {
      eyebrow: "Private chauffeur tours",
      title: "Discover Galicia with your own chauffeur",
      subtitle: "Santiago de Compostela, Albariño wine country, Atlantic lighthouses and river canyons. A executive van, a professional driver and an itinerary that adapts to you.",
      image: "/images/tours-rias-baixas.jpg",
      alt: "Albariño vineyards in the Rías Baixas, Galicia",
    },
    blocks: [
      {
        type: "zigzag",
        items: [
          {
            title: "Galicia in 3 days",
            paragraphs: ["Santiago de Compostela, the Rías Baixas (Combarro, Cambados, O Grove) and Pontevedra. Start in Santiago or Porto."],
            image: "/images/tours-santiago.jpg",
            alt: "Santiago de Compostela cathedral",
          },
          {
            title: "Galicia in 5 days",
            paragraphs: ["A Coruña, the Costa da Morte and Finisterre, Santiago, the Rías Baixas and Vigo. The full Atlantic coast."],
            image: "/images/tours-costa-da-morte.jpg",
            alt: "Costa da Morte cliffs",
          },
          {
            title: "Galicia in 7 days",
            paragraphs: ["Everything above plus the Ribeira Sacra canyons, the Roman walls of Lugo and the Cathedrals Beach."],
            image: "/images/ribeira-sacra-bodegas-top.jpg",
            alt: "Terraced vineyards in the Ribeira Sacra",
          },
        ],
      },
      {
        type: "checklist",
        heading: "Included",
        bg: "gray",
        items: [
          "Executive vehicle and professional chauffeur for the whole trip.",
          "Fuel, tolls and parking.",
          "Driver's accommodation and meals on multi-day tours.",
          "Pick-up and drop-off at any airport, including Porto.",
          "Hotels, guides and experiences available through Suunia, our DMC partner.",
          "English-speaking drivers on request.",
        ],
      },
      { type: "quote", heading: "Plan your tour" },
    ],
    faqs: [
      { question: "How many days do I need to see Galicia?", answer: "Three days cover the essentials (Santiago and the Rías Baixas); five days the whole Atlantic coast; seven days add the inland highlights such as the Ribeira Sacra and Lugo." },
      { question: "Can the tour start in Porto?", answer: "Yes. Many travellers land in Porto, drive north through the Rías Baixas and finish in Santiago or A Coruña." },
    ],
  },
];

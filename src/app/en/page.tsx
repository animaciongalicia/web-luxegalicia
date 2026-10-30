import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { BlockRenderer, FaqSection } from "@/components/Blocks";
import JsonLd from "@/components/JsonLd";
import { SITE, SITE_URL, absoluteUrl } from "@/content/site";

const URL = absoluteUrl("/en");

export const metadata: Metadata = {
  title: "Luxe Galicia – Premium ground transportation in Galicia & Porto",
  description:
    "Premium chauffeur services in Galicia, Spain and Porto: MICE ground transportation, Porto–Galicia transfers and private chauffeur tours. Sedans, luxury vans, minibuses and coaches since 2013.",
  alternates: { canonical: URL, languages: { es: SITE_URL, en: URL } },
  openGraph: { url: URL, locale: "en_GB", images: [{ url: "/images/flota-luxe-galicia.jpg", alt: "Luxe Galicia premium fleet" }] },
};

const cards = [
  { title: "MICE & agencies", text: "Congresses, incentives and corporate events. One partner on the ground for your whole transport operation.", href: "/en/mice-ground-transportation", image: "/images/sala-eventos-empresas.jpg", alt: "Congress room in Galicia" },
  { title: "Porto ⇄ Galicia", text: "Land in Porto and reach Vigo, Santiago or A Coruña door to door with a private chauffeur.", href: "/en/porto-galicia-private-chauffeur", image: "/images/traslados-coruna-santiago.jpg", alt: "Chauffeur-driven car between Porto and Galicia" },
  { title: "Chauffeur tours", text: "Galicia in 3, 5 or 7 days in a luxury van: Santiago, Albariño country, Atlantic lighthouses.", href: "/en/galicia-chauffeur-tours", image: "/images/tours-rias-baixas.jpg", alt: "Albariño vineyards in the Rías Baixas" },
];

const faqs = [
  { question: "What does Luxe Galicia do?", answer: "Premium ground transportation with professional chauffeurs in Galicia, Spain and Northern Portugal: MICE and congress transport, business travel, airport and Porto transfers, Camino de Santiago groups and private chauffeur tours." },
  { question: "Which airports do you cover?", answer: "Santiago de Compostela (SCQ), A Coruña (LCG), Vigo (VGO) and Porto (OPO)." },
  { question: "How quickly do I get a quote?", answer: "Within 24 business hours. For urgent requests, WhatsApp is the fastest channel." },
];

export default function HomeEn() {
  return (
    <>
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden lg:min-h-[75vh]">
        <Image src="/images/flota-luxe-galicia.jpg" alt="Mercedes S-Class sedans and V-Class vans" fill className="object-cover" priority quality={75} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center text-white lg:py-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-300">Ground transportation · Galicia &amp; Porto</p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">Premium chauffeur services in Galicia, Spain</h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-200 sm:text-lg md:text-xl">
            For MICE agencies, companies and travellers. Sedans, luxury vans, minibuses and coaches, one point of contact and everything coordinated, from one passenger to five hundred.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="#quote" className="inline-flex items-center gap-2 rounded-lg bg-luxe-600 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-luxe-700 hover:shadow-lg">
              Get a quote
            </Link>
            <Link href="/en/mice-ground-transportation" className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10">
              I&apos;m an agency
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <AnimateOnScroll className="mx-auto max-w-3xl text-center">
          <h2 className="heading-section">Your mobility partner in Galicia</h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Events rarely fail because of a vehicle. They fail because of coordination. Since {SITE.since}, Luxe Galicia has planned and run chauffeur operations across Galicia, Porto, Asturias and Madrid for agencies, companies and private travellers.
          </p>
        </AnimateOnScroll>
      </section>

      <BlockRenderer lang="en" block={{ type: "links", heading: "How I can help", bg: "gray", items: cards }} />
      <BlockRenderer lang="en" block={{ type: "fleet", heading: "Available fleet" }} />
      <CTASection lang="en" />
      <BlockRenderer lang="en" block={{ type: "quote", heading: "Request a quote", intro: "Dates, passengers and cities are enough to start." }} />
      <FaqSection lang="en" faqs={faqs} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
        }}
      />
    </>
  );
}

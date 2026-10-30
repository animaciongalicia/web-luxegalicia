import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CookieConsent from "@/components/CookieConsent";
import ClickTracker from "@/components/ClickTracker";
import JsonLd from "@/components/JsonLd";
import { SITE, SITE_URL } from "@/content/site";
import type { Lang } from "@/content/types";

const organization = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: SITE.name,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-luxe-galicia.png`,
  image: `${SITE_URL}/images/flota-luxe-galicia.jpg`,
  description:
    "Transporte con chófer en Galicia y Oporto para congresos, incentivos, empresas, agencias MICE y tours privados. Berlinas, vans ejecutivas, minibuses y autocares.",
  telephone: "+34678288284",
  email: SITE.email,
  foundingDate: String(SITE.since),
  address: { "@type": "PostalAddress", addressLocality: "A Coruña", addressRegion: "Galicia", addressCountry: "ES" },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Galicia" },
    { "@type": "City", name: "Porto" },
    { "@type": "City", name: "Madrid" },
    { "@type": "AdministrativeArea", name: "Asturias" },
  ],
  knowsLanguage: ["es", "en"],
  sameAs: [SITE.suuniaUrl],
};

export default function SiteShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang}>
      <body className="antialiased">
        <Header lang={lang} />
        <main id="main">{children}</main>
        <Footer lang={lang} />
        <WhatsAppFloat />
        <CookieConsent lang={lang} />
        <ClickTracker />
        <JsonLd data={organization} />
      </body>
    </html>
  );
}

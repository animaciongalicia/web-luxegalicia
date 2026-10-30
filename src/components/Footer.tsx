import Link from "next/link";
import Logo from "@/components/Logo";
import { SITE, whatsappLink } from "@/content/site";
import type { Lang } from "@/content/types";

type Column = { title: string; href?: string; links: { name: string; href: string }[] };

const COLUMNS: Record<Lang, Column[]> = {
  es: [
    {
      title: "Eventos & empresas",
      href: "/transporte-eventos-galicia",
      links: [
        { name: "Eventos", href: "/transporte-eventos-galicia" },
        { name: "Agencias MICE", href: "/agencias-mice" },
        { name: "Congresos", href: "/transporte-congresos-galicia" },
        { name: "Incentivos", href: "/transporte-incentivos-galicia" },
        { name: "Festivales y producciones", href: "/transporte-festivales-producciones" },
        { name: "Eventos deportivos", href: "/transporte-eventos-deportivos" },
        { name: "Para empresas", href: "/transporte-empresas-galicia" },
        { name: "Flota", href: "/flota" },
      ],
    },
    {
      title: "Traslados",
      href: "/traslados",
      links: [
        { name: "Desde A Coruña", href: "/traslados-desde-coruna" },
        { name: "Desde Santiago", href: "/traslados-desde-santiago" },
        { name: "Desde Vigo", href: "/traslados-desde-vigo" },
        { name: "Oporto", href: "/oporto-galicia" },
        { name: "Camino de Santiago", href: "/transporte-camino-de-santiago" },
        { name: "Aeropuertos", href: "/aeropuertos-galicia" },
        { name: "Autocares", href: "/alquiler-autocar-con-conductor-galicia" },
      ],
    },
    {
      title: "Tours",
      href: "/tours-con-chofer-galicia",
      links: [
        { name: "Galicia en 3, 5 y 7 días", href: "/tours-con-chofer-galicia" },
        { name: "Rías Baixas", href: "/tours-con-chofer-galicia/rias-baixas" },
        { name: "Ribeira Sacra", href: "/tours-con-chofer-galicia/ribeira-sacra" },
        { name: "Ourense termal", href: "/tours-con-chofer-galicia/ourense-termal" },
        { name: "Cruceros", href: "/excursiones-cruceros-galicia" },
        { name: "Bodas", href: "/transporte-bodas-galicia" },
      ],
    },
    {
      title: "Guías",
      href: "/guias",
      links: [
        { name: "Congresos y eventos", href: "/guias/transporte-congresos-eventos-galicia" },
        { name: "Organizar un evento", href: "/guias/organizar-evento-en-galicia-agencias" },
        { name: "De Oporto a Galicia", href: "/guias/oporto-galicia-como-llegar" },
        { name: "El Camino en grupo", href: "/guias/transporte-camino-de-santiago" },
        { name: "Palexco", href: "/guias/transporte-palexco" },
      ],
    },
  ],
  en: [
    {
      title: "Services",
      links: [
        { name: "MICE & agencies", href: "/en/mice-ground-transportation" },
        { name: "Porto ⇄ Galicia", href: "/en/porto-galicia-private-chauffeur" },
        { name: "Chauffeur tours", href: "/en/galicia-chauffeur-tours" },
      ],
    },
    {
      title: "Galicia",
      links: [
        { name: "Santiago de Compostela", href: "/en/galicia-chauffeur-tours" },
        { name: "Rías Baixas", href: "/en/galicia-chauffeur-tours" },
        { name: "Porto airport", href: "/en/porto-galicia-private-chauffeur" },
      ],
    },
    {
      title: "Español",
      links: [
        { name: "Versión en español", href: "/" },
        { name: "Congresos y MICE", href: "/agencias-mice" },
        { name: "Traslados", href: "/traslados" },
      ],
    },
  ],
};

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-gray-500 transition-colors hover:text-luxe-700">
      {children}
    </Link>
  );
}

export default function Footer({ lang = "es" }: { lang?: Lang }) {
  const columns = COLUMNS[lang];
  return (
    <footer id="contacto" className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className={`grid gap-10 sm:grid-cols-2 ${lang === "en" ? "lg:grid-cols-5" : "lg:grid-cols-6"}`}>
          {/* Marca + contacto */}
          <div className="lg:col-span-2">
            <Link href={lang === "en" ? "/en" : "/"} className="inline-flex">
              <Logo size="lg" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              {lang === "en"
                ? `Corporate and event transport in Galicia and Northern Portugal since ${SITE.since}.`
                : `Transporte corporativo y para eventos en Galicia y norte de Portugal desde ${SITE.since}.`}
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-gray-500">
              <li>
                <a href={SITE.phoneHref} className="transition-colors hover:text-luxe-700">
                  {SITE.phone}
                </a>
                {lang === "es" && (
                  <>
                    {" · "}
                    <a href={SITE.officePhoneHref} className="transition-colors hover:text-luxe-700">
                      {SITE.officePhone}
                    </a>
                  </>
                )}
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-luxe-700">
                  {SITE.email}
                </a>
              </li>
              <li>{lang === "en" ? "A Coruña · Santiago · Vigo · Porto" : "A Coruña · Santiago · Vigo · Oporto"}</li>
            </ul>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-5">
              WhatsApp
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              {col.href ? (
                <Link
                  href={col.href}
                  className="text-sm font-semibold uppercase tracking-wider text-gray-900 transition-colors hover:text-luxe-700"
                >
                  {col.title}
                </Link>
              ) : (
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">{col.title}</h3>
              )}
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <FooterLink href={link.href}>{link.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center gap-4 text-center text-xs text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Luxe Galicia.{" "}
              {lang === "en" ? "All rights reserved." : "Todos los derechos reservados."}
            </p>
            {(SITE.legalName || SITE.taxId || SITE.address) && (
              <p className="text-gray-400">
                {[SITE.legalName, SITE.taxId && `CIF ${SITE.taxId}`, SITE.address].filter(Boolean).join(" · ")}
              </p>
            )}
            <p className="text-gray-400">
              {lang === "en" ? "DMC partner: " : "Partner DMC: "}
              <a href={SITE.suuniaUrl} className="hover:text-luxe-700">Suunia</a>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/aviso-legal" className="text-gray-400 transition-colors hover:text-luxe-700">
                Aviso legal
              </Link>
              <Link href="/politica-privacidad" className="text-gray-400 transition-colors hover:text-luxe-700">
                {lang === "en" ? "Privacy policy" : "Política de privacidad"}
              </Link>
              <Link href="/politica-cookies" className="text-gray-400 transition-colors hover:text-luxe-700">
                {lang === "en" ? "Cookie policy" : "Política de cookies"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import "../globals.css";
import SiteShell from "@/components/SiteShell";
import { SITE_URL } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "g-8CHcDXCPDGZ0_D09bYLZWXPP2Ky0rgaffP8qe_-WQ" },
  title: {
    default: "Luxe Galicia – Transporte corporativo y para eventos en Galicia",
    template: "%s",
  },
  description:
    "Servicios de transporte corporativo y para eventos en Galicia y Oporto: congresos, incentivos, empresas y agencias MICE. Berlinas, vans, minibuses y autocares con conductor desde 2013.",
  icons: { icon: [{ url: "/icon.png", type: "image/png" }, { url: "/favicon.ico" }], apple: "/apple-touch-icon.png" },
  openGraph: { type: "website", locale: "es_ES", siteName: "Luxe Galicia", images: ["/images/flota-luxe-galicia.jpg"] },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="es">{children}</SiteShell>;
}

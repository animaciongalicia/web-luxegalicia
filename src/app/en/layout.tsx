import type { Metadata } from "next";
import "../globals.css";
import SiteShell from "@/components/SiteShell";
import { SITE_URL } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "g-8CHcDXCPDGZ0_D09bYLZWXPP2Ky0rgaffP8qe_-WQ" },
  title: {
    default: "Luxe Galicia – Ground transportation in Galicia & Porto",
    template: "%s",
  },
  description:
    "Ground transportation in Galicia, Spain and Porto: MICE transport, private chauffeur transfers and multi-day chauffeur tours since 2013.",
  icons: { icon: [{ url: "/icon.png", type: "image/png" }, { url: "/favicon.ico" }], apple: "/apple-touch-icon.png" },
  openGraph: { type: "website", locale: "en_GB", siteName: "Luxe Galicia", images: ["/images/flota-luxe-galicia.jpg"] },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="en">{children}</SiteShell>;
}

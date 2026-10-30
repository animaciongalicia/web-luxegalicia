"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

function initGA4(consentGranted: boolean) {
  if (!GA_ID || document.getElementById("ga4-script")) return;

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;

  gtag("consent", "default", {
    analytics_storage: consentGranted ? "granted" : "denied",
    ad_storage: "denied",
  });

  const s = document.createElement("script");
  s.id = "ga4-script";
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  s.async = true;
  document.head.appendChild(s);

  gtag("js", new Date());
  gtag("config", GA_ID);
}

function updateConsent(granted: boolean) {
  if (window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: granted ? "granted" : "denied",
    });
  }
}

export default function CookieConsent({ lang = "es" }: { lang?: "es" | "en" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let consentGranted = false;
    try {
      consentGranted = localStorage.getItem("cookie-consent") === "accepted";
    } catch {}

    initGA4(consentGranted);

    if (!consentGranted) {
      try {
        const consent = localStorage.getItem("cookie-consent");
        if (consent !== "rejected") {
          setVisible(true);
        }
      } catch {
        setVisible(true);
      }
    }
  }, []);

  const accept = () => {
    try { localStorage.setItem("cookie-consent", "accepted"); } catch {}
    updateConsent(true);
    setVisible(false);
  };

  const reject = () => {
    try { localStorage.setItem("cookie-consent", "rejected"); } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-gray-200 bg-white px-6 py-4 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-gray-600">
          {lang === "en"
            ? "This website uses analytics cookies to understand how it is used. See the "
            : "Esta web usa cookies de analítica para entender cómo se utiliza. Consulta la "}
          <Link href="/politica-cookies" className="text-luxe-700 underline decoration-luxe-300 underline-offset-2 hover:decoration-luxe-600">
            {lang === "en" ? "cookie policy" : "política de cookies"}
          </Link>.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={reject}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50"
          >
            {lang === "en" ? "Reject" : "Rechazar"}
          </button>
          <button
            onClick={accept}
            className="rounded-lg bg-luxe-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-luxe-800"
          >
            {lang === "en" ? "Accept" : "Aceptar"}
          </button>
        </div>
      </div>
    </div>
  );
}

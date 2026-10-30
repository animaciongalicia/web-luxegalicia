"use client";

import { useEffect } from "react";
import { track } from "@/lib/track";

// Escucha todos los clics de la web y registra los contactos: WhatsApp,
// teléfono, email y botones que llevan al presupuesto.
export default function ClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const label = link.textContent?.trim().slice(0, 60);
      if (href.startsWith("https://wa.me")) track("contact_whatsapp", { link_text: label });
      else if (href.startsWith("tel:")) track("contact_phone", { link_text: label });
      else if (href.startsWith("mailto:")) track("contact_email", { link_text: label });
      else if (href === "/presupuesto" || href.endsWith("#quote")) track("quote_cta_click", { link_text: label });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}

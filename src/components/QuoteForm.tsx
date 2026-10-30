"use client";

import { useState } from "react";
import type { Lang } from "@/content/types";

const EMAIL = "info@luxegalicia.com";
const WHATSAPP = "34678288284";
// Si se define, el formulario envía un POST JSON a este endpoint (Formspree, Resend, Make...).
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";

const TEXT = {
  es: {
    name: "Nombre",
    company: "Empresa o agencia",
    email: "Email",
    phone: "Teléfono",
    service: "Tipo de servicio",
    services: [
      "Congreso o convención",
      "Incentivo o evento corporativo",
      "Festival o producción",
      "Visita de empresa",
      "Traslado",
      "Oporto ⇄ Galicia",
      "Camino de Santiago",
      "Tour con chófer",
      "Otro",
    ],
    date: "Fecha(s)",
    pax: "Nº de personas",
    from: "Origen",
    to: "Destino(s)",
    message: "Cuéntame el servicio",
    messagePh: "Horarios, número de vehículos, idioma del chófer, paradas...",
    submit: "Enviar solicitud",
    whatsapp: "Enviar por WhatsApp",
    sent: "Solicitud enviada. Tienes respuesta en menos de 24 horas laborables.",
    error: "No se ha podido enviar. Escríbeme por WhatsApp o a info@luxegalicia.com.",
    privacy: "Al enviar aceptas la política de privacidad. Tus datos solo se usan para responder a esta solicitud.",
  },
  en: {
    name: "Name",
    company: "Company or agency",
    email: "Email",
    phone: "Phone",
    service: "Service",
    services: [
      "Congress or convention",
      "Incentive or corporate event",
      "Business visit",
      "Transfer",
      "Porto ⇄ Galicia",
      "Camino de Santiago",
      "Chauffeur tour",
      "Other",
    ],
    date: "Date(s)",
    pax: "Passengers",
    from: "Pick-up",
    to: "Destination(s)",
    message: "Tell me about the service",
    messagePh: "Schedule, number of vehicles, driver language, stops...",
    submit: "Send request",
    whatsapp: "Send via WhatsApp",
    sent: "Request sent. You will get an answer within 24 business hours.",
    error: "It could not be sent. Please WhatsApp me or write to info@luxegalicia.com.",
    privacy: "By sending you accept the privacy policy. Your data is only used to answer this request.",
  },
};

type Fields = Record<string, string>;

export default function QuoteForm({ lang = "es" }: { lang?: Lang }) {
  const t = TEXT[lang];
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const read = (form: HTMLFormElement): Fields =>
    Object.fromEntries(Array.from(new FormData(form).entries()).map(([k, v]) => [k, String(v)]));

  const summary = (f: Fields) =>
    [
      `${t.service}: ${f.service}`,
      `${t.date}: ${f.date}`,
      `${t.pax}: ${f.pax}`,
      `${t.from}: ${f.from}`,
      `${t.to}: ${f.to}`,
      `${t.name}: ${f.name} (${f.company})`,
      `${t.email}: ${f.email} · ${t.phone}: ${f.phone}`,
      "",
      f.message,
    ].join("\n");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fields = read(e.currentTarget);
    if (!ENDPOINT) {
      const subject = `${lang === "en" ? "Quote request" : "Solicitud de presupuesto"} · ${fields.service}`;
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary(fields))}`;
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...fields, lang, page: window.location.pathname }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  function sendWhatsapp(e: React.MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.form;
    if (!form || !form.reportValidity()) return;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(summary(read(form)))}`, "_blank", "noopener");
  }

  const input =
    "mt-1 block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm transition-colors focus:border-luxe-600 focus:outline-none focus:ring-2 focus:ring-luxe-600/20";
  const label = "block text-sm font-medium text-gray-700";

  if (status === "sent") {
    return <p className="rounded-2xl border border-luxe-100 bg-luxe-50 p-8 text-center text-luxe-800">{t.sent}</p>;
  }

  return (
    <form onSubmit={onSubmit} className="card-elegant hover:translate-y-0 space-y-5 text-left">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={label}>
          {t.name}
          <input name="name" required autoComplete="name" className={input} />
        </label>
        <label className={label}>
          {t.company}
          <input name="company" autoComplete="organization" className={input} />
        </label>
        <label className={label}>
          {t.email}
          <input name="email" type="email" required autoComplete="email" className={input} />
        </label>
        <label className={label}>
          {t.phone}
          <input name="phone" type="tel" autoComplete="tel" className={input} />
        </label>
        <label className={label}>
          {t.service}
          <select name="service" className={input} defaultValue={t.services[0]}>
            {t.services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className={label}>
          {t.date}
          <input name="date" className={input} placeholder="12-14/05" />
        </label>
        <label className={label}>
          {t.pax}
          <input name="pax" inputMode="numeric" required className={input} />
        </label>
        <label className={label}>
          {t.from}
          <input name="from" className={input} />
        </label>
      </div>
      <label className={label}>
        {t.to}
        <input name="to" className={input} />
      </label>
      <label className={label}>
        {t.message}
        <textarea name="message" rows={4} className={input} placeholder={t.messagePh} />
      </label>
      <p className="text-xs text-gray-500">{t.privacy}</p>
      {status === "error" && <p className="text-sm text-red-600">{t.error}</p>}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" disabled={status === "sending"} className="btn-primary justify-center px-8 py-4 text-base">
          {t.submit}
        </button>
        <button type="button" onClick={sendWhatsapp} className="btn-whatsapp justify-center px-8 py-4 text-base">
          {t.whatsapp}
        </button>
      </div>
    </form>
  );
}

import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/content/site";
import type { Lang } from "@/content/types";

export default function HeroPage({
  title,
  subtitle,
  eyebrow,
  imageSrc = "/images/flota-luxe-galicia.jpg",
  alt,
  lang = "es",
}: {
  title: string;
  subtitle: string;
  eyebrow?: string;
  imageSrc?: string;
  alt?: string;
  lang?: Lang;
}) {
  return (
    <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden pt-16 lg:min-h-[60vh]">
      <Image
        src={imageSrc}
        alt={alt || title}
        fill
        className="object-cover"
        priority
        quality={75}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center text-white lg:py-28">
        {eyebrow && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-300">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg md:text-xl">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={lang === "en" ? "/en#quote" : "/presupuesto"}
            className="inline-flex items-center gap-2 rounded-lg bg-luxe-600 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-luxe-700 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            {lang === "en" ? "Get a quote" : "Pedir presupuesto"}
          </Link>
          <a
            href={whatsappLink(lang === "en" ? "Hello, I would like a quote." : "Hola, quiero pedir presupuesto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

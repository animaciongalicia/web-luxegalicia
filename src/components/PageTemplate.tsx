import type { Metadata } from "next";
import HeroPage from "@/components/HeroPage";
import CTASection from "@/components/CTASection";
import { BlockRenderer, FaqSection } from "@/components/Blocks";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, absoluteUrl } from "@/content/site";
import type { Page } from "@/content/types";

export function pagePath(page: Page) {
  if (page.lang === "en") return page.slug ? `/en/${page.slug}` : "/en";
  return page.slug ? `/${page.slug}` : "/";
}

export function pageMetadata(page: Page): Metadata {
  const path = pagePath(page);
  const url = absoluteUrl(path);
  const languages: Record<string, string> | undefined = page.alternate
    ? page.lang === "en"
      ? { es: absoluteUrl(page.alternate), en: url }
      : { es: url, en: absoluteUrl(page.alternate) }
    : undefined;
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: url, languages },
    robots: page.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url,
      locale: page.lang === "en" ? "en_GB" : "es_ES",
      images: [{ url: page.hero.image, width: 1200, height: 630, alt: page.hero.alt || page.hero.title }],
    },
  };
}

export default function PageTemplate({ page }: { page: Page }) {
  const lang = page.lang || "es";
  const url = absoluteUrl(pagePath(page));
  const schema: object[] = [];
  if (page.serviceType) {
    schema.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.hero.title,
      description: page.metaDescription,
      serviceType: page.serviceType,
      url,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Galicia" },
        { "@type": "City", name: "Porto" },
      ],
    });
  }
  if (page.faqs?.length) {
    schema.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  return (
    <>
      <HeroPage
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        eyebrow={page.hero.eyebrow}
        imageSrc={page.hero.image}
        alt={page.hero.alt}
        lang={lang}
      />
      {page.blocks.map((block, i) => (
        <BlockRenderer key={i} block={block} lang={lang} />
      ))}
      {page.cta !== undefined || page.serviceType ? <CTASection title={page.cta?.title} description={page.cta?.description} lang={lang} /> : null}
      {page.faqs && <FaqSection faqs={page.faqs} lang={lang} />}
      {schema.map((s, i) => (
        <JsonLd key={i} data={s} />
      ))}
    </>
  );
}

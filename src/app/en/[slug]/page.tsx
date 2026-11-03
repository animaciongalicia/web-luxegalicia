import { notFound } from "next/navigation";
import PageTemplate, { pageMetadata } from "@/components/PageTemplate";
import { PAGES_EN, getPage } from "@/content/pages";

// true: las URLs desconocidas llegan a la página y notFound() muestra la 404 propia.
export const dynamicParams = true;

export function generateStaticParams() {
  return PAGES_EN.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const page = getPage(params.slug, "en");
  return page ? pageMetadata(page) : {};
}

export default function Page({ params }: { params: { slug: string } }) {
  const page = getPage(params.slug, "en");
  if (!page) notFound();
  return <PageTemplate page={page} />;
}

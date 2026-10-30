import { notFound } from "next/navigation";
import PageTemplate, { pageMetadata } from "@/components/PageTemplate";
import { PAGES_ES, getPage } from "@/content/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return PAGES_ES.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const page = getPage(params.slug);
  return page ? pageMetadata(page) : {};
}

export default function Page({ params }: { params: { slug: string } }) {
  const page = getPage(params.slug);
  if (!page) notFound();
  return <PageTemplate page={page} />;
}

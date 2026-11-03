import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-padding flex min-h-[60vh] items-center justify-center pt-32 text-center">
      <div className="max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-luxe-700">Error 404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">This page does not exist</h1>
        <p className="mt-4 text-lg text-gray-600">The address may have changed with the new website. Start here:</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/en" className="btn-primary">Home</Link>
          <Link href="/en/mice-ground-transportation" className="btn-outline">MICE &amp; agencies</Link>
          <Link href="/en/galicia-chauffeur-tours" className="btn-outline">Tours</Link>
        </div>
      </div>
    </section>
  );
}

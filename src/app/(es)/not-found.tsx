import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-padding flex min-h-[60vh] items-center justify-center pt-32 text-center">
      <div className="max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-luxe-700">Error 404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Esta página no existe</h1>
        <p className="mt-4 text-lg text-gray-600">Puede que la dirección haya cambiado con la nueva web. Empieza por aquí:</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">Inicio</Link>
          <Link href="/traslados" className="btn-outline">Traslados</Link>
          <Link href="/presupuesto" className="btn-outline">Presupuesto</Link>
        </div>
      </div>
    </section>
  );
}

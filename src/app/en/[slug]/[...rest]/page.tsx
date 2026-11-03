import { notFound } from "next/navigation";

// Cualquier ruta más profunda que no existe muestra la 404 propia de la web.
export default function CatchAll() {
  notFound();
}

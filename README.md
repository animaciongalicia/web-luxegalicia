# luxegalicia.com — Fase 1

Web de Luxe Galicia en Next.js 14 + Tailwind, construida sobre el blueprint de Suunia (mismos componentes, espaciado y animaciones; paleta `luxe` teal).

## Arrancar

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build    # compila las 45 páginas estáticas
```

## Dónde se edita cada cosa

| Qué | Archivo |
|---|---|
| **Precios "desde"** de todas las tablas de traslados | `src/content/precios.ts` (null = "Consultar") |
| Teléfonos, email, WhatsApp | `src/content/site.ts` |
| Menú (ES/EN) | `src/content/navigation.ts` |
| Congresos, MICE, empresas | `src/content/pages-mice.ts` |
| Traslados, Oporto, Camino, aeropuertos, cruceros | `src/content/pages-traslados.ts` |
| Flota, presupuesto, bodas, legales | `src/content/pages-otros.ts` y `src/content/flota.ts` |
| Tours con chófer | `src/content/tours.ts` |
| Guías (blog) | `src/content/guias.ts` |
| Páginas en inglés | `src/content/pages-en.ts` y `src/app/en/page.tsx` |
| Portada | `src/app/(es)/page.tsx` |
| Redirecciones 301 de la web WordPress | `next.config.mjs` |
| Información para IA (GEO) | `public/llms.txt` |

Para añadir una página de servicio basta con añadir un objeto al array correspondiente: la ruta, el sitemap y los datos estructurados se generan solos.

## Variables de entorno (Vercel → Settings → Environment Variables)

Ver `.env.example`: URL del sitio, GA4, verificación de Search Console, endpoint del formulario y datos legales (razón social, CIF, domicilio).

## Pendiente

- Precios reales en `precios.ts`.
- Razón social, CIF y domicilio (variables `NEXT_PUBLIC_LEGAL_*`).
- Fotos definitivas de flota (modelos concretos) y de destinos.
- ID de GA4 y verificación de Search Console.
- Endpoint de formulario (sin él, el formulario abre el email del usuario).
- Ajustes tras analizar Search Console y Analytics.

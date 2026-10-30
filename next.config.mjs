/** @type {import('next').NextConfig} */

// Redirecciones 301 desde la web WordPress anterior (sitemap de Yoast, octubre 2026).
// Cada URL antigua apunta a su equivalente nueva para conservar el posicionamiento.
const WP_REDIRECTS = [
  ["/servicios-en-galicia", "/"],
  ["/inicio", "/"],
  ["/eventos", "/transporte-eventos-galicia"],
  ["/coches-con-conductor-experiencia-premium-para-eventos", "/transporte-eventos-galicia"],
  ["/como-organizar-el-transporte-para-un-congreso-en-galicia", "/guias/transporte-congresos-eventos-galicia"],
  ["/operativa-transporte-festivales-galicia", "/transporte-festivales-producciones"],
  ["/alquiler-coches-empresas-y-eventos", "/transporte-empresas-galicia"],
  ["/flota", "/flota"],
  ["/autobuses-para-eventos-y-traslados-en-galicia", "/flota"],
  ["/aeropuerto-de-coruna-transfers", "/aeropuertos-galicia"],
  ["/transfers-aeropuerto-santiago", "/aeropuertos-galicia"],
  ["/coches-para-bodas", "/bodas-premium"],
  ["/coches-antiguos-para-bodas", "/bodas-premium"],
  ["/presupuestos-y-tarifas", "/presupuesto"],
  ["/contacto", "/presupuesto"],
  ["/blog", "/guias"],
  ["/mas-informacion-sobre-las-cookies", "/politica-cookies"],
];

// Subpáginas antiguas (fichas de vehículos y adjuntos de imágenes de WordPress).
const WP_WILDCARDS = [
  ["/alquiler-coches-empresas-y-eventos/:path+", "/flota"],
  ["/flota/:path+", "/flota"],
  ["/coches-para-bodas/:path+", "/bodas-premium"],
  ["/coches-antiguos-para-bodas/:path+", "/bodas-premium"],
  ["/eventos/:path+", "/transporte-eventos-galicia"],
  ["/servicios-en-galicia/:path+", "/"],
  ["/inicio/:path+", "/"],
  ["/presupuestos-y-tarifas/:path+", "/presupuesto"],
  ["/contacto/:path+", "/presupuesto"],
  ["/blog/:path+", "/guias"],
  ["/category/:path*", "/guias"],
  ["/tag/:path*", "/guias"],
  ["/author/:path*", "/"],
  ["/feed", "/guias"],
  ["/wp-admin/:path*", "/"],
  ["/wp-login.php", "/"],
];

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },

  async redirects() {
    const exact = WP_REDIRECTS.filter(([from, to]) => from !== to).flatMap(([from, to]) => [
      { source: from, destination: to, permanent: true },
      { source: `${from}/`, destination: to, permanent: true },
    ]);
    const wildcards = WP_WILDCARDS.map(([source, destination]) => ({ source, destination, permanent: true }));
    return [...exact, ...wildcards];
  },
};

export default nextConfig;

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
  ["/autobuses-para-eventos-y-traslados-en-galicia", "/alquiler-autocar-con-conductor-galicia"],
  ["/aeropuerto-de-coruna-transfers", "/aeropuertos-galicia"],
  ["/transfers-aeropuerto-santiago", "/aeropuertos-galicia"],
  ["/coches-para-bodas", "/transporte-bodas-galicia"],
  ["/coches-antiguos-para-bodas", "/transporte-bodas-galicia"],
  ["/presupuestos-y-tarifas", "/presupuesto"],
  ["/contacto", "/presupuesto"],
  ["/blog", "/guias"],
  ["/mas-informacion-sobre-las-cookies", "/politica-cookies"],
  ["/politica-de-cookies", "/politica-cookies"],
  ["/coches-clasicos-para-bodas", "/transporte-bodas-galicia"],
  ["/alquiler-de-coches-para-bodas", "/transporte-bodas-galicia"],
  ["/coches-antiguos-for-bodas", "/transporte-bodas-galicia"],
  ["/servicio-de-alquiler-de-vehiculos-para", "/transporte-eventos-galicia"],
  ["/grabacion-de-videos-y-peliculas-en", "/transporte-festivales-producciones"],
  ["/solicita-presupuesto-de-nuestras", "/presupuesto"],
  ["/male-chauffeur-sitting-in-a-car", "/flota"],
];

// Subpáginas antiguas (fichas de vehículos y adjuntos de imágenes de WordPress).
const WP_WILDCARDS = [
  ["/autobuses-para-eventos-y-traslados-en-galicia/:path+", "/alquiler-autocar-con-conductor-galicia"],
  ["/coches-con-conductor-experiencia-premium-para-eventos/:path+", "/transporte-eventos-galicia"],
  ["/como-organizar-el-transporte-para-un-congreso-en-galicia/:path+", "/guias/transporte-congresos-eventos-galicia"],
  ["/coches-clasicos-para-bodas/:path+", "/transporte-bodas-galicia"],
  ["/alquiler-de-coches-para-bodas/:path+", "/transporte-bodas-galicia"],
  ["/servicio-de-alquiler-de-vehiculos-para/:path+", "/transporte-eventos-galicia"],
  ["/solicita-presupuesto-de-nuestras/:path+", "/presupuesto"],
  // Antiguas páginas de limusinas: las de empresa van a empresas; el resto, a celebraciones.
  ["/limusinas-para-cenas-de-empresa", "/transporte-empresas-galicia"],
  ["/limusinas-para-promocion-y-marketing", "/transporte-empresas-galicia"],
  ["/limusinas-para-promocion-y-marketing/:path+", "/transporte-empresas-galicia"],
  ["/:slug(limusinas-[^/]+)", "/transporte-bodas-galicia"],
  ["/:slug(limusinas-[^/]+)/:path+", "/transporte-bodas-galicia"],
  ["/p/presupuestos-y-tarifas.html", "/presupuesto"],
  ["/wp-content/:path*", "/flota"],
  ["/alquiler-coches-empresas-y-eventos/:path+", "/flota"],
  ["/flota/:path+", "/flota"],
  ["/coches-para-bodas/:path+", "/transporte-bodas-galicia"],
  ["/coches-antiguos-para-bodas/:path+", "/transporte-bodas-galicia"],
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

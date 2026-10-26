/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: { root: __dirname },
    // URLs anteriores a la reestructura de servicios/productos (oct 2026)
    async redirects() {
        return [
            { source: "/paneles-solares", destination: "/servicios/paneles-solares", permanent: true },
            { source: "/servcie-equipos-bombeo", destination: "/servicios/equipos-bombeo", permanent: true },
            { source: "/service-sistemas-cloracion", destination: "/servicios/sistemas-cloracion", permanent: true },
            { source: "/services", destination: "/servicios", permanent: true },
            { source: "/productos-paneles-solares", destination: "/productos/paneles-solares", permanent: true },
            { source: "/productos-equipos-bombeo", destination: "/productos/equipos-bombeo", permanent: true },
            { source: "/productos-sistemas-cloracion", destination: "/productos/sistemas-cloracion", permanent: true },
            { source: "/paneles-details", destination: "/productos/paneles-solares/panel-solar-monocristalino-550w", permanent: true },
            { source: "/projects", destination: "/", permanent: true },
            { source: "/projects-details", destination: "/", permanent: true },
        ]
    },
}

module.exports = nextConfig

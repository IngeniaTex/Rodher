// Datos de contacto y navegación del sitio. Cambia aquí y se refleja en todas las páginas.

export const SITE = {
    name: "RODHER Ingeniería",
    shortName: "Rodher",
    description: "Venta e instalación de paneles solares, equipos de bombeo y sistemas de cloración en Mérida, Yucatán y el sureste de México.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://rodheringenieria.com.mx",
    foundingYear: 2017,
    email: "ventas@rodheringenieria.com.mx",
    phone: {
        display: "+52 999 900 1393",
        href: "tel:+529999001393",
    },
    whatsapp: "https://wa.me/529999001393",
    location: {
        city: "Mérida",
        region: "Yucatán",
        country: "MX",
        display: "Mérida, Yucatán",
    },
}

// Redes sociales: agrega solo las que existan, p. ej. { label: "Facebook", href: "https://facebook.com/...", icon: "icon-facebook" }.
// Si la lista está vacía, los bloques de redes no se muestran.
export const SOCIAL = []

export const NAV = [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/about" },
    {
        label: "Servicios",
        href: "/servicios",
        children: [
            { label: "Paneles Solares", href: "/servicios/paneles-solares" },
            { label: "Equipos de Bombeo", href: "/servicios/equipos-bombeo" },
            { label: "Sistemas de Cloración", href: "/servicios/sistemas-cloracion" },
        ],
    },
    {
        label: "Productos",
        href: "/productos",
        children: [
            { label: "Paneles Solares", href: "/productos/paneles-solares" },
            { label: "Equipos de Bombeo", href: "/productos/equipos-bombeo" },
            { label: "Sistemas de Cloración", href: "/productos/sistemas-cloracion" },
        ],
    },
    { label: "Contacto", href: "/contact" },
]

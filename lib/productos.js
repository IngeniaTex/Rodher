// Catálogo de productos: /productos/[categoria] y /productos/[categoria]/[producto].
// TODO: completar con modelos, fichas técnicas y fotos reales. Sin `image`, la tarjeta usa la imagen de la categoría.

export const CATEGORIAS = [
    {
        slug: "paneles-solares",
        title: "Paneles Solares",
        description: "Paneles solares y sistemas fotovoltaicos interconectados a la red y autónomos para hogares, negocios e industrias.",
        image: "/assets/images/services/paneles-solares-modulos.webp",
        productos: [
            {
                slug: "panel-solar-monocristalino-550w",
                title: "Panel Solar Monocristalino 550 W",
                summary: "Panel de alta eficiencia con celdas monocristalinas PERC, ideal para instalaciones residenciales, comerciales e industriales.",
                description: [
                    "Nuestros paneles solares están diseñados para ofrecer un rendimiento confiable, eficiente y duradero, transformando la energía del sol en electricidad limpia para tu hogar o negocio. Fabricados con celdas de alta eficiencia y materiales resistentes a condiciones extremas, garantizan una producción óptima incluso en climas cálidos como el de Yucatán.",
                    "Este panel solar combina tecnología avanzada con una excelente relación costo-beneficio. Su estructura de aluminio anodizado ofrece resistencia a la corrosión y su vidrio templado de alta transparencia maximiza la captación de radiación solar.",
                ],
                features: [
                    "Potencia nominal: 550 W",
                    "Eficiencia del módulo: 21 %",
                    "Tipo de celda: Monocristalina PERC",
                    "Marco de aluminio anodizado resistente a la intemperie",
                    "Vidrio templado antirreflectante de 3.2 mm",
                    "Garantía de rendimiento lineal: 25 años",
                    "Apto para sistemas conectados a la red (On-Grid) y autónomos (Off-Grid)",
                ],
            },
            {
                slug: "sistema-interconectado-on-grid",
                title: "Sistema Interconectado a la Red (On-Grid)",
                summary: "Sistema fotovoltaico conectado a la red eléctrica para reducir tu recibo de luz desde el primer bimestre.",
                description: [
                    "Diseñamos el sistema a la medida de tu consumo bimestral para que generes tu propia energía y reduzcas tu facturación eléctrica, con un retorno de inversión a corto plazo.",
                    "Incluye asesoría, dimensionamiento, instalación profesional y servicio postventa.",
                ],
            },
            {
                slug: "sistema-autonomo-off-grid",
                title: "Sistema Autónomo (Off-Grid)",
                summary: "Sistema fotovoltaico independiente de la red eléctrica para sitios sin acceso a suministro o que requieren respaldo.",
                description: [
                    "Solución para generar y almacenar tu propia energía en lugares donde no hay red eléctrica o donde se necesita independencia energética.",
                    "Dimensionamos paneles y equipos de acuerdo con tu consumo y el uso que tendrá la instalación.",
                ],
            },
        ],
    },
    {
        slug: "equipos-bombeo",
        title: "Equipos de Bombeo",
        description: "Bombas sumergibles, turbinas verticales y equipos de presurización para uso residencial, comercial, agrícola e industrial.",
        image: "/assets/images/services/service-details-paneles-solares.webp",
        productos: [
            {
                slug: "bombas-sumergibles",
                title: "Bombas Sumergibles",
                summary: "Equipos de alto rendimiento para extracción, drenaje o presurización de agua.",
                description: [
                    "Soluciones confiables para extracción, drenaje o presurización de agua con equipos de alto rendimiento y durabilidad, seleccionados según el caudal y la presión que requiere tu aplicación.",
                ],
            },
            {
                slug: "bombas-turbina-vertical",
                title: "Bombas de Turbina Vertical",
                summary: "Equipos para pozos profundos y sistemas de abastecimiento de alto caudal.",
                description: [
                    "Equipos de turbina vertical para pozos profundos, sistemas municipales de agua potable y procesos industriales que requieren operación continua.",
                ],
            },
            {
                slug: "equipos-presurizacion",
                title: "Equipos de Presurización",
                summary: "Sistemas para mantener presión de agua constante en casas, edificios, hoteles e industria.",
                description: [
                    "Suministro e instalación de equipos para presión de agua, riego y procesos industriales, dimensionados a tu necesidad.",
                ],
            },
        ],
    },
    {
        slug: "sistemas-cloracion",
        title: "Sistemas de Cloración",
        description: "Equipos de cloración por gas e hipoclorito de sodio para desinfección y potabilización de agua.",
        image: "/assets/images/services/service-details-paneles-solares.webp",
        productos: [
            {
                slug: "cloracion-cloro-gas",
                title: "Sistemas de Cloración por Gas",
                summary: "Dosificación automatizada de cloro gas para plantas de tratamiento, pozos y redes de distribución.",
                description: [
                    "Equipos automatizados de alta precisión para el dosificado de cloro gas, integrados con sistemas de control y monitoreo que aseguran una operación confiable y estable.",
                ],
            },
            {
                slug: "dosificadores-hipoclorito",
                title: "Dosificadores de Hipoclorito de Sodio",
                summary: "Desinfección continua de agua con hipoclorito para aplicaciones residenciales, comerciales e industriales.",
                description: [
                    "Equipos dosificadores para desinfección continua con hipoclorito de sodio en pozos, cisternas, albercas y redes hidráulicas.",
                ],
            },
            {
                slug: "paneles-control-automatico",
                title: "Paneles de Control Automático",
                summary: "Control y monitoreo de sistemas de cloración para una operación de bajo mantenimiento.",
                description: [
                    "Paneles de control automáticos que integran la dosificación de cloro con el monitoreo del sistema para una desinfección continua y segura.",
                ],
            },
        ],
    },
]

export function getCategoria(slug) {
    return CATEGORIAS.find((c) => c.slug === slug)
}

export function getProducto(categoriaSlug, productoSlug) {
    const categoria = getCategoria(categoriaSlug)
    const producto = categoria?.productos.find((p) => p.slug === productoSlug)
    return producto ? { categoria, producto } : null
}

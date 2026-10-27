import Layout from "@/components/layout/Layout"
import Cta from "@/components/sections/Cta"
import ServiceCards from "@/components/sections/ServiceCards"

export const metadata = {
    title: "Servicios",
    description: "Paneles solares, equipos de bombeo y sistemas de cloración: venta, instalación y mantenimiento en Mérida y el sureste de México.",
    alternates: { canonical: "/servicios" },
}

export default function ServiciosPage() {
    return (
        <Layout
            breadcrumbTitle="Nuestros Servicios"
            pageHeader={{
                image: "/assets/images/headers/servicios.webp",
                eyebrow: "Lo que hacemos",
                text: "Venta, instalación y mantenimiento de paneles solares, equipos de bombeo y sistemas de cloración.",
            }}
        >
            <ServiceCards className="services-page" />
            <Cta />
        </Layout>
    )
}

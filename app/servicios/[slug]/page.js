import { notFound } from "next/navigation"
import Layout from "@/components/layout/Layout"
import Cta from "@/components/sections/Cta"
import ServiceDetail from "@/components/sections/ServiceDetail"
import { SERVICIOS, getServicio } from "@/lib/servicios"

export const dynamicParams = false

export function generateStaticParams() {
    return SERVICIOS.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
    const servicio = getServicio((await params).slug)
    if (!servicio) return {}
    return {
        title: servicio.title,
        description: servicio.description,
        alternates: { canonical: `/servicios/${servicio.slug}` },
        openGraph: { images: [servicio.image] },
    }
}

export default async function ServicioPage({ params }) {
    const servicio = getServicio((await params).slug)
    if (!servicio) notFound()

    return (
        <Layout
            breadcrumbTitle={servicio.title}
            pageHeader={{
                image: servicio.headerImage,
                eyebrow: servicio.subtitle,
                text: servicio.summary,
                crumbs: [{ label: "Servicios", href: "/servicios" }],
            }}
        >
            <ServiceDetail servicio={servicio} />
            <Cta />
        </Layout>
    )
}

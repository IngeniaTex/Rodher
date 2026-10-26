import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/promociones/Banner"

export const metadata = {
    title: "Promociones",
    description: "Promociones y descuentos especiales en venta e instalación de paneles solares en Mérida y Yucatán.",
    alternates: { canonical: "/promociones" },
}

export default function PromocionesPage() {
    return (
        <Layout breadcrumbTitle="Promociones" footerVariant="two">
            <Banner />
        </Layout>
    )
}

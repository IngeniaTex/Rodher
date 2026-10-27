import { notFound } from "next/navigation"
import Layout from "@/components/layout/Layout"
import ProductGrid from "@/components/sections/ProductGrid"
import { CATEGORIAS, getCategoria } from "@/lib/productos"

export const dynamicParams = false

export function generateStaticParams() {
    return CATEGORIAS.map((c) => ({ categoria: c.slug }))
}

export async function generateMetadata({ params }) {
    const categoria = getCategoria((await params).categoria)
    if (!categoria) return {}
    return {
        title: `Productos: ${categoria.title}`,
        description: categoria.description,
        alternates: { canonical: `/productos/${categoria.slug}` },
    }
}

export default async function CategoriaPage({ params }) {
    const categoria = getCategoria((await params).categoria)
    if (!categoria) notFound()

    return (
        <Layout
            breadcrumbTitle={categoria.title}
            footerVariant="two"
            pageHeader={{
                image: categoria.image,
                eyebrow: "Catálogo",
                text: categoria.description,
                crumbs: [{ label: "Productos", href: "/productos" }],
            }}
        >
            <ProductGrid categoria={categoria} />
        </Layout>
    )
}

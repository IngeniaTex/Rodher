import Link from "next/link"
import { notFound } from "next/navigation"
import Layout from "@/components/layout/Layout"
import ProductForm from "@/components/forms/ProductForm"
import { CATEGORIAS, getProducto } from "@/lib/productos"

export const dynamicParams = false

export function generateStaticParams() {
    return CATEGORIAS.flatMap((c) => c.productos.map((p) => ({ categoria: c.slug, producto: p.slug })))
}

export async function generateMetadata({ params }) {
    const { categoria: cat, producto: prod } = await params
    const found = getProducto(cat, prod)
    if (!found) return {}
    const { categoria, producto } = found
    return {
        title: producto.title,
        description: producto.summary,
        alternates: { canonical: `/productos/${categoria.slug}/${producto.slug}` },
        openGraph: { images: [producto.image || categoria.image] },
    }
}

export default async function ProductoPage({ params }) {
    const { categoria: cat, producto: prod } = await params
    const found = getProducto(cat, prod)
    if (!found) notFound()
    const { categoria, producto } = found
    const image = producto.image || categoria.image

    return (
        <Layout
            breadcrumbTitle={producto.title}
            footerVariant="two"
            pageHeader={{
                image,
                eyebrow: categoria.title,
                crumbs: [
                    { label: "Productos", href: "/productos" },
                    { label: categoria.title, href: `/productos/${categoria.slug}` },
                ],
            }}
        >
            <section className="shop-details-page1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="shop-details-page1__img">
                                <div className="shop-details-page1__img-inner">
                                    <img src={image} alt={producto.title} />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-7">
                            <div className="shop-details-page1__content">
                                <div className="shop-details-page1__title">
                                    <h6><Link href={`/productos/${categoria.slug}`}>{categoria.title}</Link></h6>
                                    <h2>{producto.title}</h2>
                                </div>
                                <div className="shop-details-page1__text">
                                    <p>{producto.summary}</p>
                                </div>
                                <div className="shop-details-page1__description">
                                    <div className="inner-title">
                                        <h3>Detalles de producto</h3>
                                    </div>
                                    {producto.description.map((text, i) => <p key={i}>{text}</p>)}
                                    {producto.features && (
                                        <>
                                            <p><strong>Características principales:</strong></p>
                                            <ul className="shop-details-page1__features">
                                                {producto.features.map((f) => <li key={f}>{f}</li>)}
                                            </ul>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="shop-details-page1__form">
                    <div className="title-box">
                        <h2>Contacto</h2>
                        <p>Solicitar Cotización <span>*</span></p>
                    </div>
                    <ProductForm producto={producto.title} />
                </div>
            </section>
        </Layout>
    )
}

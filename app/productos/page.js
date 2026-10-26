import Link from "next/link"
import Layout from "@/components/layout/Layout"
import { CATEGORIAS } from "@/lib/productos"

export const metadata = {
    title: "Productos",
    description: "Catálogo de paneles solares, equipos de bombeo y sistemas de cloración. Solicita tu cotización.",
    alternates: { canonical: "/productos" },
}

export default function ProductosPage() {
    return (
        <Layout breadcrumbTitle="Productos" footerVariant="two">
            <section className="shop-page-one">
                <div className="container">
                    <div className="row">
                        {CATEGORIAS.map((c) => (
                            <div key={c.slug} className="col-xl-4 col-lg-6">
                                <div className="shop-page-one-single">
                                    <div className="img-box">
                                        <Link href={`/productos/${c.slug}`}>
                                            <img src={c.image} alt={c.title} loading="lazy" />
                                        </Link>
                                    </div>
                                    <div className="content-box">
                                        <div className="title">
                                            <h3><Link href={`/productos/${c.slug}`}>{c.title}</Link></h3>
                                        </div>
                                        <p>{c.description}</p>
                                        <div className="bottom-box">
                                            <Link href={`/productos/${c.slug}`}>Ver productos <span className="icon-arrow-right"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

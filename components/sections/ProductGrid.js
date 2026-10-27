import Link from "next/link"
import { CATEGORIAS } from "@/lib/productos"

// Listado de productos de una categoría con barra lateral de categorías.
export default function ProductGrid({ categoria }) {
    return (
        <section className="shop-page-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-6 col-md-6">
                        <div className="shop-page-one-content">
                            <p style={{ marginBottom: 30 }}>{categoria.description}</p>
                            <div className="row">
                                {categoria.productos.map((p) => {
                                    const href = `/productos/${categoria.slug}/${p.slug}`
                                    return (
                                        <div key={p.slug} className="col-xl-6">
                                            <div className="shop-page-one-single">
                                                <div className="img-box">
                                                    <Link href={href}>
                                                        <img src={p.image || categoria.image} alt={p.title} loading="lazy" />
                                                    </Link>
                                                </div>
                                                <div className="content-box">
                                                    <div className="title">
                                                        <h3><Link href={href}>{p.title}</Link></h3>
                                                    </div>
                                                    <p>{p.summary}</p>
                                                    <div className="bottom-box">
                                                        <Link href={href}>Solicitar cotización <span className="icon-arrow-right"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="shop-page-one-sidebar">
                            <div className="shop-widget-single">
                                <div className="title">
                                    <h3>Categorías</h3>
                                    <div className="border-bx"></div>
                                </div>
                                <div className="shop-widget-single_category">
                                    <ul className="list-item clearfix">
                                        {CATEGORIAS.map((c) => (
                                            <li key={c.slug} className={c.slug === categoria.slug ? "active" : undefined}>
                                                <Link href={`/productos/${c.slug}`}>{c.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

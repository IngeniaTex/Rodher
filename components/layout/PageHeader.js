import Link from "next/link"
import { SITE } from "@/lib/site"

const DEFAULT_IMAGE = "/assets/images/headers/servicios.webp"

// Encabezado de las páginas internas: foto a todo lo ancho, título (h1) y ruta de navegación.
// crumbs son los niveles intermedios entre "Inicio" y la página actual.
export default function PageHeader({ title, image = DEFAULT_IMAGE, eyebrow = SITE.name, text, crumbs = [] }) {
    const trail = [{ label: "Inicio", href: "/" }, ...crumbs]
    const breadcrumbList = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [...trail, { label: title }].map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            ...(c.href ? { item: `${SITE.url}${c.href}` } : {}),
        })),
    }

    return (
        <section className="page-hero">
            <div className="page-hero__frame">
                <img className="page-hero__bg" src={image} alt="" fetchPriority="high" />
                <div className="page-hero__overlay"></div>
                <div className="container">
                    <div className="page-hero__content">
                        <p className="page-hero__eyebrow">{eyebrow}</p>
                        <h1 className="page-hero__title">{title}</h1>
                        {text && <p className="page-hero__text">{text}</p>}
                        <nav aria-label="Ruta de navegación">
                            <ol className="page-hero__crumbs list-unstyled">
                                {trail.map((c) => (
                                    <li key={c.href}><Link href={c.href}>{c.label}</Link></li>
                                ))}
                                <li aria-current="page">{title}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
            />
        </section>
    )
}

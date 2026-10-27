import { CATEGORIAS } from "@/lib/productos"
import { SERVICIOS } from "@/lib/servicios"
import { SITE } from "@/lib/site"

export default function sitemap() {
    const pages = ["", "/about", "/servicios", "/productos", "/promociones", "/contact", "/aviso-de-privacidad"]
    const servicios = SERVICIOS.map((s) => `/servicios/${s.slug}`)
    const productos = CATEGORIAS.flatMap((c) => [
        `/productos/${c.slug}`,
        ...c.productos.map((p) => `/productos/${c.slug}/${p.slug}`),
    ])

    return [...pages, ...servicios, ...productos].map((path) => ({
        url: `${SITE.url}${path}`,
        changeFrequency: "monthly",
        priority: path === "" ? 1 : 0.7,
    }))
}

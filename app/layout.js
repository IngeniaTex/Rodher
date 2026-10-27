import "@/public/assets/css/style.css"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import CookieConsent from "@/components/CookieConsent"
import { archivo, titilliumWeb, pacifico } from "@/lib/font"
import { SITE } from "@/lib/site"

export const metadata = {
    metadataBase: new URL(SITE.url),
    title: {
        default: `${SITE.name} | Paneles Solares y Equipos de Bombeo en Mérida`,
        template: `%s | ${SITE.name}`,
    },
    description: SITE.description,
    openGraph: {
        type: "website",
        locale: "es_MX",
        siteName: SITE.name,
        images: ["/assets/images/hero/energia-solar-hogar.webp"],
    },
    icons: {
        icon: [
            { url: "/assets/images/favicons/favicon.ico", sizes: "any" },
            { url: "/assets/images/favicons/favicon-32x32.png", type: "image/png", sizes: "32x32" },
            { url: "/assets/images/favicons/favicon-16x16.png", type: "image/png", sizes: "16x16" },
        ],
        apple: "/assets/images/favicons/apple-touch-icon.png",
    },
    manifest: "/assets/images/favicons/site.webmanifest",
}

const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    logo: `${SITE.url}/assets/images/resources/logo-1-rodher.png`,
    image: `${SITE.url}/assets/images/hero/energia-solar-hogar.webp`,
    email: SITE.email,
    telephone: SITE.phone.display,
    foundingDate: String(SITE.foundingYear),
    address: {
        "@type": "PostalAddress",
        addressLocality: SITE.location.city,
        addressRegion: SITE.location.region,
        addressCountry: SITE.location.country,
    },
    areaServed: ["Yucatán", "Centro y sureste de México"],
}

export default function RootLayout({ children }) {
    return (
        <html lang="es-MX" className={`${archivo.variable} ${titilliumWeb.variable} ${pacifico.variable}`}>
            <body>
                {children}
                <CookieConsent />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
                />
            </body>
        </html>
    )
}

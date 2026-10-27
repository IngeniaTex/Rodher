'use client'
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

import BackToTop from "../elements/BackToTop"
import PageHeader from "./PageHeader"
import Header from "./Header"
import Footer from "./Footer"

// breadcrumbTitle: título (<h1>) del encabezado de la página.
// pageHeader: { image, eyebrow, text, crumbs: [{ label, href }] } — foto y textos del encabezado.
export default function Layout({ breadcrumbTitle, pageHeader, footerVariant, wrapperCls, children }) {
    const [scroll, setScroll] = useState(false)
    const [isMobileMenu, setMobileMenu] = useState(false)
    const pathname = usePathname()
    const [menuPath, setMenuPath] = useState(pathname)

    const handleMobileMenu = () => setMobileMenu((open) => !open)

    // Cerrar el menú al cambiar de ruta
    if (menuPath !== pathname) {
        setMenuPath(pathname)
        setMobileMenu(false)
    }

    // La plantilla muestra el menú móvil con una clase en <body>
    useEffect(() => {
        document.body.classList.toggle("mobile-menu-visible", isMobileMenu)
    }, [isMobileMenu])

    // Cerrar también al restaurar la página desde back/forward cache
    useEffect(() => {
        const close = () => setMobileMenu(false)
        window.addEventListener("pageshow", close)
        return () => {
            window.removeEventListener("pageshow", close)
            document.body.classList.remove("mobile-menu-visible")
        }
    }, [])

    useEffect(() => {
        const WOW = require("wowjs")
        window.wow = new WOW.WOW({ live: false })
        window.wow.init()

        const onScroll = () => setScroll(window.scrollY > 100)
        onScroll()
        document.addEventListener("scroll", onScroll, { passive: true })
        return () => document.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <>
            <div className={`page-wrapper ${wrapperCls || ""}`} id="top">
                <Header scroll={scroll} handleMobileMenu={handleMobileMenu} />

                {breadcrumbTitle && <PageHeader title={breadcrumbTitle} {...pageHeader} />}

                <main>{children}</main>

                <Footer variant={footerVariant} />
            </div>
            <BackToTop scroll={scroll} />
        </>
    )
}

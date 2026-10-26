'use client'
import Link from "next/link"
import { useState } from "react"
import SocialLinks from "@/components/elements/SocialLinks"
import { NAV, SITE } from "@/lib/site"

export default function MobileMenu({ handleMobileMenu }) {
    const [openKey, setOpenKey] = useState(null)

    return (
        <div className="mobile-nav__wrapper">
            <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu}></div>
            <div className="mobile-nav__content">
                <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu} role="button" aria-label="Cerrar menú">
                    <i className="fa fa-times"></i>
                </span>

                <div className="logo-box">
                    <Link href="/" aria-label={SITE.name}>
                        <img src="/assets/images/resources/logo-2-rodher.png" width="150" alt={SITE.name} />
                    </Link>
                </div>

                <div className="mobile-nav__container">
                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                        <ul className="main-menu__list">
                            {NAV.map((item) => {
                                const isOpen = openKey === item.href
                                if (!item.children) {
                                    return <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
                                }
                                return (
                                    <li key={item.href} className={isOpen ? "dropdown current" : "dropdown"}>
                                        <Link href={item.href}>{item.label}</Link>
                                        <ul style={{ display: isOpen ? "block" : "none" }}>
                                            {item.children.map((child) => (
                                                <li key={child.href}><Link href={child.href}>{child.label}</Link></li>
                                            ))}
                                        </ul>
                                        <button
                                            type="button"
                                            className={isOpen ? "expanded open" : ""}
                                            onClick={() => setOpenKey(isOpen ? null : item.href)}
                                            aria-label={`${isOpen ? "Cerrar" : "Abrir"} ${item.label}`}
                                            aria-expanded={isOpen}
                                        >
                                            <span className="fa fa-angle-right" />
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <ul className="mobile-nav__contact list-unstyled">
                    <li>
                        <i className="fa fa-envelope"></i>
                        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                    </li>
                    <li>
                        <i className="fa fa-phone-alt"></i>
                        <a href={SITE.phone.href}>{SITE.phone.display}</a>
                    </li>
                </ul>
                <div className="mobile-nav__top">
                    <SocialLinks className="mobile-nav__social" />
                </div>
            </div>
        </div>
    )
}

import Link from "next/link"
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"
import SocialLinks from "@/components/elements/SocialLinks"
import WhatsAppButton from "@/components/elements/WhatsAppButton"
import { SITE } from "@/lib/site"

function MainNav({ handleMobileMenu }) {
    return (
        <div className="main-menu-two__wrapper">
            <div className="container">
                <div className="main-menu-two__wrapper-inner">
                    <div className="main-menu-two__left">
                        <div className="main-menu-two__logo">
                            <Link href="/"><img src="/assets/images/resources/logo-1-rodher.png" alt={SITE.name} /></Link>
                        </div>
                        <div className="main-menu-two__main-menu-box">
                            <WhatsAppButton variant="icon" className="main-menu-two__whatsapp-mobile" />
                            <a href="#" className="mobile-nav__toggler" onClick={(e) => { e.preventDefault(); handleMobileMenu() }} aria-label="Abrir menú">
                                <i className="fa fa-bars"></i>
                            </a>
                            <Menu />
                        </div>
                    </div>
                    <div className="main-menu-two__right">
                        <div className="main-menu-two__call-and-btn-box">
                            <WhatsAppButton variant="icon" />
                            <div className="main-menu-two__btn-box">
                                <Link href="/contact" className="main-menu-two__btn thm-btn">Cotizaciones</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Header({ scroll, handleMobileMenu }) {
    return (
        <>
            <header className="main-header-two">
                <div className="main-menu-two__top">
                    <div className="container">
                        <div className="main-menu-two__top-inner">
                            <div className="main-menu-two__top-left">
                                <SocialLinks className="main-menu-two__social" />
                                <p className="main-menu-two__text">Proyectos con Paneles Solares y Equipos de Bombeo</p>
                            </div>
                            <ul className="list-unstyled main-menu-two__contact-list">
                                <li>
                                    <div className="icon">
                                        <i className="icon-location"></i>
                                    </div>
                                    <div className="text">
                                        <p>{SITE.location.region}, México</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="icon-envelope"></i>
                                    </div>
                                    <div className="text">
                                        <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <nav className="main-menu main-menu-two">
                    <MainNav handleMobileMenu={handleMobileMenu} />
                </nav>
            </header>
            <div className={`stricky-header stricked-menu main-menu main-menu-two ${scroll ? "stricky-fixed" : ""}`}>
                <div className="sticky-header__content">
                    <MainNav handleMobileMenu={handleMobileMenu} />
                </div>
            </div>
            <MobileMenu handleMobileMenu={handleMobileMenu} />
        </>
    )
}

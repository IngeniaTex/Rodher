import Link from "next/link"
import SocialLinks from "@/components/elements/SocialLinks"
import { NAV, SITE } from "@/lib/site"

const servicios = NAV.find((item) => item.href === "/servicios").children

// El footer normal se monta sobre <Cta /> con margen negativo; variant="two" lo quita
// y es obligatorio en páginas que no terminan en <Cta />.
export default function Footer({ variant }) {
    return (
        <footer className={`site-footer${variant === "two" ? " site-footer--two" : ""}`}>
            <div className="site-footer__shape-1 float-bob-x">
                <img src="/assets/images/shapes/footer-shape-four.png" alt="" loading="lazy" />
            </div>
            <div className="container">
                <div className="site-footer__top">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="footer-widget__column footer-widget__about">
                                <div className="footer-widget__logo">
                                    <Link href="/"><img src="/assets/images/resources/logo-2-rodher.png" alt={SITE.name} loading="lazy" /></Link>
                                </div>
                                <p className="footer-widget__about-text">Trabajamos para ofrecerte soluciones confiables <br /> y eficientes en energía solar y bombeo hidráulico,
                                    garantizando <br /> el máximo rendimiento y la tranquilidad de una instalación segura.
                                </p>
                                <SocialLinks className="site-footer__social" />
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="footer-widget__column footer-widget__usefull-link">
                                <div className="footer-widget__title-box">
                                    <h3 className="footer-widget__title">Nosotros</h3>
                                </div>
                                <div className="footer-widget__link-box">
                                    <ul className="footer-widget__link list-unstyled">
                                        <li><Link href="/">Inicio</Link></li>
                                        <li><Link href="/about">Quiénes Somos</Link></li>
                                        <li><Link href="/productos">Productos</Link></li>
                                        <li><Link href="/promociones">Promociones</Link></li>
                                        <li><Link href="/contact">Contacto</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="footer-widget__column footer-widget__services">
                                <div className="footer-widget__title-box">
                                    <h3 className="footer-widget__title">Servicios</h3>
                                </div>
                                <ul className="footer-widget__link list-unstyled">
                                    {servicios.map((s) => (
                                        <li key={s.href}><Link href={s.href}>{s.label}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div className="footer-widget__column footer-widget__contact">
                                <div className="footer-widget__title-box">
                                    <h3 className="footer-widget__title">Contacto</h3>
                                </div>
                                <ul className="footer-widget__contact-list list-unstyled">
                                    <li>
                                        <h3>Correo</h3>
                                        <div className="content">
                                            <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Teléfono</h3>
                                        <div className="content">
                                            <p><a href={SITE.phone.href}>{SITE.phone.display}</a></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer__bottom">
                <div className="container">
                    <div className="site-footer__bottom-inner">
                        <p className="site-footer__bottom-text">© {SITE.name} {new Date().getFullYear()}. Todos los derechos reservados</p>
                        <ul className="list-unstyled site-footer__bottom-menu">
                            <li><Link href="/aviso-de-privacidad">Aviso de Privacidad</Link></li>
                        </ul>
                    </div>
                    <p className="site-footer__credit">
                        Sitio creado por <a href="https://ingeniatex.com" target="_blank" rel="noopener">ingeniatex.com</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

import Link from "next/link"

export default function Footer1() {
    return (
        <>
           
        <footer className="site-footer">
            <div className="site-footer__shape-1 float-bob-x">
                <img src="assets/images/shapes/footer-shape-four.png" alt=""/>
            </div>
            <div className="container">
                <div className="site-footer__top">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="footer-widget__column footer-widget__about">
                                <div className="footer-widget__logo">
                                    <Link href="/"><img src="assets/images/resources/logo-2-rodher.png"
                                            alt=""/></Link>
                                </div>
                                <p className="footer-widget__about-text">Trabajamos para ofrecerte soluciones confiables <br/> y eficientes en energía solar y bombeo hidráulico, 
                                garantizando <br/> el máximo rendimiento y la tranquilidad de una instalación segura.
                                </p>
                                <div className="site-footer__social">
                                    <Link href="#"><i className="icon-facebook"></i></Link>
                                    <Link href="#"><i className="icon-xpa"></i></Link>
                                    <Link href="#"><i className="icon-link-in"></i></Link>
                                    <Link href="#"><i className="icon-instagram"></i></Link>
                                </div>
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
                                        <li><Link href="about">Quienes Somos</Link></li>
                                        <li><Link href="#">Servicios</Link></li>
                                        <li><Link href="contact">contacto</Link></li>
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
                                    <li><Link href="paneles-solares">Paneles Solares</Link></li>
                                    <li><Link href="servcie-equipos-bombeo">Equipos de Bombeo</Link></li>
                                    <li><Link href="servcie-sisteamas-cloracion">Sistemas de Cloración</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div className="footer-widget__column footer-widget__contact">
                                <div className="footer-widget__title-box">
                                    <h3 className="footer-widget__title">Contácto</h3>
                                </div>
                                <ul className="footer-widget__contact-list list-unstyled">
                                    <li>
                                        <h3>Correo</h3>
                                        <div className="content">
                                        <p><Link href="mailto:example@gmail.com">ventas@rodheringenieria.com</Link></p>
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Teléfono</h3>
                                        <div className="content">
                                            <p><Link href="tel:8528525285505">+52 999 900 1393</Link></p>
                                            
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
                        <p className="site-footer__bottom-text">© Rodher Ingeniería 2025. Todos los derechos reservados</p>
                        <ul className="list-unstyled site-footer__bottom-menu">
                            {/* <li><Link href="about">Términos y Condiciones</Link></li> */}
                            <li><Link href="about">Pólitica de Privacidad</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        
        </>
    )
}

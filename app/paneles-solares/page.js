'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Paneles Solares">
        {/*Service Details Start*/}
        <section className="service-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="service-details__left">
                            <div className="service-details__img">
                                <img src="assets/images/services/service-details-paneles-solares.png" alt=""/>
                            </div>
                            <h3 className="service-details__title-1">Paneles Solares</h3>
                            <p className="service-details__text-1">En RODHER Ingeniería ofrecemos soluciones completas en energía solar mediante la 
                                 venta e instalación de sistemas fotovoltaicosdiseñados para hogares, negocios e industrias. 
                                Nuestros proyectos están orientados al ahorro energético, la sustentabilidad y el retorno de inversión a corto plazo.</p>
                            <p className="service-details__text-2">Además, brindamos mantenimiento preventivo, correctivo y monitoreo remoto para garantizar el 
                                máximo rendimiento de tus paneles solares a lo largo de su vida útil. Nuestro equipo técnico especializado 
                                te acompaña desde la evaluación inicial hasta la postventa, asegurando calidad, seguridad y eficiencia en cada instalación.</p>
                            <ul className="service-details__points-list list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-arrow-right"></span>
                                    </div>
                                    <p>Venta e instalación: Equipos solares certificados, instalación profesional y proyectos a medida según tu consumo.</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-arrow-right"></span>
                                    </div>
                                    <p>Mantenimiento y monitoreo: Revisión, limpieza y monitoreo continuo para asegurar el máximo desempeño energético.</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-arrow-right"></span>
                                    </div>
                                    <p>Asesoría y servicio postventa: Soporte técnico, garantías activas y acompañamiento en la optimización de tus sistemas solares.</p>
                                </li>
                            </ul>
                            <div className="service-details__img-box">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="service-details__img-box-single">
                                            <div className="service-details__img-box-img">
                                                <img src="assets/images/services/paneles-solares-img-box-img-1.png"
                                                    alt=""/>
                                            </div>
                                            <div className="service-details__img-box-content">
                                                <div className="service-details__img-box-content-icon-and-title">
                                                    <div className="service-details__img-box-content-icon">
                                                        <span className="icon-lamp"></span>
                                                    </div>
                                                    <h3 className="service-details__img-box-content-title">Instalación Profesional
                                                    </h3>
                                                </div>
                                                <p className="service-details__img-box-content-text">Contamos con técnicos certificados en energía fotovoltaica que garantizan una instalación segura, 
                                                eficiente y conforme a las normas eléctricas vigentes.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="service-details__img-box-single">
                                            <div className="service-details__img-box-img">
                                                <img src="assets/images/services/paneles-solares-img-box-img-2.png"
                                                    alt=""/>
                                            </div>
                                            <div className="service-details__img-box-content">
                                                <div className="service-details__img-box-content-icon-and-title">
                                                    <div className="service-details__img-box-content-icon">
                                                        <span className="icon-chirger"></span>
                                                    </div>
                                                    <h3 className="service-details__img-box-content-title">Garantía y Soporte</h3>
                                                </div>
                                                <p className="service-details__img-box-content-text">Todos nuestros sistemas solares cuentan con garantía en equipos e instalación, 
                                                además de soporte técnico continuo y atención personalizada postventa.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="service-details__sidebar">
                            <div className="service-details__services-box">
                                <h3 className="service-details__services-title">Nuesrtos Servicios</h3>
                                <ul className="service-details__services-list list-unstyled">
                                    <li>
                                        <Link href="#">Venta e Instalación <span
                                                className="icon-arrow-right"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="#">Mantenimiento y monitoreo<span
                                                className="icon-arrow-right"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="#">Asesoría y servicio post venta<span
                                                className="icon-arrow-right"></span></Link>
                                    </li>
                                    {/* <li className="active">
                                        <Link href="installing-ceiling-fan">installing a ceiling fan<span
                                                className="icon-arrow-right"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="lighting-fixtures">Lighting & Fixtures<span
                                                className="icon-arrow-right"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="maintenance-service">Maintenance Service<span
                                                className="icon-arrow-right"></span></Link>
                                    </li> */}
                                </ul>
                            </div>
                            <div className="project-details__get-started">
                                <h3 className="project-details__get-started-title">Comienza Tu Proyecto Hoy</h3>
                                <p className="project-details__get-started-text">Da el siguiente paso hacia la eficiencia energética. En <strong>RODHER Ingeniería</strong> te asesoramos en la instalación 
                                de paneles solares y equipos de bombeo hidráulico diseñados a la medida de tus necesidades.</p>
                                <ul className="project-details__get-started-points list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-call"></span>
                                        </div>
                                        <p><Link href="tel:585858575084">+52 999 900 1393</Link></p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-envelope"></span>
                                        </div>
                                        <p><Link href="mailto:example@gmail.com">rodher@gmail.com</Link></p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-location"></span>
                                        </div>
                                        <p>Mérida, Yucatán</p>
                                    </li>
                                </ul>
                                <div className="project-details__get-started-btn-box">
                                    <Link href="contact" className="project-details__get-started-btn thm-btn">Contáctanos</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Service Details End*/}

          {/*CTA One Start*/}
                <section className="cta-one">
                    <div className="container">
                        <div className="cta-one__inner wow fadeInUp" data-wow-delay="300ms">
                            <div className="cta-one__img">
                                <img src="assets/images/resources/Super_Promo.png" alt=""/>
                            </div>
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">Ahorra Energía y Dinero con Soluciones Inteligentes</span>
                                </div>
                                <div className="section-title__title-box sec-title-animation animation-style2">
                                    <h2 className="section-title__title title-animation">Promociones y <br/>Descuentos Especiales
                                    </h2>
                                </div>
                            </div>
                            <p className="cta-one__text">Aprovecha nuestras ofertas en <strong>venta e instalación de paneles solares</strong>.<br/> 
                                Invierte en eficiencia energética y comienza a reducir tus costos desde<br/>  el primer mes.<br/> 
                                Nuestros proyectos están diseñados para brindarte el máximo rendimiento<br/> y una recuperación rápida de inversión.</p>
                            <div className="cta-one__btn-and-call-box">
                                <div className="cta-one__btn-box">
                                    <Link href="promociones" className="cta-one__btn thm-btn">Promociones</Link>
                                </div>
                                <div className="cta-one__call-box">
                                    <div className="content">
                                        <a 
                                                href="https://wa.me/529999001393" 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                // className="whatsapp-button whatsapp-button--dark whatsapp-button--compact"
                                                className="whatsapp-button whatsapp-button--filled whatsapp-button--compact"
                                            >
                                                <i className="fab fa-whatsapp"></i>
                                                <span>WhatsApp</span>
                                            </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*CTA One End*/}
        </Layout>
        </>
    )
}
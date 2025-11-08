'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Sistemas de Cloración">
        {/*Service Details Start*/}
        <section className="service-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="service-details__left">
                            <div className="service-details__img">
                                <img src="assets/images/services/service-details-paneles-solares.png" alt=""/>
                            </div>
                            <h3 className="service-details__title-1">Sistemas de Cloración</h3>

                                <p className="service-details__text-1">
                                En RODHER Ingeniería desarrollamos soluciones completas en 
                                sistemas de cloración por gas e hipoclorito de sodio, diseñadas para el 
                                tratamiento, desinfección y potabilización del agua en aplicaciones 
                                 residenciales, comerciales e industriales. 
                                Nuestros proyectos garantizan un suministro seguro y eficiente de agua, cumpliendo con las 
                                normas y estándares de calidad más exigentes.
                                </p>

                                <p className="service-details__text-2">
                                Contamos con equipos automatizados de alta precisión para el dosificado de cloro gas o 
                                hipoclorito, integrados con sistemas de control y monitoreo que aseguran una operación 
                                confiable, estable y de bajo mantenimiento.  
                                Cada instalación es realizada por personal técnico certificado, priorizando la 
                                seguridad, la durabilidad y el cumplimiento de las regulaciones ambientales.
                                </p>

                                <ul className="service-details__points-list list-unstyled">
                                <li>
                                    <div className="icon">
                                    <span className="icon-arrow-right"></span>
                                    </div>
                                    <p><strong>Venta e instalación:</strong> Suministro, instalación y puesta en marcha de 
                                    sistemas de cloración adaptados a la capacidad y tipo de aplicación de tu sistema hidráulico.</p>
                                </li>

                                <li>
                                    <div className="icon">
                                    <span className="icon-arrow-right"></span>
                                    </div>
                                    <p><strong>Cloro gas e hipoclorito:</strong> Equipos dosificadores y paneles de control 
                                    automáticos para desinfección continua en plantas de tratamiento, pozos profundos y redes 
                                    de distribución de agua.</p>
                                </li>


                                <li>
                                    <div className="icon">
                                    <span className="icon-arrow-right"></span>
                                    </div>
                                    <p><strong>Mantenimiento preventivo y correctivo:</strong> Servicios especializados de 
                                    inspección, calibración y reparación de equipos de cloración para asegurar el funcionamiento 
                                    óptimo y la vida útil del sistema.</p>
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
                                    <li className="active">
                                        <Link href="#">Venta e Instalación <span
                                                className="icon-arrow-right"></span></Link>
                                    </li>
                                
                                    <li>
                                        <Link href="installing-ceiling-fan">Mantenimiento<span
                                                className="icon-arrow-right"></span></Link>
                                    </li>
                                    {/*<li>
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
                                        <p><Link href="mailto:example@gmail.com">ventas@rodheringenieria.com</Link></p>
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
                                <img src="assets/images/resources/el-buen-mes.png" alt=""/>
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
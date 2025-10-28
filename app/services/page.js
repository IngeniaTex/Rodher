'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Nuestros Servicios">
        {/*Services Page Start */}
        <section className="services-two services-page">
            <div className="services-two__shape-1 img-bounce">
                <img src="assets/images/shapes/services-two-shape-1.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="services-two__single">
                            <div className="services-two__icon">
                                <span className="icon-ceiling-lamp-2"></span>
                            </div>
                            <p className="services-two__sub-title">Energía Solar</p>
                            <h3 className="services-two__title"><Link href="paneles-solares">Paneles Solares</Link>
                            </h3>
                            <p className="services-two__text">Diseñamos e instalamos sistemas fotovoltaicos para que generes tu propia energía eléctrica, reduciendo costos y obteniendo independencia energética.</p>
                            <Link href="paneles-solares" className="services-two__learn-more">Ver más<span
                                    className="icon-arrow-right"></span></Link>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="services-two__single">
                            <div className="services-two__icon">
                                <span className="icon-settings-1"></span>
                            </div>
                            <p className="services-two__sub-title">Equipos de bombeo</p>
                            <h3 className="services-two__title"><Link href="servcie-equipos-bombeo">Productos de bombeo</Link>
                            </h3>
                            <p className="services-two__text">Suministro e instalación de bombas hidráulicas para riego, presión de agua, extracción, procesos industriales. Soluciones dimensionadas a tu necesidad.</p>
                            <Link href="lighting-fixtures" className="services-two__learn-more">Ver más<span
                                    className="servcie-equipos-bombeo"></span></Link>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-6 wow fadeInRight" data-wow-delay="500ms">
                        <div className="services-two__single">
                            <div className="services-two__icon">
                                <span className="icon-product-return"></span>
                            </div>
                            <p className="services-two__sub-title">Productos</p>
                            <h3 className="services-two__title"><Link href="#">Catálogo de productos</Link>
                            </h3>
                            <p className="services-two__text">Contamos con paneles solares, bombas, controladores, sistemas de cloración y accesorios 
                            diseñados para garantizar eficiencia, durabilidad y un desempeño óptimo en cada instalación.
                            </p>
                            <Link href="maintenance-service" className="services-two__learn-more">Ver más<span
                                    className="icon-arrow-right"></span></Link>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                </div>
            </div>
        </section>
        {/*Services Page End */}


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
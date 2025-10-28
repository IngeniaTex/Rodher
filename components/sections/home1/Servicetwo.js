import Link from "next/link"
export default function Servicetwo() {
    return (
        <>
        {/*Services Two Start */}
        <section className="services-two">
            <div className="services-two__shape-1 img-bounce">
                <img src="assets/images/shapes/services-two-shape-1.png" alt=""/>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Nuestros Servicios</span>
                    </div>
                    <div className="section-title__title-box sec-title-animation animation-style1">
                        <h2 className="section-title__title title-animation">Soluciones especializadas en energía solar<br/> y bombeo hidráulico
                        </h2>
                    </div>
                </div>
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
                            <Link href="servcie-equipos-bombeo" className="services-two__learn-more">Ver más<span
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
                            <h3 className="services-two__title"><Link href="productos-paneles">Catálogo de productos</Link>
                            </h3>
                            <p className="services-two__text">Contamos con paneles solares, bombas, controladores, sistemas de cloración y accesorios 
                            diseñados para garantizar eficiencia, durabilidad y un desempeño óptimo en cada instalación.
                            </p>
                            <Link href="productos-paneles" className="services-two__learn-more">Ver más<span
                                    className="icon-arrow-right"></span></Link>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                </div>
            </div>
        </section>
        {/*Services Two End */}
    
        </>
    )
}

import Link from "next/link"
export default function Service() {
    return (
        <>
        {/*Services One Start */}
        <section className="services-one">
            <div className="container">
                <div className="services-one__inner">
                    <ul className="services-one__service-list list-unstyled">
                        <li className="wow fadeInLeft" data-wow-delay="100ms">
                            <div className="services-one__single">
                                <div className="services-one__icon">
                                    <span className="icon-affordable-price"></span>
                                </div>
                                <h3 className="services-one__title"><Link href="about">Inversión Inteligente</Link></h3>
                                <p className="services-one__text">Diseñamos soluciones eficientes y rentables <br/> pensadas para tu hogar o negocio.<br/> Ahorra désde el primer día.</p>
                            </div>
                        </li>
                        <li className="wow fadeInUp" data-wow-delay="200ms">
                            <div className="services-one__single">
                                <div className="services-one__icon">
                                    <span className="icon-setting"></span>
                                </div>
                                <h3 className="services-one__title"><Link href="services">Garantía del 100%</Link></h3>
                                <p className="services-one__text">Cada sistema solar y equipo de bombeo <br/>que instalamos cuenta con garantía completa, ofreciéndote tranquilidad <br/>y soporte técnico especializado.</p>
                            </div>
                        </li>
                        <li className="wow fadeInRight" data-wow-delay="300ms">
                            <div className="services-one__single">
                                <div className="services-one__icon">
                                    <span className="icon-services"></span>
                                </div>
                                <h3 className="services-one__title"><Link href="contact">Servicio personalizado</Link></h3>
                                <p className="services-one__text">Nuestro equipo está siempre disponible <br/>para atender tus necesidades y resolver cualquier incidencia de forma <br/>rápida y eficaz, sin importar la hora.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
       {/*Services One End */}
    
        </>
    )
}

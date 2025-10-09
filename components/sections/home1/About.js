import Link from "next/link"
export default function About() {
    return (
        <>
        
        {/*About One Start */}
        <section className="about-one">
            <div className="about-one__shape-one float-bob-y">
                <img src="assets/images/shapes/about-one-shape-1.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="about-one__img-box-1">
                                        <div className="about-one__img-1">
                                            <img src="assets/images/resources/nosotros-1.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="about-one__cirtified">
                                        <div className="icon">
                                            <span className="icon-certified"></span>
                                        </div>
                                        <h3>Distribuidor<br/> autorizado</h3>
                                    </div>
                                    <div className="about-one__img-box-2">
                                        <div className="about-one__img-2">
                                            <img src="assets/images/resources/nosotros-2.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-one__right wow fadeInRight" data-wow-delay="300ms">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">Conócenos</span>
                                </div>
                                <div className="section-title__title-box sec-title-animation animation-style2">
                                    <h2 className="section-title__title title-animation">Conoce RODHER Ingeniería
                                    </h2>
                                </div>
                            </div>
                                <p className="about-one__text-1">RODHER Ingeniería fue constituida en el año 2017 con la 
                                    finalidad de brindar un servicio integral y profesional a sistemas municipales de agua potable, 
                                    fraccionadores, contratistas, constructoras, hoteles, industria en general y cualquier usuario 
                                    de equipos de desinfección, bombeo, seguridad, paneles solares, detección de fugas de agua potable, 
                                    ahorro de energía, equipos para albercas, purificación de agua y automatización de procesos dentro
                                     del centro y sureste del país.</p>
                            <p className="about-one__text-2">  </p>
                            <div className="about-one__btn-box">
                                <Link href="about" className="about-one__btn thm-btn">Más sobre nosotros</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About One End */}
        
        </>
    )
}

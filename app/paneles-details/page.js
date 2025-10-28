'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import ContactForm from "./ContactForm"

export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={4} breadcrumbTitle="Detalles de Producto">
        {/*Start Scrolling Text1*/}
        <section className="scrolling-text1">
            <div className="scrolling-title">
                <ul className="marquee_mode">
                    <li>Detalles de Productos</li>
                   
                </ul>
            </div>
        </section>
        {/*End Scrolling Text1*/}

        {/*Start Shop Details Page1*/}
        <section className="shop-details-page1">
            <div className="big-title">shop</div>
            <div className="container">
                <div className="row">

                    {/*Start Shop Details Page1 Img*/}
                    <div className="col-xl-5">
                        <div className="shop-details-page1__img">
                            <div className="shop-details-page1__img-inner">
                                <img src="assets/images/shop/product-details-img-1.jpg" alt="Image"/>
                                <div className="overlay-icon">
                                    <Link className="lightbox-image" data-fancybox="gallery"
                                        href="assets/images/shop/product-details-img-1.jpg">
                                        <i className="icon-search-interface-symbol" ></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Shop Details Page1 Img*/}

                    {/*Start Shop Details Page1 Content*/}
                    <div className="col-xl-7">
                        <div className="shop-details-page1__content">
                            <div className="shop-details-page1__title">
                                <h6>Paneles Solares</h6>
                                <h2>Panel Solar 1</h2>
                            </div>
                            <div className="shop-details-page1__value">
                                <h3>$50,000.00 <del>$20,000.00</del></h3>
                            </div>
                            <div className="shop-details-page1__text">
                                <p>
                                Nuestros paneles solares están diseñados para ofrecer un rendimiento confiable, eficiente y duradero,
                                transformando la energía del sol en electricidad limpia para tu hogar o negocio. Fabricados con celdas de alta
                                eficiencia y materiales resistentes a condiciones extremas, garantizan una producción óptima incluso en climas cálidos
                                como el de Yucatán.
                                </p>
                            </div>
                            <div className="shop-details-page1__description">
                                <div className="inner-title">
                                    <h3>Detalles de producto</h3>
                                </div>
                                <p>Este panel solar combina tecnología avanzada con una excelente relación costo-beneficio. Su estructura de aluminio anodizado
                                    ofrece resistencia a la corrosión y su vidrio templado de alta transparencia maximiza la captación de radiación solar.
                                    Ideal para instalaciones residenciales, comerciales o industriales que buscan reducir el consumo de energía eléctrica
                                    y aprovechar fuentes renovables.
                                </p>
                                <p>
                                    <strong>Características principales:</strong><br />
                                    • Potencia nominal: 550 W<br />
                                    • Eficiencia del módulo: 21 %<br />
                                    • Tipo de celda: Monocristalina PERC<br />
                                    • Marco de aluminio anodizado resistente a la intemperie<br />
                                    • Vidrio templado antirreflectante de 3.2 mm<br />
                                    • Garantía de rendimiento lineal: 25 años<br />
                                    • Apto para sistemas conectados a la red (On-Grid) y autónomos (Off-Grid)
                                </p>
                            </div>


                        </div>
                    </div>
                    {/*End Shop Details Page1 Content*/}

                </div>
            </div>
        </section>
        <section>
        <div className="shop-details-page1__form">
                <div className="title-box">
                    <h2>Contacto</h2>
                    <p>Solicitar Cotizacón <span>*</span></p>
                </div>
                <ContactForm />

                {/* <form id="contact-form" name="contact_form" className="default-form2"
                    action="api/product" method="POST">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="input-box">
                                <input type="text" name="nombre" placeholder="Nombre *"
                                    required=""/>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="input-box">
                                <input type="email" name="email" placeholder="Correo Electrónico *"
                                    required=""/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="input-box">
                                <textarea name="message" id="formMessage" placeholder="Comentarios"
                                    required="" aria-required="true"></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product-form-box-checkbox">
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12">
                            <div className="button-box">
                                <button className="thm-btn" type="submit"
                                    data-loading-text="Please wait...">
                                    <span className="txt">Enviar</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form> */}
            </div>
        </section>
        {/*End Shop Details Page1*/}
        </Layout>
        </>
    )
}
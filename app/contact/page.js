
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import ContactForm from "./ContactForm"

export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contácto">
        {/*Contact Two Start*/}
        <section className="contact-two">
            <div className="container">
                <div className="row">
                    {/*Contact Two Single Start*/}
                    <div className="col-xl-4 col-lg-4">
                        <div className="contact-two__single">
                            <div className="contact-two__icon">
                                <span className="icon-call"></span>
                            </div>
                            <p style={{ textAlign: "center" }}>Llámanos</p>
                            <h3><Link href="tel:558270575405">+52 999 900 1393</Link></h3>
                        </div>
                    </div>
                    {/*Contact Two Single End*/}
                    {/*Contact Two Single Start*/}
                    <div className="col-xl-4 col-lg-4">
                        <div className="contact-two__single">
                            <div className="contact-two__icon">
                                <span className="icon-envelope"></span>
                            </div>
                            <p style={{ textAlign: "center" }}>Escribenos</p>
                            <h3><Link href="mailto:example@gamil.com">ventas@rodheringenieria.com</Link></h3>
                        </div>
                    </div>
                    {/*Contact Two Single End*/}
                    {/*Contact Two Single Start*/}
                    <div className="col-xl-4 col-lg-4">
                        <div className="contact-two__single">
                            <div className="contact-two__icon">
                                <span className="icon-location"></span>
                            </div>
                            <p style={{ textAlign: "center" }}>Ubicación</p>
                            <h3>Mérida, Yucatán</h3>
                        </div>
                    </div>
                    {/*Contact Two Single End*/}
                </div>
            </div>
        </section>
        {/*Contact Two End*/}
                {/*Contact Three Start*/}
                <section className="contact-three">
                    <div className="container">
                        <div className="contact-three__inner w-80">
                            <div className="contact-three__right w-80">
                                <h3 className="contact-three__form-title text-center mb-4">¡Cotiza Ahora!</h3>
                                <ContactForm />
                                {/* <form id="contact-form" className="contact-form-validated contact-three__form"
                                    action="api/contact" method="POST">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-three__input-box">
                                                <input type="email" name="email" placeholder="Correo Electrónico" required="" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-three__input-box">
                                                <input type="number" placeholder="Télefono" name="number" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-three__input-box">
                                                <input type="text" placeholder="Empresa" name="company" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-three__input-box">
                                                <select className="nice-select" name="tipo_inmueble" required>
                                                    <option value="">Tipo de inmueble</option>
                                                    <option value="residencial">Residencial</option>
                                                    <option value="comercial">Comercial</option>
                                                    <option value="industrial">Industrial</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-three__input-box">
                                                <input type="number" placeholder="Consumo mensual (kwh)" name="consumo" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-three__input-box">
                                                <input type="text" placeholder="Ciudad o Municipio" name="ubicacion" />
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="contact-three__input-box text-message-box">
                                                <textarea name="message" placeholder="Describe tu proyecto"></textarea>
                                            </div>
                                            <div className="contact-three__btn-box">
                                                <button type="submit" className="thm-btn contact-three__btn"
                                                    data-loading-text="Please wait...">
                                                    Enviar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form> */}
                            </div>
                        </div>
                    </div>
                </section>
                {/*Contact Three End*/}

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
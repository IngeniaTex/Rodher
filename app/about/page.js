'use client'
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import BrandSlider from '@/components/slider/BrandSlider'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            
        },
        575: {
            slidesPerView: 1,
            
        },
        767: {
            slidesPerView: 1,
            
        },
        991: {
            slidesPerView: 2,
            
        },
        1199: {
            slidesPerView: 2,
            
        },
        1350: {
            slidesPerView: 2,
            
        },
    }



}

export default function Home() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Quienes Somos">
        {/*About One Start */}
        <section className="about-one about-four">
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
                                            <img src="assets/images/resources/about-1.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="about-one__cirtified">
                                        <div className="icon">
                                            <span className="icon-certified"></span>
                                        </div>
                                        <h3>Distribuidor<br/> Autorizado</h3>
                                    </div>
                                    <div className="about-one__img-box-2">
                                        <div className="about-one__img-2">
                                            <img src="assets/images/resources/about-2.png" alt=""/>
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
                                    <h2 className="section-title__title title-animation">RODHER Ingeniería
                                    </h2>
                                </div>
                            </div>
                            <p className="about-one__text-1">RODHER Ingeniería fue constituida en el año 2017 somos una empresa 
                                comprometida con el desarrollo sostenible y la innovación energética. Nos especializamos en 
                                soluciones integrales de energía solar y en el suministro de equipos para el tratamiento de agua
                                 potable, agua residual y purificación, ofreciendo alternativas limpias, eficientes y accesibles
                                  que impulsan el bienestar de las personas y la protección del medio ambiente.</p>
                            <p className="about-one__text-2">Con un equipo técnico altamente capacitado y una sólida experiencia en el 
                                sector, brindamos asesoría, diseño e instalación de sistemas adaptados a las necesidades de hogares, 
                                empresas e instituciones, contribuyendo a un futuro más verde y responsable. </p>
                            <div className="about-one__btn-box">
                                <Link href="contact" className="about-one__btn thm-btn">Conócenos más</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About One End */}

        {/*Video One Start*/}
        <section className="video-one">
            <div className="video-one__sahpe-1">
                <img src="assets/images/shapes/video-one-shape-1.png" alt=""/>
            </div>
            <div className="video-one__bg wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms"
                style={{ backgroundImage: 'url(assets/images/backgrounds/porque-elegirnos.png)' }} >
                {/* <div className="video-one__video-link">
                    <a onClick={() => setOpen(true)} className="video-popup">
                        <div className="video-one__video-icon">
                            <span className="fas fa-play"></span>
                            <i className="ripple"></i>
                        </div>
                    </a>
                </div> */}
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6"></div>
                    <div className="col-xl-6">
                        <div className="video-one__right wow fadeInRight" data-wow-delay="300ms">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">Por qué elegirnos</span>
                                </div>
                                <div className="section-title__title-box sec-title-animation animation-style2">
                                    <h2 className="section-title__title title-animation">¿Por qué RODHER Ingeniería?</h2>
                                </div>
                            </div>
                            <p className="video-one__text-1">Porque somos más que proveedores: somos aliados comprometidos con tu ahorro,
                                 eficiencia y tranquilidad.</p>
                            <p className="video-one__text-2">Ventajas destacadas</p>
                            <div className="video-one__btn-box">
                                <Link href="productos-paneles" className="video-one__btn thm-btn">Productos</Link>
                                <Link href="contact" className="video-one__btn-two thm-btn">Cotizaciones</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Video One End*/}

        {/*Counter One Start*/}
        <section className="counter-one">
            <div className="container">
                <div className="counter-one__inner">
                    <div className="row">
                        {/*Counter One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="counter-one__single counter-one__single-1">
                                <div className="counter-one__icon">
                                    <span className="icon-hands-on-experience"></span>
                                </div>
                                <div className="counter-one__count-box">
                                    <CounterUp end={7} />
                                    <span>+</span>
                                </div>
                                <p className="counter-one__text">Años de experiencia</p>
                            </div>
                        </div>
                        {/*Counter One Single End*/}
                        {/*Counter One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="counter-one__single">
                                <div className="counter-one__icon">
                                    <span className="icon-technician-1"></span>
                                </div>
                                <div className="counter-one__count-box">
                                <CounterUp end={10} />
                                    <span>+</span>
                                </div>
                                <p className="counter-one__text">Proveedores</p>
                            </div>
                        </div>
                        {/*Counter One Single End*/}
                        {/*Counter One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="counter-one__single">
                                <div className="counter-one__icon">
                                    <span className="icon-project-complete"></span>
                                </div>
                                <div className="counter-one__count-box">
                                <CounterUp end={80} />
                                    <span>+</span>
                                </div>
                                <p className="counter-one__text">Projectos completdos</p>
                            </div>
                        </div>
                        {/*Counter One Single End*/}
                        {/*Counter One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms">
                            <div className="counter-one__single">
                                <div className="counter-one__icon">
                                    <span className="icon-happy-customer"></span>
                                </div>
                                <div className="counter-one__count-box">
                                <CounterUp end={50} />
                                    <span>+</span>
                                </div>
                                <p className="counter-one__text">Clientes Satisfechos</p>
                            </div>
                        </div>
                        {/*Counter One Single End*/}
                    </div>
                </div>
            </div>
        </section>
        {/*Counter One End*/}

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
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </Layout>
        </>
    )
}



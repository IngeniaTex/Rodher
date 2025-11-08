
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useState } from 'react'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}


export default function Banner() {

    const [isOpen, setOpen] = useState(false)
    return (
        <>

        {/* Main Sllider Start */}
        <section className="main-slider">
            <Swiper {...swiperOptions} className="main-slider__carousel owl-carousel owl-theme">
                <SwiperSlide>
                <div className="item">
                    <div className="main-slider__bg"
                        style={{ backgroundImage: 'url(assets/images/backgrounds/paneles-solares.png)' }} >
                    </div>{/* /.slider-one__bg */}
                    <div className="main-slider__shape-1"></div>
                    <div className="main-slider__shape-2"></div>
                    <div className="main-slider__shape-3"></div>
                    {/* <div className="main-slider__img">
                        <img src="assets/images/resources/paneles-solares-instalacion.png" alt=""/>
                    </div> */}
                    <div className="container">
                        <div className="main-slider__content">
                            <div className="main-slider__sub-title-box">
                                <p className="main-slider__sub-title">Soluciones Energéticas y de Bombeo</p>
                                <div className="main-slider__sub-title-shape"></div>
                            </div>
                            <h2 className="main-slider__title">RODHER Ingeniería<br/> Energía Solar</h2>
                            <p className="main-slider__text">Expertos en la venta e instalación de paneles solares
                                <br/> Ofrecemos soluciones eficientes, sustentables y a la medida de tus necesidades.</p>
                            <div className="main-slider__btn-box">
                                <Link href="about" className="main-slider__btn thm-btn">Conoce más</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item">
                    <div className="main-slider__bg"
                        style={{ backgroundImage: 'url(assets/images/backgrounds/paneles-solares.png)' }} >
                    </div>{/* /.slider-one__bg */}
                    <div className="main-slider__shape-1"></div>
                    <div className="main-slider__shape-2"></div>
                    <div className="main-slider__shape-3"></div>
                    {/* <div className="main-slider__img">
                        <img src="assets/images/resources/paneles-solares-instalacion.png" alt=""/>
                    </div> */}
                    <div className="container">
                        <div className="main-slider__content">
                            <div className="main-slider__sub-title-box">
                                <p className="main-slider__sub-title">Soluciones Energéticas y de Bombeo</p>
                                <div className="main-slider__sub-title-shape"></div>
                            </div>
                            <h2 className="main-slider__title">RODHER Ingeniería<br/>Equipos de Bombeo</h2>
                            <p className="main-slider__text">Expertos en la venta e instalación de equipos de bombeo
                                <br/> Ofrecemos soluciones eficientes, sustentables y a la medida de tus necesidades.</p>
                            <div className="main-slider__btn-box">
                                <Link href="about" className="main-slider__btn thm-btn">Conoce más</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item">
                    <div className="main-slider__bg"
                        style={{ backgroundImage: 'url(assets/images/backgrounds/paneles-solares.png)' }} >
                    </div>{/* /.slider-one__bg */}
                    <div className="main-slider__shape-1"></div>
                    <div className="main-slider__shape-2"></div>
                    <div className="main-slider__shape-3"></div>
                    {/* <div className="main-slider__img">
                        <img src="assets/images/resources/paneles-solares-instalacion.png" alt=""/>
                    </div> */}
                    <div className="container">
                        <div className="main-slider__content">
                            <div className="main-slider__sub-title-box">
                                <p className="main-slider__sub-title">Soluciones Energéticas y de Bombeo</p>
                                <div className="main-slider__sub-title-shape"></div>
                            </div>
                            <h2 className="main-slider__title">RODHER Ingeniería<br/>Sistemas de Cloración</h2>
                            <p className="main-slider__text">Expertos en la venta e instalación de sistemas de cloración
                                <br/> Ofrecemos soluciones eficientes, sustentables y a la medida de tus necesidades.</p>
                            <div className="main-slider__btn-box">
                                <Link href="about" className="main-slider__btn thm-btn">Conoce más</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </section>
        {/*Main Sllider Start */}

       


        
        </>
    )
}

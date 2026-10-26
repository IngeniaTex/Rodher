'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const SLIDES = [
    { title: "Energía Solar", text: "Expertos en la venta e instalación de paneles solares", href: "/servicios/paneles-solares" },
    { title: "Equipos de Bombeo", text: "Expertos en la venta e instalación de equipos de bombeo", href: "/servicios/equipos-bombeo" },
    { title: "Sistemas de Cloración", text: "Expertos en la venta e instalación de sistemas de cloración", href: "/servicios/sistemas-cloracion" },
]

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}

export default function Banner() {
    return (
        <section className="main-slider">
            <Swiper {...swiperOptions} className="main-slider__carousel">
                {SLIDES.map((slide, i) => (
                    <SwiperSlide key={slide.title}>
                        <div className="item">
                            <div className="main-slider__bg"
                                style={{ backgroundImage: 'url(/assets/images/backgrounds/paneles-solares.webp)' }} >
                            </div>
                            <div className="main-slider__shape-1"></div>
                            <div className="main-slider__shape-2"></div>
                            <div className="main-slider__shape-3"></div>
                            <div className="container">
                                <div className="main-slider__content">
                                    <div className="main-slider__sub-title-box">
                                        <p className="main-slider__sub-title">Soluciones Energéticas y de Bombeo</p>
                                        <div className="main-slider__sub-title-shape"></div>
                                    </div>
                                    {/* Solo el primer slide lleva el h1 de la página */}
                                    {i === 0
                                        ? <h1 className="main-slider__title">RODHER Ingeniería<br /> {slide.title}</h1>
                                        : <h2 className="main-slider__title">RODHER Ingeniería<br /> {slide.title}</h2>}
                                    <p className="main-slider__text">{slide.text}
                                        <br /> Ofrecemos soluciones eficientes, sustentables y a la medida de tus necesidades.</p>
                                    <div className="main-slider__btn-box">
                                        <Link href={slide.href} className="main-slider__btn thm-btn">Conoce más</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

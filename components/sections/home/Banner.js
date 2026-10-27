'use client'
import Link from "next/link"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { SITE, STATS } from "@/lib/site"

// Cada slide: foto de fondo, título grande, texto, botones y una tarjeta con un dato o foto.
const SLIDES = [
    {
        image: "/assets/images/hero/energia-solar-hogar.webp",
        alt: "Casa con paneles solares instalados en el techo",
        eyebrow: `Paneles solares en ${SITE.location.display}`,
        title: ["Energía", "solar"],
        text: "Diseñamos e instalamos sistemas fotovoltaicos para hogares, negocios e industrias. Genera tu propia electricidad y reduce el costo de tu recibo de luz.",
        primary: { label: "Solicita tu cotización", href: "/contact" },
        secondary: { label: "Conoce el servicio", href: "/servicios/paneles-solares" },
        card: { value: `+${STATS.proyectos}`, label: "proyectos completados en el sureste de México" },
    },
    {
        image: "/assets/images/hero/proyecto-restaurante-escandon.webp",
        alt: "Paneles solares instalados por RODHER en la azotea del Restaurante Escandón",
        eyebrow: "Proyecto real · Restaurante Escandón",
        title: ["Energía solar", "para negocios"],
        text: "Sistemas fotovoltaicos dimensionados según el consumo de tu negocio, con inversores de marcas reconocidas y una instalación segura y ordenada.",
        primary: { label: "Cotiza para tu negocio", href: "/contact" },
        secondary: { label: "Ver proyectos", href: "#proyectos" },
        card: {
            image: "/assets/images/project/restaurante-escandon-inversor.webp",
            value: "Inversor Growatt",
            label: "instalado y puesto en marcha por nuestro equipo",
        },
    },
    {
        image: "/assets/images/hero/instalacion-profesional.webp",
        alt: "Técnicos instalando paneles solares en un techo",
        eyebrow: "Paneles solares · Bombeo · Cloración",
        title: ["Instalación", "profesional"],
        text: "Técnicos certificados en energía fotovoltaica, equipos de bombeo y sistemas de cloración. Te acompañamos desde la evaluación hasta el servicio postventa.",
        primary: { label: "Ver servicios", href: "/servicios" },
        secondary: { label: "Escríbenos por WhatsApp", href: SITE.whatsapp, external: true },
        card: { value: `+${STATS.yearsOfExperience}`, label: "años de experiencia en Yucatán" },
    },
]

const swiperOptions = {
    modules: [Autoplay, EffectFade, Navigation, Pagination],
    effect: "fade",
    fadeEffect: { crossFade: true },
    slidesPerView: 1,
    loop: true,
    speed: 900,
    autoplay: { delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: true },
    navigation: { nextEl: ".hero-solar__next", prevEl: ".hero-solar__prev" },
    pagination: { el: ".hero-solar__pagination", clickable: true },
}

function SlideLink({ link, className }) {
    if (link.external) {
        return <a href={link.href} className={className} target="_blank" rel="noopener noreferrer">{link.label}</a>
    }
    return <Link href={link.href} className={className}>{link.label}</Link>
}

export default function Banner() {
    return (
        <section className="hero-solar">
            <div className="hero-solar__frame">
                <Swiper {...swiperOptions} className="hero-solar__carousel">
                    {SLIDES.map((slide, i) => {
                        // Solo el primer slide lleva el h1 de la página
                        const Title = i === 0 ? "h1" : "h2"
                        return (
                            <SwiperSlide key={slide.image}>
                                <div className="hero-solar__slide">
                                    <img
                                        className="hero-solar__bg"
                                        src={slide.image}
                                        alt={slide.alt}
                                        fetchPriority={i === 0 ? "high" : undefined}
                                        loading={i === 0 ? "eager" : "lazy"}
                                    />
                                    <div className="hero-solar__overlay"></div>
                                    <div className="hero-solar__content">
                                        <div className="hero-solar__top">
                                            <p className="hero-solar__eyebrow hero-solar__anim">{slide.eyebrow}</p>
                                            <Title className="hero-solar__title hero-solar__anim">
                                                {slide.title[0]}<br /><span>{slide.title[1]}</span>
                                            </Title>
                                        </div>
                                        <div className="hero-solar__bottom">
                                            <div className="hero-solar__info hero-solar__anim">
                                                <p className="hero-solar__count">
                                                    {String(i + 1).padStart(2, "0")}<span> / {String(SLIDES.length).padStart(2, "0")}</span>
                                                </p>
                                                <p className="hero-solar__text">{slide.text}</p>
                                                <div className="hero-solar__btns">
                                                    <SlideLink link={slide.primary} className="hero-solar__btn hero-solar__btn--primary" />
                                                    <SlideLink link={slide.secondary} className="hero-solar__btn hero-solar__btn--ghost" />
                                                </div>
                                            </div>
                                            <div className={`hero-solar__card hero-solar__anim${slide.card.image ? " hero-solar__card--photo" : ""}`}>
                                                {slide.card.image && <img src={slide.card.image} alt="" loading="lazy" />}
                                                <div>
                                                    <p className="hero-solar__card-value">{slide.card.value}</p>
                                                    <p className="hero-solar__card-label">{slide.card.label}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div className="hero-solar__controls">
                    <button type="button" className="hero-solar__prev" aria-label="Slide anterior"><i className="fa fa-arrow-left"></i></button>
                    <div className="hero-solar__pagination"></div>
                    <button type="button" className="hero-solar__next" aria-label="Slide siguiente"><i className="fa fa-arrow-right"></i></button>
                </div>
            </div>
        </section>
    )
}

'use client'
import Link from "next/link"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

// Imágenes del carrusel de promociones: agrega o quita entradas al cambiar de campaña.
const SLIDES = [
    { src: "/assets/images/resources/Super_Promo.webp", alt: "Super promo en paneles solares, 6 y 12 MSI con tarjetas participantes" },
    { src: "/assets/images/resources/el-buen-mes.webp", alt: "Promoción de paneles solares" },
    { src: "/assets/images/backgrounds/paneles-solares.webp", alt: "Instalación de paneles solares" },
]

const swiperOptions = {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: { delay: 4500, disableOnInteraction: false },
    pagination: { clickable: true },
}

const slideStyle = {
    position: "relative",
    width: "100%",
    minHeight: "600px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "12px",
    overflow: "hidden",
}

export default function Banner() {
    return (
        <section className="services-carousel">
            <div className="container" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                <Swiper {...swiperOptions} className="services-carousel__swiper">
                    {SLIDES.map((slide) => (
                        <SwiperSlide key={slide.src}>
                            <div
                                className="services-carousel__slide"
                                role="img"
                                aria-label={slide.alt}
                                style={{ ...slideStyle, backgroundImage: `url(${slide.src})` }}
                            >
                                {/* Overlay suave para mejor contraste del botón */}
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: "linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0) 100%)",
                                    }}
                                />
                                <div style={{ position: "absolute", left: "24px", bottom: "24px", zIndex: 2 }}>
                                    <Link
                                        href="/contact"
                                        className="thm-btn"
                                        style={{ display: "inline-block", padding: "12px 20px", borderRadius: "10px", fontWeight: 600 }}
                                    >
                                        ¡Cotizar Ahora!
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

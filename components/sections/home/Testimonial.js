'use client'
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

// TODO: agregar testimonios reales (nombre o empresa del cliente con su autorización).
const TESTIMONIOS = [
    { text: "Gracias a RODHER bajamos nuestra factura eléctrica y ahora generamos nuestra propia energía.", author: "Cliente residencial" },
    { text: "El equipo de bombeo instalado es eficiente y su mantenimiento es inmediato cuando lo necesitamos.", author: "Cliente industrial" },
]

const swiperOptions = {
    modules: [Autoplay, Pagination],
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
        320: { slidesPerView: 1 },
        991: { slidesPerView: 2 },
    },
}

const avatarStyle = {
    height: 88,
    borderRadius: "50%",
    background: "var(--erepair-base)",
    color: "var(--erepair-white)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 32,
}

export default function Testimonial() {
    return (
        <section className="testimonial-one">
            <div className="container">
                <Swiper {...swiperOptions} className="testimonial-one__carousel">
                    {TESTIMONIOS.map((t) => (
                        <SwiperSlide key={t.text}>
                            <div className="item">
                                <div className="testimonial-one__single">
                                    <div className="testimonial-one__img" style={avatarStyle} aria-hidden="true">
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <div className="testimonial-one__content">
                                        <div className="testimonial-one__quote">
                                            <span className="icon-quote"></span>
                                        </div>
                                        <p className="testimonial-one__text">“{t.text}”</p>
                                        <div className="testimonial-one__ratting" aria-label="5 de 5 estrellas">
                                            {[1, 2, 3, 4, 5].map((n) => <span key={n} className="fas fa-star"></span>)}
                                        </div>
                                        <div className="testimonial-one__client-info">
                                            <h3>{t.author}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

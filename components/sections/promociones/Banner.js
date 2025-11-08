'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useState } from 'react'

const IMAGES = [
    "/assets/images/backgrounds/paneles-solares.png",
    "/assets/images/resources/el-buen-mes.png",
    "/assets/images/backgrounds/slider-1-3.jpg",
  ];
  
  const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: { delay: 4500, disableOnInteraction: false },
    pagination: { clickable: true },
    // Si usas flechas externas, define aquí los selectores:
    // navigation: { nextEl: ".h1n", prevEl: ".h1p" },
  };

export default function Banner() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
    {/* Carousel Start (antes de Services One) */}
    <section className="services-carousel">
        <div className="container" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <Swiper {...swiperOptions} className="services-carousel__swiper">
            {IMAGES.map((src, i) => (
              <SwiperSlide key={i}>
                <div
                  className="services-carousel__slide"
                  style={{
                    position: "relative",
                    width: "100%",
                    minHeight: "600px", // ajusta la altura
                    backgroundImage: `url(${src})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                >
                  {/* Overlay suave opcional para mejor contraste */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0) 100%)",
                    }}
                  />

                  {/* CTA alineado a la izquierda */}
                  <div
                    style={{
                      position: "absolute",
                      left: "24px",
                      bottom: "24px",
                      zIndex: 2,
                    }}
                  >
                    <Link
                      href="/contact"
                      className="thm-btn"
                      aria-label="Conoce más"
                      style={{
                        display: "inline-block",
                        padding: "12px 20px",
                        borderRadius: "10px",
                        fontWeight: 600,
                      }}
                    >
                      Cotizar Ahora!
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Carousel End */}
    </>
  )
}

import Link from "next/link"
import { SERVICIOS } from "@/lib/servicios"

const ANIMATIONS = ["fadeInLeft", "fadeInUp", "fadeInRight"]

export default function ServiceCards({ showTitle = false, className = "" }) {
    return (
        <section className={`services-two ${className}`}>
            <div className="services-two__shape-1 img-bounce">
                <img src="/assets/images/shapes/services-two-shape-1.png" alt="" loading="lazy" />
            </div>
            <div className="container">
                {showTitle && (
                    <div className="section-title text-center">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Nuestros Servicios</span>
                        </div>
                        <div className="section-title__title-box sec-title-animation animation-style1">
                            <h2 className="section-title__title title-animation">Soluciones especializadas en energía solar<br /> y bombeo hidráulico</h2>
                        </div>
                    </div>
                )}
                <div className="row">
                    {SERVICIOS.map((s, i) => (
                        <div key={s.slug} className={`col-xl-4 col-lg-6 wow ${ANIMATIONS[i % 3]}`} data-wow-delay={`${100 + i * 200}ms`}>
                            <div className="services-two__single">
                                <div className="services-two__icon">
                                    <span className={s.icon}></span>
                                </div>
                                <p className="services-two__sub-title">{s.subtitle}</p>
                                <h3 className="services-two__title"><Link href={`/servicios/${s.slug}`}>{s.title}</Link></h3>
                                <p className="services-two__text">{s.summary}</p>
                                <Link href={`/servicios/${s.slug}`} className="services-two__learn-more">Ver más<span className="icon-arrow-right"></span></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

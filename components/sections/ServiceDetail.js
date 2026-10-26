import Link from "next/link"
import { SERVICIOS } from "@/lib/servicios"
import { SITE } from "@/lib/site"

export default function ServiceDetail({ servicio }) {
    return (
        <section className="service-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="service-details__left">
                            <div className="service-details__img">
                                <img src={servicio.image} alt={servicio.title} />
                            </div>
                            <h2 className="service-details__title-1">{servicio.title}</h2>
                            {servicio.intro.map((text, i) => (
                                <p key={i} className={`service-details__text-${i + 1}`}>{text}</p>
                            ))}
                            <ul className="service-details__points-list list-unstyled">
                                {servicio.points.map((point) => (
                                    <li key={point.title}>
                                        <div className="icon">
                                            <span className="icon-arrow-right"></span>
                                        </div>
                                        <p><strong>{point.title}:</strong> {point.text}</p>
                                    </li>
                                ))}
                            </ul>
                            <div className="service-details__img-box">
                                <div className="row">
                                    {servicio.highlights.map((h) => (
                                        <div key={h.title} className="col-xl-6">
                                            <div className="service-details__img-box-single">
                                                <div className="service-details__img-box-img">
                                                    <img src={h.image} alt={h.title} loading="lazy" />
                                                </div>
                                                <div className="service-details__img-box-content">
                                                    <div className="service-details__img-box-content-icon-and-title">
                                                        <div className="service-details__img-box-content-icon">
                                                            <span className={h.icon}></span>
                                                        </div>
                                                        <h3 className="service-details__img-box-content-title">{h.title}</h3>
                                                    </div>
                                                    <p className="service-details__img-box-content-text">{h.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="service-details__sidebar">
                            <div className="service-details__services-box">
                                <h3 className="service-details__services-title">Nuestros Servicios</h3>
                                <ul className="service-details__services-list list-unstyled">
                                    {SERVICIOS.map((s) => (
                                        <li key={s.slug} className={s.slug === servicio.slug ? "active" : undefined}>
                                            <Link href={`/servicios/${s.slug}`}>{s.title}<span className="icon-arrow-right"></span></Link>
                                        </li>
                                    ))}
                                    <li>
                                        <Link href={`/productos/${servicio.slug}`}>Ver productos<span className="icon-arrow-right"></span></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="project-details__get-started">
                                <h3 className="project-details__get-started-title">Comienza Tu Proyecto Hoy</h3>
                                <p className="project-details__get-started-text">Da el siguiente paso hacia la eficiencia energética. En <strong>{SITE.name}</strong> te asesoramos en la instalación
                                    de paneles solares, equipos de bombeo y sistemas de cloración diseñados a la medida de tus necesidades.</p>
                                <ul className="project-details__get-started-points list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-call"></span>
                                        </div>
                                        <p><a href={SITE.phone.href}>{SITE.phone.display}</a></p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-envelope"></span>
                                        </div>
                                        <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-location"></span>
                                        </div>
                                        <p>{SITE.location.display}</p>
                                    </li>
                                </ul>
                                <div className="project-details__get-started-btn-box">
                                    <Link href="/contact" className="project-details__get-started-btn thm-btn">Contáctanos</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

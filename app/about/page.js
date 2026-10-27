import Link from "next/link"
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import Cta from "@/components/sections/Cta"
import { SITE, STATS } from "@/lib/site"

export const metadata = {
    title: "Nosotros",
    description: "RODHER Ingeniería, desde 2017: soluciones integrales en energía solar, bombeo y tratamiento de agua en Yucatán y el sureste de México.",
    alternates: { canonical: "/about" },
}

const COUNTERS = [
    { icon: "icon-hands-on-experience", end: STATS.yearsOfExperience, label: "Años de experiencia", animation: "fadeInLeft", extraCls: " counter-one__single-1" },
    { icon: "icon-technician-1", end: STATS.proveedores, label: "Proveedores", animation: "fadeInUp" },
    { icon: "icon-project-complete", end: STATS.proyectos, label: "Proyectos completados", animation: "fadeInUp" },
    { icon: "icon-happy-customer", end: STATS.clientes, label: "Clientes satisfechos", animation: "fadeInRight" },
]

export default function AboutPage() {
    return (
        <Layout breadcrumbTitle="Quiénes Somos">
            {/*About One Start */}
            <section className="about-one about-four">
                <div className="about-one__shape-one float-bob-y">
                    <img src="/assets/images/shapes/about-one-shape-1.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="about-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="about-one__img-box-1">
                                            <div className="about-one__img-1">
                                                <img src="/assets/images/resources/about-1.webp" alt="Técnicos de RODHER Ingeniería instalando paneles solares" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="about-one__cirtified">
                                            <div className="icon">
                                                <span className="icon-certified"></span>
                                            </div>
                                            <h3>Distribuidor<br /> Autorizado</h3>
                                        </div>
                                        <div className="about-one__img-box-2">
                                            <div className="about-one__img-2">
                                                <img src="/assets/images/resources/about-2.webp" alt="Paneles solares instalados en azotea" />
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
                                        <h2 className="section-title__title title-animation">RODHER Ingeniería</h2>
                                    </div>
                                </div>
                                <p className="about-one__text-1">RODHER Ingeniería fue constituida en el año {SITE.foundingYear}. Somos una empresa
                                    comprometida con el desarrollo sostenible y la innovación energética. Nos especializamos en
                                    soluciones integrales de energía solar y en el suministro de equipos para el tratamiento de agua
                                    potable, agua residual y purificación, ofreciendo alternativas limpias, eficientes y accesibles
                                    que impulsan el bienestar de las personas y la protección del medio ambiente.</p>
                                <p className="about-one__text-2">Con un equipo técnico altamente capacitado y una sólida experiencia en el
                                    sector, brindamos asesoría, diseño e instalación de sistemas adaptados a las necesidades de hogares,
                                    empresas e instituciones, contribuyendo a un futuro más verde y responsable.</p>
                                <div className="about-one__btn-box">
                                    <Link href="/contact" className="about-one__btn thm-btn">Contáctanos</Link>
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
                    <img src="/assets/images/shapes/video-one-shape-1.png" alt="" loading="lazy" />
                </div>
                <div className="video-one__bg wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms"
                    style={{ backgroundImage: 'url(/assets/images/backgrounds/porque-elegirnos.webp)' }} >
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
                                <div className="video-one__btn-box">
                                    <Link href="/productos" className="video-one__btn thm-btn">Productos</Link>
                                    <Link href="/contact" className="video-one__btn-two thm-btn">Cotizaciones</Link>
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
                            {COUNTERS.map((c) => (
                                <div key={c.label} className={`col-xl-3 col-lg-6 col-md-6 wow ${c.animation}`} data-wow-delay="100ms">
                                    <div className={`counter-one__single${c.extraCls || ""}`}>
                                        <div className="counter-one__icon">
                                            <span className={c.icon}></span>
                                        </div>
                                        <div className="counter-one__count-box">
                                            <CounterUp end={c.end} />
                                            <span>+</span>
                                        </div>
                                        <p className="counter-one__text">{c.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/*Counter One End*/}

            <Cta />
        </Layout>
    )
}

import Link from "next/link"
import WhatsAppButton from "@/components/elements/WhatsAppButton"

export default function Cta() {
    return (
        <section className="cta-one">
            <div className="container">
                <div className="cta-one__inner wow fadeInUp" data-wow-delay="300ms">
                    <div className="cta-one__img">
                        <img src="/assets/images/resources/el-buen-mes.webp" alt="Promoción de paneles solares" loading="lazy" />
                    </div>
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Ahorra Energía y Dinero con Soluciones Inteligentes</span>
                        </div>
                        <div className="section-title__title-box sec-title-animation animation-style2">
                            <h2 className="section-title__title title-animation">Promociones y <br />Descuentos Especiales</h2>
                        </div>
                    </div>
                    <p className="cta-one__text">Aprovecha nuestras ofertas en <strong>venta e instalación de paneles solares</strong>.<br />
                        Invierte en eficiencia energética y comienza a reducir tus costos desde<br /> el primer mes.<br />
                        Nuestros proyectos están diseñados para brindarte el máximo rendimiento<br /> y una recuperación rápida de inversión.</p>
                    <div className="cta-one__btn-and-call-box">
                        <div className="cta-one__btn-box">
                            <Link href="/promociones" className="cta-one__btn thm-btn">Promociones</Link>
                        </div>
                        <div className="cta-one__call-box">
                            <div className="content">
                                <WhatsAppButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

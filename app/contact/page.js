import Layout from "@/components/layout/Layout"
import Cta from "@/components/sections/Cta"
import { SITE } from "@/lib/site"
import ContactForm from "./ContactForm"

export const metadata = {
    title: "Contacto y Cotizaciones",
    description: "Solicita tu cotización de paneles solares, equipos de bombeo o sistemas de cloración. Atendemos en Mérida, Yucatán y el sureste de México.",
    alternates: { canonical: "/contact" },
}

const CARDS = [
    { icon: "icon-call", label: "Llámanos", content: <a href={SITE.phone.href}>{SITE.phone.display}</a> },
    { icon: "icon-envelope", label: "Escríbenos", content: <a href={`mailto:${SITE.email}`}>{SITE.email}</a> },
    { icon: "icon-location", label: "Ubicación", content: SITE.location.display },
]

export default function ContactPage() {
    return (
        <Layout breadcrumbTitle="Contacto">
            {/*Contact Two Start*/}
            <section className="contact-two">
                <div className="container">
                    <div className="row">
                        {CARDS.map((card) => (
                            <div key={card.label} className="col-xl-4 col-lg-4">
                                <div className="contact-two__single">
                                    <div className="contact-two__icon">
                                        <span className={card.icon}></span>
                                    </div>
                                    <p style={{ textAlign: "center" }}>{card.label}</p>
                                    <h3>{card.content}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/*Contact Two End*/}

            {/*Contact Three Start*/}
            <section className="contact-three">
                <div className="container">
                    <div className="contact-three__inner w-80">
                        <div className="contact-three__right w-80">
                            <h2 className="contact-three__form-title text-center mb-4">¡Cotiza Ahora!</h2>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
            {/*Contact Three End*/}

            <Cta />
        </Layout>
    )
}

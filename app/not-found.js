import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Cta from "@/components/sections/Cta"

export const metadata = {
    title: "Página no encontrada",
    robots: { index: false },
}

export default function NotFound() {
    return (
        <Layout breadcrumbTitle="Página no encontrada">
            <section className="error-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="error-page__inner">
                                <div className="error-page__title-box">
                                    <h2 className="error-page__title">404</h2>
                                </div>
                                <h3 className="error-page__tagline">Lo sentimos, no encontramos esta página</h3>
                                <p className="error-page__text">Es posible que la dirección haya cambiado o que la página ya no exista.</p>
                                <Link href="/" className="thm-btn error-page__btn">Volver al inicio</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Cta />
        </Layout>
    )
}

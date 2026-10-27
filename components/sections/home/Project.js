// Proyectos reales. Para agregar uno, sube las fotos a /assets/images/project/ (WebP, 1200 px de ancho).
const PROYECTOS = [
    { image: "/assets/images/project/restaurante-escandon-azotea.webp", category: "Paneles solares en azotea", title: "Restaurante Escandón", cols: "col-xl-6 col-lg-6 col-md-6", animation: "fadeInLeft" },
    { image: "/assets/images/project/restaurante-escandon-inversor.webp", category: "Inversor Growatt y protecciones", title: "Restaurante Escandón", cols: "col-xl-6 col-lg-6 col-md-6", animation: "fadeInRight" },
]

export default function Project() {
    return (
        <section className="project-one" id="proyectos">
            <div className="container">
                <div className="project-one__top">
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Proyectos</span>
                        </div>
                        <div className="section-title__title-box sec-title-animation animation-style2">
                            <h2 className="section-title__title title-animation">Tu mejor opción<br />RODHER Ingeniería</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {PROYECTOS.map((p) => (
                        <div key={p.image} className={`${p.cols} wow ${p.animation}`} data-wow-delay="100ms">
                            <div className="project-one__single">
                                <div className="project-one__img-box">
                                    <div className="project-one__img">
                                        <img src={p.image} alt={`${p.category} — ${p.title}`} loading="lazy" />
                                    </div>
                                    <div className="project-one__content">
                                        <p className="project-one__sub-title">{p.category}</p>
                                        <h3 className="project-one__title">{p.title}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

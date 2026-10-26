export default function BackToTop({ scroll }) {
    if (!scroll) return null
    return (
        <a href="#top" className="scroll-to-target scroll-to-top" aria-label="Volver arriba">
            <div className="scroll-to-top__wrapper"><span className="scroll-to-top__inner"></span></div>
            <span className="scroll-to-top__text"> Volver arriba</span>
        </a>
    )
}

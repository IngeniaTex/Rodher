import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>

            <ul className="main-menu__list">
                <li>
                    <Link href="/">Inicio </Link>
                </li>
                <li>
                    <Link href="about">Nosotros</Link>
                </li>
                <li className="dropdown">
                    <Link href="#">Servicios</Link>
                    <ul>
                        <li className="dropdown">
                            <Link href="paneles-solares">Paneles Solares</Link>
                        </li>
                        <li className="dropdown">
                            <Link href="servcie-equipos-bombeo">Equipos de Bombeo</Link>
                        </li>
                        <li className="dropdown">
                            <Link href="service-sistemas-cloracion">Sistemas de Cloración</Link>
                        </li>
                    </ul>
                </li>
                <li className="dropdown">
                <Link href="#">Productos</Link>
                    <ul>
                        <li><Link href="productos-paneles-solares">Paneles Solares</Link></li>
                        <li><Link href="productos-equipos-bombeo">Equipos de Bombeo</Link></li>
                        <li><Link href="productos-sistemas-cloracion">Equipos de Bombeo</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="contact">Contacto</Link>
                </li>
            </ul>
        </>
    )
}

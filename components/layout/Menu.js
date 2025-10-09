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
                {/* <li className="dropdown">
                    <Link href="#">Pages</Link>
                    <ul>
                        <li><Link href="team">Team</Link></li>
                        <li><Link href="team-details">Team Details</Link></li>
                        <li className="dropdown">
                            <Link href="#">Projects</Link>
                            <ul>
                                <li><Link href="projects">Projects</Link></li>
                                <li><Link href="project-details">Project Details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="testimonials">Testimonials</Link></li>
                        <li><Link href="pricing">Pricing</Link></li>
                        <li><Link href="faq">Faq</Link></li>
                        <li><Link href="404">404 Error</Link></li>
                    </ul>
                </li> */}
                <li className="dropdown">
                    <Link href="#">Servicios</Link>
                    <ul>
                        <li><Link href="services">Services</Link></li>
                        <li><Link href="electric-panel-repair">Instalación de Paneles Solares</Link></li>
                        <li><Link href="short-circuit-repair">Instalación de equipos de bombeo</Link>
                        </li>
                        <li><Link href="commercial-services">Mantenimiento y Monitoreo</Link>
                        </li>
                    </ul>
                </li>
                <li className="dropdown">
                <Link href="#">Productos</Link>
                    <ul>
                        <li><Link href="#">Residencial</Link></li>
                        <li><Link href="#">Comercial</Link></li>
                        <li><Link href="#">Industrial</Link></li>
                        <li><Link href="shop">Products</Link></li>
                        <li><Link href="shop-details">Products Details</Link></li>
                        <li><Link href="cart">Cart</Link></li>
                        <li><Link href="checkout">Checkout</Link></li>
                        <li><Link href="wishlist">Wishlist</Link></li>
                        <li><Link href="account">My Account</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="contact">Contacto</Link>
                </li>
            </ul>
        </>
    )
}

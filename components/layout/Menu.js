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
                </li>  */}
                <li className="dropdown">
                    <Link href="#">Servicios</Link>
                    <ul>
                        <li className="dropdown">
                            <Link href="#">División Paneles Solares</Link>
                            <ul>
                                <li><Link href="#">Venta e Instalación</Link></li>
                                <li><Link href="#">Mantenimiento y monitoreo</Link></li>
                                <li><Link href="#">Asesoría y servicio post venta</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link href="#">División Equipos de Bombeo</Link>
                            <ul>
                                <li><Link href="#">Venta e Instalación</Link></li>
                                <li><Link href="#">Sistemas de cloro gas hipoclorito</Link></li>
                                <li><Link href="#">Bombas sumergibles</Link></li>
                                <li><Link href="#">Mantenimiento</Link></li>

                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="dropdown">
                <Link href="#">Productos</Link>
                    <ul>
                        <li><Link href="#">Residencial</Link></li>
                        <li><Link href="#">Comercial</Link></li>
                        <li><Link href="#">Industrial</Link></li>
                        {/* <li><Link href="shop">Products</Link></li>
                        <li><Link href="shop-details">Products Details</Link></li>
                        <li><Link href="cart">Cart</Link></li>
                        <li><Link href="checkout">Checkout</Link></li>
                        <li><Link href="wishlist">Wishlist</Link></li>
                        <li><Link href="account">My Account</Link></li> */}
                    </ul>
                </li>
                <li>
                    <Link href="contact">Contacto</Link>
                </li>
            </ul>
        </>
    )
}

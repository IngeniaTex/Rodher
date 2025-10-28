import "@/node_modules/react-modal-video/css/modal-video.css"
import "public/assets/css/style.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import CookieConsent from "@/components/CookieConsent";

import { archivo, titilliumWeb, pacifico } from '@/lib/font'
export const metadata = {
    title: 'Rodher',
    description: 'Paneles Solares y Equipos de Bombeo',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${archivo.variable} ${titilliumWeb.variable} ${pacifico.variable}`}>
            <body>
                {children}
            <   CookieConsent /> {/*Banner de cookies */}
            </body>
        </html>
    )

}

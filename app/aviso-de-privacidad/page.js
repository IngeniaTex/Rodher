import Layout from "@/components/layout/Layout"
import { SITE } from "@/lib/site"

export const metadata = {
    title: "Aviso de Privacidad",
    description: `Aviso de privacidad de ${SITE.name}: qué datos personales recabamos, para qué los usamos y cómo ejercer tus derechos ARCO.`,
    alternates: { canonical: "/aviso-de-privacidad" },
}

// TODO: completar razón social y domicilio, y pedir revisión legal antes de publicar.
const RESPONSABLE = {
    razonSocial: SITE.name,
    domicilio: SITE.location.display,
}

const LAST_UPDATE = "26 de octubre de 2026"

export default function AvisoPrivacidadPage() {
    return (
        <Layout breadcrumbTitle="Aviso de Privacidad" footerVariant="two">
            <section style={{ padding: "100px 0" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <p><strong>Última actualización:</strong> {LAST_UPDATE}</p>

                    <h2 className="h4 mt-4">Responsable de tus datos</h2>
                    <p>
                        {RESPONSABLE.razonSocial}, con domicilio en {RESPONSABLE.domicilio}, es responsable del tratamiento de los
                        datos personales que nos proporcionas a través de este sitio web, conforme a la Ley Federal de Protección de
                        Datos Personales en Posesión de los Particulares.
                    </p>

                    <h2 className="h4 mt-4">Datos que recabamos</h2>
                    <p>Cuando llenas un formulario de contacto o de cotización podemos recabar:</p>
                    <ul>
                        <li>Nombre o nombre de la empresa</li>
                        <li>Correo electrónico y teléfono</li>
                        <li>Ciudad o municipio</li>
                        <li>Tipo de instalación y consumo eléctrico aproximado</li>
                        <li>La información que incluyas en tu mensaje</li>
                    </ul>
                    <p>No solicitamos datos personales sensibles.</p>

                    <h2 className="h4 mt-4">Para qué usamos tus datos</h2>
                    <ul>
                        <li>Responder tus mensajes y solicitudes de información.</li>
                        <li>Elaborar y darte seguimiento a cotizaciones de productos y servicios.</li>
                        <li>Coordinar visitas técnicas, instalaciones y servicio postventa cuando contrates con nosotros.</li>
                    </ul>

                    <h2 className="h4 mt-4">Transferencias</h2>
                    <p>
                        No vendemos ni compartimos tus datos con terceros para fines propios de ellos. Solo los tratan los proveedores
                        que nos prestan servicios necesarios para operar (por ejemplo, alojamiento del sitio y correo electrónico),
                        quienes están obligados a protegerlos.
                    </p>

                    <h2 className="h4 mt-4">Derechos ARCO y revocación del consentimiento</h2>
                    <p>
                        Puedes solicitar el acceso, rectificación, cancelación u oposición al tratamiento de tus datos, así como revocar
                        tu consentimiento, enviando un correo a <a href={`mailto:${SITE.email}`}>{SITE.email}</a> con tu nombre, el
                        derecho que deseas ejercer y un medio para responderte. Te contestaremos en un plazo máximo de 20 días hábiles.
                    </p>

                    <h2 className="h4 mt-4">Cookies y almacenamiento local</h2>
                    <p>
                        Este sitio guarda en tu navegador si aceptaste o rechazaste el aviso de cookies, para no volver a mostrártelo.
                        Actualmente no usamos cookies de analítica ni de publicidad. Puedes borrar esta información desde la
                        configuración de tu navegador.
                    </p>

                    <h2 className="h4 mt-4">Cambios a este aviso</h2>
                    <p>Cualquier cambio a este aviso de privacidad se publicará en esta misma página.</p>
                </div>
            </section>
        </Layout>
    )
}

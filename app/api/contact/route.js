import { EMAIL_RE, isRateLimited, sendLeadEmail } from "@/lib/mailer"

// Nodemailer necesita el runtime de Node.js (no edge)
export const runtime = "nodejs"

const MAX_FIELD = 200
const MAX_MESSAGE = 5000

function json(body, status = 200) {
    return Response.json(body, { status })
}

// Recibe los dos formularios del sitio:
// - /contact: email, number, company, tipo_inmueble, consumo, ubicacion, message
// - /productos/...: email, nombre, producto, message
export async function POST(req) {
    let data
    try {
        data = await req.json()
    } catch {
        return json({ ok: false, error: "Solicitud inválida" }, 400)
    }

    // Campo trampa: los bots lo llenan, las personas no lo ven.
    if (data.website) return json({ ok: true })

    const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "local"
    if (isRateLimited(ip)) {
        return json({ ok: false, error: "Demasiadas solicitudes. Intenta más tarde." }, 429)
    }

    const field = (key, max = MAX_FIELD) => String(data[key] ?? "").trim().slice(0, max)
    const email = field("email")
    const nombre = field("nombre") || field("company")
    const message = field("message", MAX_MESSAGE)
    const producto = field("producto")

    if (!EMAIL_RE.test(email) || !nombre || !message) {
        return json({ ok: false, error: "Faltan campos obligatorios" }, 400)
    }

    const rows = producto
        ? [["Producto", producto], ["Nombre", nombre], ["Correo", email]]
        : [
            ["Correo", email],
            ["Teléfono", field("number")],
            ["Nombre o empresa", nombre],
            ["Tipo de instalación", field("tipo_inmueble")],
            ["Consumo bimestral (kWh)", field("consumo")],
            ["Ubicación", field("ubicacion")],
        ]

    try {
        await sendLeadEmail({
            subject: producto ? `Cotización de producto: ${producto}` : "Nueva solicitud de cotización",
            rows,
            message,
            replyTo: email,
        })
        return json({ ok: true })
    } catch (err) {
        // El detalle queda en los logs de Vercel; al cliente solo un mensaje genérico.
        console.error("CONTACT_API_ERROR:", err)
        return json({ ok: false, error: "No se pudo enviar el mensaje" }, 500)
    }
}

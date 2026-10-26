import nodemailer from "nodemailer"

const REQUIRED_ENV = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "MAIL_TO"]

let transporter

function getTransporter() {
    const missing = REQUIRED_ENV.filter((k) => !process.env[k])
    if (missing.length) {
        throw new Error(`Faltan variables de entorno: ${missing.join(", ")}`)
    }
    transporter ??= nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT, 10),
        secure: process.env.SMTP_SECURE === "true", // true=465, false=587
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })
    return transporter
}

export function escapeHtml(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Límite simple en memoria por IP. En Vercel cada instancia tiene su propio contador,
// así que frena ráfagas desde un mismo origen pero no es un límite global.
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map()

export function isRateLimited(ip) {
    const now = Date.now()
    const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS)
    recent.push(now)
    hits.set(ip, recent)
    return recent.length > MAX_PER_WINDOW
}

// rows: [[etiqueta, valor], ...]; los valores se escapan aquí.
export async function sendLeadEmail({ subject, rows, message, replyTo }) {
    const html = `
      <h2>RODHER — ${escapeHtml(subject)}</h2>
      ${rows.map(([label, value]) => `<p><b>${label}:</b> ${escapeHtml(value) || "-"}</p>`).join("\n")}
      <p><b>Mensaje:</b><br>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
    `

    await getTransporter().sendMail({
        from: `"Sitio Web RODHER" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
        to: process.env.MAIL_TO,
        replyTo,
        subject: `RODHER — ${subject}`,
        html,
    })
}

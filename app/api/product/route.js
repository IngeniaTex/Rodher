// app/api/contact/route.js
import nodemailer from "nodemailer";

// Asegura runtime Node.js (NO edge)
export const runtime = "nodejs";

export async function POST(req) {
  try {
    // Acepta JSON o form-data/x-www-form-urlencoded
    const ct = req.headers.get("content-type") || "";
    let data;
    if (ct.includes("application/json")) {
      data = await req.json();
    } else {
      const form = await req.formData();
      data = Object.fromEntries(form.entries());
    }

    const {
      email,
      nombre = "",
      message = "",
    } = data;

    if (!email || !message || !nombre) {
      return new Response(JSON.stringify({ ok: false, error: "Faltan campos obligatorios" }), { status: 400 });
    }

    // Verifica env vars (muy común que falte alguna en PREVIEW)
    const required = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "MAIL_TO"];
    const missing = required.filter((k) => !process.env[k]);
    if (missing.length) {
      console.error("ENV MISSING:", missing);
      return new Response(JSON.stringify({ ok: false, error: `Faltan variables de entorno: ${missing.join(", ")}` }), { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "465", 10),
      secure: process.env.SMTP_SECURE === "true", // true=465, false=587
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    // Diagnóstico (si falla, verás el motivo exacto en logs de Vercel)
    await transporter.verify();

    const html = `
      <h2>RODHER — Nueva solicitud de contacto / cotización</h2>
      <p><b>Correo:</b> ${email}</p>
      <p><b>Empresa:</b> ${nombre || "-"}</p>
      <p><b>Mensaje:</b><br>${(message || "").replace(/\n/g, "<br/>")}</p>
    `;

    await transporter.sendMail({
      from: `"Sitio Web RODHER" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: "RODHER — Nueva solicitud de cotización",
      html,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("CONTACT_API_ERROR:", err);
    // Expón el mensaje en respuesta mientras depuras (luego puedes ocultarlo)
    return new Response(JSON.stringify({ ok: false, error: String(err.message || err) }), { status: 500 });
  }
}

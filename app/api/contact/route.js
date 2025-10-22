// app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let data;

    if (contentType.includes("application/json")) {
      data = await req.json();
    } else {
      // application/x-www-form-urlencoded o multipart/form-data
      const form = await req.formData();
      data = Object.fromEntries(form.entries());
    }

    const {
      email,
      number,
      company,
      tipo_inmueble,
      consumo,
      ubicacion,
      message,
    } = data;

    if (!email || !message) {
      return new Response(JSON.stringify({ ok:false, error:"Faltan campos obligatorios" }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "465", 10),
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const html = `
      <h2>Nueva solicitud de contacto / cotización</h2>
      <p><b>Correo:</b> ${email}</p>
      <p><b>Teléfono:</b> ${number || "-"}</p>
      <p><b>Empresa:</b> ${company || "-"}</p>
      <p><b>Tipo de inmueble:</b> ${tipo_inmueble || "-"}</p>
      <p><b>Consumo mensual (kWh):</b> ${consumo || "-"}</p>
      <p><b>Ubicación:</b> ${ubicacion || "-"}</p>
      <p><b>Mensaje:</b><br>${(message || "").replace(/\n/g,"<br/>")}</p>
    `;

    await transporter.sendMail({
      from: `"Sitio Web RODHER" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: "RODHER — Nueva solicitud de cotización",
      html,
    });

    return Response.json({ ok:true });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ ok:false, error:"No se pudo enviar el correo" }), { status: 500 });
  }
}

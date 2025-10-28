"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });

  async function handleSubmit(e) {
    e.preventDefault(); // evita navegar a { ok: true }
    setStatus({ type: "", msg: "" });
    setSending(true);

    const form = e.currentTarget;
    // Validación de campos requeridos
    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!email || !nombre || !message) {
      setStatus({
        type: "error",
        msg: "Por favor completa los campos obligatorios marcados con *.",
      });
      setSending(false);
      return;
    }

    const payload = {
      email,
      nombre,
      message,
    };
    
    try {
      const res = await fetch("/api/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (res.ok && json.ok) {
        setStatus({ type: "success", msg: "¡Mensaje enviado exitosamente! Te contactaremos pronto." });
        form.reset(); // limpia el formulario
      } else {
        setStatus({ type: "error", msg: "No se pudo enviar. Intenta nuevamente." });
      }
    } catch (err) {
      setStatus({ type: "error", msg: "Ocurrió un error de red. Intenta más tarde." });
    } finally {
      setSending(false);
    }
  }

  return (
    <form id="contact-form" name="contact_form" 
    className="default-form2"
    onSubmit={handleSubmit}
    noValidate>
        <div className="row">
            <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="input-box">
                    <input type="text" name="nombre" placeholder="Nombre *"
                        required=""/>
                </div>
            </div>

            <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="input-box">
                    <input type="email" name="email" placeholder="Correo Electrónico *"
                        required=""/>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="input-box">
                    <textarea name="message" id="formMessage" placeholder="Comentarios *"
                        required="" aria-required="true"></textarea>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-12">
                <div className="product-form-box-checkbox">
                </div>
            </div>
        </div>
        <div className="contact-three__btn-box">
            <button type="submit" className="thm-btn contact-three__btn" disabled={sending}>
              {sending ? "Enviando..." : "Enviar"}
            </button>
          </div>
        {/* Mensaje de estado */}
        {status.msg ? (
            <p
              className="ajax-response mb-0 mt-2"
              aria-live="polite"
              style={{ color: status.type === "success" ? "#16a34a" : "#dc2626" }}
            >
              {status.msg}
            </p>
          ) : null}
    </form>
  );
}
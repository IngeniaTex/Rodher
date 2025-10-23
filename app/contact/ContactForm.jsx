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
    const email = form.email.value.trim();
    const number = form.number.value.trim();
    const company = form.company.value.trim();
    const message = form.message.value.trim();

    if (!email || !number || !company || !message) {
      setStatus({
        type: "error",
        msg: "Por favor completa los campos obligatorios marcados con *.",
      });
      setSending(false);
      return;
    }

    const payload = {
      email,
      number,
      company,
      tipo_inmueble: form.tipo_inmueble.value,
      consumo: form.consumo.value,
      ubicacion: form.ubicacion.value,
      message,
    };
    
    try {
      const res = await fetch("/api/contact", {
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
    <form
      id="contact-form"
      className="contact-form-validated contact-three__form"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <div className="contact-three__input-box">
            <input type="email" name="email" placeholder="* Correo Electrónico" required />
          </div>
        </div>

        <div className="col-xl-6 col-lg-6">
          <div className="contact-three__input-box">
            <input type="tel" placeholder="* Teléfono" name="number" required />
          </div>
        </div>

        <div className="col-xl-6 col-lg-6">
          <div className="contact-three__input-box">
            <input type="text" placeholder="* Nombre o Empresa" name="company" required />
          </div>
        </div>

        <div className="col-xl-6 col-lg-6">
          <div className="contact-three__input-box">
            <select className="nice-select" name="tipo_inmueble" required>
              <option value="">Tipo de inmueble</option>
              <option value="residencial">Residencial</option>
              <option value="comercial">Comercial</option>
              <option value="industrial">Industrial</option>
            </select>
          </div>
        </div>

        <div className="col-xl-6 col-lg-6">
          <div className="contact-three__input-box">
            <input type="number" placeholder="Consumo mensual (kWh)" name="consumo" />
          </div>
        </div>

        <div className="col-xl-6 col-lg-6">
          <div className="contact-three__input-box">
            <input type="text" placeholder="Ciudad o Municipio" name="ubicacion" />
          </div>
        </div>

        <div className="col-xl-12">
          <div className="contact-three__input-box text-message-box">
            <textarea name="message" placeholder="Describe tu proyecto" required></textarea>
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
        </div>
      </div>
    </form>
  );
}

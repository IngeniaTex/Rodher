"use client"
import Link from "next/link"
import { FormStatus, Honeypot, useLeadForm } from "@/components/forms/useLeadForm"

export default function ContactForm() {
    const { sending, status, submit, fail } = useLeadForm()

    function handleSubmit(e) {
        e.preventDefault()
        const form = e.currentTarget

        const payload = {
            email: form.email.value.trim(),
            number: form.number.value.trim(),
            company: form.company.value.trim(),
            tipo_inmueble: form.tipo_inmueble.value,
            consumo: form.consumo.value,
            ubicacion: form.ubicacion.value.trim(),
            message: form.message.value.trim(),
        }

        if (!payload.email || !payload.number || !payload.company || !payload.message) {
            fail("Por favor completa los campos obligatorios marcados con *.")
            return
        }

        submit(form, payload)
    }

    return (
        <form
            id="contact-form"
            className="contact-form-validated contact-three__form"
            onSubmit={handleSubmit}
            noValidate
            style={{ position: "relative" }}
        >
            <Honeypot />
            <div className="row">
                <div className="col-xl-6 col-lg-6">
                    <div className="contact-three__input-box">
                        <input type="email" name="email" placeholder="* Correo Electrónico" aria-label="Correo electrónico" autoComplete="email" required />
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6">
                    <div className="contact-three__input-box">
                        <input type="tel" name="number" placeholder="* Teléfono" aria-label="Teléfono" autoComplete="tel" required />
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6">
                    <div className="contact-three__input-box">
                        <input type="text" name="company" placeholder="* Nombre o Empresa" aria-label="Nombre o empresa" autoComplete="organization" required />
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6">
                    <div className="contact-three__input-box">
                        <select className="nice-select" name="tipo_inmueble" aria-label="Tipo de instalación">
                            <option value="">Tipo de Instalación</option>
                            <option value="residencial">Residencial</option>
                            <option value="comercial">Comercial</option>
                            <option value="industrial">Industrial</option>
                        </select>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6">
                    <div className="contact-three__input-box">
                        <input type="number" name="consumo" placeholder="Consumo Bimestral (kWh)" aria-label="Consumo bimestral en kWh" min="0" />
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6">
                    <div className="contact-three__input-box">
                        <input type="text" name="ubicacion" placeholder="Ciudad o Municipio" aria-label="Ciudad o municipio" autoComplete="address-level2" />
                    </div>
                </div>

                <div className="col-xl-12">
                    <div className="contact-three__input-box text-message-box">
                        <textarea name="message" placeholder="* Describe tu proyecto" aria-label="Describe tu proyecto" required></textarea>
                    </div>

                    <p style={{ fontSize: 14 }}>
                        Al enviar aceptas nuestro <Link href="/aviso-de-privacidad">Aviso de Privacidad</Link>.
                    </p>

                    <div className="contact-three__btn-box">
                        <button type="submit" className="thm-btn contact-three__btn" disabled={sending}>
                            {sending ? "Enviando..." : "Enviar"}
                        </button>
                    </div>

                    <FormStatus status={status} />
                </div>
            </div>
        </form>
    )
}

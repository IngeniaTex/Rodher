"use client"
import Link from "next/link"
import { FormStatus, Honeypot, useLeadForm } from "@/components/forms/useLeadForm"

export default function ProductForm({ producto }) {
    const { sending, status, submit, fail } = useLeadForm()

    function handleSubmit(e) {
        e.preventDefault()
        const form = e.currentTarget

        const payload = {
            producto,
            nombre: form.nombre.value.trim(),
            email: form.email.value.trim(),
            message: form.message.value.trim(),
        }

        if (!payload.email || !payload.nombre || !payload.message) {
            fail("Por favor completa los campos obligatorios marcados con *.")
            return
        }

        submit(form, payload)
    }

    return (
        <form id="product-form" className="default-form2" onSubmit={handleSubmit} noValidate style={{ position: "relative" }}>
            <Honeypot />
            <div className="row">
                <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="input-box">
                        <input type="text" name="nombre" placeholder="Nombre *" aria-label="Nombre" autoComplete="name" required />
                    </div>
                </div>

                <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="input-box">
                        <input type="email" name="email" placeholder="Correo Electrónico *" aria-label="Correo electrónico" autoComplete="email" required />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="input-box">
                        <textarea name="message" placeholder="Comentarios *" aria-label="Comentarios" required></textarea>
                    </div>
                </div>
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
        </form>
    )
}

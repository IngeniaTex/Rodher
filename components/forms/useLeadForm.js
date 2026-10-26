"use client"
import { useState } from "react"

// Estado y envío compartidos por los formularios que llegan a /api/contact.
export function useLeadForm() {
    const [sending, setSending] = useState(false)
    const [status, setStatus] = useState({ type: "", msg: "" })

    async function submit(form, payload) {
        setStatus({ type: "", msg: "" })
        setSending(true)
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...payload, website: form.website?.value || "" }),
            })
            const json = await res.json().catch(() => ({}))

            if (res.ok && json.ok) {
                setStatus({ type: "success", msg: "¡Mensaje enviado exitosamente! Te contactaremos pronto." })
                form.reset()
            } else if (res.status === 429) {
                setStatus({ type: "error", msg: "Recibimos varios mensajes seguidos. Intenta de nuevo en unos minutos." })
            } else {
                setStatus({ type: "error", msg: "No se pudo enviar. Intenta nuevamente." })
            }
        } catch {
            setStatus({ type: "error", msg: "Ocurrió un error de red. Intenta más tarde." })
        } finally {
            setSending(false)
        }
    }

    const fail = (msg) => setStatus({ type: "error", msg })

    return { sending, status, submit, fail }
}

// Campo trampa para bots: oculto para personas y lectores de pantalla.
export function Honeypot() {
    return (
        <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
            <label>
                No llenar este campo
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </label>
        </div>
    )
}

export function FormStatus({ status }) {
    if (!status.msg) return null
    return (
        <p
            className="ajax-response mb-0 mt-2"
            role={status.type === "error" ? "alert" : "status"}
            style={{ color: status.type === "success" ? "#16a34a" : "#dc2626" }}
        >
            {status.msg}
        </p>
    )
}

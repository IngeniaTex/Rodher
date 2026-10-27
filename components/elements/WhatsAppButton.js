import { SITE } from "@/lib/site"

// variant: "filled" (verde), "dark" (contorno para fondos oscuros) o "icon" (solo el círculo con el ícono)
export default function WhatsAppButton({ variant = "filled", className = "" }) {
    if (variant === "icon") {
        return (
            <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`whatsapp-icon ${className}`.trim()}
                aria-label="Escríbenos por WhatsApp"
                title="Escríbenos por WhatsApp"
            >
                <i className="fab fa-whatsapp"></i>
            </a>
        )
    }

    return (
        <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`whatsapp-button whatsapp-button--${variant} whatsapp-button--compact ${className}`.trim()}
            aria-label="Escríbenos por WhatsApp"
        >
            <i className="fab fa-whatsapp"></i>
            <span>WhatsApp</span>
        </a>
    )
}

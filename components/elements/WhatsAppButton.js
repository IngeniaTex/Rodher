import { SITE } from "@/lib/site"

export default function WhatsAppButton({ variant = "filled" }) {
    return (
        <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`whatsapp-button whatsapp-button--${variant} whatsapp-button--compact`}
            aria-label="Escríbenos por WhatsApp"
        >
            <i className="fab fa-whatsapp"></i>
            <span>WhatsApp</span>
        </a>
    )
}

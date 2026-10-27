import { SOCIAL } from "@/lib/site"

// No renderiza nada mientras SOCIAL esté vacío.
// Una red sin `href` se muestra como <a> sin destino (mismo estilo, no navega).
export default function SocialLinks({ className }) {
    if (!SOCIAL.length) return null
    return (
        <div className={className}>
            {SOCIAL.map((s) => s.href ? (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    <i className={s.icon}></i>
                </a>
            ) : (
                <a key={s.label} aria-label={`${s.label} (próximamente)`} title={s.label}>
                    <i className={s.icon}></i>
                </a>
            ))}
        </div>
    )
}

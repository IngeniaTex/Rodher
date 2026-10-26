import { SOCIAL } from "@/lib/site"

// No renderiza nada mientras SOCIAL esté vacío.
export default function SocialLinks({ className }) {
    if (!SOCIAL.length) return null
    return (
        <div className={className}>
            {SOCIAL.map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    <i className={s.icon}></i>
                </a>
            ))}
        </div>
    )
}

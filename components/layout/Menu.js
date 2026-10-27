import Link from "next/link"
import { NAV } from "@/lib/site"

export default function Menu() {
    return (
        <ul className="main-menu__list">
            {NAV.map((item) => (
                <li key={item.href} className={item.children ? "dropdown" : undefined}>
                    <Link href={item.href}>{item.label}</Link>
                    {item.children && (
                        <ul>
                            {item.children.map((child) => (
                                <li key={child.href}>
                                    <Link href={child.href}>{child.label}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    )
}

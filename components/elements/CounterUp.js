'use client'
import { useEffect, useRef, useState } from 'react'

const DURATION_MS = 1500

// Cuenta de 0 a `end` cuando el número entra en pantalla.
export default function CounterUp({ end }) {
    const ref = useRef(null)
    const [count, setCount] = useState(0)

    useEffect(() => {
        let frame
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return
            observer.disconnect()
            const start = performance.now()
            const tick = (now) => {
                const progress = Math.min((now - start) / DURATION_MS, 1)
                setCount(Math.round(end * progress))
                if (progress < 1) frame = requestAnimationFrame(tick)
            }
            frame = requestAnimationFrame(tick)
        })
        observer.observe(ref.current)
        return () => {
            observer.disconnect()
            cancelAnimationFrame(frame)
        }
    }, [end])

    return <span className="count-text" ref={ref}>{count}</span>
}

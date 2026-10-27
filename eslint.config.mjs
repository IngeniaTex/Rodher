import nextVitals from "eslint-config-next/core-web-vitals"

const eslintConfig = [
    ...nextVitals,
    {
        rules: {
            // El sitio sirve imágenes estáticas optimizadas a mano (WebP) con <img>.
            "@next/next/no-img-element": "off",
        },
    },
    { ignores: [".next/**", "node_modules/**", "public/**"] },
]

export default eslintConfig

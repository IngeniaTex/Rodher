# RODHER Ingeniería — sitio web

Sitio corporativo de RODHER Ingeniería: paneles solares, equipos de bombeo y sistemas de cloración en Mérida, Yucatán.

Next.js 16 (App Router) · React 19 · desplegado en Vercel.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

Requiere Node 20.9 o superior.

## Variables de entorno

Crea `.env.local` para probar el formulario de contacto:

```
SMTP_HOST=
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=
SMTP_PASS=
SMTP_FROM=        # opcional, por defecto SMTP_USER
MAIL_TO=          # buzón que recibe las solicitudes
NEXT_PUBLIC_SITE_URL=https://rodheringenieria.com.mx
```

## Editar contenido

| Qué | Dónde |
| --- | --- |
| Teléfono, WhatsApp, correo, redes sociales, menú | `lib/site.js` |
| Textos de servicios | `lib/servicios.js` |
| Catálogo de productos | `lib/productos.js` |
| Imágenes de promociones | `components/sections/promociones/Banner.js` |
| Aviso de privacidad | `app/aviso-de-privacidad/page.js` |

Más detalles de arquitectura y convenciones en [CLAUDE.md](CLAUDE.md).

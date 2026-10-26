# CLAUDE.md

Sitio web corporativo de **RODHER Ingeniería** (Mérida, Yucatán): paneles solares, equipos de bombeo y sistemas de cloración. Todo el contenido visible está en español.

## Stack

- Next.js 16 (App Router, Turbopack) + React 19, JavaScript (sin TypeScript). Node >= 20.9.
- Estilos: CSS global de una plantilla comprada (Bootstrap + `public/assets/css/style.css`, que importa `module-css/*`). No hay CSS Modules ni Tailwind.
- Swiper 14 (carruseles), WOW.js (animaciones al hacer scroll, se inicializa en `Layout`).
- Correo: Nodemailer vía SMTP en `app/api/contact/route.js`.
- Deploy: Vercel.

## Comandos

```bash
npm run dev     # http://localhost:3000
npm run build   # build de producción: úsalo para verificar cambios (no hay tests)
npm run lint    # ESLint 9 (eslint.config.mjs, reglas de next/core-web-vitals)
```

## Estructura

```
lib/
  site.js        # SITE (nombre, URL, teléfono, WhatsApp, correo, ubicación), SOCIAL, NAV
  servicios.js   # contenido de /servicios/[slug]
  productos.js   # catálogo: categorías y productos de /productos/...
  mailer.js      # envío SMTP, escapeHtml, límite por IP
app/
  layout.js      # metadata global (title template, OG, favicon), JSON-LD LocalBusiness, CookieConsent
  page.js, about/, contact/, promociones/, aviso-de-privacidad/
  servicios/page.js + [slug]/page.js
  productos/page.js + [categoria]/page.js + [categoria]/[producto]/page.js
  api/contact/route.js   # recibe los dos formularios (contacto y cotización de producto)
  sitemap.js, robots.js, not-found.js
components/
  layout/        # Layout (envoltorio de cada página), Header, Footer, Menu, MobileMenu, Breadcrumb
  sections/      # Cta, ServiceCards, ServiceDetail, ProductGrid, home/*, promociones/*
  forms/         # useLeadForm (estado + honeypot + mensajes), ProductForm
  elements/      # WhatsAppButton, SocialLinks, CounterUp, BackToTop, Preloader
next.config.js   # redirects 308 de URLs antiguas
```

## Convenciones

- **Contenido como datos:** para agregar un servicio, producto o enlace del menú edita `lib/*.js`; las páginas, el menú, el footer y el sitemap se generan de ahí. No escribas teléfono, correo o WhatsApp a mano: usa `SITE`.
- Las páginas son Server Components y exportan `metadata` (o `generateMetadata`). Solo los componentes con estado/efectos llevan `'use client'`. En rutas dinámicas `params` es una Promise (`await params`).
- Cada página envuelve su contenido en `<Layout breadcrumbTitle="...">`. El `breadcrumbTitle` se renderiza como el `<h1>` de la página (la home lo pone en el primer slide del banner).
- El footer normal tiene `margin-top: -293px` para montarse sobre el `<Cta />`. Si la página **no termina en `<Cta />`**, usa `footerVariant="two"` o el footer tapará el final del contenido.
- Marcado con las clases BEM de la plantilla (`service-details__...`, `shop-page-one-...`, `thm-btn`). Reutiliza clases existentes; estilos propios (WhatsApp, cookies) al final de `style.css`.
- Imágenes: rutas absolutas `/assets/images/...`. Fotos en WebP (convertir con `sharp`, ya incluido por Next); logos y formas decorativas en PNG. `<img>` normal con `loading="lazy"` debajo del pliegue (la regla `no-img-element` está desactivada a propósito).
- Las rutas nuevas de servicios/productos reemplazan URLs antiguas; si renombras una ruta, agrega el redirect en `next.config.js`.
- Comentarios y textos de UI en español.

## Formularios y correo

`/api/contact` acepta JSON. Campos de contacto: `email, number, company, tipo_inmueble, consumo, ubicacion, message`; de producto: `email, nombre, producto, message`. Incluye campo trampa `website`, límite de 5 envíos por IP cada 10 min (en memoria, por instancia) y escapado de HTML. Al cliente solo se le devuelven errores genéricos; el detalle va a los logs de Vercel (`CONTACT_API_ERROR`).

Variables de entorno: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `MAIL_TO` (obligatorias), `SMTP_SECURE` (`"true"` para 465), `SMTP_FROM` (opcional), `NEXT_PUBLIC_SITE_URL` (dominio canónico para metadata/sitemap; por defecto `https://rodheringenieria.com.mx`). Localmente en `.env.local` (ignorado por git).

## Contenido pendiente (marcado con `TODO`)

Fotos y fichas reales de productos y de bombeo/cloración, testimonios reales, redes sociales (`SOCIAL`), razón social y domicilio del aviso de privacidad.

## Git

Rama principal `main`; trabajo en ramas de feature integradas por PR. No hay CI: corre `npm run lint` y `npm run build` antes de abrir un PR.

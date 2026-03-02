# 📚 PROVA TÈCNICA – SEO, ACCESIBILIDAD Y RESPONSIVE

Repositorio de estudio para la Prova Tècnica 3.  
Incluye teoría y ejemplos prácticos sobre SEO, Accesibilidad (WCAG), Usabilidad, Responsive Design y Sass.

---

# 🔵 SEO (Search Engine Optimization)

## 📌 SEO vs SEM

**SEO (Search Engine Optimization)**  
Posicionamiento orgánico en buscadores. No se paga por clic. Resultados a medio y largo plazo.

**SEM (Search Engine Marketing)**  
Publicidad pagada en buscadores. Resultados inmediatos mientras se paga.

---

## 📌 SERP

**SERP (Search Engine Results Page)**  
Página de resultados de Google.

---

## 📌 Crawling e Indexación

**Crawling (Rastreo)**  
Googlebot recorre internet siguiendo enlaces para descubrir nuevas páginas.

**Indexación**  
Google analiza y guarda la página en su base de datos para poder mostrarla en la SERP.

---

## 📌 robots.txt

Archivo que indica a los bots qué rutas pueden rastrear.

```txt
User-agent: *
Allow: /

Disallow: /admin
Disallow: /privado

Sitemap: https://www.tutienda.com/sitemap.xml
```

No es sistema de seguridad, solo guía para bots.

---

## 📌 sitemap.xml

Archivo que lista las URLs importantes del sitio.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>https://www.tutienda.com/</loc>
    <lastmod>2025-02-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>

</urlset>
```

---

## 📌 SEO On-Page (Buenas prácticas)

- `<html lang="es">`
- `<meta charset="UTF-8">`
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- `<title>` único y descriptivo
- `<meta name="description">` menor de 160 caracteres
- Jerarquía correcta de encabezados (h1 → h2 → h3)
- Imágenes con atributo `alt`
- URLs limpias
- HTML semántico

---

## 📌 Mobile-First Indexing

Google analiza primero la versión móvil de la web para posicionarla.

Si la versión móvil es mala → afecta negativamente al SEO.

---

# 🔵 ACCESIBILIDAD (WCAG)

## 📌 WCAG

**WCAG (Web Content Accessibility Guidelines)**  
Pautas del W3C para hacer webs accesibles.

### Niveles

- A (mínimo)
- AA (estándar recomendado)
- AAA (máximo)

---

## 📌 Principios POUR

- **Perceptible** → Contenido visible y legible (alt, contraste).
- **Operable** → Navegable con teclado.
- **Understandable** → Comprensible.
- **Robust** → Compatible con tecnologías asistidas.

---

## 📌 Buenas prácticas

- Usar `<label for>` en formularios.
- No usar `div onclick`, usar `<button>`.
- Imágenes con `alt`.
- Botones solo icono → `aria-label`.
- Focus visible.
- HTML semántico (`header`, `main`, `nav`, `footer`).

---

## Optimización de Imágenes

- Usar formatos modernos como WebP.
- Reducir peso antes de subirlas (TinyPNG, Squoosh).
- Definir width y height para evitar saltos de diseño (CLS).
- Usar loading="lazy".
- Utilizar object-fit para imágenes responsive.
- Incluir atributo alt por accesibilidad.

# 🔵 USABILIDAD (UX)

## 📌 UI vs UX

**UI (User Interface)** → Parte visual (colores, botones).  
**UX (User Experience)** → Experiencia completa del usuario.

---

## 📌 3 pilares de usabilidad

- **Eficacia** → El usuario logra el objetivo.
- **Eficiencia** → Lo logra con poco esfuerzo.
- **Satisfacción** → Experiencia agradable.

---

# 🔵 10 HEURÍSTICAS DE NIELSEN

1. Visibilidad del estado del sistema.  
2. Relación con el mundo real.  
3. Control y libertad del usuario.  
4. Consistencia y estándares.  
5. Prevención de errores.  
6. Reconocer antes que recordar.  
7. Flexibilidad y eficiencia.  
8. Diseño estético y minimalista.  
9. Ayudar a reconocer y recuperarse de errores.  
10. Ayuda y documentación.

---

# 🔵 RESPONSIVE DESIGN

## 📌 Responsive vs Adaptive

**Responsive** → Diseño flexible con media queries.  
**Adaptive** → Varios diseños fijos según dispositivo.

---

## 📌 Mobile First

1. CSS base → móvil.  
2. `@media (min-width: 768px)` → tablet.  
3. `@media (min-width: 1024px)` → desktop.

Ejemplo patrón tarjetas:

- 100% → móvil  
- 50% → tablet  
- 33.3% → desktop  

---

# 🔵 SASS

**Sass (Syntactically Awesome Style Sheets)**  
Preprocesador CSS que permite:

- Variables  
- Anidamiento  
- Condicionales (`@if`)  
- Bucles (`@for`, `@each`)  

`.scss` → Sintaxis tipo CSS (con llaves).  
`.sass` → Sintaxis indentada (sin llaves).

---

# 🔵 VERIFICACIÓN

- Cross-Browser Testing → Probar en Chrome, Firefox, Safari, Edge.  
- caniuse.com → Ver compatibilidad de propiedades CSS.
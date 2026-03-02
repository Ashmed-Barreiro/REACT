1️⃣ Estructura base HTML optimizada para SEO

Guárdalo como index.html de ejemplo en tu repo:

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Tienda Online de Productos Tecnológicos</title>

  <meta name="description" content="Compra productos tecnológicos al mejor precio. Envíos rápidos y ofertas exclusivas.">

  <meta name="robots" content="index, follow">

  <!-- Open Graph -->
  <meta property="og:title" content="Tienda Online de Productos Tecnológicos">
  <meta property="og:description" content="Compra productos tecnológicos al mejor precio.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://www.tutienda.com">
  <meta property="og:image" content="https://www.tutienda.com/imagen.jpg">

</head>

<body>

  <h1>Tienda Online</h1>

  <main>
    <section>
      <h2>Productos Destacados</h2>
      <p>Descubre nuestras mejores ofertas.</p>
    </section>
  </main>

</body>
</html>

Esto cumple:

lang

charset

viewport

title optimizado

meta description <160

robots

Open Graph

2️⃣ robots.txt (crear en /public o raíz)

Archivo: robots.txt

User-agent: *
Allow: /

Disallow: /admin
Disallow: /privado

Sitemap: https://www.tutienda.com/sitemap.xml

Explicación rápida:

User-agent: bots

Allow: qué pueden rastrear

Disallow: qué no

Sitemap: dónde está el sitemap

3️⃣ sitemap.xml (crear en raíz o public)

Archivo: sitemap.xml

<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>https://www.tutienda.com/</loc>
    <lastmod>2025-02-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>https://www.tutienda.com/productos</loc>
    <lastmod>2025-02-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

</urlset>
4️⃣ SEO On-Page checklist (para copiar en README del repo)
SEO Técnico

lang en <html>

meta charset UTF-8

viewport

title único

meta description optimizada

estructura H1 → H2 correcta

alt en imágenes

SEO Contenido

Palabras clave naturales

Textos descriptivos

URLs limpias

SEO Accesibilidad (relacionado con WCAG)

HTML semántico

Etiquetas correctas

No div onclick

5️⃣ Diferencias SEO vs SEM (para teoría)

SEO:

Orgánico

No pagas por clic

Largo plazo

SEM:

Anuncios pagados

Resultados inmediatos

Mientras pagues aparece

6️⃣ Crawling vs Indexación

Crawling:
Google descubre páginas siguiendo enlaces.

Indexación:
Google analiza y guarda la página en su base de datos.

7️⃣ Mobile First Indexing

Google analiza primero la versión móvil para posicionar.

Si tu web móvil es mala → baja en SEO.
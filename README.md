# Portafolio · Lautaro Atencio

Sitio hecho con React (Create React App) y styled-components, publicado en Netlify.

```bash
npm install
npm start        # desarrollo en http://localhost:3000
npm run build    # build de producción en /build
```

## Cómo cambiar el contenido

Todo el contenido está en `src/content/`. No hace falta tocar componentes.

| Archivo | Qué contiene |
| --- | --- |
| `sitio/portada.json` | Nombre, título, presentación, imagen y CV (uno por idioma) |
| `sitio/sobre-mi.json` | Título y texto de "Sobre mí" |
| `sitio/encabezados.json` | Títulos de las secciones Proyectos y Skills |
| `sitio/contacto.json` | Título y texto de Contacto, email y redes |
| `proyectos/*.json` | Un archivo por proyecto. `destacado: true` lo muestra en el inicio; `orden` define la posición (menor primero) |
| `skills.json` | Lista de tecnologías con su ícono |

Las imágenes van en `public/assets/` y se referencian con la ruta absoluta, por ejemplo `/assets/mi-proyecto.png`.

**Idiomas:** cada archivo traducible tiene la forma `{ "es": {...}, "en": {...} }`. Si un campo queda vacío en inglés, se muestra el español.
Las redes y las tecnologías de cada proyecto se leen solo de `es`.
Los textos fijos de la interfaz (botones, etiquetas del formulario, mensajes) están en `src/i18n.js`.
Para compartir el sitio directamente en inglés: `https://<tu-sitio>/?lang=en`.

Hay dos formas de editarlo:

### 1. Desde el panel web (Decap CMS)

Entrá a `https://<tu-sitio>.netlify.app/admin`, iniciá sesión con GitHub, editá y tocá **Publicar**.
Decap hace un commit en el repo y Netlify vuelve a publicar el sitio solo, en uno o dos minutos.

**Configuración inicial (una sola vez):**

1. En GitHub: *Settings → Developer settings → OAuth Apps → New OAuth App*.
   - Homepage URL: la URL de tu sitio en Netlify.
   - Redirect URLs (antes "Authorization callback URL"): una sola, `https://api.netlify.com/auth/done`, sin wildcard.
   - Copiá el **Client ID** y generá un **Client secret**.
2. En Netlify: *Site configuration → Access & security → OAuth → Install provider → GitHub* y pegá el Client ID y el secret.
3. Listo: `/admin` ya permite iniciar sesión con tu cuenta de GitHub (necesita permisos de escritura en el repo).

La configuración del panel (qué campos se ven) está en `public/admin/config.yml`.

### 2. Editando los JSON a mano

Editás el archivo, hacés commit y push a `main`, y Netlify publica.

Para usar el panel en local sin login: corré `npx decap-server` en una terminal, `npm start` en otra, y entrá a `http://localhost:3000/admin/index.html`. Los cambios se guardan directo en tus archivos.

## Diseño

Los colores, tipografías y espaciados están definidos como variables en `src/index.css` (`:root` para el modo claro y `:root[data-theme="dark"]` para el oscuro).
Por defecto el tema sigue al sistema. El botón sol/luna del header lo cambia y la elección queda guardada en el navegador.
El idioma y el tema se manejan en `src/preferencias.jsx` (hook `usePreferencias()`).
Los componentes reutilizables (botones, secciones, títulos) están en `src/components/ui.jsx`.

## Netlify

- Build command: `npm run build` · Publish directory: `build`
- `public/_redirects` hace que las rutas de React funcionen al recargar y redirige las rutas viejas (`/proyectosfull`, `/contacto`).

// Punto único de acceso al contenido del sitio.
// Se edita desde /admin (Decap CMS) o a mano. Cada archivo traducible tiene la forma
// { "es": {...}, "en": {...} }; si un campo falta en inglés se usa el español.
import portadaData from "./sitio/portada.json";
import sobreMiData from "./sitio/sobre-mi.json";
import contactoData from "./sitio/contacto.json";
import encabezadosData from "./sitio/encabezados.json";
import skillsData from "./skills.json";

export const IDIOMAS = ["es", "en"];
export const IDIOMA_BASE = "es";

// Todos los .json de la carpeta proyectos (uno por proyecto)
const contextoProyectos = require.context("./proyectos", false, /\.json$/);
const proyectosData = contextoProyectos.keys().map((k) => contextoProyectos(k));

// Devuelve el valor de `campo` en `lang`, o el del español si está vacío
const valor = (data, lang, campo) => {
  const v = data?.[lang]?.[campo];
  const vacio = v === undefined || v === null || (typeof v === "string" && !v.trim());
  return vacio ? data?.[IDIOMA_BASE]?.[campo] : v;
};

const limpiarUrl = (url) => (url || "").trim();

const crearContenido = (lang) => {
  const p = (data, campo) => valor(data, lang, campo) ?? "";
  const cvPropio = portadaData[lang]?.cv?.trim();

  const perfil = {
    nombre: p(portadaData, "nombre"),
    titulo: p(portadaData, "titulo"),
    descripcion: p(portadaData, "descripcion"),
    imagen: p(portadaData, "imagen"),
    cv: p(portadaData, "cv"),
    // true cuando no hay CV en el idioma de la página y se ofrece el español
    cvEnOtroIdioma: lang !== IDIOMA_BASE && !cvPropio,
    sobreMi: p(sobreMiData, "texto"),
    email: p(contactoData, "email"),
    redes: (contactoData[IDIOMA_BASE]?.redes || []).map((r) => ({ ...r, url: limpiarUrl(r.url) })),
    secciones: {
      sobreMi: p(sobreMiData, "titulo"),
      proyectos: p(encabezadosData, "proyectos"),
      skills: p(encabezadosData, "skills"),
    },
    contacto: {
      titulo: p(contactoData, "titulo"),
      texto: p(contactoData, "texto"),
    },
  };

  const proyectos = proyectosData
    .map((data) => ({
      id: data[IDIOMA_BASE]?.nombre,
      nombre: p(data, "nombre"),
      descripcion: p(data, "descripcion"),
      imagen: p(data, "imagen"),
      tecnologias: data[IDIOMA_BASE]?.tecnologias || [],
      demo: limpiarUrl(p(data, "demo")),
      repo: limpiarUrl(p(data, "repo")),
      destacado: Boolean(valor(data, lang, "destacado")),
      orden: Number(valor(data, lang, "orden")) || 0,
    }))
    .sort((a, b) => a.orden - b.orden || a.nombre.localeCompare(b.nombre));

  return {
    perfil,
    proyectos,
    proyectosDestacados: proyectos.filter((pr) => pr.destacado),
    skills: skillsData.skills || [],
  };
};

const cache = {};
export const getContenido = (lang) => (cache[lang] ||= crearContenido(lang));

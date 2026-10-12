// Punto único de acceso al contenido del sitio.
// Los textos se editan en los .json de esta carpeta (o desde /admin con Decap CMS).
// Un texto traducible es { "es": "...", "en": "..." }; si falta el inglés se usa el español.
import perfilData from "./perfil.json";
import proyectosData from "./proyectos.json";
import skillsData from "./skills.json";

export const IDIOMAS = ["es", "en"];
export const IDIOMA_BASE = "es";

const tr = (valor, lang) => {
  if (valor && typeof valor === "object") return valor[lang]?.trim() || valor[IDIOMA_BASE] || "";
  return valor || "";
};

const limpiarUrl = (url) => (url || "").trim();

const crearContenido = (lang) => {
  const perfil = {
    nombre: perfilData.nombre,
    titulo: tr(perfilData.titulo, lang),
    descripcion: tr(perfilData.descripcion, lang),
    imagen: perfilData.imagen,
    cv: perfilData.cv,
    sobreMi: tr(perfilData.sobreMi, lang),
    email: perfilData.email,
    redes: (perfilData.redes || []).map((r) => ({ ...r, url: limpiarUrl(r.url) })),
    secciones: {
      sobreMi: tr(perfilData.secciones?.sobreMi, lang),
      proyectos: tr(perfilData.secciones?.proyectos, lang),
      skills: tr(perfilData.secciones?.skills, lang),
    },
    contacto: {
      titulo: tr(perfilData.contacto?.titulo, lang),
      texto: tr(perfilData.contacto?.texto, lang),
    },
  };

  const proyectos = (proyectosData.proyectos || []).map((p) => ({
    id: tr(p.nombre, IDIOMA_BASE),
    nombre: tr(p.nombre, lang),
    descripcion: tr(p.descripcion, lang),
    imagen: p.imagen,
    tecnologias: p.tecnologias || [],
    demo: limpiarUrl(p.demo),
    repo: limpiarUrl(p.repo),
    destacado: Boolean(p.destacado),
  }));

  return {
    perfil,
    proyectos,
    proyectosDestacados: proyectos.filter((p) => p.destacado),
    skills: skillsData.skills || [],
  };
};

const cache = {};
export const getContenido = (lang) => (cache[lang] ||= crearContenido(lang));

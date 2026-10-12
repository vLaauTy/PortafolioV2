import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getContenido, IDIOMA_BASE, IDIOMAS } from "./content";
import { textos } from "./i18n";

// Idioma y tema del sitio. El tema inicial lo aplica el script de public/index.html antes de cargar React,
// para que no haya parpadeo. Acá solo se lee y se actualiza.

const Contexto = createContext(null);

const leer = (clave) => {
  try {
    return localStorage.getItem(clave);
  } catch {
    return null;
  }
};

const guardar = (clave, valor) => {
  try {
    localStorage.setItem(clave, valor);
  } catch {}
};

const idiomaInicial = () => {
  const deUrl = new URLSearchParams(window.location.search).get("lang");
  if (IDIOMAS.includes(deUrl)) return deUrl;
  const guardado = leer("idioma");
  if (IDIOMAS.includes(guardado)) return guardado;
  const navegador = (navigator.language || "").slice(0, 2);
  return navegador === "es" || !navegador ? IDIOMA_BASE : "en";
};

const temaSistema = () => (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

const aplicarTema = (tema) => {
  document.documentElement.dataset.theme = tema;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", tema === "dark" ? "#111113" : "#f7f5f0");
};

export const PreferenciasProvider = ({ children }) => {
  const [lang, setLang] = useState(idiomaInicial);
  const [tema, setTema] = useState(() => document.documentElement.dataset.theme || temaSistema());

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    aplicarTema(tema);
  }, [tema]);

  // Si el usuario nunca eligió un tema, sigue los cambios del sistema
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => !leer("tema") && setTema(temaSistema());
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  const cambiarIdioma = useCallback(() => {
    const nuevo = lang === "es" ? "en" : "es";
    guardar("idioma", nuevo);
    const url = new URL(window.location.href);
    if (url.searchParams.has("lang")) {
      url.searchParams.set("lang", nuevo);
      window.history.replaceState(window.history.state, "", url);
    }
    setLang(nuevo);
  }, [lang]);

  const cambiarTema = useCallback(() => {
    const nuevo = tema === "dark" ? "light" : "dark";
    guardar("tema", nuevo);
    setTema(nuevo);
  }, [tema]);

  const valor = useMemo(
    () => ({ lang, t: textos[lang], ...getContenido(lang), tema, cambiarIdioma, cambiarTema }),
    [lang, tema, cambiarIdioma, cambiarTema]
  );

  return <Contexto.Provider value={valor}>{children}</Contexto.Provider>;
};

// Devuelve { lang, t, perfil, proyectos, proyectosDestacados, skills, tema, cambiarIdioma, cambiarTema }
export const usePreferencias = () => useContext(Contexto);

import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { usePreferencias } from "../preferencias";
import { Button, Container } from "./ui";

const secciones = [
  { clave: "sobreMi", hash: "#sobre-mi" },
  { clave: "proyectos", hash: "#proyectos" },
  { clave: "skills", hash: "#skills" },
  { clave: "contacto", hash: "#contacto" },
];

const MOBILE = "860px";

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  height: var(--header-height);
  background: color-mix(in srgb, var(--bg) 85%, transparent);
  backdrop-filter: saturate(180%) blur(12px);
  -webkit-backdrop-filter: saturate(180%) blur(12px);
  border-bottom: 1px solid ${({ $scrolled }) => ($scrolled ? "var(--border)" : "transparent")};
  transition: border-color 0.2s ease;

  @supports not (background: color-mix(in srgb, red 50%, blue)) {
    background: var(--bg);
  }
`;

const Inner = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Brand = styled(Link)`
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: -0.01em;
  margin-right: auto;

  span {
    color: var(--accent);
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: ${MOBILE}) {
    /* absolute y no fixed: el backdrop-filter del header convierte al header en el contenedor */
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    height: calc(100vh - var(--header-height));
    height: calc(100dvh - var(--header-height));
    overflow-y: auto;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    padding: 16px var(--gutter) 32px;
    background: var(--bg);
    border-top: 1px solid var(--border);
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    transform: translateY(${({ $open }) => ($open ? "0" : "-8px")});
    transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
  }
`;

const NavLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 12px;
  border-radius: 8px;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s ease, background-color 0.2s ease;

  &:hover {
    color: var(--text);
    background: var(--surface-2);
  }

  @media (max-width: ${MOBILE}) {
    min-height: 56px;
    font-size: 1.25rem;
    color: var(--text);
    border-bottom: 1px solid var(--border);
    border-radius: 0;
    padding: 0 4px;
  }
`;

const CvButton = styled(Button)`
  min-height: 40px;
  padding: 0 16px;
  margin-left: 8px;

  @media (max-width: ${MOBILE}) {
    min-height: 52px;
    margin: 24px 0 0;
  }
`;

const MenuToggle = styled.button`
  display: none;
  place-items: center;
  width: 44px;
  height: 44px;
  margin-right: -10px;
  border: 0;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: ${MOBILE}) {
    display: grid;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: ${MOBILE}) {
    gap: 0;
  }
`;

const IconButton = styled.button`
  display: inline-grid;
  place-items: center;
  min-width: 44px;
  height: 44px;
  padding: 0 8px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--muted);
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s ease, background-color 0.2s ease;

  &:hover {
    color: var(--text);
    background: var(--surface-2);
  }
`;

const LangLabel = styled.span`
  font-size: 0.8125rem;
  letter-spacing: 0.04em;
`;

const Header = () => {
  const { t, perfil, lang, tema, cambiarIdioma, cambiarTema } = usePreferencias();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const [nombre, ...apellido] = perfil.nombre.split(" ");

  useEffect(() => setOpen(false), [location]);

  // Al abrir el menú móvil, el foco va al primer link
  useEffect(() => {
    if (open) navRef.current?.querySelector("a")?.focus();
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => window.matchMedia(`(min-width: ${MOBILE})`).matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <Bar $scrolled={scrolled || open}>
      <Inner>
        <Brand to="/" aria-label={`${perfil.nombre}, ${t.inicio}`}>
          {nombre} <span>{apellido.join(" ")}</span>
        </Brand>

        <Nav id="menu-principal" aria-label={t.navPrincipal} $open={open} ref={navRef}>
          {secciones.map((s) => (
            <NavLink key={s.clave} to={{ pathname: "/", hash: s.hash }} onClick={() => setOpen(false)}>
              {t.nav[s.clave]}
            </NavLink>
          ))}
          {perfil.cv && (
            <CvButton as="a" href={perfil.cv} download $variant="secondary">
              <FiDownload aria-hidden="true" /> {t.cv}
            </CvButton>
          )}
        </Nav>

        <Controls>
          <IconButton type="button" onClick={cambiarIdioma} aria-label={t.idioma.cambiar} title={t.idioma.cambiar}>
            <LangLabel lang={lang === "es" ? "en" : "es"}>{t.idioma.etiqueta}</LangLabel>
          </IconButton>
          <IconButton
            type="button"
            onClick={cambiarTema}
            aria-label={tema === "dark" ? t.tema.aClaro : t.tema.aOscuro}
            title={tema === "dark" ? t.tema.aClaro : t.tema.aOscuro}
          >
            {tema === "dark" ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </IconButton>
          <MenuToggle
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls="menu-principal"
            aria-label={open ? t.menuCerrar : t.menuAbrir}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </MenuToggle>
        </Controls>
      </Inner>
    </Bar>
  );
};

export default Header;

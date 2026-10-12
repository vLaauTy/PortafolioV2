import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Lleva al ancla (#proyectos, #contacto...) al navegar, o al inicio de la página si no hay ancla.
const ScrollManager = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = decodeURIComponent(hash.slice(1));
    // Espera un frame para que la página destino esté renderizada
    const raf = requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
    return () => cancelAnimationFrame(raf);
  }, [pathname, hash, key]);

  return null;
};

export default ScrollManager;

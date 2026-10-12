import React, { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import FeaturedProjects from "../components/FeaturedProjects";
import Skills from "../components/Skills";
import Contact from "../components/Contact/Contact";
import { usePreferencias } from "../preferencias";

const Home = () => {
  const { t, perfil } = usePreferencias();

  useEffect(() => {
    document.title = `${perfil.nombre} | ${t.tituloInicio}`;
  }, [perfil.nombre, t]);

  return (
    <main id="contenido">
      <Hero />
      <About />
      <FeaturedProjects />
      <Skills />
      <Contact />
    </main>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { usePreferencias } from "../preferencias";
import { Button, Container, Eyebrow, Section, SectionHeader, SectionTitle } from "./ui";
import ProjectCard, { ProjectGrid } from "./ProjectCard";
import Reveal from "./Reveal";

const FeaturedProjects = () => {
  const { t, perfil, proyectos, proyectosDestacados } = usePreferencias();
  return (
    <Section id="proyectos" aria-labelledby="proyectos-title">
      <Container>
        <SectionHeader>
          <div>
            <Eyebrow>{t.nav.proyectos}</Eyebrow>
            <SectionTitle id="proyectos-title">{perfil.secciones.proyectos}</SectionTitle>
          </div>
          {proyectos.length > proyectosDestacados.length && (
            <Button as={Link} to="/proyectos" $variant="ghost">
              {t.verTodos} ({proyectos.length}) <FiArrowRight aria-hidden="true" />
            </Button>
          )}
        </SectionHeader>
        <ProjectGrid $estirar={proyectosDestacados.length < 3}>
          {proyectosDestacados.map((p, i) => (
            <Reveal as="li" key={p.id} delay={i * 0.05}>
              <ProjectCard proyecto={p} />
            </Reveal>
          ))}
        </ProjectGrid>
      </Container>
    </Section>
  );
};

export default FeaturedProjects;

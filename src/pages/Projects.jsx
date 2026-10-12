import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
import { usePreferencias } from "../preferencias";
import { Button, Container, Eyebrow, SectionTitle } from "../components/ui";
import ProjectCard, { ProjectGrid } from "../components/ProjectCard";
import Reveal from "../components/Reveal";

const Wrapper = styled.main`
  padding: clamp(32px, 6vw, 64px) 0 clamp(64px, 10vw, 112px);
`;

const Header = styled.header`
  margin: 16px 0 28px;
`;

const Filters = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  overflow-x: auto;
  padding-bottom: 4px;
  scrollbar-width: thin;

  @media (min-width: 861px) {
    flex-wrap: wrap;
    overflow: visible;
  }
`;

const FilterButton = styled.button`
  flex: none;
  min-height: 40px;
  padding: 0 16px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--muted);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: var(--text);
    border-color: var(--muted);
  }

  &[aria-pressed="true"] {
    background: var(--text);
    border-color: var(--text);
    color: var(--bg);
  }
`;

const Count = styled.p`
  font-size: 0.875rem;
  color: var(--muted);
  margin-bottom: 24px;
`;

const Projects = () => {
  const { t, perfil, proyectos } = usePreferencias();
  const [filtro, setFiltro] = useState(null); // null = todas

  useEffect(() => {
    document.title = `${t.tituloProyectos} | ${perfil.nombre}`;
  }, [t, perfil.nombre]);

  const tecnologias = useMemo(() => {
    const conteo = {};
    proyectos.forEach((p) => p.tecnologias.forEach((tec) => (conteo[tec] = (conteo[tec] || 0) + 1)));
    // Las más usadas primero
    return Object.keys(conteo).sort((a, b) => conteo[b] - conteo[a] || a.localeCompare(b));
  }, [proyectos]);

  const visibles = filtro ? proyectos.filter((p) => p.tecnologias.includes(filtro)) : proyectos;

  return (
    <Wrapper id="contenido">
      <Container>
        <Button as={Link} to="/" $variant="ghost">
          <FiArrowLeft aria-hidden="true" /> {t.volverInicio}
        </Button>
        <Header>
          <Eyebrow>{t.nav.proyectos}</Eyebrow>
          <SectionTitle as="h1">{t.todosLosProyectos}</SectionTitle>
        </Header>

        <Filters role="group" aria-label={t.filtrarPorTecnologia}>
          {[null, ...tecnologias].map((tec) => (
            <FilterButton
              key={tec || "todas"}
              type="button"
              aria-pressed={filtro === tec}
              onClick={() => setFiltro(tec)}
            >
              {tec || t.todas}
            </FilterButton>
          ))}
        </Filters>
        <Count aria-live="polite">
          {visibles.length} {visibles.length === 1 ? t.proyecto : t.proyectosPlural}
        </Count>

        <ProjectGrid>
          {visibles.map((p, i) => (
            <Reveal as="li" key={p.id} delay={Math.min(i, 3) * 0.05}>
              <ProjectCard proyecto={p} />
            </Reveal>
          ))}
        </ProjectGrid>
      </Container>
    </Wrapper>
  );
};

export default Projects;

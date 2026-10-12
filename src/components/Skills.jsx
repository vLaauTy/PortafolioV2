import React from "react";
import styled from "styled-components";
import { usePreferencias } from "../preferencias";
import { Container, Eyebrow, Section, SectionHeader, SectionTitle } from "./ui";
import Reveal from "./Reveal";

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 200px), 1fr));
  gap: 12px;
  list-style: none;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  font-weight: 500;
  line-height: 1.3;

  img {
    flex: none;
    width: 36px;
    height: 36px;
    padding: 2px;
    border-radius: 8px;
    background: var(--icon-bg);
    object-fit: contain;
  }
`;

const Skills = () => {
  const { t, perfil, skills } = usePreferencias();
  return (
    <Section id="skills" aria-labelledby="skills-title">
      <Container>
        <SectionHeader>
          <div>
            <Eyebrow>{t.nav.skills}</Eyebrow>
            <SectionTitle id="skills-title">{perfil.secciones.skills}</SectionTitle>
          </div>
        </SectionHeader>
        <Reveal>
          <Grid>
            {skills.map((s) => (
              <Item key={s.nombre}>
                {s.icono && <img src={s.icono} alt="" loading="lazy" width="32" height="32" />}
                {s.nombre}
              </Item>
            ))}
          </Grid>
        </Reveal>
      </Container>
    </Section>
  );
};

export default Skills;

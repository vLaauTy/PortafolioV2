import React from "react";
import styled from "styled-components";
import { usePreferencias } from "../preferencias";
import { Container, Eyebrow, Section, SectionTitle } from "./ui";
import Reveal from "./Reveal";

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  gap: 24px clamp(32px, 6vw, 72px);

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const Text = styled.div`
  font-size: clamp(1.125rem, 2.2vw, 1.375rem);
  line-height: 1.65;
  max-width: 62ch;

  p + p {
    margin-top: 1em;
  }
`;

const About = () => {
  const { t, perfil } = usePreferencias();
  return (
    <Section id="sobre-mi" aria-labelledby="sobre-mi-title">
      <Grid>
        <Reveal>
          <Eyebrow>{t.nav.sobreMi}</Eyebrow>
          <SectionTitle id="sobre-mi-title">{perfil.secciones.sobreMi}</SectionTitle>
        </Reveal>
        <Reveal delay={0.05}>
          <Text>
            {perfil.sobreMi.split(/\n\s*\n/).map((parrafo) => (
              <p key={parrafo}>{parrafo}</p>
            ))}
          </Text>
        </Reveal>
      </Grid>
    </Section>
  );
};

export default About;

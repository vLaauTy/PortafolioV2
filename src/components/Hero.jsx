import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { usePreferencias } from "../preferencias";
import { Button, Container, Eyebrow } from "./ui";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";

const Wrapper = styled.section`
  padding: clamp(40px, 8vw, 96px) 0 clamp(64px, 10vw, 112px);
`;

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(32px, 6vw, 72px);

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h1`
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(2.75rem, 8vw, 4.75rem);
  line-height: 1.02;
  letter-spacing: -0.025em;
  margin-bottom: 24px;
`;

const Description = styled.p`
  font-size: clamp(1.0625rem, 2vw, 1.1875rem);
  color: var(--muted);
  max-width: 56ch;
  margin-bottom: 32px;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 32px;

  @media (max-width: 480px) {
    ${Button} {
      flex: 1 1 100%;
    }
  }
`;

const FigureWrap = styled(Reveal)`
  justify-self: center;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 860px) {
    order: -1;
    justify-content: flex-start;
  }
`;

const Figure = styled.div`
  width: 100%;
  max-width: 440px;
  aspect-ratio: 1;
  border-radius: 32px;
  background: var(--hero-panel);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 860px) {
    max-width: 200px;
    border-radius: 24px;
  }

  @media (max-width: 480px) {
    max-width: 144px;
    border-radius: 20px;
  }
`;

const Hero = () => {
  const { t, perfil } = usePreferencias();
  return (
    <Wrapper aria-labelledby="hero-title">
      <Grid>
        <Reveal>
          <Eyebrow>{perfil.titulo}</Eyebrow>
          <Title id="hero-title">{perfil.nombre}</Title>
          <Description>{perfil.descripcion}</Description>
          <Actions>
            <Button as={Link} to={{ pathname: "/", hash: "#proyectos" }}>
              {t.verProyectos} <FiArrowDown aria-hidden="true" />
            </Button>
            {perfil.cv && (
              <Button as="a" href={perfil.cv} download $variant="secondary">
                <FiDownload aria-hidden="true" />{" "}
                {perfil.cvEnOtroIdioma ? t.descargarCvOtroIdioma : t.descargarCv}
              </Button>
            )}
          </Actions>
          <SocialLinks />
        </Reveal>
        {perfil.imagen && (
          <FigureWrap delay={0.1}>
            <Figure>
              <img src={perfil.imagen} alt="" width="440" height="440" />
            </Figure>
          </FigureWrap>
        )}
      </Grid>
    </Wrapper>
  );
};

export default Hero;

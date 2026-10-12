import React from "react";
import styled from "styled-components";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { usePreferencias } from "../preferencias";
import { Tag } from "./ui";

const Card = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: box-shadow 0.25s ease, transform 0.25s ease;

  &:hover {
    box-shadow: var(--shadow-hover);
    transform: translateY(-2px);
  }
`;

const Media = styled.div`
  aspect-ratio: 16 / 9;
  background: var(--surface-2);
  border-bottom: 1px solid var(--border);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition: transform 0.4s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.03);
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
  padding: clamp(20px, 3vw, 28px);
`;

const Title = styled.h3`
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.2;
`;

const Description = styled.p`
  color: var(--muted);
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 20px;
  margin-top: auto;
  padding-top: 6px;
`;

const ExternalLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 44px;
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--accent);
  text-decoration: none;

  &:hover {
    color: var(--accent-hover);
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

const ProjectCard = ({ proyecto }) => {
  const { t } = usePreferencias();
  const { nombre, imagen, descripcion, tecnologias, demo, repo } = proyecto;
  const textoOculto = ` ${t.de} ${nombre} (${t.abreNuevaPestana})`;
  return (
    <Card>
      <Media>
        {imagen && (
          <img src={imagen} alt={`${t.capturaDe} ${nombre}`} loading="lazy" width="640" height="360" />
        )}
      </Media>
      <Body>
        <Title>{nombre}</Title>
        <Description>{descripcion}</Description>
        {tecnologias.length > 0 && (
          <Tags aria-label={t.tecnologias}>
            {tecnologias.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </Tags>
        )}
        {(demo || repo) && (
          <Links>
            {demo && (
              <ExternalLink href={demo} target="_blank" rel="noreferrer">
                {t.verDemo} <FiArrowUpRight aria-hidden="true" />
                <span className="visually-hidden">{textoOculto}</span>
              </ExternalLink>
            )}
            {repo && (
              <ExternalLink href={repo} target="_blank" rel="noreferrer">
                <FiGithub aria-hidden="true" /> {t.codigo}
                <span className="visually-hidden">{textoOculto}</span>
              </ExternalLink>
            )}
          </Links>
        )}
      </Body>
    </Card>
  );
};

// $estirar: las tarjetas ocupan todo el ancho disponible (útil cuando son pocas, como en el inicio)
export const ProjectGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(
    ${({ $estirar }) => ($estirar ? "auto-fit" : "auto-fill")},
    minmax(min(100%, 320px), 1fr)
  );
  gap: clamp(16px, 3vw, 28px);
  list-style: none;
`;

export default ProjectCard;

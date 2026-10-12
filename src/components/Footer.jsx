import React from "react";
import styled from "styled-components";
import { usePreferencias } from "../preferencias";
import { Container } from "./ui";
import SocialLinks from "./SocialLinks";

const Wrapper = styled.footer`
  border-top: 1px solid var(--border);
  padding: 32px 0;
`;

const Inner = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const Text = styled.p`
  font-size: 0.9375rem;
  color: var(--muted);

  strong {
    color: var(--text);
    font-weight: 600;
  }
`;

const Footer = () => {
  const { perfil } = usePreferencias();
  return (
    <Wrapper>
      <Inner>
        <Text>
          <strong>{perfil.nombre}</strong> · {perfil.titulo} · © {new Date().getFullYear()}
        </Text>
        <SocialLinks />
      </Inner>
    </Wrapper>
  );
};

export default Footer;

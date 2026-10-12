import React from "react";
import styled from "styled-components";
import { FaEnvelope, FaGithub, FaGlobe, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { usePreferencias } from "../preferencias";

const redes = {
  github: { label: "GitHub", Icon: FaGithub },
  linkedin: { label: "LinkedIn", Icon: FaLinkedinIn },
  instagram: { label: "Instagram", Icon: FaInstagram },
  twitter: { label: "X / Twitter", Icon: FaTwitter },
  web: { Icon: FaGlobe },
};

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
`;

const IconLink = styled.a`
  display: inline-grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid var(--border);
  color: var(--muted);
  font-size: 1.125rem;
  transition: color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    color: var(--accent);
    border-color: var(--accent);
    background: var(--accent-soft);
  }
`;

const SocialLinks = ({ conEmail = true, className }) => {
  const { t, perfil } = usePreferencias();
  const items = perfil.redes
    .filter((r) => r.url)
    .map((r) => {
      const red = redes[r.red] || redes.web;
      return { label: red.label || t.redes.web, Icon: red.Icon, href: r.url };
    });

  if (conEmail && perfil.email) {
    items.push({ label: t.redes.email, Icon: FaEnvelope, href: `mailto:${perfil.email}` });
  }

  return (
    <List className={className}>
      {items.map(({ label, Icon, href }) => (
        <li key={href}>
          <IconLink
            href={href}
            aria-label={label}
            title={label}
            {...(href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noreferrer" })}
          >
            <Icon aria-hidden="true" />
          </IconLink>
        </li>
      ))}
    </List>
  );
};

export default SocialLinks;

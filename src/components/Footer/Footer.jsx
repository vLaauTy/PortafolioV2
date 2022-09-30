import React from "react";
import {
  FooterContainer,
  FooterEnd,
  FooterIcons,
  FooterItem,
  FooterNav,
  FooterNavItem,
  FooterWrapper,
  Icon,
  IconText,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterIcons>
          <a
            href="mailto:lautiatencio@gmail.com"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <FooterItem>
              <Icon src="./gmail.png"></Icon>
              <IconText>Gmail</IconText>
            </FooterItem>
          </a>
          <a
            href="https://www.linkedin.com/in/lautaro-atencio-40b0511a0/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <FooterItem>
              <Icon src="./linkedin.png"></Icon>
              <IconText>linkedin</IconText>
            </FooterItem>
          </a>
          <a
            href="https://github.com/vLaauTy"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <FooterItem>
              <Icon src="./git.png"></Icon>
              <IconText>github</IconText>
            </FooterItem>
          </a>
        </FooterIcons>
        <FooterNav>
          <FooterNavItem to="/contacto">Contacto</FooterNavItem>
          <FooterNavItem to="/proyectosfull">Proyectos</FooterNavItem>
        </FooterNav>
        <FooterEnd>Front End Developer</FooterEnd>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;

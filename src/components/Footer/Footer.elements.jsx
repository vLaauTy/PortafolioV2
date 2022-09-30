import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 280px;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`;

export const FooterIcons = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap:60px;
`;

export const FooterItem = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
 
 
`;
export const Icon = styled.img`
  width: 35px;
  height: 35px;
  margin:auto;

  
`;

export const IconText=styled.p`
margin-top:7px;
color:var(--PColor);
    font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 11px;
letter-spacing: 0.12em;
text-transform: uppercase;
text-align:left;
`;

export const FooterNav=styled.div`
    height: auto;
  width: auto;
  display:flex;
  flex-direction:row;
  margin-top:50px;
`;

export const FooterNavItem=styled(Link)`
    color:var(--PColor);
    font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
text-decoration:none;
margin:0 30px;
`;

export const FooterEnd=styled.h3`
color:var(--PColor);
    font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 26px;
text-align: center;
letter-spacing: 0.04em;
margin-top:50px;
`;
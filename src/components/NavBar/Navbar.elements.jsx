import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: var(--BlueColor);
  height: 100px;
font-size:1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }

  @media screen and (min-width: 1680px) {
    left: none;
  }
`;


export const NavbarContainer = styled.div`
  display:flex;
    justify-content:space-between;
    height:100%;

    z-index:1;
    width:100%;
    max-width:1440px;
    padding: 40px 0;

`;

export const NavBarHome=styled(LinkR)`
    color:var(--PColor);
    font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
cursor:pointer;
text-decoration:none;

&:hover {
    text-decoration:none;
        color:#45F1EF;
        transition:all 0.3s ease-out;
    
  }

`;

export const NavMenu = styled.ul`
  display:flex;
    align-items:center;
    list-style:none;
    justify-content:flex-end;
    text-align:center;


  width: 50%;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 100%;

`;
export const NavLinks = styled(LinkR)`
  display: flex;
  align-items: center;
  padding: 0;
  width:6rem;
  height: 100%;
  cursor: pointer;
  margin: 0 1.3rem;
text-decoration:none;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
  transition: all 100ms ease-out;
  color: var(--PColor);

  &:hover {
    text-decoration:none;
        color:#45F1EF;
        transition:all 0.3s ease-out;
    
  }

  @media screen and (max-width: 1000px) {
    margin: 0 2.5rem;
  }

  @media screen and (max-width: 860px) {
    margin: 0 1.5rem;
  }
`;

export const NavBtnLink = styled(LinkR) `
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;
    padding: 8px 16px;
    height:100%;
    width: 40%;
    border:none;
    outline:none;
`;


export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 0;
    right: 5%;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
    color: var(--PColor);
  }

 
`;
import styled from "styled-components";
import { Button } from "../../GlobalStyles";

export const ProyectosContainer = styled.section`
  height: auto;
  width: 100%;
  background: var(--BlueColor);
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ProyectosWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ProyectosTittle = styled.h3`
  color: var(--PColor);
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 26px;
  letter-spacing: 0.04em;
  text-align: left;
`;

export const ArchivosContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;

  @media screen and (max-width: 980px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Card = styled.div`
  width: auto;
  max-width: 48%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #222525;
  padding-bottom: 3rem;
  margin: 1.4rem 0;
  @media screen and (max-width: 980px) {
    max-height: 48%;
    max-width: 80%;
  }
`;

export const CardImage = styled.img`
  height: 60%;
  width: 100%;
`;

export const CardDescriptionContainer = styled.div`
  height: auto;
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CardTittle = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: var(--CardTittle);
`;

export const CardTecnologias = styled.div`
  height: auto;
  margin-top: 11px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 15px;
  flex-wrap: wrap;
`;

export const Tecnologias = styled.button`
  border-radius: 4px;
  background: var(--H1Color);
  color: #1f2626;
  white-space: nowrap;
  padding: 8px 13px;
  
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  outline: none;
  border: none;

  @media screen and (max-width: 600px) {
    font-size: 12px;
    padding: 4px 7px;
    font-size: 9px;
  }
`;

export const CardDescription = styled.p`
  color: var(--PColor);
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.04em;
  margin-top: 16px;

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;



export const ButtonMuestra = styled.a`
  border-radius: 6px;
  text-decoration: none;
  background: var(--H1Color);
  color: #252728;
  white-space: nowrap;
  padding: 12px 30px 13px;
  gap: 10px;
  width: 30%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  outline: none;
  border: none;
  transition: all 0.3s ease-out;
  cursor: pointer;

  margin: 1rem;
  text-align: center;

  &:hover {
    color: #07356b;
    box-shadow: 0 4px 16px rgba(49, 138, 172, 1);
    transition: all 0.2s ease;
  }

  @media screen and (max-width: 500px) {
    font-size: 10px;
    width: 30%;
    margin: 0.7rem;
    font-size: 12px;
    padding: 0.3rem;
  }
  
`;

export const ButtonMuestraContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

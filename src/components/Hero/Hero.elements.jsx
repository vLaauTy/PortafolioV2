import styled from "styled-components";
import { Container } from "../../GlobalStyles";

export const HeroContainer = styled.section`
  background: var(--BlueColor);

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  height: auto;
  width: 100%;
  z-index: 1;
`;

export const HeroContent = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 2.7rem;

  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

export const HeroTextContent = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const SpanTittle = styled.h3`
  color: var(--SubTittleColor);
  font-family: "Tinos";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: left;
`;

export const HeroH1 = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 72px;
  line-height: 88px;
  text-align: left;
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  width: 100%;

  @media screen and (max-width: 900px) {
    font-size: 60px;
    text-align: center;
  }

  @media screen and (max-width: 400px) {
    font-size: 40px;
    line-height: 56px;
    text-align: center;
  }
`;

export const Description = styled.p`
  font-family: "Montserrat";
  width: 90%;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--PColor);
  letter-spacing: 0.04em;
  text-align: left;

  @media screen and (max-width: 900px) {
    text-align: center;
  }
`;

export const HeroImage = styled.img`
  width: 480px;
  height: 500px;
  display: flex;
  justify-content: flex-end;
  margin-right: 0;

  @media screen and (max-width: 600px) {
    width: 380px;
  height: 400px;
  }

  @media screen and (max-width: 470px) {
    width: 280px;
  height: 300px;
  }
`;

export const ButtonCV = styled.a`
  border-radius: 4px;
  background: var(--H1Color);
text-decoration:none;
  white-space: nowrap;
  padding: 12px 20px 13px;
  gap: 10px;
  text-decoration: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-out;
  color: #252728;
  &:hover {
    color: #07356b;
    box-shadow: 0 4px 16px rgba(49, 138, 172, 1);
    transition: all 0.2s ease;
  }
`;

import styled from "styled-components";

export const AboutMe=styled.section`
    height:auto;
    width:100%;
    background: var(--BlueColor);
padding:8rem 0;
display: flex;
justify-content: flex-start;
align-items: center;

`;

export const AboutMeContent=styled.div`
    width:80%;
    height:100%;
    padding:2rem 0;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    gap:10px;
`;

export const AboutMeTittle=styled.h3`
color:var(--PColor);
    font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 26px;
letter-spacing: 0.04em;
text-align:left;
`;

export const LineaDescription=styled.div`
margin-top:20px;
    border-radius:2px;
    border-left-color: #00F5A0;
    border-left-style: solid;
    border-left-width: 2px; /* Cambiando este valor, puedes cambiar el ancho del borde */
    padding-left: 12px; /* Con este padding, puedes separar el texto del borde */ 

`;
export const AboutMeDescription=styled.p`
    color:var(--PColor);
    font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 26px;
letter-spacing: 0.04em;
`;
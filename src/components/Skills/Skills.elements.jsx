import styled from "styled-components";

export const SkillsContainer=styled.section`
    height: auto;
  width: 100%;
  background: var(--BlueColor);
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SkillsWrapper=styled.div`
    width: 100%;
  height: 100%;
  padding: 1rem ;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SkillsTittle=styled.h3`
    color: var(--PColor);
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 26px;
  letter-spacing: 0.04em;
  text-align: left;
`;

export const SkillsGrid=styled.div`
margin-top:10px;
width:100%;
display:flex;
justify-content:center;
align-items:center;
column-gap:80px;
row-gap:60px;
flex-wrap:wrap;
`;

export const SkillItem=styled.div`
margin-top:60px;
    width:auto;
    height:auto;
    display:flex;
    flex-direction:column;
`;

export const SkillImg=styled.img`
    width:120px;
    height:120px;
    margin:auto;

    @media screen and (max-width:660px) {
        width:80px;
    height:80px;
    }
`;

export const SkillName=styled.h4`
margin-top:18px;
color:var(--PColor);
    font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
letter-spacing: 0.13538em;
text-transform: uppercase;
text-align:center;

@media screen and (max-width:660px) {
        font-size:12px;
    }
`;
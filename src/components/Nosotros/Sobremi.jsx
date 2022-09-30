import React from "react";
import { AboutMe, AboutMeContent, AboutMeDescription, AboutMeTittle, LineaDescription } from "./Sobremi.elements";

const Sobremi = () => {
  return (
    <AboutMe id='about'>
      <AboutMeContent>
        <AboutMeTittle>Sobre mi</AboutMeTittle>
        <LineaDescription>
        <AboutMeDescription>Empece en el mundo de la progamacion estudiando MySQL en la universidad, despues segui investigando por mi propia cuenta sobre el desarrollo front end de sitios web, actualmente me enfoco mas en desarrollos de eccomerce, tanto sea como su diseño de interfaz como la realizacion de su respectivo CRUD</AboutMeDescription>
        </LineaDescription>
      </AboutMeContent>
    </AboutMe>
  );
};

export default Sobremi;

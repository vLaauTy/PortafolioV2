import React from "react";
import { Button } from "../../GlobalStyles";
import { dataProyectos } from "../../data/dataProyectosFull";
import {
  ArchivosContainer,
  ButtonMuestra,
  ButtonMuestraContainer,
  ButtonProyectos,
  Card,
  CardDescription,
  CardDescriptionContainer,
  CardImage,
  CardTecnologias,
  CardTittle,
  ProyectosContainer,
  ProyectosTittle,
  ProyectosWrapper,
  Tecnologias,
} from "./Proyectos.elements";

const ProyectosFull = () => {
// console.log(dataProyectos[0].tecnologias);
var h = dataProyectos.map(function (task, index, array) {
 
  return task.tecnologias; 

});

console.log(h);
  return (
    <ProyectosContainer id="proyectos">
      <ProyectosWrapper>
        <ProyectosTittle>Proyectos</ProyectosTittle>
        <ArchivosContainer>
          {dataProyectos.map((item,tecnologias) => {
            return (
              <Card key={item.id}>
            <CardImage src={item.img}></CardImage>
            <CardDescriptionContainer>
              <CardTittle>{item.nombre}</CardTittle>
              <CardTecnologias id="tech">
                {item.tecnologias.map((tech) => {
                  return (
                    <Tecnologias key={tech}>{tech}</Tecnologias>
                  )
                })}
              </CardTecnologias>
              <CardDescription>
                {item.texto}
              </CardDescription>
            </CardDescriptionContainer>
            <ButtonMuestraContainer>
              <ButtonMuestra href={item.linkDemo} target="_blank" rel="noreferrer">Ver DEMO</ButtonMuestra>
              <ButtonMuestra href={item.linkRepo} target="_blank" rel="noreferrer">Repositorio</ButtonMuestra>
            </ButtonMuestraContainer>
          </Card>
            )
          })}
        </ArchivosContainer>
      </ProyectosWrapper>
    </ProyectosContainer>
  );
};

export default ProyectosFull;

import React from "react";
import { dataProyectosMain } from "../../data/dataProyectosMain";
import { Button } from "../../GlobalStyles";
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

const Proyectos = () => {
  return (
    <ProyectosContainer id="proyectos">
      <ProyectosWrapper>
        <ProyectosTittle>Proyectos</ProyectosTittle>
        <ArchivosContainer>
          {dataProyectosMain.map((item) => {
            return (
              <Card key={item.id}>
                <CardImage src={item.img}></CardImage>
                <CardDescriptionContainer>
                  <CardTittle>{item.nombre}</CardTittle>
                  <CardTecnologias id="tech">
                    {item.tecnologias.map((tech) => {
                      return <Tecnologias key={tech}>{tech}</Tecnologias>;
                    })}
                  </CardTecnologias>
                  <CardDescription>{item.texto}</CardDescription>
                </CardDescriptionContainer>
                <ButtonMuestraContainer>
                  <ButtonMuestra
                    href={item.linkDemo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver DEMO
                  </ButtonMuestra>
                  <ButtonMuestra
                    href={item.linkDemo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repositorio
                  </ButtonMuestra>
                </ButtonMuestraContainer>
              </Card>
            );
          })}
        </ArchivosContainer>
        <ButtonProyectos to="/proyectosfull">
          Ver todos los proyectos
        </ButtonProyectos>
      </ProyectosWrapper>
    </ProyectosContainer>
  );
};

export default Proyectos;

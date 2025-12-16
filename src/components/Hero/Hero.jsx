import React from 'react'
import { Button } from '../../GlobalStyles'
import { ButtonCV, Description, HeroContainer, HeroContent, HeroH1, HeroImage, HeroTextContent, SpanTittle } from './Hero.elements'
import CV from './Atencio_Lautaro.pdf'

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTextContent>
          <SpanTittle>Tecnico superior en desarrollo de software</SpanTittle>
          <HeroH1>Lautaro Atencio</HeroH1>
          <Description>Soy Lautaro Atencio y soy técnico superior en desarrollo software, capacitado para realizar análisis de sistemas y realizar desarrollo de software. Estoy especializado en el lenguaje java con el framework spring, utilizando tambien como base de datos MySQL.</Description>
          <ButtonCV href={CV} download >Descargar CV</ButtonCV>
        </HeroTextContent>
        <HeroImage src='./image.png'></HeroImage>
      </HeroContent>

    </HeroContainer>
  )
}

export default Hero
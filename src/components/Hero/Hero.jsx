import React from 'react'
import { Button } from '../../GlobalStyles'
import { ButtonCV, Description, HeroContainer, HeroContent, HeroH1, HeroImage, HeroTextContent, SpanTittle } from './Hero.elements'
import CV from './CV_Lautaro_Atencio_Exequiel.pdf'

const Hero = () => {
  return (
    <HeroContainer>
        <HeroContent>
            <HeroTextContent>
            <SpanTittle>Front End Developer</SpanTittle>
            <HeroH1>Lautaro Atencio</HeroH1>
            <Description>!Hola, soy desarrollador front end, actualmente estoy estudiando la libreria ReactJS, actualmente me encuentro estudiando Tecnicatura en progamacion informatica y estoy aprendiendo dia a dia sobre este mundo del desarrollo!</Description>
            <ButtonCV href={CV} download >Descargar CV</ButtonCV>
            </HeroTextContent>
            <HeroImage src='./image.png'></HeroImage>
        </HeroContent>
        
    </HeroContainer>
  )
}

export default Hero
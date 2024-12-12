import React from 'react'
import { HeroSection } from './styles'

const Hero = () => {
  return (
    <HeroSection>
      <h1>Encontre sua próxima oportunidade de carreira</h1>
      <p>
        Explore vagas de trabalho em empresas inovadoras que estão à procura de
        talentos como você.
      </p>
      <a href="/vagas" className="cta-button">
        Vagas abertas
      </a>
    </HeroSection>
  )
}

export default Hero

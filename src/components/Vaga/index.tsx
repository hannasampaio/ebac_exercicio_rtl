import React from 'react'
import { VagaCard, VagaTitle } from './styles'

type VagaProps = {
  titulo: string
  descricao: string
  empresa: string
  link: string
}

const Vaga = ({ titulo, descricao, empresa, link }: VagaProps) => (
  <VagaCard>
    <VagaTitle href={link} target="_blank">
      {titulo}
    </VagaTitle>
    <p>{descricao}</p>
    <p>
      <strong>Empresa:</strong> {empresa}
    </p>
  </VagaCard>
)

export default Vaga

import React from 'react'
import { ListaVagasContainer, ListaVagasTitle } from './styles'
import Vaga from '../Vaga'

const vagas = [
  {
    titulo: 'Desenvolvedor Front-end',
    descricao:
      'Estamos procurando um desenvolvedor front-end para criar interfaces inovadoras.',
    empresa: 'TechCorp',
    link: '/vagas/desenvolvedor-front-end'
  },
  {
    titulo: 'Engenheiro de Software',
    descricao:
      'Procuramos um engenheiro de software para trabalhar em soluções de alta escalabilidade.',
    empresa: 'SoftTech',
    link: '/vagas/engenheiro-de-software'
  },
  {
    titulo: 'Designer UX/UI',
    descricao:
      'Buscamos um designer UX/UI criativo para melhorar a experiência de nossos usuários.',
    empresa: 'CreativeLabs',
    link: '/vagas/designer-ux-ui'
  },
  {
    titulo: 'Analista de Dados',
    descricao:
      'Procuramos um analista de dados para ajudar na tomada de decisões baseadas em dados.',
    empresa: 'DataInsights',
    link: '/vagas/analista-de-dados'
  }
]

const ListaVagas = () => (
  <ListaVagasContainer>
    <ListaVagasTitle>Vagas Disponíveis</ListaVagasTitle>
    {vagas.map((vaga, index) => (
      <Vaga
        key={index}
        titulo={vaga.titulo}
        descricao={vaga.descricao}
        empresa={vaga.empresa}
        link={vaga.link}
      />
    ))}
  </ListaVagasContainer>
)

export default ListaVagas

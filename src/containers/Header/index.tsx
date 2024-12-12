import React from 'react'
import { HeaderContainer, HeaderTitle, Button } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>TechJobs</HeaderTitle>
      <div>
        <Button primary href="#login">
          {' '}
          Login
        </Button>
        <Button href="#signup">Cadastrar-se</Button>
      </div>
    </HeaderContainer>
  )
}

export default Header

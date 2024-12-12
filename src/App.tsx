import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles'
import { theme } from './theme'
import Header from './containers/Header'
import Hero from './containers/Hero'
import ListaVagas from './components/ListaVagas'
import Formulario from './containers/Form'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Hero />
      <ListaVagas />
      <Formulario />
    </ThemeProvider>
  )
}

export default App

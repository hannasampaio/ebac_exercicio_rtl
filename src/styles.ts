import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.link};
    font-weight: bold;

    &:hover {
      color: ${({ theme }) => theme.colors.text.linkHover};
    }
  }
`

export default GlobalStyle

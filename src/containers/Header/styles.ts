import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary},
    ${({ theme }) => theme.colors.accent}
  );
  color: ${({ theme }) => theme.colors.text.secondary};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const HeaderTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`

export const Button = styled.a<{ primary?: boolean }>`
  background-color: ${({ theme, primary }) =>
    primary ? theme.colors.text.secondary : 'transparent'};
  color: ${({ theme, primary }) =>
    primary ? theme.colors.text.primary : theme.colors.text.secondary};
  padding: 10px 20px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`

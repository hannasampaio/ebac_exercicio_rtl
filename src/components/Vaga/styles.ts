import styled from 'styled-components'

export const VagaCard = styled.div`
  background-color: ${({ theme }) => theme.colors.text.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 20px;
  margin: 15px 0;
  width: 100%;
  max-width: 600px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  p {
    font-size: 1rem;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`

export const VagaTitle = styled.a`
  display: block;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.link};
  margin-bottom: 10px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text.linkHover};
  }
`

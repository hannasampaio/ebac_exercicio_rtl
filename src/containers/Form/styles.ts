import styled from 'styled-components'

export const FormSection = styled.section`
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary},
    ${({ theme }) => theme.colors.accent}
  );
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const FormContainer = styled.form`
  background-color: ${({ theme }) => theme.colors.text.secondary};
  padding: 30px;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  max-width: 600px;
  width: 100%;
  text-align: center;
  font-family: 'Inter', sans-serif;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  p {
    margin-bottom: 15px;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text.link};

    a {
      color: ${({ theme }) => theme.colors.text.link};
      text-decoration: none;
      font-weight: bold;

      &:hover {
        color: ${({ theme }) => theme.colors.text.linkHover};
      }
    }
  }

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 20px;
  }
`

export const FormInput = styled.input`
  width: 90%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid ${({ theme }) => theme.colors.text.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.text.secondary};
  transition: all 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 8px rgba(0, 229, 255, 0.4);
  }

  &::placeholder {
    color: #888;
  }
`

export const FormCheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0;

  label {
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 0.9rem;
  }
`

export const FormCheckbox = styled.input`
  margin: 0;
  width: 16px;
  height: 16px;
`

export const FormButton = styled.button`
  width: 50%;
  margin-top: 20px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.secondary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(2px);
  }
`
export const FormMessage = styled.p`
  color: blue;
  text-align: center;
  font-weight: bold;
`

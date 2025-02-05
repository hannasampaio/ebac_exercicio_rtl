import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../theme'
import Formulario from '..'

describe('Teste para envio do formulário', () => {
  test('Deve preencher e enviar o formulário corretamente', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Formulario />
      </ThemeProvider>
    )

    fireEvent.change(screen.getByTestId('nome-input'), {
      target: { value: 'João Silva' }
    })
    fireEvent.change(screen.getByTestId('email-input'), {
      target: { value: 'joao@email.com' }
    })
    fireEvent.change(screen.getByTestId('senha-input'), {
      target: { value: 'senha123' }
    })
    fireEvent.change(screen.getByTestId('senha-repeat-input'), {
      target: { value: 'senha123' }
    })

    fireEvent.click(screen.getByTestId('marketing-checkbox'))
    fireEvent.click(screen.getByTestId('politica-checkbox'))

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'log').mockImplementation(() => {})

    fireEvent.click(screen.getByTestId('submit-btn'))

    await waitFor(() => {
      expect(console.log).toHaveBeenCalledWith('Formulário enviado:', {
        nome: 'João Silva',
        email: 'joao@email.com',
        senha: 'senha123',
        marketing: true,
        politica: true
      })
    })

    expect(screen.getByTestId('submit-btn')).toBeInTheDocument()
  })
})

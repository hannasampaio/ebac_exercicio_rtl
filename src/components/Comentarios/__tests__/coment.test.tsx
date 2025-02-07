import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import SecaoDeComentarios from '..'

describe('Seção de Comentários', () => {
  test('insere dois comentários', () => {
    render(<SecaoDeComentarios />)

    const campoComentario = screen.getByTestId('campo-comentario')
    const botaoAdicionar = screen.getByTestId('botao-adicionar-comentario')

    fireEvent.change(campoComentario, {
      target: { value: 'Primeiro comentário' }
    })
    fireEvent.click(botaoAdicionar)

    fireEvent.change(campoComentario, {
      target: { value: 'Segundo comentário' }
    })
    fireEvent.click(botaoAdicionar)

    const comentarios = screen.getAllByTestId('item-comentario')
    expect(comentarios).toHaveLength(2)
    expect(comentarios[0]).toHaveTextContent('Primeiro comentário')
    expect(comentarios[1]).toHaveTextContent('Segundo comentário')
  })
})

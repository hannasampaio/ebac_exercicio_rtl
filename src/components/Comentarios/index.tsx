import React, { useState } from 'react'

const SecaoDeComentarios = () => {
  const [comentarios, setComentarios] = useState<string[]>([])
  const [novoComentario, setNovoComentario] = useState('')

  const adicionarComentario = () => {
    if (novoComentario.trim() !== '') {
      setComentarios([...comentarios, novoComentario])
      setNovoComentario('')
    }
  }

  return (
    <div data-testid="secao-de-comentarios">
      <input
        type="text"
        placeholder="Digite seu comentário"
        value={novoComentario}
        onChange={(e) => setNovoComentario(e.target.value)}
        data-testid="campo-comentario"
      />
      <button
        onClick={adicionarComentario}
        data-testid="botao-adicionar-comentario"
      >
        Adicionar Comentário
      </button>
      <ul>
        {comentarios.map((comentario, index) => (
          <li key={index} data-testid="item-comentario">
            {comentario}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SecaoDeComentarios

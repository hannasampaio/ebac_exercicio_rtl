import React, { useState } from 'react'
import {
  FormContainer,
  FormInput,
  FormButton,
  FormCheckbox,
  FormSection,
  FormCheckboxGroup
} from './styles'

const Formulario = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [senhaRepeat, setSenhaRepeat] = useState('')
  const [marketing, setMarketing] = useState(false)
  const [politica, setPolitica] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (senha !== senhaRepeat) {
      setErrorMessage('As senhas não coincidem. Tente novamente.')
      return
    }

    console.log('Formulário enviado:', {
      nome,
      email,
      senha,
      senhaRepeat,
      marketing,
      politica
    })

    setNome('')
    setEmail('')
    setSenha('')
    setSenhaRepeat('')
    setMarketing(false)
    setPolitica(false)

    setFormSubmitted(true)
    setErrorMessage('')
  }

  return (
    <FormSection>
      <FormContainer onSubmit={handleSubmit}>
        <h3> Novo Cadastro</h3>
        <p>
          Já tem cadastro? <a href="/login">Entrar aqui</a>
        </p>

        <FormInput
          data-testid="nome-input"
          type="text"
          placeholder="Nome Completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <FormInput
          data-testid="email-input"
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormInput
          data-testid="senha-input"
          type="password"
          placeholder="Escolha uma Password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <FormInput
          data-testid="senha-repeat-input"
          type="password"
          placeholder="Repita a Password"
          value={senhaRepeat}
          onChange={(e) => setSenhaRepeat(e.target.value)}
          required
        />

        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        <FormButton data-testid="submit-btn" type="submit">
          Novo cadastro
        </FormButton>

        <FormCheckboxGroup>
          <FormCheckbox
            data-testid="marketing-checkbox"
            type="checkbox"
            checked={marketing}
            onChange={() => setMarketing(!marketing)}
          />
          <label>
            Receber ofertas de emprego e comunicações de marketing por email?
          </label>
        </FormCheckboxGroup>

        <FormCheckboxGroup>
          <FormCheckbox
            data-testid="politica-checkbox"
            type="checkbox"
            checked={politica}
            onChange={() => setPolitica(!politica)}
            required
          />
          <label>
            Aceitar a Política de Privacidade e os Termos de Utilização
          </label>
        </FormCheckboxGroup>

        {formSubmitted && <p>Formulário enviado!</p>}
      </FormContainer>
    </FormSection>
  )
}

export default Formulario

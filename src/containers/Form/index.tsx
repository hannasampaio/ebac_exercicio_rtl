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
  const [marketing, setMarketing] = useState(false)
  const [politica, setPolitica] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulário enviado:', {
      nome,
      email,
      senha,
      marketing,
      politica
    })
  }

  return (
    <FormSection>
      <FormContainer onSubmit={handleSubmit}>
        <h3> Novo Cadastro</h3>
        <p>
          Já tem cadastro? <a href="/login">Entrar aqui</a>
        </p>

        <FormInput
          type="text"
          placeholder="Nome Completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <FormInput
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormInput
          type="password"
          placeholder="Escolha uma Password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <FormInput
          type="password"
          placeholder="Repita a Password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <FormButton type="submit">Novo cadastro</FormButton>

        <FormCheckboxGroup>
          <FormCheckbox
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
            type="checkbox"
            checked={politica}
            onChange={() => setPolitica(!politica)}
            required
          />
          <label>
            Aceitar a Política de Privacidade e os Termos de Utilização
          </label>
        </FormCheckboxGroup>
      </FormContainer>
    </FormSection>
  )
}

export default Formulario

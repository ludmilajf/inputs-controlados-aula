import React, { useState } from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {
  const [name, setName] = useState("")

  const [age, setAge] = useState("")

  const [email, setEmail] = useState("")

  const onChangeName = (event) => {
    console.log("mudei o input nome")
    console.log(event.target.value)
    setName(event.target.value)
  }

  const onChangeAge = (event) => {
    console.log("mudei o input idade")
    console.log(event.target.value)
    setAge(event.target.value)
  }

  const onChangeEmail = (event) => {
    console.log("mudei o input email")
    console.log(event.target.value)
    setEmail(event.target.value)
  }

  const dataSave = () => {
    console.log(`
      Nome: ${name}
      Idade: ${age}
      E-mail: ${email}
    `)
    setName("")
    setAge("")
    setEmail("")
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input type="text" onChange={onChangeName} value={name}/>
          <p>{name}</p>
        </label>
        <label>
          Idade:
          <Input type="number" onChange={onChangeAge} value={age} />
        </label>
        <label>
          E-mail:
          <Input type="email" onChange={onChangeEmail} value={email} />
        </label>
      <button onClick={dataSave}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
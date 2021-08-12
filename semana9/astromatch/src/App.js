import React from 'react'
import { useState } from "react"
import axios from 'axios'
import TelaInicial from "./components/telaInicial"
import TelaMatches from "./components/telaMatches"
import { ContainerApp, ButtonClear } from "./components/styles"
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #222;
    font-family: Montserrat;
    box-sizing: border-box;
    
  }
`
const App = (props) => {
  const [telaAtual, setTelaAtual] = useState("inicial")
  
  const vaiParaTelaMatches = () => {
    setTelaAtual("matches")
  }

  const vaiParaTelaInicial = () => {
    setTelaAtual("inicial")
  }
  
  const trocaTela = () => {
    switch (telaAtual){
    case "inicial":
      return <TelaInicial vaiParaTelaMatches={vaiParaTelaMatches} />
    case "matches":
      return <TelaMatches vaiParaTelaInicial={vaiParaTelaInicial} />
      
      default: 
        return <TelaInicial vaiParaTelaMatches={vaiParaTelaMatches} />
      
    }

  }

  const apagaLista = () => {
    axios
    .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:rafael-mach/clear")
    .then((res) => {
        console.log(res)
        // setPessoa(res.data.profile)
           
    })
    .catch((error) => {
        console.log(error)
    })
}
  
  return (
    <ContainerApp>
      <GlobalStyle />
      {trocaTela()}
      
      <ButtonClear onClick={apagaLista}>Limpar swipes e matches</ButtonClear>
      

    </ContainerApp>
    
  )

}
  
export default App

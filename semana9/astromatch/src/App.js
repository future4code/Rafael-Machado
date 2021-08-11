import React from 'react'
import { useEffect, useState } from "react"
import TelaInicial from "./components/telaInicial"
import TelaMatches from "./components/telaMatches"
import { ContainerApp, ButtonClear } from "./components/styles"
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: lightgrey;
    font-family: Montserrat;
    box-sizing: border-box;
    
  }
`

const App = (props) => {
  const [telaAtual, setTelaAtual] = useState("inicial")
  const [idPessoaClicada, setIdPessoaClicada] = useState("")

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
  
  return (
    <ContainerApp>
      <GlobalStyle />
      {trocaTela()}
      
      <ButtonClear>Limpar swipes e matches</ButtonClear>
      

    </ContainerApp>
    
  )

}
  


export default App

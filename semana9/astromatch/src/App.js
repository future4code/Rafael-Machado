import React from 'react'
import { useEffect, useState } from "react"
import TelaInicial from "./components/telaInicial"
import TelaMatches from "./components/telaMatches"

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
    <div>
      {trocaTela()}
    </div>
  )

}
  


export default App

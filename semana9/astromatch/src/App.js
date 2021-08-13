import React from "react"
import { useState } from "react"
import axios from "axios"
import TelaInicial from "./components/telaInicial"
import TelaMatches from "./components/telaMatches"
import { ContainerApp, styleBotaoApaga } from "./components/styles"
import { createGlobalStyle } from "styled-components"
import Button from "@material-ui/core/Button"

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: #222;
    font-family: Montserrat;
  }
`
const App = () => {
  const [telaAtual, setTelaAtual] = useState("inicial")

  const vaiParaTelaMatches = () => {
    setTelaAtual("matches")
  }

  const vaiParaTelaInicial = () => {
    setTelaAtual("inicial")
  }

  const trocaTela = () => {
    switch (telaAtual) {
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
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:rafael-mach/clear"
      )
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

      <Button
        onClick={apagaLista}
        variant="outlined"
        size="small"
        style={styleBotaoApaga}
      >
        LIMPAR MATCHES
      </Button>
    </ContainerApp>
  )
}
export default App

// import axios from 'axios';
import React from 'react'
// import styled from 'styled-components';
import Home from './components/Home';
import Missoes from './components/Missoes';

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    font-family: 'Teko', sans-serif;
  }
`

export default class App extends React.Component {
  state = {
    telaAtual: "home"
  }

  renderizaTela = () => {
    switch (this.state.telaAtual) {
      case "home":
        return <Home irParaMissoes={this.irParaMissoes} />
      case "missoes":
        return <Missoes irParaHome={this.irParaHome} />
      default:
        return <Home irParaMissoes={this.irParaMissoes} />    
    }
  }
  

    irParaHome = () => {
      this.setState({ telaAtual: "home"})
    }

    irParaMissoes = () => {
      this.setState({ telaAtual: "missoes"})
    }

  
    render () {
      return (
        
        <div>
          <GlobalStyle />
          {this.renderizaTela()}
        </div>
      )
    }
  }

 

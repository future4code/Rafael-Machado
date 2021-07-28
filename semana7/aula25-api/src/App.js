// import axios from 'axios';
import React from 'react'
// import styled from 'styled-components';
import Cadastro from './components/Cadastro';
import Lista from './components/Lista';

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  renderizaTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <Cadastro irParaLista={this.irParaLista} />
      case "lista":
        return <Lista irParaCadastro={this.irParaCadastro} />
      default:
        return <Cadastro irParaLista={this.irParaLista} />    
    }
  }
  

    irParaCadastro = () => {
      this.setState({ telaAtual: "cadastro"})
    }

    irParaLista = () => {
      this.setState({ telaAtual: "lista"})
    }

  
    render () {
      return (
        <div>
          {this.renderizaTela()}
        </div>
      )
    }
  }











  // state = {
  //   usuarios: []
  // }


  // componentDidMount() {
  //   this.pegarUsuarios()
  // }

  // pegarUsuarios = () => {
  //   axios
  //     .get(url, headers)
  //     .then((res) => {
  //       this.setState({ usuarios: res.data})
  //       console.log("Respostas", res)
  //     })
  //     .catch((err) => {
  //       console.log("Erros", err)
  //     })
  // }  


    // render() {
    //   const componentesUsuarios = this.state.usuarios.map((user) => {
    //     return <li key={user.id}> {user.name} </li>
    //   })
    //   console.log("Estado", this.state.usuarios)
    //   return (
    //     <div>
    //       <h1>Cadastro de Usuário</h1>
    //       <hr />
    //       <Cadastro pegarUsuarios={this.pegarUsuarios} />
    //       <hr />
    //       <Lista />
    //       {componentesUsuarios}
    //     </div>
    //   )
    // }
 

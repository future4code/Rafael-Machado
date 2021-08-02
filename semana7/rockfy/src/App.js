// import axios from 'axios';
import React from 'react'
// import styled from 'styled-components';
import Cadastro from './components/Cadastro';
import Lista from './components/Lista';
import PlaylistInfo from './components/Playlist_info';

import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  body {
    background-color: #222;
    font-family: Montserrat;
  }
`

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro",
    playlistId: ""
  }

  renderizaTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <Cadastro irParaLista={this.irParaLista} />
      case "lista":
        return <Lista irParaCadastro={this.irParaCadastro} irParaPlaylistInfo={ this.irParaDetalhesPlaylist } />
      case "detalhes":
        return <PlaylistInfo irParaLista={this.irParaLista} />
      default:
        return <Cadastro irParaLista={this.irParaLista} />    
    }
  }

    irParaDetalhesPlaylist = (telaAtual, playlistId) => {
      this.setState({ telaAtual: "detalhes", playlistId: playlistId })
    }
    
    irParaCadastro = (telaAtual, playlistId) => {
      this.setState({ telaAtual: "cadastro", playlistId: playlistId })
    }

    irParaLista = (telaAtual, playlistId) => {
      this.setState({ telaAtual: "lista", playlistId: playlistId })
    }

    

  
    render () {
      // console.log(this.state.playlistId)
      return (
        
        <div>
          <GlobalStyle />
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
 

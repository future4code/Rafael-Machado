import axios from 'axios';
import React from 'react'
// import styled from 'styled-components';
import Cadastro from './components/Cadastro';
import Lista from './components/Lista';

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
  headers: {
    Authorization: "rafael-machado-lovelace"
  }
}

class App extends React.Component {
  
  state = {
    usuarios: []
  }


  componentDidMount() {
    this.pegarUsuarios()
  }

  pegarUsuarios = () => {
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ usuarios: res.data})
        console.log("Respostas", res)
      })
      .catch((err) => {
        console.log("Erros", err)
      })
  }  


    render() {
      const componentesUsuarios = this.state.usuarios.map((user) => {
        return <li key={user.id}> {user.name} </li>
      })
      console.log("Estado", this.state.usuarios)
      return (
        <div>
          <h1>Cadastro de Usuário</h1>
          <hr />
          <Cadastro pegarUsuarios={this.pegarUsuarios} />
          <hr />
          <Lista />
          {componentesUsuarios}
        </div>
      )
    }
  }
  export default App;

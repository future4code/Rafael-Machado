import React from 'react'
import axios from "axios"


export default class Cadastro extends React.Component {

    state = {
        inputUsuario: "",
        inputEmail: ""
      }
    
    onChangeInputNome = (e) => {
        this.setState({ inputUsuario: e.target.value })
    }
  
    onChangeInputEmail = (e) => {
      this.setState({ inputEmail: e.target.value })
  }

  criarUsuario = () => {
    // console.log("Cadastro de Usuário - State", this.state)
    // Console.log no state ... ao apertar botão Cadastrar vemos se são gravadas as informações no ESTADO
    const body = {
      name: this.state.inputUsuario,
      email: this.state.inputEmail
    }

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

    const headers = {
        headers: {
    Authorization: "rafael-machado-lovelace"
  }
}
    axios
      .post(url, body, headers)
      .then((res) => {
        // console.log("Respostas", res)
        alert("Usuário cadastrado com sucesso")
        this.setState({ inputUsuario: "", inputEmail: "" })
        // this.props.pegarUsuarios()
        
        
      })
      .catch((err) => {
        alert("Houve um erro. Tente novamente")
        // console.log("Erros", err.response.data) ... Para encontrar erros.
        // Para jogar a mensagem de erro que vem do backend ... alert(err.response.data.message)
      })
  }

    render() {
        return (
            <div>
                
                <p>Nome:</p>
                <input
                placeholder={"Nome"} 
                value={this.state.inputUsuario}
                onChange={this.onChangeInputNome} />
                
                <p>E-mail:</p>
                <input
                placeholder={"E-mail"}
                value={this.state.inputEmail}
                onChange={this.onChangeInputEmail} />
                
                <div>
                <button onClick={this.criarUsuario}>Cadastrar</button>
                </div>

                <div>
                <button onClick={this.props.irParaLista}>Ir para Lista de Usuários</button>
                </div>                
                

            </div>
        )
    }

}


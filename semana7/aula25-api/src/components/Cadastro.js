import React from 'react'
import axios from "axios"


class Cadastro extends React.Component {

 
    state = {
        inputUsuario: "",
        inputEmail: ""
      }
    
    onChangeInputNome = (e) => {
        this.setState({ inputUsuario: e.target.value})
    }
  
    onChangeInputEmail = (e) => {
      this.setState({ inputEmail: e.target.value})
  }

  criarUsuario = () => {
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
        alert("Usuário cadastrado com sucesso")
        this.props.pegarUsuarios()
        console.log("Respostas", res)
      })
      .catch((err) => {
        alert("Houve um erro. Tente novamente")
        console.log("Erros", err.response)
      })
  }

    render() {
        return (
            <div>
                
                <p>Nome:</p>
                <input 
                value={this.state.inputUsuario}
                onChange={this.onChangeInputNome} />
                
                <p>E-mail:</p>
                <input
                value={this.state.inputEmail}
                onChange={this.onChangeInputEmail} />
                
                <div>
                <button onClick={this.criarUsuario}>Salvar</button>
                </div>

                <div>
                <button>Voltar para Lista de Usuários</button>
                </div>                
                

            </div>
        )
    }

}

export default Cadastro
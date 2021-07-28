import React from 'react'
import axios from "axios"
import styled from 'styled-components'


const Container = styled.div`
    max-width: 370px;
    margin: 30px auto;
    overflow: auto;
    min-height: 300px;
    border: 2px solid aqua;
    border-radius: 10px;
    padding: 30px;
    text-align: center;
    color: #eee;

    h2 {
        color: #eee;
        
    }
    
`

const ContainerButton = styled.div`
  padding: 10px;
  margin: 15px 0;
  
`

const BotaoMudaPagina = styled.button`
    background-color: aqua;
    height: 40px;
    width: 100%;
    border-radius: 5px;
    color: black;
    font-weight: bold;
    font-size: 15px;
    font-family: Montserrat;
    cursor: pointer;
    border: none;
    padding: 0 10px;
`
const BotaoCadastrar = styled.button`
  background-color: aqua;
    height: 40px;
    width: 100px;
    border-radius: 5px;
    color: black;
    font-weight: bold;
    font-size: 15px;
    font-family: Montserrat;
    cursor: pointer;
    border: none;
    padding: 0 10px;

`



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
            <Container>
                <div>
                <p>Nome</p>
                <input
                placeholder={"Nome"} 
                value={this.state.inputUsuario}
                onChange={this.onChangeInputNome} />
                
                <p>E-mail</p>
                <input
                placeholder={"E-mail"}
                value={this.state.inputEmail}
                onChange={this.onChangeInputEmail} />
                </div>
                <ContainerButton>
                <BotaoCadastrar onClick={this.criarUsuario}>Cadastrar</BotaoCadastrar>
                </ContainerButton>

                <ContainerButton>
                <BotaoMudaPagina onClick={this.props.irParaLista}>Ir para Lista de Usuários</BotaoMudaPagina>
                </ContainerButton>                
                

            </Container>
        )
    }

}


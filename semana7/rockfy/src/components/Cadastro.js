import React from 'react'
import axios from "axios"
import styled from 'styled-components'


const Container = styled.div`
    max-width: 370px;
    margin: 30px auto;
    border: 3px solid #00D856;
    border-radius: 10px;
    padding: 30px;
    text-align: center;
    color: #eee;

        
`

const ContainerButton = styled.div`
  padding: 7px;
  margin: 10px 0 10px;
  
`
const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`



const BotaoMudaPagina = styled.button`
    background-color: #00D856;
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

    &:hover {
background-color: black;
color: #eee;
}
`
const BotaoCadastrar = styled.button`
  background-color: #00D856;
    height: 40px;
    width: 170px;
    border-radius: 5px;
    color: black;
    font-weight: bold;
    font-size: 15px;
    font-family: Montserrat;
    cursor: pointer;
    border: none;
    padding: 0 10px;

    &:hover {
background-color: black;
color: #eee;
}

`

const Inputs = styled.input`
  background-color: #444;
    color: #eee;
    border-radius: 5px;
    padding: 11px;
    margin: 11px;
    width: 200px;
    font-family: Montserrat;
    align-items: center;
    border: none;

`

export default class Cadastro extends React.Component {

    state = {
        inputPlaylist: ""
        
      }
    
    onChangeInputPlaylist = (e) => {
        this.setState({ inputPlaylist: e.target.value })
    }
  

  criarPlaylist = () => { // criarUsuario
    // console.log("Cadastro de Playlist - State", this.state)
    // Console.log no state ... ao apertar botão Cadastrar vemos se são gravadas as informações no ESTADO
    const body = {
      name: this.state.inputPlaylist
    }

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    const headers = {
        headers: {
    Authorization: "rafael-machado-lovelace"
  }
}
    axios
      .post(url, body, headers)
      .then((res) => {
        // console.log("Respostas", res)
        alert("Playlist cadastrada com sucesso")
        this.setState({ inputPlaylist: "" })
        // this.props.irParaLista()
        
        
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
                <ContainerInputs>
                <span>Nome da Playlist</span>
                <Inputs
                placeholder={"Digite o nome da Playlist"} 
                value={this.state.inputPlaylist}
                onChange={this.onChangeInputPlaylist} />
                </ContainerInputs>
                
                <ContainerButton>
                <BotaoCadastrar onClick={this.criarPlaylist}>Cadastrar Playlist</BotaoCadastrar>
                </ContainerButton>

                <ContainerButton>
                <BotaoMudaPagina onClick={this.props.irParaLista}>Ir para Lista das Playlists</BotaoMudaPagina>
                </ContainerButton>                
                

            </Container>
        )
    }

}


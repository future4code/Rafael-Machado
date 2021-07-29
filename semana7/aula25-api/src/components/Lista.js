import axios from 'axios'
import React from 'react'
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

    h2 {
        color: #eee;
        
    }
    
`

const CardUsuario = styled.div`
    background-color: #444;
    color: #eee;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid black; */
    border-radius: 5px;
    padding: 11px;
    margin: 11px;
    width: auto;
    font-family: Montserrat;
    align-items: center;
    
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

    &:hover {
background-color: black;
color: #eee;
}
`
const BotaoX = styled.button`
background-color: aqua;
height: 25px;
/* width: 100%; */
border-radius: 5px;
color: #444;
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

// Aqui iniciei a estilização CSS !!!


export default class Lista extends React.Component {

    componentDidMount() {
        this.pegarUsuarios()
    }

    state = {
        usuarios: []
      }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        const headers = {
            headers: {
        Authorization: "rafael-machado-lovelace"
      }
    }
        axios.get(url, headers)
        .then((res) => {
            this.setState({ usuarios: res.data })
            // console.log("Resposta", res) ... Dentro de Data mostra a lista com os usuários cadastrados.
        })
        .catch((err) => {
            alert("Ooops! Problema! Tente de novo")
            
            // console.log("Erro", err)    
        })
    }

        deletarUsuario = (id) => {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

            axios.delete(url, {
                headers: {
                    Authorization: "rafael-machado-lovelace"
                }
            })
            .then((res) => {
                alert("Usuário deletado com sucesso")
                this.pegarUsuarios()
            })
            .catch((err) => {
                alert("Ocorreu um erro. Tente novamente.")
            })
        }

    render() {
        // Para verificar se os usuários foram gravados no STATE, em then, no setState ({ usuarios: res.data }) 
        // Nós podemos dar um console.log dentro do render ...
        // console.log("Array Usuarios", this.state.usuarios)
        // Agora precisamos transformar essa lista de objetos que tem ID e Nome em uma lista de COMPONENTES
        // Usando o MAP

        const listaUsuarios = this.state.usuarios.map((user) => {
            return <CardUsuario key={user.id}> 
                        { user.name } 
                        <BotaoX onClick={ () => this.deletarUsuario(user.id) } >X</BotaoX>
                    </CardUsuario>
        })

        return (
            <Container>
                <div>
                           
                    <BotaoMudaPagina onClick={this.props.irParaCadastro}>Ir para Cadastro de Usuário</BotaoMudaPagina>
                           
                </div>

                <h2>Lista de Usuários</h2>

            {listaUsuarios}
            </Container>
        )
    }

}


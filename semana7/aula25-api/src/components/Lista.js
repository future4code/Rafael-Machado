import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

const CardUsuario = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    padding: 11px;
    margin: 11px;
    width: 300px;

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
                        <button onClick={ () => this.deletarUsuario(user.id) } >X</button>
                    </CardUsuario>
        })

        return (
            <div>
                <div>
                           
                    <button onClick={this.props.irParaCadastro}>Ir para Cadastro de Usuário</button>
                           
                </div>

                <h2>Lista de Usuários:</h2>

            {listaUsuarios}
            </div>
        )
    }

}


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
    color: #eee;

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
    font-family: 'Teko', sans-serif;
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
    font-family: 'Teko', sans-serif;
    cursor: pointer;
    border: none;
    padding: 0 10px;

    &:hover {
background-color: black;
color: #eee;
}
`

export default class Missoes extends React.Component {
    state = {
        missions: []
    }
    
    componentDidMount() {
        this.getMissions()
    }

    getMissions = () => {
        axios.get("https://api.spacexdata.com/v3/missions")
        .then((res) => {
            console.log(res.data)
            this.setState({ missions: res.data})
        }).catch((err) => {
            console.log(err)
        })


    }

    
    

    render() {
        // Para verificar se os usuários foram gravados no STATE, em then, no setState ({ usuarios: res.data }) 
        // Nós podemos dar um console.log dentro do render ...
        // console.log("Array Usuarios", this.state.usuarios)
        // Agora precisamos transformar essa lista de objetos que tem ID e Nome em uma lista de COMPONENTES
        // Usando o MAP
        const missionsList = this.state.missions.map((item) => {
            return (
                <div key={item.mission_id}>
                    <p>Nome: {item.mission_name}</p>
                    <p>Fabricantes: {item.manufacturers.map((manufact) => <p> {manufact} </p>)}
                    </p>
                    
                    <div> <a href={item.website} target="_blank">Link para Website</a> </div>
                    <a href={item.wikipedia} target="_blank">Link para Wikipedia</a>

                    <hr/>
                </div>
            )   
        })

        return (
            <Container>
                <div>
                           
                    <BotaoMudaPagina onClick={this.props.irParaHome}>Voltar para Home</BotaoMudaPagina>
                           
                </div>

                <h2>Missões da SpaceX</h2>
                {missionsList}
            
            </Container>
        )
    }

}


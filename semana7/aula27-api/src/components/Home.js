import React from 'react'
import axios from "axios"
import styled from 'styled-components'
import logoSpaceX from "../img/spaceXpng.png"

const Container = styled.div`
    max-width: 370px;
    margin: 30px auto;
    /* height: 500px; */
    border: 3px solid #0083D5; 
    border-radius: 10px;
    padding: 30px;
    text-align: center;
    color: #eee;
   
`
const ContainerButton = styled.div`
  padding: 7px;
  margin: 10px 0 10px;
  
`
const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`
const BotaoMudaPagina = styled.button`
    background-color: #076EB0;
    height: 40px;
    width: 100%;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    font-size: 15px;
    font-family: 'Teko', sans-serif;
    cursor: pointer;
    border: none;
    padding: 0 10px;

    &:hover {
background-color: #eee;
color: #076EB0;
}
`

const Logo = styled.img`
    padding: 1px;
    margin: 1px;
    width: 300px;
    align-items: center;
    border: none;

`

export default class Home extends React.Component {

    render() {
        return (
            <Container>
                <ContainerLogo>
                
                <Logo src={logoSpaceX} alt="Logo da Space X"/>
                </ContainerLogo>
                
                <ContainerButton>
                <BotaoMudaPagina onClick={this.props.irParaMissoes}>Clique para ver as Missões</BotaoMudaPagina>
                </ContainerButton>                
            </Container>
        )
    }
}


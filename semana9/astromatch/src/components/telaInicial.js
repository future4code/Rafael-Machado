import axios from 'axios'
import React from 'react'
import { useEffect, useState } from "react"
import logo from "../img/logo.png"
import { ContainerLogo, ContainerTelaInicial, FotoPessoa, ContainerFoto, Container2Botoes } from './styles'

const TelaInicial = (props) => {
    const [pessoa, setPessoa] = useState({})
    // console.log(pessoa.id)

    const pegaPessoa = () => {
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:rafael-mach/person")
        .then((res) => {
            // console.log(res.data.profile)
            setPessoa(res.data.profile)
               
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const escolhePessoa = (escolha) => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:rafael-mach/choose-person"
                 
        const body = {
            id: pessoa.id,
            choice: escolha
        }

        axios
        .post(url, body)

        .then((res) => {
            pegaPessoa() 
            
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    useEffect(() => {
        pegaPessoa()
    }, [])

    const matchSim = () => {
        escolhePessoa(true)
    }

    const matchNao = () => {
        escolhePessoa(false)
    }


    return (
        <ContainerTelaInicial>
            <header>
            <ContainerLogo>
            <img src={logo} alt="Logo da AstroMatch" />
            <button onClick={props.vaiParaTelaMatches}>Lista</button>
            </ContainerLogo>

            <div>
                
            </div>
            </header>
            
            
            <ContainerFoto>
                <FotoPessoa src={pessoa.photo} />
            </ContainerFoto>

            <Container2Botoes> 
                <button onClick={matchNao}>NÃO</button> 
                <button onClick={matchSim}>DEU MATCH</button> 
            </Container2Botoes>
            
        </ContainerTelaInicial>

    )

}
export default TelaInicial
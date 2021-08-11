import axios from 'axios'
import React from 'react'
import { useEffect, useState } from "react"
import logo from "../img/logo.png"
import { ContainerLogo, ContainerTelaInicial, FotoPessoa, ContainerFoto } from './styles'


const TelaInicial = (props) => {
    const [pessoa, setPessoa] = useState({})

    const pegaPessoa = () => {
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person")
        .then((res) => {
            console.log(res.data.profile)
            setPessoa(res.data.profile)
            
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        pegaPessoa()
    }, [])


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

            <div> 
                <button>DISLIKE</button> 
                <button>DEU MATCH</button> 
            </div>
            
        </ContainerTelaInicial>

    )

}
export default TelaInicial
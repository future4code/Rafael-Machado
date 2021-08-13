import axios from 'axios'
import React from 'react'
import { useEffect, useState } from "react"
import logo from "../img/logo.png"
import Button from '@material-ui/core/Button';
import { ContainerLogo, ContainerTelaInicial, FotoPessoa, 
        ContainerFoto, Container2Botoes, Nome, Bio,
        styleInicial, botaoSim, botaoNao } from './styles'

const TelaInicial = (props) => {
    const [pessoa, setPessoa] = useState({})
    
    const pegaPessoa = () => {
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:rafael-mach/person")
        .then((res) => {
           
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
            
            <Button onClick={props.vaiParaTelaMatches} variant="contained" color="primary" 
            size="small" style={styleInicial} >
            MATCHES <p>&nbsp; &#128151;</p>
            </Button>
            
            </ContainerLogo>
            </header>
                      
            <ContainerFoto>
                <FotoPessoa src={pessoa.photo} />
                
            </ContainerFoto>
           
            
            <Nome>{pessoa.name}, {pessoa.age}</Nome>
            <Bio>{pessoa.bio}</Bio>
            

            <Container2Botoes>
                <Button onClick={matchNao} variant="contained" color="primary" 
                 style={botaoNao} >
                NÃO <p>&nbsp; &#10006;</p>
                </Button>
                <Button onClick={matchSim} variant="contained" color="primary" 
                 style={botaoSim} >
                SIM <p>&nbsp; &#10004;</p>
                </Button>  
              
            </Container2Botoes>
            
        </ContainerTelaInicial>
    )
}
export default TelaInicial
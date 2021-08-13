import axios from 'axios'
import React from 'react'
import { useEffect, useState } from "react"
import logo from "../img/logo.png"
import Button from '@material-ui/core/Button';

import { ContainerLogo, ContainerTelaInicial, FotoPessoa, 
    ContainerFoto, Container2Botoes, Nome, Bio, Icone1 } from './styles'

const TelaInicial = (props) => {
    const [pessoa, setPessoa] = useState({})
    console.log("OBJETO", pessoa)

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

    const style = {
        background: '#5D001E',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 30,
        width: 110,
        padding: '5px 1px',
        margin: '10px',
      }

      const botaoSim = {
        background: '#0ca045',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 37,
        width: 110,
        padding: '5px 1px',
        margin: '10px',
      }

      const botaoNao = {
        background: '#ea0e0e',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 37,
        width: 110,
        padding: '5px 1px',
        margin: '10px',
        // fontSize: 17,
      }


    return (
        <ContainerTelaInicial>
            <header>
            <ContainerLogo>

            <img src={logo} alt="Logo da AstroMatch" />
            {/* <Icone1 src={icone} alt="Icone Estrela" /> */}
            <Button onClick={props.vaiParaTelaMatches} variant="contained" color="primary" 
            size="small" style={style} >
            MATCHES <p>&nbsp; &#128151;</p>
            </Button>
            
            </ContainerLogo>
            </header>
            
            
            <ContainerFoto>
                <FotoPessoa src={pessoa.photo} />
                
            </ContainerFoto>
            {/* Caixa de texto com borda arredondada - cor clara */}
            
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
                {/* <button onClick={matchNao}>NÃO</button>  */}
                {/* <button onClick={matchSim}>SIM</button>  */}
            </Container2Botoes>
            
        </ContainerTelaInicial>

    )

}
export default TelaInicial
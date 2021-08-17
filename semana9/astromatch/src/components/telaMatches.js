import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"
import logo from "../img/logo.png"
import { ContainerTelaInicial, ContainerHeader, FotoPeq, FotoENome, styleBotaoHome } from './styles'
import Button from '@material-ui/core/Button'

const TelaMatches = (props) => {
    const [listaMatches, setlistaMatches] = useState([])

    const salvaMatches = () => {
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:rafael-mach/matches")
        
        .then((res) => {
            
            setlistaMatches(res.data.matches)

        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        salvaMatches()
    }, [])

    const novaLista = listaMatches.map((pessoa) => {
            return (
            <FotoENome>
            <FotoPeq src={pessoa.photo} alt="Foto de Perfil" key={pessoa.id} />
            <p>{pessoa.name}</p>
            </FotoENome>
            )
        })

    return (
        <ContainerTelaInicial>
            <header>
            <ContainerHeader>
            <img src={logo} alt="Logo da AstroMatch" />

            <Button onClick={props.vaiParaTelaInicial} variant="contained" color="primary" 
            size="small" style={styleBotaoHome} >
            HOME <p>&nbsp; &nbsp; &#127922;</p>
            </Button>
            
            </ContainerHeader>

            </header>
            
            <div>
                {novaLista}
            </div>
 
        </ContainerTelaInicial>
    )
}
export default TelaMatches
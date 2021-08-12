import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"
import logo from "../img/logo.png"
import { ContainerTelaInicial, ContainerHeader, FotoPeq, FotoENome } from './styles'

const TelaMatches = (props) => {
    const [listaMatches, setlistaMatches] = useState([])
    console.log(listaMatches)

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
            <button onClick={props.vaiParaTelaInicial}>VOLTAR</button>
            </ContainerHeader>

            <div>
                
            </div>
            </header>
            

            
            <div>
                {novaLista}
            </div>

            
            
        </ContainerTelaInicial>

    )


}
export default TelaMatches
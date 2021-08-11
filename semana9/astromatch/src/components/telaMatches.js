import React from 'react'
import { useEffect, useState } from "react"
import logo from "../img/logo.png"
import { ContainerLogo, ContainerTelaInicial } from './styles'

const TelaMatches = (props) => {
    

    
    return (
        <ContainerTelaInicial>
            <header>
            <ContainerLogo>
            <img src={logo} alt="Logo da AstroMatch" />
            </ContainerLogo>

            <div>
                <button onClick={props.vaiParaTelaInicial}>VOLTA TELA INICIAL</button>
            </div>
            </header>
            
            
            <div>
                LISTA DOS MATCHES !!!
            </div>

            
            
        </ContainerTelaInicial>

    )


}
export default TelaMatches
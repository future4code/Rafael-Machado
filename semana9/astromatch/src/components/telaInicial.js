import React from 'react'
import { useEffect, useState } from "react"
import logo from "../img/logo.png"
import { ContainerLogo, ContainerTelaInicial } from './styles'


const TelaInicial = (props) => {


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
            
            
            <div>
                FOTO IMPORTADA API
            </div>

            <div> 
                <button>DISLIKE</button> 
                <button>DEU MATCH</button> 
            </div>
            
        </ContainerTelaInicial>

    )

}
export default TelaInicial
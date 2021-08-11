import React from 'react'
import { useEffect, useState } from "react"
import logo from "../img/logo.png"
import { ContainerLogo, ContainerGeral } from './styles'


const TelaInicial = (props) => {


    return (
        <ContainerGeral>
            <header>
            <ContainerLogo>
            <img src={logo} alt="Logo da AstroMatch" />
            </ContainerLogo>

            <div>
                <button>Lista</button>
            </div>
            </header>
            
            
            <div>
                FOTO IMPORTADA API
            </div>

            <div> <button>DISLIKE</button> </div>

            <div> <button>DEU MATCH</button> </div>
            
        </ContainerGeral>

    )

}
export default TelaInicial
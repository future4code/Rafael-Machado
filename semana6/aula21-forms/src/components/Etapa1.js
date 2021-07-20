import React from "react"
import styled from 'styled-components'

class Etapa1 extends React.Component {
 
    

    render() {
        return (
            <div>
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <ul><li>Qual o seu nome?</li></ul>
                <input />
                <ul><li>Qual a sua idade?</li></ul>
                <input />
                <ul><li>Qual o seu email?</li></ul>
                <input />
                <ul><li>Qual a sua escolaridade?</li></ul>
                <button onClick={this.props.qualquerNome}>Próxima Etapa</button>
                
            </div>
        )
    }

}

export default Etapa1


import React from "react"

class Etapa2 extends React.Component {
    
    render() {
        return (
            <div>
                <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                <ul><li>Qual curso?</li></ul>
                <input />
                <ul><li>Qual o nome da Universidade/Curso?</li></ul>
                <input></input>
                <button onClick={this.props.irParaTelaFinal}>Próxima Etapa</button>
                <button onClick={this.props.irParaTelaInicial}>Voltar</button>
            </div>
        )
    }
}

export default Etapa2

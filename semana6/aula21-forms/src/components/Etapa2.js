import React from "react"

class Etapa2 extends React.Component {
    state = {
        telaAtual: "tela2"
    }

    irParaEtapa2 = () => {
        this.setState({ telaAtual: "tela2"})
    }

    irParaEtapa3 = () => {
        this.setState({ telaAtual: "tela3"})
    }
    
    irParaTelaFinal = () => {
        this.setState({ telaAtual: "telaFinal"})
    }

    render() {
        return (
            <div>
                <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                <ul><li>Qual curso?</li></ul>
                <input />
                <ul><li>Qual o nome da Universidade/Curso?</li></ul>
                <input />
                <button onClick={this.irParaTelaFinal}>Próxima Etapa</button>
            </div>
        )
    }

}

export default Etapa2

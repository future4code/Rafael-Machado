import React from "react"
import Etapa2 from "./Etapa2";

class Etapa1 extends React.Component {
    state = {
        telaAtual: "telaInicial"
    }

    renderizaTelaCorreta = () => {
        switch (this.state.telaAtual) {
            // case "telaInicial":
            //     return <Etapa1 />
            case "tela2":
                return <Etapa2 />;
            // case "tela3":
            //     return <Etapa3 />;
            // case "telaFinal":
            //     return <Final /> 
            default:
                return <p>Erro! Página não encontrada</p>           
           
}
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
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <ul><li>Qual o seu nome?</li></ul>
                <input />
                <ul><li>Qual a sua idade?</li></ul>
                <input />
                <ul><li>Qual o seu email?</li></ul>
                <input />
                <ul><li>Qual a sua escolaridade?</li></ul>
                <button onClick={this.irParaEtapa2}>Próxima Etapa</button>
                {this.renderizaTelaCorreta()}
            </div>
        )
    }

}

export default Etapa1


import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import styled from 'styled-components';
import Final from './components/Final';


export default class App extends React.Component {

  state = {
    telaAtual: "telaInicial"
}

// O botão no Etapa1 leva até a função irParaEtapa2, passamos essa função por props ...
// No botão, em Etapa1, temos onClick={this.props.qualquerNome} 

renderizaTelaCorreta = () => {
    switch (this.state.telaAtual) {
        case "telaInicial":
            return <Etapa1 qualquerNome={this.irParaEtapa2} />;
            // Neste return acima passamos a função irParaEtapa2
        case "tela2":
            return <Etapa2 irParaTelaFinal={this.irParaTelaFinal} 
                    irParaTelaInicial={this.irParaTelaInicial} />;
        // case "tela3":
        //     return <Etapa3 />;
        case "telaFinal":
            return <Final irParaTelaInicial={this.irParaTelaInicial} /> 
        default:
            return <p>Erro! Página não encontrada</p>           
       
}
}

irParaTelaInicial = () => {
  this.setState({ telaAtual: "telaInicial"})
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
        <h1>LabeForm</h1>
        <hr />
        {this.renderizaTelaCorreta()}
      </div>
    )

  } 
}


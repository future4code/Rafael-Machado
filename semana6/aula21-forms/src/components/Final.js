import React from 'react'

class Final extends React.Component {

    render() {
        return (
            <div>
                <h2>O FORMULÁRIO ACABOU</h2>
                <h3>Muito obrigado por participar! Entraremos em contato!</h3>          
                <hr/>
                <button onClick= {this.props.irParaTelaInicial} >Voltar para início</button>
            </div>
        )
    }

}
export default Final
import React from 'react'

class Lista extends React.Component {

    state = {
        usuarios: []
    
      }

    render() {
        return (
            <div>
                <h2>Usuários Cadastrados:</h2>

                <div>
           
                <p>Nome do Usuário</p>
                <button>Deletar</button>
                
                </div>
            
            </div>
        )
    }

}

export default Lista
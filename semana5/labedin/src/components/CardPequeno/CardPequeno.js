import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="scard-container">  
            
                <h4>{ props.tituloEmail }</h4>
                <p>{ props.email }</p>
                <h4>{ props.tituloEndereco }</h4>
                <p>{ props.endereco }</p>
            
        </div>
        
        
        
    )
}

export default CardPequeno;
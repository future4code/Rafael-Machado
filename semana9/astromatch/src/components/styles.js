import styled from "styled-components";

// COMPONENTE - TELA INICIAL

export const ContainerTelaInicial = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border: 1px solid black;
    height: 90vh;
    width: 400px;
    margin: 10px auto;
    background-color: white;
`


export const ContainerLogo = styled.div`
    display: flex;
    justify-content: space-evenly;

    img {
        width: 150px;
    }

    button {
        width: 50px;
        height: 30px;
        margin: 10px;
        
    }
`
export const ContainerFoto = styled.div`
    display: flex;
    justify-content: center;
    margin: 15px;
`

export const FotoPessoa = styled.img`
    height: 350px;

        
`

// COMPONENTE - APP

export const ContainerApp = styled.div`
    display: flex;
    flex-direction: column;
     
`

export const ButtonClear = styled.button`
    /* align-self: center; */
    width: 200px;
    
`
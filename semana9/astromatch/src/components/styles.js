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
    width: 350px;     
`

export const Container2Botoes = styled.div`
    display: flex;
    justify-content: space-around;
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

// COMPONENTE- TELA MATCHES

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-evenly;
       

    img {
        width: 150px;
    }

    button {
        width: 70px;
        height: 30px;
        margin: 10px;
        
    }
`
export const FotoPeq = styled.img`
    /* height: 50px; */
    width: 40px;
    border-radius: 20% ;
`
export const FotoENome = styled.div`
    display: flex;
    margin: 15px 10px;
    padding: 5px;
    justify-content: left;

    p {
        margin-left: 15px;;
    }
`



import styled from "styled-components";

// COMPONENTE - TELA INICIAL

export const ContainerTelaInicial = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border: 7px solid #f1eff2;
    border-radius: 5px;
    height: 90vh;
    width: 400px;
    margin: 10px auto;
    background-color: #222;
`

export const ContainerLogo = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: white;
    border-radius: 1px;

    img {
        width: 150px;
    }

    /* span {
        width: 2.25rem;
        height: 2.25rem;
        margin: 10px;
        cursor: pointer;
        color: #5D001E;
        
        
    } */
`

export const ContainerFoto = styled.div`
    display: flex;
    justify-content: center;
    margin: 15px;
`

export const FotoPessoa = styled.img`
    height: 350px;
    width: 350px;
    border-radius: 5px;
`

export const Container2Botoes = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 30px;
`

export const Nome = styled.div`
    font-size: 21px;
    font-weight: bold;
    color: #f1eff2;
    margin-left: 30px;
    margin-top: 340px;
    position: absolute;
`

export const Bio = styled.div`
    font-size: 15px;
    font-family: Verdana;
    color: #f1eff2;
    margin-left: 30px;
    margin-top: 365px;
    position: absolute;
    width: 340px;
    /* background-color: lightgrey; */
    
`




// COMPONENTE - APP

export const ContainerApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`


// COMPONENTE- TELA MATCHES

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: white;
       

    img {
        width: 150px;
    }

    span {
        /* width: 10px;
        height: 10px; */
        margin: 15px;
        cursor: pointer;
        color: #222;
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
        margin-left: 15px;
        color: #f1eff2;
    }
`



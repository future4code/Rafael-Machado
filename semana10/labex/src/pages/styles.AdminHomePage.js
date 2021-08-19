import styled from "styled-components";

// COMPONENTE - Admin Home Page

export const BotaoDetalheViagem = styled.div`
    cursor: pointer;

`
export const ContainerListaViagens = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #eee;
    border-radius: 5px;
    background-color: #222;
    font-size: 21px;
    width: 500px;
    color: #f1eff2;
    margin: 10px;
    padding: 10px;

    button {
        cursor: pointer;
    }
`

export const ContainerAdminHomePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
`
export const MenuBotoes = styled.div`
    padding: 10px;
    justify-content: space-around;

    button {
        margin: 10px;
        padding: 7px;
    }
`


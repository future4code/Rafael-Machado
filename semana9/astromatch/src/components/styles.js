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
    margin: 15px auto;
    background-color: #222;
`

export const ContainerLogo = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: white;
    border-radius: 1px;

    img {
        width: 150px;
        /* margin-right: 20px; */
    }

`

export const ContainerFoto = styled.div`
    display: flex;
    justify-content: center;
    margin: 15px;
`

export const FotoPessoa = styled.img`
    margin-top: 10px;
    height: 405px;
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
    margin-top: 380px;
    position: absolute;
`

export const Bio = styled.div`
    font-size: 15px;
    font-family: Verdana;
    color: #f1eff2;
    margin-left: 30px;
    margin-top: 410px;
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
    justify-content: space-around;
    background-color: white;
    border-radius: 1px;

    img {
        width: 150px;
        /* margin-right: 20px; */
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

// Estilização dos Botões - Material UI

export const styleBotaoApaga = {
    background: 'linear-gradient(45deg, #5D001E 30%, #501F3A 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 27,
    padding: '0 25px',
  }

export const styleInicial = {
    background: '#5D001E',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 30,
    width: 120,
    padding: '5px 1px',
    margin: '10px',
  }

  export const botaoSim = {
    background: '#0ca045',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 37,
    width: 110,
    padding: '5px 1px',
    margin: '5px',
  }

  export const botaoNao = {
    background: '#ea0e0e',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 37,
    width: 110,
    padding: '5px 1px',
    margin: '5px',
    // fontSize: 17, <<<<<
  }

  export const styleBotaoHome = {
    background: '#5D001E',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 30,
    width: 120,
    padding: '5px 1px',
    margin: '10px',
  }





import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import fotoRafael from "./Rafael.JPG";
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

// Estilos definidos aqui serão aplicados a toda a aplicação
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

  /* Outros estilos globais */
`;

const BlueTitle = styled.h2`
  color: #110c70;
  `


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <div className="page-section-container">
        <BlueTitle>Dados pessoais</BlueTitle>
        <CardGrande 
          imagem={fotoRafael}
          nome="Rafael Machado" 
          descricao="Oi, meu nome é Rafael. Sou formado em Gestão Empresarial e TI. Fui sócio/administrador de uma empresa que atuava no setor de comércio. 
          Gosto muito de tecnologia e estou buscando uma transição de carreira, por isso resolvi fazer a formação Web Full Stack na Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          tituloEmail="E-mail:" 
          email="rafaelmachado@zmail.com"
        />
      </div>  

      <div className="page-section-container">
        <CardPequeno 
          tituloEndereco="Endereço:" 
          endereco="Rua Labenu, 5579 - Rio de Janeiro - RJ"
        />
      </div>



      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;

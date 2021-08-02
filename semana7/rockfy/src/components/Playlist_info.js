// import axios from 'axios'
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    max-width: 370px;
    margin: 30px auto;
    overflow: auto;
    min-height: 300px;
    border: 3px solid #00D856;
    border-radius: 10px;
    padding: 30px;
    text-align: center;

    h2 {
        color: #eee;
        
    }
    
`

// const CardPlaylist = styled.div`
//     background-color: #444;
//     color: #eee;
//     display: flex;
//     justify-content: space-between;
//     /* border: 1px solid black; */
//     border-radius: 5px;
//     padding: 11px;
//     margin: 11px;
//     width: auto;
//     font-family: Montserrat;
//     align-items: center;
    
// `

const BotaoMudaPagina = styled.button`
    background-color: aqua; // #00D856;
    height: 40px;
    width: 100%;
    border-radius: 5px;
    color: black;
    font-weight: bold;
    font-size: 15px;
    font-family: Montserrat;
    cursor: pointer;
    border: none;
    padding: 0 10px;

    &:hover {
background-color: black;
color: #eee;
}
`
// const BotaoX = styled.button`
// background-color: #00D856;
// height: 25px;
// /* width: 100%; */
// border-radius: 5px;
// color: #444;
// font-weight: bold;
// font-size: 15px;
// font-family: Montserrat;
// cursor: pointer;
// border: none;
// padding: 0 10px;

// &:hover {
// background-color: black;
// color: #eee;
// }
// `


export default class PlaylistInfo extends React.Component {

    // componentDidMount() {
    //     this.getPlaylistTracks(playlistId)
    // }

    state = {
        tracks: []
      }

     

    

    render() {
        
       
        return (
            <Container>
                <div>
                           
                    <BotaoMudaPagina onClick={this.props.irParaLista}>Ir para índice de Playlists</BotaoMudaPagina>
                           
                </div>

                <h2>Detalhes da Playlist</h2>

            {/* {montaPlaylists} */}
            </Container>
        )
    }
}





// mostrarMusicas = (playlistId) => {
        
    //     const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`

    //     const headers = {
    //         headers: {
    //     Authorization: "rafael-machado-lovelace"
    //   }
    // }
    //     axios.get(url, headers)
    //     .then((res) => {
    //         // this.setState({ playlists: res })
    //         console.log("Resposta DETALHES", res) // ... Dentro de Data mostra as playlists cadastradas.
    //     })
    //     .catch((err) => {
    //         // alert("Ooops! Problema! Tente de novo")
            
    //         console.log("Erro", err)    
    //     })
    // }

        // deletarPlaylist = (id) => {
        //     const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        //     axios.delete(url, {
        //         headers: {
        //             Authorization: "rafael-machado-lovelace"
        //         }
        //     })
        //     .then((res) => {
        //         // console.log("Res - Deletar", res)
        //         alert("A Playlist foi deletada com sucesso")
        //         this.pegarLista()
        //     })
        //     .catch((err) => {
        //         // console.log("ERRO - Deletar", err)
        //         alert("Ocorreu um erro. Tente novamente.")
        //     })
        // }


import axios from 'axios'
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

const CardPlaylist = styled.div`
    background-color: #444;
    color: #eee;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid black; */
    border-radius: 5px;
    padding: 11px;
    margin: 11px;
    width: auto;
    font-family: Montserrat;
    align-items: center;
    
`
const BotaoMudaPagina = styled.button`
    background-color: #00D856;
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
const BotaoX = styled.button`
background-color: #00D856;
height: 25px;
/* width: 100%; */
border-radius: 5px;
color: #444;
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
const BotaoPlaylist = styled.div`
    cursor: pointer;
`



export default class Lista extends React.Component {

    componentDidMount() {
        this.pegarLista()
           
    }

    state = {
        playlists: [],
        playlistId: "",
        playlistTracks: [],
        playlistName: ""
      }

    pegarLista = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        const headers = {
            headers: {
        Authorization: "rafael-machado-lovelace"
      }
    }
        axios.get(url, headers)
        .then((res) => {
            this.setState({ 
                playlists: res.data.result.list
                
             })
            // console.log("Resposta PLAYLISTS", res.data) // ... Dentro de Data mostra as playlists cadastradas.
        })
        .catch((err) => {
            alert("Ooops! Problema! Tente de novo")
            
            // console.log("Erro", err)    
        })
    }

        deletarPlaylist = (id) => {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

            axios.delete(url, {
                headers: {
                    Authorization: "rafael-machado-lovelace"
                }
            })
            .then((res) => {
                // console.log("Res - Deletar", res)
                alert("A Playlist foi deletada com sucesso")
                this.pegarLista()
            })
            .catch((err) => {
                // console.log("ERRO - Deletar", err)
                alert("Ocorreu um erro. Tente novamente.")
            })
        }

        getPlaylistTracks = async (playlistId, playlistName) => {
            try {
                    const res = await axios
                            .get(
                                `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
                                {
                                    headers: {
                                        Authorization: "rafael-machado-lovelace"
                                    }
                                })
                            this.setState({ 
                                playlistTracks: res.data.result.tracks,
                                playlistName: playlistName
                            })
        
                    } catch (err) {
                        alert("Algo deu errado!")
                    }
                }

    render() {
        console.log(this.state.playlistTracks)
        // Para verificar se os usu??rios foram gravados no STATE, em then, no setState ({ usuarios: res.data }) 
        // N??s podemos dar um console.log dentro do render ...
        // console.log("Array de Playlists", this.state.playlists)
        // Agora precisamos transformar essa lista de objetos que tem ID e Nome em uma lista de COMPONENTES
        // Usando o MAP

            const montaPlaylists = this.state.playlists.map((playlist) => {
                return <CardPlaylist 
                    playlistId={playlist.id} 
                    key={playlist.id}> 
                            
                        <BotaoPlaylist onClick={() => {this.getPlaylistTracks(playlist.id, playlist.name)}}>
                            { playlist.name }
                        
                        </BotaoPlaylist>

                        <BotaoX onClick={ () => this.deletarPlaylist(playlist.id) } >X</BotaoX>
                    </CardPlaylist>
        })

        const mostraMusicas = this.state.playlistTracks.map((tracks) => {
            return <CardPlaylist 

                key={tracks.id}> 
                <div>
                    <h3>
                    {this.state.playlistName}
                    </h3>
                    <p>
                        {tracks.name}
                    </p>
                </div>
                        
                    
                </CardPlaylist>
    })

        // const tracks = this.state.tracks.map(track => {
        //     return <TrackCard
        //         key={track.id}
        //         trackName={track.name}
        //         artist={track.artist}
        //         url={track.url}
        //         />
        // })

        return (
            <Container>
                <div>
                           
                    <BotaoMudaPagina onClick={this.props.irParaCadastro}>Ir para Cadastro de Playlists</BotaoMudaPagina>
                           
                </div>

                <h2>Playlists</h2>

            {montaPlaylists}
            {/* {this.state.playlistTracks} */}
            <hr/>
            {mostraMusicas}
            <div>

            </div>
            </Container>

        )
    }

}

// onClick={ this.props.irParaPlaylistInfo }


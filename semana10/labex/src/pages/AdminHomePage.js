import { useHistory, useParams } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { BotaoDetalheViagem, ContainerListaViagens, 
ContainerAdminHomePage, MenuBotoes } from "./styles.AdminHomePage"
import { useProtectedPage } from "../hooks/hooks"

const AdminHomePage = () => {
    const [listTrips, setListTrips] = useState([])

    useProtectedPage()

    const history = useHistory()
    
    const goToCreateTripPage = () => {
        history.push("/admin/trips/create")
    }

    const goToTripDetailsPage = (id) => {
        history.push(`/admin/trips/${id}`)
    }

    const logout = () => {
        localStorage.setItem("token", null)
        alert("Você fez Logout")
        console.log(localStorage)
    }

    const getTrips = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-machado-lovelace/trips"
                
        axios.get(url)

        .then((response) => {
            // console.log("LISTA DE VIAGENS", response.data.trips)
            setListTrips(response.data.trips)
        })

        .catch ((error) => {
            console.log("DEU ERRO !!!", error.response)
        })
    }

    useEffect(() => {
        getTrips()
    }, [])


    const deleteTrip = (id) => {
    
        const token = localStorage.getItem("token")

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-machado-lovelace/trips/${id}`
                     
        axios.delete(url, 
            {
            headers: {
              auth: token
            }
          })
        .then((response) => {
            alert("A viagem foi deletada com sucesso")
            getTrips()
            
        }).catch ((error) => {
            console.log("DEU ERRO AO DELETAR !!!", error.response)
        })
    }

    const newListTrips = listTrips.map((trip) => {
        return (
            <ContainerListaViagens key={trip.id}>
            <BotaoDetalheViagem onClick={() => goToTripDetailsPage(trip.id)}>{trip.name}</BotaoDetalheViagem>
            <button onClick={() => deleteTrip(trip.id)}> Deletar </button>
            </ContainerListaViagens>
        )
    })

    return (
        <ContainerAdminHomePage>
            <p>AdminHomePage</p>
            <strong>Painel Administrativo</strong>
            <p>Para o administrador ver a lista de viagens e poder
                 deletá-las ou acessar o detalhe de cada uma delas </p>
        <MenuBotoes>
            <button onClick={history.goBack}> Voltar </button>
            <button onClick={goToCreateTripPage}> Criar Viagem </button>
            <button onClick={logout}> Logout </button>
        </MenuBotoes>
            {newListTrips}
            
        </ContainerAdminHomePage>

      )
}
 
export default AdminHomePage
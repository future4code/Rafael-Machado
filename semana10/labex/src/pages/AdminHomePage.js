import { useHistory } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { BotaoDetalheViagem } from "./styles.AdminHomePage"

const AdminHomePage = () => {
    const [listTrips, setListTrips] = useState([])

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

    useEffect(() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-machado-lovelace/trips"
                
        axios.get(url)

        .then((response) => {
            console.log("LISTA DE VIAGENS", response.data.trips)
            setListTrips(response.data.trips)
        })

        .catch ((error) => {
            console.log("DEU ERRO !!!", error.response)
        })
    }, [])

    const newListTrips = listTrips.map((trip) => {
        return (
            <div>
            <BotaoDetalheViagem onClick={() => goToTripDetailsPage(trip.id)}>{trip.name}</BotaoDetalheViagem>
            <button> Deletar </button>
            </div>
        )
    })

    return (
        <div>
            <p>AdminHomePage</p>
            <strong>Painel Administrativo</strong>
            <p>Para o administrador ver a lista de viagens e poder
                 deletá-las ou acessar o detalhe de cada uma delas </p>

            <button onClick={history.goBack}> Voltar </button>
            <button onClick={goToCreateTripPage}> Criar Viagem </button>
            <button onClick={logout}> Logout </button>
            {newListTrips}
            
        </div>

      )
}
 
export default AdminHomePage
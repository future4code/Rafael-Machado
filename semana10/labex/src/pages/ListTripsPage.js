import { useHistory } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

const ListTripsPage = () => {
    const [trips, setTrips] = useState([])
    console.log("VIAGENS", trips)
    const history = useHistory()

    const goToApplicationFormPage = () => {
        history.push("/trips/application")
    }

    useEffect(() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-machado-lovelace/trips"
                
        axios.get(url)

        .then((response) => {
            console.log("Deu certo!")
            setTrips(response.data.trips)
        })

        .catch ((error) => {
            console.log("DEU ERRO !!!", error.response)
        })
    }, [])

    const allTrips = trips.map((trips) => {
        return (
            <div key={trips.id}>
                <h3>{trips.name}</h3>
                <p>Descrição: {trips.description} </p>
                <p>Planeta: {trips.planet} </p>
                <p>Duração: {trips.durationInDays} </p>
                <p>Data: {trips.date} </p>
            </div>
        )
    })
 
    return (
        <div>
            <p>Lista de Viagens - ListTripsPage</p>

            <button onClick={history.goBack}> Voltar </button>
            <button onClick={goToApplicationFormPage}> Inscrever-se </button>

            {allTrips}
        </div>

      )
}
 
export default ListTripsPage



import { useHistory } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"

const ListTripsPage = () => {
    const history = useHistory()

    const goToApplicationFormPage = () => {
        history.push("/trips/application")
    }

    useEffect(() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-machado-lovelace/trips"
                
        axios.get(url)

        .then((response) => {
            console.log("Deu certo!", response.data.trips)
        })

        .catch ((error) => {
            console.log("DEU ERRO !!!", error.response)
        })
    }, [])


 



    return (
        <div>
            <p>Lista de Viagens - ListTripsPage</p>
            <button onClick={history.goBack}> Voltar </button>
            <button onClick={goToApplicationFormPage}> Inscrever-se </button>
        </div>

      )
}
 
export default ListTripsPage



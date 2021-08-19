import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"

// CUSTOM HOOK - Página Protegida
const useProtectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if(token === "null" || token === null) {
            console.log("Não está logado!!!")
            history.push("/login")
        }
    }, [history])
}



const TripDetailsPage = () => {
    const [trip, setTrip] = useState({})
    const [candidates, setCandidates] = useState([])
    const [approved, setApproved] = useState([])

    const history = useHistory()
    useProtectedPage()

    const params = useParams()
    
    useEffect(() => {
        const token = localStorage.getItem("token")

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-machado-lovelace/trip/${params.id}`
                
        axios.get(url, 
            {
            headers: {
              auth: token
            }
          })
        .then((response) => {
            console.log("FOI! Candidates", response.data.trip.candidates)
            setTrip(response.data.trip)
            setCandidates(response.data.trip.candidates)
        }).catch ((error) => {
            console.log("DEU ERRO !!!", error.response)
        })
    }, [])

        const newCandidates = candidates.map((person) => {
            return (
                <p>{person.name}</p>
            )
        })


    return (
        <div>
            <p>LabeX - TripDetailsPage</p>
            <p>Para o administrador ver o detalhe de uma viagem específica, 
               bem como os candidatos que aplicaram para ela</p>
            <p>Nome:</p>{trip.name}
            <p>Descrição:</p>{trip.description}
            <p>Planeta:</p>{trip.planet}
            <p>Duração:</p>{trip.durationInDays}
            <p>Data:</p>{trip.date}
            <button onClick={history.goBack}> Voltar </button>

            <h2>Candidatos Pendentes</h2>
            {newCandidates}

            <h2>Candidatos Aprovados</h2>

        </div>

      )
}
 
export default TripDetailsPage




import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { useProtectedPage } from "../hooks/hooks"

const TripDetailsPage = () => {
    const [trip, setTrip] = useState({})
    const [candidates, setCandidates] = useState([])
    const [approved, setApproved] = useState([])
    // console.log("CANDIDATOS APROVADOS", approved)

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
            console.log("FOI! TRIP DETAILS", response.data.trip)
            setTrip(response.data.trip)
            setCandidates(response.data.trip.candidates)
            setApproved(response.data.trip.approved)

        }).catch ((error) => {
            console.log("DEU ERRO !!!", error.response)
        })
    }, [])

    const decideCandidate = (candidateId, choice) => {
        const token = localStorage.getItem("token")
        console.log("ID CANDIDATO", candidateId)


        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-machado-lovelace/trips/${params.id}/candidates/${candidateId}/decide`
                     
        const body = {
            approve: choice
        }
        
        axios.put(url, body, 
            {
            headers: {
              auth: token
            }
          })
        .then((response) => {
            console.log("FOI! DECIDE CANDIDATES", response)
            

        }).catch ((error) => {
            console.log("DEU ERRO - DECIDE-CANDIDATE !!!", error.response)
        })

    }

    // const setApproved = () => {
    //     decideCandidate(candidateId, true)
    // }

    // const setNotApproved = () => {
    //     decideCandidate(false, candidateId)
    // }
    
    
        
        const newCandidates = candidates.map((person) => {
            return (
                <div key={person.id}>
                    <p>Nome: {person.name}</p>
                    <p>Profissão: {person.profession}</p>
                    <p>Idade: {person.age}</p>
                    <p>País: {person.country}</p>
                    <p>Texto de Candidatura: {person.applicationText}</p>

                    <button onClick={() => decideCandidate(person.id, true)}> Aprovar </button>
                    <button> Reprovar </button>
                </div>
            )
        })

        // MAP dos candidatos aprovados 
        // const newApproved = approved.map((approvedPerson) => {
        //     return (
        //         <div>
        //             <p>{approvedPerson.name}</p>
        //         </div>
        //     )
        // })


    return (
        <div>
            <p>LabeX - TripDetailsPage</p>
            <p>Para o administrador ver o detalhe de uma viagem específica, 
               bem como os candidatos que aplicaram para ela</p>
            <h2>Detalhes da Viagem</h2>   
            <h3>{trip.name}</h3>
            <p>Descrição: {trip.description} </p>
            <p>Planeta: {trip.planet} </p>
            <p>Duração: {trip.durationInDays} </p>
            <p>Data: {trip.date} </p>
            <button onClick={history.goBack}> Voltar </button>

            <h2>Candidatos Pendentes</h2>
            {newCandidates}

            <h2>Candidatos Aprovados</h2>

        </div>

      )
}
export default TripDetailsPage




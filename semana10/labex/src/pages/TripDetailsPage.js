import axios from "axios"
import { useEffect } from "react"
import { useHistory } from "react-router"

// CUSTOM HOOK - Página Protegida
const useProtectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if(token === "null" || token === null) {
            console.log("Não está logado!!!")
            history.push("/login")
        }
    }, [])
}

const TripDetailsPage = () => {
    const history = useHistory()
    useProtectedPage()
  // NÃO DEIXAR O ID FIXO !!! O ID TEM QUE VIR DO PATH DO ROUTER.

    useEffect(() => {
        const token = localStorage.getItem("token")

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-machado-lovelace/trip/X0H7FhHGSvbWEi61Z03d"
                
        axios.get(url, 
            {
            headers: {
              auth: token
            }
          })
        .then((response) => {
            console.log("Deu certo!", response.data)
        }).catch ((error) => {
            console.log("DEU ERRO !!!", error.response)
        })
    }, [])

    return (
        <div>
            <p>LabeX - TripDetailsPage</p>
            <p>Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela</p>
            <button onClick={history.goBack}> Voltar </button>
        </div>

      )
}
 
export default TripDetailsPage




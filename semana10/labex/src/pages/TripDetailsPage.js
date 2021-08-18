import { useHistory } from "react-router"

const TripDetailsPage = () => {
    const history = useHistory()

    return (
        <div>
            <p>LabeX - TripDetailsPage</p>
            <p>Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela</p>
            <button onClick={history.goBack}> Voltar </button>
        </div>

      )
}
 
export default TripDetailsPage




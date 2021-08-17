import { useHistory } from "react-router-dom"


const ListTripsPage = () => {
    const history = useHistory()

    const goToApplicationFormPage = () => {
        history.push("/trips/application")
    }



    return (
        <div>
            <p>Lista de Viagens - ListTripsPage</p>
            <button> Voltar </button>
            <button onClick={goToApplicationFormPage}> Inscrever-se </button>
        </div>

      )
}
 
export default ListTripsPage



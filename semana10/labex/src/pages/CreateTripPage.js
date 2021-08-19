import { useHistory } from "react-router-dom"
import { useProtectedPage } from "../hooks/hooks"

const CreateTripPage = () => {
    const history = useHistory()

    useProtectedPage()

    return (
        <div>
            <strong> CreateTripPage - CRIAR VIAGEM </strong>
            <p>Formulário para o administrador criar uma nova viagem</p>

            <button onClick={history.goBack}> Voltar </button>
            <button> Criar Viagem </button>
        </div>

      )
}
 
export default CreateTripPage

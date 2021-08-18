import { useHistory } from "react-router-dom"

const CreateTripPage = () => {
    const history = useHistory()

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

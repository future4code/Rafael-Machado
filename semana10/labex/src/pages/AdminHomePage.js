import { useHistory } from "react-router"

const AdminHomePage = () => {
    const history = useHistory()
    
    const goToCreateTripPage = () => {
        history.push("/admin/trips/create")
    }

    const goToTripDetailsPage = () => {
        history.push("/admin/trips/:id")
    }

    return (
        <div>
            <p>AdminHomePage</p>
            <strong>Painel Administrativo</strong>
            <p>Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas </p>

            <button onClick={history.goBack}> Voltar </button>
            <button onClick={goToCreateTripPage}> Criar Viagem </button>
            <button onClick={goToTripDetailsPage}> Provisório - Ir para Detalhes da Viagem </button>
            <button> Logout </button>
        </div>

      )
}
 
export default AdminHomePage
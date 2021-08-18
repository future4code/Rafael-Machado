import { useHistory } from "react-router"
// import TripDetailsPage from "./TripDetailsPage"

const AdminHomePage = () => {
    const history = useHistory()
    
    const goToCreateTripPage = () => {
        history.push("/admin/trips/create")
    }

    const logout = () => {
        localStorage.setItem("token", null)
        alert("Você fez Logout")
        console.log(localStorage)
    }

    return (
        <div>
            <p>AdminHomePage</p>
            <strong>Painel Administrativo</strong>
            <p>Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas </p>

            <button onClick={history.goBack}> Voltar </button>
            <button onClick={goToCreateTripPage}> Criar Viagem </button>
            <button onClick={logout}> Logout </button>
            {/* <TripDetailsPage /> */}
        </div>

      )
}
 
export default AdminHomePage
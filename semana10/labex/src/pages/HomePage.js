import { useHistory } from "react-router-dom"

const HomePage = () => {
    const history = useHistory()
    
    const goToListTripsPage = () => {
        history.push("/trips/list")
    }

    const goToLoginPage = () => {
        history.push("/login")
    }

    return (
        <div>
            <h1>LabeX - HomePage</h1>
            <button onClick={goToListTripsPage}> Ver Viagens </button>
            <button onClick={goToLoginPage}> Área de Admin </button>
        </div>
        

      )
}
 
export default HomePage
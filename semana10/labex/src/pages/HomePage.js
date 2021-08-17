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
            <p>LabeX - HomePage</p>
            <button onClick={goToListTripsPage}> Ver Viagens </button>
            <button onClick={goToLoginPage}> Área de Admin </button>
        </div>
        

      )
}
 
export default HomePage
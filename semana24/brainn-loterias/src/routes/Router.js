import { Switch, Route } from "react-router-dom"
import Megasena from "../pages/MegaSena/Megasena"
import Quina from "../pages/Quina/Quina"


const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Megasena />
            </Route>
            <Route exact path="/quina">
                <Quina />
            </Route>
        </Switch>
    )
}

export default Router

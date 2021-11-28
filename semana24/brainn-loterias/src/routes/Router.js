import { Switch, Route } from "react-router-dom"
import ErrorPage from "../pages/Error/ErrorPage"
import Homepage from "../pages/Home/Homepage"
import Lotofacil from "../pages/Lotofacil/Lotofacil"
import Quina from "../pages/Quina/Quina"

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/quina">
        <Quina />
      </Route>
      <Route exact path="/lotofacil">
        <Lotofacil />
      </Route>

      <Route>
          <ErrorPage />
        </Route>
    </Switch>
  )
}

export default Router

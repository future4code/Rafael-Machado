import { Switch, Route } from "react-router-dom"
import Homepage from "../pages/Home/Homepage"

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route>Errorpage</Route>
    </Switch>
  )
}

export default Router

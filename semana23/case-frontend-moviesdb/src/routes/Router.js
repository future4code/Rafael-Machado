import { Switch, Route } from "react-router-dom"
import DetailsPage from "../pages/DetailsPage/DetailsPage"
import Home from "../pages/Home/Home"


const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />    
            </Route>
            <Route exact path="/movie/:id">
                <DetailsPage />
            </Route>
            <Route>
                
            </Route>
        </Switch>
    )
}

export default Router

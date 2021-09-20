import { Switch, Route } from "react-router-dom"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostDetailsPage from "../pages/PostDetailsPage/PostDetailsPage"
import PostListPage from "../pages/PostListPage/PostListPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"

const Router = ({setRightButtonText}) => {
    return (
        
            <Switch>
                <Route exact path="/login">
                    <LoginPage setRightButtonText={setRightButtonText}/>
                </Route>

                <Route exact path="/cadastro">
                    <SignUpPage setRightButtonText={setRightButtonText} />
                </Route>
                    
                <Route exact path="/" component={PostListPage} />
                    
                <Route exact path="/detalhe/:id" component={PostDetailsPage} />
                 
                <Route component={ErrorPage} />
                
            </Switch>
        
    )
}

export default Router
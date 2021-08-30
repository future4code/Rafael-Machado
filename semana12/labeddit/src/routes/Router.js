import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "../components/Header/Header"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostDetailsPage from "../pages/PostDetailsPage/PostDetailsPage"
import PostListPage from "../pages/PostListPage/PostListPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>

                <Route exact path="/login" component={LoginPage} />
                    
                <Route exact path="/cadastro" component={SignUpPage} />
                    
                <Route exact path="/" component={PostListPage} />
                    
                <Route exact path="/detalhe/:id" component={PostDetailsPage} />
                 
                <Route component={ErrorPage} />
                
            </Switch>
        </BrowserRouter>
    )

}

export default Router
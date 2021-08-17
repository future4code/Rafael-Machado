import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from "styled-components"
import ApplicationFormPage from '../pages/ApplicationFormPage'
import HomePage from '../pages/HomePage'
import ListTripsPage from '../pages/ListTripsPage'
import LoginPage from '../pages/LoginPage'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: lightseagreen;
    font-family: Montserrat;
    text-align: center;
  }

`

const Router = () => {
    return (    
        <div>
            <BrowserRouter>    
            <GlobalStyle />
            <Switch>

                <Route exact path={"/"}>
                    <HomePage />    
                </Route>

                <Route exact path={"/trips/list"}>
                    <ListTripsPage />    
                </Route>

                <Route exact path={"/login"}>
                    <LoginPage />    
                </Route>

                <Route exact path={"/trips/application"}>
                    <ApplicationFormPage />    
                </Route>



            
            
            </Switch>
            </BrowserRouter>
        </div>

      )
}
 
export default Router;
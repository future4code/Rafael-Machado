import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from "styled-components"
import AdminHomePage from '../pages/AdminHomePage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import CreateTripPage from '../pages/CreateTripPage'
import HomePage from '../pages/HomePage'
import ListTripsPage from '../pages/ListTripsPage'
import LoginPage from '../pages/LoginPage'
import TripDetailsPage from '../pages/TripDetailsPage'

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

                <Route exact path={"/trips/application"}>
                    <ApplicationFormPage />    
                </Route>

                <Route exact path={"/login"}>
                    <LoginPage />    
                </Route>

                <Route exact path={"/admin/trips/list"}>
                    <AdminHomePage />    
                </Route>

                <Route exact path={"/admin/trips/create"}>
                    <CreateTripPage />    
                </Route>

                <Route exact path={"/admin/trips/:id"}>
                    <TripDetailsPage />    
                </Route>

            
            
            </Switch>
            </BrowserRouter>
        </div>

      )
}
 
export default Router;
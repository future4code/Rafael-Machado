import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import { createGlobalStyle } from "styled-components"

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

            
            
            </Switch>
            </BrowserRouter>
        </div>

      )
}
 
export default Router;
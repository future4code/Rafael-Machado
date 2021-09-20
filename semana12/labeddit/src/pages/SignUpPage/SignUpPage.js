import React from 'react'
import logo from "../../assets/labeddit-logo.png"
import { ScreenContainer } from './styled'
import SignUpForm from './SignUpForm'
import { LogoImage } from './styled'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'


const SignUpPage = ({setRightButtonText}) => {
  useUnprotectedPage()
  return (
    <ScreenContainer>
      <LogoImage src={logo}/>
      <SignUpForm setRightButtonText={setRightButtonText}/>
    </ScreenContainer>
  )
}

export default SignUpPage
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { StyledToolbar, StyledButton } from './styled'
import { goToLogin, goToPostList } from '../../routes/coordinator'
import { useHistory } from 'react-router'


const Header = ({rightButtonText, setRightButtonText}) => {
  const token = localStorage.getItem('token')
  const history = useHistory()


  const logout = () => {
    localStorage.removeItem("token")
  }


  const rightButtonAction = () => {
    // Se eu estiver LOGADO
    if (token){  
        logout()
        setRightButtonText("Login")
        goToLogin(history)
    // Se eu NÃO estiver Logado    
    } else {
        goToLogin(history)
    }
  }


  return (
      <AppBar position="static">
        <StyledToolbar>
            <StyledButton onClick={() => goToPostList(history)} color="inherit">LabEddit</StyledButton>
            <StyledButton onClick={rightButtonAction} color="inherit">{rightButtonText}</StyledButton>
        </StyledToolbar>
      </AppBar>
  )
}

export default Header
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { StyledToolbar, StyledButton } from './styled'
import { goToLogin, goToPostList } from '../../routes/coordinator'
import { useHistory } from 'react-router'

const Header = () => {
  const history = useHistory()

  return (
      <AppBar position="static">
        <StyledToolbar>
          <StyledButton onClick={() => goToPostList(history)} color="inherit">LabEddit</StyledButton>
          <StyledButton onClick={() => goToLogin(history)} color="inherit">Login</StyledButton>
        </StyledToolbar>
      </AppBar>
  )
}

export default Header
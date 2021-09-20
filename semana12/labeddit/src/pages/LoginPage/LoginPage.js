import { LogoImage, ScreenContainer, SignUpButtonContainer } from "./styled"
import logo from "../../assets/labeddit-logo.png"
import Button from '@material-ui/core/Button'
import LoginForm from "./LoginForm"
import { goToSignUp } from "../../routes/coordinator"
import { useHistory } from "react-router-dom"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

const LoginPage = ({setRightButtonText}) => {
    useUnprotectedPage()
    const history = useHistory()
    return (
        <ScreenContainer>
            <LogoImage src={logo} alt="logo-LabEddit" />
            <LoginForm setRightButtonText={setRightButtonText} />
            <SignUpButtonContainer>
                <Button
                    onClick={() => goToSignUp(history)}
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"secondary"}

                >
                    Cadastre-se
                </Button>
            </SignUpButtonContainer>

        </ScreenContainer>
    )
}

export default LoginPage
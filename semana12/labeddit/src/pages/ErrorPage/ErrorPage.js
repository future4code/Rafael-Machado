import { ErrorImage, ErrorPageContainer } from "./styled"
import error from "../../assets/error.png"


const ErrorPage = () => {
    return (
        <ErrorPageContainer>
            <ErrorImage src={error} />
            
        </ErrorPageContainer>
    )
}

export default ErrorPage
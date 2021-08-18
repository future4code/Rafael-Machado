import { useHistory } from "react-router"

const LoginPage = () => {
    const history = useHistory()

    const goToAdminHomePage = () => {
        history.push("/admin/trips/list")
    }

    return (
        <div>
            <p><b>PÁGINA DE LOGIN - LoginPage</b></p>
            <form action="/pagina" method="post">
                <div>
                    <label for="nome">E-mail: </label>
                    <input type="text" id="email" />
                </div>
                <div>
                    <label for="senha">Senha: </label>
                    <input type="senha" id="senha" />
                </div>
            </form>
            <button onClick={history.goBack}> Voltar </button>
            <button onClick={goToAdminHomePage}> Entrar </button>
        </div>

      )
}
 
export default LoginPage



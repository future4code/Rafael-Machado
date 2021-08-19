import { useHistory } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitLogin = () => {
        console.log(email, password)

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-machado-lovelace/login"
        const body = {
            email: email,
            password: password
        }

        axios.post(url, body)
            .then((response) => {
                console.log("Deu certo", response.data.token)
                localStorage.setItem("token", response.data.token) // <<<<< localStorage
                history.push("/admin/trips/list")

            }).catch((error) => {
                console.log("Deu merda!!!", error.response)
            })

    }

    return (
        <div>
            <p><b>PÁGINA DE LOGIN - LoginPage</b></p>
            
        <input
            placeholder="email"
            type="email"
            value={email}
            onChange={onChangeEmail}
            />
        <input 
        placeholder="password"
        type="password"
        value={password}
        onChange={onChangePassword}
        />

            <button onClick={history.goBack}> Voltar </button>
            <button onClick={onSubmitLogin}> Entrar </button>
        </div>

      )
}
 
export default LoginPage



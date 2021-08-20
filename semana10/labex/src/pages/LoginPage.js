import { useHistory } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const LoginPage = () => {
    const [form, setForm] = useState({email: "", password: ""})
    
    const history = useHistory()

    const onChange = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    // Abaixo formato mais extenso de se escrever a função onChange
    // const onChange = (event) => {
    //     setForm({...form, [event.target.name]: event.target.value})
    // }

    const onSubmitLogin = (event) => {
       
        event.preventDefault() // <<<<<<<<<<
        
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-machado-lovelace/login"
        

        axios.post(url, form)
            .then((response) => {
                localStorage.setItem("token", response.data.token) // <<<<< localStorage
                history.push("/admin/trips/list")

            }).catch((error) => {
                alert("Erro! Email ou senha podem estar incorretos!" , error.response)
            })

    }

    return (
        <div>
            <p><b>PÁGINA DE LOGIN - LoginPage</b></p>

        <form onSubmit={onSubmitLogin}> {/* <<<<< // */}
        
        <input
            name={"email"}
            placeholder="email"
            type="email"
            value={form.email}
            onChange={onChange}
            required
            />
        <input
            name={"password"} 
            placeholder="senha"
            type="password"
            value={form.password}
            onChange={onChange}
            required
            pattern={"^.{5,}"}
            title={"Sua senha deve ter no mínimo 5 caracteres"}
            />

            <button> Entrar </button> {/* <<<<< // */}
            
        </form>
        <button onClick={history.goBack}> Voltar </button>
        
        </div>
      )
}
 
export default LoginPage



import { useHistory } from "react-router-dom"
import axios from "axios"
import { useForm } from "../hooks/hooks"

const LoginPage = () => {
    const {form, onChange, clearFields} = useForm({email: "", password: ""})
    // const [form, setForm] = useState({email: "", password: ""})  <<<< Sem CUSTOM HOOK
    
    const history = useHistory()

    // const onChange = (event) => {             <<<< Sem CUSTOM HOOK
    //     const { name, value } = event.target
    //     setForm({ ...form, [name]: value })
    // }

    // Abaixo formato mais extenso de se escrever a função onChange   <<<< Sem CUSTOM HOOK
    // const onChange = (event) => {
    //     setForm({...form, [event.target.name]: event.target.value})
    // }

    const onSubmitLogin = (event) => {
       
        event.preventDefault() // <<<<<<<<<<
        
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-machado-lovelace/login"
        

        axios.post(url, form)
            .then((response) => {
                localStorage.setItem("token", response.data.token) // <<<<< localStorage
                clearFields()
                history.push("/admin/trips/list")

            }).catch((error) => {
                alert("Erro! Email ou senha podem estar incorretos!" , error.response)
            })

    }

    return (
        <div>
            <h2>PÁGINA DE LOGIN</h2>

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



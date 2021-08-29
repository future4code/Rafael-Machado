import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

// HOOK - Proteção de Páginas Privadas (Admin)
export const useProtectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if(token === "null" || token === null) {
            history.push("/login")
        }
    }, [history])
}

// HOOK - Formulário de Login
export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChange = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }
    
    // Limpa os campos após Login
    const clearFields = () => { 
        setForm(initialState)
    }

    return {form, onChange, clearFields}
}